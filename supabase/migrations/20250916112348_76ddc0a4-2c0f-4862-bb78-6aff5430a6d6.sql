-- First, drop the existing incorrect policies
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public."Clients";
DROP POLICY IF EXISTS "Enable user to delete" ON public."Clients";
DROP POLICY IF EXISTS "Enable user to select" ON public."Clients";
DROP POLICY IF EXISTS "Enable user to update" ON public."Clients";

-- Add a created_at timestamp if it doesn't exist
ALTER TABLE public."Clients" 
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW());

-- Add phone column if missing (since it's in the form)
ALTER TABLE public."Clients" 
ADD COLUMN IF NOT EXISTS phone TEXT;

-- Enable RLS if not already enabled
ALTER TABLE public."Clients" ENABLE ROW LEVEL SECURITY;

-- Create new appropriate policies

-- 1. Allow anyone to insert (for contact form submissions)
CREATE POLICY "Anyone can submit contact form" 
ON public."Clients" 
FOR INSERT 
WITH CHECK (true);

-- 2. Only authenticated users can view all submissions (for admin)
-- Note: For now, any authenticated user can view. You may want to implement proper admin roles later
CREATE POLICY "Authenticated users can view submissions" 
ON public."Clients" 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- 3. Only authenticated users can update submissions (for admin)
CREATE POLICY "Authenticated users can update submissions" 
ON public."Clients" 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

-- 4. Only authenticated users can delete submissions (for admin)
CREATE POLICY "Authenticated users can delete submissions" 
ON public."Clients" 
FOR DELETE 
USING (auth.uid() IS NOT NULL);