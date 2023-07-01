 //create a todo  app where the user can :
//-Create a ToDo app where the user can: 
 //Register a new Task using an input.
// Store the tasks in an array.
// Display the Task in the Todo list section, you have to use document.getElementById();
// Display the number of task that are registered in the app.

//Extra challenge: 
//Use a good CSS design to display it.



var tasks =[];
function registerTask(){
    var task = document.getElementById("txtTask").value;
    tasks.push(task);
    console.log(tasks);
    //display the task on the html
document.getElementById("tasklist").innerHTML=`
<h2>Task information</h2>
<p>${task}</p>

`
    display()
}
function display(){
    for(let i=0; i<=tasks.length; i++){
        document.getElementById("tasklist").innerHTML=`
        <h2>Task Information</h2>
        <p>${tasks[i]}</p>

`
    }
}