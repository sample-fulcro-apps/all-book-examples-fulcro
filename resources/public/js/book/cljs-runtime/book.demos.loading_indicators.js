goog.provide('book.demos.loading_indicators');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.fulcrologic.fulcro.components');

var options__72617__auto___89421 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_indicators$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","label","item/label",1746690887),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$loading_indicators$ident_STAR_(this$,p__89344){
var map__89345 = p__89344;
var map__89345__$1 = (((((!((map__89345 == null))))?(((((map__89345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89345):map__89345);
var props = map__89345__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89345__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89345__$1,new cljs.core.Keyword("item","label","item/label",1746690887));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lazy-load.items","by-id","lazy-load.items/by-id",645866036),id], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_indicators$render_Item(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89348 = com.fulcrologic.fulcro.components.props(this$);
var map__89348__$1 = (((((!((map__89348 == null))))?(((((map__89348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89348):map__89348);
var props = map__89348__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89348__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89348__$1,new cljs.core.Keyword("item","label","item/label",1746690887));
var marker_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("item-marker",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
var marker = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,marker_id], null));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,com.fulcrologic.fulcro.components.force_children(((com.fulcrologic.fulcro.data_fetch.loading_QMARK_(marker))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({})," (reloading...)"]):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (marker_id,marker,map__89348,map__89348__$1,props,id,label){
return (function (){
return com.fulcrologic.fulcro.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),marker_id], null));
});})(marker_id,marker,map__89348,map__89348__$1,props,id,label))
], null),"Refresh"], null),null)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_indicators !== 'undefined') && (typeof book.demos.loading_indicators.Item !== 'undefined')){
} else {
book.demos.loading_indicators.Item = ((function (options__72617__auto___89421){
return (function book$demos$loading_indicators$Item(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89421,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89423)){
var init_state__72620__auto___89424 = temp__5733__auto___89423;
this__72619__auto__.state = (function (){var obj89371 = ({"fulcro$state":(function (){var G__89372 = this__72619__auto__;
var G__89373 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89424.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89424.cljs$core$IFn$_invoke$arity$2(G__89372,G__89373) : init_state__72620__auto___89424.call(null,G__89372,G__89373));
})()});
return obj89371;
})();
} else {
this__72619__auto__.state = (function (){var obj89375 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89375;
})();
}

return null;
});})(options__72617__auto___89421))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_indicators.Item,new cljs.core.Keyword("book.demos.loading-indicators","Item","book.demos.loading-indicators/Item",-1842431836),options__72617__auto___89421);
book.demos.loading_indicators.ui_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.loading_indicators.Item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));

var options__72617__auto___89425 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_indicators$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("child","label","child/label",-1798771376),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_indicators.Item)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$loading_indicators$ident_STAR_(this$,p__89377){
var map__89378 = p__89377;
var map__89378__$1 = (((((!((map__89378 == null))))?(((((map__89378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89378):map__89378);
var props = map__89378__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89378__$1,new cljs.core.Keyword("child","label","child/label",-1798771376));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89378__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lazy-load","ui","lazy-load/ui",338821846),new cljs.core.Keyword(null,"child","child",623967545)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_indicators$render_Child(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89383 = com.fulcrologic.fulcro.components.props(this$);
var map__89383__$1 = (((((!((map__89383 == null))))?(((((map__89383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89383):map__89383);
var props = map__89383__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89383__$1,new cljs.core.Keyword("child","label","child/label",-1798771376));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89383__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var render_list = ((function (map__89383,map__89383__$1,props,label,items){
return (function (items__$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(book.demos.loading_indicators.ui_item,items__$1);
});})(map__89383,map__89383__$1,props,label,items))
;
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Child Label: ",com.fulcrologic.fulcro.components.force_children(label)]),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(items))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(book.demos.loading_indicators.ui_item,items):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (render_list,map__89383,map__89383__$1,props,label,items){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_field_BANG_(this$,new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"child-marker","child-marker",-1826571134)], null));
});})(render_list,map__89383,map__89383__$1,props,label,items))
], null),"Load Items"], null),null)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_indicators !== 'undefined') && (typeof book.demos.loading_indicators.Child !== 'undefined')){
} else {
book.demos.loading_indicators.Child = ((function (options__72617__auto___89425){
return (function book$demos$loading_indicators$Child(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89425,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89426)){
var init_state__72620__auto___89427 = temp__5733__auto___89426;
this__72619__auto__.state = (function (){var obj89387 = ({"fulcro$state":(function (){var G__89388 = this__72619__auto__;
var G__89389 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89427.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89427.cljs$core$IFn$_invoke$arity$2(G__89388,G__89389) : init_state__72620__auto___89427.call(null,G__89388,G__89389));
})()});
return obj89387;
})();
} else {
this__72619__auto__.state = (function (){var obj89391 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89391;
})();
}

return null;
});})(options__72617__auto___89425))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_indicators.Child,new cljs.core.Keyword("book.demos.loading-indicators","Child","book.demos.loading-indicators/Child",307387933),options__72617__auto___89425);
book.demos.loading_indicators.ui_child = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.loading_indicators.Child,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("child","label","child/label",-1798771376)], null));

var options__72617__auto___89429 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$loading_indicators$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child","child",623967545),null], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_indicators$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child","child",623967545),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_indicators.Child)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$loading_indicators$ident_STAR_(this$,p__89394){
var map__89395 = p__89394;
var map__89395__$1 = (((((!((map__89395 == null))))?(((((map__89395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89395):map__89395);
var props = map__89395__$1;
var loading_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89395__$1,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143));
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89395__$1,new cljs.core.Keyword(null,"child","child",623967545));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lazy-load","ui","lazy-load/ui",338821846),new cljs.core.Keyword(null,"panel","panel",-558637456)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_indicators$render_Panel(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89401 = com.fulcrologic.fulcro.components.props(this$);
var map__89401__$1 = (((((!((map__89401 == null))))?(((((map__89401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89401):map__89401);
var props = map__89401__$1;
var loading_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89401__$1,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143));
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89401__$1,new cljs.core.Keyword(null,"child","child",623967545));
var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,com.fulcrologic.fulcro.data_fetch.marker_table);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,new cljs.core.Keyword(null,"child-marker","child-marker",-1826571134));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(loading_data)?"block":"none")], null)], null),"GLOBAL LOADING"], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"This is the Panel"])),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(marker)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({}),"Loading child..."]):(cljs.core.truth_(child)?(book.demos.loading_indicators.ui_child.cljs$core$IFn$_invoke$arity$1 ? book.demos.loading_indicators.ui_child.cljs$core$IFn$_invoke$arity$1(child) : book.demos.loading_indicators.ui_child.call(null,child)):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (markers,marker,map__89401,map__89401__$1,props,loading_data,child){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_field_BANG_(this$,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"child-marker","child-marker",-1826571134)], null));
});})(markers,marker,map__89401,map__89401__$1,props,loading_data,child))
], null),"Load Child"], null),null))))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_indicators !== 'undefined') && (typeof book.demos.loading_indicators.Panel !== 'undefined')){
} else {
book.demos.loading_indicators.Panel = ((function (options__72617__auto___89429){
return (function book$demos$loading_indicators$Panel(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89429,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89440)){
var init_state__72620__auto___89441 = temp__5733__auto___89440;
this__72619__auto__.state = (function (){var obj89407 = ({"fulcro$state":(function (){var G__89408 = this__72619__auto__;
var G__89409 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89441.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89441.cljs$core$IFn$_invoke$arity$2(G__89408,G__89409) : init_state__72620__auto___89441.call(null,G__89408,G__89409));
})()});
return obj89407;
})();
} else {
this__72619__auto__.state = (function (){var obj89412 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89412;
})();
}

return null;
});})(options__72617__auto___89429))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_indicators.Panel,new cljs.core.Keyword("book.demos.loading-indicators","Panel","book.demos.loading-indicators/Panel",1221741759),options__72617__auto___89429);
book.demos.loading_indicators.ui_panel = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.demos.loading_indicators.Panel);

var options__72617__auto___89442 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$loading_indicators$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel","panel",-558637456),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.loading_indicators.Panel,null)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$loading_indicators$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel","panel",-558637456),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.loading_indicators.Panel)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$loading_indicators$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89413 = com.fulcrologic.fulcro.components.props(this$);
var map__89413__$1 = (((((!((map__89413 == null))))?(((((map__89413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89413):map__89413);
var props = map__89413__$1;
var panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89413__$1,new cljs.core.Keyword(null,"panel","panel",-558637456));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.demos.loading_indicators.ui_panel.cljs$core$IFn$_invoke$arity$1 ? book.demos.loading_indicators.ui_panel.cljs$core$IFn$_invoke$arity$1(panel) : book.demos.loading_indicators.ui_panel.call(null,panel))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.loading_indicators !== 'undefined') && (typeof book.demos.loading_indicators.Root !== 'undefined')){
} else {
book.demos.loading_indicators.Root = ((function (options__72617__auto___89442){
return (function book$demos$loading_indicators$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89442,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89453)){
var init_state__72620__auto___89454 = temp__5733__auto___89453;
this__72619__auto__.state = (function (){var obj89416 = ({"fulcro$state":(function (){var G__89417 = this__72619__auto__;
var G__89418 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89454.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89454.cljs$core$IFn$_invoke$arity$2(G__89417,G__89418) : init_state__72620__auto___89454.call(null,G__89417,G__89418));
})()});
return obj89416;
})();
} else {
this__72619__auto__.state = (function (){var obj89420 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89420;
})();
}

return null;
});})(options__72617__auto___89442))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.loading_indicators.Root,new cljs.core.Keyword("book.demos.loading-indicators","Root","book.demos.loading-indicators/Root",-1599503422),options__72617__auto___89442);

//# sourceMappingURL=book.demos.loading_indicators.js.map
