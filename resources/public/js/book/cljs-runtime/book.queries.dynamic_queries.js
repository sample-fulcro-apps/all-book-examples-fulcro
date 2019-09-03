goog.provide('book.queries.dynamic_queries');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('goog.object');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.mutations');

var options__72617__auto___85589 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$dynamic_queries$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(42)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$dynamic_queries$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$dynamic_queries$ident_STAR_(this$,p__85566){
var map__85567 = p__85566;
var map__85567__$1 = (((((!((map__85567 == null))))?(((((map__85567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85567):map__85567);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85567__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85567__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LEAF","LEAF",1536904964),new cljs.core.Keyword(null,"ID","ID",989302048)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$dynamic_queries$render_Leaf(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85569 = com.fulcrologic.fulcro.components.props(this$);
var map__85569__$1 = (((((!((map__85569 == null))))?(((((map__85569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85569):map__85569);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85569__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85569__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85569,map__85569__$1,x,y){
return (function (){
return com.fulcrologic.fulcro.components.set_query_BANG_(this$,book.queries.dynamic_queries.ui_leaf,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null)], null));
});})(map__85569,map__85569__$1,x,y))
], null),"Set query to :x"], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85569,map__85569__$1,x,y){
return (function (){
return com.fulcrologic.fulcro.components.set_query_BANG_(this$,book.queries.dynamic_queries.ui_leaf,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null));
});})(map__85569,map__85569__$1,x,y))
], null),"Set query to :y"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85569,map__85569__$1,x,y){
return (function (e){
if(cljs.core.truth_(x)){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)));
} else {
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)));
}
});})(map__85569,map__85569__$1,x,y))
], null),com.fulcrologic.fulcro.components.force_children(["Count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = x;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return y;
}
})())].join(''))], null),null))," Leaf"], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.dynamic_queries !== 'undefined') && (typeof book.queries.dynamic_queries.Leaf !== 'undefined')){
} else {
book.queries.dynamic_queries.Leaf = ((function (options__72617__auto___85589){
return (function book$queries$dynamic_queries$Leaf(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85589,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85593)){
var init_state__72620__auto___85594 = temp__5733__auto___85593;
this__72619__auto__.state = (function (){var obj85572 = ({"fulcro$state":(function (){var G__85573 = this__72619__auto__;
var G__85574 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85594.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85594.cljs$core$IFn$_invoke$arity$2(G__85573,G__85574) : init_state__72620__auto___85594.call(null,G__85573,G__85574));
})()});
return obj85572;
})();
} else {
this__72619__auto__.state = (function (){var obj85576 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85576;
})();
}

return null;
});})(options__72617__auto___85589))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.dynamic_queries.Leaf,new cljs.core.Keyword("book.queries.dynamic-queries","Leaf","book.queries.dynamic-queries/Leaf",-432950851),options__72617__auto___85589);
book.queries.dynamic_queries.ui_leaf = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.queries.dynamic_queries.Leaf,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qualifier","qualifier",125841738),new cljs.core.Keyword(null,"x","x",2099068185)], null));

var options__72617__auto___85595 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$dynamic_queries$build_raw_initial_state_STAR_(p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","leaf","root/leaf",1185696298),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.queries.dynamic_queries.Leaf,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$dynamic_queries$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","leaf","root/leaf",1185696298),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.dynamic_queries.ui_leaf)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$dynamic_queries$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85578 = com.fulcrologic.fulcro.components.props(this$);
var map__85578__$1 = (((((!((map__85578 == null))))?(((((map__85578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85578):map__85578);
var props = map__85578__$1;
var leaf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85578__$1,new cljs.core.Keyword("root","leaf","root/leaf",1185696298));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.queries.dynamic_queries.ui_leaf.cljs$core$IFn$_invoke$arity$1 ? book.queries.dynamic_queries.ui_leaf.cljs$core$IFn$_invoke$arity$1(leaf) : book.queries.dynamic_queries.ui_leaf.call(null,leaf))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.dynamic_queries !== 'undefined') && (typeof book.queries.dynamic_queries.Root !== 'undefined')){
} else {
book.queries.dynamic_queries.Root = ((function (options__72617__auto___85595){
return (function book$queries$dynamic_queries$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85595,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85596)){
var init_state__72620__auto___85597 = temp__5733__auto___85596;
this__72619__auto__.state = (function (){var obj85584 = ({"fulcro$state":(function (){var G__85585 = this__72619__auto__;
var G__85586 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85597.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85597.cljs$core$IFn$_invoke$arity$2(G__85585,G__85586) : init_state__72620__auto___85597.call(null,G__85585,G__85586));
})()});
return obj85584;
})();
} else {
this__72619__auto__.state = (function (){var obj85588 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85588;
})();
}

return null;
});})(options__72617__auto___85595))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.dynamic_queries.Root,new cljs.core.Keyword("book.queries.dynamic-queries","Root","book.queries.dynamic-queries/Root",1950233461),options__72617__auto___85595);

//# sourceMappingURL=book.queries.dynamic_queries.js.map
