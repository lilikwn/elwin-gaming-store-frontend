'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarMenuProps {
    title: string;
    pathTarget: string;
}

function NavbarMenu({title, pathTarget}: NavbarMenuProps) {
    const pathName = usePathname();
    const isActive = pathName === pathTarget
  return (
    <li className="nav-item my-auto">
        <Link className={`nav-link ${isActive ? 'active' : ''}`} aria-current="page" href={pathTarget}>
            {title}
        </Link>
    </li>
  )
}

export default NavbarMenu