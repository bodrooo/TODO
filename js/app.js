const inputTask = document.getElementById("input-task")
const btnAddTask = document.getElementById("add-task")
const listTask = document.getElementById("list-task")
const footer = document.getElementById("footer")

const comYears = new Date()
const years = comYears.getFullYear()
footer.innerHTML = `<p>Copyright &copy; Bodrooo ${years}</p>
<p>❤ enjoy for life 😘</p>`

function capitalizeEachWord(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

const h2 = document.createElement("h2")
h2.style.transition = "opacity ease .3s"
h2.textContent = "No Task Yet"
if (document.querySelector(".task") == null) {
  listTask.append(h2)
}

document.addEventListener("click", e => {
  if (e.target.hasAttribute("data-done")) {
    const task = e.target.parentElement.parentElement
    const p = task.querySelector(".text p")
    p.classList.toggle("done-task")
    task.style.boxShadow = 'none'
    setTimeout(() => {
      task.style.boxShadow = '0 2px 4px black'
    }, 350);
  } else if (e.target.hasAttribute("data-delete")) {
    e.target.parentElement.parentElement.style.opacity = 0
    setTimeout(() => {
      e.target.parentElement.parentElement.style.display = "none"
    }, 300);
  }
})

btnAddTask.addEventListener("click", () => {
  if (inputTask.value.length !== 0) {
    h2.style.opacity = 0
    const div = document.createElement("div")
    div.setAttribute("class", "task")
    div.innerHTML = `
    <div class="text">
    <p>
    ${capitalizeEachWord(inputTask.value)}
    </p>
    </div>
    <div class="options">
    <span data-done>&#x2714;</span>
    <span data-delete>&#x2718;</span>
    </div>`
    listTask.append(div)
  } else {
    Swal.fire('Do Something')
  }
  inputTask.value = ""
})