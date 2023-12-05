const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask(){
    if(inputbox.value.trim() !=="")
    {
        const li= document.createElement("li");
        li.textContent=inputbox.value;
        const removebutton =document.createElement("button");
        removebutton.textContent="remove";
        removebutton.onclick= function(){
            listcontainer.removeChild(li);
        };
        li.appendChild(removebutton);
        listcontainer.appendChild(li);

        inputbox.value=""

    }
}