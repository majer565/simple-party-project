import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ilnflkhbuleukiqzpphg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsbmZsa2hidWxldWtpcXpwcGhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3NDE0MjksImV4cCI6MjAwNDMxNzQyOX0.Q76tlIE_bwdDnSkebwbAztByqGQewtSi2nCsLuwz5-w";
const supabase = createClient(supabaseUrl, supabaseKey, {
  persistSession: false,
});

export { supabase };
