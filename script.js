const menu = document.querySelector('#check');
const sideBar = document.getElementById("sideBar");
sideBar.style.maxWidth = "0%";

menu.addEventListener("click", clicked);


function clicked() {

    if (sideBar.style.maxWidth == "0%") {
        sideBar.style.maxWidth = "100%";
        document.querySelector('.color1').classList.add('color-black');
        document.querySelector('.color1').classList.remove('color-white');
        document.querySelector('.color2').classList.add('color-black');
        document.querySelector('.color2').classList.remove('color-white');
        document.querySelector('.color3').classList.add('color-black');
        document.querySelector('.color3').classList.remove('color-white');
    } else {
        sideBar.style.maxWidth = "0%";
        document.querySelector('.color1').classList.remove('color-black');
        document.querySelector('.color1').classList.add('color-white');
        document.querySelector('.color2').classList.remove('color-black');
        document.querySelector('.color2').classList.add('color-white');
        document.querySelector('.color3').classList.remove('color-black');
        document.querySelector('.color3').classList.add('color-white');
    }

}