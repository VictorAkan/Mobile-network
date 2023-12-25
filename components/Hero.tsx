'use client';
import Image from "next/image"
import Link from "next/link"
import Button from "./Button";

// use client;

const Hero = () => {
    return (
        <section className="max-container padding-container flex flex-col 
        gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            {/* left */}
            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <h4 className="text-2xl mt-10">Welcome to</h4>
                <h1 className="bold-51 text-4xl lg:text-xs lg:font-light font-bold lg:bold-88">NEWTIMEPLUG</h1>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">We Offer the best data and airtime topping up for all networks, 
                    cable subscription, power bill payment, printing of recharge cards, 
                    bulk SMS, and many other services.
                </p>

                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-2">
                        <Link className="text-blue-700 border-2 p-3 border-blue-700 rounded-md hover:bg-blue-700 hover:text-white" href="/">
                            Register
                        </Link>
                        <Link className="text-blue-700 border-2 p-3 border-blue-700 rounded-md hover:bg-blue-700 hover:text-white" href="/">
                            Login
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <Image src="/heroimg.png" alt="hero" width={900} height={900} />

                <div className="flex w-full flex-col gap-3 sm:flex-row">
                    <Button type="button" icon="" title="Download App" variant="btn_blue" />
                    <Button type="button" title="How we Work?" icon="/play.svg" variant="btn_white_text" />
                </div>
            </div>

            <div className="relative flex flex-1 items-start">
                <div className="relative visible lg:invisible z-20 w-[268px] flex-col gap-8 rounded-3xl bg-blue-900 px-7 py-8">
                    
                    <div className="flex flex-col">
                        <div className="flexBetween">
                            <p className="regular-16 text-gray-20">Network/Sim</p>
                            <Image src="/close.svg" alt="close" width={24} height={24} />
                        </div>
                        <p className="bold-20 text-white">MTN</p>
                    </div>

                        <div className="flexBetween">
                            <div className="flex flex-col">
                                <p className="regular-16 block text-gray-20">Data balance</p>
                                <p className="bold-20 text-white">2.50GB</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="regular-16 block text-gray-20">Airtime</p>
                                <p className="bold-20 text-white">130.00</p>
                            </div>
                        </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
