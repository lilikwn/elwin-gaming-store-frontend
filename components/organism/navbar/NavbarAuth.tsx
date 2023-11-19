import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

interface NavbarAuthProps {
    isLogin: boolean;
}

function NavbarAuth({isLogin}: NavbarAuthProps) {
  return (
    isLogin ? (
        <li className="nav-item my-auto dropdown d-flex">
            <div className="vertical-line d-lg-block d-none"></div>
            <div>
                <Link className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <Image src="/assets/img/avatar-1.png" className="rounded-circle" width={40} height={40} alt=""/>
                </Link>

                <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                    <Link className="dropdown-item text-lg color-palette-2" href="/member/overview">My Profile</Link>
                    <Link className="dropdown-item text-lg color-palette-2" href="">Wallet</Link>
                    <Link className="dropdown-item text-lg color-palette-2" href="/member/edit-profile">Account Setting</Link>
                    <Link className="dropdown-item text-lg color-palette-2" href="/sign-in">Log Out</Link>
                </ul>
            </div>
        </li>
    ) : (
        <li className="nav-item my-auto">
            <Link className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                href="/sign-in" role="button">Sign
                In</Link>
        </li>
    )
  )
}

export default NavbarAuth