
CREATE TABLE public.contracts (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid,
  inquilino_id uuid,
  data_inicio date,
  data_fim date,
  valor_final numeric,
  status text,
  created_at timestamp without time zone DEFAULT now(),
  CONSTRAINT contracts_pkey PRIMARY KEY (id),
  CONSTRAINT contracts_inquilino_id_fkey FOREIGN KEY (inquilino_id) REFERENCES public.users(id),
  CONSTRAINT contracts_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.properties(id)
);
CREATE TABLE public.properties (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  tipo text,
  modalidade text,
  descricao varchar(255),
  provincia text,
  municipio varchar(50),
  bairro varchar(50),
  preco numeric,
  user_id uuid,
  fotos jsonb,
  documentos jsonb,
  created_at timestamp without time zone DEFAULT now(),
  CONSTRAINT properties_pkey PRIMARY KEY (id),
  CONSTRAINT properties_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE TABLE public.users (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  tipo text CHECK (tipo = ANY (ARRAY['proprietario'::text, 'intermediario'::text, 'inquilino'::text])),
  bilhete_identidade varchar(20) NOT NULL,
  telefone varchar(20) NOT NULL,
  email varchar(100) NOT NULL,
  provincia text,
  municipio varchar(255),
  comuna varchar(255),
  bairro varchar(255),
  created_at timestamp without time zone DEFAULT now(),
  CONSTRAINT users_pkey PRIMARY KEY (id)
);