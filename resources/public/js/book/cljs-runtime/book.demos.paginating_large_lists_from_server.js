goog.provide('book.demos.paginating_large_lists_from_server');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.wsscode.pathom.connect');
book.demos.paginating_large_lists_from_server.infinite_pages = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.paginating-large-lists-from-server","infinite-pages","book.demos.paginating-large-lists-from-server/infinite-pages",619845001,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("paginate","items","paginate/items",1911277191),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","id","item/id",-1385287903)], null)], null)], null)], null),(function book$demos$paginating_large_lists_from_server$infinite_pages(env,input){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var map__89403 = params;
var map__89403__$1 = (((((!((map__89403 == null))))?(((((map__89403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89403):map__89403);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89403__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89403__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("paginate","items","paginate/items",1911277191),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (params,map__89403,map__89403__$1,start,end){
return (function (id){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","id","item/id",-1385287903),id], null);
});})(params,map__89403,map__89403__$1,start,end))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end))], null);
}));
book.demos.paginating_large_lists_from_server.page_exists_QMARK_ = (function book$demos$paginating_large_lists_from_server$page_exists_QMARK_(state_map,page_number){
var page_items = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","by-number","page/by-number",-1633614038),page_number,new cljs.core.Keyword("page","items","page/items",1035322511)], null));
return cljs.core.boolean$(cljs.core.seq(page_items));
});
/**
 * An idempotent init function that just ensures enough of a page exists to make the UI work.
 * Doesn't affect the items.
 */
book.demos.paginating_large_lists_from_server.init_page = (function book$demos$paginating_large_lists_from_server$init_page(state_map,page_number){
return cljs.core.assoc_in(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","by-number","page/by-number",-1633614038),page_number,new cljs.core.Keyword("page","number","page/number",1567520059)], null),page_number);
});
/**
 * Point the current list's current page to the correct page entity in the db (via ident).
 */
book.demos.paginating_large_lists_from_server.set_current_page = (function book$demos$paginating_large_lists_from_server$set_current_page(state_map,page_number){
return cljs.core.assoc_in(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","by-id","list/by-id",-2140791259),(1),new cljs.core.Keyword("list","current-page","list/current-page",-100363270)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","by-number","page/by-number",-1633614038),page_number], null));
});
/**
 * Removes the given item from the item table.
 */
book.demos.paginating_large_lists_from_server.clear_item = (function book$demos$paginating_large_lists_from_server$clear_item(state_map,item_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state_map,new cljs.core.Keyword("items","by-id","items/by-id",-2096040189),cljs.core.dissoc,item_id);
});
/**
 * Clear the given page (and associated items) from the app database.
 */
book.demos.paginating_large_lists_from_server.clear_page = (function book$demos$paginating_large_lists_from_server$clear_page(state_map,page_number){
var page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","by-number","page/by-number",-1633614038),page_number], null));
var item_idents = new cljs.core.Keyword("page","items","page/items",1035322511).cljs$core$IFn$_invoke$arity$1(page);
var item_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,item_idents);
var s = state_map;
var s__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword("page","by-number","page/by-number",-1633614038),cljs.core.dissoc,page_number);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s,s__$1,page,item_idents,item_ids){
return (function (acc,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword("items","by-id","items/by-id",-2096040189),cljs.core.dissoc,id);
});})(s,s__$1,page,item_idents,item_ids))
,s__$1,item_ids);
});
/**
 * Clears loaded items from pages 5 or more steps away from the given page number.
 */
book.demos.paginating_large_lists_from_server.gc_distant_pages = (function book$demos$paginating_large_lists_from_server$gc_distant_pages(state_map,page_number){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,n){
if(((4) < (function (){var G__89428 = (page_number - n);
return Math.abs(G__89428);
})())){
return book.demos.paginating_large_lists_from_server.clear_page(s,n);
} else {
return s;
}
}),state_map,cljs.core.keys(new cljs.core.Keyword("page","by-number","page/by-number",-1633614038).cljs$core$IFn$_invoke$arity$1(state_map)));
});
book.demos.paginating_large_lists_from_server.load_if_missing = (function book$demos$paginating_large_lists_from_server$load_if_missing(p__89432,page_number){
var map__89433 = p__89432;
var map__89433__$1 = (((((!((map__89433 == null))))?(((((map__89433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89433):map__89433);
var env = map__89433__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89433__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89433__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(book.demos.paginating_large_lists_from_server.page_exists_QMARK_(cljs.core.deref(state),page_number)){
return null;
} else {
var start = (((10) * (page_number - (1))) + (1));
var end = (start + (9));
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(app,new cljs.core.Keyword("paginate","items","paginate/items",1911277191),book.demos.paginating_large_lists_from_server.ListItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","by-number","page/by-number",-1633614038),page_number,new cljs.core.Keyword("page","items","page/items",1035322511)], null)], null));
}
});
/**
 * 
 */
book.demos.paginating_large_lists_from_server.goto_page = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.demos.paginating-large-lists-from-server","goto-page","book.demos.paginating-large-lists-from-server/goto-page",-482332448,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.demos.paginating-large-lists-from-server","goto-page","book.demos.paginating-large-lists-from-server/goto-page",-482332448,null),(function (fulcro_mutation_env_symbol){
var map__89435 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__89435__$1 = (((((!((map__89435 == null))))?(((((map__89435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89435):map__89435);
var page_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89435__$1,new cljs.core.Keyword(null,"page-number","page-number",556880104));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__89435,map__89435__$1,page_number){
return (function book$demos$paginating_large_lists_from_server$action(p__89437){
var map__89438 = p__89437;
var map__89438__$1 = (((((!((map__89438 == null))))?(((((map__89438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89438):map__89438);
var env = map__89438__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89438__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
book.demos.paginating_large_lists_from_server.load_if_missing(env,page_number);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__89438,map__89438__$1,env,state,map__89435,map__89435__$1,page_number){
return (function (s){
return book.demos.paginating_large_lists_from_server.gc_distant_pages(book.demos.paginating_large_lists_from_server.set_current_page(book.demos.paginating_large_lists_from_server.init_page(s,page_number),page_number),page_number);
});})(map__89438,map__89438__$1,env,state,map__89435,map__89435__$1,page_number))
);

return null;
});})(map__89435,map__89435__$1,page_number))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__89435,map__89435__$1,page_number){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__89435,map__89435__$1,page_number))
], null);
}));

var options__72617__auto___89507 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$paginating_large_lists_from_server$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","id","item/id",-1385287903),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$paginating_large_lists_from_server$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("items","by-id","items/by-id",-2096040189),new cljs.core.Keyword("item","id","item/id",-1385287903).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$paginating_large_lists_from_server$render_ListItem(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89443 = com.fulcrologic.fulcro.components.props(this$);
var map__89443__$1 = (((((!((map__89443 == null))))?(((((map__89443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89443):map__89443);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89443__$1,new cljs.core.Keyword("item","id","item/id",-1385287903));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.paginating_large_lists_from_server !== 'undefined') && (typeof book.demos.paginating_large_lists_from_server.ListItem !== 'undefined')){
} else {
book.demos.paginating_large_lists_from_server.ListItem = ((function (options__72617__auto___89507){
return (function book$demos$paginating_large_lists_from_server$ListItem(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89507,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89508)){
var init_state__72620__auto___89509 = temp__5733__auto___89508;
this__72619__auto__.state = (function (){var obj89446 = ({"fulcro$state":(function (){var G__89447 = this__72619__auto__;
var G__89448 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89509.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89509.cljs$core$IFn$_invoke$arity$2(G__89447,G__89448) : init_state__72620__auto___89509.call(null,G__89447,G__89448));
})()});
return obj89446;
})();
} else {
this__72619__auto__.state = (function (){var obj89450 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89450;
})();
}

return null;
});})(options__72617__auto___89507))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.paginating_large_lists_from_server.ListItem,new cljs.core.Keyword("book.demos.paginating-large-lists-from-server","ListItem","book.demos.paginating-large-lists-from-server/ListItem",-784082018),options__72617__auto___89507);
book.demos.paginating_large_lists_from_server.ui_list_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.paginating_large_lists_from_server.ListItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("item","id","item/id",-1385287903)], null));

var options__72617__auto___89510 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$paginating_large_lists_from_server$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("page","number","page/number",1567520059),(1),new cljs.core.Keyword("page","items","page/items",1035322511),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("page","items","page/items",1035322511),book.demos.paginating_large_lists_from_server.ListItem], null),params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$paginating_large_lists_from_server$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","number","page/number",1567520059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("page","items","page/items",1035322511),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.paginating_large_lists_from_server.ListItem)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,new cljs.core.Keyword(null,"page","page",849072397)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$paginating_large_lists_from_server$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","by-number","page/by-number",-1633614038),new cljs.core.Keyword("page","number","page/number",1567520059).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$paginating_large_lists_from_server$render_ListPage(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89451 = com.fulcrologic.fulcro.components.props(this$);
var map__89451__$1 = (((((!((map__89451 == null))))?(((((map__89451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89451):map__89451);
var props = map__89451__$1;
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89451__$1,new cljs.core.Keyword("page","number","page/number",1567520059));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89451__$1,new cljs.core.Keyword("page","items","page/items",1035322511));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,new cljs.core.Keyword(null,"page","page",849072397)], null));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Page number ",com.fulcrologic.fulcro.components.force_children(number)]),com.fulcrologic.fulcro.components.force_children(((com.fulcrologic.fulcro.data_fetch.loading_QMARK_(status))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Loading..."]):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(book.demos.paginating_large_lists_from_server.ui_list_item,items)], null),null)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.paginating_large_lists_from_server !== 'undefined') && (typeof book.demos.paginating_large_lists_from_server.ListPage !== 'undefined')){
} else {
book.demos.paginating_large_lists_from_server.ListPage = ((function (options__72617__auto___89510){
return (function book$demos$paginating_large_lists_from_server$ListPage(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89510,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89519)){
var init_state__72620__auto___89520 = temp__5733__auto___89519;
this__72619__auto__.state = (function (){var obj89456 = ({"fulcro$state":(function (){var G__89457 = this__72619__auto__;
var G__89458 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89520.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89520.cljs$core$IFn$_invoke$arity$2(G__89457,G__89458) : init_state__72620__auto___89520.call(null,G__89457,G__89458));
})()});
return obj89456;
})();
} else {
this__72619__auto__.state = (function (){var obj89460 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89460;
})();
}

return null;
});})(options__72617__auto___89510))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.paginating_large_lists_from_server.ListPage,new cljs.core.Keyword("book.demos.paginating-large-lists-from-server","ListPage","book.demos.paginating-large-lists-from-server/ListPage",737352204),options__72617__auto___89510);
book.demos.paginating_large_lists_from_server.ui_list_page = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.paginating_large_lists_from_server.ListPage,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("page","number","page/number",1567520059)], null));

var options__72617__auto___89522 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$paginating_large_lists_from_server$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","current-page","list/current-page",-100363270),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.paginating_large_lists_from_server.ListPage,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$paginating_large_lists_from_server$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","current-page","list/current-page",-100363270),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.paginating_large_lists_from_server.ListPage)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$paginating_large_lists_from_server$ident_STAR_(this$,p__89461){
var map__89462 = p__89461;
var map__89462__$1 = (((((!((map__89462 == null))))?(((((map__89462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89462):map__89462);
var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89462__$1,new cljs.core.Keyword("list","current-page","list/current-page",-100363270));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","by-id","list/by-id",-2140791259),(1)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$paginating_large_lists_from_server$render_LargeList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89464 = com.fulcrologic.fulcro.components.props(this$);
var map__89464__$1 = (((((!((map__89464 == null))))?(((((map__89464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89464):map__89464);
var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89464__$1,new cljs.core.Keyword("list","current-page","list/current-page",-100363270));
var map__89482 = current_page;
var map__89482__$1 = (((((!((map__89482 == null))))?(((((map__89482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89482):map__89482);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89482__$1,new cljs.core.Keyword("page","number","page/number",1567520059));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),number),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89482,map__89482__$1,number,map__89464,map__89464__$1,current_page){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.demos.paginating-large-lists-from-server","goto-page","book.demos.paginating-large-lists-from-server/goto-page",-482332448,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"page-number","page-number",556880104),null,(1),null)),(new cljs.core.List(null,(number - (1)),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__89482,map__89482__$1,number,map__89464,map__89464__$1,current_page))
], null),"Prior Page"], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89482,map__89482__$1,number,map__89464,map__89464__$1,current_page){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.demos.paginating-large-lists-from-server","goto-page","book.demos.paginating-large-lists-from-server/goto-page",-482332448,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"page-number","page-number",556880104),null,(1),null)),(new cljs.core.List(null,(number + (1)),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__89482,map__89482__$1,number,map__89464,map__89464__$1,current_page))
], null),"Next Page"], null),null)),com.fulcrologic.fulcro.components.force_children((book.demos.paginating_large_lists_from_server.ui_list_page.cljs$core$IFn$_invoke$arity$1 ? book.demos.paginating_large_lists_from_server.ui_list_page.cljs$core$IFn$_invoke$arity$1(current_page) : book.demos.paginating_large_lists_from_server.ui_list_page.call(null,current_page)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.paginating_large_lists_from_server !== 'undefined') && (typeof book.demos.paginating_large_lists_from_server.LargeList !== 'undefined')){
} else {
book.demos.paginating_large_lists_from_server.LargeList = ((function (options__72617__auto___89522){
return (function book$demos$paginating_large_lists_from_server$LargeList(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89522,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89557)){
var init_state__72620__auto___89558 = temp__5733__auto___89557;
this__72619__auto__.state = (function (){var obj89485 = ({"fulcro$state":(function (){var G__89486 = this__72619__auto__;
var G__89487 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89558.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89558.cljs$core$IFn$_invoke$arity$2(G__89486,G__89487) : init_state__72620__auto___89558.call(null,G__89486,G__89487));
})()});
return obj89485;
})();
} else {
this__72619__auto__.state = (function (){var obj89489 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89489;
})();
}

return null;
});})(options__72617__auto___89522))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.paginating_large_lists_from_server.LargeList,new cljs.core.Keyword("book.demos.paginating-large-lists-from-server","LargeList","book.demos.paginating-large-lists-from-server/LargeList",-596765814),options__72617__auto___89522);
book.demos.paginating_large_lists_from_server.ui_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.demos.paginating_large_lists_from_server.LargeList);

var options__72617__auto___89559 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$paginating_large_lists_from_server$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pagination","list","pagination/list",-653871467),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.paginating_large_lists_from_server.LargeList,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$paginating_large_lists_from_server$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pagination","list","pagination/list",-653871467),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.paginating_large_lists_from_server.LargeList)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$paginating_large_lists_from_server$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89490 = com.fulcrologic.fulcro.components.props(this$);
var map__89490__$1 = (((((!((map__89490 == null))))?(((((map__89490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89490):map__89490);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89490__$1,new cljs.core.Keyword("pagination","list","pagination/list",-653871467));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.demos.paginating_large_lists_from_server.ui_list.cljs$core$IFn$_invoke$arity$1 ? book.demos.paginating_large_lists_from_server.ui_list.cljs$core$IFn$_invoke$arity$1(list) : book.demos.paginating_large_lists_from_server.ui_list.call(null,list))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.paginating_large_lists_from_server !== 'undefined') && (typeof book.demos.paginating_large_lists_from_server.Root !== 'undefined')){
} else {
book.demos.paginating_large_lists_from_server.Root = ((function (options__72617__auto___89559){
return (function book$demos$paginating_large_lists_from_server$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89559,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89560)){
var init_state__72620__auto___89561 = temp__5733__auto___89560;
this__72619__auto__.state = (function (){var obj89493 = ({"fulcro$state":(function (){var G__89494 = this__72619__auto__;
var G__89495 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89561.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89561.cljs$core$IFn$_invoke$arity$2(G__89494,G__89495) : init_state__72620__auto___89561.call(null,G__89494,G__89495));
})()});
return obj89493;
})();
} else {
this__72619__auto__.state = (function (){var obj89497 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89497;
})();
}

return null;
});})(options__72617__auto___89559))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.paginating_large_lists_from_server.Root,new cljs.core.Keyword("book.demos.paginating-large-lists-from-server","Root","book.demos.paginating-large-lists-from-server/Root",295318644),options__72617__auto___89559);
/**
 * To be used as started-callback. Load the first page.
 */
book.demos.paginating_large_lists_from_server.initialize = (function book$demos$paginating_large_lists_from_server$initialize(p__89498){
var map__89499 = p__89498;
var map__89499__$1 = (((((!((map__89499 == null))))?(((((map__89499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89499):map__89499);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89499__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.demos.paginating-large-lists-from-server","goto-page","book.demos.paginating-large-lists-from-server/goto-page",-482332448,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"page-number","page-number",556880104),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});

//# sourceMappingURL=book.demos.paginating_large_lists_from_server.js.map
