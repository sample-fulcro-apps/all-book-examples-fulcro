goog.provide('com.fulcrologic.fulcro.algorithms.merge');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('com.fulcrologic.fulcro.algorithms.normalize');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.algorithms.do_not_use');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
/**
 * Removes an ident, if it exists, from a list of idents in app state. This
 *   function is safe to use within mutations.
 */
com.fulcrologic.fulcro.algorithms.merge.remove_ident_STAR_ = (function com$fulcrologic$fulcro$algorithms$merge$remove_ident_STAR_(state_map,ident,path_to_idents){
if(cljs.core.map_QMARK_(state_map)){
} else {
throw (new Error("Assert failed: (map? state-map)"));
}

var new_list = (function (old_list){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73168_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident,p1__73168_SHARP_);
}),old_list));
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,path_to_idents,new_list);
});
/**
 * Check the given keyword to see if it is in the :ui namespace.
 */
com.fulcrologic.fulcro.algorithms.merge.is_ui_query_fragment_QMARK_ = (function com$fulcrologic$fulcro$algorithms$merge$is_ui_query_fragment_QMARK_(kw){
var kw__$1 = ((cljs.core.map_QMARK_(kw))?cljs.core.first(cljs.core.keys(kw)):kw);
if((kw__$1 instanceof cljs.core.Keyword)){
var G__73169 = kw__$1;
var G__73169__$1 = (((G__73169 == null))?null:cljs.core.namespace(G__73169));
if((G__73169__$1 == null)){
return null;
} else {
return cljs.core.re_find(/^ui(?:\.|$)/,G__73169__$1);
}
} else {
return null;
}
});
/**
 * Returns true if the `k` in `props` is the sweep-merge not-found marker. This marker appears
 *   *during* merge, and can affect `:pre-merge` processing, since the data-tree will have these
 *   markers when the given data is missing.
 */
com.fulcrologic.fulcro.algorithms.merge.not_found_QMARK_ = (function com$fulcrologic$fulcro$algorithms$merge$not_found_QMARK_(props,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k));
});
/**
 * Given x, return x value unless it's ::not-found (the mark/sweep missing marker), in which case it returns nil.
 * 
 *   This is useful when you are pre-processing a tree that has been marked for missing data sweep (see `mark-missing`),
 *   but has not yet been swept. This is basically the same as a `nil?` check in this circumstance since the given
 *   value will be removed after the final sweep.
 */
com.fulcrologic.fulcro.algorithms.merge.nilify_not_found = (function com$fulcrologic$fulcro$algorithms$merge$nilify_not_found(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437))){
return null;
} else {
return x;
}
});
/**
 * Returns `data` with meta-data that marks it as a leaf in the result.
 */
com.fulcrologic.fulcro.algorithms.merge.as_leaf = (function com$fulcrologic$fulcro$algorithms$merge$as_leaf(data){
if(cljs.core.coll_QMARK_(data)){
return cljs.core.with_meta(data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro","leaf","fulcro/leaf",-2094500471),true], null));
} else {
return data;
}
});
/**
 * Returns true iff the given data is marked as a leaf in the result (according to the query). Requires pre-marking.
 */
com.fulcrologic.fulcro.algorithms.merge.leaf_QMARK_ = (function com$fulcrologic$fulcro$algorithms$merge$leaf_QMARK_(data){
return (((!(cljs.core.coll_QMARK_(data)))) || (cljs.core.empty_QMARK_(data)) || (((cljs.core.coll_QMARK_(data)) && (cljs.core.boolean$(new cljs.core.Keyword("fulcro","leaf","fulcro/leaf",-2094500471).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data)))))));
});
/**
 * Turn a union query into a query that attempts to encompass all possible things that might be queried.
 */
com.fulcrologic.fulcro.algorithms.merge.union__GT_query = (function com$fulcrologic$fulcro$algorithms$merge$union__GT_query(union_query){
return cljs.core.vec(cljs.core.set(cljs.core.flatten(cljs.core.vals(union_query))));
});
/**
 * Recursively walk the query and response marking anything that was *asked for* in the query but is *not* in the response as missing.
 *   The sweep-merge process (which happens later in the plumbing) uses these markers as indicators to remove any existing
 *   data in the target of the merge (i.e. your state database).
 * 
 *   The naive approach to data merging (even recursive) would fail to remove such data.
 * 
 *   Returns the result with missing markers in place (which are then used/removed in a later stage).
 * 
 *   See the Developer Guide section on Fulcro's merge process for more information.
 */
com.fulcrologic.fulcro.algorithms.merge.mark_missing = (function com$fulcrologic$fulcro$algorithms$merge$mark_missing(result,query){
var missing_entity = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (missing_entity){
return (function (result__$1,element){
var element__$1 = ((cljs.core.list_QMARK_(element))?cljs.core.first(element):element
);
var result_key = (((element__$1 instanceof cljs.core.Keyword))?element__$1:((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(element__$1))?com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1):null
));
var result_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,result_key);
if(((((edn_query_language.core.ident_QMARK_(result_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(result_key))))) || (((edn_query_language.core.ident_QMARK_(element__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(element__$1))))))){
return result__$1;
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.merge.is_ui_query_fragment_QMARK_(result_key))){
return result__$1;
} else {
if((((element__$1 instanceof cljs.core.Keyword)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,element__$1) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,element__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437));
} else {
if(((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(element__$1)) && (((typeof com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1) === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1))))))){
var k = com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1);
var result_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,k);
if((result_SINGLEQUOTE_ == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,k,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437));
} else {
if(cljs.core.vector_QMARK_(result_SINGLEQUOTE_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (k,result_SINGLEQUOTE_,element__$1,result_key,result_value,missing_entity){
return (function (item){
return (com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2(item,query) : com.fulcrologic.fulcro.algorithms.merge.mark_missing.call(null,item,query));
});})(k,result_SINGLEQUOTE_,element__$1,result_key,result_value,missing_entity))
,result_SINGLEQUOTE_));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,k,(com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2(result_SINGLEQUOTE_,query) : com.fulcrologic.fulcro.algorithms.merge.mark_missing.call(null,result_SINGLEQUOTE_,query)));

}
}
} else {
if(((edn_query_language.core.ident_QMARK_(element__$1)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,element__$1) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,element__$1,missing_entity);
} else {
if(com.fulcrologic.fulcro.algorithms.do_not_use.union_QMARK_(element__$1)){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437));
var to_one_QMARK_ = cljs.core.map_QMARK_(v);
var to_many_QMARK_ = cljs.core.vector_QMARK_(v);
var wide_query = com.fulcrologic.fulcro.algorithms.merge.union__GT_query(com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1));
if(to_one_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,(com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2(v,wide_query) : com.fulcrologic.fulcro.algorithms.merge.mark_missing.call(null,v,wide_query)));
} else {
if(to_many_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,to_one_QMARK_,to_many_QMARK_,wide_query,element__$1,result_key,result_value,missing_entity){
return (function (i){
return (com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2(i,wide_query) : com.fulcrologic.fulcro.algorithms.merge.mark_missing.call(null,i,wide_query));
});})(v,to_one_QMARK_,to_many_QMARK_,wide_query,element__$1,result_key,result_value,missing_entity))
,v));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437));
} else {
return result__$1;

}
}
}
} else {
if(((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(element__$1)) && (edn_query_language.core.ident_QMARK_(com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1)) == null)))){
var mock_missing_object = (function (){var G__73170 = cljs.core.PersistentArrayMap.EMPTY;
var G__73171 = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1);
return (com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2(G__73170,G__73171) : com.fulcrologic.fulcro.algorithms.merge.mark_missing.call(null,G__73170,G__73171));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mock_missing_object,missing_entity], 0)));
} else {
if(((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(element__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),cljs.core.get.cljs$core$IFn$_invoke$arity$3(result__$1,com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437));
} else {
if(((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(element__$1)) && (cljs.core.vector_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (element__$1,result_key,result_value,missing_entity){
return (function (item){
var G__73172 = item;
var G__73173 = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1);
return (com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2(G__73172,G__73173) : com.fulcrologic.fulcro.algorithms.merge.mark_missing.call(null,G__73172,G__73173));
});})(element__$1,result_key,result_value,missing_entity))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1))));
} else {
if(((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(element__$1)) && (cljs.core.map_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1),(function (){var G__73174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1));
var G__73175 = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1);
return (com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2(G__73174,G__73175) : com.fulcrologic.fulcro.algorithms.merge.mark_missing.call(null,G__73174,G__73175));
})());
} else {
if(((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(element__$1)) && (cljs.core.vector_QMARK_(com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1))) && ((!(((cljs.core.map_QMARK_(result_value)) || (cljs.core.vector_QMARK_(result_value)))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,(function (){var G__73176 = cljs.core.PersistentArrayMap.EMPTY;
var G__73177 = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1);
return (com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing.cljs$core$IFn$_invoke$arity$2(G__73176,G__73177) : com.fulcrologic.fulcro.algorithms.merge.mark_missing.call(null,G__73176,G__73177));
})());
} else {
if(cljs.core.truth_(result_key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,com.fulcrologic.fulcro.algorithms.merge.as_leaf);
} else {
return result__$1;

}
}
}
}
}
}
}
}
}
}
}
}
});})(missing_entity))
,result,query);
});
/**
 * Remove not-found keys from m (non-recursive). `m` can be a map (sweep the values) or vector (run sweep-one on each entry).
 */
com.fulcrologic.fulcro.algorithms.merge.sweep_one = (function com$fulcrologic$fulcro$algorithms$merge$sweep_one(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__73178){
var vec__73179 = p__73178;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73179,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tempids","tempids",1767509089),k)))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(m)),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.merge.sweep_one,m),cljs.core.meta(m));
} else {
return m;

}
}
});
/**
 * Remove all of the not-found keys (recursively) from m, stopping at marked leaves (if present). Requires `m`
 *   to have been pre-marked via `mark-missing`.
 */
com.fulcrologic.fulcro.algorithms.merge.sweep = (function com$fulcrologic$fulcro$algorithms$merge$sweep(m){
if(com.fulcrologic.fulcro.algorithms.merge.leaf_QMARK_(m)){
return com.fulcrologic.fulcro.algorithms.merge.sweep_one(m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__73182){
var vec__73183 = p__73182;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73183,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73183,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tempids","tempids",1767509089),k)))){
return acc;
} else {
if(((edn_query_language.core.ident_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),cljs.core.second(v))))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(com.fulcrologic.fulcro.algorithms.merge.sweep.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.merge.sweep.cljs$core$IFn$_invoke$arity$1(v) : com.fulcrologic.fulcro.algorithms.merge.sweep.call(null,v)));

}
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(m)),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.merge.sweep,m),cljs.core.meta(m));
} else {
return m;

}
}
}
});
/**
 * Do a recursive merge of source into target (both maps), but remove any target data that is marked as missing in the response.
 * 
 *   Requires that the `source` has been marked via `mark-missing`.
 * 
 *   The missing marker is generated in the source when something has been asked for in the query, but had no value in the
 *   response. This allows us to correctly remove 'empty' data from the database without accidentally removing something
 *   that may still exist on the server (in truth we don't know its status, since it wasn't asked for, but we leave
 *   it as our 'best guess').
 */
com.fulcrologic.fulcro.algorithms.merge.sweep_merge = (function com$fulcrologic$fulcro$algorithms$merge$sweep_merge(target,source){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__73186){
var vec__73187 = p__73186;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73187,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73187,(1),null);
var existing_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,key);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"tempids","tempids",1767509089))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437))))){
return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_value,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,key);
} else {
if(((edn_query_language.core.ident_QMARK_(new_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),cljs.core.second(new_value))))){
return acc;
} else {
if(com.fulcrologic.fulcro.algorithms.merge.leaf_QMARK_(new_value)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,com.fulcrologic.fulcro.algorithms.merge.sweep_one(new_value));
} else {
if(((cljs.core.map_QMARK_(existing_value)) && (cljs.core.map_QMARK_(new_value)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,key,com.fulcrologic.fulcro.algorithms.merge.sweep_merge,new_value);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,com.fulcrologic.fulcro.algorithms.merge.sweep(new_value));

}
}
}
}
}
}),target,source);
});
com.fulcrologic.fulcro.algorithms.merge.component_pre_merge = (function com$fulcrologic$fulcro$algorithms$merge$component_pre_merge(class$,query,state,data,p__73190){
var map__73191 = p__73190;
var map__73191__$1 = (((((!((map__73191 == null))))?(((((map__73191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73191):map__73191);
var remove_missing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73191__$1,new cljs.core.Keyword(null,"remove-missing?","remove-missing?",-2044119224));
if(com.fulcrologic.fulcro.components.has_pre_merge_QMARK_(class$)){
var entity = (function (){var G__73193 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,data);
if((G__73193 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,G__73193);
}
})();
var unmarked_data = (cljs.core.truth_(remove_missing_QMARK_)?com.fulcrologic.fulcro.algorithms.merge.sweep_merge(cljs.core.PersistentArrayMap.EMPTY,data):data);
var unmarked_result = com.fulcrologic.fulcro.components.pre_merge(class$,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),state,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724),entity,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582),unmarked_data,new cljs.core.Keyword(null,"query","query",-1288509510),query], null));
var result = (cljs.core.truth_(remove_missing_QMARK_)?com.fulcrologic.fulcro.algorithms.merge.mark_missing(unmarked_result,query):unmarked_result);
return result;
} else {
return data;
}
});
/**
 * Transform function that modifies data using component pre-merge hook.
 */
com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform = (function com$fulcrologic$fulcro$algorithms$merge$pre_merge_transform(var_args){
var G__73195 = arguments.length;
switch (G__73195) {
case 1:
return com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$1 = (function (state){
return com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$2 = (function (state,options){
return (function com$fulcrologic$fulcro$algorithms$merge$pre_merge_transform_internal(query,data){
var temp__5733__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
if(cljs.core.truth_(temp__5733__auto__)){
var class$ = temp__5733__auto__;
return com.fulcrologic.fulcro.algorithms.merge.component_pre_merge(class$,query,state,data,options);
} else {
return data;
}
});
});

com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$lang$maxFixedArity = 2;

/**
 * Merge all of the mutations that were joined with a query.
 * 
 *   The options, if supplied, can include:
 * 
 *   * `:remove-missing?`: (default false) If true then any items that appear in the `query` but not in the
 *   `data-tree` will be removed from `state` (if present).
 */
com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins = (function com$fulcrologic$fulcro$algorithms$merge$merge_mutation_joins(var_args){
var G__73197 = arguments.length;
switch (G__73197) {
case 3:
return com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$core$IFn$_invoke$arity$3 = (function (state,query,data_tree){
return com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$core$IFn$_invoke$arity$4(state,query,data_tree,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$core$IFn$_invoke$arity$4 = (function (state,query,data_tree,p__73198){
var map__73199 = p__73198;
var map__73199__$1 = (((((!((map__73199 == null))))?(((((map__73199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73199):map__73199);
var options = map__73199__$1;
var remove_missing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73199__$1,new cljs.core.Keyword(null,"remove-missing?","remove-missing?",-2044119224));
if(cljs.core.map_QMARK_(data_tree)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__73199,map__73199__$1,options,remove_missing_QMARK_){
return (function (updated_state,query_element){
var k = (function (){var and__4120__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.mutation_join_QMARK_(query_element);
if(and__4120__auto__){
return com.fulcrologic.fulcro.algorithms.do_not_use.join_key(query_element);
} else {
return and__4120__auto__;
}
})();
var subtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,k);
if(cljs.core.truth_((function (){var and__4120__auto__ = k;
if(cljs.core.truth_(and__4120__auto__)){
return subtree;
} else {
return and__4120__auto__;
}
})())){
var subquery = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(query_element);
var target = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(subquery));
var idnt = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","temporary-key","com.fulcrologic.fulcro.algorithms.merge/temporary-key",-1065335624);
var norm_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([idnt,subquery])], null);
var norm_tree = cljs.core.PersistentArrayMap.createAsIfByAssoc([idnt,subtree]);
var norm_tree_marked = (cljs.core.truth_(remove_missing_QMARK_)?com.fulcrologic.fulcro.algorithms.merge.mark_missing(norm_tree,norm_query):norm_tree);
var db = com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(norm_query,norm_tree_marked,true,com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$2(state,options));
var G__73201 = com.fulcrologic.fulcro.algorithms.merge.sweep_merge(updated_state,db);
var G__73201__$1 = (cljs.core.truth_(target)?com.fulcrologic.fulcro.algorithms.data_targeting.process_target.cljs$core$IFn$_invoke$arity$3(G__73201,idnt,target):G__73201);
if(cljs.core.not(target)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__73201__$1,db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idnt], 0));
} else {
return G__73201__$1;
}
} else {
return updated_state;
}
});})(map__73199,map__73199__$1,options,remove_missing_QMARK_))
,state,query);
} else {
return state;
}
});

com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$lang$maxFixedArity = 4;

com.fulcrologic.fulcro.algorithms.merge.merge_ident = (function com$fulcrologic$fulcro$algorithms$merge$merge_ident(app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.merge.sweep_one,cljs.core.merge),props);
});
com.fulcrologic.fulcro.algorithms.merge.sift_idents = (function com$fulcrologic$fulcro$algorithms$merge$sift_idents(res){
var map__73203 = cljs.core.group_by((function (p1__73202_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__73202_SHARP_));
}),res);
var map__73203__$1 = (((((!((map__73203 == null))))?(((((map__73203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73203):map__73203);
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73203__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73203__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Handle merging incoming data and sweep it of values that are marked missing. This function also ensures that raw
 * mutation join results are ignored (they must be merged via `merge-mutation-joins`).
 */
com.fulcrologic.fulcro.algorithms.merge.merge_tree = (function com$fulcrologic$fulcro$algorithms$merge$merge_tree(target,source){
var source_to_merge = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__73208){
var vec__73209 = p__73208;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73209,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73209,(1),null);
return (!((k instanceof cljs.core.Symbol)));
})),source);
return com.fulcrologic.fulcro.algorithms.merge.sweep_merge(target,source_to_merge);
});
/**
 * Merge the given `refs` (a map from ident to props), query (a query that contains ident-joins), and tree:
 * 
 *   returns a new tree with the data merged into the proper ident-based tables.
 */
com.fulcrologic.fulcro.algorithms.merge.merge_idents = (function com$fulcrologic$fulcro$algorithms$merge$merge_idents(tree,query,refs,p__73214){
var map__73215 = p__73214;
var map__73215__$1 = (((((!((map__73215 == null))))?(((((map__73215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73215):map__73215);
var options = map__73215__$1;
var remove_missing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73215__$1,new cljs.core.Keyword(null,"remove-missing?","remove-missing?",-2044119224));
var ident_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__73215,map__73215__$1,options,remove_missing_QMARK_){
return (function (p1__73212_SHARP_){
var G__73217 = p1__73212_SHARP_;
if(cljs.core.seq_QMARK_(p1__73212_SHARP_)){
return cljs.core.first(G__73217);
} else {
return G__73217;
}
});})(map__73215,map__73215__$1,options,remove_missing_QMARK_))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__73215,map__73215__$1,options,remove_missing_QMARK_){
return (function (p1__73213_SHARP_){
return ((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(p1__73213_SHARP_)) && (edn_query_language.core.ident_QMARK_(com.fulcrologic.fulcro.algorithms.do_not_use.join_key(p1__73213_SHARP_))));
});})(map__73215,map__73215__$1,options,remove_missing_QMARK_))
)),query);
var step = ((function (ident_joins,map__73215,map__73215__$1,options,remove_missing_QMARK_){
return (function com$fulcrologic$fulcro$algorithms$merge$merge_idents_$_step(result_tree,p__73222){
var vec__73223 = p__73222;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73223,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73223,(1),null);
var component_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ident_joins,ident,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
var marked_props = (cljs.core.truth_(remove_missing_QMARK_)?com.fulcrologic.fulcro.algorithms.merge.mark_missing(props,component_query):props);
var normalized_data = com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(component_query,marked_props,false,com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$2(tree,options));
var refs__$1 = cljs.core.meta(normalized_data);
return com.fulcrologic.fulcro.algorithms.merge.merge_tree(com.fulcrologic.fulcro.algorithms.merge.merge_ident(result_tree,ident,normalized_data),refs__$1);
});})(ident_joins,map__73215,map__73215__$1,options,remove_missing_QMARK_))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
/**
 * Merge the query-result of a query using Fulcro's standard merge and normalization logic.
 * 
 *   Typically used on the state atom as:
 * 
 *   ```
 *   (swap! state merge* query-result query)
 *   ```
 * 
 *   - `state-map` - The normalized database.
 *   - `query` - The query that was used to obtain the query-result. This query will be treated relative to the root of the database.
 *   - `tree` - The query-result to merge (a map).
 * 
 *   The options is a map containing:
 * 
 *   * `:remove-missing?` If true (default false) then anything appearing in the `query` but not the `result-tree`
 *   will be removed from `state-map`.
 * 
 *   See `merge-component` and `merge-component!` for possibly more appropriate functions for your task.
 * 
 *   Returns the new normalized database.
 */
com.fulcrologic.fulcro.algorithms.merge.merge_STAR_ = (function com$fulcrologic$fulcro$algorithms$merge$merge_STAR_(var_args){
var G__73227 = arguments.length;
switch (G__73227) {
case 3:
return com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (state_map,query,result_tree){
return com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$4(state_map,query,result_tree,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (state_map,query,result_tree,p__73229){
var map__73230 = p__73229;
var map__73230__$1 = (((((!((map__73230 == null))))?(((((map__73230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73230):map__73230);
var options = map__73230__$1;
var remove_missing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73230__$1,new cljs.core.Keyword(null,"remove-missing?","remove-missing?",-2044119224));
var vec__73232 = com.fulcrologic.fulcro.algorithms.merge.sift_idents(result_tree);
var idts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73232,(0),null);
var result_tree__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73232,(1),null);
var normalized_result = com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(query,result_tree__$1,true,com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$2(state_map,options));
return com.fulcrologic.fulcro.algorithms.merge.merge_tree(com.fulcrologic.fulcro.algorithms.merge.merge_idents(com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$core$IFn$_invoke$arity$4(state_map,query,result_tree__$1,options),query,idts,options),normalized_result);
});

com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Calculates the query that can be used to pull (or merge) a component with an ident
 *   to/from a normalized app database. Requires a tree of data that represents the instance of
 *   the component in question (e.g. ident will work on it)
 */
com.fulcrologic.fulcro.algorithms.merge.component_merge_query = (function com$fulcrologic$fulcro$algorithms$merge$component_merge_query(state_map,component,object_data){
var ident = com.fulcrologic.fulcro.components.ident(component,object_data);
var object_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,object_query])], null);
});
/**
 * Walks the given query and calls (merge-fn parent-union-component union-child-initial-state) for each non-default element of a union that has initial app state.
 *   You probably want to use merge-alternate-union-elements[!] on a state map or app.
 */
com.fulcrologic.fulcro.algorithms.merge.merge_alternate_unions = (function com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions(merge_fn,root_component){
var walk_ast = (function() {
var com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast = null;
var com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast__2 = (function (ast,visitor){
return com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
});
var com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast__3 = (function (p__73244,visitor,parent_union){
var map__73245 = p__73244;
var map__73245__$1 = (((((!((map__73245 == null))))?(((((map__73245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73245):map__73245);
var parent_ast = map__73245__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73245__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73245__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73245__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73245__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73245__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73245__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.truth_((function (){var and__4120__auto__ = component;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = parent_union;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union-entry","union-entry",223335750),type);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
(visitor.cljs$core$IFn$_invoke$arity$2 ? visitor.cljs$core$IFn$_invoke$arity$2(component,parent_union) : visitor.call(null,component,parent_union));
} else {
}

if(cljs.core.truth_(children)){
var seq__73247 = cljs.core.seq(children);
var chunk__73248 = null;
var count__73249 = (0);
var i__73250 = (0);
while(true){
if((i__73250 < count__73249)){
var ast = chunk__73248.cljs$core$IIndexed$_nth$arity$2(null,i__73250);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union","union",2142937499))){
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union-entry","union-entry",223335750))){
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}


var G__73304 = seq__73247;
var G__73305 = chunk__73248;
var G__73306 = count__73249;
var G__73307 = (i__73250 + (1));
seq__73247 = G__73304;
chunk__73248 = G__73305;
count__73249 = G__73306;
i__73250 = G__73307;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73247);
if(temp__5735__auto__){
var seq__73247__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73247__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__73247__$1);
var G__73308 = cljs.core.chunk_rest(seq__73247__$1);
var G__73309 = c__4550__auto__;
var G__73310 = cljs.core.count(c__4550__auto__);
var G__73311 = (0);
seq__73247 = G__73308;
chunk__73248 = G__73309;
count__73249 = G__73310;
i__73250 = G__73311;
continue;
} else {
var ast = cljs.core.first(seq__73247__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union","union",2142937499))){
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union-entry","union-entry",223335750))){
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}


var G__73314 = cljs.core.next(seq__73247__$1);
var G__73315 = null;
var G__73316 = (0);
var G__73317 = (0);
seq__73247 = G__73314;
chunk__73248 = G__73315;
count__73249 = G__73316;
i__73250 = G__73317;
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
});
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast = function(p__73244,visitor,parent_union){
switch(arguments.length){
case 2:
return com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast__2.call(this,p__73244,visitor);
case 3:
return com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast__3.call(this,p__73244,visitor,parent_union);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$2 = com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast__2;
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3 = com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast__3;
return com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast;
})()
;
var merge_union = (function com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_merge_union(component,parent_union){
var default_initial_state = (function (){var and__4120__auto__ = parent_union;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = com.fulcrologic.fulcro.components.has_initial_app_state_QMARK_(parent_union);
if(and__4120__auto____$1){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(parent_union,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var to_many_QMARK_ = cljs.core.vector_QMARK_(default_initial_state);
var component_initial_state = (function (){var and__4120__auto__ = component;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = com.fulcrologic.fulcro.components.has_initial_app_state_QMARK_(component);
if(and__4120__auto____$1){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = component;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = component_initial_state;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = parent_union;
if(cljs.core.truth_(and__4120__auto____$2)){
return (((!(to_many_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(default_initial_state,component_initial_state)));
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(parent_union,component_initial_state) : merge_fn.call(null,parent_union,component_initial_state));
} else {
return null;
}
});
return walk_ast.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.query__GT_ast(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(root_component)),merge_union);
});
/**
 * Merge an arbitrary data-tree that conforms to the shape of the given query using Fulcro's
 *   standard merge and normalization logic.
 * 
 *   app - A fulcro application to merge into.
 *   query - A query, derived from components, that can be used to normalized a tree of data.
 *   data-tree - A tree of data that matches the nested shape of query.
 * 
 *   The options is a map containing:
 * 
 *   * `:remove-missing?` If true (default false) then anything appearing in the `query` but not the `result-tree`
 *   will be removed from `state-map`.
 * 
 *   NOTE: This function assumes you are merging against the root of the tree. See
 *   `merge-component` and `merge-component!` for relative merging.
 * 
 *   See also `merge*`.
 */
com.fulcrologic.fulcro.algorithms.merge.merge_BANG_ = (function com$fulcrologic$fulcro$algorithms$merge$merge_BANG_(var_args){
var G__73252 = arguments.length;
switch (G__73252) {
case 3:
return com.fulcrologic.fulcro.algorithms.merge.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.algorithms.merge.merge_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.merge.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,data_tree,query){
return com.fulcrologic.fulcro.algorithms.merge.merge_BANG_.cljs$core$IFn$_invoke$arity$4(app,data_tree,query,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.merge.merge_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app,data_tree,query,options){
var map__73253 = com.fulcrologic.fulcro.components.any__GT_app(app);
var map__73253__$1 = (((((!((map__73253 == null))))?(((((map__73253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73253):map__73253);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73253__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
if(cljs.core.truth_(state_atom)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,com.fulcrologic.fulcro.algorithms.merge.merge_STAR_,query,data_tree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
} else {
return null;
}
});

com.fulcrologic.fulcro.algorithms.merge.merge_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Given a state map of the application database, a component, and a tree of component-data: normalizes
 * the tree of data and merges the component table entries into the state, returning a new state map.
 * 
 * Since there is not an implied root, the component itself won't be linked into your graph (though it will
 * remain correctly linked for its own consistency).
 * 
 * * `state-map` - The normalized database
 * * `component` - A component class
 * * `component-data` - A tree of data that matches the shape of the component's query.
 * * `named-parameters` - Parameters from `targeting/integrate-ident*` that will let you link the merged component into the graph.
 * Named parameters may also include `:remove-missing?`, which will remove things that are queried for but do
 * not appear in the data from the state.
 * 
 * See also targeting/integrate-ident*, and merge/merge-component!
 */
com.fulcrologic.fulcro.algorithms.merge.merge_component = (function com$fulcrologic$fulcro$algorithms$merge$merge_component(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73326 = arguments.length;
var i__4731__auto___73327 = (0);
while(true){
if((i__4731__auto___73327 < len__4730__auto___73326)){
args__4736__auto__.push((arguments[i__4731__auto___73327]));

var G__73329 = (i__4731__auto___73327 + (1));
i__4731__auto___73327 = G__73329;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$core$IFn$_invoke$arity$variadic = (function (state_map,component,component_data,named_parameters){
if(com.fulcrologic.fulcro.components.has_ident_QMARK_(component)){
var options = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,named_parameters);
var map__73259 = options;
var map__73259__$1 = (((((!((map__73259 == null))))?(((((map__73259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73259):map__73259);
var remove_missing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73259__$1,new cljs.core.Keyword(null,"remove-missing?","remove-missing?",-2044119224));
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
var marked_data = (cljs.core.truth_(remove_missing_QMARK_)?com.fulcrologic.fulcro.algorithms.merge.mark_missing(component_data,query):component_data);
var updated_state = com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$4(state_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","merge","com.fulcrologic.fulcro.algorithms.merge/merge",1176000440),query], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","merge","com.fulcrologic.fulcro.algorithms.merge/merge",1176000440),marked_data], null),options);
var real_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(updated_state,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","merge","com.fulcrologic.fulcro.algorithms.merge/merge",1176000440));
var integrate_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (options,map__73259,map__73259__$1,remove_missing_QMARK_,query,marked_data,updated_state,real_ident){
return (function (p__73261){
var vec__73262 = p__73261;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73262,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73262,(1),null);
if(cljs.core.truth_((function (){var fexpr__73265 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"replace","replace",-786587770),null,new cljs.core.Keyword(null,"prepend","prepend",342616040),null,new cljs.core.Keyword(null,"append","append",-291298229),null], null), null);
return (fexpr__73265.cljs$core$IFn$_invoke$arity$1 ? fexpr__73265.cljs$core$IFn$_invoke$arity$1(k) : fexpr__73265.call(null,k));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
});})(options,map__73259,map__73259__$1,remove_missing_QMARK_,query,marked_data,updated_state,real_ident))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters)], 0));
var integrate_targets = ((function (options,map__73259,map__73259__$1,remove_missing_QMARK_,query,marked_data,updated_state,real_ident,integrate_params){
return (function (s){
if(cljs.core.seq(named_parameters)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_,s,real_ident,integrate_params);
} else {
return s;
}
});})(options,map__73259,map__73259__$1,remove_missing_QMARK_,query,marked_data,updated_state,real_ident,integrate_params))
;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(integrate_targets(updated_state),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","merge","com.fulcrologic.fulcro.algorithms.merge/merge",1176000440));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.merge",null,421,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot merge component ",component," because it does not have an ident!"], null);
}),null)),null,1619243547);

return state_map;
}
});

com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$lang$applyTo = (function (seq73255){
var G__73256 = cljs.core.first(seq73255);
var seq73255__$1 = cljs.core.next(seq73255);
var G__73257 = cljs.core.first(seq73255__$1);
var seq73255__$2 = cljs.core.next(seq73255__$1);
var G__73258 = cljs.core.first(seq73255__$2);
var seq73255__$3 = cljs.core.next(seq73255__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73256,G__73257,G__73258,seq73255__$3);
});

/**
 * Normalize and merge a (sub)tree of application state into the application using a known UI component's query and ident.
 * 
 *   This utility function obtains the ident of the incoming object-data using the UI component's ident function. Once obtained,
 *   it uses the component's query and ident to normalize the data and places the resulting objects in the correct tables.
 *   It is also quite common to want those new objects to be linked into lists in other spots in app state, so this function
 *   supports optional named parameters for doing this. These named parameters can be repeated as many times as you like in order
 *   to place the ident of the new object into other data structures of app state.
 * 
 *   This function honors the data merge story for Fulcro: attributes that are queried for but do not appear in the
 *   data will be removed from the application. This function also uses the initial state for the component as a base
 *   for merge if there was no state for the object already in the database.
 * 
 *   This function will also trigger re-renders of components that directly render object merged, as well as any components
 *   into which you integrate that data via the named-parameters.
 * 
 *   This function is primarily meant to be used from things like server push and setTimeout/setInterval, where you're outside
 *   of the normal mutation story. Do not use this function within abstract mutations.
 * 
 *   * `app`: Your application.
 *   * `component`: The class of the component that corresponds to the data. Must have an ident.
 *   * `object-data`: A map (tree) of data to merge. Will be normalized for you.
 *   * `named-parameter`: Post-processing ident integration steps. see `targeting/integrate-ident*`. You may also
 *   include `:remove-missing? true/false` to indicate that data that is missing for the component's query
 *   should be removed from app state.
 * 
 *   Any keywords that appear in ident integration steps will be added to the re-render queue.
 * 
 *   See also `fulcro.client.primitives/merge!`.
 *   
 */
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_ = (function com$fulcrologic$fulcro$algorithms$merge$merge_component_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73340 = arguments.length;
var i__4731__auto___73341 = (0);
while(true){
if((i__4731__auto___73341 < len__4730__auto___73340)){
args__4736__auto__.push((arguments[i__4731__auto___73341]));

var G__73342 = (i__4731__auto___73341 + (1));
i__4731__auto___73341 = G__73342;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app,component,object_data,named_parameters){
var temp__5735__auto__ = com.fulcrologic.fulcro.components.any__GT_app(app);
if(cljs.core.truth_(temp__5735__auto__)){
var app__$1 = temp__5735__auto__;
if((!(com.fulcrologic.fulcro.components.has_ident_QMARK_(component)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.merge",null,457,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (app__$1,temp__5735__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["merge-component!: component must implement Ident. Merge skipped."], null);
});})(app__$1,temp__5735__auto__))
,null)),null,-1654250656);
} else {
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (state,render_BANG_,app__$1,temp__5735__auto__){
return (function (s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(com.fulcrologic.fulcro.algorithms.merge.merge_component,s,component,object_data,named_parameters);
});})(state,render_BANG_,app__$1,temp__5735__auto__))
);

var G__73270 = app__$1;
var G__73271 = cljs.core.PersistentArrayMap.EMPTY;
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__73270,G__73271) : render_BANG_.call(null,G__73270,G__73271));
}
} else {
return null;
}
});

com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$lang$applyTo = (function (seq73266){
var G__73267 = cljs.core.first(seq73266);
var seq73266__$1 = cljs.core.next(seq73266);
var G__73268 = cljs.core.first(seq73266__$1);
var seq73266__$2 = cljs.core.next(seq73266__$1);
var G__73269 = cljs.core.first(seq73266__$2);
var seq73266__$3 = cljs.core.next(seq73266__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73267,G__73268,G__73269,seq73266__$3);
});

/**
 * Just like merge-alternate-union-elements!, but usable from within mutations and on server-side rendering. Ensures
 *   that when a component has initial state it will end up in the state map, even if it isn't currently in the
 *   initial state of the union component (which can only point to one at a time).
 */
com.fulcrologic.fulcro.algorithms.merge.merge_alternate_union_elements = (function com$fulcrologic$fulcro$algorithms$merge$merge_alternate_union_elements(state_map,root_component){
var state_map_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state_map);
var merge_to_state = ((function (state_map_atom){
return (function (comp,tree){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_map_atom,com.fulcrologic.fulcro.algorithms.merge.merge_component,comp,tree);
});})(state_map_atom))
;
var _ = com.fulcrologic.fulcro.algorithms.merge.merge_alternate_unions(merge_to_state,root_component);
var new_state = cljs.core.deref(state_map_atom);
return new_state;
});
/**
 * Walks the query and initial state of root-component and merges the alternate sides of unions with initial state into
 *   the application state database. See also `merge-alternate-union-elements`, which can be used on a state map and
 *   is handy for server-side rendering. This function side-effects on your app, and returns nothing.
 */
com.fulcrologic.fulcro.algorithms.merge.merge_alternate_union_elements_BANG_ = (function com$fulcrologic$fulcro$algorithms$merge$merge_alternate_union_elements_BANG_(app,root_component){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(app);
return com.fulcrologic.fulcro.algorithms.merge.merge_alternate_unions(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_,app__$1),root_component);
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.merge.js.map
