import { supabase } from "../../utils/supabaseClient";
export async function getProfileBoolean() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userid = user.id;
    const { data, error } = await supabase
      .from("profiles")
      .select("")
      .eq("uuid", userid);
    if (error) throw error;
    return true;
  } catch (error: any) {
    return false;
  }
}
