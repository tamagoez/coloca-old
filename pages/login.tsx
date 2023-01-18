// 今作では、ログインぺージと新規登録ページを別のものとすることにする。
// 理由はあまりないが、loginとsignupでページを分けているサービスが多いため

import { useRouter } from "next/router";
import { useEffect } from "react";
import { LoginComponent } from "../components/Auth";
import { getProfileBoolean } from "../scripts/auth/profile";
import { useSession } from "@supabase/auth-helpers-react";

export default function LoginPage() {
  const router = useRouter();
  const session = useSession();
  async function tempInit(session: any) {
    if (!session) return;
    const alinit = await getProfileBoolean();
    if (alinit) router.replace("/dashboard");
    else router.replace("/profile");
  }

  useEffect(() => {
    tempInit(session);
  }, [session]);
  return (
    <main>
      <LoginComponent />
    </main>
  );
}
