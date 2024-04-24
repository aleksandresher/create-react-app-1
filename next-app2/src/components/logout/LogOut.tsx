import { logout } from "../../app/actions";

export default function LogOut({text}: {text:string}) {
  return (
    <div className="flex justify-center items-center   bg-red-500 rounded-lg p-2">
      <button onClick={() => logout()} className="w-[80px]">
        {text}
      </button>
    </div>
  );
}
