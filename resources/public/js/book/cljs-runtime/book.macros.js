goog.provide('book.macros');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro_css.css');
goog.require('goog.object');
goog.require('devcards.util.edn_renderer');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.algorithms.normalize');
goog.require('taoensso.timbre');
/**
 * 
 */
book.macros.update_db_view = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.macros","update-db-view","book.macros/update-db-view",783090033,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.macros","update-db-view","book.macros/update-db-view",783090033,null),(function (fulcro_mutation_env_symbol){
var map__84966 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__84966__$1 = (((((!((map__84966 == null))))?(((((map__84966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84966):map__84966);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84966__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),((function (map__84966,map__84966__$1,value){
return (function book$macros$refresh(env){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watched-state","watched-state",1451480103)], null);
});})(map__84966,map__84966__$1,value))
,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__84966,map__84966__$1,value){
return (function book$macros$action(p__84968){
var map__84970 = p__84968;
var map__84970__$1 = (((((!((map__84970 == null))))?(((((map__84970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84970):map__84970);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84970__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"watched-state","watched-state",1451480103),value);

return null;
});})(map__84966,map__84966__$1,value))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__84966,map__84966__$1,value){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__84966,map__84966__$1,value))
], null);
}));
book.macros.watch_state = (function book$macros$watch_state(this$,example_app){
var target_app_state = (function (){var G__84977 = example_app;
if((G__84977 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__84977);
}
})();
if(cljs.core.truth_(target_app_state)){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.macros","update-db-view","book.macros/update-db-view",783090033,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,cljs.core.deref(target_app_state),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));

return cljs.core.add_watch(target_app_state,new cljs.core.Keyword(null,"example-watch","example-watch",-321074453),((function (target_app_state){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.macros","update-db-view","book.macros/update-db-view",783090033,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,cljs.core.deref(target_app_state),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(target_app_state))
);
} else {
return null;
}
});

var options__72617__auto___85142 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1){
return false;
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".app-holder",".app-holder",1483750998),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid grey",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null)], null),new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733),(function (err,info){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"book.macros",null,37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["App holder failed to start.",err,info], null);
}),null)),null,-914980650);
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var map__84999 = cljs.core.meta(com.fulcrologic.fulcro.components.props(this$));
var map__84999__$1 = (((((!((map__84999 == null))))?(((((map__84999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84999):map__84999);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84999__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84999__$1,new cljs.core.Keyword(null,"root","root",-448657453));
if(cljs.core.truth_((function (){var and__4120__auto__ = app;
if(cljs.core.truth_(and__4120__auto__)){
return root;
} else {
return and__4120__auto__;
}
})())){
return setTimeout(((function (map__84999,map__84999__$1,app,root){
return (function (){
var temp__5733__auto__ = goog.object.get(this$,"appdiv");
if(cljs.core.truth_(temp__5733__auto__)){
var target_div = temp__5733__auto__;
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app,root,target_div);

com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app","app",-560961707),app], null));

return book.macros.watch_state(this$,app);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"book.macros",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5733__auto__,map__84999,map__84999__$1,app,root){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["App holder: Target div not found."], null);
});})(temp__5733__auto__,map__84999,map__84999__$1,app,root))
,null)),null,1397427957);
}
});})(map__84999,map__84999__$1,app,root))
,(10));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"book.macros",null,50,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__84999,map__84999__$1,app,root){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["App holder: Not given an app or root",new cljs.core.Keyword(null,"app","app",-560961707),app,new cljs.core.Keyword(null,"root","root",-448657453),root], null);
});})(map__84999,map__84999__$1,app,root))
,null)),null,853995275);
}
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$macros$render_AppHolder(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _ = com.fulcrologic.fulcro.components.props(this$);
var map__85031 = (com.fulcrologic.fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1(book.macros.AppHolder) : com.fulcrologic.fulcro_css.css.get_classnames.call(null,book.macros.AppHolder));
var map__85031__$1 = (((((!((map__85031 == null))))?(((((map__85031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85031):map__85031);
var app_holder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85031__$1,new cljs.core.Keyword(null,"app-holder","app-holder",-2093315315));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),app_holder,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__85031,map__85031__$1,app_holder,_){
return (function (r){
return goog.object.set(this$,"appdiv",r);
});})(map__85031,map__85031__$1,app_holder,_))
], null),""], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.macros !== 'undefined') && (typeof book.macros.AppHolder !== 'undefined')){
} else {
book.macros.AppHolder = ((function (options__72617__auto___85142){
return (function book$macros$AppHolder(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85142,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85143)){
var init_state__72620__auto___85144 = temp__5733__auto___85143;
this__72619__auto__.state = (function (){var obj85073 = ({"fulcro$state":(function (){var G__85074 = this__72619__auto__;
var G__85075 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85144.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85144.cljs$core$IFn$_invoke$arity$2(G__85074,G__85075) : init_state__72620__auto___85144.call(null,G__85074,G__85075));
})()});
return obj85073;
})();
} else {
this__72619__auto__.state = (function (){var obj85077 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85077;
})();
}

return null;
});})(options__72617__auto___85142))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.macros.AppHolder,new cljs.core.Keyword("book.macros","AppHolder","book.macros/AppHolder",343551536),options__72617__auto___85142);
book.macros.ui_app_holder = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.macros.AppHolder);

var options__72617__auto___85145 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$macros$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","open?","ui/open?",1238446561),false], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$macros$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","open?","ui/open?",1238446561)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".db-block",".db-block",-1180849211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toggle-button",".toggle-button",-1541139659),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"8pt",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null)], null)], null),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$macros$ident_STAR_(this$,p__85086){
var map__85087 = p__85086;
var map__85087__$1 = (((((!((map__85087 == null))))?(((((map__85087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85087):map__85087);
var props = map__85087__$1;
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85087__$1,new cljs.core.Keyword("ui","open?","ui/open?",1238446561));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("widgets","by-id","widgets/by-id",-248061898),new cljs.core.Keyword(null,"edn-renderer","edn-renderer",-1798660566)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$macros$render_EDN(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85090 = com.fulcrologic.fulcro.components.props(this$);
var map__85090__$1 = (((((!((map__85090 == null))))?(((((map__85090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85090):map__85090);
var props = map__85090__$1;
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85090__$1,new cljs.core.Keyword("ui","open?","ui/open?",1238446561));
var map__85091 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__85091__$1 = (((((!((map__85091 == null))))?(((((map__85091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85091):map__85091);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85091__$1,new cljs.core.Keyword(null,"edn","edn",1317840885));
var map__85096 = (com.fulcrologic.fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1(book.macros.EDN) : com.fulcrologic.fulcro_css.css.get_classnames.call(null,book.macros.EDN));
var map__85096__$1 = (((((!((map__85096 == null))))?(((((map__85096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85096):map__85096);
var toggle_button = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85096__$1,new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985));
var db_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85096__$1,new cljs.core.Keyword(null,"db-block","db-block",-2024941771));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "example-edn"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),toggle_button,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85096,map__85096__$1,toggle_button,db_block,map__85090,map__85090__$1,props,open_QMARK_,map__85091,map__85091__$1,edn){
return (function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","open?","ui/open?",1238446561));
});})(map__85096,map__85096__$1,toggle_button,db_block,map__85090,map__85090__$1,props,open_QMARK_,map__85091,map__85091__$1,edn))
], null),"Toggle DB View"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),db_block,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(open_QMARK_)?"block":"none")], null)], null),com.fulcrologic.fulcro.components.force_children(devcards.util.edn_renderer.html_edn(edn))], null),null))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.macros !== 'undefined') && (typeof book.macros.EDN !== 'undefined')){
} else {
book.macros.EDN = ((function (options__72617__auto___85145){
return (function book$macros$EDN(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85145,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85181)){
var init_state__72620__auto___85182 = temp__5733__auto___85181;
this__72619__auto__.state = (function (){var obj85109 = ({"fulcro$state":(function (){var G__85110 = this__72619__auto__;
var G__85111 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85182.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85182.cljs$core$IFn$_invoke$arity$2(G__85110,G__85111) : init_state__72620__auto___85182.call(null,G__85110,G__85111));
})()});
return obj85109;
})();
} else {
this__72619__auto__.state = (function (){var obj85113 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85113;
})();
}

return null;
});})(options__72617__auto___85145))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.macros.EDN,new cljs.core.Keyword("book.macros","EDN","book.macros/EDN",-1784995660),options__72617__auto___85145);
book.macros.ui_edn = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.macros.EDN);

var options__72617__auto___85183 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$macros$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edn-tool","edn-tool",1953768980),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.macros.EDN)], null),new cljs.core.Keyword(null,"watched-state","watched-state",1451480103),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"example-app","example-app",-1819121228)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".example-title",".example-title",1804932543),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),"8px",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"8px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(70, 148, 70)"], null)], null)], null),new cljs.core.Keyword(null,"css-include","css-include",559023012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.macros.EDN,book.macros.AppHolder], null),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$macros$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edn-tool","edn-tool",1953768980),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edn-tool","edn-tool",1953768980),book.macros.EDN], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$macros$render_ExampleRoot(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85115 = com.fulcrologic.fulcro.components.props(this$);
var map__85115__$1 = (((((!((map__85115 == null))))?(((((map__85115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85115):map__85115);
var props = map__85115__$1;
var edn_tool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85115__$1,new cljs.core.Keyword(null,"edn-tool","edn-tool",1953768980));
var watched_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85115__$1,new cljs.core.Keyword(null,"watched-state","watched-state",1451480103));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85115__$1,new cljs.core.Keyword(null,"title","title",636505583));
var example_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85115__$1,new cljs.core.Keyword(null,"example-app","example-app",-1819121228));
var has_title_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",title);
var map__85119 = (com.fulcrologic.fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1(book.macros.ExampleRoot) : com.fulcrologic.fulcro_css.css.get_classnames.call(null,book.macros.ExampleRoot));
var map__85119__$1 = (((((!((map__85119 == null))))?(((((map__85119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85119):map__85119);
var example_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85119__$1,new cljs.core.Keyword(null,"example-title","example-title",-167414152));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((has_title_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),example_title], null),com.fulcrologic.fulcro.components.force_children(title)], null),null):null),com.fulcrologic.fulcro.components.force_children((book.macros.ui_app_holder.cljs$core$IFn$_invoke$arity$1 ? book.macros.ui_app_holder.cljs$core$IFn$_invoke$arity$1(example_app) : book.macros.ui_app_holder.call(null,example_app))),com.fulcrologic.fulcro.components.force_children(((has_title_QMARK_)?(function (){var G__85122 = com.fulcrologic.fulcro.components.computed(edn_tool,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edn","edn",1317840885),watched_state], null));
return (book.macros.ui_edn.cljs$core$IFn$_invoke$arity$1 ? book.macros.ui_edn.cljs$core$IFn$_invoke$arity$1(G__85122) : book.macros.ui_edn.call(null,G__85122));
})():null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.macros !== 'undefined') && (typeof book.macros.ExampleRoot !== 'undefined')){
} else {
book.macros.ExampleRoot = ((function (options__72617__auto___85183){
return (function book$macros$ExampleRoot(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85183,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85200)){
var init_state__72620__auto___85203 = temp__5733__auto___85200;
this__72619__auto__.state = (function (){var obj85130 = ({"fulcro$state":(function (){var G__85131 = this__72619__auto__;
var G__85132 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85203.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85203.cljs$core$IFn$_invoke$arity$2(G__85131,G__85132) : init_state__72620__auto___85203.call(null,G__85131,G__85132));
})()});
return obj85130;
})();
} else {
this__72619__auto__.state = (function (){var obj85134 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85134;
})();
}

return null;
});})(options__72617__auto___85183))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.macros.ExampleRoot,new cljs.core.Keyword("book.macros","ExampleRoot","book.macros/ExampleRoot",2101428240),options__72617__auto___85183);
book.macros.initial_tree__GT_db = (function book$macros$initial_tree__GT_db(root,initial_tree){
return com.fulcrologic.fulcro.algorithms.merge.merge_alternate_union_elements(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3(root,initial_tree,true),root);
});
book.macros.new_example = (function book$macros$new_example(p__85136){
var map__85137 = p__85136;
var map__85137__$1 = (((((!((map__85137 == null))))?(((((map__85137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85137):map__85137);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85137__$1,new cljs.core.Keyword(null,"title","title",636505583));
var example_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85137__$1,new cljs.core.Keyword(null,"example-app","example-app",-1819121228));
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85137__$1,new cljs.core.Keyword(null,"root-class","root-class",-267672298));
return com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([book.macros.initial_tree__GT_db(book.macros.ExampleRoot,com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.macros.ExampleRoot,cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"example-app","example-app",-1819121228),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),example_app,new cljs.core.Keyword(null,"root","root",-448657453),root_class], null)),new cljs.core.Keyword(null,"title","title",636505583),title], null)], 0))], null));
});
if((typeof book !== 'undefined') && (typeof book.macros !== 'undefined') && (typeof book.macros.app_registry !== 'undefined')){
} else {
book.macros.app_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}

//# sourceMappingURL=book.macros.js.map
