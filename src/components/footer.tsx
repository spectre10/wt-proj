// import { type NextPage } from "next";

const Footer = () => {
    return (
        <>
            <div className="h-[400px] bg-[#F0F0F0] border-black border-t-2 px-72 text-center" id="contact">
                <div className="grid grid-cols-2 text-center">
                    <div>
                        <p className="mt-16 text-2xl mb-5">Connect with me:</p>
                        <ul className="list-disc list-inside text-xl inline-block text-left">
                            <li>
                                <a href="https://www.linkedin.com/in/ghanshyam-thakkar-8159661b7/" target="_blank" className="underline">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/spectre10" target="_blank" className="underline">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_g.007_/" target="_blank" className="underline">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>

                        <div
                            style={{
                                maxWidth: "100%",
                                listStyle: "none",
                                transition: "none",
                                overflow: "hidden",
                                width: 600,
                                height: 300
                            }}
                            className="mt-10"
                        >
                            <div
                                id="gmap-canvas"
                                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                            >
                                <iframe
                                    style={{ height: "100%", width: "100%", border: 0 }}
                                    // frameBorder={0}
                                    src="https://www.google.com/maps/embed/v1/place?q=L.D.+College+Of+Engineering,+Circular+Road,+University+Area,+Ahmedabad,+Gujarat,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                />
                            </div>
                            <a
                                className="embed-ded-maphtml"
                                href="https://www.bootstrapskins.com/themes"
                                id="authmaps-data"
                            >
                                premium bootstrap themes
                            </a>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "#gmap-canvas .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
