(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73159978"],{"06b1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("h1",[a("img",{staticClass:"avatar",attrs:{src:t._f("resizeImage")(t.artist.img1v1Url,1024)}}),t._v(t._s(t.artist.name)+"'s Music Videos ")]),a("MvRow",{attrs:{mvs:t.mvs,subtitle:"publishTime"}}),a("div",{staticClass:"load-more"},[a("ButtonTwoTone",{directives:[{name:"show",rawName:"v-show",value:t.hasMore,expression:"hasMore"}],attrs:{color:"grey"},nativeOn:{click:function(e){return t.loadMVs(e)}}},[t._v(t._s(t.$t("explore.loadMore")))])],1)],1)},o=[],r=a("d0ff"),s=a("512b"),n=a("323e"),u=a.n(n),l=a("5e45"),d=a("d4e3"),c={name:"artistMV",components:{MvRow:d["a"],ButtonTwoTone:l["a"]},data:function(){return{id:0,show:!1,hasMore:!0,artist:{},mvs:[]}},methods:{loadData:function(){var t=this;Object(s["c"])(this.id).then((function(e){t.artist=e.artist})),this.loadMVs()},loadMVs:function(){var t=this;Object(s["a"])({id:this.id,limit:100,offset:this.mvs.length}).then((function(e){var a;(a=t.mvs).push.apply(a,Object(r["a"])(e.mvs)),t.hasMore=e.hasMore,u.a.done(),t.show=!0}))}},created:function(){this.id=this.$route.params.id,this.loadData()},activated:function(){this.$route.params.id!==this.id&&(this.id=this.$route.params.id,this.mvs=[],this.artist={},this.show=!1,this.hasMore=!0,this.loadData())},beforeRouteUpdate:function(t,e,a){u.a.start(),this.id=t.params.id,this.loadData(),a()}},v=c,h=(a("ff18"),a("2877")),f=Object(h["a"])(v,i,o,!1,null,"40086835",null);e["default"]=f.exports},"0f0a":function(t,e,a){"use strict";var i=a("4fb2"),o=a.n(i);o.a},"20e9":function(t,e,a){"use strict";var i=a("bda3"),o=a.n(i);o.a},"47e6":function(t,e,a){},"4fb2":function(t,e,a){},"5e45":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:t.color,style:t.buttonStyle},[null!==t.iconClass?a("svg-icon",{style:{marginRight:t.iconButton?"0px":"8px"},attrs:{iconClass:t.iconClass}}):t._e(),t._t("default")],2)},o=[],r=(a("a9e3"),{name:"ButtonTwoTone",props:{iconClass:{type:String,default:null},iconButton:{type:Boolean,default:!1},horizontalPadding:{type:Number,default:16},color:{type:String,default:"blue"},backgroundColor:{type:String,default:""},textColor:{type:String,default:""},shape:{type:String,default:"square"}},computed:{buttonStyle:function(){var t={borderRadius:"round"===this.shape?"50%":"8px",padding:"8px ".concat(this.horizontalPadding,"px"),width:"round"===this.shape?"38px":"auto"};return""!==this.backgroundColor&&(t.backgroundColor=this.backgroundColor),""!==this.textColor&&(t.color=this.textColor),t}}}),s=r,n=(a("0f0a"),a("2877")),u=Object(n["a"])(s,i,o,!1,null,"18f7e8ba",null);e["a"]=u.exports},bda3:function(t,e,a){},d0ff:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var i=a("b680");function o(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=a("dde1");function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return o(t)||r(t)||Object(s["a"])(t)||n()}},d4e3:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mv-row",class:{"without-padding":t.withoutPadding}},t._l(t.mvs,(function(e){return a("div",{key:t.getID(e),staticClass:"mv"},[a("div",{staticClass:"cover",on:{mouseover:function(a){t.hoverVideoID=t.getID(e)},mouseleave:function(e){t.hoverVideoID=0},click:function(a){t.goToMv(t.getID(e))}}},[a("img",{attrs:{src:t.getUrl(e)}}),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.hoverVideoID===t.getID(e),expression:"hoverVideoID === getID(mv)"}],staticClass:"shadow",style:{background:"url("+t.getUrl(e)+")"}})])],1),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[a("router-link",{attrs:{to:"/mv/"+t.getID(e)}},[t._v(t._s(t.getTitle(e)))])],1),a("div",{staticClass:"artist",domProps:{innerHTML:t._s(t.getSubtitle(e))}})])])})),0)},o=[],r=(a("99af"),a("b0c0"),a("ac1f"),a("5319"),{name:"CoverVideo",props:{mvs:Array,subtitle:{type:String,default:"artist"},withoutPadding:{type:Boolean,default:!1}},data:function(){return{hoverVideoID:0}},methods:{goToMv:function(t){var e={};void 0!==this.$parent.player&&(e={autoplay:this.$parent.player.playing}),this.$router.push({path:"/mv/"+t,query:e})},getUrl:function(t){var e,a,i=null!==(e=null!==(a=t.imgurl16v9)&&void 0!==a?a:t.cover)&&void 0!==e?e:t.coverUrl;return i.replace(/^http:/,"https:")+"?param=464y260"},getID:function(t){return void 0!==t.id?t.id:void 0!==t.vid?t.vid:void 0},getTitle:function(t){return void 0!==t.name?t.name:void 0!==t.title?t.title:void 0},getSubtitle:function(t){if("artist"===this.subtitle){var e="null",a=0;return void 0!==t.artistName?(e=t.artistName,a=t.artistId):void 0!==t.creator&&(e=t.creator[0].userName,a=t.creator[0].userId),'<a href="/#/artist/'.concat(a,'">').concat(e,"</a>")}if("publishTime"===this.subtitle)return t.publishTime}}}),s=r,n=(a("20e9"),a("2877")),u=Object(n["a"])(s,i,o,!1,null,"71b4f1ff",null);e["a"]=u.exports},ff18:function(t,e,a){"use strict";var i=a("47e6"),o=a.n(i);o.a}}]);
//# sourceMappingURL=chunk-73159978.f9355a67.js.map