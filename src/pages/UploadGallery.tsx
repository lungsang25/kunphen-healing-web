import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Loader2, Plus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from '@/hooks/use-toast';

interface ImageFile {
  id: string;
  file: File;
  preview: string;
}

const UploadGallery = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [displayOrder, setDisplayOrder] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const categories = [
    'Center',
    'Events',
    'Treatments',
    'Staff',
    'Patients',
    'Herbs & Medicine',
    'Other'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newImages: ImageFile[] = [];
    let invalidFiles = 0;
    let oversizedFiles = 0;

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) {
        invalidFiles++;
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        oversizedFiles++;
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage: ImageFile = {
          id: `${Date.now()}-${Math.random().toString(36).substring(7)}`,
          file,
          preview: reader.result as string,
        };
        setImages((prev) => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    });

    if (invalidFiles > 0) {
      toast({
        title: 'Invalid files skipped',
        description: `${invalidFiles} file(s) were not images and were skipped`,
        variant: 'destructive',
      });
    }
    if (oversizedFiles > 0) {
      toast({
        title: 'Large files skipped',
        description: `${oversizedFiles} file(s) exceeded 10MB and were skipped`,
        variant: 'destructive',
      });
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const clearAllImages = () => {
    setImages([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (images.length === 0) {
      toast({
        title: 'Images required',
        description: 'Please select at least one image to upload',
        variant: 'destructive',
      });
      return;
    }

    if (!title.trim()) {
      toast({
        title: 'Title required',
        description: 'Please enter a title for the album',
        variant: 'destructive',
      });
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      let successCount = 0;
      // Generate a shared album_id for all images in this batch
      const albumId = crypto.randomUUID();
      
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        
        // Upload image to Supabase Storage
        const fileExt = img.file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `gallery/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('gallery-images')
          .upload(filePath, img.file);

        if (uploadError) {
          console.error(`Error uploading image ${i + 1}:`, uploadError);
          continue;
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('gallery-images')
          .getPublicUrl(filePath);

        // Insert record into gallery_images table with shared album_id
        const { error: insertError } = await supabase
          .from('gallery_images')
          .insert({
            title: title.trim(),
            description: description.trim() || null,
            image_url: publicUrl,
            category: category || null,
            display_order: displayOrder + i,
            album_id: albumId,
            is_visible: true,
          });

        if (insertError) {
          console.error(`Error saving image ${i + 1}:`, insertError);
          continue;
        }

        successCount++;
        setUploadProgress(Math.round(((i + 1) / images.length) * 100));
      }

      if (successCount === images.length) {
        toast({
          title: 'Success!',
          description: `Album "${title}" with ${successCount} image(s) uploaded successfully`,
        });
      } else if (successCount > 0) {
        toast({
          title: 'Partial success',
          description: `${successCount} of ${images.length} images uploaded to album "${title}"`,
        });
      } else {
        throw new Error('No images were uploaded');
      }

      // Reset form
      clearAllImages();
      setTitle('');
      setDescription('');
      setCategory('');
      setDisplayOrder(0);

    } catch (error) {
      console.error('Error uploading images:', error);
      toast({
        title: 'Upload failed',
        description: 'There was an error uploading your images. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-warm-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-burgundy-900 to-burgundy-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 animate-fade-in">
            Upload Gallery Image
          </h1>
          <p className="text-lg text-burgundy-100 max-w-xl mx-auto animate-fade-in animation-delay-200">
            Add new images to the gallery
          </p>
        </div>
      </section>

      {/* Upload Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            {/* Image Upload Area */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Images * {images.length > 0 && `(${images.length} selected)`}
                </label>
                {images.length > 0 && (
                  <button
                    type="button"
                    onClick={clearAllImages}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Clear all
                  </button>
                )}
              </div>
              
              {/* Drop zone */}
              <div
                className="border-2 border-dashed rounded-lg p-6 text-center transition-colors border-gray-300 hover:border-burgundy-400 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <Plus className="mx-auto h-10 w-10 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Click to select images (multiple allowed)
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG, WEBP up to 10MB each
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Image Previews - Simple grid */}
            {images.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Selected images:</h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                  {images.map((img) => (
                    <div key={img.id} className="relative aspect-square">
                      <img
                        src={img.preview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(img.id)}
                        className="absolute -top-1 -right-1 p-0.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Album Title */}
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Album Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a title for this album"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                required
              />
            </div>

            {/* Album Description */}
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter a description for this album (optional)"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Category */}
            <div className="mb-6">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category (applies to all images)
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
              >
                <option value="">Select a category (optional)</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Display Order */}
            <div className="mb-8">
              <label htmlFor="displayOrder" className="block text-sm font-medium text-gray-700 mb-2">
                Starting Display Order
              </label>
              <input
                type="number"
                id="displayOrder"
                value={displayOrder}
                onChange={(e) => setDisplayOrder(parseInt(e.target.value) || 0)}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Images will be numbered sequentially from this value
              </p>
            </div>

            {/* Progress bar */}
            {isUploading && uploadProgress > 0 && (
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-burgundy-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isUploading || images.length === 0}
              className="w-full flex items-center justify-center gap-2 bg-burgundy-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-burgundy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Uploading {images.length} image(s)...
                </>
              ) : (
                <>
                  <Upload size={20} />
                  Upload {images.length > 0 ? `${images.length} Image(s)` : 'Images'}
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UploadGallery;
