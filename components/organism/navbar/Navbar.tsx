import Link from "next/link"
import Image from "next/image"
import NavbarMenu from "./NavbarMenu"
import NavbarAuth from "./NavbarAuth"
import NavbarToggler from "./NavbarToggler"

function Navbar() {
  return (
    <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">
                    <Image src="/assets/icon/logo.svg" width={60} height={60} alt="Logo"/>
                </Link>
                <NavbarToggler />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                        <NavbarMenu title="Home" pathTarget="/"/>
                        <NavbarMenu title="Games" pathTarget="/games" />
                        <NavbarMenu title="Rewards" pathTarget="/rewards" />
                        <NavbarMenu title="Discover" pathTarget="/discover" />
                        <NavbarMenu title="Global Rank" pathTarget="/global-rank"/>
                        <NavbarAuth isLogin={true}/>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar