import { useEffect, useState } from "react";

import { BsX } from "react-icons/bs";

export default function MultipleTagInput({ tags, onChangeTag }) {
    const [value, setValue] = useState("");

    useEffect(() => {
        setValue("");
    }, []);
    
    const handleDeleteTag = (index) => {
        const valueArray = tags.slice();
        valueArray.splice(index, 1);
        onChangeTag([...valueArray]);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && value){
            onChangeTag([...tags, value]);
            setValue("");
        }
    };

    const tagCount = () => tags.length < 3;

    return (
        <div className="border border-gray-500 rounded p-2">
                <input
                    type="text"
                    placeholder={tagCount() ? "Add tags for your image" : "you can add only 5 tags"}
                    className="text-gray-500 border-b border-slate-500/10 outline-0 w-full pb-1"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={!tagCount()}
                />
            <div className="flex flex-wrap pt-2">
                {
                    tags.map((d, i) =>
                        <div className="text-sm px-2 border border-gray-200 text-gray-500 rounded border border-gray-200 m-2" key={i}>
                            <span>{d}</span>
                            <BsX className="inline fa-solid fa-xmark cursor-pointer ml-1 text-lg"
                                onClick={() => handleDeleteTag(i)} />
                        </div>
                    )
                }
            </div>
        </div>
    );
} 