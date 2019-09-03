goog.provide('book.demos.pre_merge.countdown');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('book.demos.util');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.wsscode.pathom.connect');
book.demos.pre_merge.countdown.all_counters = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-id","book.demos.pre-merge.countdown/counter-id",206648306),(1),new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-label","book.demos.pre-merge.countdown/counter-label",-632357035),"A"], null)], null);
book.demos.pre_merge.countdown.counter_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.pre-merge.countdown","counter-resolver","book.demos.pre-merge.countdown/counter-resolver",231544013,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-id","book.demos.pre-merge.countdown/counter-id",206648306),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-id","book.demos.pre-merge.countdown/counter-id",206648306),new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-label","book.demos.pre-merge.countdown/counter-label",-632357035)], null)], null),(function book$demos$pre_merge$countdown$counter_resolver(env,p__89620){
var map__89621 = p__89620;
var map__89621__$1 = (((((!((map__89621 == null))))?(((((map__89621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89621):map__89621);
var counter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89621__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-id","book.demos.pre-merge.countdown/counter-id",206648306));
var map__89623 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var map__89623__$1 = (((((!((map__89623 == null))))?(((((map__89623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89623):map__89623);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89623__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__89623,map__89623__$1,id,map__89621,map__89621__$1,counter_id){
return (function (p1__89619_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-id","book.demos.pre-merge.countdown/counter-id",206648306).cljs$core$IFn$_invoke$arity$1(p1__89619_SHARP_));
});})(map__89623,map__89623__$1,id,map__89621,map__89621__$1,counter_id))
,book.demos.pre_merge.countdown.all_counters));
}));
book.demos.pre_merge.countdown.resolvers = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.demos.pre_merge.countdown.counter_resolver], null);

var options__72617__auto___89658 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$pre_merge$countdown$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-id","book.demos.pre-merge.countdown/counter-id",206648306),new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-id","book.demos.pre-merge.countdown/counter-id",206648306).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-id","book.demos.pre-merge.countdown/counter-id",206648306),new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-label","book.demos.pre-merge.countdown/counter-label",-632357035),new cljs.core.Keyword("ui","count","ui/count",2139919329)], null);
}),new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),(function (p__89625){
var map__89626 = p__89625;
var map__89626__$1 = (((((!((map__89626 == null))))?(((((map__89626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89626):map__89626);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89626__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89626__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","count","ui/count",2139919329),(5)], null),current_normalized,data_tree], 0));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown$render_Countdown(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89628 = com.fulcrologic.fulcro.components.props(this$);
var map__89628__$1 = (((((!((map__89628 == null))))?(((((map__89628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89628):map__89628);
var counter_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89628__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-label","book.demos.pre-merge.countdown/counter-label",-632357035));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89628__$1,new cljs.core.Keyword("ui","count","ui/count",2139919329));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter_label], null),null),com.fulcrologic.fulcro.components.force_children((function (){var done_QMARK_ = (count === (0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),done_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (done_QMARK_,map__89628,map__89628__$1,counter_label,count){
return (function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","count","ui/count",2139919329),(count - (1)));
});})(done_QMARK_,map__89628,map__89628__$1,counter_label,count))
], null),com.fulcrologic.fulcro.components.force_children(((done_QMARK_)?"Done!":cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)))], null),null);
})())], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown !== 'undefined') && (typeof book.demos.pre_merge.countdown.Countdown !== 'undefined')){
} else {
book.demos.pre_merge.countdown.Countdown = ((function (options__72617__auto___89658){
return (function book$demos$pre_merge$countdown$Countdown(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89658,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89659)){
var init_state__72620__auto___89660 = temp__5733__auto___89659;
this__72619__auto__.state = (function (){var obj89631 = ({"fulcro$state":(function (){var G__89632 = this__72619__auto__;
var G__89633 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89660.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89660.cljs$core$IFn$_invoke$arity$2(G__89632,G__89633) : init_state__72620__auto___89660.call(null,G__89632,G__89633));
})()});
return obj89631;
})();
} else {
this__72619__auto__.state = (function (){var obj89635 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89635;
})();
}

return null;
});})(options__72617__auto___89658))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown.Countdown,new cljs.core.Keyword("book.demos.pre-merge.countdown","Countdown","book.demos.pre-merge.countdown/Countdown",-2099601771),options__72617__auto___89658);
book.demos.pre_merge.countdown.ui_countdown = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown.Countdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-id","book.demos.pre-merge.countdown/counter-id",206648306)], null));

var options__72617__auto___89661 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$pre_merge$countdown$build_raw_initial_state_STAR_(_){
return cljs.core.PersistentArrayMap.EMPTY;
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counter","counter",804008177),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.pre_merge.countdown.Countdown)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89636 = com.fulcrologic.fulcro.components.props(this$);
var map__89636__$1 = (((((!((map__89636 == null))))?(((((map__89636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89636):map__89636);
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89636__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Counters"]),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(counter))?(book.demos.pre_merge.countdown.ui_countdown.cljs$core$IFn$_invoke$arity$1 ? book.demos.pre_merge.countdown.ui_countdown.cljs$core$IFn$_invoke$arity$1(counter) : book.demos.pre_merge.countdown.ui_countdown.call(null,counter)):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89636,map__89636__$1,counter){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown","counter-id","book.demos.pre-merge.countdown/counter-id",206648306),(1)], null),book.demos.pre_merge.countdown.Countdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter","counter",804008177)], null)], null));
});})(map__89636,map__89636__$1,counter))
], null),"Load one counter"], null),null)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown !== 'undefined') && (typeof book.demos.pre_merge.countdown.Root !== 'undefined')){
} else {
book.demos.pre_merge.countdown.Root = ((function (options__72617__auto___89661){
return (function book$demos$pre_merge$countdown$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89661,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89662)){
var init_state__72620__auto___89663 = temp__5733__auto___89662;
this__72619__auto__.state = (function (){var obj89651 = ({"fulcro$state":(function (){var G__89652 = this__72619__auto__;
var G__89653 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89663.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89663.cljs$core$IFn$_invoke$arity$2(G__89652,G__89653) : init_state__72620__auto___89663.call(null,G__89652,G__89653));
})()});
return obj89651;
})();
} else {
this__72619__auto__.state = (function (){var obj89657 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89657;
})();
}

return null;
});})(options__72617__auto___89661))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown.Root,new cljs.core.Keyword("book.demos.pre-merge.countdown","Root","book.demos.pre-merge.countdown/Root",-1289786708),options__72617__auto___89661);
/**
 * To be used in :started-callback to pre-load things.
 */
book.demos.pre_merge.countdown.initialize = (function book$demos$pre_merge$countdown$initialize(app){
return null;
});

//# sourceMappingURL=book.demos.pre_merge.countdown.js.map
