import { Locale } from "../../../messages/i18n.config";
import { getDictionary } from "../../../messages/dictionaries";
import Footer from "./Footer";

interface Props {
  locale: Locale;
}

export default async function FooterWrapper() {
  // const { footer: dict } = await getDictionary(locale);

  return (
    <section>
      <Footer />
    </section>
  );
}
