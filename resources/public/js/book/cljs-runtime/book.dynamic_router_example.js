goog.provide('book.dynamic_router_example');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.routing.dynamic_routing');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('taoensso.timbre');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.fulcrologic.fulcro.mutations');

var options__72617__auto___88782 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$dynamic_router_example$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("book.dynamic-router-example","settings","book.dynamic-router-example/settings",-243026524)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$dynamic_router_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$dynamic_router_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings","settings",1556144875),"stuff"], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["settings"], null),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),(function (app,route_params){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.dynamic-router-example",null,16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Will enter settings with route params ",route_params], null);
}),null)),null,-1801795348);

return com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("book.dynamic-router-example","settings","book.dynamic-router-example/settings",-243026524)], null));
}),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),(function (this$,props){
console.log(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$),"props",props);

return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$dynamic_router_example$render_Settings(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Settings"]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.dynamic_router_example !== 'undefined') && (typeof book.dynamic_router_example.Settings !== 'undefined')){
} else {
book.dynamic_router_example.Settings = ((function (options__72617__auto___88782){
return (function book$dynamic_router_example$Settings(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88782,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88783)){
var init_state__72620__auto___88784 = temp__5733__auto___88783;
this__72619__auto__.state = (function (){var obj88719 = ({"fulcro$state":(function (){var G__88720 = this__72619__auto__;
var G__88721 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88784.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88784.cljs$core$IFn$_invoke$arity$2(G__88720,G__88721) : init_state__72620__auto___88784.call(null,G__88720,G__88721));
})()});
return obj88719;
})();
} else {
this__72619__auto__.state = (function (){var obj88723 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88723;
})();
}

return null;
});})(options__72617__auto___88782))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.dynamic_router_example.Settings,new cljs.core.Keyword("book.dynamic-router-example","Settings","book.dynamic-router-example/Settings",709469355),options__72617__auto___88782);

var options__72617__auto___88785 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$dynamic_router_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","modified?","ui/modified?",-2109262013),new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("address","city","address/city",-1506334306),new cljs.core.Keyword("address","state","address/state",786869409)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$dynamic_router_example$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["person",new cljs.core.Keyword("person","id","person/id",-392409377)], null),new cljs.core.Keyword(null,"route-cancelled","route-cancelled",-1402397214),(function (p__88724){
var map__88725 = p__88724;
var map__88725__$1 = (((((!((map__88725 == null))))?(((((map__88725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88725):map__88725);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88725__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.dynamic-router-example",null,31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__88725,map__88725__$1,id){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Routing cancelled to user ",id], null);
});})(map__88725,map__88725__$1,id))
,null)),null,-610528031);
}),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),(function (this$,p__88727){
var map__88728 = p__88727;
var map__88728__$1 = (((((!((map__88728 == null))))?(((((map__88728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88728):map__88728);
var modified_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88728__$1,new cljs.core.Keyword("ui","modified?","ui/modified?",-2109262013));
if(cljs.core.truth_(modified_QMARK_)){
alert("You cannot navigate until the user is not modified!");
} else {
}

return cljs.core.not(modified_QMARK_);
}),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),(function (app,p__88730){
var map__88731 = p__88730;
var map__88731__$1 = (((((!((map__88731 == null))))?(((((map__88731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88731):map__88731);
var route_params = map__88731__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88731__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.dynamic-router-example",null,37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__88731,map__88731__$1,route_params,id){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Will enter user with route params ",route_params], null);
});})(map__88731,map__88731__$1,route_params,id))
,null)),null,-1142338184);

var id__$1 = ((typeof id === 'string')?parseInt(id):id);
return com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id__$1], null),((function (id__$1,map__88731,map__88731__$1,route_params,id){
return (function (){
var G__88737 = app;
var G__88738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id__$1], null);
var G__88739 = book.dynamic_router_example.Person;
var G__88740 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id__$1], null)], null)], null);
return (com.fulcrologic.fulcro.data_fetch.load.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.data_fetch.load.cljs$core$IFn$_invoke$arity$4(G__88737,G__88738,G__88739,G__88740) : com.fulcrologic.fulcro.data_fetch.load.call(null,G__88737,G__88738,G__88739,G__88740));
});})(id__$1,map__88731,map__88731__$1,route_params,id))
);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$dynamic_router_example$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88741 = com.fulcrologic.fulcro.components.props(this$);
var map__88741__$1 = (((((!((map__88741 == null))))?(((((map__88741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88741):map__88741);
var props = map__88741__$1;
var modified_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88741__$1,new cljs.core.Keyword("ui","modified?","ui/modified?",-2109262013));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88741__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88741__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var city = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88741__$1,new cljs.core.Keyword("address","city","address/city",-1506334306));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88741__$1,new cljs.core.Keyword("address","state","address/state",786869409));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Person ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(city),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)].join('')], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__88741,map__88741__$1,props,modified_QMARK_,id,name,city,state){
return (function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","modified?","ui/modified?",-2109262013));
});})(map__88741,map__88741__$1,props,modified_QMARK_,id,name,city,state))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(modified_QMARK_)], null)], null),null),"Modified (prevent routing)"], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.dynamic_router_example !== 'undefined') && (typeof book.dynamic_router_example.Person !== 'undefined')){
} else {
book.dynamic_router_example.Person = ((function (options__72617__auto___88785){
return (function book$dynamic_router_example$Person(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88785,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88789)){
var init_state__72620__auto___88790 = temp__5733__auto___88789;
this__72619__auto__.state = (function (){var obj88744 = ({"fulcro$state":(function (){var G__88745 = this__72619__auto__;
var G__88746 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88790.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88790.cljs$core$IFn$_invoke$arity$2(G__88745,G__88746) : init_state__72620__auto___88790.call(null,G__88745,G__88746));
})()});
return obj88744;
})();
} else {
this__72619__auto__.state = (function (){var obj88748 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88748;
})();
}

return null;
});})(options__72617__auto___88785))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.dynamic_router_example.Person,new cljs.core.Keyword("book.dynamic-router-example","Person","book.dynamic-router-example/Person",-1385511481),options__72617__auto___88785);
book.dynamic_router_example.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.dynamic_router_example.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__72617__auto___88791 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ident","ident",-742346),(function book$dynamic_router_example$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("book.dynamic-router-example","main","book.dynamic-router-example/main",1577465414)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$dynamic_router_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$dynamic_router_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"main","main",-2117802661),"stuff"], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main"], null),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),(function (app,route_params){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.dynamic-router-example",null,63,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Will enter main",route_params], null);
}),null)),null,-741417729);

return com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("book.dynamic-router-example","main","book.dynamic-router-example/main",1577465414)], null));
}),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),(function (this$,props){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.dynamic-router-example",null,66,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$),"props",props], null);
}),null)),null,671637853);

return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$dynamic_router_example$render_Main(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Main"]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.dynamic_router_example !== 'undefined') && (typeof book.dynamic_router_example.Main !== 'undefined')){
} else {
book.dynamic_router_example.Main = ((function (options__72617__auto___88791){
return (function book$dynamic_router_example$Main(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88791,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88792)){
var init_state__72620__auto___88793 = temp__5733__auto___88792;
this__72619__auto__.state = (function (){var obj88750 = ({"fulcro$state":(function (){var G__88751 = this__72619__auto__;
var G__88752 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88793.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88793.cljs$core$IFn$_invoke$arity$2(G__88751,G__88752) : init_state__72620__auto___88793.call(null,G__88751,G__88752));
})()});
return obj88750;
})();
} else {
this__72619__auto__.state = (function (){var obj88754 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88754;
})();
}

return null;
});})(options__72617__auto___88791))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.dynamic_router_example.Main,new cljs.core.Keyword("book.dynamic-router-example","Main","book.dynamic-router-example/Main",-131257700),options__72617__auto___88791);

var options__72617__auto___88794 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"router-targets","router-targets",1582229763),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.dynamic_router_example.Main,book.dynamic_router_example.Settings,book.dynamic_router_example.Person], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$dynamic_router_example$render_TopRouter(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88756 = com.fulcrologic.fulcro.components.props(this$);
var map__88756__$1 = (((((!((map__88756 == null))))?(((((map__88756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88756):map__88756);
var props = map__88756__$1;
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88756__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88756__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961));
var current_state = com.fulcrologic.fulcro.ui_state_machines.get_active_state(this$,new cljs.core.Keyword("book.dynamic-router-example","TopRouter","book.dynamic-router-example/TopRouter",-284490406));
var state_map = com.fulcrologic.fulcro.components.component__GT_state_map(this$);
var sm_env = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,new cljs.core.Keyword("book.dynamic-router-example","TopRouter","book.dynamic-router-example/TopRouter",-284490406),new cljs.core.Keyword(null,"fake","fake",-904846741),cljs.core.PersistentArrayMap.EMPTY);
var pending_path_segment = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(sm_env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268));
var class$ = com.fulcrologic.fulcro.routing.dynamic_routing.current_route_class(this$);
if(cljs.core.truth_((function (){var fexpr__88758 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deferred","deferred",-1976960688),null,new cljs.core.Keyword(null,"routed","routed",-707282794),null], null), null);
return (fexpr__88758.cljs$core$IFn$_invoke$arity$1 ? fexpr__88758.cljs$core$IFn$_invoke$arity$1(current_state) : fexpr__88758.call(null,current_state));
})())){
if(cljs.core.truth_(class$)){
var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(class$);
var G__88759 = com.fulcrologic.fulcro.components.computed(current_route,com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__88759) : factory.call(null,G__88759));
} else {
return null;
}
} else {
var this$__$1 = this$;
var map__88760 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),current_state,new cljs.core.Keyword(null,"route-factory","route-factory",-1848194547),(cljs.core.truth_(class$)?com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(class$):null),new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),pending_path_segment,new cljs.core.Keyword(null,"route-props","route-props",-836332554),current_route], null);
var map__88760__$1 = (((((!((map__88760 == null))))?(((((map__88760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88760):map__88760);
var current_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88760__$1,new cljs.core.Keyword(null,"current-state","current-state",1048284452));
var pending_path_segment__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88760__$1,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268));
var G__88762 = current_state__$1;
var G__88762__$1 = (((G__88762 instanceof cljs.core.Keyword))?G__88762.fqn:null);
switch (G__88762__$1) {
case "pending":
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Loading..."]);

break;
case "failed":
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Loading seems to have failed. Try another route."]);

break;
default:
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Unknown route"]);

}
}
}));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$dynamic_router_example$ident_STAR_(this$,p__88763){
var map__88764 = p__88763;
var map__88764__$1 = (((((!((map__88764 == null))))?(((((map__88764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88764):map__88764);
var props = map__88764__$1;
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88764__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88764__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.Keyword("book.dynamic-router-example","TopRouter","book.dynamic-router-example/TopRouter",-284490406)], null);
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this__88448__auto__){
return com.fulcrologic.fulcro.routing.dynamic_routing.validate_route_targets(this__88448__auto__);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$dynamic_router_example$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.Keyword("book.dynamic-router-example","TopRouter","book.dynamic-router-example/TopRouter",-284490406),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.dynamic_router_example.Main,params),new cljs.core.Keyword(null,"alt0","alt0",486699186),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.dynamic_router_example.Settings,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"alt1","alt1",-496303545),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.dynamic_router_example.Person,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$dynamic_router_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("book.dynamic-router-example","TopRouter","book.dynamic-router-example/TopRouter",-284490406)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.dynamic_router_example.Main)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt0","alt0",486699186),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.dynamic_router_example.Settings)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt1","alt1",-496303545),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.dynamic_router_example.Person)], null)], null);
})], null);
if((typeof book !== 'undefined') && (typeof book.dynamic_router_example !== 'undefined') && (typeof book.dynamic_router_example.TopRouter !== 'undefined')){
} else {
book.dynamic_router_example.TopRouter = ((function (options__72617__auto___88794){
return (function book$dynamic_router_example$TopRouter(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88794,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88796)){
var init_state__72620__auto___88797 = temp__5733__auto___88796;
this__72619__auto__.state = (function (){var obj88767 = ({"fulcro$state":(function (){var G__88768 = this__72619__auto__;
var G__88769 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88797.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88797.cljs$core$IFn$_invoke$arity$2(G__88768,G__88769) : init_state__72620__auto___88797.call(null,G__88768,G__88769));
})()});
return obj88767;
})();
} else {
this__72619__auto__.state = (function (){var obj88771 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88771;
})();
}

return null;
});})(options__72617__auto___88794))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.dynamic_router_example.TopRouter,new cljs.core.Keyword("book.dynamic-router-example","TopRouter","book.dynamic-router-example/TopRouter",-284490406),options__72617__auto___88794);
book.dynamic_router_example.ui_top_router = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.dynamic_router_example.TopRouter);

var options__72617__auto___88798 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$dynamic_router_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","router","root/router",1086182696),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.dynamic_router_example.TopRouter)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$dynamic_router_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","router","root/router",1086182696),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","router","root/router",1086182696),book.dynamic_router_example.TopRouter], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$dynamic_router_example$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88772 = com.fulcrologic.fulcro.components.props(this$);
var map__88772__$1 = (((((!((map__88772 == null))))?(((((map__88772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88772):map__88772);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88772__$1,new cljs.core.Keyword("root","router","root/router",1086182696));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__88772,map__88772__$1,router){
return (function (){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main"], null));
});})(map__88772,map__88772__$1,router))
], null),"Go to main"], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__88772,map__88772__$1,router){
return (function (){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["settings"], null));
});})(map__88772,map__88772__$1,router))
], null),"Go to settings"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__88772,map__88772__$1,router){
return (function (){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["person","1"], null));
});})(map__88772,map__88772__$1,router))
], null),"Go to person 1"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__88772,map__88772__$1,router){
return (function (){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["person","2"], null));
});})(map__88772,map__88772__$1,router))
], null),"Go to person 2"], null),null)),com.fulcrologic.fulcro.components.force_children((book.dynamic_router_example.ui_top_router.cljs$core$IFn$_invoke$arity$1 ? book.dynamic_router_example.ui_top_router.cljs$core$IFn$_invoke$arity$1(router) : book.dynamic_router_example.ui_top_router.call(null,router)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.dynamic_router_example !== 'undefined') && (typeof book.dynamic_router_example.Root !== 'undefined')){
} else {
book.dynamic_router_example.Root = ((function (options__72617__auto___88798){
return (function book$dynamic_router_example$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88798,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88799)){
var init_state__72620__auto___88800 = temp__5733__auto___88799;
this__72619__auto__.state = (function (){var obj88775 = ({"fulcro$state":(function (){var G__88776 = this__72619__auto__;
var G__88777 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88800.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88800.cljs$core$IFn$_invoke$arity$2(G__88776,G__88777) : init_state__72620__auto___88800.call(null,G__88776,G__88777));
})()});
return obj88775;
})();
} else {
this__72619__auto__.state = (function (){var obj88781 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88781;
})();
}

return null;
});})(options__72617__auto___88798))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.dynamic_router_example.Root,new cljs.core.Keyword("book.dynamic-router-example","Root","book.dynamic-router-example/Root",-1459775097),options__72617__auto___88798);
/**
 * Must be used as :client-did-mount parameter of app creation, or called just after you mount the app.
 */
book.dynamic_router_example.client_did_mount = (function book$dynamic_router_example$client_did_mount(app){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main"], null));
});

//# sourceMappingURL=book.dynamic_router_example.js.map
