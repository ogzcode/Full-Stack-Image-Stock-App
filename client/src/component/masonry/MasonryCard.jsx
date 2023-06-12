import { deleteImage } from "../../auth/core/request";

import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { FaTrash } from "react-icons/fa";
import Tags from "./Tags";


function MasonryCard({ data }) {
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
        <div className="masonary relative border-[4px] border-white overflow-hidden rounded transition">
            <LazyLoadImage src={`http://localhost:3000/${data.name}`}
                alt="Image Alt"
                className="w-full h-full object-fill"
                effect="blur"
            />
            <div className="masonary-bottom absolute bottom-0 left-0 w-full bg-black/60 py-[8px] px-[12px]">
                <h4 className="text-[16px] text-white uppercase">{data.title}</h4>
            </div>
            <div className="masonary-hover opacity-0 invisible absolute top-0 left-0 bg-black/90 w-full h-full text-center">
                <div className="inside text-white pt-[2rem] lg:pt-[4rem]">
                    <p className="text-center mb-4 cursor-pointer" onClick={() => handleDelete()}>
                        <FaTrash className="text-[36px] border-white border-[1px] text-white rounded mx-auto p-2 transition hover:text-black hover:bg-white" />
                    </p>
                    <h4 className="text-[16px] uppercase font-semibold">{data.title}</h4>
                    <span className="text-[12px] font-light">{data.time}</span>
                    <Tags tags={data.tags} />
                </div>
            </div>
        </div>
    );
}

export default MasonryCard;