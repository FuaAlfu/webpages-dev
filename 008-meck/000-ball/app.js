//still working on
let test;

function setup() {
    createCanvas(400,400);
    test = new Mover(200,200);
}

function draw() {
    background(0);

    if(mouseIsPressed){
        let wind = createVector(0.1,0);
        test.applyForce(wind);
    }

    let gravity = createVector(0,0.2);
    test.applyForce(gravity);

    test.update();
    test.edges();
    test.show()
}