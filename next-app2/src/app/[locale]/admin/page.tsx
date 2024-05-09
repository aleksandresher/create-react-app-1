import UserList from "../../../components/users/UserLIst";
import CreateUser from "../../../components/users/CreateUser";
import Link from "next/link";

export default function UsersPage() {
  return (
    <div className="px-5 flex flex-col w-full ">
      <span className="flex items-center gap-5">
        <Link href="/">
          <button>Back to Home</button>
        </Link>
        <CreateUser />
      </span>

      <UserList />
    </div>
  );
}
