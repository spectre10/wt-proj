import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/navbar";
// import { api } from "~/utils/api";

const Home: NextPage = () => {
    // const hello = api.example.hello.useQuery({ text: "from tRPC" });
    // const anime = api.anime.paradise.useQuery({ name: "One-piece" });
    // const ne = api.anime.gha.useQuery({});
    return (
        <>
            <Head>
                <title>Ghanshyam Thakkar</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <Navbar />
                <div className="flex flex-row gap-0 items-center justify-center h-screen w-full bg-[#FAE3D9] pb-20" id="about">
                    <div className="basis-1/2 flex items-center justify-center">
                        <img src="/20230201_163523.jpg" className="h-72 w-auto pl-80 rounded-lg"></img>
                    </div>
                    <div className="basis-1/2 mr-20 pr-40">
                        <p className="text-2xl font-light font-sans">Hey there, I am Ghanshyam. I am currently persuing Electronics and Communnications Engineering from L.D. College of Engineering. My interests lie in Software Development, Competitive Programming and Sports.</p>
                    </div>
                </div>
                <div className="h-[800px] bg-[#F0EDD4] border-black border-t-2 px-48" id="skills">
                    <h1 className="text-center mt-20 text-3xl font-sans mb-16">Following are the technologies and skills I am most familier with:</h1>
                    <div className="grid grid-cols-3">
                        <div className="text-center">
                            <h2 className="text-xl">Frontend:</h2>
                        </div>
                        <div className="">
                            <h2 className="text-center text-xl m-2">Backend:</h2>
                            <ul className="list-disc list-inside ml-[40%]">
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>MongoDB</li>
                                <li>Fasthttp (Go)</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl">Miscellaneous:</h2>
                            <ul></ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
