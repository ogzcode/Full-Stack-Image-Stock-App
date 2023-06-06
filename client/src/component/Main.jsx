import { useState } from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";

import Masonary from "./core/Masonary";

import { BsXCircle } from "react-icons/bs";


function AddImageForm({ onChange }) {

    const handleClose = () => {
        onChange(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="absolute top-0 left-1/2 rounded-lg -translate-x-1/2 bg-[#fff] px-16 py-8 z-10 max-w-md w-1/2 ">
            <h1 className="text-2xl font-medium mb-8">Add Image</h1>
            <BsXCircle className="absolute right-2 top-2 text-2xl text-red-500 cursor-pointer" onClick={() => handleClose()}/>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-left text-sm font-medium leading-6 text-gray-900">
                        Image Title
                    </label>
                    <div className="mt-2">
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter your image title"
                            required
                            className="block w-full outline-0 rounded-md border border-gray-500 py-1 px-2 text-gray-900 shadow-lg placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-left text-sm font-medium leading-6 text-gray-900">
                        Select Image File
                    </label>
                    <input className="block w-full p-1 text-sm border border-gray-500 rounded cursor-pointer text-gray-600 focus:outline-none" type="file" accept="image/png, image/jpeg"/>
                </div>
                <button className="mt-6 border px-8 py-1 rounded-md border-gray-500 transition hover:scale-95">Submit</button>
            </form>
        </div>
    );
}
function Main() {
    const [openImageForm, setOpenImageForm] = useState(false);
    return (
        <>
            <div className="text-center relative mb-12">
                <button onClick={() => setOpenImageForm(!openImageForm)} className="text-white text-xl border-2 border-white px-8 py-2 rounded-lg transition shadow-xl shadow-slate-900/30 hover:scale-95">Add new Photo</button>
                {
                    openImageForm && <AddImageForm onChange={setOpenImageForm}/>
                }
            </div>
            <div className="relative z-[6] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10" style={{ gridTemplateRows: "masonary" }}>
                {
                    [img1, img2, img3, img4, img5,
                        img6, img7, img8, img9].map((d, i) => (
                            <Masonary img={d} key={i} />
                        ))
                }
            </div>
        </>
    );
}

export default Main;