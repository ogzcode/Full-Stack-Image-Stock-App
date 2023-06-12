function Tags({ tags }) {
    return (
        <div className="flex flex-wrap justify-center mt-2">
            {
                tags.map((tag, i) =>
                    <span className="text-white border border-white text-sm px-2 mx-2 rounded-sm"
                        key={i}>#{tag}
                    </span>)
            }
        </div>
    );
}

export default Tags;