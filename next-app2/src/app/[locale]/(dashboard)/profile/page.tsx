import { getDictionary } from "../../../../../messages/dictionaries";
import { Locale } from "../../../../../messages/i18n.config";
import ProfileForm from "../../../../components/profile/ProfileForm";

interface Props {
  params: {
    locale: Locale
  }
}
export default async function Profile({params: {locale}}: Props) {

  const dict = await getDictionary(locale);

  return <ProfileForm dict={dict.profilePage}/>;
}
