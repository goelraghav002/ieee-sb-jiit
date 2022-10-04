const menu = document.querySelector('#check');

menu.addEventListener("click", clicked);


function clicked() {
    console.log(menu.checked);
    console.log("Clicked");

    openSidebar();

}

function openSidebar() {
    if (menu.checked) {
        document.querySelector('.links').classList.remove('none');
        document.querySelector('.links').classList.toggle('styles');
        document.querySelector('.color1').classList.add('color-black');
        document.querySelector('.color1').classList.remove('color-white');
        document.querySelector('.color2').classList.add('color-black');
        document.querySelector('.color2').classList.remove('color-white');
        document.querySelector('.color3').classList.add('color-black');
        document.querySelector('.color3').classList.remove('color-white');
    }

    menu.addEventListener('click', close);
}


function close() {
    if (!menu.checked) {
        document.querySelector('.links').classList.add('none');
        document.querySelector('.links').classList.remove('styles');
        document.querySelector('.color1').classList.remove('color-black');
        document.querySelector('.color1').classList.add('color-white');
        document.querySelector('.color2').classList.remove('color-black');
        document.querySelector('.color2').classList.add('color-white');
        document.querySelector('.color3').classList.remove('color-black');
        document.querySelector('.color3').classList.add('color-white');
    }
}
