import { useSession } from "@supabase/auth-helpers-react";

export default function Profile() {
  const session = useSession();
  return (
    <>
      <h1>Profile</h1>
      <input id="username"></input>
      <input id="displayhandleid"></input>
      <input id="bio"></input>
      <button>保存</button>
    </>
  );
}
