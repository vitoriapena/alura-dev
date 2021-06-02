import Image from 'next/image'

function RoundedImageText(props) {
    const { imgSrc, imgAlt, text, borderRadius } = props;

    return (

        <div className="flex items-center">
            <Image
                src={imgSrc}
                alt={imgAlt}
                className={borderRadius}
                width={40}
                height={40}
            />
            <div className="ml-3">
                {text}
            </div>
        </div>
    )
}

export default RoundedImageText
