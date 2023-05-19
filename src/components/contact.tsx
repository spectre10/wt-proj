// import { type NextPage } from "next";
// import Link from "next/link";
import { useState } from "react";
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
  const { refetch } = api.anime.paradise.useQuery(
    { name: name, email: email, message: email },
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  function isValidEmail(e: string) {
    return /\S+@\S+\.\S+/.test(e);
  }
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      alert("Invalid Email");
    } else if (name === "") {
      alert("Enter a Name");
    } else if (message === "") {
      alert("Enter a message");
    } else {
      await refetch();
      setsubmit(true);
    }
  };
  return (
    <>
      <div
        className="h-[800px] border-t-2 border-black bg-[#E6FFFD] px-72 text-center"
        id="contact"
      >
        {submit == false ? (
          <section className="body-font relative text-gray-700">
            <div className="container mx-auto px-5 py-24">
              <div className="mb-12 flex w-full flex-col text-center">
                <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
                  Contact Me
                </h1>
                <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                  Whatever you send will be end-to-end secure.
                </p>
              </div>
              <div className="mx-auto md:w-2/3 lg:w-1/2">
                <div className="-m-2 flex flex-wrap">
                  <div className="w-1/2 p-2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="text-sm leading-7 text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 p-2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        c GhanshyamlassName="text-sm leading-7 text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="text-sm leading-7 text-gray-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                        onChange={(e) => {
                          setmessage(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <button
                      className="mx-auto flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                      onClick={(event) => handleSubmit(event)}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="mt-80 text-center">
            <h1 className="text-4xl">Thanks! Will get to you shortly.</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
