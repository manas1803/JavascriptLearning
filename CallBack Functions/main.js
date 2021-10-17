const button = document.querySelector(".btn");

function attachClosure() {
    let count = 0;
    button.addEventListener('click', function () {
        console.log("Button Clicked " + ++count)
    })
}
attachClosure();