goog.provide('book.demos.pre_merge.post_mutation_countdown_many');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('book.demos.util');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.wsscode.pathom.connect');
book.demos.pre_merge.post_mutation_countdown_many.all_counters = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-id","book.demos.pre-merge.post-mutation-countdown-many/counter-id",2094649611),(1),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-label","book.demos.pre-merge.post-mutation-countdown-many/counter-label",1260838068),"A"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-id","book.demos.pre-merge.post-mutation-countdown-many/counter-id",2094649611),(2),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-label","book.demos.pre-merge.post-mutation-countdown-many/counter-label",1260838068),"B"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-id","book.demos.pre-merge.post-mutation-countdown-many/counter-id",2094649611),(3),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-label","book.demos.pre-merge.post-mutation-countdown-many/counter-label",1260838068),"C"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-id","book.demos.pre-merge.post-mutation-countdown-many/counter-id",2094649611),(4),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-label","book.demos.pre-merge.post-mutation-countdown-many/counter-label",1260838068),"D"], null)], null);
book.demos.pre_merge.post_mutation_countdown_many.counter_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.pre-merge.post-mutation-countdown-many","counter-resolver","book.demos.pre-merge.post-mutation-countdown-many/counter-resolver",-1303760410,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","all-counters","book.demos.pre-merge.post-mutation-countdown-many/all-counters",-1204083375),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-id","book.demos.pre-merge.post-mutation-countdown-many/counter-id",2094649611),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-label","book.demos.pre-merge.post-mutation-countdown-many/counter-label",1260838068)], null)], null)], null)], null),(function book$demos$pre_merge$post_mutation_countdown_many$counter_resolver(env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","all-counters","book.demos.pre-merge.post-mutation-countdown-many/all-counters",-1204083375),book.demos.pre_merge.post_mutation_countdown_many.all_counters], null);
}));
book.demos.pre_merge.post_mutation_countdown_many.resolvers = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.demos.pre_merge.post_mutation_countdown_many.counter_resolver], null);
/**
 * 
 */
book.demos.pre_merge.post_mutation_countdown_many.initialize_counters = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.demos.pre-merge.post-mutation-countdown-many","initialize-counters","book.demos.pre-merge.post-mutation-countdown-many/initialize-counters",-1476345924,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.demos.pre-merge.post-mutation-countdown-many","initialize-counters","book.demos.pre-merge.post-mutation-countdown-many/initialize-counters",-1476345924,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (_){
return (function book$demos$pre_merge$post_mutation_countdown_many$action(p__89600){
var map__89601 = p__89600;
var map__89601__$1 = (((((!((map__89601 == null))))?(((((map__89601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89601):map__89601);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89601__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__89601,map__89601__$1,state,_){
return (function (state__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__89601,map__89601__$1,state,_){
return (function (state__$2,ref){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$2,ref,((function (map__89601,map__89601__$1,state,_){
return (function (p1__89599_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","count","ui/count",2139919329),(5)], null),p1__89599_SHARP_], 0));
});})(map__89601,map__89601__$1,state,_))
);
});})(map__89601,map__89601__$1,state,_))
,state__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","all-counters","book.demos.pre-merge.post-mutation-countdown-many/all-counters",-1204083375)));
});})(map__89601,map__89601__$1,state,_))
);

return null;
});})(_))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (_){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(_))
], null);
}));

var options__72617__auto___89638 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$pre_merge$post_mutation_countdown_many$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-id","book.demos.pre-merge.post-mutation-countdown-many/counter-id",2094649611),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-id","book.demos.pre-merge.post-mutation-countdown-many/counter-id",2094649611).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$post_mutation_countdown_many$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-id","book.demos.pre-merge.post-mutation-countdown-many/counter-id",2094649611),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-label","book.demos.pre-merge.post-mutation-countdown-many/counter-label",1260838068),new cljs.core.Keyword("ui","count","ui/count",2139919329)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$post_mutation_countdown_many$render_Countdown(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89603 = com.fulcrologic.fulcro.components.props(this$);
var map__89603__$1 = (((((!((map__89603 == null))))?(((((map__89603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89603):map__89603);
var counter_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89603__$1,new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-label","book.demos.pre-merge.post-mutation-countdown-many/counter-label",1260838068));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89603__$1,new cljs.core.Keyword("ui","count","ui/count",2139919329));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter_label], null),null),com.fulcrologic.fulcro.components.force_children((function (){var done_QMARK_ = (count === (0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),done_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (done_QMARK_,map__89603,map__89603__$1,counter_label,count){
return (function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","count","ui/count",2139919329),(count - (1)));
});})(done_QMARK_,map__89603,map__89603__$1,counter_label,count))
], null),com.fulcrologic.fulcro.components.force_children(((done_QMARK_)?"Done!":cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)))], null),null);
})())], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.post_mutation_countdown_many !== 'undefined') && (typeof book.demos.pre_merge.post_mutation_countdown_many.Countdown !== 'undefined')){
} else {
book.demos.pre_merge.post_mutation_countdown_many.Countdown = ((function (options__72617__auto___89638){
return (function book$demos$pre_merge$post_mutation_countdown_many$Countdown(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89638,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89639)){
var init_state__72620__auto___89640 = temp__5733__auto___89639;
this__72619__auto__.state = (function (){var obj89606 = ({"fulcro$state":(function (){var G__89607 = this__72619__auto__;
var G__89608 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89640.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89640.cljs$core$IFn$_invoke$arity$2(G__89607,G__89608) : init_state__72620__auto___89640.call(null,G__89607,G__89608));
})()});
return obj89606;
})();
} else {
this__72619__auto__.state = (function (){var obj89610 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89610;
})();
}

return null;
});})(options__72617__auto___89638))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.post_mutation_countdown_many.Countdown,new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","Countdown","book.demos.pre-merge.post-mutation-countdown-many/Countdown",307381166),options__72617__auto___89638);
book.demos.pre_merge.post_mutation_countdown_many.ui_countdown = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.post_mutation_countdown_many.Countdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","counter-id","book.demos.pre-merge.post-mutation-countdown-many/counter-id",2094649611)], null));

var options__72617__auto___89641 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$pre_merge$post_mutation_countdown_many$build_raw_initial_state_STAR_(_){
return cljs.core.PersistentArrayMap.EMPTY;
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$post_mutation_countdown_many$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","all-counters","book.demos.pre-merge.post-mutation-countdown-many/all-counters",-1204083375),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.pre_merge.post_mutation_countdown_many.Countdown)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$post_mutation_countdown_many$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89611 = com.fulcrologic.fulcro.components.props(this$);
var map__89611__$1 = (((((!((map__89611 == null))))?(((((map__89611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89611):map__89611);
var all_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89611__$1,new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","all-counters","book.demos.pre-merge.post-mutation-countdown-many/all-counters",-1204083375));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Counters"]),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(all_counters))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "alignItems": "center", "justifyContent": "space-between"})}),com.fulcrologic.fulcro.components.force_children(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.post_mutation_countdown_many.ui_countdown,all_counters))]):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89611,map__89611__$1,all_counters){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(this$,new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","all-counters","book.demos.pre-merge.post-mutation-countdown-many/all-counters",-1204083375),book.demos.pre_merge.post_mutation_countdown_many.Countdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("book.demos.pre-merge.post-mutation-countdown-many","initialize-counters","book.demos.pre-merge.post-mutation-countdown-many/initialize-counters",-1476345924,null)], null));
});})(map__89611,map__89611__$1,all_counters))
], null),"Load many counters"], null),null)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.post_mutation_countdown_many !== 'undefined') && (typeof book.demos.pre_merge.post_mutation_countdown_many.Root !== 'undefined')){
} else {
book.demos.pre_merge.post_mutation_countdown_many.Root = ((function (options__72617__auto___89641){
return (function book$demos$pre_merge$post_mutation_countdown_many$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89641,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89642)){
var init_state__72620__auto___89643 = temp__5733__auto___89642;
this__72619__auto__.state = (function (){var obj89614 = ({"fulcro$state":(function (){var G__89615 = this__72619__auto__;
var G__89616 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89643.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89643.cljs$core$IFn$_invoke$arity$2(G__89615,G__89616) : init_state__72620__auto___89643.call(null,G__89615,G__89616));
})()});
return obj89614;
})();
} else {
this__72619__auto__.state = (function (){var obj89618 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89618;
})();
}

return null;
});})(options__72617__auto___89641))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.post_mutation_countdown_many.Root,new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown-many","Root","book.demos.pre-merge.post-mutation-countdown-many/Root",582374819),options__72617__auto___89641);

//# sourceMappingURL=book.demos.pre_merge.post_mutation_countdown_many.js.map
