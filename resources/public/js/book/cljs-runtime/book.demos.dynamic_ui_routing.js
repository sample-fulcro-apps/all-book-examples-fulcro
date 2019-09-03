goog.provide('book.demos.dynamic_ui_routing');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.routing.legacy_ui_routers');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('shadow.loader');
goog.require('taoensso.timbre');

var options__72617__auto___89116 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$dynamic_ui_routing$build_raw_initial_state_STAR_(params){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.routing.legacy_ui_routers.dynamic_route_key,new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"label","label",1718410804),"LOGIN",new cljs.core.Keyword(null,"login-prop","login-prop",-1377905154),"login data"]);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$dynamic_ui_routing$ident_STAR_(this$,p__89054){
var map__89055 = p__89054;
var map__89055__$1 = (((((!((map__89055 == null))))?(((((map__89055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89055):map__89055);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89055__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var login_prop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89055__$1,new cljs.core.Keyword(null,"login-prop","login-prop",-1377905154));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$dynamic_ui_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.dynamic_route_key,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"login-prop","login-prop",-1377905154)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$dynamic_ui_routing$render_Login(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89057 = com.fulcrologic.fulcro.components.props(this$);
var map__89057__$1 = (((((!((map__89057 == null))))?(((((map__89057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89057):map__89057);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89057__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var login_prop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89057__$1,new cljs.core.Keyword(null,"login-prop","login-prop",-1377905154));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"backgroundColor": "green"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(login_prop)].join(''))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.dynamic_ui_routing !== 'undefined') && (typeof book.demos.dynamic_ui_routing.Login !== 'undefined')){
} else {
book.demos.dynamic_ui_routing.Login = ((function (options__72617__auto___89116){
return (function book$demos$dynamic_ui_routing$Login(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89116,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89117)){
var init_state__72620__auto___89118 = temp__5733__auto___89117;
this__72619__auto__.state = (function (){var obj89060 = ({"fulcro$state":(function (){var G__89061 = this__72619__auto__;
var G__89062 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89118.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89118.cljs$core$IFn$_invoke$arity$2(G__89061,G__89062) : init_state__72620__auto___89118.call(null,G__89061,G__89062));
})()});
return obj89060;
})();
} else {
this__72619__auto__.state = (function (){var obj89064 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89064;
})();
}

return null;
});})(options__72617__auto___89116))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.dynamic_ui_routing.Login,new cljs.core.Keyword("book.demos.dynamic-ui-routing","Login","book.demos.dynamic-ui-routing/Login",-35386592),options__72617__auto___89116);

var options__72617__auto___89119 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$dynamic_ui_routing$build_raw_initial_state_STAR_(params){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.routing.legacy_ui_routers.dynamic_route_key,new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword(null,"label","label",1718410804),"New User",new cljs.core.Keyword(null,"new-user-prop","new-user-prop",-920334918),"new user data"]);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$dynamic_ui_routing$ident_STAR_(this$,p__89065){
var map__89066 = p__89065;
var map__89066__$1 = (((((!((map__89066 == null))))?(((((map__89066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89066):map__89066);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89066__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var new_user_prop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89066__$1,new cljs.core.Keyword(null,"new-user-prop","new-user-prop",-920334918));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$dynamic_ui_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.dynamic_route_key,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"new-user-prop","new-user-prop",-920334918)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$dynamic_ui_routing$render_NewUser(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89068 = com.fulcrologic.fulcro.components.props(this$);
var map__89068__$1 = (((((!((map__89068 == null))))?(((((map__89068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89068):map__89068);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89068__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var new_user_prop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89068__$1,new cljs.core.Keyword(null,"new-user-prop","new-user-prop",-920334918));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"backgroundColor": "skyblue"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_user_prop)].join(''))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.dynamic_ui_routing !== 'undefined') && (typeof book.demos.dynamic_ui_routing.NewUser !== 'undefined')){
} else {
book.demos.dynamic_ui_routing.NewUser = ((function (options__72617__auto___89119){
return (function book$demos$dynamic_ui_routing$NewUser(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89119,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89120)){
var init_state__72620__auto___89121 = temp__5733__auto___89120;
this__72619__auto__.state = (function (){var obj89071 = ({"fulcro$state":(function (){var G__89072 = this__72619__auto__;
var G__89073 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89121.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89121.cljs$core$IFn$_invoke$arity$2(G__89072,G__89073) : init_state__72620__auto___89121.call(null,G__89072,G__89073));
})()});
return obj89071;
})();
} else {
this__72619__auto__.state = (function (){var obj89075 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89075;
})();
}

return null;
});})(options__72617__auto___89119))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.dynamic_ui_routing.NewUser,new cljs.core.Keyword("book.demos.dynamic-ui-routing","NewUser","book.demos.dynamic-ui-routing/NewUser",1514966315),options__72617__auto___89119);

var options__72617__auto___89122 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$dynamic_ui_routing$build_raw_initial_state_STAR_(params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.routing.legacy_ui_routers.make_route(new cljs.core.Keyword(null,"ui-main","ui-main",226371438),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.router_instruction(new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-main","ui-main",226371438),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null))], null)),com.fulcrologic.fulcro.routing.legacy_ui_routers.make_route(new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.router_instruction(new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null))], null)),com.fulcrologic.fulcro.routing.legacy_ui_routers.make_route(new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.router_instruction(new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null))], null))], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-router","top-router",1966843717),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.routing.legacy_ui_routers.DynamicRouter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"top-router","top-router",1966843717)], null))], null)], 0));
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$dynamic_ui_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-router","top-router",1966843717),com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_query(new cljs.core.Keyword(null,"top-router","top-router",1966843717))], null),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","pending-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/pending-route",-863934904),com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree_key], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$dynamic_ui_routing$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89108 = com.fulcrologic.fulcro.components.props(this$);
var map__89108__$1 = (((((!((map__89108 == null))))?(((((map__89108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89108):map__89108);
var top_router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89108__$1,new cljs.core.Keyword(null,"top-router","top-router",1966843717));
var pending_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89108__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","pending-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/pending-route",-863934904));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89108,map__89108__$1,top_router,pending_route){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","route-to","com.fulcrologic.fulcro.routing.legacy-ui-routers/route-to",-1157637021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"handler","handler",-195596612),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ui-main","ui-main",226371438),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__89108,map__89108__$1,top_router,pending_route))
], null),"Main"], null),null))," | ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89108,map__89108__$1,top_router,pending_route){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","route-to","com.fulcrologic.fulcro.routing.legacy-ui-routers/route-to",-1157637021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"handler","handler",-195596612),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"new-user","new-user",1575436062),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__89108,map__89108__$1,top_router,pending_route))
], null),"New User"], null),null))," | ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89108,map__89108__$1,top_router,pending_route){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","route-to","com.fulcrologic.fulcro.routing.legacy-ui-routers/route-to",-1157637021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"handler","handler",-195596612),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"login","login",55217519),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__89108,map__89108__$1,top_router,pending_route))
], null),"Login"], null),null))," | ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(pending_route)?"Loading":"Done")], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.routing.legacy_ui_routers.ui_dynamic_router(top_router))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.dynamic_ui_routing !== 'undefined') && (typeof book.demos.dynamic_ui_routing.Root !== 'undefined')){
} else {
book.demos.dynamic_ui_routing.Root = ((function (options__72617__auto___89122){
return (function book$demos$dynamic_ui_routing$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89122,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89124)){
var init_state__72620__auto___89125 = temp__5733__auto___89124;
this__72619__auto__.state = (function (){var obj89111 = ({"fulcro$state":(function (){var G__89112 = this__72619__auto__;
var G__89113 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89125.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89125.cljs$core$IFn$_invoke$arity$2(G__89112,G__89113) : init_state__72620__auto___89125.call(null,G__89112,G__89113));
})()});
return obj89111;
})();
} else {
this__72619__auto__.state = (function (){var obj89115 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89115;
})();
}

return null;
});})(options__72617__auto___89122))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.dynamic_ui_routing.Root,new cljs.core.Keyword("book.demos.dynamic-ui-routing","Root","book.demos.dynamic-ui-routing/Root",1494970524),options__72617__auto___89122);
book.demos.dynamic_ui_routing.application_loaded = (function book$demos$dynamic_ui_routing$application_loaded(app){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","install-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/install-route",1679521880,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"target-kw","target-kw",1473107484),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"new-user","new-user",1575436062),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"component","component",1555936782),null,(1),null)),(new cljs.core.List(null,book.demos.dynamic_ui_routing.NewUser,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","install-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/install-route",1679521880,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"target-kw","target-kw",1473107484),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"login","login",55217519),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"component","component",1555936782),null,(1),null)),(new cljs.core.List(null,book.demos.dynamic_ui_routing.Login,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","route-to","com.fulcrologic.fulcro.routing.legacy-ui-routers/route-to",-1157637021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"handler","handler",-195596612),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"login","login",55217519),null,(1),null)))))),null,(1),null))))),null,(1),null))], 0))))));
});

//# sourceMappingURL=book.demos.dynamic_ui_routing.js.map
