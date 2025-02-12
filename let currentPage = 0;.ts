let currentPage = 0;
const pages = document.querySelectorAll(".page");
const totalPages = pages.length;

document.getElementById("nextPage").addEventListener("click", function() {
    if (currentPage < totalPages - 1) {
        pages[currentPage].style.transform = "rotateY(-180deg)";
        currentPage++;
    }
});

document.getElementById("prevPage").addEventListener("click", function() {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].style.transform = "rotateY(0deg)";
    }
});