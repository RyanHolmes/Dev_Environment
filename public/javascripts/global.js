var bcrypt = new bCrypt();

$(document).ready(function(){
	$('#loginButton').on('click', loginTest);
	$('#signUpButton').on('click', signUpTest);
});

function test(){
	var p = Ext.create('Ext.panel.Panel', {
	    title: 'It works',
	    width: 200,
	    html: '<p>You win!</p>',
	    renderTo: Ext.getBody()
	});
}

//for the map testing
function renderMapPanel(){
	var address = "";
	var p = Ext.create('Ext.panel.Panel', {
	    title: 'Map',
	    width: 500,
	    height: 500,
	    items: [{
	    	xtype: "toolbar",
	    	id: "mapSearch",
	    	items: [{
	    		//search bar
	    		xtype: "textfield",
	    		id: "mapSearchtf"
	    	},{
	    		//the address search button
	    		xtype: "button",
	    		id: "mapSearchbtn",
	    		text: "Search",
	    		handler: function (){
	    			//build api request string using textbar field - AIzaSyAThImVfp3ithL8PLAi2NaV-erHLtkY0I8
	    			var add = Ext.getCmp("mapSearchtf").value.split(" ");
	    			address = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAThImVfp3ithL8PLAi2NaV-erHLtkY0I8&q=";
	    			//console.log(add);
	    			for(var i = 0; i < add.length; i ++){
	    				if(i < add.length - 1){
		    				address += add[i] + "+";
		    			}
		    			else {
		    				address += add[i];
		    			}
	    			}
	    			console.log(address);
	    			 
	    			var str = "<iframe width='500' height='450' frameborder='0' style='border:0' src=" + address + "></iframe>";
	    			Ext.getCmp("mapView").setHtml(str);
	    			//$('#merpmerp').html(str);
	    		}
	    	}]
	    },{
    		//build map here
    		xtype: "panel",
    		id: "mapView",
    		html: "",
    		scrollable: true    	
	    }],
	    renderTo: Ext.getBody()
	});
}

//called when about butto is clicked
function aboutButton(){
	console.log("About");
}

$('#button1').on('click', function () {
	console.log("hey");
});

function calendarHandler() {
	alert("bols");
}



function loginTest(){




	// var entry = $("#loginText").val();
	// console.log(entry);
	// var data = {"entry": "testinglel"};

	// bcrypt.hashpw(entry, bcrypt.gensalt(10), function(result) {
	// 	console.log(result);

	// 	data = {"entry": result};

	// 	$.ajax({
	// 		type: 'POST',
	// 		data: JSON.stringify(data),
	//         contentType: 'application/json',
	//         url: 'http://localhost:3000/login',
	//         xhrFields: { withCredentials: true },						
	//         success: function(data) {
	//             console.log('success');
	//             console.log(JSON.stringify(data));
	//         }
	//     });
	// });
}

function signUpTest() {
	// var pw = $("#pwText").val();


	// $.ajax({
	// 	type: 'GET',
	// 	url: 'http://localhost:3000/checkpw',
	// 	success: function(data) {
	// 		console.log('success');
	// 		console.log(pw);
	// 		console.log(data[0].pw);

	// 		bcrypt.checkpw(pw, data[0].pw, function(result) {
	// 			console.log("RESULTS OF CHECK:  " + result);
	// 		});

	// 	}
	// });
}