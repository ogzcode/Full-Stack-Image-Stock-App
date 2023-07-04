import { useState } from "react";
import { useImage } from "../../context/useImage";
import { getImageByTag } from "../../auth/core/request";

function SearchWithTag() {
    const [tag, setTag] = useState("");
    const { setImages } = useImage();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await getImageByTag(tag);
            console.log(res.data);
            setImages(res.data);
            setTag("");
        }
        catch (error) {
            console.log("SearchWithTag : ", error);
        }
    };
    return (
        <div className="text-center mt-[32px]">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search by tag"
                    className="w-1/3 mr-8 rounded py-3 px-4 outline-0"
                    value={tag}
                    onChange={e => setTag(e.target.value)}
                />
            </form>
        </div>
    );
}

export default SearchWithTag;