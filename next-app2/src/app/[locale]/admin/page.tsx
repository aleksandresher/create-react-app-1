import UserList from "../../../components/users/UserLIst";
import CreateUser from "../../../components/users/CreateUser";

export default function UsersPage() {
  return (
    <div className="px-5 flex flex-col w-full ">
      <CreateUser />
      <UserList />
    </div>
  );
}
