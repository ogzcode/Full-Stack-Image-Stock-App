import SearchWithTag from "./SearchWithTag.jsx";
import Nav from "./Nav.jsx";

function Header() {
    return (
        <div className="relative z-[8] bg-[#000]/40 mb-[40px] pb-[40px]">
            <Nav />
            <div className="pt-[80px]">
                <div className="w-full">

                    <div className="text-center">
                        <h2 className="mb-[32px] text-5xl font-bold text-white">Personal Stock Photo Site</h2>
                        <p className="w-2/3 mx-auto text-white font-light">
                            Hello! I am very excited to welcome
                            you into my visual world.Welcome to my personal photography
                            website, which I set up to creatively
                            express my passion for photography.
                        </p>
                    </div>

                    <SearchWithTag/>
                </div>
            </div>
        </div>
    );
}


export default Header;