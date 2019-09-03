goog.provide('book.demos.pre_merge.countdown_initial_state');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('book.demos.util');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.wsscode.pathom.connect');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.algorithms.tempid');
goog.require('taoensso.timbre');
book.demos.pre_merge.countdown_initial_state.all_counters = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041),(1),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-label","book.demos.pre-merge.countdown-initial-state/counter-label",166896912),"A"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041),(2),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-label","book.demos.pre-merge.countdown-initial-state/counter-label",166896912),"B",new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-initial","book.demos.pre-merge.countdown-initial-state/counter-initial",314374343),(10)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041),(3),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-label","book.demos.pre-merge.countdown-initial-state/counter-label",166896912),"C",new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-initial","book.demos.pre-merge.countdown-initial-state/counter-initial",314374343),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041),(4),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-label","book.demos.pre-merge.countdown-initial-state/counter-label",166896912),"D"], null)], null);
book.demos.pre_merge.countdown_initial_state.counter_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.pre-merge.countdown-initial-state","counter-resolver","book.demos.pre-merge.countdown-initial-state/counter-resolver",-82183758,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","all-counters","book.demos.pre-merge.countdown-initial-state/all-counters",-545825531),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-label","book.demos.pre-merge.countdown-initial-state/counter-label",166896912)], null)], null)], null)], null),(function book$demos$pre_merge$countdown_initial_state$counter_resolver(env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","all-counters","book.demos.pre-merge.countdown-initial-state/all-counters",-545825531),book.demos.pre_merge.countdown_initial_state.all_counters], null);
}));
book.demos.pre_merge.countdown_initial_state.resolvers = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.demos.pre_merge.countdown_initial_state.counter_resolver], null);
book.demos.pre_merge.countdown_initial_state.default_count = (5);

var options__72617__auto___89753 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$pre_merge$countdown_initial_state$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),new cljs.core.Keyword("ui","id","ui/id",-1388397664).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_initial_state$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),new cljs.core.Keyword("ui","count","ui/count",2139919329)], null);
}),new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),(function (p__89706){
var map__89707 = p__89706;
var map__89707__$1 = (((((!((map__89707 == null))))?(((((map__89707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89707):map__89707);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89707__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89707__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),cljs.core.random_uuid(),new cljs.core.Keyword("ui","count","ui/count",2139919329),book.demos.pre_merge.countdown_initial_state.default_count], null),current_normalized,data_tree], 0));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_initial_state$render_CountdownButton(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89709 = com.fulcrologic.fulcro.components.props(this$);
var map__89709__$1 = (((((!((map__89709 == null))))?(((((map__89709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89709):map__89709);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89709__$1,new cljs.core.Keyword("ui","count","ui/count",2139919329));
var done_QMARK_ = (count === (0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),done_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (done_QMARK_,map__89709,map__89709__$1,count){
return (function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","count","ui/count",2139919329),(count - (1)));
});})(done_QMARK_,map__89709,map__89709__$1,count))
], null),com.fulcrologic.fulcro.components.force_children(((done_QMARK_)?"Done!":cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_initial_state !== 'undefined') && (typeof book.demos.pre_merge.countdown_initial_state.CountdownButton !== 'undefined')){
} else {
book.demos.pre_merge.countdown_initial_state.CountdownButton = ((function (options__72617__auto___89753){
return (function book$demos$pre_merge$countdown_initial_state$CountdownButton(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89753,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89754)){
var init_state__72620__auto___89755 = temp__5733__auto___89754;
this__72619__auto__.state = (function (){var obj89712 = ({"fulcro$state":(function (){var G__89713 = this__72619__auto__;
var G__89714 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89755.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89755.cljs$core$IFn$_invoke$arity$2(G__89713,G__89714) : init_state__72620__auto___89755.call(null,G__89713,G__89714));
})()});
return obj89712;
})();
} else {
this__72619__auto__.state = (function (){var obj89716 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89716;
})();
}

return null;
});})(options__72617__auto___89753))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_initial_state.CountdownButton,new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","CountdownButton","book.demos.pre-merge.countdown-initial-state/CountdownButton",1595297133),options__72617__auto___89753);
book.demos.pre_merge.countdown_initial_state.ui_countdown_button = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_initial_state.CountdownButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041)], null));

var options__72617__auto___89756 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$pre_merge$countdown_initial_state$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_initial_state$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-label","book.demos.pre-merge.countdown-initial-state/counter-label",166896912),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-initial","book.demos.pre-merge.countdown-initial-state/counter-initial",314374343),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","counter","ui/counter",804010813),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.pre_merge.countdown_initial_state.CountdownButton)], null)], null);
}),new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),(function (p__89717){
var map__89718 = p__89717;
var map__89718__$1 = (((((!((map__89718 == null))))?(((((map__89718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89718):map__89718);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89718__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89718__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var initial = com.fulcrologic.fulcro.algorithms.merge.nilify_not_found(new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-initial","book.demos.pre-merge.countdown-initial-state/counter-initial",314374343).cljs$core$IFn$_invoke$arity$1(data_tree));
try{var result__50341__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","counter","ui/counter",804010813),(function (){var G__89725 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(initial)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89725,new cljs.core.Keyword("ui","count","ui/count",2139919329),initial);
} else {
return G__89725;
}
})()], null),current_normalized,data_tree], 0));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.demos.pre-merge.countdown-initial-state",null,58,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__50341__auto__,initial,map__89718,map__89718__$1,current_normalized,data_tree){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","counter","ui/counter",804010813),cljs.core.list(new cljs.core.Symbol(null,"cond->","cond->",561741875,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"initial","initial",-799787555,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("ui","count","ui/count",2139919329),new cljs.core.Symbol(null,"initial","initial",-799787555,null)))], null),new cljs.core.Symbol(null,"current-normalized","current-normalized",-1802712045,null),new cljs.core.Symbol(null,"data-tree","data-tree",-1343268187,null)),"=>",result__50341__auto__], null);
});})(result__50341__auto__,initial,map__89718,map__89718__$1,current_normalized,data_tree))
,null)),null,1369617042);

return result__50341__auto__;
}catch (e89724){if((e89724 instanceof Error)){
var e__50288__auto__ = e89724;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"book.demos.pre-merge.countdown-initial-state",null,58,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__50288__auto__,initial,map__89718,map__89718__$1,current_normalized,data_tree){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__50288__auto__], null);
});})(e__50288__auto__,initial,map__89718,map__89718__$1,current_normalized,data_tree))
,null)),null,1173161842);

throw e__50288__auto__;
} else {
throw e89724;

}
}}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_initial_state$render_Countdown(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89726 = com.fulcrologic.fulcro.components.props(this$);
var map__89726__$1 = (((((!((map__89726 == null))))?(((((map__89726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89726):map__89726);
var counter_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89726__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-label","book.demos.pre-merge.countdown-initial-state/counter-label",166896912));
var counter_initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89726__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-initial","book.demos.pre-merge.countdown-initial-state/counter-initial",314374343));
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89726__$1,new cljs.core.Keyword("ui","counter","ui/counter",804010813));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter_label)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = counter_initial;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return book.demos.pre_merge.countdown_initial_state.default_count;
}
})()),"]"].join('')], null),null),com.fulcrologic.fulcro.components.force_children((book.demos.pre_merge.countdown_initial_state.ui_countdown_button.cljs$core$IFn$_invoke$arity$1 ? book.demos.pre_merge.countdown_initial_state.ui_countdown_button.cljs$core$IFn$_invoke$arity$1(counter) : book.demos.pre_merge.countdown_initial_state.ui_countdown_button.call(null,counter)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_initial_state !== 'undefined') && (typeof book.demos.pre_merge.countdown_initial_state.Countdown !== 'undefined')){
} else {
book.demos.pre_merge.countdown_initial_state.Countdown = ((function (options__72617__auto___89756){
return (function book$demos$pre_merge$countdown_initial_state$Countdown(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89756,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89785)){
var init_state__72620__auto___89786 = temp__5733__auto___89785;
this__72619__auto__.state = (function (){var obj89729 = ({"fulcro$state":(function (){var G__89730 = this__72619__auto__;
var G__89731 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89786.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89786.cljs$core$IFn$_invoke$arity$2(G__89730,G__89731) : init_state__72620__auto___89786.call(null,G__89730,G__89731));
})()});
return obj89729;
})();
} else {
this__72619__auto__.state = (function (){var obj89733 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89733;
})();
}

return null;
});})(options__72617__auto___89756))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_initial_state.Countdown,new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","Countdown","book.demos.pre-merge.countdown-initial-state/Countdown",1544432466),options__72617__auto___89756);
book.demos.pre_merge.countdown_initial_state.ui_countdown = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_initial_state.Countdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041)], null));

var options__72617__auto___89790 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$pre_merge$countdown_initial_state$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","all-counters","book.demos.pre-merge.countdown-initial-state/all-counters",-545825531),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041),com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-label","book.demos.pre-merge.countdown-initial-state/counter-label",166896912),"X"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041),com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-label","book.demos.pre-merge.countdown-initial-state/counter-label",166896912),"Y"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-id","book.demos.pre-merge.countdown-initial-state/counter-id",-970612041),com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-label","book.demos.pre-merge.countdown-initial-state/counter-label",166896912),"Z",new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","counter-initial","book.demos.pre-merge.countdown-initial-state/counter-initial",314374343),(9)], null)], null)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_initial_state$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","all-counters","book.demos.pre-merge.countdown-initial-state/all-counters",-545825531),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.pre_merge.countdown_initial_state.Countdown)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_initial_state$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89735 = com.fulcrologic.fulcro.components.props(this$);
var map__89735__$1 = (((((!((map__89735 == null))))?(((((map__89735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89735):map__89735);
var all_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89735__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","all-counters","book.demos.pre-merge.countdown-initial-state/all-counters",-545825531));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Counters"]),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(all_counters))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "alignItems": "center", "justifyContent": "space-between"})}),com.fulcrologic.fulcro.components.force_children(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_initial_state.ui_countdown,all_counters))]):null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_initial_state !== 'undefined') && (typeof book.demos.pre_merge.countdown_initial_state.Root !== 'undefined')){
} else {
book.demos.pre_merge.countdown_initial_state.Root = ((function (options__72617__auto___89790){
return (function book$demos$pre_merge$countdown_initial_state$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89790,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89814)){
var init_state__72620__auto___89815 = temp__5733__auto___89814;
this__72619__auto__.state = (function (){var obj89744 = ({"fulcro$state":(function (){var G__89745 = this__72619__auto__;
var G__89746 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89815.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89815.cljs$core$IFn$_invoke$arity$2(G__89745,G__89746) : init_state__72620__auto___89815.call(null,G__89745,G__89746));
})()});
return obj89744;
})();
} else {
this__72619__auto__.state = (function (){var obj89748 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89748;
})();
}

return null;
});})(options__72617__auto___89790))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_initial_state.Root,new cljs.core.Keyword("book.demos.pre-merge.countdown-initial-state","Root","book.demos.pre-merge.countdown-initial-state/Root",1631747447),options__72617__auto___89790);

//# sourceMappingURL=book.demos.pre_merge.countdown_initial_state.js.map
