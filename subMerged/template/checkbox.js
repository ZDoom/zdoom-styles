// redhair needs help from a Javascript guru to merge these funtions together so that when you click "mark all", the images change as well.
// So feel up for it? Let me know when you cracked it :) http://submerged.nl.nu
// Corrected by lostmind

var inputs;
var imgFalse = "styles/subMerged/imageset/false.gif";
var imgTrue = "styles/subMerged/imageset/true.gif";

//this function runs when the page is loaded, put all your other onload stuff in here too.
function init() {
	replaceChecks();
}

function replaceChecks() {
	
	//get all the input fields on the page
	inputs = document.getElementsByTagName('input');

	//cycle trough the input fields
	for(var i=0; i < inputs.length; i++) {

		//check if the input is a checkbox
		if(inputs[i].getAttribute('type') == 'checkbox') { 

			
			//create a new image
			var img = document.createElement('img');
			
			//check if the checkbox is checked
			if(inputs[i].checked) {
				img.src = imgTrue;
			} else {
				img.src = imgFalse;
			}

			//set image ID and onclick action
			img.id = 'checkImage'+i;
			//set image 
			img.onclick = new Function('checkChange('+i+')');
			//place image in front of the checkbox
			inputs[i].parentNode.insertBefore(img, inputs[i]);
			
			//hide the checkbox
			inputs[i].style.display='none';
		}
	}
}

//change the checkbox status and the replacement image
function checkChange(i) {

	if(inputs[i].checked) {
		inputs[i].checked = '';
		document.getElementById('checkImage'+i).src=imgFalse;
	} else {
		inputs[i].checked = 'checked';
		document.getElementById('checkImage'+i).src=imgTrue;
	}
}

window.onload = init;