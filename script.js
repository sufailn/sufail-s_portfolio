$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});
function toggleDescription(button) {
    const description = button.previousElementSibling;
    if (description.style.display === "none") {
        description.style.display = "block";
        button.textContent = "See Less <-";
    } else {
        description.style.display = "none";
        button.textContent = "See More ->";
    }
}