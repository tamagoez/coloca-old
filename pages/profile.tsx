import { useSession } from "@supabase/auth-helpers-react";

export default function Profile() {
  const session = useSession();
  return (
    <>
      <h1>Profile</h1>
    </>
  );
}