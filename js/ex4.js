
window.addEventListener("load", bind);

function bind() {
  document.getElementById("btnSubmit").addEventListener("click", showResults);
  document.getElementById("btnCancel").addEventListener("click", hideResults);
  document.getElementById("results").style.display='none';
}


function showResults() {
    if (document.getElementById("txtName").value==='' ) {
      alert('Please enter a name!');
      document.getElementById("txtName").focus();
    }

    else if (document.getElementById("txtEmail").value==='') {
      alert('Please enter an email address!')
      document.getElementById("txtEmail").focus();
    }

    else if (emailIsValid(document.getElementById("txtEmail").value)==false) {
      alert('Please enter a valid email address!')
      document.getElementById("txtEmail").focus();
    }

    else if (document.getElementById("cboLocation").value ==='') {
      alert('Please select a preferred location!')
    }
    else {
      getData();
    }
    
} 

function hideResults() {
    let x = document.getElementById("results");
    x.style.display = "none";

    document.getElementById("txtName").value='';
    document.getElementById("txtEmail").value='';
    document.getElementsByName("rdoPayType").checked = false;
    document.getElementById("chkPromotion").checked = false;
    document.getElementById("cboLocation").value ='';

} 

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function getPayType() {
  let v_payType = '';
  let rdo = document.getElementsByName('rdoPayType');     
  for(i = 0; i < rdo.length; i++) {
      if(rdo[i].checked)
      v_payType = rdo[i].value;
  }
  return v_payType;
}

function getData() {
  obj = {
    name : document.getElementById("txtName").value,
    email: document.getElementById("txtEmail").value,
    payType: getPayType(),
    promotion: document.getElementById("chkPromotion").checked,
    location: document.getElementById("cboLocation").value
  }
 
  document.getElementById("lblName").innerHTML = obj.name;
  document.getElementById("lblEmail").innerHTML = obj.email;
  document.getElementById("lblPayType").innerHTML = obj.payType;
  document.getElementById("lblPromotion").innerHTML = obj.promotion;
  document.getElementById("lblLocation").innerHTML = obj.location;

  let x = document.getElementById("results");
  x.style.display = "block";

}

