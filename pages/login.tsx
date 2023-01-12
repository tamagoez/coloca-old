// 今作では、ログインぺージと新規登録ページを別のものとすることにする。
// 理由はあまりないが、loginとsignupでページを分けているサービスが多いため

import { LoginComponent } from "../components/Auth";

export default function LoginPage() {
  return (
    <main>
      <LoginComponent />
    </main>
  );
}
