import RoundedImageText from "./RoundedImageText";

function SideMenu() {
    return (
        <aside className="col-span-3">
            <h2 className="">Menu</h2>
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
        </aside>
    )
}

export default SideMenu
