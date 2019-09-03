goog.provide('book.demos.parallel_vs_sequential_loading');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.wsscode.pathom.connect');
goog.require('taoensso.timbre');
book.demos.parallel_vs_sequential_loading.long_query_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.parallel-vs-sequential-loading","long-query-resolver","book.demos.parallel-vs-sequential-loading/long-query-resolver",1678193721,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","long-query","background/long-query",-683707907)], null)], null),(function book$demos$parallel_vs_sequential_loading$long_query_resolver(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("background","long-query","background/long-query",-683707907),(42)], null);
}));

var options__72617__auto___89501 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$parallel_vs_sequential_loading$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("background","long-query","background/long-query",-683707907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$parallel_vs_sequential_loading$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background.child","by-id","background.child/by-id",-1563901465),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$parallel_vs_sequential_loading$render_Child(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89466 = com.fulcrologic.fulcro.components.props(this$);
var map__89466__$1 = (((((!((map__89466 == null))))?(((((map__89466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89466):map__89466);
var props = map__89466__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89466__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var long_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89466__$1,new cljs.core.Keyword("background","long-query","background/long-query",-683707907));
var status = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetching","fetching",-1664990285),id], null)], null));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "inline", "float": "left", "width": "200px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (status,map__89466,map__89466__$1,props,id,name,long_query){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_field_BANG_(this$,new cljs.core.Keyword("background","long-query","background/long-query",-683707907),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parallel","parallel",-1863607128),true,new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetching","fetching",-1664990285),id], null)], null));
});})(status,map__89466,map__89466__$1,props,id,name,long_query))
], null),"Load stuff parallel"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (status,map__89466,map__89466__$1,props,id,name,long_query){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_field_BANG_(this$,new cljs.core.Keyword("background","long-query","background/long-query",-683707907),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetching","fetching",-1664990285),id], null)], null));
});})(status,map__89466,map__89466__$1,props,id,name,long_query))
], null),"Load stuff sequential"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,com.fulcrologic.fulcro.components.force_children(((com.fulcrologic.fulcro.data_fetch.loading_QMARK_(status))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({}),"Loading..."]):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [long_query], null),null)))], null),null))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.parallel_vs_sequential_loading !== 'undefined') && (typeof book.demos.parallel_vs_sequential_loading.Child !== 'undefined')){
} else {
book.demos.parallel_vs_sequential_loading.Child = ((function (options__72617__auto___89501){
return (function book$demos$parallel_vs_sequential_loading$Child(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89501,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89502)){
var init_state__72620__auto___89503 = temp__5733__auto___89502;
this__72619__auto__.state = (function (){var obj89469 = ({"fulcro$state":(function (){var G__89470 = this__72619__auto__;
var G__89471 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89503.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89503.cljs$core$IFn$_invoke$arity$2(G__89470,G__89471) : init_state__72620__auto___89503.call(null,G__89470,G__89471));
})()});
return obj89469;
})();
} else {
this__72619__auto__.state = (function (){var obj89473 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89473;
})();
}

return null;
});})(options__72617__auto___89501))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.parallel_vs_sequential_loading.Child,new cljs.core.Keyword("book.demos.parallel-vs-sequential-loading","Child","book.demos.parallel-vs-sequential-loading/Child",-238864302),options__72617__auto___89501);
book.demos.parallel_vs_sequential_loading.ui_child = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.parallel_vs_sequential_loading.Child,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

var options__72617__auto___89504 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$parallel_vs_sequential_loading$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"A"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"B"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"C"], null)], null)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$parallel_vs_sequential_loading$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.parallel_vs_sequential_loading.Child)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$parallel_vs_sequential_loading$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89474 = com.fulcrologic.fulcro.components.props(this$);
var map__89474__$1 = (((((!((map__89474 == null))))?(((((map__89474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89474):map__89474);
var props = map__89474__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89474__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(book.demos.parallel_vs_sequential_loading.ui_child,children),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["br",({"style": ({"clear": "both"})})])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["br",({})]))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.parallel_vs_sequential_loading !== 'undefined') && (typeof book.demos.parallel_vs_sequential_loading.Root !== 'undefined')){
} else {
book.demos.parallel_vs_sequential_loading.Root = ((function (options__72617__auto___89504){
return (function book$demos$parallel_vs_sequential_loading$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89504,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89505)){
var init_state__72620__auto___89506 = temp__5733__auto___89505;
this__72619__auto__.state = (function (){var obj89477 = ({"fulcro$state":(function (){var G__89478 = this__72619__auto__;
var G__89479 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89506.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89506.cljs$core$IFn$_invoke$arity$2(G__89478,G__89479) : init_state__72620__auto___89506.call(null,G__89478,G__89479));
})()});
return obj89477;
})();
} else {
this__72619__auto__.state = (function (){var obj89481 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89481;
})();
}

return null;
});})(options__72617__auto___89504))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.parallel_vs_sequential_loading.Root,new cljs.core.Keyword("book.demos.parallel-vs-sequential-loading","Root","book.demos.parallel-vs-sequential-loading/Root",-972799611),options__72617__auto___89504);

//# sourceMappingURL=book.demos.parallel_vs_sequential_loading.js.map
