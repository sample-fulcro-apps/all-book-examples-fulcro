goog.provide('book.server.network_activity');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.wsscode.pathom.connect');
goog.require('taoensso.timbre');
goog.require('cljs.pprint');
goog.require('com.fulcrologic.fulcro.data_fetch');
book.server.network_activity.silly_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.server.network-activity","silly-resolver","book.server.network-activity/silly-resolver",77876920,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.server.network-activity","data","book.server.network-activity/data",1447317035)], null)], null),(function book$server$network_activity$silly_resolver(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.server.network-activity","data","book.server.network-activity/data",1447317035),(42)], null);
}));

var options__72617__auto___88690 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$server$network_activity$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$server$network_activity$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("book.server.network-activity","activity","book.server.network-activity/activity",-489523899)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$server$network_activity$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$server$network_activity$render_ActivityIndicator(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
var active_remotes = new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005).cljs$core$IFn$_invoke$arity$1(props);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Active Remotes"]),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([active_remotes], 0))], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.server !== 'undefined') && (typeof book.server.network_activity !== 'undefined') && (typeof book.server.network_activity.ActivityIndicator !== 'undefined')){
} else {
book.server.network_activity.ActivityIndicator = ((function (options__72617__auto___88690){
return (function book$server$network_activity$ActivityIndicator(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88690,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88692)){
var init_state__72620__auto___88693 = temp__5733__auto___88692;
this__72619__auto__.state = (function (){var obj88650 = ({"fulcro$state":(function (){var G__88651 = this__72619__auto__;
var G__88652 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88693.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88693.cljs$core$IFn$_invoke$arity$2(G__88651,G__88652) : init_state__72620__auto___88693.call(null,G__88651,G__88652));
})()});
return obj88650;
})();
} else {
this__72619__auto__.state = (function (){var obj88654 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88654;
})();
}

return null;
});})(options__72617__auto___88690))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.server.network_activity.ActivityIndicator,new cljs.core.Keyword("book.server.network-activity","ActivityIndicator","book.server.network-activity/ActivityIndicator",-1387116713),options__72617__auto___88690);
book.server.network_activity.ui_activity_indicator = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.server.network_activity.ActivityIndicator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

var options__72617__auto___88698 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$server$network_activity$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indicator","indicator",1928219637),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.server.network_activity.ActivityIndicator)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$server$network_activity$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indicator","indicator",1928219637),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indicator","indicator",1928219637),book.server.network_activity.ActivityIndicator], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$server$network_activity$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88662 = com.fulcrologic.fulcro.components.props(this$);
var map__88662__$1 = (((((!((map__88662 == null))))?(((((map__88662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88662):map__88662);
var indicator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88662__$1,new cljs.core.Keyword(null,"indicator","indicator",1928219637));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Use the server controls to slow down the network, so you can see the activity"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__88662,map__88662__$1,indicator){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.Keyword("book.server.network-activity","data","book.server.network-activity/data",1447317035),null);
});})(map__88662,map__88662__$1,indicator))
], null),"Trigger a Load"], null),null)),com.fulcrologic.fulcro.components.force_children((book.server.network_activity.ui_activity_indicator.cljs$core$IFn$_invoke$arity$1 ? book.server.network_activity.ui_activity_indicator.cljs$core$IFn$_invoke$arity$1(indicator) : book.server.network_activity.ui_activity_indicator.call(null,indicator)))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.server !== 'undefined') && (typeof book.server.network_activity !== 'undefined') && (typeof book.server.network_activity.Root !== 'undefined')){
} else {
book.server.network_activity.Root = ((function (options__72617__auto___88698){
return (function book$server$network_activity$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88698,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88708)){
var init_state__72620__auto___88709 = temp__5733__auto___88708;
this__72619__auto__.state = (function (){var obj88681 = ({"fulcro$state":(function (){var G__88682 = this__72619__auto__;
var G__88683 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88709.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88709.cljs$core$IFn$_invoke$arity$2(G__88682,G__88683) : init_state__72620__auto___88709.call(null,G__88682,G__88683));
})()});
return obj88681;
})();
} else {
this__72619__auto__.state = (function (){var obj88685 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88685;
})();
}

return null;
});})(options__72617__auto___88698))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.server.network_activity.Root,new cljs.core.Keyword("book.server.network-activity","Root","book.server.network-activity/Root",761124270),options__72617__auto___88698);

//# sourceMappingURL=book.server.network_activity.js.map
