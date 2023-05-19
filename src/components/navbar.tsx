// import { type NextPage } from "next";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="bg-gradient-to-l from-black to-gray-600 py-3 sticky top-0 z-50">
                <div className="mx-auto">
                    <div className="flex justify-between">
                        <div className="mx-20 mb-0.5 items-center font-serif text-2xl font-bold text-white">
                            <Link href={"/"}>Ghanshyam</Link>
                        </div>
                        <div className="mr-32 flex items-center justify-evenly rounded-lg border px-0.5 text-white">
                            <div className="rounded-md border border-transparent transition delay-75 ease-in-out hover:bg-white hover:text-gray-700">
                                <a
                                    href={"https://github.com/spectre10/wt-proj"}
                                    target="_blank"
                                    className="mx-7"
                                >
                                    GitHub
                                </a>
                            </div>
                            <div className="mx-1 rounded-md border border-transparent transition delay-75 ease-in-out hover:bg-white hover:text-gray-700">
                                <a href="#about">
                                    <div className="mx-7">About Me</div>
                                </a>
                            </div>
                            <div className="rounded-md border border-transparent transition delay-75 ease-in-out hover:bg-white hover:text-gray-700">
                                <Link href={"#skills"}>
                                    <div className="mx-7">Skills</div>
                                </Link>
                            </div>
                            <div className="rounded-md border border-transparent transition delay-75 ease-in-out hover:bg-white hover:text-gray-700">
                                <Link href={"#contact"}>
                                    <div className="mx-7">Contact</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
