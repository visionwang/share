!function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=22)}({0:function(t,e,a){"use strict";var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}();var r=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,React.Component),n(e,[{key:"componentWillMount",value:function(){this.state={raw:{ml:80,mr:40,mt:80,mb:130,w:this.props.size,h:this.props.size/3*2,m:5,bar:20,barm:50,font:24,text:24},pos:0,chart:{age:0,data:[]}}}},{key:"componentDidMount",value:function(){var t=this.props.chart;this.state.axis=this.state.raw,this.state.ctx=document.getElementById(this.props.id).getContext("2d"),this.state.ctx.lineCap="round",this.state.ctx.lineJoin="round",t?(t.content.data.map(function(t){for(var e=0;e<t.data.length;e++)t.data[e]=Math.round(t.data[e])}),this.state.chart=t.content,this.setState({productName:t.productName,chart:this.state.chart})):(this.state.chart={age:0,data:[]},this.setState({productName:"",chart:this.state.chart}))}},{key:"draw",value:function(t){var e=this.state.axis,a=this.state.ctx;a.clearRect(0,0,e.w,e.h);var n=this.measure(this.state.chart.data),r=e.ml,i=e.h-e.mb,o=e.w-e.mr-e.ml,l=e.h-e.mb-e.mt;a.lineDash=null,a.lineWidth=1,a.beginPath(),a.moveTo(r,i-l),a.lineTo(r,i),a.lineTo(r+o,i),a.font=e.font+"px Arial",a.textAlign="right",a.textBaseline="middle",a.fillText("万",r,e.mt/2);for(var c=0;c<=10;c++){a.moveTo(r,i-l*c/10),a.lineTo(r-e.m,i-l*c/10);var s=n.y*c/10/1e4;s=s<10?s.toFixed(1):Math.round(s),a.fillText(s,r-e.m-1,i-l*c/10)}a.textAlign="center",a.textBaseline="top";for(var u=0;u<n.x;u+=Math.ceil(n.x/10))a.moveTo(r+o*u/(n.x-1),i),a.lineTo(r+o*u/(n.x-1),i+e.m),a.fillText(this.state.chart.age+u,r+o*u/n.x,i+e.m);a.strokeStyle="Black",a.stroke(),a.lineWidth=3,this.state.chart.data.map(function(t){if("text"!=t.type){a.beginPath();for(var e=0;e<n.x;e++){var c=r+e*o/(n.x-1);0==e?a.moveTo(c,i-t.data[e]*l/n.y):a.lineTo(c,i-t.data[e]*l/n.y)}a.strokeStyle="#"+t.color,a.stroke()}}),a.textAlign="right",a.textBaseline="middle";var h=e.w-e.mr;this.state.chart.data.map(function(t){"text"!=t.type&&(a.fillStyle="#"+t.color,a.fillText(t.name,h,e.mt/2),h-=a.measureText(t.name).width+e.m+e.bar,a.fillRect(h,e.mt/2-e.bar/2,e.bar,e.bar),h-=e.m)});var p=-1;if(t){for(var f=0;f<n.x;f++){var d=r+f*o/(n.x-1);if(Math.abs(t-d)<o/n.x/2){p=f;break}}t>r+o?p=n.x-1:t<r&&(p=0)}if(a.lineWidth=1,this.state.chart.data.map(function(t){if("text"!=t.type)for(var e=5;e<n.x;e+=5)a.beginPath(),a.arc(r+e*o/(n.x-1),i-t.data[e]*l/n.y,2,0,2*Math.PI),a.fillStyle="White",a.fill(),a.strokeStyle="#"+t.color,a.stroke()}),a.fillStyle="LightGray",a.fillRect(r,e.h-e.barm-e.bar,o,e.bar),a.textAlign="center",a.textBaseline="middle",a.fillStyle="Black",a.font=e.text+"px",a.fillText("年龄",r/2,e.h-e.barm-e.bar/2),p>=0){var m=r+p*o/(n.x-1);a.beginPath(),a.lineDash=[4,4],a.lineDashOffset=e.m,a.moveTo(m,0),a.lineTo(m,e.h-e.barm-e.bar),this.state.chart.data.map(function(t){if("text"!=t.type){var e=i-t.data[p]*l/n.y;a.moveTo(m,e),a.lineTo(r,e)}}),a.strokeStyle="Gray",a.stroke(),a.fillStyle="ForestGreen",a.fillRect(r,e.h-e.barm-e.bar,m-r,e.bar),a.textAlign="center",a.textBaseline="top",a.fillStyle="Black",a.fillText(this.state.chart.age+p+"岁",m,e.h-e.barm)}p>=0&&this.setState({pos:p})}},{key:"measure",value:function(t){var e=10,a=2;return t.map(function(t){"text"!=t.type&&(t.data.map(function(t){e<t&&(e=t)}),a<t.data.length&&(a=t.data.length))}),{x:a,y:e}}},{key:"translate",value:function(t){var e=750/t.w,a={};for(var n in t)a[n]=t[n]*e;return a}},{key:"onTouch",value:function(t){this.draw(t.changedTouches[0].clientX)}},{key:"render",value:function(){var t=this,e=this.state.pos,a="130px",n=(this.props.size>1e3?150:120)+"px";return React.createElement("div",{className:"text13 center"},React.createElement("canvas",{id:this.props.id,style:{marginLeft:"5px",width:this.props.size-30+"px",height:this.props.size/3*2+"px"},width:this.props.size,height:this.props.size/3*2,onTouchStart:this.onTouch.bind(this),onTouchMove:this.onTouch.bind(this)}),React.createElement("div",{style:{display:"flex",marginLeft:"10px",lineHeight:"50px"}},React.createElement("div",{style:{width:a}},"保单年度"),this.props.years.map(function(t){return React.createElement("div",{style:{width:n,color:0==t?"#008800":"#aaaaaa"}},e+t>=0?"第"+(e+t+1)+"年":"")})),React.createElement("div",{style:{display:"flex",marginLeft:"10px",lineHeight:"50px"}},React.createElement("div",{style:{width:a}},"期初年龄"),this.props.years.map(function(a){return React.createElement("div",{style:{width:n,color:0==a?"#008800":"#aaaaaa"}},e+a>=0?t.state.chart.age+e+a+"岁":"")})),this.state.chart.data.map(function(r,i){return React.createElement("div",{style:{display:"flex",flexDirection:"column",lineHeight:"50px"}},React.createElement("div",{style:{display:"flex",marginLeft:"10px"}},React.createElement("div",{style:{width:a}},r.name),t.props.years.map(function(t){return React.createElement("div",{style:{width:n,color:0==t?"#008800":"#aaaaaa"}},e+t>=0&&e+t<r.data.length?r.data[e+t]:"")})))}),React.createElement("div",{style:{height:"30px"}}))}}]),e}();t.exports=r},22:function(t,e,a){"use strict";var n,r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),i=a(0),o=(n=i)&&n.__esModule?n:{default:n};var l=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.state={planId:common.param("planId"),mode:0,tabs:["利益图表","责任条款"],coverage:[],chart:[]},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,React.Component),r(e,[{key:"componentDidMount",value:function(){var t=this;MF.setTitle("利益演示"),APP.proposal.format(this.state.planId,"coverage,benefit_chart",function(e){t.setState({coverage:e.coverage,chart:e.benefit_chart},t.onRepaint)})}},{key:"onModeSwitch",value:function(t){this.setState({mode:t},this.onRepaint)}},{key:"onRepaint",value:function(){if(0==this.state.mode)for(var t=0;t<this.state.chart.length;t++){var e=this.refs["benefitChart"+t];e&&e.draw(400)}}},{key:"render",value:function(){var t=this;return React.createElement("div",null,React.createElement("div",{style:{display:"flex",width:"100%",position:"fixed",zIndex:"50",top:"0",backgroundColor:"#e6e6e6"}},this.state.tabs.map(function(e,a){return React.createElement("div",{className:"tab "+(a==t.state.mode?"tab-focus":"tab-blur"),key:a,style:{width:"250px"},onClick:t.onModeSwitch.bind(t,a)},React.createElement("text",{className:"text18"},e))})),1==this.state.mode?React.createElement("div",{style:{display:"flex",flexDirection:"column",marginTop:"80px"}},this.state.coverage.map(function(t,e){return React.createElement("div",{className:"pl-2 pr-2 bg-white"},React.createElement("div",{style:{marginTop:(0!=e?10:0)+"px"}},React.createElement("div",{className:"text17 eclipse",style:{width:SIZE-60+"px",textAlign:"center",padding:"10px",lineHeight:"60px",borderBottom:"#ddd solid 1px"}},t.productName)),t.content.map(function(t,e){return React.createElement("div",{style:{background:"#fff"}},React.createElement("div",null,React.createElement("text",{className:"text17",style:{margin:"10px",lineHeight:"60px"}},"● ",t.title)),t.content.map(function(t,e){return React.createElement("div",{className:"text16"},"　　",t.text)}),React.createElement("div",{style:{height:"10px"}}))}),React.createElement("div",{style:{height:"10px"}}))})):0==this.state.mode?React.createElement("div",{style:{display:"flex",flexDirection:"column",marginTop:"80px"}},this.state.chart.map(function(t,e){return null==t.content?null:React.createElement("div",{className:"pl-1 bg-white"},React.createElement("div",{class:"eclipse text18",style:{width:SIZE-90+"px",textAlign:"center",marginLeft:"35px",height:"80px",lineHeight:"80px",borderBottom:"#ddd solid 1px"}},t.productName),React.createElement(o.default,{size:SIZE,ref:"benefitChart"+e,id:"benefitChart"+e,chart:t,years:SIZE>1e3?[-4,-3,-2,-1,0,1,2,3,4]:[-2,-1,0,1,2]}),React.createElement("div",{style:{height:"10px",backgroundColor:"#e6e6e6"}}))})):null)}}]),e}();$(document).ready(function(){ReactDOM.render(React.createElement(l,null),document.getElementById("root"))})}});