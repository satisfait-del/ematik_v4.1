import { createClient } from '@supabase/supabase-js'

// Remplacez ces valeurs par vos clés Supabase
const SUPABASE_URL = 'https://votre-url.supabase.co' // Votre URL Supabase
const SUPABASE_KEY = 'votre-clé-api-publique'       // Votre clé API

// Créez une instance Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const testSupabase = async () => {
  try {
    // Test : récupérez les données d'une table (remplacez "orders" par le nom d'une table existante)
    const { data, error } = await supabase
      .from('orders') // Changez "orders" par une table de votre base
      .select('*')

    if (error) {
      console.error('Erreur Supabase :', error.message)
    } else {
      console.log('Données récupérées avec succès :', data)
    }
  } catch (error) {
    console.error('Erreur lors du test Supabase :', error)
  }
}

testSupabase()
