goog.provide('book.demos.pre_merge.countdown_extracted');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('book.demos.util');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.wsscode.pathom.connect');
book.demos.pre_merge.countdown_extracted.all_counters = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-id","book.demos.pre-merge.countdown-extracted/counter-id",2125797919),(1),new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-label","book.demos.pre-merge.countdown-extracted/counter-label",1279462824),"A"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-id","book.demos.pre-merge.countdown-extracted/counter-id",2125797919),(2),new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-label","book.demos.pre-merge.countdown-extracted/counter-label",1279462824),"B",new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-initial","book.demos.pre-merge.countdown-extracted/counter-initial",-817008465),(10)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-id","book.demos.pre-merge.countdown-extracted/counter-id",2125797919),(3),new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-label","book.demos.pre-merge.countdown-extracted/counter-label",1279462824),"C",new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-initial","book.demos.pre-merge.countdown-extracted/counter-initial",-817008465),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-id","book.demos.pre-merge.countdown-extracted/counter-id",2125797919),(4),new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-label","book.demos.pre-merge.countdown-extracted/counter-label",1279462824),"D"], null)], null);
book.demos.pre_merge.countdown_extracted.counter_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.pre-merge.countdown-extracted","counter-resolver","book.demos.pre-merge.countdown-extracted/counter-resolver",-1079442918,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","all-counters","book.demos.pre-merge.countdown-extracted/all-counters",-1561930147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-id","book.demos.pre-merge.countdown-extracted/counter-id",2125797919),new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-label","book.demos.pre-merge.countdown-extracted/counter-label",1279462824)], null)], null)], null)], null),(function book$demos$pre_merge$countdown_extracted$counter_resolver(env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","all-counters","book.demos.pre-merge.countdown-extracted/all-counters",-1561930147),book.demos.pre_merge.countdown_extracted.all_counters], null);
}));
book.demos.pre_merge.countdown_extracted.resolvers = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.demos.pre_merge.countdown_extracted.counter_resolver], null);
book.demos.pre_merge.countdown_extracted.default_count = (5);

var options__72617__auto___89799 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$pre_merge$countdown_extracted$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),new cljs.core.Keyword("ui","id","ui/id",-1388397664).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_extracted$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),new cljs.core.Keyword("ui","count","ui/count",2139919329)], null);
}),new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),(function (p__89720){
var map__89721 = p__89720;
var map__89721__$1 = (((((!((map__89721 == null))))?(((((map__89721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89721):map__89721);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89721__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89721__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),cljs.core.random_uuid(),new cljs.core.Keyword("ui","count","ui/count",2139919329),book.demos.pre_merge.countdown_extracted.default_count], null),current_normalized,data_tree], 0));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_extracted$render_CountdownButton(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89723 = com.fulcrologic.fulcro.components.props(this$);
var map__89723__$1 = (((((!((map__89723 == null))))?(((((map__89723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89723):map__89723);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89723__$1,new cljs.core.Keyword("ui","count","ui/count",2139919329));
var done_QMARK_ = (count === (0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),done_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (done_QMARK_,map__89723,map__89723__$1,count){
return (function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","count","ui/count",2139919329),(count - (1)));
});})(done_QMARK_,map__89723,map__89723__$1,count))
], null),com.fulcrologic.fulcro.components.force_children(((done_QMARK_)?"Done!":cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_extracted !== 'undefined') && (typeof book.demos.pre_merge.countdown_extracted.CountdownButton !== 'undefined')){
} else {
book.demos.pre_merge.countdown_extracted.CountdownButton = ((function (options__72617__auto___89799){
return (function book$demos$pre_merge$countdown_extracted$CountdownButton(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89799,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89802)){
var init_state__72620__auto___89803 = temp__5733__auto___89802;
this__72619__auto__.state = (function (){var obj89738 = ({"fulcro$state":(function (){var G__89739 = this__72619__auto__;
var G__89740 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89803.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89803.cljs$core$IFn$_invoke$arity$2(G__89739,G__89740) : init_state__72620__auto___89803.call(null,G__89739,G__89740));
})()});
return obj89738;
})();
} else {
this__72619__auto__.state = (function (){var obj89742 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89742;
})();
}

return null;
});})(options__72617__auto___89799))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_extracted.CountdownButton,new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","CountdownButton","book.demos.pre-merge.countdown-extracted/CountdownButton",1004070165),options__72617__auto___89799);
book.demos.pre_merge.countdown_extracted.ui_countdown_button = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_extracted.CountdownButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-id","book.demos.pre-merge.countdown-extracted/counter-id",2125797919)], null));

var options__72617__auto___89804 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$pre_merge$countdown_extracted$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-id","book.demos.pre-merge.countdown-extracted/counter-id",2125797919),new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-id","book.demos.pre-merge.countdown-extracted/counter-id",2125797919).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_extracted$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-id","book.demos.pre-merge.countdown-extracted/counter-id",2125797919),new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-label","book.demos.pre-merge.countdown-extracted/counter-label",1279462824),new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-initial","book.demos.pre-merge.countdown-extracted/counter-initial",-817008465),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","counter","ui/counter",804010813),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.pre_merge.countdown_extracted.CountdownButton)], null)], null);
}),new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),(function (p__89749){
var map__89750 = p__89749;
var map__89750__$1 = (((((!((map__89750 == null))))?(((((map__89750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89750):map__89750);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89750__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89750__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var initial = com.fulcrologic.fulcro.algorithms.merge.nilify_not_found(new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-initial","book.demos.pre-merge.countdown-extracted/counter-initial",-817008465).cljs$core$IFn$_invoke$arity$1(data_tree));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","counter","ui/counter",804010813),(function (){var G__89752 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(initial)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89752,new cljs.core.Keyword("ui","count","ui/count",2139919329),initial);
} else {
return G__89752;
}
})()], null),current_normalized,data_tree], 0));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_extracted$render_Countdown(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89757 = com.fulcrologic.fulcro.components.props(this$);
var map__89757__$1 = (((((!((map__89757 == null))))?(((((map__89757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89757):map__89757);
var counter_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89757__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-label","book.demos.pre-merge.countdown-extracted/counter-label",1279462824));
var counter_initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89757__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-initial","book.demos.pre-merge.countdown-extracted/counter-initial",-817008465));
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89757__$1,new cljs.core.Keyword("ui","counter","ui/counter",804010813));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter_label)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = counter_initial;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return book.demos.pre_merge.countdown_extracted.default_count;
}
})()),"]"].join('')], null),null),com.fulcrologic.fulcro.components.force_children((book.demos.pre_merge.countdown_extracted.ui_countdown_button.cljs$core$IFn$_invoke$arity$1 ? book.demos.pre_merge.countdown_extracted.ui_countdown_button.cljs$core$IFn$_invoke$arity$1(counter) : book.demos.pre_merge.countdown_extracted.ui_countdown_button.call(null,counter)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_extracted !== 'undefined') && (typeof book.demos.pre_merge.countdown_extracted.Countdown !== 'undefined')){
} else {
book.demos.pre_merge.countdown_extracted.Countdown = ((function (options__72617__auto___89804){
return (function book$demos$pre_merge$countdown_extracted$Countdown(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89804,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89827)){
var init_state__72620__auto___89828 = temp__5733__auto___89827;
this__72619__auto__.state = (function (){var obj89776 = ({"fulcro$state":(function (){var G__89777 = this__72619__auto__;
var G__89778 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89828.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89828.cljs$core$IFn$_invoke$arity$2(G__89777,G__89778) : init_state__72620__auto___89828.call(null,G__89777,G__89778));
})()});
return obj89776;
})();
} else {
this__72619__auto__.state = (function (){var obj89780 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89780;
})();
}

return null;
});})(options__72617__auto___89804))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_extracted.Countdown,new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","Countdown","book.demos.pre-merge.countdown-extracted/Countdown",394180538),options__72617__auto___89804);
book.demos.pre_merge.countdown_extracted.ui_countdown = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_extracted.Countdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","counter-id","book.demos.pre-merge.countdown-extracted/counter-id",2125797919)], null));

var options__72617__auto___89830 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$pre_merge$countdown_extracted$build_raw_initial_state_STAR_(_){
return cljs.core.PersistentArrayMap.EMPTY;
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$pre_merge$countdown_extracted$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","all-counters","book.demos.pre-merge.countdown-extracted/all-counters",-1561930147),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.pre_merge.countdown_extracted.Countdown)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$pre_merge$countdown_extracted$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89783 = com.fulcrologic.fulcro.components.props(this$);
var map__89783__$1 = (((((!((map__89783 == null))))?(((((map__89783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89783):map__89783);
var all_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89783__$1,new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","all-counters","book.demos.pre-merge.countdown-extracted/all-counters",-1561930147));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Counters"]),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(all_counters))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "alignItems": "center", "justifyContent": "space-between"})}),com.fulcrologic.fulcro.components.force_children(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(book.demos.pre_merge.countdown_extracted.ui_countdown,all_counters))]):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89783,map__89783__$1,all_counters){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","all-counters","book.demos.pre-merge.countdown-extracted/all-counters",-1561930147),book.demos.pre_merge.countdown_extracted.Countdown);
});})(map__89783,map__89783__$1,all_counters))
], null),"Load many counters"], null),null)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.pre_merge !== 'undefined') && (typeof book.demos.pre_merge.countdown_extracted !== 'undefined') && (typeof book.demos.pre_merge.countdown_extracted.Root !== 'undefined')){
} else {
book.demos.pre_merge.countdown_extracted.Root = ((function (options__72617__auto___89830){
return (function book$demos$pre_merge$countdown_extracted$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89830,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89831)){
var init_state__72620__auto___89832 = temp__5733__auto___89831;
this__72619__auto__.state = (function (){var obj89793 = ({"fulcro$state":(function (){var G__89794 = this__72619__auto__;
var G__89795 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89832.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89832.cljs$core$IFn$_invoke$arity$2(G__89794,G__89795) : init_state__72620__auto___89832.call(null,G__89794,G__89795));
})()});
return obj89793;
})();
} else {
this__72619__auto__.state = (function (){var obj89797 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89797;
})();
}

return null;
});})(options__72617__auto___89830))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.pre_merge.countdown_extracted.Root,new cljs.core.Keyword("book.demos.pre-merge.countdown-extracted","Root","book.demos.pre-merge.countdown-extracted/Root",617809023),options__72617__auto___89830);

//# sourceMappingURL=book.demos.pre_merge.countdown_extracted.js.map
