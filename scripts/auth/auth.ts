import { supabase } from "../../utils/supabaseClient";
import { errortoast } from "../../utils/toast";

export async function signInWithEmail(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) throw error;
  } catch (error: any) {
    // errortoast(error.message);
    throw new Error(error.message)
  }
}

export async function signInWithTwitter() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'twitter',
  })
    if (error) throw new Error(error.message)
}