goog.provide('book.merge_component');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.fulcrologic.fulcro.algorithms.merge');

var options__72617__auto___87286 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$merge_component$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("counter","id","counter/id",1684014168),new cljs.core.Keyword("counter","n","counter/n",-94887315)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$merge_component$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("counter","by-id","counter/by-id",-671512505),new cljs.core.Keyword("counter","id","counter/id",1684014168).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$merge_component$render_Counter(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__87247 = com.fulcrologic.fulcro.components.props(this$);
var map__87247__$1 = (((((!((map__87247 == null))))?(((((map__87247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87247):map__87247);
var props = map__87247__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87247__$1,new cljs.core.Keyword("counter","id","counter/id",1684014168));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87247__$1,new cljs.core.Keyword("counter","n","counter/n",-94887315));
var map__87248 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__87248__$1 = (((((!((map__87248 == null))))?(((((map__87248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87248):map__87248);
var computed = map__87248__$1;
var onClick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87248__$1,new cljs.core.Keyword(null,"onClick","onClick",-1991238530));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Current count for counter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),":  "].join('')], null),new cljs.core.Keyword(null,".counter-label",".counter-label",-62507576)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),new cljs.core.Keyword(null,".counter-value",".counter-value",1016180010))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__87247,map__87247__$1,props,id,n,map__87248,map__87248__$1,computed,onClick){
return (function (){
return (onClick.cljs$core$IFn$_invoke$arity$1 ? onClick.cljs$core$IFn$_invoke$arity$1(id) : onClick.call(null,id));
});})(map__87247,map__87247__$1,props,id,n,map__87248,map__87248__$1,computed,onClick))
], null),"Increment"], null),null))], null),new cljs.core.Keyword(null,".counter",".counter",-2093164384));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.merge_component !== 'undefined') && (typeof book.merge_component.Counter !== 'undefined')){
} else {
book.merge_component.Counter = ((function (options__72617__auto___87286){
return (function book$merge_component$Counter(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___87287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___87286,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___87287)){
var init_state__72620__auto___87288 = temp__5733__auto___87287;
this__72619__auto__.state = (function (){var obj87252 = ({"fulcro$state":(function (){var G__87253 = this__72619__auto__;
var G__87254 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___87288.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___87288.cljs$core$IFn$_invoke$arity$2(G__87253,G__87254) : init_state__72620__auto___87288.call(null,G__87253,G__87254));
})()});
return obj87252;
})();
} else {
this__72619__auto__.state = (function (){var obj87256 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj87256;
})();
}

return null;
});})(options__72617__auto___87286))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.merge_component.Counter,new cljs.core.Keyword("book.merge-component","Counter","book.merge-component/Counter",1139606363),options__72617__auto___87286);
book.merge_component.ui_counter = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.merge_component.Counter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("counter","id","counter/id",1684014168)], null));
/**
 * Increment a counter with ID counter-id in a Fulcro database.
 */
book.merge_component.increment_counter_STAR_ = (function book$merge_component$increment_counter_STAR_(database,counter_id){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(database,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("counter","by-id","counter/by-id",-671512505),counter_id,new cljs.core.Keyword("counter","n","counter/n",-94887315)], null),cljs.core.inc);
});
/**
 * 
 */
book.merge_component.increment_counter = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.merge-component","increment-counter","book.merge-component/increment-counter",405867226,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.merge-component","increment-counter","book.merge-component/increment-counter",405867226,null),(function (fulcro_mutation_env_symbol){
var map__87257 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__87257__$1 = (((((!((map__87257 == null))))?(((((map__87257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87257):map__87257);
var params = map__87257__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87257__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),((function (map__87257,map__87257__$1,params,id){
return (function book$merge_component$remote(env){
return true;
});})(map__87257,map__87257__$1,params,id))
,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__87257,map__87257__$1,params,id){
return (function book$merge_component$action(p__87259){
var map__87260 = p__87259;
var map__87260__$1 = (((((!((map__87260 == null))))?(((((map__87260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87260):map__87260);
var env = map__87260__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87260__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,book.merge_component.increment_counter_STAR_,id);

return null;
});})(map__87257,map__87257__$1,params,id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__87257,map__87257__$1,params,id){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__87257,map__87257__$1,params,id))
], null);
}));

var options__72617__auto___87289 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$merge_component$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.PersistentVector.EMPTY], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$merge_component$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counters","counters",33475982),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.merge_component.Counter)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$merge_component$ident_STAR_(this$,p__87264){
var map__87265 = p__87264;
var map__87265__$1 = (((((!((map__87265 == null))))?(((((map__87265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87265):map__87265);
var counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87265__$1,new cljs.core.Keyword(null,"counters","counters",33475982));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("panels","by-kw","panels/by-kw",746732117),new cljs.core.Keyword(null,"counter","counter",804008177)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$merge_component$render_CounterPanel(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__87267 = com.fulcrologic.fulcro.components.props(this$);
var map__87267__$1 = (((((!((map__87267 == null))))?(((((map__87267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87267):map__87267);
var counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87267__$1,new cljs.core.Keyword(null,"counters","counters",33475982));
var click_callback = ((function (map__87267,map__87267__$1,counters){
return (function (id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.merge-component","increment-counter","book.merge-component/increment-counter",405867226,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",-1388402092),null,(1),null)),(new cljs.core.List(null,id,null,(1),null)))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("counter","by-id","counter/by-id",-671512505),null,(1),null)))))));
});})(map__87267,map__87267__$1,counters))
;
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["style",({}),".counter { width: 400px; padding-bottom: 20px; }\n                  button { margin-left: 10px; }"]),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (click_callback,map__87267,map__87267__$1,counters){
return (function (p1__87263_SHARP_){
var G__87269 = com.fulcrologic.fulcro.components.computed(p1__87263_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),click_callback], null));
return (book.merge_component.ui_counter.cljs$core$IFn$_invoke$arity$1 ? book.merge_component.ui_counter.cljs$core$IFn$_invoke$arity$1(G__87269) : book.merge_component.ui_counter.call(null,G__87269));
});})(click_callback,map__87267,map__87267__$1,counters))
,counters))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.merge_component !== 'undefined') && (typeof book.merge_component.CounterPanel !== 'undefined')){
} else {
book.merge_component.CounterPanel = ((function (options__72617__auto___87289){
return (function book$merge_component$CounterPanel(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___87291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___87289,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___87291)){
var init_state__72620__auto___87292 = temp__5733__auto___87291;
this__72619__auto__.state = (function (){var obj87271 = ({"fulcro$state":(function (){var G__87272 = this__72619__auto__;
var G__87273 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___87292.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___87292.cljs$core$IFn$_invoke$arity$2(G__87272,G__87273) : init_state__72620__auto___87292.call(null,G__87272,G__87273));
})()});
return obj87271;
})();
} else {
this__72619__auto__.state = (function (){var obj87275 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj87275;
})();
}

return null;
});})(options__72617__auto___87289))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.merge_component.CounterPanel,new cljs.core.Keyword("book.merge-component","CounterPanel","book.merge-component/CounterPanel",83958846),options__72617__auto___87289);
book.merge_component.ui_counter_panel = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.merge_component.CounterPanel);
if((typeof book !== 'undefined') && (typeof book.merge_component !== 'undefined') && (typeof book.merge_component.timer_id !== 'undefined')){
} else {
book.merge_component.timer_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * NOTE: A function callable from anywhere as long as you have a reconciler...
 */
book.merge_component.add_counter = (function book$merge_component$add_counter(app,counter){
return com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,book.merge_component.Counter,counter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("panels","by-kw","panels/by-kw",746732117),new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"counters","counters",33475982)], null)], 0));
});

var options__72617__auto___87293 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$merge_component$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel","panel",-558637456),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.merge_component.CounterPanel)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$merge_component$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel","panel",-558637456),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel","panel",-558637456),book.merge_component.CounterPanel], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$merge_component$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__87277 = com.fulcrologic.fulcro.components.props(this$);
var map__87277__$1 = (((((!((map__87277 == null))))?(((((map__87277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87277):map__87277);
var panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87277__$1,new cljs.core.Keyword(null,"panel","panel",-558637456));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"border": "1px solid black"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__87277,map__87277__$1,panel){
return (function (){
return book.merge_component.add_counter(com.fulcrologic.fulcro.components.any__GT_app(this$),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("counter","id","counter/id",1684014168),(4),new cljs.core.Keyword("counter","n","counter/n",-94887315),(22)], null));
});})(map__87277,map__87277__$1,panel))
], null),"Simulate Data Import"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["hr",({})])),"Counters:",com.fulcrologic.fulcro.components.force_children((book.merge_component.ui_counter_panel.cljs$core$IFn$_invoke$arity$1 ? book.merge_component.ui_counter_panel.cljs$core$IFn$_invoke$arity$1(panel) : book.merge_component.ui_counter_panel.call(null,panel)))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.merge_component !== 'undefined') && (typeof book.merge_component.Root !== 'undefined')){
} else {
book.merge_component.Root = ((function (options__72617__auto___87293){
return (function book$merge_component$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___87294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___87293,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___87294)){
var init_state__72620__auto___87296 = temp__5733__auto___87294;
this__72619__auto__.state = (function (){var obj87281 = ({"fulcro$state":(function (){var G__87282 = this__72619__auto__;
var G__87283 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___87296.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___87296.cljs$core$IFn$_invoke$arity$2(G__87282,G__87283) : init_state__72620__auto___87296.call(null,G__87282,G__87283));
})()});
return obj87281;
})();
} else {
this__72619__auto__.state = (function (){var obj87285 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj87285;
})();
}

return null;
});})(options__72617__auto___87293))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.merge_component.Root,new cljs.core.Keyword("book.merge-component","Root","book.merge-component/Root",268003261),options__72617__auto___87293);

//# sourceMappingURL=book.merge_component.js.map
