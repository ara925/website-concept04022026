CREATE TABLE public.buyer_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  facility_types TEXT[] NOT NULL DEFAULT '{}',
  deal_size TEXT NOT NULL,
  geographies TEXT NOT NULL,
  additional_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.buyer_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit buyer registration"
  ON public.buyer_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);