goog.provide('com.fulcrologic.fulcro.algorithms.react_interop');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('taoensso.timbre');
/**
 * Returns a factory for raw JS React classes.
 * 
 *   ```
 *   (def ui-thing (react-factory SomeReactLibComponent))
 * 
 *   ...
 *   (defsc X [_ _]
 *  (ui-thing {:value 1}))
 *   ```
 * 
 *   The returned function will accept CLJS maps as props (not optional) and then any number of children. The CLJS props
 *   will be converted to js for interop. You may pass js props as an optimization.
 */
com.fulcrologic.fulcro.algorithms.react_interop.react_factory = (function com$fulcrologic$fulcro$algorithms$react_interop$react_factory(js_component_class){
return (function() { 
var G__84993__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,js_component_class,com.fulcrologic.fulcro.dom.convert_props(props),children);
};
var G__84993 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__84994__i = 0, G__84994__a = new Array(arguments.length -  1);
while (G__84994__i < G__84994__a.length) {G__84994__a[G__84994__i] = arguments[G__84994__i + 1]; ++G__84994__i;}
  children = new cljs.core.IndexedSeq(G__84994__a,0,null);
} 
return G__84993__delegate.call(this,props,children);};
G__84993.cljs$lang$maxFixedArity = 1;
G__84993.cljs$lang$applyTo = (function (arglist__84995){
var props = cljs.core.first(arglist__84995);
var children = cljs.core.rest(arglist__84995);
return G__84993__delegate(props,children);
});
G__84993.cljs$core$IFn$_invoke$arity$variadic = G__84993__delegate;
return G__84993;
})()
;
});
/**
 * Creates a React factory `(fn [parent fulcro-props & children])` for a component that has had an HOC applied,
 *   and passes Fulcro's parent/props through to 'fulcro_hoc$parent' and 'fulcro_hoc_childprops' in the js props.
 * 
 *   See hoc-factory, which is more likely what you want, as it further wraps the parent context for proper interop.
 */
com.fulcrologic.fulcro.algorithms.react_interop.hoc_wrapper_factory = (function com$fulcrologic$fulcro$algorithms$react_interop$hoc_wrapper_factory(component_class){
return (function() { 
var G__84996__delegate = function (this$,props,children){
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,this$)))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.react-interop",null,35,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The first argument to an HOC factory MUST be the parent component instance."], null);
}),null)),null,1747710763);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,component_class,({"fulcro_hoc$parent": this$, "fulcro_hoc$childprops": props}),children);
};
var G__84996 = function (this$,props,var_args){
var children = null;
if (arguments.length > 2) {
var G__84997__i = 0, G__84997__a = new Array(arguments.length -  2);
while (G__84997__i < G__84997__a.length) {G__84997__a[G__84997__i] = arguments[G__84997__i + 2]; ++G__84997__i;}
  children = new cljs.core.IndexedSeq(G__84997__a,0,null);
} 
return G__84996__delegate.call(this,this$,props,children);};
G__84996.cljs$lang$maxFixedArity = 2;
G__84996.cljs$lang$applyTo = (function (arglist__84998){
var this$ = cljs.core.first(arglist__84998);
arglist__84998 = cljs.core.next(arglist__84998);
var props = cljs.core.first(arglist__84998);
var children = cljs.core.rest(arglist__84998);
return G__84996__delegate(this$,props,children);
});
G__84996.cljs$core$IFn$_invoke$arity$variadic = G__84996__delegate;
return G__84996;
})()
;
});
/**
 * Returns a (fn [parent-component props & children] ...) that will render the target-fulcro-class, but as
 *   wrapped by the `hoc` function.
 * 
 *   Use this when you have a JS React pattern that tells you:
 * 
 *   ```
 *   var WrappedComponent = injectCrap(Component);
 *   ```
 * 
 *   where `injectCrap` is the `hoc` parameter to this function.
 * 
 *   Any injected data will appear as `:injected-props` (a js map) in the computed parameter of the target Fulcro component.
 * 
 *   You can this use the function returned from `hoc-factory` as a normal component factory in fulcro.
 *   
 */
com.fulcrologic.fulcro.algorithms.react_interop.hoc_factory = (function com$fulcrologic$fulcro$algorithms$react_interop$hoc_factory(target_fulcro_class,hoc){
if(com.fulcrologic.fulcro.components.component_class_QMARK_(target_fulcro_class)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.react-interop",null,60,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hoc-factory MUST be used with a Fulcro Class"], null);
}),null)),null,-120581499);
}

var target_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(target_fulcro_class);
var target_factory_interop = ((function (target_factory){
return (function (js_props){
var parent = com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,"fulcro_hoc$parent");
var fulcro_props = com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,"fulcro_hoc$childprops");
var parent__72530__auto__ = parent;
var r__72531__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.components.any__GT_app(parent__72530__auto__);
}
})();
var d__72532__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (com.fulcrologic.fulcro.components.depth(parent__72530__auto__) + (1));
}
})();
var s__72533__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(parent__72530__auto__);
}
})();
var p__72534__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return parent__72530__auto__;
}
})();
var _STAR_app_STAR__orig_val__84978 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__84979 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__84980 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__84981 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__84982 = r__72531__auto__;
var _STAR_depth_STAR__temp_val__84983 = d__72532__auto__;
var _STAR_shared_STAR__temp_val__84984 = s__72533__auto__;
var _STAR_parent_STAR__temp_val__84985 = p__72534__auto__;
com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__84982;

com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__84983;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__84984;

com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__84985;

try{var G__84986 = fulcro_props;
var G__84987 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"injected-props","injected-props",366631973),js_props], null);
return (target_factory.cljs$core$IFn$_invoke$arity$2 ? target_factory.cljs$core$IFn$_invoke$arity$2(G__84986,G__84987) : target_factory.call(null,G__84986,G__84987));
}finally {com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__84981;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__84980;

com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__84979;

com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__84978;
}});})(target_factory))
;
var factory = (function (){var WrappedComponent = (hoc.cljs$core$IFn$_invoke$arity$1 ? hoc.cljs$core$IFn$_invoke$arity$1(target_factory_interop) : hoc.call(null,target_factory_interop));
return com.fulcrologic.fulcro.algorithms.react_interop.hoc_wrapper_factory(WrappedComponent);
})();
return factory;
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.react_interop.js.map
