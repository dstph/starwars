(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],[,,,,function(e,t,n){e.exports={search_field:"SearchField_search_field__2jAgd",option:"SearchField_option__zdlnZ"}},,,,function(e,t,n){e.exports={modal:"Modal_modal__1FFGY",modal_content:"Modal_modal_content__2j8TL"}},function(e,t,n){e.exports={language_switcher:"LanguageSwitcher_language_switcher__3tvQc"}},,,,function(e,t,n){e.exports={film_card:"FilmCard_film_card__1JuCS"}},function(e,t,n){e.exports={loader:"LoadingSpinner_loader__13fl6",load4:"LoadingSpinner_load4__1AOc9"}},function(e,t,n){e.exports={grid:"FilmsWrapper_grid__1EC9k"}},,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(5),i=n.n(c),r=(n(20),n(21),n(9)),o=n.n(r),l=n(10),h=n(11),d=n(1),u=n(7),j=n.n(u),p=n(12);function m(e){return e.sort((function(e,t){var n=e.toUpperCase(),a=t.toUpperCase();return n<a?-1:n>a?1:0})),e}function f(e){return b.apply(this,arguments)}function b(){return(b=Object(p.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e.name}))})));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return fetch("https://swapi.dev/api/".concat(e,"?search=").concat(t,"/")).then((function(e){return e.json()}))}var O=new(function(){function e(){var t=this;Object(l.a)(this,e),this.language="en",this.films="",this.loading=!0,this.choosenLang="Language:",this.languages=[{code:"en",name:"English"},{code:"woo",name:"Wookiee"}],this.translation={en:"Language:",woo:"Raaaaaahhgh uuh:"},this.showModal=!1,this.modalFilm="",this.modalCharecters="",this.modalStarships="",this.modalPlanets="",this.modalVehicles="",this.modalSpecies="",this.searchInput="",this.searchChoice="",this.dataFromSearch="",this.setShowModal=function(){t.showModal=!t.showModal,t.setModalCharecters(""),t.setModalStarships(""),t.setModalPlanets(""),t.setModalVehicles(""),t.setModalSpecies("")},this.showModalHandler=function(e){t.setShowModal(),t.setModalFilm(e),f(e.characters).then((function(e){return t.setModalCharecters(m(e))})),f(e.starships).then((function(e){return t.setModalStarships(m(e))})),f(e.planets).then((function(e){return t.setModalPlanets(m(e))})),f(e.vehicles).then((function(e){return t.setModalVehicles(m(e))})),f(e.species).then((function(e){return t.setModalSpecies(m(e))}))},this.search=function(){t.searchInput&&t.searchChoice?function(e,t){switch(e){case"people":return g("people",t);case"starships":return g("starships",t);case"vehicles":return g("vehicles",t);case"species":return g("species",t);case"planets":return g("planets",t)}}(t.searchChoice,t.searchInput).then((function(e){return t.setDataFromSearch(e.results[0])})):alert("Please fill all fields ")},Object(d.m)(this,{language:d.n,setLanguage:d.f,loading:d.n,setLoading:d.f,choosenLang:d.n,setChoosenLang:d.f,films:d.n,setFilms:d.f,fetchFilms:d.f,showModal:d.n,setShowModal:d.f,modalFilm:d.n,setModalFilm:d.f,modalCharecters:d.n,setModalCharecters:d.f,modalStarships:d.n,setModalStarships:d.f,modalPlanets:d.n,setModalPlanets:d.f,modalVehicles:d.n,setModalVehicles:d.f,modalSpecies:d.n,setModalSpecies:d.f,searchInput:d.n,setSearchInput:d.f,searchChoice:d.n,setSearchChoice:d.f,search:d.f,dataFromSearch:d.n,setDataFromSearch:d.f})}return Object(h.a)(e,[{key:"setDataFromSearch",value:function(e){this.dataFromSearch=e}},{key:"setSearchChoice",value:function(e){this.searchChoice=e}},{key:"setSearchInput",value:function(e){this.searchInput=e}},{key:"setModalSpecies",value:function(e){this.modalVehicles=e}},{key:"setModalVehicles",value:function(e){this.modalVehicles=e}},{key:"setModalPlanets",value:function(e){this.modalPlanets=e}},{key:"setModalStarships",value:function(e){this.modalStarships=e}},{key:"setModalCharecters",value:function(e){this.modalCharecters=e}},{key:"setModalFilm",value:function(e){this.modalFilm=e}},{key:"setLoading",value:function(){this.loading=!this.loading}},{key:"setLanguage",value:function(e){this.language=e.target.value,this.setChoosenLang(this.translation[e.target.value])}},{key:"setChoosenLang",value:function(e){this.choosenLang=e}},{key:"setFilms",value:function(e){this.films=e}},{key:"fetchFilms",value:function(){var e=this;fetch("https://swapi.dev/api/films/").then((function(e){return e.json()})).then((function(t){return e.setFilms(((n=t.results).sort((function(e,t){var n=e.title.toUpperCase(),a=t.title.toUpperCase();return n<a?-1:n>a?1:0})),n));var n})).catch((function(e){return console.log(e)})).finally((function(){return e.setLoading()}))}}]),e}()),x=n(3),v=n(0),C=Object(x.a)((function(){return Object(v.jsxs)("div",{className:o.a.language_switcher,children:[Object(v.jsx)("label",{children:O.choosenLang}),Object(v.jsx)("select",{onChange:function(e){O.setLanguage(e)},id:"language",name:"language",children:O.languages.map((function(e){return Object(v.jsx)("option",{value:e.code,children:e.name},e.code)}))})]})})),S=n(4),F=n.n(S),_=n(13),M=n.n(_),y=function(e){var t=e.onClick,n=e.element,a=n.title,s=n.release_date;return Object(v.jsxs)("div",{onClick:function(){return t(n)},className:M.a.film_card,children:[Object(v.jsx)("h4",{children:a}),Object(v.jsx)("h4",{children:s})]})},k=n(14),w=n.n(k),L=function(){return Object(v.jsx)("div",{className:w.a.loader,children:"Loading..."})},P=function(e){var t=e.onClick,n=e.child;return Object(v.jsx)("button",{onClick:t,children:n})},V=function(e){var t=e.options;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:t.name}),Object(v.jsxs)("p",{children:["skin color: ",t.skin_color]}),Object(v.jsxs)("p",{children:["eye color: ",t.eye_color]}),Object(v.jsxs)("p",{children:["hair color: ",t.hair_color]}),Object(v.jsxs)("p",{children:["gender: ",t.gender]}),Object(v.jsxs)("p",{children:["height: ",t.height]})]})},N=function(e){var t=e.options;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:t.name}),Object(v.jsxs)("p",{children:["model: ",t.model]}),Object(v.jsxs)("p",{children:["Cargo capacity: ",t.cargo_capacity]})]})},I=function(e){var t=e.options;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:t.name}),Object(v.jsxs)("p",{children:["model: ",t.model]}),Object(v.jsxs)("p",{children:["length: ",t.length]})]})},D=function(e){var t=e.options;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:t.name}),Object(v.jsxs)("p",{children:["average height: ",t.average_height]}),Object(v.jsxs)("p",{children:["language: ",t.language]})]})},U=function(e){var t=e.options;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:t.name}),Object(v.jsxs)("p",{children:["climate: ",t.climate]}),Object(v.jsxs)("p",{children:["population: ",t.population]})]})},E=Object(x.a)((function(){return Object(v.jsxs)("div",{className:F.a.search_field,children:[Object(v.jsxs)("div",{onChange:function(e){return O.setSearchChoice(e.target.value)},children:[Object(v.jsx)("input",{type:"radio",id:"searchChoice1",name:"search",value:"people"}),Object(v.jsx)("label",{for:"searchChoice1",children:"People"}),Object(v.jsx)("input",{type:"radio",id:"searchChoice2",name:"search",value:"starships"}),Object(v.jsx)("label",{for:"searchChoice2",children:"Starships"}),Object(v.jsx)("input",{type:"radio",id:"searchChoice3",name:"search",value:"vehicles"}),Object(v.jsx)("label",{for:"searchChoice3",children:"Vehicles"}),Object(v.jsx)("input",{type:"radio",id:"searchChoice4",name:"search",value:"species"}),Object(v.jsx)("label",{for:"searchChoice4",children:"Species"}),Object(v.jsx)("input",{type:"radio",id:"searchChoice5",name:"search",value:"planets"}),Object(v.jsx)("label",{for:"searchChoice5",children:"Planets"})]}),Object(v.jsx)("input",{onChange:function(e){return O.setSearchInput(e.currentTarget.value)},type:"text",size:"40"}),Object(v.jsx)(P,{onClick:O.search,child:"en"===O.language?"Search":"Uughghhhgh uughghhhgh"}),O.dataFromSearch&&"people"===O.searchChoice?Object(v.jsx)("div",{className:F.a.option,children:Object(v.jsx)(V,{options:O.dataFromSearch})}):"starships"===O.searchChoice?O.dataFromSearch&&Object(v.jsx)("div",{className:F.a.option,children:Object(v.jsx)(N,{options:O.dataFromSearch})}):"vehicles"===O.searchChoice?O.dataFromSearch&&Object(v.jsx)("div",{className:F.a.option,children:Object(v.jsx)(I,{options:O.dataFromSearch})}):"species"===O.searchChoice?O.dataFromSearch&&Object(v.jsx)("div",{className:F.a.option,children:Object(v.jsx)(D,{options:O.dataFromSearch})}):"planets"===O.searchChoice?O.dataFromSearch&&Object(v.jsx)("div",{className:F.a.option,children:Object(v.jsx)(U,{options:O.dataFromSearch})}):""]})})),T=n(15),A=n.n(T),J=Object(x.a)((function(){return Object(a.useEffect)((function(){O.fetchFilms()}),[]),Object(v.jsx)(v.Fragment,{children:O.loading?Object(v.jsx)(L,{}):Object(v.jsx)("div",{className:A.a.grid,children:O.films.map((function(e,t){return Object(v.jsx)(y,{onClick:O.showModalHandler,element:e},e.episode_id)}))})})})),z=n(8),B=n.n(z),H=Object(x.a)((function(){return Object(v.jsx)("div",{className:B.a.modal,children:Object(v.jsxs)("div",{className:B.a.modal_content,children:[Object(v.jsx)(P,{onClick:O.setShowModal,child:"x"}),Object(v.jsx)("h3",{children:O.modalFilm.title}),Object(v.jsxs)("p",{children:["Directed by ",O.modalFilm.director]}),Object(v.jsx)("h4",{children:"Characters in film:"}),O.modalCharecters?O.modalCharecters.map((function(e){return Object(v.jsx)("p",{children:e},e)})):Object(v.jsx)(L,{}),Object(v.jsx)("h4",{children:"Planets in film:"}),O.modalPlanets?O.modalPlanets.map((function(e){return Object(v.jsx)("p",{children:e},e)})):Object(v.jsx)(L,{}),Object(v.jsx)("h4",{children:"Starships in film:"}),O.modalStarships?O.modalStarships.map((function(e){return Object(v.jsx)("p",{children:e},e)})):Object(v.jsx)(L,{}),Object(v.jsx)("h4",{children:"Vehicles in film:"}),O.modalVehicles?O.modalVehicles.map((function(e){return Object(v.jsx)("p",{children:e},e)})):Object(v.jsx)(L,{}),Object(v.jsx)("h4",{children:"Species in film:"}),O.modalVehicles?O.modalVehicles.map((function(e){return Object(v.jsx)("p",{children:e},e)})):Object(v.jsx)(L,{})]})})}));var W=Object(x.a)((function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(C,{}),Object(v.jsx)(J,{}),Object(v.jsx)(E,{}),O.showModal&&Object(v.jsx)(H,{})]})})),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(W,{})}),document.getElementById("root")),G()}],[[25,1,2]]]);
//# sourceMappingURL=main.70531637.chunk.js.map