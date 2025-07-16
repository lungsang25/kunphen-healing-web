-- Create articles table
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  image_url TEXT,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  read_time INTEGER DEFAULT 5,
  is_published BOOLEAN DEFAULT false,
  slug VARCHAR(255) UNIQUE NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to published articles
CREATE POLICY "Anyone can view published articles" 
ON public.articles 
FOR SELECT 
USING (is_published = true);

-- Create policy for inserting articles (for now, anyone can insert - can be restricted later)
CREATE POLICY "Anyone can insert articles" 
ON public.articles 
FOR INSERT 
WITH CHECK (true);

-- Create policy for updating articles
CREATE POLICY "Anyone can update articles" 
ON public.articles 
FOR UPDATE 
USING (true);

-- Create policy for deleting articles
CREATE POLICY "Anyone can delete articles" 
ON public.articles 
FOR DELETE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_articles_updated_at
    BEFORE UPDATE ON public.articles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for article images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('article-images', 'article-images', true);

-- Create storage policies for article images
CREATE POLICY "Anyone can view article images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'article-images');

CREATE POLICY "Anyone can upload article images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'article-images');

CREATE POLICY "Anyone can update article images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'article-images');

CREATE POLICY "Anyone can delete article images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'article-images');