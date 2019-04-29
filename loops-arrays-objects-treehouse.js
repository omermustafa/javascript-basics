//https://teamtreehouse.com/library/javascript-loops-arrays-and-objects
document.write("<h2>Treehouse - Loops, Arrays and Objects.</h2>");

//Part 1 - Array Example in treehouse
document.write("<h2>Arrays</h2>");
var arrExample = [10 , 20 , 30];
document.write(`Printing array values: ${arrExample}`);
//Array with multiple values
var assorted = ['Omer Mustafa', 22, true];
document.write(`<br/>Printing array with different types of values: ${assorted}`);

// Using forEach loop
document.write("<br/><br/>Using forEach Loop<br/>");
assorted.forEach(element => {
    document.write(element + ' ');
});

//Using For loop
document.write("<br/><br/>Using for Loop<br/>");
for (let index = 0; index < assorted.length; index++) {
    const element = assorted[index];
    document.write(element + " ");
}

document.write("<br/>" , assorted[assorted.length-1]);

//Part 2 - Array Shift and Splice

//Array Shift - Removes the first element from the array and display it.
document.write("<h2>Array Shift and Splice</h2>");
var orderQueue = ['1XT567437','1U7857317','1I9222528'];
var shipping = orderQueue.shift();
document.write("Array Shift: ",shipping);

//Array Splice 
orderQueue = ['1st','2nd','3rd'];
shipping = orderQueue.splice(1);
document.write("<br/>Array Splice: ", shipping);
document.write("<br/>Order Queue: ", orderQueue);

//Part 3 - Two dimensional Arrays
document.write("<h2>Two dimensional arrays</h2>");
var grades = [
    [80, 90, 100, 95],
    [75, 95, 85, 100],
    [60, 80, 77, 90]
];
document.write("Printing 1st element of two dimensional array which itself is an array: " + grades[0]);
document.write("<h3>Two dimensional array project on treehouse.</h3>")
document.write("Music playlist with song. <a href='/music-playlist.html'>Music Playlist</a>")


//Part 4 - Objects
document.write("<h2>Objects</h2>");
document.write("Check console.");
var person = {
    name : 'Omer Mustafa',
    country : 'Pakistan',
    age : 35,
    treehouseStudent : true,
    skills : ['Javascript', 'HTML', 'CSS']
};

for(prop in person){
    console.log(prop, ': ', person[prop]);
}












