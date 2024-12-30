import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ghxcdwcvrnlxldyfszmd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoeGNkd2N2cm5seGxkeWZzem1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4NzIxMjMsImV4cCI6MjA1MDQ0ODEyM30.tT0PILvpJw6KhtTo6sgCpD3lroNw0HnqRL3KX0xfFN0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
