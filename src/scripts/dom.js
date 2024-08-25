import "../../src/styles.css";
import {buildingProjects} from "./projects.js";



export const addDom = () =>
{
    const inbox = document.getElementById("list-inbox");
    const today = document.getElementById("list-today");
    const week = document.getElementById("list-week");
    const important = document.getElementById("list-important");
    const completed = document.getElementById("list-completed");
    const taskHeader = document.getElementById("taskHeader");
    const addProjectDivShow = document.getElementById("addProjectDiv");
    const addProjectBtn = document.getElementById("addBtn");
    const closeProjectButton = document.getElementById("closeProjectButton");
    const projectNameInput = document.getElementById("projectNameInput");

    const closeTaskButton = document.getElementById("closeTaskButton");
    const addTaskDivShow = document.getElementById("addTaskDiv");
    const addTaskBtn = document.getElementById("taskAdd");
    const taskNameInput = document.getElementById("taskNameInput");
    const priorityInput = document.getElementById("prioritySelect");
    const dateInput = document.getElementById("dateInput");
    const projectInput = document.getElementById("projectSelect");

    // Function to add eventListeners to page elements
    function clicking()
    {
        inbox.addEventListener("click", () => {
            taskHeader.textContent = "Inbox";
            inbox.style.backgroundColor = "rgb(240, 239, 239)";
            inbox.style.borderRadius = "20px";
            inbox.style.border = "1px solid rgb(13, 99, 13)";
            today.style = "none";
            week.style = "none";
            important.style = "none";
            completed.style = "none";

        })

        today.addEventListener("click", () => {
            taskHeader.textContent = "Today";
            today.style.backgroundColor = "rgb(240, 239, 239)";
            today.style.borderRadius = "20px";
            today.style.border = "1px solid rgb(13, 99, 13)";
            inbox.style = "none";
            week.style = "none";
            important.style = "none";
            completed.style = "none";

        })

        week.addEventListener("click", () => {
            taskHeader.textContent = "This week";
            week.style.backgroundColor = "rgb(240, 239, 239)";
            week.style.borderRadius = "20px";
            week.style.border = "1px solid rgb(13, 99, 13)";
            inbox.style = "none";
            today.style = "none";
            important.style = "none";
            completed.style  = "none";
        })

        important.addEventListener("click", () => {
            taskHeader.textContent = "Important";
            important.style.backgroundColor = "rgb(240, 239, 239)";
            important.style.borderRadius = "20px";
            important.style.border = "1px solid rgb(13, 99, 13)";
            inbox.style = "none";
            today.style = "none";
            week.style = "none";
            completed.style  = "none";
        })

        completed.addEventListener("click", () => {
            taskHeader.textContent = "Completed";
            completed.style.backgroundColor = "rgb(240, 239, 239)";
            completed.style.borderRadius = "20px";
            completed.style.border = "1px solid rgb(13, 99, 13)";
            inbox.style = "none";
            today.style = "none";
            week.style = "none";
            important.style  = "none";
        })

        addProjectBtn.addEventListener("click", () => {
            addProjectDivShow.style.display = "flex";
        })

        closeProjectButton.addEventListener("click", () => {
            addProjectDivShow.style.display = "none";
            projectNameInput.value = "";
        })


        closeTaskButton.addEventListener("click", () => {
            addTaskDivShow.style.display = "none";
            taskNameInput.value = "";
            priorityInput.value = "";
            dateInput.value = "";
            projectInput.value = "";

        })
        addTaskBtn.addEventListener("click", () => {
            addTaskDivShow.style.display = "flex";
        })

    }


    clicking();
}