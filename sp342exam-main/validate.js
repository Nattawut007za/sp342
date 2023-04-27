function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	if (nid.length != 13) {
	  return false;
	  for(i=0, sum=0; i<12;i++)
	  sum += parseFloat(id.charAt(i))*(13-i);
	  if((11-sum%11)%10!=parseFloat(id.charAt(12))) return true;
	} else {
	  return true;
	}
  }
  
  function checkTicketNo() {
	let num = (document.getElementById("ticknum").value).trim();
	if (isNaN(num)) {
	  return false;
	} else {
	  return true;
	}
  }
  
  function validateForm(){
	  if(!checkNID()){
		alert("Invalid value for National ID!");
		document.getElementById("nid").focus();
		return false;
	  }else{
		  if(!checkTicketNo()){
			alert("Invalid value for No.of tickets!!");
			document.getElementById("ticknum").focus();
			return false;
		  }else{
			  total = priceCalculate();
			  alert("Total price for this booking is "+total+" USD");
			  return false;
		  }
	  }
  }