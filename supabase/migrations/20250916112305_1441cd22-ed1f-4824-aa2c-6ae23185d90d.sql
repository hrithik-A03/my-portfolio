-- First, let's drop the existing incorrect policies
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.clients;
DROP POLICY IF EXISTS "Enable user to delete" ON public.clients;
DROP POLICY IF EXISTS "Enable user to select" ON public.clients;
DROP POLICY IF EXISTS "Enable user to update" ON public.clients;

-- Rename the table to match the naming convention (lowercase)
ALTER TABLE public."Clients" RENAME TO clients;

-- Add a created_at timestamp if it doesn't exist
ALTER TABLE public.clients 
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW());

-- Enable RLS if not already enabled
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- Create new appropriate policies

-- 1. Allow anyone to insert (for contact form submissions)
CREATE POLICY "Anyone can submit contact form" 
ON public.clients 
FOR INSERT 
WITH CHECK (true);

-- 2. Only authenticated users can view all submissions (for admin)
CREATE POLICY "Authenticated users can view submissions" 
ON public.clients 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- 3. Only authenticated users can update submissions (for admin)
CREATE POLICY "Authenticated users can update submissions" 
ON public.clients 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- 4. Only authenticated users can delete submissions (for admin)
CREATE POLICY "Authenticated users can delete submissions" 
ON public.clients 
FOR DELETE 
USING (auth.role() = 'authenticated');