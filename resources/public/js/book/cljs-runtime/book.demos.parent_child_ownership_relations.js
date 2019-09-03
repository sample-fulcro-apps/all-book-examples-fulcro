goog.provide('book.demos.parent_child_ownership_relations');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('taoensso.timbre');
book.demos.parent_child_ownership_relations.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"abc",new cljs.core.Keyword(null,"main-list","main-list",1099196985),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("list","id","list/id",-1385338442),(1),new cljs.core.Keyword("list","name","list/name",1849094347),"My List",new cljs.core.Keyword("list","items","list/items",1035416224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("item","id","item/id",-1385287903),(1),new cljs.core.Keyword("item","label","item/label",1746690887),"A"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("item","id","item/id",-1385287903),(2),new cljs.core.Keyword("item","label","item/label",1746690887),"B"], null)], null)], null)], null);
/**
 * Mutation: Delete an item from a list
 */
book.demos.parent_child_ownership_relations.delete_item = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.demos.parent-child-ownership-relations","delete-item","book.demos.parent-child-ownership-relations/delete-item",495021851,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.demos.parent-child-ownership-relations","delete-item","book.demos.parent-child-ownership-relations/delete-item",495021851,null),(function (fulcro_mutation_env_symbol){
var map__89511 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__89511__$1 = (((((!((map__89511 == null))))?(((((map__89511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89511):map__89511);
var list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89511__$1,new cljs.core.Keyword(null,"list-id","list-id",1757820635));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89511__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__89511,map__89511__$1,list_id,id){
return (function book$demos$parent_child_ownership_relations$action(p__89513){
var map__89514 = p__89513;
var map__89514__$1 = (((((!((map__89514 == null))))?(((((map__89514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89514):map__89514);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89514__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.demos.parent-child-ownership-relations",null,20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__89514,map__89514__$1,state,map__89511,map__89511__$1,list_id,id){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deleting item",id,"from list",list_id], null);
});})(map__89514,map__89514__$1,state,map__89511,map__89511__$1,list_id,id))
,null)),null,136364995);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__89514,map__89514__$1,state,map__89511,map__89511__$1,list_id,id){
return (function (s){
return com.fulcrologic.fulcro.algorithms.merge.remove_ident_STAR_(cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.dissoc,id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lists","lists",-884730684),list_id,new cljs.core.Keyword("list","items","list/items",1035416224)], null));
});})(map__89514,map__89514__$1,state,map__89511,map__89511__$1,list_id,id))
);

return null;
});})(map__89511,map__89511__$1,list_id,id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__89511,map__89511__$1,list_id,id){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__89511,map__89511__$1,list_id,id))
], null);
}));

var options__72617__auto___89576 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$parent_child_ownership_relations$build_raw_initial_state_STAR_(p__89516){
var map__89517 = p__89516;
var map__89517__$1 = (((((!((map__89517 == null))))?(((((map__89517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89517):map__89517);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89517__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89517__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("item","id","item/id",-1385287903),id,new cljs.core.Keyword("item","label","item/label",1746690887),label], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$parent_child_ownership_relations$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","id","item/id",-1385287903),new cljs.core.Keyword("item","label","item/label",1746690887)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$parent_child_ownership_relations$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword("item","id","item/id",-1385287903).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$parent_child_ownership_relations$render_Item(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89521 = com.fulcrologic.fulcro.components.props(this$);
var map__89521__$1 = (((((!((map__89521 == null))))?(((((map__89521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89521):map__89521);
var props = map__89521__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89521__$1,new cljs.core.Keyword("item","id","item/id",-1385287903));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89521__$1,new cljs.core.Keyword("item","label","item/label",1746690887));
var map__89524 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__89524__$1 = (((((!((map__89524 == null))))?(((((map__89524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89524):map__89524);
var computed = map__89524__$1;
var on_delete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89524__$1,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89521,map__89521__$1,props,id,label,map__89524,map__89524__$1,computed,on_delete){
return (function (){
return (on_delete.cljs$core$IFn$_invoke$arity$1 ? on_delete.cljs$core$IFn$_invoke$arity$1(id) : on_delete.call(null,id));
});})(map__89521,map__89521__$1,props,id,label,map__89524,map__89524__$1,computed,on_delete))
], null),"X"], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.parent_child_ownership_relations !== 'undefined') && (typeof book.demos.parent_child_ownership_relations.Item !== 'undefined')){
} else {
book.demos.parent_child_ownership_relations.Item = ((function (options__72617__auto___89576){
return (function book$demos$parent_child_ownership_relations$Item(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89576,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89585)){
var init_state__72620__auto___89586 = temp__5733__auto___89585;
this__72619__auto__.state = (function (){var obj89534 = ({"fulcro$state":(function (){var G__89535 = this__72619__auto__;
var G__89536 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89586.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89586.cljs$core$IFn$_invoke$arity$2(G__89535,G__89536) : init_state__72620__auto___89586.call(null,G__89535,G__89536));
})()});
return obj89534;
})();
} else {
this__72619__auto__.state = (function (){var obj89539 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89539;
})();
}

return null;
});})(options__72617__auto___89576))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.parent_child_ownership_relations.Item,new cljs.core.Keyword("book.demos.parent-child-ownership-relations","Item","book.demos.parent-child-ownership-relations/Item",887830260),options__72617__auto___89576);
book.demos.parent_child_ownership_relations.ui_list_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.parent_child_ownership_relations.Item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("item","id","item/id",-1385287903)], null));

var options__72617__auto___89587 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$parent_child_ownership_relations$build_raw_initial_state_STAR_(p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("list","id","list/id",-1385338442),(1),new cljs.core.Keyword("list","name","list/name",1849094347),"List 1",new cljs.core.Keyword("list","items","list/items",1035416224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.parent_child_ownership_relations.Item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"label","label",1718410804),"A"], null)),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.parent_child_ownership_relations.Item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"label","label",1718410804),"B"], null))], null)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$parent_child_ownership_relations$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","name","list/name",1849094347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","items","list/items",1035416224),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.parent_child_ownership_relations.Item)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$parent_child_ownership_relations$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword("list","id","list/id",-1385338442).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$parent_child_ownership_relations$render_ItemList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89545 = com.fulcrologic.fulcro.components.props(this$);
var map__89545__$1 = (((((!((map__89545 == null))))?(((((map__89545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89545):map__89545);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89545__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89545__$1,new cljs.core.Keyword("list","name","list/name",1849094347));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89545__$1,new cljs.core.Keyword("list","items","list/items",1035416224));
var delete_item = ((function (map__89545,map__89545__$1,id,name,items){
return (function (item_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__89547 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-id","list-id",1757820635),id,new cljs.core.Keyword(null,"id","id",-1388402092),item_id], null);
return (book.demos.parent_child_ownership_relations.delete_item.cljs$core$IFn$_invoke$arity$1 ? book.demos.parent_child_ownership_relations.delete_item.cljs$core$IFn$_invoke$arity$1(G__89547) : book.demos.parent_child_ownership_relations.delete_item.call(null,G__89547));
})()], null));
});})(map__89545,map__89545__$1,id,name,items))
;
var item_props = ((function (delete_item,map__89545,map__89545__$1,id,name,items){
return (function (i){
return com.fulcrologic.fulcro.components.computed(i,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355),delete_item], null));
});})(delete_item,map__89545,map__89545__$1,id,name,items))
;
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (delete_item,item_props,map__89545,map__89545__$1,id,name,items){
return (function (p1__89543_SHARP_){
var G__89548 = item_props(p1__89543_SHARP_);
return (book.demos.parent_child_ownership_relations.ui_list_item.cljs$core$IFn$_invoke$arity$1 ? book.demos.parent_child_ownership_relations.ui_list_item.cljs$core$IFn$_invoke$arity$1(G__89548) : book.demos.parent_child_ownership_relations.ui_list_item.call(null,G__89548));
});})(delete_item,item_props,map__89545,map__89545__$1,id,name,items))
,items)], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.parent_child_ownership_relations !== 'undefined') && (typeof book.demos.parent_child_ownership_relations.ItemList !== 'undefined')){
} else {
book.demos.parent_child_ownership_relations.ItemList = ((function (options__72617__auto___89587){
return (function book$demos$parent_child_ownership_relations$ItemList(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89587,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89592)){
var init_state__72620__auto___89594 = temp__5733__auto___89592;
this__72619__auto__.state = (function (){var obj89550 = ({"fulcro$state":(function (){var G__89551 = this__72619__auto__;
var G__89552 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89594.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89594.cljs$core$IFn$_invoke$arity$2(G__89551,G__89552) : init_state__72620__auto___89594.call(null,G__89551,G__89552));
})()});
return obj89550;
})();
} else {
this__72619__auto__.state = (function (){var obj89554 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89554;
})();
}

return null;
});})(options__72617__auto___89587))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.parent_child_ownership_relations.ItemList,new cljs.core.Keyword("book.demos.parent-child-ownership-relations","ItemList","book.demos.parent-child-ownership-relations/ItemList",-1884793529),options__72617__auto___89587);
book.demos.parent_child_ownership_relations.ui_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.demos.parent_child_ownership_relations.ItemList);

var options__72617__auto___89595 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$parent_child_ownership_relations$build_raw_initial_state_STAR_(p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"main-list","main-list",1099196985),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.parent_child_ownership_relations.ItemList,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$parent_child_ownership_relations$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"main-list","main-list",1099196985),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.parent_child_ownership_relations.ItemList)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$parent_child_ownership_relations$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89555 = com.fulcrologic.fulcro.components.props(this$);
var map__89555__$1 = (((((!((map__89555 == null))))?(((((map__89555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89555):map__89555);
var main_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89555__$1,new cljs.core.Keyword(null,"main-list","main-list",1099196985));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.demos.parent_child_ownership_relations.ui_list.cljs$core$IFn$_invoke$arity$1 ? book.demos.parent_child_ownership_relations.ui_list.cljs$core$IFn$_invoke$arity$1(main_list) : book.demos.parent_child_ownership_relations.ui_list.call(null,main_list))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.parent_child_ownership_relations !== 'undefined') && (typeof book.demos.parent_child_ownership_relations.Root !== 'undefined')){
} else {
book.demos.parent_child_ownership_relations.Root = ((function (options__72617__auto___89595){
return (function book$demos$parent_child_ownership_relations$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89595,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89596)){
var init_state__72620__auto___89597 = temp__5733__auto___89596;
this__72619__auto__.state = (function (){var obj89563 = ({"fulcro$state":(function (){var G__89564 = this__72619__auto__;
var G__89565 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89597.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89597.cljs$core$IFn$_invoke$arity$2(G__89564,G__89565) : init_state__72620__auto___89597.call(null,G__89564,G__89565));
})()});
return obj89563;
})();
} else {
this__72619__auto__.state = (function (){var obj89567 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89567;
})();
}

return null;
});})(options__72617__auto___89595))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.parent_child_ownership_relations.Root,new cljs.core.Keyword("book.demos.parent-child-ownership-relations","Root","book.demos.parent-child-ownership-relations/Root",452329234),options__72617__auto___89595);

//# sourceMappingURL=book.demos.parent_child_ownership_relations.js.map
