import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MasonryCard from "./MasonryCard";

import { useImage } from "../../context/useImage.jsx";
import { useEffect } from "react";

function MasonryLayout() {
    const { images, getImage } = useImage();

    useEffect(() => {
        getImage();
    }, []);

    return (
        <div className="relative z-[6] p-10">
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1024: 4 }}>
                <Masonry gutter="16px">
                    {
                        images.length > 0 && images.map((d, i) => (
                            <MasonryCard data={d} key={i} />
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}

export default MasonryLayout;