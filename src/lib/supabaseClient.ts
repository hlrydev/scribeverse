import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rftuwrzgxguwevacydwp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmdHV3cnpneGd1d2V2YWN5ZHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMjYyMzQsImV4cCI6MjA2ODkwMjIzNH0.biVbzq5CYxThHaekFJrbAkoPJG0-xnI8jcrhEVZC9XM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
