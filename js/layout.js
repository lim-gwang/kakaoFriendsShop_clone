document.addEventListener("DOMContentLoaded", function() {
    const searchPopupBtn = document.querySelector(".search-popup-Btn");
    const searchCloseBtn = document.querySelector(".search-popup-close"); 
    const searchPopup = document.querySelector(".search-popup");
    
    searchPopupBtn.addEventListener("click", schPopup);

    searchCloseBtn.addEventListener("click", schPopup);

    function schPopup() {
        this.className === "search-popup-Btn" ?
        searchPopup.style.display = "block" : searchPopup.style.display = "none";
    }
});