//var bcrypt = new bCrypt();

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

//renders the calendar
function calendarHandler() {
	//get columns and store for the agenda view 
	var gridColumns = getCalendarColumns("detailedCalendar");
	var gridStore = getCalendarStore (gridColumns, "detailedCalendar");

	var p = Ext.create('Ext.panel.Panel', {
	    title: 'Calendar',
	    margin: "10 10 10 10",
	    closable: true,
	    width: $(window).width() - 100,
	    height: $(window).height() - 100,
	    items: [{
	    	xtype: 'panel',
	    	id: "outerPanel",
	    	border: false,
	    	layout: {
	    		type: "vbox",
	    		align: "stretch"
	    	},
	    	items: [{
	    		xtype: "toolbar",
	    		flex: 1,
	    		border: false,
	    		items:[{
	    			xtype: "label",
	    			id: "calendarDate",
	    			text: "",
	    			listeners: {
	    				afterrender: function(t, e){
	    					var dateArr = Ext.getCmp("miniCalendar").getValue().toString().split(" ");
		    				var formattedDate = "";
		    				for (var i = 0; i < 4; i++){
		    					formattedDate += dateArr[i];
		    					formattedDate += " ";
		    				}
	    					t.setText(formattedDate);
	    				}
	    			}
	    		}]
	    	},{
	    		xtype: "panel",
	    		id: "calendar",
	    		flex: 10,
	    		border: false,
	    		layout: {
	    			type: "hbox",
	    			align: "stretch"
	    		},
	    		items : [{
	    			xtype: "panel",
	    			id: "leftCalendar",
	    			flex: 1,
	    			layout: {
	    				type: "vbox",
	    				align: "stretch"
	    			},
	    			border: 'false',
	    			items : [{
		    			xtype: "datepicker",
		    			id: "miniCalendar",
		    			handler: function (picker, date){
		    				var dateArr = date.toString().split(" ");
		    				var formattedDate = "";
		    				for (var i = 0; i < 4; i++){
		    					formattedDate += dateArr[i];
		    					formattedDate += " ";
		    				}
		    				Ext.getCmp("calendarDate").setText(formattedDate);
		    			}
	    			}]	
	    		},{
	    			xtype: "grid",
	    			id: "detailedCalendar",
	    			columns: gridColumns,
	    			store: gridStore,
	    			flex: 6,
	    			listeners : {
	    				cellcontextmenu: function ( t, td, cellIndex, record, tr, rowIndex, e, eOpts ) {
	    					var position = e.getXY();
	                        e.stopEvent();
	                        var menu_grid = Ext.create('Ext.menu.Menu', {
							    width: 100,
							    margin: '0 0 10 0',
							    items: [{
							        text: 'Add Event',
							        handler: function (){
							        	//pop-up for creating event - name, color, duration, description etc
							        	var win = Ext.create('Ext.window.Window', {
										    title: 'Add New Event',
										    height: 250,
										    width: 410,
										    layout: {
										    	type: 'vbox',
										    	align: "stretch"
										    },
										    items: [{  
										        xtype: "toolbar",
										        border: false,
										        items: [{
										        	xtype: "textfield",
										        	emptyText: "Title"
										        }, {
										        	xtype: 'button',
										        	text: 'Event Color',
										        	handler: function (){
										        		var e = Ext.create('Ext.picker.Color', {
														   width: 200,
														   height: 150,
														    listeners: {
														        select: function(picker, selColor) {
														        	Ext.getCmp('colorPreviewBtn').setStyle('background', "#" + selColor);
														        	w.close();
														        }
														    }
														});

														var w = Ext.create('Ext.window.Window', {
															layout: "fit", 
														    items: [e]
														});

														w.show();
										        	}
										        }, {
										        	xtype: 'button',
										        	id: 'colorPreviewBtn'

										        }]
										    },{
										    	xtype: "textarea",
										    	emptyText: "Description",
										    	margin: "5 5 5 5"
										    }, {
										    	xtype: "toolbar",
										    	border: false,
										    	items: [{
										    		xtype: 'button',
										    		text: "Start Time",
										    		listeners : {
										    			// Preset button label to time clicked
										    			afterrender: function (t, eOpts) {
										    				t.setText(record.data.Time);
										    			}
										    		},
										    		handler: function (){
										    			console.log("START TIME");
										    		}
										    	},{
										    		//RYANTODO: chang to numberfields and am/pm dropdown
										    		xtype: 'button',
										    		text: "End Time",
										    		handler: function (){
										    			//THIS IS FUCKY RYANTODO:
										    			//var e = Ext.create('Ext.picker.Time', {
														//    width: 100,
														//    height: 200,
														//    increment: 30,
														//    minValue: Ext.Date.parse('12:00:00 AM', 'h:i:s A'),
														//    maxValue: Ext.Date.parse('12:00:00 PM', 'h:i:s A'),
														//     listeners: {
														//         select: function (t, rec, e) {
														//             alert(rec);
														//         }
														//     }
														// });

														// var w = Ext.create('Ext.window.Window', {
														// 	layout: "fit", 
														//     items: [e]
														// });

														// w.show();
										    		}
										    	},{
										    		xtype: "label",
										    		text: "Notify Me",
										    		margin: "0 5 0 10"
										    	},{
										    		xtype: "numberfield",
										    		width: 60,
										    		margin: "0 0 0 0",
											        value: 24,
											        maxValue: 72,
											        minValue: 0
										    	},{
										    		xtype: "label",
										    		margin: "0 0 0 5",
										    		text: "Hours Prior"
										    	}]
										    },{
										    	xtype: "toolbar",
										    	margin: "20 0 0 0",
										    	border: false,
										    	items: [{
										    		xtype: 'button',
										    		text: "Add Event",
										    		handler: function (){
											    		console.log("EVENT ADDED");
											    	}
										    	}]
										    }]
										});
										win.show();
							        }
							    },{
							        text: 'Delete Event',
							        handler: function (){
							        	alert("eh");
							        }
							    },{
							        text: 'Edit Event',
							        handler: function (){
							        	alert("eh");
							        }
							    }]
							});
	                        menu_grid.showAt(position);
	    				}
	    			}
	    		}]
	    	}]
	    }],
	    renderTo: Ext.get('cal')
	});
}

function getCalendarColumns (id){
	switch (id) {
		case 'detailedCalendar': 
			var columns = {
              defaults: {
                align: "center",
                sortable: false
              },
              items: [{
                text: "Time",
                width: "10%",
                dataIndex: "Time"
              }, {
                text: "Events",
                width: "90%",
                dataIndex: "Events"
              }]
            }
			break;
	}
	return columns;
}

function getCalendarStore (columns, id){
	//var data = [];
	switch (id) {
		case 'detailedCalendar':
			var data = {
				'items': [{
	                'Time': '12:00am',
	                'Events': ""
	              }, {
	                'Time': '12:30am',
	                'Events': ""
	              }, {
	                'Time': '1:00am',
	                'Events': ""
	              }, {
	                'Time': '1:30am',
	                'Events': ""
	              }, {
	                'Time': '2:00am',
	                'Events': ""
	              }, {
	                'Time': '2:30am',
	                'Events': ""
	              }, {
	                'Time': '3:00am',
	                'Events': ""
	              },{
	                'Time': '3:30am',
	                'Events': ""
	              }, {
	                'Time': '4:00am',
	                'Events': ""
	              }, {
	                'Time': '4:30am',
	                'Events': ""
	              }, {
	                'Time': '5:00am',
	                'Events': ""
	              }, {
	                'Time': '5:30am',
	                'Events': ""
	              }, {
	                'Time': '6:00am',
	                'Events': ""
	              }, {
	                'Time': '6:30am',
	                'Events': ""
	              }, {
	                'Time': '7:00am',
	                'Events': ""
	              }, {
	                'Time': '7:30am',
	                'Events': ""
	              }, {
	                'Time': '8:00am',
	                'Events': ""
	              }, {
	                'Time': '8:30am',
	                'Events': ""
	              }, {
	                'Time': '9:00am',
	                'Events': ""
	              },{
	                'Time': '9:30am',
	                'Events': ""
	              }, {
	                'Time': '10:00am',
	                'Events': ""
	              }, {
	                'Time': '10:30am',
	                'Events': ""
	              }, {
	                'Time': '11:00am',
	                'Events': ""
	              }, {
	                'Time': '11:30am',
	                'Events': ""
	              },{
	                'Time': '12:00pm',
	                'Events': ""
	              }, {
	                'Time': '12:30pm',
	                'Events': ""
	              }, {
	                'Time': '1:00pm',
	                'Events': ""
	              }, {
	                'Time': '1:30pm',
	                'Events': ""
	              }, {
	                'Time': '2:00pm',
	                'Events': ""
	              }, {
	                'Time': '2:30pm',
	                'Events': ""
	              }, {
	                'Time': '3:00pm',
	                'Events': ""
	              },{
	                'Time': '3:30pm',
	                'Events': ""
	              }, {
	                'Time': '4:00pm',
	                'Events': ""
	              }, {
	                'Time': '4:30pm',
	                'Events': ""
	              }, {
	                'Time': '5:00pm',
	                'Events': ""
	              }, {
	                'Time': '5:30pm',
	                'Events': ""
	              }, {
	                'Time': '6:00pm',
	                'Events': ""
	              }, {
	                'Time': '6:30pm',
	                'Events': ""
	              }, {
	                'Time': '7:00pm',
	                'Events': ""
	              }, {
	                'Time': '7:30pm',
	                'Events': ""
	              }, {
	                'Time': '8:00pm',
	                'Events': ""
	              }, {
	                'Time': '8:30pm',
	                'Events': ""
	              }, {
	                'Time': '9:00pm',
	                'Events': ""
	              },{
	                'Time': '9:30pm',
	                'Events': ""
	              }, {
	                'Time': '10:00pm',
	                'Events': ""
	              }, {
	                'Time': '10:30pm',
	                'Events': ""
	              }, {
	                'Time': '11:00pm',
	                'Events': ""
	              }, {
	                'Time': '11:30pm',
	                'Events': ""
	              }]
	          };
              break;
	}
	var store = buildGridStore(data, columns);
	return store;
}

function buildGridStore(data, columns) {
    var store = Ext.create('Ext.data.Store', {
        storeId: 'currentStore',
        fields: columns,
        autoLoad: true,
        data: data,
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    });
    return store;
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
