goog.provide('book.simple_router_1');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.routing.legacy_ui_routers');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.mutations');

var options__72617__auto___86304 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("router","page","router/page",1799387480)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$simple_router_1$ident_STAR_(this$,p__86154){
var map__86155 = p__86154;
var map__86155__$1 = (((((!((map__86155 == null))))?(((((map__86155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86155):map__86155);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86155__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86155__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,id], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_1$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("router","page","router/page",1799387480),new cljs.core.Keyword("PAGE","index","PAGE/index",-1513048426)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_1$render_Index(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86163 = com.fulcrologic.fulcro.components.props(this$);
var map__86163__$1 = (((((!((map__86163 == null))))?(((((map__86163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86163):map__86163);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86163__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86163__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Index Page"]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_1 !== 'undefined') && (typeof book.simple_router_1.Index !== 'undefined')){
} else {
book.simple_router_1.Index = ((function (options__72617__auto___86304){
return (function book$simple_router_1$Index(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86304,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86305)){
var init_state__72620__auto___86306 = temp__5733__auto___86305;
this__72619__auto__.state = (function (){var obj86169 = ({"fulcro$state":(function (){var G__86170 = this__72619__auto__;
var G__86171 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86306.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86306.cljs$core$IFn$_invoke$arity$2(G__86170,G__86171) : init_state__72620__auto___86306.call(null,G__86170,G__86171));
})()});
return obj86169;
})();
} else {
this__72619__auto__.state = (function (){var obj86173 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86173;
})();
}

return null;
});})(options__72617__auto___86304))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_1.Index,new cljs.core.Keyword("book.simple-router-1","Index","book.simple-router-1/Index",-675671466),options__72617__auto___86304);

var options__72617__auto___86307 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("router","page","router/page",1799387480)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$simple_router_1$ident_STAR_(this$,p__86197){
var map__86198 = p__86197;
var map__86198__$1 = (((((!((map__86198 == null))))?(((((map__86198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86198):map__86198);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86198__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86198__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,id], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_1$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("router","page","router/page",1799387480),new cljs.core.Keyword("PAGE","settings","PAGE/settings",1558920538)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_1$render_Settings(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86200 = com.fulcrologic.fulcro.components.props(this$);
var map__86200__$1 = (((((!((map__86200 == null))))?(((((map__86200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86200):map__86200);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86200__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86200__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Settings Page"]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_1 !== 'undefined') && (typeof book.simple_router_1.Settings !== 'undefined')){
} else {
book.simple_router_1.Settings = ((function (options__72617__auto___86307){
return (function book$simple_router_1$Settings(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86307,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86308)){
var init_state__72620__auto___86309 = temp__5733__auto___86308;
this__72619__auto__.state = (function (){var obj86203 = ({"fulcro$state":(function (){var G__86204 = this__72619__auto__;
var G__86205 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86309.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86309.cljs$core$IFn$_invoke$arity$2(G__86204,G__86205) : init_state__72620__auto___86309.call(null,G__86204,G__86205));
})()});
return obj86203;
})();
} else {
this__72619__auto__.state = (function (){var obj86207 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86207;
})();
}

return null;
});})(options__72617__auto___86307))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_1.Settings,new cljs.core.Keyword("book.simple-router-1","Settings","book.simple-router-1/Settings",-1732139235),options__72617__auto___86307);

var options__72617__auto___86310 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_1$render_RootRouter_Union(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86208 = com.fulcrologic.fulcro.components.props(this$);
var map__86208__$1 = (((((!((map__86208 == null))))?(((((map__86208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86208):map__86208);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86208__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86208__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var props = com.fulcrologic.fulcro.components.props(this$);
var page__85300__auto__ = cljs.core.first(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(this$,props));
var G__86210 = page__85300__auto__;
var G__86210__$1 = (((G__86210 instanceof cljs.core.Keyword))?G__86210.fqn:null);
switch (G__86210__$1) {
case "PAGE/index":
var fexpr__86211 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.simple_router_1.Index);
return (fexpr__86211.cljs$core$IFn$_invoke$arity$1 ? fexpr__86211.cljs$core$IFn$_invoke$arity$1(props) : fexpr__86211.call(null,props));

break;
case "PAGE/settings":
var fexpr__86213 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.simple_router_1.Settings);
return (fexpr__86213.cljs$core$IFn$_invoke$arity$1 ? fexpr__86213.cljs$core$IFn$_invoke$arity$1(props) : fexpr__86213.call(null,props));

break;
default:
var this$__$1 = this$;
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Bad route"]);

}
}));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$simple_router_1$ident_STAR_(this$,p__86216){
var map__86217 = p__86216;
var map__86217__$1 = (((((!((map__86217 == null))))?(((((map__86217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86217):map__86217);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86217__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86217__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,id], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_1$build_raw_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.simple_router_1.Index,params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_1$query_STAR_(this$){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("PAGE","index","PAGE/index",-1513048426),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.simple_router_1.Index),new cljs.core.Keyword("PAGE","settings","PAGE/settings",1558920538),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.simple_router_1.Settings)], null);
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_1 !== 'undefined') && (typeof book.simple_router_1.RootRouter_Union !== 'undefined')){
} else {
book.simple_router_1.RootRouter_Union = ((function (options__72617__auto___86310){
return (function book$simple_router_1$RootRouter_Union(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86310,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86318)){
var init_state__72620__auto___86320 = temp__5733__auto___86318;
this__72619__auto__.state = (function (){var obj86222 = ({"fulcro$state":(function (){var G__86223 = this__72619__auto__;
var G__86224 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86320.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86320.cljs$core$IFn$_invoke$arity$2(G__86223,G__86224) : init_state__72620__auto___86320.call(null,G__86223,G__86224));
})()});
return obj86222;
})();
} else {
this__72619__auto__.state = (function (){var obj86226 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86226;
})();
}

return null;
});})(options__72617__auto___86310))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_1.RootRouter_Union,new cljs.core.Keyword("book.simple-router-1","RootRouter-Union","book.simple-router-1/RootRouter-Union",1063457258),options__72617__auto___86310);

book.simple_router_1.ui_RootRouter_Union = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.simple_router_1.RootRouter_Union);


var options__72617__auto___86321 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"default-route","default-route",-1491022475),book.simple_router_1.Index,new cljs.core.Keyword(null,"ident","ident",-742346),(function book$simple_router_1$ident_STAR_(this$,p__86233){
var map__86234 = p__86233;
var map__86234__$1 = (((((!((map__86234 == null))))?(((((map__86234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86234):map__86234);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86234__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86234__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.routing.routers","by-id","fulcro.client.routing.routers/by-id",-2014319047),new cljs.core.Keyword("root","router","root/router",1086182696)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_1$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.Keyword("root","router","root/router",1086182696),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.simple_router_1.RootRouter_Union,params)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.simple_router_1.RootRouter_Union)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_1$render_RootRouter(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86253 = com.fulcrologic.fulcro.components.props(this$);
var map__86253__$1 = (((((!((map__86253 == null))))?(((((map__86253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86253):map__86253);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86253__$1,new cljs.core.Keyword("router","page","router/page",1799387480));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86253__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var computed__85340__auto__ = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var props__85341__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.props(this$));
var props_with_computed__85342__auto__ = com.fulcrologic.fulcro.components.computed(props__85341__auto__,computed__85340__auto__);
return (book.simple_router_1.ui_RootRouter_Union.cljs$core$IFn$_invoke$arity$1 ? book.simple_router_1.ui_RootRouter_Union.cljs$core$IFn$_invoke$arity$1(props_with_computed__85342__auto__) : book.simple_router_1.ui_RootRouter_Union.call(null,props_with_computed__85342__auto__));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_1 !== 'undefined') && (typeof book.simple_router_1.RootRouter !== 'undefined')){
} else {
book.simple_router_1.RootRouter = ((function (options__72617__auto___86321){
return (function book$simple_router_1$RootRouter(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86321,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86324)){
var init_state__72620__auto___86325 = temp__5733__auto___86324;
this__72619__auto__.state = (function (){var obj86256 = ({"fulcro$state":(function (){var G__86257 = this__72619__auto__;
var G__86258 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86325.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86325.cljs$core$IFn$_invoke$arity$2(G__86257,G__86258) : init_state__72620__auto___86325.call(null,G__86257,G__86258));
})()});
return obj86256;
})();
} else {
this__72619__auto__.state = (function (){var obj86263 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86263;
})();
}

return null;
});})(options__72617__auto___86321))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_1.RootRouter,new cljs.core.Keyword("book.simple-router-1","RootRouter","book.simple-router-1/RootRouter",-957673073),options__72617__auto___86321);
book.simple_router_1.ui_root_router = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.simple_router_1.RootRouter);

var options__72617__auto___86327 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$simple_router_1$build_raw_initial_state_STAR_(p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.simple_router_1.RootRouter,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$simple_router_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.simple_router_1.RootRouter)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$simple_router_1$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86266 = com.fulcrologic.fulcro.components.props(this$);
var map__86266__$1 = (((((!((map__86266 == null))))?(((((map__86266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86266):map__86266);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86266__$1,new cljs.core.Keyword(null,"router","router",1091916230));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86266,map__86266__$1,router){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","set-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/set-route",-632531214,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"router","router",1091916230),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("root","router","root/router",1086182696),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"target","target",253001721),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("PAGE","index","PAGE/index",-1513048426),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));
});})(map__86266,map__86266__$1,router))
], null),"Index"], null),null)," | ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86266,map__86266__$1,router){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","set-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/set-route",-632531214,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"router","router",1091916230),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("root","router","root/router",1086182696),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"target","target",253001721),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("PAGE","settings","PAGE/settings",1558920538),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));
});})(map__86266,map__86266__$1,router))
], null),"Settings"], null),null)),com.fulcrologic.fulcro.components.force_children((book.simple_router_1.ui_root_router.cljs$core$IFn$_invoke$arity$1 ? book.simple_router_1.ui_root_router.cljs$core$IFn$_invoke$arity$1(router) : book.simple_router_1.ui_root_router.call(null,router)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.simple_router_1 !== 'undefined') && (typeof book.simple_router_1.Root !== 'undefined')){
} else {
book.simple_router_1.Root = ((function (options__72617__auto___86327){
return (function book$simple_router_1$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86327,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86331)){
var init_state__72620__auto___86332 = temp__5733__auto___86331;
this__72619__auto__.state = (function (){var obj86293 = ({"fulcro$state":(function (){var G__86294 = this__72619__auto__;
var G__86295 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86332.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86332.cljs$core$IFn$_invoke$arity$2(G__86294,G__86295) : init_state__72620__auto___86332.call(null,G__86294,G__86295));
})()});
return obj86293;
})();
} else {
this__72619__auto__.state = (function (){var obj86299 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86299;
})();
}

return null;
});})(options__72617__auto___86327))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.simple_router_1.Root,new cljs.core.Keyword("book.simple-router-1","Root","book.simple-router-1/Root",-222980867),options__72617__auto___86327);

//# sourceMappingURL=book.simple_router_1.js.map
