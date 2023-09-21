// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ],
//     /**
//      * @param {typeof sap.ui.core.mvc.Controller} Controller
//      */
//     function (Controller) {
//         "use strict";

//         return Controller.extend("firstui5proj.controller.RegistrationPage", {
//             onInit: function () {

//             }
//         });
//     });
sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
	function(Controller, MessageToast) {
	"use strict";

    return Controller.extend("firstui5proj.controller.RegistrationPage", {
        onInit: function () {

        },
        pressOnTileOne : function(evt) {
			MessageToast.show("The generic tile one pressed.");
		},
		pressOnTileTwo : function(evt) {
			MessageToast.show("The generic tile two pressed.");
		},
        pressOnTileThree: function(evt) {
			MessageToast.show("The generic tile Three pressed.");
		}
    });

	 

	return PageController;

});