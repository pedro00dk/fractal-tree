let childrenSlider, angleSlider

function setup() {
    createCanvas(800, 600)

    childrenSlider = createSlider(0, 10, 2)
    childrenSlider.position(20, 20)
    angleSlider = createSlider(0, Math.PI * 2, Math.PI / 3, 0.01)
    angleSlider.position(20, 50)
}

function draw() {
    background(64)
    
    text(`children: ${childrenSlider.value()}`, childrenSlider.x * 2 + childrenSlider.width, 35)
    text(`angle: ${angleSlider.value()}`, angleSlider.x * 2 + angleSlider.width, 65)

    stroke(255)
    translate(width / 2, height)
    scale(1, -1)
    branch(200, 2 / 3, childrenSlider.value(), angleSlider.value())
}

function branch(length, degradation, children, angle) {
    if (length < 2 * children * children / 2) return

    line(0, 0, 0, length)
    translate(0, length)

    let halfAngleInterval = (children - 1) * angle / 2
    for (let i = 0; i < children; i++) {
        push()
        rotate(angle * i - halfAngleInterval)
        branch(length * degradation, degradation, children, angle)
        pop()
    }
}