
let count =0;
function increaseCount() {
    count++;
    document.getElementById('countTasks').innerHTML = count;

}

function decreaseCount() {
    count--; 
    document.getElementById('countTasks').innerHTML = count;

}
