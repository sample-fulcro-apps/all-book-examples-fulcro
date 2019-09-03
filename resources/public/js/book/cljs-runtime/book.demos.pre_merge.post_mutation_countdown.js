goog.provide('book.demos.pre_merge.post_mutation_countdown');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('book.demos.util');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.wsscode.pathom.connect');
book.demos.pre_merge.post_mutation_countdown.all_counters = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159),(1),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-label","book.demos.pre-merge.post-mutation-countdown/counter-label",-19988290),"A"], null)], null);
book.demos.pre_merge.post_mutation_countdown.counter_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.pre-merge.post-mutation-countdown","counter-resolver","book.demos.pre-merge.post-mutation-countdown/counter-resolver",-968026524,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-label","book.demos.pre-merge.post-mutation-countdown/counter-label",-19988290)], null)], null),(function book$demos$pre_merge$post_mutation_countdown$counter_resolver(env,p__89525){
var map__89527 = p__89525;
var map__89527__$1 = (((((!((map__89527 == null))))?(((((map__89527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89527):map__89527);
var counter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89527__$1,new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159));
var map__89530 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var map__89530__$1 = (((((!((map__89530 == null))))?(((((map__89530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89530):map__89530);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89530__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__89530,map__89530__$1,id,map__89527,map__89527__$1,counter_id){
return (function (p1__89523_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159).cljs$core$IFn$_invoke$arity$1(p1__89523_SHARP_));
});})(map__89530,map__89530__$1,id,map__89527,map__89527__$1,counter_id))
,book.demos.pre_merge.post_mutation_countdown.all_counters));
}));
book.demos.pre_merge.post_mutation_countdown.resolvers = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.demos.pre_merge.post_mutation_countdown.counter_resolver], null);
/**
 * 
 */
book.demos.pre_merge.post_mutation_countdown.initialize_counter = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.demos.pre-merge.post-mutation-countdown","initialize-counter","book.demos.pre-merge.post-mutation-countdown/initialize-counter",268574006,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.demos.pre-merge.post-mutation-countdown","initialize-counter","book.demos.pre-merge.post-mutation-countdown/initialize-counter",268574006,null),(function (fulcro_mutation_env_symbol){
var map__89537 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__89537__$1 = (((((!((map__89537 == null))))?(((((map__89537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89537):map__89537);
var counter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89537__$1,new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__89537,map__89537__$1,counter_id){
return (function book$demos$pre_merge$post_mutation_countdown$action(p__89541){
var map__89542 = p__89541;
var map__89542__$1 = (((((!((map__89542 == null))))?(((((map__89542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89542):map__89542);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89542__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159),counter_id], null),((function (map__89542,map__89542__$1,state,map__89537,map__89537__$1,counter_id){
return (function (p1__89532_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","count","ui/count",2139919329),(5)], null),p1__89532_SHARP_], 0));
});})(map__89542,map__89542__$1,state,map__89537,map__89537__$1,counter_id))
);

return null;
});})(map__89537,map__89537__$1,counter_id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__89537,map__89537__$1,counter_id){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__89537,map__89537__$1,counter_id))
], null);
}));

var options__72617__auto___89588 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$pre_merge$post_mutation_countdown$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$post_mutation_countdown$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-label","book.demos.pre-merge.post-mutation-countdown/counter-label",-19988290),new cljs.core.Keyword("ui","count","ui/count",2139919329)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$post_mutation_countdown$render_Countdown(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89568 = com.fulcrologic.fulcro.components.props(this$);
var map__89568__$1 = (((((!((map__89568 == null))))?(((((map__89568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89568):map__89568);
var counter_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89568__$1,new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-label","book.demos.pre-merge.post-mutation-countdown/counter-label",-19988290));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89568__$1,new cljs.core.Keyword("ui","count","ui/count",2139919329));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter_label], null),null),com.fulcrologic.fulcro.components.force_children((function (){var done_QMARK_ = (count === (0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),done_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (done_QMARK_,map__89568,map__89568__$1,counter_label,count){
return (function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","count","ui/count",2139919329),(count - (1)));
});})(done_QMARK_,map__89568,map__89568__$1,counter_label,count))
], null),com.fulcrologic.fulcro.components.force_children(((done_QMARK_)?"Done!":cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)))], null),null);
})())], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.post_mutation_countdown !== 'undefined') && (typeof book.demos.pre_merge.post_mutation_countdown.Countdown !== 'undefined')){
} else {
book.demos.pre_merge.post_mutation_countdown.Countdown = ((function (options__72617__auto___89588){
return (function book$demos$pre_merge$post_mutation_countdown$Countdown(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89588,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89589)){
var init_state__72620__auto___89590 = temp__5733__auto___89589;
this__72619__auto__.state = (function (){var obj89571 = ({"fulcro$state":(function (){var G__89572 = this__72619__auto__;
var G__89573 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89590.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89590.cljs$core$IFn$_invoke$arity$2(G__89572,G__89573) : init_state__72620__auto___89590.call(null,G__89572,G__89573));
})()});
return obj89571;
})();
} else {
this__72619__auto__.state = (function (){var obj89575 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89575;
})();
}

return null;
});})(options__72617__auto___89588))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.post_mutation_countdown.Countdown,new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","Countdown","book.demos.pre-merge.post-mutation-countdown/Countdown",1046127664),options__72617__auto___89588);
book.demos.pre_merge.post_mutation_countdown.ui_countdown = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.post_mutation_countdown.Countdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159)], null));

var options__72617__auto___89591 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$pre_merge$post_mutation_countdown$build_raw_initial_state_STAR_(_){
return cljs.core.PersistentArrayMap.EMPTY;
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$post_mutation_countdown$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counter","counter",804008177),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.pre_merge.post_mutation_countdown.Countdown)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$post_mutation_countdown$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89577 = com.fulcrologic.fulcro.components.props(this$);
var map__89577__$1 = (((((!((map__89577 == null))))?(((((map__89577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89577):map__89577);
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89577__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Counters"]),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(counter))?(book.demos.pre_merge.post_mutation_countdown.ui_countdown.cljs$core$IFn$_invoke$arity$1 ? book.demos.pre_merge.post_mutation_countdown.ui_countdown.cljs$core$IFn$_invoke$arity$1(counter) : book.demos.pre_merge.post_mutation_countdown.ui_countdown.call(null,counter)):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89577,map__89577__$1,counter){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159),(1)], null),book.demos.pre_merge.post_mutation_countdown.Countdown,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter","counter",804008177)], null),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("book.demos.pre-merge.post-mutation-countdown","initialize-counter","book.demos.pre-merge.post-mutation-countdown/initialize-counter",268574006,null),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","counter-id","book.demos.pre-merge.post-mutation-countdown/counter-id",-925815159),(1)], null)], null));
});})(map__89577,map__89577__$1,counter))
], null),"Load one counter"], null),null)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.post_mutation_countdown !== 'undefined') && (typeof book.demos.pre_merge.post_mutation_countdown.Root !== 'undefined')){
} else {
book.demos.pre_merge.post_mutation_countdown.Root = ((function (options__72617__auto___89591){
return (function book$demos$pre_merge$post_mutation_countdown$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89591,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89593)){
var init_state__72620__auto___89598 = temp__5733__auto___89593;
this__72619__auto__.state = (function (){var obj89580 = ({"fulcro$state":(function (){var G__89581 = this__72619__auto__;
var G__89582 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89598.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89598.cljs$core$IFn$_invoke$arity$2(G__89581,G__89582) : init_state__72620__auto___89598.call(null,G__89581,G__89582));
})()});
return obj89580;
})();
} else {
this__72619__auto__.state = (function (){var obj89584 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89584;
})();
}

return null;
});})(options__72617__auto___89591))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.post_mutation_countdown.Root,new cljs.core.Keyword("book.demos.pre-merge.post-mutation-countdown","Root","book.demos.pre-merge.post-mutation-countdown/Root",1990160673),options__72617__auto___89591);
/**
 * To be used in :started-callback to pre-load things.
 */
book.demos.pre_merge.post_mutation_countdown.initialize = (function book$demos$pre_merge$post_mutation_countdown$initialize(app){
return null;
});

//# sourceMappingURL=book.demos.pre_merge.post_mutation_countdown.js.map
