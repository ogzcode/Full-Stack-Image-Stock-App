import { useState } from "react";
import { deleteImage } from "../../auth/core/request";

import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { FaTrash } from "react-icons/fa";
import Tags from "./Tags";


function MasonryCard({ data }) {
    const [show, setShow] = useState(false);
    const handleDelete = async () => {
        try {
            await deleteImage(data._id, data.name);
            window.location.reload();
        }
        catch (error) {
            console.log("Masonry Card Delete : ", error);
        }
    }
    return (
        <div className="masonary relative border-[8px] border-white overflow-hidden rounded transition">
            <LazyLoadImage src={`http://localhost:3000/${data.name}`}
                alt="Image Alt"
                className="w-full h-full object-fill"
                effect="blur"
            />
            <div className="masonary-bottom absolute bottom-0 left-0 w-full bg-black/60 py-[8px] px-[12px]">
                <h4 className="text-[16px] text-white uppercase">{data.title}</h4>
            </div>
            <div className="masonary-hover flex justify-center items-center opacity-0 invisible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 w-full h-full text-center"
                onMouseLeave={() => setShow(false)}
            >

                <div className="inside text-white pt-[2rem] lg:pt-[4rem]">
                    <p className="text-center mb-4 cursor-pointer absolute top-4 right-4" onClick={() => setShow(!show)}>
                        <FaTrash className="text-[36px] border-white border-[1px] text-white rounded mx-auto p-2 transition hover:text-red-500 hover:bg-white" />
                    </p>
                    <h4 className="text-[24px] uppercase font-semibold">{data.title}</h4>
                    <span className="text-[12px] font-light">{data.time}</span>
                    <Tags tags={data.tags} />
                </div>
                <div className={`${!show && 'hidden'} bg-white absolute top-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded`}>
                    <p className="text-sm text-slate-800">Are you sure want to delete ?</p>
                    <div className="flex justify-end mt-2">
                        <button className="px-4 py-1 text-sm bg-slate-200 text-slate-700 rounded" onClick={() => setShow(false)}>No</button>
                        <button className="px-4 py-1 text-sm bg-red-200 text-red-700 rounded ml-2" onClick={() => handleDelete()}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MasonryCard;