import { useState } from "react";
import AddImageForm from "./core/AddImageForm.jsx";

import MasonryLayout from "./masonry/MasonryLayout";

function Main() {
    const [openImageForm, setOpenImageForm] = useState(false);
    return (
        <>
            <div className="text-center mb-12 ">
                <button
                    onClick={() => setOpenImageForm(!openImageForm)}
                    className="text-white text-lg border-2 border-white px-8 py-2 rounded-lg transition shadow-xl shadow-slate-900/30 hover:scale-95">Add new photo</button>
                {
                    openImageForm && <AddImageForm onChange={setOpenImageForm} />
                }
            </div>
            <MasonryLayout/>
        </>
    );
}

export default Main;