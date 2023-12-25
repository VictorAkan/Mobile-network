'use client';
import { NAV_LINKS } from "@/constants"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { X } from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false as boolean)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <nav className="flexBetween max-container sticky top-0 bg-white padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/herologo.png" alt="logo" width={74} height={29} />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter
                            cursor-pointer pb-1.5 transition-all hover:font-bold">
                            {link.label}
                        </Link>
                    ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button 
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_blue"
                />
            </div>

            <div className="lg:hidden">
                <button onClick={toggleNavbar}>
                    {isOpen ? <X /> : <Image 
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            />}
                </button>
            </div>
            {/* <Image 
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            /> */}
        </nav>
        {isOpen && (
            <div className="sticky top-20 bg-white z-[30]">
                <ul className="h-full gap-12">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter
                            cursor-pointer pb-1.5 transition-all hover:font-bold">
                            {link.label}
                        </Link>
                    ))}
                </ul>
            </div>
        )}
        </>
    )
}

export default Navbar
