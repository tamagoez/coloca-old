import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { defaultInfoToast } from "../components/toast";
import { initUserOnce } from "../scripts/auth/init";

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const [session, setSession] = useState(null);
  useEffect(() => {
    setSession(supabase.auth.getSession());
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_IN") {
        initUserOnce();
        console.log("SIGNED_IN", session);
        defaultInfoToast(`${session.user.email} でログインしています`);
      }
      if (event == "SIGNED_OUT") {
        console.log("SIGNED_OUT", session);
        defaultInfoToast("ログアウトしました");
      }
    });
  }, [session]);
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <ToastContainer />
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
export default MyApp;
