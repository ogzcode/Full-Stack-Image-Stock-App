import { FaTrash } from "react-icons/fa";

function Masonary({ img }) {
    return (
        <div className="masonary relative mb-[30px] border-[4px] border-white overflow-hidden rounded transition">
            <img src={img} alt="" className="w-full h-full object-fill" />
            <div className="masonary-bottom absolute bottom-0 left-0 w-full bg-black/60 py-[8px] px-[12px]">
                <h4 className="text-[16px] text-white uppercase">Title one goes here</h4>
            </div>
            <div className="masonary-hover opacity-0 invisible absolute top-0 left-0 bg-black/90 w-full h-full text-center">
                <div className="inside text-white pt-[2rem] lg:pt-[8rem]">
                    <p className="text-center mb-4 cursor-pointer"><FaTrash className="text-[36px] border-white border-[1px] text-white rounded mx-auto p-2 transition hover:text-black hover:bg-white" /></p>
                    <h4 className="text-[16px] uppercase font-semibold">Title one goes here</h4>
                    <span className="text-[12px] font-light">25 Jan 2084</span>
                </div>
            </div>
        </div>
    );
}

export default Masonary;