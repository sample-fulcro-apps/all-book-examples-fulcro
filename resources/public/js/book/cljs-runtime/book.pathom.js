goog.provide('book.pathom');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.networking.mock_server_remote');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
if((typeof book !== 'undefined') && (typeof book.pathom !== 'undefined') && (typeof book.pathom.latency !== 'undefined')){
} else {
book.pathom.latency = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((100));
}
/**
 * 
 */
book.pathom.set_server_latency = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.pathom","set-server-latency","book.pathom/set-server-latency",1183291941,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.pathom","set-server-latency","book.pathom/set-server-latency",1183291941,null),(function (fulcro_mutation_env_symbol){
var map__89764 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__89764__$1 = (((((!((map__89764 == null))))?(((((map__89764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89764):map__89764);
var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89764__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__89764,map__89764__$1,delay){
return (function book$pathom$action(p__89770){
var map__89773 = p__89770;
var map__89773__$1 = (((((!((map__89773 == null))))?(((((map__89773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89773):map__89773);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89773__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89773__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
console.log("Latency set to",delay);

cljs.core.reset_BANG_(book.pathom.latency,delay);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server-control","by-id","server-control/by-id",-8631790),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword("server-control","delay","server-control/delay",1550680204)], null),delay);

return null;
});})(map__89764,map__89764__$1,delay))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__89764,map__89764__$1,delay){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__89764,map__89764__$1,delay))
], null);
}));
book.pathom.new_parser = (function book$pathom$new_parser(my_resolvers){
return com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),my_resolvers], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.request_cache_plugin,com.wsscode.pathom.core.post_process_parser_plugin(com.wsscode.pathom.core.elide_not_found)], null)], null));
});
book.pathom.mock_remote = (function book$pathom$mock_remote(var_args){
var G__89782 = arguments.length;
switch (G__89782) {
case 2:
return book.pathom.mock_remote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return book.pathom.mock_remote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

book.pathom.mock_remote.cljs$core$IFn$_invoke$arity$2 = (function (resolvers,env){
var parser = book.pathom.new_parser(resolvers);
var transmit_BANG_ = new cljs.core.Keyword(null,"transmit!","transmit!",-107149039).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.networking.mock_server_remote.mock_http_server(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parser","parser",-1543495310),((function (parser){
return (function (req){
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,req) : parser.call(null,env,req));
});})(parser))
], null)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transmit!","transmit!",-107149039),((function (parser,transmit_BANG_){
return (function (this$,send_node){
return setTimeout(((function (parser,transmit_BANG_){
return (function (){
return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(this$,send_node) : transmit_BANG_.call(null,this$,send_node));
});})(parser,transmit_BANG_))
,cljs.core.deref(book.pathom.latency));
});})(parser,transmit_BANG_))
], null)], null);
});

book.pathom.mock_remote.cljs$core$IFn$_invoke$arity$1 = (function (resolvers){
return book.pathom.mock_remote.cljs$core$IFn$_invoke$arity$2(resolvers,cljs.core.PersistentArrayMap.EMPTY);
});

book.pathom.mock_remote.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=book.pathom.js.map
