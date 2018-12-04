// JavaScript Document
// sends file to google script to write form values to google sheet
		
	  const scriptURL = 'https://script.google.com/macros/s/AKfycbwITY4UPwOxFjGmKzmF7M2q7fn-mst92CKYF7FUhyaGn1R0oK1D/exec'
	  const form = document.forms['submit-to-google-sheet']

	  form.addEventListener('submit', e => {
		e.preventDefault()});
		
		function dataEntry(){ 
			
			
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response => console.log('Success!', response))
		  .catch(error => console.error('Error!', error.message))
		}
		
    function chk()
	{
		
		var custName = document.getElementById("Cust_Name").value;
		var custMobile = document.getElementById("Mobile_No").value;
		var custEmail = document.getElementById("Email_Addr").value;
		var custAddr = document.getElementById("Cust_Addr").value;
		var custPin = document.getElementById("Cust_Pincode").value;
		
		var rad1 = document.getElementById('radio1');
		
		var radioChecked = 0;
		var radioValue = "";
		var ddl1Select = 0;
		var ddl2Select = 0;
		var radioIds = ['radio1','radio2','radio3','radio4','radio5','radio6'];
		
		for(i=0; i<radioIds.length;i++){
			var rad = document.getElementById(radioIds[i]);
			if(rad.checked){
				radioChecked = 1;
				radioValue = rad.value;
			}
		}
		
		if(radioValue == 5){
			if(document.getElementById("dd5_9").value != 'Select')
				ddl1Select = 1;
		
		}
		if(radioValue == 6){
		if(document.getElementById("dd10_100").value != 'Select')
				ddl2Select = 1;
		}
		
		
		//alert(radioChecked);
		
		if (custName == '' || custEmail == '' || custMobile == '' || custAddr == '' || custPin ==  '') {
			alert("Please fill all fields!");
			//validEntry=0;
		
		} else if (!/\S+@\S+\.\S+/.test(custEmail)) {
			alert("Invalid Email!");
			//validEntry=0;
		}
		else if(radioChecked == 0){
			alert("Please select number of names required!");
		}
		/*else if (rad1.checked) {
			var rad1txt=document.getElementById('1_Name');
			if(rad1txt.value.length == 0){
				alert("Please enter the Name!");
			}
			//validEntry=0;
		} 
		else if (radioValue == 2) {
			if(document.getElementById("2_Name_1").value == '' || document.getElementById("2_Name_2").value == ''){
				alert("Please enter both the 2 Names!");
			}
			//validEntry=0;
		}
		else if (radioValue == 3) {
			if(document.getElementById("3_Name_1").value == '' || document.getElementById("3_Name_2").value == '' || document.getElementById("3_Name_3").value == ''){
				alert("Please enter all the 3 Names!");
			}
			//validEntry=0;
		}
		else if (radioValue == 4) {
			if(document.getElementById("4_Name_1").value == '' || document.getElementById("4_Name_2").value == '' || document.getElementById("4_Name_3").value == '' || document.getElementById("4_Name_4").value == ''){
				alert("Please enter all the 4 Names!");
			}
			//validEntry=0;
		}*/
		else if (radioValue == 5 && ddl1Select == 0) {
			alert("Please select Number of Names for 5+ Order!");//validEntry=0;
		}
		else if (radioValue == 6 && ddl2Select == 0) {
			alert("Please select Number of Names for 10+ Order!");//validEntry=0;
		}
		else //validEntry=1;
		{
			dataEntry();
			document.getElementById("submit-form").click();
		}
		
		//alert(validEntry);
	}
	
		
	//preview names	
	
	document.getElementById("myInput").onkeydown = chkEvent  
	//var formInUse = false;
	function chkEvent(e) 
	{
		var keycode;
		if (window.event) keycode = window.event.keyCode; 
		else if (e) keycode = e.which; 

		//if ((keycode > 64 && keycode < 91) || (keycode > 96 && keycode < 123) || keycode == 8 || keycode == 32)
		if ((keycode > 64 && keycode < 68) || (keycode > 96 && keycode < 100) || keycode == 8 || keycode == 32 || keycode == 127)
			return true;
		else
			return false;

	}	
		
	
	/*document.getElementById("Mobile_No").onkeydown = chkNoInput;
	document.getElementById("Cust_Pincode").onkeydown = chkNoInput;
	
	function chkNoInput(f) 
	{
		var keycode;
		if (window.event) keycode = window.event.keyCode; 
		else if (f) keycode = f.which; 

		//if ((keycode > 64 && keycode < 91) || (keycode > 96 && keycode < 123) || keycode == 8 || keycode == 32)
		if ((keycode >47  && keycode < 58) || keycode == 8 || keycode == 127 || keycode == 8)
			return true;
		else
			return false;

	}		*/
	

	function myFunction() 
	{
		document.getElementById("dvPreview").innerHTML="";
		var images = [];
		var x = document.getElementById("myInput").value;

		var i;
		for(i=0; i<x.length; i++)
		{
			if(x[i]=='A' || x[i]=='a'){images.push("images/A.png");}
			else if(x[i]=='B' || x[i]=='b'){images.push("images/B.png");}
			else if(x[i]=='C' || x[i]=='c'){images.push("images/C.png");}
			else if(x[i]==' '){images.push("images/Empty.png");}
			else {document.getElementById("error").innerHTML="Enter Valid Char!"}
		}

		display(images)
	}

	function display(images)
	{
		var dvPreview = document.getElementById("dvPreview");
		dvPreview.innerHTML = "";

		for (var i = 0; i < images.length; i++)
		{         
			
			if (images[i] == "images/Empty.png"){
				dvPreview.innerHTML += "<pre>" + "\n" +"</pre>";
			}
			else{
				var img = document.createElement("IMG");
				img.height = "50";
				//img.width = auto;
				img.src = images[i];
				dvPreview.appendChild(img);
			}
		}
	}
		
    // add values 10-100 to dropdown
		
	$(function(){
    var $select = $(".dd10_100");
	$select.append($('<option></option>').val("Select").html("Select No. of Names"));
    for (i=10;i<=100;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
	});
		
	// reload webpage
		
	function refreshPage(){
		//alert("in refresh page");
			//window.location.reload();
		document.getElementById("btnReset").click();
		showDiv();
		document.getElementById('orderform').scrollIntoView();
		document.getElementById("Cust_Name").focus();
		
	} 

	// set Modal iframe URL & set google drive folder name
		
	function setURL(){

		var fldrName = Math.random().toString(36).substr(2, 8);
		var link = 'https://script.google.com/macros/s/AKfycbwuHuj-FUyvgikfkjodnAqcNK1AgsRqMGdNw-hHT_fWpzrsBuFX/exec?name=' + fldrName;
		document.getElementById("iFrmfileUpload").src = link;
		document.getElementById("gDriveFldr").value = fldrName;						
	}

	// set price for drop downs	

	 function val(id,price,id2) {
		document.getElementById(id2).disabled = false;
		setURL();
		setNoNames(document.getElementById(id).value,price);
		}	

	// sets number of orders and per order value	
		
	function setNoNames(no,val){
		//alert(val);
		document.getElementById("noNames").value = no;
		document.getElementById("cost").value = val;
		calc();
	}	

	// calculates final amount and delivery charges	
		
	function calc(){
		var numName = document.getElementById("noNames").value;
		var cstName =  document.getElementById("cost").value;
		var value = numName * cstName;
		var delPrice = 20 * numName;
		
		document.getElementById("numNames").innerHTML =  numName;
		document.getElementById("cstName").innerHTML =  cstName;
		document.getElementById("value").innerHTML =  value;
		document.getElementById("delPrice").innerHTML =  delPrice;
		document.getElementById("price").innerHTML =  value + delPrice;
	}
		
	// shows/hides order div's on radio button click
		
		function clearText(){
		//alert("in Clear");
		var ids = ['Name_1','Name_2','Name_3','Name_4','Name_5','Name_6','Name_7','Name_8','Name_9'];
		
		var i;
		for(i=0;i<ids.length;i++)
		{
			document.getElementById(ids[i]).value='';
		}
	}
		
		
	  function showDiv(id) {

		clearText();  
		
		if(id == 1){
			document.getElementById("nameDiv1").style.display = "block";
			document.getElementById("nameDiv2").style.display = "none";
			document.getElementById("nameDiv3").style.display = "none";
			document.getElementById("nameDiv4").style.display = "none";
			document.getElementById("nameDiv5").style.display = "none";
			document.getElementById("nameDiv6").style.display = "none";
			document.getElementById("nameDiv7").style.display = "none";
			document.getElementById("nameDiv8").style.display = "none";
			document.getElementById("nameDiv9").style.display = "none";
			document.getElementById("hidDiv5").style.display = "none";
			document.getElementById("hidDiv6").style.display = "none";
			document.getElementById("dd5_9").selectedIndex = 0;
			document.getElementById("dd10_100").selectedIndex = 0;
			document.getElementById("Name_1").focus();
		} 
		else if (id == 2){
			document.getElementById("nameDiv1").style.display = "block";
			document.getElementById("nameDiv2").style.display = "block";
			document.getElementById("nameDiv3").style.display = "none";
			document.getElementById("nameDiv4").style.display = "none";
			document.getElementById("nameDiv5").style.display = "none";
			document.getElementById("nameDiv6").style.display = "none";
			document.getElementById("nameDiv7").style.display = "none";
			document.getElementById("nameDiv8").style.display = "none";
			document.getElementById("nameDiv9").style.display = "none";
			document.getElementById("hidDiv5").style.display = "none";
			document.getElementById("hidDiv6").style.display = "none";
			document.getElementById("dd5_9").selectedIndex = 0;
			document.getElementById("dd10_100").selectedIndex = 0;
			document.getElementById("Name_1").focus();
		}
		else if (id == 3){
			document.getElementById("nameDiv1").style.display = "block";
			document.getElementById("nameDiv2").style.display = "block";
			document.getElementById("nameDiv3").style.display = "block";
			document.getElementById("nameDiv4").style.display = "none";
			document.getElementById("nameDiv5").style.display = "none";
			document.getElementById("nameDiv6").style.display = "none";
			document.getElementById("nameDiv7").style.display = "none";
			document.getElementById("nameDiv8").style.display = "none";
			document.getElementById("nameDiv9").style.display = "none";
			document.getElementById("hidDiv5").style.display = "none";
			document.getElementById("hidDiv6").style.display = "none";
			document.getElementById("dd5_9").selectedIndex = 0;
			document.getElementById("dd10_100").selectedIndex = 0;
			document.getElementById("Name_1").focus();
		}
		else if (id == 4){
			document.getElementById("nameDiv1").style.display = "block";
			document.getElementById("nameDiv2").style.display = "block";
			document.getElementById("nameDiv3").style.display = "block";
			document.getElementById("nameDiv4").style.display = "block";
			document.getElementById("nameDiv5").style.display = "none";
			document.getElementById("nameDiv6").style.display = "none";
			document.getElementById("nameDiv7").style.display = "none";
			document.getElementById("nameDiv8").style.display = "none";
			document.getElementById("nameDiv9").style.display = "none";
			document.getElementById("hidDiv5").style.display = "none";
			document.getElementById("hidDiv6").style.display = "none";
			document.getElementById("dd5_9").selectedIndex = 0;
			document.getElementById("dd10_100").selectedIndex = 0;
			document.getElementById("Name_1").focus();
		}  
		else if (id == 5){
			document.getElementById("nameDiv1").style.display = "block";
			document.getElementById("nameDiv2").style.display = "block";
			document.getElementById("nameDiv3").style.display = "block";
			document.getElementById("nameDiv4").style.display = "block";
			document.getElementById("nameDiv5").style.display = "block";
			document.getElementById("nameDiv6").style.display = "none";
			document.getElementById("nameDiv7").style.display = "none";
			document.getElementById("nameDiv8").style.display = "none";
			document.getElementById("nameDiv9").style.display = "none";
			document.getElementById("hidDiv5").style.display = "block";
			document.getElementById("hidDiv6").style.display = "none";
			//document.getElementById("dd5_9").selectedIndex = 0;
			document.getElementById("dd10_100").selectedIndex = 0;
			document.getElementById("Name_1").focus();
		}
		else if (id == 6){
			document.getElementById("nameDiv1").style.display = "block";
			document.getElementById("nameDiv2").style.display = "block";
			document.getElementById("nameDiv3").style.display = "block";
			document.getElementById("nameDiv4").style.display = "block";
			document.getElementById("nameDiv5").style.display = "block";
			document.getElementById("nameDiv6").style.display = "block";
			document.getElementById("nameDiv7").style.display = "none";
			document.getElementById("nameDiv8").style.display = "none";
			document.getElementById("nameDiv9").style.display = "none";
			document.getElementById("hidDiv5").style.display = "block";
			document.getElementById("hidDiv6").style.display = "none";
			//document.getElementById("dd5_9").selectedIndex = 0;
			document.getElementById("dd10_100").selectedIndex = 0;
			document.getElementById("Name_1").focus();
		}  
		else if (id == 7){
			document.getElementById("nameDiv1").style.display = "block";
			document.getElementById("nameDiv2").style.display = "block";
			document.getElementById("nameDiv3").style.display = "block";
			document.getElementById("nameDiv4").style.display = "block";
			document.getElementById("nameDiv5").style.display = "block";
			document.getElementById("nameDiv6").style.display = "block";
			document.getElementById("nameDiv7").style.display = "block";
			document.getElementById("nameDiv8").style.display = "none";
			document.getElementById("nameDiv9").style.display = "none";
			document.getElementById("hidDiv5").style.display = "block";
			document.getElementById("hidDiv6").style.display = "none";
			//document.getElementById("dd5_9").selectedIndex = 0;
			document.getElementById("dd10_100").selectedIndex = 0;
			document.getElementById("Name_1").focus();
		}
		else if (id == 8){
			document.getElementById("nameDiv1").style.display = "block";
			document.getElementById("nameDiv2").style.display = "block";
			document.getElementById("nameDiv3").style.display = "block";
			document.getElementById("nameDiv4").style.display = "block";
			document.getElementById("nameDiv5").style.display = "block";
			document.getElementById("nameDiv6").style.display = "block";
			document.getElementById("nameDiv7").style.display = "block";
			document.getElementById("nameDiv8").style.display = "block";
			document.getElementById("nameDiv9").style.display = "none";
			document.getElementById("hidDiv5").style.display = "block";
			document.getElementById("hidDiv6").style.display = "none";
			//document.getElementById("dd5_9").selectedIndex = 0;
			document.getElementById("dd10_100").selectedIndex = 0;
			document.getElementById("Name_1").focus();
		}
		else if (id == 9){
			document.getElementById("nameDiv1").style.display = "block";
			document.getElementById("nameDiv2").style.display = "block";
			document.getElementById("nameDiv3").style.display = "block";
			document.getElementById("nameDiv4").style.display = "block";
			document.getElementById("nameDiv5").style.display = "block";
			document.getElementById("nameDiv6").style.display = "block";
			document.getElementById("nameDiv7").style.display = "block";
			document.getElementById("nameDiv8").style.display = "block";
			document.getElementById("nameDiv9").style.display = "block";
			document.getElementById("hidDiv5").style.display = "block";
			document.getElementById("hidDiv6").style.display = "none";
			//document.getElementById("dd5_9").selectedIndex = 0;
			document.getElementById("dd10_100").selectedIndex = 0;
			document.getElementById("Name_1").focus();
		}
		else if (id =='hidDiv5'){
			document.getElementById("hidDiv5").style.display = "block";
			document.getElementById("hidDiv6").style.display = "none";
			document.getElementById("nameDiv1").style.display = "none";
			document.getElementById("nameDiv2").style.display = "none";
			document.getElementById("nameDiv3").style.display = "none";
			document.getElementById("nameDiv4").style.display = "none";
			document.getElementById("nameDiv5").style.display = "none";
			document.getElementById("nameDiv6").style.display = "none";
			document.getElementById("nameDiv7").style.display = "none";
			document.getElementById("nameDiv8").style.display = "none";
			document.getElementById("nameDiv9").style.display = "none";
			document.getElementById("dd10_100").selectedIndex = 0;
			document.getElementById("dd5_9").focus();
		}
		else if (id =='hidDiv6'){
			document.getElementById("hidDiv5").style.display = "none";
			document.getElementById("hidDiv6").style.display = "block";
			document.getElementById("nameDiv1").style.display = "none";
			document.getElementById("nameDiv2").style.display = "none";
			document.getElementById("nameDiv3").style.display = "none";
			document.getElementById("nameDiv4").style.display = "none";
			document.getElementById("nameDiv5").style.display = "none";
			document.getElementById("nameDiv6").style.display = "none";
			document.getElementById("nameDiv7").style.display = "none";
			document.getElementById("nameDiv8").style.display = "none";
			document.getElementById("nameDiv9").style.display = "none";
			document.getElementById("dd5_9").selectedIndex = 0;
			document.getElementById("dd10_100").focus();
		}
		else{
			document.getElementById("hidDiv5").style.display = "none";
			document.getElementById("hidDiv6").style.display = "none";
			document.getElementById("nameDiv1").style.display = "none";
			document.getElementById("nameDiv2").style.display = "none";
			document.getElementById("nameDiv3").style.display = "none";
			document.getElementById("nameDiv4").style.display = "none";
			document.getElementById("nameDiv5").style.display = "none";
			document.getElementById("nameDiv6").style.display = "none";
			document.getElementById("nameDiv7").style.display = "none";
			document.getElementById("nameDiv8").style.display = "none";
			document.getElementById("nameDiv9").style.display = "none";
			document.getElementById("dd5_9").selectedIndex = 0;
			document.getElementById("dd10_100").selectedIndex = 0;
			document.getElementById("Name_1").focus();
		}
		
		  
		if(id =='hidDiv6')
		{
			document.getElementById("btnPlaceOrder").disabled = true;
		}
		else {
			document.getElementById("btnPlaceOrder").disabled = false;
		}
	  }			