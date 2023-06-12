import { Link } from "react-router-dom";
import { FaArrowRight, FaTwitter, FaYoutube, FaCodepen, FaGithub } from "react-icons/fa";

import { useAuth } from "../../auth/core/Auth";

const iconStyle = `
grid place-content-center mx-[4px] 
text-white w-[36px] h-[36px] text-base border-[1px] 
border-white rounded-full transition cursor-pointer
`

function Nav() {
    const { logout } = useAuth();
    return (
        <div className="pt-[40px]">
            <div className="flex justify-between items-center px-10">
                <Link to="/profile" className="text-white text-[18px] pull-left">
                    <strong className="text-[32px]">IMAGE</strong> stock
                </Link>
                <div>
                    <ul className="flex">
                        <li className={`${iconStyle} hover:bg-white hover:text-sky-500`}><a href="#"><FaTwitter /></a></li>
                        <li className={`${iconStyle} hover:bg-white hover:text-red-500`}><a href="#"><FaYoutube /></a></li>
                        <li className={`${iconStyle} hover:bg-white hover:text-black`}><a href="#"><FaCodepen /></a></li>
                        <li className={`${iconStyle} hover:bg-white hover:text-black`}><a href="#"><FaGithub /></a></li>
                        <li className={`${iconStyle} hover:bg-red-500 hover:border-red-500`}
                            onClick={() => logout()}
                        >
                            <FaArrowRight />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;