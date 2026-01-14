import { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface GalleryImage {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  category: string | null;
  display_order: number | null;
  is_visible: boolean | null;
  created_at: string;
}

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique categories from images
  const allCategories = ['All', ...new Set(images.map(img => img.category).filter(Boolean) as string[])];

  const filteredImages = images.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (image.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));

  // Fetch images from Supabase
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from('gallery_images')
          .select('*')
          .eq('is_visible', true)
          .order('display_order', { ascending: true });

        if (error) throw error;
        setImages(data || []);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex: number;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImage, filteredImages]);

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-burgundy-700"></div>
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-burgundy-900 to-burgundy-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl text-burgundy-100 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Explore moments from Kunphen Tibetan Medical Center - our facilities, events, and the healing journey
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-burgundy-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-burgundy-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No images found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer animate-fade-in hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.image_url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-sm line-clamp-1">
                        {image.title}
                      </h3>
                      {image.category && (
                        <span className="text-white/80 text-xs">
                          {image.category}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-black/95 border-none">
          {selectedImage && (
            <div className="relative flex flex-col h-full">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image */}
              <div className="flex-1 flex items-center justify-center p-4 pt-12">
                <img
                  src={selectedImage.image_url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>

              {/* Image info */}
              <div className="bg-black/80 p-6 text-white">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-white">
                    {selectedImage.title}
                  </DialogTitle>
                  {selectedImage.description && (
                    <DialogDescription className="text-gray-300 mt-2">
                      {selectedImage.description}
                    </DialogDescription>
                  )}
                </DialogHeader>
                {selectedImage.category && (
                  <span className="inline-block mt-3 px-3 py-1 bg-burgundy-700 text-white text-sm rounded-full">
                    {selectedImage.category}
                  </span>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
