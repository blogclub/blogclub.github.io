(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71e9c870"],{"0c94":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("svg-icon",{style:t.svgStyle,attrs:{"icon-class":"explicit"}})},a=[],n=(e("a9e3"),e("0032")),r={name:"ExplicitSymbol",components:{SvgIcon:n["a"]},props:{size:{type:Number,default:16}},data:function(){return{svgStyle:{}}},created:function(){this.svgStyle={height:this.size+"px",width:this.size+"px"}}},c=r,l=e("2877"),o=Object(l["a"])(c,s,a,!1,null,"7e2a888e",null);i["a"]=o.exports},"4dfa":function(t,i,e){"use strict";var s=e("5aa4"),a=e.n(s);a.a},"5aa4":function(t,i,e){},6825:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"contextMenu",staticClass:"context-menu"},[t.showMenu?e("div",{ref:"menu",staticClass:"menu",style:{top:t.top,left:t.left},attrs:{tabindex:"-1"},on:{blur:t.closeMenu,click:t.closeMenu}},[t._t("default")],2):t._e()])},a=[],n={name:"ContextMenu",data:function(){return{showMenu:!1,top:"0px",left:"0px"}},methods:{setMenu:function(t,i){var e=window.innerHeight-this.$refs.menu.offsetHeight-25,s=window.innerWidth-this.$refs.menu.offsetWidth-25;t>e&&(t=e),i>s&&(i=s),this.top=t+"px",this.left=i+"px"},closeMenu:function(){this.showMenu=!1,void 0!==this.$parent.closeMenu&&this.$parent.closeMenu()},openMenu:function(t){this.showMenu=!0,this.$nextTick(function(){this.$refs.menu.focus(),this.setMenu(t.y,t.x)}.bind(this)),t.preventDefault()}}},r=n,c=(e("4dfa"),e("2877")),l=Object(c["a"])(r,s,a,!1,null,"7674b787",null);i["a"]=l.exports},"723a":function(t,i,e){},"979b":function(t,i,e){"use strict";var s=e("a632"),a=e.n(s);a.a},a1a1:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"track-list",class:{"without-padding":t.withoutPadding}},[e("ContextMenu",{ref:"menu"},[e("div",{staticClass:"item-info"},[e("img",{attrs:{src:t._f("resizeImage")(t.rightClickedTrack.al.picUrl,224)}}),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v(t._s(t.rightClickedTrack.name))]),e("div",{staticClass:"subtitle"},[t._v(t._s(t.rightClickedTrack.ar[0].name))])])]),e("hr"),e("div",{staticClass:"item",on:{click:t.play}},[t._v(t._s(t.$t("contextMenu.play")))]),e("div",{staticClass:"item",on:{click:t.playNext}},[t._v(t._s(t.$t("contextMenu.playNext")))]),e("hr"),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isRightClickedTrackLiked,expression:"!isRightClickedTrackLiked"}],staticClass:"item",on:{click:t.like}},[t._v(" "+t._s(t.$t("contextMenu.saveToMyLikedSongs"))+" ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isRightClickedTrackLiked,expression:"isRightClickedTrackLiked"}],staticClass:"item",on:{click:t.like}},[t._v(" "+t._s(t.$t("contextMenu.removeFromMyLikedSongs"))+" ")]),t.extraContextMenuItem.includes("removeTrackFromPlaylist")?e("div",{staticClass:"item",on:{click:t.removeTrackFromPlaylist}},[t._v("从歌单中删除")]):t._e(),e("div",{staticClass:"item",on:{click:t.addTrackToPlaylist}},[t._v("添加到歌单")])]),e("div",{staticClass:"track-list-inner-container",style:t.listStyles},t._l(t.tracks,(function(i,s){return e("TrackListItem",{key:"id"===t.itemKey?i.id:""+i.id+s,attrs:{track:i,highlightPlayingTrack:t.highlightPlayingTrack},nativeOn:{dblclick:function(e){return t.playThisList(i.id)},contextmenu:function(e){return t.openMenu(e,i)}}})})),1)],1)},a=[],n=(e("4de4"),e("caad"),e("d81d"),e("b0c0"),e("a9e3"),e("2532"),e("f3f3")),r=e("2f62"),c=e("fefb"),l=e("1e9a"),o=e("5f87"),u=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"track",class:t.trackClass,style:t.trackStyle,attrs:{title:t.showUnavailableSongInGreyStyle?t.track.reason:""},on:{mouseover:function(i){t.hover=!0},mouseleave:function(i){t.hover=!1}}},[t.isAlbum?t._e():e("img",{class:{hover:t.focus},attrs:{src:t.imgUrl},on:{click:t.goToAlbum}}),t.isAlbum?e("div",{staticClass:"no"},[e("button",{directives:[{name:"show",rawName:"v-show",value:t.focus&&t.track.playable&&!t.isPlaying,expression:"focus && track.playable && !isPlaying"}],on:{click:t.playTrack}},[e("svg-icon",{staticStyle:{height:"14px",width:"14px"},attrs:{"icon-class":"play"}})],1),e("span",{directives:[{name:"show",rawName:"v-show",value:(!t.focus||!t.track.playable)&&!t.isPlaying,expression:"(!focus || !track.playable) && !isPlaying"}]},[t._v(t._s(t.track.no))]),e("button",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}]},[e("svg-icon",{staticStyle:{height:"16px",width:"16px"},attrs:{"icon-class":"volume"}})],1)]):t._e(),e("div",{staticClass:"title-and-artist"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.track.name)+" "),t.isAlbum?e("span",{staticClass:"featured"},[e("ArtistsInLine",{attrs:{artists:t.track.ar,exclude:this.$parent.albumObject.artist.name,prefix:"-"}})],1):t._e(),t.isAlbum&&1318912===t.track.mark?e("span",{staticClass:"explicit-symbol"},[e("ExplicitSymbol")],1):t._e()]),t.isAlbum?t._e():e("div",{staticClass:"artist"},[1318912===t.track.mark?e("span",{staticClass:"explicit-symbol before-artist"},[e("ExplicitSymbol",{attrs:{size:15}})],1):t._e(),e("ArtistsInLine",{attrs:{artists:t.artists}})],1)]),e("div")]),t.isTracklist||t.isAlbum?t._e():e("div",{staticClass:"album"},[e("router-link",{attrs:{to:"/album/"+t.track.al.id}},[t._v(t._s(t.track.al.name))]),e("div")],1),t.isTracklist?t._e():e("div",{staticClass:"actions"},[e("button",{on:{click:t.likeThisSong}},[e("svg-icon",{style:{visibility:t.focus&&!t.isLiked&&t.track.playable?"visible":"hidden"},attrs:{"icon-class":"heart"}}),e("svg-icon",{directives:[{name:"show",rawName:"v-show",value:t.isLiked,expression:"isLiked"}],attrs:{"icon-class":"heart-solid"}})],1)]),t.isTracklist?t._e():e("div",{staticClass:"time"},[t._v(" "+t._s(t._f("formatTime")(t.track.dt))+" ")])])},d=[],h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("span",{staticClass:"artist-in-line"},[t._v(" "+t._s(t.computedPrefix)+" "),t._l(t.filteredArtists,(function(i,s){return e("span",{key:i.id},[e("router-link",{attrs:{to:"/artist/"+i.id}},[t._v(t._s(i.name))]),s!==t.filteredArtists.length-1?e("span",[t._v(", ")]):t._e()],1)}))],2)},k=[],p={name:"ArtistInLine",props:{artists:{type:Array,required:!0},exclude:{type:String,default:""},prefix:{type:String,default:""}},computed:{filteredArtists:function(){var t=this;return this.artists.filter((function(i){return i.name!==t.exclude}))},computedPrefix:function(){return 0!==this.filteredArtists.length?this.prefix:""}}},f=p,y=e("2877"),m=Object(y["a"])(f,h,k,!1,null,"6b13d4cd",null),v=m.exports,g=e("0c94"),b={name:"TrackListItem",components:{ArtistsInLine:v,ExplicitSymbol:g["a"]},props:{track:Object,highlightPlayingTrack:{type:Boolean,default:!0}},data:function(){return{hover:!1,trackStyle:{}}},computed:Object(n["a"])(Object(n["a"])({},Object(r["d"])(["settings"])),{},{imgUrl:function(){var t,i,e,s,a,n,r=null!==(t=null!==(i=null===(e=this.track)||void 0===e||null===(s=e.al)||void 0===s?void 0:s.picUrl)&&void 0!==i?i:null===(a=this.track)||void 0===a||null===(n=a.album)||void 0===n?void 0:n.picUrl)&&void 0!==t?t:"https://p2.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg";return r+"?param=224y224"},artists:function(){return void 0!==this.track.ar?this.track.ar:void 0!==this.track.artists?this.track.artists:[]},type:function(){return this.$parent.type},isAlbum:function(){return"album"===this.type},isTracklist:function(){return"tracklist"===this.type},isPlaylist:function(){return"playlist"===this.type},isLiked:function(){return this.$parent.liked.songs.includes(this.track.id)},isPlaying:function(){return this.$store.state.player.currentTrack.id===this.track.id},trackClass:function(){var t=[this.type];return!this.track.playable&&this.settings.showUnavailableSongInGreyStyle&&t.push("disable"),this.isPlaying&&this.highlightPlayingTrack&&t.push("playing"),this.focus&&t.push("focus"),t},isMenuOpened:function(){return this.$parent.rightClickedTrack.id===this.track.id},focus:function(){return this.hover&&0===this.$parent.rightClickedTrack.id||this.isMenuOpened},showUnavailableSongInGreyStyle:function(){return this.$store.state.settings.showUnavailableSongInGreyStyle}}),methods:{goToAlbum:function(){this.$router.push({path:"/album/"+this.track.al.id})},playTrack:function(){this.$parent.playThisList(this.track.id)},likeThisSong:function(){this.$parent.likeASong(this.track.id)}}},T=b,x=(e("fc54"),Object(y["a"])(T,u,d,!1,null,"51fc0d68",null)),C=x.exports,_=e("6825"),w={name:"TrackList",components:{TrackListItem:C,ContextMenu:_["a"]},props:{tracks:Array,type:String,id:Number,dbclickTrackFunc:{type:String,default:"default"},albumObject:{type:Object,default:function(){return{artist:{name:""}}}},extraContextMenuItem:{type:Array,default:function(){return[]}},highlightPlayingTrack:{type:Boolean,default:!0},itemKey:{type:String,default:"id"},withoutPadding:{type:Boolean,default:!1}},data:function(){return{rightClickedTrack:{id:0,name:"",ar:[{name:""}],al:{picUrl:""}},listStyles:{}}},created:function(){"tracklist"===this.type&&(this.listStyles={display:"grid",gap:"4px"})},computed:Object(n["a"])(Object(n["a"])({},Object(r["d"])(["liked"])),{},{isRightClickedTrackLiked:function(){var t;return this.liked.songs.includes(null===(t=this.rightClickedTrack)||void 0===t?void 0:t.id)}}),methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(r["c"])(["updateLikedSongs","updateModal"])),Object(r["b"])(["nextTrack","playTrackOnListByID","showToast"])),{},{openMenu:function(t,i){i.playable&&(this.rightClickedTrack=i,this.$refs.menu.openMenu(t))},closeMenu:function(){this.rightClickedTrack={id:0,name:"",ar:[{name:""}],al:{picUrl:""}}},playThisList:function(t){if("default"===this.dbclickTrackFunc)this.playThisListDefault(t);else if("none"===this.dbclickTrackFunc);else if("playTrackOnListByID"===this.dbclickTrackFunc)this.playTrackOnListByID(t);else if("playPlaylistByID"===this.dbclickTrackFunc)this.$store.state.player.playPlaylistByID(this.id,t);else if("playAList"===this.dbclickTrackFunc){var i=this.tracks.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(i,this.id,"artist",t)}},playThisListDefault:function(t){if("playlist"===this.type)this.$store.state.player.playPlaylistByID(this.id,t);else if("album"===this.type)this.$store.state.player.playAlbumByID(this.id,t);else if("tracklist"===this.type){var i=this.tracks.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(i,this.id,"artist",t)}},play:function(){this.$store.state.player.addTrackToPlayNext(this.rightClickedTrack.id,!0)},playNext:function(){this.$store.state.player.addTrackToPlayNext(this.rightClickedTrack.id)},like:function(){this.likeASong(this.rightClickedTrack.id)},likeASong:function(t){var i=this;if(Object(o["b"])()){var e=!0,s=this.liked.songs;s.includes(t)&&(e=!1),Object(c["d"])({id:t,like:e}).then((function(a){200===a.code&&(!1===e?(i.showToast(i.$t("toast.removedFromMyLikedSongs")),i.updateLikedSongs(s.filter((function(i){return i!==t})))):(i.showToast(i.$t("toast.savedToMyLikedSongs")),s.push(t),i.updateLikedSongs(s)))}))}else this.showToast("此操作需要登录网易云账号")},addTrackToPlaylist:function(){Object(o["b"])()?(this.updateModal({modalName:"addTrackToPlaylistModal",key:"show",value:!0}),this.updateModal({modalName:"addTrackToPlaylistModal",key:"selectedTrackID",value:this.rightClickedTrack.id})):this.showToast("此操作需要登录网易云账号")},removeTrackFromPlaylist:function(){var t=this;if(Object(o["b"])()){if(confirm("确定要从歌单删除 ".concat(this.rightClickedTrack.name,"？"))){var i=this.rightClickedTrack.id;Object(l["a"])({op:"del",pid:this.id,tracks:i}).then((function(e){t.showToast(200===e.body.code?"已从歌单中删除":e.body.message),t.$parent.removeTrack(i)}))}}else this.showToast("此操作需要登录网易云账号")}})},S=w,M=(e("979b"),Object(y["a"])(S,s,a,!1,null,"10900966",null));i["a"]=M.exports},a632:function(t,i,e){},fc54:function(t,i,e){"use strict";var s=e("723a"),a=e.n(s);a.a}}]);
//# sourceMappingURL=chunk-71e9c870.00cb63d5.js.map