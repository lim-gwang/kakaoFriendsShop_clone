document.addEventListener("DOMContentLoaded", function() {
    const searchPopupBtn = document.querySelector(".search-popup-Btn");
    const searchCloseBtn = document.querySelector(".search-popup-close"); 
    const searchPopup = document.querySelector(".search-popup");
    
    searchPopupBtn.addEventListener("click", 
        () => searchPopup.style.display = "block");

    searchCloseBtn.addEventListener("click", 
        () => searchPopup.style.display = "none");

});