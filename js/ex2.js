

window.addEventListener("load", bind);

function bind() {
  document.getElementById("results").style.display='none';
  
  var input = document.getElementById("btnLookup");
  input.addEventListener("keyup", function(event) {
    if (event.key === 13) {
      event.preventDefault();
      document.getElementById("btnLookup").click();
    }
  }); 

}


function showResults() {
  var x = document.getElementById("results");
    x.style.display = "block";
} 

function hideResults() {
  var x = document.getElementById("results");
    x.style.display = "none";
} 



function myFunction() {
  let myVal = document.getElementById("txtInput").value;
  if (myVal !='') {
    getData();
  }
  else {
    alert('Please enter a lookup name!')
    document.getElementById("txtInput").focus();
  }

}

function getData() {
  let myObj = []
  const url = 'https://api.github.com/users/' + document.getElementById("txtInput").value;
  let v_name = document.getElementById("lblName");
  let v_blog = document.getElementById("lblBlog");
  let v_create = document.getElementById("lblCreated");
  let v_img = document.getElementById("img-github");

  fetch(url)
  .then(response => response.json())
  .then(data => myObj.push({name: data.name, blog: data.blog, created_at: data.created_at,avatar_url: data.avatar_url }))
  .then(function () {
    if (myObj[0].name != undefined) {
      v_name.innerHTML = myObj[0].name;
      v_blog.innerHTML = myObj[0].blog;
      v_create.innerHTML = myObj[0].created_at;
      v_img.src = myObj[0].avatar_url;
      v_img.src = myObj[0].avatar_url;
      v_img.style.display ='block';
      showResults();
    }
    else {
      clearValues();
      alert('No records found!')
    }

  }
  )
  .catch(function (err) {
    hideResults();
    console.log('Fetch Error: ', err);
  })
}


function clearValues() {
  document.getElementById("lblName").innerHTML ='';
  document.getElementById("lblBlog").innerHTML ='';
  document.getElementById("lblCreated").innerHTML ='';
  document.getElementById("img-github").src ='';
  document.getElementById("img-github").style.display ='none';
  document.getElementById("txtInput").value ='';
  document.getElementById("txtInput").focus();
  hideResults();
}
