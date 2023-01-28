import { useRouter } from "next/router";
import { LoginComponent } from "../components/default";

export default function Login() {
  const router = useRouter();
  return (
    <>
      <LoginComponent signupbutton={() => router.push("/signup")} />
    </>
  );
}
