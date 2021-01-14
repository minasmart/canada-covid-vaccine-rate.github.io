(function(e){function n(n){for(var a,i,c=n[0],s=n[1],u=n[2],d=0,l=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(n);while(l.length)l.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var s=t[c];0!==r[s]&&(a=!1)}a&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},r={app:0},o=[];function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var p=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("Unofficial Canada Covid-19 Vaccination Rates")]),e._m(0),t("h2",[e._v("How's it work?")]),e._m(1),t("h2",[e._v('"Your math is wrong!" "I don\'t like this" "Oh the humanity!" and other criticisms')]),e._m(2),t("h2",[e._v("Warranties")]),t("p",[e._v(" There are none. This is bad math. Don't trust it. Do your own research and calculations. The data here is presented with no warranties or guarantees in regard to accuracy or representation. ")]),t("hr"),t("div",{attrs:{id:"province-list"}},e._l(e.getProvinceNames(e.provinceData),(function(n){return t("div",{key:n,staticClass:"province-wrapper"},[t("Province",{attrs:{provinceData:e.getProvince(n,e.provinceData)}})],1)})),0)])},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" A backwards looking simple projection based on the shared provincial vaccination rates published and shared by the "),t("a",{attrs:{href:"https://github.com/ccodwg/Covid19Canada"}},[e._v(" COVID-19 Canada Open Data Working Group")]),e._v(". ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" Data is pulled from the "),t("a",{attrs:{href:"https://github.com/ccodwg/Covid19Canada"}},[e._v(" CCODWG Github Page")]),e._v(" and is manipulated by some simple javascript. These projections are kludgey. They are only based on the rolling average of vaccination rates over the past two weeks, the 2020 Canadian census population data, 2 doses per person, and the number of people currently vaccinated. "),t("b",[e._v("These numbers do not account for any uptick in vaccination rate, which will hopefully happen")]),e._v(". They are meant to show how we're doing, and to encourage people to reach out to their MP and MPP and talk about why we need to do this faster. ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" You're probably right! This page is hosted by github. You can "),t("a",{attrs:{href:"https://github.com/minasmart/canada-covid-vaccine-rate.github.io"}},[e._v(" read my code and suggest changes here")]),e._v(". ")])}],i=(t("4de4"),t("a630"),t("d81d"),t("b0c0"),t("d3b7"),t("6062"),t("3ca3"),t("ddb0"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"province"},[t("h2",[e._v(e._s(e.provinceName(e.provinceData)))]),t("p",[e._v("doses administered: "),t("b",[e._v(e._s(e.dosesAdministered(e.provinceData)))])]),t("p",[e._v("average administration rate over last two weeks: "),t("b",[e._v(e._s(e.averageAdministrationRate(e.provinceData,14))+" doses per day")])]),t("h3",[e._v("based on the two doses per person")]),t("p",[e._v("doses remaining for 100% vaccination: "),t("b",[e._v(e._s(e.dosesRemaining(e.provinceData,100)))])]),t("p",[e._v("doses remaining for 80% vaccination: "),t("b",[e._v(e._s(e.dosesRemaining(e.provinceData,80)))])]),t("h3",[e._v("based on the two week rolling average")]),t("p",[e._v("time left to vaccinate the whole province: "),t("b",[e._v(e._s(e.timeLeft(e.provinceData,100)))])]),t("p",[e._v("time left to vaccinate 80% (herd immunity?): "),t("b",[e._v(e._s(e.timeLeft(e.provinceData,80)))])]),t("hr")])}),c=[];t("a15b"),t("13d5"),t("fb6a");function s(e){return e[0].population}function u(e){return e.slice().sort((function(e){return e.dateParsed})).pop().cumulativeVaccination}function p(e,n){return 2*s(e)*n/100-u(e)}function d(e,n){var t=e.slice().sort((function(e){return e.dateParsed})).slice(-n).reduce((function(e,n){return e+n.vaccinatedOnDay}),0);return t/n}function l(e){return e.toLocaleString(void 0,{maximumFractionDigits:0})}var v={name:"Province",props:["provinceData"],methods:{provinceName:function(e){return e[0].name},dosesAdministered:function(e){return l(u(e))},dosesRemaining:function(e,n){return l(p(e,n))},averageAdministrationRate:function(e,n){return l(d(e,n))},timeLeft:function(e,n){var t=p(e,n),a=d(e,14),r=t/a,o=r/365-.5,i=r%365/30-.5,c=r%365%30/7-.5,s=r%365%30%7-.5,u=[];return o>=1&&u.push("".concat(l(o)," years")),i>=1&&u.push("".concat(l(i)," months")),c>=1&&u.push("".concat(l(c)," weeks")),s>=1&&u.push("".concat(l(s)," days")),u.join(", ")}}},f=v,h=t("2877"),m=Object(h["a"])(f,i,c,!1,null,null,null),_=m.exports,b={name:"App",components:{Province:_},props:["provinceData"],methods:{getProvinceNames:function(e){return Array.from(new Set(e.map((function(e){return e.name}))))},getProvince:function(e,n){return n.filter((function(n){return n.name===e}))}}},g=b,w=(t("034f"),Object(h["a"])(g,r,o,!1,null,null,null)),y=w.exports,D=(t("99af"),t("7db0"),t("ac1f"),t("1276"),t("2909")),O=[{name:"Alberta",population:4428112},{name:"BC",population:5145851},{name:"Manitoba",population:1379584},{name:"NL",population:520998},{name:"NWT",population:45074},{name:"New Brunswick",population:781315},{name:"Nova Scotia",population:979115},{name:"Nunavut",population:39285},{name:"Ontario",population:14733119},{name:"PEI",population:159713},{name:"Quebec",population:8575779},{name:"Saskatchewan",population:1177884},{name:"Yukon",population:42176}],P=O;function k(){return fetch("https://raw.githubusercontent.com/ccodwg/Covid19Canada/master/timeseries_prov/vaccine_administration_timeseries_prov.csv").then((function(e){return e.text()})).then((function(e){return e.split("\n").slice(1,-1).map((function(e){return e.split(",")})).map((function(e){return e.map((function(e){return JSON.parse(e)}))})).reduce((function(e,n){var t=n[0],a=P.find((function(e){return e.name===t})).population,r=n[1],o=r.split("-").reverse().join("-"),i=Date.parse(o),c={name:t,population:a,dateRaw:r,dateParsed:i,vaccinatedOnDay:n[2],cumulativeVaccination:n[3]};return[].concat(Object(D["a"])(e),[c])}),[])}))}a["a"].config.productionTip=!1,k().then((function(e){new a["a"]({render:function(n){return n(y,{props:{provinceData:e}})}}).$mount("#app")}))},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.00f9e0e1.js.map