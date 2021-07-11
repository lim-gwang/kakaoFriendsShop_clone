import loadItem from "./itemRender.js";


function itemview(arg) {
    const listElement = document.querySelector(".item-list");
    listElement.innerHTML = arg.map(items => renderItem(items)).join("");
}

function renderItem(data) {
    return `
            <li class="item">
                <a href="${data.link}">
                    <span class="figure">
                        <img src='${data.image.url}' alt="상품이미지">
                    </span>
                    <span class="figcaption">
                        <span class="item-name">
                            ${data.name}
                        </span>
                        <strong class="item-price">
                            ${data.price} ${data.currency}
                        </strong>
                        <button class="cart-btn">
                            <span class="sr-only">
                                카트에 담기
                            </span>
                        </button>
                    </span>
                </a>
            </li>
            `;
};

function itemRender() {
    return loadItem()
        .then(item => {
            itemview(item)
            console.log()
        })
        .catch(console.log);
}

export default itemRender;

