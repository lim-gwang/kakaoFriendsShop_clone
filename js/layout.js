document.addEventListener("DOMContentLoaded", function() {
    const searchPopupBtn = document.querySelector(".search-popup-Btn");
    const searchCloseBtn = document.querySelector(".search-popup-close"); 
    const searchPopup = document.querySelector(".search-popup");
    // search popup open
    searchPopupBtn.addEventListener("click", schPopup);
    // search popup close
    searchCloseBtn.addEventListener("click", schPopup);
    
    // search popup 
    function schPopup() {
        this.className === "search-popup-Btn" ?
        searchPopup.style.display = "block" : searchPopup.style.display = "none";
    }


});