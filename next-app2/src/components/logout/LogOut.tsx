"use client";
import { logout } from "../../app/actions";
import { useI18n } from "../../app/locales/client";

export default function LogOut() {
  const t = useI18n();
  return (
    <div className="flex justify-center items-center   bg-red-500 rounded-lg p-2">
      <button onClick={() => logout()} className="w-[80px]">
        {t("logout")}
      </button>
    </div>
  );
}
