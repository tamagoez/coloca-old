import jatranslate from "../translate/ja/auth.json";
import entranslate from "../translate/en/auth.json";
import { getLocalBDB } from "../utils/browserdb";
import Link from "next/link";
let trtext = jatranslate;
// Function("trtext = " + getLocalBDB("lang") + "translate");

export function LoginComponent({
  email,
  next,
}: {
  email?: string;
  next?: string;
}) {
  return (
    <>
      <div className="LoginComponent_Wrapper">
        <input className="LoginComponent_Email" type="email" />
        <input className="LoginComponent_Password" type="password" />
        <button className="LoginComponent_Login">{trtext.login}</button>
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
        <input className="LoginComponent_Email" type="email" />
        <input className="LoginComponent_Password" type="password" />
        <button className="LoginComponent_Login">{trtext.login}</button>
        <Link href="/login">
          <p>{trtext["login"]}</p>
        </Link>
      </div>
    </>
  );
}
