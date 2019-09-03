goog.provide('com.fulcrologic.fulcro.routing.legacy_ui_routers');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.algorithms.normalize');
goog.require('com.fulcrologic.fulcro.algorithms.do_not_use');
goog.require('cljsjs.react');
goog.require('shadow.loader');
goog.require('taoensso.timbre');
com.fulcrologic.fulcro.routing.legacy_ui_routers.bad_route = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$bad_route(page){
return React.createElement("div",null,["Cannot route: Unknown Screen ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)].join(''));
});
com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree_key = new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","routing-tree","com.fulcrologic.fulcro.routing.legacy-ui-routers/routing-tree",1902840275);
com.fulcrologic.fulcro.routing.legacy_ui_routers.routers_table = new cljs.core.Keyword("fulcro.client.routing.routers","by-id","fulcro.client.routing.routers/by-id",-2014319047);
/**
 * Make a route name that executes the provided routing instructions to change which screen in on the UI. routing-instructions
 *   must be a vector. Returns an item that can be passed to `routing-tree` to generate your overall application's routing
 *   plan.
 * 
 *   `(make-route :route/a [(router-instruction ...) ...])`
 * 
 *   
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.make_route = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$make_route(name,routing_instructions){
if(cljs.core.vector_QMARK_(routing_instructions)){
} else {
throw (new Error("Assert failed: (vector? routing-instructions)"));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"instructions","instructions",1724333802),routing_instructions], null);
});
/**
 * Generate initial state for your application's routing tree. The return value of this should be merged into your overall
 *   app state in your Root UI component
 * 
 *   ```
 *   (defsc Root [this props]
 *  {:initial-state (fn [params]  (merge {:child-key (comp/get-initial-state Child)}
 *                                  (routing-tree
 *                                    (make-route :route/a [(router-instruction ...)])
 *                                    ...)))
 *  ...
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$routing_tree(var_args){
var args__4736__auto__ = [];
var len__4730__auto___85590 = arguments.length;
var i__4731__auto___85591 = (0);
while(true){
if((i__4731__auto___85591 < len__4730__auto___85590)){
args__4736__auto__.push((arguments[i__4731__auto___85591]));

var G__85592 = (i__4731__auto___85591 + (1));
i__4731__auto___85591 = G__85592;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree.cljs$core$IFn$_invoke$arity$variadic = (function (routes){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree_key,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tree,p__85397){
var map__85398 = p__85397;
var map__85398__$1 = (((((!((map__85398 == null))))?(((((map__85398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85398):map__85398);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85398__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var instructions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85398__$1,new cljs.core.Keyword(null,"instructions","instructions",1724333802));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tree,name,instructions);
}),cljs.core.PersistentArrayMap.EMPTY,routes)]);
});

com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree.cljs$lang$applyTo = (function (seq85396){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq85396));
});

/**
 * Return the definition of a change-route instruction.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.router_instruction = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$router_instruction(router_id,target_screen_ident){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target-router","target-router",1118628820),router_id,new cljs.core.Keyword(null,"target-screen","target-screen",-744688524),target_screen_ident], null);
});
/**
 * Get the current route (an ident) from the router with the given id. You can pass the entire app database, the routers table,
 *   or the props of a component that has queried for the router table as the first argument to this function.
 *   Thus, it can be used easily from within a mutation or in a component to find (and display) the current route:
 * 
 *   ```
 *   (defmutation do-something-with-routes [params]
 *  (action [{:keys [state]}]
 *    (let [current (r/current-route state :top-router)]
 *    ...)))
 * 
 *   (defsc NavBar [this props]
 *  {:query (fn [] [[r/routers-table '_]])
 *   :initial-state (fn [params] {})}
 *  (let [current (r/current-route props :top-router)]
 *    ...))
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.current_route = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$current_route(state_map_or_router_table,router_id){
if(cljs.core.contains_QMARK_(state_map_or_router_table,com.fulcrologic.fulcro.routing.legacy_ui_routers.routers_table)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map_or_router_table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.routers_table,router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506)], null));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map_or_router_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506)], null));
}
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.routing !== 'undefined') && (typeof com.fulcrologic.fulcro.routing.legacy_ui_routers !== 'undefined') && (typeof com.fulcrologic.fulcro.routing.legacy_ui_routers.coerce_param !== 'undefined')){
} else {
com.fulcrologic.fulcro.routing.legacy_ui_routers.coerce_param = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__85403 = cljs.core.get_global_hierarchy;
return (fexpr__85403.cljs$core$IFn$_invoke$arity$0 ? fexpr__85403.cljs$core$IFn$_invoke$arity$0() : fexpr__85403.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.routing.legacy-ui-routers","coerce-param"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (param_keyword,v){
return param_keyword;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.fulcrologic.fulcro.routing.legacy_ui_routers.coerce_param.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (k,v){
if(((typeof v === 'string') && (cljs.core.seq(cljs.core.re_seq(/^[0-9][0-9]*$/,v))))){
return parseInt(v);
} else {
if(((typeof v === 'string') && (cljs.core.seq(cljs.core.re_seq(/^[a-zA-Z]/,v))))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
} else {
return v;

}
}
}));
/**
 * Replace any keywords of the form :params/X with the value of (get route-params :X) in the given ident. By default the value
 *   of the parameter (which comes in as a string) will be converted to an int if it is all digits, and will be
 *   converted to a keyword if it is all letters. If you want to customize the coercion, just:
 * 
 *   ```
 *   (defmethod r/coerce-param :param/NAME [k v] (transform-it v))
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.set_ident_route_params = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$set_ident_route_params(ident,route_params){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (element){
if((((element instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param",cljs.core.namespace(element))))){
var G__85411 = element;
var G__85412 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(route_params,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(element)),element);
return (com.fulcrologic.fulcro.routing.legacy_ui_routers.coerce_param.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.legacy_ui_routers.coerce_param.cljs$core$IFn$_invoke$arity$2(G__85411,G__85412) : com.fulcrologic.fulcro.routing.legacy_ui_routers.coerce_param.call(null,G__85411,G__85412));
} else {
return element;
}
}),ident);
});
/**
 * Set the given screen-ident as the current route on the router with the given ID. Returns a new application
 *   state map.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.set_route_STAR_ = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$set_route_STAR_(state_map,router_id,screen_ident){
return cljs.core.assoc_in(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.routers_table,router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506)], null),screen_ident);
});
/**
 * Mutation: Explicitly set the route of a given router to the target screen ident.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.set_route = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","set-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/set-route",-632531214,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","set-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/set-route",-632531214,null),(function (fulcro_mutation_env_symbol){
var map__85422 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__85422__$1 = (((((!((map__85422 == null))))?(((((map__85422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85422):map__85422);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85422__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85422__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),((function (map__85422,map__85422__$1,router,target){
return (function com$fulcrologic$fulcro$routing$legacy_ui_routers$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506)], null);
});})(map__85422,map__85422__$1,router,target))
,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__85422,map__85422__$1,router,target){
return (function com$fulcrologic$fulcro$routing$legacy_ui_routers$action(p__85426){
var map__85427 = p__85426;
var map__85427__$1 = (((((!((map__85427 == null))))?(((((map__85427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85427):map__85427);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85427__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.routing.legacy_ui_routers.set_route_STAR_,router,target);

return null;
});})(map__85422,map__85422__$1,router,target))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__85422,map__85422__$1,router,target){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__85422,map__85422__$1,router,target))
], null);
}));

/**
 * Change the given router's query iff it is a dynamic router. Returns the updated state.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.set_routing_query = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$set_routing_query(state,app,router_id,p__85438){
var vec__85443 = p__85438;
var target_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85443,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85443,(1),null);
var router = (function (){var G__85446 = new cljs.core.Keyword("fulcro.client.routing.routers","by-id","fulcro.client.routing.routers/by-id",-2014319047).cljs$core$IFn$_invoke$arity$1(state);
return (router_id.cljs$core$IFn$_invoke$arity$1 ? router_id.cljs$core$IFn$_invoke$arity$1(G__85446) : router_id.call(null,G__85446));
})();
var dynamic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","dynamic","com.fulcrologic.fulcro.routing.legacy-ui-routers/dynamic",354005201).cljs$core$IFn$_invoke$arity$1(router));
var query = ((dynamic_QMARK_)?(function (){var G__85447 = target_kw;
var G__85447__$1 = (((G__85447 == null))?null:(com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.cljs$core$IFn$_invoke$arity$1(G__85447) : com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.call(null,G__85447)));
if((G__85447__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(G__85447__$1,state);
}
})():null);
if(cljs.core.truth_(query)){
if(cljs.core.truth_(app)){
com.fulcrologic.fulcro.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app);
} else {
}

return com.fulcrologic.fulcro.components.set_query_STAR_(state,com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.routing.legacy_ui_routers.DynamicRouter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qualifier","qualifier",125841738),router_id], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","dynamic","com.fulcrologic.fulcro.routing.legacy-ui-routers/dynamic",354005201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),query], null)], null)], null));
} else {
return state;
}
});
/**
 * PRIVATE.
 * 
 *   Given the reconciler, state, and a routing tree route: finds and sets all of the dynamic queries needed to
 *   accomplish that route. Returns the updated state. reconciler can be nil, in which case UI refresh may not
 *   happen, but that is useful for SSR.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers._update_routing_queries = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$_update_routing_queries(state,app,p__85454){
var map__85455 = p__85454;
var map__85455__$1 = (((((!((map__85455 == null))))?(((((map__85455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85455):map__85455);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85455__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85455__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var routing_instructions = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree_key,handler], null));
if((!((((routing_instructions == null)) || (cljs.core.vector_QMARK_(routing_instructions)))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.legacy-ui-routers",null,191,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (routing_instructions,map__85455,map__85455__$1,handler,route_params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Routing tree does not contain a vector of routing-instructions for handler ",handler], null);
});})(routing_instructions,map__85455,map__85455__$1,handler,route_params))
,null)),null,-644461536);

return state;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (routing_instructions,map__85455,map__85455__$1,handler,route_params){
return (function (ongoing_state,p__85459){
var map__85460 = p__85459;
var map__85460__$1 = (((((!((map__85460 == null))))?(((((map__85460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85460):map__85460);
var target_router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85460__$1,new cljs.core.Keyword(null,"target-router","target-router",1118628820));
var target_screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85460__$1,new cljs.core.Keyword(null,"target-screen","target-screen",-744688524));
return com.fulcrologic.fulcro.routing.legacy_ui_routers.set_routing_query(ongoing_state,app,target_router,target_screen);
});})(routing_instructions,map__85455,map__85455__$1,handler,route_params))
,state,routing_instructions);
}
});
/**
 * Given the app state map, returns a new map that has the routing graph links updated for the given route/params
 *   as a bidi match.
 * 
 *   ***This function should only be used if you only use static UI routing.***
 * 
 *   If you use DynamicRouter then you must use `route-to-impl!` instead.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.update_routing_links = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$update_routing_links(state_map,p__85462){
var map__85463 = p__85462;
var map__85463__$1 = (((((!((map__85463 == null))))?(((((map__85463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85463):map__85463);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85463__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85463__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var routing_instructions = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree_key,handler], null));
if((!((((routing_instructions == null)) || (cljs.core.vector_QMARK_(routing_instructions)))))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.legacy-ui-routers",null,207,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (routing_instructions,map__85463,map__85463__$1,handler,route_params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Routing tree does not contain a vector of routing-instructions for handler ",handler], null);
});})(routing_instructions,map__85463,map__85463__$1,handler,route_params))
,null)),null,589787202);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (routing_instructions,map__85463,map__85463__$1,handler,route_params){
return (function (m,p__85466){
var map__85467 = p__85466;
var map__85467__$1 = (((((!((map__85467 == null))))?(((((map__85467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85467):map__85467);
var target_router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85467__$1,new cljs.core.Keyword(null,"target-router","target-router",1118628820));
var target_screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85467__$1,new cljs.core.Keyword(null,"target-screen","target-screen",-744688524));
var parameterized_screen_ident = com.fulcrologic.fulcro.routing.legacy_ui_routers.set_ident_route_params(target_screen,route_params);
return com.fulcrologic.fulcro.routing.legacy_ui_routers.set_route_STAR_(m,target_router,parameterized_screen_ident);
});})(routing_instructions,map__85463,map__85463__$1,handler,route_params))
,state_map,routing_instructions);
}
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.routing !== 'undefined') && (typeof com.fulcrologic.fulcro.routing.legacy_ui_routers !== 'undefined') && (typeof com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target !== 'undefined')){
} else {
/**
 * Get the component that renders the given screen type. The parameter is simply the keyword of the module/component.
 *   Note that all have to match: the module name in the compiler that contains the code for the component,
 *   the first element of the ident returned by the component, and the keyword passed to this multimethod to retrieve
 *   the component.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__85470 = cljs.core.get_global_hierarchy;
return (fexpr__85470.cljs$core$IFn$_invoke$arity$0 ? fexpr__85470.cljs$core$IFn$_invoke$arity$0() : fexpr__85470.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.routing.legacy-ui-routers","get-dynamic-router-target"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (k){
return k;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (k){
return null;
}));
com.fulcrologic.fulcro.routing.legacy_ui_routers.add_route_state = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$add_route_state(state_map,target_kw,component){
var tree_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tmp","new-route","tmp/new-route",-460795361),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$1(component)], null);
var query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tmp","new-route","tmp/new-route",-460795361),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(component)], null)], null);
var normalized_state = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(query,tree_state,true,com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$1(state_map)),new cljs.core.Keyword("tmp","new-route","tmp/new-route",-460795361));
return com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state_map,normalized_state], 0));
});
/**
 * Implementation of mutation. Useful for SSR setup.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.install_route_STAR_ = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$install_route_STAR_(state_map,target_kw,component){
return com.fulcrologic.fulcro.routing.legacy_ui_routers.add_route_state(state_map,target_kw,component);
});
com.fulcrologic.fulcro.routing.legacy_ui_routers.install_route_impl = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$install_route_impl(state,target_kw,component){
com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.cljs$core$IMultiFn$_add_method$arity$3(null,target_kw,(function (k){
return component;
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.routing.legacy_ui_routers.add_route_state,target_kw,component);
});
/**
 * Fulcro mutation: Install support for a dynamic route. `target-kw` is the keyword that represents the table name of
 *   the target screen (first elemenet of the ident of the component), which must also match internal data in the
 *   state of that component at fulcro.client.routing/dynamic-route-key. `component` is the *class* of the UI component that will be
 *   shown by the router. It *must* implement InitialAppState to provide at least the value of `target-kw` at the
 *   predefined fulcro.client.routing/dynamic-route-key key.
 * 
 *   An example would be that you've defined a component like this:
 * 
 *   (ns app.component
 *  (:require fulcro.client.routing))
 * 
 *   (def target-kw :my-component)
 * 
 *   (defsc Component [this props]
 *  {:initial-state (fn [p] {fulcro.client.routing/dynamic-route-key target-kw})
 *   :ident (fn [this props] [target-kw :singleton])}
 *  ...)
 * 
 *   and during startup you install this route as:
 * 
 *   (transact! this `[(install-route {:target-kw :my-component :component Component})])
 *   
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.install_route = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","install-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/install-route",1679521880,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","install-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/install-route",1679521880,null),(function (fulcro_mutation_env_symbol){
var map__85471 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__85471__$1 = (((((!((map__85471 == null))))?(((((map__85471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85471):map__85471);
var target_kw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85471__$1,new cljs.core.Keyword(null,"target-kw","target-kw",1473107484));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85471__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__85471,map__85471__$1,target_kw,component){
return (function com$fulcrologic$fulcro$routing$legacy_ui_routers$action(p__85473){
var map__85474 = p__85473;
var map__85474__$1 = (((((!((map__85474 == null))))?(((((map__85474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85474):map__85474);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85474__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
com.fulcrologic.fulcro.routing.legacy_ui_routers.install_route_impl(state,target_kw,component);

return null;
});})(map__85471,map__85471__$1,target_kw,component))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__85471,map__85471__$1,target_kw,component){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__85471,map__85471__$1,target_kw,component))
], null);
}));
com.fulcrologic.fulcro.routing.legacy_ui_routers.dynamic_route_key = new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","dynamic-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/dynamic-route",403222023);

var options__72617__auto___85673 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function com$fulcrologic$fulcro$routing$legacy_ui_routers$build_raw_initial_state_STAR_(p__85481){
var map__85482 = p__85481;
var map__85482__$1 = (((((!((map__85482 == null))))?(((((map__85482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85482):map__85482);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85482__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),id,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","dynamic","com.fulcrologic.fulcro.routing.legacy-ui-routers/dynamic",354005201),true,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506),cljs.core.PersistentArrayMap.EMPTY], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$fulcrologic$fulcro$routing$legacy_ui_routers$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.routers_table,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function com$fulcrologic$fulcro$routing$legacy_ui_routers$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","dynamic","com.fulcrologic.fulcro.routing.legacy-ui-routers/dynamic",354005201),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro$routing$legacy_ui_routers$render_DynamicRouter(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
var map__85484 = com.fulcrologic.fulcro.components.props(this$);
var map__85484__$1 = (((((!((map__85484 == null))))?(((((map__85484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85484):map__85484);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85484__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950));
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85484__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","current-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/current-route",-1907032506));
var target_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_route,com.fulcrologic.fulcro.routing.legacy_ui_routers.dynamic_route_key);
var c = (com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.cljs$core$IFn$_invoke$arity$1(target_key) : com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.call(null,target_key));
var factory = (cljs.core.truth_(c)?com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),com.fulcrologic.fulcro.routing.legacy_ui_routers.dynamic_route_key,new cljs.core.Keyword(null,"qualifier","qualifier",125841738),id], null)):null);
if(cljs.core.truth_(factory)){
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(current_route) : factory.call(null,current_route));
} else {
return null;
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.routing !== 'undefined') && (typeof com.fulcrologic.fulcro.routing.legacy_ui_routers !== 'undefined') && (typeof com.fulcrologic.fulcro.routing.legacy_ui_routers.DynamicRouter !== 'undefined')){
} else {
com.fulcrologic.fulcro.routing.legacy_ui_routers.DynamicRouter = ((function (options__72617__auto___85673){
return (function com$fulcrologic$fulcro$routing$legacy_ui_routers$DynamicRouter(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85673,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85677)){
var init_state__72620__auto___85678 = temp__5733__auto___85677;
this__72619__auto__.state = (function (){var obj85489 = ({"fulcro$state":(function (){var G__85490 = this__72619__auto__;
var G__85491 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85678.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85678.cljs$core$IFn$_invoke$arity$2(G__85490,G__85491) : init_state__72620__auto___85678.call(null,G__85490,G__85491));
})()});
return obj85489;
})();
} else {
this__72619__auto__.state = (function (){var obj85493 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85493;
})();
}

return null;
});})(options__72617__auto___85673))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.fulcro.routing.legacy_ui_routers.DynamicRouter,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","DynamicRouter","com.fulcrologic.fulcro.routing.legacy-ui-routers/DynamicRouter",1684180422),options__72617__auto___85673);
com.fulcrologic.fulcro.routing.legacy_ui_routers.ui_dynamic_router = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$ui_dynamic_router(props){
var ui_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.routing.legacy_ui_routers.DynamicRouter,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qualifier","qualifier",125841738),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950)),new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","id","com.fulcrologic.fulcro.routing.legacy-ui-routers/id",-122311950)], null));
return (ui_factory.cljs$core$IFn$_invoke$arity$1 ? ui_factory.cljs$core$IFn$_invoke$arity$1(props) : ui_factory.call(null,props));
});
/**
 * Get the query for the router with the given router-id.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_query = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$get_dynamic_router_query(router_id){
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.routing.legacy_ui_routers.DynamicRouter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qualifier","qualifier",125841738),router_id], null)));
});
/**
 * Finish doing the routing after a module completes loading
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers._process_pending_route_BANG_ = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$_process_pending_route_BANG_(p__85505){
var map__85506 = p__85505;
var map__85506__$1 = (((((!((map__85506 == null))))?(((((map__85506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85506):map__85506);
var env = map__85506__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85506__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85506__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var target = new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","pending-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/pending-route",-863934904).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (target,map__85506,map__85506__$1,env,state,app){
return (function (s){
var G__85520 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","pending-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/pending-route",-863934904));
var G__85520__$1 = com.fulcrologic.fulcro.routing.legacy_ui_routers._update_routing_queries(G__85520,app,target)
;
if(cljs.core.contains_QMARK_(target,new cljs.core.Keyword(null,"handler","handler",-195596612))){
return com.fulcrologic.fulcro.routing.legacy_ui_routers.update_routing_links(G__85520__$1,target);
} else {
return G__85520__$1;
}
});})(target,map__85506,map__85506__$1,env,state,app))
);
});
/**
 * Returns true iff the given ident has no component loaded into the dynamic routing multimethod.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers._route_target_missing_QMARK_ = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$_route_target_missing_QMARK_(ident){
var screen = cljs.core.first(ident);
var c = (com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.cljs$core$IFn$_invoke$arity$1(screen) : com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.call(null,screen));
return (c == null);
});
/**
 * Returns true if the given component (instance) is a DynamicRouter.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers._is_dynamic_router_QMARK_ = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$_is_dynamic_router_QMARK_(component){
return (component instanceof com.fulcrologic.fulcro.routing.legacy_ui_routers.DynamicRouter);
});
/**
 * Returns a sequence of routes that need to be loaded in order for routing to succeed.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers._get_missing_routes = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$_get_missing_routes(app,state_map,p__85527){
var map__85530 = p__85527;
var map__85530__$1 = (((((!((map__85530 == null))))?(((((map__85530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85530):map__85530);
var params = map__85530__$1;
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85530__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85530__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var routing_instructions = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.routing_tree_key,handler], null));
if((!((((routing_instructions == null)) || (cljs.core.vector_QMARK_(routing_instructions)))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.legacy-ui-routers",null,315,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (routing_instructions,map__85530,map__85530__$1,params,handler,route_params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Routing tree does not contain a vector of routing-instructions for handler ",handler], null);
});})(routing_instructions,map__85530,map__85530__$1,params,handler,route_params))
,null)),null,582886503);

return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (routing_instructions,map__85530,map__85530__$1,params,handler,route_params){
return (function (routes,p__85539){
var map__85540 = p__85539;
var map__85540__$1 = (((((!((map__85540 == null))))?(((((map__85540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85540):map__85540);
var target_router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85540__$1,new cljs.core.Keyword(null,"target-router","target-router",1118628820));
var target_screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85540__$1,new cljs.core.Keyword(null,"target-screen","target-screen",-744688524));
var router = com.fulcrologic.fulcro.components.ident__GT_any(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.routers_table,target_router], null));
if(((com.fulcrologic.fulcro.routing.legacy_ui_routers._is_dynamic_router_QMARK_(router)) && (com.fulcrologic.fulcro.routing.legacy_ui_routers._route_target_missing_QMARK_(target_screen)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(routes,cljs.core.first(target_screen));
} else {
return routes;
}
});})(routing_instructions,map__85530,map__85530__$1,params,handler,route_params))
,cljs.core.PersistentVector.EMPTY,routing_instructions);
}
});
/**
 * Triggers the actual load of a route, and retries if the networking is down. If the pending route (in state) has changed
 *   between retries, then no further retries will be attempted. Exponential backoff with a 10 second max is used as long
 *   as retries are being done.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers._load_dynamic_route = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$_load_dynamic_route(var_args){
var G__85546 = arguments.length;
switch (G__85546) {
case 4:
return com.fulcrologic.fulcro.routing.legacy_ui_routers._load_dynamic_route.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return com.fulcrologic.fulcro.routing.legacy_ui_routers._load_dynamic_route.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.routing.legacy_ui_routers._load_dynamic_route.cljs$core$IFn$_invoke$arity$4 = (function (state_atom,pending_route_handler,route_to_load,finish_fn){
return com.fulcrologic.fulcro.routing.legacy_ui_routers._load_dynamic_route.cljs$core$IFn$_invoke$arity$6(state_atom,pending_route_handler,route_to_load,finish_fn,(0),(0));
});

com.fulcrologic.fulcro.routing.legacy_ui_routers._load_dynamic_route.cljs$core$IFn$_invoke$arity$6 = (function (state_atom,pending_route_handler,route_to_load,finish,attempt,delay){
return setTimeout((function (){
var current_pending_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_atom),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","pending-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/pending-route",-863934904));
if(cljs.core.truth_((function (){var and__4120__auto__ = pending_route_handler;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_pending_route,pending_route_handler);
} else {
return and__4120__auto__;
}
})())){
var deferred_result = shadow.loader.load(route_to_load);
var next_delay = (function (){var x__4222__auto__ = (10000);
var y__4223__auto__ = ((2) * (function (){var x__4219__auto__ = (1000);
var y__4220__auto__ = delay;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
deferred_result.addCallback(finish);

return deferred_result.addErrback(((function (deferred_result,next_delay,current_pending_route){
return (function (_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.legacy-ui-routers",null,345,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (deferred_result,next_delay,current_pending_route){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Route load failed for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(route_to_load),". Attempting retry."].join('')], null);
});})(deferred_result,next_delay,current_pending_route))
,null)),null,-2023158492);

return com.fulcrologic.fulcro.routing.legacy_ui_routers._load_dynamic_route.cljs$core$IFn$_invoke$arity$6(state_atom,pending_route_handler,route_to_load,finish,(attempt + (1)),next_delay);
});})(deferred_result,next_delay,current_pending_route))
);
} else {
return null;
}
}),delay);
});

com.fulcrologic.fulcro.routing.legacy_ui_routers._load_dynamic_route.cljs$lang$maxFixedArity = 6;

com.fulcrologic.fulcro.routing.legacy_ui_routers._load_routes = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$_load_routes(p__85547,routes){
var map__85548 = p__85547;
var map__85548__$1 = (((((!((map__85548 == null))))?(((((map__85548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85548):map__85548);
var env = map__85548__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85548__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var loaded = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var pending_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","pending-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/pending-route",-863934904));
var to_load = cljs.core.count(routes);
var finish = ((function (loaded,pending_route,to_load,map__85548,map__85548__$1,env,state){
return (function (k){
return ((function (loaded,pending_route,to_load,map__85548,map__85548__$1,env,state){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.inc);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(loaded),to_load)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.routing.legacy_ui_routers.add_route_state,k,(com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.call(null,k)));

return com.fulcrologic.fulcro.routing.legacy_ui_routers._process_pending_route_BANG_(env);
} else {
return null;
}
});
;})(loaded,pending_route,to_load,map__85548,map__85548__$1,env,state))
});})(loaded,pending_route,to_load,map__85548,map__85548__$1,env,state))
;
var seq__85550 = cljs.core.seq(routes);
var chunk__85551 = null;
var count__85552 = (0);
var i__85553 = (0);
while(true){
if((i__85553 < count__85552)){
var r = chunk__85551.cljs$core$IIndexed$_nth$arity$2(null,i__85553);
com.fulcrologic.fulcro.routing.legacy_ui_routers._load_dynamic_route.cljs$core$IFn$_invoke$arity$4(state,pending_route,r,finish(r));


var G__85747 = seq__85550;
var G__85748 = chunk__85551;
var G__85749 = count__85552;
var G__85750 = (i__85553 + (1));
seq__85550 = G__85747;
chunk__85551 = G__85748;
count__85552 = G__85749;
i__85553 = G__85750;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__85550);
if(temp__5735__auto__){
var seq__85550__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__85550__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__85550__$1);
var G__85751 = cljs.core.chunk_rest(seq__85550__$1);
var G__85752 = c__4550__auto__;
var G__85753 = cljs.core.count(c__4550__auto__);
var G__85754 = (0);
seq__85550 = G__85751;
chunk__85551 = G__85752;
count__85552 = G__85753;
i__85553 = G__85754;
continue;
} else {
var r = cljs.core.first(seq__85550__$1);
com.fulcrologic.fulcro.routing.legacy_ui_routers._load_dynamic_route.cljs$core$IFn$_invoke$arity$4(state,pending_route,r,finish(r));


var G__85755 = cljs.core.next(seq__85550__$1);
var G__85756 = null;
var G__85757 = (0);
var G__85758 = (0);
seq__85550 = G__85755;
chunk__85551 = G__85756;
count__85552 = G__85757;
i__85553 = G__85758;
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
 * Mutation implementation, for use as a composition into other mutations. This function can be used
 *   from within mutations. If a DynamicRouter is used in your routes, then this function may trigger
 *   code loading. Once the loading is complete (if any is needed), it will trigger the actual UI routing.
 * 
 *   If routes are being loaded, then the root property in your app state :fulcro.client.routing/pending-route
 *   will be your `bidi-match`. You can use a link query to pull this into your UI to show some kind of indicator.
 * 
 *   NOTE: this function updates application state and *must not* be used from within a swap on that state.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.route_to_impl_BANG_ = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$route_to_impl_BANG_(p__85555,bidi_match){
var map__85556 = p__85555;
var map__85556__$1 = (((((!((map__85556 == null))))?(((((map__85556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85556):map__85556);
var env = map__85556__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85556__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85556__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var temp__5733__auto__ = cljs.core.seq(com.fulcrologic.fulcro.routing.legacy_ui_routers._get_missing_routes(app,cljs.core.deref(state),bidi_match));
if(temp__5733__auto__){
var missing_routes = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bidi_match,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","pending-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/pending-route",-863934904)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.legacy-ui-routers",null,378,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (missing_routes,temp__5733__auto__,map__85556,map__85556__$1,env,state,app){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attempt to trigger a route that was pending, but that wasn't done loading (or failed to load)."], null);
});})(missing_routes,temp__5733__auto__,map__85556,map__85556__$1,env,state,app))
,null)),null,366795532);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","pending-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/pending-route",-863934904),bidi_match);

return com.fulcrologic.fulcro.routing.legacy_ui_routers._load_routes(env,missing_routes);
}
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (temp__5733__auto__,map__85556,map__85556__$1,env,state,app){
return (function (p1__85554_SHARP_){
return com.fulcrologic.fulcro.routing.legacy_ui_routers.update_routing_links(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.routing.legacy_ui_routers._update_routing_queries(p1__85554_SHARP_,app,bidi_match),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","pending-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/pending-route",-863934904)),bidi_match);
});})(temp__5733__auto__,map__85556,map__85556__$1,env,state,app))
);
}
});
/**
 * Implementation of routing tree data manipulations on app state. Returns an updated app state.
 * 
 *   WARNING: This function will not trigger dynamic module loading, as it is
 *   only responsible for returning a state-map that has been set (as far as is possible) to the given route. You typically
 *   do *not* want to use this on a client, but exists a separate function for server-side rendering to be easily able
 *   to route, since no dynamic code loading will be needed.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.route_to_STAR_ = (function com$fulcrologic$fulcro$routing$legacy_ui_routers$route_to_STAR_(state_map,bidi_match){
return com.fulcrologic.fulcro.routing.legacy_ui_routers.update_routing_links(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.routing.legacy_ui_routers._update_routing_queries(state_map,null,bidi_match),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.legacy-ui-routers","pending-route","com.fulcrologic.fulcro.routing.legacy-ui-routers/pending-route",-863934904)),bidi_match);
});
/**
 * Mutation (use in transact! only):
 * 
 *   Change the application's overall UI route to the given route by handler. Handler must be a single keyword that
 *   indicates an entry in your routing tree (which must be in the initial app state of your UI root). route-params
 *   is a map of key-value pairs that will be substituted in the target screen idents of the routing tree.
 * 
 *   If any of the routers are dynamic, then this mutation will check to see if the target routes are loaded. If any
 *   are not present, then module load(s) will be triggered for them, and the route will be pending until the code arrives.
 * 
 *   If a new route-to is run before pending routes are installed, then the pending route will be cancelled, but the code
 *   loading will continue.
 * 
 *   You may use a link query to get [:fulcro.client.routing/pending-route '_] in your application. If it is not nil
 *   then a route is pending, and you can show UI indicators of this.
 * 
 *   Server-side rendering should require all dynamic portions of the UI and use `route-to*`.
 */
com.fulcrologic.fulcro.routing.legacy_ui_routers.route_to = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","route-to","com.fulcrologic.fulcro.routing.legacy-ui-routers/route-to",-1157637021,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.legacy-ui-routers","route-to","com.fulcrologic.fulcro.routing.legacy-ui-routers/route-to",-1157637021,null),(function (fulcro_mutation_env_symbol){
var map__85561 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__85561__$1 = (((((!((map__85561 == null))))?(((((map__85561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85561):map__85561);
var params = map__85561__$1;
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85561__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85561__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__85561,map__85561__$1,params,handler,route_params){
return (function com$fulcrologic$fulcro$routing$legacy_ui_routers$action(env){
try{com.fulcrologic.fulcro.routing.legacy_ui_routers.route_to_impl_BANG_(env,params);
}catch (e85563){var t_85782 = e85563;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.legacy-ui-routers",null,423,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t_85782,map__85561,map__85561__$1,params,handler,route_params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Routing failed!",t_85782], null);
});})(t_85782,map__85561,map__85561__$1,params,handler,route_params))
,null)),null,306287864);
}
return null;
});})(map__85561,map__85561__$1,params,handler,route_params))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__85561,map__85561__$1,params,handler,route_params){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__85561,map__85561__$1,params,handler,route_params))
], null);
}));

//# sourceMappingURL=com.fulcrologic.fulcro.routing.legacy_ui_routers.js.map
