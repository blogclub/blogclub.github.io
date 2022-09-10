(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0878d3c5"],{"04f0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"album"},[a("div",{staticClass:"playlist-info"},[a("Cover",{attrs:{imageUrl:t._f("resizeImage")(t.album.picUrl,1024),showPlayButton:!0,alwaysShowShadow:!0,clickCoverToPlay:!0,fixedSize:288,type:"album",id:t.album.id,coverHover:!1,playButtonSize:18},nativeOn:{contextmenu:function(e){return t.openMenu(e)}}}),a("div",{staticClass:"info"},[a("div",{staticClass:"title",on:{contextmenu:function(e){return t.openMenu(e)}}},[t._v(" "+t._s(t.title))]),""!==t.subtitle?a("div",{staticClass:"subtitle",on:{contextmenu:function(e){return t.openMenu(e)}}},[t._v(t._s(t.subtitle))]):t._e(),a("div",{staticClass:"artist"},[104700!==t.album.artist.id?a("span",[a("span",[t._v(t._s(t._f("formatAlbumType")(t.album.type,t.album))+" by ")]),a("router-link",{attrs:{to:"/artist/"+t.album.artist.id}},[t._v(t._s(t.album.artist.name))])],1):a("span",[t._v("Compilation by Various Artists")])]),a("div",{staticClass:"date-and-count"},[1056768===t.album.mark?a("span",{staticClass:"explicit-symbol"},[a("ExplicitSymbol")],1):t._e(),a("span",{attrs:{title:t._f("formatDate")(t.album.publishTime)}},[t._v(t._s(new Date(t.album.publishTime).getFullYear()))]),a("span",[t._v(" · "+t._s(t.album.size)+" "+t._s(t.$t("common.songs")))]),t._v(", "+t._s(t._f("formatTime")(t.albumTime,"Human"))+" ")]),a("div",{staticClass:"description",on:{click:function(e){t.showFullDescription=!0}}},[t._v(" "+t._s(t.album.description)+" ")]),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"32px"}},[a("ButtonTwoTone",{attrs:{iconClass:"play"},nativeOn:{click:function(e){return t.playAlbumByID(t.album.id)}}},[t._v(" "+t._s(t.$t("common.play"))+" ")]),a("ButtonTwoTone",{attrs:{iconClass:t.dynamicDetail.isSub?"heart-solid":"heart",iconButton:!0,horizontalPadding:0,color:t.dynamicDetail.isSub?"blue":"grey",textColor:t.dynamicDetail.isSub?"#335eea":"",backgroundColor:t.dynamicDetail.isSub?"var(--color-secondary-bg)":""},nativeOn:{click:function(e){return t.likeAlbum(e)}}}),a("ButtonTwoTone",{attrs:{iconClass:"more",iconButton:!0,horizontalPadding:0,color:"grey"},nativeOn:{click:function(e){return t.openMenu(e)}}})],1)])],1),a("TrackList",{attrs:{tracks:t.tracks,type:"album",id:t.album.id,albumObject:t.album}}),a("div",{staticClass:"extra-info"},[a("div",{staticClass:"album-time"}),a("div",{staticClass:"release-date"},[t._v(" "+t._s(t.$t("album.released"))+" "+t._s(t._f("formatDate")(t.album.publishTime,"MMMM D, YYYY"))+" ")]),null!==t.album.company?a("div",{staticClass:"copyright"},[t._v(" © "+t._s(t.album.company)+" ")]):t._e()]),0!==t.filteredMoreAlbums.length?a("div",{staticClass:"more-by"},[a("div",{staticClass:"section-title"},[t._v(" More by "),a("router-link",{attrs:{to:"/artist/"+t.album.artist.id}},[t._v(t._s(t.album.artist.name)+" ")])],1),a("div",[a("CoverRow",{attrs:{type:"album",items:t.filteredMoreAlbums,subText:"albumType+releaseYear"}})],1)]):t._e(),a("Modal",{attrs:{show:t.showFullDescription,close:function(){return t.showFullDescription=!1},showFooter:!1,clickOutsideHide:!0,title:"专辑介绍"}},[a("p",{staticClass:"description-fulltext"},[t._v(" "+t._s(t.album.description)+" ")])]),a("ContextMenu",{ref:"albumMenu"},[a("div",{staticClass:"item"},[t._v(t._s(t.$t("contextMenu.playNext")))]),a("div",{staticClass:"item",on:{click:function(e){return t.likeAlbum(!0)}}},[t._v(t._s(t.dynamicDetail.isSub?"从音乐库删除":"保存到音乐库"))]),a("div",{staticClass:"item"},[t._v("添加到歌单")])])],1)},s=[],n=(a("99af"),a("4de4"),a("7db0"),a("a15b"),a("d81d"),a("fb6a"),a("b0c0"),a("d0ff")),o=a("f3f3"),r=a("2f62"),l=a("512b"),u=a("fefb"),c=a("e498"),d=a("cf45"),p=a("323e"),b=a.n(p),m=a("5f87"),f=a("0c94"),y=a("5e45"),h=a("6825"),v=a("a1a1"),g=a("2726"),w=a("3020"),S=a("714b"),C={name:"Album",components:{Cover:w["a"],ButtonTwoTone:y["a"],TrackList:v["a"],ExplicitSymbol:f["a"],CoverRow:g["a"],Modal:S["a"],ContextMenu:h["a"]},data:function(){return{album:{id:0,picUrl:"",artist:{id:0}},tracks:[],showFullDescription:!1,show:!1,moreAlbums:[],dynamicDetail:{},subtitle:"",title:""}},created:function(){this.loadData(this.$route.params.id)},computed:Object(o["a"])(Object(o["a"])({},Object(r["d"])(["player","data"])),{},{albumTime:function(){var t=0;return this.tracks.map((function(e){return t+=e.dt})),t},filteredMoreAlbums:function(){var t=this,e=this.moreAlbums.filter((function(e){return e.id!==t.album.id})),a=e.filter((function(t){return"专辑"===t.type})),i=e.filter((function(t){return"EP"===t.type||"EP/Single"===t.type&&t.size>1})),s=e.filter((function(t){return void 0===a.find((function(e){return e.id===t.id}))&&void 0===i.find((function(e){return e.id===t.id}))}));return 0===a.length?[].concat(Object(n["a"])(a),Object(n["a"])(i),Object(n["a"])(s)).slice(0,5):[].concat(Object(n["a"])(a),Object(n["a"])(s)).slice(0,5)}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["c"])(["appendTrackToPlayerList"])),Object(r["b"])(["playFirstTrackOnList","playTrackOnListByID","showToast"])),{},{playAlbumByID:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";this.$store.state.player.playAlbumByID(t,e)},likeAlbum:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(m["b"])()?Object(c["c"])({id:this.album.id,t:this.dynamicDetail.isSub?0:1}).then((function(a){200===a.code&&(t.dynamicDetail.isSub=!t.dynamicDetail.isSub,!0===e&&t.showToast(t.dynamicDetail.isSub?"已保存到音乐库":"已从音乐库删除"))})):this.showToast("此操作需要登录网易云账号")},formatTitle:function(){var t=Object(d["h"])(this.album.name),e=Object(d["g"])(t.title);this.title=e.title,""!==t.subtitle&&""!==e.subtitle?this.subtitle=t.subtitle+" · "+e.subtitle:this.subtitle=""===t.subtitle?e.subtitle:t.subtitle},loadData:function(t){var e=this;Object(c["b"])(t).then((function(t){e.album=t.album,e.tracks=t.songs,e.formatTitle(),b.a.done(),e.show=!0;var a=e.tracks.map((function(t){return t.id}));Object(u["c"])(a.join(",")).then((function(t){e.tracks=t.songs})),Object(l["d"])({id:e.album.artist.id,limit:100}).then((function(t){e.moreAlbums=t.hotAlbums}))})),Object(c["a"])(t).then((function(t){e.dynamicDetail=t}))},openMenu:function(t){this.$refs.albumMenu.openMenu(t)}}),beforeRouteUpdate:function(t,e,a){b.a.start(),this.loadData(t.params.id),a()}},_=C,x=(a("06a5"),a("2877")),T=Object(x["a"])(_,i,s,!1,null,"26305fe2",null);e["default"]=T.exports},"06a5":function(t,e,a){"use strict";var i=a("4bb3"),s=a.n(i);s.a},"0f0a":function(t,e,a){"use strict";var i=a("4fb2"),s=a.n(i);s.a},2508:function(t,e,a){"use strict";var i=a("c19a"),s=a.n(i);s.a},2726:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover-row",class:{"without-padding":t.withoutPadding},style:t.rowStyles},t._l(t.items,(function(e){return a("div",{key:e.id,staticClass:"item",class:{artist:"artist"===t.type}},[a("Cover",{attrs:{imageUrl:t.getImageUrl(e),type:t.type,id:e.id}}),a("div",{staticClass:"text"},[t.showPlayCount?a("div",{staticClass:"info"},[a("span",{staticClass:"play-count"},[a("svg-icon",{attrs:{"icon-class":"play"}}),t._v(t._s(t._f("formatPlayCount")(e.playCount))+" ")],1)]):t._e(),a("div",{staticClass:"title",style:{fontSize:t.subTextFontSize}},[t.isExplicit(e)?a("span",{staticClass:"explicit-symbol"},[a("ExplicitSymbol")],1):t._e(),t.isPrivacy(e)?a("span",{staticClass:"lock-icon"},[a("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),a("router-link",{attrs:{to:t.getTitleLink(e)}},[t._v(t._s(e.name))])],1),"artist"!==t.type&&"none"!==t.subText?a("div",{staticClass:"info"},[a("span",{domProps:{innerHTML:t._s(t.getSubText(e))}})]):t._e()])],1)})),0)},s=[],n=(a("a4d3"),a("e01a"),a("99af"),a("b0c0"),a("a9e3"),a("ac1f"),a("1276"),a("3020")),o=a("0c94"),r={name:"CoverRow",components:{Cover:n["a"],ExplicitSymbol:o["a"]},props:{items:{type:Array,required:!0},type:{type:String,required:!0},subText:{type:String,default:"null"},subTextFontSize:{type:String,default:"16px"},showPlayCount:{type:Boolean,default:!1},columnNumber:{type:Number,default:5},gap:{type:String,default:"44px 24px"},withoutPadding:{type:Boolean,default:!1}},computed:{rowStyles:function(){return{"grid-template-columns":"repeat(".concat(this.columnNumber,", 1fr)"),gap:this.gap}}},methods:{getSubText:function(t){if("copywriter"===this.subText)return t.copywriter;if("description"===this.subText)return t.description;if("updateFrequency"===this.subText)return t.updateFrequency;if("creator"===this.subText)return"by "+t.creator.nickname;if("releaseYear"===this.subText)return new Date(t.publishTime).getFullYear();if("artist"===this.subText){if(void 0!==t.artist)return'<a href="/#/artist/'.concat(t.artist.id,'">').concat(t.artist.name,"</a>");if(void 0!==t.artists)return'<a href="/#/artist/'.concat(t.artists[0].id,'">').concat(t.artists[0].name,"</a>")}if("albumType+releaseYear"===this.subText){var e=t.type;return"EP/Single"===t.type?e=1===t.size?"Single":"EP":"Single"===t.type?e="Single":"专辑"===t.type&&(e="Album"),"".concat(e," · ").concat(new Date(t.publishTime).getFullYear())}return"appleMusic"===this.subText?"by Apple Music":void 0},isPrivacy:function(t){return"playlist"===this.type&&10===t.privacy},isExplicit:function(t){return"album"===this.type&&1056768===t.mark},getTitleLink:function(t){return"/".concat(this.type,"/").concat(t.id)},getImageUrl:function(t){if(t.img1v1Url){var e=t.img1v1Url.split("/");if(e=e[e.length-1],"5639395138885805.jpg"===e)return"https://p2.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=512y512"}var a=t.img1v1Url||t.picUrl||t.coverImgUrl;return"".concat(a,"?param=512y512")}}},l=r,u=(a("2508"),a("2877")),c=Object(u["a"])(l,i,s,!1,null,"20835ae4",null);e["a"]=c.exports},"2c46":function(t,e,a){"use strict";var i=a("862d"),s=a.n(i);s.a},3020:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover",class:{"cover-hover":t.coverHover},on:{mouseover:function(e){t.focus=!0},mouseleave:function(e){t.focus=!1},click:function(e){t.clickCoverToPlay?t.play():t.goTo()}}},[a("div",{staticClass:"cover-container"},[a("div",{staticClass:"shade"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"play-button",style:t.playButtonStyles,on:{click:function(e){return e.stopPropagation(),t.play()}}},[a("svg-icon",{attrs:{"icon-class":"play"}})],1)]),a("img",{style:t.imageStyles,attrs:{src:t.imageUrl}}),t.coverHover||t.alwaysShowShadow?a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.focus||t.alwaysShowShadow,expression:"focus || alwaysShowShadow"}],staticClass:"shadow",style:t.shadowStyles})]):t._e()],1)])},s=[],n=(a("a9e3"),{props:{id:{type:Number,required:!0},type:{type:String,required:!0},imageUrl:{type:String,required:!0},fixedSize:{type:Number,default:0},playButtonSize:{type:Number,default:22},coverHover:{type:Boolean,default:!0},alwaysShowPlayButton:{type:Boolean,default:!0},alwaysShowShadow:{type:Boolean,default:!1},clickCoverToPlay:{type:Boolean,default:!1},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12}},data:function(){return{focus:!1}},computed:{imageStyles:function(){var t={};return 0!==this.fixedSize&&(t.width=this.fixedSize+"px",t.height=this.fixedSize+"px"),"artist"===this.type&&(t.borderRadius="50%"),t},playButtonStyles:function(){var t={};return t.width=this.playButtonSize+"%",t.height=this.playButtonSize+"%",t},shadowStyles:function(){var t={};return t.backgroundImage="url(".concat(this.imageUrl,")"),"artist"===this.type&&(t.borderRadius="50%"),t}},methods:{play:function(){var t=this.$store.state.player,e={album:t.playAlbumByID,playlist:t.playPlaylistByID,artist:t.playArtistByID};e[this.type].bind(t)(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}}),o=n,r=(a("2c46"),a("2877")),l=Object(r["a"])(o,i,s,!1,null,"f1a38860",null);e["a"]=l.exports},"4bb3":function(t,e,a){},"4fb2":function(t,e,a){},"5e45":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:t.color,style:t.buttonStyle},[null!==t.iconClass?a("svg-icon",{style:{marginRight:t.iconButton?"0px":"8px"},attrs:{iconClass:t.iconClass}}):t._e(),t._t("default")],2)},s=[],n=(a("a9e3"),{name:"ButtonTwoTone",props:{iconClass:{type:String,default:null},iconButton:{type:Boolean,default:!1},horizontalPadding:{type:Number,default:16},color:{type:String,default:"blue"},backgroundColor:{type:String,default:""},textColor:{type:String,default:""},shape:{type:String,default:"square"}},computed:{buttonStyle:function(){var t={borderRadius:"round"===this.shape?"50%":"8px",padding:"8px ".concat(this.horizontalPadding,"px"),width:"round"===this.shape?"38px":"auto"};return""!==this.backgroundColor&&(t.backgroundColor=this.backgroundColor),""!==this.textColor&&(t.color=this.textColor),t}}}),o=n,r=(a("0f0a"),a("2877")),l=Object(r["a"])(o,i,s,!1,null,"18f7e8ba",null);e["a"]=l.exports},"862d":function(t,e,a){},c19a:function(t,e,a){},d0ff:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var i=a("b680");function s(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=a("dde1");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return s(t)||n(t)||Object(o["a"])(t)||r()}}}]);
//# sourceMappingURL=chunk-0878d3c5.eebba304.js.map