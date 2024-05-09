import { getI18n } from "../../../locales/server";

export default async function Contact() {
  const t = await getI18n();

  return (
    <section className="w-full flex-grow flex p-10">
      <div className="flex justify-center items-center">
        <span className="flex flex-col w-1/2 gap-3">
          <h1 className="text-[30px]">{t("title")}</h1>
          <p className="">{t("description")}</p>
          <p>info@company.com</p>
          <p>+995 554 445 432</p>
        </span>
      </div>
      <div className="flex flex-col w-1/2">
        <form className="grid grid-cols-2 grid-rows-5 gap-5 gap-y-2 ">
          <span className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium">
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              className="h-10 p-2 border text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none"
            />
          </span>
          <span className="flex flex-col gap-1 ">
            <label htmlFor="company" className="font-medium">
              {t("company")}
            </label>
            <input
              type="text"
              id="company"
              className="h-10 p-2 border text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none"
            />
          </span>
          <span className="flex flex-col gap-1 ">
            <label htmlFor="email" className="font-medium">
              {t("email")}
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
              {t("mobile")}
            </label>
            <input
              type="text"
              id="number"
              className="h-10 p-2 border text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none"
            />
          </span>
          <span className="flex flex-col gap-1 col-span-2 ">
            <label htmlFor="address" className="font-medium">
              {t("address")}
            </label>
            <input
              type="text"
              id="address"
              className="h-10 p-2 border text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none"
            />
          </span>
          <span className="flex flex-col gap-1 col-span-2 ">
            <label htmlFor="message" className="font-medium">
              {/* {dict.form.message} */}
            </label>
            <textarea
              className=" h-[80px] p-2  border text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none resize-none"
              // placeholder={dict.form.messagePlaceHolder}
            ></textarea>
          </span>
          <button className="col-span-2 place-self-start bg-[#ffba08] mt-6 p-3 rounded-lg hover:bg-[#f48c06]">
            {t("btnText")}
          </button>
        </form>
      </div>
    </section>
  );
}
