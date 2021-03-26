

function myFunction() {
  getData();
}


function getData() {
  clearValues();

  let myObj = []
  const url = 'https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json';

  fetch(url)
  .then(response => response.json())
  .then(data => data.forEach(elm => 
      myObj.push({name: elm.name, year: elm.year, artist: elm.artist})
    ),
  )
  .then(function () {
    let table = document.getElementById("paintings");
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
      
    for (let i=0; i<myObj.length; i++){
      let tr = document.createElement('tr');
       tableBody.appendChild(tr);
       
       for (let j=0; j<1; j++){
        let td1 = document.createElement('td');
        td1.appendChild(document.createTextNode( myObj[i].name ));
        tr.appendChild(td1);
       }
       for (let j=1; j<2; j++){
        let td2 = document.createElement('td');
        td2.appendChild(document.createTextNode( myObj[i].year ));
        tr.appendChild(td2);
       }
       for (let j=2; j<3; j++){
        let td3 = document.createElement('td');
        td3.appendChild(document.createTextNode( myObj[i].artist ));
        tr.appendChild(td3);
       }
    }
    table.appendChild(tableBody);
  }
  )
  .catch(function (err) {
    console.log('Fetch Error: ', err);
  })
}


function clearValues() {
  let table = document.getElementById('paintings');
  while(table.childNodes.length>2){table.removeChild(table.lastChild);}
}
