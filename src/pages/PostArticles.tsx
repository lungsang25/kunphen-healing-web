import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Upload, Save, Eye, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

interface ArticleFormData {
  title: string;
  author: string;
  description: string;
  content: string;
  tags: string[];
  readTime: number;
  isPublished: boolean;
  image?: File;
}

const PREDEFINED_TAGS = [
  "Fundamentals", "Theory", "Diagnosis", "Herbal Medicine", "Meditation", 
  "Nutrition", "Clinical Practice", "Traditional Knowledge", "Botany", 
  "Mind-Body", "Spiritual Practice", "Prevention", "Technique", "Dietary Therapy"
];

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

const PostArticles = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTag, setCustomTag] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autoSaveStatus, setAutoSaveStatus] = useState<'saved' | 'saving' | 'error' | null>(null);

  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<ArticleFormData>({
    defaultValues: {
      isPublished: false,
      readTime: 5
    }
  });

  const watchedContent = watch('content', '');
  const watchedTitle = watch('title', '');

  // Auto-calculate read time
  useEffect(() => {
    if (watchedContent) {
      const calculatedTime = calculateReadTime(watchedContent);
      setValue('readTime', calculatedTime);
    }
  }, [watchedContent, setValue]);

  // Auto-save functionality
  useEffect(() => {
    const saveToLocalStorage = () => {
      const formData = {
        title: watchedTitle,
        content: watchedContent,
        selectedTags,
        timestamp: Date.now()
      };
      localStorage.setItem('articleDraft', JSON.stringify(formData));
      setAutoSaveStatus('saved');
    };

    const timer = setTimeout(() => {
      if (watchedTitle || watchedContent) {
        setAutoSaveStatus('saving');
        saveToLocalStorage();
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [watchedTitle, watchedContent, selectedTags]);

  // Restore from localStorage
  useEffect(() => {
    const savedDraft = localStorage.getItem('articleDraft');
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        setValue('title', parsed.title || '');
        setValue('content', parsed.content || '');
        setSelectedTags(parsed.selectedTags || []);
      } catch (error) {
        console.error('Failed to restore draft:', error);
      }
    }
  }, [setValue]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image smaller than 5MB",
          variant: "destructive"
        });
        return;
      }

      setValue('image', file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  const addCustomTag = () => {
    if (customTag.trim() && !selectedTags.includes(customTag.trim())) {
      setSelectedTags([...selectedTags, customTag.trim()]);
      setCustomTag('');
    }
  };

  const uploadImageToSupabase = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from('article-images')
        .upload(fileName, file);

      if (error) throw error;

      const { data: publicUrlData } = supabase.storage
        .from('article-images')
        .getPublicUrl(fileName);

      return publicUrlData.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const onSubmit = async (data: ArticleFormData) => {
    if (selectedTags.length === 0) {
      toast({
        title: "Tags required",
        description: "Please select at least one tag",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let imageUrl = null;
      if (data.image) {
        imageUrl = await uploadImageToSupabase(data.image);
        if (!imageUrl) {
          throw new Error('Failed to upload image');
        }
      }

      const slug = generateSlug(data.title);

      const { error } = await supabase
        .from('articles')
        .insert([{
          title: data.title,
          author: data.author,
          description: data.description,
          content: data.content,
          tags: selectedTags,
          read_time: data.readTime,
          is_published: data.isPublished,
          slug,
          image_url: imageUrl
        }]);

      if (error) throw error;

      // Clear localStorage on success
      localStorage.removeItem('articleDraft');

      toast({
        title: "Article submitted successfully!",
        description: data.isPublished ? "Your article is now published" : "Your article is saved as draft"
      });

      navigate('/articles');
    } catch (error) {
      console.error('Error submitting article:', error);
      toast({
        title: "Submission failed",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'blockquote', 'code-block'],
      ['clean']
    ],
  };

  return (
    <div className="min-h-screen bg-warm-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/articles')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Button>
          
          <h1 className="text-4xl font-bold text-burgundy-900 mb-2">Submit New Article</h1>
          <p className="text-gray-600">Share your knowledge with the community</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form Fields */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <Label htmlFor="title">Article Title *</Label>
              <Input
                {...register('title', { 
                  required: 'Title is required',
                  minLength: { value: 10, message: 'Title must be at least 10 characters' },
                  maxLength: { value: 255, message: 'Title must be less than 255 characters' }
                })}
                placeholder="Enter article title"
                className="mt-1"
              />
              {errors.title && (
                <p className="text-destructive text-sm mt-1">{errors.title.message}</p>
              )}
            </div>

            {/* Author */}
            <div>
              <Label htmlFor="author">Author *</Label>
              <Input
                {...register('author', { 
                  required: 'Author is required',
                  minLength: { value: 2, message: 'Author must be at least 2 characters' },
                  maxLength: { value: 100, message: 'Author must be less than 100 characters' }
                })}
                placeholder="Enter author name"
                className="mt-1"
              />
              {errors.author && (
                <p className="text-destructive text-sm mt-1">{errors.author.message}</p>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <Label>Featured Image</Label>
              <div className="mt-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label 
                  htmlFor="image-upload"
                  className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-burgundy-500 transition-colors"
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="h-full w-full object-cover rounded-lg" />
                  ) : (
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Click to upload image</p>
                      <p className="text-xs text-gray-400">Max 5MB, JPG/PNG/WEBP</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Short Description *</Label>
              <Textarea
                {...register('description', { 
                  required: 'Description is required',
                  minLength: { value: 50, message: 'Description must be at least 50 characters' },
                  maxLength: { value: 300, message: 'Description must be less than 300 characters' }
                })}
                placeholder="Brief description of the article"
                className="mt-1 resize-none"
                rows={3}
              />
              {errors.description && (
                <p className="text-destructive text-sm mt-1">{errors.description.message}</p>
              )}
            </div>

            {/* Tags */}
            <div>
              <Label>Tags *</Label>
              <div className="mt-2 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {PREDEFINED_TAGS.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => selectedTags.includes(tag) ? removeTag(tag) : addTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedTags.includes(tag)
                          ? 'bg-burgundy-700 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-burgundy-100'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Input
                    value={customTag}
                    onChange={(e) => setCustomTag(e.target.value)}
                    placeholder="Add custom tag"
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomTag())}
                  />
                  <Button type="button" onClick={addCustomTag} variant="outline">
                    Add
                  </Button>
                </div>

                {selectedTags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedTags.map(tag => (
                      <span
                        key={tag}
                        className="bg-burgundy-700 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="hover:bg-burgundy-600 rounded-full p-1"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Content Editor */}
            <div>
              <Label>Article Content *</Label>
              <div className="mt-1">
                <ReactQuill
                  theme="snow"
                  modules={quillModules}
                  value={watchedContent}
                  onChange={(content) => setValue('content', content)}
                  className="bg-white"
                  style={{ height: '300px', marginBottom: '50px' }}
                />
              </div>
              {errors.content && (
                <p className="text-destructive text-sm mt-1">{errors.content.message}</p>
              )}
            </div>
          </div>

          {/* Right Column - Preview & Actions */}
          <div className="space-y-6">
            {/* Auto-save Status */}
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center gap-2 text-sm">
                {autoSaveStatus === 'saving' && (
                  <>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-yellow-600">Saving...</span>
                  </>
                )}
                {autoSaveStatus === 'saved' && (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-600">Auto-saved</span>
                  </>
                )}
                {autoSaveStatus === 'error' && (
                  <>
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="text-red-600">Save failed</span>
                  </>
                )}
              </div>
            </div>

            {/* Reading Time */}
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <Label htmlFor="readTime">Estimated Reading Time</Label>
              <div className="flex items-center gap-2 mt-2">
                <Input
                  {...register('readTime', { min: 1 })}
                  type="number"
                  min="1"
                  className="w-20"
                />
                <span className="text-sm text-gray-500">minutes</span>
              </div>
            </div>

            {/* Publication Status */}
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <Label htmlFor="isPublished">Publish immediately</Label>
                <Switch
                  {...register('isPublished')}
                  onCheckedChange={(checked) => setValue('isPublished', checked)}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Turn off to save as draft
              </p>
            </div>

            {/* Form Actions */}
            <div className="space-y-3">
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    {watch('isPublished') ? 'Publish Article' : 'Save as Draft'}
                  </>
                )}
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/articles')}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default PostArticles;