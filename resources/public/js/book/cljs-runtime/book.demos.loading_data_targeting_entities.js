goog.provide('book.demos.loading_data_targeting_entities');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');
goog.require('com.wsscode.pathom.connect');
book.demos.loading_data_targeting_entities.random_person_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.loading-data-targeting-entities","random-person-resolver","book.demos.loading-data-targeting-entities/random-person-resolver",-465230312,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","name","person/name",549444500)], null)], null),(function book$demos$loading_data_targeting_entities$random_person_resolver(env,p__89233){
var map__89234 = p__89233;
var map__89234__$1 = (((((!((map__89234 == null))))?(((((map__89234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89234):map__89234);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89234__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","id","person/id",-392409377),id,new cljs.core.Keyword("person","name","person/name",549444500),["Person ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null);
}));

var options__72617__auto___89306 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_data_targeting_entities$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("person","name","person/name",549444500)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$loading_data_targeting_entities$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.loading-data-targeting-entities","person-by-id","book.demos.loading-data-targeting-entities/person-by-id",905712969),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_data_targeting_entities$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89237 = com.fulcrologic.fulcro.components.props(this$);
var map__89237__$1 = (((((!((map__89237 == null))))?(((((map__89237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89237):map__89237);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89237__$1,new cljs.core.Keyword("person","name","person/name",549444500));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Hi, I'm ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_data_targeting_entities !== 'undefined') && (typeof book.demos.loading_data_targeting_entities.Person !== 'undefined')){
} else {
book.demos.loading_data_targeting_entities.Person = ((function (options__72617__auto___89306){
return (function book$demos$loading_data_targeting_entities$Person(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89306,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89309)){
var init_state__72620__auto___89310 = temp__5733__auto___89309;
this__72619__auto__.state = (function (){var obj89241 = ({"fulcro$state":(function (){var G__89242 = this__72619__auto__;
var G__89243 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89310.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89310.cljs$core$IFn$_invoke$arity$2(G__89242,G__89243) : init_state__72620__auto___89310.call(null,G__89242,G__89243));
})()});
return obj89241;
})();
} else {
this__72619__auto__.state = (function (){var obj89245 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89245;
})();
}

return null;
});})(options__72617__auto___89306))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_data_targeting_entities.Person,new cljs.core.Keyword("book.demos.loading-data-targeting-entities","Person","book.demos.loading-data-targeting-entities/Person",1396686966),options__72617__auto___89306);
book.demos.loading_data_targeting_entities.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.loading_data_targeting_entities.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));

var options__72617__auto___89311 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_data_targeting_entities$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pane","person","pane/person",-1065827379),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_data_targeting_entities.Person)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$loading_data_targeting_entities$build_raw_initial_state_STAR_(p__89250){
var map__89251 = p__89250;
var map__89251__$1 = (((((!((map__89251 == null))))?(((((map__89251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89251):map__89251);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89251__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("pane","person","pane/person",-1065827379),null], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$loading_data_targeting_entities$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pane","by-id","pane/by-id",-2141689125),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_data_targeting_entities$render_Pane(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89253 = com.fulcrologic.fulcro.components.props(this$);
var map__89253__$1 = (((((!((map__89253 == null))))?(((((map__89253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89253):map__89253);
var props = map__89253__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89253__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var person = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89253__$1,new cljs.core.Keyword("pane","person","pane/person",-1065827379));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Pane ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),null),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(person)?(book.demos.loading_data_targeting_entities.ui_person.cljs$core$IFn$_invoke$arity$1 ? book.demos.loading_data_targeting_entities.ui_person.cljs$core$IFn$_invoke$arity$1(person) : book.demos.loading_data_targeting_entities.ui_person.call(null,person)):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"No person loaded..."])))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_data_targeting_entities !== 'undefined') && (typeof book.demos.loading_data_targeting_entities.Pane !== 'undefined')){
} else {
book.demos.loading_data_targeting_entities.Pane = ((function (options__72617__auto___89311){
return (function book$demos$loading_data_targeting_entities$Pane(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89311,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89320)){
var init_state__72620__auto___89321 = temp__5733__auto___89320;
this__72619__auto__.state = (function (){var obj89259 = ({"fulcro$state":(function (){var G__89260 = this__72619__auto__;
var G__89261 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89321.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89321.cljs$core$IFn$_invoke$arity$2(G__89260,G__89261) : init_state__72620__auto___89321.call(null,G__89260,G__89261));
})()});
return obj89259;
})();
} else {
this__72619__auto__.state = (function (){var obj89263 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89263;
})();
}

return null;
});})(options__72617__auto___89311))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_data_targeting_entities.Pane,new cljs.core.Keyword("book.demos.loading-data-targeting-entities","Pane","book.demos.loading-data-targeting-entities/Pane",1184485938),options__72617__auto___89311);
book.demos.loading_data_targeting_entities.ui_pane = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.loading_data_targeting_entities.Pane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));

var options__72617__auto___89325 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_data_targeting_entities$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("panel","left-pane","panel/left-pane",2006032551),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_data_targeting_entities.Pane)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("panel","right-pane","panel/right-pane",1906864999),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_data_targeting_entities.Pane)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$loading_data_targeting_entities$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("panel","left-pane","panel/left-pane",2006032551),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.loading_data_targeting_entities.Pane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"left","left",-399115937)], null)),new cljs.core.Keyword("panel","right-pane","panel/right-pane",1906864999),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.loading_data_targeting_entities.Pane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"right","right",-452581833)], null))], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$loading_data_targeting_entities$ident_STAR_(this$,p__89264){
var map__89265 = p__89264;
var map__89265__$1 = (((((!((map__89265 == null))))?(((((map__89265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89265):map__89265);
var left_pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89265__$1,new cljs.core.Keyword("panel","left-pane","panel/left-pane",2006032551));
var right_pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89265__$1,new cljs.core.Keyword("panel","right-pane","panel/right-pane",1906864999));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"PANEL","PANEL",1269175797),new cljs.core.Keyword(null,"only-one","only-one",292502413)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_data_targeting_entities$render_Panel(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89269 = com.fulcrologic.fulcro.components.props(this$);
var map__89269__$1 = (((((!((map__89269 == null))))?(((((map__89269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89269):map__89269);
var left_pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89269__$1,new cljs.core.Keyword("panel","left-pane","panel/left-pane",2006032551));
var right_pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89269__$1,new cljs.core.Keyword("panel","right-pane","panel/right-pane",1906864999));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.demos.loading_data_targeting_entities.ui_pane.cljs$core$IFn$_invoke$arity$1 ? book.demos.loading_data_targeting_entities.ui_pane.cljs$core$IFn$_invoke$arity$1(left_pane) : book.demos.loading_data_targeting_entities.ui_pane.call(null,left_pane)),com.fulcrologic.fulcro.components.force_children((book.demos.loading_data_targeting_entities.ui_pane.cljs$core$IFn$_invoke$arity$1 ? book.demos.loading_data_targeting_entities.ui_pane.cljs$core$IFn$_invoke$arity$1(right_pane) : book.demos.loading_data_targeting_entities.ui_pane.call(null,right_pane)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_data_targeting_entities !== 'undefined') && (typeof book.demos.loading_data_targeting_entities.Panel !== 'undefined')){
} else {
book.demos.loading_data_targeting_entities.Panel = ((function (options__72617__auto___89325){
return (function book$demos$loading_data_targeting_entities$Panel(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89325,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89326)){
var init_state__72620__auto___89327 = temp__5733__auto___89326;
this__72619__auto__.state = (function (){var obj89273 = ({"fulcro$state":(function (){var G__89274 = this__72619__auto__;
var G__89275 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89327.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89327.cljs$core$IFn$_invoke$arity$2(G__89274,G__89275) : init_state__72620__auto___89327.call(null,G__89274,G__89275));
})()});
return obj89273;
})();
} else {
this__72619__auto__.state = (function (){var obj89277 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89277;
})();
}

return null;
});})(options__72617__auto___89325))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_data_targeting_entities.Panel,new cljs.core.Keyword("book.demos.loading-data-targeting-entities","Panel","book.demos.loading-data-targeting-entities/Panel",102319307),options__72617__auto___89325);
book.demos.loading_data_targeting_entities.ui_panel = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.loading_data_targeting_entities.Panel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
book.demos.loading_data_targeting_entities.load_random_person = (function book$demos$loading_data_targeting_entities$load_random_person(component,where){
var load_target = (function (){var G__89281 = where;
var G__89281__$1 = (((G__89281 instanceof cljs.core.Keyword))?G__89281.fqn:null);
switch (G__89281__$1) {
case "left":
case "right":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pane","by-id","pane/by-id",-2141689125),where,new cljs.core.Keyword("pane","person","pane/person",-1065827379)], null);

break;
case "both":
return com.fulcrologic.fulcro.algorithms.data_targeting.multiple_targets.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pane","by-id","pane/by-id",-2141689125),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword("pane","person","pane/person",-1065827379)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pane","by-id","pane/by-id",-2141689125),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword("pane","person","pane/person",-1065827379)], null)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89281__$1)].join('')));

}
})();
var person_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("book.demos.loading-data-targeting-entities","person-by-id","book.demos.loading-data-targeting-entities/person-by-id",905712969),cljs.core.rand_int((100))], null);
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(component,person_ident,book.demos.loading_data_targeting_entities.Person,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),load_target,new cljs.core.Keyword(null,"marker","marker",865118313),false], null));
});

var options__72617__auto___89329 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_data_targeting_entities$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","panel","root/panel",-563126514),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_data_targeting_entities.Panel)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$loading_data_targeting_entities$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","panel","root/panel",-563126514),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.loading_data_targeting_entities.Panel,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_data_targeting_entities$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89284 = com.fulcrologic.fulcro.components.props(this$);
var map__89284__$1 = (((((!((map__89284 == null))))?(((((map__89284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89284):map__89284);
var props = map__89284__$1;
var panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89284__$1,new cljs.core.Keyword("root","panel","root/panel",-563126514));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.demos.loading_data_targeting_entities.ui_panel.cljs$core$IFn$_invoke$arity$1 ? book.demos.loading_data_targeting_entities.ui_panel.cljs$core$IFn$_invoke$arity$1(panel) : book.demos.loading_data_targeting_entities.ui_panel.call(null,panel)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89284,map__89284__$1,props,panel){
return (function (){
return book.demos.loading_data_targeting_entities.load_random_person(this$,new cljs.core.Keyword(null,"left","left",-399115937));
});})(map__89284,map__89284__$1,props,panel))
], null),"Load into Left"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89284,map__89284__$1,props,panel){
return (function (){
return book.demos.loading_data_targeting_entities.load_random_person(this$,new cljs.core.Keyword(null,"right","right",-452581833));
});})(map__89284,map__89284__$1,props,panel))
], null),"Load into Right"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89284,map__89284__$1,props,panel){
return (function (){
return book.demos.loading_data_targeting_entities.load_random_person(this$,new cljs.core.Keyword(null,"both","both",-393648840));
});})(map__89284,map__89284__$1,props,panel))
], null),"Load into Both"], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_data_targeting_entities !== 'undefined') && (typeof book.demos.loading_data_targeting_entities.Root !== 'undefined')){
} else {
book.demos.loading_data_targeting_entities.Root = ((function (options__72617__auto___89329){
return (function book$demos$loading_data_targeting_entities$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89329,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89330)){
var init_state__72620__auto___89331 = temp__5733__auto___89330;
this__72619__auto__.state = (function (){var obj89287 = ({"fulcro$state":(function (){var G__89288 = this__72619__auto__;
var G__89289 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89331.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89331.cljs$core$IFn$_invoke$arity$2(G__89288,G__89289) : init_state__72620__auto___89331.call(null,G__89288,G__89289));
})()});
return obj89287;
})();
} else {
this__72619__auto__.state = (function (){var obj89291 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89291;
})();
}

return null;
});})(options__72617__auto___89329))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_data_targeting_entities.Root,new cljs.core.Keyword("book.demos.loading-data-targeting-entities","Root","book.demos.loading-data-targeting-entities/Root",-87000010),options__72617__auto___89329);

//# sourceMappingURL=book.demos.loading_data_targeting_entities.js.map
