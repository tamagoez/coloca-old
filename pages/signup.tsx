import { useRouter } from "next/router";
import { SignupComponent } from "../components/default";

export default function Login() {
  const router = useRouter();
  return (
    <>
      <SignupComponent signupbutton={() => router.push("/login")} />
    </>
  );
}
