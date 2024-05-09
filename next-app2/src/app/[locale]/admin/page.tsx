import UserList from "../../../components/users/UserLIst";
import CreateUser from "../../../components/users/CreateUser";
import Link from "next/link";
import { getI18n, getScopedI18n } from "../../locales/server";

export default async function UsersPage() {
  const t = await getI18n();
  // const scopedT = await getScopedI18n("hello")
  return (
    <div className="px-5 flex flex-col w-full ">
      <span className="flex items-center gap-5">
        <Link href="/">
          <button>{t("hello")}</button>
        </Link>
        <CreateUser />
      </span>

      <UserList />
    </div>
  );
}
