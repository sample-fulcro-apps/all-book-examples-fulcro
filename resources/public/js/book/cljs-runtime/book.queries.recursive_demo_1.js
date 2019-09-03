goog.provide('book.queries.recursive_demo_1');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
/**
 * Make a person data map with optional children.
 */
book.queries.recursive_demo_1.make_person = (function book$queries$recursive_demo_1$make_person(id,name,children){
var G__85732 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("person","name","person/name",549444500),name], null);
if(cljs.core.truth_(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85732,new cljs.core.Keyword("person","children","person/children",13863319),children);
} else {
return G__85732;
}
});

var options__72617__auto___85795 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$recursive_demo_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","children","person/children",13863319),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$recursive_demo_1$build_raw_initial_state_STAR_(p){
return book.queries.recursive_demo_1.make_person((1),"Joe",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.queries.recursive_demo_1.make_person((2),"Suzy",cljs.core.PersistentVector.EMPTY),book.queries.recursive_demo_1.make_person((3),"Billy",cljs.core.PersistentVector.EMPTY),book.queries.recursive_demo_1.make_person((4),"Rae",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.queries.recursive_demo_1.make_person((5),"Ian",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.queries.recursive_demo_1.make_person((6),"Zoe",cljs.core.PersistentVector.EMPTY)], null))], null))], null));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$recursive_demo_1$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$recursive_demo_1$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85735 = com.fulcrologic.fulcro.components.props(this$);
var map__85735__$1 = (((((!((map__85735 == null))))?(((((map__85735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85735):map__85735);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85735__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85735__$1,new cljs.core.Keyword("person","children","person/children",13863319));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),null),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(children))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__85735,map__85735__$1,name,children){
return (function (p){
return (book.queries.recursive_demo_1.ui_person.cljs$core$IFn$_invoke$arity$1 ? book.queries.recursive_demo_1.ui_person.cljs$core$IFn$_invoke$arity$1(p) : book.queries.recursive_demo_1.ui_person.call(null,p));
});})(map__85735,map__85735__$1,name,children))
,children)], null),null)], null),null):null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.recursive_demo_1 !== 'undefined') && (typeof book.queries.recursive_demo_1.Person !== 'undefined')){
} else {
book.queries.recursive_demo_1.Person = ((function (options__72617__auto___85795){
return (function book$queries$recursive_demo_1$Person(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85795,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85799)){
var init_state__72620__auto___85800 = temp__5733__auto___85799;
this__72619__auto__.state = (function (){var obj85738 = ({"fulcro$state":(function (){var G__85739 = this__72619__auto__;
var G__85740 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85800.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85800.cljs$core$IFn$_invoke$arity$2(G__85739,G__85740) : init_state__72620__auto___85800.call(null,G__85739,G__85740));
})()});
return obj85738;
})();
} else {
this__72619__auto__.state = (function (){var obj85742 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85742;
})();
}

return null;
});})(options__72617__auto___85795))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.recursive_demo_1.Person,new cljs.core.Keyword("book.queries.recursive-demo-1","Person","book.queries.recursive-demo-1/Person",1072066825),options__72617__auto___85795);
book.queries.recursive_demo_1.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.queries.recursive_demo_1.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));

var options__72617__auto___85802 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$recursive_demo_1$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person-of-interest","person-of-interest",-897916247),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person-of-interest","person-of-interest",-897916247),book.queries.recursive_demo_1.Person], null),params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$recursive_demo_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person-of-interest","person-of-interest",-897916247),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.recursive_demo_1.Person)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$recursive_demo_1$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85783 = com.fulcrologic.fulcro.components.props(this$);
var map__85783__$1 = (((((!((map__85783 == null))))?(((((map__85783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85783):map__85783);
var person_of_interest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85783__$1,new cljs.core.Keyword(null,"person-of-interest","person-of-interest",-897916247));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.queries.recursive_demo_1.ui_person.cljs$core$IFn$_invoke$arity$1 ? book.queries.recursive_demo_1.ui_person.cljs$core$IFn$_invoke$arity$1(person_of_interest) : book.queries.recursive_demo_1.ui_person.call(null,person_of_interest))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.recursive_demo_1 !== 'undefined') && (typeof book.queries.recursive_demo_1.Root !== 'undefined')){
} else {
book.queries.recursive_demo_1.Root = ((function (options__72617__auto___85802){
return (function book$queries$recursive_demo_1$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85802,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85805)){
var init_state__72620__auto___85806 = temp__5733__auto___85805;
this__72619__auto__.state = (function (){var obj85786 = ({"fulcro$state":(function (){var G__85791 = this__72619__auto__;
var G__85792 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85806.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85806.cljs$core$IFn$_invoke$arity$2(G__85791,G__85792) : init_state__72620__auto___85806.call(null,G__85791,G__85792));
})()});
return obj85786;
})();
} else {
this__72619__auto__.state = (function (){var obj85794 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85794;
})();
}

return null;
});})(options__72617__auto___85802))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.recursive_demo_1.Root,new cljs.core.Keyword("book.queries.recursive-demo-1","Root","book.queries.recursive-demo-1/Root",128600777),options__72617__auto___85802);

//# sourceMappingURL=book.queries.recursive_demo_1.js.map
