goog.provide('book.ui_routing');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.routing.legacy_ui_routers');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.mutations');

var options__72617__auto___86319 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui_routing$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"label","label",1718410804),"MAIN"], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$ui_routing$ident_STAR_(this$,p__86114){
var map__86115 = p__86114;
var map__86115__$1 = (((((!((map__86115 == null))))?(((((map__86115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86115):map__86115);
var props = map__86115__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86115__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"top","top",-1856271961)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"label","label",1718410804)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui_routing$render_Main(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86117 = com.fulcrologic.fulcro.components.props(this$);
var map__86117__$1 = (((((!((map__86117 == null))))?(((((map__86117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86117):map__86117);
var props = map__86117__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86117__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"backgroundColor": "red"})}),com.fulcrologic.fulcro.components.force_children(label)]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui_routing !== 'undefined') && (typeof book.ui_routing.Main !== 'undefined')){
} else {
book.ui_routing.Main = ((function (options__72617__auto___86319){
return (function book$ui_routing$Main(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86319,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86322)){
var init_state__72620__auto___86323 = temp__5733__auto___86322;
this__72619__auto__.state = (function (){var obj86120 = ({"fulcro$state":(function (){var G__86121 = this__72619__auto__;
var G__86122 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86323.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86323.cljs$core$IFn$_invoke$arity$2(G__86121,G__86122) : init_state__72620__auto___86323.call(null,G__86121,G__86122));
})()});
return obj86120;
})();
} else {
this__72619__auto__.state = (function (){var obj86124 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86124;
})();
}

return null;
});})(options__72617__auto___86319))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui_routing.Main,new cljs.core.Keyword("book.ui-routing","Main","book.ui-routing/Main",-422625805),options__72617__auto___86319);

var options__72617__auto___86326 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui_routing$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"label","label",1718410804),"LOGIN"], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$ui_routing$ident_STAR_(this$,p__86127){
var map__86128 = p__86127;
var map__86128__$1 = (((((!((map__86128 == null))))?(((((map__86128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86128):map__86128);
var props = map__86128__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86128__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"top","top",-1856271961)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"label","label",1718410804)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui_routing$render_Login(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86130 = com.fulcrologic.fulcro.components.props(this$);
var map__86130__$1 = (((((!((map__86130 == null))))?(((((map__86130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86130):map__86130);
var props = map__86130__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86130__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"backgroundColor": "green"})}),com.fulcrologic.fulcro.components.force_children(label)]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui_routing !== 'undefined') && (typeof book.ui_routing.Login !== 'undefined')){
} else {
book.ui_routing.Login = ((function (options__72617__auto___86326){
return (function book$ui_routing$Login(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86326,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86328)){
var init_state__72620__auto___86329 = temp__5733__auto___86328;
this__72619__auto__.state = (function (){var obj86133 = ({"fulcro$state":(function (){var G__86134 = this__72619__auto__;
var G__86135 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86329.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86329.cljs$core$IFn$_invoke$arity$2(G__86134,G__86135) : init_state__72620__auto___86329.call(null,G__86134,G__86135));
})()});
return obj86133;
})();
} else {
this__72619__auto__.state = (function (){var obj86137 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86137;
})();
}

return null;
});})(options__72617__auto___86326))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui_routing.Login,new cljs.core.Keyword("book.ui-routing","Login","book.ui-routing/Login",1516226644),options__72617__auto___86326);

var options__72617__auto___86330 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui_routing$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword(null,"label","label",1718410804),"New User"], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$ui_routing$ident_STAR_(this$,p__86138){
var map__86139 = p__86138;
var map__86139__$1 = (((((!((map__86139 == null))))?(((((map__86139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86139):map__86139);
var props = map__86139__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86139__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"top","top",-1856271961)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"label","label",1718410804)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui_routing$render_NewUser(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86141 = com.fulcrologic.fulcro.components.props(this$);
var map__86141__$1 = (((((!((map__86141 == null))))?(((((map__86141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86141):map__86141);
var props = map__86141__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86141__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"backgroundColor": "skyblue"})}),com.fulcrologic.fulcro.components.force_children(label)]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui_routing !== 'undefined') && (typeof book.ui_routing.NewUser !== 'undefined')){
} else {
book.ui_routing.NewUser = ((function (options__72617__auto___86330){
return (function book$ui_routing$NewUser(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86330,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86333)){
var init_state__72620__auto___86334 = temp__5733__auto___86333;
this__72619__auto__.state = (function (){var obj86144 = ({"fulcro$state":(function (){var G__86145 = this__72619__auto__;
var G__86146 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86334.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86334.cljs$core$IFn$_invoke$arity$2(G__86145,G__86146) : init_state__72620__auto___86334.call(null,G__86145,G__86146));
})()});
return obj86144;
})();
} else {
this__72619__auto__.state = (function (){var obj86148 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86148;
})();
}

return null;
});})(options__72617__auto___86330))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui_routing.NewUser,new cljs.core.Keyword("book.ui-routing","NewUser","book.ui-routing/NewUser",-36605985),options__72617__auto___86330);

var options__72617__auto___86335 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui_routing$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"status-report","status-report",2130654064)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$ui_routing$ident_STAR_(this$,p__86149){
var map__86150 = p__86149;
var map__86150__$1 = (((((!((map__86150 == null))))?(((((map__86150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86150):map__86150);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86150__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86150__$1,new cljs.core.Keyword(null,"page","page",849072397));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,id], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"label","label",1718410804)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui_routing$render_StatusReport(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86152 = com.fulcrologic.fulcro.components.props(this$);
var map__86152__$1 = (((((!((map__86152 == null))))?(((((map__86152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86152):map__86152);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86152__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86152__$1,new cljs.core.Keyword(null,"page","page",849072397));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"backgroundColor": "yellow"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),null))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui_routing !== 'undefined') && (typeof book.ui_routing.StatusReport !== 'undefined')){
} else {
book.ui_routing.StatusReport = ((function (options__72617__auto___86335){
return (function book$ui_routing$StatusReport(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86335,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86338)){
var init_state__72620__auto___86340 = temp__5733__auto___86338;
this__72619__auto__.state = (function (){var obj86158 = ({"fulcro$state":(function (){var G__86159 = this__72619__auto__;
var G__86160 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86340.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86340.cljs$core$IFn$_invoke$arity$2(G__86159,G__86160) : init_state__72620__auto___86340.call(null,G__86159,G__86160));
})()});
return obj86158;
})();
} else {
this__72619__auto__.state = (function (){var obj86162 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86162;
})();
}

return null;
});})(options__72617__auto___86335))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui_routing.StatusReport,new cljs.core.Keyword("book.ui-routing","StatusReport","book.ui-routing/StatusReport",-455224304),options__72617__auto___86335);

var options__72617__auto___86343 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui_routing$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"graphing-report","graphing-report",-1096982141)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$ui_routing$ident_STAR_(this$,p__86165){
var map__86166 = p__86165;
var map__86166__$1 = (((((!((map__86166 == null))))?(((((map__86166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86166):map__86166);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86166__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86166__$1,new cljs.core.Keyword(null,"page","page",849072397));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,id], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"label","label",1718410804)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui_routing$render_GraphingReport(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86174 = com.fulcrologic.fulcro.components.props(this$);
var map__86174__$1 = (((((!((map__86174 == null))))?(((((map__86174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86174):map__86174);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86174__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86174__$1,new cljs.core.Keyword(null,"page","page",849072397));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"backgroundColor": "orange"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Graph ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),null))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui_routing !== 'undefined') && (typeof book.ui_routing.GraphingReport !== 'undefined')){
} else {
book.ui_routing.GraphingReport = ((function (options__72617__auto___86343){
return (function book$ui_routing$GraphingReport(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86343,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86353)){
var init_state__72620__auto___86354 = temp__5733__auto___86353;
this__72619__auto__.state = (function (){var obj86177 = ({"fulcro$state":(function (){var G__86178 = this__72619__auto__;
var G__86179 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86354.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86354.cljs$core$IFn$_invoke$arity$2(G__86178,G__86179) : init_state__72620__auto___86354.call(null,G__86178,G__86179));
})()});
return obj86177;
})();
} else {
this__72619__auto__.state = (function (){var obj86181 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86181;
})();
}

return null;
});})(options__72617__auto___86343))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui_routing.GraphingReport,new cljs.core.Keyword("book.ui-routing","GraphingReport","book.ui-routing/GraphingReport",-1977710686),options__72617__auto___86343);

var options__72617__auto___86355 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui_routing$render_ReportRouter_Union(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
var props__$1 = com.fulcrologic.fulcro.components.props(this$);
var page__85300__auto__ = cljs.core.first(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(this$,props__$1));
var G__86182 = page__85300__auto__;
var G__86182__$1 = (((G__86182 instanceof cljs.core.Keyword))?G__86182.fqn:null);
switch (G__86182__$1) {
case "status-report":
var fexpr__86183 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui_routing.StatusReport);
return (fexpr__86183.cljs$core$IFn$_invoke$arity$1 ? fexpr__86183.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__86183.call(null,props__$1));

break;
case "graphing-report":
var fexpr__86184 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui_routing.GraphingReport);
return (fexpr__86184.cljs$core$IFn$_invoke$arity$1 ? fexpr__86184.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__86184.call(null,props__$1));

break;
default:
var this$__$1 = this$;
return null;

}
}));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$ui_routing$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui_routing$build_raw_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.ui_routing.StatusReport,params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui_routing$query_STAR_(this$){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-report","status-report",2130654064),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.ui_routing.StatusReport),new cljs.core.Keyword(null,"graphing-report","graphing-report",-1096982141),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.ui_routing.GraphingReport)], null);
})], null);
if((typeof book !== 'undefined') && (typeof book.ui_routing !== 'undefined') && (typeof book.ui_routing.ReportRouter_Union !== 'undefined')){
} else {
book.ui_routing.ReportRouter_Union = ((function (options__72617__auto___86355){
return (function book$ui_routing$ReportRouter_Union(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86355,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86360)){
var init_state__72620__auto___86361 = temp__5733__auto___86360;
this__72619__auto__.state = (function (){var obj86186 = ({"fulcro$state":(function (){var G__86187 = this__72619__auto__;
var G__86188 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86361.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86361.cljs$core$IFn$_invoke$arity$2(G__86187,G__86188) : init_state__72620__auto___86361.call(null,G__86187,G__86188));
})()});
return obj86186;
})();
} else {
this__72619__auto__.state = (function (){var obj86190 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86190;
})();
}

return null;
});})(options__72617__auto___86355))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui_routing.ReportRouter_Union,new cljs.core.Keyword("book.ui-routing","ReportRouter-Union","book.ui-routing/ReportRouter-Union",2144500528),options__72617__auto___86355);

book.ui_routing.ui_ReportRouter_Union = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui_routing.ReportRouter_Union);


var options__72617__auto___86362 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$ui_routing$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.routing.routers","by-id","fulcro.client.routing.routers/by-id",-2014319047),new cljs.core.Keyword(null,"report-router","report-router",-2067451813)], null);
}),new cljs.core.Keyword(null,"default-route","default-route",-1491022475),book.ui_routing.StatusReport,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui_routing$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.Keyword(null,"report-router","report-router",-2067451813),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.ui_routing.ReportRouter_Union,params)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.ui_routing.ReportRouter_Union)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui_routing$render_ReportRouter(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
var computed__85340__auto__ = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var props__85341__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.props(this$));
var props_with_computed__85342__auto__ = com.fulcrologic.fulcro.components.computed(props__85341__auto__,computed__85340__auto__);
return (book.ui_routing.ui_ReportRouter_Union.cljs$core$IFn$_invoke$arity$1 ? book.ui_routing.ui_ReportRouter_Union.cljs$core$IFn$_invoke$arity$1(props_with_computed__85342__auto__) : book.ui_routing.ui_ReportRouter_Union.call(null,props_with_computed__85342__auto__));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui_routing !== 'undefined') && (typeof book.ui_routing.ReportRouter !== 'undefined')){
} else {
book.ui_routing.ReportRouter = ((function (options__72617__auto___86362){
return (function book$ui_routing$ReportRouter(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86362,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86363)){
var init_state__72620__auto___86364 = temp__5733__auto___86363;
this__72619__auto__.state = (function (){var obj86192 = ({"fulcro$state":(function (){var G__86193 = this__72619__auto__;
var G__86194 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86364.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86364.cljs$core$IFn$_invoke$arity$2(G__86193,G__86194) : init_state__72620__auto___86364.call(null,G__86193,G__86194));
})()});
return obj86192;
})();
} else {
this__72619__auto__.state = (function (){var obj86196 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86196;
})();
}

return null;
});})(options__72617__auto___86362))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui_routing.ReportRouter,new cljs.core.Keyword("book.ui-routing","ReportRouter","book.ui-routing/ReportRouter",-1577151104),options__72617__auto___86362);
book.ui_routing.ui_report_router = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui_routing.ReportRouter);

var options__72617__auto___86365 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui_routing$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"report-router","report-router",-2067451813),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.ui_routing.ReportRouter,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$ui_routing$ident_STAR_(this$,p__86212){
var map__86214 = p__86212;
var map__86214__$1 = (((((!((map__86214 == null))))?(((((map__86214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86214):map__86214);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86214__$1,new cljs.core.Keyword(null,"page","page",849072397));
var report_router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86214__$1,new cljs.core.Keyword(null,"report-router","report-router",-2067451813));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,new cljs.core.Keyword(null,"top","top",-1856271961)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"report-router","report-router",-2067451813),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.ui_routing.ReportRouter)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui_routing$render_ReportsMain(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86219 = com.fulcrologic.fulcro.components.props(this$);
var map__86219__$1 = (((((!((map__86219 == null))))?(((((map__86219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86219):map__86219);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86219__$1,new cljs.core.Keyword(null,"page","page",849072397));
var report_router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86219__$1,new cljs.core.Keyword(null,"report-router","report-router",-2067451813));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"backgroundColor": "grey"})}),"REPORT MAIN SCREEN",com.fulcrologic.fulcro.components.force_children((book.ui_routing.ui_report_router.cljs$core$IFn$_invoke$arity$1 ? book.ui_routing.ui_report_router.cljs$core$IFn$_invoke$arity$1(report_router) : book.ui_routing.ui_report_router.call(null,report_router)))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui_routing !== 'undefined') && (typeof book.ui_routing.ReportsMain !== 'undefined')){
} else {
book.ui_routing.ReportsMain = ((function (options__72617__auto___86365){
return (function book$ui_routing$ReportsMain(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86365,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86366)){
var init_state__72620__auto___86367 = temp__5733__auto___86366;
this__72619__auto__.state = (function (){var obj86228 = ({"fulcro$state":(function (){var G__86229 = this__72619__auto__;
var G__86230 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86367.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86367.cljs$core$IFn$_invoke$arity$2(G__86229,G__86230) : init_state__72620__auto___86367.call(null,G__86229,G__86230));
})()});
return obj86228;
})();
} else {
this__72619__auto__.state = (function (){var obj86232 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86232;
})();
}

return null;
});})(options__72617__auto___86365))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui_routing.ReportsMain,new cljs.core.Keyword("book.ui-routing","ReportsMain","book.ui-routing/ReportsMain",-1831256330),options__72617__auto___86365);

var options__72617__auto___86368 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui_routing$render_TopRouter_Union(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
var props__$1 = com.fulcrologic.fulcro.components.props(this$);
var page__85300__auto__ = cljs.core.first(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(this$,props__$1));
var G__86235 = page__85300__auto__;
var G__86235__$1 = (((G__86235 instanceof cljs.core.Keyword))?G__86235.fqn:null);
switch (G__86235__$1) {
case "main":
var fexpr__86237 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui_routing.Main);
return (fexpr__86237.cljs$core$IFn$_invoke$arity$1 ? fexpr__86237.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__86237.call(null,props__$1));

break;
case "login":
var fexpr__86238 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui_routing.Login);
return (fexpr__86238.cljs$core$IFn$_invoke$arity$1 ? fexpr__86238.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__86238.call(null,props__$1));

break;
case "new-user":
var fexpr__86239 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui_routing.NewUser);
return (fexpr__86239.cljs$core$IFn$_invoke$arity$1 ? fexpr__86239.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__86239.call(null,props__$1));

break;
case "report":
var fexpr__86240 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui_routing.ReportsMain);
return (fexpr__86240.cljs$core$IFn$_invoke$arity$1 ? fexpr__86240.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__86240.call(null,props__$1));

break;
default:
var this$__$1 = this$;
return null;

}
}));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$ui_routing$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"top","top",-1856271961)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui_routing$build_raw_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.ui_routing.Main,params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui_routing$query_STAR_(this$){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"main","main",-2117802661),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.ui_routing.Main),new cljs.core.Keyword(null,"login","login",55217519),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.ui_routing.Login),new cljs.core.Keyword(null,"new-user","new-user",1575436062),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.ui_routing.NewUser),new cljs.core.Keyword(null,"report","report",1394055010),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.ui_routing.ReportsMain)], null);
})], null);
if((typeof book !== 'undefined') && (typeof book.ui_routing !== 'undefined') && (typeof book.ui_routing.TopRouter_Union !== 'undefined')){
} else {
book.ui_routing.TopRouter_Union = ((function (options__72617__auto___86368){
return (function book$ui_routing$TopRouter_Union(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86368,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86380)){
var init_state__72620__auto___86381 = temp__5733__auto___86380;
this__72619__auto__.state = (function (){var obj86242 = ({"fulcro$state":(function (){var G__86243 = this__72619__auto__;
var G__86244 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86381.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86381.cljs$core$IFn$_invoke$arity$2(G__86243,G__86244) : init_state__72620__auto___86381.call(null,G__86243,G__86244));
})()});
return obj86242;
})();
} else {
this__72619__auto__.state = (function (){var obj86246 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86246;
})();
}

return null;
});})(options__72617__auto___86368))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui_routing.TopRouter_Union,new cljs.core.Keyword("book.ui-routing","TopRouter-Union","book.ui-routing/TopRouter-Union",1711935788),options__72617__auto___86368);

book.ui_routing.ui_TopRouter_Union = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui_routing.TopRouter_Union);


var options__72617__auto___86382 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"default-route","default-route",-1491022475),book.ui_routing.Main,new cljs.core.Keyword(null,"ident","ident",-742346),(function book$ui_routing$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.routing.routers","by-id","fulcro.client.routing.routers/by-id",-2014319047),new cljs.core.Keyword(null,"top-router","top-router",1966843717)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui_routing$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.ui_routing.TopRouter_Union,params)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.ui_routing.TopRouter_Union)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui_routing$render_TopRouter(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
var computed__85340__auto__ = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var props__85341__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.props(this$));
var props_with_computed__85342__auto__ = com.fulcrologic.fulcro.components.computed(props__85341__auto__,computed__85340__auto__);
return (book.ui_routing.ui_TopRouter_Union.cljs$core$IFn$_invoke$arity$1 ? book.ui_routing.ui_TopRouter_Union.cljs$core$IFn$_invoke$arity$1(props_with_computed__85342__auto__) : book.ui_routing.ui_TopRouter_Union.call(null,props_with_computed__85342__auto__));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui_routing !== 'undefined') && (typeof book.ui_routing.TopRouter !== 'undefined')){
} else {
book.ui_routing.TopRouter = ((function (options__72617__auto___86382){
return (function book$ui_routing$TopRouter(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86382,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86383)){
var init_state__72620__auto___86384 = temp__5733__auto___86383;
this__72619__auto__.state = (function (){var obj86248 = ({"fulcro$state":(function (){var G__86249 = this__72619__auto__;
var G__86250 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86384.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86384.cljs$core$IFn$_invoke$arity$2(G__86249,G__86250) : init_state__72620__auto___86384.call(null,G__86249,G__86250));
})()});
return obj86248;
})();
} else {
this__72619__auto__.state = (function (){var obj86252 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86252;
})();
}

return null;
});})(options__72617__auto___86382))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui_routing.TopRouter,new cljs.core.Keyword("book.ui-routing","TopRouter","book.ui-routing/TopRouter",-504594113),options__72617__auto___86382);
book.ui_routing.ui_top = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui_routing.TopRouter);
/**
 * A map of route handling instructions. The top key is the handler name of the route which can be
 *   thought of as the terminal leaf in the UI graph of the screen that should be "foremost".
 * 
 *   The value is a vector of routing-instructions to tell the UI routers which ident
 *   of the route that should be made visible.
 * 
 *   A value in this ident using the `param` namespace will be replaced with the incoming route parameter
 *   (without the namespace). E.g. the incoming route-param :report-id will replace :param/report-id
 */
book.ui_routing.routing_tree = com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.routing.legacy_ui_routers.make_route(new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.router_instruction(new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"top","top",-1856271961)], null))], null)),com.fulcrologic.fulcro.routing.legacy_ui_routers.make_route(new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.router_instruction(new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"top","top",-1856271961)], null))], null)),com.fulcrologic.fulcro.routing.legacy_ui_routers.make_route(new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.router_instruction(new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword(null,"top","top",-1856271961)], null))], null)),com.fulcrologic.fulcro.routing.legacy_ui_routers.make_route(new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.router_instruction(new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"top","top",-1856271961)], null)),com.fulcrologic.fulcro.routing.legacy_ui_routers.router_instruction(new cljs.core.Keyword(null,"report-router","report-router",-2067451813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphing-report","graphing-report",-1096982141),new cljs.core.Keyword("param","report-id","param/report-id",-1261707624)], null))], null)),com.fulcrologic.fulcro.routing.legacy_ui_routers.make_route(new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.router_instruction(new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"top","top",-1856271961)], null)),com.fulcrologic.fulcro.routing.legacy_ui_routers.router_instruction(new cljs.core.Keyword(null,"report-router","report-router",-2067451813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status-report","status-report",2130654064),new cljs.core.Keyword("param","report-id","param/report-id",-1261707624)], null))], null))], 0));

var options__72617__auto___86385 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui_routing$build_raw_initial_state_STAR_(params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([book.ui_routing.routing_tree,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-router","top-router",1966843717),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.ui_routing.TopRouter,cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-router","top-router",1966843717),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.ui_routing.TopRouter)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui_routing$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86279 = com.fulcrologic.fulcro.components.props(this$);
var map__86279__$1 = (((((!((map__86279 == null))))?(((((map__86279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86279):map__86279);
var top_router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86279__$1,new cljs.core.Keyword(null,"top-router","top-router",1966843717));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86279,map__86279__$1,top_router){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","route-to","com.fulcrologic.fulcro.routing.legacy-ui-routers/route-to",-1157637021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"handler","handler",-195596612),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"main","main",-2117802661),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__86279,map__86279__$1,top_router))
], null),"Main"], null),null)," | ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86279,map__86279__$1,top_router){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","route-to","com.fulcrologic.fulcro.routing.legacy-ui-routers/route-to",-1157637021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"handler","handler",-195596612),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"new-user","new-user",1575436062),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__86279,map__86279__$1,top_router))
], null),"New User"], null),null))," | ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86279,map__86279__$1,top_router){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","route-to","com.fulcrologic.fulcro.routing.legacy-ui-routers/route-to",-1157637021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"handler","handler",-195596612),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"login","login",55217519),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__86279,map__86279__$1,top_router))
], null),"Login"], null),null))," | ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86279,map__86279__$1,top_router){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","route-to","com.fulcrologic.fulcro.routing.legacy-ui-routers/route-to",-1157637021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"handler","handler",-195596612),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"status","status",-1997798413),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"route-params","route-params",2111411055),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"report-id","report-id",-1154230813),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"a","a",-2123407586),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));
});})(map__86279,map__86279__$1,top_router))
], null),"Status A"], null),null))," | ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86279,map__86279__$1,top_router){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","route-to","com.fulcrologic.fulcro.routing.legacy-ui-routers/route-to",-1157637021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"handler","handler",-195596612),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"graph","graph",1558099509),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"route-params","route-params",2111411055),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"report-id","report-id",-1154230813),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"a","a",-2123407586),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));
});})(map__86279,map__86279__$1,top_router))
], null),"Graph A"], null),null)),com.fulcrologic.fulcro.components.force_children((book.ui_routing.ui_top.cljs$core$IFn$_invoke$arity$1 ? book.ui_routing.ui_top.cljs$core$IFn$_invoke$arity$1(top_router) : book.ui_routing.ui_top.call(null,top_router)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui_routing !== 'undefined') && (typeof book.ui_routing.Root !== 'undefined')){
} else {
book.ui_routing.Root = ((function (options__72617__auto___86385){
return (function book$ui_routing$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86385,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86446)){
var init_state__72620__auto___86447 = temp__5733__auto___86446;
this__72619__auto__.state = (function (){var obj86313 = ({"fulcro$state":(function (){var G__86314 = this__72619__auto__;
var G__86315 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86447.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86447.cljs$core$IFn$_invoke$arity$2(G__86314,G__86315) : init_state__72620__auto___86447.call(null,G__86314,G__86315));
})()});
return obj86313;
})();
} else {
this__72619__auto__.state = (function (){var obj86317 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86317;
})();
}

return null;
});})(options__72617__auto___86385))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui_routing.Root,new cljs.core.Keyword("book.ui-routing","Root","book.ui-routing/Root",-1180949040),options__72617__auto___86385);

//# sourceMappingURL=book.ui_routing.js.map
