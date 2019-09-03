goog.provide('book.html_converter');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom.html_entities');
goog.require('taoensso.timbre');
goog.require('camel_snake_kebab.core');
goog.require('hickory.core');
goog.require('clojure.set');
goog.require('cljs.pprint');
goog.require('clojure.string');
book.html_converter.attr_renames = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),new cljs.core.Keyword(null,"tabindex","tabindex",338877510),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"viewbox","viewbox",-1545612500),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"spellcheck","spellcheck",-508643726),new cljs.core.Keyword(null,"spellcheck","spellcheck",-508643726),new cljs.core.Keyword(null,"autocorrect","autocorrect",531427757),new cljs.core.Keyword(null,"autoCorrect","autoCorrect",448626584),new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415)], null);
book.html_converter.fix_style = (function book$html_converter$fix_style(style){
try{var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(style,/;/);
var style_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines){
return (function (line){
var vec__88059 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/:/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88059,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [camel_snake_kebab.core.__GT_camelCase(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k)),clojure.string.trim(v)], null);
});})(lines))
,lines));
return style_map;
}catch (e88058){var e = e88058;
return style;
}});
book.html_converter.classes__GT_keyword = (function book$html_converter$classes__GT_keyword(className){
if(cljs.core.seq(clojure.string.trim(className))){
var classes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (e){
if(cljs.core.seq(e)){
return e;
} else {
return null;
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(className,/  */));
var kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",classes))].join(''));
return kw;
} else {
return null;
}
});
book.html_converter.chars__GT_entity = (function book$html_converter$chars__GT_entity(ns,chars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(chars))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"&",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(chars,";"));
} else {
if(cljs.core.seq(ns)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,chars));
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,chars));
}
}
});
book.html_converter.parse_entity = (function book$html_converter$parse_entity(stream,result,p__88064){
var map__88065 = p__88064;
var map__88065__$1 = (((((!((map__88065 == null))))?(((((map__88065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88065):map__88065);
var options = map__88065__$1;
var entity_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88065__$1,new cljs.core.Keyword(null,"entity-ns","entity-ns",1894323228));
var s = stream;
var chars = cljs.core.PersistentVector.EMPTY;
while(true){
var c = cljs.core.first(s);
var G__88069 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",G__88069)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(s),((cljs.core.seq(chars))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,book.html_converter.chars__GT_entity(entity_ns,chars)):result)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__88069)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(s),((cljs.core.seq(chars))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,book.html_converter.chars__GT_entity(entity_ns,chars)):result)], null);
} else {
var G__88137 = cljs.core.rest(s);
var G__88138 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(chars,c);
s = G__88137;
chars = G__88138;
continue;

}
}
break;
}
});
book.html_converter.html_string__GT_react_string = (function book$html_converter$html_string__GT_react_string(html_str,p__88070){
var map__88071 = p__88070;
var map__88071__$1 = (((((!((map__88071 == null))))?(((((map__88071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88071):map__88071);
var options = map__88071__$1;
var ignore_entities_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88071__$1,new cljs.core.Keyword(null,"ignore-entities?","ignore-entities?",-934519958));
if(cljs.core.truth_(ignore_entities_QMARK_)){
return html_str;
} else {
var s = html_str;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var c = cljs.core.first(s);
var vec__88077 = (function (){var G__88080 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__88080)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,result], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("&",G__88080)){
return book.html_converter.parse_entity(cljs.core.rest(s),result,options);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,c)], null);

}
}
})();
var new_stream = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88077,(0),null);
var new_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88077,(1),null);
if(cljs.core.truth_(new_stream)){
var G__88142 = new_stream;
var G__88143 = new_result;
s = G__88142;
result = G__88143;
continue;
} else {
var segments = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.char_QMARK_,new_result);
var result__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (s,result,segments,c,vec__88077,new_stream,new_result,map__88071,map__88071__$1,options,ignore_entities_QMARK_){
return (function (s__$1){
if(cljs.core.char_QMARK_(cljs.core.first(s__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s__$1);
} else {
return cljs.core.first(s__$1);
}
});})(s,result,segments,c,vec__88077,new_stream,new_result,map__88071,map__88071__$1,options,ignore_entities_QMARK_))
,segments);
return result__$1;
}
break;
}
}
});
book.html_converter.element__GT_call = (function book$html_converter$element__GT_call(var_args){
var G__88082 = arguments.length;
switch (G__88082) {
case 1:
return book.html_converter.element__GT_call.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return book.html_converter.element__GT_call.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

book.html_converter.element__GT_call.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return book.html_converter.element__GT_call.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.PersistentArrayMap.EMPTY);
});

book.html_converter.element__GT_call.cljs$core$IFn$_invoke$arity$2 = (function (elem,p__88090){
var map__88091 = p__88090;
var map__88091__$1 = (((((!((map__88091 == null))))?(((((map__88091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88091):map__88091);
var options = map__88091__$1;
var ns_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88091__$1,new cljs.core.Keyword(null,"ns-alias","ns-alias",1705921737));
var keep_empty_attrs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88091__$1,new cljs.core.Keyword(null,"keep-empty-attrs?","keep-empty-attrs?",1039454830));
if(cljs.core.truth_((function (){var and__4120__auto__ = typeof elem === 'string';
if(and__4120__auto__){
var elem__$1 = clojure.string.trim(elem);
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",elem__$1);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = ((clojure.string.starts_with_QMARK_(elem__$1,"<!--")) && (clojure.string.ends_with_QMARK_(elem__$1,"-->")));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return cljs.core.re_matches(/^[ \n]*$/,elem__$1);
}
}
} else {
return and__4120__auto__;
}
})())){
return null;
} else {
if(typeof elem === 'string'){
return book.html_converter.html_string__GT_react_string(clojure.string.trim(elem),options);
} else {
if(cljs.core.vector_QMARK_(elem)){
var tag = cljs.core.name(cljs.core.first(elem));
var raw_props = cljs.core.second(elem);
var classkey = ((cljs.core.contains_QMARK_(raw_props,new cljs.core.Keyword(null,"class","class",-2030961996)))?book.html_converter.classes__GT_keyword(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(raw_props)):null);
var attrs = (function (){var G__88095 = clojure.set.rename_keys(raw_props,book.html_converter.attr_renames);
var G__88095__$1 = ((cljs.core.contains_QMARK_(raw_props,new cljs.core.Keyword(null,"class","class",-2030961996)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__88095,new cljs.core.Keyword(null,"className","className",-1983287057)):G__88095);
if(cljs.core.contains_QMARK_(raw_props,new cljs.core.Keyword(null,"style","style",-496642736))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__88095__$1,new cljs.core.Keyword(null,"style","style",-496642736),book.html_converter.fix_style);
} else {
return G__88095__$1;
}
})();
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (tag,raw_props,classkey,attrs,map__88091,map__88091__$1,options,ns_alias,keep_empty_attrs_QMARK_){
return (function (c){
return book.html_converter.element__GT_call.cljs$core$IFn$_invoke$arity$2(c,options);
});})(tag,raw_props,classkey,attrs,map__88091,map__88091__$1,options,ns_alias,keep_empty_attrs_QMARK_))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),elem));
var expanded_children = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tag,raw_props,classkey,attrs,children,map__88091,map__88091__$1,options,ns_alias,keep_empty_attrs_QMARK_){
return (function (acc,c){
if(cljs.core.vector_QMARK_(c)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,c));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,c);
}
});})(tag,raw_props,classkey,attrs,children,map__88091,map__88091__$1,options,ns_alias,keep_empty_attrs_QMARK_))
,cljs.core.PersistentVector.EMPTY,children);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.List.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(ns_alias))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns_alias,tag):cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(tag)),(cljs.core.truth_(classkey)?classkey:null),(cljs.core.truth_(keep_empty_attrs_QMARK_)?attrs:((cljs.core.seq(attrs))?attrs:null))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expanded_children], 0));
} else {
return "";

}
}
}
});

book.html_converter.element__GT_call.cljs$lang$maxFixedArity = 2;

/**
 * Convert an HTML fragment (containing just one tag) into a corresponding Dom cljs.
 * 
 *   Options is a map that can contain:
 * 
 *   - `ns-alias`: The primary DOM namespace alias to use.  If not set, the calls will not be namespaced.
 *   - `keep-empty-attrs?`: Boolean (default false). Output (dom/p {} ...) vs (dom/p ...).
 *   - `entity-ns`: String (defaults to "ent"). When named HTML entities are found they are converted to the Fulcro
 *  HTML entity ns symbols that stand for the correct unicode (e.g. "&quot;" -> `ent/quot`). This is the ns alias
 *  for those.
 *   - `ignore-entities?`: Boolean (default false). If true, entities in strings will not be touched.
 *   
 */
book.html_converter.html__GT_clj_dom = (function book$html_converter$html__GT_clj_dom(var_args){
var G__88097 = arguments.length;
switch (G__88097) {
case 2:
return book.html_converter.html__GT_clj_dom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return book.html_converter.html__GT_clj_dom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

book.html_converter.html__GT_clj_dom.cljs$core$IFn$_invoke$arity$2 = (function (html_fragment,options){
var hiccup_list = cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,hickory.core.parse_fragment(html_fragment));
var options__$1 = (function (){var G__88098 = options;
if((!(cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"entity-ns","entity-ns",1894323228))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__88098,new cljs.core.Keyword(null,"entity-ns","entity-ns",1894323228),"ent");
} else {
return G__88098;
}
})();
var result = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (hiccup_list,options__$1){
return (function (e){
return book.html_converter.element__GT_call.cljs$core$IFn$_invoke$arity$2(e,options__$1);
});})(hiccup_list,options__$1))
,hiccup_list);
if(((1) < cljs.core.count(result))){
return cljs.core.vec(result);
} else {
return cljs.core.first(result);
}
});

book.html_converter.html__GT_clj_dom.cljs$core$IFn$_invoke$arity$1 = (function (html_fragment){
return book.html_converter.html__GT_clj_dom.cljs$core$IFn$_invoke$arity$2(html_fragment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns-alias","ns-alias",1705921737),"dom"], null));
});

book.html_converter.html__GT_clj_dom.cljs$lang$maxFixedArity = 2;

/**
 * 
 */
book.html_converter.convert = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.html-converter","convert","book.html-converter/convert",1981288266,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.html-converter","convert","book.html-converter/convert",1981288266,null),(function (fulcro_mutation_env_symbol){
var p = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (p){
return (function book$html_converter$action(p__88099){
var map__88100 = p__88099;
var map__88100__$1 = (((((!((map__88100 == null))))?(((((map__88100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88100):map__88100);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88100__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var html_88146 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"conv","conv",984927890),new cljs.core.Keyword(null,"html","html",-998796897)], null));
var cljs_88147__$1 = book.html_converter.html__GT_clj_dom.cljs$core$IFn$_invoke$arity$1(html_88146);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"conv","conv",984927890),new cljs.core.Keyword(null,"cljs","cljs",1492417629)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),cljs_88147__$1], null));

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

var options__72617__auto___88149 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$html_converter$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),"<div id=\"3\" class=\"b\"><p>Paragraph</p></div>",new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.List.EMPTY], null)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$html_converter$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"html","html",-998796897)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$html_converter$ident_STAR_(this$,p__88104){
var map__88106 = p__88104;
var map__88106__$1 = (((((!((map__88106 == null))))?(((((map__88106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88106):map__88106);
var html = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88106__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var cljs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88106__$1,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"conv","conv",984927890)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$html_converter$render_HTMLConverter(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88108 = com.fulcrologic.fulcro.components.props(this$);
var map__88108__$1 = (((((!((map__88108 == null))))?(((((map__88108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88108):map__88108);
var html = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88108__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var cljs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88108__$1,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": ""}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(80),new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__88108,map__88108__$1,html,cljs__$1){
return (function (evt){
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"html","html",-998796897),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),evt], 0));
});})(map__88108,map__88108__$1,html,cljs__$1))
,new cljs.core.Keyword(null,"value","value",305978217),html], null)], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__88108,map__88108__$1,html,cljs__$1){
return (function (evt){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.html-converter","convert","book.html-converter/convert",1981288266,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(map__88108,map__88108__$1,html,cljs__$1))
], null),"Convert"], null),new cljs.core.Keyword(null,".c-button",".c-button",1184199228))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["pre",({}),com.fulcrologic.fulcro.components.force_children((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__88112_88150 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__88113_88151 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__88114_88152 = true;
var _STAR_print_fn_STAR__temp_val__88115_88153 = ((function (_STAR_print_newline_STAR__orig_val__88112_88150,_STAR_print_fn_STAR__orig_val__88113_88151,_STAR_print_newline_STAR__temp_val__88114_88152,sb__4661__auto__,map__88108,map__88108__$1,html,cljs__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__88112_88150,_STAR_print_fn_STAR__orig_val__88113_88151,_STAR_print_newline_STAR__temp_val__88114_88152,sb__4661__auto__,map__88108,map__88108__$1,html,cljs__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__88114_88152;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__88115_88153;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs__$1));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__88113_88151;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__88112_88150;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})())]))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.html_converter !== 'undefined') && (typeof book.html_converter.HTMLConverter !== 'undefined')){
} else {
book.html_converter.HTMLConverter = ((function (options__72617__auto___88149){
return (function book$html_converter$HTMLConverter(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88149,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88154)){
var init_state__72620__auto___88155 = temp__5733__auto___88154;
this__72619__auto__.state = (function (){var obj88117 = ({"fulcro$state":(function (){var G__88118 = this__72619__auto__;
var G__88119 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88155.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88155.cljs$core$IFn$_invoke$arity$2(G__88118,G__88119) : init_state__72620__auto___88155.call(null,G__88118,G__88119));
})()});
return obj88117;
})();
} else {
this__72619__auto__.state = (function (){var obj88121 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88121;
})();
}

return null;
});})(options__72617__auto___88149))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.html_converter.HTMLConverter,new cljs.core.Keyword("book.html-converter","HTMLConverter","book.html-converter/HTMLConverter",-29827182),options__72617__auto___88149);
book.html_converter.ui_html_convert = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.html_converter.HTMLConverter);

var options__72617__auto___88157 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$html_converter$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"converter","converter",-34185411),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"converter","converter",-34185411),book.html_converter.HTMLConverter], null),params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$html_converter$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"converter","converter",-34185411),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.html_converter.HTMLConverter)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$html_converter$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88122 = com.fulcrologic.fulcro.components.props(this$);
var map__88122__$1 = (((((!((map__88122 == null))))?(((((map__88122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88122):map__88122);
var converter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88122__$1,new cljs.core.Keyword(null,"converter","converter",-34185411));
return (book.html_converter.ui_html_convert.cljs$core$IFn$_invoke$arity$1 ? book.html_converter.ui_html_convert.cljs$core$IFn$_invoke$arity$1(converter) : book.html_converter.ui_html_convert.call(null,converter));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.html_converter !== 'undefined') && (typeof book.html_converter.Root !== 'undefined')){
} else {
book.html_converter.Root = ((function (options__72617__auto___88157){
return (function book$html_converter$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___88158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___88157,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___88158)){
var init_state__72620__auto___88159 = temp__5733__auto___88158;
this__72619__auto__.state = (function (){var obj88127 = ({"fulcro$state":(function (){var G__88128 = this__72619__auto__;
var G__88129 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___88159.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___88159.cljs$core$IFn$_invoke$arity$2(G__88128,G__88129) : init_state__72620__auto___88159.call(null,G__88128,G__88129));
})()});
return obj88127;
})();
} else {
this__72619__auto__.state = (function (){var obj88131 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj88131;
})();
}

return null;
});})(options__72617__auto___88157))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.html_converter.Root,new cljs.core.Keyword("book.html-converter","Root","book.html-converter/Root",1454312637),options__72617__auto___88157);

//# sourceMappingURL=book.html_converter.js.map
