var imgs = [];
var activeImg = null;

document.getElementById("add-photo-button").addEventListener('click', () => { //While click the button
const fileInput = document.createElement('input'); //input type
fileInput.type = 'file';
fileInput.accept = 'image/*'; //file type that can be chosen
    fileInput.onchange = handleFileChange;
    fileInput.click();
});

function handleFileChange(event) {
    const file = event.target.files[0]; //check the chosen img
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
    const img = document.createElement('img');
    img.src = e.target.result; //save ing source 
    img.className = 'img';  //give a class name for style
    img.style.left = Math.random() * (400 - 80) + 'px'; //get random place from left(row) in animation window when 400 is animation window width and 80 is img width 
    img.style.top = Math.random() * (400 - 80) + 'px'; //get random place from top(col) in animation window when 400 is animation window height and 80 is img height
    document.getElementById("the-animation-window").appendChild(img); //put the img in our animation window
    imgs.push(img);

    img.addEventListener('click', () => { //when we click on the img we can change it's place 
        setActiveImg(img);
        });
    };
    reader.readAsDataURL(file);
}

function setActiveImg(img) {
    if (activeImg) {
        activeImg.style.border = 'none';
    }
    activeImg = img;
    activeImg.style.border = '1px solid red';
}

document.addEventListener('keydown', (event) => {
    if (activeImg) {
    const stepSize = 1; //how much the img will move every press
    const currentLeft = parseInt(activeImg.style.left); // selected img current point from left
    const currentTop = parseInt(activeImg.style.top); // selected img current point from top

    switch (event.key) { //different active in every key of keybords buttons
        case 'ArrowLeft':
            activeImg.style.left = currentLeft - stepSize + 'px';
        break;
        case 'ArrowRight':
            activeImg.style.left = currentLeft + stepSize + 'px';
        break;
        case 'ArrowUp':
            activeImg.style.top = currentTop - stepSize + 'px';
        break;
        case 'ArrowDown':
            activeImg.style.top = currentTop + stepSize + 'px';
        break;
    }
    }
});