import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
import { signOutAction } from "@/actions/signout-action";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-primary-5 duration-300 ease-in-out transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full cursor-pointer focus:ring-2 ring-primary-10 focus:outline-none">
        <HiArrowRightStartOnRectangle className="h-5 w-5 text-primary-600" />
        <span className="font-josefineSans">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
