

window.addEventListener("load", bind);

function bind() {
  document.getElementById("btnSubmit").addEventListener("click", showResults);
  document.getElementById("btnCancel").addEventListener("click", hideResults);
  document.getElementById("results").style.display='none';
}



function showResults() {
  var x = document.getElementById("results");
    x.style.display = "block";
} 

function hideResults() {
  var x = document.getElementById("results");
    x.style.display = "none";
} 