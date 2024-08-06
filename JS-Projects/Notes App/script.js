// Select elements
const notesContainer = document.body.getElementsByClassName("note-container")[0];
const notesCreateBtn = document.body.getElementsByClassName("create-note")[0];

//get data from the localstorage
function showNote() {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
    notesUpdate(); // Add listeners after loading notes
  }
}

showNote();

function update() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Function to add event listeners to existing notes
function notesUpdate() {
  const notes = document.body.getElementsByClassName("input-box");

  Array.from(notes).forEach((note) => {
    note.addEventListener("keyup", update);
  });
}

// Event listener for creating new notes
notesCreateBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let deleteImg = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  deleteImg.src = "delete.png";
  inputBox.appendChild(deleteImg);
  notesContainer.appendChild(inputBox);
  
  //  event listener to the new note
  inputBox.addEventListener("keyup", update);

  // Update localStorage whenever a new note is added
  update();
});

// Event listener for deleting notes and updating localStorage
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    update();
  }
});

// Prevent default Enter key behavior and insert a line break instead
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak"); //modify the text in the browser. using execCommand
    e.preventDefault();
  }
});
