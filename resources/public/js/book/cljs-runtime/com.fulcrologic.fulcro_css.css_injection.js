goog.provide('com.fulcrologic.fulcro_css.css_injection');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.application');
goog.require('cljs.spec.alpha');
goog.require('garden.core');
goog.require('edn_query_language.core');
goog.require('com.fulcrologic.fulcro_css.css');
goog.require('com.fulcrologic.fulcro.dom');
com.fulcrologic.fulcro_css.css_injection.error = (function com$fulcrologic$fulcro_css$css_injection$error(var_args){
var args__4736__auto__ = [];
var len__4730__auto___89896 = arguments.length;
var i__4731__auto___89897 = (0);
while(true){
if((i__4731__auto___89897 < len__4730__auto___89896)){
args__4736__auto__.push((arguments[i__4731__auto___89897]));

var G__89898 = (i__4731__auto___89897 + (1));
i__4731__auto___89897 = G__89898;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.css_injection.error.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro_css.css_injection.error.cljs$core$IFn$_invoke$arity$variadic = (function (msg){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.log,msg);
});

com.fulcrologic.fulcro_css.css_injection.error.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro_css.css_injection.error.cljs$lang$applyTo = (function (seq89838){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq89838));
});

com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth = (function com$fulcrologic$fulcro_css$css_injection$component_css_includes_with_depth(component,breadth,depth){
var includes = (com.fulcrologic.fulcro_css.css.get_includes.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.get_includes.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro_css.css.get_includes.call(null,component));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (includes){
return (function (p1__89842_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","depth","com.fulcrologic.fulcro-css.css-injection/depth",-1616141168),new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","breadth","com.fulcrologic.fulcro-css.css-injection/breadth",2102094438),new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","component","com.fulcrologic.fulcro-css.css-injection/component",-2105696298)],[(depth + (1)),breadth,p1__89842_SHARP_]);
});})(includes))
),includes),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (includes){
return (function (p1__89843_SHARP_){
var G__89844 = p1__89843_SHARP_;
var G__89845 = breadth;
var G__89846 = (depth + (1));
return (com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth.cljs$core$IFn$_invoke$arity$3(G__89844,G__89845,G__89846) : com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth.call(null,G__89844,G__89845,G__89846));
});})(includes))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([includes], 0)));
});
/**
 * Scan the given component and return an ordered vector of the css rules in depth-first order.
 *   `order` can be :depth-first (default) or :breadth-first
 */
com.fulcrologic.fulcro_css.css_injection.find_css_nodes = (function com$fulcrologic$fulcro_css$css_injection$find_css_nodes(p__89851){
var map__89852 = p__89851;
var map__89852__$1 = (((((!((map__89852 == null))))?(((((map__89852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89852):map__89852);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89852__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89852__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89852__$1,new cljs.core.Keyword(null,"state-map","state-map",-1313872128));
var query = ((cljs.core.map_QMARK_(state_map))?com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map):com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(component));
var ast = edn_query_language.core.query__GT_ast(query);
var breadth = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var traverse = ((function (query,ast,breadth,map__89852,map__89852__$1,component,order,state_map){
return (function com$fulcrologic$fulcro_css$css_injection$find_css_nodes_$_traverse_STAR_(p__89854,depth){
var map__89855 = p__89854;
var map__89855__$1 = (((((!((map__89855 == null))))?(((((map__89855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89855):map__89855);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89855__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__89857 = cljs.core.PersistentVector.EMPTY;
var G__89857__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = component__$1;
if(cljs.core.truth_(and__4120__auto__)){
return (com.fulcrologic.fulcro_css.css.CSS_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.CSS_QMARK_.cljs$core$IFn$_invoke$arity$1(component__$1) : com.fulcrologic.fulcro_css.css.CSS_QMARK_.call(null,component__$1));
} else {
return and__4120__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__89857,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","depth","com.fulcrologic.fulcro-css.css-injection/depth",-1616141168),depth,new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","breadth","com.fulcrologic.fulcro-css.css-injection/breadth",2102094438),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(breadth,cljs.core.inc),new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","component","com.fulcrologic.fulcro-css.css-injection/component",-2105696298),component__$1], null)):G__89857);
if(cljs.core.truth_(component__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__89857__$1,com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth(component__$1,cljs.core.deref(breadth),depth));
} else {
return G__89857__$1;
}
})(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (map__89855,map__89855__$1,children,component__$1,query,ast,breadth,map__89852,map__89852__$1,component,order,state_map){
return (function (p1__89849_SHARP_){
return com$fulcrologic$fulcro_css$css_injection$find_css_nodes_$_traverse_STAR_(p1__89849_SHARP_,(depth + (1)));
});})(map__89855,map__89855__$1,children,component__$1,query,ast,breadth,map__89852,map__89852__$1,component,order,state_map))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(children)], 0)));
});})(query,ast,breadth,map__89852,map__89852__$1,component,order,state_map))
;
var nodes = traverse(ast,(0));
var ordered_nodes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(order,new cljs.core.Keyword(null,"breadth-first","breadth-first",141527627)))?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","breadth","com.fulcrologic.fulcro-css.css-injection/breadth",2102094438),nodes):cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (query,ast,breadth,traverse,nodes,map__89852,map__89852__$1,component,order,state_map){
return (function (p1__89850_SHARP_){
return (- new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","depth","com.fulcrologic.fulcro-css.css-injection/depth",-1616141168).cljs$core$IFn$_invoke$arity$1(p1__89850_SHARP_));
});})(query,ast,breadth,traverse,nodes,map__89852,map__89852__$1,component,order,state_map))
,nodes));
var unique_nodes = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","component","com.fulcrologic.fulcro-css.css-injection/component",-2105696298),ordered_nodes));
if(cljs.core.truth_(query)){
} else {
com.fulcrologic.fulcro_css.css_injection.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Auto-include was used for CSS, but the component had no query! No CSS Found."], 0));
}

return unique_nodes;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro-css.css-injection","find-css-nodes","com.fulcrologic.fulcro-css.css-injection/find-css-nodes",-1064274841,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.seq_QMARK_,null,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,null,null));
var get_rules_89913 = (function (components){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__89865_SHARP_,p2__89866_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__89865_SHARP_,com.fulcrologic.fulcro_css.css.get_css_rules(p2__89866_SHARP_));
}),cljs.core.PersistentVector.EMPTY,components);
});
/**
 * Compute the stringified CSS based on the given props. This can be used to generate a
 *  server-side version of CSS for the initial DOM, and is used the other injection functions to compute
 *  the CSS.
 * 
 *  Props are as described in `style-element`.
 *  
 */
com.fulcrologic.fulcro_css.css_injection.compute_css = ((function (get_rules_89913){
return (function com$fulcrologic$fulcro_css$css_injection$compute_css(props){
if(((cljs.core.map_QMARK_(props)) && (cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"component","component",1555936782))))){
} else {
throw (new Error(["Assert failed: ","Argument must be a map that contains the key :component","\n","(and (map? props) (contains? props :component))"].join('')));
}

var map__89867 = props;
var map__89867__$1 = (((((!((map__89867 == null))))?(((((map__89867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89867):map__89867);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89867__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var auto_include_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89867__$1,new cljs.core.Keyword(null,"auto-include?","auto-include?",-351901260));
var garden_flags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89867__$1,new cljs.core.Keyword(null,"garden-flags","garden-flags",1977044577),cljs.core.PersistentArrayMap.EMPTY);
var rules = ((auto_include_QMARK_ === false)?(function (){var G__89869 = component;
if((G__89869 == null)){
return null;
} else {
return com.fulcrologic.fulcro_css.css.get_css(G__89869);
}
})():(function (){var G__89870 = com.fulcrologic.fulcro_css.css_injection.find_css_nodes(props);
if((G__89870 == null)){
return null;
} else {
return get_rules_89913(G__89870);
}
})());
var css = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_flags,rules], 0));
return css;
});})(get_rules_89913))
;

var options__72617__auto___89922 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var css = com.fulcrologic.fulcro_css.css_injection.compute_css(com.fulcrologic.fulcro.components.props(this$));
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),css], null));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro_css$css_injection$render_StyleElement(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89871 = com.fulcrologic.fulcro.components.props(this$);
var map__89871__$1 = (((((!((map__89871 == null))))?(((((map__89871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89871):map__89871);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89871__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89871__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"css","css",1135045163))], null)], null)], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro_css !== 'undefined') && (typeof com.fulcrologic.fulcro_css.css_injection !== 'undefined') && (typeof com.fulcrologic.fulcro_css.css_injection.StyleElement !== 'undefined')){
} else {
com.fulcrologic.fulcro_css.css_injection.StyleElement = ((function (options__72617__auto___89922){
return (function com$fulcrologic$fulcro_css$css_injection$StyleElement(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89922,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89923)){
var init_state__72620__auto___89924 = temp__5733__auto___89923;
this__72619__auto__.state = (function (){var obj89881 = ({"fulcro$state":(function (){var G__89882 = this__72619__auto__;
var G__89883 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89924.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89924.cljs$core$IFn$_invoke$arity$2(G__89882,G__89883) : init_state__72620__auto___89924.call(null,G__89882,G__89883));
})()});
return obj89881;
})();
} else {
this__72619__auto__.state = (function (){var obj89885 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89885;
})();
}

return null;
});})(options__72617__auto___89922))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.fulcro_css.css_injection.StyleElement,new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","StyleElement","com.fulcrologic.fulcro-css.css-injection/StyleElement",-907012031),options__72617__auto___89922);
var factory_89925 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_css.css_injection.StyleElement);
/**
 * Renders a style element. Valid props are:
 * 
 *   - `:component`: (REQUIRED) The UI component to pull CSS from. Class or instance allowed.
 *   - `:order`: (optional)  `:depth-first` (default) or `:breadth-first` (legacy order)
 *   - `:react-key` : (optional) A React key. Changing the key will force it to update the CSS (which is otherwise caches for performance)
 *   - `:auto-include?`: (optional) When set to true (default) it will use the component query to recursively scan for
 *     CSS instead of explicit includes. When set to (exactly) `false` then it ONLY uses the user-declared inclusions on
 *     the component.
 *   - `:garden-flags`: (optional) A map with [garden compiler flags](https://github.com/noprompt/garden/wiki/Compiler#flags)
 * 
 *  The resulting React style element avoids re-rendering unless the props change, and the CSS is cached at component mount; therefore
 *  this element will avoid all overhead on refresh. In development you may wish to have the CSS change on hot code reload, in which case
 *  you can simply change the `:react-key` on the props to force a re-mount (which will recompute the CSS).
 *  
 */
com.fulcrologic.fulcro_css.css_injection.style_element = ((function (factory_89925){
return (function com$fulcrologic$fulcro_css$css_injection$style_element(props){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = (function (){var G__89892 = props;
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,component)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89892,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),(function (){var G__89893 = component;
var G__89893__$1 = (((G__89893 == null))?null:com.fulcrologic.fulcro.components.any__GT_app(G__89893));
if((G__89893__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.application.current_state(G__89893__$1);
}
})()),new cljs.core.Keyword(null,"component","component",1555936782),com.fulcrologic.fulcro.components.react_type);
} else {
return G__89892;
}
})();
return (factory_89925.cljs$core$IFn$_invoke$arity$1 ? factory_89925.cljs$core$IFn$_invoke$arity$1(props__$1) : factory_89925.call(null,props__$1));
});})(factory_89925))
;
/**
 * Remove the given element from the DOM by ID
 */
com.fulcrologic.fulcro_css.css_injection.remove_from_dom = (function com$fulcrologic$fulcro_css$css_injection$remove_from_dom(id){
var temp__5733__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5733__auto__)){
var old_element = temp__5733__auto__;
var parent = old_element.parentNode;
return parent.removeChild(old_element);
} else {
return null;
}
});
/**
 * (Re)place the STYLE element with the provided ID on the document's low-level DOM with the co-located CSS of
 *   the specified component.
 * 
 *   The `options` is the same as passed to `style-element`:
 * 
 *   - `:component`: (REQUIRED) The UI component to pull CSS from. Class or instance allowed.
 *   - `:order`: (optional)  `:depth-first` (default) or `:breadth-first` (legacy order)
 *   - `:react-key` : (optional) A React key. Changing the key will force it to update the CSS (which is otherwise caches for performance)
 *   - `:auto-include?`: (optional) When set to true (default) it will use the component query to recursively scan for
 *     CSS instead of explicit includes. When set to (exactly) `false` then it ONLY uses the user-declared inclusions on
 *     the component.
 *   - `:garden-flags`: (optional) A map with [garden compiler flags](https://github.com/noprompt/garden/wiki/Compiler#flags)
 * 
 *   ONLY WORKS FOR CLJS, since otherwise there is no DOM to change.
 */
com.fulcrologic.fulcro_css.css_injection.upsert_css = (function com$fulcrologic$fulcro_css$css_injection$upsert_css(id,options){
if(((cljs.core.map_QMARK_(options)) && (cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"component","component",1555936782))))){
} else {
throw (new Error(["Assert failed: ","Argument must be a map that contains the key :component","\n","(and (map? options) (contains? options :component))"].join('')));
}

com.fulcrologic.fulcro_css.css_injection.remove_from_dom(id);

var style_ele = document.createElement("style");
var css = com.fulcrologic.fulcro_css.css_injection.compute_css(options);
style_ele.innerHTML = css;

style_ele.setAttribute("id",id);

return document.body.appendChild(style_ele);
});

//# sourceMappingURL=com.fulcrologic.fulcro_css.css_injection.js.map
