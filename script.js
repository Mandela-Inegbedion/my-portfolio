myTime();

function myTime() {
    const date = new Date()
    const time = date.getHours();

if(time <= 11) {
    document.getElementById('time1').innerText = 'Good Morning Client!'
}
else if( time <= 15){
    document.getElementById('time1').innerText = 'Good Afternoon Client!'
}
else if( time <= 19){
    document.getElementById('time1').innerText = 'Good Evening Client!'
}else {
    document.getElementById('time1').innerText = 'Good Night Client!'
}

}
myTime()


// function myTime() {
//     const date = new Date();
//     const hour = date.getHours(); // Get the current hour (0 - 23)

//     let greeting = "";

//     if (hour <= 11) {
//         greeting = "Good Morning Client!";
//     } else if (hour <= 15) {
//         greeting = "Good Afternoon Client!";
//     } else if (hour <= 19) {
//         greeting = "Good Evening Client!";
//     } else {
//         greeting = "Good Night Client!";
//     }

//     // Update a single element with ID 'time'
//     document.getElementById('time').innerText = greeting;

//     console.log(hour); // Log the actual hour
// }

// myTime();


