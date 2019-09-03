goog.provide('book.ui.hover_example');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.components');
goog.require('goog.object');
goog.require('com.fulcrologic.fulcro.dom');
/**
 * Change the size of the canvas by some (pos or neg) amount..
 */
book.ui.hover_example.change_size_STAR_ = (function book$ui$hover_example$change_size_STAR_(state_map,amount){
var current_size = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("child","by-id","child/by-id",-2097747545),(0),new cljs.core.Keyword(null,"size","size",1098693007)], null));
var new_size = (amount + current_size);
return cljs.core.assoc_in(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("child","by-id","child/by-id",-2097747545),(0),new cljs.core.Keyword(null,"size","size",1098693007)], null),new_size);
});
/**
 * 
 */
book.ui.hover_example.make_smaller = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.ui.hover-example","make-smaller","book.ui.hover-example/make-smaller",197978088,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.ui.hover-example","make-smaller","book.ui.hover-example/make-smaller",197978088,null),(function (fulcro_mutation_env_symbol){
var p = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (p){
return (function book$ui$hover_example$action(p__84969){
var map__84971 = p__84969;
var map__84971__$1 = (((((!((map__84971 == null))))?(((((map__84971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84971):map__84971);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84971__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,book.ui.hover_example.change_size_STAR_,(-20));

return null;
});})(p))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (p){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(p))
], null);
}));
/**
 * 
 */
book.ui.hover_example.make_bigger = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.ui.hover-example","make-bigger","book.ui.hover-example/make-bigger",-1872804904,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.ui.hover-example","make-bigger","book.ui.hover-example/make-bigger",-1872804904,null),(function (fulcro_mutation_env_symbol){
var p = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (p){
return (function book$ui$hover_example$action(p__84974){
var map__84975 = p__84974;
var map__84975__$1 = (((((!((map__84975 == null))))?(((((map__84975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84975):map__84975);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84975__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,book.ui.hover_example.change_size_STAR_,(20));

return null;
});})(p))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (p){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(p))
], null);
}));
/**
 * 
 */
book.ui.hover_example.update_marker = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.ui.hover-example","update-marker","book.ui.hover-example/update-marker",-436980597,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.ui.hover-example","update-marker","book.ui.hover-example/update-marker",-436980597,null),(function (fulcro_mutation_env_symbol){
var map__84988 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__84988__$1 = (((((!((map__84988 == null))))?(((((map__84988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84988):map__84988);
var coords = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84988__$1,new cljs.core.Keyword(null,"coords","coords",-599429112));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__84988,map__84988__$1,coords){
return (function book$ui$hover_example$action(p__84990){
var map__84991 = p__84990;
var map__84991__$1 = (((((!((map__84991 == null))))?(((((map__84991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84991):map__84991);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84991__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("child","by-id","child/by-id",-2097747545),(0),new cljs.core.Keyword(null,"marker","marker",865118313)], null),coords);

return null;
});})(map__84988,map__84988__$1,coords))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__84988,map__84988__$1,coords){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__84988,map__84988__$1,coords))
], null);
}));
/**
 * Translate a javascript evt to a clj [x y] within the given dom element.
 */
book.ui.hover_example.event__GT_dom_coords = (function book$ui$hover_example$event__GT_dom_coords(evt,dom_ele){
var cx = evt.clientX;
var cy = evt.clientY;
var BB = dom_ele.getBoundingClientRect();
var x = (cx - BB.left);
var y = (cy - BB.top);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
/**
 * Translate a javascript evt to a clj [x y] within the given dom element as normalized (0 to 1) coordinates.
 */
book.ui.hover_example.event__GT_normalized_coords = (function book$ui$hover_example$event__GT_normalized_coords(evt,dom_ele){
var cx = evt.clientX;
var cy = evt.clientY;
var BB = dom_ele.getBoundingClientRect();
var w = (BB.right - BB.left);
var h = (BB.bottom - BB.top);
var x = ((cx - BB.left) / w);
var y = ((cy - BB.top) / h);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
/**
 * Render the graphics in the canvas. Pass the component props and state. 
 */
book.ui.hover_example.render_hover_and_marker = (function book$ui$hover_example$render_hover_and_marker(canvas,props,coords){
var marker = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(props);
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(props);
var real_marker_coords = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,size),marker);
var ctx = canvas.getContext("2d");
var clear = ((function (marker,size,real_marker_coords,ctx){
return (function (){
ctx.fillStyle = "white";

return ctx.fillRect((0),(0),size,size);
});})(marker,size,real_marker_coords,ctx))
;
var drawHover = ((function (marker,size,real_marker_coords,ctx,clear){
return (function (){
ctx.strokeStyle = "gray";

return ctx.strokeRect((cljs.core.first(coords) - (5)),(cljs.core.second(coords) - (5)),(10),(10));
});})(marker,size,real_marker_coords,ctx,clear))
;
var drawMarker = ((function (marker,size,real_marker_coords,ctx,clear,drawHover){
return (function (){
ctx.strokeStyle = "red";

return ctx.strokeRect((cljs.core.first(real_marker_coords) - (5)),(cljs.core.second(real_marker_coords) - (5)),(10),(10));
});})(marker,size,real_marker_coords,ctx,clear,drawHover))
;
ctx.save();

clear();

drawHover();

drawMarker();

return ctx.restore();
});
/**
 * Update the marker in app state. Derives normalized coordinates, and updates the marker in application state.
 */
book.ui.hover_example.place_marker = (function book$ui$hover_example$place_marker(child,evt){
var canvas = goog.object.get(child,"canvas");
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(child,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.ui.hover-example","update-marker","book.ui.hover-example/update-marker",-436980597,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"coords","coords",-599429112),null,(1),null)),(new cljs.core.List(null,book.ui.hover_example.event__GT_normalized_coords(evt,canvas),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});
/**
 * Updates the hover location of a proposed marker using canvas coordinates. Hover location
 * is stored in component local state (meaning that a low-level app database query will not
 * run to do the render that responds to this change)
 */
book.ui.hover_example.hover_marker = (function book$ui$hover_example$hover_marker(child,evt){
var canvas = goog.object.get(child,"canvas");
var updated_coords = book.ui.hover_example.event__GT_dom_coords(evt,canvas);
com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(child,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coords","coords",-599429112),updated_coords], null));

return book.ui.hover_example.render_hover_and_marker(canvas,com.fulcrologic.fulcro.components.props(child),updated_coords);
});

var options__72617__auto___85065 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui$hover_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"marker","marker",865118313)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui$hover_example$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$ui$hover_example$ident_STAR_(this$,p__85004){
var map__85005 = p__85004;
var map__85005__$1 = (((((!((map__85005 == null))))?(((((map__85005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85005):map__85005);
var props = map__85005__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85005__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85005__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("child","by-id","child/by-id",-2097747545),id], null);
}),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-50),(-50)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui$hover_example$render_Child(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85013 = com.fulcrologic.fulcro.components.props(this$);
var map__85013__$1 = (((((!((map__85013 == null))))?(((((map__85013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85013):map__85013);
var props = map__85013__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85013__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85013__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var temp__5735__auto___85070 = goog.object.get(this$,"canvas");
if(cljs.core.truth_(temp__5735__auto___85070)){
var canvas_85071 = temp__5735__auto___85070;
book.ui.hover_example.render_hover_and_marker(canvas_85071,props,com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"coords","coords",-599429112)));
} else {
}

return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),((function (map__85013,map__85013__$1,props,id,size){
return (function (evt){
return book.ui.hover_example.place_marker(this$,evt);
});})(map__85013,map__85013__$1,props,id,size))
,new cljs.core.Keyword(null,"onMouseMove","onMouseMove",2083193327),((function (map__85013,map__85013__$1,props,id,size){
return (function (evt){
return book.ui.hover_example.hover_marker(this$,evt);
});})(map__85013,map__85013__$1,props,id,size))
,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__85013,map__85013__$1,props,id,size){
return (function (r){
if(cljs.core.truth_(r)){
goog.object.set(this$,"canvas",r);

return book.ui.hover_example.render_hover_and_marker(r,props,com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"coords","coords",-599429112)));
} else {
return null;
}
});})(map__85013,map__85013__$1,props,id,size))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null)], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui !== 'undefined') && (typeof book.ui.hover_example !== 'undefined') && (typeof book.ui.hover_example.Child !== 'undefined')){
} else {
book.ui.hover_example.Child = ((function (options__72617__auto___85065){
return (function book$ui$hover_example$Child(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85065,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85079)){
var init_state__72620__auto___85082 = temp__5733__auto___85079;
this__72619__auto__.state = (function (){var obj85026 = ({"fulcro$state":(function (){var G__85028 = this__72619__auto__;
var G__85029 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85082.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85082.cljs$core$IFn$_invoke$arity$2(G__85028,G__85029) : init_state__72620__auto___85082.call(null,G__85028,G__85029));
})()});
return obj85026;
})();
} else {
this__72619__auto__.state = (function (){var obj85033 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85033;
})();
}

return null;
});})(options__72617__auto___85065))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui.hover_example.Child,new cljs.core.Keyword("book.ui.hover-example","Child","book.ui.hover-example/Child",-1443041847),options__72617__auto___85065);
book.ui.hover_example.ui_child = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui.hover_example.Child);

var options__72617__auto___85084 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui$hover_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child","child",623967545),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.ui.hover_example.Child)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui$hover_example$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"K",new cljs.core.Keyword(null,"child","child",623967545),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.ui.hover_example.Child,null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui$hover_example$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85040 = com.fulcrologic.fulcro.components.props(this$);
var map__85040__$1 = (((((!((map__85040 == null))))?(((((map__85040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85040):map__85040);
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85040__$1,new cljs.core.Keyword(null,"child","child",623967545));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85040,map__85040__$1,child){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.ui.hover-example","make-bigger","book.ui.hover-example/make-bigger",-1872804904,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(map__85040,map__85040__$1,child))
], null),"Bigger!"], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85040,map__85040__$1,child){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.ui.hover-example","make-smaller","book.ui.hover-example/make-smaller",197978088,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(map__85040,map__85040__$1,child))
], null),"Smaller!"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["br",({})])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["br",({})])),com.fulcrologic.fulcro.components.force_children((book.ui.hover_example.ui_child.cljs$core$IFn$_invoke$arity$1 ? book.ui.hover_example.ui_child.cljs$core$IFn$_invoke$arity$1(child) : book.ui.hover_example.ui_child.call(null,child)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui !== 'undefined') && (typeof book.ui.hover_example !== 'undefined') && (typeof book.ui.hover_example.Root !== 'undefined')){
} else {
book.ui.hover_example.Root = ((function (options__72617__auto___85084){
return (function book$ui$hover_example$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85084,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85092)){
var init_state__72620__auto___85094 = temp__5733__auto___85092;
this__72619__auto__.state = (function (){var obj85050 = ({"fulcro$state":(function (){var G__85051 = this__72619__auto__;
var G__85052 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85094.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85094.cljs$core$IFn$_invoke$arity$2(G__85051,G__85052) : init_state__72620__auto___85094.call(null,G__85051,G__85052));
})()});
return obj85050;
})();
} else {
this__72619__auto__.state = (function (){var obj85054 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85054;
})();
}

return null;
});})(options__72617__auto___85084))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui.hover_example.Root,new cljs.core.Keyword("book.ui.hover-example","Root","book.ui.hover-example/Root",-1379527682),options__72617__auto___85084);

//# sourceMappingURL=book.ui.hover_example.js.map
