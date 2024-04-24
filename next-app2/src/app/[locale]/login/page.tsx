import { getDictionary } from "../../../../messages/dictionaries";
import { Locale } from "../../../../messages/i18n.config";
import LoginForm from "../../../components/login/Login";

interface Props {
  params: {
    locale: Locale
  }
}
export default async function Login({params: {locale}}: Props) {

  const dict = await getDictionary(locale);

  return (
    <section className="flex justify-center items-center w-full h-screen ">
      <LoginForm dict={dict.loginPage}/>
    </section>
  );
}
