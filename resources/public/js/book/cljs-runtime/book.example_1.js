goog.provide('book.example_1');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
/**
 * 
 */
book.example_1.bump_number = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.example-1","bump-number","book.example-1/bump-number",-36029249,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.example-1","bump-number","book.example-1/bump-number",-36029249,null),(function (fulcro_mutation_env_symbol){
var ignored = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (ignored){
return (function book$example_1$action(p__89839){
var map__89840 = p__89839;
var map__89840__$1 = (((((!((map__89840 == null))))?(((((map__89840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89840):map__89840);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89840__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("ui","number","ui/number",1570384242),cljs.core.inc);

return null;
});})(ignored))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (ignored){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(ignored))
], null);
}));

var options__72617__auto___89864 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$example_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","number","ui/number",1570384242)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$example_1$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","number","ui/number",1570384242),(0)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$example_1$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89847 = com.fulcrologic.fulcro.components.props(this$);
var map__89847__$1 = (((((!((map__89847 == null))))?(((((map__89847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89847):map__89847);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89847__$1,new cljs.core.Keyword("ui","number","ui/number",1570384242));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({}),"This is an example."]),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89847,map__89847__$1,number){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.example-1","bump-number","book.example-1/bump-number",-36029249,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(map__89847,map__89847__$1,number))
], null),"You've clicked this button ",com.fulcrologic.fulcro.components.force_children(number)," times."], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.example_1 !== 'undefined') && (typeof book.example_1.Root !== 'undefined')){
} else {
book.example_1.Root = ((function (options__72617__auto___89864){
return (function book$example_1$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89864,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89876)){
var init_state__72620__auto___89877 = temp__5733__auto___89876;
this__72619__auto__.state = (function (){var obj89859 = ({"fulcro$state":(function (){var G__89860 = this__72619__auto__;
var G__89861 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89877.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89877.cljs$core$IFn$_invoke$arity$2(G__89860,G__89861) : init_state__72620__auto___89877.call(null,G__89860,G__89861));
})()});
return obj89859;
})();
} else {
this__72619__auto__.state = (function (){var obj89863 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89863;
})();
}

return null;
});})(options__72617__auto___89864))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.example_1.Root,new cljs.core.Keyword("book.example-1","Root","book.example-1/Root",674081015),options__72617__auto___89864);

//# sourceMappingURL=book.example_1.js.map
