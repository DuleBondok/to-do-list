import "../../src/styles.css";
import greenCircle1 from "../../src/images/greenCircle.png";
import yellowCircle1 from "../../src/images/yellowCircle.png";
import redCircle1 from "../../src/images/redCircle.png";
import delete1 from "../../src/images/delete.png";
import edit1 from "../../src/images/edit.png";

let addTaskDivSelect = document.getElementById("addTaskDiv");
let taskNameInputSelect = document.getElementById("taskNameInput");

export const buildingTasks = () => {
  let tasksList = [];
  let allTasks = document.getElementById("allTasks");

  function Task(taskTitle, priority, schedule, targetProject) {
    this.taskTitle = taskTitle;
    this.priority = priority;
    this.schedule = schedule;
    this.targetProject = targetProject;
  }

  let task1 = new Task("Check-In", "highPriority", "2024-07-19", "Vacation");
  let task2 = new Task(
    "Go to the beach",
    "mediumPriority",
    "2024-07-20",
    "Vacation"
  );

  // Function to add task to array of tasks
  function addTaskToList(task) {
    tasksList.push(task);
  }

  addTaskToList(task1);
  addTaskToList(task2);

  //Function to display added task
  function displayTasks() {
    allTasks.innerHTML = "";
    tasksList.forEach((task) => {
      let newTaskDiv = document.createElement("div");
      newTaskDiv.id = "newTaskDiv";
      allTasks.appendChild(newTaskDiv);

      let newTaskDivLeft = document.createElement("div");
      newTaskDivLeft.id = "newTaskDivLeft";
      newTaskDiv.appendChild(newTaskDivLeft);

      let newTaskDivRight = document.createElement("div");
      newTaskDivRight.id = "newTaskDivRight";
      newTaskDiv.appendChild(newTaskDivRight);

      let priorityImg = document.createElement("img");
      priorityImg.id = "priorityImg";

      if (task.priority === "lowPriority") {
        priorityImg.src = greenCircle1;
      } else if (task.priority === "mediumPriority") {
        priorityImg.src = yellowCircle1;
      } else if (task.priority === "highPriority") {
        priorityImg.src = redCircle1;
      }

      newTaskDivLeft.appendChild(priorityImg);

      let taskHeading = document.createElement("p");
      taskHeading.id = "taskHeading";
      taskHeading.textContent = task.taskTitle;
      newTaskDivLeft.appendChild(taskHeading);

      let taskDate = document.createElement("p");
      taskDate.textContent = task.schedule;
      taskDate.id = "taskDate";
      newTaskDivRight.appendChild(taskDate);

      let taskProjectChoice = document.createElement("p");
      taskProjectChoice.textContent = task.targetProject;
      taskProjectChoice.id = "taskProjectChoice";
      newTaskDivRight.appendChild(taskProjectChoice);

      let editTaskBtn = document.createElement("img");
      editTaskBtn.src = edit1;
      editTaskBtn.id = "editTaskBtn";
      newTaskDivRight.appendChild(editTaskBtn);

      let closeTaskBtn = document.createElement("img");
      closeTaskBtn.src = delete1;
      closeTaskBtn.id = "closeTaskBtn";
      newTaskDivRight.appendChild(closeTaskBtn);

      let index = tasksList.indexOf(task);

      closeTaskBtn.addEventListener("click", () => {
        removeTask(index);
      });

      editTaskBtn.addEventListener("click", () => {
        let editTaskDiv = document.createElement("div");
        editTaskDiv.id = "editTaskDiv";

        let body = document.querySelector("body");
        body.appendChild(editTaskDiv);

        let editTaskDivForm = document.createElement("div");
        editTaskDivForm.id = "editTaskDivForm";
        editTaskDiv.appendChild(editTaskDivForm);

        let editTaskDivFormUpper = document.createElement("div");
        editTaskDivFormUpper.id = "editTaskDivFormUpper";
        editTaskDivForm.appendChild(editTaskDivFormUpper);

        let editTaskDivParagraph = document.createElement("p");
        editTaskDivParagraph.textContent = "Edit task";
        editTaskDivParagraph.id = "newTaskParagraph";
        editTaskDivFormUpper.appendChild(editTaskDivParagraph);

        let editTaskDivFormMiddle = document.createElement("div");
        editTaskDivFormMiddle.id = "editTaskDivFormMiddle";
        editTaskDivForm.appendChild(editTaskDivFormMiddle);

        let editNameParagraph = document.createElement("p");
        editNameParagraph.id = "projectNameParagraph";
        editNameParagraph.textContent = "Task title *";
        editTaskDivFormMiddle.appendChild(editNameParagraph);

        let editTaskInput = document.createElement("input");
        editTaskInput.id = "editTaskInput";
        editTaskInput.type = "text";
        editTaskInput.placeholder = "e.g. Do chores";
        editTaskDivFormMiddle.appendChild(editTaskInput);

        let editPriorityParagraph = document.createElement("p");
        editPriorityParagraph.id = "projectNameParagraph";
        editPriorityParagraph.textContent = "Priority";
        editTaskDivFormMiddle.appendChild(editPriorityParagraph);

        let editTaskPriorityInput = document.createElement("select");
        editTaskPriorityInput.id = "editTaskPriorityInput";
        editTaskDivFormMiddle.appendChild(editTaskPriorityInput);

        let editTaskNoPriority = document.createElement("option");
        editTaskNoPriority.value = "";
        editTaskNoPriority.id = "editTaskNoPriority";
        editTaskNoPriority.textContent = "Select priority";
        editTaskPriorityInput.appendChild(editTaskNoPriority);

        let editTaskLowPriority = document.createElement("option");
        editTaskLowPriority.value = "lowPriority";
        editTaskLowPriority.id = "editTaskLowPriority";
        editTaskLowPriority.textContent = "Low priority";
        editTaskPriorityInput.appendChild(editTaskLowPriority);

        let editTaskMediumPriority = document.createElement("option");
        editTaskMediumPriority.value = "mediumPriority";
        editTaskMediumPriority.id = "editTaskMediumPriority";
        editTaskMediumPriority.textContent = "Medium priority";
        editTaskPriorityInput.appendChild(editTaskMediumPriority);

        let editTaskHighPriority = document.createElement("option");
        editTaskHighPriority.value = "highPriority";
        editTaskHighPriority.id = "editTaskHighPriority";
        editTaskHighPriority.textContent = "High priority";
        editTaskPriorityInput.appendChild(editTaskHighPriority);

        let editTaskScheduleParagraph = document.createElement("p");
        editTaskScheduleParagraph.id = "projectNameParagraph";
        editTaskScheduleParagraph.textContent = "Schedule";
        editTaskDivFormMiddle.appendChild(editTaskScheduleParagraph);

        let editTaskScheduleSelect = document.createElement("input");
        editTaskScheduleSelect.type = "date";
        editTaskScheduleSelect.id = "editTaskScheduleSelect";
        editTaskDivFormMiddle.appendChild(editTaskScheduleSelect);

        let editTaskFormDown = document.createElement("div");
        editTaskFormDown.id = "editTaskFormDown";
        editTaskDivForm.appendChild(editTaskFormDown);

        let editTaskFormCloseBtn = document.createElement("button");
        editTaskFormCloseBtn.textContent = "Close";
        editTaskFormCloseBtn.id = "editTaskFormCloseBtn";
        editTaskFormDown.appendChild(editTaskFormCloseBtn);

        let editTaskFormEditBtn = document.createElement("button");
        editTaskFormEditBtn.textContent = "Edit";
        editTaskFormEditBtn.id = "editTaskFormEditBtn";
        editTaskFormDown.appendChild(editTaskFormEditBtn);

        editTaskFormCloseBtn.addEventListener("click", () => {
          editTaskDiv.style.display = "none";
        });

        editTaskFormEditBtn.addEventListener("click", () => {
          if (
            !editTaskInput.value ||
            !editTaskPriorityInput.value ||
            !editTaskScheduleSelect.value
          ) {
            alert("All fields are required!");
          } else {
            task.taskTitle = editTaskInput.value;
            task.priority = editTaskPriorityInput.value;
            task.schedule = editTaskScheduleSelect.value;
            editTaskDiv.style.display = "none";
            displayTasks();
          }
        });
      });
    });
  }

  displayTasks();

  // Function to delete task
  function removeTask(index) {
    tasksList.splice(index, 1);
    displayTasks();
  }

  // Function to add task after completing the form and clicking ADD button
  function addTask() {
    let taskButton = document.getElementById("addTaskFinal");
    taskButton.addEventListener("click", (e) => {
      e.preventDefault();
      let titleValue = document.getElementById("taskNameInput").value;
      let taskPriority = document.getElementById("prioritySelect").value;
      let taskSchedule = document.getElementById("dateInput").value;
      let projectChoice = document.getElementById("projectSelect").value;
      if (!titleValue || !taskPriority || taskSchedule || projectChoice) {
        alert("All fields are required!");
      } else {
        console.log(taskSchedule);
        const task5 = new Task(
          titleValue,
          taskPriority,
          taskSchedule,
          projectChoice
        );
        addTaskToList(task5);
        displayTasks();
        addTaskDivSelect.style.display = "none";
        taskNameInputSelect.value = "";
      }
    });
  }
  addTask();
};
