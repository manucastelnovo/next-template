"use client";
import {
  UserGroupIcon,
  HomeIcon,
  Square3Stack3DIcon,
  BuildingStorefrontIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Inicio", href: "/dashboard/home", icon: HomeIcon },
  { name: "Vendedores", href: "/dashboard/sellers", icon: UserGroupIcon },
  {
    name: "Productos",
    href: "/dashboard/products",
    icon: Square3Stack3DIcon,
  },
  {
    name: "Mi Tienda",
    href: "/dashboard/store",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Datos",
    href: "/dashboard/data",
    icon: CircleStackIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-mainColor p-3 text-sm font-medium hover:bg-orange-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3
              ${pathname === link.href ? "bg-orange-100 text-black" : ""}`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
