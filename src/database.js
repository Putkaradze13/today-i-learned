import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://siipeifkddtnaoxkmpvc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpaXBlaWZrZGR0bmFveGttcHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDcyMTUsImV4cCI6MjAxNTc4MzIxNX0.Y2sErHmLBn0Uxg9Zx-69pO3w6KnwVd1B2s7e7OElRjA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
