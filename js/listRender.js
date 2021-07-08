const listElement = document.querySelector(".item-list");

const renderItem = ({ link, name, img, price }) => {
    const li = document.createElement("li");

     li.insertAdjacentHTML(
        "beforeend",
        `
            <li class="item">
                <a href="${link}">
                    <span class="figure">
                        <img src='${img}' alt="상품이미지">
                    </span>
                    <span class="figcaption">
                        <span class="item-name">
                            ${name}
                        </span>
                        <strong class="item-price">
                            ${price}
                        </strong>
                        <button class="cart-btn">
                            <span class="sr-only">
                                카트에 담기
                            </span>
                        </button>
                    </span>
                </a>
            </li>
        `
    )

};








export default listRender;