# Navbus — Setup Guide

## Step 1: Push to GitHub
Open Terminal, navigate to this folder, then run:

```bash
git init
git remote add origin https://github.com/Avrohom-navbus/navbus.git
git add .
git commit -m "Initial Navbus project setup"
git branch -M main
git push -u origin main --force
```

## Step 2: Create Supabase Project
1. Go to https://supabase.com and sign up with GitHub
2. 2. Click "New Project"
   3. 3. Name it: navbus
      4. 4. Choose a strong database password (save it!)
         5. 5. Select region closest to you
            6. 6. Wait ~2 minutes for it to spin up
              
               7. ## Step 3: Set up Supabase Database
               8. In your Supabase project, go to SQL Editor and run this:
              
               9. ```sql
                  -- Profiles table (extends Supabase auth)
                  create table profiles (
                    id uuid references auth.users on delete cascade primary key,
                    email text unique not null,
                    full_name text,
                    role text check (role in ('parent','child','driver','company_admin','super_admin')) default 'parent',
                    company_id uuid,
                    approved boolean default false,
                    created_at timestamp with time zone default now()
                  );

                  -- Companies table
                  create table companies (
                    id uuid default gen_random_uuid() primary key,
                    name text not null,
                    city text,
                    owner_id uuid references profiles(id),
                    features jsonb default '{"live_tracking":true,"driver_performance":true,"family_approval":true,"revenue_reports":true,"qr_codes":true,"route_editing":true,"export_data":true,"driver_dayoff":true,"bonus_system":false,"custom_branding":false}'::jsonb,
                    created_at timestamp with time zone default now()
                  );

                  -- Routes table
                  create table routes (
                    id uuid default gen_random_uuid() primary key,
                    company_id uuid references companies(id),
                    name text not null,
                    start_location text,
                    end_location text,
                    departure_time time,
                    driver_id uuid references profiles(id),
                    active boolean default false,
                    created_at timestamp with time zone default now()
                  );

                  -- Driver locations (real-time GPS)
                  create table driver_locations (
                    id uuid default gen_random_uuid() primary key,
                    driver_id uuid references profiles(id) unique,
                    route_id uuid references routes(id),
                    lat double precision,
                    lng double precision,
                    route_active boolean default false,
                    updated_at timestamp with time zone default now()
                  );

                  -- Family members
                  create table family_members (
                    id uuid default gen_random_uuid() primary key,
                    parent_id uuid references profiles(id),
                    child_name text not null,
                    route_id uuid references routes(id),
                    approved boolean default false,
                    created_at timestamp with time zone default now()
                  );

                  -- Driver day-off requests
                  create table dayoff_requests (
                    id uuid default gen_random_uuid() primary key,
                    driver_id uuid references profiles(id),
                    requested_date date not null,
                    status text check (status in ('pending','approved','denied')) default 'pending',
                    replacement_driver_id uuid references profiles(id),
                    created_at timestamp with time zone default now()
                  );

                  -- Enable realtime for driver locations
                  alter publication supabase_realtime add table driver_locations;

                  -- Row Level Security
                  alter table profiles enable row level security;
                  alter table driver_locations enable row level security;

                  create policy "Users can view own profile" on profiles for select using (auth.uid() = id);
                  create policy "Public driver locations visible to approved families" on driver_locations for select using (true);
                  create policy "Drivers can update own location" on driver_locations for all using (auth.uid() = driver_id);
                  ```

                  ## Step 4: Get API Keys
                  In Supabase → Settings → API:
                  - Copy "Project URL"
                  - - Copy "anon public" key
                   
                    - Then in this folder:
                    - 1. Copy `.env.local.example` → rename to `.env.local`
                      2. 2. Paste your URL and key
                        
                         3. ## Step 5: Run the App Locally
                         4. ```bash
                            npm install
                            npm run dev
                            ```
                            Open http://localhost:3000

                            ## Step 6: Deploy to Vercel
                            1. Go to https://vercel.com → sign up with GitHub
                            2. 2. Click "Add New Project" → import your navbus repo
                               3. 3. Add environment variables (same as .env.local)
                                  4. 4. Click Deploy → you get a live URL!
                                    
                                     5. ## You're live! 🚀
