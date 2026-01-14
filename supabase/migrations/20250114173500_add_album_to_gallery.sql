-- Add album_id column to group images together
ALTER TABLE public.gallery_images 
ADD COLUMN album_id UUID DEFAULT gen_random_uuid();

-- Add index for faster album queries
CREATE INDEX idx_gallery_images_album_id ON public.gallery_images(album_id);
