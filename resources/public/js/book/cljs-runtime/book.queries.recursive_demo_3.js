goog.provide('book.queries.recursive_demo_3');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
/**
 * 
 */
book.queries.recursive_demo_3.make_older = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.queries.recursive-demo-3","make-older","book.queries.recursive-demo-3/make-older",2128004337,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.queries.recursive-demo-3","make-older","book.queries.recursive-demo-3/make-older",2128004337,null),(function (fulcro_mutation_env_symbol){
var map__85834 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__85834__$1 = (((((!((map__85834 == null))))?(((((map__85834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85834):map__85834);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85834__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__85834,map__85834__$1,id){
return (function book$queries$recursive_demo_3$action(p__85838){
var map__85839 = p__85838;
var map__85839__$1 = (((((!((map__85839 == null))))?(((((map__85839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85839):map__85839);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85839__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id,new cljs.core.Keyword("person","age","person/age",387881455)], null),cljs.core.inc);

return null;
});})(map__85834,map__85834__$1,id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__85834,map__85834__$1,id){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__85834,map__85834__$1,id))
], null);
}));

var options__72617__auto___85902 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$recursive_demo_3$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","spouse","person/spouse",-1872188210),(1)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$recursive_demo_3$build_raw_initial_state_STAR_(p){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("person","name","person/name",549444500),"Joe",new cljs.core.Keyword("person","age","person/age",387881455),(20),new cljs.core.Keyword("person","spouse","person/spouse",-1872188210),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2),new cljs.core.Keyword("person","name","person/name",549444500),"Sally",new cljs.core.Keyword("person","age","person/age",387881455),(22),new cljs.core.Keyword("person","spouse","person/spouse",-1872188210),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("person","name","person/name",549444500),"Joe"], null)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$recursive_demo_3$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$recursive_demo_3$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85848 = com.fulcrologic.fulcro.components.props(this$);
var map__85848__$1 = (((((!((map__85848 == null))))?(((((map__85848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85848):map__85848);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85848__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85848__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var spouse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85848__$1,new cljs.core.Keyword("person","spouse","person/spouse",-1872188210));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85848__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var map__85849 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__85849__$1 = (((((!((map__85849 == null))))?(((((map__85849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85849):map__85849);
var render_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85849__$1,new cljs.core.Keyword(null,"render-depth","render-depth",487088605),(0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Name:",com.fulcrologic.fulcro.components.force_children(name)]),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Age:",com.fulcrologic.fulcro.components.force_children(age),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85848,map__85848__$1,id,name,spouse,age,map__85849,map__85849__$1,render_depth){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.queries.recursive-demo-3","make-older","book.queries.recursive-demo-3/make-older",2128004337,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",-1388402092),null,(1),null)),(new cljs.core.List(null,id,null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__85848,map__85848__$1,id,name,spouse,age,map__85849,map__85849__$1,render_depth))
], null),"Make Older"], null),null))])),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),render_depth);
if(and__4120__auto__){
return spouse;
} else {
return and__4120__auto__;
}
})())?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Spouse:",com.fulcrologic.fulcro.components.force_children((function (){var G__85859 = com.fulcrologic.fulcro.components.computed(spouse,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-depth","render-depth",487088605),(render_depth + (1))], null));
return (book.queries.recursive_demo_3.ui_person.cljs$core$IFn$_invoke$arity$1 ? book.queries.recursive_demo_3.ui_person.cljs$core$IFn$_invoke$arity$1(G__85859) : book.queries.recursive_demo_3.ui_person.call(null,G__85859));
})())])], null),null):null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.recursive_demo_3 !== 'undefined') && (typeof book.queries.recursive_demo_3.Person !== 'undefined')){
} else {
book.queries.recursive_demo_3.Person = ((function (options__72617__auto___85902){
return (function book$queries$recursive_demo_3$Person(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85902,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85904)){
var init_state__72620__auto___85905 = temp__5733__auto___85904;
this__72619__auto__.state = (function (){var obj85867 = ({"fulcro$state":(function (){var G__85868 = this__72619__auto__;
var G__85869 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85905.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85905.cljs$core$IFn$_invoke$arity$2(G__85868,G__85869) : init_state__72620__auto___85905.call(null,G__85868,G__85869));
})()});
return obj85867;
})();
} else {
this__72619__auto__.state = (function (){var obj85873 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85873;
})();
}

return null;
});})(options__72617__auto___85902))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.recursive_demo_3.Person,new cljs.core.Keyword("book.queries.recursive-demo-3","Person","book.queries.recursive-demo-3/Person",1072066831),options__72617__auto___85902);
book.queries.recursive_demo_3.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.queries.recursive_demo_3.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));

var options__72617__auto___85906 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$recursive_demo_3$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person-of-interest","person-of-interest",-897916247),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person-of-interest","person-of-interest",-897916247),book.queries.recursive_demo_3.Person], null),params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$recursive_demo_3$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person-of-interest","person-of-interest",-897916247),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.recursive_demo_3.Person)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$recursive_demo_3$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85880 = com.fulcrologic.fulcro.components.props(this$);
var map__85880__$1 = (((((!((map__85880 == null))))?(((((map__85880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85880):map__85880);
var person_of_interest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85880__$1,new cljs.core.Keyword(null,"person-of-interest","person-of-interest",-897916247));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.queries.recursive_demo_3.ui_person.cljs$core$IFn$_invoke$arity$1 ? book.queries.recursive_demo_3.ui_person.cljs$core$IFn$_invoke$arity$1(person_of_interest) : book.queries.recursive_demo_3.ui_person.call(null,person_of_interest))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.recursive_demo_3 !== 'undefined') && (typeof book.queries.recursive_demo_3.Root !== 'undefined')){
} else {
book.queries.recursive_demo_3.Root = ((function (options__72617__auto___85906){
return (function book$queries$recursive_demo_3$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85906,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85907)){
var init_state__72620__auto___85908 = temp__5733__auto___85907;
this__72619__auto__.state = (function (){var obj85892 = ({"fulcro$state":(function (){var G__85893 = this__72619__auto__;
var G__85894 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85908.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85908.cljs$core$IFn$_invoke$arity$2(G__85893,G__85894) : init_state__72620__auto___85908.call(null,G__85893,G__85894));
})()});
return obj85892;
})();
} else {
this__72619__auto__.state = (function (){var obj85896 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85896;
})();
}

return null;
});})(options__72617__auto___85906))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.recursive_demo_3.Root,new cljs.core.Keyword("book.queries.recursive-demo-3","Root","book.queries.recursive-demo-3/Root",128600783),options__72617__auto___85906);

//# sourceMappingURL=book.queries.recursive_demo_3.js.map
