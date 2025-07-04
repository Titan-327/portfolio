"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Hamburger from "@component/hamburger";
import CloseIcon from "@component/close";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
function Navbar() {
    const pathname = usePathname();
    const [isOpen, setOpen] = useState<boolean>(false);
    const [isLgScreen, setIsLgScreen] = useState<boolean>(false);
const router=useRouter()
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setIsLgScreen(windowWidth < 1000);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const divVariants = {
        visible: {
            opacity: 1,
            transition: { duration: 0.3 }
        },
        hidden: {
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    const active =
        "bg-gray-900 text-highlight font-bold block px-3 py-2 rounded-md text-base";
    const inactive =
        "text-info hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";

    function toggleNavbar() {
        setOpen((val) => !val);
    }

    function resetNavbar() {
        setOpen(false);
    }

    return (
        <>
            <nav className="bg-dark h-14 flex justify-between items-center px-3">
                <div className="text-white font-bold text-lg" style={{cursor:"pointer"}} onClick={function(){
router.push("/")
                }}>
                    <span className="text-info">Harshit </span>
                    <span className="text-highlight">Singh</span>
                </div>
                {isLgScreen ? (
                    <div onClick={toggleNavbar}>
                        {!isOpen ? <Hamburger /> : <CloseIcon />}
                    </div>
                ) : (
                    <div className="flex space-x-4">
                        <ul
                            className={pathname === "/" ? "text-highlight" : ""}
                        >
                            <Link href="/">Home</Link>
                        </ul>
                        <ul
                            className={
                                pathname === "/about" ? "text-highlight" : ""
                            }
                        >
                            <Link href="/about">About</Link>
                        </ul>
                        <ul
                            className={
                                pathname === "/projects" ? "text-highlight" : ""
                            }
                        >
                            <Link href="/projects">Projects</Link>
                        </ul>
                        <ul
                            className={
                                pathname === "/contacts" ? "text-highlight" : ""
                            }
                        >
                            <Link href="/contacts">Contacts</Link>
                        </ul>
                    </div>
                )}
            </nav>
            <motion.div
                variants={divVariants}
                animate={isOpen ? "visible" : "hidden"}
                className={`bg-dark ${isOpen ? "" : "hidden"}`}
            >
                <ul>
                    <li className={pathname === "/" ? active : inactive}>
                        <Link onClick={resetNavbar} href="/">
                            Home
                        </Link>
                    </li>
                    <li className={pathname === "/about" ? active : inactive}>
                        <Link onClick={resetNavbar} href="/about">
                            About
                        </Link>
                    </li>
                    <li className={pathname === "/projects" ? active : inactive}>
                        <Link onClick={resetNavbar} href="/projects">
                           Projects
                        </Link>
                    </li>
                    <li
                        className={pathname === "/contacts" ? active : inactive}
                    >
                        <Link onClick={resetNavbar} href="/contacts">
                            Contacts
                        </Link>
                    </li>
                </ul>
            </motion.div>
        </>
    );
}

export default Navbar;
