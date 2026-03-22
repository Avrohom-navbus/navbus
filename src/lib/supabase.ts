import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export type UserRole = 'parent' | 'child' | 'driver' | 'company_admin' | 'super_admin'

export interface Profile {
    id: string
    email: string
    full_name: string
    role: UserRole
    company_id?: string
    approved: boolean
    created_at: string
}

export interface Company {
    id: string
    name: string
    city: string
    owner_id: string
    created_at: string
    features: {
      live_tracking: boolean
      driver_performance: boolean
      family_approval: boolean
      revenue_reports: boolean
      qr_codes: boolean
      route_editing: boolean
      export_data: boolean
      driver_dayoff: boolean
      bonus_system: boolean
      custom_branding: boolean
    }
}

export interface Route {
    id: string
    company_id: string
    name: string
    start_location: string
    end_location: string
    departure_time: string
    driver_id?: string
    active: boolean
    stops: Stop[]
}

export interface Stop {
    id: string
    route_id: string
    name: string
    address: string
    order: number
    scheduled_time: string
}

export interface Driver {
    id: string
    profile_id: string
    company_id: string
    current_lat?: number
    current_lng?: number
    route_active: boolean
    active_route_id?: string
    compliance_score: number
    bonus_earned: number
}

export interface FamilyMember {
    id: string
    parent_id: string
    child_name: string
    route_id: string
    stop_id: string
    approved: boolean
}
