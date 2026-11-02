'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({href, children}) => {
    const pathname = usePathname();
    const isActive = href === pathname
    return <Link href={href}  className={
        isActive
          ? "text-blue-600 border-b-2 border-blue-600 font-bold"
          : "text-gray-700 hover:text-blue-500"
      }>{children}</Link>
};

export default NavLink;