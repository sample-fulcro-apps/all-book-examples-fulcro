goog.provide('com.fulcrologic.fulcro.routing.dynamic_routing');
goog.require('cljs.core');
goog.require('ghostwheel.core');
goog.require('com.fulcrologic.fulcro.ui_state_machines');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
goog.require('cljs.spec.alpha');
com.fulcrologic.fulcro.routing.dynamic_routing.route_segment = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_segment(class$){

return com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
});
com.fulcrologic.fulcro.routing.dynamic_routing.get_route_cancelled = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_route_cancelled(class$){

return com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-cancelled","route-cancelled",-1402397214)], 0));
});
/**
 * Universal CLJC version of will-enter.  Don't use the protocol method in CLJ.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_cancelled(class$,route_params){
var temp__5735__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_route_cancelled(class$);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(route_params) : f.call(null,route_params));
} else {
return null;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.get_will_enter = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_will_enter(class$){

var temp__5733__auto__ = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-enter","will-enter",-692415624)], 0));
if(cljs.core.truth_(temp__5733__auto__)){
var will_enter = temp__5733__auto__;
return will_enter;
} else {
var ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
return ((function (ident,temp__5733__auto__){
return (function (_,___$1){
return (com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.cljs$core$IFn$_invoke$arity$1(ident) : com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.call(null,ident));
});
;})(ident,temp__5733__auto__))
}
});
/**
 * Universal CLJC version of will-enter.  Don't use the protocol method in CLJ.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.will_enter = (function com$fulcrologic$fulcro$routing$dynamic_routing$will_enter(class$,app,params){
var temp__5735__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_will_enter(class$);
if(cljs.core.truth_(temp__5735__auto__)){
var will_enter = temp__5735__auto__;
return (will_enter.cljs$core$IFn$_invoke$arity$2 ? will_enter.cljs$core$IFn$_invoke$arity$2(app,params) : will_enter.call(null,app,params));
} else {
return null;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_target_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_target_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0)));
});
com.fulcrologic.fulcro.routing.dynamic_routing.get_will_leave = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_will_leave(this$){

var or__4131__auto__ = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.will_leave = (function com$fulcrologic$fulcro$routing$dynamic_routing$will_leave(c,props){
var temp__5735__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_will_leave(c);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(c,props) : f.call(null,c,props));
} else {
return null;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_lifecycle_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_lifecycle_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0)));
});
com.fulcrologic.fulcro.routing.dynamic_routing.get_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_targets(router){

return cljs.core.set(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(router,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router-targets","router-targets",1582229763)], 0)));
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_immediate(ident){
return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"immediate","immediate",-1684692069),true], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_deferred(ident,completion_fn){
return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"immediate","immediate",-1684692069),false,new cljs.core.Keyword(null,"fn","fn",-1175266204),completion_fn], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.immediate_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$immediate_QMARK_(ident){
var G__88500 = ident;
var G__88500__$1 = (((G__88500 == null))?null:cljs.core.meta(G__88500));
if((G__88500__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"immediate","immediate",-1684692069).cljs$core$IFn$_invoke$arity$1(G__88500__$1);
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$apply_route_STAR_(state_map,p__88504){
var map__88505 = p__88504;
var map__88505__$1 = (((((!((map__88505 == null))))?(((((map__88505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88505):map__88505);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88505__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88505__$1,new cljs.core.Keyword(null,"target","target",253001721));
var router_class = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(router));
var router_id = cljs.core.second(router);
var target_class = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(target));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,79,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (router_class,router_id,target_class,map__88505,map__88505__$1,router,target){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Applying route ident",target,"to router",router_id], null);
});})(router_class,router_id,target_class,map__88505,map__88505__$1,router,target))
,null)),null,-1353967245);

if((router_class == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,81,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (router_class,router_id,target_class,map__88505,map__88505__$1,router,target){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply-route* was called without a proper :router argument."], null);
});})(router_class,router_id,target_class,map__88505,map__88505__$1,router,target))
,null)),null,-2059374105);
} else {
}

if((target_class == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,83,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (router_class,router_id,target_class,map__88505,map__88505__$1,router,target){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply-route* for router ",router_class,"was given a target that did not have a component. ","Did you remember to call route-deferred or route-immediate?"], null);
});})(router_class,router_id,target_class,map__88505,map__88505__$1,router,target))
,null)),null,1714016811);
} else {
}

return com.fulcrologic.fulcro.components.set_query_STAR_(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)),target),router,cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)),router_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(target_class,state_map)], null)], null)], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$router_for_pending_target(state_map,target){
var routers = (function (){var G__88510 = state_map;
var G__88510__$1 = (((G__88510 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(G__88510));
if((G__88510__$1 == null)){
return null;
} else {
return cljs.core.vals(G__88510__$1);
}
})();
var router_id = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (routers){
return (function (_,r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,(function (){var G__88512 = r;
var G__88512__$1 = (((G__88512 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373).cljs$core$IFn$_invoke$arity$1(G__88512));
if((G__88512__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__88512__$1);
}
})())){
return cljs.core.reduced(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(r));
} else {
return null;
}
});})(routers))
,null,routers);
return router_id;
});
/**
 * Mutation: Indicate that a target is ready.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_ready = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null),(function (fulcro_mutation_env_symbol){
var map__88513 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__88513__$1 = (((((!((map__88513 == null))))?(((((map__88513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88513):map__88513);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88513__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),((function (map__88513,map__88513__$1,target){
return (function com$fulcrologic$fulcro$routing$dynamic_routing$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null);
});})(map__88513,map__88513__$1,target))
,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__88513,map__88513__$1,target){
return (function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__88517){
var map__88518 = p__88517;
var map__88518__$1 = (((((!((map__88518 == null))))?(((((map__88518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88518):map__88518);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88518__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state_map_88778 = com.fulcrologic.fulcro.application.current_state(app);
var router_id_88779 = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map_88778,target);
if(cljs.core.truth_(router_id_88779)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,107,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_map_88778,router_id_88779,map__88518,map__88518__$1,app,map__88513,map__88513__$1,target){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Router",router_id_88779,"notified that pending route is ready."], null);
});})(state_map_88778,router_id_88779,map__88518,map__88518__$1,app,map__88513,map__88513__$1,target))
,null)),null,-585459993);

com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,router_id_88779,new cljs.core.Keyword(null,"ready!","ready!",-1695278696));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,109,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_map_88778,router_id_88779,map__88518,map__88518__$1,app,map__88513,map__88513__$1,target){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dr/target-ready! was called but there was no router waiting for the target listed: ",target,"This could mean you sent one ident, and indicated ready on another."], null);
});})(state_map_88778,router_id_88779,map__88518,map__88518__$1,app,map__88513,map__88513__$1,target))
,null)),null,-527100022);
}

return null;
});})(map__88513,map__88513__$1,target))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__88513,map__88513__$1,target){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__88513,map__88513__$1,target))
], null);
}));
/**
 * Indicate a target is ready.  Safe to use from within mutations.
 * 
 *   target - The ident that was originally listed as a deferred target.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_ready_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_ready_BANG_(component_or_app,target){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component_or_app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__88532 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__88532) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__88532));
})()], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$router_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router-targets","router-targets",1582229763)], 0)));
});
/**
 * Returns the elements of actual-path that match the route-segment definition.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.matching_prefix = (function com$fulcrologic$fulcro$routing$dynamic_routing$matching_prefix(route_segment,actual_path){
var matching_segment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__88534){
var vec__88535 = p__88534;
var expected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88535,(0),null);
var actual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88535,(1),null);
if(((typeof expected === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,actual);
} else {
if((((expected instanceof cljs.core.Keyword)) && (cljs.core.seq(cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual));
} else {
return result;

}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),route_segment,actual_path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matching_segment),cljs.core.count(route_segment))){
return matching_segment;
} else {
return null;
}
});
/**
 * Get the class of the component that is currently being routed to.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.current_route_class = (function com$fulcrologic$fulcro$routing$dynamic_routing$current_route_class(this$){
var state_map = com.fulcrologic.fulcro.components.component__GT_state_map(this$);
var class$ = (function (){var G__88542 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(this$,state_map);
var G__88542__$1 = (((G__88542 == null))?null:edn_query_language.core.query__GT_ast(G__88542));
var G__88542__$2 = (((G__88542__$1 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__88542__$1));
var G__88542__$3 = (((G__88542__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__88542,G__88542__$1,G__88542__$2,state_map){
return (function (p1__88541_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__88541_SHARP_));
});})(G__88542,G__88542__$1,G__88542__$2,state_map))
,G__88542__$2));
var G__88542__$4 = (((G__88542__$3 == null))?null:cljs.core.first(G__88542__$3));
if((G__88542__$4 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__88542__$4);
}
})();
var class$__$1 = (cljs.core.truth_(goog.DEBUG)?com.fulcrologic.fulcro.components.registry_key__GT_class(com.fulcrologic.fulcro.components.class__GT_registry_key(class$)):class$);
return class$__$1;
});
/**
 * Given a router class and a path segment, returns the class of the router-class that is the target of the given URI path,
 *   which is a vector of (string) URI components.
 * 
 *   Returns nil if there is no target that accepts the path, or a map containing:
 * 
 *   {:target class
 * :matching-prefix prefix}
 * 
 *   where `class` is the component class that accepts the path (the target, NOT the router), and `matching-prefix` is the
 *   portion of the path that is accepted by that class.
 * 
 *   NOTE: If more than one target matches, then the target with the longest match will be returned. A warning will be
 *   printed if more than one match of equal length is found.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_target(router_class,path){
if(cljs.core.truth_((function (){var and__4120__auto__ = router_class;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(router_class);
} else {
return and__4120__auto__;
}
})())){
var targets = com.fulcrologic.fulcro.routing.dynamic_routing.get_targets(router_class);
var matches = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"length","length",588987862),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (targets){
return (function (result,target_class){
var prefix = (function (){var and__4120__auto__ = target_class;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target_QMARK_(target_class);
if(and__4120__auto____$1){
var G__88547 = target_class;
var G__88547__$1 = (((G__88547 == null))?null:com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(G__88547));
if((G__88547__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.matching_prefix(G__88547__$1,path);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = prefix;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(prefix);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"length","length",588987862),cljs.core.count(prefix),new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173),prefix,new cljs.core.Keyword(null,"target","target",253001721),target_class], null));
} else {
return result;
}
});})(targets))
,cljs.core.PersistentVector.EMPTY,targets)));
var max_length = (function (){var G__88548 = matches;
var G__88548__$1 = (((G__88548 == null))?null:cljs.core.first(G__88548));
if((G__88548__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(G__88548__$1);
}
})();
var match = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (targets,matches,max_length){
return (function (p1__88545_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_length,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p1__88545_SHARP_));
});})(targets,matches,max_length))
,matches);
if(cljs.core.truth_(cljs.core.second(match))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.routing.dynamic-routing",null,184,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (targets,matches,max_length,match){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["More than one route target matches",path], null);
});})(targets,matches,max_length,match))
,null)),null,85171569);
} else {
}

return cljs.core.first(match);
} else {
return null;
}
});
/**
 * Returns true if the given component is a router that manages a route target that will accept the given path.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$accepts_route_QMARK_(component,path){
return cljs.core.boolean$(com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component,path));
});
/**
 * Returns the AST node for a query that represents the router that has a target that can accept the given path. This is a breadth-first
 *   search.
 * 
 *   ast - A query AST node
 *   path - A vector of the current URI segments.
 * 
 *   Returns an AST node or nil if none is found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_route(p__88551,path){
var map__88552 = p__88551;
var map__88552__$1 = (((((!((map__88552 == null))))?(((((map__88552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88552):map__88552);
var ast_node = map__88552__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88552__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__4131__auto__ = (function (){var and__4120__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_(component,path);
if(and__4120__auto__){
return ast_node;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.some(((function (or__4131__auto__,map__88552,map__88552__$1,ast_node,component,children){
return (function (p1__88549_SHARP_){
var and__4120__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(p1__88549_SHARP_),path);
if(and__4120__auto__){
return p1__88549_SHARP_;
} else {
return and__4120__auto__;
}
});})(or__4131__auto__,map__88552,map__88552__$1,ast_node,component,children))
,children);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.some(((function (or__4131__auto____$1,or__4131__auto__,map__88552,map__88552__$1,ast_node,component,children){
return (function (p1__88550_SHARP_){
return (com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$2(p1__88550_SHARP_,path) : com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.call(null,p1__88550_SHARP_,path));
});})(or__4131__auto____$1,or__4131__auto__,map__88552,map__88552__$1,ast_node,component,children))
,children);
}
}
});
/**
 * Returns the AST node for a query that represents the closest "live" (on-screen) router
 * 
 *   ast - A query AST node
 * 
 *   Returns an AST node or nil if none is found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_live_router(app,p__88557){
var map__88559 = p__88557;
var map__88559__$1 = (((((!((map__88559 == null))))?(((((map__88559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88559):map__88559);
var ast_node = map__88559__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88559__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88559__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var live_router_QMARK_ = ((function (map__88559,map__88559__$1,ast_node,component,children){
return (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_live_router_$_live_router_QMARK_(c){
return ((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(c)) && (cljs.core.boolean$(com.fulcrologic.fulcro.components.class__GT_any(app,c))));
});})(map__88559,map__88559__$1,ast_node,component,children))
;
var or__4131__auto__ = (function (){var and__4120__auto__ = live_router_QMARK_(component);
if(cljs.core.truth_(and__4120__auto__)){
return ast_node;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.some(((function (or__4131__auto__,map__88559,map__88559__$1,ast_node,component,children){
return (function (p1__88555_SHARP_){
var and__4120__auto__ = live_router_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(p1__88555_SHARP_));
if(cljs.core.truth_(and__4120__auto__)){
return p1__88555_SHARP_;
} else {
return and__4120__auto__;
}
});})(or__4131__auto__,map__88559,map__88559__$1,ast_node,component,children))
,children);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.some(((function (or__4131__auto____$1,or__4131__auto__,map__88559,map__88559__$1,ast_node,component,children){
return (function (p1__88556_SHARP_){
return (com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.cljs$core$IFn$_invoke$arity$2(app,p1__88556_SHARP_) : com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.call(null,app,p1__88556_SHARP_));
});})(or__4131__auto____$1,or__4131__auto__,map__88559,map__88559__$1,ast_node,component,children))
,children);
}
}
});
/**
 * Mutation: Indicate that a given route is ready and should show the result.
 * 
 *   router - The ident of the router, with metadata :component that is the class of the router.
 *   target - The ident of the target route, with metadata :component that is the class of the target.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.apply_route = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","apply-route","com.fulcrologic.fulcro.routing.dynamic-routing/apply-route",-2135500172,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","apply-route","com.fulcrologic.fulcro.routing.dynamic-routing/apply-route",-2135500172,null),(function (fulcro_mutation_env_symbol){
var map__88563 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__88563__$1 = (((((!((map__88563 == null))))?(((((map__88563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88563):map__88563);
var params = map__88563__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88563__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88563__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__88563,map__88563__$1,params,router,target){
return (function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__88565){
var map__88566 = p__88565;
var map__88566__$1 = (((((!((map__88566 == null))))?(((((map__88566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88566):map__88566);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88566__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_,params);

return null;
});})(map__88563,map__88563__$1,params,router,target))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__88563,map__88563__$1,params,router,target){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__88563,map__88563__$1,params,router,target))
], null);
}));
com.fulcrologic.fulcro.routing.dynamic_routing.mark_route_pending_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$mark_route_pending_STAR_(state_map,p__88568){
var map__88569 = p__88568;
var map__88569__$1 = (((((!((map__88569 == null))))?(((((map__88569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88569):map__88569);
var params = map__88569__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88569__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88569__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)),params);
});
var target_ready_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_ready_STAR_(state_map,target){
var router_id = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,target);
if(cljs.core.truth_(router_id)){
return com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_(state_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)], null)));
} else {
return state_map;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$ready_handler(env){
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268))),new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),cljs.core.PersistentVector.EMPTY),target_ready_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"target","target",253001721))], 0));
});
com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$fail_handler(env){
return env;
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_handler(p__88571){
var map__88572 = p__88571;
var map__88572__$1 = (((((!((map__88572 == null))))?(((((map__88572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88572):map__88572);
var env = map__88572__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88572__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__88574 = event_data;
var map__88574__$1 = (((((!((map__88574 == null))))?(((((map__88574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88574):map__88574);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88574__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88574__$1,new cljs.core.Keyword(null,"target","target",253001721));
var error_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88574__$1,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),(5000));
var deferred_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88574__$1,new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530),(100));
var path_segment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88574__$1,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997));
var immediate_QMARK_ = com.fulcrologic.fulcro.routing.dynamic_routing.immediate_QMARK_(target);
return com.fulcrologic.fulcro.ui_state_machines.store((cljs.core.truth_(immediate_QMARK_)?com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),path_segment),com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0)),new cljs.core.Keyword(null,"routed","routed",-707282794)):com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),path_segment),com.fulcrologic.fulcro.routing.dynamic_routing.mark_route_pending_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0)),new cljs.core.Keyword(null,"error-timer","error-timer",347765002),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),cljs.core.PersistentArrayMap.EMPTY,error_timeout,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),null,new cljs.core.Keyword(null,"ready!","ready!",-1695278696),null], null), null)),new cljs.core.Keyword(null,"delay-timer","delay-timer",-920427787),new cljs.core.Keyword(null,"waiting!","waiting!",373081239),cljs.core.PersistentArrayMap.EMPTY,deferred_timeout,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),null,new cljs.core.Keyword(null,"ready!","ready!",-1695278696),null], null), null)),new cljs.core.Keyword(null,"deferred","deferred",-1976960688))),new cljs.core.Keyword(null,"target","target",253001721),target);
});
com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-state","com.fulcrologic.fulcro.routing.dynamic-routing/current-state",2011639269)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null)], null)], null),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","RouterStateMachine","com.fulcrologic.fulcro.routing.dynamic-routing/RouterStateMachine",1134286079,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","RouterStateMachine","com.fulcrologic.fulcro.routing.dynamic-routing/RouterStateMachine",1134286079,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-state","com.fulcrologic.fulcro.routing.dynamic-routing/current-state",2011639269)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null)], null)], null),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null)], null)], null));
com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$proposed_new_path(this_or_app,relative_class_or_instance,new_route){
var app = com.fulcrologic.fulcro.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast,new_route);
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__88577_88824 = root;
var map__88578_88825 = G__88577_88824;
var map__88578_88826__$1 = (((((!((map__88578_88825 == null))))?(((((map__88578_88825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88578_88825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88578_88825):map__88578_88825);
var component_88827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88578_88826__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_88828 = new_route;
var G__88577_88829__$1 = G__88577_88824;
var path_88830__$1 = path_88828;
while(true){
var map__88592_88831 = G__88577_88829__$1;
var map__88592_88832__$1 = (((((!((map__88592_88831 == null))))?(((((map__88592_88831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88592_88831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88592_88831):map__88592_88831);
var component_88833__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88592_88832__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_88834__$2 = path_88830__$1;
if(cljs.core.truth_((function (){var and__4120__auto__ = component_88833__$1;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_88833__$1);
} else {
return and__4120__auto__;
}
})())){
var map__88594_88835 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component_88833__$1,path_88834__$2);
var map__88594_88836__$1 = (((((!((map__88594_88835 == null))))?(((((map__88594_88835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88594_88835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88594_88835):map__88594_88835);
var target_88837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88594_88836__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix_88838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88594_88836__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast_88839 = (function (){var G__88596 = target_88837;
var G__88596__$1 = (((G__88596 == null))?null:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(G__88596,state_map));
if((G__88596__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__88596__$1);
}
})();
var prefix_length_88840 = cljs.core.count(matching_prefix_88838);
var remaining_path_88841 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length_88840,path_88834__$2));
var segment_88842 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(target_88837);
var params_88843 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__88577_88829__$1,path_88830__$1,map__88594_88835,map__88594_88836__$1,target_88837,matching_prefix_88838,target_ast_88839,prefix_length_88840,remaining_path_88841,segment_88842,map__88592_88831,map__88592_88832__$1,component_88833__$1,path_88834__$2,G__88577_88824,map__88578_88825,map__88578_88826__$1,component_88827,path_88828,app,state_map,router,root_query,ast,root,result){
return (function (p,p__88597){
var vec__88598 = p__88597;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88598,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88598,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,k,v);
} else {
return p;
}
});})(G__88577_88829__$1,path_88830__$1,map__88594_88835,map__88594_88836__$1,target_88837,matching_prefix_88838,target_ast_88839,prefix_length_88840,remaining_path_88841,segment_88842,map__88592_88831,map__88592_88832__$1,component_88833__$1,path_88834__$2,G__88577_88824,map__88578_88825,map__88578_88826__$1,component_88827,path_88828,app,state_map,router,root_query,ast,root,result))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__88577_88829__$1,path_88830__$1,map__88594_88835,map__88594_88836__$1,target_88837,matching_prefix_88838,target_ast_88839,prefix_length_88840,remaining_path_88841,segment_88842,map__88592_88831,map__88592_88832__$1,component_88833__$1,path_88834__$2,G__88577_88824,map__88578_88825,map__88578_88826__$1,component_88827,path_88828,app,state_map,router,root_query,ast,root,result){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});})(G__88577_88829__$1,path_88830__$1,map__88594_88835,map__88594_88836__$1,target_88837,matching_prefix_88838,target_ast_88839,prefix_length_88840,remaining_path_88841,segment_88842,map__88592_88831,map__88592_88832__$1,component_88833__$1,path_88834__$2,G__88577_88824,map__88578_88825,map__88578_88826__$1,component_88827,path_88828,app,state_map,router,root_query,ast,root,result))
,segment_88842,matching_prefix_88838));
var target_ident_88844 = com.fulcrologic.fulcro.routing.dynamic_routing.will_enter(target_88837,app,params_88843);
if((((!(edn_query_language.core.ident_QMARK_(target_ident_88844)))) || ((cljs.core.second(target_ident_88844) == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,319,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__88577_88829__$1,path_88830__$1,map__88594_88835,map__88594_88836__$1,target_88837,matching_prefix_88838,target_ast_88839,prefix_length_88840,remaining_path_88841,segment_88842,params_88843,target_ident_88844,map__88592_88831,map__88592_88832__$1,component_88833__$1,path_88834__$2,G__88577_88824,map__88578_88825,map__88578_88826__$1,component_88827,path_88828,app,state_map,router,root_query,ast,root,result){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["will-enter for router target",com.fulcrologic.fulcro.components.component_name(target_88837),"did not return a valid ident. Instead it returned: ",target_ident_88844], null);
});})(G__88577_88829__$1,path_88830__$1,map__88594_88835,map__88594_88836__$1,target_88837,matching_prefix_88838,target_ast_88839,prefix_length_88840,remaining_path_88841,segment_88842,params_88843,target_ident_88844,map__88592_88831,map__88592_88832__$1,component_88833__$1,path_88834__$2,G__88577_88824,map__88578_88825,map__88578_88826__$1,component_88827,path_88828,app,state_map,router,root_query,ast,root,result))
,null)),null,1170266041);
} else {
}

if(((edn_query_language.core.ident_QMARK_(target_ident_88844)) && ((!(cljs.core.contains_QMARK_((function (){var G__88602 = target_ident_88844;
if((G__88602 == null)){
return null;
} else {
return cljs.core.meta(G__88602);
}
})(),new cljs.core.Keyword(null,"immediate","immediate",-1684692069))))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,322,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__88577_88829__$1,path_88830__$1,map__88594_88835,map__88594_88836__$1,target_88837,matching_prefix_88838,target_ast_88839,prefix_length_88840,remaining_path_88841,segment_88842,params_88843,target_ident_88844,map__88592_88831,map__88592_88832__$1,component_88833__$1,path_88834__$2,G__88577_88824,map__88578_88825,map__88578_88826__$1,component_88827,path_88828,app,state_map,router,root_query,ast,root,result){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["will-enter for router target",com.fulcrologic.fulcro.components.component_name(target_88837),"did not wrap the ident in route-immediate or route-deferred."], null);
});})(G__88577_88829__$1,path_88830__$1,map__88594_88835,map__88594_88836__$1,target_88837,matching_prefix_88838,target_ast_88839,prefix_length_88840,remaining_path_88841,segment_88842,params_88843,target_ident_88844,map__88592_88831,map__88592_88832__$1,component_88833__$1,path_88834__$2,G__88577_88824,map__88578_88825,map__88578_88826__$1,component_88827,path_88828,app,state_map,router,root_query,ast,root,result))
,null)),null,1050628145);
} else {
}

if(cljs.core.vector_QMARK_(target_ident_88844)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.conj,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(target_ident_88844,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),target_88837,new cljs.core.Keyword(null,"params","params",710516235),params_88843));
} else {
}

if(cljs.core.seq(remaining_path_88841)){
var G__88849 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast_88839,remaining_path_88841);
var G__88850 = remaining_path_88841;
G__88577_88829__$1 = G__88849;
path_88830__$1 = G__88850;
continue;
} else {
}
} else {
}
break;
}

return cljs.core.deref(result);
});
/**
 * Tell active routers that they are about to leave the screen. Returns false if any of them deny the route change.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving = (function com$fulcrologic$fulcro$routing$dynamic_routing$signal_router_leaving(app_or_comp,relative_class_or_instance,new_route){
var new_path = com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path(app_or_comp,relative_class_or_instance,new_route);
var app = com.fulcrologic.fulcro.components.any__GT_app(app_or_comp);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,ast);
var to_signal = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var to_cancel = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var _ = (function (){var G__88606 = root;
var map__88607 = G__88606;
var map__88607__$1 = (((((!((map__88607 == null))))?(((((map__88607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88607):map__88607);
var node = map__88607__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88607__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88607__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_path_remaining = new_path;
var G__88606__$1 = G__88606;
var new_path_remaining__$1 = new_path_remaining;
while(true){
var map__88609 = G__88606__$1;
var map__88609__$1 = (((((!((map__88609 == null))))?(((((map__88609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88609):map__88609);
var node__$1 = map__88609__$1;
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88609__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88609__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_path_remaining__$2 = new_path_remaining__$1;
if(cljs.core.truth_((function (){var and__4120__auto__ = component__$1;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component__$1);
} else {
return and__4120__auto__;
}
})())){
var new_target = cljs.core.first(new_path_remaining__$2);
var router_ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(component__$1,cljs.core.PersistentArrayMap.EMPTY);
var active_target = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)));
var map__88611 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)));
var map__88611__$1 = (((((!((map__88611 == null))))?(((((map__88611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88611):map__88611);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88611__$1,new cljs.core.Keyword(null,"target","target",253001721));
var next_router = cljs.core.some(((function (G__88606__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__88611,map__88611__$1,target,map__88609,map__88609__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__88606,map__88607,map__88607__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (p1__88603_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,p1__88603_SHARP_);
});})(G__88606__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__88611,map__88611__$1,target,map__88609,map__88609__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__88606,map__88607,map__88607__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel))
,children__$1);
if(edn_query_language.core.ident_QMARK_(target)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_cancel,cljs.core.conj,target);
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_target,active_target)) && (cljs.core.vector_QMARK_(active_target)))){
var mounted_target_class_88853 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__88606__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__88611,map__88611__$1,target,next_router,map__88609,map__88609__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__88606,map__88607,map__88607__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (acc,p__88613){
var map__88614 = p__88613;
var map__88614__$1 = (((((!((map__88614 == null))))?(((((map__88614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88614):map__88614);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88614__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var component__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88614__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key)){
return cljs.core.reduced(component__$2);
} else {
return null;
}
});})(G__88606__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__88611,map__88611__$1,target,next_router,map__88609,map__88609__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__88606,map__88607,map__88607__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel))
,null,(function (){var G__88616 = component__$1;
var G__88616__$1 = (((G__88616 == null))?null:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(G__88616,state_map));
var G__88616__$2 = (((G__88616__$1 == null))?null:edn_query_language.core.query__GT_ast(G__88616__$1));
if((G__88616__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__88616__$2);
}
})());
var mounted_targets_88854 = com.fulcrologic.fulcro.components.class__GT_all(app,mounted_target_class_88853);
if(cljs.core.truth_((function (){var and__4120__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4120__auto__)){
return (cljs.core.count(mounted_targets_88854) > (1));
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,359,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__88606__$1,new_path_remaining__$1,mounted_target_class_88853,mounted_targets_88854,new_target,router_ident,active_target,map__88611,map__88611__$1,target,next_router,map__88609,map__88609__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__88606,map__88607,map__88607__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["More than one route target on screen of type",mounted_target_class_88853], null);
});})(G__88606__$1,new_path_remaining__$1,mounted_target_class_88853,mounted_targets_88854,new_target,router_ident,active_target,map__88611,map__88611__$1,target,next_router,map__88609,map__88609__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__88606,map__88607,map__88607__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel))
,null)),null,414221311);
} else {
}

if(cljs.core.seq(mounted_targets_88854)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_signal,cljs.core.into,mounted_targets_88854);
} else {
}
} else {
}

if(cljs.core.truth_(next_router)){
var G__88886 = next_router;
var G__88887 = cljs.core.rest(new_path_remaining__$2);
G__88606__$1 = G__88886;
new_path_remaining__$1 = G__88887;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
})();
var components = cljs.core.reverse(cljs.core.deref(to_signal));
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var seq__88618_88891 = cljs.core.seq(components);
var chunk__88619_88892 = null;
var count__88620_88893 = (0);
var i__88621_88894 = (0);
while(true){
if((i__88621_88894 < count__88620_88893)){
var c_88895 = chunk__88619_88892.cljs$core$IIndexed$_nth$arity$2(null,i__88621_88894);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(result,((function (seq__88618_88891,chunk__88619_88892,count__88620_88893,i__88621_88894,c_88895,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result){
return (function (p1__88604_SHARP_){
var and__4120__auto__ = p1__88604_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.will_leave(c_88895,com.fulcrologic.fulcro.components.props(c_88895));
} else {
return and__4120__auto__;
}
});})(seq__88618_88891,chunk__88619_88892,count__88620_88893,i__88621_88894,c_88895,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result))
);


var G__88898 = seq__88618_88891;
var G__88899 = chunk__88619_88892;
var G__88900 = count__88620_88893;
var G__88901 = (i__88621_88894 + (1));
seq__88618_88891 = G__88898;
chunk__88619_88892 = G__88899;
count__88620_88893 = G__88900;
i__88621_88894 = G__88901;
continue;
} else {
var temp__5735__auto___88902 = cljs.core.seq(seq__88618_88891);
if(temp__5735__auto___88902){
var seq__88618_88903__$1 = temp__5735__auto___88902;
if(cljs.core.chunked_seq_QMARK_(seq__88618_88903__$1)){
var c__4550__auto___88904 = cljs.core.chunk_first(seq__88618_88903__$1);
var G__88905 = cljs.core.chunk_rest(seq__88618_88903__$1);
var G__88906 = c__4550__auto___88904;
var G__88907 = cljs.core.count(c__4550__auto___88904);
var G__88908 = (0);
seq__88618_88891 = G__88905;
chunk__88619_88892 = G__88906;
count__88620_88893 = G__88907;
i__88621_88894 = G__88908;
continue;
} else {
var c_88909 = cljs.core.first(seq__88618_88903__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(result,((function (seq__88618_88891,chunk__88619_88892,count__88620_88893,i__88621_88894,c_88909,seq__88618_88903__$1,temp__5735__auto___88902,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result){
return (function (p1__88604_SHARP_){
var and__4120__auto__ = p1__88604_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.will_leave(c_88909,com.fulcrologic.fulcro.components.props(c_88909));
} else {
return and__4120__auto__;
}
});})(seq__88618_88891,chunk__88619_88892,count__88620_88893,i__88621_88894,c_88909,seq__88618_88903__$1,temp__5735__auto___88902,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result))
);


var G__88910 = cljs.core.next(seq__88618_88903__$1);
var G__88911 = null;
var G__88912 = (0);
var G__88913 = (0);
seq__88618_88891 = G__88910;
chunk__88619_88892 = G__88911;
count__88620_88893 = G__88912;
i__88621_88894 = G__88913;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(result))){
var seq__88622_88914 = cljs.core.seq(cljs.core.deref(to_cancel));
var chunk__88623_88915 = null;
var count__88624_88916 = (0);
var i__88625_88917 = (0);
while(true){
if((i__88625_88917 < count__88624_88916)){
var t_88918 = chunk__88623_88915.cljs$core$IIndexed$_nth$arity$2(null,i__88625_88917);
var map__88632_88919 = (function (){var G__88633 = t_88918;
if((G__88633 == null)){
return null;
} else {
return cljs.core.meta(G__88633);
}
})();
var map__88632_88920__$1 = (((((!((map__88632_88919 == null))))?(((((map__88632_88919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88632_88919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88632_88919):map__88632_88919);
var component_88921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88632_88920__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var params_88922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88632_88920__$1,new cljs.core.Keyword(null,"params","params",710516235));
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled(component_88921,params_88922);


var G__88923 = seq__88622_88914;
var G__88924 = chunk__88623_88915;
var G__88925 = count__88624_88916;
var G__88926 = (i__88625_88917 + (1));
seq__88622_88914 = G__88923;
chunk__88623_88915 = G__88924;
count__88624_88916 = G__88925;
i__88625_88917 = G__88926;
continue;
} else {
var temp__5735__auto___88927 = cljs.core.seq(seq__88622_88914);
if(temp__5735__auto___88927){
var seq__88622_88928__$1 = temp__5735__auto___88927;
if(cljs.core.chunked_seq_QMARK_(seq__88622_88928__$1)){
var c__4550__auto___88929 = cljs.core.chunk_first(seq__88622_88928__$1);
var G__88930 = cljs.core.chunk_rest(seq__88622_88928__$1);
var G__88931 = c__4550__auto___88929;
var G__88932 = cljs.core.count(c__4550__auto___88929);
var G__88933 = (0);
seq__88622_88914 = G__88930;
chunk__88623_88915 = G__88931;
count__88624_88916 = G__88932;
i__88625_88917 = G__88933;
continue;
} else {
var t_88934 = cljs.core.first(seq__88622_88928__$1);
var map__88638_88935 = (function (){var G__88639 = t_88934;
if((G__88639 == null)){
return null;
} else {
return cljs.core.meta(G__88639);
}
})();
var map__88638_88936__$1 = (((((!((map__88638_88935 == null))))?(((((map__88638_88935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88638_88935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88638_88935):map__88638_88935);
var component_88937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88638_88936__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var params_88938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88638_88936__$1,new cljs.core.Keyword(null,"params","params",710516235));
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled(component_88937,params_88938);


var G__88939 = cljs.core.next(seq__88622_88928__$1);
var G__88940 = null;
var G__88941 = (0);
var G__88942 = (0);
seq__88622_88914 = G__88939;
chunk__88623_88915 = G__88940;
count__88624_88916 = G__88941;
i__88625_88917 = G__88942;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.deref(result);
});
/**
 * Change the route, starting at the given Fulcro class or instance (scanning for the first router from there).  `new-route` is a vector
 *   of string components to pass through to the nearest child router as the new path. The first argument is any live component
 *   or the app.  The `timeouts` are as in `change-route`.
 *   It is safe to call this from within a mutation.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative = (function com$fulcrologic$fulcro$routing$dynamic_routing$change_route_relative(var_args){
var G__88642 = arguments.length;
switch (G__88642) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$core$IFn$_invoke$arity$3 = (function (this_or_app,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$core$IFn$_invoke$arity$4(this_or_app,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp,relative_class_or_instance,new_route,timeouts){
if(cljs.core.truth_((function (){var and__4120__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.seq(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path(app_or_comp,relative_class_or_instance,new_route)));
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,383,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not find route targets for new-route",new_route], null);
}),null)),null,-918347097);
} else {
}

if(cljs.core.truth_(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving(app_or_comp,relative_class_or_instance,new_route))){
var app = com.fulcrologic.fulcro.components.any__GT_app(app_or_comp);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast,new_route);
var G__88644 = root;
var map__88645 = G__88644;
var map__88645__$1 = (((((!((map__88645 == null))))?(((((map__88645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88645):map__88645);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88645__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path = new_route;
var G__88644__$1 = G__88644;
var path__$1 = path;
while(true){
var map__88670 = G__88644__$1;
var map__88670__$1 = (((((!((map__88670 == null))))?(((((map__88670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88670):map__88670);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88670__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path__$2 = path__$1;
if(cljs.core.truth_((function (){var and__4120__auto__ = component__$1;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component__$1);
} else {
return and__4120__auto__;
}
})())){
var map__88672 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component__$1,path__$2);
var map__88672__$1 = (((((!((map__88672 == null))))?(((((map__88672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88672):map__88672);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88672__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88672__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast = (function (){var G__88674 = target;
var G__88674__$1 = (((G__88674 == null))?null:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(G__88674,state_map));
if((G__88674__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__88674__$1);
}
})();
var prefix_length = cljs.core.count(matching_prefix);
var remaining_path = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length,path__$2));
var segment = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(target);
var params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__88644__$1,path__$1,map__88672,map__88672__$1,target,matching_prefix,target_ast,prefix_length,remaining_path,segment,map__88670,map__88670__$1,component__$1,path__$2,G__88644,map__88645,map__88645__$1,component,path,app,state_map,router,root_query,ast,root){
return (function (p,p__88675){
var vec__88676 = p__88675;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88676,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88676,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,k,v);
} else {
return p;
}
});})(G__88644__$1,path__$1,map__88672,map__88672__$1,target,matching_prefix,target_ast,prefix_length,remaining_path,segment,map__88670,map__88670__$1,component__$1,path__$2,G__88644,map__88645,map__88645__$1,component,path,app,state_map,router,root_query,ast,root))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__88644__$1,path__$1,map__88672,map__88672__$1,target,matching_prefix,target_ast,prefix_length,remaining_path,segment,map__88670,map__88670__$1,component__$1,path__$2,G__88644,map__88645,map__88645__$1,component,path,app,state_map,router,root_query,ast,root){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});})(G__88644__$1,path__$1,map__88672,map__88672__$1,target,matching_prefix,target_ast,prefix_length,remaining_path,segment,map__88670,map__88670__$1,component__$1,path__$2,G__88644,map__88645,map__88645__$1,component,path,app,state_map,router,root_query,ast,root))
,segment,matching_prefix));
var router_ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(component__$1,cljs.core.PersistentArrayMap.EMPTY);
var router_id = cljs.core.second(router_ident);
var target_ident = com.fulcrologic.fulcro.routing.dynamic_routing.will_enter(target,app,params);
var completing_action = (function (){var or__4131__auto__ = (function (){var G__88687 = target_ident;
var G__88687__$1 = (((G__88687 == null))?null:cljs.core.meta(G__88687));
if((G__88687__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__88687__$1);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.identity;
}
})();
var event_data = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),(5000),new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530),(100)], null),timeouts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),matching_prefix,new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(router_ident,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(target_ident,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),target,new cljs.core.Keyword(null,"params","params",710516235),params)], null)], 0));
if(cljs.core.not(com.fulcrologic.fulcro.ui_state_machines.get_active_state(app,router_id))){
com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app_or_comp,com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine,router_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(router_ident,component__$1)], null),event_data);
} else {
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,router_id,new cljs.core.Keyword(null,"route!","route!",-1286958144),event_data);
}

(completing_action.cljs$core$IFn$_invoke$arity$0 ? completing_action.cljs$core$IFn$_invoke$arity$0() : completing_action.call(null));

if(cljs.core.seq(remaining_path)){
var G__89001 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast,remaining_path);
var G__89002 = remaining_path;
G__88644__$1 = G__89001;
path__$1 = G__89002;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,420,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route request cancelled by on-screen target."], null);
}),null)),null,-1068134153);
}
});

com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$lang$maxFixedArity = 4;

/**
 * Trigger a route change.
 * 
 *   this - The component (or app) that is causing the route change.
 *   new-route - A vector of URI components to pass to the router.
 *   timeouts - A map of timeouts that affect UI during deferred routes: {:error-timeout ms :deferred-timeout ms}
 * 
 *   The error timeout is how long to wait  (default 5000ms) before showing the error-ui of a route (which must be defined on the
 *   router that is having problems).  The deferred-timeout (default 100ms) is how long to wait before showing the loading-ui of
 *   a deferred router (to prevent flicker).
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$change_route(var_args){
var G__88689 = arguments.length;
switch (G__88689) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$3(this$,new_route,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$3 = (function (this$,new_route,timeouts){
var app = com.fulcrologic.fulcro.components.any__GT_app(this$);
var root = com.fulcrologic.fulcro.application.root_class(app);
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$core$IFn$_invoke$arity$4(app,root,new_route,timeouts);
});

com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$lang$maxFixedArity = 3;

/**
 * Returns the current active route, starting from the relative Fulcro class or instance.
 * 
 *   Any component using this as a basis for rendering will need to add the following to their query to
 *   ensure the props of that component change on route changes:
 * 
 *   ```
 *   [::uism/asm-id fq-router-kw]
 *   ```
 * 
 *   where `fq-router-kw` is a keyword that has the exact namespace and name of the router you're interested in. If you want
 *   to just over-render you can use a quoted `_` instead.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.current_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$current_route(this_or_app,relative_class_or_instance){
var app = com.fulcrologic.fulcro.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,ast);
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__88695_89004 = root;
var map__88696_89005 = G__88695_89004;
var map__88696_89006__$1 = (((((!((map__88696_89005 == null))))?(((((map__88696_89005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88696_89005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88696_89005):map__88696_89005);
var node_89007 = map__88696_89006__$1;
var component_89008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88696_89006__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__88695_89009__$1 = G__88695_89004;
while(true){
var map__88699_89010 = G__88695_89009__$1;
var map__88699_89011__$1 = (((((!((map__88699_89010 == null))))?(((((map__88699_89010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88699_89010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88699_89010):map__88699_89010);
var node_89012__$1 = map__88699_89011__$1;
var component_89013__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88699_89011__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core.truth_((function (){var and__4120__auto__ = component_89013__$1;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_89013__$1);
} else {
return and__4120__auto__;
}
})())){
var router_ident_89014 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(component_89013__$1,cljs.core.PersistentArrayMap.EMPTY);
var router_id_89015 = cljs.core.second(router_ident_89014);
var sm_env_89016 = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,router_id_89015,new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.PersistentArrayMap.EMPTY);
var path_segment_89017 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(sm_env_89016,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997));
var next_router_89018 = cljs.core.some(((function (G__88695_89009__$1,router_ident_89014,router_id_89015,sm_env_89016,path_segment_89017,map__88699_89010,map__88699_89011__$1,node_89012__$1,component_89013__$1,G__88695_89004,map__88696_89005,map__88696_89006__$1,node_89007,component_89008,app,state_map,router,root_query,ast,root,result){
return (function (p1__88691_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,p1__88691_SHARP_);
});})(G__88695_89009__$1,router_ident_89014,router_id_89015,sm_env_89016,path_segment_89017,map__88699_89010,map__88699_89011__$1,node_89012__$1,component_89013__$1,G__88695_89004,map__88696_89005,map__88696_89006__$1,node_89007,component_89008,app,state_map,router,root_query,ast,root,result))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node_89012__$1));
if(cljs.core.seq(path_segment_89017)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.into,path_segment_89017);
} else {
}

if(cljs.core.truth_(next_router_89018)){
var G__89022 = next_router_89018;
G__88695_89009__$1 = G__89022;
continue;
} else {
}
} else {
}
break;
}

return cljs.core.deref(result);
});
/**
 * Run a runtime validation on route targets to verify that they at least declare a route-segment that is a vector.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.validate_route_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$validate_route_targets(router_instance){
var seq__88702 = cljs.core.seq(com.fulcrologic.fulcro.routing.dynamic_routing.get_targets(router_instance));
var chunk__88704 = null;
var count__88705 = (0);
var i__88706 = (0);
while(true){
if((i__88706 < count__88705)){
var t = chunk__88704.cljs$core$IIndexed$_nth$arity$2(null,i__88706);
var segment_89023 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(t);
var valid_QMARK__89024 = ((cljs.core.vector_QMARK_(segment_89023)) && ((!(cljs.core.empty_QMARK_(segment_89023)))) && (cljs.core.every_QMARK_(((function (seq__88702,chunk__88704,count__88705,i__88706,segment_89023,t){
return (function (p1__88701_SHARP_){
return (((p1__88701_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__88701_SHARP_ === 'string'));
});})(seq__88702,chunk__88704,count__88705,i__88706,segment_89023,t))
,segment_89023)));
if(valid_QMARK__89024){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,494,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__88702,chunk__88704,count__88705,i__88706,segment_89023,valid_QMARK__89024,t){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route target ",com.fulcrologic.fulcro.components.component_name(t),"of router",com.fulcrologic.fulcro.components.component_name(router_instance),"does not declare a valid :route-segment. Route segments must be non-empty vector that contain only strings","and keywords"], null);
});})(seq__88702,chunk__88704,count__88705,i__88706,segment_89023,valid_QMARK__89024,t))
,null)),null,-341660938);
}


var G__89025 = seq__88702;
var G__89026 = chunk__88704;
var G__89027 = count__88705;
var G__89028 = (i__88706 + (1));
seq__88702 = G__89025;
chunk__88704 = G__89026;
count__88705 = G__89027;
i__88706 = G__89028;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__88702);
if(temp__5735__auto__){
var seq__88702__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__88702__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__88702__$1);
var G__89029 = cljs.core.chunk_rest(seq__88702__$1);
var G__89030 = c__4550__auto__;
var G__89031 = cljs.core.count(c__4550__auto__);
var G__89032 = (0);
seq__88702 = G__89029;
chunk__88704 = G__89030;
count__88705 = G__89031;
i__88706 = G__89032;
continue;
} else {
var t = cljs.core.first(seq__88702__$1);
var segment_89033 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(t);
var valid_QMARK__89034 = ((cljs.core.vector_QMARK_(segment_89033)) && ((!(cljs.core.empty_QMARK_(segment_89033)))) && (cljs.core.every_QMARK_(((function (seq__88702,chunk__88704,count__88705,i__88706,segment_89033,t,seq__88702__$1,temp__5735__auto__){
return (function (p1__88701_SHARP_){
return (((p1__88701_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__88701_SHARP_ === 'string'));
});})(seq__88702,chunk__88704,count__88705,i__88706,segment_89033,t,seq__88702__$1,temp__5735__auto__))
,segment_89033)));
if(valid_QMARK__89034){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,494,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__88702,chunk__88704,count__88705,i__88706,segment_89033,valid_QMARK__89034,t,seq__88702__$1,temp__5735__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route target ",com.fulcrologic.fulcro.components.component_name(t),"of router",com.fulcrologic.fulcro.components.component_name(router_instance),"does not declare a valid :route-segment. Route segments must be non-empty vector that contain only strings","and keywords"], null);
});})(seq__88702,chunk__88704,count__88705,i__88706,segment_89033,valid_QMARK__89034,t,seq__88702__$1,temp__5735__auto__))
,null)),null,-1598059259);
}


var G__89037 = cljs.core.next(seq__88702__$1);
var G__89038 = null;
var G__89039 = (0);
var G__89040 = (0);
seq__88702 = G__89037;
chunk__88704 = G__89038;
count__88705 = G__89039;
i__88706 = G__89040;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Returns a sequence of all of the routers reachable in the query of the app.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.all_reachable_routers = (function com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers(state_map,component_class){
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component_class,state_map);
var map__88712 = edn_query_language.core.query__GT_ast(root_query);
var map__88712__$1 = (((((!((map__88712 == null))))?(((((map__88712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88712):map__88712);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var get_routers = ((function (root_query,map__88712,map__88712__$1,children){
return (function com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers_$_get_routers_STAR_(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (root_query,map__88712,map__88712__$1,children){
return (function (acc,p__88714){
var map__88715 = p__88714;
var map__88715__$1 = (((((!((map__88715 == null))))?(((((map__88715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88715):map__88715);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88715__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,component):acc),com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers_$_get_routers_STAR_(children__$1));
});})(root_query,map__88712,map__88712__$1,children))
,cljs.core.PersistentVector.EMPTY,nodes);
});})(root_query,map__88712,map__88712__$1,children))
;
return get_routers(children);
});
/**
 * Initialize the routing system.  This ensures that all routers have state machines in app state.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.initialize_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$initialize_BANG_(app){
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var root = com.fulcrologic.fulcro.application.root_class(app);
var routers = com.fulcrologic.fulcro.routing.dynamic_routing.all_reachable_routers(state_map,root);
var tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (state_map,root,routers){
return (function (r){
var router_ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(r,cljs.core.PersistentArrayMap.EMPTY);
var router_id = cljs.core.second(router_ident);
var G__88717 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(router_ident,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),r)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(router_ident,r)], null)], null);
return (com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1(G__88717) : com.fulcrologic.fulcro.ui_state_machines.begin.call(null,G__88717));
});})(state_map,root,routers))
,routers);
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,tx);
});

//# sourceMappingURL=com.fulcrologic.fulcro.routing.dynamic_routing.js.map
