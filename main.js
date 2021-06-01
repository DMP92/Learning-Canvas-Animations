
// getting the canvas ele
var canvas = document.querySelector('canvas');


// event listeners & function to keep screen same size as window *****
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//  ********************************************



// context variable
var c = canvas.getContext('2d');


// rectangle
// c.fillStyle = '#3DFB89';
// c.fillRect(330, 359, 130, 40);

console.log(canvas);



// line 
// c.beginPath();
// c.moveTo(500, 300);
// c.lineTo(200, 500);
// c.strokeStyle = 'black';
// c.stroke();

// c.lineTo(300, 559);
// c.strokeStyle = '#3DFB89';
// c.stroke();


// for (var i = 0; i < 1200; i++) {
//     c.beginPath();
//     var colors = ['#0098BD', '#33D6FF', '#005064', '#6DE2FF', '#E2F9FF', '#0080A0'];
//     let colorRandomizer = colors[Math.floor(Math.random() * colors.length)];
//     c.fillStyle = colorRandomizer;
//     c.strokeStyle = '#33D6FF';
//     c.arc(Math.floor(Math.random() * 1100), Math.floor(Math.random() * 1100), Math.floor(Math.random() * 20), 0, Math.PI * 2, false);
//     c.fill();
//     c.stroke();
    
// }


// arc / circle
// c.beginPath();
// c.strokeStyle = 'white';
// c.arc(530, 350, 50, 0, Math.PI * 2, false);
// c.stroke();

// var x = (Math.random() * innerWidth);
// var y = (Math.random() * innerHeight);
// var radius = Math.floor(Math.random() * 150);
// var dx = (Math.random() - 0.5) * 8;
// var dy = (Math.random() - 0.5) * 8;



const Circle = (x, y, radius, dx, dy) => {
    var colors = ['#0098BD', '#33D6FF', '#005064', '#6DE2FF', '#E2F9FF', '#0080A0'];
    let colorRandomizer = colors[Math.floor(Math.random() * colors.length)];
    
    function create() {
    c.beginPath();
    c.strokeStyle = 'black';
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.fillStyle = colorRandomizer;
    c.fill();
    c.stroke();
    
    }

    function motion() {
        
        if ( x + radius > innerWidth || x - radius < 0) {
            dx = - dx;
        } 
        
        if ( y + radius > innerHeight || y - radius < 0) {
            dy = -dy;
        }
        
        x += dx;
        y += dy;
        
        create();
    }

    return {create, motion};
}

let shape = Circle(300, 100, 50, 1, 2);

var circleArray = [];

for (var i = 0; i < 200; i++) {
    var radius = Math.floor(Math.random() * 10);
var x = Math.random() * (innerWidth - radius * 2) + radius;
var y = Math.random() * (innerHeight - radius * 2) + radius;
var dx = (Math.random() - 0.5);
var dy = (Math.random() - 0.5);

let manyCircles = Circle(x, y, radius, dx, dy);
circleArray.push(manyCircles);



}

console.log(x);

//  animation function
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
 
    for ( var i = 0; i < circleArray.length; i++) {
        circleArray[i].motion();
    }
    

 }

 animate();