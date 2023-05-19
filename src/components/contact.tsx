// import { type NextPage } from "next";
// import Link from "next/link";
import { useRef, useState } from "react";
import { api } from "~/utils/api";
// import { useMutation } from "@tanstack/react-query";

const Contact = () => {
    // const nameRef: any = useRef();
    // const emailRef: any = useRef();
    // const MessageRef: any = useRef();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [submit, setsubmit] = useState(false);
    // const { mutate, error } = api.anime.paradise.useMutation();
    // const emulateFetch = (_: any) => {
    //     return new Promise(resolve => {
    //         resolve([{ data: "ok" }]);
    //     });
    // };
    const { status, data, error, refetch } = api.anime.paradise.useQuery({ name: name, email: email, message: email }, {
        refetchOnWindowFocus: false,
        enabled: false
    })

    function isValidEmail(e: string) {
        return /\S+@\S+\.\S+/.test(e);
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!isValidEmail(email)) {
            alert("Invalid Email");
        } else {
            refetch();
            setsubmit(true);
        }
    }
    return (
        <>
            <div className="h-[800px] bg-[#E6FFFD] border-black border-t-2 px-72 text-center" id="contact">
                {(submit == false) ?
                    <section className="text-gray-700 body-font relative">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-12">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                    Contact Me
                                </h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                    Whatever you send will be end-to-end secure.
                                </p>
                            </div>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                onChange={(e) => {
                                                    setname(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label
                                                htmlFor="email"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                onChange={(e) => {
                                                    setemail(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label
                                                htmlFor="message"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                onChange={(e) => {
                                                    setmessage(e.target.value);
                                                }}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> : <div className="text-center mt-80"><h1 className="text-4xl">Thanks!</h1></div>}

            </div>
        </>
    );
};

export default Contact;
