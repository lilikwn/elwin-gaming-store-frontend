'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarMenuProps {
    title: string;
    icon: 'sidebar-menu-icon-1' |
            'sidebar-menu-icon-2' |
            'sidebar-menu-icon-3' |
            'sidebar-menu-icon-4' |
            'sidebar-menu-icon-5' |
            'sidebar-menu-icon-6' |
            'sidebar-menu-icon-7' ;
    href?: '/member/overview' |
            '/member/transactions' |
            '/member/edit-profile' |
            '/'
}

function SidebarMenu({title, icon, href= '/'}: SidebarMenuProps) {
    const pathName = usePathname();
    const isActive = pathName === href ? 'active' : '';
  return (
    <div className={`item mb-30 ${isActive}`}>
        <Image className="me-3" alt={icon} src={`/assets/icon/${icon}.svg`} width={25} height={25} />
        <p className="item-title m-0">
            <Link href="" className="text-lg text-decoration-none">{title}</Link>
        </p>
    </div>
  )
}

export default SidebarMenu