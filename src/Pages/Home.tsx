import { url } from "inspector";
import { NavLink } from "react-router";
import { Ripple } from "./Back";

function Home() {
    return (
        <div>
            <Ripple></Ripple>
            <div className="container mx-auto mt-10 max-w-[1200px] flex-1 px-4">

                <div className="mb-[30px] md:mb-[64px]">
                    <div
                        className="flex items-center justify-center overflow-hidden rounded-[32px] bg-cover p-8 md:p-24 lg:rounded-[50px]"
                        style={{ backgroundImage: 'url(https://www.jagodana.com/hero-section-bg.svg)' }}
                    >
                        <div className="text-center">
                            <div className="relative inline-block ">
                                <NavLink
                                    className="rounded-full border-0 bg-white px-3 py-1 text-sm text-primary shadow-none"
                                    to="/contact"
                                >
                                    Contact us here
                                </NavLink>
                                <img
                                    src="https://www.jagodana.com/icon/arrow.svg"
                                    className="h-[50px] w-[50px]"
                                    height={50}
                                    width={50}
                                    alt="navigation arrow"
                                    title="navigation arrow"
                                />
                            </div>

                            <div data-aos="fade-up" className="flex flex-col items-center justify-center">
                                <h1 className="mx-auto mb-6 max-w-4xl text-center text-2xl font-bold capitalize leading-tight text-black md:text-[54px] ">
                                    Abhi Jagodana
                                </h1>
                                <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-black sm:text-xl ">
                                    Web Developer.
                                </p>
                                <NavLink
                                    className="max-h-6  rounded-[10px] bg-black bg-gradient-to-l from-black via-white/20 to-black text-sm font-semibold text-white shadow-lg px-6 py-6 flex justify-center items-center gap-2"
                                    to="/contact"
                                >
                                    Get Started
                                </NavLink>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;