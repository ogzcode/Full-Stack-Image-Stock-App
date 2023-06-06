import { useState } from "react";

function SelectMenu({ selectedValue, values, onChange, }) {
    const [open, setOpen] = useState(false);

    const handleSelect = (v) => {
        onChange(v);
        setOpen(false);
    }
    return (
        <div className="w-1/3 inline-block relative border-2 border-white shadow-xl shadow-slate-900/30 text-left px-4 py-1 rounded-md text-slate-800 mr-8 cursor-pointer"
            onClick={() => setOpen(!open)} tabIndex={0}
            onBlur={() => setOpen(false)}
        >
            <p className="text-white">{selectedValue === "" ? "Select tag to filter" : selectedValue}</p>
            {
                open && (
                    <div className="absolute top-full left-0 mt-4 w-full overflow-hidden rounded bg-zinc-300/90">
                        {
                            values.map((v, i) => <p className="px-4 font-medium py-2 transition hover:bg-white/60 hover:text-slate-800" key={i} onClick={() => handleSelect(v)}>{v}</p>)
                        }
                    </div>
                )
            }
        </div>
    );
}

export default SelectMenu;