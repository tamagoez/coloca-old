import { defaultErrorToast } from "../../components/toast";
import { supabase } from "../../utils/supabaseClient";

export async function initUserOnce() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userid = user.id;
    const handleid = userid.replace(/-/g, "");
    const metadata = user.user_metadata;
    const { data, error } = await supabase
      .from("profiles")
      .insert({
        uuid: userid,
        name: metadata.name ?? "Guest",
        handleid: handleid,
        dishandleid: handleid,
        icon: metadata.avatar_url ?? "guest.svg",
      })
      .select("intid")
      .single();
    await setUserMetaData(data.intid);
    if (error) throw error;
  } catch (error) {
    defaultErrorToast("プロフィールの初期設定でエラーが発生しました");
  }
}

async function setUserMetaData(intid: string) {
  try {
    let {
      data: { user },
    } = await supabase.auth.getUser();
    let metadata = user.user_metadata;
    metadata.intid = intid;
    const { data, error } = await supabase.auth.updateUser({
      data: metadata,
    });
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
}
