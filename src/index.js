import "./styles.css";
import { addDom } from "./scripts/dom.js";
import { buildingProjects } from "./scripts/projects.js";
import { buildingTasks } from "./scripts/tasks.js";

function addStyleToInbox() {
  const inbox = document.getElementById("list-inbox");
  inbox.style.backgroundColor = "rgb(240, 239, 239)";
  inbox.style.borderRadius = "20px";
  inbox.style.border = "1px solid rgb(13, 99, 13)";
}

// Function to hide form for adding new projects
function hideProjectForm() {
  const addProjectDiv = document.getElementById("addProjectDiv");
  addProjectDiv.style.display = "none";
}

// Function to hide form for adding new tasks
function hideTaskForm() {
  const addTaskDiv = document.getElementById("addTaskDiv");
  addTaskDiv.style.display = "none";
}

hideProjectForm();

hideTaskForm();

addStyleToInbox();

buildingProjects();

buildingTasks();

addDom();
