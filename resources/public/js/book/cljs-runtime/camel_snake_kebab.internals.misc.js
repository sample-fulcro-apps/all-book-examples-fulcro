goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87382 = arguments.length;
var i__4731__auto___87383 = (0);
while(true){
if((i__4731__auto___87383 < len__4730__auto___87382)){
args__4736__auto__.push((arguments[i__4731__auto___87383]));

var G__87384 = (i__4731__auto___87383 + (1));
i__4731__auto___87383 = G__87384;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__87369){
var map__87370 = p__87369;
var map__87370__$1 = (((((!((map__87370 == null))))?(((((map__87370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87370):map__87370);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__87370__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__87372 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__87373 = cljs.core.seq(vec__87372);
var first__87374 = cljs.core.first(seq__87373);
var seq__87373__$1 = cljs.core.next(seq__87373);
var first = first__87374;
var rest = seq__87373__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq87364){
var G__87365 = cljs.core.first(seq87364);
var seq87364__$1 = cljs.core.next(seq87364);
var G__87366 = cljs.core.first(seq87364__$1);
var seq87364__$2 = cljs.core.next(seq87364__$1);
var G__87367 = cljs.core.first(seq87364__$2);
var seq87364__$3 = cljs.core.next(seq87364__$2);
var G__87368 = cljs.core.first(seq87364__$3);
var seq87364__$4 = cljs.core.next(seq87364__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87365,G__87366,G__87367,G__87368,seq87364__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4131__auto__ = (function (){var G__87379 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__87379) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__87379));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
