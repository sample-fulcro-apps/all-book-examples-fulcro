goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__41033){
var vec__41034 = p__41033;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41034,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__41043 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41043,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41043,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41043,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__41048 = arguments.length;
switch (G__41048) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__41051_41120 = clojure.data.equality_partition;
var G__41052_41121 = "null";
var G__41053_41122 = ((function (G__41051_41120,G__41052_41121){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__41051_41120,G__41052_41121))
;
goog.object.set(G__41051_41120,G__41052_41121,G__41053_41122);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__41054_41123 = clojure.data.equality_partition;
var G__41055_41124 = "string";
var G__41056_41125 = ((function (G__41054_41123,G__41055_41124){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__41054_41123,G__41055_41124))
;
goog.object.set(G__41054_41123,G__41055_41124,G__41056_41125);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__41061_41127 = clojure.data.equality_partition;
var G__41062_41128 = "number";
var G__41063_41129 = ((function (G__41061_41127,G__41062_41128){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__41061_41127,G__41062_41128))
;
goog.object.set(G__41061_41127,G__41062_41128,G__41063_41129);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__41064_41130 = clojure.data.equality_partition;
var G__41065_41131 = "array";
var G__41066_41132 = ((function (G__41064_41130,G__41065_41131){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__41064_41130,G__41065_41131))
;
goog.object.set(G__41064_41130,G__41065_41131,G__41066_41132);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__41067_41135 = clojure.data.equality_partition;
var G__41068_41136 = "function";
var G__41069_41137 = ((function (G__41067_41135,G__41068_41136){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__41067_41135,G__41068_41136))
;
goog.object.set(G__41067_41135,G__41068_41136,G__41069_41137);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__41070_41139 = clojure.data.equality_partition;
var G__41071_41140 = "boolean";
var G__41072_41141 = ((function (G__41070_41139,G__41071_41140){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__41070_41139,G__41071_41140))
;
goog.object.set(G__41070_41139,G__41071_41140,G__41072_41141);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__41073_41142 = clojure.data.equality_partition;
var G__41074_41143 = "_";
var G__41075_41144 = ((function (G__41073_41142,G__41074_41143){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__41073_41142,G__41074_41143))
;
goog.object.set(G__41073_41142,G__41074_41143,G__41075_41144);
goog.object.set(clojure.data.Diff,"null",true);

var G__41080_41148 = clojure.data.diff_similar;
var G__41081_41149 = "null";
var G__41082_41150 = ((function (G__41080_41148,G__41081_41149){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__41080_41148,G__41081_41149))
;
goog.object.set(G__41080_41148,G__41081_41149,G__41082_41150);

goog.object.set(clojure.data.Diff,"string",true);

var G__41083_41151 = clojure.data.diff_similar;
var G__41084_41152 = "string";
var G__41085_41153 = ((function (G__41083_41151,G__41084_41152){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__41083_41151,G__41084_41152))
;
goog.object.set(G__41083_41151,G__41084_41152,G__41085_41153);

goog.object.set(clojure.data.Diff,"number",true);

var G__41088_41154 = clojure.data.diff_similar;
var G__41089_41155 = "number";
var G__41090_41156 = ((function (G__41088_41154,G__41089_41155){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__41088_41154,G__41089_41155))
;
goog.object.set(G__41088_41154,G__41089_41155,G__41090_41156);

goog.object.set(clojure.data.Diff,"array",true);

var G__41104_41157 = clojure.data.diff_similar;
var G__41105_41158 = "array";
var G__41106_41159 = ((function (G__41104_41157,G__41105_41158){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__41104_41157,G__41105_41158))
;
goog.object.set(G__41104_41157,G__41105_41158,G__41106_41159);

goog.object.set(clojure.data.Diff,"function",true);

var G__41107_41165 = clojure.data.diff_similar;
var G__41108_41166 = "function";
var G__41109_41167 = ((function (G__41107_41165,G__41108_41166){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__41107_41165,G__41108_41166))
;
goog.object.set(G__41107_41165,G__41108_41166,G__41109_41167);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__41110_41178 = clojure.data.diff_similar;
var G__41111_41179 = "boolean";
var G__41112_41180 = ((function (G__41110_41178,G__41111_41179){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__41110_41178,G__41111_41179))
;
goog.object.set(G__41110_41178,G__41111_41179,G__41112_41180);

goog.object.set(clojure.data.Diff,"_",true);

var G__41113_41181 = clojure.data.diff_similar;
var G__41114_41182 = "_";
var G__41115_41183 = ((function (G__41113_41181,G__41114_41182){
return (function (a,b){
var fexpr__41117 = (function (){var G__41118 = clojure.data.equality_partition(a);
var G__41118__$1 = (((G__41118 instanceof cljs.core.Keyword))?G__41118.fqn:null);
switch (G__41118__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41118__$1)].join('')));

}
})();
return (fexpr__41117.cljs$core$IFn$_invoke$arity$2 ? fexpr__41117.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__41117.call(null,a,b));
});})(G__41113_41181,G__41114_41182))
;
goog.object.set(G__41113_41181,G__41114_41182,G__41115_41183);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
