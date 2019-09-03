goog.provide('book.demos.pre_merge.countdown_mutation');
goog.require('cljs.core');
goog.require('book.demos.util');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.algorithms.tempid');
book.demos.pre_merge.countdown_mutation.default_count = (5);

var options__72617__auto___89824 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$pre_merge$countdown_mutation$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),new cljs.core.Keyword("ui","id","ui/id",-1388397664).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_mutation$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),new cljs.core.Keyword("ui","count","ui/count",2139919329)], null);
}),new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),(function (p__89758){
var map__89759 = p__89758;
var map__89759__$1 = (((((!((map__89759 == null))))?(((((map__89759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89759):map__89759);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89759__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89759__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),cljs.core.random_uuid(),new cljs.core.Keyword("ui","count","ui/count",2139919329),book.demos.pre_merge.countdown_mutation.default_count], null),current_normalized,data_tree], 0));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_mutation$render_CountdownButton(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89762 = com.fulcrologic.fulcro.components.props(this$);
var map__89762__$1 = (((((!((map__89762 == null))))?(((((map__89762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89762):map__89762);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89762__$1,new cljs.core.Keyword("ui","count","ui/count",2139919329));
var done_QMARK_ = (count === (0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),done_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (done_QMARK_,map__89762,map__89762__$1,count){
return (function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","count","ui/count",2139919329),(count - (1)));
});})(done_QMARK_,map__89762,map__89762__$1,count))
], null),com.fulcrologic.fulcro.components.force_children(((done_QMARK_)?"Done!":cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_mutation !== 'undefined') && (typeof book.demos.pre_merge.countdown_mutation.CountdownButton !== 'undefined')){
} else {
book.demos.pre_merge.countdown_mutation.CountdownButton = ((function (options__72617__auto___89824){
return (function book$demos$pre_merge$countdown_mutation$CountdownButton(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89824,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89825)){
var init_state__72620__auto___89826 = temp__5733__auto___89825;
this__72619__auto__.state = (function (){var obj89767 = ({"fulcro$state":(function (){var G__89768 = this__72619__auto__;
var G__89769 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89826.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89826.cljs$core$IFn$_invoke$arity$2(G__89768,G__89769) : init_state__72620__auto___89826.call(null,G__89768,G__89769));
})()});
return obj89767;
})();
} else {
this__72619__auto__.state = (function (){var obj89772 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89772;
})();
}

return null;
});})(options__72617__auto___89824))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_mutation.CountdownButton,new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","CountdownButton","book.demos.pre-merge.countdown-mutation/CountdownButton",-1486952018),options__72617__auto___89824);
book.demos.pre_merge.countdown_mutation.ui_countdown_button = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_mutation.CountdownButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-id","book.demos.pre-merge.countdown-mutation/counter-id",230628984)], null));

var options__72617__auto___89829 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$pre_merge$countdown_mutation$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-id","book.demos.pre-merge.countdown-mutation/counter-id",230628984),new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-id","book.demos.pre-merge.countdown-mutation/counter-id",230628984).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_mutation$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-id","book.demos.pre-merge.countdown-mutation/counter-id",230628984),new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-label","book.demos.pre-merge.countdown-mutation/counter-label",-1044049713),new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-initial","book.demos.pre-merge.countdown-mutation/counter-initial",719549704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","counter","ui/counter",804010813),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.pre_merge.countdown_mutation.CountdownButton)], null)], null);
}),new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),(function (p__89787){
var map__89788 = p__89787;
var map__89788__$1 = (((((!((map__89788 == null))))?(((((map__89788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89788):map__89788);
var x = map__89788__$1;
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89788__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89788__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var initial = com.fulcrologic.fulcro.algorithms.merge.nilify_not_found(new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-initial","book.demos.pre-merge.countdown-mutation/counter-initial",719549704).cljs$core$IFn$_invoke$arity$1(data_tree));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","counter","ui/counter",804010813),(function (){var G__89791 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(initial)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89791,new cljs.core.Keyword("ui","count","ui/count",2139919329),initial);
} else {
return G__89791;
}
})()], null),current_normalized,data_tree], 0));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_mutation$render_Countdown(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89798 = com.fulcrologic.fulcro.components.props(this$);
var map__89798__$1 = (((((!((map__89798 == null))))?(((((map__89798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89798):map__89798);
var counter_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89798__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-label","book.demos.pre-merge.countdown-mutation/counter-label",-1044049713));
var counter_initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89798__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-initial","book.demos.pre-merge.countdown-mutation/counter-initial",719549704));
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89798__$1,new cljs.core.Keyword("ui","counter","ui/counter",804010813));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter_label)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = counter_initial;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return book.demos.pre_merge.countdown_mutation.default_count;
}
})()),"]"].join('')], null),null),com.fulcrologic.fulcro.components.force_children((book.demos.pre_merge.countdown_mutation.ui_countdown_button.cljs$core$IFn$_invoke$arity$1 ? book.demos.pre_merge.countdown_mutation.ui_countdown_button.cljs$core$IFn$_invoke$arity$1(counter) : book.demos.pre_merge.countdown_mutation.ui_countdown_button.call(null,counter)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_mutation !== 'undefined') && (typeof book.demos.pre_merge.countdown_mutation.Countdown !== 'undefined')){
} else {
book.demos.pre_merge.countdown_mutation.Countdown = ((function (options__72617__auto___89829){
return (function book$demos$pre_merge$countdown_mutation$Countdown(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89829,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89833)){
var init_state__72620__auto___89834 = temp__5733__auto___89833;
this__72619__auto__.state = (function (){var obj89806 = ({"fulcro$state":(function (){var G__89807 = this__72619__auto__;
var G__89808 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89834.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89834.cljs$core$IFn$_invoke$arity$2(G__89807,G__89808) : init_state__72620__auto___89834.call(null,G__89807,G__89808));
})()});
return obj89806;
})();
} else {
this__72619__auto__.state = (function (){var obj89810 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89810;
})();
}

return null;
});})(options__72617__auto___89829))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_mutation.Countdown,new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","Countdown","book.demos.pre-merge.countdown-mutation/Countdown",-2089765857),options__72617__auto___89829);
book.demos.pre_merge.countdown_mutation.ui_countdown = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_mutation.Countdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-id","book.demos.pre-merge.countdown-mutation/counter-id",230628984)], null));
/**
 * 
 */
book.demos.pre_merge.countdown_mutation.create_countdown = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.demos.pre-merge.countdown-mutation","create-countdown","book.demos.pre-merge.countdown-mutation/create-countdown",893892195,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.demos.pre-merge.countdown-mutation","create-countdown","book.demos.pre-merge.countdown-mutation/create-countdown",893892195,null),(function (fulcro_mutation_env_symbol){
var countdown = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (countdown){
return (function book$demos$pre_merge$countdown_mutation$action(p__89811){
var map__89812 = p__89811;
var map__89812__$1 = (((((!((map__89812 == null))))?(((((map__89812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89812):map__89812);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89812__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89812__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,com.fulcrologic.fulcro.algorithms.merge.merge_component,book.demos.pre_merge.countdown_mutation.Countdown,countdown,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","all-counters","book.demos.pre-merge.countdown-mutation/all-counters",660398280)], null)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","new-countdown-label","ui/new-countdown-label",-1458468256),""], 0));

return null;
});})(countdown))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (countdown){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(countdown))
], null);
}));

var options__72617__auto___89835 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$pre_merge$countdown_mutation$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","all-counters","book.demos.pre-merge.countdown-mutation/all-counters",660398280),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-id","book.demos.pre-merge.countdown-mutation/counter-id",230628984),com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-label","book.demos.pre-merge.countdown-mutation/counter-label",-1044049713),"X"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-id","book.demos.pre-merge.countdown-mutation/counter-id",230628984),com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-label","book.demos.pre-merge.countdown-mutation/counter-label",-1044049713),"Y"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-id","book.demos.pre-merge.countdown-mutation/counter-id",230628984),com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-label","book.demos.pre-merge.countdown-mutation/counter-label",-1044049713),"Z",new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-initial","book.demos.pre-merge.countdown-mutation/counter-initial",719549704),(9)], null)], null)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_mutation$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","all-counters","book.demos.pre-merge.countdown-mutation/all-counters",660398280),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.pre_merge.countdown_mutation.Countdown)], null),new cljs.core.Keyword("ui","new-countdown-label","ui/new-countdown-label",-1458468256)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_mutation$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89816 = com.fulcrologic.fulcro.components.props(this$);
var map__89816__$1 = (((((!((map__89816 == null))))?(((((map__89816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89816):map__89816);
var all_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89816__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","all-counters","book.demos.pre-merge.countdown-mutation/all-counters",660398280));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Counters"]),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89816,map__89816__$1,all_counters){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.demos.pre-merge.countdown-mutation","create-countdown","book.demos.pre-merge.countdown-mutation/create-countdown",893892195,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-id","book.demos.pre-merge.countdown-mutation/counter-id",230628984),com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","counter-label","book.demos.pre-merge.countdown-mutation/counter-label",-1044049713),"New"], null),null,(1),null)))))], null));
});})(map__89816,map__89816__$1,all_counters))
], null),"Add counter"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "alignItems": "center", "justifyContent": "space-between"})}),com.fulcrologic.fulcro.components.force_children(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_mutation.ui_countdown,all_counters))]))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_mutation !== 'undefined') && (typeof book.demos.pre_merge.countdown_mutation.Root !== 'undefined')){
} else {
book.demos.pre_merge.countdown_mutation.Root = ((function (options__72617__auto___89835){
return (function book$demos$pre_merge$countdown_mutation$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89835,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89836)){
var init_state__72620__auto___89837 = temp__5733__auto___89836;
this__72619__auto__.state = (function (){var obj89819 = ({"fulcro$state":(function (){var G__89820 = this__72619__auto__;
var G__89821 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89837.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89837.cljs$core$IFn$_invoke$arity$2(G__89820,G__89821) : init_state__72620__auto___89837.call(null,G__89820,G__89821));
})()});
return obj89819;
})();
} else {
this__72619__auto__.state = (function (){var obj89823 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89823;
})();
}

return null;
});})(options__72617__auto___89835))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_mutation.Root,new cljs.core.Keyword("book.demos.pre-merge.countdown-mutation","Root","book.demos.pre-merge.countdown-mutation/Root",-1185611470),options__72617__auto___89835);

//# sourceMappingURL=book.demos.pre_merge.countdown_mutation.js.map
