import jatranslate from "../translate/ja/auth.json";
import Link from "next/link";
let trtext = jatranslate;
import {
  signInWithDiscord,
  signInWithEmail,
  signInWithGoogle,
  signInWithTwitter,
} from "../scripts/auth/auth";
import { toast } from "react-toastify";
import { useRef } from "react";

export function LoginComponent({
  email,
  next,
}: {
  email?: string;
  next?: string;
}) {
  //  const toastId = useRef(null);
  async function loginFunc() {
    const resolveLogin = signInWithEmail(
      (document.getElementById("emailaddress")[0] as HTMLInputElement)?.value,
      (document.getElementById("password")[0] as HTMLInputElement)?.value
    );
    toast.promise(resolveLogin, {
      pending: "Logining...",
      error: {
        render({ data }) {
          // When the promise reject, data will contains the error
          return `${data}`;
        },
      },
      success: {
        render({ data }) {
          return `You are now ${data} !`;
        },
      },
    });
  }
  return (
    <>
      <div className="LoginComponent_Wrapper">
        <OAuthComponent />
        <input
          className="LoginComponent_Email"
          id="emailaddress"
          type="email"
        />
        <input
          className="LoginComponent_Password"
          id="password"
          type="password"
        />
        <button className="LoginComponent_Login" onClick={() => loginFunc()}>
          {trtext.login}
        </button>
        <Link href="/signup">
          <p>{trtext["signup"]}</p>
        </Link>
      </div>
    </>
  );
}

export function SignupComponent({
  email,
  next,
}: {
  email?: string;
  next?: string;
}) {
  return (
    <>
      <div className="LoginComponent_Wrapper">
        <OAuthComponent />
        <input className="LoginComponent_Email" type="email" />
        <input className="LoginComponent_Password" type="password" />
        <button className="LoginComponent_Login">{trtext.signup}</button>
        <Link href="/login">
          <p>{trtext["login"]}</p>
        </Link>
      </div>
    </>
  );
}

const OAuthComponent = () => {
  return (
    <div>
      <a onClick={() => signInWithTwitter()}>{trtext["login-with-twitter"]}</a>
      <a onClick={() => signInWithGoogle()}>{trtext["login-with-google"]}</a>
      <a onClick={() => signInWithDiscord()}>{trtext["login-with-discord"]}</a>
    </div>
  );
};
