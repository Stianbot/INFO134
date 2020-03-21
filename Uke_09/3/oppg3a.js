 o1 = {
	 message: "Dette er en melding",
	 greet: function(){
		 console.log(o1.message/*this.message*/);
	 },
	 btn: "",
	 get button(){
		 if (this.btn){
			 return this.btn;
		 }
		  this.btn = document.createElement("button");
		  this.btn.appendChild(document.createTextNode("Button"))
		  document.body.appendChild(this.btn)
		  this.btn.onclick = o1.greet;
		  return this.btn
	 }
	 
 }
 
 

 var knapp2 = document.getElementById("knapp2");
 knapp2.onclick = o1.greet;

 
