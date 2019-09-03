goog.provide('book.server.morphing_example');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('book.macros');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.algorithms.normalize');
goog.require('com.fulcrologic.fulcro.algorithms.merge');

var options__72617__auto___88526 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$server$morphing_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("category","name","category/name",1793490219)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$server$morphing_example$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("categories","by-id","categories/by-id",-884369241),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$server$morphing_example$render_CategoryQuery(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return null;
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.server !== 'undefined') && (typeof book.server.morphing_example !== 'undefined') && (typeof book.server.morphing_example.CategoryQuery !== 'undefined')){
} else {
book.server.morphing_example.CategoryQuery = ((function (options__72617__auto___88526){
return (function book$server$morphing_example$CategoryQuery(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88526,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88527)){
var init_state__72620__auto___88528 = temp__5733__auto___88527;
this__72619__auto__.state = (function (){var obj88473 = ({"fulcro$state":(function (){var G__88474 = this__72619__auto__;
var G__88475 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88528.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88528.cljs$core$IFn$_invoke$arity$2(G__88474,G__88475) : init_state__72620__auto___88528.call(null,G__88474,G__88475));
})()});
return obj88473;
})();
} else {
this__72619__auto__.state = (function (){var obj88477 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88477;
})();
}

return null;
});})(options__72617__auto___88526))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.server.morphing_example.CategoryQuery,new cljs.core.Keyword("book.server.morphing-example","CategoryQuery","book.server.morphing-example/CategoryQuery",1877059629),options__72617__auto___88526);

var options__72617__auto___88529 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$server$morphing_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","name","item/name",1849015102),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","category","item/category",-596403133),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.server.morphing_example.CategoryQuery)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$server$morphing_example$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("items","by-id","items/by-id",-2096040189),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$server$morphing_example$render_ItemQuery(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return null;
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.server !== 'undefined') && (typeof book.server.morphing_example !== 'undefined') && (typeof book.server.morphing_example.ItemQuery !== 'undefined')){
} else {
book.server.morphing_example.ItemQuery = ((function (options__72617__auto___88529){
return (function book$server$morphing_example$ItemQuery(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88529,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88530)){
var init_state__72620__auto___88531 = temp__5733__auto___88530;
this__72619__auto__.state = (function (){var obj88479 = ({"fulcro$state":(function (){var G__88480 = this__72619__auto__;
var G__88481 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88531.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88531.cljs$core$IFn$_invoke$arity$2(G__88480,G__88481) : init_state__72620__auto___88531.call(null,G__88480,G__88481));
})()});
return obj88479;
})();
} else {
this__72619__auto__.state = (function (){var obj88483 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88483;
})();
}

return null;
});})(options__72617__auto___88529))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.server.morphing_example.ItemQuery,new cljs.core.Keyword("book.server.morphing-example","ItemQuery","book.server.morphing-example/ItemQuery",957199463),options__72617__auto___88529);
book.server.morphing_example.sample_server_response = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-items","all-items",1467247308),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(5),new cljs.core.Keyword("item","name","item/name",1849015102),"item-42",new cljs.core.Keyword("item","category","item/category",-596403133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("category","name","category/name",1793490219),"A"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(6),new cljs.core.Keyword("item","name","item/name",1849015102),"item-92",new cljs.core.Keyword("item","category","item/category",-596403133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("category","name","category/name",1793490219),"A"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(7),new cljs.core.Keyword("item","name","item/name",1849015102),"item-32",new cljs.core.Keyword("item","category","item/category",-596403133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("category","name","category/name",1793490219),"A"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(8),new cljs.core.Keyword("item","name","item/name",1849015102),"item-52",new cljs.core.Keyword("item","category","item/category",-596403133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2),new cljs.core.Keyword("category","name","category/name",1793490219),"B"], null)], null)], null)], null);
book.server.morphing_example.component_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-items","all-items",1467247308),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.server.morphing_example.ItemQuery)], null)], null);
book.server.morphing_example.hand_written_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-items","all-items",1467247308),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","name","item/name",1849015102),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","category","item/category",-596403133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("category","name","category/name",1793490219)], null)], null)], null)], null)], null);

var options__72617__auto___88533 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$server$morphing_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","name","item/name",1849015102)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$server$morphing_example$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("items","by-id","items/by-id",-2096040189),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$server$morphing_example$render_ToolbarItem(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88484 = com.fulcrologic.fulcro.components.props(this$);
var map__88484__$1 = (((((!((map__88484 == null))))?(((((map__88484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88484):map__88484);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88484__$1,new cljs.core.Keyword("item","name","item/name",1849015102));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.server !== 'undefined') && (typeof book.server.morphing_example !== 'undefined') && (typeof book.server.morphing_example.ToolbarItem !== 'undefined')){
} else {
book.server.morphing_example.ToolbarItem = ((function (options__72617__auto___88533){
return (function book$server$morphing_example$ToolbarItem(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88533,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88538)){
var init_state__72620__auto___88539 = temp__5733__auto___88538;
this__72619__auto__.state = (function (){var obj88487 = ({"fulcro$state":(function (){var G__88488 = this__72619__auto__;
var G__88489 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88539.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88539.cljs$core$IFn$_invoke$arity$2(G__88488,G__88489) : init_state__72620__auto___88539.call(null,G__88488,G__88489));
})()});
return obj88487;
})();
} else {
this__72619__auto__.state = (function (){var obj88491 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88491;
})();
}

return null;
});})(options__72617__auto___88533))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.server.morphing_example.ToolbarItem,new cljs.core.Keyword("book.server.morphing-example","ToolbarItem","book.server.morphing-example/ToolbarItem",660201152),options__72617__auto___88533);
book.server.morphing_example.ui_toolbar_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.server.morphing_example.ToolbarItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));

var options__72617__auto___88540 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$server$morphing_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("category","name","category/name",1793490219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("category","items","category/items",545728256),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.server.morphing_example.ToolbarItem)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$server$morphing_example$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("categories","by-id","categories/by-id",-884369241),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$server$morphing_example$render_ToolbarCategory(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88492 = com.fulcrologic.fulcro.components.props(this$);
var map__88492__$1 = (((((!((map__88492 == null))))?(((((map__88492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88492):map__88492);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88492__$1,new cljs.core.Keyword("category","name","category/name",1793490219));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88492__$1,new cljs.core.Keyword("category","items","category/items",545728256));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(book.server.morphing_example.ui_toolbar_item,items)], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.server !== 'undefined') && (typeof book.server.morphing_example !== 'undefined') && (typeof book.server.morphing_example.ToolbarCategory !== 'undefined')){
} else {
book.server.morphing_example.ToolbarCategory = ((function (options__72617__auto___88540){
return (function book$server$morphing_example$ToolbarCategory(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88540,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88543)){
var init_state__72620__auto___88544 = temp__5733__auto___88543;
this__72619__auto__.state = (function (){var obj88495 = ({"fulcro$state":(function (){var G__88496 = this__72619__auto__;
var G__88497 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88544.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88544.cljs$core$IFn$_invoke$arity$2(G__88496,G__88497) : init_state__72620__auto___88544.call(null,G__88496,G__88497));
})()});
return obj88495;
})();
} else {
this__72619__auto__.state = (function (){var obj88499 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88499;
})();
}

return null;
});})(options__72617__auto___88540))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.server.morphing_example.ToolbarCategory,new cljs.core.Keyword("book.server.morphing-example","ToolbarCategory","book.server.morphing-example/ToolbarCategory",-300547051),options__72617__auto___88540);
book.server.morphing_example.ui_toolbar_category = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.server.morphing_example.ToolbarCategory,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
/**
 * 
 */
book.server.morphing_example.group_items_reset = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.server.morphing-example","group-items-reset","book.server.morphing-example/group-items-reset",1654480172,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.server.morphing-example","group-items-reset","book.server.morphing-example/group-items-reset",1654480172,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (params){
return (function book$server$morphing_example$action(p__88501){
var map__88502 = p__88501;
var map__88502__$1 = (((((!((map__88502 == null))))?(((((map__88502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88502):map__88502);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88502__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88502__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__88502,map__88502__$1,app,state,params){
return (function (s){
return com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword("categories","by-id","categories/by-id",-884369241),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("toolbar","categories","toolbar/categories",-1095343571)], 0)),book.server.morphing_example.component_query,book.server.morphing_example.sample_server_response);
});})(map__88502,map__88502__$1,app,state,params))
);

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
 * Returns a new db with the given item added into that item's category.
 */
book.server.morphing_example.add_to_category = (function book$server$morphing_example$add_to_category(db,item){
var category_ident = new cljs.core.Keyword("item","category","item/category",-596403133).cljs$core$IFn$_invoke$arity$1(item);
var item_location = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(category_ident,new cljs.core.Keyword("category","items","category/items",545728256));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,item_location,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),com.fulcrologic.fulcro.components.ident(book.server.morphing_example.ItemQuery,item));
});
/**
 * Returns a new db with all of the items sorted by name and grouped into their categories.
 */
book.server.morphing_example.group_items_STAR_ = (function book$server$morphing_example$group_items_STAR_(db){
var sorted_items = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("item","name","item/name",1849015102),cljs.core.vals(new cljs.core.Keyword("items","by-id","items/by-id",-2096040189).cljs$core$IFn$_invoke$arity$1(db)));
var category_ids = cljs.core.keys(new cljs.core.Keyword("categories","by-id","categories/by-id",-884369241).cljs$core$IFn$_invoke$arity$1(db));
var clear_items = ((function (sorted_items,category_ids){
return (function (db__$1,id){
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("categories","by-id","categories/by-id",-884369241),id,new cljs.core.Keyword("category","items","category/items",545728256)], null),cljs.core.PersistentVector.EMPTY);
});})(sorted_items,category_ids))
;
var db__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clear_items,db,category_ids);
var db__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(book.server.morphing_example.add_to_category,db__$1,sorted_items);
var all_categories = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (sorted_items,category_ids,clear_items,db__$1,db__$2){
return (function (p1__88507_SHARP_){
return com.fulcrologic.fulcro.components.ident(book.server.morphing_example.CategoryQuery,p1__88507_SHARP_);
});})(sorted_items,category_ids,clear_items,db__$1,db__$2))
,cljs.core.vals(new cljs.core.Keyword("categories","by-id","categories/by-id",-884369241).cljs$core$IFn$_invoke$arity$1(db__$2)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$2,new cljs.core.Keyword("toolbar","categories","toolbar/categories",-1095343571),all_categories);
});
/**
 * 
 */
book.server.morphing_example.group_items = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.server.morphing-example","group-items","book.server.morphing-example/group-items",1110183461,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.server.morphing-example","group-items","book.server.morphing-example/group-items",1110183461,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (params){
return (function book$server$morphing_example$action(p__88508){
var map__88509 = p__88508;
var map__88509__$1 = (((((!((map__88509 == null))))?(((((map__88509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88509):map__88509);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88509__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,book.server.morphing_example.group_items_STAR_);

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

var options__72617__auto___88558 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$server$morphing_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("toolbar","categories","toolbar/categories",-1095343571),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.server.morphing_example.ToolbarCategory)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$server$morphing_example$render_Toolbar(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88515 = com.fulcrologic.fulcro.components.props(this$);
var map__88515__$1 = (((((!((map__88515 == null))))?(((((map__88515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88515):map__88515);
var categories = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88515__$1,new cljs.core.Keyword("toolbar","categories","toolbar/categories",-1095343571));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__88515,map__88515__$1,categories){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.server.morphing-example","group-items","book.server.morphing-example/group-items",1110183461,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(map__88515,map__88515__$1,categories))
], null),"Trigger Post Mutation"], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__88515,map__88515__$1,categories){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.server.morphing-example","group-items-reset","book.server.morphing-example/group-items-reset",1654480172,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(map__88515,map__88515__$1,categories))
], null),"Reset"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(book.server.morphing_example.ui_toolbar_category,categories)], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.server !== 'undefined') && (typeof book.server.morphing_example !== 'undefined') && (typeof book.server.morphing_example.Toolbar !== 'undefined')){
} else {
book.server.morphing_example.Toolbar = ((function (options__72617__auto___88558){
return (function book$server$morphing_example$Toolbar(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88558,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88561)){
var init_state__72620__auto___88562 = temp__5733__auto___88561;
this__72619__auto__.state = (function (){var obj88521 = ({"fulcro$state":(function (){var G__88522 = this__72619__auto__;
var G__88523 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88562.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88562.cljs$core$IFn$_invoke$arity$2(G__88522,G__88523) : init_state__72620__auto___88562.call(null,G__88522,G__88523));
})()});
return obj88521;
})();
} else {
this__72619__auto__.state = (function (){var obj88525 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88525;
})();
}

return null;
});})(options__72617__auto___88558))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.server.morphing_example.Toolbar,new cljs.core.Keyword("book.server.morphing-example","Toolbar","book.server.morphing-example/Toolbar",-1615862948),options__72617__auto___88558);
if((typeof book !== 'undefined') && (typeof book.server !== 'undefined') && (typeof book.server.morphing_example !== 'undefined') && (typeof book.server.morphing_example.fulcroapp_morphing_example !== 'undefined')){
} else {
book.server.morphing_example.fulcroapp_morphing_example = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-morphing-example",new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3(book.server.morphing_example.component_query,book.server.morphing_example.sample_server_response,true)], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"morphing-example",book.server.morphing_example.fulcroapp_morphing_example);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.server.morphing_example.fulcroapp_morphing_example,book.server.morphing_example.Toolbar,"morphing-example");

//# sourceMappingURL=book.server.morphing_example.js.map
