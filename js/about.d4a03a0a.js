(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{c84b:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Card")],1)},n=[],r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"detail"},[t.loading?s("b-overlay",{attrs:{id:"overlay-background",show:"",variant:"light",opacity:"0.85",blur:"2px",rounded:"sm"}}):s("b-container",{ref:"top"},[s("div",{staticClass:"card mb-3"},[s("b-row",{staticClass:"no-gutters"},[s("b-col",{attrs:{cols:"12",md:"3",lg:"3"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.card.imageUrlHiRes,expression:"card.imageUrlHiRes"}],staticClass:"card-img",attrs:{alt:"..."}})]),s("b-col",{attrs:{cols:"12",md:"9",lg:"9"}},[s("div",{staticClass:"card-body text-left"},[s("h1",{staticClass:"card-title"},[t._v(t._s(t.card.name))]),s("p",{staticClass:"card-text"},[s("b",[t._v("#ID:")]),t._v(" "+t._s(t.card.id)+" ")]),s("p",{staticClass:"card-text"},[s("b",[t._v(t._s(t.$t("types",{lng:t.$store.state.lang}))+":")]),t._v(" "+t._s(t.$toList(t.card.types))+" ")]),s("p",{staticClass:"card-text"},[s("b",[t._v(t._s(t.$t("resistances",{lng:t.$store.state.lang}))+": ")]),t._l(t.card.resistances,(function(a,e){return s("span",{key:e},[t._v(" "+t._s(a.type)+" ("+t._s(a.value)+") "),e==t.card.resistances?s("i",[t._v(",")]):t._e()])}))],2),s("p",{staticClass:"card-text"},[s("b",[t._v(t._s(t.$t("weaknesses",{lng:t.$store.state.lang}))+": ")]),t._l(t.card.weaknesses,(function(a,e){return s("span",{key:e},[t._v(" "+t._s(a.type)+" ("+t._s(a.value)+") "),e==t.card.resistances?s("i",[t._v(",")]):t._e()])}))],2),s("p",{staticClass:"card-text"},[s("b",[t._v(t._s(t.$t("attacks",{lng:t.$store.state.lang}))+": ")])]),s("ul",{staticClass:"list-group"},t._l(t.card.attacks,(function(a,e){return s("li",{key:e,staticClass:"list-group-item list-group-item-action",on:{click:[function(s){return t.modal(a)},function(s){return t.modal(a)}]}},[t._v(" "+t._s(a.name)+" ")])})),0)])])],1)],1),s("p",{staticClass:"card-text mt-4 p-3"},[s("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("back",{lng:t.$store.state.lang})))])],1),s("b-modal",{attrs:{id:"modal","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" "+t._s(t.$t("attack",{lng:t.$store.state.lang}))+": "+t._s(t.attack.name)+" ")]},proxy:!0}])},[s("div",{staticClass:"d-block text-center"},[s("p",{staticClass:"text-left"},[s("b",[t._v(t._s(t.$t("cost",{lng:t.$store.state.lang}))+": ")]),t._v(" "+t._s(t.$toList(t.attack.cost))+" ")]),s("p",{staticClass:"text-left"},[s("b",[t._v(t._s(t.$t("description",{lng:t.$store.state.lang}))+": ")]),t._v(" "+t._s(t.attack.text)+" ")]),s("p",{staticClass:"text-left"},[s("b",[t._v(t._s(t.$t("damage",{lng:t.$store.state.lang}))+": ")]),t._v(" "+t._s(t.attack.damage)+" ")])]),s("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(a){return t.$bvModal.hide("modal")}}},[t._v(t._s(t.$t("close",{lng:t.$store.state.lang})))])],1)],1)],1)},c=[],l=(s("96cf"),s("1da1")),i={name:"Detail",created:function(){},data:function(){return{card:{},loading:!0,attack:{}}},methods:{modal:function(t){this.attack=t,this.$bvModal.show("modal")},getData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$http.get("/v1/cards/".concat(t.$route.params.id)).then((function(a){t.card=a.data.card,t.loading=!1}));case 2:case"end":return a.stop()}}),a)})))()}},mounted:function(){this.$scrollTo("body",500),this.getData()}},o=i,d=(s("e60d"),s("2877")),u=Object(d["a"])(o,r,c,!1,null,null,null),_=u.exports,v={name:"Detail",components:{Card:_},mounted:function(){}},g=v,m=Object(d["a"])(g,e,n,!1,null,null,null);a["default"]=m.exports},e60d:function(t,a,s){"use strict";var e=s("e9ec"),n=s.n(e);n.a},e9ec:function(t,a,s){}}]);
//# sourceMappingURL=about.d4a03a0a.js.map