import { cookies } from "next/headers";

export default function LanguageToggle() {
  function toggle() {
    // lang = cookies().get("NEXT_LOCALE");
    cookies().set("NEXT_LOCALE", "ka");
  }
  return (
    <section>
      <select id="lang"> {/* onChange={toggle} */}
        <option value="ka">Georgian</option>
        <option value="en">English</option>
      </select>
    </section>
  );
}
