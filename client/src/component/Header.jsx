import { FaGithub, FaTwitter, FaYoutube, FaCodepen, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../auth/core/Auth";

import SelectMenu from "./core/SelectMenu";

function Header() {
    const [value, setValue] = useState("");
    const { logout } = useAuth();

    const tags = ["#animal", "#city", "#human", "#sports", "#space"];

    const handleChange = (e) => {
        setValue(e);
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="relative z-[8] bg-[#000]/40 mb-[40px] pb-[40px]">
            <div className="pt-[40px]">
                <div className="flex justify-between items-center px-10">
                    <Link to="/profile" className="text-white text-[18px] pull-left">
                        <strong className="text-[32px]">IMAGE</strong> stock
                    </Link>
                    <div>
                        <ul className="flex">
                            <li className="grid place-content-center mx-[4px] text-white w-[36px] h-[36px] text-base border-[1px] border-white rounded-full transition cursor-pointer hover:bg-white hover:text-sky-500"><FaTwitter /></li>
                            <li className="grid place-content-center mx-[4px] text-white w-[36px] h-[36px] text-base border-[1px] border-white rounded-full transition cursor-pointer hover:bg-white hover:text-red-500"><FaYoutube /></li>
                            <li className="grid place-content-center mx-[4px] text-white w-[36px] h-[36px] text-base border-[1px] border-white rounded-full transition cursor-pointer hover:bg-white hover:text-black"><FaCodepen /></li>
                            <li className="grid place-content-center mx-[4px] text-white w-[36px] h-[36px] text-base border-[1px] border-white rounded-full transition cursor-pointer hover:bg-white hover:text-black"><FaGithub /></li>
                            <li className="grid place-content-center mx-[4px] text-white w-[36px] h-[36px] text-base border-[1px] border-white rounded-full transition cursor-pointer hover:bg-red-500 hover:border-red-500"
                                onClick={() => handleLogout()}
                            >
                                <FaArrowRight/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-[80px]">
                <div className="w-full">
                    <div className="row">
                        <div className="text-center">
                            <h2 className="mb-[32px] text-5xl font-bold text-white">Personal Stock Photo Site</h2>
                            <p className="w-2/3 mx-auto text-white font-light">
                                Hello! I am very excited to welcome 
                                you into my visual world.Welcome to my personal photography 
                                website, which I set up to creatively 
                                express my passion for photography.
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-[32px]">
                        <form action="#" method="post" className="subscribe-form">
                            <SelectMenu selectedValue={value} values={tags} onChange={handleChange} />
                            <button className="bg-white shadow-xl shadow-slate-900/30 text-black h-full py-1 rounded px-4 font-medium transition hover:scale-90">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Header;