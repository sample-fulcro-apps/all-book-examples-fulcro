goog.provide('book.demos.pre_merge.countdown_with_initial');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('book.demos.util');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.wsscode.pathom.connect');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
book.demos.pre_merge.countdown_with_initial.all_counters = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-id","book.demos.pre-merge.countdown-with-initial/counter-id",-280929948),(1),new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-label","book.demos.pre-merge.countdown-with-initial/counter-label",-79727653),"A"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-id","book.demos.pre-merge.countdown-with-initial/counter-id",-280929948),(2),new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-label","book.demos.pre-merge.countdown-with-initial/counter-label",-79727653),"B",new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-initial","book.demos.pre-merge.countdown-with-initial/counter-initial",1079560564),(10)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-id","book.demos.pre-merge.countdown-with-initial/counter-id",-280929948),(3),new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-label","book.demos.pre-merge.countdown-with-initial/counter-label",-79727653),"C",new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-initial","book.demos.pre-merge.countdown-with-initial/counter-initial",1079560564),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-id","book.demos.pre-merge.countdown-with-initial/counter-id",-280929948),(4),new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-label","book.demos.pre-merge.countdown-with-initial/counter-label",-79727653),"D"], null)], null);
book.demos.pre_merge.countdown_with_initial.counter_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.pre-merge.countdown-with-initial","counter-resolver","book.demos.pre-merge.countdown-with-initial/counter-resolver",750627167,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","all-counters","book.demos.pre-merge.countdown-with-initial/all-counters",1238543772),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-id","book.demos.pre-merge.countdown-with-initial/counter-id",-280929948),new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-label","book.demos.pre-merge.countdown-with-initial/counter-label",-79727653),new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-initial","book.demos.pre-merge.countdown-with-initial/counter-initial",1079560564)], null)], null)], null)], null),(function book$demos$pre_merge$countdown_with_initial$counter_resolver(env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","all-counters","book.demos.pre-merge.countdown-with-initial/all-counters",1238543772),book.demos.pre_merge.countdown_with_initial.all_counters], null);
}));
book.demos.pre_merge.countdown_with_initial.resolvers = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.demos.pre_merge.countdown_with_initial.counter_resolver], null);
book.demos.pre_merge.countdown_with_initial.default_count = (5);

var options__72617__auto___89700 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$pre_merge$countdown_with_initial$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-id","book.demos.pre-merge.countdown-with-initial/counter-id",-280929948),new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-id","book.demos.pre-merge.countdown-with-initial/counter-id",-280929948).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_with_initial$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-id","book.demos.pre-merge.countdown-with-initial/counter-id",-280929948),new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-label","book.demos.pre-merge.countdown-with-initial/counter-label",-79727653),new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-initial","book.demos.pre-merge.countdown-with-initial/counter-initial",1079560564),new cljs.core.Keyword("ui","count","ui/count",2139919329)], null);
}),new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),(function (p__89644){
var map__89645 = p__89644;
var map__89645__$1 = (((((!((map__89645 == null))))?(((((map__89645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89645):map__89645);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89645__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89645__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","count","ui/count",2139919329),(function (){var or__4131__auto__ = com.fulcrologic.fulcro.algorithms.merge.nilify_not_found(new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-initial","book.demos.pre-merge.countdown-with-initial/counter-initial",1079560564).cljs$core$IFn$_invoke$arity$1(data_tree));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return book.demos.pre_merge.countdown_with_initial.default_count;
}
})()], null),current_normalized,data_tree], 0));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_with_initial$render_Countdown(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89670 = com.fulcrologic.fulcro.components.props(this$);
var map__89670__$1 = (((((!((map__89670 == null))))?(((((map__89670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89670):map__89670);
var counter_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89670__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-label","book.demos.pre-merge.countdown-with-initial/counter-label",-79727653));
var counter_initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89670__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-initial","book.demos.pre-merge.countdown-with-initial/counter-initial",1079560564));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89670__$1,new cljs.core.Keyword("ui","count","ui/count",2139919329));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter_label)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = counter_initial;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return book.demos.pre_merge.countdown_with_initial.default_count;
}
})()),"]"].join('')], null),null),com.fulcrologic.fulcro.components.force_children((function (){var done_QMARK_ = (count === (0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),done_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (done_QMARK_,map__89670,map__89670__$1,counter_label,counter_initial,count){
return (function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","count","ui/count",2139919329),(count - (1)));
});})(done_QMARK_,map__89670,map__89670__$1,counter_label,counter_initial,count))
], null),com.fulcrologic.fulcro.components.force_children(((done_QMARK_)?"Done!":cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)))], null),null);
})())], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_with_initial !== 'undefined') && (typeof book.demos.pre_merge.countdown_with_initial.Countdown !== 'undefined')){
} else {
book.demos.pre_merge.countdown_with_initial.Countdown = ((function (options__72617__auto___89700){
return (function book$demos$pre_merge$countdown_with_initial$Countdown(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89700,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89701)){
var init_state__72620__auto___89702 = temp__5733__auto___89701;
this__72619__auto__.state = (function (){var obj89681 = ({"fulcro$state":(function (){var G__89682 = this__72619__auto__;
var G__89683 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89702.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89702.cljs$core$IFn$_invoke$arity$2(G__89682,G__89683) : init_state__72620__auto___89702.call(null,G__89682,G__89683));
})()});
return obj89681;
})();
} else {
this__72619__auto__.state = (function (){var obj89685 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89685;
})();
}

return null;
});})(options__72617__auto___89700))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_with_initial.Countdown,new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","Countdown","book.demos.pre-merge.countdown-with-initial/Countdown",1709882115),options__72617__auto___89700);
book.demos.pre_merge.countdown_with_initial.ui_countdown = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_with_initial.Countdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","counter-id","book.demos.pre-merge.countdown-with-initial/counter-id",-280929948)], null));

var options__72617__auto___89703 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$pre_merge$countdown_with_initial$build_raw_initial_state_STAR_(_){
return cljs.core.PersistentArrayMap.EMPTY;
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_with_initial$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","all-counters","book.demos.pre-merge.countdown-with-initial/all-counters",1238543772),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.pre_merge.countdown_with_initial.Countdown)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_with_initial$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89687 = com.fulcrologic.fulcro.components.props(this$);
var map__89687__$1 = (((((!((map__89687 == null))))?(((((map__89687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89687):map__89687);
var all_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89687__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","all-counters","book.demos.pre-merge.countdown-with-initial/all-counters",1238543772));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Counters"]),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(all_counters))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "alignItems": "center", "justifyContent": "space-between"})}),com.fulcrologic.fulcro.components.force_children(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_with_initial.ui_countdown,all_counters))]):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89687,map__89687__$1,all_counters){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","all-counters","book.demos.pre-merge.countdown-with-initial/all-counters",1238543772),book.demos.pre_merge.countdown_with_initial.Countdown);
});})(map__89687,map__89687__$1,all_counters))
], null),"Load many counters"], null),null)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_with_initial !== 'undefined') && (typeof book.demos.pre_merge.countdown_with_initial.Root !== 'undefined')){
} else {
book.demos.pre_merge.countdown_with_initial.Root = ((function (options__72617__auto___89703){
return (function book$demos$pre_merge$countdown_with_initial$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89703,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89704)){
var init_state__72620__auto___89705 = temp__5733__auto___89704;
this__72619__auto__.state = (function (){var obj89693 = ({"fulcro$state":(function (){var G__89694 = this__72619__auto__;
var G__89695 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89705.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89705.cljs$core$IFn$_invoke$arity$2(G__89694,G__89695) : init_state__72620__auto___89705.call(null,G__89694,G__89695));
})()});
return obj89693;
})();
} else {
this__72619__auto__.state = (function (){var obj89697 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89697;
})();
}

return null;
});})(options__72617__auto___89703))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_with_initial.Root,new cljs.core.Keyword("book.demos.pre-merge.countdown-with-initial","Root","book.demos.pre-merge.countdown-with-initial/Root",-1815157306),options__72617__auto___89703);

//# sourceMappingURL=book.demos.pre_merge.countdown_with_initial.js.map
