import { useState, useEffect, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight, X, Images } from 'lucide-react';
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
  album_id: string | null;
  created_at: string;
}

interface Album {
  album_id: string;
  title: string;
  description: string | null;
  category: string | null;
  cover_image: string;
  image_count: number;
  images: GalleryImage[];
  created_at: string;
}

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Group images by album_id
  const albums = useMemo(() => {
    const albumMap = new Map<string, GalleryImage[]>();
    
    images.forEach(img => {
      const albumId = img.album_id || img.id; // Use image id as album_id for single images
      if (!albumMap.has(albumId)) {
        albumMap.set(albumId, []);
      }
      albumMap.get(albumId)!.push(img);
    });

    const albumList: Album[] = [];
    albumMap.forEach((albumImages, albumId) => {
      // Sort images within album by display_order
      albumImages.sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));
      const firstImage = albumImages[0];
      albumList.push({
        album_id: albumId,
        title: firstImage.title,
        description: firstImage.description,
        category: firstImage.category,
        cover_image: firstImage.image_url,
        image_count: albumImages.length,
        images: albumImages,
        created_at: firstImage.created_at,
      });
    });

    return albumList.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, [images]);

  // Get unique categories from albums
  const allCategories = ['All', ...new Set(albums.map(album => album.category).filter(Boolean) as string[])];

  const filteredAlbums = albums.filter(album => {
    const matchesSearch = album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (album.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
    const matchesCategory = selectedCategory === 'All' || album.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Fetch images from Supabase
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from('gallery_images')
          .select('*')
          .eq('is_visible', true)
          .order('created_at', { ascending: false });

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

  const openModal = (album: Album) => {
    setSelectedAlbum(album);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAlbum(null);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedAlbum) return;
    const totalImages = selectedAlbum.images.length;
    
    if (direction === 'prev') {
      setCurrentImageIndex(prev => prev > 0 ? prev - 1 : totalImages - 1);
    } else {
      setCurrentImageIndex(prev => prev < totalImages - 1 ? prev + 1 : 0);
    }
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
  }, [isModalOpen, selectedAlbum]);

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

      {/* Gallery Grid - Albums */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredAlbums.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No albums found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredAlbums.map((album, index) => (
                <div
                  key={album.album_id}
                  className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer animate-fade-in hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => openModal(album)}
                >
                  <img
                    src={album.cover_image}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Image count badge */}
                  {album.image_count > 1 && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
                      <Images size={12} />
                      <span>{album.image_count}</span>
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-sm line-clamp-1">
                        {album.title}
                      </h3>
                      {album.category && (
                        <span className="text-white/80 text-xs">
                          {album.category}
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

      {/* Album Modal - Warm Tibetan-inspired theme */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 border-2 border-amber-200/50 shadow-2xl">
          {selectedAlbum && (
            <div className="relative flex flex-col h-full">
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23854d0e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
              
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-burgundy-800/80 text-amber-50 hover:bg-burgundy-900 transition-colors shadow-lg"
              >
                <X size={24} />
              </button>

              {/* Navigation buttons - only show if more than 1 image */}
              {selectedAlbum.image_count > 1 && (
                <>
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-burgundy-800/80 text-amber-50 hover:bg-burgundy-900 transition-colors shadow-lg"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-burgundy-800/80 text-amber-50 hover:bg-burgundy-900 transition-colors shadow-lg"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}

              {/* Image container with warm shadow */}
              <div className="flex-1 flex items-center justify-center p-6 pt-14">
                <div className="relative">
                  <img
                    src={selectedAlbum.images[currentImageIndex].image_url}
                    alt={selectedAlbum.title}
                    className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-xl ring-4 ring-amber-200/30"
                  />
                </div>
              </div>

              {/* Image info - warm gradient footer */}
              <div className="bg-gradient-to-r from-burgundy-800 via-burgundy-700 to-burgundy-800 p-6 text-amber-50 border-t-4 border-amber-400/30">
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-xl font-semibold text-amber-50 font-heading">
                      {selectedAlbum.title}
                    </DialogTitle>
                    {selectedAlbum.image_count > 1 && (
                      <span className="text-amber-200 text-sm">
                        {currentImageIndex + 1} / {selectedAlbum.image_count}
                      </span>
                    )}
                  </div>
                  {selectedAlbum.description && (
                    <DialogDescription className="text-amber-100/90 mt-2">
                      {selectedAlbum.description}
                    </DialogDescription>
                  )}
                </DialogHeader>
                {selectedAlbum.category && (
                  <span className="inline-block mt-3 px-3 py-1 bg-amber-600/80 text-amber-50 text-sm rounded-full border border-amber-400/30">
                    {selectedAlbum.category}
                  </span>
                )}
                
                {/* Thumbnail strip for albums with multiple images */}
                {selectedAlbum.image_count > 1 && (
                  <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                    {selectedAlbum.images.map((img, idx) => (
                      <button
                        key={img.id}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex 
                            ? 'border-amber-400 ring-2 ring-amber-400/50' 
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img.image_url}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
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
