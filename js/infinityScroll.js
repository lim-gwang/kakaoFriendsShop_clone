// import getList from "./listRender";


const onScroll = e => {
    const {
        scrollHeight,
        scrollTop,
        clientHeight
    } = e.target.scrollingElement;

    if (scrollTop + clientHeight === scrollHeight) {
        console.log("scroll end");
    }

}


document.addEventListener("scroll", onScroll);