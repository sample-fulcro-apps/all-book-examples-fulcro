goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53206){
var map__53207 = p__53206;
var map__53207__$1 = (((((!((map__53207 == null))))?(((((map__53207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53207):map__53207);
var m = map__53207__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53207__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53207__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53227_53410 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53228_53411 = null;
var count__53229_53412 = (0);
var i__53230_53413 = (0);
while(true){
if((i__53230_53413 < count__53229_53412)){
var f_53421 = chunk__53228_53411.cljs$core$IIndexed$_nth$arity$2(null,i__53230_53413);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53421], 0));


var G__53435 = seq__53227_53410;
var G__53436 = chunk__53228_53411;
var G__53437 = count__53229_53412;
var G__53438 = (i__53230_53413 + (1));
seq__53227_53410 = G__53435;
chunk__53228_53411 = G__53436;
count__53229_53412 = G__53437;
i__53230_53413 = G__53438;
continue;
} else {
var temp__5735__auto___53439 = cljs.core.seq(seq__53227_53410);
if(temp__5735__auto___53439){
var seq__53227_53440__$1 = temp__5735__auto___53439;
if(cljs.core.chunked_seq_QMARK_(seq__53227_53440__$1)){
var c__4550__auto___53441 = cljs.core.chunk_first(seq__53227_53440__$1);
var G__53442 = cljs.core.chunk_rest(seq__53227_53440__$1);
var G__53443 = c__4550__auto___53441;
var G__53444 = cljs.core.count(c__4550__auto___53441);
var G__53445 = (0);
seq__53227_53410 = G__53442;
chunk__53228_53411 = G__53443;
count__53229_53412 = G__53444;
i__53230_53413 = G__53445;
continue;
} else {
var f_53446 = cljs.core.first(seq__53227_53440__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53446], 0));


var G__53447 = cljs.core.next(seq__53227_53440__$1);
var G__53448 = null;
var G__53449 = (0);
var G__53450 = (0);
seq__53227_53410 = G__53447;
chunk__53228_53411 = G__53448;
count__53229_53412 = G__53449;
i__53230_53413 = G__53450;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53452 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53452], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53452)))?cljs.core.second(arglists_53452):arglists_53452)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53237_53455 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53238_53456 = null;
var count__53239_53457 = (0);
var i__53240_53458 = (0);
while(true){
if((i__53240_53458 < count__53239_53457)){
var vec__53255_53459 = chunk__53238_53456.cljs$core$IIndexed$_nth$arity$2(null,i__53240_53458);
var name_53460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53255_53459,(0),null);
var map__53258_53461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53255_53459,(1),null);
var map__53258_53462__$1 = (((((!((map__53258_53461 == null))))?(((((map__53258_53461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53258_53461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53258_53461):map__53258_53461);
var doc_53463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53258_53462__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53258_53462__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53460], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53464], 0));

if(cljs.core.truth_(doc_53463)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53463], 0));
} else {
}


var G__53469 = seq__53237_53455;
var G__53470 = chunk__53238_53456;
var G__53471 = count__53239_53457;
var G__53472 = (i__53240_53458 + (1));
seq__53237_53455 = G__53469;
chunk__53238_53456 = G__53470;
count__53239_53457 = G__53471;
i__53240_53458 = G__53472;
continue;
} else {
var temp__5735__auto___53473 = cljs.core.seq(seq__53237_53455);
if(temp__5735__auto___53473){
var seq__53237_53474__$1 = temp__5735__auto___53473;
if(cljs.core.chunked_seq_QMARK_(seq__53237_53474__$1)){
var c__4550__auto___53475 = cljs.core.chunk_first(seq__53237_53474__$1);
var G__53476 = cljs.core.chunk_rest(seq__53237_53474__$1);
var G__53477 = c__4550__auto___53475;
var G__53478 = cljs.core.count(c__4550__auto___53475);
var G__53479 = (0);
seq__53237_53455 = G__53476;
chunk__53238_53456 = G__53477;
count__53239_53457 = G__53478;
i__53240_53458 = G__53479;
continue;
} else {
var vec__53262_53480 = cljs.core.first(seq__53237_53474__$1);
var name_53481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53262_53480,(0),null);
var map__53265_53482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53262_53480,(1),null);
var map__53265_53483__$1 = (((((!((map__53265_53482 == null))))?(((((map__53265_53482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53265_53482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53265_53482):map__53265_53482);
var doc_53484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53265_53483__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53265_53483__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53481], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53485], 0));

if(cljs.core.truth_(doc_53484)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53484], 0));
} else {
}


var G__53489 = cljs.core.next(seq__53237_53474__$1);
var G__53490 = null;
var G__53491 = (0);
var G__53492 = (0);
seq__53237_53455 = G__53489;
chunk__53238_53456 = G__53490;
count__53239_53457 = G__53491;
i__53240_53458 = G__53492;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__53270 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53272 = null;
var count__53273 = (0);
var i__53274 = (0);
while(true){
if((i__53274 < count__53273)){
var role = chunk__53272.cljs$core$IIndexed$_nth$arity$2(null,i__53274);
var temp__5735__auto___53496__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53496__$1)){
var spec_53497 = temp__5735__auto___53496__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53497)], 0));
} else {
}


var G__53500 = seq__53270;
var G__53501 = chunk__53272;
var G__53502 = count__53273;
var G__53503 = (i__53274 + (1));
seq__53270 = G__53500;
chunk__53272 = G__53501;
count__53273 = G__53502;
i__53274 = G__53503;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__53270);
if(temp__5735__auto____$1){
var seq__53270__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53270__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53270__$1);
var G__53504 = cljs.core.chunk_rest(seq__53270__$1);
var G__53505 = c__4550__auto__;
var G__53506 = cljs.core.count(c__4550__auto__);
var G__53507 = (0);
seq__53270 = G__53504;
chunk__53272 = G__53505;
count__53273 = G__53506;
i__53274 = G__53507;
continue;
} else {
var role = cljs.core.first(seq__53270__$1);
var temp__5735__auto___53509__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53509__$2)){
var spec_53510 = temp__5735__auto___53509__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53510)], 0));
} else {
}


var G__53511 = cljs.core.next(seq__53270__$1);
var G__53512 = null;
var G__53513 = (0);
var G__53514 = (0);
seq__53270 = G__53511;
chunk__53272 = G__53512;
count__53273 = G__53513;
i__53274 = G__53514;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__53516 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53517 = cljs.core.ex_cause(t);
via = G__53516;
t = G__53517;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__53320 = datafied_throwable;
var map__53320__$1 = (((((!((map__53320 == null))))?(((((map__53320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53320):map__53320);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53320__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53320__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53320__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53321 = cljs.core.last(via);
var map__53321__$1 = (((((!((map__53321 == null))))?(((((map__53321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53321):map__53321);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53321__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53321__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53321__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53322 = data;
var map__53322__$1 = (((((!((map__53322 == null))))?(((((map__53322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53322):map__53322);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53322__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53322__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53322__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53323 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53323__$1 = (((((!((map__53323 == null))))?(((((map__53323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53323):map__53323);
var top_data = map__53323__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53323__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53339 = phase;
var G__53339__$1 = (((G__53339 instanceof cljs.core.Keyword))?G__53339.fqn:null);
switch (G__53339__$1) {
case "read-source":
var map__53340 = data;
var map__53340__$1 = (((((!((map__53340 == null))))?(((((map__53340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53340):map__53340);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53340__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53340__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53343 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53343__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53343,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53343);
var G__53343__$2 = (cljs.core.truth_((function (){var fexpr__53344 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53344.cljs$core$IFn$_invoke$arity$1 ? fexpr__53344.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53344.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53343__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53343__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53343__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53343__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53345 = top_data;
var G__53345__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53345,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53345);
var G__53345__$2 = (cljs.core.truth_((function (){var fexpr__53346 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53346.cljs$core$IFn$_invoke$arity$1 ? fexpr__53346.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53346.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53345__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53345__$1);
var G__53345__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53345__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53345__$2);
var G__53345__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53345__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53345__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53345__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53345__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53347 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53347,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53347,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53347,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53347,(3),null);
var G__53351 = top_data;
var G__53351__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53351,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53351);
var G__53351__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53351__$1);
var G__53351__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53351__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53351__$2);
var G__53351__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53351__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53351__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53351__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53351__$4;
}

break;
case "execution":
var vec__53352 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53352,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53352,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53352,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53352,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__53352,source__$1,method,file,line,G__53339,G__53339__$1,map__53320,map__53320__$1,via,trace,phase,map__53321,map__53321__$1,type,message,data,map__53322,map__53322__$1,problems,fn,caller,map__53323,map__53323__$1,top_data,source){
return (function (p1__53317_SHARP_){
var or__4131__auto__ = (p1__53317_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__53356 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53356.cljs$core$IFn$_invoke$arity$1 ? fexpr__53356.cljs$core$IFn$_invoke$arity$1(p1__53317_SHARP_) : fexpr__53356.call(null,p1__53317_SHARP_));
}
});})(vec__53352,source__$1,method,file,line,G__53339,G__53339__$1,map__53320,map__53320__$1,via,trace,phase,map__53321,map__53321__$1,type,message,data,map__53322,map__53322__$1,problems,fn,caller,map__53323,map__53323__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__53357 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53357__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53357,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53357);
var G__53357__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53357__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53357__$1);
var G__53357__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53357__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53357__$2);
var G__53357__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53357__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53357__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53357__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53357__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53339__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53363){
var map__53364 = p__53363;
var map__53364__$1 = (((((!((map__53364 == null))))?(((((map__53364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53364):map__53364);
var triage_data = map__53364__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53364__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53364__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53364__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53364__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53364__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53364__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53364__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53364__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__53366 = phase;
var G__53366__$1 = (((G__53366 instanceof cljs.core.Keyword))?G__53366.fqn:null);
switch (G__53366__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53370 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53371 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53372 = loc;
var G__53373 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53374_53620 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53375_53621 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53376_53622 = true;
var _STAR_print_fn_STAR__temp_val__53377_53623 = ((function (_STAR_print_newline_STAR__orig_val__53374_53620,_STAR_print_fn_STAR__orig_val__53375_53621,_STAR_print_newline_STAR__temp_val__53376_53622,sb__4661__auto__,G__53370,G__53371,G__53372,G__53366,G__53366__$1,loc,class_name,simple_class,cause_type,format,map__53364,map__53364__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__53374_53620,_STAR_print_fn_STAR__orig_val__53375_53621,_STAR_print_newline_STAR__temp_val__53376_53622,sb__4661__auto__,G__53370,G__53371,G__53372,G__53366,G__53366__$1,loc,class_name,simple_class,cause_type,format,map__53364,map__53364__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53376_53622;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53377_53623;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__53374_53620,_STAR_print_fn_STAR__orig_val__53375_53621,_STAR_print_newline_STAR__temp_val__53376_53622,_STAR_print_fn_STAR__temp_val__53377_53623,sb__4661__auto__,G__53370,G__53371,G__53372,G__53366,G__53366__$1,loc,class_name,simple_class,cause_type,format,map__53364,map__53364__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__53374_53620,_STAR_print_fn_STAR__orig_val__53375_53621,_STAR_print_newline_STAR__temp_val__53376_53622,_STAR_print_fn_STAR__temp_val__53377_53623,sb__4661__auto__,G__53370,G__53371,G__53372,G__53366,G__53366__$1,loc,class_name,simple_class,cause_type,format,map__53364,map__53364__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__53361_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53361_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__53374_53620,_STAR_print_fn_STAR__orig_val__53375_53621,_STAR_print_newline_STAR__temp_val__53376_53622,_STAR_print_fn_STAR__temp_val__53377_53623,sb__4661__auto__,G__53370,G__53371,G__53372,G__53366,G__53366__$1,loc,class_name,simple_class,cause_type,format,map__53364,map__53364__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__53374_53620,_STAR_print_fn_STAR__orig_val__53375_53621,_STAR_print_newline_STAR__temp_val__53376_53622,_STAR_print_fn_STAR__temp_val__53377_53623,sb__4661__auto__,G__53370,G__53371,G__53372,G__53366,G__53366__$1,loc,class_name,simple_class,cause_type,format,map__53364,map__53364__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53375_53621;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53374_53620;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53370,G__53371,G__53372,G__53373) : format.call(null,G__53370,G__53371,G__53372,G__53373));

break;
case "macroexpansion":
var G__53378 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53379 = cause_type;
var G__53380 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53381 = loc;
var G__53382 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53378,G__53379,G__53380,G__53381,G__53382) : format.call(null,G__53378,G__53379,G__53380,G__53381,G__53382));

break;
case "compile-syntax-check":
var G__53383 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53384 = cause_type;
var G__53385 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53386 = loc;
var G__53387 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53383,G__53384,G__53385,G__53386,G__53387) : format.call(null,G__53383,G__53384,G__53385,G__53386,G__53387));

break;
case "compilation":
var G__53388 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53389 = cause_type;
var G__53390 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53391 = loc;
var G__53392 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53388,G__53389,G__53390,G__53391,G__53392) : format.call(null,G__53388,G__53389,G__53390,G__53391,G__53392));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53393 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53394 = symbol;
var G__53395 = loc;
var G__53396 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53397_53628 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53398_53629 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53399_53630 = true;
var _STAR_print_fn_STAR__temp_val__53400_53631 = ((function (_STAR_print_newline_STAR__orig_val__53397_53628,_STAR_print_fn_STAR__orig_val__53398_53629,_STAR_print_newline_STAR__temp_val__53399_53630,sb__4661__auto__,G__53393,G__53394,G__53395,G__53366,G__53366__$1,loc,class_name,simple_class,cause_type,format,map__53364,map__53364__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__53397_53628,_STAR_print_fn_STAR__orig_val__53398_53629,_STAR_print_newline_STAR__temp_val__53399_53630,sb__4661__auto__,G__53393,G__53394,G__53395,G__53366,G__53366__$1,loc,class_name,simple_class,cause_type,format,map__53364,map__53364__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53399_53630;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53400_53631;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__53397_53628,_STAR_print_fn_STAR__orig_val__53398_53629,_STAR_print_newline_STAR__temp_val__53399_53630,_STAR_print_fn_STAR__temp_val__53400_53631,sb__4661__auto__,G__53393,G__53394,G__53395,G__53366,G__53366__$1,loc,class_name,simple_class,cause_type,format,map__53364,map__53364__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__53397_53628,_STAR_print_fn_STAR__orig_val__53398_53629,_STAR_print_newline_STAR__temp_val__53399_53630,_STAR_print_fn_STAR__temp_val__53400_53631,sb__4661__auto__,G__53393,G__53394,G__53395,G__53366,G__53366__$1,loc,class_name,simple_class,cause_type,format,map__53364,map__53364__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__53362_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53362_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__53397_53628,_STAR_print_fn_STAR__orig_val__53398_53629,_STAR_print_newline_STAR__temp_val__53399_53630,_STAR_print_fn_STAR__temp_val__53400_53631,sb__4661__auto__,G__53393,G__53394,G__53395,G__53366,G__53366__$1,loc,class_name,simple_class,cause_type,format,map__53364,map__53364__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__53397_53628,_STAR_print_fn_STAR__orig_val__53398_53629,_STAR_print_newline_STAR__temp_val__53399_53630,_STAR_print_fn_STAR__temp_val__53400_53631,sb__4661__auto__,G__53393,G__53394,G__53395,G__53366,G__53366__$1,loc,class_name,simple_class,cause_type,format,map__53364,map__53364__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53398_53629;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53397_53628;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53393,G__53394,G__53395,G__53396) : format.call(null,G__53393,G__53394,G__53395,G__53396));
} else {
var G__53401 = "Execution error%s at %s(%s).\n%s\n";
var G__53402 = cause_type;
var G__53403 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53404 = loc;
var G__53405 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53401,G__53402,G__53403,G__53404,G__53405) : format.call(null,G__53401,G__53402,G__53403,G__53404,G__53405));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53366__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
