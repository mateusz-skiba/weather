(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),i=(a(12),a(3)),s=a(4),l=a(6),u=a(5),h=function(e){return r.a.createElement("div",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{value:e.value,onChange:e.change,placeholder:"Search city...",type:"text"})))},p=function(e){var t=e.weather,a=(t.value,t.city),n=t.country,c=t.day,o=t.data,i=t.temp,s=t.pressure,l=t.description;return r.a.createElement("div",{className:"view"},r.a.createElement("div",{className:"box"},r.a.createElement("h2",{className:"place"},a,", ",n),r.a.createElement("p",{className:"data"},c,", ",o),r.a.createElement("div",{className:"tempBox"},r.a.createElement("h1",{className:"temp"},i,"\xb0C")),r.a.createElement("h2",{className:"description"},l),r.a.createElement("p",{className:"pressure"},s," hPa")))},d=(a(13),"968e94fc56180717722c598405dbd766"),m="",v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:"Warszawa",city:"",country:"",day:"",data:"",temp:"",pressure:"",description:"",err:""},e.getData=function(){console.log(e.state);var t="http://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.value,"&appid=").concat(d);fetch(t).then((function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119")})).then((function(e){return e.json()})).then((function(t){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()],n=(new Date).toLocaleDateString(),r=Math.round(10*(t.main.temp-273.15))/10;e.setState({city:e.state.value,country:t.sys.country,day:a,data:n,temp:r,pressure:t.main.pressure,description:t.weather[0].description,err:!1})})).catch((function(t){e.setState({err:!0}),console.log("Nie znaleziono")}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){var e="http://api.openweathermap.org/data/2.5/weather?q=".concat(this.state.value,"&appid=").concat(d);fetch(e).then((function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119")})).then((function(e){return e.json()})).then((function(e){console.log("Tak")})).catch((function(e){console.log("Nie")}))}},{key:"componentDidUpdate",value:function(e,t){t.value!==this.state.value&&this.getData(),m=this.state.value}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(h,{value:m,change:this.handleInputChange}),r.a.createElement(p,{weather:this.state})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.af53fd7b.chunk.js.map