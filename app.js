$("#target").click(function () {});
$("#other").click(function () {
    $("#target").click();
});
var panels = document.getElementsByClassName("menu__list-pc");
var actives = document.getElementsByClassName("active");
for (i = 0; panels.length > i; i++) {
    panels[i].onclick = function () {
        var currentActive = actives[0];
        if (currentActive) currentActive.classList.remove("active");

        if (currentActive !== this) this.classList.add("active");
        console.log("Nice");
    };
}
