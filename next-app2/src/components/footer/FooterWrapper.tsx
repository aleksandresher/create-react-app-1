import { Locale } from "../../../messages/i18n.config";
import { getDictionary } from "../../../messages/dictionaries";
import Footer from "./Footer";

interface Props {
  locale: Locale;
}

export default async function FooterWrapper({ locale }: Props) {
  const { footer: dict } = await getDictionary(locale);

  return (
    <section className="flex justify-end items-center pr-8 gap-4">
      <Footer
        home={dict.home}
        about={dict.about}
        products={dict.products}
        contact={dict.contact}
        security={dict.security}
        terms={dict.termsPrivacy}
      />
    </section>
  );
}
