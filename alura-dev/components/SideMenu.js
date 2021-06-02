import RoundedImageText from "./RoundedImageText";

function SideMenu() {
    return (

        <div className="">
            <h2 className="mb-3">Menu</h2>
            <RoundedImageText
                imgSrc="/images/icon.png"
                imgAlt=""
                text="Editor de código"
                borderRadius="rounded"
            />
            <RoundedImageText
                imgSrc="/images/icon.png"
                imgAlt=""
                text="Comunidade"
                borderRadius="rounded"
            />
        </div>

    )
}

export default SideMenu
