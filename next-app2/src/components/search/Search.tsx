"use client";
import { Dispatch, ChangeEvent, SetStateAction } from "react";
import { useI18n } from "../../app/locales/client";

interface PageProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  sort: () => void;
  sorted: boolean;
}

export default function Search({ search, setSearch, sort, sorted }: PageProps) {
  const t = useI18n();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <form className="flex w-full justify-center items-center gap-5 mt-4 p-4 h-[60px]">
      <input
        type="text"
        placeholder={t("searchPlaceHolder")}
        className="block w-1/3 p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none"
        onChange={handleChange}
        value={search}
      />
      <button
        type="button"
        onClick={sort}
        className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {sorted ? t("sortBtnText") : t("resetBtnText")}
      </button>
    </form>
  );
}
