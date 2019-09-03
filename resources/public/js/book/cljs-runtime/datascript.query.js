goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('datascript.db');
goog.require('me.tonsky.persistent_sorted_set.arrays');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('datascript.parser');
goog.require('datascript.pull_api');
goog.require('datascript.pull_parser');
datascript.query.lru_cache_size = (100);



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k62070,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__62078 = k62070;
var G__62078__$1 = (((G__62078 instanceof cljs.core.Keyword))?G__62078.fqn:null);
switch (G__62078__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62070,else__4388__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__62081){
var vec__62082 = p__62081;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62082,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62082,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#datascript.query.Context{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62069){
var self__ = this;
var G__62069__$1 = this;
return (new cljs.core.RecordIter((0),G__62069__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__62090 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__62090(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62071,other62072){
var self__ = this;
var this62071__$1 = this;
return (((!((other62072 == null)))) && ((this62071__$1.constructor === other62072.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62071__$1.rels,other62072.rels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62071__$1.sources,other62072.sources)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62071__$1.rules,other62072.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62071__$1.__extmap,other62072.__extmap)));
});

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__62069){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__62093 = cljs.core.keyword_identical_QMARK_;
var expr__62094 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__62096 = new cljs.core.Keyword(null,"rels","rels",1770187185);
var G__62097 = expr__62094;
return (pred__62093.cljs$core$IFn$_invoke$arity$2 ? pred__62093.cljs$core$IFn$_invoke$arity$2(G__62096,G__62097) : pred__62093.call(null,G__62096,G__62097));
})())){
return (new datascript.query.Context(G__62069,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62098 = new cljs.core.Keyword(null,"sources","sources",-321166424);
var G__62099 = expr__62094;
return (pred__62093.cljs$core$IFn$_invoke$arity$2 ? pred__62093.cljs$core$IFn$_invoke$arity$2(G__62098,G__62099) : pred__62093.call(null,G__62098,G__62099));
})())){
return (new datascript.query.Context(self__.rels,G__62069,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62101 = new cljs.core.Keyword(null,"rules","rules",1198912366);
var G__62102 = expr__62094;
return (pred__62093.cljs$core$IFn$_invoke$arity$2 ? pred__62093.cljs$core$IFn$_invoke$arity$2(G__62101,G__62102) : pred__62093.call(null,G__62101,G__62102));
})())){
return (new datascript.query.Context(self__.rels,self__.sources,G__62069,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__62069),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__62069){
var self__ = this;
var this__4384__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__62069,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"datascript.query/Context");
});

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__62074){
var extmap__4424__auto__ = (function (){var G__62113 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62074,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0));
if(cljs.core.record_QMARK_(G__62074)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62113);
} else {
return G__62113;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__62074),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__62074),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__62074),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k62115,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__62119 = k62115;
var G__62119__$1 = (((G__62119 instanceof cljs.core.Keyword))?G__62119.fqn:null);
switch (G__62119__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62115,else__4388__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__62122){
var vec__62123 = p__62122;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62123,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62123,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#datascript.query.Relation{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62114){
var self__ = this;
var G__62114__$1 = this;
return (new cljs.core.RecordIter((0),G__62114__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__62127 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__62127(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62116,other62117){
var self__ = this;
var this62116__$1 = this;
return (((!((other62117 == null)))) && ((this62116__$1.constructor === other62117.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62116__$1.attrs,other62117.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62116__$1.tuples,other62117.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62116__$1.__extmap,other62117.__extmap)));
});

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__62114){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__62136 = cljs.core.keyword_identical_QMARK_;
var expr__62137 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__62139 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713);
var G__62140 = expr__62137;
return (pred__62136.cljs$core$IFn$_invoke$arity$2 ? pred__62136.cljs$core$IFn$_invoke$arity$2(G__62139,G__62140) : pred__62136.call(null,G__62139,G__62140));
})())){
return (new datascript.query.Relation(G__62114,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__62142 = new cljs.core.Keyword(null,"tuples","tuples",-676032639);
var G__62143 = expr__62137;
return (pred__62136.cljs$core$IFn$_invoke$arity$2 ? pred__62136.cljs$core$IFn$_invoke$arity$2(G__62142,G__62143) : pred__62136.call(null,G__62142,G__62143));
})())){
return (new datascript.query.Relation(self__.attrs,G__62114,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__62114),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__62114){
var self__ = this;
var this__4384__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__62114,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"datascript.query/Relation");
});

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__62118){
var extmap__4424__auto__ = (function (){var G__62147 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62118,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0));
if(cljs.core.record_QMARK_(G__62118)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62147);
} else {
return G__62147;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__62118),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__62118),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next(coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first(coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62871 = arguments.length;
var i__4731__auto___62872 = (0);
while(true){
if((i__4731__auto___62872 < len__4730__auto___62871)){
args__4736__auto__.push((arguments[i__4731__auto___62872]));

var G__62873 = (i__4731__auto___62872 + (1));
i__4731__auto___62872 = G__62873;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datascript.query.concatv.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.concatv.cljs$lang$applyTo = (function (seq62150){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62150));
});

datascript.query.zip = (function datascript$query$zip(var_args){
var G__62159 = arguments.length;
switch (G__62159) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___62877 = arguments.length;
var i__4731__auto___62878 = (0);
while(true){
if((i__4731__auto___62878 < len__4730__auto___62877)){
args_arr__4751__auto__.push((arguments[i__4731__auto___62878]));

var G__62879 = (i__4731__auto___62878 + (1));
i__4731__auto___62878 = G__62879;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,a,b);
});

datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,cljs.core.vector,a,b,rest);
});

/** @this {Function} */
datascript.query.zip.cljs$lang$applyTo = (function (seq62156){
var G__62157 = cljs.core.first(seq62156);
var seq62156__$1 = cljs.core.next(seq62156);
var G__62158 = cljs.core.first(seq62156__$1);
var seq62156__$2 = cljs.core.next(seq62156__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62157,G__62158,seq62156__$2);
});

datascript.query.zip.cljs$lang$maxFixedArity = (2);

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (cljs.core.every_QMARK_((function (p1__62160_SHARP_){
return cljs.core.contains_QMARK_(b,p1__62160_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__62161_SHARP_){
return cljs.core.contains_QMARK_(b,p1__62161_SHARP_);
}),cljs.core.keys(a))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__62178){
var vec__62179 = p__62178;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62179,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62179,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__62190){
var vec__62191 = p__62190;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62191,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62191,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form))));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array((l1 + l2));
var n__4607__auto___62895 = l1;
var i_62896 = (0);
while(true){
if((i_62896 < n__4607__auto___62895)){
(res[i_62896] = (t1[(idxs1[i_62896])]));

var G__62897 = (i_62896 + (1));
i_62896 = G__62897;
continue;
} else {
}
break;
}

var n__4607__auto___62898 = l2;
var i_62899 = (0);
while(true){
if((i_62899 < n__4607__auto___62898)){
(res[(l1 + i_62899)] = (t2[(idxs2[i_62899])]));

var G__62900 = (i_62899 + (1));
i_62899 = G__62900;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__62216 = a;
var map__62216__$1 = (((((!((map__62216 == null))))?(((((map__62216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62216):map__62216);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62216__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62216__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__62217 = b;
var map__62217__$1 = (((((!((map__62217 == null))))?(((((map__62217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62217):map__62217);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62217__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_(attrs_a,attrs_b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__4523__auto__ = ((function (map__62216,map__62216__$1,attrs_a,tuples_a,map__62217,map__62217__$1,attrs_b,tuples_b){
return (function datascript$query$sum_rel_$_iter__62226(s__62227){
return (new cljs.core.LazySeq(null,((function (map__62216,map__62216__$1,attrs_a,tuples_a,map__62217,map__62217__$1,attrs_b,tuples_b){
return (function (){
var s__62227__$1 = s__62227;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62227__$1);
if(temp__5735__auto__){
var s__62227__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62227__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__62227__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__62229 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__62228 = (0);
while(true){
if((i__62228 < size__4522__auto__)){
var vec__62230 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__62228);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62230,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62230,(1),null);
cljs.core.chunk_append(b__62229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__62954 = (i__62228 + (1));
i__62228 = G__62954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62229),datascript$query$sum_rel_$_iter__62226(cljs.core.chunk_rest(s__62227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62229),null);
}
} else {
var vec__62233 = cljs.core.first(s__62227__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62233,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62233,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_$_iter__62226(cljs.core.rest(s__62227__$2)));
}
} else {
return null;
}
break;
}
});})(map__62216,map__62216__$1,attrs_a,tuples_a,map__62217,map__62217__$1,attrs_b,tuples_b))
,null,null));
});})(map__62216,map__62216__$1,attrs_a,tuples_a,map__62217,map__62217__$1,attrs_b,tuples_b))
;
return iter__4523__auto__(attrs_b);
})());
var tlen = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (idxb__GT_idxa,tlen,map__62216,map__62216__$1,attrs_a,tuples_a,map__62217,map__62217__$1,attrs_b,tuples_b){
return (function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array(tlen);
var seq__62236_62958 = cljs.core.seq(idxb__GT_idxa);
var chunk__62237_62959 = null;
var count__62238_62960 = (0);
var i__62239_62961 = (0);
while(true){
if((i__62239_62961 < count__62238_62960)){
var vec__62246_62962 = chunk__62237_62959.cljs$core$IIndexed$_nth$arity$2(null,i__62239_62961);
var idx_b_62963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62246_62962,(0),null);
var idx_a_62964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62246_62962,(1),null);
(tuple_SINGLEQUOTE_[idx_a_62964] = (tuple_b[idx_b_62963]));


var G__62965 = seq__62236_62958;
var G__62966 = chunk__62237_62959;
var G__62967 = count__62238_62960;
var G__62968 = (i__62239_62961 + (1));
seq__62236_62958 = G__62965;
chunk__62237_62959 = G__62966;
count__62238_62960 = G__62967;
i__62239_62961 = G__62968;
continue;
} else {
var temp__5735__auto___62969 = cljs.core.seq(seq__62236_62958);
if(temp__5735__auto___62969){
var seq__62236_62970__$1 = temp__5735__auto___62969;
if(cljs.core.chunked_seq_QMARK_(seq__62236_62970__$1)){
var c__4550__auto___62971 = cljs.core.chunk_first(seq__62236_62970__$1);
var G__62972 = cljs.core.chunk_rest(seq__62236_62970__$1);
var G__62973 = c__4550__auto___62971;
var G__62974 = cljs.core.count(c__4550__auto___62971);
var G__62975 = (0);
seq__62236_62958 = G__62972;
chunk__62237_62959 = G__62973;
count__62238_62960 = G__62974;
i__62239_62961 = G__62975;
continue;
} else {
var vec__62250_62976 = cljs.core.first(seq__62236_62970__$1);
var idx_b_62977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62250_62976,(0),null);
var idx_a_62978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62250_62976,(1),null);
(tuple_SINGLEQUOTE_[idx_a_62978] = (tuple_b[idx_b_62977]));


var G__62980 = cljs.core.next(seq__62236_62970__$1);
var G__62981 = null;
var G__62982 = (0);
var G__62983 = (0);
seq__62236_62958 = G__62980;
chunk__62237_62959 = G__62981;
count__62238_62960 = G__62982;
i__62239_62961 = G__62983;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,tuple_SINGLEQUOTE_);
});})(idxb__GT_idxa,tlen,map__62216,map__62216__$1,attrs_a,tuples_a,map__62217,map__62217__$1,attrs_b,tuples_b))
,cljs.core.transient$(cljs.core.vec(tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap(cljs.core.keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a,attrs_b], 0))),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__62253 = (function (){var G__62255 = (new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
var G__62256 = a;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__62255,G__62256) : datascript.query.sum_rel.call(null,G__62255,G__62256));
})();
var G__62254 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__62253,G__62254) : datascript.query.sum_rel.call(null,G__62253,G__62254));

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__62259 = arguments.length;
switch (G__62259) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array((0))], null),null,null,null));
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
});})(attrs1,attrs2,idxs1,idxs2))
,acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
});})(attrs1,attrs2,idxs1,idxs2))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
});

datascript.query.prod_rel.cljs$lang$maxFixedArity = 2;

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62988 = arguments.length;
var i__4731__auto___62989 = (0);
while(true){
if((i__4731__auto___62989 < len__4730__auto___62988)){
args__4736__auto__.push((arguments[i__4731__auto___62989]));

var G__62991 = (i__4731__auto___62989 + (1));
i__4731__auto___62989 = G__62991;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count(xs);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
});

datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq62261){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62261));
});

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("get-else: nil default value is not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
}

var temp__5737__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5737__auto__ == null)){
return else_val;
} else {
var datom = temp__5737__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63013 = arguments.length;
var i__4731__auto___63014 = (0);
while(true){
if((i__4731__auto___63014 < len__4730__auto___63013)){
args__4736__auto__.push((arguments[i__4731__auto___63014]));

var G__63016 = (i__4731__auto___63014 + (1));
i__4731__auto___63014 = G__63016;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){
var temp__5739__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5739__auto__ == null)){
return null;
} else {
var datom = temp__5739__auto__;
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)], null));
}
}),null,as);
});

datascript.query._get_some.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
datascript.query._get_some.cljs$lang$applyTo = (function (seq62276){
var G__62277 = cljs.core.first(seq62276);
var seq62276__$1 = cljs.core.next(seq62276);
var G__62278 = cljs.core.first(seq62276__$1);
var seq62276__$2 = cljs.core.next(seq62276__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62277,G__62278,seq62276__$2);
});

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63024 = arguments.length;
var i__4731__auto___63025 = (0);
while(true){
if((i__4731__auto___63025 < len__4730__auto___63024)){
args__4736__auto__.push((arguments[i__4731__auto___63025]));

var G__63026 = (i__4731__auto___63025 + (1));
i__4731__auto___63025 = G__63026;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced(b);
}
}),true,args);
});

datascript.query.and_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.and_fn.cljs$lang$applyTo = (function (seq62292){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62292));
});

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63031 = arguments.length;
var i__4731__auto___63032 = (0);
while(true){
if((i__4731__auto___63032 < len__4730__auto___63031)){
args__4736__auto__.push((arguments[i__4731__auto___63032]));

var G__63033 = (i__4731__auto___63032 + (1));
i__4731__auto___63032 = G__63033;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced(b);
} else {
return b;
}
}),null,args);
});

datascript.query.or_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.or_fn.cljs$lang$applyTo = (function (seq62300){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62300));
});

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"print-str","print-str",-699700354,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"re-seq","re-seq",-2105554076,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Symbol(null,"println-str","println-str",-2049216703,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"prn-str","prn-str",-145225943,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol("clojure.string","includes?","clojure.string/includes?",-1842146260,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null)],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.re_seq,cljs.core._LT__EQ_,clojure.string.starts_with_QMARK_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.re_pattern,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,clojure.string.ends_with_QMARK_,cljs.core.subs,cljs.core.mod,clojure.string.includes_QMARK_,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,clojure.string.blank_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum(coll) / cljs.core.count(coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll);
var size = cljs.core.count(coll);
var med = (size >> (1));
var G__62329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
if(cljs.core.even_QMARK_(size)){
return ((G__62329 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2));
} else {
return G__62329;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__4523__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__62331(s__62332){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__62332__$1 = s__62332;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62332__$1);
if(temp__5735__auto__){
var s__62332__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62332__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__62332__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__62334 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__62333 = (0);
while(true){
if((i__62333 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__62333);
var delta = (x - mean);
cljs.core.chunk_append(b__62334,(delta * delta));

var G__63053 = (i__62333 + (1));
i__62333 = G__63053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62334),datascript$query$variance_$_iter__62331(cljs.core.chunk_rest(s__62332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62334),null);
}
} else {
var x = cljs.core.first(s__62332__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__62331(cljs.core.rest(s__62332__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__4523__auto__(coll);
})());
return (sum__$1 / cljs.core.count(coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance(coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__63054 = null;
var G__63054__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__63054__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.last(acc)) < (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__63054 = function(n,coll){
switch(arguments.length){
case 1:
return G__63054__1.call(this,n);
case 2:
return G__63054__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63054.cljs$core$IFn$_invoke$arity$1 = G__63054__1;
G__63054.cljs$core$IFn$_invoke$arity$2 = G__63054__2;
return G__63054;
})()
,(function() {
var G__63055 = null;
var G__63055__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__63055__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.first(acc)) > (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__63055 = function(n,coll){
switch(arguments.length){
case 1:
return G__63055__1.call(this,n);
case 2:
return G__63055__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63055.cljs$core$IFn$_invoke$arity$1 = G__63055__1;
G__63055.cljs$core$IFn$_invoke$arity$2 = G__63055__2;
return G__63055;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.set,avg,stddev,(function() {
var G__63057 = null;
var G__63057__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__63057__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__63057 = function(n,coll){
switch(arguments.length){
case 1:
return G__63057__1.call(this,n);
case 2:
return G__63057__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63057.cljs$core$IFn$_invoke$arity$1 = G__63057__1;
G__63057.cljs$core$IFn$_invoke$arity$2 = G__63057__2;
return G__63057;
})()
,(function (n,coll){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(rules):rules);
return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__4433__auto__ = (((binding == null))?null:binding);
var m__4434__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4434__auto__.call(null,binding,value));
} else {
var m__4431__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4431__auto__.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
}
});

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
});

datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
});

datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1){
return (function (p1__62347_SHARP_){
return datascript.query.in__GT_rel(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(binding__$1),p1__62347_SHARP_);
});})(binding__$1))
,coll));

}
}
});

datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(binding__$1)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not enough elements in a collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to bind tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (binding__$1){
return (function (p1__62348_SHARP_,p2__62349_SHARP_){
return datascript.query.in__GT_rel(p1__62348_SHARP_,p2__62349_SHARP_);
});})(binding__$1))
,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__62356){
var vec__62357 = p__62356;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62357,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62357,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules(value));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if(cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr)){
return ((function (idx){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
;})(idx))
} else {
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return ((function (getters__$1){
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map(((function (getters__$1){
return (function (p1__62362_SHARP_){
return (p1__62362_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__62362_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__62362_SHARP_.call(null,tuple));
});})(getters__$1))
));
});
;})(getters__$1))
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5737__auto__ = cljs.core.first(tuples__$1);
if((temp__5737__auto__ == null)){
return cljs.core.persistent_BANG_(hash_table);
} else {
var tuple = temp__5737__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__63097 = cljs.core.next(tuples__$1);
var G__63098 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__63097;
hash_table = G__63098;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs){
return (function (p1__62374_SHARP_){
return datascript.query.getter_fn(attrs1,p1__62374_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__62375_SHARP_){
return datascript.query.getter_fn(attrs2,p1__62375_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1))
,common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if((temp__5737__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5737__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1__$1,temp__5737__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__5737__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,acc,tuples1__$1);
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__62379 = a;
var map__62379__$1 = (((((!((map__62379 == null))))?(((((map__62379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62379):map__62379);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62379__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__62380 = b;
var map__62380__$1 = (((((!((map__62380 == null))))?(((((map__62380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62380):map__62380);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62380__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62380__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = datascript.query.intersect_keys(attrs_a,attrs_b);
var getters_b = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__62379,map__62379__$1,attrs_a,tuples_a,map__62380,map__62380__$1,attrs_b,tuples_b,attrs){
return (function (p1__62376_SHARP_){
return datascript.query.getter_fn(attrs_b,p1__62376_SHARP_);
});})(map__62379,map__62379__$1,attrs_a,tuples_a,map__62380,map__62380__$1,attrs_b,tuples_b,attrs))
,attrs);
var key_fn_b = datascript.query.tuple_key_fn(getters_b);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var getters_a = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__62379,map__62379__$1,attrs_a,tuples_a,map__62380,map__62380__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash){
return (function (p1__62377_SHARP_){
return datascript.query.getter_fn(attrs_a,p1__62377_SHARP_);
});})(map__62379,map__62379__$1,attrs_a,tuples_a,map__62380,map__62380__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash))
,attrs);
var key_fn_a = datascript.query.tuple_key_fn(getters_a);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv(((function (map__62379,map__62379__$1,attrs_a,tuples_a,map__62380,map__62380__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash,getters_a,key_fn_a){
return (function (p1__62378_SHARP_){
return ((function (){var G__62392 = (key_fn_a.cljs$core$IFn$_invoke$arity$1 ? key_fn_a.cljs$core$IFn$_invoke$arity$1(p1__62378_SHARP_) : key_fn_a.call(null,p1__62378_SHARP_));
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__62392) : hash.call(null,G__62392));
})() == null);
});})(map__62379,map__62379__$1,attrs_a,tuples_a,map__62380,map__62380__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash,getters_a,key_fn_a))
,tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__62398_SHARP_){
if((p1__62398_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__62398_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__62430){
var vec__62431 = p__62430;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62431,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62431,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(search_pattern,datoms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__4120__auto__ = tuple__$1;
if(cljs.core.truth_(and__4120__auto__)){
return pattern__$1;
} else {
return and__4120__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))){
var G__63113 = cljs.core.next(tuple__$1);
var G__63114 = cljs.core.next(pattern__$1);
tuple__$1 = G__63113;
pattern__$1 = G__63114;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__62437_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__62437_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__62441){
var vec__62443 = p__62441;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62443,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62443,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(data))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5737__auto__ = cljs.core.first(rels__$1);
if((temp__5737__auto__ == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
} else {
var rel = temp__5737__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__63232 = cljs.core.next(rels__$1);
var G__63233 = datascript.query.hash_join(rel,new_rel__$1);
var G__63234 = acc;
rels__$1 = G__63232;
new_rel__$1 = G__63233;
acc = G__63234;
continue;
} else {
var G__63235 = cljs.core.next(rels__$1);
var G__63236 = new_rel__$1;
var G__63237 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__63235;
new_rel__$1 = G__63236;
acc = G__63237;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__62450_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__62450_SHARP_),sym)){
return p1__62450_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5739__auto__ = datascript.query.rel_with_attr(context,sym);
if((temp__5739__auto__ == null)){
return null;
} else {
var rel = temp__5739__auto__;
var temp__5739__auto____$1 = cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5739__auto____$1 == null)){
return null;
} else {
var tuple = temp__5739__auto____$1;
return (tuple[(function (){var fexpr__62451 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__62451.cljs$core$IFn$_invoke$arity$1 ? fexpr__62451.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__62451.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__62452_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__62452_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__62453_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__62453_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (rels,production){
return (function (p1__62454_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__62454_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__4607__auto___63260 = len;
var i_63261 = (0);
while(true){
if((i_63261 < n__4607__auto___63260)){
var arg_63262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_63261);
if((arg_63262 instanceof cljs.core.Symbol)){
var temp__5737__auto___63267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_63262);
if((temp__5737__auto___63267 == null)){
(tuples_args[i_63261] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_63262));
} else {
var source_63269 = temp__5737__auto___63267;
(static_args[i_63261] = source_63269);
}
} else {
(static_args[i_63261] = arg_63262);
}

var G__63270 = (i_63261 + (1));
i_63261 = G__63270;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__4607__auto___63278 = len;
var i_63279 = (0);
while(true){
if((i_63279 < n__4607__auto___63278)){
var temp__5739__auto___63280 = (tuples_args[i_63279]);
if((temp__5739__auto___63280 == null)){
} else {
var tuple_idx_63281 = temp__5739__auto___63280;
var v_63282 = (tuple[tuple_idx_63281]);
(args__$1[i_63279] = v_63282);
}

var G__63283 = (i_63279 + (1));
i_63279 = G__63283;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
;})(sources,attrs,len,static_args,tuples_args))
} else {
return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var n__4607__auto___63284 = len;
var i_63285 = (0);
while(true){
if((i_63285 < n__4607__auto___63284)){
var temp__5739__auto___63286 = (tuples_args[i_63285]);
if((temp__5739__auto___63286 == null)){
} else {
var tuple_idx_63287 = temp__5739__auto___63286;
var v_63288 = (tuple[tuple_idx_63287]);
(static_args[i_63285] = v_63288);
}

var G__63289 = (i_63285 + (1));
i_63285 = G__63289;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
;})(sources,attrs,len,static_args,tuples_args))
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__62457 = clause;
var vec__62460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62457,(0),null);
var seq__62461 = cljs.core.seq(vec__62460);
var first__62462 = cljs.core.first(seq__62461);
var seq__62461__$1 = cljs.core.next(seq__62461);
var f = first__62462;
var args = seq__62461__$1;
var pred = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown predicate '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__62463 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62463,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62463,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),((function (tuple_pred,vec__62457,vec__62460,seq__62461,first__62462,seq__62461__$1,f,args,pred,vec__62463,context__$1,production){
return (function (p1__62456_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__62456_SHARP_);
});})(tuple_pred,vec__62457,vec__62460,seq__62461,first__62462,seq__62461__$1,f,args,pred,vec__62463,context__$1,production))
);
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__62466 = clause;
var vec__62469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62466,(0),null);
var seq__62470 = cljs.core.seq(vec__62469);
var first__62471 = cljs.core.first(seq__62470);
var seq__62470__$1 = cljs.core.next(seq__62470);
var f = first__62471;
var args = seq__62470__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62466,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown function '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__62472 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62472,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62472,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__4523__auto__ = ((function (tuple_fn,vec__62466,vec__62469,seq__62470,first__62471,seq__62470__$1,f,args,out,binding,fun,vec__62472,context__$1,production){
return (function datascript$query$bind_by_fn_$_iter__62475(s__62476){
return (new cljs.core.LazySeq(null,((function (tuple_fn,vec__62466,vec__62469,seq__62470,first__62471,seq__62470__$1,f,args,out,binding,fun,vec__62472,context__$1,production){
return (function (){
var s__62476__$1 = s__62476;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62476__$1);
if(temp__5735__auto__){
var s__62476__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62476__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__62476__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__62478 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__62477 = (0);
while(true){
if((i__62477 < size__4522__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__62477);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if((!((val == null)))){
cljs.core.chunk_append(b__62478,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__63309 = (i__62477 + (1));
i__62477 = G__63309;
continue;
} else {
var G__63310 = (i__62477 + (1));
i__62477 = G__63310;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62478),datascript$query$bind_by_fn_$_iter__62475(cljs.core.chunk_rest(s__62476__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62478),null);
}
} else {
var tuple = cljs.core.first(s__62476__$2);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if((!((val == null)))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__62475(cljs.core.rest(s__62476__$2)));
} else {
var G__63311 = cljs.core.rest(s__62476__$2);
s__62476__$1 = G__63311;
continue;
}
}
} else {
return null;
}
break;
}
});})(tuple_fn,vec__62466,vec__62469,seq__62470,first__62471,seq__62470__$1,f,args,out,binding,fun,vec__62472,context__$1,production))
,null,null));
});})(tuple_fn,vec__62466,vec__62469,seq__62470,first__62471,seq__62470__$1,f,args,out,binding,fun,vec__62472,context__$1,production))
;
return iter__4523__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return ((cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause)))));
});
datascript.query.rule_seqid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__62482 = clause;
var seq__62483 = cljs.core.seq(vec__62482);
var first__62484 = cljs.core.first(seq__62483);
var seq__62483__$1 = cljs.core.next(seq__62483);
var rule = first__62484;
var call_args = seq__62483__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4523__auto__ = ((function (vec__62482,seq__62483,first__62484,seq__62483__$1,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__62485(s__62486){
return (new cljs.core.LazySeq(null,((function (vec__62482,seq__62483,first__62484,seq__62483__$1,rule,call_args,seqid,branches){
return (function (){
var s__62486__$1 = s__62486;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62486__$1);
if(temp__5735__auto__){
var s__62486__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62486__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__62486__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__62488 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__62487 = (0);
while(true){
if((i__62487 < size__4522__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__62487);
var vec__62489 = branch;
var seq__62490 = cljs.core.seq(vec__62489);
var first__62491 = cljs.core.first(seq__62490);
var seq__62490__$1 = cljs.core.next(seq__62490);
var vec__62492 = first__62491;
var seq__62493 = cljs.core.seq(vec__62492);
var first__62494 = cljs.core.first(seq__62493);
var seq__62493__$1 = cljs.core.next(seq__62493);
var _ = first__62494;
var rule_args = seq__62493__$1;
var clauses = seq__62490__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__62488,clojure.walk.postwalk(((function (i__62487,vec__62489,seq__62490,first__62491,seq__62490__$1,vec__62492,seq__62493,first__62494,seq__62493__$1,_,rule_args,clauses,replacements,branch,c__4521__auto__,size__4522__auto__,b__62488,s__62486__$2,temp__5735__auto__,vec__62482,seq__62483,first__62484,seq__62483__$1,rule,call_args,seqid,branches){
return (function (p1__62480_SHARP_){
if(datascript.query.free_var_QMARK_(p1__62480_SHARP_)){
var x__57524__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__62480_SHARP_) : replacements.call(null,p1__62480_SHARP_));
if((x__57524__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__62480_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__57524__auto__;
}
} else {
return p1__62480_SHARP_;
}
});})(i__62487,vec__62489,seq__62490,first__62491,seq__62490__$1,vec__62492,seq__62493,first__62494,seq__62493__$1,_,rule_args,clauses,replacements,branch,c__4521__auto__,size__4522__auto__,b__62488,s__62486__$2,temp__5735__auto__,vec__62482,seq__62483,first__62484,seq__62483__$1,rule,call_args,seqid,branches))
,clauses));

var G__63321 = (i__62487 + (1));
i__62487 = G__63321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62488),datascript$query$expand_rule_$_iter__62485(cljs.core.chunk_rest(s__62486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62488),null);
}
} else {
var branch = cljs.core.first(s__62486__$2);
var vec__62495 = branch;
var seq__62496 = cljs.core.seq(vec__62495);
var first__62497 = cljs.core.first(seq__62496);
var seq__62496__$1 = cljs.core.next(seq__62496);
var vec__62498 = first__62497;
var seq__62499 = cljs.core.seq(vec__62498);
var first__62500 = cljs.core.first(seq__62499);
var seq__62499__$1 = cljs.core.next(seq__62499);
var _ = first__62500;
var rule_args = seq__62499__$1;
var clauses = seq__62496__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__62495,seq__62496,first__62497,seq__62496__$1,vec__62498,seq__62499,first__62500,seq__62499__$1,_,rule_args,clauses,replacements,branch,s__62486__$2,temp__5735__auto__,vec__62482,seq__62483,first__62484,seq__62483__$1,rule,call_args,seqid,branches){
return (function (p1__62480_SHARP_){
if(datascript.query.free_var_QMARK_(p1__62480_SHARP_)){
var x__57524__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__62480_SHARP_) : replacements.call(null,p1__62480_SHARP_));
if((x__57524__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__62480_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__57524__auto__;
}
} else {
return p1__62480_SHARP_;
}
});})(vec__62495,seq__62496,first__62497,seq__62496__$1,vec__62498,seq__62499,first__62500,seq__62499__$1,_,rule_args,clauses,replacements,branch,s__62486__$2,temp__5735__auto__,vec__62482,seq__62483,first__62484,seq__62483__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__62485(cljs.core.rest(s__62486__$2)));
}
} else {
return null;
}
break;
}
});})(vec__62482,seq__62483,first__62484,seq__62483__$1,rule,call_args,seqid,branches))
,null,null));
});})(vec__62482,seq__62483,first__62484,seq__62483__$1,rule,call_args,seqid,branches))
;
return iter__4523__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__62501){
var vec__62502 = p__62501;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62502,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62502,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__62505 = rule_clause;
var seq__62506 = cljs.core.seq(vec__62505);
var first__62507 = cljs.core.first(seq__62506);
var seq__62506__$1 = cljs.core.next(seq__62506);
var rule = first__62507;
var call_args = seq__62506__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__4523__auto__ = ((function (vec__62505,seq__62506,first__62507,seq__62506__$1,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__62508(s__62509){
return (new cljs.core.LazySeq(null,((function (vec__62505,seq__62506,first__62507,seq__62506__$1,rule,call_args,prev_call_args){
return (function (){
var s__62509__$1 = s__62509;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62509__$1);
if(temp__5735__auto__){
var s__62509__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62509__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__62509__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__62511 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__62510 = (0);
while(true){
if((i__62510 < size__4522__auto__)){
var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__62510);
var vec__62512 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62512,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62512,(1),null);
cljs.core.chunk_append(b__62511,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__63340 = (i__62510 + (1));
i__62510 = G__63340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62511),datascript$query$rule_gen_guards_$_iter__62508(cljs.core.chunk_rest(s__62509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62511),null);
}
} else {
var prev_args = cljs.core.first(s__62509__$2);
var vec__62515 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62515,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62515,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__62508(cljs.core.rest(s__62509__$2)));
}
} else {
return null;
}
break;
}
});})(vec__62505,seq__62506,first__62507,seq__62506__$1,rule,call_args,prev_call_args))
,null,null));
});})(vec__62505,seq__62506,first__62507,seq__62506__$1,rule,call_args,prev_call_args))
;
return iter__4523__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk(((function (res){
return (function (p1__62518_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__62518_SHARP_) : pred.call(null,p1__62518_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__62518_SHARP_);
} else {
}

return p1__62518_SHARP_;
});})(res))
,form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = ((function (bound_vars){
return (function (p__62519){
var vec__62521 = p__62519;
var vec__62524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62521,(0),null);
var seq__62525 = cljs.core.seq(vec__62524);
var first__62526 = cljs.core.first(seq__62525);
var seq__62525__$1 = cljs.core.next(seq__62525);
var _ = first__62526;
var vars = seq__62525__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some(((function (final_attrs,final_attrs_map,solve){
return (function (p1__62527_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__62527_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5737__auto__ = cljs.core.first(stack);
if((temp__5737__auto__ == null)){
return rel;
} else {
var frame = temp__5737__auto__;
var vec__62546 = cljs.core.split_with(((function (stack,rel,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__62528_SHARP_){
return (!(datascript.query.rule_QMARK_(context,p1__62528_SHARP_)));
});})(stack,rel,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62546,(0),null);
var vec__62549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62546,(1),null);
var seq__62550 = cljs.core.seq(vec__62549);
var first__62551 = cljs.core.first(seq__62550);
var seq__62550__$1 = cljs.core.next(seq__62550);
var rule_clause = first__62551;
var next_clauses = seq__62550__$1;
if((rule_clause == null)){
var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__63367 = cljs.core.next(stack);
var G__63368 = datascript.query.sum_rel(rel,new_rel);
stack = G__63367;
rel = G__63368;
continue;
} else {
var vec__62552 = rule_clause;
var seq__62553 = cljs.core.seq(vec__62552);
var first__62554 = cljs.core.first(seq__62553);
var seq__62553__$1 = cljs.core.next(seq__62553);
var rule = first__62554;
var call_args = seq__62553__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__62555 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62555,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62555,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__62552,seq__62553,first__62554,seq__62553__$1,rule,call_args,guards,vec__62555,active_gs,pending_gs,vec__62546,clauses,vec__62549,seq__62550,first__62551,seq__62550__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__62529_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__62529_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__62552,seq__62553,first__62554,seq__62553__$1,rule,call_args,guards,vec__62555,active_gs,pending_gs,vec__62546,clauses,vec__62549,seq__62550,first__62551,seq__62550__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__63369 = cljs.core.next(stack);
var G__63370 = rel;
stack = G__63369;
rel = G__63370;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__63371 = cljs.core.next(stack);
var G__63372 = rel;
stack = G__63371;
rel = G__63372;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__63373 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4523__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__62552,seq__62553,first__62554,seq__62553__$1,rule,call_args,guards,vec__62555,active_gs,pending_gs,vec__62546,clauses,vec__62549,seq__62550,first__62551,seq__62550__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__62558(s__62559){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__62552,seq__62553,first__62554,seq__62553__$1,rule,call_args,guards,vec__62555,active_gs,pending_gs,vec__62546,clauses,vec__62549,seq__62550,first__62551,seq__62550__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__62559__$1 = s__62559;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62559__$1);
if(temp__5735__auto__){
var s__62559__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62559__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__62559__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__62561 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__62560 = (0);
while(true){
if((i__62560 < size__4522__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__62560);
cljs.core.chunk_append(b__62561,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__63377 = (i__62560 + (1));
i__62560 = G__63377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62561),datascript$query$solve_rule_$_iter__62558(cljs.core.chunk_rest(s__62559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62561),null);
}
} else {
var branch = cljs.core.first(s__62559__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__62558(cljs.core.rest(s__62559__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__62552,seq__62553,first__62554,seq__62553__$1,rule,call_args,guards,vec__62555,active_gs,pending_gs,vec__62546,clauses,vec__62549,seq__62550,first__62551,seq__62550__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__62552,seq__62553,first__62554,seq__62553__$1,rule,call_args,guards,vec__62555,active_gs,pending_gs,vec__62546,clauses,vec__62549,seq__62550,first__62551,seq__62550__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4523__auto__(branches);
})(),cljs.core.next(stack));
var G__63374 = rel;
stack = G__63373;
rel = G__63374;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__62567 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62567,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62567,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62567,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62567,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4131__auto__ = datascript.query.lookup_ref_QMARK_(e);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return datascript.query.attr_QMARK_(e);
}
})())?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = datascript.query.attr_QMARK_(a);
if(and__4120__auto____$1){
var and__4120__auto____$2 = datascript.db.ref_QMARK_(source,a);
if(and__4120__auto____$2){
var or__4131__auto__ = datascript.query.lookup_ref_QMARK_(v);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return datascript.query.attr_QMARK_(v);
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__62570 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62570,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62570,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62570,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62570,(3),null);
var G__62573 = cljs.core.PersistentHashSet.EMPTY;
var G__62573__$1 = ((datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__62573,e):G__62573);
var G__62573__$2 = ((datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__62573__$1,tx):G__62573__$1);
if(((datascript.query.free_var_QMARK_(v)) && ((!(datascript.query.free_var_QMARK_(a)))) && (datascript.db.ref_QMARK_(source,a)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__62573__$2,v);
} else {
return G__62573__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5739__auto__ = cljs.core.not_empty(cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5739__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5739__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__62574_SHARP_){
return datascript.query.limit_rel(p1__62574_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.check_bound = (function datascript$query$check_bound(context,vars,form){
var bound = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__62575_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__62575_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
if(clojure.set.subset_QMARK_(vars,bound)){
return null;
} else {
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),bound);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__62582 = arguments.length;
switch (G__62582) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,clause,clause);
});

datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__62583 = datascript.query.looks_like_QMARK_;
var expr__62584 = clause;
if(cljs.core.truth_((function (){var G__62586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
var G__62587 = expr__62584;
return (pred__62583.cljs$core$IFn$_invoke$arity$2 ? pred__62583.cljs$core$IFn$_invoke$arity$2(G__62586,G__62587) : pred__62583.call(null,G__62586,G__62587));
})())){
return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__62588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
var G__62589 = expr__62584;
return (pred__62583.cljs$core$IFn$_invoke$arity$2 ? pred__62583.cljs$core$IFn$_invoke$arity$2(G__62588,G__62589) : pred__62583.call(null,G__62588,G__62589));
})())){
return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__62590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__62591 = expr__62584;
return (pred__62583.cljs$core$IFn$_invoke$arity$2 ? pred__62583.cljs$core$IFn$_invoke$arity$2(G__62590,G__62591) : pred__62583.call(null,G__62590,G__62591));
})())){
var vec__62592 = clause;
var seq__62593 = cljs.core.seq(vec__62592);
var first__62594 = cljs.core.first(seq__62593);
var seq__62593__$1 = cljs.core.next(seq__62593);
var source_sym = first__62594;
var rest = seq__62593__$1;
var _STAR_implicit_source_STAR__orig_val__62596 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__62597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__62597;

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__62596;
}} else {
if(cljs.core.truth_((function (){var G__62598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__62599 = expr__62584;
return (pred__62583.cljs$core$IFn$_invoke$arity$2 ? pred__62583.cljs$core$IFn$_invoke$arity$2(G__62598,G__62599) : pred__62583.call(null,G__62598,G__62599));
})())){
var vec__62600 = clause;
var seq__62601 = cljs.core.seq(vec__62600);
var first__62602 = cljs.core.first(seq__62601);
var seq__62601__$1 = cljs.core.next(seq__62601);
var _ = first__62602;
var branches = seq__62601__$1;
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__62600,seq__62601,first__62602,seq__62601__$1,_,branches,pred__62583,expr__62584){
return (function (p1__62576_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__62576_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__62576_SHARP_));
});})(context,clause,orig_clause,vec__62600,seq__62601,first__62602,seq__62601__$1,_,branches,pred__62583,expr__62584))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__62600,seq__62601,first__62602,seq__62601__$1,_,branches,contexts,pred__62583,expr__62584){
return (function (p1__62577_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__62577_SHARP_));
});})(context,clause,orig_clause,vec__62600,seq__62601,first__62602,seq__62601__$1,_,branches,contexts,pred__62583,expr__62584))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__62605 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__62606 = expr__62584;
return (pred__62583.cljs$core$IFn$_invoke$arity$2 ? pred__62583.cljs$core$IFn$_invoke$arity$2(G__62605,G__62606) : pred__62583.call(null,G__62605,G__62606));
})())){
var vec__62608 = clause;
var seq__62609 = cljs.core.seq(vec__62608);
var first__62610 = cljs.core.first(seq__62609);
var seq__62609__$1 = cljs.core.next(seq__62609);
var _ = first__62610;
var first__62610__$1 = cljs.core.first(seq__62609__$1);
var seq__62609__$2 = cljs.core.next(seq__62609__$1);
var vec__62611 = first__62610__$1;
var seq__62612 = cljs.core.seq(vec__62611);
var first__62613 = cljs.core.first(seq__62612);
var seq__62612__$1 = cljs.core.next(seq__62612);
var req_vars = first__62613;
var vars = seq__62612__$1;
var branches = seq__62609__$2;
datascript.query.check_bound(context,req_vars,orig_clause);

var G__63407 = context;
var G__63408 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__63409 = clause;
context = G__63407;
clause = G__63408;
orig_clause = G__63409;
continue;
} else {
if(cljs.core.truth_((function (){var G__62614 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__62615 = expr__62584;
return (pred__62583.cljs$core$IFn$_invoke$arity$2 ? pred__62583.cljs$core$IFn$_invoke$arity$2(G__62614,G__62615) : pred__62583.call(null,G__62614,G__62615));
})())){
var vec__62616 = clause;
var seq__62617 = cljs.core.seq(vec__62616);
var first__62618 = cljs.core.first(seq__62617);
var seq__62617__$1 = cljs.core.next(seq__62617);
var _ = first__62618;
var first__62618__$1 = cljs.core.first(seq__62617__$1);
var seq__62617__$2 = cljs.core.next(seq__62617__$1);
var vars = first__62618__$1;
var branches = seq__62617__$2;
var vars__$1 = cljs.core.set(vars);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__62616,seq__62617,first__62618,seq__62617__$1,_,first__62618__$1,seq__62617__$2,vars,branches,vars__$1,join_context,pred__62583,expr__62584){
return (function (p1__62578_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__62578_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__62578_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__62616,seq__62617,first__62618,seq__62617__$1,_,first__62618__$1,seq__62617__$2,vars,branches,vars__$1,join_context,pred__62583,expr__62584))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__62616,seq__62617,first__62618,seq__62617__$1,_,first__62618__$1,seq__62617__$2,vars,branches,vars__$1,join_context,contexts,pred__62583,expr__62584){
return (function (p1__62579_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__62579_SHARP_));
});})(context,clause,orig_clause,vec__62616,seq__62617,first__62618,seq__62617__$1,_,first__62618__$1,seq__62617__$2,vars,branches,vars__$1,join_context,contexts,pred__62583,expr__62584))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__62619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__62620 = expr__62584;
return (pred__62583.cljs$core$IFn$_invoke$arity$2 ? pred__62583.cljs$core$IFn$_invoke$arity$2(G__62619,G__62620) : pred__62583.call(null,G__62619,G__62620));
})())){
var vec__62621 = clause;
var seq__62622 = cljs.core.seq(vec__62621);
var first__62623 = cljs.core.first(seq__62622);
var seq__62622__$1 = cljs.core.next(seq__62622);
var _ = first__62623;
var clauses = seq__62622__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__62626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__62627 = expr__62584;
return (pred__62583.cljs$core$IFn$_invoke$arity$2 ? pred__62583.cljs$core$IFn$_invoke$arity$2(G__62626,G__62627) : pred__62583.call(null,G__62626,G__62627));
})())){
var vec__62628 = clause;
var seq__62629 = cljs.core.seq(vec__62628);
var first__62630 = cljs.core.first(seq__62629);
var seq__62629__$1 = cljs.core.next(seq__62629);
var _ = first__62630;
var clauses = seq__62629__$1;
var bound_vars = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (context,clause,orig_clause,vec__62628,seq__62629,first__62630,seq__62629__$1,_,clauses,pred__62583,expr__62584){
return (function (p1__62580_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__62580_SHARP_));
});})(context,clause,orig_clause,vec__62628,seq__62629,first__62630,seq__62629__$1,_,clauses,pred__62583,expr__62584))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound_vars,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: none of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0))," is bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__62631 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__62632 = expr__62584;
return (pred__62583.cljs$core$IFn$_invoke$arity$2 ? pred__62583.cljs$core$IFn$_invoke$arity$2(G__62631,G__62632) : pred__62583.call(null,G__62631,G__62632));
})())){
var vec__62633 = clause;
var seq__62634 = cljs.core.seq(vec__62633);
var first__62635 = cljs.core.first(seq__62634);
var seq__62634__$1 = cljs.core.next(seq__62634);
var _ = first__62635;
var first__62635__$1 = cljs.core.first(seq__62634__$1);
var seq__62634__$2 = cljs.core.next(seq__62634__$1);
var vars = first__62635__$1;
var clauses = seq__62634__$2;
var ___$1 = datascript.query.check_bound(context,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__62637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__62638 = expr__62584;
return (pred__62583.cljs$core$IFn$_invoke$arity$2 ? pred__62583.cljs$core$IFn$_invoke$arity$2(G__62637,G__62638) : pred__62583.call(null,G__62637,G__62638));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__62642 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__62643 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__62643;

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__62642;
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__62584)].join('')));
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
break;
}
});

datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3;

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(datascript.query.rule_QMARK_(context,clause)){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
var _STAR_implicit_source_STAR__orig_val__62649 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__62650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));
datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__62650;

try{var G__62653 = context;
var G__62654 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__62653,G__62654) : datascript.query.resolve_clause.call(null,G__62653,G__62654));
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__62649;
}} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule(context,clause));
}
} else {
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__62658 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__62659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__62659;

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__62658;
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__62674 = arguments.length;
switch (G__62674) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array(cljs.core.count(symbols))], null),rels,symbols);
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__5737__auto__ = cljs.core.first(rels);
if((temp__5737__auto__ == null)){
return acc;
} else {
var rel = temp__5737__auto__;
var keep_attrs = cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__63453 = acc;
var G__63454 = cljs.core.next(rels);
var G__63455 = symbols;
acc = G__63453;
rels = G__63454;
symbols = G__63455;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__5737__auto__){
return (function (p1__62663_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__62663_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5737__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__63456 = (function (){var iter__4523__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function datascript$query$iter__62679(s__62680){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function (){
var s__62680__$1 = s__62680;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62680__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var t1 = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__62680__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function datascript$query$iter__62679_$_iter__62681(s__62682){
return (new cljs.core.LazySeq(null,((function (s__62680__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function (){
var s__62682__$1 = s__62682;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__62682__$1);
if(temp__5735__auto____$1){
var s__62682__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62682__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__62682__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__62684 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__62683 = (0);
while(true){
if((i__62683 < size__4522__auto__)){
var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__62683);
cljs.core.chunk_append(b__62684,(function (){var res = cljs.core.aclone(t1);
var n__4607__auto___63459 = len;
var i_63460 = (0);
while(true){
if((i_63460 < n__4607__auto___63459)){
var temp__5739__auto___63461 = (copy_map[i_63460]);
if((temp__5739__auto___63461 == null)){
} else {
var idx_63462 = temp__5739__auto___63461;
(res[i_63460] = (t2[idx_63462]));
}

var G__63463 = (i_63460 + (1));
i_63460 = G__63463;
continue;
} else {
}
break;
}

return res;
})());

var G__63464 = (i__62683 + (1));
i__62683 = G__63464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62684),datascript$query$iter__62679_$_iter__62681(cljs.core.chunk_rest(s__62682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62684),null);
}
} else {
var t2 = cljs.core.first(s__62682__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__4607__auto___63468 = len;
var i_63469 = (0);
while(true){
if((i_63469 < n__4607__auto___63468)){
var temp__5739__auto___63470 = (copy_map[i_63469]);
if((temp__5739__auto___63470 == null)){
} else {
var idx_63471 = temp__5739__auto___63470;
(res[i_63469] = (t2[idx_63471]));
}

var G__63472 = (i_63469 + (1));
i_63469 = G__63472;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__62679_$_iter__62681(cljs.core.rest(s__62682__$2)));
}
} else {
return null;
}
break;
}
});})(s__62680__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__))
,null,null));
});})(s__62680__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,datascript$query$iter__62679(cljs.core.rest(s__62680__$1)));
} else {
var G__63473 = cljs.core.rest(s__62680__$1);
s__62680__$1 = G__63473;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__))
;
return iter__4523__auto__(acc);
})();
var G__63457 = cljs.core.next(rels);
var G__63458 = symbols;
acc = G__63456;
rels = G__63457;
symbols = G__63458;
continue;
}
}
break;
}
});

datascript.query._collect.cljs$lang$maxFixedArity = 3;

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__4433__auto__ = (((var$ == null))?null:var$);
var m__4434__auto__ = (datascript.query._context_resolve[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4434__auto__.call(null,var$,context));
} else {
var m__4431__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4431__auto__.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
});

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
});

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
});

datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
});
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_(element)){
var f = datascript.query._context_resolve(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f){
return (function (p1__62711_SHARP_){
return datascript.query._context_resolve(p1__62711_SHARP_,context);
});})(f))
,cljs.core.butlast(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f,args){
return (function (p1__62712_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__62712_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__62717_SHARP_,p2__62718_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__62717_SHARP_) : pred.call(null,p1__62717_SHARP_)))){
return p2__62718_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (group_idxs){
return (function (p1__62722_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__62722_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__4523__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__62727(s__62728){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__62728__$1 = s__62728;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62728__$1);
if(temp__5735__auto__){
var s__62728__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62728__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__62728__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__62730 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__62729 = (0);
while(true){
if((i__62729 < size__4522__auto__)){
var vec__62733 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__62729);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62733,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62733,(1),null);
cljs.core.chunk_append(b__62730,datascript.query._aggregate(find_elements,context,tuples));

var G__63507 = (i__62729 + (1));
i__62729 = G__63507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62730),datascript$query$aggregate_$_iter__62727(cljs.core.chunk_rest(s__62728__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62730),null);
}
} else {
var vec__62739 = cljs.core.first(s__62728__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62739,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62739,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__62727(cljs.core.rest(s__62728__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__4523__auto__(grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$2 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__4433__auto__ = (((find == null))?null:find);
var m__4434__auto__ = (datascript.query._post_process[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__4434__auto__.call(null,find,tuples));
} else {
var m__4431__auto__ = (datascript.query._post_process["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__4431__auto__.call(null,find,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
}
});

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
});

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
});

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
});

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first(tuples);
});
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__4523__auto__ = (function datascript$query$pull_$_iter__62759(s__62760){
return (new cljs.core.LazySeq(null,(function (){
var s__62760__$1 = s__62760;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62760__$1);
if(temp__5735__auto__){
var s__62760__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62760__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__62760__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__62762 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__62761 = (0);
while(true){
if((i__62761 < size__4522__auto__)){
var find = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__62761);
cljs.core.chunk_append(b__62762,((datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__63540 = (i__62761 + (1));
i__62761 = G__63540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62762),datascript$query$pull_$_iter__62759(cljs.core.chunk_rest(s__62760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62762),null);
}
} else {
var find = cljs.core.first(s__62760__$2);
return cljs.core.cons(((datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__62759(cljs.core.rest(s__62760__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(find_elements);
})();
var iter__4523__auto__ = ((function (resolved){
return (function datascript$query$pull_$_iter__62766(s__62767){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__62767__$1 = s__62767;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62767__$1);
if(temp__5735__auto__){
var s__62767__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62767__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__62767__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__62769 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__62768 = (0);
while(true){
if((i__62768 < size__4522__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__62768);
cljs.core.chunk_append(b__62769,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__62768,tuple,c__4521__auto__,size__4522__auto__,b__62769,s__62767__$2,temp__5735__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__62774 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62774,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62774,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__62768,tuple,c__4521__auto__,size__4522__auto__,b__62769,s__62767__$2,temp__5735__auto__,resolved))
,resolved,tuple));

var G__63548 = (i__62768 + (1));
i__62768 = G__63548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62769),datascript$query$pull_$_iter__62766(cljs.core.chunk_rest(s__62767__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62769),null);
}
} else {
var tuple = cljs.core.first(s__62767__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__62767__$2,temp__5735__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__62781 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62781,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62781,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__62767__$2,temp__5735__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__62766(cljs.core.rest(s__62767__$2)));
}
} else {
return null;
}
break;
}
});})(resolved))
,null,null));
});})(resolved))
;
return iter__4523__auto__(resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_(datascript.lru.lru((100)));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(datascript.query.query_cache),q,null);
if((temp__5737__auto__ == null)){
var qp = datascript.parser.parse_query(q);
datascript.query.query_cache.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.query.query_cache.cljs$core$IDeref$_deref$arity$1(null),q,qp));

return qp;
} else {
var cached = temp__5737__auto__;
return cached;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63553 = arguments.length;
var i__4731__auto___63554 = (0);
while(true){
if((i__4731__auto___63554 < len__4730__auto___63553)){
args__4736__auto__.push((arguments[i__4731__auto___63554]));

var G__63563 = (i__4731__auto___63554 + (1));
i__4731__auto___63554 = G__63563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query(q);
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__62799 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__62799);
} else {
return G__62799;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__62801 = resultset;
var G__62801__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__62801,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__62792_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__62792_SHARP_,(0),result_arity));
});})(G__62801,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__62801):G__62801);
var G__62801__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__62801__$1):G__62801__$1);
var G__62801__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__62801__$2):G__62801__$2);
return datascript.query._post_process(find,G__62801__$3);

});

datascript.query.q.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
datascript.query.q.cljs$lang$applyTo = (function (seq62793){
var G__62794 = cljs.core.first(seq62793);
var seq62793__$1 = cljs.core.next(seq62793);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62794,seq62793__$1);
});


//# sourceMappingURL=datascript.query.js.map
