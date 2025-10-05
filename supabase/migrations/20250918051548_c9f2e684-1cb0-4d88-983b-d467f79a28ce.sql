-- Clean up redundant RLS policies on Clients table
-- Drop the old redundant policies
DROP POLICY IF EXISTS "Admins can delete" ON public.Clients;
DROP POLICY IF EXISTS "Admins can update" ON public.Clients;
DROP POLICY IF EXISTS "Admins can view" ON public.Clients;
DROP POLICY IF EXISTS "Allow insert for everyone" ON public.Clients;

-- The policies using has_role function are already in place and more consistent
-- They remain: "Only admins can delete client submissions", "Only admins can update client submissions", 
-- "Only admins can view client submissions", and "Anyone can submit contact form"