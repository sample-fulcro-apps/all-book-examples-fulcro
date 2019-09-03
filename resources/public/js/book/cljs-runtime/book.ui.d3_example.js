goog.provide('book.ui.d3_example');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.dom');
var module$node_modules$d3$dist$d3_node=shadow.js.require("module$node_modules$d3$dist$d3_node", {});
goog.require('goog.object');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.components');
book.ui.d3_example.render_squares = (function book$ui$d3_example$render_squares(dom_node,props){
var svg = module$node_modules$d3$dist$d3_node.select(dom_node);
var data = cljs.core.clj__GT_js(new cljs.core.Keyword(null,"squares","squares",-888257629).cljs$core$IFn$_invoke$arity$1(props));
var selection = svg.selectAll("rect").data(data,((function (svg,data){
return (function (d){
return d.id;
});})(svg,data))
);
selection.enter().append("rect").style("fill",((function (svg,data,selection){
return (function (d){
return d.color;
});})(svg,data,selection))
).attr("x","0").attr("y","0").transition().attr("x",((function (svg,data,selection){
return (function (d){
return d.x;
});})(svg,data,selection))
).attr("y",((function (svg,data,selection){
return (function (d){
return d.y;
});})(svg,data,selection))
).attr("width",((function (svg,data,selection){
return (function (d){
return d.size;
});})(svg,data,selection))
).attr("height",((function (svg,data,selection){
return (function (d){
return d.size;
});})(svg,data,selection))
);

selection.exit().transition().style("opacity","0").remove();

return false;
});

var options__72617__auto___80883 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var temp__5735__auto__ = goog.object.get(this$,"svg");
if(cljs.core.truth_(temp__5735__auto__)){
var dom_node = temp__5735__auto__;
return book.ui.d3_example.render_squares(dom_node,com.fulcrologic.fulcro.components.props(this$));
} else {
return null;
}
}),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (this$,next_props,next_state){
var temp__5735__auto___80886 = goog.object.get(this$,"svg");
if(cljs.core.truth_(temp__5735__auto___80886)){
var dom_node_80887 = temp__5735__auto___80886;
book.ui.d3_example.render_squares(dom_node_80887,next_props);
} else {
}

return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui$d3_example$render_D3Thing(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgb(240,240,240)"], null),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"ref","ref",1289896967),((function (props){
return (function (r){
return goog.object.set(this$,"svg",r);
});})(props))
,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 1000 1000"], null)], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui !== 'undefined') && (typeof book.ui.d3_example !== 'undefined') && (typeof book.ui.d3_example.D3Thing !== 'undefined')){
} else {
book.ui.d3_example.D3Thing = ((function (options__72617__auto___80883){
return (function book$ui$d3_example$D3Thing(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___80893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___80883,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___80893)){
var init_state__72620__auto___80894 = temp__5733__auto___80893;
this__72619__auto__.state = (function (){var obj80828 = ({"fulcro$state":(function (){var G__80830 = this__72619__auto__;
var G__80831 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___80894.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___80894.cljs$core$IFn$_invoke$arity$2(G__80830,G__80831) : init_state__72620__auto___80894.call(null,G__80830,G__80831));
})()});
return obj80828;
})();
} else {
this__72619__auto__.state = (function (){var obj80833 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj80833;
})();
}

return null;
});})(options__72617__auto___80883))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui.d3_example.D3Thing,new cljs.core.Keyword("book.ui.d3-example","D3Thing","book.ui.d3-example/D3Thing",-1035203387),options__72617__auto___80883);
book.ui.d3_example.d3_thing = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui.d3_example.D3Thing);
book.ui.d3_example.random_square = (function book$ui$d3_example$random_square(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.rand_int((10000000)),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int((900)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int((900)),new cljs.core.Keyword(null,"size","size",1098693007),((50) + cljs.core.rand_int((300))),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var G__80835 = cljs.core.rand_int((5));
switch (G__80835) {
case (0):
return "yellow";

break;
case (1):
return "green";

break;
case (2):
return "orange";

break;
case (3):
return "blue";

break;
case (4):
return "black";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80835)].join('')));

}
})()], null);
});
/**
 * 
 */
book.ui.d3_example.add_square = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.ui.d3-example","add-square","book.ui.d3-example/add-square",-2097150236,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.ui.d3-example","add-square","book.ui.d3-example/add-square",-2097150236,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (params){
return (function book$ui$d3_example$action(p__80847){
var map__80848 = p__80847;
var map__80848__$1 = (((((!((map__80848 == null))))?(((((map__80848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80848):map__80848);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80848__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"squares","squares",-888257629),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([book.ui.d3_example.random_square()], 0));

return null;
});})(params))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (params){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(params))
], null);
}));
/**
 * 
 */
book.ui.d3_example.clear_squares = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.ui.d3-example","clear-squares","book.ui.d3-example/clear-squares",-1467696284,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.ui.d3-example","clear-squares","book.ui.d3-example/clear-squares",-1467696284,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (params){
return (function book$ui$d3_example$action(p__80856){
var map__80857 = p__80856;
var map__80857__$1 = (((((!((map__80857 == null))))?(((((map__80857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80857):map__80857);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80857__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"squares","squares",-888257629),cljs.core.PersistentVector.EMPTY);

return null;
});})(params))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (params){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(params))
], null);
}));

var options__72617__auto___80905 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui$d3_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"squares","squares",-888257629)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui$d3_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"squares","squares",-888257629),cljs.core.PersistentVector.EMPTY], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui$d3_example$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.ui.d3-example","add-square","book.ui.d3-example/add-square",-2097150236,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(props))
], null),"Add Random Square"], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.ui.d3-example","clear-squares","book.ui.d3-example/clear-squares",-1467696284,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(props))
], null),"Clear"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["br",({})])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["br",({})])),com.fulcrologic.fulcro.components.force_children((book.ui.d3_example.d3_thing.cljs$core$IFn$_invoke$arity$1 ? book.ui.d3_example.d3_thing.cljs$core$IFn$_invoke$arity$1(props) : book.ui.d3_example.d3_thing.call(null,props)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui !== 'undefined') && (typeof book.ui.d3_example !== 'undefined') && (typeof book.ui.d3_example.Root !== 'undefined')){
} else {
book.ui.d3_example.Root = ((function (options__72617__auto___80905){
return (function book$ui$d3_example$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___80908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___80905,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___80908)){
var init_state__72620__auto___80909 = temp__5733__auto___80908;
this__72619__auto__.state = (function (){var obj80871 = ({"fulcro$state":(function (){var G__80872 = this__72619__auto__;
var G__80873 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___80909.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___80909.cljs$core$IFn$_invoke$arity$2(G__80872,G__80873) : init_state__72620__auto___80909.call(null,G__80872,G__80873));
})()});
return obj80871;
})();
} else {
this__72619__auto__.state = (function (){var obj80875 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj80875;
})();
}

return null;
});})(options__72617__auto___80905))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui.d3_example.Root,new cljs.core.Keyword("book.ui.d3-example","Root","book.ui.d3-example/Root",1937923423),options__72617__auto___80905);

//# sourceMappingURL=book.ui.d3_example.js.map
