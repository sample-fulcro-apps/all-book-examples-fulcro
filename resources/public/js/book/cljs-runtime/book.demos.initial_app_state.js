goog.provide('book.demos.initial_app_state');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.components');
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nav","settings","nav/settings",-1097355235,null),(function (p__89077,sym,params){
var map__89078 = p__89077;
var map__89078__$1 = (((((!((map__89078 == null))))?(((((map__89078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89078):map__89078);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89078__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__89078,map__89078__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"panes","panes",-721909923),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null));
});})(map__89078,map__89078__$1,state))
], null);
}));
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nav","main","nav/main",-477429177,null),(function (p__89080,sym,params){
var map__89081 = p__89080;
var map__89081__$1 = (((((!((map__89081 == null))))?(((((map__89081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89081):map__89081);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89081__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__89081,map__89081__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"panes","panes",-721909923),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null));
});})(map__89081,map__89081__$1,state))
], null);
}));

var options__72617__auto___89186 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$initial_app_state$build_raw_initial_state_STAR_(p__89083){
var map__89084 = p__89083;
var map__89084__$1 = (((((!((map__89084 == null))))?(((((map__89084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89084):map__89084);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89084__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$initial_app_state$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$initial_app_state$ident_STAR_(this$,p__89086){
var map__89087 = p__89086;
var map__89087__$1 = (((((!((map__89087 == null))))?(((((map__89087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89087):map__89087);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89087__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("labels","by-value","labels/by-value",-2015808881),value], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$initial_app_state$render_ItemLabel(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89089 = com.fulcrologic.fulcro.components.props(this$);
var map__89089__$1 = (((((!((map__89089 == null))))?(((((map__89089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89089):map__89089);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89089__$1,new cljs.core.Keyword(null,"value","value",305978217));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.initial_app_state !== 'undefined') && (typeof book.demos.initial_app_state.ItemLabel !== 'undefined')){
} else {
book.demos.initial_app_state.ItemLabel = ((function (options__72617__auto___89186){
return (function book$demos$initial_app_state$ItemLabel(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89186,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89187)){
var init_state__72620__auto___89188 = temp__5733__auto___89187;
this__72619__auto__.state = (function (){var obj89092 = ({"fulcro$state":(function (){var G__89093 = this__72619__auto__;
var G__89094 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89188.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89188.cljs$core$IFn$_invoke$arity$2(G__89093,G__89094) : init_state__72620__auto___89188.call(null,G__89093,G__89094));
})()});
return obj89092;
})();
} else {
this__72619__auto__.state = (function (){var obj89096 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89096;
})();
}

return null;
});})(options__72617__auto___89186))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.initial_app_state.ItemLabel,new cljs.core.Keyword("book.demos.initial-app-state","ItemLabel","book.demos.initial-app-state/ItemLabel",-1613693223),options__72617__auto___89186);
book.demos.initial_app_state.ui_label = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.ItemLabel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"value","value",305978217)], null));

var options__72617__auto___89189 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$initial_app_state$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.initial_app_state.ItemLabel)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$initial_app_state$build_raw_initial_state_STAR_(p__89097){
var map__89098 = p__89097;
var map__89098__$1 = (((((!((map__89098 == null))))?(((((map__89098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89098):map__89098);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89098__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89098__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"label","label",1718410804),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.ItemLabel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),label], null))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$initial_app_state$render_Foo(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89100 = com.fulcrologic.fulcro.components.props(this$);
var map__89100__$1 = (((((!((map__89100 == null))))?(((((map__89100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89100):map__89100);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89100__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Foo"]),com.fulcrologic.fulcro.components.force_children((book.demos.initial_app_state.ui_label.cljs$core$IFn$_invoke$arity$1 ? book.demos.initial_app_state.ui_label.cljs$core$IFn$_invoke$arity$1(label) : book.demos.initial_app_state.ui_label.call(null,label)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.initial_app_state !== 'undefined') && (typeof book.demos.initial_app_state.Foo !== 'undefined')){
} else {
book.demos.initial_app_state.Foo = ((function (options__72617__auto___89189){
return (function book$demos$initial_app_state$Foo(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89189,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89190)){
var init_state__72620__auto___89191 = temp__5733__auto___89190;
this__72619__auto__.state = (function (){var obj89103 = ({"fulcro$state":(function (){var G__89104 = this__72619__auto__;
var G__89105 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89191.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89191.cljs$core$IFn$_invoke$arity$2(G__89104,G__89105) : init_state__72620__auto___89191.call(null,G__89104,G__89105));
})()});
return obj89103;
})();
} else {
this__72619__auto__.state = (function (){var obj89107 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89107;
})();
}

return null;
});})(options__72617__auto___89189))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.initial_app_state.Foo,new cljs.core.Keyword("book.demos.initial-app-state","Foo","book.demos.initial-app-state/Foo",-1580086171),options__72617__auto___89189);
book.demos.initial_app_state.ui_foo = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.Foo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

var options__72617__auto___89192 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$initial_app_state$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.initial_app_state.ItemLabel)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$initial_app_state$build_raw_initial_state_STAR_(p__89126){
var map__89127 = p__89126;
var map__89127__$1 = (((((!((map__89127 == null))))?(((((map__89127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89127):map__89127);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89127__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89127__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"label","label",1718410804),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.ItemLabel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),label], null))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$initial_app_state$render_Bar(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89129 = com.fulcrologic.fulcro.components.props(this$);
var map__89129__$1 = (((((!((map__89129 == null))))?(((((map__89129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89129):map__89129);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89129__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Bar"]),com.fulcrologic.fulcro.components.force_children((book.demos.initial_app_state.ui_label.cljs$core$IFn$_invoke$arity$1 ? book.demos.initial_app_state.ui_label.cljs$core$IFn$_invoke$arity$1(label) : book.demos.initial_app_state.ui_label.call(null,label)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.initial_app_state !== 'undefined') && (typeof book.demos.initial_app_state.Bar !== 'undefined')){
} else {
book.demos.initial_app_state.Bar = ((function (options__72617__auto___89192){
return (function book$demos$initial_app_state$Bar(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89192,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89193)){
var init_state__72620__auto___89194 = temp__5733__auto___89193;
this__72619__auto__.state = (function (){var obj89132 = ({"fulcro$state":(function (){var G__89133 = this__72619__auto__;
var G__89134 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89194.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89194.cljs$core$IFn$_invoke$arity$2(G__89133,G__89134) : init_state__72620__auto___89194.call(null,G__89133,G__89134));
})()});
return obj89132;
})();
} else {
this__72619__auto__.state = (function (){var obj89136 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89136;
})();
}

return null;
});})(options__72617__auto___89192))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.initial_app_state.Bar,new cljs.core.Keyword("book.demos.initial-app-state","Bar","book.demos.initial-app-state/Bar",-1764733166),options__72617__auto___89192);
book.demos.initial_app_state.ui_bar = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.Bar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

var options__72617__auto___89195 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$initial_app_state$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.Bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"label","label",1718410804),"A"], null)),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.Foo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"label","label",1718410804),"B"], null)),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.Bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"label","label",1718410804),"C"], null))], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$initial_app_state$query_STAR_(this$){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"foo","foo",1268894036),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.initial_app_state.Foo),new cljs.core.Keyword(null,"bar","bar",-1386246584),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.initial_app_state.Bar)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$initial_app_state$ident_STAR_(this$,p__89137){
var map__89138 = p__89137;
var map__89138__$1 = (((((!((map__89138 == null))))?(((((map__89138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89138):map__89138);
var props = map__89138__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89138__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89138__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$initial_app_state$render_ListItem(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89140 = com.fulcrologic.fulcro.components.props(this$);
var map__89140__$1 = (((((!((map__89140 == null))))?(((((map__89140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89140):map__89140);
var props = map__89140__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89140__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89140__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__89142 = type;
var G__89142__$1 = (((G__89142 instanceof cljs.core.Keyword))?G__89142.fqn:null);
switch (G__89142__$1) {
case "foo":
return (book.demos.initial_app_state.ui_foo.cljs$core$IFn$_invoke$arity$1 ? book.demos.initial_app_state.ui_foo.cljs$core$IFn$_invoke$arity$1(props) : book.demos.initial_app_state.ui_foo.call(null,props));

break;
case "bar":
return (book.demos.initial_app_state.ui_bar.cljs$core$IFn$_invoke$arity$1 ? book.demos.initial_app_state.ui_bar.cljs$core$IFn$_invoke$arity$1(props) : book.demos.initial_app_state.ui_bar.call(null,props));

break;
default:
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"No Item renderer!"]);

}
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.initial_app_state !== 'undefined') && (typeof book.demos.initial_app_state.ListItem !== 'undefined')){
} else {
book.demos.initial_app_state.ListItem = ((function (options__72617__auto___89195){
return (function book$demos$initial_app_state$ListItem(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89195,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89197)){
var init_state__72620__auto___89198 = temp__5733__auto___89197;
this__72619__auto__.state = (function (){var obj89144 = ({"fulcro$state":(function (){var G__89145 = this__72619__auto__;
var G__89146 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89198.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89198.cljs$core$IFn$_invoke$arity$2(G__89145,G__89146) : init_state__72620__auto___89198.call(null,G__89145,G__89146));
})()});
return obj89144;
})();
} else {
this__72619__auto__.state = (function (){var obj89148 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89148;
})();
}

return null;
});})(options__72617__auto___89195))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.initial_app_state.ListItem,new cljs.core.Keyword("book.demos.initial-app-state","ListItem","book.demos.initial-app-state/ListItem",1946326635),options__72617__auto___89195);
book.demos.initial_app_state.ui_list_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.ListItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

var options__72617__auto___89200 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$initial_app_state$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"singleton","singleton",-1768662798),new cljs.core.Keyword(null,"label","label",1718410804),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.ItemLabel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Settings"], null))], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$initial_app_state$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.initial_app_state.ItemLabel)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$initial_app_state$render_Settings(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89150 = com.fulcrologic.fulcro.components.props(this$);
var map__89150__$1 = (((((!((map__89150 == null))))?(((((map__89150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89150):map__89150);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89150__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return (book.demos.initial_app_state.ui_label.cljs$core$IFn$_invoke$arity$1 ? book.demos.initial_app_state.ui_label.cljs$core$IFn$_invoke$arity$1(label) : book.demos.initial_app_state.ui_label.call(null,label));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.initial_app_state !== 'undefined') && (typeof book.demos.initial_app_state.Settings !== 'undefined')){
} else {
book.demos.initial_app_state.Settings = ((function (options__72617__auto___89200){
return (function book$demos$initial_app_state$Settings(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89200,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89201)){
var init_state__72620__auto___89202 = temp__5733__auto___89201;
this__72619__auto__.state = (function (){var obj89153 = ({"fulcro$state":(function (){var G__89154 = this__72619__auto__;
var G__89155 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89202.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89202.cljs$core$IFn$_invoke$arity$2(G__89154,G__89155) : init_state__72620__auto___89202.call(null,G__89154,G__89155));
})()});
return obj89153;
})();
} else {
this__72619__auto__.state = (function (){var obj89157 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89157;
})();
}

return null;
});})(options__72617__auto___89200))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.initial_app_state.Settings,new cljs.core.Keyword("book.demos.initial-app-state","Settings","book.demos.initial-app-state/Settings",1416907883),options__72617__auto___89200);
book.demos.initial_app_state.ui_settings = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.Settings,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"type","type",1174270348)], null));

var options__72617__auto___89203 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$initial_app_state$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"singleton","singleton",-1768662798),new cljs.core.Keyword(null,"label","label",1718410804),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.ItemLabel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Main"], null))], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$initial_app_state$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.initial_app_state.ItemLabel)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$initial_app_state$render_Main(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89158 = com.fulcrologic.fulcro.components.props(this$);
var map__89158__$1 = (((((!((map__89158 == null))))?(((((map__89158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89158):map__89158);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89158__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return (book.demos.initial_app_state.ui_label.cljs$core$IFn$_invoke$arity$1 ? book.demos.initial_app_state.ui_label.cljs$core$IFn$_invoke$arity$1(label) : book.demos.initial_app_state.ui_label.call(null,label));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.initial_app_state !== 'undefined') && (typeof book.demos.initial_app_state.Main !== 'undefined')){
} else {
book.demos.initial_app_state.Main = ((function (options__72617__auto___89203){
return (function book$demos$initial_app_state$Main(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89203,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89204)){
var init_state__72620__auto___89205 = temp__5733__auto___89204;
this__72619__auto__.state = (function (){var obj89161 = ({"fulcro$state":(function (){var G__89162 = this__72619__auto__;
var G__89163 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89205.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89205.cljs$core$IFn$_invoke$arity$2(G__89162,G__89163) : init_state__72620__auto___89205.call(null,G__89162,G__89163));
})()});
return obj89161;
})();
} else {
this__72619__auto__.state = (function (){var obj89165 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89165;
})();
}

return null;
});})(options__72617__auto___89203))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.initial_app_state.Main,new cljs.core.Keyword("book.demos.initial-app-state","Main","book.demos.initial-app-state/Main",-300486052),options__72617__auto___89203);
book.demos.initial_app_state.ui_main = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.Main,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"type","type",1174270348)], null));

var options__72617__auto___89207 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$initial_app_state$build_raw_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.Main,null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$initial_app_state$query_STAR_(this$){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"settings","settings",1556144875),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.initial_app_state.Settings),new cljs.core.Keyword(null,"main","main",-2117802661),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.initial_app_state.Main)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$initial_app_state$ident_STAR_(this$,p__89166){
var map__89167 = p__89166;
var map__89167__$1 = (((((!((map__89167 == null))))?(((((map__89167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89167):map__89167);
var props = map__89167__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89167__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89167__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$initial_app_state$render_PaneSwitcher(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89169 = com.fulcrologic.fulcro.components.props(this$);
var map__89169__$1 = (((((!((map__89169 == null))))?(((((map__89169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89169):map__89169);
var props = map__89169__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89169__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89169__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__89171 = type;
var G__89171__$1 = (((G__89171 instanceof cljs.core.Keyword))?G__89171.fqn:null);
switch (G__89171__$1) {
case "settings":
return (book.demos.initial_app_state.ui_settings.cljs$core$IFn$_invoke$arity$1 ? book.demos.initial_app_state.ui_settings.cljs$core$IFn$_invoke$arity$1(props) : book.demos.initial_app_state.ui_settings.call(null,props));

break;
case "main":
return (book.demos.initial_app_state.ui_main.cljs$core$IFn$_invoke$arity$1 ? book.demos.initial_app_state.ui_main.cljs$core$IFn$_invoke$arity$1(props) : book.demos.initial_app_state.ui_main.call(null,props));

break;
default:
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"NO PANE!"]);

}
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.initial_app_state !== 'undefined') && (typeof book.demos.initial_app_state.PaneSwitcher !== 'undefined')){
} else {
book.demos.initial_app_state.PaneSwitcher = ((function (options__72617__auto___89207){
return (function book$demos$initial_app_state$PaneSwitcher(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89207,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89212)){
var init_state__72620__auto___89213 = temp__5733__auto___89212;
this__72619__auto__.state = (function (){var obj89173 = ({"fulcro$state":(function (){var G__89174 = this__72619__auto__;
var G__89175 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89213.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89213.cljs$core$IFn$_invoke$arity$2(G__89174,G__89175) : init_state__72620__auto___89213.call(null,G__89174,G__89175));
})()});
return obj89173;
})();
} else {
this__72619__auto__.state = (function (){var obj89177 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89177;
})();
}

return null;
});})(options__72617__auto___89207))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.initial_app_state.PaneSwitcher,new cljs.core.Keyword("book.demos.initial-app-state","PaneSwitcher","book.demos.initial-app-state/PaneSwitcher",738082828),options__72617__auto___89207);
book.demos.initial_app_state.ui_panes = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.PaneSwitcher,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"type","type",1174270348)], null));

var options__72617__auto___89214 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$initial_app_state$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"panes","panes",-721909923),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.PaneSwitcher,null),new cljs.core.Keyword(null,"items","items",1031954938),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.ListItem,null)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$initial_app_state$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.initial_app_state.ListItem)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panes","panes",-721909923),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.initial_app_state.PaneSwitcher)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$initial_app_state$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89178 = com.fulcrologic.fulcro.components.props(this$);
var map__89178__$1 = (((((!((map__89178 == null))))?(((((map__89178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89178):map__89178);
var panes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89178__$1,new cljs.core.Keyword(null,"panes","panes",-721909923));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89178__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89178,map__89178__$1,panes,items){
return (function (evt){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("nav","settings","nav/settings",-1097355235,null))], null));
});})(map__89178,map__89178__$1,panes,items))
], null),"Go to settings"], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__89178,map__89178__$1,panes,items){
return (function (evt){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("nav","main","nav/main",-477429177,null))], null));
});})(map__89178,map__89178__$1,panes,items))
], null),"Go to main"], null),null)),com.fulcrologic.fulcro.components.force_children((book.demos.initial_app_state.ui_panes.cljs$core$IFn$_invoke$arity$1 ? book.demos.initial_app_state.ui_panes.cljs$core$IFn$_invoke$arity$1(panes) : book.demos.initial_app_state.ui_panes.call(null,panes))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({}),"Heterogenous list:"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(book.demos.initial_app_state.ui_list_item,items)], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.initial_app_state !== 'undefined') && (typeof book.demos.initial_app_state.Root !== 'undefined')){
} else {
book.demos.initial_app_state.Root = ((function (options__72617__auto___89214){
return (function book$demos$initial_app_state$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89214,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89215)){
var init_state__72620__auto___89216 = temp__5733__auto___89215;
this__72619__auto__.state = (function (){var obj89181 = ({"fulcro$state":(function (){var G__89182 = this__72619__auto__;
var G__89183 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89216.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89216.cljs$core$IFn$_invoke$arity$2(G__89182,G__89183) : init_state__72620__auto___89216.call(null,G__89182,G__89183));
})()});
return obj89181;
})();
} else {
this__72619__auto__.state = (function (){var obj89185 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89185;
})();
}

return null;
});})(options__72617__auto___89214))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.initial_app_state.Root,new cljs.core.Keyword("book.demos.initial-app-state","Root","book.demos.initial-app-state/Root",-1368960697),options__72617__auto___89214);

//# sourceMappingURL=book.demos.initial_app_state.js.map
