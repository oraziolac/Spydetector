(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d432"],{f76a:function(s,i,t){"use strict";t.r(i);var a=function(){var s=this,i=s._self._c;return i("div",{staticClass:"backend-content",attrs:{id:"content"}},[i("div",{class:{"alert-toaster-visible":s.toaster.show,"alert-toaster-hidden":!s.toaster.show}},[s._v(s._s(s.toaster.message))]),i("div",{staticClass:"column col-8 col-xs-12"},[i("h3",{staticClass:"s-title"},[s._v("Detection engine configuration")]),i("h5",{staticClass:"s-subtitle"},[s._v("Detection methods")]),i("div",{staticClass:"form-group"},[i("label",{staticClass:"form-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.config.analysis.heuristics,expression:"config.analysis.heuristics"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.config.analysis.heuristics)?s._i(s.config.analysis.heuristics,null)>-1:s.config.analysis.heuristics},on:{change:[function(i){var t=s.config.analysis.heuristics,a=i.target,e=!!a.checked;if(Array.isArray(t)){var c=null,n=s._i(t,c);a.checked?n<0&&s.$set(s.config.analysis,"heuristics",t.concat([c])):n>-1&&s.$set(s.config.analysis,"heuristics",t.slice(0,n).concat(t.slice(n+1)))}else s.$set(s.config.analysis,"heuristics",e)},function(i){return s.local_analysis("analysis","heuristics")}]}}),i("i",{staticClass:"form-icon"}),s._v(" Use heuristic detection for suspect behaviour. ")]),i("label",{staticClass:"form-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.config.analysis.iocs,expression:"config.analysis.iocs"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.config.analysis.iocs)?s._i(s.config.analysis.iocs,null)>-1:s.config.analysis.iocs},on:{change:[function(i){var t=s.config.analysis.iocs,a=i.target,e=!!a.checked;if(Array.isArray(t)){var c=null,n=s._i(t,c);a.checked?n<0&&s.$set(s.config.analysis,"iocs",t.concat([c])):n>-1&&s.$set(s.config.analysis,"iocs",t.slice(0,n).concat(t.slice(n+1)))}else s.$set(s.config.analysis,"iocs",e)},function(i){return s.local_analysis("analysis","iocs")}]}}),i("i",{staticClass:"form-icon"}),s._v(" Use Indicator of Compromise (IoC) based detection. ")]),i("label",{staticClass:"form-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.config.analysis.whitelist,expression:"config.analysis.whitelist"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.config.analysis.whitelist)?s._i(s.config.analysis.whitelist,null)>-1:s.config.analysis.whitelist},on:{change:[function(i){var t=s.config.analysis.whitelist,a=i.target,e=!!a.checked;if(Array.isArray(t)){var c=null,n=s._i(t,c);a.checked?n<0&&s.$set(s.config.analysis,"whitelist",t.concat([c])):n>-1&&s.$set(s.config.analysis,"whitelist",t.slice(0,n).concat(t.slice(n+1)))}else s.$set(s.config.analysis,"whitelist",e)},function(i){return s.local_analysis("analysis","whitelist")}]}}),i("i",{staticClass:"form-icon"}),s._v(" Use whitelist to prevent false positives. ")]),i("label",{staticClass:"form-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.config.analysis.active,expression:"config.analysis.active"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.config.analysis.active)?s._i(s.config.analysis.active,null)>-1:s.config.analysis.active},on:{change:[function(i){var t=s.config.analysis.active,a=i.target,e=!!a.checked;if(Array.isArray(t)){var c=null,n=s._i(t,c);a.checked?n<0&&s.$set(s.config.analysis,"active",t.concat([c])):n>-1&&s.$set(s.config.analysis,"active",t.slice(0,n).concat(t.slice(n+1)))}else s.$set(s.config.analysis,"active",e)},function(i){return s.local_analysis("analysis","active")}]}}),i("i",{staticClass:"form-icon"}),s._v(" Use active analysis (Dig, Whois, OpenSSL...). ")]),i("label",{staticClass:"form-switch"},[i("input",{attrs:{type:"checkbox"},domProps:{checked:s.config.analysis.indicators_types.includes("all")},on:{change:function(i){return s.switch_iocs_types("all")}}}),i("i",{staticClass:"form-icon"}),s._v(" Detect threats by using all IOCs. ")])]),s.config.analysis.indicators_types.includes("all")?s._e():i("div",{staticClass:"form-group"},[i("h5",{staticClass:"s-subtitle"},[s._v("IOCs categories")]),s._l(s.iocs_tags,(function(t){return i("label",{key:t,staticClass:"form-switch"},[i("input",{attrs:{type:"checkbox"},domProps:{checked:s.config.analysis.indicators_types.includes(t)},on:{change:function(i){return s.switch_iocs_types(t)}}}),i("i",{staticClass:"form-icon"}),s._v(" Use IOCs related to "+s._s(t.toUpperCase())+" threat. ")])}))],2)])])},e=[],c=t("bc3a"),n=t.n(c),o={name:"analysis-engine",data(){return{config:{},check_certificate:!1,certificate:"",iocs_tags:[],toaster:{show:!1,message:"",type:null}}},props:{},methods:{switch_config:function(s,i){n.a.get(`/api/config/switch/${s}/${i}`,{timeout:1e4,headers:{"X-Token":this.jwt}}).then(t=>{t.data.status&&("Key switched to true"==t.data.message?(this.toaster={show:!0,message:"Configuration updated",type:"success"},setTimeout(function(){this.toaster={show:!1}}.bind(this),1e3),this.config[s][i]=!0):"Key switched to false"==t.data.message?(this.toaster={show:!0,message:"Configuration updated",type:"success"},setTimeout(function(){this.toaster={show:!1}}.bind(this),1e3),this.config[s][i]=!1):(this.toaster={show:!0,message:"The key doesn't exist",type:"error"},setTimeout(function(){this.toaster={show:!1}}.bind(this),1e3)))}).catch(s=>console.log(s))},local_analysis:function(s,i){this.switch_config(s,i),0!=this.config.analysis.remote&&this.switch_config("analysis","remote")},load_config:function(){n.a.get("/api/config/list",{timeout:1e4,headers:{"X-Token":this.jwt}}).then(s=>{s.data&&(this.config=s.data,this.config.backend.password="",console.log(this.config.analysis.indicators_types))}).catch(s=>console.log(s))},async get_jwt(){await n.a.get("/api/get-token",{timeout:1e4}).then(s=>{s.data.token&&(this.jwt=s.data.token)}).catch(s=>console.log(s))},get_iocs_tags:function(){n.a.get("/api/ioc/get/tags",{timeout:1e4,headers:{"X-Token":this.jwt}}).then(s=>{s.data.tags&&(this.iocs_tags=s.data.tags)}).catch(s=>console.log(s))},switch_iocs_types:function(s){this.config.analysis.indicators_types.includes(s)?n.a.get("/api/config/ioc-type/delete/"+s,{timeout:1e4,headers:{"X-Token":this.jwt}}).then(s=>{s.data.status&&this.load_config()}).catch(s=>console.log(s)):(n.a.get("/api/config/ioc-type/add/"+s,{timeout:1e4,headers:{"X-Token":this.jwt}}).then(s=>{s.data.status&&this.load_config()}).catch(s=>console.log(s)),this.load_config())}},created:function(){this.get_jwt().then(()=>{this.load_config(),this.get_iocs_tags()})}},l=o,r=t("2877"),h=Object(r["a"])(l,a,e,!1,null,null,null);i["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d22d432.91ebbe55.js.map