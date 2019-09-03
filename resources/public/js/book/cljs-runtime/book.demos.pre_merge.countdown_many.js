goog.provide('book.demos.pre_merge.countdown_many');
goog.require('cljs.core');
goog.require('book.demos.util');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.wsscode.pathom.connect');
book.demos.pre_merge.countdown_many.all_counters = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-id","book.demos.pre-merge.countdown-many/counter-id",1901553986),(1),new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-label","book.demos.pre-merge.countdown-many/counter-label",2102224005),"A"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-id","book.demos.pre-merge.countdown-many/counter-id",1901553986),(2),new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-label","book.demos.pre-merge.countdown-many/counter-label",2102224005),"B"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-id","book.demos.pre-merge.countdown-many/counter-id",1901553986),(3),new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-label","book.demos.pre-merge.countdown-many/counter-label",2102224005),"C"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-id","book.demos.pre-merge.countdown-many/counter-id",1901553986),(4),new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-label","book.demos.pre-merge.countdown-many/counter-label",2102224005),"D"], null)], null);
book.demos.pre_merge.countdown_many.counter_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.pre-merge.countdown-many","counter-resolver","book.demos.pre-merge.countdown-many/counter-resolver",-1362118339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-many","all-counters","book.demos.pre-merge.countdown-many/all-counters",-1278960262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-id","book.demos.pre-merge.countdown-many/counter-id",1901553986),new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-label","book.demos.pre-merge.countdown-many/counter-label",2102224005)], null)], null)], null)], null),(function book$demos$pre_merge$countdown_many$counter_resolver(env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-many","all-counters","book.demos.pre-merge.countdown-many/all-counters",-1278960262),book.demos.pre_merge.countdown_many.all_counters], null);
}));
book.demos.pre_merge.countdown_many.resolvers = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.demos.pre_merge.countdown_many.counter_resolver], null);

var options__72617__auto___89686 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$pre_merge$countdown_many$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-id","book.demos.pre-merge.countdown-many/counter-id",1901553986),new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-id","book.demos.pre-merge.countdown-many/counter-id",1901553986).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_many$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-id","book.demos.pre-merge.countdown-many/counter-id",1901553986),new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-label","book.demos.pre-merge.countdown-many/counter-label",2102224005),new cljs.core.Keyword("ui","count","ui/count",2139919329)], null);
}),new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),(function (p__89647){
var map__89648 = p__89647;
var map__89648__$1 = (((((!((map__89648 == null))))?(((((map__89648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89648):map__89648);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89648__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89648__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","count","ui/count",2139919329),(5)], null),current_normalized,data_tree], 0));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_many$render_Countdown(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89654 = com.fulcrologic.fulcro.components.props(this$);
var map__89654__$1 = (((((!((map__89654 == null))))?(((((map__89654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89654):map__89654);
var counter_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89654__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-label","book.demos.pre-merge.countdown-many/counter-label",2102224005));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89654__$1,new cljs.core.Keyword("ui","count","ui/count",2139919329));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter_label], null),null),com.fulcrologic.fulcro.components.force_children((function (){var done_QMARK_ = (count === (0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),done_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (done_QMARK_,map__89654,map__89654__$1,counter_label,count){
return (function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","count","ui/count",2139919329),(count - (1)));
});})(done_QMARK_,map__89654,map__89654__$1,counter_label,count))
], null),com.fulcrologic.fulcro.components.force_children(((done_QMARK_)?"Done!":cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)))], null),null);
})())], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_many !== 'undefined') && (typeof book.demos.pre_merge.countdown_many.Countdown !== 'undefined')){
} else {
book.demos.pre_merge.countdown_many.Countdown = ((function (options__72617__auto___89686){
return (function book$demos$pre_merge$countdown_many$Countdown(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89686,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89689)){
var init_state__72620__auto___89690 = temp__5733__auto___89689;
this__72619__auto__.state = (function (){var obj89665 = ({"fulcro$state":(function (){var G__89666 = this__72619__auto__;
var G__89667 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89690.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89690.cljs$core$IFn$_invoke$arity$2(G__89666,G__89667) : init_state__72620__auto___89690.call(null,G__89666,G__89667));
})()});
return obj89665;
})();
} else {
this__72619__auto__.state = (function (){var obj89669 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89669;
})();
}

return null;
});})(options__72617__auto___89686))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_many.Countdown,new cljs.core.Keyword("book.demos.pre-merge.countdown-many","Countdown","book.demos.pre-merge.countdown-many/Countdown",-405214491),options__72617__auto___89686);
book.demos.pre_merge.countdown_many.ui_countdown = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_many.Countdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("book.demos.pre-merge.countdown-many","counter-id","book.demos.pre-merge.countdown-many/counter-id",1901553986)], null));

var options__72617__auto___89691 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$pre_merge$countdown_many$build_raw_initial_state_STAR_(_){
return cljs.core.PersistentArrayMap.EMPTY;
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_many$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-many","all-counters","book.demos.pre-merge.countdown-many/all-counters",-1278960262),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.pre_merge.countdown_many.Countdown)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_many$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89672 = com.fulcrologic.fulcro.components.props(this$);
var map__89672__$1 = (((((!((map__89672 == null))))?(((((map__89672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89672):map__89672);
var all_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89672__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-many","all-counters","book.demos.pre-merge.countdown-many/all-counters",-1278960262));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Counters"]),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(all_counters))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "alignItems": "center", "justifyContent": "space-between"})}),com.fulcrologic.fulcro.components.force_children(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_many.ui_countdown,all_counters))]):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89672,map__89672__$1,all_counters){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.Keyword("book.demos.pre-merge.countdown-many","all-counters","book.demos.pre-merge.countdown-many/all-counters",-1278960262),book.demos.pre_merge.countdown_many.Countdown);
});})(map__89672,map__89672__$1,all_counters))
], null),"Load many counters"], null),null)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_many !== 'undefined') && (typeof book.demos.pre_merge.countdown_many.Root !== 'undefined')){
} else {
book.demos.pre_merge.countdown_many.Root = ((function (options__72617__auto___89691){
return (function book$demos$pre_merge$countdown_many$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89691,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89698)){
var init_state__72620__auto___89699 = temp__5733__auto___89698;
this__72619__auto__.state = (function (){var obj89675 = ({"fulcro$state":(function (){var G__89676 = this__72619__auto__;
var G__89677 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89699.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89699.cljs$core$IFn$_invoke$arity$2(G__89676,G__89677) : init_state__72620__auto___89699.call(null,G__89676,G__89677));
})()});
return obj89675;
})();
} else {
this__72619__auto__.state = (function (){var obj89679 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89679;
})();
}

return null;
});})(options__72617__auto___89691))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_many.Root,new cljs.core.Keyword("book.demos.pre-merge.countdown-many","Root","book.demos.pre-merge.countdown-many/Root",370988508),options__72617__auto___89691);
/**
 * To be used in :started-callback to pre-load things.
 */
book.demos.pre_merge.countdown_many.initialize = (function book$demos$pre_merge$countdown_many$initialize(app){
return null;
});

//# sourceMappingURL=book.demos.pre_merge.countdown_many.js.map
