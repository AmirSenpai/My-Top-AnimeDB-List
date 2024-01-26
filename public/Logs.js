function ShowOldLogs() {
  let oldLogs = document.getElementById("oldLogs");
  let a = confirm("Loading ...");
  if (a == false) {
    alert("You Clicked On Cancel. Process Failed");
  } else {
    oldLogs.style.display = "block";
    oldLogs.style.display = "block";
  }
}
