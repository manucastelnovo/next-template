import Link from "next/link";

import { PowerIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";
import AcmeLogo from "../acme-logo";
import { logout } from "@/lib/session";
import { lato } from "@/ui/fonts";

export default function SideNav() {
  return (
    <div
      className={`${lato.className} text-white flex h-full flex-col px-3 py-4 md:px-2 bg-mainColor`}
    >
      <Link
        className="mb-2 flex h-10 items-end justify-start rounded-md p-4 md:h-16"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-mainColor md:block"></div>
        <form
          className="flex flex-row md:flex-col"
          action={async () => {
            "use server";
            await logout();
          }}
        >
          <Link
            href="/profile"
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-mainColor p-3 text-sm font-medium hover:bg-orange-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <Cog8ToothIcon className="w-6" />
            <div className="hidden md:block">Mi Perfil</div>
          </Link>
          <button
            type="submit"
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-mainColor p-3 text-sm font-medium hover:bg-orange-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Cerrar sesion</div>
          </button>
        </form>
      </div>
    </div>
  );
}
