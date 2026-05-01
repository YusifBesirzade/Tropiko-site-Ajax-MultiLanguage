// Ajax Page Start
function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(data => {
            document.getElementById("content").innerHTML = data
        })
        .catch(err => console.log("Xeta:", err));
}
// End

// Mobil Menubar Start
let mobilmenu = document.getElementById('mobilmenu')

function openMenu() {
    mobilmenu.style.display === "none" ? mobilmenu.style.display = "flex" : mobilmenu.style.display = "none"
}
// End