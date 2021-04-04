
window.addEventListener("load", bind);

function bind() {
  document.getElementById("btnSubmit").addEventListener("click", myFunction);
  document.getElementById("btnClear").addEventListener("click", clear);
}

function myObj() {
  let v_name = document.getElementById("txtName").value;
  let countries = [];
  let year = []

  let str1 = document.getElementById("txtCountry").value;
  countries = str1.split(',');

  let str2 = document.getElementById("txtYear").value;
  year = str2.split(',');

  let countryArray = [];
  for (var i = 0; i < countries.length; i++) {
    countryArray.push({
          countries: [{
            name: countries[i],
            year: year[i] 
        }]
      });
  }
  let myObj = {
    name: v_name,
    countries: countryArray
  }

  return myObj;

}

function myFunction() {
  const url = 'https://thejsway-server.herokuapp.com/api/countries';
  fetch(url, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(myObj()),
  })
  .then(response => response.text())
  .then(result => {
    console.log('Success:', result);
    alert(result);
  })
  .catch((error) => {
    console.log('Error:', error);
    alert(error);
  });
}


function clear() {
  document.getElementById("txtName").value='';
  document.getElementById("txtCountry").value='';
  document.getElementById("txtYear").value='';
}