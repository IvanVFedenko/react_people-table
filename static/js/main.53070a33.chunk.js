(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=a(1),s=a.n(o),u=a(2),d=a(5),i=a(6),m=a(8),p=a(7),h=a(9),E=function(){var e=Object(u.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_people-table/api/people.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),b=(a(17),function(e){var t=e.p,a=e.i;return r.a.createElement("tr",{className:"person"},r.a.createElement("td",null,a+1),r.a.createElement("td",{className:t.born<=1650?"person-born-line":t.died>=1800?"person-bold":""},t.name),r.a.createElement("td",{className:"f"===t.sex?"person-female":""},t.sex),r.a.createElement("td",null,t.born),r.a.createElement("td",null,t.died),r.a.createElement("td",null,t.mother),r.a.createElement("td",null,t.father))}),f=(a(18),function(e){var t=e.peopleData;return r.a.createElement("table",{className:"PeopleTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"id"),r.a.createElement("th",null,"name"),r.a.createElement("th",null,"sex"),r.a.createElement("th",null,"born"),r.a.createElement("th",null,"died"),r.a.createElement("th",null,"mother"),r.a.createElement("th",null,"father"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement(b,{p:e,i:t,key:t})})))}),w=(a(19),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={loadedPeople:[],isLoaded:!1},a.handleLoad=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,a.setState({loadedPeople:t,isLoaded:!0});case 4:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h2",null,"People table with",this.state.isLoaded&&this.state.loadedPeople.length,"rows")),r.a.createElement("main",null,r.a.createElement("button",{className:"load-button",type:"button",onClick:this.handleLoad,hidden:this.state.isLoaded},"Load the table"),r.a.createElement(f,{peopleData:this.state.loadedPeople})))}}]),t}(r.a.Component));c.a.render(r.a.createElement(w,{test:123}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.53070a33.chunk.js.map