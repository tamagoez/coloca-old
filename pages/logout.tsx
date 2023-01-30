import { useEffect } from "react";
import { signOut } from "../scripts/auth/coloca";

export default function Logout() {
  useEffect(() => {
    signOut();
  }, []);
  return (
    <>
      <h1>Thanks for using!...</h1>
    </>
  );
}
