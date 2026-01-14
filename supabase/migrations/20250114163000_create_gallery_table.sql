-- Create gallery_images table
CREATE TABLE public.gallery_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category VARCHAR(100),
  display_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to visible images
CREATE POLICY "Anyone can view visible gallery images" 
ON public.gallery_images 
FOR SELECT 
USING (is_visible = true);

-- Create policy for inserting gallery images
CREATE POLICY "Anyone can insert gallery images" 
ON public.gallery_images 
FOR INSERT 
WITH CHECK (true);

-- Create policy for updating gallery images
CREATE POLICY "Anyone can update gallery images" 
ON public.gallery_images 
FOR UPDATE 
USING (true);

-- Create policy for deleting gallery images
CREATE POLICY "Anyone can delete gallery images" 
ON public.gallery_images 
FOR DELETE 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_gallery_images_updated_at
    BEFORE UPDATE ON public.gallery_images
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('gallery-images', 'gallery-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policies for gallery images
CREATE POLICY "Anyone can view gallery images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'gallery-images');

CREATE POLICY "Anyone can upload gallery images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'gallery-images');

CREATE POLICY "Anyone can update gallery images storage" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'gallery-images');

CREATE POLICY "Anyone can delete gallery images storage" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'gallery-images');
