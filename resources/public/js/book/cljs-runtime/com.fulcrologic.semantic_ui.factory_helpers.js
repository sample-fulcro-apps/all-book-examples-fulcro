goog.provide('com.fulcrologic.semantic_ui.factory_helpers');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('com.fulcrologic.fulcro.dom');
com.fulcrologic.semantic_ui.factory_helpers.factory_apply = (function com$fulcrologic$semantic_ui$factory_helpers$factory_apply(class$){
return (function() { 
var G__85911__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,class$,cljs.core.clj__GT_js(props),children);
};
var G__85911 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__85912__i = 0, G__85912__a = new Array(arguments.length -  1);
while (G__85912__i < G__85912__a.length) {G__85912__a[G__85912__i] = arguments[G__85912__i + 1]; ++G__85912__i;}
  children = new cljs.core.IndexedSeq(G__85912__a,0,null);
} 
return G__85911__delegate.call(this,props,children);};
G__85911.cljs$lang$maxFixedArity = 1;
G__85911.cljs$lang$applyTo = (function (arglist__85913){
var props = cljs.core.first(arglist__85913);
var children = cljs.core.rest(arglist__85913);
return G__85911__delegate(props,children);
});
G__85911.cljs$core$IFn$_invoke$arity$variadic = G__85911__delegate;
return G__85911;
})()
;
});
/**
 * Returns a factory that wraps the given class as an input. Requires that the target item support `:value` as a prop.
 */
com.fulcrologic.semantic_ui.factory_helpers.wrapped_factory_apply = (function com$fulcrologic$semantic_ui$factory_helpers$wrapped_factory_apply(class$){
var factory = com.fulcrologic.fulcro.dom.wrap_form_element(class$);
return ((function (factory){
return (function() { 
var G__85914__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(factory,cljs.core.clj__GT_js(props),children);
};
var G__85914 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__85915__i = 0, G__85915__a = new Array(arguments.length -  1);
while (G__85915__i < G__85915__a.length) {G__85915__a[G__85915__i] = arguments[G__85915__i + 1]; ++G__85915__i;}
  children = new cljs.core.IndexedSeq(G__85915__a,0,null);
} 
return G__85914__delegate.call(this,props,children);};
G__85914.cljs$lang$maxFixedArity = 1;
G__85914.cljs$lang$applyTo = (function (arglist__85916){
var props = cljs.core.first(arglist__85916);
var children = cljs.core.rest(arglist__85916);
return G__85914__delegate(props,children);
});
G__85914.cljs$core$IFn$_invoke$arity$variadic = G__85914__delegate;
return G__85914;
})()
;
;})(factory))
});

//# sourceMappingURL=com.fulcrologic.semantic_ui.factory_helpers.js.map
