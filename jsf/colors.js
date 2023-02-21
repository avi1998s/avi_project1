let r = document.querySelector(":root");
let colorOBG1 = ["#fe0eba", "#ffffff", "#155dda", "#000000", "#13e921", "#e91313"]
function set_color() {
    let i = 0;
    setInterval(() => {
        r.style.setProperty("--color", colorOBG1[i])
        i = (i + 1) % colorOBG1.length
    }, 1000)
}

