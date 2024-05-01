// "use client";

import { getDictionary } from "../../../../../messages/dictionaries";
import { Locale } from "../../../../../messages/i18n.config";

// import { useTranslations } from "next-intl";
interface Props {
  params: {
    locale: Locale
  }
}
export default async function Contact({ params: { locale } }: Props) {
  // const t = useTranslations("Index");

  const { contactPage: dict } = await getDictionary(locale);

  return (
    <section className="w-full flex-grow flex p-10">
      <div className="flex justify-center items-center">
        <span className="flex flex-col w-1/2 gap-3">
          <h1 className="text-[30px]">{dict.title}</h1>
          <p className="">
            {dict.description}
          </p>
          <p>info@company.com</p>
          <p>+995 554 445 432</p>
        </span>
      </div>
      <div className="flex flex-col w-1/2">
        <form className="grid grid-cols-2 grid-rows-5 gap-5 gap-y-2 ">
          <span className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium">
              {dict.form.name}
            </label>
            <input
              type="text"
              id="name"
              className="h-10 p-2 border text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none"
            />
          </span>
          <span className="flex flex-col gap-1 ">
            <label htmlFor="company" className="font-medium">
              {dict.form.company}
            </label>
            <input
              type="text"
              id="company"
              className="h-10 p-2 border text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none"
            />
          </span>
          <span className="flex flex-col gap-1 ">
            <label htmlFor="email" className="font-medium">
              {dict.form.email}
            </label>
            <input
              type="text"
              id="email"
              placeholder="random@gmail.com"
              className="h-10  border text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none p-1"
            />
          </span>
          <span className="flex flex-col gap-1 ">
            <label htmlFor="number" className="font-medium">
              {dict.form.phone}
            </label>
            <input
              type="text"
              id="number"
              className="h-10 p-2 border text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none"
            />
          </span>
          <span className="flex flex-col gap-1 col-span-2 ">
            <label htmlFor="address" className="font-medium">
              {dict.form.address}
            </label>
            <input
              type="text"
              id="address"
              className="h-10 p-2 border text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none"
            />
          </span>
          <span className="flex flex-col gap-1 col-span-2 ">
            <label htmlFor="message" className="font-medium">
            {dict.form.message}
            </label>
            <textarea
              className=" h-[80px] p-2  border text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none resize-none"
              placeholder={dict.form.messagePlaceHolder}
            ></textarea>
          </span>
          <button className="col-span-2 place-self-start bg-[#ffba08] mt-6 p-3 rounded-lg hover:bg-[#f48c06]">
          {dict.form.btnText}
          </button>
        </form>
      </div>
    </section>
  );
}
