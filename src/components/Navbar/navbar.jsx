import { Link } from "react-router-dom";
import LOGO from '../../assets/logo_white.png'

function Navbar() {
    return (
        <nav className="bg-white shadow-sm fixed-top w-full z-10 p-0  ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to={"/"}>
                                <img src={LOGO} alt="Logo HubStartup" width={60} />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                        <NavItem id={"features"} href={"/recursos"} label={"Recursos"} />
                        <NavItem id={"how-it-works"} href={"/como-funciona"} label={"Como Funciona"} />
                        <NavItem id={"pricing"} href={"/planos"} label={"Planos"} />
                        <NavItem id={"testimonials"} href={"/depoimentos"} label={"Depoimentos"} />
                        <NavItem id={"contact"} href={"/contato"} label={"Contato"} />
                    </div>
                    <div className="flex items-center">
                        <a href="/comece-agora" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Comece Agora
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

function NavItem({ id, href, label }) {
    return (
        <>
            <Link to={href}>
                <a id={id} className="nav-link text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">{label}</a>
            </Link>
        </>
    )
}