!function(e){var t={};function a(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(n,l,function(t){return e[t]}.bind(null,l));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=26)}({26:function(e,t,a){"use strict";var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={proposalId:common.param("proposalId"),ages:[],index:0,now:common.dateStr(new Date)},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),n(t,[{key:"componentDidMount",value:function(){for(var e=this,t=[],a=0;a<70;a++)t.push(a);this.setState({ages:t}),MF.setTitle("建议书"),APP.proposal.view(this.state.proposalId,function(t){e.setState({proposal:t},function(){e.onInsurantSwitch(0)})})}},{key:"onInsurantSwitch",value:function(e){var t=this;if(this.state.proposal.detail.length>e){var a=this.state.proposal.detail[e];null!=a&&""!=a&&APP.proposal.viewPlan(a,function(a){t.setState({index:e,plan:a})})}}},{key:"onGenderChange",value:function(e){this.state.plan.insurant.gender=e,this.refreshInsurant()}},{key:"onAgeChange",value:function(e){this.state.plan.insurant.age=e,this.state.plan.insurant.birthday=null,this.refreshInsurant()}},{key:"onBirthdayChange",value:function(e){this.state.plan.insurant.birthday=e,this.refreshInsurant()}},{key:"refreshInsurant",value:function(){var e=this;APP.proposal.refreshInsurant(this.state.plan.planId,this.state.plan.insurant,function(t){e.setState({plan:t})})}},{key:"addProduct",value:function(){var e=this;APP.pop("proposal/product_list.html",60,function(t){null!=t&&APP.proposal.addProduct(e.state.plan.planId,null,t,function(t){e.setState({plan:t})})})}},{key:"editProduct",value:function(e){var t=this;APP.pop("proposal/product_editor.html?planId="+this.state.plan.planId+"&index="+e,80,function(e){APP.proposal.viewPlan(t.state.plan.planId,function(e){t.setState({plan:e})})})}},{key:"deleteProduct",value:function(e){var t=this;APP.proposal.deleteProduct(this.state.plan.planId,e,null,function(e){t.setState({plan:e})})}},{key:"showBenefit",value:function(){APP.pop("proposal/benefit.html?planId="+this.state.plan.planId,90)}},{key:"popCustomer",value:function(){APP.pop("client/client_selector.html?pop=1",90)}},{key:"next",value:function(){var e=this;APP.proposal.save(this.state.proposalId,function(t){MF.navi("proposal/preview.html?proposalId="+e.state.proposalId)})}},{key:"render",value:function(){var e=this,t=this.state.plan,a=t?t.insurant:null;return null==t||null==a?null:React.createElement("div",null,React.createElement("div",null,React.createElement("div",{className:"divx bg-desk",style:{position:"fixed",zIndex:"50",top:"0",width:"100%"}},this.state.proposal.detail.map(function(t,a){return React.createElement("div",{className:"tab "+(a==e.state.index?"tab-focus":"tab-blur"),key:a,style:{width:"250px"},onClick:e.onInsurantSwitch.bind(e,a)},React.createElement("text",{className:"text18"},"计划"+(a+1)))})),React.createElement("div",{className:"card-content",style:{marginTop:"80px"}},React.createElement("div",{className:"card-content-line bg-white"},React.createElement("div",{className:"card-content-label text17"},"性别"),React.createElement("div",{className:"card-content-widget text17"},React.createElement("div",{className:"btn-sm text17 "+("F"==a.gender?"btn-sel":""),onClick:this.onGenderChange.bind(this,"F")},"女"),React.createElement("div",{className:"btn-sm text17 "+("M"==a.gender?"btn-sel":""),onClick:this.onGenderChange.bind(this,"M")},"男")))),React.createElement("div",{className:"card-content"},React.createElement("div",{className:"card-content-line bg-white"},React.createElement("div",{className:"card-content-label text17"},a.birthday?"出生日期":"年龄"),React.createElement("div",{className:"card-content-widget",onClick:function(t){APP.pick("select",e.state.ages,e.onAgeChange.bind(e))}},React.createElement("img",{className:"mt-1 ml-2",style:{width:"60px",height:"60px"},src:"../images/calendar.png",onClick:function(t){t.stopPropagation(),APP.pick("date",{begin:"1900-01-01",end:new Date},e.onBirthdayChange.bind(e))}}),React.createElement("div",{className:"text17"},a.birthday,a.birthday&&a.age?" / ":"",a.age?a.age+"岁":"")))),React.createElement("div",{className:"card-content",style:{marginTop:"10px"}},t.product.map(function(a,n){return[null==a.parent?React.createElement("div",{className:"product product-main bg-white text16",style:{marginTop:"10px"},onClick:e.editProduct.bind(e,n)},React.createElement("div",{style:{height:"70px",display:"flex"}},React.createElement("img",{style:{width:"60px",height:"60px",margin:"10px 10px 0 10px"},src:t.icons[a.vendor]}),React.createElement("div",{style:{width:"600px",marginTop:"10px"}},React.createElement("text",{className:"text20 eclipse"},a.name)),React.createElement("img",{className:"mt-1 mr-1 mb-1 ml-1",style:{width:"50px",height:"50px",opacity:"0.4"},src:"../images/stop.png",onClick:function(t){t.stopPropagation(),e.deleteProduct(n)}})),React.createElement("div",{style:{height:"60px",display:"flex"}},React.createElement("div",{className:"center",style:{width:"80px"}}),React.createElement("div",{className:"eclipse",style:{width:SIZE-250+"px"}},React.createElement("text",null,a.purchase," / ",a.insure," / ",a.pay)),React.createElement("div",{className:"right",style:{width:"150px"}},React.createElement("text",{style:{color:"#000"}},a.premium,"元"))),React.createElement("div",{style:{height:"10px"}})):React.createElement("div",{className:"product product-rider bg-white text16"},React.createElement("div",{className:"center",style:{width:"80px"}},React.createElement("text",{style:{color:"#0a0"}},"附")),React.createElement("div",{className:"eclipse",style:{width:SIZE-250+"px"}},React.createElement("text",{style:{color:"#000",marginRight:"10px"}},a.abbrName),React.createElement("text",{style:{color:"#aaa"}},a.purchase," / ",a.insure," / ",a.pay)),React.createElement("div",{className:"right",style:{width:"150px"}},React.createElement("text",{style:{color:"#000"}},a.premium,"元"))),null==a.rule?null:React.createElement("div",{className:"tc-red text12 ml-1 mr-1 pl-1 pr-1",style:{lineHeight:"32px",border:"#f00 solid 1px",backgroundColor:"#ffaaaa"}},a.rule?a.rule.map(function(e,t){return React.createElement("div",null,t+1,"、",e)}):null)]}),t.product&&t.product.length>0?React.createElement("div",{className:"card-content-line bg-white",style:{padding:"0 20px 0 20px",display:"block",marginTop:"10px",textAlign:"right",color:"#09bb07"}},React.createElement("text",{className:"text16"},"合计：",t.premium,"元")):null,React.createElement("div",{className:"btn-fl text18",style:{color:"#fff",backgroundColor:"#1aad19"},onClick:this.addProduct.bind(this)},"添加险种"))),React.createElement("div",{style:{height:"120px"}}),React.createElement("div",{className:"bottom text18 tc-primary"},React.createElement("div",{className:"ml-3 mr-auto",onClick:this.showBenefit.bind(this)},"查看利益责任"),React.createElement("div",{className:"mr-3",onClick:this.next.bind(this)},"预览建议书")))}}]),t}();$(document).ready(function(){ReactDOM.render(React.createElement(l,null),document.getElementById("root"))})}});