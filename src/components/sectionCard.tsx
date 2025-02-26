interface CardParams{
    title: string
    img: string
}

function SectionCard({ title, img }: CardParams) {
    return (
        <article
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-6xl min-w-72"
        >
            <img
                src={img}
                alt="image"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">{title}</h3>

        </article>
    );
}

export default SectionCard;