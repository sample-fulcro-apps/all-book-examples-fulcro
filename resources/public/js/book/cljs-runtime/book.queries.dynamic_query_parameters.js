goog.provide('book.queries.dynamic_query_parameters');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('goog.object');
goog.require('com.fulcrologic.fulcro.components');

var options__72617__auto___85781 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$dynamic_query_parameters$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(99)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$dynamic_query_parameters$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"?additional-stuff","?additional-stuff",-642007287,null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$dynamic_query_parameters$ident_STAR_(this$,p__85706){
var map__85707 = p__85706;
var map__85707__$1 = (((((!((map__85707 == null))))?(((((map__85707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85707):map__85707);
var props = map__85707__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85707__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85707__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LEAF","LEAF",1536904964),new cljs.core.Keyword(null,"ID","ID",989302048)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$dynamic_query_parameters$render_Leaf(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85715 = com.fulcrologic.fulcro.components.props(this$);
var map__85715__$1 = (((((!((map__85715 == null))))?(((((map__85715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85715):map__85715);
var props = map__85715__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85715__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85715__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85715,map__85715__$1,props,x,y){
return (function (){
return com.fulcrologic.fulcro.components.set_query_BANG_(this$,book.queries.dynamic_query_parameters.Leaf,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"additional-stuff","additional-stuff",1142977901),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null));
});})(map__85715,map__85715__$1,props,x,y))
], null),"Add :y to query"], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85715,map__85715__$1,props,x,y){
return (function (){
return com.fulcrologic.fulcro.components.set_query_BANG_(this$,book.queries.dynamic_query_parameters.Leaf,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null));
});})(map__85715,map__85715__$1,props,x,y))
], null),"Drop :y from query"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["li",({}),"x: ",com.fulcrologic.fulcro.components.force_children(x)]),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["li",({}),"y: ",com.fulcrologic.fulcro.components.force_children(y)]))], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.dynamic_query_parameters !== 'undefined') && (typeof book.queries.dynamic_query_parameters.Leaf !== 'undefined')){
} else {
book.queries.dynamic_query_parameters.Leaf = ((function (options__72617__auto___85781){
return (function book$queries$dynamic_query_parameters$Leaf(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85781,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85787)){
var init_state__72620__auto___85788 = temp__5733__auto___85787;
this__72619__auto__.state = (function (){var obj85763 = ({"fulcro$state":(function (){var G__85764 = this__72619__auto__;
var G__85765 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85788.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85788.cljs$core$IFn$_invoke$arity$2(G__85764,G__85765) : init_state__72620__auto___85788.call(null,G__85764,G__85765));
})()});
return obj85763;
})();
} else {
this__72619__auto__.state = (function (){var obj85767 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85767;
})();
}

return null;
});})(options__72617__auto___85781))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.dynamic_query_parameters.Leaf,new cljs.core.Keyword("book.queries.dynamic-query-parameters","Leaf","book.queries.dynamic-query-parameters/Leaf",1116211260),options__72617__auto___85781);
book.queries.dynamic_query_parameters.ui_leaf = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.queries.dynamic_query_parameters.Leaf);

var options__72617__auto___85789 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$dynamic_query_parameters$build_raw_initial_state_STAR_(p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","leaf","root/leaf",1185696298),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.queries.dynamic_query_parameters.Leaf,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$dynamic_query_parameters$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","leaf","root/leaf",1185696298),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.dynamic_query_parameters.ui_leaf)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$dynamic_query_parameters$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85771 = com.fulcrologic.fulcro.components.props(this$);
var map__85771__$1 = (((((!((map__85771 == null))))?(((((map__85771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85771):map__85771);
var props = map__85771__$1;
var leaf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85771__$1,new cljs.core.Keyword("root","leaf","root/leaf",1185696298));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.queries.dynamic_query_parameters.ui_leaf.cljs$core$IFn$_invoke$arity$1 ? book.queries.dynamic_query_parameters.ui_leaf.cljs$core$IFn$_invoke$arity$1(leaf) : book.queries.dynamic_query_parameters.ui_leaf.call(null,leaf))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.dynamic_query_parameters !== 'undefined') && (typeof book.queries.dynamic_query_parameters.Root !== 'undefined')){
} else {
book.queries.dynamic_query_parameters.Root = ((function (options__72617__auto___85789){
return (function book$queries$dynamic_query_parameters$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85789,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85803)){
var init_state__72620__auto___85804 = temp__5733__auto___85803;
this__72619__auto__.state = (function (){var obj85776 = ({"fulcro$state":(function (){var G__85777 = this__72619__auto__;
var G__85778 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85804.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85804.cljs$core$IFn$_invoke$arity$2(G__85777,G__85778) : init_state__72620__auto___85804.call(null,G__85777,G__85778));
})()});
return obj85776;
})();
} else {
this__72619__auto__.state = (function (){var obj85780 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85780;
})();
}

return null;
});})(options__72617__auto___85789))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.dynamic_query_parameters.Root,new cljs.core.Keyword("book.queries.dynamic-query-parameters","Root","book.queries.dynamic-query-parameters/Root",1446470904),options__72617__auto___85789);

//# sourceMappingURL=book.queries.dynamic_query_parameters.js.map
