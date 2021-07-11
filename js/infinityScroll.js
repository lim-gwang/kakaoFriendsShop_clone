import itemRender from "./listRender.js";



const onScroll = e => {
    const {
        scrollHeight,
        scrollTop,
        clientHeight
    } = e.target.scrollingElement;

    if (scrollTop + clientHeight === scrollHeight) {
        itemRender();
    }

}
itemRender()

document.addEventListener("scroll", onScroll);
