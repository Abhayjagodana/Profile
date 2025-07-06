import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { Ripple } from "./Back";


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <div className="sticky top-5 z-50 w-full">
            {/* <Ripple></Ripple> */}
            <div
                className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-xl px-4 py-4 md:px-8 transition-all duration-300 ${scrolled ? "border border-black bg-white shadow-lg max-w-[700px] " : ""
                    }`}
            >
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    {/* <img
                        src="https://dynamic.design.com/asset/logo/f74d6d82-a95e-4eb3-acd2-d769b5ef81f3/logo-search-grid-2x?logoTemplateVersion=2&v=638739230354830000&text=ja&colorpalette=blue"
                        alt="company logo"
                        title="company logo"
                        width="36"
                        height="36"
                        className="object-contain max-h-[36px]"

                    /> */}
                    <p className=" capitalize text-2xl font-serif">Jagodana Abhi</p>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden gap-5 lg:flex ">


                    <NavLink
                        to="/Skill"
                        className=" font-semibold text-2xl font-serif"
                    >
                        Skill
                    </NavLink>

                    <NavLink to="/About" className="font-semibold text-2xl font-serif">
                        About
                    </NavLink>
                    <NavLink
                        to="/Education"
                        className="font-semibold text-2xl font-serif"
                    >
                        Education
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className=" font-semibold text-2xl font-serif"
                    >
                        Contact Us
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        <img
                            src="https://www.jagodana.com/icon/menu.svg"
                            alt="menu"
                            title="menu"
                            width="24"
                            height="24"
                            className="h-6 w-6"

                        />

                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="lg:hidden mx-auto mt-2 w-[95%] max-w-[1200px] rounded-xl border border-black bg-white p-4 shadow-md">
                    <div className="flex flex-col items-center gap-4">
                        <NavLink to="/About" className="font-semibold text-lg">
                            About
                        </NavLink>


                        <NavLink to="/Skill" className="font-semibold text-lg">
                            Skill
                        </NavLink>


                        <NavLink to="/Education" className="font-semibold text-lg">
                            Education
                        </NavLink>




                        <NavLink
                            to="/contact"
                            className=" font-semibold text-lg"
                        >
                            Contact Us
                        </NavLink>
                    </div>
                </div>
            )}


        </div>

    );
}

export default Header;
