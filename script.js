function biggestnumber(){

	var x = document.getElementById("num1").value;
	var y = document.getElementById("num2").value;
	var z = document.getElementById("num3").value;

	if ((x > y) && (x > z)) { 
		return document.getElementById("display").innerHTML = x + " is the largest number";

	}else if((y > x) && (y > z)) {
        return document.getElementById("display").innerHTML = y + " is the largest number";

	}else if((z > x) && (z > y)) {
		return document.getElementById("display").innerHTML = z + " is the largest number";

	}

}