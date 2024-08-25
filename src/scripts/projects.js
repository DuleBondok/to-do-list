import "../../src/styles.css";
import vacation1 from "../../src/images/vacation.png";
import gym1 from "../../src/images/gym.png";
import home1 from "../../src/images/home.png";
import school1 from "../../src/images/school.png";
import work1 from "../../src/images/work.png";
import delete1 from "../../src/images/delete.png";
import edit1 from "../../src/images/edit.png";

const homeIcon = document.getElementById("homeIcon");
const workIcon = document.getElementById("workIcon");
const vacationIcon = document.getElementById("vacationIcon");
const gymIcon = document.getElementById("gymIcon");
const schoolIcon = document.getElementById("schoolIcon");

let addProjectDivSelect = document.getElementById("addProjectDiv");
let projectNameInput = document.getElementById("projectNameInput");

let iconValue;
let iconValue1;

export const buildingProjects = () => {
  let projectsList = [];
  let listOfProjects = document.getElementById("listOfProjects");

  function Project(title, icon) {
    this.title = title;
    this.icon = icon;
  }

  // Function to add a new project to array of project
  function addProjectToList(project) {
    projectsList.push(project);
    let projectSelectOption = document.getElementById("projectSelect");
    let newProjectChoice = document.createElement("option");
    newProjectChoice.value = project.title;
    newProjectChoice.innerHTML = project.title;
    projectSelectOption.appendChild(newProjectChoice);
  }

  let project1 = new Project("Vacation", "work");
  let project2 = new Project("Gym", "gym");

  addProjectToList(project1);
  addProjectToList(project2);

  displayProjects();

  // Function to display added project
  function displayProjects() {
    listOfProjects.innerHTML = "";
    projectsList.forEach((project) => {
      let newProjectDiv = document.createElement("div");
      newProjectDiv.id = "newProjectDiv";
      listOfProjects.appendChild(newProjectDiv);

      if (project.icon === "vacation") {
        let vacationPic = document.createElement("img");
        vacationPic.src = vacation1;
        vacationPic.id = "projectImg";
        newProjectDiv.appendChild(vacationPic);
      } else if (project.icon === "gym") {
        let gymPic = document.createElement("img");
        gymPic.src = gym1;
        gymPic.id = "projectImg";
        newProjectDiv.appendChild(gymPic);
      } else if (project.icon === "home") {
        let homePic = document.createElement("img");
        homePic.src = home1;
        homePic.id = "projectImg";
        newProjectDiv.appendChild(homePic);
      } else if (project.icon === "school") {
        let schoolPic = document.createElement("img");
        schoolPic.src = school1;
        schoolPic.id = "projectImg";
        newProjectDiv.appendChild(schoolPic);
      } else if (project.icon === "work") {
        let workPic = document.createElement("img");
        workPic.src = work1;
        workPic.id = "projectImg";
        newProjectDiv.appendChild(workPic);
      }

      let projectName = document.createElement("h3");
      projectName.id = "projectName";
      projectName.textContent = project.title;
      newProjectDiv.appendChild(projectName);

      let divForButtons = document.createElement("div");
      divForButtons.id = "divForButtons";
      newProjectDiv.appendChild(divForButtons);

      let editBtn = document.createElement("img");
      editBtn.src = edit1;
      editBtn.id = "deleteAndEdit";
      divForButtons.appendChild(editBtn);

      let deleteBtn = document.createElement("img");
      deleteBtn.src = delete1;
      deleteBtn.id = "deleteAndEdit";
      divForButtons.appendChild(deleteBtn);

      let index = projectsList.indexOf(project);
      console.log(project.title);
      console.log(index);

      deleteBtn.addEventListener("click", () => {
        removeProject(index);
      });

      editBtn.addEventListener("click", () => {
        let editDiv = document.createElement("div");
        editDiv.id = "editDiv";

        let body = document.querySelector("body");
        body.appendChild(editDiv);

        let editDivForm = document.createElement("div");
        editDivForm.id = "editDivForm";
        editDiv.appendChild(editDivForm);

        let editDivFormUpper = document.createElement("div");
        editDivFormUpper.id = "editDivFormUpper";
        editDivForm.appendChild(editDivFormUpper);

        let editDivParagraph = document.createElement("p");
        editDivParagraph.textContent = "Edit project";
        editDivParagraph.id = "newTaskParagraph";
        editDivFormUpper.appendChild(editDivParagraph);

        let editDivFormMiddle = document.createElement("div");
        editDivFormMiddle.id = "editDivFormMiddle";
        editDivForm.appendChild(editDivFormMiddle);

        let editNameParagraph = document.createElement("p");
        editNameParagraph.id = "projectNameParagraph";
        editNameParagraph.textContent = "Project name *";
        editDivFormMiddle.appendChild(editNameParagraph);

        let editInput = document.createElement("input");
        editInput.id = "editNameInput";
        editInput.type = "text";
        editInput.placeholder = "e.g. Vacation";
        editDivFormMiddle.appendChild(editInput);

        let editInputIconParagraph = document.createElement("p");
        editInputIconParagraph.id = "projectIconParagraph";
        editInputIconParagraph.textContent = "Project icon";
        editDivFormMiddle.appendChild(editInputIconParagraph);

        let projectIcons = document.createElement("div");
        projectIcons.id = "projectIcons";
        editDivFormMiddle.appendChild(projectIcons);

        let vacationPic = document.createElement("img");
        vacationPic.src = vacation1;
        vacationPic.id = "vacationIcon";
        vacationPic.className = "editIcons";
        projectIcons.appendChild(vacationPic);

        let gymPic = document.createElement("img");
        gymPic.src = gym1;
        gymPic.id = "gymIcon";
        gymPic.className = "editIcons";
        projectIcons.appendChild(gymPic);

        let homePic = document.createElement("img");
        homePic.src = home1;
        homePic.id = "homeIcon";
        homePic.className = "editIcons";
        projectIcons.appendChild(homePic);

        let schoolPic = document.createElement("img");
        schoolPic.src = school1;
        schoolPic.id = "schoolIcon";
        schoolPic.className = "editIcons";
        projectIcons.appendChild(schoolPic);

        let workPic = document.createElement("img");
        workPic.src = work1;
        workPic.id = "workIcon";
        workPic.className = "editIcons";
        projectIcons.appendChild(workPic);

        let editDivFormBottom = document.createElement("div");
        editDivFormBottom.id = "addProjectFormDown";
        editDivForm.appendChild(editDivFormBottom);

        let editCancelButton = document.createElement("button");
        editCancelButton.id = "editCancelButton";
        editCancelButton.textContent = "Cancel";
        editDivFormBottom.appendChild(editCancelButton);

        let editButtonFinal = document.createElement("button");
        editButtonFinal.id = "editButtonFinal";
        editButtonFinal.textContent = "Edit";
        editDivFormBottom.appendChild(editButtonFinal);

        homePic.addEventListener("click", () => {
          homePic.style.border = "1px solid black";
          vacationPic.style.border = "none";
          workPic.style.border = "none";
          gymPic.style.border = "none";
          schoolPic.style.border = "none";
          iconValue1 = "home";
        });

        workPic.addEventListener("click", () => {
          homePic.style.border = "none";
          vacationPic.style.border = "none";
          workPic.style.border = "1px solid black";
          gymPic.style.border = "none";
          schoolPic.style.border = "none";
          iconValue1 = "work";
        });

        gymPic.addEventListener("click", () => {
          homePic.style.border = "none";
          vacationPic.style.border = "none";
          workPic.style.border = "none";
          gymPic.style.border = "1px solid black";
          schoolPic.style.border = "none";
          iconValue1 = "gym";
        });

        vacationPic.addEventListener("click", () => {
          homePic.style.border = "none";
          vacationPic.style.border = "1px solid black";
          workPic.style.border = "none";
          gymPic.style.border = "none";
          schoolPic.style.border = "none";
          iconValue1 = "vacation";
        });

        schoolPic.addEventListener("click", () => {
          homePic.style.border = "none";
          vacationPic.style.border = "none";
          workPic.style.border = "none";
          gymPic.style.border = "none";
          schoolPic.style.border = "1px solid black";
          iconValue1 = "school";
        });

        editCancelButton.addEventListener("click", () => {
          editDiv.style.display = "none";
        });

        editButtonFinal.addEventListener("click", () => {
          if (!editInput.value) {
            alert("Title is required!");
          } else {
            project.title = editInput.value;
            project.icon = iconValue1;
            editDiv.style.display = "none";
            displayProjects();
          }
        });
      });
    });
  }

  // Function to change the style of icons and to select icon on click
  function iconsName() {
    homeIcon.addEventListener("click", () => {
      homeIcon.style.border = "1px solid black";
      vacationIcon.style.border = "none";
      workIcon.style.border = "none";
      gymIcon.style.border = "none";
      schoolIcon.style.border = "none";
      iconValue = "home";
    });

    workIcon.addEventListener("click", () => {
      homeIcon.style.border = "none";
      vacationIcon.style.border = "none";
      workIcon.style.border = "1px solid black";
      gymIcon.style.border = "none";
      schoolIcon.style.border = "none";
      iconValue = "work";
    });

    gymIcon.addEventListener("click", () => {
      homeIcon.style.border = "none";
      vacationIcon.style.border = "none";
      workIcon.style.border = "none";
      gymIcon.style.border = "1px solid black";
      schoolIcon.style.border = "none";
      iconValue = "gym";
    });

    vacationIcon.addEventListener("click", () => {
      homeIcon.style.border = "none";
      vacationIcon.style.border = "1px solid black";
      workIcon.style.border = "none";
      gymIcon.style.border = "none";
      schoolIcon.style.border = "none";
      iconValue = "vacation";
    });

    schoolIcon.addEventListener("click", () => {
      homeIcon.style.border = "none";
      vacationIcon.style.border = "none";
      workIcon.style.border = "none";
      gymIcon.style.border = "none";
      schoolIcon.style.border = "1px solid black";
      iconValue = "school";
    });
    return iconValue;
  }

  iconsName();

  // Function to remove project from the list
  function removeProject(index) {
    projectsList.splice(index, 1);
    displayProjects();
  }

  //Function to add project after completing the form and clicking the ADD button
  function addProject() {
    let projectButton = document.getElementById("addProjectFinal");
    projectButton.addEventListener("click", (e) => {
      e.preventDefault();
      let titleValue = document.getElementById("projectNameInput").value;
      if (!titleValue) {
        alert("You have to name a project!");
      } else {
        console.log(iconValue);
        const project5 = new Project(titleValue, iconValue);
        addProjectToList(project5);
        displayProjects();
        addProjectDivSelect.style.display = "none";
        projectNameInput.value = "";
        iconsName();
      }
    });
  }
  addProject();
};
