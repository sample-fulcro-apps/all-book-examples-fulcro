goog.provide('book.demos.server_error_handling');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('taoensso.timbre');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.fulcrologic.fulcro.application');
book.demos.server_error_handling.server_error_mutation = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("book.demos.server-error-handling","server-error-mutation","book.demos.server-error-handling/server-error-mutation",806388903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("book.demos.server-error-handling","error-mutation","book.demos.server-error-handling/error-mutation",810292318,null)], null),(function book$demos$server_error_handling$server_error_mutation(env,params){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation error",cljs.core.PersistentArrayMap.EMPTY);
}));
book.demos.server_error_handling.child_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.server-error-handling","child-resolver","book.demos.server-error-handling/child-resolver",1752443736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro","read-error","fulcro/read-error",-1218760546)], null)], null),(function book$demos$server_error_handling$child_resolver(env,input){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("read error",cljs.core.PersistentArrayMap.EMPTY);
}));
book.demos.server_error_handling.resolvers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.demos.server_error_handling.server_error_mutation,book.demos.server_error_handling.child_resolver], null);
/**
 * 
 */
book.demos.server_error_handling.read_error = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.demos.server-error-handling","read-error","book.demos.server-error-handling/read-error",116626519,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.demos.server-error-handling","read-error","book.demos.server-error-handling/read-error",116626519,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (params){
return (function book$demos$server_error_handling$action(env){
alert("There was a read error");

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.demos.server-error-handling",null,35,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Result from server:",new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(params)], null);
});})(params))
,null)),null,979707022);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.demos.server-error-handling",null,36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Original load params:",new cljs.core.Keyword(null,"load-params","load-params",38753949).cljs$core$IFn$_invoke$arity$1(params)], null);
});})(params))
,null)),null,1340554221);

return null;
});})(params))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (params){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(params))
], null);
}));
/**
 * 
 */
book.demos.server_error_handling.error_mutation = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.demos.server-error-handling","error-mutation","book.demos.server-error-handling/error-mutation",810292318,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.demos.server-error-handling","error-mutation","book.demos.server-error-handling/error-mutation",810292318,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"remote","remote",-1593576576),((function (params){
return (function book$demos$server_error_handling$remote(env){
return true;
});})(params))
,new cljs.core.Keyword(null,"error-action","error-action",-1147840498),((function (params){
return (function book$demos$server_error_handling$error_action(p__88885){
var map__88888 = p__88885;
var map__88888__$1 = (((((!((map__88888 == null))))?(((((map__88888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88888):map__88888);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88888__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88888__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88888__$1,new cljs.core.Keyword(null,"result","result",1415092211));
alert("Mutation error");

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.demos.server-error-handling",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__88888,map__88888__$1,app,ref,result,params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Result ",result], null);
});})(map__88888,map__88888__$1,app,ref,result,params))
,null)),null,-2009609246);

return null;
});})(params))
,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),((function (params){
return (function book$demos$server_error_handling$ok_action(env){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.demos.server-error-handling",null,40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimistic action ran ok"], null);
});})(params))
,null)),null,-1590275182);

return null;
});})(params))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (params){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(params))
], null);
}));

var options__72617__auto___89035 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$server_error_handling$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$server_error_handling$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$server_error_handling$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error.child","by-id","error.child/by-id",501661997),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$server_error_handling$render_Child(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(this$,new cljs.core.Keyword("fulcro","read-error","fulcro/read-error",-1218760546),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Symbol("book.demos.server-error-handling","read-error","book.demos.server-error-handling/read-error",116626519,null)], null));
});})(props))
], null),"Failing read with a fallback"], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.demos.server-error-handling","error-mutation","book.demos.server-error-handling/error-mutation",810292318,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(props))
], null),"Failing mutation"], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.server_error_handling !== 'undefined') && (typeof book.demos.server_error_handling.Child !== 'undefined')){
} else {
book.demos.server_error_handling.Child = ((function (options__72617__auto___89035){
return (function book$demos$server_error_handling$Child(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89035,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89041)){
var init_state__72620__auto___89042 = temp__5733__auto___89041;
this__72619__auto__.state = (function (){var obj88944 = ({"fulcro$state":(function (){var G__88946 = this__72619__auto__;
var G__88947 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89042.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89042.cljs$core$IFn$_invoke$arity$2(G__88946,G__88947) : init_state__72620__auto___89042.call(null,G__88946,G__88947));
})()});
return obj88944;
})();
} else {
this__72619__auto__.state = (function (){var obj88949 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88949;
})();
}

return null;
});})(options__72617__auto___89035))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.server_error_handling.Child,new cljs.core.Keyword("book.demos.server-error-handling","Child","book.demos.server-error-handling/Child",-167189924),options__72617__auto___89035);
book.demos.server_error_handling.ui_child = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.demos.server_error_handling.Child);

var options__72617__auto___89043 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$server_error_handling$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child","child",623967545),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.server_error_handling.Child,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$server_error_handling$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child","child",623967545),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.server_error_handling.Child)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$server_error_handling$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88950 = com.fulcrologic.fulcro.components.props(this$);
var map__88950__$1 = (((((!((map__88950 == null))))?(((((map__88950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88950):map__88950);
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88950__$1,new cljs.core.Keyword(null,"child","child",623967545));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.demos.server_error_handling.ui_child.cljs$core$IFn$_invoke$arity$1 ? book.demos.server_error_handling.ui_child.cljs$core$IFn$_invoke$arity$1(child) : book.demos.server_error_handling.ui_child.call(null,child))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.server_error_handling !== 'undefined') && (typeof book.demos.server_error_handling.Root !== 'undefined')){
} else {
book.demos.server_error_handling.Root = ((function (options__72617__auto___89043){
return (function book$demos$server_error_handling$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89043,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89044)){
var init_state__72620__auto___89045 = temp__5733__auto___89044;
this__72619__auto__.state = (function (){var obj88953 = ({"fulcro$state":(function (){var G__88954 = this__72619__auto__;
var G__88955 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89045.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89045.cljs$core$IFn$_invoke$arity$2(G__88954,G__88955) : init_state__72620__auto___89045.call(null,G__88954,G__88955));
})()});
return obj88953;
})();
} else {
this__72619__auto__.state = (function (){var obj88957 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88957;
})();
}

return null;
});})(options__72617__auto___89043))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.server_error_handling.Root,new cljs.core.Keyword("book.demos.server-error-handling","Root","book.demos.server-error-handling/Root",-1041102865),options__72617__auto___89043);
/**
 * Check to see if the response contains Pathom error indicators.
 */
book.demos.server_error_handling.contains_error_QMARK_ = (function book$demos$server_error_handling$contains_error_QMARK_(body){
if(cljs.core.map_QMARK_(body)){
var values = cljs.core.vals(body);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (values){
return (function (error_QMARK_,v){
if(((((cljs.core.map_QMARK_(v)) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.keys(v)),new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882))))){
return cljs.core.reduced(true);
} else {
return error_QMARK_;
}
});})(values))
,false,values);
} else {
return null;
}
});
book.demos.server_error_handling.SPA = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497),(function (p__89019){
var map__89020 = p__89019;
var map__89020__$1 = (((((!((map__89020 == null))))?(((((map__89020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89020):map__89020);
var result = map__89020__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89020__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var or__4131__auto__ = com.fulcrologic.fulcro.application.default_remote_error_QMARK_(result);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return book.demos.server_error_handling.contains_error_QMARK_(body);
}
})], null));

//# sourceMappingURL=book.demos.server_error_handling.js.map
