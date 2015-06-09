$(document).ready(function(){

});

function test(){
	var p = Ext.create('Ext.panel.Panel', {
	    title: 'Hello',
	    width: 200,
	    html: '<p>World!</p>',
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