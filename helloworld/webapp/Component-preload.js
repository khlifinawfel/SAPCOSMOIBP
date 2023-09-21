//@ui5-bundle helloworld/helloworld/Component-preload.js
sap.ui.require.preload({
	"helloworld/helloworld/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","helloworld/helloworld/model/models"],function(e,o,t){"use strict";return e.extend("helloworld.helloworld.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"helloworld/helloworld/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("helloworld.helloworld.controller.App",{onInit(){}})});
},
	"helloworld/helloworld/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("helloworld.helloworld.controller.View1",{onInit:function(){}})});
},
	"helloworld/helloworld/i18n/i18n.properties":'# This is the resource bundle for helloworld.helloworld\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Hello World\n\n#YDES: Application description\nappDescription=A Fiori application.\n#XTIT: Main view title\ntitle=Hello World\n\nflpTitle=My Hello World\n\nflpSubtitle=Custom Fiori App\n',
	"helloworld/helloworld/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"helloworld.helloworld","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.11.0","toolsId":"5289ce88-7dae-4f3d-a0f5-1f6cb391a295"},"crossNavigation":{"inbounds":{"helloworld-display":{"semanticObject":"helloworld","action":"display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.118.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"helloworld.helloworld.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"helloworld.helloworld.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"helloworld.helloworld.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"zmta_ui5_demo_apps"}}',
	"helloworld/helloworld/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"helloworld/helloworld/view/App.view.xml":'<mvc:View controllerName="helloworld.helloworld.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"helloworld/helloworld/view/View1.view.xml":'<mvc:View controllerName="helloworld.helloworld.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content /></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
