// 今作では、ログインぺージと新規登録ページを別のものとすることにする。
// 理由はあまりないが、loginとsignupでページを分けているサービスが多いため

import { SignupComponent } from "../components/Auth";

export default function SignupPage() {
  return (
    <main>
      <SignupComponent />
    </main>
  );
}
