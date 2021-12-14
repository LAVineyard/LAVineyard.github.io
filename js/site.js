function changeText() {
    let text = document.getElementById("paragraph");
    text.innerHTML = "New";
}

class Vector {
    constructor(magnitude, direction) {
        this.magnitude = magnitude;
        this.direction = direction;
    }
    
}

let v = new Vector(10, 90);

console.log(this)