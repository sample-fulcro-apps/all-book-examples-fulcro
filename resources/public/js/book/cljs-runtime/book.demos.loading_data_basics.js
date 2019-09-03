goog.provide('book.demos.loading_data_basics');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('book.demos.util');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');

var options__72617__auto___89257 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_data_basics$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.Keyword("server","time-ms","server/time-ms",-1569053946)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$loading_data_basics$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_data_basics$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89217 = com.fulcrologic.fulcro.components.props(this$);
var map__89217__$1 = (((((!((map__89217 == null))))?(((((map__89217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89217):map__89217);
var props = map__89217__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89217__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89217__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89217__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var time_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89217__$1,new cljs.core.Keyword("server","time-ms","server/time-ms",-1569053946));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (last queried at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_ms),")"].join(''),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89217,map__89217__$1,props,id,name,age,time_ms){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$),book.demos.loading_data_basics.Person);
});})(map__89217,map__89217__$1,props,id,name,age,time_ms))
], null),"Update"], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_data_basics !== 'undefined') && (typeof book.demos.loading_data_basics.Person !== 'undefined')){
} else {
book.demos.loading_data_basics.Person = ((function (options__72617__auto___89257){
return (function book$demos$loading_data_basics$Person(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89257,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89267)){
var init_state__72620__auto___89268 = temp__5733__auto___89267;
this__72619__auto__.state = (function (){var obj89220 = ({"fulcro$state":(function (){var G__89221 = this__72619__auto__;
var G__89222 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89268.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89268.cljs$core$IFn$_invoke$arity$2(G__89221,G__89222) : init_state__72620__auto___89268.call(null,G__89221,G__89222));
})()});
return obj89220;
})();
} else {
this__72619__auto__.state = (function (){var obj89224 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89224;
})();
}

return null;
});})(options__72617__auto___89257))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_data_basics.Person,new cljs.core.Keyword("book.demos.loading-data-basics","Person","book.demos.loading-data-basics/Person",-1897925874),options__72617__auto___89257);
book.demos.loading_data_basics.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.loading_data_basics.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));

var options__72617__auto___89271 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$loading_data_basics$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("list","people","list/people",1438389142),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","people","list/people",1438389142),book.demos.loading_data_basics.Person], null),params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_data_basics$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","people","list/people",1438389142),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_data_basics.Person)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$loading_data_basics$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","id","list/id",-1385338442).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_data_basics$render_People(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89225 = com.fulcrologic.fulcro.components.props(this$);
var map__89225__$1 = (((((!((map__89225 == null))))?(((((map__89225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89225):map__89225);
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89225__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(book.demos.loading_data_basics.ui_person,people)], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_data_basics !== 'undefined') && (typeof book.demos.loading_data_basics.People !== 'undefined')){
} else {
book.demos.loading_data_basics.People = ((function (options__72617__auto___89271){
return (function book$demos$loading_data_basics$People(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89271,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89278)){
var init_state__72620__auto___89279 = temp__5733__auto___89278;
this__72619__auto__.state = (function (){var obj89228 = ({"fulcro$state":(function (){var G__89229 = this__72619__auto__;
var G__89230 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89279.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89279.cljs$core$IFn$_invoke$arity$2(G__89229,G__89230) : init_state__72620__auto___89279.call(null,G__89229,G__89230));
})()});
return obj89228;
})();
} else {
this__72619__auto__.state = (function (){var obj89232 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89232;
})();
}

return null;
});})(options__72617__auto___89271))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_data_basics.People,new cljs.core.Keyword("book.demos.loading-data-basics","People","book.demos.loading-data-basics/People",-536924419),options__72617__auto___89271);
book.demos.loading_data_basics.ui_people = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.loading_data_basics.People,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("people","kind","people/kind",1750143752)], null));

var options__72617__auto___89280 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$loading_data_basics$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","list","root/list",761982781),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.loading_data_basics.People,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"people","people",1443537404)], null))], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_data_basics$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","list","root/list",761982781),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_data_basics.People)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_data_basics$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89236 = com.fulcrologic.fulcro.components.props(this$);
var map__89236__$1 = (((((!((map__89236 == null))))?(((((map__89236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89236):map__89236);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89236__$1,new cljs.core.Keyword("root","list","root/list",761982781));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89236,map__89236__$1,list){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(this$,new cljs.core.Keyword(null,"all-people","all-people",1672924564),book.demos.loading_data_basics.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword(null,"people","people",1443537404),new cljs.core.Keyword("list","people","list/people",1438389142)], null)], null));
});})(map__89236,map__89236__$1,list))
], null),"Load People"], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({}),"People in Database"])),com.fulcrologic.fulcro.components.force_children((book.demos.loading_data_basics.ui_people.cljs$core$IFn$_invoke$arity$1 ? book.demos.loading_data_basics.ui_people.cljs$core$IFn$_invoke$arity$1(list) : book.demos.loading_data_basics.ui_people.call(null,list)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_data_basics !== 'undefined') && (typeof book.demos.loading_data_basics.Root !== 'undefined')){
} else {
book.demos.loading_data_basics.Root = ((function (options__72617__auto___89280){
return (function book$demos$loading_data_basics$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89280,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89282)){
var init_state__72620__auto___89283 = temp__5733__auto___89282;
this__72619__auto__.state = (function (){var obj89247 = ({"fulcro$state":(function (){var G__89248 = this__72619__auto__;
var G__89249 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89283.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89283.cljs$core$IFn$_invoke$arity$2(G__89248,G__89249) : init_state__72620__auto___89283.call(null,G__89248,G__89249));
})()});
return obj89247;
})();
} else {
this__72619__auto__.state = (function (){var obj89256 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89256;
})();
}

return null;
});})(options__72617__auto___89280))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_data_basics.Root,new cljs.core.Keyword("book.demos.loading-data-basics","Root","book.demos.loading-data-basics/Root",917556430),options__72617__auto___89280);

//# sourceMappingURL=book.demos.loading_data_basics.js.map
