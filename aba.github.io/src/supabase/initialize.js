import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fgljkhecmioybtanadmr.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnbGpraGVjbWlveWJ0YW5hZG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkyMDIzNzgsImV4cCI6MTk4NDc3ODM3OH0.K35-USjYE2CAJcjgKcN6o2ulGf83bTBY7wJ6_gcE_MU"
export const supabase = createClient(supabaseUrl, supabaseKey)