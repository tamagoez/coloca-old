import { supabase } from "../../utils/supabaseClient";
import { errortoast } from "../../utils/toast";

export async function signInWithEmail(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) throw error;
  } catch (error: any) {
    // errortoast(error.message);
    throw new Error(error.message);
  }
}
export async function signUpWithEmail(email: string, password: string) {
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email: "example@email.com",
      password: "example-password",
    });
    if (error) throw error;
  } catch (error: any) {
    // errortoast(error.message);
    throw new Error(error.message);
  }
}

let redirectUrl = "https://coloca.vercel.app";
if (typeof window !== "undefined") redirectUrl = location.hostname + "/profile";

export async function signInWithTwitter() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "twitter",
  });
  if (error) throw new Error(error.message);
}
export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) throw new Error(error.message);
}
export async function signInWithDiscord() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
  });
  if (error) throw new Error(error.message);
}
