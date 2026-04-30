function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(data => {
            document.getElementById("content").innerHTML = data
        })
        .catch(err => console.log("Xeta:", err));
}