var container = document.querySelector(".imgContainer");
var love = document.querySelector("i");

let cursor = document.querySelector("#cursor")

function reactionAnimation(){
    container.addEventListener("dblclick", function () {
        love.style.transform = "translate(-50%, -50%) scale(1)";
        setTimeout(function () {
            love.style.transform = "translate(-50%, -50%) scale(0)";
        }, 1000);
    });
};
reactionAnimation();

function cursorAnimation() {
    document.body.addEventListener("mousemove", function (data) {
        console.log(data);
        cursor.style.opacity = "0.1"
        cursor.style.left = data.x + "px";
        cursor.style.top = data.y + "px";
    });
};
cursorAnimation();