
function load(){
	var height = $(window).height() * 2;
	var p = Ext.create('Ext.panel.Panel', {
	    width: $(window).width(),
	    height: height,
	    layout: {
	    	type: 'vbox',
	    	align: 'stretch'
	    },
	    items: [{
	    	xtype: 'panel',
	    	bodyStyle:{"background-color":"orange"}, 
	    	flex: 1,
	    	id: 'navBar',
	    	layout: {
	    		type: "hbox",
	    		align: "stretch"
	    	},
	    	items: [{
	    		xtype: "label",
	    		text: "",
	    		flex: 1
	    	},{
	    		xtype: "button",
	    		text: "Home",
	    		flex: 1
	    	},{
	    		xtype: "button",
	    		text: "Home",
	    		flex: 1
	    	}]
	    },{
	    	xtype: 'panel',
	    	bodyStyle:{'backgroundImage' : 'url(images/example.jpg)'}, 
	    	flex: 10,
	    	id: 'landingImage'
	    },{
	    	xtype: 'panel',
	    	flex: 10,
	    	id: 'landingContent'
	    }],
	    renderTo: Ext.getBody()
	});
};


