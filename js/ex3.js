


function myFunction() {
  const mydata = {
    "name":"David",
    "countries": [
                    {
                        "name": "china", 
                        "year":"2014"
                    },
                    {
                        "name": "japan", 
                        "year":"2015"
                    },
                    {
                        "name": "usa", 
                        "year":"2015"
                    }                    
                ]
  }

  
  const url = 'https://thejsway-server.herokuapp.com/api/countries';
  fetch(url, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mydata),
  })
  .then(response => response.text())
  .then(result => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
}