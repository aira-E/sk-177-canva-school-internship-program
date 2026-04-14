import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fake-supabase-url.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "fake-anon-key";

// We create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey);
