goog.provide('com.fulcrologic.fulcro.dom');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.fulcrologic.fulcro.components');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('com.fulcrologic.fulcro.dom_common');
goog.require('taoensso.timbre');





































































































































































































com.fulcrologic.fulcro.dom.element_marker = (function (){var G__80156 = React.createElement("div",null);
var G__80157 = "$$typeof";
return goog.object.get(G__80156,G__80157);
})();
/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return ((cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.element_marker,goog.object.get(x,"$$typeof"))));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__80158#","p1__80158#",-1925337741,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__80158#","p1__80158#",-1925337741,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__80158#","p1__80158#",-1925337741,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__80159#","p1__80159#",-1285927288,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__80159#","p1__80159#",-1285927288,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__80159#","p1__80159#",-1285927288,null))))))),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__80160#","p1__80160#",1256423879,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__80160#","p1__80160#",1256423879,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__80160#","p1__80160#",1256423879,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__80160#","p1__80160#",1256423879,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.keyword_QMARK_,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-object","js-object",1830199158)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,(function (p1__80158_SHARP_){
return ((cljs.core.map_QMARK_(p1__80158_SHARP_)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(p1__80158_SHARP_)))));
}),(function (p1__80159_SHARP_){
return ((cljs.core.object_QMARK_(p1__80159_SHARP_)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(p1__80159_SHARP_)))));
})], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__80158#","p1__80158#",-1925337741,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__80158#","p1__80158#",-1925337741,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__80158#","p1__80158#",-1925337741,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__80159#","p1__80159#",-1285927288,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__80159#","p1__80159#",-1285927288,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__80159#","p1__80159#",-1285927288,null))))))),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__80160#","p1__80160#",1256423879,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__80160#","p1__80160#",1256423879,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__80160#","p1__80160#",1256423879,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__80160#","p1__80160#",1256423879,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"element","element",1974019749)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,(function (p1__80160_SHARP_){
return ((cljs.core.vector_QMARK_(p1__80160_SHARP_)) || (cljs.core.seq_QMARK_(p1__80160_SHARP_)) || (cljs.core.array_QMARK_(p1__80160_SHARP_)));
}),cljs.core.nil_QMARK_,com.fulcrologic.fulcro.dom.element_QMARK_], null),null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__80158#","p1__80158#",-1925337741,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__80158#","p1__80158#",-1925337741,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__80158#","p1__80158#",-1925337741,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__80159#","p1__80159#",-1285927288,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__80159#","p1__80159#",-1285927288,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__80159#","p1__80159#",-1285927288,null))))))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__80160#","p1__80160#",1256423879,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__80160#","p1__80160#",1256423879,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__80160#","p1__80160#",1256423879,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__80160#","p1__80160#",1256423879,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)))], null)));
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must require cljsjs.react.dom.server to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__80171 = arguments.length;
switch (G__80171) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__80172 = component.refs;
var G__80172__$1 = (((G__80172 == null))?null:goog.object.get(G__80172,name));
if((G__80172__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__80172__$1);
}
});

com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__80177 = arguments.length;
switch (G__80177) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___80812 = arguments.length;
var i__4731__auto___80813 = (0);
while(true){
if((i__4731__auto___80813 < len__4730__auto___80812)){
args_arr__4751__auto__.push((arguments[i__4731__auto___80813]));

var G__80816 = (i__4731__auto___80813 + (1));
i__4731__auto___80813 = G__80816;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,opts,children);
});

/** @this {Function} */
com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq80174){
var G__80175 = cljs.core.first(seq80174);
var seq80174__$1 = cljs.core.next(seq80174);
var G__80176 = cljs.core.first(seq80174__$1);
var seq80174__$2 = cljs.core.next(seq80174__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80175,G__80176,seq80174__$2);
});

com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2);

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
var G__80178_80821 = next_state;
var G__80179_80822 = next_props;
var G__80180_80823 = ({"onChange": on_change});
goog.object.extend(G__80178_80821,G__80179_80822,G__80180_80823);

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(next_state);
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4120__auto__ = tag;
if(cljs.core.truth_(and__4120__auto__)){
var G__80181 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__80181) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__80181));
} else {
return and__4120__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
var G__80183_80843 = state;
var G__80184_80844 = props;
var G__80185_80845 = ({"onChange": (function (){var G__80186 = goog.object.get(this$,"onChange");
var G__80187 = this$;
return goog.bind(G__80186,G__80187);
})()});
goog.object.extend(G__80183_80843,G__80184_80844,G__80185_80845);

goog.object.remove(state,"inputRef");

return state;
})();

return React.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x80188_80846 = ctor.prototype;
x80188_80846.onChange = ((function (x80188_80846,ctor){
return (function (event){
var this$ = this;
var temp__5735__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
});})(x80188_80846,ctor))
;

x80188_80846.componentWillReceiveProps = ((function (x80188_80846,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:(function (){var G__80189 = this_node;
var G__80190 = ((function (G__80189,state_value,this_node,this$,x80188_80846,ctor){
return (function (p1__80182_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__80182_SHARP_);
});})(G__80189,state_value,this_node,this$,x80188_80846,ctor))
;
return goog.dom.findNode(G__80189,G__80190);
})());
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4120__auto__ = state_value;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = element_value;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_value,this_node,value_node,element_value,this$,x80188_80846,ctor){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements."], null);
});})(state_value,this_node,value_node,element_value,this$,x80188_80846,ctor))
,null)),null,1033709791);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x80188_80846,ctor))
;

x80188_80846.render = ((function (x80188_80846,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x80188_80846,ctor))
;


var real_factory = React.createFactory(ctor);
return ((function (real_factory,ctor){
return (function() { 
var G__80879__delegate = function (props,children){
var temp__5733__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
};
var G__80879 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__80903__i = 0, G__80903__a = new Array(arguments.length -  1);
while (G__80903__i < G__80903__a.length) {G__80903__a[G__80903__i] = arguments[G__80903__i + 1]; ++G__80903__i;}
  children = new cljs.core.IndexedSeq(G__80903__a,0,null);
} 
return G__80879__delegate.call(this,props,children);};
G__80879.cljs$lang$maxFixedArity = 1;
G__80879.cljs$lang$applyTo = (function (arglist__80904){
var props = cljs.core.first(arglist__80904);
var children = cljs.core.rest(arglist__80904);
return G__80879__delegate(props,children);
});
G__80879.cljs$core$IFn$_invoke$arity$variadic = G__80879__delegate;
return G__80879;
})()
;
;})(real_factory,ctor))
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,com.fulcrologic.fulcro.components.force_children(tail));
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__80191 = tag;
switch (G__80191) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80191)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__80193 = arguments.length;
switch (G__80193) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__80194 = args;
var seq__80195 = cljs.core.seq(vec__80194);
var first__80196 = cljs.core.first(seq__80195);
var seq__80195__$1 = cljs.core.next(seq__80195);
var head = first__80196;
var tail = seq__80195__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__80197 = (function (){var G__80198 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__80198,tail);

return G__80198;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__80197) : f.call(null,G__80197));
} else {
if(com.fulcrologic.fulcro.dom.element_QMARK_(head)){
var G__80199 = (function (){var G__80200 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__80200,args);

return G__80200;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__80199) : f.call(null,G__80199));
} else {
if(cljs.core.object_QMARK_(head)){
var G__80201 = (function (){var G__80202 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__80202,tail);

return G__80202;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__80201) : f.call(null,G__80201));
} else {
if(cljs.core.map_QMARK_(head)){
var G__80203 = (function (){var G__80204 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__80204,tail);

return G__80204;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__80203) : f.call(null,G__80203));
} else {
var G__80205 = (function (){var G__80206 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__80206,args);

return G__80206;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__80205) : f.call(null,G__80205));

}
}
}
}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3;

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80910 = arguments.length;
var i__4731__auto___80911 = (0);
while(true){
if((i__4731__auto___80911 < len__4730__auto___80910)){
args__4736__auto__.push((arguments[i__4731__auto___80911]));

var G__80912 = (i__4731__auto___80911 + (1));
i__4731__auto___80911 = G__80912;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80208 = conformed_args__78895__auto__;
var map__80208__$1 = (((((!((map__80208 == null))))?(((((map__80208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80208):map__80208);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80208__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80208__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80208__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq80207){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80207));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80913 = arguments.length;
var i__4731__auto___80914 = (0);
while(true){
if((i__4731__auto___80914 < len__4730__auto___80913)){
args__4736__auto__.push((arguments[i__4731__auto___80914]));

var G__80915 = (i__4731__auto___80914 + (1));
i__4731__auto___80914 = G__80915;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80211 = conformed_args__78895__auto__;
var map__80211__$1 = (((((!((map__80211 == null))))?(((((map__80211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80211):map__80211);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80211__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80211__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80211__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq80210){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80210));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80916 = arguments.length;
var i__4731__auto___80917 = (0);
while(true){
if((i__4731__auto___80917 < len__4730__auto___80916)){
args__4736__auto__.push((arguments[i__4731__auto___80917]));

var G__80918 = (i__4731__auto___80917 + (1));
i__4731__auto___80917 = G__80918;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80214 = conformed_args__78895__auto__;
var map__80214__$1 = (((((!((map__80214 == null))))?(((((map__80214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80214):map__80214);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80214__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80214__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80214__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq80213){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80213));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80919 = arguments.length;
var i__4731__auto___80920 = (0);
while(true){
if((i__4731__auto___80920 < len__4730__auto___80919)){
args__4736__auto__.push((arguments[i__4731__auto___80920]));

var G__80921 = (i__4731__auto___80920 + (1));
i__4731__auto___80920 = G__80921;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80217 = conformed_args__78895__auto__;
var map__80217__$1 = (((((!((map__80217 == null))))?(((((map__80217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80217):map__80217);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq80216){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80216));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80922 = arguments.length;
var i__4731__auto___80923 = (0);
while(true){
if((i__4731__auto___80923 < len__4730__auto___80922)){
args__4736__auto__.push((arguments[i__4731__auto___80923]));

var G__80924 = (i__4731__auto___80923 + (1));
i__4731__auto___80923 = G__80924;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80220 = conformed_args__78895__auto__;
var map__80220__$1 = (((((!((map__80220 == null))))?(((((map__80220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80220):map__80220);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80220__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80220__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80220__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq80219){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80219));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80925 = arguments.length;
var i__4731__auto___80926 = (0);
while(true){
if((i__4731__auto___80926 < len__4730__auto___80925)){
args__4736__auto__.push((arguments[i__4731__auto___80926]));

var G__80927 = (i__4731__auto___80926 + (1));
i__4731__auto___80926 = G__80927;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80223 = conformed_args__78895__auto__;
var map__80223__$1 = (((((!((map__80223 == null))))?(((((map__80223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80223):map__80223);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80223__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80223__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80223__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq80222){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80222));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80928 = arguments.length;
var i__4731__auto___80929 = (0);
while(true){
if((i__4731__auto___80929 < len__4730__auto___80928)){
args__4736__auto__.push((arguments[i__4731__auto___80929]));

var G__80930 = (i__4731__auto___80929 + (1));
i__4731__auto___80929 = G__80930;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80226 = conformed_args__78895__auto__;
var map__80226__$1 = (((((!((map__80226 == null))))?(((((map__80226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80226):map__80226);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80226__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80226__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80226__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq80225){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80225));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80931 = arguments.length;
var i__4731__auto___80932 = (0);
while(true){
if((i__4731__auto___80932 < len__4730__auto___80931)){
args__4736__auto__.push((arguments[i__4731__auto___80932]));

var G__80933 = (i__4731__auto___80932 + (1));
i__4731__auto___80932 = G__80933;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80229 = conformed_args__78895__auto__;
var map__80229__$1 = (((((!((map__80229 == null))))?(((((map__80229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80229):map__80229);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80229__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80229__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80229__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq80228){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80228));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80934 = arguments.length;
var i__4731__auto___80935 = (0);
while(true){
if((i__4731__auto___80935 < len__4730__auto___80934)){
args__4736__auto__.push((arguments[i__4731__auto___80935]));

var G__80936 = (i__4731__auto___80935 + (1));
i__4731__auto___80935 = G__80936;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80232 = conformed_args__78895__auto__;
var map__80232__$1 = (((((!((map__80232 == null))))?(((((map__80232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80232):map__80232);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80232__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq80231){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80231));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80937 = arguments.length;
var i__4731__auto___80938 = (0);
while(true){
if((i__4731__auto___80938 < len__4730__auto___80937)){
args__4736__auto__.push((arguments[i__4731__auto___80938]));

var G__80939 = (i__4731__auto___80938 + (1));
i__4731__auto___80938 = G__80939;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80235 = conformed_args__78895__auto__;
var map__80235__$1 = (((((!((map__80235 == null))))?(((((map__80235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80235):map__80235);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq80234){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80234));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80940 = arguments.length;
var i__4731__auto___80941 = (0);
while(true){
if((i__4731__auto___80941 < len__4730__auto___80940)){
args__4736__auto__.push((arguments[i__4731__auto___80941]));

var G__80942 = (i__4731__auto___80941 + (1));
i__4731__auto___80941 = G__80942;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80238 = conformed_args__78895__auto__;
var map__80238__$1 = (((((!((map__80238 == null))))?(((((map__80238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80238):map__80238);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80238__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80238__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80238__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq80237){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80237));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80943 = arguments.length;
var i__4731__auto___80944 = (0);
while(true){
if((i__4731__auto___80944 < len__4730__auto___80943)){
args__4736__auto__.push((arguments[i__4731__auto___80944]));

var G__80945 = (i__4731__auto___80944 + (1));
i__4731__auto___80944 = G__80945;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80241 = conformed_args__78895__auto__;
var map__80241__$1 = (((((!((map__80241 == null))))?(((((map__80241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80241):map__80241);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80241__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80241__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80241__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq80240){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80240));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80946 = arguments.length;
var i__4731__auto___80947 = (0);
while(true){
if((i__4731__auto___80947 < len__4730__auto___80946)){
args__4736__auto__.push((arguments[i__4731__auto___80947]));

var G__80948 = (i__4731__auto___80947 + (1));
i__4731__auto___80947 = G__80948;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80244 = conformed_args__78895__auto__;
var map__80244__$1 = (((((!((map__80244 == null))))?(((((map__80244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80244):map__80244);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80244__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq80243){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80243));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80949 = arguments.length;
var i__4731__auto___80950 = (0);
while(true){
if((i__4731__auto___80950 < len__4730__auto___80949)){
args__4736__auto__.push((arguments[i__4731__auto___80950]));

var G__80951 = (i__4731__auto___80950 + (1));
i__4731__auto___80950 = G__80951;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80247 = conformed_args__78895__auto__;
var map__80247__$1 = (((((!((map__80247 == null))))?(((((map__80247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80247):map__80247);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80247__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80247__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80247__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq80246){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80246));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80956 = arguments.length;
var i__4731__auto___80957 = (0);
while(true){
if((i__4731__auto___80957 < len__4730__auto___80956)){
args__4736__auto__.push((arguments[i__4731__auto___80957]));

var G__80959 = (i__4731__auto___80957 + (1));
i__4731__auto___80957 = G__80959;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80250 = conformed_args__78895__auto__;
var map__80250__$1 = (((((!((map__80250 == null))))?(((((map__80250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80250):map__80250);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq80249){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80249));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80960 = arguments.length;
var i__4731__auto___80961 = (0);
while(true){
if((i__4731__auto___80961 < len__4730__auto___80960)){
args__4736__auto__.push((arguments[i__4731__auto___80961]));

var G__80962 = (i__4731__auto___80961 + (1));
i__4731__auto___80961 = G__80962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80253 = conformed_args__78895__auto__;
var map__80253__$1 = (((((!((map__80253 == null))))?(((((map__80253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80253):map__80253);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80253__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80253__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80253__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq80252){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80252));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4736__auto__ = [];
var len__4730__auto___80997 = arguments.length;
var i__4731__auto___80998 = (0);
while(true){
if((i__4731__auto___80998 < len__4730__auto___80997)){
args__4736__auto__.push((arguments[i__4731__auto___80998]));

var G__81000 = (i__4731__auto___80998 + (1));
i__4731__auto___80998 = G__81000;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80256 = conformed_args__78895__auto__;
var map__80256__$1 = (((((!((map__80256 == null))))?(((((map__80256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80256):map__80256);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80256__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80256__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80256__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq80255){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80255));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81001 = arguments.length;
var i__4731__auto___81002 = (0);
while(true){
if((i__4731__auto___81002 < len__4730__auto___81001)){
args__4736__auto__.push((arguments[i__4731__auto___81002]));

var G__81003 = (i__4731__auto___81002 + (1));
i__4731__auto___81002 = G__81003;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80259 = conformed_args__78895__auto__;
var map__80259__$1 = (((((!((map__80259 == null))))?(((((map__80259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80259):map__80259);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq80258){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80258));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81010 = arguments.length;
var i__4731__auto___81011 = (0);
while(true){
if((i__4731__auto___81011 < len__4730__auto___81010)){
args__4736__auto__.push((arguments[i__4731__auto___81011]));

var G__81012 = (i__4731__auto___81011 + (1));
i__4731__auto___81011 = G__81012;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80262 = conformed_args__78895__auto__;
var map__80262__$1 = (((((!((map__80262 == null))))?(((((map__80262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80262):map__80262);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80262__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq80261){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80261));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81023 = arguments.length;
var i__4731__auto___81024 = (0);
while(true){
if((i__4731__auto___81024 < len__4730__auto___81023)){
args__4736__auto__.push((arguments[i__4731__auto___81024]));

var G__81025 = (i__4731__auto___81024 + (1));
i__4731__auto___81024 = G__81025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80265 = conformed_args__78895__auto__;
var map__80265__$1 = (((((!((map__80265 == null))))?(((((map__80265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80265):map__80265);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80265__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80265__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80265__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq80264){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80264));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81046 = arguments.length;
var i__4731__auto___81050 = (0);
while(true){
if((i__4731__auto___81050 < len__4730__auto___81046)){
args__4736__auto__.push((arguments[i__4731__auto___81050]));

var G__81052 = (i__4731__auto___81050 + (1));
i__4731__auto___81050 = G__81052;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80268 = conformed_args__78895__auto__;
var map__80268__$1 = (((((!((map__80268 == null))))?(((((map__80268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80268):map__80268);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80268__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80268__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80268__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq80267){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80267));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81075 = arguments.length;
var i__4731__auto___81076 = (0);
while(true){
if((i__4731__auto___81076 < len__4730__auto___81075)){
args__4736__auto__.push((arguments[i__4731__auto___81076]));

var G__81079 = (i__4731__auto___81076 + (1));
i__4731__auto___81076 = G__81079;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80271 = conformed_args__78895__auto__;
var map__80271__$1 = (((((!((map__80271 == null))))?(((((map__80271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80271):map__80271);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80271__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80271__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80271__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq80270){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80270));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81090 = arguments.length;
var i__4731__auto___81091 = (0);
while(true){
if((i__4731__auto___81091 < len__4730__auto___81090)){
args__4736__auto__.push((arguments[i__4731__auto___81091]));

var G__81092 = (i__4731__auto___81091 + (1));
i__4731__auto___81091 = G__81092;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80274 = conformed_args__78895__auto__;
var map__80274__$1 = (((((!((map__80274 == null))))?(((((map__80274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80274):map__80274);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80274__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80274__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80274__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq80273){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80273));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81106 = arguments.length;
var i__4731__auto___81107 = (0);
while(true){
if((i__4731__auto___81107 < len__4730__auto___81106)){
args__4736__auto__.push((arguments[i__4731__auto___81107]));

var G__81115 = (i__4731__auto___81107 + (1));
i__4731__auto___81107 = G__81115;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80277 = conformed_args__78895__auto__;
var map__80277__$1 = (((((!((map__80277 == null))))?(((((map__80277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80277):map__80277);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80277__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80277__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80277__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq80276){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80276));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81125 = arguments.length;
var i__4731__auto___81126 = (0);
while(true){
if((i__4731__auto___81126 < len__4730__auto___81125)){
args__4736__auto__.push((arguments[i__4731__auto___81126]));

var G__81127 = (i__4731__auto___81126 + (1));
i__4731__auto___81126 = G__81127;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80280 = conformed_args__78895__auto__;
var map__80280__$1 = (((((!((map__80280 == null))))?(((((map__80280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80280):map__80280);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80280__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80280__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq80279){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80279));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81138 = arguments.length;
var i__4731__auto___81139 = (0);
while(true){
if((i__4731__auto___81139 < len__4730__auto___81138)){
args__4736__auto__.push((arguments[i__4731__auto___81139]));

var G__81140 = (i__4731__auto___81139 + (1));
i__4731__auto___81139 = G__81140;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80283 = conformed_args__78895__auto__;
var map__80283__$1 = (((((!((map__80283 == null))))?(((((map__80283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80283):map__80283);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80283__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80283__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80283__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq80282){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80282));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81163 = arguments.length;
var i__4731__auto___81164 = (0);
while(true){
if((i__4731__auto___81164 < len__4730__auto___81163)){
args__4736__auto__.push((arguments[i__4731__auto___81164]));

var G__81165 = (i__4731__auto___81164 + (1));
i__4731__auto___81164 = G__81165;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80286 = conformed_args__78895__auto__;
var map__80286__$1 = (((((!((map__80286 == null))))?(((((map__80286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80286):map__80286);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80286__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80286__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80286__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq80285){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80285));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81173 = arguments.length;
var i__4731__auto___81174 = (0);
while(true){
if((i__4731__auto___81174 < len__4730__auto___81173)){
args__4736__auto__.push((arguments[i__4731__auto___81174]));

var G__81176 = (i__4731__auto___81174 + (1));
i__4731__auto___81174 = G__81176;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80289 = conformed_args__78895__auto__;
var map__80289__$1 = (((((!((map__80289 == null))))?(((((map__80289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80289):map__80289);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80289__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80289__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80289__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq80288){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80288));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81199 = arguments.length;
var i__4731__auto___81201 = (0);
while(true){
if((i__4731__auto___81201 < len__4730__auto___81199)){
args__4736__auto__.push((arguments[i__4731__auto___81201]));

var G__81204 = (i__4731__auto___81201 + (1));
i__4731__auto___81201 = G__81204;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80292 = conformed_args__78895__auto__;
var map__80292__$1 = (((((!((map__80292 == null))))?(((((map__80292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80292):map__80292);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80292__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80292__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80292__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq80291){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80291));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81217 = arguments.length;
var i__4731__auto___81218 = (0);
while(true){
if((i__4731__auto___81218 < len__4730__auto___81217)){
args__4736__auto__.push((arguments[i__4731__auto___81218]));

var G__81219 = (i__4731__auto___81218 + (1));
i__4731__auto___81218 = G__81219;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80295 = conformed_args__78895__auto__;
var map__80295__$1 = (((((!((map__80295 == null))))?(((((map__80295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80295):map__80295);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq80294){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80294));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81233 = arguments.length;
var i__4731__auto___81234 = (0);
while(true){
if((i__4731__auto___81234 < len__4730__auto___81233)){
args__4736__auto__.push((arguments[i__4731__auto___81234]));

var G__81271 = (i__4731__auto___81234 + (1));
i__4731__auto___81234 = G__81271;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80298 = conformed_args__78895__auto__;
var map__80298__$1 = (((((!((map__80298 == null))))?(((((map__80298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80298):map__80298);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq80297){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80297));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81276 = arguments.length;
var i__4731__auto___81277 = (0);
while(true){
if((i__4731__auto___81277 < len__4730__auto___81276)){
args__4736__auto__.push((arguments[i__4731__auto___81277]));

var G__81278 = (i__4731__auto___81277 + (1));
i__4731__auto___81277 = G__81278;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80301 = conformed_args__78895__auto__;
var map__80301__$1 = (((((!((map__80301 == null))))?(((((map__80301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80301):map__80301);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80301__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80301__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80301__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq80300){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80300));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81280 = arguments.length;
var i__4731__auto___81282 = (0);
while(true){
if((i__4731__auto___81282 < len__4730__auto___81280)){
args__4736__auto__.push((arguments[i__4731__auto___81282]));

var G__81283 = (i__4731__auto___81282 + (1));
i__4731__auto___81282 = G__81283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80304 = conformed_args__78895__auto__;
var map__80304__$1 = (((((!((map__80304 == null))))?(((((map__80304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80304):map__80304);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80304__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80304__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80304__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq80303){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80303));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81284 = arguments.length;
var i__4731__auto___81285 = (0);
while(true){
if((i__4731__auto___81285 < len__4730__auto___81284)){
args__4736__auto__.push((arguments[i__4731__auto___81285]));

var G__81286 = (i__4731__auto___81285 + (1));
i__4731__auto___81285 = G__81286;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80307 = conformed_args__78895__auto__;
var map__80307__$1 = (((((!((map__80307 == null))))?(((((map__80307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80307):map__80307);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80307__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80307__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80307__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq80306){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80306));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81287 = arguments.length;
var i__4731__auto___81288 = (0);
while(true){
if((i__4731__auto___81288 < len__4730__auto___81287)){
args__4736__auto__.push((arguments[i__4731__auto___81288]));

var G__81289 = (i__4731__auto___81288 + (1));
i__4731__auto___81288 = G__81289;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80310 = conformed_args__78895__auto__;
var map__80310__$1 = (((((!((map__80310 == null))))?(((((map__80310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80310):map__80310);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80310__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80310__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq80309){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80309));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81292 = arguments.length;
var i__4731__auto___81293 = (0);
while(true){
if((i__4731__auto___81293 < len__4730__auto___81292)){
args__4736__auto__.push((arguments[i__4731__auto___81293]));

var G__81294 = (i__4731__auto___81293 + (1));
i__4731__auto___81293 = G__81294;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80313 = conformed_args__78895__auto__;
var map__80313__$1 = (((((!((map__80313 == null))))?(((((map__80313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80313):map__80313);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80313__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq80312){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80312));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81305 = arguments.length;
var i__4731__auto___81306 = (0);
while(true){
if((i__4731__auto___81306 < len__4730__auto___81305)){
args__4736__auto__.push((arguments[i__4731__auto___81306]));

var G__81311 = (i__4731__auto___81306 + (1));
i__4731__auto___81306 = G__81311;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80316 = conformed_args__78895__auto__;
var map__80316__$1 = (((((!((map__80316 == null))))?(((((map__80316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80316):map__80316);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq80315){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80315));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81312 = arguments.length;
var i__4731__auto___81313 = (0);
while(true){
if((i__4731__auto___81313 < len__4730__auto___81312)){
args__4736__auto__.push((arguments[i__4731__auto___81313]));

var G__81314 = (i__4731__auto___81313 + (1));
i__4731__auto___81313 = G__81314;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80319 = conformed_args__78895__auto__;
var map__80319__$1 = (((((!((map__80319 == null))))?(((((map__80319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80319):map__80319);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq80318){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80318));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81316 = arguments.length;
var i__4731__auto___81317 = (0);
while(true){
if((i__4731__auto___81317 < len__4730__auto___81316)){
args__4736__auto__.push((arguments[i__4731__auto___81317]));

var G__81318 = (i__4731__auto___81317 + (1));
i__4731__auto___81317 = G__81318;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80322 = conformed_args__78895__auto__;
var map__80322__$1 = (((((!((map__80322 == null))))?(((((map__80322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80322):map__80322);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq80321){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80321));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81328 = arguments.length;
var i__4731__auto___81329 = (0);
while(true){
if((i__4731__auto___81329 < len__4730__auto___81328)){
args__4736__auto__.push((arguments[i__4731__auto___81329]));

var G__81330 = (i__4731__auto___81329 + (1));
i__4731__auto___81329 = G__81330;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80325 = conformed_args__78895__auto__;
var map__80325__$1 = (((((!((map__80325 == null))))?(((((map__80325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80325):map__80325);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80325__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80325__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80325__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq80324){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80324));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81335 = arguments.length;
var i__4731__auto___81336 = (0);
while(true){
if((i__4731__auto___81336 < len__4730__auto___81335)){
args__4736__auto__.push((arguments[i__4731__auto___81336]));

var G__81337 = (i__4731__auto___81336 + (1));
i__4731__auto___81336 = G__81337;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80328 = conformed_args__78895__auto__;
var map__80328__$1 = (((((!((map__80328 == null))))?(((((map__80328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80328):map__80328);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq80327){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80327));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81340 = arguments.length;
var i__4731__auto___81341 = (0);
while(true){
if((i__4731__auto___81341 < len__4730__auto___81340)){
args__4736__auto__.push((arguments[i__4731__auto___81341]));

var G__81347 = (i__4731__auto___81341 + (1));
i__4731__auto___81341 = G__81347;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80331 = conformed_args__78895__auto__;
var map__80331__$1 = (((((!((map__80331 == null))))?(((((map__80331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80331):map__80331);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80331__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80331__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80331__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq80330){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80330));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81356 = arguments.length;
var i__4731__auto___81357 = (0);
while(true){
if((i__4731__auto___81357 < len__4730__auto___81356)){
args__4736__auto__.push((arguments[i__4731__auto___81357]));

var G__81358 = (i__4731__auto___81357 + (1));
i__4731__auto___81357 = G__81358;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80334 = conformed_args__78895__auto__;
var map__80334__$1 = (((((!((map__80334 == null))))?(((((map__80334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80334):map__80334);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80334__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80334__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq80333){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80333));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81361 = arguments.length;
var i__4731__auto___81362 = (0);
while(true){
if((i__4731__auto___81362 < len__4730__auto___81361)){
args__4736__auto__.push((arguments[i__4731__auto___81362]));

var G__81370 = (i__4731__auto___81362 + (1));
i__4731__auto___81362 = G__81370;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80337 = conformed_args__78895__auto__;
var map__80337__$1 = (((((!((map__80337 == null))))?(((((map__80337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80337):map__80337);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80337__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80337__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80337__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq80336){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80336));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81381 = arguments.length;
var i__4731__auto___81382 = (0);
while(true){
if((i__4731__auto___81382 < len__4730__auto___81381)){
args__4736__auto__.push((arguments[i__4731__auto___81382]));

var G__81383 = (i__4731__auto___81382 + (1));
i__4731__auto___81382 = G__81383;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80340 = conformed_args__78895__auto__;
var map__80340__$1 = (((((!((map__80340 == null))))?(((((map__80340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80340):map__80340);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq80339){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80339));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81388 = arguments.length;
var i__4731__auto___81389 = (0);
while(true){
if((i__4731__auto___81389 < len__4730__auto___81388)){
args__4736__auto__.push((arguments[i__4731__auto___81389]));

var G__81392 = (i__4731__auto___81389 + (1));
i__4731__auto___81389 = G__81392;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80343 = conformed_args__78895__auto__;
var map__80343__$1 = (((((!((map__80343 == null))))?(((((map__80343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80343):map__80343);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80343__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80343__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80343__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq80342){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80342));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81416 = arguments.length;
var i__4731__auto___81417 = (0);
while(true){
if((i__4731__auto___81417 < len__4730__auto___81416)){
args__4736__auto__.push((arguments[i__4731__auto___81417]));

var G__81418 = (i__4731__auto___81417 + (1));
i__4731__auto___81417 = G__81418;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80346 = conformed_args__78895__auto__;
var map__80346__$1 = (((((!((map__80346 == null))))?(((((map__80346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80346):map__80346);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq80345){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80345));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81420 = arguments.length;
var i__4731__auto___81421 = (0);
while(true){
if((i__4731__auto___81421 < len__4730__auto___81420)){
args__4736__auto__.push((arguments[i__4731__auto___81421]));

var G__81422 = (i__4731__auto___81421 + (1));
i__4731__auto___81421 = G__81422;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80349 = conformed_args__78895__auto__;
var map__80349__$1 = (((((!((map__80349 == null))))?(((((map__80349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80349):map__80349);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80349__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80349__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80349__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq80348){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80348));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81431 = arguments.length;
var i__4731__auto___81432 = (0);
while(true){
if((i__4731__auto___81432 < len__4730__auto___81431)){
args__4736__auto__.push((arguments[i__4731__auto___81432]));

var G__81433 = (i__4731__auto___81432 + (1));
i__4731__auto___81432 = G__81433;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80352 = conformed_args__78895__auto__;
var map__80352__$1 = (((((!((map__80352 == null))))?(((((map__80352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80352):map__80352);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq80351){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80351));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81442 = arguments.length;
var i__4731__auto___81443 = (0);
while(true){
if((i__4731__auto___81443 < len__4730__auto___81442)){
args__4736__auto__.push((arguments[i__4731__auto___81443]));

var G__81444 = (i__4731__auto___81443 + (1));
i__4731__auto___81443 = G__81444;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80355 = conformed_args__78895__auto__;
var map__80355__$1 = (((((!((map__80355 == null))))?(((((map__80355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80355):map__80355);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80355__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80355__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80355__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq80354){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80354));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81448 = arguments.length;
var i__4731__auto___81449 = (0);
while(true){
if((i__4731__auto___81449 < len__4730__auto___81448)){
args__4736__auto__.push((arguments[i__4731__auto___81449]));

var G__81450 = (i__4731__auto___81449 + (1));
i__4731__auto___81449 = G__81450;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80358 = conformed_args__78895__auto__;
var map__80358__$1 = (((((!((map__80358 == null))))?(((((map__80358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80358):map__80358);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80358__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80358__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80358__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq80357){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80357));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81464 = arguments.length;
var i__4731__auto___81465 = (0);
while(true){
if((i__4731__auto___81465 < len__4730__auto___81464)){
args__4736__auto__.push((arguments[i__4731__auto___81465]));

var G__81468 = (i__4731__auto___81465 + (1));
i__4731__auto___81465 = G__81468;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80361 = conformed_args__78895__auto__;
var map__80361__$1 = (((((!((map__80361 == null))))?(((((map__80361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80361):map__80361);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80361__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80361__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80361__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq80360){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80360));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81474 = arguments.length;
var i__4731__auto___81475 = (0);
while(true){
if((i__4731__auto___81475 < len__4730__auto___81474)){
args__4736__auto__.push((arguments[i__4731__auto___81475]));

var G__81476 = (i__4731__auto___81475 + (1));
i__4731__auto___81475 = G__81476;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80364 = conformed_args__78895__auto__;
var map__80364__$1 = (((((!((map__80364 == null))))?(((((map__80364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80364):map__80364);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80364__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80364__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80364__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq80363){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80363));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81482 = arguments.length;
var i__4731__auto___81483 = (0);
while(true){
if((i__4731__auto___81483 < len__4730__auto___81482)){
args__4736__auto__.push((arguments[i__4731__auto___81483]));

var G__81484 = (i__4731__auto___81483 + (1));
i__4731__auto___81483 = G__81484;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80367 = conformed_args__78895__auto__;
var map__80367__$1 = (((((!((map__80367 == null))))?(((((map__80367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80367):map__80367);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80367__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80367__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80367__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq80366){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80366));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81490 = arguments.length;
var i__4731__auto___81491 = (0);
while(true){
if((i__4731__auto___81491 < len__4730__auto___81490)){
args__4736__auto__.push((arguments[i__4731__auto___81491]));

var G__81494 = (i__4731__auto___81491 + (1));
i__4731__auto___81491 = G__81494;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80370 = conformed_args__78895__auto__;
var map__80370__$1 = (((((!((map__80370 == null))))?(((((map__80370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80370):map__80370);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80370__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80370__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80370__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq80369){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80369));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81496 = arguments.length;
var i__4731__auto___81497 = (0);
while(true){
if((i__4731__auto___81497 < len__4730__auto___81496)){
args__4736__auto__.push((arguments[i__4731__auto___81497]));

var G__81501 = (i__4731__auto___81497 + (1));
i__4731__auto___81497 = G__81501;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80373 = conformed_args__78895__auto__;
var map__80373__$1 = (((((!((map__80373 == null))))?(((((map__80373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80373):map__80373);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80373__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80373__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80373__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq80372){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80372));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81508 = arguments.length;
var i__4731__auto___81509 = (0);
while(true){
if((i__4731__auto___81509 < len__4730__auto___81508)){
args__4736__auto__.push((arguments[i__4731__auto___81509]));

var G__81511 = (i__4731__auto___81509 + (1));
i__4731__auto___81509 = G__81511;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80376 = conformed_args__78895__auto__;
var map__80376__$1 = (((((!((map__80376 == null))))?(((((map__80376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80376):map__80376);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80376__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80376__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80376__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq80375){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80375));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81514 = arguments.length;
var i__4731__auto___81516 = (0);
while(true){
if((i__4731__auto___81516 < len__4730__auto___81514)){
args__4736__auto__.push((arguments[i__4731__auto___81516]));

var G__81517 = (i__4731__auto___81516 + (1));
i__4731__auto___81516 = G__81517;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80379 = conformed_args__78895__auto__;
var map__80379__$1 = (((((!((map__80379 == null))))?(((((map__80379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80379):map__80379);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq80378){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80378));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81523 = arguments.length;
var i__4731__auto___81524 = (0);
while(true){
if((i__4731__auto___81524 < len__4730__auto___81523)){
args__4736__auto__.push((arguments[i__4731__auto___81524]));

var G__81527 = (i__4731__auto___81524 + (1));
i__4731__auto___81524 = G__81527;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80382 = conformed_args__78895__auto__;
var map__80382__$1 = (((((!((map__80382 == null))))?(((((map__80382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80382):map__80382);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80382__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80382__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80382__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq80381){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80381));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81536 = arguments.length;
var i__4731__auto___81537 = (0);
while(true){
if((i__4731__auto___81537 < len__4730__auto___81536)){
args__4736__auto__.push((arguments[i__4731__auto___81537]));

var G__81538 = (i__4731__auto___81537 + (1));
i__4731__auto___81537 = G__81538;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80385 = conformed_args__78895__auto__;
var map__80385__$1 = (((((!((map__80385 == null))))?(((((map__80385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80385):map__80385);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80385__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80385__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80385__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq80384){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80384));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81542 = arguments.length;
var i__4731__auto___81543 = (0);
while(true){
if((i__4731__auto___81543 < len__4730__auto___81542)){
args__4736__auto__.push((arguments[i__4731__auto___81543]));

var G__81544 = (i__4731__auto___81543 + (1));
i__4731__auto___81543 = G__81544;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80388 = conformed_args__78895__auto__;
var map__80388__$1 = (((((!((map__80388 == null))))?(((((map__80388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80388):map__80388);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80388__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80388__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80388__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq80387){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80387));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81549 = arguments.length;
var i__4731__auto___81550 = (0);
while(true){
if((i__4731__auto___81550 < len__4730__auto___81549)){
args__4736__auto__.push((arguments[i__4731__auto___81550]));

var G__81551 = (i__4731__auto___81550 + (1));
i__4731__auto___81550 = G__81551;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80391 = conformed_args__78895__auto__;
var map__80391__$1 = (((((!((map__80391 == null))))?(((((map__80391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80391):map__80391);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80391__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80391__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80391__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq80390){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80390));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81556 = arguments.length;
var i__4731__auto___81557 = (0);
while(true){
if((i__4731__auto___81557 < len__4730__auto___81556)){
args__4736__auto__.push((arguments[i__4731__auto___81557]));

var G__81559 = (i__4731__auto___81557 + (1));
i__4731__auto___81557 = G__81559;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80394 = conformed_args__78895__auto__;
var map__80394__$1 = (((((!((map__80394 == null))))?(((((map__80394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80394):map__80394);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq80393){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80393));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81571 = arguments.length;
var i__4731__auto___81573 = (0);
while(true){
if((i__4731__auto___81573 < len__4730__auto___81571)){
args__4736__auto__.push((arguments[i__4731__auto___81573]));

var G__81574 = (i__4731__auto___81573 + (1));
i__4731__auto___81573 = G__81574;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80397 = conformed_args__78895__auto__;
var map__80397__$1 = (((((!((map__80397 == null))))?(((((map__80397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80397):map__80397);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80397__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80397__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80397__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq80396){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80396));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81579 = arguments.length;
var i__4731__auto___81580 = (0);
while(true){
if((i__4731__auto___81580 < len__4730__auto___81579)){
args__4736__auto__.push((arguments[i__4731__auto___81580]));

var G__81583 = (i__4731__auto___81580 + (1));
i__4731__auto___81580 = G__81583;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80400 = conformed_args__78895__auto__;
var map__80400__$1 = (((((!((map__80400 == null))))?(((((map__80400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80400):map__80400);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq80399){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80399));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81591 = arguments.length;
var i__4731__auto___81592 = (0);
while(true){
if((i__4731__auto___81592 < len__4730__auto___81591)){
args__4736__auto__.push((arguments[i__4731__auto___81592]));

var G__81593 = (i__4731__auto___81592 + (1));
i__4731__auto___81592 = G__81593;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80403 = conformed_args__78895__auto__;
var map__80403__$1 = (((((!((map__80403 == null))))?(((((map__80403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80403):map__80403);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80403__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80403__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80403__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq80402){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80402));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81602 = arguments.length;
var i__4731__auto___81603 = (0);
while(true){
if((i__4731__auto___81603 < len__4730__auto___81602)){
args__4736__auto__.push((arguments[i__4731__auto___81603]));

var G__81604 = (i__4731__auto___81603 + (1));
i__4731__auto___81603 = G__81604;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80406 = conformed_args__78895__auto__;
var map__80406__$1 = (((((!((map__80406 == null))))?(((((map__80406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80406):map__80406);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq80405){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80405));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81609 = arguments.length;
var i__4731__auto___81610 = (0);
while(true){
if((i__4731__auto___81610 < len__4730__auto___81609)){
args__4736__auto__.push((arguments[i__4731__auto___81610]));

var G__81611 = (i__4731__auto___81610 + (1));
i__4731__auto___81610 = G__81611;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80409 = conformed_args__78895__auto__;
var map__80409__$1 = (((((!((map__80409 == null))))?(((((map__80409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80409):map__80409);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80409__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80409__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80409__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq80408){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80408));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81618 = arguments.length;
var i__4731__auto___81619 = (0);
while(true){
if((i__4731__auto___81619 < len__4730__auto___81618)){
args__4736__auto__.push((arguments[i__4731__auto___81619]));

var G__81620 = (i__4731__auto___81619 + (1));
i__4731__auto___81619 = G__81620;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80412 = conformed_args__78895__auto__;
var map__80412__$1 = (((((!((map__80412 == null))))?(((((map__80412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80412):map__80412);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq80411){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80411));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81629 = arguments.length;
var i__4731__auto___81630 = (0);
while(true){
if((i__4731__auto___81630 < len__4730__auto___81629)){
args__4736__auto__.push((arguments[i__4731__auto___81630]));

var G__81631 = (i__4731__auto___81630 + (1));
i__4731__auto___81630 = G__81631;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80415 = conformed_args__78895__auto__;
var map__80415__$1 = (((((!((map__80415 == null))))?(((((map__80415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80415):map__80415);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80415__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80415__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80415__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq80414){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80414));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81636 = arguments.length;
var i__4731__auto___81637 = (0);
while(true){
if((i__4731__auto___81637 < len__4730__auto___81636)){
args__4736__auto__.push((arguments[i__4731__auto___81637]));

var G__81638 = (i__4731__auto___81637 + (1));
i__4731__auto___81637 = G__81638;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80418 = conformed_args__78895__auto__;
var map__80418__$1 = (((((!((map__80418 == null))))?(((((map__80418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80418):map__80418);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80418__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80418__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq80417){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80417));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81647 = arguments.length;
var i__4731__auto___81649 = (0);
while(true){
if((i__4731__auto___81649 < len__4730__auto___81647)){
args__4736__auto__.push((arguments[i__4731__auto___81649]));

var G__81651 = (i__4731__auto___81649 + (1));
i__4731__auto___81649 = G__81651;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80421 = conformed_args__78895__auto__;
var map__80421__$1 = (((((!((map__80421 == null))))?(((((map__80421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80421):map__80421);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80421__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80421__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80421__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq80420){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80420));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81658 = arguments.length;
var i__4731__auto___81659 = (0);
while(true){
if((i__4731__auto___81659 < len__4730__auto___81658)){
args__4736__auto__.push((arguments[i__4731__auto___81659]));

var G__81660 = (i__4731__auto___81659 + (1));
i__4731__auto___81659 = G__81660;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80424 = conformed_args__78895__auto__;
var map__80424__$1 = (((((!((map__80424 == null))))?(((((map__80424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80424):map__80424);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80424__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80424__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80424__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq80423){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80423));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81665 = arguments.length;
var i__4731__auto___81666 = (0);
while(true){
if((i__4731__auto___81666 < len__4730__auto___81665)){
args__4736__auto__.push((arguments[i__4731__auto___81666]));

var G__81667 = (i__4731__auto___81666 + (1));
i__4731__auto___81666 = G__81667;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80427 = conformed_args__78895__auto__;
var map__80427__$1 = (((((!((map__80427 == null))))?(((((map__80427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80427):map__80427);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq80426){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80426));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81674 = arguments.length;
var i__4731__auto___81675 = (0);
while(true){
if((i__4731__auto___81675 < len__4730__auto___81674)){
args__4736__auto__.push((arguments[i__4731__auto___81675]));

var G__81679 = (i__4731__auto___81675 + (1));
i__4731__auto___81675 = G__81679;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80430 = conformed_args__78895__auto__;
var map__80430__$1 = (((((!((map__80430 == null))))?(((((map__80430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80430):map__80430);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq80429){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80429));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81683 = arguments.length;
var i__4731__auto___81684 = (0);
while(true){
if((i__4731__auto___81684 < len__4730__auto___81683)){
args__4736__auto__.push((arguments[i__4731__auto___81684]));

var G__81685 = (i__4731__auto___81684 + (1));
i__4731__auto___81684 = G__81685;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80433 = conformed_args__78895__auto__;
var map__80433__$1 = (((((!((map__80433 == null))))?(((((map__80433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80433):map__80433);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80433__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80433__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80433__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq80432){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80432));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81690 = arguments.length;
var i__4731__auto___81691 = (0);
while(true){
if((i__4731__auto___81691 < len__4730__auto___81690)){
args__4736__auto__.push((arguments[i__4731__auto___81691]));

var G__81692 = (i__4731__auto___81691 + (1));
i__4731__auto___81691 = G__81692;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80436 = conformed_args__78895__auto__;
var map__80436__$1 = (((((!((map__80436 == null))))?(((((map__80436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80436):map__80436);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq80435){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80435));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81697 = arguments.length;
var i__4731__auto___81698 = (0);
while(true){
if((i__4731__auto___81698 < len__4730__auto___81697)){
args__4736__auto__.push((arguments[i__4731__auto___81698]));

var G__81699 = (i__4731__auto___81698 + (1));
i__4731__auto___81698 = G__81699;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80439 = conformed_args__78895__auto__;
var map__80439__$1 = (((((!((map__80439 == null))))?(((((map__80439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80439):map__80439);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80439__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80439__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80439__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq80438){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80438));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81705 = arguments.length;
var i__4731__auto___81706 = (0);
while(true){
if((i__4731__auto___81706 < len__4730__auto___81705)){
args__4736__auto__.push((arguments[i__4731__auto___81706]));

var G__81707 = (i__4731__auto___81706 + (1));
i__4731__auto___81706 = G__81707;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80442 = conformed_args__78895__auto__;
var map__80442__$1 = (((((!((map__80442 == null))))?(((((map__80442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80442):map__80442);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80442__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80442__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq80441){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80441));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81709 = arguments.length;
var i__4731__auto___81710 = (0);
while(true){
if((i__4731__auto___81710 < len__4730__auto___81709)){
args__4736__auto__.push((arguments[i__4731__auto___81710]));

var G__81711 = (i__4731__auto___81710 + (1));
i__4731__auto___81710 = G__81711;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80445 = conformed_args__78895__auto__;
var map__80445__$1 = (((((!((map__80445 == null))))?(((((map__80445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80445):map__80445);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80445__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80445__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80445__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq80444){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80444));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81715 = arguments.length;
var i__4731__auto___81716 = (0);
while(true){
if((i__4731__auto___81716 < len__4730__auto___81715)){
args__4736__auto__.push((arguments[i__4731__auto___81716]));

var G__81717 = (i__4731__auto___81716 + (1));
i__4731__auto___81716 = G__81717;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80448 = conformed_args__78895__auto__;
var map__80448__$1 = (((((!((map__80448 == null))))?(((((map__80448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80448):map__80448);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq80447){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80447));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81722 = arguments.length;
var i__4731__auto___81723 = (0);
while(true){
if((i__4731__auto___81723 < len__4730__auto___81722)){
args__4736__auto__.push((arguments[i__4731__auto___81723]));

var G__81724 = (i__4731__auto___81723 + (1));
i__4731__auto___81723 = G__81724;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80451 = conformed_args__78895__auto__;
var map__80451__$1 = (((((!((map__80451 == null))))?(((((map__80451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80451):map__80451);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80451__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80451__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80451__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq80450){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80450));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81731 = arguments.length;
var i__4731__auto___81732 = (0);
while(true){
if((i__4731__auto___81732 < len__4730__auto___81731)){
args__4736__auto__.push((arguments[i__4731__auto___81732]));

var G__81733 = (i__4731__auto___81732 + (1));
i__4731__auto___81732 = G__81733;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80454 = conformed_args__78895__auto__;
var map__80454__$1 = (((((!((map__80454 == null))))?(((((map__80454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80454):map__80454);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq80453){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80453));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81735 = arguments.length;
var i__4731__auto___81736 = (0);
while(true){
if((i__4731__auto___81736 < len__4730__auto___81735)){
args__4736__auto__.push((arguments[i__4731__auto___81736]));

var G__81737 = (i__4731__auto___81736 + (1));
i__4731__auto___81736 = G__81737;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80457 = conformed_args__78895__auto__;
var map__80457__$1 = (((((!((map__80457 == null))))?(((((map__80457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80457):map__80457);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80457__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80457__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80457__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq80456){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80456));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81738 = arguments.length;
var i__4731__auto___81739 = (0);
while(true){
if((i__4731__auto___81739 < len__4730__auto___81738)){
args__4736__auto__.push((arguments[i__4731__auto___81739]));

var G__81740 = (i__4731__auto___81739 + (1));
i__4731__auto___81739 = G__81740;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80460 = conformed_args__78895__auto__;
var map__80460__$1 = (((((!((map__80460 == null))))?(((((map__80460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80460):map__80460);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq80459){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80459));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81746 = arguments.length;
var i__4731__auto___81747 = (0);
while(true){
if((i__4731__auto___81747 < len__4730__auto___81746)){
args__4736__auto__.push((arguments[i__4731__auto___81747]));

var G__81748 = (i__4731__auto___81747 + (1));
i__4731__auto___81747 = G__81748;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80463 = conformed_args__78895__auto__;
var map__80463__$1 = (((((!((map__80463 == null))))?(((((map__80463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80463):map__80463);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80463__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80463__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80463__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq80462){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80462));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81752 = arguments.length;
var i__4731__auto___81753 = (0);
while(true){
if((i__4731__auto___81753 < len__4730__auto___81752)){
args__4736__auto__.push((arguments[i__4731__auto___81753]));

var G__81756 = (i__4731__auto___81753 + (1));
i__4731__auto___81753 = G__81756;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80466 = conformed_args__78895__auto__;
var map__80466__$1 = (((((!((map__80466 == null))))?(((((map__80466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80466):map__80466);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80466__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80466__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80466__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq80465){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80465));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81771 = arguments.length;
var i__4731__auto___81772 = (0);
while(true){
if((i__4731__auto___81772 < len__4730__auto___81771)){
args__4736__auto__.push((arguments[i__4731__auto___81772]));

var G__81776 = (i__4731__auto___81772 + (1));
i__4731__auto___81772 = G__81776;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80469 = conformed_args__78895__auto__;
var map__80469__$1 = (((((!((map__80469 == null))))?(((((map__80469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80469):map__80469);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80469__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80469__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80469__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq80468){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80468));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81785 = arguments.length;
var i__4731__auto___81786 = (0);
while(true){
if((i__4731__auto___81786 < len__4730__auto___81785)){
args__4736__auto__.push((arguments[i__4731__auto___81786]));

var G__81787 = (i__4731__auto___81786 + (1));
i__4731__auto___81786 = G__81787;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80472 = conformed_args__78895__auto__;
var map__80472__$1 = (((((!((map__80472 == null))))?(((((map__80472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80472):map__80472);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80472__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80472__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80472__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq80471){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80471));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81790 = arguments.length;
var i__4731__auto___81792 = (0);
while(true){
if((i__4731__auto___81792 < len__4730__auto___81790)){
args__4736__auto__.push((arguments[i__4731__auto___81792]));

var G__81793 = (i__4731__auto___81792 + (1));
i__4731__auto___81792 = G__81793;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80475 = conformed_args__78895__auto__;
var map__80475__$1 = (((((!((map__80475 == null))))?(((((map__80475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80475):map__80475);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq80474){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80474));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81796 = arguments.length;
var i__4731__auto___81797 = (0);
while(true){
if((i__4731__auto___81797 < len__4730__auto___81796)){
args__4736__auto__.push((arguments[i__4731__auto___81797]));

var G__81798 = (i__4731__auto___81797 + (1));
i__4731__auto___81797 = G__81798;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80478 = conformed_args__78895__auto__;
var map__80478__$1 = (((((!((map__80478 == null))))?(((((map__80478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80478):map__80478);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80478__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80478__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80478__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq80477){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80477));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81803 = arguments.length;
var i__4731__auto___81804 = (0);
while(true){
if((i__4731__auto___81804 < len__4730__auto___81803)){
args__4736__auto__.push((arguments[i__4731__auto___81804]));

var G__81805 = (i__4731__auto___81804 + (1));
i__4731__auto___81804 = G__81805;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80481 = conformed_args__78895__auto__;
var map__80481__$1 = (((((!((map__80481 == null))))?(((((map__80481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80481):map__80481);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq80480){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80480));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81812 = arguments.length;
var i__4731__auto___81813 = (0);
while(true){
if((i__4731__auto___81813 < len__4730__auto___81812)){
args__4736__auto__.push((arguments[i__4731__auto___81813]));

var G__81814 = (i__4731__auto___81813 + (1));
i__4731__auto___81813 = G__81814;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80484 = conformed_args__78895__auto__;
var map__80484__$1 = (((((!((map__80484 == null))))?(((((map__80484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80484):map__80484);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80484__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80484__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq80483){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80483));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81825 = arguments.length;
var i__4731__auto___81826 = (0);
while(true){
if((i__4731__auto___81826 < len__4730__auto___81825)){
args__4736__auto__.push((arguments[i__4731__auto___81826]));

var G__81827 = (i__4731__auto___81826 + (1));
i__4731__auto___81826 = G__81827;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80487 = conformed_args__78895__auto__;
var map__80487__$1 = (((((!((map__80487 == null))))?(((((map__80487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80487):map__80487);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq80486){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80486));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81841 = arguments.length;
var i__4731__auto___81842 = (0);
while(true){
if((i__4731__auto___81842 < len__4730__auto___81841)){
args__4736__auto__.push((arguments[i__4731__auto___81842]));

var G__81843 = (i__4731__auto___81842 + (1));
i__4731__auto___81842 = G__81843;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80490 = conformed_args__78895__auto__;
var map__80490__$1 = (((((!((map__80490 == null))))?(((((map__80490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80490):map__80490);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80490__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80490__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80490__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq80489){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80489));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81848 = arguments.length;
var i__4731__auto___81849 = (0);
while(true){
if((i__4731__auto___81849 < len__4730__auto___81848)){
args__4736__auto__.push((arguments[i__4731__auto___81849]));

var G__81850 = (i__4731__auto___81849 + (1));
i__4731__auto___81849 = G__81850;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80493 = conformed_args__78895__auto__;
var map__80493__$1 = (((((!((map__80493 == null))))?(((((map__80493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80493):map__80493);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq80492){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80492));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81855 = arguments.length;
var i__4731__auto___81856 = (0);
while(true){
if((i__4731__auto___81856 < len__4730__auto___81855)){
args__4736__auto__.push((arguments[i__4731__auto___81856]));

var G__81857 = (i__4731__auto___81856 + (1));
i__4731__auto___81856 = G__81857;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80496 = conformed_args__78895__auto__;
var map__80496__$1 = (((((!((map__80496 == null))))?(((((map__80496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80496):map__80496);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80496__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80496__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80496__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq80495){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80495));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81859 = arguments.length;
var i__4731__auto___81860 = (0);
while(true){
if((i__4731__auto___81860 < len__4730__auto___81859)){
args__4736__auto__.push((arguments[i__4731__auto___81860]));

var G__81861 = (i__4731__auto___81860 + (1));
i__4731__auto___81860 = G__81861;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80499 = conformed_args__78895__auto__;
var map__80499__$1 = (((((!((map__80499 == null))))?(((((map__80499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80499):map__80499);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80499__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80499__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq80498){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80498));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81864 = arguments.length;
var i__4731__auto___81866 = (0);
while(true){
if((i__4731__auto___81866 < len__4730__auto___81864)){
args__4736__auto__.push((arguments[i__4731__auto___81866]));

var G__81867 = (i__4731__auto___81866 + (1));
i__4731__auto___81866 = G__81867;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80502 = conformed_args__78895__auto__;
var map__80502__$1 = (((((!((map__80502 == null))))?(((((map__80502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80502):map__80502);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80502__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80502__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80502__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq80501){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80501));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81870 = arguments.length;
var i__4731__auto___81871 = (0);
while(true){
if((i__4731__auto___81871 < len__4730__auto___81870)){
args__4736__auto__.push((arguments[i__4731__auto___81871]));

var G__81873 = (i__4731__auto___81871 + (1));
i__4731__auto___81871 = G__81873;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80505 = conformed_args__78895__auto__;
var map__80505__$1 = (((((!((map__80505 == null))))?(((((map__80505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80505):map__80505);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80505__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80505__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80505__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq80504){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80504));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81875 = arguments.length;
var i__4731__auto___81876 = (0);
while(true){
if((i__4731__auto___81876 < len__4730__auto___81875)){
args__4736__auto__.push((arguments[i__4731__auto___81876]));

var G__81877 = (i__4731__auto___81876 + (1));
i__4731__auto___81876 = G__81877;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80508 = conformed_args__78895__auto__;
var map__80508__$1 = (((((!((map__80508 == null))))?(((((map__80508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80508):map__80508);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80508__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80508__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80508__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq80507){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80507));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81879 = arguments.length;
var i__4731__auto___81880 = (0);
while(true){
if((i__4731__auto___81880 < len__4730__auto___81879)){
args__4736__auto__.push((arguments[i__4731__auto___81880]));

var G__81881 = (i__4731__auto___81880 + (1));
i__4731__auto___81880 = G__81881;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80511 = conformed_args__78895__auto__;
var map__80511__$1 = (((((!((map__80511 == null))))?(((((map__80511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80511):map__80511);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80511__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80511__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq80510){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80510));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81885 = arguments.length;
var i__4731__auto___81886 = (0);
while(true){
if((i__4731__auto___81886 < len__4730__auto___81885)){
args__4736__auto__.push((arguments[i__4731__auto___81886]));

var G__81890 = (i__4731__auto___81886 + (1));
i__4731__auto___81886 = G__81890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80514 = conformed_args__78895__auto__;
var map__80514__$1 = (((((!((map__80514 == null))))?(((((map__80514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80514):map__80514);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80514__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80514__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80514__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq80513){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80513));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81895 = arguments.length;
var i__4731__auto___81896 = (0);
while(true){
if((i__4731__auto___81896 < len__4730__auto___81895)){
args__4736__auto__.push((arguments[i__4731__auto___81896]));

var G__81897 = (i__4731__auto___81896 + (1));
i__4731__auto___81896 = G__81897;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80517 = conformed_args__78895__auto__;
var map__80517__$1 = (((((!((map__80517 == null))))?(((((map__80517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80517):map__80517);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80517__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80517__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq80516){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80516));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81899 = arguments.length;
var i__4731__auto___81900 = (0);
while(true){
if((i__4731__auto___81900 < len__4730__auto___81899)){
args__4736__auto__.push((arguments[i__4731__auto___81900]));

var G__81901 = (i__4731__auto___81900 + (1));
i__4731__auto___81900 = G__81901;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80520 = conformed_args__78895__auto__;
var map__80520__$1 = (((((!((map__80520 == null))))?(((((map__80520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80520):map__80520);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq80519){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80519));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81909 = arguments.length;
var i__4731__auto___81912 = (0);
while(true){
if((i__4731__auto___81912 < len__4730__auto___81909)){
args__4736__auto__.push((arguments[i__4731__auto___81912]));

var G__81916 = (i__4731__auto___81912 + (1));
i__4731__auto___81912 = G__81916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80523 = conformed_args__78895__auto__;
var map__80523__$1 = (((((!((map__80523 == null))))?(((((map__80523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80523):map__80523);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80523__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80523__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80523__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq80522){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80522));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81921 = arguments.length;
var i__4731__auto___81922 = (0);
while(true){
if((i__4731__auto___81922 < len__4730__auto___81921)){
args__4736__auto__.push((arguments[i__4731__auto___81922]));

var G__81923 = (i__4731__auto___81922 + (1));
i__4731__auto___81922 = G__81923;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80526 = conformed_args__78895__auto__;
var map__80526__$1 = (((((!((map__80526 == null))))?(((((map__80526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80526):map__80526);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80526__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80526__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80526__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq80525){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80525));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81928 = arguments.length;
var i__4731__auto___81929 = (0);
while(true){
if((i__4731__auto___81929 < len__4730__auto___81928)){
args__4736__auto__.push((arguments[i__4731__auto___81929]));

var G__81930 = (i__4731__auto___81929 + (1));
i__4731__auto___81929 = G__81930;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80529 = conformed_args__78895__auto__;
var map__80529__$1 = (((((!((map__80529 == null))))?(((((map__80529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80529):map__80529);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq80528){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80528));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81937 = arguments.length;
var i__4731__auto___81940 = (0);
while(true){
if((i__4731__auto___81940 < len__4730__auto___81937)){
args__4736__auto__.push((arguments[i__4731__auto___81940]));

var G__81943 = (i__4731__auto___81940 + (1));
i__4731__auto___81940 = G__81943;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80532 = conformed_args__78895__auto__;
var map__80532__$1 = (((((!((map__80532 == null))))?(((((map__80532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80532):map__80532);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq80531){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80531));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81955 = arguments.length;
var i__4731__auto___81956 = (0);
while(true){
if((i__4731__auto___81956 < len__4730__auto___81955)){
args__4736__auto__.push((arguments[i__4731__auto___81956]));

var G__81959 = (i__4731__auto___81956 + (1));
i__4731__auto___81956 = G__81959;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80535 = conformed_args__78895__auto__;
var map__80535__$1 = (((((!((map__80535 == null))))?(((((map__80535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80535):map__80535);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80535__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80535__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq80534){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80534));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81969 = arguments.length;
var i__4731__auto___81971 = (0);
while(true){
if((i__4731__auto___81971 < len__4730__auto___81969)){
args__4736__auto__.push((arguments[i__4731__auto___81971]));

var G__81972 = (i__4731__auto___81971 + (1));
i__4731__auto___81971 = G__81972;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80538 = conformed_args__78895__auto__;
var map__80538__$1 = (((((!((map__80538 == null))))?(((((map__80538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80538):map__80538);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80538__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80538__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80538__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq80537){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80537));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81985 = arguments.length;
var i__4731__auto___81986 = (0);
while(true){
if((i__4731__auto___81986 < len__4730__auto___81985)){
args__4736__auto__.push((arguments[i__4731__auto___81986]));

var G__81989 = (i__4731__auto___81986 + (1));
i__4731__auto___81986 = G__81989;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80541 = conformed_args__78895__auto__;
var map__80541__$1 = (((((!((map__80541 == null))))?(((((map__80541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80541):map__80541);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80541__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80541__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80541__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq80540){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80540));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4736__auto__ = [];
var len__4730__auto___81993 = arguments.length;
var i__4731__auto___81994 = (0);
while(true){
if((i__4731__auto___81994 < len__4730__auto___81993)){
args__4736__auto__.push((arguments[i__4731__auto___81994]));

var G__81995 = (i__4731__auto___81994 + (1));
i__4731__auto___81994 = G__81995;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80544 = conformed_args__78895__auto__;
var map__80544__$1 = (((((!((map__80544 == null))))?(((((map__80544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80544):map__80544);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80544__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80544__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80544__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq80543){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80543));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82000 = arguments.length;
var i__4731__auto___82001 = (0);
while(true){
if((i__4731__auto___82001 < len__4730__auto___82000)){
args__4736__auto__.push((arguments[i__4731__auto___82001]));

var G__82003 = (i__4731__auto___82001 + (1));
i__4731__auto___82001 = G__82003;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80547 = conformed_args__78895__auto__;
var map__80547__$1 = (((((!((map__80547 == null))))?(((((map__80547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80547):map__80547);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80547__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80547__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80547__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq80546){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80546));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82005 = arguments.length;
var i__4731__auto___82006 = (0);
while(true){
if((i__4731__auto___82006 < len__4730__auto___82005)){
args__4736__auto__.push((arguments[i__4731__auto___82006]));

var G__82008 = (i__4731__auto___82006 + (1));
i__4731__auto___82006 = G__82008;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80550 = conformed_args__78895__auto__;
var map__80550__$1 = (((((!((map__80550 == null))))?(((((map__80550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80550):map__80550);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80550__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80550__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80550__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq80549){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80549));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82014 = arguments.length;
var i__4731__auto___82015 = (0);
while(true){
if((i__4731__auto___82015 < len__4730__auto___82014)){
args__4736__auto__.push((arguments[i__4731__auto___82015]));

var G__82016 = (i__4731__auto___82015 + (1));
i__4731__auto___82015 = G__82016;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80553 = conformed_args__78895__auto__;
var map__80553__$1 = (((((!((map__80553 == null))))?(((((map__80553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80553):map__80553);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80553__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80553__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80553__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq80552){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80552));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82018 = arguments.length;
var i__4731__auto___82019 = (0);
while(true){
if((i__4731__auto___82019 < len__4730__auto___82018)){
args__4736__auto__.push((arguments[i__4731__auto___82019]));

var G__82020 = (i__4731__auto___82019 + (1));
i__4731__auto___82019 = G__82020;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80556 = conformed_args__78895__auto__;
var map__80556__$1 = (((((!((map__80556 == null))))?(((((map__80556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80556):map__80556);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq80555){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80555));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82024 = arguments.length;
var i__4731__auto___82026 = (0);
while(true){
if((i__4731__auto___82026 < len__4730__auto___82024)){
args__4736__auto__.push((arguments[i__4731__auto___82026]));

var G__82027 = (i__4731__auto___82026 + (1));
i__4731__auto___82026 = G__82027;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80559 = conformed_args__78895__auto__;
var map__80559__$1 = (((((!((map__80559 == null))))?(((((map__80559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80559):map__80559);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80559__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80559__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80559__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq80558){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80558));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82032 = arguments.length;
var i__4731__auto___82033 = (0);
while(true){
if((i__4731__auto___82033 < len__4730__auto___82032)){
args__4736__auto__.push((arguments[i__4731__auto___82033]));

var G__82034 = (i__4731__auto___82033 + (1));
i__4731__auto___82033 = G__82034;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80562 = conformed_args__78895__auto__;
var map__80562__$1 = (((((!((map__80562 == null))))?(((((map__80562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80562):map__80562);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80562__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80562__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80562__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq80561){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80561));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82039 = arguments.length;
var i__4731__auto___82040 = (0);
while(true){
if((i__4731__auto___82040 < len__4730__auto___82039)){
args__4736__auto__.push((arguments[i__4731__auto___82040]));

var G__82041 = (i__4731__auto___82040 + (1));
i__4731__auto___82040 = G__82041;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80565 = conformed_args__78895__auto__;
var map__80565__$1 = (((((!((map__80565 == null))))?(((((map__80565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80565):map__80565);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80565__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80565__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80565__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq80564){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80564));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82053 = arguments.length;
var i__4731__auto___82054 = (0);
while(true){
if((i__4731__auto___82054 < len__4730__auto___82053)){
args__4736__auto__.push((arguments[i__4731__auto___82054]));

var G__82056 = (i__4731__auto___82054 + (1));
i__4731__auto___82054 = G__82056;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80568 = conformed_args__78895__auto__;
var map__80568__$1 = (((((!((map__80568 == null))))?(((((map__80568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80568):map__80568);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80568__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80568__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80568__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq80567){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80567));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82060 = arguments.length;
var i__4731__auto___82061 = (0);
while(true){
if((i__4731__auto___82061 < len__4730__auto___82060)){
args__4736__auto__.push((arguments[i__4731__auto___82061]));

var G__82063 = (i__4731__auto___82061 + (1));
i__4731__auto___82061 = G__82063;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80571 = conformed_args__78895__auto__;
var map__80571__$1 = (((((!((map__80571 == null))))?(((((map__80571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80571):map__80571);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq80570){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80570));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82073 = arguments.length;
var i__4731__auto___82074 = (0);
while(true){
if((i__4731__auto___82074 < len__4730__auto___82073)){
args__4736__auto__.push((arguments[i__4731__auto___82074]));

var G__82075 = (i__4731__auto___82074 + (1));
i__4731__auto___82074 = G__82075;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80574 = conformed_args__78895__auto__;
var map__80574__$1 = (((((!((map__80574 == null))))?(((((map__80574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80574):map__80574);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80574__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80574__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80574__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq80573){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80573));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82081 = arguments.length;
var i__4731__auto___82082 = (0);
while(true){
if((i__4731__auto___82082 < len__4730__auto___82081)){
args__4736__auto__.push((arguments[i__4731__auto___82082]));

var G__82083 = (i__4731__auto___82082 + (1));
i__4731__auto___82082 = G__82083;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80577 = conformed_args__78895__auto__;
var map__80577__$1 = (((((!((map__80577 == null))))?(((((map__80577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80577):map__80577);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq80576){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80576));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82093 = arguments.length;
var i__4731__auto___82094 = (0);
while(true){
if((i__4731__auto___82094 < len__4730__auto___82093)){
args__4736__auto__.push((arguments[i__4731__auto___82094]));

var G__82095 = (i__4731__auto___82094 + (1));
i__4731__auto___82094 = G__82095;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80580 = conformed_args__78895__auto__;
var map__80580__$1 = (((((!((map__80580 == null))))?(((((map__80580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80580):map__80580);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80580__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80580__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq80579){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80579));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82098 = arguments.length;
var i__4731__auto___82099 = (0);
while(true){
if((i__4731__auto___82099 < len__4730__auto___82098)){
args__4736__auto__.push((arguments[i__4731__auto___82099]));

var G__82100 = (i__4731__auto___82099 + (1));
i__4731__auto___82099 = G__82100;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80583 = conformed_args__78895__auto__;
var map__80583__$1 = (((((!((map__80583 == null))))?(((((map__80583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80583):map__80583);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80583__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80583__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80583__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq80582){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80582));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82105 = arguments.length;
var i__4731__auto___82106 = (0);
while(true){
if((i__4731__auto___82106 < len__4730__auto___82105)){
args__4736__auto__.push((arguments[i__4731__auto___82106]));

var G__82107 = (i__4731__auto___82106 + (1));
i__4731__auto___82106 = G__82107;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80586 = conformed_args__78895__auto__;
var map__80586__$1 = (((((!((map__80586 == null))))?(((((map__80586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80586):map__80586);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80586__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq80585){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80585));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82108 = arguments.length;
var i__4731__auto___82109 = (0);
while(true){
if((i__4731__auto___82109 < len__4730__auto___82108)){
args__4736__auto__.push((arguments[i__4731__auto___82109]));

var G__82110 = (i__4731__auto___82109 + (1));
i__4731__auto___82109 = G__82110;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80589 = conformed_args__78895__auto__;
var map__80589__$1 = (((((!((map__80589 == null))))?(((((map__80589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80589):map__80589);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80589__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80589__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80589__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq80588){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80588));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82115 = arguments.length;
var i__4731__auto___82116 = (0);
while(true){
if((i__4731__auto___82116 < len__4730__auto___82115)){
args__4736__auto__.push((arguments[i__4731__auto___82116]));

var G__82118 = (i__4731__auto___82116 + (1));
i__4731__auto___82116 = G__82118;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80592 = conformed_args__78895__auto__;
var map__80592__$1 = (((((!((map__80592 == null))))?(((((map__80592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80592):map__80592);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80592__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq80591){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80591));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82122 = arguments.length;
var i__4731__auto___82123 = (0);
while(true){
if((i__4731__auto___82123 < len__4730__auto___82122)){
args__4736__auto__.push((arguments[i__4731__auto___82123]));

var G__82125 = (i__4731__auto___82123 + (1));
i__4731__auto___82123 = G__82125;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80595 = conformed_args__78895__auto__;
var map__80595__$1 = (((((!((map__80595 == null))))?(((((map__80595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80595):map__80595);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80595__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80595__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80595__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq80594){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80594));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82129 = arguments.length;
var i__4731__auto___82131 = (0);
while(true){
if((i__4731__auto___82131 < len__4730__auto___82129)){
args__4736__auto__.push((arguments[i__4731__auto___82131]));

var G__82132 = (i__4731__auto___82131 + (1));
i__4731__auto___82131 = G__82132;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80598 = conformed_args__78895__auto__;
var map__80598__$1 = (((((!((map__80598 == null))))?(((((map__80598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80598):map__80598);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80598__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80598__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80598__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq80597){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80597));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82133 = arguments.length;
var i__4731__auto___82134 = (0);
while(true){
if((i__4731__auto___82134 < len__4730__auto___82133)){
args__4736__auto__.push((arguments[i__4731__auto___82134]));

var G__82135 = (i__4731__auto___82134 + (1));
i__4731__auto___82134 = G__82135;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80601 = conformed_args__78895__auto__;
var map__80601__$1 = (((((!((map__80601 == null))))?(((((map__80601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80601):map__80601);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80601__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80601__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80601__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq80600){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80600));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82139 = arguments.length;
var i__4731__auto___82140 = (0);
while(true){
if((i__4731__auto___82140 < len__4730__auto___82139)){
args__4736__auto__.push((arguments[i__4731__auto___82140]));

var G__82141 = (i__4731__auto___82140 + (1));
i__4731__auto___82140 = G__82141;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80604 = conformed_args__78895__auto__;
var map__80604__$1 = (((((!((map__80604 == null))))?(((((map__80604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80604):map__80604);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq80603){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80603));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82147 = arguments.length;
var i__4731__auto___82148 = (0);
while(true){
if((i__4731__auto___82148 < len__4730__auto___82147)){
args__4736__auto__.push((arguments[i__4731__auto___82148]));

var G__82150 = (i__4731__auto___82148 + (1));
i__4731__auto___82148 = G__82150;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80607 = conformed_args__78895__auto__;
var map__80607__$1 = (((((!((map__80607 == null))))?(((((map__80607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80607):map__80607);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80607__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80607__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80607__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq80606){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80606));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82165 = arguments.length;
var i__4731__auto___82166 = (0);
while(true){
if((i__4731__auto___82166 < len__4730__auto___82165)){
args__4736__auto__.push((arguments[i__4731__auto___82166]));

var G__82168 = (i__4731__auto___82166 + (1));
i__4731__auto___82166 = G__82168;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80610 = conformed_args__78895__auto__;
var map__80610__$1 = (((((!((map__80610 == null))))?(((((map__80610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80610):map__80610);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80610__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80610__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80610__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq80609){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80609));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82177 = arguments.length;
var i__4731__auto___82179 = (0);
while(true){
if((i__4731__auto___82179 < len__4730__auto___82177)){
args__4736__auto__.push((arguments[i__4731__auto___82179]));

var G__82180 = (i__4731__auto___82179 + (1));
i__4731__auto___82179 = G__82180;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80613 = conformed_args__78895__auto__;
var map__80613__$1 = (((((!((map__80613 == null))))?(((((map__80613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80613):map__80613);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80613__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80613__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80613__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq80612){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80612));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82184 = arguments.length;
var i__4731__auto___82185 = (0);
while(true){
if((i__4731__auto___82185 < len__4730__auto___82184)){
args__4736__auto__.push((arguments[i__4731__auto___82185]));

var G__82186 = (i__4731__auto___82185 + (1));
i__4731__auto___82185 = G__82186;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80616 = conformed_args__78895__auto__;
var map__80616__$1 = (((((!((map__80616 == null))))?(((((map__80616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80616):map__80616);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80616__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80616__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80616__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq80615){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80615));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82188 = arguments.length;
var i__4731__auto___82189 = (0);
while(true){
if((i__4731__auto___82189 < len__4730__auto___82188)){
args__4736__auto__.push((arguments[i__4731__auto___82189]));

var G__82191 = (i__4731__auto___82189 + (1));
i__4731__auto___82189 = G__82191;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80619 = conformed_args__78895__auto__;
var map__80619__$1 = (((((!((map__80619 == null))))?(((((map__80619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80619):map__80619);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq80618){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80618));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82193 = arguments.length;
var i__4731__auto___82194 = (0);
while(true){
if((i__4731__auto___82194 < len__4730__auto___82193)){
args__4736__auto__.push((arguments[i__4731__auto___82194]));

var G__82195 = (i__4731__auto___82194 + (1));
i__4731__auto___82194 = G__82195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80622 = conformed_args__78895__auto__;
var map__80622__$1 = (((((!((map__80622 == null))))?(((((map__80622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80622):map__80622);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80622__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80622__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80622__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq80621){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80621));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82203 = arguments.length;
var i__4731__auto___82205 = (0);
while(true){
if((i__4731__auto___82205 < len__4730__auto___82203)){
args__4736__auto__.push((arguments[i__4731__auto___82205]));

var G__82207 = (i__4731__auto___82205 + (1));
i__4731__auto___82205 = G__82207;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80625 = conformed_args__78895__auto__;
var map__80625__$1 = (((((!((map__80625 == null))))?(((((map__80625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80625):map__80625);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80625__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80625__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80625__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq80624){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80624));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82213 = arguments.length;
var i__4731__auto___82214 = (0);
while(true){
if((i__4731__auto___82214 < len__4730__auto___82213)){
args__4736__auto__.push((arguments[i__4731__auto___82214]));

var G__82215 = (i__4731__auto___82214 + (1));
i__4731__auto___82214 = G__82215;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80628 = conformed_args__78895__auto__;
var map__80628__$1 = (((((!((map__80628 == null))))?(((((map__80628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80628):map__80628);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq80627){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80627));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82216 = arguments.length;
var i__4731__auto___82217 = (0);
while(true){
if((i__4731__auto___82217 < len__4730__auto___82216)){
args__4736__auto__.push((arguments[i__4731__auto___82217]));

var G__82218 = (i__4731__auto___82217 + (1));
i__4731__auto___82217 = G__82218;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80631 = conformed_args__78895__auto__;
var map__80631__$1 = (((((!((map__80631 == null))))?(((((map__80631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80631):map__80631);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80631__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80631__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80631__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq80630){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80630));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82219 = arguments.length;
var i__4731__auto___82220 = (0);
while(true){
if((i__4731__auto___82220 < len__4730__auto___82219)){
args__4736__auto__.push((arguments[i__4731__auto___82220]));

var G__82221 = (i__4731__auto___82220 + (1));
i__4731__auto___82220 = G__82221;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80634 = conformed_args__78895__auto__;
var map__80634__$1 = (((((!((map__80634 == null))))?(((((map__80634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80634):map__80634);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq80633){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80633));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82224 = arguments.length;
var i__4731__auto___82225 = (0);
while(true){
if((i__4731__auto___82225 < len__4730__auto___82224)){
args__4736__auto__.push((arguments[i__4731__auto___82225]));

var G__82226 = (i__4731__auto___82225 + (1));
i__4731__auto___82225 = G__82226;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80637 = conformed_args__78895__auto__;
var map__80637__$1 = (((((!((map__80637 == null))))?(((((map__80637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80637):map__80637);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80637__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80637__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80637__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq80636){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80636));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82227 = arguments.length;
var i__4731__auto___82228 = (0);
while(true){
if((i__4731__auto___82228 < len__4730__auto___82227)){
args__4736__auto__.push((arguments[i__4731__auto___82228]));

var G__82229 = (i__4731__auto___82228 + (1));
i__4731__auto___82228 = G__82229;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80640 = conformed_args__78895__auto__;
var map__80640__$1 = (((((!((map__80640 == null))))?(((((map__80640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80640):map__80640);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80640__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80640__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80640__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq80639){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80639));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82230 = arguments.length;
var i__4731__auto___82231 = (0);
while(true){
if((i__4731__auto___82231 < len__4730__auto___82230)){
args__4736__auto__.push((arguments[i__4731__auto___82231]));

var G__82232 = (i__4731__auto___82231 + (1));
i__4731__auto___82231 = G__82232;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80643 = conformed_args__78895__auto__;
var map__80643__$1 = (((((!((map__80643 == null))))?(((((map__80643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80643):map__80643);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq80642){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80642));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82239 = arguments.length;
var i__4731__auto___82240 = (0);
while(true){
if((i__4731__auto___82240 < len__4730__auto___82239)){
args__4736__auto__.push((arguments[i__4731__auto___82240]));

var G__82241 = (i__4731__auto___82240 + (1));
i__4731__auto___82240 = G__82241;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80646 = conformed_args__78895__auto__;
var map__80646__$1 = (((((!((map__80646 == null))))?(((((map__80646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80646):map__80646);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80646__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80646__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80646__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq80645){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80645));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82243 = arguments.length;
var i__4731__auto___82244 = (0);
while(true){
if((i__4731__auto___82244 < len__4730__auto___82243)){
args__4736__auto__.push((arguments[i__4731__auto___82244]));

var G__82245 = (i__4731__auto___82244 + (1));
i__4731__auto___82244 = G__82245;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80649 = conformed_args__78895__auto__;
var map__80649__$1 = (((((!((map__80649 == null))))?(((((map__80649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80649):map__80649);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80649__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80649__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80649__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq80648){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80648));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82250 = arguments.length;
var i__4731__auto___82252 = (0);
while(true){
if((i__4731__auto___82252 < len__4730__auto___82250)){
args__4736__auto__.push((arguments[i__4731__auto___82252]));

var G__82254 = (i__4731__auto___82252 + (1));
i__4731__auto___82252 = G__82254;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80652 = conformed_args__78895__auto__;
var map__80652__$1 = (((((!((map__80652 == null))))?(((((map__80652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80652):map__80652);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80652__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80652__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80652__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq80651){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80651));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82258 = arguments.length;
var i__4731__auto___82259 = (0);
while(true){
if((i__4731__auto___82259 < len__4730__auto___82258)){
args__4736__auto__.push((arguments[i__4731__auto___82259]));

var G__82260 = (i__4731__auto___82259 + (1));
i__4731__auto___82259 = G__82260;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80655 = conformed_args__78895__auto__;
var map__80655__$1 = (((((!((map__80655 == null))))?(((((map__80655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80655):map__80655);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80655__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80655__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq80654){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80654));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82265 = arguments.length;
var i__4731__auto___82268 = (0);
while(true){
if((i__4731__auto___82268 < len__4730__auto___82265)){
args__4736__auto__.push((arguments[i__4731__auto___82268]));

var G__82269 = (i__4731__auto___82268 + (1));
i__4731__auto___82268 = G__82269;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80658 = conformed_args__78895__auto__;
var map__80658__$1 = (((((!((map__80658 == null))))?(((((map__80658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80658):map__80658);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq80657){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80657));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82275 = arguments.length;
var i__4731__auto___82276 = (0);
while(true){
if((i__4731__auto___82276 < len__4730__auto___82275)){
args__4736__auto__.push((arguments[i__4731__auto___82276]));

var G__82280 = (i__4731__auto___82276 + (1));
i__4731__auto___82276 = G__82280;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80661 = conformed_args__78895__auto__;
var map__80661__$1 = (((((!((map__80661 == null))))?(((((map__80661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80661):map__80661);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80661__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80661__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80661__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq80660){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80660));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82284 = arguments.length;
var i__4731__auto___82285 = (0);
while(true){
if((i__4731__auto___82285 < len__4730__auto___82284)){
args__4736__auto__.push((arguments[i__4731__auto___82285]));

var G__82287 = (i__4731__auto___82285 + (1));
i__4731__auto___82285 = G__82287;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80664 = conformed_args__78895__auto__;
var map__80664__$1 = (((((!((map__80664 == null))))?(((((map__80664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80664):map__80664);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80664__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80664__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80664__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq80663){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80663));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82299 = arguments.length;
var i__4731__auto___82300 = (0);
while(true){
if((i__4731__auto___82300 < len__4730__auto___82299)){
args__4736__auto__.push((arguments[i__4731__auto___82300]));

var G__82303 = (i__4731__auto___82300 + (1));
i__4731__auto___82300 = G__82303;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80667 = conformed_args__78895__auto__;
var map__80667__$1 = (((((!((map__80667 == null))))?(((((map__80667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80667):map__80667);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80667__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80667__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80667__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq80666){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80666));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82305 = arguments.length;
var i__4731__auto___82306 = (0);
while(true){
if((i__4731__auto___82306 < len__4730__auto___82305)){
args__4736__auto__.push((arguments[i__4731__auto___82306]));

var G__82307 = (i__4731__auto___82306 + (1));
i__4731__auto___82306 = G__82307;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80670 = conformed_args__78895__auto__;
var map__80670__$1 = (((((!((map__80670 == null))))?(((((map__80670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80670):map__80670);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80670__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80670__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80670__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq80669){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80669));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82313 = arguments.length;
var i__4731__auto___82314 = (0);
while(true){
if((i__4731__auto___82314 < len__4730__auto___82313)){
args__4736__auto__.push((arguments[i__4731__auto___82314]));

var G__82315 = (i__4731__auto___82314 + (1));
i__4731__auto___82314 = G__82315;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80673 = conformed_args__78895__auto__;
var map__80673__$1 = (((((!((map__80673 == null))))?(((((map__80673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80673):map__80673);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80673__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80673__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80673__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq80672){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80672));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82316 = arguments.length;
var i__4731__auto___82317 = (0);
while(true){
if((i__4731__auto___82317 < len__4730__auto___82316)){
args__4736__auto__.push((arguments[i__4731__auto___82317]));

var G__82318 = (i__4731__auto___82317 + (1));
i__4731__auto___82317 = G__82318;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80676 = conformed_args__78895__auto__;
var map__80676__$1 = (((((!((map__80676 == null))))?(((((map__80676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80676):map__80676);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80676__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80676__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq80675){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80675));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82329 = arguments.length;
var i__4731__auto___82330 = (0);
while(true){
if((i__4731__auto___82330 < len__4730__auto___82329)){
args__4736__auto__.push((arguments[i__4731__auto___82330]));

var G__82331 = (i__4731__auto___82330 + (1));
i__4731__auto___82330 = G__82331;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80679 = conformed_args__78895__auto__;
var map__80679__$1 = (((((!((map__80679 == null))))?(((((map__80679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80679):map__80679);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80679__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80679__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80679__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq80678){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80678));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82335 = arguments.length;
var i__4731__auto___82336 = (0);
while(true){
if((i__4731__auto___82336 < len__4730__auto___82335)){
args__4736__auto__.push((arguments[i__4731__auto___82336]));

var G__82337 = (i__4731__auto___82336 + (1));
i__4731__auto___82336 = G__82337;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80682 = conformed_args__78895__auto__;
var map__80682__$1 = (((((!((map__80682 == null))))?(((((map__80682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80682):map__80682);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80682__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq80681){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80681));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82339 = arguments.length;
var i__4731__auto___82340 = (0);
while(true){
if((i__4731__auto___82340 < len__4730__auto___82339)){
args__4736__auto__.push((arguments[i__4731__auto___82340]));

var G__82342 = (i__4731__auto___82340 + (1));
i__4731__auto___82340 = G__82342;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80685 = conformed_args__78895__auto__;
var map__80685__$1 = (((((!((map__80685 == null))))?(((((map__80685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80685):map__80685);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq80684){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80684));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82344 = arguments.length;
var i__4731__auto___82345 = (0);
while(true){
if((i__4731__auto___82345 < len__4730__auto___82344)){
args__4736__auto__.push((arguments[i__4731__auto___82345]));

var G__82346 = (i__4731__auto___82345 + (1));
i__4731__auto___82345 = G__82346;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80688 = conformed_args__78895__auto__;
var map__80688__$1 = (((((!((map__80688 == null))))?(((((map__80688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80688):map__80688);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq80687){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80687));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82349 = arguments.length;
var i__4731__auto___82350 = (0);
while(true){
if((i__4731__auto___82350 < len__4730__auto___82349)){
args__4736__auto__.push((arguments[i__4731__auto___82350]));

var G__82351 = (i__4731__auto___82350 + (1));
i__4731__auto___82350 = G__82351;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80691 = conformed_args__78895__auto__;
var map__80691__$1 = (((((!((map__80691 == null))))?(((((map__80691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80691):map__80691);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq80690){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80690));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82354 = arguments.length;
var i__4731__auto___82355 = (0);
while(true){
if((i__4731__auto___82355 < len__4730__auto___82354)){
args__4736__auto__.push((arguments[i__4731__auto___82355]));

var G__82356 = (i__4731__auto___82355 + (1));
i__4731__auto___82355 = G__82356;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80694 = conformed_args__78895__auto__;
var map__80694__$1 = (((((!((map__80694 == null))))?(((((map__80694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80694):map__80694);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq80693){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80693));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82362 = arguments.length;
var i__4731__auto___82363 = (0);
while(true){
if((i__4731__auto___82363 < len__4730__auto___82362)){
args__4736__auto__.push((arguments[i__4731__auto___82363]));

var G__82364 = (i__4731__auto___82363 + (1));
i__4731__auto___82363 = G__82364;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80697 = conformed_args__78895__auto__;
var map__80697__$1 = (((((!((map__80697 == null))))?(((((map__80697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80697):map__80697);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq80696){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80696));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82368 = arguments.length;
var i__4731__auto___82369 = (0);
while(true){
if((i__4731__auto___82369 < len__4730__auto___82368)){
args__4736__auto__.push((arguments[i__4731__auto___82369]));

var G__82370 = (i__4731__auto___82369 + (1));
i__4731__auto___82369 = G__82370;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80700 = conformed_args__78895__auto__;
var map__80700__$1 = (((((!((map__80700 == null))))?(((((map__80700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80700):map__80700);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80700__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80700__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq80699){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80699));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82383 = arguments.length;
var i__4731__auto___82385 = (0);
while(true){
if((i__4731__auto___82385 < len__4730__auto___82383)){
args__4736__auto__.push((arguments[i__4731__auto___82385]));

var G__82386 = (i__4731__auto___82385 + (1));
i__4731__auto___82385 = G__82386;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80703 = conformed_args__78895__auto__;
var map__80703__$1 = (((((!((map__80703 == null))))?(((((map__80703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80703):map__80703);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq80702){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80702));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82391 = arguments.length;
var i__4731__auto___82392 = (0);
while(true){
if((i__4731__auto___82392 < len__4730__auto___82391)){
args__4736__auto__.push((arguments[i__4731__auto___82392]));

var G__82393 = (i__4731__auto___82392 + (1));
i__4731__auto___82392 = G__82393;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80706 = conformed_args__78895__auto__;
var map__80706__$1 = (((((!((map__80706 == null))))?(((((map__80706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80706):map__80706);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq80705){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80705));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82395 = arguments.length;
var i__4731__auto___82396 = (0);
while(true){
if((i__4731__auto___82396 < len__4730__auto___82395)){
args__4736__auto__.push((arguments[i__4731__auto___82396]));

var G__82397 = (i__4731__auto___82396 + (1));
i__4731__auto___82396 = G__82397;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80709 = conformed_args__78895__auto__;
var map__80709__$1 = (((((!((map__80709 == null))))?(((((map__80709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80709):map__80709);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80709__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80709__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq80708){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80708));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82401 = arguments.length;
var i__4731__auto___82403 = (0);
while(true){
if((i__4731__auto___82403 < len__4730__auto___82401)){
args__4736__auto__.push((arguments[i__4731__auto___82403]));

var G__82404 = (i__4731__auto___82403 + (1));
i__4731__auto___82403 = G__82404;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80712 = conformed_args__78895__auto__;
var map__80712__$1 = (((((!((map__80712 == null))))?(((((map__80712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80712):map__80712);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80712__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80712__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq80711){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80711));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82406 = arguments.length;
var i__4731__auto___82407 = (0);
while(true){
if((i__4731__auto___82407 < len__4730__auto___82406)){
args__4736__auto__.push((arguments[i__4731__auto___82407]));

var G__82408 = (i__4731__auto___82407 + (1));
i__4731__auto___82407 = G__82408;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80715 = conformed_args__78895__auto__;
var map__80715__$1 = (((((!((map__80715 == null))))?(((((map__80715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80715):map__80715);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq80714){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80714));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82413 = arguments.length;
var i__4731__auto___82415 = (0);
while(true){
if((i__4731__auto___82415 < len__4730__auto___82413)){
args__4736__auto__.push((arguments[i__4731__auto___82415]));

var G__82418 = (i__4731__auto___82415 + (1));
i__4731__auto___82415 = G__82418;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80718 = conformed_args__78895__auto__;
var map__80718__$1 = (((((!((map__80718 == null))))?(((((map__80718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80718):map__80718);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq80717){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80717));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82423 = arguments.length;
var i__4731__auto___82424 = (0);
while(true){
if((i__4731__auto___82424 < len__4730__auto___82423)){
args__4736__auto__.push((arguments[i__4731__auto___82424]));

var G__82425 = (i__4731__auto___82424 + (1));
i__4731__auto___82424 = G__82425;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80721 = conformed_args__78895__auto__;
var map__80721__$1 = (((((!((map__80721 == null))))?(((((map__80721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80721):map__80721);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80721__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80721__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80721__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq80720){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80720));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82431 = arguments.length;
var i__4731__auto___82432 = (0);
while(true){
if((i__4731__auto___82432 < len__4730__auto___82431)){
args__4736__auto__.push((arguments[i__4731__auto___82432]));

var G__82433 = (i__4731__auto___82432 + (1));
i__4731__auto___82432 = G__82433;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80724 = conformed_args__78895__auto__;
var map__80724__$1 = (((((!((map__80724 == null))))?(((((map__80724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80724):map__80724);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq80723){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80723));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82437 = arguments.length;
var i__4731__auto___82438 = (0);
while(true){
if((i__4731__auto___82438 < len__4730__auto___82437)){
args__4736__auto__.push((arguments[i__4731__auto___82438]));

var G__82439 = (i__4731__auto___82438 + (1));
i__4731__auto___82438 = G__82439;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80727 = conformed_args__78895__auto__;
var map__80727__$1 = (((((!((map__80727 == null))))?(((((map__80727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80727):map__80727);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq80726){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80726));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82442 = arguments.length;
var i__4731__auto___82443 = (0);
while(true){
if((i__4731__auto___82443 < len__4730__auto___82442)){
args__4736__auto__.push((arguments[i__4731__auto___82443]));

var G__82444 = (i__4731__auto___82443 + (1));
i__4731__auto___82443 = G__82444;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80730 = conformed_args__78895__auto__;
var map__80730__$1 = (((((!((map__80730 == null))))?(((((map__80730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80730):map__80730);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq80729){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80729));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82449 = arguments.length;
var i__4731__auto___82450 = (0);
while(true){
if((i__4731__auto___82450 < len__4730__auto___82449)){
args__4736__auto__.push((arguments[i__4731__auto___82450]));

var G__82452 = (i__4731__auto___82450 + (1));
i__4731__auto___82450 = G__82452;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80733 = conformed_args__78895__auto__;
var map__80733__$1 = (((((!((map__80733 == null))))?(((((map__80733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80733):map__80733);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq80732){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80732));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82456 = arguments.length;
var i__4731__auto___82457 = (0);
while(true){
if((i__4731__auto___82457 < len__4730__auto___82456)){
args__4736__auto__.push((arguments[i__4731__auto___82457]));

var G__82459 = (i__4731__auto___82457 + (1));
i__4731__auto___82457 = G__82459;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80736 = conformed_args__78895__auto__;
var map__80736__$1 = (((((!((map__80736 == null))))?(((((map__80736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80736):map__80736);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq80735){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80735));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82465 = arguments.length;
var i__4731__auto___82466 = (0);
while(true){
if((i__4731__auto___82466 < len__4730__auto___82465)){
args__4736__auto__.push((arguments[i__4731__auto___82466]));

var G__82468 = (i__4731__auto___82466 + (1));
i__4731__auto___82466 = G__82468;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80739 = conformed_args__78895__auto__;
var map__80739__$1 = (((((!((map__80739 == null))))?(((((map__80739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80739):map__80739);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq80738){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80738));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82474 = arguments.length;
var i__4731__auto___82475 = (0);
while(true){
if((i__4731__auto___82475 < len__4730__auto___82474)){
args__4736__auto__.push((arguments[i__4731__auto___82475]));

var G__82476 = (i__4731__auto___82475 + (1));
i__4731__auto___82475 = G__82476;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80742 = conformed_args__78895__auto__;
var map__80742__$1 = (((((!((map__80742 == null))))?(((((map__80742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80742):map__80742);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq80741){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80741));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82482 = arguments.length;
var i__4731__auto___82483 = (0);
while(true){
if((i__4731__auto___82483 < len__4730__auto___82482)){
args__4736__auto__.push((arguments[i__4731__auto___82483]));

var G__82484 = (i__4731__auto___82483 + (1));
i__4731__auto___82483 = G__82484;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80745 = conformed_args__78895__auto__;
var map__80745__$1 = (((((!((map__80745 == null))))?(((((map__80745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80745):map__80745);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq80744){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80744));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82487 = arguments.length;
var i__4731__auto___82488 = (0);
while(true){
if((i__4731__auto___82488 < len__4730__auto___82487)){
args__4736__auto__.push((arguments[i__4731__auto___82488]));

var G__82489 = (i__4731__auto___82488 + (1));
i__4731__auto___82488 = G__82489;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80748 = conformed_args__78895__auto__;
var map__80748__$1 = (((((!((map__80748 == null))))?(((((map__80748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80748):map__80748);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq80747){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80747));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82495 = arguments.length;
var i__4731__auto___82496 = (0);
while(true){
if((i__4731__auto___82496 < len__4730__auto___82495)){
args__4736__auto__.push((arguments[i__4731__auto___82496]));

var G__82497 = (i__4731__auto___82496 + (1));
i__4731__auto___82496 = G__82497;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80751 = conformed_args__78895__auto__;
var map__80751__$1 = (((((!((map__80751 == null))))?(((((map__80751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80751):map__80751);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80751__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80751__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80751__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq80750){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80750));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82502 = arguments.length;
var i__4731__auto___82503 = (0);
while(true){
if((i__4731__auto___82503 < len__4730__auto___82502)){
args__4736__auto__.push((arguments[i__4731__auto___82503]));

var G__82504 = (i__4731__auto___82503 + (1));
i__4731__auto___82503 = G__82504;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80754 = conformed_args__78895__auto__;
var map__80754__$1 = (((((!((map__80754 == null))))?(((((map__80754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80754):map__80754);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq80753){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80753));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82515 = arguments.length;
var i__4731__auto___82516 = (0);
while(true){
if((i__4731__auto___82516 < len__4730__auto___82515)){
args__4736__auto__.push((arguments[i__4731__auto___82516]));

var G__82517 = (i__4731__auto___82516 + (1));
i__4731__auto___82516 = G__82517;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80757 = conformed_args__78895__auto__;
var map__80757__$1 = (((((!((map__80757 == null))))?(((((map__80757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80757):map__80757);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq80756){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80756));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82524 = arguments.length;
var i__4731__auto___82525 = (0);
while(true){
if((i__4731__auto___82525 < len__4730__auto___82524)){
args__4736__auto__.push((arguments[i__4731__auto___82525]));

var G__82529 = (i__4731__auto___82525 + (1));
i__4731__auto___82525 = G__82529;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80760 = conformed_args__78895__auto__;
var map__80760__$1 = (((((!((map__80760 == null))))?(((((map__80760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80760):map__80760);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq80759){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80759));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82535 = arguments.length;
var i__4731__auto___82536 = (0);
while(true){
if((i__4731__auto___82536 < len__4730__auto___82535)){
args__4736__auto__.push((arguments[i__4731__auto___82536]));

var G__82537 = (i__4731__auto___82536 + (1));
i__4731__auto___82536 = G__82537;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80763 = conformed_args__78895__auto__;
var map__80763__$1 = (((((!((map__80763 == null))))?(((((map__80763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80763):map__80763);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80763__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80763__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80763__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq80762){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80762));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82548 = arguments.length;
var i__4731__auto___82549 = (0);
while(true){
if((i__4731__auto___82549 < len__4730__auto___82548)){
args__4736__auto__.push((arguments[i__4731__auto___82549]));

var G__82550 = (i__4731__auto___82549 + (1));
i__4731__auto___82549 = G__82550;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80766 = conformed_args__78895__auto__;
var map__80766__$1 = (((((!((map__80766 == null))))?(((((map__80766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80766):map__80766);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80766__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80766__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80766__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq80765){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80765));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82564 = arguments.length;
var i__4731__auto___82565 = (0);
while(true){
if((i__4731__auto___82565 < len__4730__auto___82564)){
args__4736__auto__.push((arguments[i__4731__auto___82565]));

var G__82566 = (i__4731__auto___82565 + (1));
i__4731__auto___82565 = G__82566;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80769 = conformed_args__78895__auto__;
var map__80769__$1 = (((((!((map__80769 == null))))?(((((map__80769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80769):map__80769);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq80768){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80768));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82573 = arguments.length;
var i__4731__auto___82574 = (0);
while(true){
if((i__4731__auto___82574 < len__4730__auto___82573)){
args__4736__auto__.push((arguments[i__4731__auto___82574]));

var G__82575 = (i__4731__auto___82574 + (1));
i__4731__auto___82574 = G__82575;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80772 = conformed_args__78895__auto__;
var map__80772__$1 = (((((!((map__80772 == null))))?(((((map__80772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80772):map__80772);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq80771){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80771));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82582 = arguments.length;
var i__4731__auto___82583 = (0);
while(true){
if((i__4731__auto___82583 < len__4730__auto___82582)){
args__4736__auto__.push((arguments[i__4731__auto___82583]));

var G__82584 = (i__4731__auto___82583 + (1));
i__4731__auto___82583 = G__82584;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80775 = conformed_args__78895__auto__;
var map__80775__$1 = (((((!((map__80775 == null))))?(((((map__80775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80775):map__80775);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq80774){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80774));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82586 = arguments.length;
var i__4731__auto___82587 = (0);
while(true){
if((i__4731__auto___82587 < len__4730__auto___82586)){
args__4736__auto__.push((arguments[i__4731__auto___82587]));

var G__82588 = (i__4731__auto___82587 + (1));
i__4731__auto___82587 = G__82588;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80778 = conformed_args__78895__auto__;
var map__80778__$1 = (((((!((map__80778 == null))))?(((((map__80778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80778):map__80778);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80778__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq80777){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80777));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82591 = arguments.length;
var i__4731__auto___82592 = (0);
while(true){
if((i__4731__auto___82592 < len__4730__auto___82591)){
args__4736__auto__.push((arguments[i__4731__auto___82592]));

var G__82593 = (i__4731__auto___82592 + (1));
i__4731__auto___82592 = G__82593;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80781 = conformed_args__78895__auto__;
var map__80781__$1 = (((((!((map__80781 == null))))?(((((map__80781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80781):map__80781);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80781__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80781__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80781__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq80780){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80780));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82596 = arguments.length;
var i__4731__auto___82597 = (0);
while(true){
if((i__4731__auto___82597 < len__4730__auto___82596)){
args__4736__auto__.push((arguments[i__4731__auto___82597]));

var G__82599 = (i__4731__auto___82597 + (1));
i__4731__auto___82597 = G__82599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80784 = conformed_args__78895__auto__;
var map__80784__$1 = (((((!((map__80784 == null))))?(((((map__80784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80784):map__80784);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80784__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80784__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq80783){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80783));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82603 = arguments.length;
var i__4731__auto___82604 = (0);
while(true){
if((i__4731__auto___82604 < len__4730__auto___82603)){
args__4736__auto__.push((arguments[i__4731__auto___82604]));

var G__82605 = (i__4731__auto___82604 + (1));
i__4731__auto___82604 = G__82605;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80787 = conformed_args__78895__auto__;
var map__80787__$1 = (((((!((map__80787 == null))))?(((((map__80787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80787):map__80787);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq80786){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80786));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82608 = arguments.length;
var i__4731__auto___82609 = (0);
while(true){
if((i__4731__auto___82609 < len__4730__auto___82608)){
args__4736__auto__.push((arguments[i__4731__auto___82609]));

var G__82610 = (i__4731__auto___82609 + (1));
i__4731__auto___82609 = G__82610;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80790 = conformed_args__78895__auto__;
var map__80790__$1 = (((((!((map__80790 == null))))?(((((map__80790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80790):map__80790);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80790__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80790__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80790__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq80789){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80789));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82617 = arguments.length;
var i__4731__auto___82618 = (0);
while(true){
if((i__4731__auto___82618 < len__4730__auto___82617)){
args__4736__auto__.push((arguments[i__4731__auto___82618]));

var G__82619 = (i__4731__auto___82618 + (1));
i__4731__auto___82618 = G__82619;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80793 = conformed_args__78895__auto__;
var map__80793__$1 = (((((!((map__80793 == null))))?(((((map__80793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80793):map__80793);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80793__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80793__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80793__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq80792){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80792));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82624 = arguments.length;
var i__4731__auto___82625 = (0);
while(true){
if((i__4731__auto___82625 < len__4730__auto___82624)){
args__4736__auto__.push((arguments[i__4731__auto___82625]));

var G__82626 = (i__4731__auto___82625 + (1));
i__4731__auto___82625 = G__82626;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80796 = conformed_args__78895__auto__;
var map__80796__$1 = (((((!((map__80796 == null))))?(((((map__80796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80796):map__80796);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80796__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80796__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80796__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq80795){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80795));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4736__auto__ = [];
var len__4730__auto___82632 = arguments.length;
var i__4731__auto___82633 = (0);
while(true){
if((i__4731__auto___82633 < len__4730__auto___82632)){
args__4736__auto__.push((arguments[i__4731__auto___82633]));

var G__82634 = (i__4731__auto___82633 + (1));
i__4731__auto___82633 = G__82634;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__78895__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__80799 = conformed_args__78895__auto__;
var map__80799__$1 = (((((!((map__80799 == null))))?(((((map__80799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80799):map__80799);
var attrs__78896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80799__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__78897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80799__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__78898__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80799__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__78897__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__78897__auto__);
var attrs_value__78899__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__78896__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__78899__auto__], null),children__78897__auto____$1),css__78898__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq80798){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80798));
});


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
