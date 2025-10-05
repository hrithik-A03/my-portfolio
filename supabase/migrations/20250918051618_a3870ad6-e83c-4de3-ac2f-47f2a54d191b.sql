-- Clean up redundant RLS policies on Clients table (with correct case)
DROP POLICY IF EXISTS "Admins can delete" ON public."Clients";
DROP POLICY IF EXISTS "Admins can update" ON public."Clients";
DROP POLICY IF EXISTS "Admins can view" ON public."Clients";
DROP POLICY IF EXISTS "Allow insert for everyone" ON public."Clients";