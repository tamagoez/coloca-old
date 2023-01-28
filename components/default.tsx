import { useEffect } from "react";
import {
  signInWithDiscord,
  signInWithEmail,
  signInWithGoogle,
  signInWithTwitter,
  signUpWithEmail,
} from "../scripts/auth/coloca";
import { toast } from "react-toastify";

function statuschange() {
  if (typeof window === "undefined") return;
  let savedata = {
    email: (document.getElementById("emailinput") as HTMLInputElement).value,
    password: (document.getElementById("passwordinput") as HTMLInputElement)
      .value,
  };
  sessionStorage.setItem("tempauthdata", JSON.stringify(savedata));
}
function replacedata() {
  if (typeof window === "undefined") return;
  const authdata = JSON.parse(sessionStorage.getItem("tempauthdata"));
  if (!authdata) return;
  (document.getElementById("emailinput") as HTMLInputElement).value =
    authdata.email;
  (document.getElementById("passwordinput") as HTMLInputElement).value =
    authdata.password;
}

function toaster(pending: string, process) {
  toast.promise(process, {
    pending: pending,
    error: {
      render({ data }) {
        // When the promise reject, data will contains the error
        return `${data}`;
      },
    },
    success: {
      render({ data }) {
        return `Succeed!: ${data}`;
      },
    },
  });
}

export const LoginComponent = ({ signupbutton }) => {
  useEffect(() => replacedata(), []);
  return (
    <>
      <style jsx>{`
        .Login_Component {
          display: flex;
          flex-flow: column;
          margin-left: 20px;
          margin-right: 20px;
        }
        a {
          cursor: pointer;
        }
      `}</style>
      <div className="Login_Component">
        <OAuth />
        <input type="email" id="emailinput" onChange={() => statuschange()} />
        <input
          type="password"
          id="passwordinput"
          onChange={() => statuschange()}
        />
        <a onClick={signupbutton}>アカウントをお持ちでありませんか？新規登録</a>
        <button
          onClick={() =>
            toaster(
              "Login...",
              signInWithEmail(
                (document.getElementById("emailinput") as HTMLInputElement)
                  .value,
                (document.getElementById("passwordinput") as HTMLInputElement)
                  .value
              )
            )
          }
        >
          ログイン
        </button>
      </div>
    </>
  );
};

export const SignupComponent = ({ signupbutton }) => {
  useEffect(() => replacedata(), []);
  return (
    <>
      <style jsx>{`
        .Login_Component {
          display: flex;
          flex-flow: column;
          margin-left: 20px;
          margin-right: 20px;
        }
        a {
          cursor: pointer;
        }
      `}</style>
      <div className="Login_Component">
        <OAuth />
        <input type="email" id="emailinput" onChange={() => statuschange()} />
        <input
          type="password"
          id="passwordinput"
          onChange={() => statuschange()}
        />
        <a onClick={signupbutton}>アカウントをお持ちですか？ログイン</a>
        <button
          onClick={() =>
            toaster(
              "Signup...",
              signUpWithEmail(
                (document.getElementById("emailinput") as HTMLInputElement)
                  .value,
                (document.getElementById("passwordinput") as HTMLInputElement)
                  .value
              )
            )
          }
        >
          新規登録
        </button>
      </div>
    </>
  );
};

const OAuth = () => {
  return (
    <>
      <style jsx>{`
        .OAuth_List {
          display: flex;
          flex-flow: column;
          margin-left: 20px;
          margin-right: 20px;
          padding-bottom: 40px;
        }
      `}</style>
      <div className="OAuth_List">
        <button onClick={() => signInWithGoogle()}>Google</button>
        <button onClick={() => signInWithTwitter()}>
          Twitter(なんかバグってる)
        </button>
        <button onClick={() => signInWithDiscord()}>Discord</button>
      </div>
    </>
  );
};
