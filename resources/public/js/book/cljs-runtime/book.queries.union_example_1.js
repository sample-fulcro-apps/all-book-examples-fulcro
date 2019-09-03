goog.provide('book.queries.union_example_1');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.routing.legacy_ui_routers');
goog.require('book.elements');
goog.require('com.fulcrologic.fulcro.components');
goog.require('taoensso.timbre');
book.queries.union_example_1.person_QMARK_ = (function book$queries$union_example_1$person_QMARK_(props){
return cljs.core.contains_QMARK_(props,new cljs.core.Keyword("person","id","person/id",-392409377));
});
book.queries.union_example_1.place_QMARK_ = (function book$queries$union_example_1$place_QMARK_(props){
return cljs.core.contains_QMARK_(props,new cljs.core.Keyword("place","id","place/id",-1273392819));
});
book.queries.union_example_1.thing_QMARK_ = (function book$queries$union_example_1$thing_QMARK_(props){
return cljs.core.contains_QMARK_(props,new cljs.core.Keyword("thing","id","thing/id",-1278462650));
});
/**
 * Generate an ident from a person, place, or thing.
 */
book.queries.union_example_1.item_ident = (function book$queries$union_example_1$item_ident(props){
if(book.queries.union_example_1.person_QMARK_(props)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
if(book.queries.union_example_1.place_QMARK_(props)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("place","id","place/id",-1273392819),new cljs.core.Keyword("place","id","place/id",-1273392819).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
if(book.queries.union_example_1.thing_QMARK_(props)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("thing","id","thing/id",-1278462650),new cljs.core.Keyword("thing","id","thing/id",-1278462650).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"book.queries.union-example-1",null,20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot generate a valid ident. Invalid props.",props], null);
}),null)),null,1904985453);

}
}
}
});
/**
 * Generate a distinct react key for a person, place, or thing
 */
book.queries.union_example_1.item_key = (function book$queries$union_example_1$item_key(props){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.item_ident(props));
});
book.queries.union_example_1.make_person = (function book$queries$union_example_1$make_person(id,n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","id","person/id",-392409377),id,new cljs.core.Keyword("person","name","person/name",549444500),n], null);
});
book.queries.union_example_1.make_place = (function book$queries$union_example_1$make_place(id,n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("place","id","place/id",-1273392819),id,new cljs.core.Keyword("place","name","place/name",1598597442),n], null);
});
book.queries.union_example_1.make_thing = (function book$queries$union_example_1$make_thing(id,n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("thing","id","thing/id",-1278462650),id,new cljs.core.Keyword("thing","label","thing/label",-1782686434),n], null);
});

var options__72617__auto___85730 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$union_example_1$ident_STAR_(this$,p__85598){
var map__85599 = p__85598;
var map__85599__$1 = (((((!((map__85599 == null))))?(((((map__85599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85599):map__85599);
var props = map__85599__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85599__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85599__$1,new cljs.core.Keyword("person","name","person/name",549444500));
return book.queries.union_example_1.item_ident(props);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$union_example_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$union_example_1$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword(null,"no-selection","no-selection",-1876889297)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$union_example_1$render_PersonDetail(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85601 = com.fulcrologic.fulcro.components.props(this$);
var map__85601__$1 = (((((!((map__85601 == null))))?(((((map__85601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85601):map__85601);
var props = map__85601__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85601__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85601__$1,new cljs.core.Keyword("person","name","person/name",549444500));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"no-selection","no-selection",-1876889297)))?"Nothing selected":["Details about person ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.union_example_1 !== 'undefined') && (typeof book.queries.union_example_1.PersonDetail !== 'undefined')){
} else {
book.queries.union_example_1.PersonDetail = ((function (options__72617__auto___85730){
return (function book$queries$union_example_1$PersonDetail(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85730,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85731)){
var init_state__72620__auto___85733 = temp__5733__auto___85731;
this__72619__auto__.state = (function (){var obj85604 = ({"fulcro$state":(function (){var G__85605 = this__72619__auto__;
var G__85606 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85733.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85733.cljs$core$IFn$_invoke$arity$2(G__85605,G__85606) : init_state__72620__auto___85733.call(null,G__85605,G__85606));
})()});
return obj85604;
})();
} else {
this__72619__auto__.state = (function (){var obj85608 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85608;
})();
}

return null;
});})(options__72617__auto___85730))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.union_example_1.PersonDetail,new cljs.core.Keyword("book.queries.union-example-1","PersonDetail","book.queries.union-example-1/PersonDetail",-1149604275),options__72617__auto___85730);

var options__72617__auto___85743 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$union_example_1$ident_STAR_(this$,p__85609){
var map__85610 = p__85609;
var map__85610__$1 = (((((!((map__85610 == null))))?(((((map__85610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85610):map__85610);
var props = map__85610__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85610__$1,new cljs.core.Keyword("place","id","place/id",-1273392819));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85610__$1,new cljs.core.Keyword("place","name","place/name",1598597442));
return book.queries.union_example_1.item_ident(props);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$union_example_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("place","id","place/id",-1273392819),new cljs.core.Keyword("place","name","place/name",1598597442)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$union_example_1$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("place","id","place/id",-1273392819),new cljs.core.Keyword(null,"no-selection","no-selection",-1876889297)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$union_example_1$render_PlaceDetail(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85612 = com.fulcrologic.fulcro.components.props(this$);
var map__85612__$1 = (((((!((map__85612 == null))))?(((((map__85612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85612):map__85612);
var props = map__85612__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85612__$1,new cljs.core.Keyword("place","id","place/id",-1273392819));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85612__$1,new cljs.core.Keyword("place","name","place/name",1598597442));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"no-selection","no-selection",-1876889297)))?"Nothing selected":["Details about place ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.union_example_1 !== 'undefined') && (typeof book.queries.union_example_1.PlaceDetail !== 'undefined')){
} else {
book.queries.union_example_1.PlaceDetail = ((function (options__72617__auto___85743){
return (function book$queries$union_example_1$PlaceDetail(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85743,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85744)){
var init_state__72620__auto___85745 = temp__5733__auto___85744;
this__72619__auto__.state = (function (){var obj85615 = ({"fulcro$state":(function (){var G__85616 = this__72619__auto__;
var G__85617 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85745.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85745.cljs$core$IFn$_invoke$arity$2(G__85616,G__85617) : init_state__72620__auto___85745.call(null,G__85616,G__85617));
})()});
return obj85615;
})();
} else {
this__72619__auto__.state = (function (){var obj85619 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85619;
})();
}

return null;
});})(options__72617__auto___85743))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.union_example_1.PlaceDetail,new cljs.core.Keyword("book.queries.union-example-1","PlaceDetail","book.queries.union-example-1/PlaceDetail",-935129801),options__72617__auto___85743);

var options__72617__auto___85746 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$union_example_1$ident_STAR_(this$,p__85620){
var map__85621 = p__85620;
var map__85621__$1 = (((((!((map__85621 == null))))?(((((map__85621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85621):map__85621);
var props = map__85621__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85621__$1,new cljs.core.Keyword("thing","id","thing/id",-1278462650));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85621__$1,new cljs.core.Keyword("thing","label","thing/label",-1782686434));
return book.queries.union_example_1.item_ident(props);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$union_example_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("thing","id","thing/id",-1278462650),new cljs.core.Keyword("thing","label","thing/label",-1782686434)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$union_example_1$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("thing","id","thing/id",-1278462650),new cljs.core.Keyword(null,"no-selection","no-selection",-1876889297)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$union_example_1$render_ThingDetail(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85623 = com.fulcrologic.fulcro.components.props(this$);
var map__85623__$1 = (((((!((map__85623 == null))))?(((((map__85623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85623):map__85623);
var props = map__85623__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85623__$1,new cljs.core.Keyword("thing","id","thing/id",-1278462650));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85623__$1,new cljs.core.Keyword("thing","label","thing/label",-1782686434));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"no-selection","no-selection",-1876889297)))?"Nothing selected":["Details about thing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.union_example_1 !== 'undefined') && (typeof book.queries.union_example_1.ThingDetail !== 'undefined')){
} else {
book.queries.union_example_1.ThingDetail = ((function (options__72617__auto___85746){
return (function book$queries$union_example_1$ThingDetail(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85746,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85759)){
var init_state__72620__auto___85760 = temp__5733__auto___85759;
this__72619__auto__.state = (function (){var obj85626 = ({"fulcro$state":(function (){var G__85627 = this__72619__auto__;
var G__85628 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85760.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85760.cljs$core$IFn$_invoke$arity$2(G__85627,G__85628) : init_state__72620__auto___85760.call(null,G__85627,G__85628));
})()});
return obj85626;
})();
} else {
this__72619__auto__.state = (function (){var obj85630 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85630;
})();
}

return null;
});})(options__72617__auto___85746))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.union_example_1.ThingDetail,new cljs.core.Keyword("book.queries.union-example-1","ThingDetail","book.queries.union-example-1/ThingDetail",1188465391),options__72617__auto___85746);

var options__72617__auto___85761 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$union_example_1$ident_STAR_(this$,p__85631){
var map__85632 = p__85631;
var map__85632__$1 = (((((!((map__85632 == null))))?(((((map__85632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85632):map__85632);
var props = map__85632__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85632__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85632__$1,new cljs.core.Keyword("person","name","person/name",549444500));
return book.queries.union_example_1.item_ident(props);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$union_example_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$union_example_1$render_PersonListItem(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85634 = com.fulcrologic.fulcro.components.props(this$);
var map__85634__$1 = (((((!((map__85634 == null))))?(((((map__85634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85634):map__85634);
var props = map__85634__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85634__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85634__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var map__85635 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__85635__$1 = (((((!((map__85635 == null))))?(((((map__85635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85635):map__85635);
var computed = map__85635__$1;
var onSelect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85635__$1,new cljs.core.Keyword(null,"onSelect","onSelect",251862405));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85634,map__85634__$1,props,id,name,map__85635,map__85635__$1,computed,onSelect){
return (function (){
var G__85638 = book.queries.union_example_1.item_ident(props);
return (onSelect.cljs$core$IFn$_invoke$arity$1 ? onSelect.cljs$core$IFn$_invoke$arity$1(G__85638) : onSelect.call(null,G__85638));
});})(map__85634,map__85634__$1,props,id,name,map__85635,map__85635__$1,computed,onSelect))
], null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["a",({}),com.fulcrologic.fulcro.components.force_children(["Person ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))]))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.union_example_1 !== 'undefined') && (typeof book.queries.union_example_1.PersonListItem !== 'undefined')){
} else {
book.queries.union_example_1.PersonListItem = ((function (options__72617__auto___85761){
return (function book$queries$union_example_1$PersonListItem(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85761,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85768)){
var init_state__72620__auto___85769 = temp__5733__auto___85768;
this__72619__auto__.state = (function (){var obj85640 = ({"fulcro$state":(function (){var G__85641 = this__72619__auto__;
var G__85642 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85769.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85769.cljs$core$IFn$_invoke$arity$2(G__85641,G__85642) : init_state__72620__auto___85769.call(null,G__85641,G__85642));
})()});
return obj85640;
})();
} else {
this__72619__auto__.state = (function (){var obj85644 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85644;
})();
}

return null;
});})(options__72617__auto___85761))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.union_example_1.PersonListItem,new cljs.core.Keyword("book.queries.union-example-1","PersonListItem","book.queries.union-example-1/PersonListItem",1782413702),options__72617__auto___85761);
book.queries.union_example_1.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.queries.union_example_1.PersonListItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),book.queries.union_example_1.item_key], null));

var options__72617__auto___85770 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$union_example_1$ident_STAR_(this$,p__85645){
var map__85646 = p__85645;
var map__85646__$1 = (((((!((map__85646 == null))))?(((((map__85646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85646):map__85646);
var props = map__85646__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85646__$1,new cljs.core.Keyword("place","id","place/id",-1273392819));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85646__$1,new cljs.core.Keyword("place","name","place/name",1598597442));
return book.queries.union_example_1.item_ident(props);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$union_example_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("place","id","place/id",-1273392819),new cljs.core.Keyword("place","name","place/name",1598597442)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$union_example_1$render_PlaceListItem(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85648 = com.fulcrologic.fulcro.components.props(this$);
var map__85648__$1 = (((((!((map__85648 == null))))?(((((map__85648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85648):map__85648);
var props = map__85648__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85648__$1,new cljs.core.Keyword("place","id","place/id",-1273392819));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85648__$1,new cljs.core.Keyword("place","name","place/name",1598597442));
var map__85649 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__85649__$1 = (((((!((map__85649 == null))))?(((((map__85649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85649):map__85649);
var computed = map__85649__$1;
var onSelect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85649__$1,new cljs.core.Keyword(null,"onSelect","onSelect",251862405));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85648,map__85648__$1,props,id,name,map__85649,map__85649__$1,computed,onSelect){
return (function (){
var G__85652 = book.queries.union_example_1.item_ident(props);
return (onSelect.cljs$core$IFn$_invoke$arity$1 ? onSelect.cljs$core$IFn$_invoke$arity$1(G__85652) : onSelect.call(null,G__85652));
});})(map__85648,map__85648__$1,props,id,name,map__85649,map__85649__$1,computed,onSelect))
], null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["a",({}),com.fulcrologic.fulcro.components.force_children(["Place ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))]))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.union_example_1 !== 'undefined') && (typeof book.queries.union_example_1.PlaceListItem !== 'undefined')){
} else {
book.queries.union_example_1.PlaceListItem = ((function (options__72617__auto___85770){
return (function book$queries$union_example_1$PlaceListItem(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85770,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85773)){
var init_state__72620__auto___85774 = temp__5733__auto___85773;
this__72619__auto__.state = (function (){var obj85654 = ({"fulcro$state":(function (){var G__85655 = this__72619__auto__;
var G__85656 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85774.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85774.cljs$core$IFn$_invoke$arity$2(G__85655,G__85656) : init_state__72620__auto___85774.call(null,G__85655,G__85656));
})()});
return obj85654;
})();
} else {
this__72619__auto__.state = (function (){var obj85658 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85658;
})();
}

return null;
});})(options__72617__auto___85770))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.union_example_1.PlaceListItem,new cljs.core.Keyword("book.queries.union-example-1","PlaceListItem","book.queries.union-example-1/PlaceListItem",-396047785),options__72617__auto___85770);
book.queries.union_example_1.ui_place = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.queries.union_example_1.PlaceListItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),book.queries.union_example_1.item_key], null));

var options__72617__auto___85790 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$union_example_1$ident_STAR_(this$,p__85659){
var map__85660 = p__85659;
var map__85660__$1 = (((((!((map__85660 == null))))?(((((map__85660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85660):map__85660);
var props = map__85660__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85660__$1,new cljs.core.Keyword("thing","id","thing/id",-1278462650));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85660__$1,new cljs.core.Keyword("thing","label","thing/label",-1782686434));
return book.queries.union_example_1.item_ident(props);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$union_example_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("thing","id","thing/id",-1278462650),new cljs.core.Keyword("thing","label","thing/label",-1782686434)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$union_example_1$render_ThingListItem(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85662 = com.fulcrologic.fulcro.components.props(this$);
var map__85662__$1 = (((((!((map__85662 == null))))?(((((map__85662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85662):map__85662);
var props = map__85662__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85662__$1,new cljs.core.Keyword("thing","id","thing/id",-1278462650));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85662__$1,new cljs.core.Keyword("thing","label","thing/label",-1782686434));
var map__85663 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__85663__$1 = (((((!((map__85663 == null))))?(((((map__85663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85663):map__85663);
var computed = map__85663__$1;
var onSelect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85663__$1,new cljs.core.Keyword(null,"onSelect","onSelect",251862405));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85662,map__85662__$1,props,id,label,map__85663,map__85663__$1,computed,onSelect){
return (function (){
var G__85666 = book.queries.union_example_1.item_ident(props);
return (onSelect.cljs$core$IFn$_invoke$arity$1 ? onSelect.cljs$core$IFn$_invoke$arity$1(G__85666) : onSelect.call(null,G__85666));
});})(map__85662,map__85662__$1,props,id,label,map__85663,map__85663__$1,computed,onSelect))
], null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["a",({}),com.fulcrologic.fulcro.components.force_children(["Thing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''))]))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.union_example_1 !== 'undefined') && (typeof book.queries.union_example_1.ThingListItem !== 'undefined')){
} else {
book.queries.union_example_1.ThingListItem = ((function (options__72617__auto___85790){
return (function book$queries$union_example_1$ThingListItem(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85790,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85796)){
var init_state__72620__auto___85797 = temp__5733__auto___85796;
this__72619__auto__.state = (function (){var obj85668 = ({"fulcro$state":(function (){var G__85669 = this__72619__auto__;
var G__85670 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85797.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85797.cljs$core$IFn$_invoke$arity$2(G__85669,G__85670) : init_state__72620__auto___85797.call(null,G__85669,G__85670));
})()});
return obj85668;
})();
} else {
this__72619__auto__.state = (function (){var obj85672 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85672;
})();
}

return null;
});})(options__72617__auto___85790))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.union_example_1.ThingListItem,new cljs.core.Keyword("book.queries.union-example-1","ThingListItem","book.queries.union-example-1/ThingListItem",-254300896),options__72617__auto___85790);
book.queries.union_example_1.ui_thing = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.queries.union_example_1.ThingListItem,book.queries.union_example_1.item_key);

var options__72617__auto___85798 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$union_example_1$render_ItemDetail_Union(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
var props__$1 = com.fulcrologic.fulcro.components.props(this$);
var page__85300__auto__ = cljs.core.first(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(this$,props__$1));
var G__85674 = page__85300__auto__;
var G__85674__$1 = (((G__85674 instanceof cljs.core.Keyword))?G__85674.fqn:null);
switch (G__85674__$1) {
case "person/id":
var fexpr__85675 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.PersonDetail);
return (fexpr__85675.cljs$core$IFn$_invoke$arity$1 ? fexpr__85675.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__85675.call(null,props__$1));

break;
case "place/id":
var fexpr__85676 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.PlaceDetail);
return (fexpr__85676.cljs$core$IFn$_invoke$arity$1 ? fexpr__85676.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__85676.call(null,props__$1));

break;
case "thing/id":
var fexpr__85679 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.ThingDetail);
return (fexpr__85679.cljs$core$IFn$_invoke$arity$1 ? fexpr__85679.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__85679.call(null,props__$1));

break;
default:
var this$__$1 = this$;
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"No route"]);

}
}));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$union_example_1$ident_STAR_(this$,props){
return book.queries.union_example_1.item_ident(props);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$union_example_1$build_raw_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.queries.union_example_1.PersonDetail,params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$union_example_1$query_STAR_(this$){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("person","id","person/id",-392409377),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.PersonDetail),new cljs.core.Keyword("place","id","place/id",-1273392819),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.PlaceDetail),new cljs.core.Keyword("thing","id","thing/id",-1278462650),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.ThingDetail)], null);
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.union_example_1 !== 'undefined') && (typeof book.queries.union_example_1.ItemDetail_Union !== 'undefined')){
} else {
book.queries.union_example_1.ItemDetail_Union = ((function (options__72617__auto___85798){
return (function book$queries$union_example_1$ItemDetail_Union(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85798,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85807)){
var init_state__72620__auto___85808 = temp__5733__auto___85807;
this__72619__auto__.state = (function (){var obj85681 = ({"fulcro$state":(function (){var G__85682 = this__72619__auto__;
var G__85683 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85808.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85808.cljs$core$IFn$_invoke$arity$2(G__85682,G__85683) : init_state__72620__auto___85808.call(null,G__85682,G__85683));
})()});
return obj85681;
})();
} else {
this__72619__auto__.state = (function (){var obj85685 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85685;
})();
}

return null;
});})(options__72617__auto___85798))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.union_example_1.ItemDetail_Union,new cljs.core.Keyword("book.queries.union-example-1","ItemDetail-Union","book.queries.union-example-1/ItemDetail-Union",1554922319),options__72617__auto___85798);

book.queries.union_example_1.ui_ItemDetail_Union = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.ItemDetail_Union);


var options__72617__auto___85809 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$union_example_1$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.routing.routers","by-id","fulcro.client.routing.routers/by-id",-2014319047),new cljs.core.Keyword(null,"detail-router","detail-router",1951550770)], null);
}),new cljs.core.Keyword(null,"default-route","default-route",-1491022475),book.queries.union_example_1.PersonDetail,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$union_example_1$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.Keyword(null,"detail-router","detail-router",1951550770),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.queries.union_example_1.ItemDetail_Union,params)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$union_example_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.ItemDetail_Union)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$union_example_1$render_ItemDetail(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
var computed__85340__auto__ = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var props__85341__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.props(this$));
var props_with_computed__85342__auto__ = com.fulcrologic.fulcro.components.computed(props__85341__auto__,computed__85340__auto__);
return (book.queries.union_example_1.ui_ItemDetail_Union.cljs$core$IFn$_invoke$arity$1 ? book.queries.union_example_1.ui_ItemDetail_Union.cljs$core$IFn$_invoke$arity$1(props_with_computed__85342__auto__) : book.queries.union_example_1.ui_ItemDetail_Union.call(null,props_with_computed__85342__auto__));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.union_example_1 !== 'undefined') && (typeof book.queries.union_example_1.ItemDetail !== 'undefined')){
} else {
book.queries.union_example_1.ItemDetail = ((function (options__72617__auto___85809){
return (function book$queries$union_example_1$ItemDetail(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85809,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85810)){
var init_state__72620__auto___85811 = temp__5733__auto___85810;
this__72619__auto__.state = (function (){var obj85687 = ({"fulcro$state":(function (){var G__85688 = this__72619__auto__;
var G__85689 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85811.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85811.cljs$core$IFn$_invoke$arity$2(G__85688,G__85689) : init_state__72620__auto___85811.call(null,G__85688,G__85689));
})()});
return obj85687;
})();
} else {
this__72619__auto__.state = (function (){var obj85691 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85691;
})();
}

return null;
});})(options__72617__auto___85809))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.union_example_1.ItemDetail,new cljs.core.Keyword("book.queries.union-example-1","ItemDetail","book.queries.union-example-1/ItemDetail",2108102699),options__72617__auto___85809);
book.queries.union_example_1.ui_item_detail = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.ItemDetail);

var options__72617__auto___85812 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$union_example_1$ident_STAR_(this$,props){
return book.queries.union_example_1.item_ident(props);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$union_example_1$query_STAR_(this$){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("person","id","person/id",-392409377),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.PersonListItem),new cljs.core.Keyword("place","id","place/id",-1273392819),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.PlaceListItem),new cljs.core.Keyword("thing","id","thing/id",-1278462650),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.ThingListItem)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$union_example_1$render_ItemUnion(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
if(book.queries.union_example_1.person_QMARK_(props)){
return (book.queries.union_example_1.ui_person.cljs$core$IFn$_invoke$arity$1 ? book.queries.union_example_1.ui_person.cljs$core$IFn$_invoke$arity$1(props) : book.queries.union_example_1.ui_person.call(null,props));
} else {
if(book.queries.union_example_1.place_QMARK_(props)){
return (book.queries.union_example_1.ui_place.cljs$core$IFn$_invoke$arity$1 ? book.queries.union_example_1.ui_place.cljs$core$IFn$_invoke$arity$1(props) : book.queries.union_example_1.ui_place.call(null,props));
} else {
if(book.queries.union_example_1.thing_QMARK_(props)){
return (book.queries.union_example_1.ui_thing.cljs$core$IFn$_invoke$arity$1 ? book.queries.union_example_1.ui_thing.cljs$core$IFn$_invoke$arity$1(props) : book.queries.union_example_1.ui_thing.call(null,props));
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Invalid ident used in app state."]);

}
}
}
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.union_example_1 !== 'undefined') && (typeof book.queries.union_example_1.ItemUnion !== 'undefined')){
} else {
book.queries.union_example_1.ItemUnion = ((function (options__72617__auto___85812){
return (function book$queries$union_example_1$ItemUnion(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85812,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85813)){
var init_state__72620__auto___85814 = temp__5733__auto___85813;
this__72619__auto__.state = (function (){var obj85693 = ({"fulcro$state":(function (){var G__85694 = this__72619__auto__;
var G__85695 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85814.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85814.cljs$core$IFn$_invoke$arity$2(G__85694,G__85695) : init_state__72620__auto___85814.call(null,G__85694,G__85695));
})()});
return obj85693;
})();
} else {
this__72619__auto__.state = (function (){var obj85697 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85697;
})();
}

return null;
});})(options__72617__auto___85812))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.union_example_1.ItemUnion,new cljs.core.Keyword("book.queries.union-example-1","ItemUnion","book.queries.union-example-1/ItemUnion",1147188468),options__72617__auto___85812);
book.queries.union_example_1.ui_item_union = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.queries.union_example_1.ItemUnion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),book.queries.union_example_1.item_key], null));

var options__72617__auto___85815 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$union_example_1$build_raw_initial_state_STAR_(p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.queries.union_example_1.make_person((1),"Tony"),book.queries.union_example_1.make_thing((2),"Toaster"),book.queries.union_example_1.make_place((3),"New York"),book.queries.union_example_1.make_person((4),"Sally"),book.queries.union_example_1.make_thing((5),"Pillow"),book.queries.union_example_1.make_place((6),"Canada")], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$union_example_1$ident_STAR_(this$,p__85698){
var map__85699 = p__85698;
var map__85699__$1 = (((((!((map__85699 == null))))?(((((map__85699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85699):map__85699);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85699__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lists","id","lists/id",-1285810529),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$union_example_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.ItemUnion)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$union_example_1$render_ItemList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85701 = com.fulcrologic.fulcro.components.props(this$);
var map__85701__$1 = (((((!((map__85701 == null))))?(((((map__85701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85701):map__85701);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85701__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var map__85702 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__85702__$1 = (((((!((map__85702 == null))))?(((((map__85702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85702):map__85702);
var onSelect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85702__$1,new cljs.core.Keyword(null,"onSelect","onSelect",251862405));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__85701,map__85701__$1,items,map__85702,map__85702__$1,onSelect){
return (function (i){
var G__85705 = com.fulcrologic.fulcro.components.computed(i,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onSelect","onSelect",251862405),onSelect], null));
return (book.queries.union_example_1.ui_item_union.cljs$core$IFn$_invoke$arity$1 ? book.queries.union_example_1.ui_item_union.cljs$core$IFn$_invoke$arity$1(G__85705) : book.queries.union_example_1.ui_item_union.call(null,G__85705));
});})(map__85701,map__85701__$1,items,map__85702,map__85702__$1,onSelect))
,items)], null),new cljs.core.Keyword(null,".ui.list",".ui.list",1042314487));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.union_example_1 !== 'undefined') && (typeof book.queries.union_example_1.ItemList !== 'undefined')){
} else {
book.queries.union_example_1.ItemList = ((function (options__72617__auto___85815){
return (function book$queries$union_example_1$ItemList(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85815,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85816)){
var init_state__72620__auto___85817 = temp__5733__auto___85816;
this__72619__auto__.state = (function (){var obj85710 = ({"fulcro$state":(function (){var G__85711 = this__72619__auto__;
var G__85712 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85817.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85817.cljs$core$IFn$_invoke$arity$2(G__85711,G__85712) : init_state__72620__auto___85817.call(null,G__85711,G__85712));
})()});
return obj85710;
})();
} else {
this__72619__auto__.state = (function (){var obj85714 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85714;
})();
}

return null;
});})(options__72617__auto___85815))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.union_example_1.ItemList,new cljs.core.Keyword("book.queries.union-example-1","ItemList","book.queries.union-example-1/ItemList",1120093338),options__72617__auto___85815);
book.queries.union_example_1.ui_item_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.ItemList);

var options__72617__auto___85818 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$union_example_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-list","item-list",-1307039302),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.ItemList)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-detail","item-detail",1545358360),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.union_example_1.ItemDetail)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$union_example_1$build_raw_initial_state_STAR_(p){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.routing.legacy_ui_routers.make_route(new cljs.core.Keyword(null,"detail","detail",-1545345025),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.router_instruction(new cljs.core.Keyword(null,"detail-router","detail-router",1951550770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("param","kind","param/kind",-1423508230),new cljs.core.Keyword("param","id","param/id",-1272524377)], null))], null))], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item-list","item-list",-1307039302),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.queries.union_example_1.ItemList,null),new cljs.core.Keyword(null,"item-detail","item-detail",1545358360),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.queries.union_example_1.ItemDetail,null)], null)], 0));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$union_example_1$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85717 = com.fulcrologic.fulcro.components.props(this$);
var map__85717__$1 = (((((!((map__85717 == null))))?(((((map__85717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85717):map__85717);
var item_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85717__$1,new cljs.core.Keyword(null,"item-list","item-list",-1307039302));
var item_detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85717__$1,new cljs.core.Keyword(null,"item-detail","item-detail",1545358360));
var showDetail = ((function (map__85717,map__85717__$1,item_list,item_detail){
return (function (p__85719){
var vec__85720 = p__85719;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85720,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85720,(1),null);
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","route-to","com.fulcrologic.fulcro.routing.legacy-ui-routers/route-to",-1157637021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"handler","handler",-195596612),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"detail","detail",-1545345025),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"route-params","route-params",2111411055),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"kind","kind",-717265803),null,(1),null)),(new cljs.core.List(null,kind,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",-1388402092),null,(1),null)),(new cljs.core.List(null,id,null,(1),null))], 0))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));
});})(map__85717,map__85717__$1,item_list,item_detail))
;
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"key": "example-frame-key"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["style",({}),".boxed {border: 1px solid black}"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["table",({"className": "ui table"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Items"]),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Detail"]))], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__85723 = com.fulcrologic.fulcro.components.computed(item_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onSelect","onSelect",251862405),showDetail], null));
return (book.queries.union_example_1.ui_item_list.cljs$core$IFn$_invoke$arity$1 ? book.queries.union_example_1.ui_item_list.cljs$core$IFn$_invoke$arity$1(G__85723) : book.queries.union_example_1.ui_item_list.call(null,G__85723));
})()], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.queries.union_example_1.ui_item_detail.cljs$core$IFn$_invoke$arity$1 ? book.queries.union_example_1.ui_item_detail.cljs$core$IFn$_invoke$arity$1(item_detail) : book.queries.union_example_1.ui_item_detail.call(null,item_detail))], null),null))], null),null))], null),null))]))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.union_example_1 !== 'undefined') && (typeof book.queries.union_example_1.Root !== 'undefined')){
} else {
book.queries.union_example_1.Root = ((function (options__72617__auto___85818){
return (function book$queries$union_example_1$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85818,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85819)){
var init_state__72620__auto___85820 = temp__5733__auto___85819;
this__72619__auto__.state = (function (){var obj85725 = ({"fulcro$state":(function (){var G__85726 = this__72619__auto__;
var G__85727 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85820.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85820.cljs$core$IFn$_invoke$arity$2(G__85726,G__85727) : init_state__72620__auto___85820.call(null,G__85726,G__85727));
})()});
return obj85725;
})();
} else {
this__72619__auto__.state = (function (){var obj85729 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85729;
})();
}

return null;
});})(options__72617__auto___85818))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.union_example_1.Root,new cljs.core.Keyword("book.queries.union-example-1","Root","book.queries.union-example-1/Root",-429297635),options__72617__auto___85818);

//# sourceMappingURL=book.queries.union_example_1.js.map
