/* TABS CODE */
function openTab(evt, tabName) {
    const panels = document.querySelectorAll(".tab-panel");
    const tabs = document.querySelectorAll(".tabs li");

    panels.forEach(panel => panel.classList.remove("active"));
    tabs.forEach(tab => tab.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    evt.target.classList.add("active");
}

/* COLOR CHANGER */
function changeColor(color) {
    const img = document.getElementById("car-image");
    img.style.opacity = 0;

    setTimeout(() => {
        img.src = images/${color}.jpg;
        img.style.opacity = 1;
    }, 200);
}
