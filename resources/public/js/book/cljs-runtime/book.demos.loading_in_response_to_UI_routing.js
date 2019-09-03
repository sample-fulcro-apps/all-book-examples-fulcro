goog.provide('book.demos.loading_in_response_to_UI_routing');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.routing.legacy_ui_routers');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.wsscode.pathom.connect');
book.demos.loading_in_response_to_UI_routing.all_settings_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.loading-in-response-to-UI-routing","all-settings-resolver","book.demos.loading-in-response-to-UI-routing/all-settings-resolver",1992246187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-settings","all-settings",1871801766),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null)], null)], null)], null),(function book$demos$loading_in_response_to_UI_routing$all_settings_resolver(env,input){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-settings","all-settings",1871801766),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),"Gorgon"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),"Thraser"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"value","value",305978217),"Under"], null)], null)], null);
}));

var options__72617__auto___89367 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_in_response_to_UI_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$loading_in_response_to_UI_routing$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("setting","by-id","setting/by-id",313639059),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_in_response_to_UI_routing$render_SomeSetting(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89292 = com.fulcrologic.fulcro.components.props(this$);
var map__89292__$1 = (((((!((map__89292 == null))))?(((((map__89292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89292):map__89292);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89292__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89292__$1,new cljs.core.Keyword(null,"value","value",305978217));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Setting ",com.fulcrologic.fulcro.components.force_children(id)," from server has value: ",com.fulcrologic.fulcro.components.force_children(value)]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_in_response_to_UI_routing !== 'undefined') && (typeof book.demos.loading_in_response_to_UI_routing.SomeSetting !== 'undefined')){
} else {
book.demos.loading_in_response_to_UI_routing.SomeSetting = ((function (options__72617__auto___89367){
return (function book$demos$loading_in_response_to_UI_routing$SomeSetting(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89367,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89368)){
var init_state__72620__auto___89369 = temp__5733__auto___89368;
this__72619__auto__.state = (function (){var obj89295 = ({"fulcro$state":(function (){var G__89296 = this__72619__auto__;
var G__89297 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89369.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89369.cljs$core$IFn$_invoke$arity$2(G__89296,G__89297) : init_state__72620__auto___89369.call(null,G__89296,G__89297));
})()});
return obj89295;
})();
} else {
this__72619__auto__.state = (function (){var obj89299 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89299;
})();
}

return null;
});})(options__72617__auto___89367))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_in_response_to_UI_routing.SomeSetting,new cljs.core.Keyword("book.demos.loading-in-response-to-UI-routing","SomeSetting","book.demos.loading-in-response-to-UI-routing/SomeSetting",-408379527),options__72617__auto___89367);
book.demos.loading_in_response_to_UI_routing.ui_setting = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.loading_in_response_to_UI_routing.SomeSetting,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

var options__72617__auto___89376 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$loading_in_response_to_UI_routing$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"settings-content","settings-content",1491910885),"Settings Tab",new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings","settings",1556144875),book.demos.loading_in_response_to_UI_routing.SomeSetting], null),params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_in_response_to_UI_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"settings-content","settings-content",1491910885),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings","settings",1556144875),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_in_response_to_UI_routing.SomeSetting)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_in_response_to_UI_routing$render_SettingsTab(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89300 = com.fulcrologic.fulcro.components.props(this$);
var map__89300__$1 = (((((!((map__89300 == null))))?(((((map__89300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89300):map__89300);
var settings_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89300__$1,new cljs.core.Keyword(null,"settings-content","settings-content",1491910885));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89300__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),com.fulcrologic.fulcro.components.force_children(settings_content),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(settings))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(book.demos.loading_in_response_to_UI_routing.ui_setting,settings):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"No settings."])))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_in_response_to_UI_routing !== 'undefined') && (typeof book.demos.loading_in_response_to_UI_routing.SettingsTab !== 'undefined')){
} else {
book.demos.loading_in_response_to_UI_routing.SettingsTab = ((function (options__72617__auto___89376){
return (function book$demos$loading_in_response_to_UI_routing$SettingsTab(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89376,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89380)){
var init_state__72620__auto___89381 = temp__5733__auto___89380;
this__72619__auto__.state = (function (){var obj89303 = ({"fulcro$state":(function (){var G__89304 = this__72619__auto__;
var G__89305 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89381.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89381.cljs$core$IFn$_invoke$arity$2(G__89304,G__89305) : init_state__72620__auto___89381.call(null,G__89304,G__89305));
})()});
return obj89303;
})();
} else {
this__72619__auto__.state = (function (){var obj89308 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89308;
})();
}

return null;
});})(options__72617__auto___89376))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_in_response_to_UI_routing.SettingsTab,new cljs.core.Keyword("book.demos.loading-in-response-to-UI-routing","SettingsTab","book.demos.loading-in-response-to-UI-routing/SettingsTab",-877501579),options__72617__auto___89376);

var options__72617__auto___89382 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$loading_in_response_to_UI_routing$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"main-content","main-content",1386726798),"Main Tab"], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_in_response_to_UI_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"main-content","main-content",1386726798)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_in_response_to_UI_routing$render_MainTab(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89312 = com.fulcrologic.fulcro.components.props(this$);
var map__89312__$1 = (((((!((map__89312 == null))))?(((((map__89312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89312):map__89312);
var main_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89312__$1,new cljs.core.Keyword(null,"main-content","main-content",1386726798));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),com.fulcrologic.fulcro.components.force_children(main_content)]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_in_response_to_UI_routing !== 'undefined') && (typeof book.demos.loading_in_response_to_UI_routing.MainTab !== 'undefined')){
} else {
book.demos.loading_in_response_to_UI_routing.MainTab = ((function (options__72617__auto___89382){
return (function book$demos$loading_in_response_to_UI_routing$MainTab(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89382,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89385)){
var init_state__72620__auto___89392 = temp__5733__auto___89385;
this__72619__auto__.state = (function (){var obj89315 = ({"fulcro$state":(function (){var G__89316 = this__72619__auto__;
var G__89317 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89392.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89392.cljs$core$IFn$_invoke$arity$2(G__89316,G__89317) : init_state__72620__auto___89392.call(null,G__89316,G__89317));
})()});
return obj89315;
})();
} else {
this__72619__auto__.state = (function (){var obj89319 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89319;
})();
}

return null;
});})(options__72617__auto___89382))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_in_response_to_UI_routing.MainTab,new cljs.core.Keyword("book.demos.loading-in-response-to-UI-routing","MainTab","book.demos.loading-in-response-to-UI-routing/MainTab",1993832635),options__72617__auto___89382);

var options__72617__auto___89393 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_in_response_to_UI_routing$render_UITabs_Union(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
var props__$1 = com.fulcrologic.fulcro.components.props(this$);
var page__85300__auto__ = cljs.core.first(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(this$,props__$1));
var G__89322 = page__85300__auto__;
var G__89322__$1 = (((G__89322 instanceof cljs.core.Keyword))?G__89322.fqn:null);
switch (G__89322__$1) {
case "main":
var fexpr__89323 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.demos.loading_in_response_to_UI_routing.MainTab);
return (fexpr__89323.cljs$core$IFn$_invoke$arity$1 ? fexpr__89323.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__89323.call(null,props__$1));

break;
case "settings":
var fexpr__89324 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.demos.loading_in_response_to_UI_routing.SettingsTab);
return (fexpr__89324.cljs$core$IFn$_invoke$arity$1 ? fexpr__89324.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__89324.call(null,props__$1));

break;
default:
var this$__$1 = this$;
return null;

}
}));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$loading_in_response_to_UI_routing$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"tab","tab",-559583621)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$loading_in_response_to_UI_routing$build_raw_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.loading_in_response_to_UI_routing.MainTab,params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_in_response_to_UI_routing$query_STAR_(this$){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",-2117802661),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_in_response_to_UI_routing.MainTab),new cljs.core.Keyword(null,"settings","settings",1556144875),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_in_response_to_UI_routing.SettingsTab)], null);
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_in_response_to_UI_routing !== 'undefined') && (typeof book.demos.loading_in_response_to_UI_routing.UITabs_Union !== 'undefined')){
} else {
book.demos.loading_in_response_to_UI_routing.UITabs_Union = ((function (options__72617__auto___89393){
return (function book$demos$loading_in_response_to_UI_routing$UITabs_Union(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89393,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89397)){
var init_state__72620__auto___89398 = temp__5733__auto___89397;
this__72619__auto__.state = (function (){var obj89333 = ({"fulcro$state":(function (){var G__89334 = this__72619__auto__;
var G__89335 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89398.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89398.cljs$core$IFn$_invoke$arity$2(G__89334,G__89335) : init_state__72620__auto___89398.call(null,G__89334,G__89335));
})()});
return obj89333;
})();
} else {
this__72619__auto__.state = (function (){var obj89337 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89337;
})();
}

return null;
});})(options__72617__auto___89393))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_in_response_to_UI_routing.UITabs_Union,new cljs.core.Keyword("book.demos.loading-in-response-to-UI-routing","UITabs-Union","book.demos.loading-in-response-to-UI-routing/UITabs-Union",1691370139),options__72617__auto___89393);

book.demos.loading_in_response_to_UI_routing.ui_UITabs_Union = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.demos.loading_in_response_to_UI_routing.UITabs_Union);


var options__72617__auto___89399 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$loading_in_response_to_UI_routing$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.routing.routers","by-id","fulcro.client.routing.routers/by-id",-2014319047),new cljs.core.Keyword(null,"ui-router","ui-router",-903527446)], null);
}),new cljs.core.Keyword(null,"default-route","default-route",-1491022475),book.demos.loading_in_response_to_UI_routing.MainTab,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$loading_in_response_to_UI_routing$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.Keyword(null,"ui-router","ui-router",-903527446),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.loading_in_response_to_UI_routing.UITabs_Union,params)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_in_response_to_UI_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_in_response_to_UI_routing.UITabs_Union)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_in_response_to_UI_routing$render_UITabs(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
var computed__85340__auto__ = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var props__85341__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.props(this$));
var props_with_computed__85342__auto__ = com.fulcrologic.fulcro.components.computed(props__85341__auto__,computed__85340__auto__);
return (book.demos.loading_in_response_to_UI_routing.ui_UITabs_Union.cljs$core$IFn$_invoke$arity$1 ? book.demos.loading_in_response_to_UI_routing.ui_UITabs_Union.cljs$core$IFn$_invoke$arity$1(props_with_computed__85342__auto__) : book.demos.loading_in_response_to_UI_routing.ui_UITabs_Union.call(null,props_with_computed__85342__auto__));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_in_response_to_UI_routing !== 'undefined') && (typeof book.demos.loading_in_response_to_UI_routing.UITabs !== 'undefined')){
} else {
book.demos.loading_in_response_to_UI_routing.UITabs = ((function (options__72617__auto___89399){
return (function book$demos$loading_in_response_to_UI_routing$UITabs(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89399,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89405)){
var init_state__72620__auto___89410 = temp__5733__auto___89405;
this__72619__auto__.state = (function (){var obj89339 = ({"fulcro$state":(function (){var G__89340 = this__72619__auto__;
var G__89341 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89410.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89410.cljs$core$IFn$_invoke$arity$2(G__89340,G__89341) : init_state__72620__auto___89410.call(null,G__89340,G__89341));
})()});
return obj89339;
})();
} else {
this__72619__auto__.state = (function (){var obj89343 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89343;
})();
}

return null;
});})(options__72617__auto___89399))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_in_response_to_UI_routing.UITabs,new cljs.core.Keyword("book.demos.loading-in-response-to-UI-routing","UITabs","book.demos.loading-in-response-to-UI-routing/UITabs",-1502889082),options__72617__auto___89399);
book.demos.loading_in_response_to_UI_routing.ui_tabs = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.demos.loading_in_response_to_UI_routing.UITabs);
/**
 * 
 */
book.demos.loading_in_response_to_UI_routing.choose_tab = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.demos.loading-in-response-to-UI-routing","choose-tab","book.demos.loading-in-response-to-UI-routing/choose-tab",-1397033202,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.demos.loading-in-response-to-UI-routing","choose-tab","book.demos.loading-in-response-to-UI-routing/choose-tab",-1397033202,null),(function (fulcro_mutation_env_symbol){
var map__89347 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__89347__$1 = (((((!((map__89347 == null))))?(((((map__89347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89347):map__89347);
var tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89347__$1,new cljs.core.Keyword(null,"tab","tab",-559583621));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__89347,map__89347__$1,tab){
return (function book$demos$loading_in_response_to_UI_routing$action(p__89351){
var map__89352 = p__89351;
var map__89352__$1 = (((((!((map__89352 == null))))?(((((map__89352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89352):map__89352);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89352__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.routing.legacy_ui_routers.set_route,new cljs.core.Keyword(null,"ui-router","ui-router",-903527446),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab,new cljs.core.Keyword(null,"tab","tab",-559583621)], null));

return null;
});})(map__89347,map__89347__$1,tab))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__89347,map__89347__$1,tab){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__89347,map__89347__$1,tab))
], null);
}));
book.demos.loading_in_response_to_UI_routing.missing_tab_QMARK_ = (function book$demos$loading_in_response_to_UI_routing$missing_tab_QMARK_(state,tab){
var settings = new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
return (((!(cljs.core.vector_QMARK_(settings)))) || (((cljs.core.vector_QMARK_(settings)) && (cljs.core.empty_QMARK_(settings)))));
});
/**
 * 
 */
book.demos.loading_in_response_to_UI_routing.lazy_load_tab = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.demos.loading-in-response-to-UI-routing","lazy-load-tab","book.demos.loading-in-response-to-UI-routing/lazy-load-tab",-1136900598,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.demos.loading-in-response-to-UI-routing","lazy-load-tab","book.demos.loading-in-response-to-UI-routing/lazy-load-tab",-1136900598,null),(function (fulcro_mutation_env_symbol){
var map__89354 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__89354__$1 = (((((!((map__89354 == null))))?(((((map__89354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89354):map__89354);
var tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89354__$1,new cljs.core.Keyword(null,"tab","tab",-559583621));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__89354,map__89354__$1,tab){
return (function book$demos$loading_in_response_to_UI_routing$action(p__89356){
var map__89357 = p__89356;
var map__89357__$1 = (((((!((map__89357 == null))))?(((((map__89357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89357):map__89357);
var env = map__89357__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89357__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89357__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(book.demos.loading_in_response_to_UI_routing.missing_tab_QMARK_(state,tab)){
com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(app,new cljs.core.Keyword(null,"all-settings","all-settings",1871801766),book.demos.loading_in_response_to_UI_routing.SomeSetting,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"settings","settings",1556144875)], null),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null));
} else {
}

return null;
});})(map__89354,map__89354__$1,tab))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__89354,map__89354__$1,tab){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__89354,map__89354__$1,tab))
], null);
}));

var options__72617__auto___89422 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$loading_in_response_to_UI_routing$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.loading_in_response_to_UI_routing.UITabs,null)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_in_response_to_UI_routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_in_response_to_UI_routing.UITabs)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_in_response_to_UI_routing$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89359 = com.fulcrologic.fulcro.components.props(this$);
var map__89359__$1 = (((((!((map__89359 == null))))?(((((map__89359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89359):map__89359);
var props = map__89359__$1;
var current_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89359__$1,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89359,map__89359__$1,props,current_tab){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.demos.loading-in-response-to-UI-routing","choose-tab","book.demos.loading-in-response-to-UI-routing/choose-tab",-1397033202,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"tab","tab",-559583621),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"main","main",-2117802661),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__89359,map__89359__$1,props,current_tab))
], null),"Main"], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89359,map__89359__$1,props,current_tab){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.demos.loading-in-response-to-UI-routing","choose-tab","book.demos.loading-in-response-to-UI-routing/choose-tab",-1397033202,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"tab","tab",-559583621),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"settings","settings",1556144875),null,(1),null)))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.demos.loading-in-response-to-UI-routing","lazy-load-tab","book.demos.loading-in-response-to-UI-routing/lazy-load-tab",-1136900598,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"tab","tab",-559583621),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"settings","settings",1556144875),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__89359,map__89359__$1,props,current_tab))
], null),"Settings"], null),null)),com.fulcrologic.fulcro.components.force_children((book.demos.loading_in_response_to_UI_routing.ui_tabs.cljs$core$IFn$_invoke$arity$1 ? book.demos.loading_in_response_to_UI_routing.ui_tabs.cljs$core$IFn$_invoke$arity$1(current_tab) : book.demos.loading_in_response_to_UI_routing.ui_tabs.call(null,current_tab)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_in_response_to_UI_routing !== 'undefined') && (typeof book.demos.loading_in_response_to_UI_routing.Root !== 'undefined')){
} else {
book.demos.loading_in_response_to_UI_routing.Root = ((function (options__72617__auto___89422){
return (function book$demos$loading_in_response_to_UI_routing$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89422,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89430)){
var init_state__72620__auto___89431 = temp__5733__auto___89430;
this__72619__auto__.state = (function (){var obj89362 = ({"fulcro$state":(function (){var G__89363 = this__72619__auto__;
var G__89364 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89431.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89431.cljs$core$IFn$_invoke$arity$2(G__89363,G__89364) : init_state__72620__auto___89431.call(null,G__89363,G__89364));
})()});
return obj89362;
})();
} else {
this__72619__auto__.state = (function (){var obj89366 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89366;
})();
}

return null;
});})(options__72617__auto___89422))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_in_response_to_UI_routing.Root,new cljs.core.Keyword("book.demos.loading-in-response-to-UI-routing","Root","book.demos.loading-in-response-to-UI-routing/Root",1608625425),options__72617__auto___89422);

//# sourceMappingURL=book.demos.loading_in_response_to_UI_routing.js.map
