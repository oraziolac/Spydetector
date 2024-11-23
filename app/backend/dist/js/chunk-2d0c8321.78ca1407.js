(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8321"],{"549e":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"backend-content",attrs:{id:"content"}},[t("div",{class:{"alert-toaster-visible":e.toaster.show,"alert-toaster-hidden":!e.toaster.show}},[e._v(e._s(e.toaster.message))]),t("div",{staticClass:"column col-8 col-xs-12"},[t("h3",{staticClass:"s-title"},[e._v("Configuration ")]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"user-login"}},[e._v("Device UUID (read-only)")]),t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.config.device_uuid,expression:"config.device_uuid"}],staticClass:"form-input read-only",attrs:{id:"device-id",readonly:"readonly"},domProps:{value:e.config.device_uuid},on:{input:function(t){t.target.composing||e.$set(e.config,"device_uuid",t.target.value)}}})])]),t("h5",{staticClass:"s-subtitle"},[e._v("Device configuration")]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.config.frontend.virtual_keyboard,expression:"config.frontend.virtual_keyboard"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.frontend.virtual_keyboard)?e._i(e.config.frontend.virtual_keyboard,null)>-1:e.config.frontend.virtual_keyboard},on:{change:[function(t){var n=e.config.frontend.virtual_keyboard,o=t.target,s=!!o.checked;if(Array.isArray(n)){var i=null,c=e._i(n,i);o.checked?c<0&&e.$set(e.config.frontend,"virtual_keyboard",n.concat([i])):c>-1&&e.$set(e.config.frontend,"virtual_keyboard",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config.frontend,"virtual_keyboard",s)},function(t){return e.switch_config("frontend","virtual_keyboard")}]}}),t("i",{staticClass:"form-icon"}),e._v(" Use virtual keyboard (for touch screen) ")]),t("label",{staticClass:"form-switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.config.frontend.shutdown_option,expression:"config.frontend.shutdown_option"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.frontend.shutdown_option)?e._i(e.config.frontend.shutdown_option,null)>-1:e.config.frontend.shutdown_option},on:{change:[function(t){var n=e.config.frontend.shutdown_option,o=t.target,s=!!o.checked;if(Array.isArray(n)){var i=null,c=e._i(n,i);o.checked?c<0&&e.$set(e.config.frontend,"shutdown_option",n.concat([i])):c>-1&&e.$set(e.config.frontend,"shutdown_option",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config.frontend,"shutdown_option",s)},function(t){return e.switch_config("frontend","shutdown_option")}]}}),t("i",{staticClass:"form-icon"}),e._v(" Allow the end-user to shutdown the device. ")]),t("label",{staticClass:"form-switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.config.frontend.backend_option,expression:"config.frontend.backend_option"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.frontend.backend_option)?e._i(e.config.frontend.backend_option,null)>-1:e.config.frontend.backend_option},on:{change:[function(t){var n=e.config.frontend.backend_option,o=t.target,s=!!o.checked;if(Array.isArray(n)){var i=null,c=e._i(n,i);o.checked?c<0&&e.$set(e.config.frontend,"backend_option",n.concat([i])):c>-1&&e.$set(e.config.frontend,"backend_option",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config.frontend,"backend_option",s)},function(t){return e.switch_config("frontend","backend_option")}]}}),t("i",{staticClass:"form-icon"}),e._v(" Allow the end-user to access to the backend. ")]),t("label",{staticClass:"form-switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.config.network.tokenized_ssids,expression:"config.network.tokenized_ssids"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.network.tokenized_ssids)?e._i(e.config.network.tokenized_ssids,null)>-1:e.config.network.tokenized_ssids},on:{change:[function(t){var n=e.config.network.tokenized_ssids,o=t.target,s=!!o.checked;if(Array.isArray(n)){var i=null,c=e._i(n,i);o.checked?c<0&&e.$set(e.config.network,"tokenized_ssids",n.concat([i])):c>-1&&e.$set(e.config.network,"tokenized_ssids",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config.network,"tokenized_ssids",s)},function(t){return e.switch_config("network","tokenized_ssids")}]}}),t("i",{staticClass:"form-icon"}),e._v(" Use tokenized SSIDs (eg. [ssid-name]-[hex-str]). ")]),t("label",{staticClass:"form-switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.config.frontend.download_links,expression:"config.frontend.download_links"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.frontend.download_links)?e._i(e.config.frontend.download_links,null)>-1:e.config.frontend.download_links},on:{change:[function(t){var n=e.config.frontend.download_links,o=t.target,s=!!o.checked;if(Array.isArray(n)){var i=null,c=e._i(n,i);o.checked?c<0&&e.$set(e.config.frontend,"download_links",n.concat([i])):c>-1&&e.$set(e.config.frontend,"download_links",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config.frontend,"download_links",s)},function(t){return e.switch_config("frontend","download_links")}]}}),t("i",{staticClass:"form-icon"}),e._v(" Use in-browser download for network captures. ")]),t("label",{staticClass:"form-switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.config.frontend.sparklines,expression:"config.frontend.sparklines"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.frontend.sparklines)?e._i(e.config.frontend.sparklines,null)>-1:e.config.frontend.sparklines},on:{change:[function(t){var n=e.config.frontend.sparklines,o=t.target,s=!!o.checked;if(Array.isArray(n)){var i=null,c=e._i(n,i);o.checked?c<0&&e.$set(e.config.frontend,"sparklines",n.concat([i])):c>-1&&e.$set(e.config.frontend,"sparklines",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config.frontend,"sparklines",s)},function(t){return e.switch_config("frontend","sparklines")}]}}),t("i",{staticClass:"form-icon"}),e._v(" Show background sparklines during the capture. ")]),t("label",{staticClass:"form-switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.config.frontend.remote_access,expression:"config.frontend.remote_access"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.frontend.remote_access)?e._i(e.config.frontend.remote_access,null)>-1:e.config.frontend.remote_access},on:{change:[function(t){var n=e.config.frontend.remote_access,o=t.target,s=!!o.checked;if(Array.isArray(n)){var i=null,c=e._i(n,i);o.checked?c<0&&e.$set(e.config.frontend,"remote_access",n.concat([i])):c>-1&&e.$set(e.config.frontend,"remote_access",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config.frontend,"remote_access",s)},function(t){return e.switch_config("frontend","remote_access")}]}}),t("i",{staticClass:"form-icon"}),e._v(" Allow remote access to the frontend. ")]),t("label",{staticClass:"form-switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.config.backend.remote_access,expression:"config.backend.remote_access"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.backend.remote_access)?e._i(e.config.backend.remote_access,null)>-1:e.config.backend.remote_access},on:{change:[function(t){var n=e.config.backend.remote_access,o=t.target,s=!!o.checked;if(Array.isArray(n)){var i=null,c=e._i(n,i);o.checked?c<0&&e.$set(e.config.backend,"remote_access",n.concat([i])):c>-1&&e.$set(e.config.backend,"remote_access",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config.backend,"remote_access",s)},function(t){return e.switch_config("backend","remote_access")}]}}),t("i",{staticClass:"form-icon"}),e._v(" Allow remote access to the backend. ")])]),t("h5",{staticClass:"s-subtitle"},[e._v("User credentials")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"column col-10 col-xs-12"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"user-login"}},[e._v("User login")]),t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.config.backend.login,expression:"config.backend.login"}],staticClass:"form-input",attrs:{id:"user-login",type:"text"},domProps:{value:e.config.backend.login},on:{input:function(t){t.target.composing||e.$set(e.config.backend,"login",t.target.value)}}}),t("button",{staticClass:"btn btn-primary input-group-btn px150",on:{click:function(t){return e.change_login()}}},[e._v("Update it")])])]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"user-login"}},[e._v("User password")]),t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.config.backend.password,expression:"config.backend.password"}],staticClass:"form-input",attrs:{id:"user-login",type:"password",placeholder:"●●●●●●"},domProps:{value:e.config.backend.password},on:{input:function(t){t.target.composing||e.$set(e.config.backend,"password",t.target.value)}}}),t("button",{staticClass:"btn btn-primary input-group-btn px150",on:{click:function(t){return e.change_password()}}},[e._v("Update it")])])]),t("div",{staticClass:"whitespace"})])])])])},s=[],i=n("bc3a"),c=n.n(i),a={name:"edit-configuration",data(){return{config:{},check_certificate:!1,certificate:"",iocs_tags:[],toaster:{show:!1,message:"",type:null}}},props:{},methods:{switch_config:function(e,t){c.a.get(`/api/config/switch/${e}/${t}`,{timeout:1e4,headers:{"X-Token":this.jwt}}).then(n=>{n.data.status&&("Key switched to true"==n.data.message?(this.toaster={show:!0,message:"Configuration updated",type:"success"},setTimeout(function(){this.toaster={show:!1}}.bind(this),1e3),this.config[e][t]=!0):"Key switched to false"==n.data.message?(this.toaster={show:!0,message:"Configuration updated",type:"success"},setTimeout(function(){this.toaster={show:!1}}.bind(this),1e3),this.config[e][t]=!1):(this.toaster={show:!0,message:"The key doesn't exist",type:"error"},setTimeout(function(){this.toaster={show:!1}}.bind(this),1e3)))}).catch(e=>console.log(e))},load_config:function(){c.a.get("/api/config/list",{timeout:1e4,headers:{"X-Token":this.jwt}}).then(e=>{e.data&&(this.config=e.data,this.config.backend.password="")}).catch(e=>console.log(e))},async get_jwt(){await c.a.get("/api/get-token",{timeout:1e4}).then(e=>{e.data.token&&(this.jwt=e.data.token)}).catch(e=>console.log(e))},change_login:function(){c.a.get("/api/config/edit/backend/login/"+this.config.backend.login,{timeout:1e4,headers:{"X-Token":this.jwt}}).then(e=>{e.data.status?(this.toaster={show:!0,message:"Login changed",type:"success"},setTimeout(function(){this.toaster={show:!1}}.bind(this),1e3)):(this.toaster={show:!0,message:"Login not changed",type:"error"},setTimeout(function(){this.toaster={show:!1}}.bind(this),1e3))}).catch(e=>console.log(e))},change_password:function(){c.a.get("/api/config/edit/backend/password/"+this.config.backend.password,{timeout:1e4,headers:{"X-Token":this.jwt}}).then(e=>{e.data.status?(this.toaster={show:!0,message:"Password changed",type:"success"},setTimeout(function(){this.toaster={show:!1}}.bind(this),1e3)):(this.toaster={show:!0,message:"Password not changed",type:"error"},setTimeout(function(){this.toaster={show:!1}}.bind(this),1e3))}).catch(e=>console.log(e))}},created:function(){this.get_jwt().then(()=>{this.load_config()})}},r=a,d=n("2877"),l=Object(d["a"])(r,o,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c8321.78ca1407.js.map