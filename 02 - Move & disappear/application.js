function elementsMovement() {
    var movingElement = document.getElementById("movingElement"),
        initialPosition = parseInt(getComputedStyle(movingElement).top.slice(0,-2)),
        initialOpacity = getComputedStyle(movingElement).opacity,
        interval = setInterval(frame, 250),
        bottomBoxBorder = "200px";

    function frame() {
        if (movingElement.style.top === bottomBoxBorder) {
            var opacityInterval = setInterval(function() {
                if (initialOpacity > 0) {
                    initialOpacity -= 0.1;
                    movingElement.style.opacity = initialOpacity;
                    movingElement.style.transition = "opacity 125ms linear 0s";
                } else {
                    movingElement.remove();
                    clearInterval(opacityInterval);
                }
            }, 125);
            clearInterval(interval);
        } else {
            initialPosition += 20;
            movingElement.style.top = initialPosition + 'px';
            movingElement.style.transition = "top 250ms linear 0s";
        }
    }
}
elementsMovement();