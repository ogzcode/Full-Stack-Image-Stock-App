import { BsXCircle } from "react-icons/bs";
import MultipleTagInput from "./MultipleTagInput";
import { useRef, useState } from "react";
import { uploadImage } from "../../auth/core/request";


export default function AddImageForm({ onChange }) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState();
    const [tags, setTags] = useState([]);

    const inputRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res = await uploadImage(title, image, tags);

        setTitle("");
        setImage("");
        setTags([]);
        inputRef.current.value = "";
        onChange(false);
        window.location.reload();
    };

    const handleKey = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };
    return (
        <div className="w-screen h-full flex justify-center items-start bg-gray-900/50 absolute top-0 left-0 z-20">
            <div className="rounded-lg bg-white px-16 py-8 max-w-md w-1/2 relative mt-60">
                <h1 className="text-2xl font-medium mb-8">Add Image</h1>
                <BsXCircle className="absolute right-2 top-2 text-2xl text-red-500 cursor-pointer"
                    onClick={() => onChange(false)} />
                <form onSubmit={handleSubmit} onKeyDown={handleKey}>

                    <div className="mb-4">
                        <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                            Image Title
                        </label>
                        <div className="mt-2">
                            <input
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Enter your image title"
                                className="block w-full outline-0 rounded border border-gray-500 py-1 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                            Select Image File
                        </label>
                        <input className="select-file block w-full p-1 text-sm border border-gray-500 rounded cursor-pointer text-gray-600 focus:outline-none"
                            type="file" accept="image/*"
                            name="image"
                            onChange={e => setImage(e.target.files[0])}
                            ref={inputRef}
                        />
                    </div>

                    <MultipleTagInput onChangeTag={setTags} tags={tags} />

                    <button className="mt-6 text-gray-500 border border-gray-500 font-semibold px-8 py-1 rounded-md transition hover:scale-95"
                        type="submit"
                    >Submit</button>

                </form>
            </div>
        </div>
    );
}