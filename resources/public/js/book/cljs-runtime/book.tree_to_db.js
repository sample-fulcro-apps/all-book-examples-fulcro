goog.provide('book.tree_to_db');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('devcards.util.edn_renderer');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.algorithms.normalize');

var options__72617__auto___87232 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$tree_to_db$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","by-id","sub/by-id",-2129325949),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$tree_to_db$query_STAR_(t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"data","data",-232669377)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$tree_to_db$render_SubQuery(t){
return com.fulcrologic.fulcro.components.wrapped_render(t,(function (){
var p = com.fulcrologic.fulcro.components.props(t);
return null;
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.tree_to_db !== 'undefined') && (typeof book.tree_to_db.SubQuery !== 'undefined')){
} else {
book.tree_to_db.SubQuery = ((function (options__72617__auto___87232){
return (function book$tree_to_db$SubQuery(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___87233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___87232,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___87233)){
var init_state__72620__auto___87234 = temp__5733__auto___87233;
this__72619__auto__.state = (function (){var obj87202 = ({"fulcro$state":(function (){var G__87203 = this__72619__auto__;
var G__87204 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___87234.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___87234.cljs$core$IFn$_invoke$arity$2(G__87203,G__87204) : init_state__72620__auto___87234.call(null,G__87203,G__87204));
})()});
return obj87202;
})();
} else {
this__72619__auto__.state = (function (){var obj87206 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj87206;
})();
}

return null;
});})(options__72617__auto___87232))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.tree_to_db.SubQuery,new cljs.core.Keyword("book.tree-to-db","SubQuery","book.tree-to-db/SubQuery",532155163),options__72617__auto___87232);

var options__72617__auto___87235 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$tree_to_db$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("top","by-id","top/by-id",-2129326704),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$tree_to_db$query_STAR_(t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subs","subs",-186681991),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.tree_to_db.SubQuery)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$tree_to_db$render_TopQuery(t){
return com.fulcrologic.fulcro.components.wrapped_render(t,(function (){
var p = com.fulcrologic.fulcro.components.props(t);
return null;
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.tree_to_db !== 'undefined') && (typeof book.tree_to_db.TopQuery !== 'undefined')){
} else {
book.tree_to_db.TopQuery = ((function (options__72617__auto___87235){
return (function book$tree_to_db$TopQuery(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___87236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___87235,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___87236)){
var init_state__72620__auto___87237 = temp__5733__auto___87236;
this__72619__auto__.state = (function (){var obj87209 = ({"fulcro$state":(function (){var G__87210 = this__72619__auto__;
var G__87211 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___87237.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___87237.cljs$core$IFn$_invoke$arity$2(G__87210,G__87211) : init_state__72620__auto___87237.call(null,G__87210,G__87211));
})()});
return obj87209;
})();
} else {
this__72619__auto__.state = (function (){var obj87214 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj87214;
})();
}

return null;
});})(options__72617__auto___87235))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.tree_to_db.TopQuery,new cljs.core.Keyword("book.tree-to-db","TopQuery","book.tree-to-db/TopQuery",534870495),options__72617__auto___87235);
/**
 * 
 */
book.tree_to_db.normalize_from_to_result = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.tree-to-db","normalize-from-to-result","book.tree-to-db/normalize-from-to-result",-1739316419,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.tree-to-db","normalize-from-to-result","book.tree-to-db/normalize-from-to-result",-1739316419,null),(function (fulcro_mutation_env_symbol){
var ignored_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (ignored_params){
return (function book$tree_to_db$action(p__87216){
var map__87217 = p__87216;
var map__87217__$1 = (((((!((map__87217 == null))))?(((((map__87217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87217):map__87217);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87217__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result_87238 = com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3(book.tree_to_db.TopQuery,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),result_87238);

return null;
});})(ignored_params))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (ignored_params){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(ignored_params))
], null);
}));
/**
 * 
 */
book.tree_to_db.reset = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.tree-to-db","reset","book.tree-to-db/reset",-601286553,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.tree-to-db","reset","book.tree-to-db/reset",-601286553,null),(function (fulcro_mutation_env_symbol){
var ignored_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (ignored_params){
return (function book$tree_to_db$action(p__87219){
var map__87220 = p__87219;
var map__87220__$1 = (((((!((map__87220 == null))))?(((((map__87220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87220):map__87220);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87220__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,new cljs.core.Keyword(null,"result","result",1415092211));

return null;
});})(ignored_params))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (ignored_params){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(ignored_params))
], null);
}));

var options__72617__auto___87239 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$tree_to_db$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"result","result",1415092211)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$tree_to_db$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"top-1","top-1",1797754228),new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sub-1","sub-1",1800530414),new cljs.core.Keyword(null,"data","data",-232669377),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sub-2","sub-2",859083194),new cljs.core.Keyword(null,"data","data",-232669377),(2)], null)], null)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$tree_to_db$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__87223 = com.fulcrologic.fulcro.components.props(this$);
var map__87223__$1 = (((((!((map__87223 == null))))?(((((map__87223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87223):map__87223);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87223__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87223__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({}),"Pretend Incoming Tree"]),com.fulcrologic.fulcro.components.force_children(devcards.util.edn_renderer.html_edn(from))], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({}),"Normalized Result (click below to normalize)"]),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(result)?devcards.util.edn_renderer.html_edn(result):null))], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__87223,map__87223__$1,from,result){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.tree-to-db","normalize-from-to-result","book.tree-to-db/normalize-from-to-result",-1739316419,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(map__87223,map__87223__$1,from,result))
], null),"Normalized (Run tree->db)"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__87223,map__87223__$1,from,result){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.tree-to-db","reset","book.tree-to-db/reset",-601286553,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(map__87223,map__87223__$1,from,result))
], null),"Clear Result"], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.tree_to_db !== 'undefined') && (typeof book.tree_to_db.Root !== 'undefined')){
} else {
book.tree_to_db.Root = ((function (options__72617__auto___87239){
return (function book$tree_to_db$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___87242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___87239,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___87242)){
var init_state__72620__auto___87243 = temp__5733__auto___87242;
this__72619__auto__.state = (function (){var obj87227 = ({"fulcro$state":(function (){var G__87228 = this__72619__auto__;
var G__87229 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___87243.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___87243.cljs$core$IFn$_invoke$arity$2(G__87228,G__87229) : init_state__72620__auto___87243.call(null,G__87228,G__87229));
})()});
return obj87227;
})();
} else {
this__72619__auto__.state = (function (){var obj87231 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj87231;
})();
}

return null;
});})(options__72617__auto___87239))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.tree_to_db.Root,new cljs.core.Keyword("book.tree-to-db","Root","book.tree-to-db/Root",-828476812),options__72617__auto___87239);

//# sourceMappingURL=book.tree_to_db.js.map
