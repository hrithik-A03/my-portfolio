-- Create the feedback table
CREATE TABLE public.feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit feedback
CREATE POLICY "Anyone can submit feedback"
ON public.feedback
FOR INSERT
WITH CHECK (true);

-- Only admins can view feedback
CREATE POLICY "Only admins can view feedback"
ON public.feedback
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update feedback
CREATE POLICY "Only admins can update feedback"
ON public.feedback
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete feedback
CREATE POLICY "Only admins can delete feedback"
ON public.feedback
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));