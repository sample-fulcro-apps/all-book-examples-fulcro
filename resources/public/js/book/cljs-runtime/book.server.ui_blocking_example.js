goog.provide('book.server.ui_blocking_example');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.wsscode.pathom.connect');
goog.require('taoensso.timbre');
book.server.ui_blocking_example.submit_form_mutation = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("book.server.ui-blocking-example","submit-form-mutation","book.server.ui-blocking-example/submit-form-mutation",1102667449,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("book.server.ui-blocking-example","submit-form","book.server.ui-blocking-example/submit-form",-83673330,null)], null),(function book$server$ui_blocking_example$submit_form_mutation(env,params){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.server.ui-blocking-example",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Server got ",params], null);
}),null)),null,-460464917);

if((0.5 > cljs.core.rand.cljs$core$IFn$_invoke$arity$0())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Everything went swell!",new cljs.core.Keyword(null,"ok?","ok?",447310304),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Service temporarily unavailable!",new cljs.core.Keyword(null,"ok?","ok?",447310304),false], null);
}
}));

var options__72617__auto___88890 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$server$ui_blocking_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","active?","ui/active?",459503780),new cljs.core.Keyword("ui","message","ui/message",-406059678)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$server$ui_blocking_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","active?","ui/active?",459503780),false,new cljs.core.Keyword("ui","message","ui/message",-406059678),"Please wait..."], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$server$ui_blocking_example$render_BlockingOverlay(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88801 = com.fulcrologic.fulcro.components.props(this$);
var map__88801__$1 = (((((!((map__88801 == null))))?(((((map__88801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88801):map__88801);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88801__$1,new cljs.core.Keyword("ui","active?","ui/active?",459503780));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88801__$1,new cljs.core.Keyword("ui","message","ui/message",-406059678));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(active_QMARK_)?"block":"none"),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(65000),new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"height","height",1025178622),"100px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(0,0,0,0.5)"], null)], null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"position": new cljs.core.Keyword(null,"relative","relative",22796862), "top": "40px", "color": "white", "textAlign": "center"})}),com.fulcrologic.fulcro.components.force_children(message)]))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.server !== 'undefined') && (typeof book.server.ui_blocking_example !== 'undefined') && (typeof book.server.ui_blocking_example.BlockingOverlay !== 'undefined')){
} else {
book.server.ui_blocking_example.BlockingOverlay = ((function (options__72617__auto___88890){
return (function book$server$ui_blocking_example$BlockingOverlay(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88890,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88896)){
var init_state__72620__auto___88897 = temp__5733__auto___88896;
this__72619__auto__.state = (function (){var obj88804 = ({"fulcro$state":(function (){var G__88809 = this__72619__auto__;
var G__88810 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88897.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88897.cljs$core$IFn$_invoke$arity$2(G__88809,G__88810) : init_state__72620__auto___88897.call(null,G__88809,G__88810));
})()});
return obj88804;
})();
} else {
this__72619__auto__.state = (function (){var obj88812 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88812;
})();
}

return null;
});})(options__72617__auto___88890))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.server.ui_blocking_example.BlockingOverlay,new cljs.core.Keyword("book.server.ui-blocking-example","BlockingOverlay","book.server.ui-blocking-example/BlockingOverlay",13163709),options__72617__auto___88890);
book.server.ui_blocking_example.ui_overlay = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.server.ui_blocking_example.BlockingOverlay);
book.server.ui_blocking_example.set_overlay_visible_STAR_ = (function book$server$ui_blocking_example$set_overlay_visible_STAR_(state,tf){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword("ui","active?","ui/active?",459503780)], null),tf);
});
book.server.ui_blocking_example.set_overlay_message_STAR_ = (function book$server$ui_blocking_example$set_overlay_message_STAR_(state,message){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword("ui","message","ui/message",-406059678)], null),message);
});
/**
 * 
 */
book.server.ui_blocking_example.submit_form = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.server.ui-blocking-example","submit-form","book.server.ui-blocking-example/submit-form",-83673330,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.server.ui-blocking-example","submit-form","book.server.ui-blocking-example/submit-form",-83673330,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),((function (params){
return (function book$server$ui_blocking_example$remote(_){
return true;
});})(params))
,new cljs.core.Keyword(null,"action","action",-811238024),((function (params){
return (function book$server$ui_blocking_example$action(p__88813){
var map__88814 = p__88813;
var map__88814__$1 = (((((!((map__88814 == null))))?(((((map__88814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88814):map__88814);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88814__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__88814,map__88814__$1,state,params){
return (function (s){
return book.server.ui_blocking_example.set_overlay_visible_STAR_(book.server.ui_blocking_example.set_overlay_message_STAR_(s,"Working..."),true);
});})(map__88814,map__88814__$1,state,params))
);

return null;
});})(params))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (params){
return (function book$server$ui_blocking_example$result_action(p__88816){
var map__88817 = p__88816;
var map__88817__$1 = (((((!((map__88817 == null))))?(((((map__88817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88817):map__88817);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88817__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88817__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88817__$1,new cljs.core.Keyword(null,"result","result",1415092211));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.server.ui-blocking-example",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__88817,map__88817__$1,app,state,result,params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Result:",result], null);
});})(map__88817,map__88817__$1,app,state,result,params))
,null)),null,1199078014);

var mutation_result_88958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Symbol("book.server.ui-blocking-example","submit-form","book.server.ui-blocking-example/submit-form",-83673330,null));
var map__88819_88959 = mutation_result_88958;
var map__88819_88960__$1 = (((((!((map__88819_88959 == null))))?(((((map__88819_88959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88819_88959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88819_88959):map__88819_88959);
var message_88961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88819_88960__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var ok_QMARK__88962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88819_88960__$1,new cljs.core.Keyword(null,"ok?","ok?",447310304));
if(cljs.core.truth_(ok_QMARK__88962)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,book.server.ui_blocking_example.set_overlay_visible_STAR_,false);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,book.server.ui_blocking_example.set_overlay_message_STAR_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_88961),"   Retrying submission in 1s."].join(''));

setTimeout(((function (mutation_result_88958,map__88819_88959,map__88819_88960__$1,message_88961,ok_QMARK__88962,map__88817,map__88817__$1,app,state,result,params){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.server.ui_blocking_example.submit_form.cljs$core$IFn$_invoke$arity$1 ? book.server.ui_blocking_example.submit_form.cljs$core$IFn$_invoke$arity$1(params) : book.server.ui_blocking_example.submit_form.call(null,params))], null));
});})(mutation_result_88958,map__88819_88959,map__88819_88960__$1,message_88961,ok_QMARK__88962,map__88817,map__88817__$1,app,state,result,params))
,(1000));
}

return null;
});})(params))
], null);
}));

var options__72617__auto___88963 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$server$ui_blocking_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","name","ui/name",1843678909),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overlay","overlay",-139131598),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.server.ui_blocking_example.BlockingOverlay)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$server$ui_blocking_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overlay","overlay",-139131598),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","name","ui/name",1843678909),"Alicia"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overlay","overlay",-139131598),book.server.ui_blocking_example.BlockingOverlay], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$server$ui_blocking_example$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88851 = com.fulcrologic.fulcro.components.props(this$);
var map__88851__$1 = (((((!((map__88851 == null))))?(((((map__88851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88851):map__88851);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88851__$1,new cljs.core.Keyword("ui","name","ui/name",1843678909));
var overlay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88851__$1,new cljs.core.Keyword(null,"overlay","overlay",-139131598));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"width": "400px", "height": "100px"})}),com.fulcrologic.fulcro.components.force_children((book.server.ui_blocking_example.ui_overlay.cljs$core$IFn$_invoke$arity$1 ? book.server.ui_blocking_example.ui_overlay.cljs$core$IFn$_invoke$arity$1(overlay) : book.server.ui_blocking_example.ui_overlay.call(null,overlay))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Name: ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),name], null)], null),null))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__88851,map__88851__$1,name,overlay){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__88874 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"made-up-data","made-up-data",1000169215),(42)], null);
return (book.server.ui_blocking_example.submit_form.cljs$core$IFn$_invoke$arity$1 ? book.server.ui_blocking_example.submit_form.cljs$core$IFn$_invoke$arity$1(G__88874) : book.server.ui_blocking_example.submit_form.call(null,G__88874));
})()], null));
});})(map__88851,map__88851__$1,name,overlay))
], null),"Submit"], null),null))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.server !== 'undefined') && (typeof book.server.ui_blocking_example !== 'undefined') && (typeof book.server.ui_blocking_example.Root !== 'undefined')){
} else {
book.server.ui_blocking_example.Root = ((function (options__72617__auto___88963){
return (function book$server$ui_blocking_example$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88963,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88997)){
var init_state__72620__auto___88998 = temp__5733__auto___88997;
this__72619__auto__.state = (function (){var obj88880 = ({"fulcro$state":(function (){var G__88881 = this__72619__auto__;
var G__88882 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88998.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88998.cljs$core$IFn$_invoke$arity$2(G__88881,G__88882) : init_state__72620__auto___88998.call(null,G__88881,G__88882));
})()});
return obj88880;
})();
} else {
this__72619__auto__.state = (function (){var obj88884 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88884;
})();
}

return null;
});})(options__72617__auto___88963))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.server.ui_blocking_example.Root,new cljs.core.Keyword("book.server.ui-blocking-example","Root","book.server.ui-blocking-example/Root",-2031565933),options__72617__auto___88963);

//# sourceMappingURL=book.server.ui_blocking_example.js.map
