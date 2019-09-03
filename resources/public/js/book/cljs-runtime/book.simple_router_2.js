goog.provide('book.simple_router_2');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.routing.legacy_ui_routers');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.mutations');

var options__72617__auto___86471 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_2$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("router","page","router/page",1799387480)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$simple_router_2$ident_STAR_(this$,p__86259){
var map__86260 = p__86259;
var map__86260__$1 = (((((!((map__86260 == null))))?(((((map__86260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86260):map__86260);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86260__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86260__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,id], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_2$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("router","page","router/page",1799387480),new cljs.core.Keyword("PAGE","index","PAGE/index",-1513048426)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_2$render_Index(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86264 = com.fulcrologic.fulcro.components.props(this$);
var map__86264__$1 = (((((!((map__86264 == null))))?(((((map__86264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86264):map__86264);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86264__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86264__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Index Page"]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_2 !== 'undefined') && (typeof book.simple_router_2.Index !== 'undefined')){
} else {
book.simple_router_2.Index = ((function (options__72617__auto___86471){
return (function book$simple_router_2$Index(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86471,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86474)){
var init_state__72620__auto___86477 = temp__5733__auto___86474;
this__72619__auto__.state = (function (){var obj86269 = ({"fulcro$state":(function (){var G__86270 = this__72619__auto__;
var G__86271 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86477.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86477.cljs$core$IFn$_invoke$arity$2(G__86270,G__86271) : init_state__72620__auto___86477.call(null,G__86270,G__86271));
})()});
return obj86269;
})();
} else {
this__72619__auto__.state = (function (){var obj86273 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86273;
})();
}

return null;
});})(options__72617__auto___86471))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_2.Index,new cljs.core.Keyword("book.simple-router-2","Index","book.simple-router-2/Index",-675671465),options__72617__auto___86471);

var options__72617__auto___86485 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_2$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("router","page","router/page",1799387480)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$simple_router_2$ident_STAR_(this$,p__86274){
var map__86275 = p__86274;
var map__86275__$1 = (((((!((map__86275 == null))))?(((((map__86275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86275):map__86275);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86275__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86275__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,id], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_2$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("router","page","router/page",1799387480),new cljs.core.Keyword("PAGE","email","PAGE/email",1418265523)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_2$render_EmailSettings(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86277 = com.fulcrologic.fulcro.components.props(this$);
var map__86277__$1 = (((((!((map__86277 == null))))?(((((map__86277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86277):map__86277);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86277__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86277__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Email Settings Page"]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_2 !== 'undefined') && (typeof book.simple_router_2.EmailSettings !== 'undefined')){
} else {
book.simple_router_2.EmailSettings = ((function (options__72617__auto___86485){
return (function book$simple_router_2$EmailSettings(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86485,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86486)){
var init_state__72620__auto___86487 = temp__5733__auto___86486;
this__72619__auto__.state = (function (){var obj86282 = ({"fulcro$state":(function (){var G__86283 = this__72619__auto__;
var G__86284 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86487.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86487.cljs$core$IFn$_invoke$arity$2(G__86283,G__86284) : init_state__72620__auto___86487.call(null,G__86283,G__86284));
})()});
return obj86282;
})();
} else {
this__72619__auto__.state = (function (){var obj86286 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86286;
})();
}

return null;
});})(options__72617__auto___86485))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_2.EmailSettings,new cljs.core.Keyword("book.simple-router-2","EmailSettings","book.simple-router-2/EmailSettings",488742657),options__72617__auto___86485);

var options__72617__auto___86488 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_2$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("router","page","router/page",1799387480)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$simple_router_2$ident_STAR_(this$,p__86287){
var map__86288 = p__86287;
var map__86288__$1 = (((((!((map__86288 == null))))?(((((map__86288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86288):map__86288);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86288__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86288__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,id], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_2$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("router","page","router/page",1799387480),new cljs.core.Keyword("PAGE","color","PAGE/color",1017744824)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_2$render_ColorSettings(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86290 = com.fulcrologic.fulcro.components.props(this$);
var map__86290__$1 = (((((!((map__86290 == null))))?(((((map__86290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86290):map__86290);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86290__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86290__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Color Settings"]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_2 !== 'undefined') && (typeof book.simple_router_2.ColorSettings !== 'undefined')){
} else {
book.simple_router_2.ColorSettings = ((function (options__72617__auto___86488){
return (function book$simple_router_2$ColorSettings(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86488,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86494)){
var init_state__72620__auto___86495 = temp__5733__auto___86494;
this__72619__auto__.state = (function (){var obj86297 = ({"fulcro$state":(function (){var G__86300 = this__72619__auto__;
var G__86301 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86495.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86495.cljs$core$IFn$_invoke$arity$2(G__86300,G__86301) : init_state__72620__auto___86495.call(null,G__86300,G__86301));
})()});
return obj86297;
})();
} else {
this__72619__auto__.state = (function (){var obj86303 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86303;
})();
}

return null;
});})(options__72617__auto___86488))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_2.ColorSettings,new cljs.core.Keyword("book.simple-router-2","ColorSettings","book.simple-router-2/ColorSettings",-1104354179),options__72617__auto___86488);

var options__72617__auto___86496 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_2$render_SettingsRouter_Union(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86336 = com.fulcrologic.fulcro.components.props(this$);
var map__86336__$1 = (((((!((map__86336 == null))))?(((((map__86336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86336):map__86336);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86336__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86336__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var props = com.fulcrologic.fulcro.components.props(this$);
var page__85300__auto__ = cljs.core.first(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(this$,props));
var G__86339 = page__85300__auto__;
var G__86339__$1 = (((G__86339 instanceof cljs.core.Keyword))?G__86339.fqn:null);
switch (G__86339__$1) {
case "PAGE/email":
var fexpr__86341 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.EmailSettings);
return (fexpr__86341.cljs$core$IFn$_invoke$arity$1 ? fexpr__86341.cljs$core$IFn$_invoke$arity$1(props) : fexpr__86341.call(null,props));

break;
case "PAGE/color":
var fexpr__86342 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.ColorSettings);
return (fexpr__86342.cljs$core$IFn$_invoke$arity$1 ? fexpr__86342.cljs$core$IFn$_invoke$arity$1(props) : fexpr__86342.call(null,props));

break;
default:
var this$__$1 = this$;
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Bad route"]);

}
}));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$simple_router_2$ident_STAR_(this$,p__86344){
var map__86345 = p__86344;
var map__86345__$1 = (((((!((map__86345 == null))))?(((((map__86345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86345):map__86345);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86345__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86345__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,id], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_2$build_raw_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.simple_router_2.EmailSettings,params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_2$query_STAR_(this$){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("PAGE","email","PAGE/email",1418265523),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.EmailSettings),new cljs.core.Keyword("PAGE","color","PAGE/color",1017744824),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.ColorSettings)], null);
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_2 !== 'undefined') && (typeof book.simple_router_2.SettingsRouter_Union !== 'undefined')){
} else {
book.simple_router_2.SettingsRouter_Union = ((function (options__72617__auto___86496){
return (function book$simple_router_2$SettingsRouter_Union(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86496,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86501)){
var init_state__72620__auto___86502 = temp__5733__auto___86501;
this__72619__auto__.state = (function (){var obj86348 = ({"fulcro$state":(function (){var G__86349 = this__72619__auto__;
var G__86350 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86502.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86502.cljs$core$IFn$_invoke$arity$2(G__86349,G__86350) : init_state__72620__auto___86502.call(null,G__86349,G__86350));
})()});
return obj86348;
})();
} else {
this__72619__auto__.state = (function (){var obj86352 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86352;
})();
}

return null;
});})(options__72617__auto___86496))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_2.SettingsRouter_Union,new cljs.core.Keyword("book.simple-router-2","SettingsRouter-Union","book.simple-router-2/SettingsRouter-Union",1767541161),options__72617__auto___86496);

book.simple_router_2.ui_SettingsRouter_Union = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.SettingsRouter_Union);


var options__72617__auto___86520 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$simple_router_2$ident_STAR_(this$,p__86356){
var map__86357 = p__86356;
var map__86357__$1 = (((((!((map__86357 == null))))?(((((map__86357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86357):map__86357);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86357__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86357__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.routing.routers","by-id","fulcro.client.routing.routers/by-id",-2014319047),new cljs.core.Keyword("settings","router","settings/router",361762279)], null);
}),new cljs.core.Keyword(null,"default-route","default-route",-1491022475),book.simple_router_2.EmailSettings,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_2$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.Keyword("settings","router","settings/router",361762279),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.simple_router_2.SettingsRouter_Union,params)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_2$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.SettingsRouter_Union)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_2$render_SettingsRouter(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86370 = com.fulcrologic.fulcro.components.props(this$);
var map__86370__$1 = (((((!((map__86370 == null))))?(((((map__86370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86370):map__86370);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86370__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86370__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var computed__85340__auto__ = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var props__85341__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.props(this$));
var props_with_computed__85342__auto__ = com.fulcrologic.fulcro.components.computed(props__85341__auto__,computed__85340__auto__);
return (book.simple_router_2.ui_SettingsRouter_Union.cljs$core$IFn$_invoke$arity$1 ? book.simple_router_2.ui_SettingsRouter_Union.cljs$core$IFn$_invoke$arity$1(props_with_computed__85342__auto__) : book.simple_router_2.ui_SettingsRouter_Union.call(null,props_with_computed__85342__auto__));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_2 !== 'undefined') && (typeof book.simple_router_2.SettingsRouter !== 'undefined')){
} else {
book.simple_router_2.SettingsRouter = ((function (options__72617__auto___86520){
return (function book$simple_router_2$SettingsRouter(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86520,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86521)){
var init_state__72620__auto___86525 = temp__5733__auto___86521;
this__72619__auto__.state = (function (){var obj86375 = ({"fulcro$state":(function (){var G__86376 = this__72619__auto__;
var G__86377 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86525.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86525.cljs$core$IFn$_invoke$arity$2(G__86376,G__86377) : init_state__72620__auto___86525.call(null,G__86376,G__86377));
})()});
return obj86375;
})();
} else {
this__72619__auto__.state = (function (){var obj86379 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86379;
})();
}

return null;
});})(options__72617__auto___86520))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_2.SettingsRouter,new cljs.core.Keyword("book.simple-router-2","SettingsRouter","book.simple-router-2/SettingsRouter",-810016107),options__72617__auto___86520);
book.simple_router_2.ui_settings_router = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.SettingsRouter);

var options__72617__auto___86526 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_2$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("router","page","router/page",1799387480),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subpage","subpage",-1614888519),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.SettingsRouter)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$simple_router_2$ident_STAR_(this$,p__86386){
var map__86387 = p__86386;
var map__86387__$1 = (((((!((map__86387 == null))))?(((((map__86387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86387):map__86387);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86387__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86387__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86387__$1,new cljs.core.Keyword(null,"subpage","subpage",-1614888519));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,id], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_2$build_raw_initial_state_STAR_(p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("router","page","router/page",1799387480),new cljs.core.Keyword("PAGE","settings","PAGE/settings",1558920538),new cljs.core.Keyword(null,"subpage","subpage",-1614888519),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.simple_router_2.SettingsRouter,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_2$render_Settings(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86389 = com.fulcrologic.fulcro.components.props(this$);
var map__86389__$1 = (((((!((map__86389 == null))))?(((((map__86389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86389):map__86389);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86389__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86389__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86389__$1,new cljs.core.Keyword(null,"subpage","subpage",-1614888519));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86389,map__86389__$1,page,id,subpage){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","set-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/set-route",-632531214,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"router","router",1091916230),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("settings","router","settings/router",361762279),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"target","target",253001721),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("PAGE","email","PAGE/email",1418265523),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));
});})(map__86389,map__86389__$1,page,id,subpage))
], null),"Email"], null),null)," | ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86389,map__86389__$1,page,id,subpage){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","set-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/set-route",-632531214,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"router","router",1091916230),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("settings","router","settings/router",361762279),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"target","target",253001721),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("PAGE","color","PAGE/color",1017744824),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));
});})(map__86389,map__86389__$1,page,id,subpage))
], null),"Colors"], null),null)),com.fulcrologic.fulcro.components.force_children(console.log(new cljs.core.Keyword(null,"p","p",151049309),com.fulcrologic.fulcro.components.props(this$))),com.fulcrologic.fulcro.components.force_children((book.simple_router_2.ui_settings_router.cljs$core$IFn$_invoke$arity$1 ? book.simple_router_2.ui_settings_router.cljs$core$IFn$_invoke$arity$1(subpage) : book.simple_router_2.ui_settings_router.call(null,subpage)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_2 !== 'undefined') && (typeof book.simple_router_2.Settings !== 'undefined')){
} else {
book.simple_router_2.Settings = ((function (options__72617__auto___86526){
return (function book$simple_router_2$Settings(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86526,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86561)){
var init_state__72620__auto___86562 = temp__5733__auto___86561;
this__72619__auto__.state = (function (){var obj86392 = ({"fulcro$state":(function (){var G__86393 = this__72619__auto__;
var G__86394 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86562.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86562.cljs$core$IFn$_invoke$arity$2(G__86393,G__86394) : init_state__72620__auto___86562.call(null,G__86393,G__86394));
})()});
return obj86392;
})();
} else {
this__72619__auto__.state = (function (){var obj86396 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86396;
})();
}

return null;
});})(options__72617__auto___86526))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_2.Settings,new cljs.core.Keyword("book.simple-router-2","Settings","book.simple-router-2/Settings",-1732139232),options__72617__auto___86526);

var options__72617__auto___86563 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_2$render_RootRouter_Union(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86397 = com.fulcrologic.fulcro.components.props(this$);
var map__86397__$1 = (((((!((map__86397 == null))))?(((((map__86397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86397):map__86397);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86397__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86397__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var props = com.fulcrologic.fulcro.components.props(this$);
var page__85300__auto__ = cljs.core.first(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(this$,props));
var G__86399 = page__85300__auto__;
var G__86399__$1 = (((G__86399 instanceof cljs.core.Keyword))?G__86399.fqn:null);
switch (G__86399__$1) {
case "PAGE/index":
var fexpr__86400 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.Index);
return (fexpr__86400.cljs$core$IFn$_invoke$arity$1 ? fexpr__86400.cljs$core$IFn$_invoke$arity$1(props) : fexpr__86400.call(null,props));

break;
case "PAGE/settings":
var fexpr__86401 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.Settings);
return (fexpr__86401.cljs$core$IFn$_invoke$arity$1 ? fexpr__86401.cljs$core$IFn$_invoke$arity$1(props) : fexpr__86401.call(null,props));

break;
default:
var this$__$1 = this$;
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Bad route"]);

}
}));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$simple_router_2$ident_STAR_(this$,p__86407){
var map__86410 = p__86407;
var map__86410__$1 = (((((!((map__86410 == null))))?(((((map__86410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86410):map__86410);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86410__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86410__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,id], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_2$build_raw_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.simple_router_2.Index,params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_2$query_STAR_(this$){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("PAGE","index","PAGE/index",-1513048426),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.Index),new cljs.core.Keyword("PAGE","settings","PAGE/settings",1558920538),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.Settings)], null);
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_2 !== 'undefined') && (typeof book.simple_router_2.RootRouter_Union !== 'undefined')){
} else {
book.simple_router_2.RootRouter_Union = ((function (options__72617__auto___86563){
return (function book$simple_router_2$RootRouter_Union(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86563,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86579)){
var init_state__72620__auto___86580 = temp__5733__auto___86579;
this__72619__auto__.state = (function (){var obj86414 = ({"fulcro$state":(function (){var G__86415 = this__72619__auto__;
var G__86416 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86580.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86580.cljs$core$IFn$_invoke$arity$2(G__86415,G__86416) : init_state__72620__auto___86580.call(null,G__86415,G__86416));
})()});
return obj86414;
})();
} else {
this__72619__auto__.state = (function (){var obj86418 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86418;
})();
}

return null;
});})(options__72617__auto___86563))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_2.RootRouter_Union,new cljs.core.Keyword("book.simple-router-2","RootRouter-Union","book.simple-router-2/RootRouter-Union",1063457257),options__72617__auto___86563);

book.simple_router_2.ui_RootRouter_Union = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.RootRouter_Union);


var options__72617__auto___86584 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$simple_router_2$ident_STAR_(this$,p__86419){
var map__86420 = p__86419;
var map__86420__$1 = (((((!((map__86420 == null))))?(((((map__86420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86420):map__86420);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86420__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86420__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.routing.routers","by-id","fulcro.client.routing.routers/by-id",-2014319047),new cljs.core.Keyword("root","router","root/router",1086182696)], null);
}),new cljs.core.Keyword(null,"default-route","default-route",-1491022475),book.simple_router_2.Index,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_2$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.Keyword("root","router","root/router",1086182696),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.simple_router_2.RootRouter_Union,params)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_2$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.RootRouter_Union)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_2$render_RootRouter(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86426 = com.fulcrologic.fulcro.components.props(this$);
var map__86426__$1 = (((((!((map__86426 == null))))?(((((map__86426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86426):map__86426);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86426__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86426__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var computed__85340__auto__ = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var props__85341__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.props(this$));
var props_with_computed__85342__auto__ = com.fulcrologic.fulcro.components.computed(props__85341__auto__,computed__85340__auto__);
return (book.simple_router_2.ui_RootRouter_Union.cljs$core$IFn$_invoke$arity$1 ? book.simple_router_2.ui_RootRouter_Union.cljs$core$IFn$_invoke$arity$1(props_with_computed__85342__auto__) : book.simple_router_2.ui_RootRouter_Union.call(null,props_with_computed__85342__auto__));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_2 !== 'undefined') && (typeof book.simple_router_2.RootRouter !== 'undefined')){
} else {
book.simple_router_2.RootRouter = ((function (options__72617__auto___86584){
return (function book$simple_router_2$RootRouter(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86584,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86593)){
var init_state__72620__auto___86594 = temp__5733__auto___86593;
this__72619__auto__.state = (function (){var obj86434 = ({"fulcro$state":(function (){var G__86435 = this__72619__auto__;
var G__86436 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86594.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86594.cljs$core$IFn$_invoke$arity$2(G__86435,G__86436) : init_state__72620__auto___86594.call(null,G__86435,G__86436));
})()});
return obj86434;
})();
} else {
this__72619__auto__.state = (function (){var obj86438 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86438;
})();
}

return null;
});})(options__72617__auto___86584))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_2.RootRouter,new cljs.core.Keyword("book.simple-router-2","RootRouter","book.simple-router-2/RootRouter",-957673072),options__72617__auto___86584);
book.simple_router_2.ui_root_router = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.RootRouter);

var options__72617__auto___86610 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_2$build_raw_initial_state_STAR_(p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.simple_router_2.RootRouter,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_2$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.simple_router_2.RootRouter)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_2$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86444 = com.fulcrologic.fulcro.components.props(this$);
var map__86444__$1 = (((((!((map__86444 == null))))?(((((map__86444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86444):map__86444);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86444__$1,new cljs.core.Keyword(null,"router","router",1091916230));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86444,map__86444__$1,router){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","set-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/set-route",-632531214,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"router","router",1091916230),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("root","router","root/router",1086182696),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"target","target",253001721),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("PAGE","index","PAGE/index",-1513048426),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));
});})(map__86444,map__86444__$1,router))
], null),"Index"], null),null)," | ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86444,map__86444__$1,router){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","set-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/set-route",-632531214,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"router","router",1091916230),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("root","router","root/router",1086182696),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"target","target",253001721),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("PAGE","settings","PAGE/settings",1558920538),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));
});})(map__86444,map__86444__$1,router))
], null),"Settings"], null),null)),com.fulcrologic.fulcro.components.force_children((book.simple_router_2.ui_root_router.cljs$core$IFn$_invoke$arity$1 ? book.simple_router_2.ui_root_router.cljs$core$IFn$_invoke$arity$1(router) : book.simple_router_2.ui_root_router.call(null,router)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_2 !== 'undefined') && (typeof book.simple_router_2.Root !== 'undefined')){
} else {
book.simple_router_2.Root = ((function (options__72617__auto___86610){
return (function book$simple_router_2$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86610,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86619)){
var init_state__72620__auto___86623 = temp__5733__auto___86619;
this__72619__auto__.state = (function (){var obj86461 = ({"fulcro$state":(function (){var G__86463 = this__72619__auto__;
var G__86464 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86623.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86623.cljs$core$IFn$_invoke$arity$2(G__86463,G__86464) : init_state__72620__auto___86623.call(null,G__86463,G__86464));
})()});
return obj86461;
})();
} else {
this__72619__auto__.state = (function (){var obj86467 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86467;
})();
}

return null;
});})(options__72617__auto___86610))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_2.Root,new cljs.core.Keyword("book.simple-router-2","Root","book.simple-router-2/Root",-222980866),options__72617__auto___86610);

//# sourceMappingURL=book.simple_router_2.js.map
