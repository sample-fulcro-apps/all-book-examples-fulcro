goog.provide('com.wsscode.pathom.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.parser');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('edn_query_language.core');
goog.require('goog.object');
goog.require('com.wsscode.pathom.trace');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__63335){
return cljs.core.map_QMARK_(G__63335);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__63338){
return cljs.core.vector_QMARK_(G__63338);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","optional?","com.wsscode.pathom.core/optional?",910087942),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"list","list",765357683)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),"Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null)),"null"], null), null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null))]));
}),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__63379){
return cljs.core.map_QMARK_(G__63379);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",-1037999645,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__63381_SHARP_){
return (p1__63381_SHARP_ instanceof cljs.core.IAtom);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),cljs.core.set_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800),new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952),new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"tx","tx",466630418)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","plugin","com.wsscode.pathom.core/plugin",-881556304),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__63416){
return cljs.core.map_QMARK_(G__63416);
})], null),(function (G__63416){
return cljs.core.map_QMARK_(G__63416);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"call","call",-519999866)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761));
com.wsscode.pathom.core.break_values = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),null], null), null);
/**
 * Takes an AST and return a single set with all properties that appear in a query.
 * 
 *   Example:
 * 
 *   (-> [:foo {:bar [:baz]}] eql/query->ast pc/all-out-attributes)
 *   ; => #{:foo :bar :baz}
 */
com.wsscode.pathom.core.ast_properties = (function com$wsscode$pathom$core$ast_properties(p__63423){
var map__63424 = p__63423;
var map__63424__$1 = (((((!((map__63424 == null))))?(((((map__63424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63424):map__63424);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63424__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__63424,map__63424__$1,children){
return (function (attrs,p__63429){
var map__63430 = p__63429;
var map__63430__$1 = (((((!((map__63430 == null))))?(((((map__63430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63430):map__63430);
var node = map__63430__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63430__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__63432 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key);
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__63432,(com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1(node) : com.wsscode.pathom.core.ast_properties.call(null,node)));
} else {
return G__63432;
}
});})(map__63424,map__63424__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
com.wsscode.pathom.core.deep_merge = (function com$wsscode$pathom$core$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64951 = arguments.length;
var i__4731__auto___64952 = (0);
while(true){
if((i__4731__auto___64952 < len__4730__auto___64951)){
args__4736__auto__.push((arguments[i__4731__auto___64952]));

var G__64953 = (i__4731__auto___64952 + (1));
i__4731__auto___64952 = G__64953;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_((function (p1__63435_SHARP_){
return ((cljs.core.map_QMARK_(p1__63435_SHARP_)) || ((p1__63435_SHARP_ == null)));
}),xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,com.wsscode.pathom.core.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

com.wsscode.pathom.core.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.wsscode.pathom.core.deep_merge.cljs$lang$applyTo = (function (seq63437){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63437));
});

/**
 * Given a query expression convert it into an AST.
 */
com.wsscode.pathom.core.query__GT_ast = (function com$wsscode$pathom$core$query__GT_ast(query_expr){
return com.wsscode.pathom.parser.query__GT_ast(query_expr);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","query->ast","com.wsscode.pathom.core/query->ast",1131110178,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null,null));
/**
 * Call query->ast and return the first children.
 */
com.wsscode.pathom.core.query__GT_ast1 = (function com$wsscode$pathom$core$query__GT_ast1(query_expr){
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.query__GT_ast(query_expr)));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","query->ast1","com.wsscode.pathom.core/query->ast1",-1679235515,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null,null));
com.wsscode.pathom.core.ast__GT_query = (function com$wsscode$pathom$core$ast__GT_query(query_ast){

return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","ast->query","com.wsscode.pathom.core/ast->query",1778798815,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null,null));
com.wsscode.pathom.core.filter_ast = (function com$wsscode$pathom$core$filter_ast(f,ast){
return clojure.walk.prewalk((function com$wsscode$pathom$core$filter_ast_$_filter_ast_walk(x){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword(null,"children","children",-940561982))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__63452_SHARP_){
return cljs.core.filterv(f,p1__63452_SHARP_);
}));
} else {
return x;
}
}),ast);
});
/**
 * Get params from env, always returns a map.
 */
com.wsscode.pathom.core.params = (function com$wsscode$pathom$core$params(env){
var or__4131__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Add attribute param, eg:
 * 
 *   ```
 *   (p/update-attribute-param :keyword assoc :foo "bar") => (:keyword {:foo "bar"})
 *   (p/update-attribute-param '(:keyword {:param "prev"}) assoc :foo "bar") => (:keyword {:foo "bar" :param "prev"})
 *   ```
 *   
 */
com.wsscode.pathom.core.update_attribute_param = (function com$wsscode$pathom$core$update_attribute_param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64968 = arguments.length;
var i__4731__auto___64969 = (0);
while(true){
if((i__4731__auto___64969 < len__4730__auto___64968)){
args__4736__auto__.push((arguments[i__4731__auto___64969]));

var G__64970 = (i__4731__auto___64969 + (1));
i__4731__auto___64969 = G__64970;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_attribute_param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_attribute_param.cljs$core$IFn$_invoke$arity$variadic = (function (x,f,args){
if(cljs.core.seq_QMARK_(x)){
var vec__63474 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63474,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63474,(1),null);
return (new cljs.core.List(null,k,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p,args),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,x,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.PersistentArrayMap.EMPTY,args),null,(1),null)),(2),null));
}
});

com.wsscode.pathom.core.update_attribute_param.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_attribute_param.cljs$lang$applyTo = (function (seq63465){
var G__63466 = cljs.core.first(seq63465);
var seq63465__$1 = cljs.core.next(seq63465);
var G__63467 = cljs.core.first(seq63465__$1);
var seq63465__$2 = cljs.core.next(seq63465__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63466,G__63467,seq63465__$2);
});

com.wsscode.pathom.core.optional_attribute = (function com$wsscode$pathom$core$optional_attribute(x){
if(cljs.core.truth_((function (){var or__4131__auto__ = (x instanceof cljs.core.Keyword);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
})())){
} else {
throw (new Error(["Assert failed: ","Optional value must be a keyword or a parameterized attribute","\n","(or (keyword? x) (list x))"].join('')));
}

return com.wsscode.pathom.core.update_attribute_param.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","optional?","com.wsscode.pathom.core/optional?",910087942),true], 0));
});
com.wsscode.pathom.core._QMARK_ = com.wsscode.pathom.core.optional_attribute;
/**
 * Given an AST point, check if the children is a union query type.
 */
com.wsscode.pathom.core.union_children_QMARK_ = (function com$wsscode$pathom$core$union_children_QMARK_(ast){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__63477 = ast;
var G__63477__$1 = (((G__63477 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__63477));
var G__63477__$2 = (((G__63477__$1 == null))?null:cljs.core.first(G__63477__$1));
if((G__63477__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__63477__$2);
}
})());
});
com.wsscode.pathom.core.read_from_STAR_ = (function com$wsscode$pathom$core$read_from_STAR_(p__63480,reader){
var map__63481 = p__63480;
var map__63481__$1 = (((((!((map__63481 == null))))?(((((map__63481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63481):map__63481);
var env = map__63481__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63481__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.map_QMARK_(reader)){
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var temp__5733__auto__ = cljs.core.find(reader,k);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__63483 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63483,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63483,(1),null);
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,v) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,v));
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
if(cljs.core.vector_QMARK_(reader)){
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__63481,map__63481__$1,env,ast){
return (function (p1__63478_SHARP_){
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,p1__63478_SHARP_) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,p1__63478_SHARP_));
});})(map__63481,map__63481__$1,env,ast))
),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (map__63481,map__63481__$1,env,ast){
return (function (p1__63479_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__63479_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
});})(map__63481,map__63481__$1,env,ast))
),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),reader);
if(cljs.core.seq(res)){
return cljs.core.first(res);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
if(cljs.core.ifn_QMARK_(reader)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't process reader",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader","reader",169660853),reader], null));

}
}
}
});
/**
 * Runs the read process for the reading, the reader can be a function, a vector or a map:
 * 
 *   function: will receive the environment as argument
 *   map: will dispatch from the ast key to a reader on the map value
 *   vector: will try to run each reader in sequence, when a reader returns ::p/continue it will try the next
 */
com.wsscode.pathom.core.read_from = (function com$wsscode$pathom$core$read_from(env,reader){
var res__59683__auto__ = com.wsscode.pathom.core.read_from_STAR_(env,reader);
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__){
return (function (state_63502){
var state_val_63503 = (state_63502[(1)]);
if((state_val_63503 === (1))){
var state_63502__$1 = state_63502;
var statearr_63505_64992 = state_63502__$1;
(statearr_63505_64992[(2)] = null);

(statearr_63505_64992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63503 === (2))){
var inst_63500 = (state_63502[(2)]);
var state_63502__$1 = state_63502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63502__$1,inst_63500);
} else {
if((state_val_63503 === (3))){
var inst_63487 = (state_63502[(2)]);
var state_63502__$1 = state_63502;
var statearr_63508_64994 = state_63502__$1;
(statearr_63508_64994[(2)] = inst_63487);


cljs.core.async.impl.ioc_helpers.process_exception(state_63502__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63503 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_63502,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_63502__$1 = state_63502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63502__$1,(5),res__59683__auto__);
} else {
if((state_val_63503 === (5))){
var inst_63493 = (state_63502[(7)]);
var inst_63492 = (state_63502[(2)]);
var inst_63493__$1 = com.wsscode.common.async_cljs.throw_err(inst_63492);
var inst_63494 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63493__$1,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
var state_63502__$1 = (function (){var statearr_63509 = state_63502;
(statearr_63509[(7)] = inst_63493__$1);

return statearr_63509;
})();
if(inst_63494){
var statearr_63510_64996 = state_63502__$1;
(statearr_63510_64996[(1)] = (6));

} else {
var statearr_63511_64997 = state_63502__$1;
(statearr_63511_64997[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63503 === (6))){
var state_63502__$1 = state_63502;
var statearr_63512_64998 = state_63502__$1;
(statearr_63512_64998[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));

(statearr_63512_64998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63503 === (7))){
var inst_63493 = (state_63502[(7)]);
var state_63502__$1 = state_63502;
var statearr_63513_65001 = state_63502__$1;
(statearr_63513_65001[(2)] = inst_63493);

(statearr_63513_65001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63503 === (8))){
var inst_63498 = (state_63502[(2)]);
var state_63502__$1 = state_63502;
var statearr_63516_65002 = state_63502__$1;
(statearr_63516_65002[(2)] = inst_63498);


cljs.core.async.impl.ioc_helpers.process_exception(state_63502__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__52131__auto__,res__59683__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59683__auto__){
return (function() {
var com$wsscode$pathom$core$read_from_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$read_from_$_state_machine__52036__auto____0 = (function (){
var statearr_63517 = [null,null,null,null,null,null,null,null];
(statearr_63517[(0)] = com$wsscode$pathom$core$read_from_$_state_machine__52036__auto__);

(statearr_63517[(1)] = (1));

return statearr_63517;
});
var com$wsscode$pathom$core$read_from_$_state_machine__52036__auto____1 = (function (state_63502){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_63502);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e63518){if((e63518 instanceof Object)){
var ex__52039__auto__ = e63518;
var statearr_63520_65006 = state_63502;
(statearr_63520_65006[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65007 = state_63502;
state_63502 = G__65007;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$read_from_$_state_machine__52036__auto__ = function(state_63502){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$read_from_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$read_from_$_state_machine__52036__auto____1.call(this,state_63502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$read_from_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$read_from_$_state_machine__52036__auto____0;
com$wsscode$pathom$core$read_from_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$read_from_$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$read_from_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__))
})();
var state__52133__auto__ = (function (){var statearr_63524 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_63524[(6)] = c__52131__auto__);

return statearr_63524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__))
);

return c__52131__auto__;
} else {
var res = res__59683__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194))){
return new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137);
} else {
return res;
}
}
});
com.wsscode.pathom.core.native_map_QMARK_ = (function com$wsscode$pathom$core$native_map_QMARK_(x){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),cljs.core.PersistentArrayMap)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),cljs.core.PersistentHashMap)));
});
/**
 * Walk the structure and transduce every map with xform.
 */
com.wsscode.pathom.core.transduce_maps = (function com$wsscode$pathom$core$transduce_maps(xform,input){
return clojure.walk.prewalk((function com$wsscode$pathom$core$transduce_maps_$_elide_items_walk(x){
if(com.wsscode.pathom.core.native_map_QMARK_(x)){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,xform,x),cljs.core.meta(x));
} else {
return x;
}
}),input);
});
/**
 * Recursivelly transduce children on the AST, you can use this to apply filter/transformations
 *   on a whole AST. Each iteration of the transducer will get a single AST node to process.
 * 
 *   ```
 *   (->> [:a {:b [:c :d]} :e]
 *     (p/query->ast)
 *     (p/transduce-children (remove (comp #{:a :c} :key)))
 *     (p/ast->query))
 *   ; => [{:b [:d]} :e]
 *   ```
 */
com.wsscode.pathom.core.transduce_children = (function com$wsscode$pathom$core$transduce_children(xform,p__63529){
var map__63531 = p__63529;
var map__63531__$1 = (((((!((map__63531 == null))))?(((((map__63531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63531):map__63531);
var node = map__63531__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63531__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__63534 = node;
if(cljs.core.seq(children)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__63534,new cljs.core.Keyword(null,"children","children",-940561982),((function (G__63534,map__63531,map__63531__$1,node,children){
return (function (children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__63534,map__63531,map__63531__$1,node,children){
return (function (p1__63526_SHARP_){
return (com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2(xform,p1__63526_SHARP_) : com.wsscode.pathom.core.transduce_children.call(null,xform,p1__63526_SHARP_));
});})(G__63534,map__63531,map__63531__$1,node,children))
)),children__$1);
});})(G__63534,map__63531,map__63531__$1,node,children))
);
} else {
return G__63534;
}
});
/**
 * Removes any item on set item-set from the input
 */
com.wsscode.pathom.core.elide_items = (function com$wsscode$pathom$core$elide_items(item_set,input){
return cljs.core.with_meta(com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__63535){
var vec__63536 = p__63535;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63536,(1),null);
return cljs.core.contains_QMARK_(item_set,v);
})),input),cljs.core.meta(input));
});
/**
 * Convert all ::p/not-found values of maps to nil
 */
com.wsscode.pathom.core.elide_not_found = (function com$wsscode$pathom$core$elide_not_found(input){
return com.wsscode.pathom.core.elide_items(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null),input);
});
com.wsscode.pathom.core.focus_subquery = com.wsscode.pathom.parser.focus_subquery;
com.wsscode.pathom.core.atom_QMARK_ = (function com$wsscode$pathom$core$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
com.wsscode.pathom.core.normalize_atom = (function com$wsscode$pathom$core$normalize_atom(x){
if(com.wsscode.pathom.core.atom_QMARK_(x)){
return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x);
}
});
com.wsscode.pathom.core.special_outputs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),null], null), null);
com.wsscode.pathom.core.raw_entity = (function com$wsscode$pathom$core$raw_entity(p__63560){
var map__63561 = p__63560;
var map__63561__$1 = (((((!((map__63561 == null))))?(((((map__63561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63561):map__63561);
var env = map__63561__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63561__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,(function (){var or__4131__auto__ = entity_key;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031);
}
})());
});
com.wsscode.pathom.core.maybe_atom = (function com$wsscode$pathom$core$maybe_atom(x){
if(com.wsscode.pathom.core.atom_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
/**
 * This is used for merging new parsed attributes from entity, works like regular merge but if the value from the right
 *   direction is not found, then the previous value will be kept.
 */
com.wsscode.pathom.core.entity_value_merge = (function com$wsscode$pathom$core$entity_value_merge(x,y){
if((y === new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137))){
return x;
} else {
return y;
}
});
/**
 * Fetch the entity according to the ::entity-key. If the entity is an IAtom, it will be derefed.
 * 
 *   If a second argument is sent, calls the parser against current element to guarantee that some fields are loaded. This
 *   is useful when you need to ensure some values are loaded in order to fetch some more complex data. NOTE: When using
 *   this call with an explicit vector of attributes the parser will not be invoked for attributes that already exist in
 *   the current value of the current entity.
 */
com.wsscode.pathom.core.entity = (function com$wsscode$pathom$core$entity(var_args){
var G__63565 = arguments.length;
switch (G__63565) {
case 1:
return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1 = (function (env){
var e = com.wsscode.pathom.core.raw_entity(env);
return com.wsscode.pathom.core.maybe_atom(e);
});

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2 = (function (p__63568,attributes){
var map__63570 = p__63568;
var map__63570__$1 = (((((!((map__63570 == null))))?(((((map__63570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63570):map__63570);
var env = map__63570__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63570__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var res__59683__auto__ = (function (){var G__63594 = env;
var G__63595 = cljs.core.filterv(cljs.core.complement(cljs.core.set(cljs.core.keys(e))),attributes);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__63594,G__63595) : parser.call(null,G__63594,G__63595));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__,e,map__63570,map__63570__$1,env,parser){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__,e,map__63570,map__63570__$1,env,parser){
return (function (state_63612){
var state_val_63613 = (state_63612[(1)]);
if((state_val_63613 === (1))){
var state_63612__$1 = state_63612;
var statearr_63614_65023 = state_63612__$1;
(statearr_63614_65023[(2)] = null);

(statearr_63614_65023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63613 === (2))){
var inst_63610 = (state_63612[(2)]);
var state_63612__$1 = state_63612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63612__$1,inst_63610);
} else {
if((state_val_63613 === (3))){
var inst_63596 = (state_63612[(2)]);
var state_63612__$1 = state_63612;
var statearr_63667_65026 = state_63612__$1;
(statearr_63667_65026[(2)] = inst_63596);


cljs.core.async.impl.ioc_helpers.process_exception(state_63612__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63613 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_63612,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_63612__$1 = state_63612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63612__$1,(5),res__59683__auto__);
} else {
if((state_val_63613 === (5))){
var inst_63602 = (state_63612[(7)]);
var inst_63601 = (state_63612[(2)]);
var inst_63602__$1 = com.wsscode.common.async_cljs.throw_err(inst_63601);
var inst_63603 = cljs.core.map_QMARK_(inst_63602__$1);
var state_63612__$1 = (function (){var statearr_63668 = state_63612;
(statearr_63668[(7)] = inst_63602__$1);

return statearr_63668;
})();
if(inst_63603){
var statearr_63669_65030 = state_63612__$1;
(statearr_63669_65030[(1)] = (6));

} else {
var statearr_63670_65031 = state_63612__$1;
(statearr_63670_65031[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63613 === (6))){
var inst_63602 = (state_63612[(7)]);
var inst_63605 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.entity_value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,inst_63602], 0));
var state_63612__$1 = state_63612;
var statearr_63672_65032 = state_63612__$1;
(statearr_63672_65032[(2)] = inst_63605);

(statearr_63672_65032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63613 === (7))){
var state_63612__$1 = state_63612;
var statearr_63673_65033 = state_63612__$1;
(statearr_63673_65033[(2)] = e);

(statearr_63673_65033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63613 === (8))){
var inst_63608 = (state_63612[(2)]);
var state_63612__$1 = state_63612;
var statearr_63674_65034 = state_63612__$1;
(statearr_63674_65034[(2)] = inst_63608);


cljs.core.async.impl.ioc_helpers.process_exception(state_63612__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__52131__auto__,res__59683__auto__,e,map__63570,map__63570__$1,env,parser))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59683__auto__,e,map__63570,map__63570__$1,env,parser){
return (function() {
var com$wsscode$pathom$core$state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$state_machine__52036__auto____0 = (function (){
var statearr_63678 = [null,null,null,null,null,null,null,null];
(statearr_63678[(0)] = com$wsscode$pathom$core$state_machine__52036__auto__);

(statearr_63678[(1)] = (1));

return statearr_63678;
});
var com$wsscode$pathom$core$state_machine__52036__auto____1 = (function (state_63612){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_63612);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e63679){if((e63679 instanceof Object)){
var ex__52039__auto__ = e63679;
var statearr_63680_65039 = state_63612;
(statearr_63680_65039[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63679;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65040 = state_63612;
state_63612 = G__65040;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__52036__auto__ = function(state_63612){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__52036__auto____1.call(this,state_63612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__52036__auto____0;
com$wsscode$pathom$core$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__52036__auto____1;
return com$wsscode$pathom$core$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__,e,map__63570,map__63570__$1,env,parser))
})();
var state__52133__auto__ = (function (){var statearr_63681 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_63681[(6)] = c__52131__auto__);

return statearr_63681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__,e,map__63570,map__63570__$1,env,parser))
);

return c__52131__auto__;
} else {
var res = res__59683__auto__;
if(cljs.core.map_QMARK_(res)){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.entity_value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,res], 0));
} else {
return e;
}
}
});

com.wsscode.pathom.core.entity.cljs$lang$maxFixedArity = 2;

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",-1769729738,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__63683){
return cljs.core.coll_QMARK_(G__63683);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),null,null,null));
/**
 * Helper function to fetch a single attribute from current entity.
 */
com.wsscode.pathom.core.entity_attr = (function com$wsscode$pathom$core$entity_attr(var_args){
var G__63688 = arguments.length;
switch (G__63688) {
case 2:
return com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$2 = (function (env,attr){
var res__59683__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__){
return (function (state_63701){
var state_val_63702 = (state_63701[(1)]);
if((state_val_63702 === (1))){
var state_63701__$1 = state_63701;
var statearr_63703_65049 = state_63701__$1;
(statearr_63703_65049[(2)] = null);

(statearr_63703_65049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63702 === (2))){
var inst_63699 = (state_63701[(2)]);
var state_63701__$1 = state_63701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63701__$1,inst_63699);
} else {
if((state_val_63702 === (3))){
var inst_63690 = (state_63701[(2)]);
var state_63701__$1 = state_63701;
var statearr_63704_65054 = state_63701__$1;
(statearr_63704_65054[(2)] = inst_63690);


cljs.core.async.impl.ioc_helpers.process_exception(state_63701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63702 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_63701,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_63701__$1 = state_63701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63701__$1,(5),res__59683__auto__);
} else {
if((state_val_63702 === (5))){
var inst_63695 = (state_63701[(2)]);
var inst_63696 = com.wsscode.common.async_cljs.throw_err(inst_63695);
var inst_63697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63696,attr);
var state_63701__$1 = state_63701;
var statearr_63705_65058 = state_63701__$1;
(statearr_63705_65058[(2)] = inst_63697);


cljs.core.async.impl.ioc_helpers.process_exception(state_63701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__52131__auto__,res__59683__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59683__auto__){
return (function() {
var com$wsscode$pathom$core$state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$state_machine__52036__auto____0 = (function (){
var statearr_63706 = [null,null,null,null,null,null,null];
(statearr_63706[(0)] = com$wsscode$pathom$core$state_machine__52036__auto__);

(statearr_63706[(1)] = (1));

return statearr_63706;
});
var com$wsscode$pathom$core$state_machine__52036__auto____1 = (function (state_63701){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_63701);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e63716){if((e63716 instanceof Object)){
var ex__52039__auto__ = e63716;
var statearr_63717_65065 = state_63701;
(statearr_63717_65065[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63716;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65066 = state_63701;
state_63701 = G__65066;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__52036__auto__ = function(state_63701){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__52036__auto____1.call(this,state_63701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__52036__auto____0;
com$wsscode$pathom$core$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__52036__auto____1;
return com$wsscode$pathom$core$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__))
})();
var state__52133__auto__ = (function (){var statearr_63718 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_63718[(6)] = c__52131__auto__);

return statearr_63718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__))
);

return c__52131__auto__;
} else {
var e = res__59683__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});

com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$3 = (function (env,attr,default$){
var res__59683__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__){
return (function (state_63747){
var state_val_63748 = (state_63747[(1)]);
if((state_val_63748 === (1))){
var state_63747__$1 = state_63747;
var statearr_63750_65067 = state_63747__$1;
(statearr_63750_65067[(2)] = null);

(statearr_63750_65067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63748 === (2))){
var inst_63745 = (state_63747[(2)]);
var state_63747__$1 = state_63747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63747__$1,inst_63745);
} else {
if((state_val_63748 === (3))){
var inst_63719 = (state_63747[(2)]);
var state_63747__$1 = state_63747;
var statearr_63754_65068 = state_63747__$1;
(statearr_63754_65068[(2)] = inst_63719);


cljs.core.async.impl.ioc_helpers.process_exception(state_63747__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63748 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_63747,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_63747__$1 = state_63747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63747__$1,(5),res__59683__auto__);
} else {
if((state_val_63748 === (5))){
var inst_63733 = (state_63747[(7)]);
var inst_63730 = (state_63747[(2)]);
var inst_63731 = com.wsscode.common.async_cljs.throw_err(inst_63730);
var inst_63733__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63731,attr);
var inst_63735 = [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null];
var inst_63736 = (new cljs.core.PersistentArrayMap(null,2,inst_63735,null));
var inst_63737 = (new cljs.core.PersistentHashSet(null,inst_63736,null));
var inst_63739 = (inst_63737.cljs$core$IFn$_invoke$arity$1 ? inst_63737.cljs$core$IFn$_invoke$arity$1(inst_63733__$1) : inst_63737.call(null,inst_63733__$1));
var state_63747__$1 = (function (){var statearr_63755 = state_63747;
(statearr_63755[(7)] = inst_63733__$1);

return statearr_63755;
})();
if(cljs.core.truth_(inst_63739)){
var statearr_63756_65069 = state_63747__$1;
(statearr_63756_65069[(1)] = (6));

} else {
var statearr_63757_65070 = state_63747__$1;
(statearr_63757_65070[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63748 === (6))){
var state_63747__$1 = state_63747;
var statearr_63758_65071 = state_63747__$1;
(statearr_63758_65071[(2)] = default$);

(statearr_63758_65071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63748 === (7))){
var inst_63733 = (state_63747[(7)]);
var state_63747__$1 = state_63747;
var statearr_63759_65072 = state_63747__$1;
(statearr_63759_65072[(2)] = inst_63733);

(statearr_63759_65072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63748 === (8))){
var inst_63743 = (state_63747[(2)]);
var state_63747__$1 = state_63747;
var statearr_63760_65074 = state_63747__$1;
(statearr_63760_65074[(2)] = inst_63743);


cljs.core.async.impl.ioc_helpers.process_exception(state_63747__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__52131__auto__,res__59683__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59683__auto__){
return (function() {
var com$wsscode$pathom$core$state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$state_machine__52036__auto____0 = (function (){
var statearr_63761 = [null,null,null,null,null,null,null,null];
(statearr_63761[(0)] = com$wsscode$pathom$core$state_machine__52036__auto__);

(statearr_63761[(1)] = (1));

return statearr_63761;
});
var com$wsscode$pathom$core$state_machine__52036__auto____1 = (function (state_63747){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_63747);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e63762){if((e63762 instanceof Object)){
var ex__52039__auto__ = e63762;
var statearr_63763_65075 = state_63747;
(statearr_63763_65075[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65077 = state_63747;
state_63747 = G__65077;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__52036__auto__ = function(state_63747){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__52036__auto____1.call(this,state_63747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__52036__auto____0;
com$wsscode$pathom$core$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__52036__auto____1;
return com$wsscode$pathom$core$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__))
})();
var state__52133__auto__ = (function (){var statearr_63764 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_63764[(6)] = c__52131__auto__);

return statearr_63764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__))
);

return c__52131__auto__;
} else {
var e = res__59683__auto__;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
if(cljs.core.truth_((function (){var fexpr__63765 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null);
return (fexpr__63765.cljs$core$IFn$_invoke$arity$1 ? fexpr__63765.cljs$core$IFn$_invoke$arity$1(x) : fexpr__63765.call(null,x));
})())){
return default$;
} else {
return x;
}
}
});

com.wsscode.pathom.core.entity_attr.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity-attr","com.wsscode.pathom.core/entity-attr",116696515,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),cljs.spec.alpha.maybe_impl(cljs.core.any_QMARK_,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
com.wsscode.pathom.core.entity_BANG_ = (function com$wsscode$pathom$core$entity_BANG_(p__63775,attributes){
var map__63776 = p__63775;
var map__63776__$1 = (((((!((map__63776 == null))))?(((((map__63776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63776):map__63776);
var env = map__63776__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63776__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var res__59683__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__,map__63776,map__63776__$1,env,path){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__,map__63776,map__63776__$1,env,path){
return (function (state_63805){
var state_val_63806 = (state_63805[(1)]);
if((state_val_63806 === (1))){
var state_63805__$1 = state_63805;
var statearr_63807_65082 = state_63805__$1;
(statearr_63807_65082[(2)] = null);

(statearr_63807_65082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63806 === (2))){
var inst_63803 = (state_63805[(2)]);
var state_63805__$1 = state_63805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63805__$1,inst_63803);
} else {
if((state_val_63806 === (3))){
var inst_63778 = (state_63805[(2)]);
var state_63805__$1 = state_63805;
var statearr_63808_65083 = state_63805__$1;
(statearr_63808_65083[(2)] = inst_63778);


cljs.core.async.impl.ioc_helpers.process_exception(state_63805__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63806 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_63805,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_63805__$1 = state_63805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63805__$1,(5),res__59683__auto__);
} else {
if((state_val_63806 === (5))){
var inst_63789 = (state_63805[(7)]);
var inst_63784 = (state_63805[(8)]);
var inst_63783 = (state_63805[(2)]);
var inst_63784__$1 = com.wsscode.common.async_cljs.throw_err(inst_63783);
var inst_63785 = cljs.core.set(attributes);
var inst_63786 = com.wsscode.pathom.core.elide_not_found(inst_63784__$1);
var inst_63787 = cljs.core.keys(inst_63786);
var inst_63788 = cljs.core.set(inst_63787);
var inst_63789__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_63785,inst_63788);
var inst_63790 = cljs.core.seq(inst_63789__$1);
var state_63805__$1 = (function (){var statearr_63809 = state_63805;
(statearr_63809[(7)] = inst_63789__$1);

(statearr_63809[(8)] = inst_63784__$1);

return statearr_63809;
})();
if(inst_63790){
var statearr_63810_65088 = state_63805__$1;
(statearr_63810_65088[(1)] = (6));

} else {
var statearr_63811_65089 = state_63805__$1;
(statearr_63811_65089[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63806 === (6))){
var inst_63789 = (state_63805[(7)]);
var inst_63784 = (state_63805[(8)]);
var inst_63792 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_63789], 0));
var inst_63793 = ["Entity attributes ",inst_63792," could not be realized"].join('');
var inst_63794 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","missing-attributes","com.wsscode.pathom.core/missing-attributes",1114260849)];
var inst_63795 = [inst_63784,path,inst_63789];
var inst_63796 = cljs.core.PersistentHashMap.fromArrays(inst_63794,inst_63795);
var inst_63797 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(inst_63793,inst_63796);
var inst_63798 = (function(){throw inst_63797})();
var state_63805__$1 = state_63805;
var statearr_63813_65091 = state_63805__$1;
(statearr_63813_65091[(2)] = inst_63798);

(statearr_63813_65091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63806 === (7))){
var state_63805__$1 = state_63805;
var statearr_63814_65092 = state_63805__$1;
(statearr_63814_65092[(2)] = null);

(statearr_63814_65092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63806 === (8))){
var inst_63784 = (state_63805[(8)]);
var inst_63801 = (state_63805[(2)]);
var state_63805__$1 = (function (){var statearr_63816 = state_63805;
(statearr_63816[(9)] = inst_63801);

return statearr_63816;
})();
var statearr_63817_65095 = state_63805__$1;
(statearr_63817_65095[(2)] = inst_63784);


cljs.core.async.impl.ioc_helpers.process_exception(state_63805__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__52131__auto__,res__59683__auto__,map__63776,map__63776__$1,env,path))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59683__auto__,map__63776,map__63776__$1,env,path){
return (function() {
var com$wsscode$pathom$core$entity_BANG__$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$entity_BANG__$_state_machine__52036__auto____0 = (function (){
var statearr_63819 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63819[(0)] = com$wsscode$pathom$core$entity_BANG__$_state_machine__52036__auto__);

(statearr_63819[(1)] = (1));

return statearr_63819;
});
var com$wsscode$pathom$core$entity_BANG__$_state_machine__52036__auto____1 = (function (state_63805){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_63805);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e63821){if((e63821 instanceof Object)){
var ex__52039__auto__ = e63821;
var statearr_63822_65097 = state_63805;
(statearr_63822_65097[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63821;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65098 = state_63805;
state_63805 = G__65098;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_BANG__$_state_machine__52036__auto__ = function(state_63805){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__52036__auto____1.call(this,state_63805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_BANG__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_BANG__$_state_machine__52036__auto____0;
com$wsscode$pathom$core$entity_BANG__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_BANG__$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$entity_BANG__$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__,map__63776,map__63776__$1,env,path))
})();
var state__52133__auto__ = (function (){var statearr_63823 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_63823[(6)] = c__52131__auto__);

return statearr_63823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__,map__63776,map__63776__$1,env,path))
);

return c__52131__auto__;
} else {
var e = res__59683__auto__;
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attributes),cljs.core.set(cljs.core.keys(com.wsscode.pathom.core.elide_not_found(e))));
if(cljs.core.seq(missing)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Entity attributes ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0))," could not be realized"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),e,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),path,new cljs.core.Keyword("com.wsscode.pathom.core","missing-attributes","com.wsscode.pathom.core/missing-attributes",1114260849),missing], null));
} else {
}

return e;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity!","com.wsscode.pathom.core/entity!",601467064,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__63826){
return cljs.core.coll_QMARK_(G__63826);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),null,null,null));
/**
 * Like entity-attr. Raises an exception if the property can't be retrieved.
 */
com.wsscode.pathom.core.entity_attr_BANG_ = (function com$wsscode$pathom$core$entity_attr_BANG_(env,attr){
var res__59683__auto__ = com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__){
return (function (state_63838){
var state_val_63839 = (state_63838[(1)]);
if((state_val_63839 === (1))){
var state_63838__$1 = state_63838;
var statearr_63840_65105 = state_63838__$1;
(statearr_63840_65105[(2)] = null);

(statearr_63840_65105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63839 === (2))){
var inst_63836 = (state_63838[(2)]);
var state_63838__$1 = state_63838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63838__$1,inst_63836);
} else {
if((state_val_63839 === (3))){
var inst_63827 = (state_63838[(2)]);
var state_63838__$1 = state_63838;
var statearr_63841_65106 = state_63838__$1;
(statearr_63841_65106[(2)] = inst_63827);


cljs.core.async.impl.ioc_helpers.process_exception(state_63838__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63839 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_63838,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_63838__$1 = state_63838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63838__$1,(5),res__59683__auto__);
} else {
if((state_val_63839 === (5))){
var inst_63832 = (state_63838[(2)]);
var inst_63833 = com.wsscode.common.async_cljs.throw_err(inst_63832);
var inst_63834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63833,attr);
var state_63838__$1 = state_63838;
var statearr_63842_65108 = state_63838__$1;
(statearr_63842_65108[(2)] = inst_63834);


cljs.core.async.impl.ioc_helpers.process_exception(state_63838__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__52131__auto__,res__59683__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59683__auto__){
return (function() {
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__52036__auto____0 = (function (){
var statearr_63843 = [null,null,null,null,null,null,null];
(statearr_63843[(0)] = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__52036__auto__);

(statearr_63843[(1)] = (1));

return statearr_63843;
});
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__52036__auto____1 = (function (state_63838){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_63838);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e63844){if((e63844 instanceof Object)){
var ex__52039__auto__ = e63844;
var statearr_63845_65113 = state_63838;
(statearr_63845_65113[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63844;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65114 = state_63838;
state_63838 = G__65114;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__52036__auto__ = function(state_63838){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__52036__auto____1.call(this,state_63838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__52036__auto____0;
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__))
})();
var state__52133__auto__ = (function (){var statearr_63846 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_63846[(6)] = c__52131__auto__);

return statearr_63846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__))
);

return c__52131__auto__;
} else {
var e = res__59683__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity-attr!","com.wsscode.pathom.core/entity-attr!",2073654855,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attribute","attribute",-2074029119)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Helper to swap the current entity value.
 */
com.wsscode.pathom.core.swap_entity_BANG_ = (function com$wsscode$pathom$core$swap_entity_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65117 = arguments.length;
var i__4731__auto___65118 = (0);
while(true){
if((i__4731__auto___65118 < len__4730__auto___65117)){
args__4736__auto__.push((arguments[i__4731__auto___65118]));

var G__65119 = (i__4731__auto___65118 + (1));
i__4731__auto___65118 = G__65119;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (env,fn,args){
var e = com.wsscode.pathom.core.raw_entity(env);
if(com.wsscode.pathom.core.atom_QMARK_(e)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,e,fn,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,e,args);
}
});

com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$applyTo = (function (seq63847){
var G__63848 = cljs.core.first(seq63847);
var seq63847__$1 = cljs.core.next(seq63847);
var G__63849 = cljs.core.first(seq63847__$1);
var seq63847__$2 = cljs.core.next(seq63847__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63848,G__63849,seq63847__$2);
});

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","swap-entity!","com.wsscode.pathom.core/swap-entity!",819089173,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.fn_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),cljs.core.fn_QMARK_], null),null));
/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_child = (function com$wsscode$pathom$core$update_child(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65122 = arguments.length;
var i__4731__auto___65123 = (0);
while(true){
if((i__4731__auto___65123 < len__4730__auto___65122)){
args__4736__auto__.push((arguments[i__4731__auto___65123]));

var G__65124 = (i__4731__auto___65123 + (1));
i__4731__auto___65123 = G__65124;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5733__auto__ = (function (){var G__63853 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__63853__$1 = (((G__63853 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__63853));
var G__63853__$2 = (((G__63853__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.second),G__63853__$1));
if((G__63853__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__63853__$2);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var idx = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),args);
} else {
return ast;
}
});

com.wsscode.pathom.core.update_child.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_child.cljs$lang$applyTo = (function (seq63850){
var G__63851 = cljs.core.first(seq63850);
var seq63850__$1 = cljs.core.next(seq63850);
var G__63852 = cljs.core.first(seq63850__$1);
var seq63850__$2 = cljs.core.next(seq63850__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63851,G__63852,seq63850__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_recursive_depth = (function com$wsscode$pathom$core$update_recursive_depth(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65138 = arguments.length;
var i__4731__auto___65139 = (0);
while(true){
if((i__4731__auto___65139 < len__4730__auto___65138)){
args__4736__auto__.push((arguments[i__4731__auto___65139]));

var G__65141 = (i__4731__auto___65139 + (1));
i__4731__auto___65139 = G__65141;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5733__auto__ = (function (){var G__63858 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__63858__$1 = (((G__63858 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__63858));
var G__63858__$2 = (((G__63858__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__63858,G__63858__$1){
return (function (p1__63854_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__63854_SHARP_))) && (cljs.core.pos_int_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__63854_SHARP_))));
});})(G__63858,G__63858__$1))
,cljs.core.second),G__63858__$1));
if((G__63858__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__63858__$2);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var idx = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,ast,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx,new cljs.core.Keyword(null,"query","query",-1288509510)], null),args);
} else {
return ast;
}
});

com.wsscode.pathom.core.update_recursive_depth.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_recursive_depth.cljs$lang$applyTo = (function (seq63855){
var G__63856 = cljs.core.first(seq63855);
var seq63855__$1 = cljs.core.next(seq63855);
var G__63857 = cljs.core.first(seq63855__$1);
var seq63855__$2 = cljs.core.next(seq63855__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63856,G__63857,seq63855__$2);
});

com.wsscode.pathom.core.remove_query_wildcard = (function com$wsscode$pathom$core$remove_query_wildcard(query){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(query)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null)),query);
});
com.wsscode.pathom.core.default_union_path = (function com$wsscode$pathom$core$default_union_path(p__63860){
var map__63861 = p__63860;
var map__63861__$1 = (((((!((map__63861 == null))))?(((((map__63861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63861):map__63861);
var env = map__63861__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63861__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5733__auto__ = (function (){var G__63863 = cljs.core.keys(query);
var G__63863__$1 = (((G__63863 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__63863,e,map__63861,map__63861__$1,env,query){
return (function (p1__63859_SHARP_){
return cljs.core.contains_QMARK_(e,p1__63859_SHARP_);
});})(G__63863,e,map__63861,map__63861__$1,env,query))
,G__63863));
if((G__63863__$1 == null)){
return null;
} else {
return cljs.core.first(G__63863__$1);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
return path;
} else {
return null;
}
});
/**
 * Runs a parser with current sub-query. When run with an `entity` argument, that entity is set as the new environment
 * value of `::entity`, and the subquery is parsered with that new environment. When run without an `entity` it
 * parses the current subquery in the context of whatever entity was already in `::entity` of the env.
 */
com.wsscode.pathom.core.join = (function com$wsscode$pathom$core$join(var_args){
var G__63865 = arguments.length;
switch (G__63865) {
case 2:
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2 = (function (entity,p__63866){
var map__63867 = p__63866;
var map__63867__$1 = (((((!((map__63867 == null))))?(((((map__63867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63867):map__63867);
var env = map__63867__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63867__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63867__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63867__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
if(com.wsscode.pathom.core.atom_QMARK_(entity)){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(entity)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));

return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entity),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),new cljs.core.Keyword(null,"ast","ast",-860334068),ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),query,entity_key,entity], 0)));
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,entity));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378).cljs$core$IFn$_invoke$arity$1(entity))){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),new cljs.core.Keyword(null,"ast","ast",-860334068),ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),query,entity_key,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)))], 0)));
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(entity)));
}
}
});

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1 = (function (p__63869){
var map__63870 = p__63869;
var map__63870__$1 = (((((!((map__63870 == null))))?(((((map__63870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63870):map__63870);
var env = map__63870__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63870__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63870__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63870__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var union_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63870__$1,new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63870__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63870__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63870__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var placeholder_QMARK_ = cljs.core.contains_QMARK_((function (){var or__4131__auto__ = placeholder_prefixes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),(function (){var G__63872 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast);
if((G__63872 == null)){
return null;
} else {
return cljs.core.namespace(G__63872);
}
})());
var query__$1 = ((com.wsscode.pathom.core.union_children_QMARK_(ast))?(function (){var union_path__$1 = (function (){var or__4131__auto__ = union_path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.core.default_union_path;
}
})();
var path = ((cljs.core.fn_QMARK_(union_path__$1))?(union_path__$1.cljs$core$IFn$_invoke$arity$1 ? union_path__$1.cljs$core$IFn$_invoke$arity$1(env) : union_path__$1.call(null,env)):(((union_path__$1 instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_path__$1], null)),union_path__$1):null));
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,path);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","blank-union","com.wsscode.pathom.core/blank-union",1901666614);
}
})():query);
var env_SINGLEQUOTE_ = (function (){var G__63873 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),query__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast)], 0));
if((!(placeholder_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63873,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0));
} else {
return G__63873;
}
})();
var env_SINGLEQUOTE___$1 = (cljs.core.truth_(processing_sequence)?(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword("com.wsscode.pathom.core","stop-sequence?","com.wsscode.pathom.core/stop-sequence?",-1854144982).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(processing_sequence));
if(cljs.core.truth_(and__4120__auto__)){
return (!(placeholder_QMARK_));
} else {
return and__4120__auto__;
}
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637)):cljs.core.update.cljs$core$IFn$_invoke$arity$6(env_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.core","stop-sequence?","com.wsscode.pathom.core/stop-sequence?",-1854144982),true)):env_SINGLEQUOTE_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","blank-union","com.wsscode.pathom.core/blank-union",1901666614),query__$1)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if((query__$1 == null)){
return e;
} else {
if(cljs.core.nat_int_QMARK_(query__$1)){
if((query__$1 === (0))){
return null;
} else {
var parent_query_SINGLEQUOTE_ = com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.query__GT_ast(parent_query),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dec], 0)));
var G__63874 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE___$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),parent_query_SINGLEQUOTE_);
var G__63875 = com.wsscode.pathom.core.remove_query_wildcard(parent_query_SINGLEQUOTE_);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__63874,G__63875) : parser.call(null,G__63874,G__63875));
}
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),query__$1))){
var res__59683__auto__ = (function (){var G__63876 = env_SINGLEQUOTE___$1;
var G__63877 = com.wsscode.pathom.core.remove_query_wildcard(query__$1);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__63876,G__63877) : parser.call(null,G__63876,G__63877));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__63870,map__63870__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__63870,map__63870__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function (state_63890){
var state_val_63891 = (state_63890[(1)]);
if((state_val_63891 === (1))){
var state_63890__$1 = state_63890;
var statearr_63892_65171 = state_63890__$1;
(statearr_63892_65171[(2)] = null);

(statearr_63892_65171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63891 === (2))){
var inst_63888 = (state_63890[(2)]);
var state_63890__$1 = state_63890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63890__$1,inst_63888);
} else {
if((state_val_63891 === (3))){
var inst_63878 = (state_63890[(2)]);
var state_63890__$1 = state_63890;
var statearr_63893_65172 = state_63890__$1;
(statearr_63893_65172[(2)] = inst_63878);


cljs.core.async.impl.ioc_helpers.process_exception(state_63890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63891 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_63890,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_63890__$1 = state_63890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63890__$1,(5),res__59683__auto__);
} else {
if((state_val_63891 === (5))){
var inst_63883 = (state_63890[(2)]);
var inst_63884 = com.wsscode.common.async_cljs.throw_err(inst_63883);
var inst_63885 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE___$1);
var inst_63886 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_63885,inst_63884], 0));
var state_63890__$1 = state_63890;
var statearr_63894_65184 = state_63890__$1;
(statearr_63894_65184[(2)] = inst_63886);


cljs.core.async.impl.ioc_helpers.process_exception(state_63890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__52131__auto__,res__59683__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__63870,map__63870__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59683__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__63870,map__63870__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function() {
var com$wsscode$pathom$core$state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$state_machine__52036__auto____0 = (function (){
var statearr_63895 = [null,null,null,null,null,null,null];
(statearr_63895[(0)] = com$wsscode$pathom$core$state_machine__52036__auto__);

(statearr_63895[(1)] = (1));

return statearr_63895;
});
var com$wsscode$pathom$core$state_machine__52036__auto____1 = (function (state_63890){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_63890);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e63896){if((e63896 instanceof Object)){
var ex__52039__auto__ = e63896;
var statearr_63897_65188 = state_63890;
(statearr_63897_65188[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63896;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65189 = state_63890;
state_63890 = G__65189;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__52036__auto__ = function(state_63890){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__52036__auto____1.call(this,state_63890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__52036__auto____0;
com$wsscode$pathom$core$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__52036__auto____1;
return com$wsscode$pathom$core$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__63870,map__63870__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
})();
var state__52133__auto__ = (function (){var statearr_63898 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_63898[(6)] = c__52131__auto__);

return statearr_63898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__63870,map__63870__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
);

return c__52131__auto__;
} else {
var computed_e = res__59683__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE___$1),computed_e], 0));
}
} else {
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE___$1,query__$1) : parser.call(null,env_SINGLEQUOTE___$1,query__$1));

}
}
}
}
});

com.wsscode.pathom.core.join.cljs$lang$maxFixedArity = 2;

com.wsscode.pathom.core.join_seq_parallel = (function com$wsscode$pathom$core$join_seq_parallel(p__63900,coll){
var map__63901 = p__63900;
var map__63901__$1 = (((((!((map__63901 == null))))?(((((map__63901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63901):map__63901);
var env = map__63901__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63901__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63901__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
if(cljs.core.seq(coll)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function (state_64005){
var state_val_64006 = (state_64005[(1)]);
if((state_val_64006 === (7))){
var inst_64001 = (state_64005[(2)]);
var state_64005__$1 = state_64005;
var statearr_64007_65190 = state_64005__$1;
(statearr_64007_65190[(2)] = inst_64001);


cljs.core.async.impl.ioc_helpers.process_exception(state_64005__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64006 === (1))){
var state_64005__$1 = state_64005;
var statearr_64008_65191 = state_64005__$1;
(statearr_64008_65191[(2)] = null);

(statearr_64008_65191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64006 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64005,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_63907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_64005__$1 = state_64005;
if(cljs.core.truth_(inst_63907)){
var statearr_64009_65192 = state_64005__$1;
(statearr_64009_65192[(1)] = (5));

} else {
var statearr_64010_65193 = state_64005__$1;
(statearr_64010_65193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64006 === (15))){
var inst_63972 = (state_64005[(7)]);
var inst_63971 = (state_64005[(8)]);
var inst_63973 = (state_64005[(9)]);
var inst_63976 = (state_64005[(10)]);
var inst_63975 = (state_64005[(11)]);
var inst_63968 = (state_64005[(12)]);
var inst_63986 = (state_64005[(2)]);
var inst_63987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_63988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_63989 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_63990 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_63976,inst_63989);
var inst_63991 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_63987,inst_63990);
var inst_63992 = (function (){var from_chan = inst_63987;
var join_item = inst_63972;
var first_res = inst_63986;
var check_ast_opt_QMARK_ = inst_63971;
var out_chan = inst_63988;
var first__63967 = inst_63975;
var ast = inst_63968;
var env__$1 = inst_63973;
var vec__63965 = coll;
var head = inst_63975;
var seq__63966 = inst_63976;
var tail = inst_63976;
return ((function (from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,first__63967,ast,env__$1,vec__63965,head,seq__63966,tail,inst_63972,inst_63971,inst_63973,inst_63976,inst_63975,inst_63968,inst_63986,inst_63987,inst_63988,inst_63989,inst_63990,inst_63991,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__64011,res_ch){
var vec__64012 = p__64011;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64012,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64012,(1),null);
var c__52131__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto____$1,vec__64012,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,first__63967,ast,env__$1,vec__63965,head,seq__63966,tail,inst_63972,inst_63971,inst_63973,inst_63976,inst_63975,inst_63968,inst_63986,inst_63987,inst_63988,inst_63989,inst_63990,inst_63991,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto____$1,vec__64012,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,first__63967,ast,env__$1,vec__63965,head,seq__63966,tail,inst_63972,inst_63971,inst_63973,inst_63976,inst_63975,inst_63968,inst_63986,inst_63987,inst_63988,inst_63989,inst_63990,inst_63991,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function (state_64056){
var state_val_64057 = (state_64056[(1)]);
if((state_val_64057 === (7))){
var inst_64030 = (state_64056[(2)]);
var state_64056__$1 = state_64056;
var statearr_64058_65214 = state_64056__$1;
(statearr_64058_65214[(2)] = inst_64030);

(statearr_64058_65214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64057 === (1))){
var inst_64017 = (state_64056[(7)]);
var inst_64016 = (i + (1));
var inst_64017__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_64016);
var inst_64019 = (inst_64017__$1 == null);
var inst_64020 = cljs.core.not(inst_64019);
var state_64056__$1 = (function (){var statearr_64059 = state_64056;
(statearr_64059[(7)] = inst_64017__$1);

return statearr_64059;
})();
if(inst_64020){
var statearr_64060_65215 = state_64056__$1;
(statearr_64060_65215[(1)] = (2));

} else {
var statearr_64061_65216 = state_64056__$1;
(statearr_64061_65216[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64057 === (4))){
var inst_64033 = (state_64056[(2)]);
var state_64056__$1 = state_64056;
if(cljs.core.truth_(inst_64033)){
var statearr_64062_65217 = state_64056__$1;
(statearr_64062_65217[(1)] = (8));

} else {
var statearr_64063_65218 = state_64056__$1;
(statearr_64063_65218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64057 === (15))){
var inst_64053 = (state_64056[(2)]);
var inst_64054 = cljs.core.async.close_BANG_(res_ch);
var state_64056__$1 = (function (){var statearr_64064 = state_64056;
(statearr_64064[(8)] = inst_64053);

return statearr_64064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64056__$1,inst_64054);
} else {
if((state_val_64057 === (13))){
var inst_64051 = (state_64056[(2)]);
var state_64056__$1 = state_64056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64056__$1,(15),res_ch,inst_64051);
} else {
if((state_val_64057 === (6))){
var state_64056__$1 = state_64056;
var statearr_64065_65221 = state_64056__$1;
(statearr_64065_65221[(2)] = false);

(statearr_64065_65221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64057 === (3))){
var state_64056__$1 = state_64056;
var statearr_64066_65222 = state_64056__$1;
(statearr_64066_65222[(2)] = false);

(statearr_64066_65222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64057 === (12))){
var inst_64044 = (state_64056[(9)]);
var state_64056__$1 = state_64056;
var statearr_64067_65225 = state_64056__$1;
(statearr_64067_65225[(2)] = inst_64044);

(statearr_64067_65225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64057 === (2))){
var inst_64017 = (state_64056[(7)]);
var inst_64022 = inst_64017.cljs$lang$protocol_mask$partition0$;
var inst_64023 = (inst_64022 & (64));
var inst_64024 = inst_64017.cljs$core$ISeq$;
var inst_64025 = (cljs.core.PROTOCOL_SENTINEL === inst_64024);
var inst_64026 = ((inst_64023) || (inst_64025));
var state_64056__$1 = state_64056;
if(cljs.core.truth_(inst_64026)){
var statearr_64068_65238 = state_64056__$1;
(statearr_64068_65238[(1)] = (5));

} else {
var statearr_64069_65239 = state_64056__$1;
(statearr_64069_65239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64057 === (11))){
var inst_64044 = (state_64056[(9)]);
var state_64056__$1 = state_64056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64056__$1,(14),inst_64044);
} else {
if((state_val_64057 === (9))){
var inst_64017 = (state_64056[(7)]);
var state_64056__$1 = state_64056;
var statearr_64070_65240 = state_64056__$1;
(statearr_64070_65240[(2)] = inst_64017);

(statearr_64070_65240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64057 === (5))){
var state_64056__$1 = state_64056;
var statearr_64071_65242 = state_64056__$1;
(statearr_64071_65242[(2)] = true);

(statearr_64071_65242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64057 === (14))){
var inst_64048 = (state_64056[(2)]);
var state_64056__$1 = state_64056;
var statearr_64072_65246 = state_64056__$1;
(statearr_64072_65246[(2)] = inst_64048);

(statearr_64072_65246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64057 === (10))){
var inst_64044 = (state_64056[(9)]);
var inst_64038 = (state_64056[(2)]);
var inst_64039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64038,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_64040 = cljs.core.deref(entity_path_cache);
var inst_64041 = cljs.core.PersistentHashMap.EMPTY;
var inst_64042 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_64040,inst_64039,inst_64041);
var inst_64043 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_64042,ent], 0));
var inst_64044__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_64038,inst_64043) : join_item.call(null,inst_64038,inst_64043));
var inst_64045 = com.wsscode.common.async_cljs.chan_QMARK_(inst_64044__$1);
var state_64056__$1 = (function (){var statearr_64073 = state_64056;
(statearr_64073[(9)] = inst_64044__$1);

return statearr_64073;
})();
if(inst_64045){
var statearr_64074_65250 = state_64056__$1;
(statearr_64074_65250[(1)] = (11));

} else {
var statearr_64075_65253 = state_64056__$1;
(statearr_64075_65253[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64057 === (8))){
var inst_64017 = (state_64056[(7)]);
var inst_64035 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64017);
var state_64056__$1 = state_64056;
var statearr_64076_65257 = state_64056__$1;
(statearr_64076_65257[(2)] = inst_64035);

(statearr_64076_65257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__52131__auto____$1,vec__64012,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,first__63967,ast,env__$1,vec__63965,head,seq__63966,tail,inst_63972,inst_63971,inst_63973,inst_63976,inst_63975,inst_63968,inst_63986,inst_63987,inst_63988,inst_63989,inst_63990,inst_63991,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
;
return ((function (switch__52035__auto__,c__52131__auto____$1,vec__64012,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,first__63967,ast,env__$1,vec__63965,head,seq__63966,tail,inst_63972,inst_63971,inst_63973,inst_63976,inst_63975,inst_63968,inst_63986,inst_63987,inst_63988,inst_63989,inst_63990,inst_63991,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto____0 = (function (){
var statearr_64077 = [null,null,null,null,null,null,null,null,null,null];
(statearr_64077[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto__);

(statearr_64077[(1)] = (1));

return statearr_64077;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto____1 = (function (state_64056){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64056);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64078){if((e64078 instanceof Object)){
var ex__52039__auto__ = e64078;
var statearr_64079_65265 = state_64056;
(statearr_64079_65265[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65268 = state_64056;
state_64056 = G__65268;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto__ = function(state_64056){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto____1.call(this,state_64056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto____$1,vec__64012,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,first__63967,ast,env__$1,vec__63965,head,seq__63966,tail,inst_63972,inst_63971,inst_63973,inst_63976,inst_63975,inst_63968,inst_63986,inst_63987,inst_63988,inst_63989,inst_63990,inst_63991,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
})();
var state__52133__auto__ = (function (){var statearr_64080 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64080[(6)] = c__52131__auto____$1);

return statearr_64080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto____$1,vec__64012,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,first__63967,ast,env__$1,vec__63965,head,seq__63966,tail,inst_63972,inst_63971,inst_63973,inst_63976,inst_63975,inst_63968,inst_63986,inst_63987,inst_63988,inst_63989,inst_63990,inst_63991,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
);

return c__52131__auto____$1;
});
;})(from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,first__63967,ast,env__$1,vec__63965,head,seq__63966,tail,inst_63972,inst_63971,inst_63973,inst_63976,inst_63975,inst_63968,inst_63986,inst_63987,inst_63988,inst_63989,inst_63990,inst_63991,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
})();
var inst_63993 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_63988,inst_63992,inst_63987);
var inst_63994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63995 = [inst_63986];
var inst_63996 = (new cljs.core.PersistentVector(null,1,(5),inst_63994,inst_63995,null));
var inst_63997 = cljs.core.async.into(inst_63996,inst_63988);
var state_64005__$1 = (function (){var statearr_64081 = state_64005;
(statearr_64081[(13)] = inst_63993);

(statearr_64081[(14)] = inst_63991);

return statearr_64081;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64005__$1,(17),inst_63997);
} else {
if((state_val_64006 === (13))){
var inst_63978 = (state_64005[(15)]);
var state_64005__$1 = state_64005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64005__$1,(16),inst_63978);
} else {
if((state_val_64006 === (6))){
var inst_63972 = (state_64005[(7)]);
var inst_63971 = (state_64005[(8)]);
var inst_63973 = (state_64005[(9)]);
var inst_63978 = (state_64005[(15)]);
var inst_63975 = (state_64005[(11)]);
var inst_63968 = (state_64005[(12)]);
var inst_63968__$1 = edn_query_language.core.query__GT_ast(query);
var inst_63969 = (function (){var ast = inst_63968__$1;
return ((function (ast,inst_63972,inst_63971,inst_63973,inst_63978,inst_63975,inst_63968,inst_63968__$1,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function (p1__63899_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__63899_SHARP_));
});
;})(ast,inst_63972,inst_63971,inst_63973,inst_63978,inst_63975,inst_63968,inst_63968__$1,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
})();
var inst_63970 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_63968__$1);
var inst_63971__$1 = cljs.core.every_QMARK_(inst_63969,inst_63970);
var inst_63972__$1 = (function (){var ast = inst_63968__$1;
var check_ast_opt_QMARK_ = inst_63971__$1;
return ((function (ast,check_ast_opt_QMARK_,inst_63972,inst_63971,inst_63973,inst_63978,inst_63975,inst_63968,inst_63968__$1,inst_63969,inst_63970,inst_63971__$1,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,ast,check_ast_opt_QMARK_,inst_63972,inst_63971,inst_63973,inst_63978,inst_63975,inst_63968,inst_63968__$1,inst_63969,inst_63970,inst_63971__$1,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function (ent,p__64100){
var map__64101 = p__64100;
var map__64101__$1 = (((((!((map__64101 == null))))?(((((map__64101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64101):map__64101);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64101__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var temp__5733__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__64103 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64103,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64103,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,key,v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,ast,check_ast_opt_QMARK_,inst_63972,inst_63971,inst_63973,inst_63978,inst_63975,inst_63968,inst_63968__$1,inst_63969,inst_63970,inst_63971__$1,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(entity,env__$1);
}
});
;})(ast,check_ast_opt_QMARK_,inst_63972,inst_63971,inst_63973,inst_63978,inst_63975,inst_63968,inst_63968__$1,inst_63969,inst_63970,inst_63971__$1,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
})();
var inst_63973__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_63974 = cljs.core.seq(coll);
var inst_63975__$1 = cljs.core.first(inst_63974);
var inst_63976 = cljs.core.next(inst_63974);
var inst_63977 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_63973__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_63978__$1 = (inst_63972__$1.cljs$core$IFn$_invoke$arity$2 ? inst_63972__$1.cljs$core$IFn$_invoke$arity$2(inst_63977,inst_63975__$1) : inst_63972__$1.call(null,inst_63977,inst_63975__$1));
var inst_63979 = com.wsscode.common.async_cljs.chan_QMARK_(inst_63978__$1);
var state_64005__$1 = (function (){var statearr_64106 = state_64005;
(statearr_64106[(7)] = inst_63972__$1);

(statearr_64106[(8)] = inst_63971__$1);

(statearr_64106[(9)] = inst_63973__$1);

(statearr_64106[(10)] = inst_63976);

(statearr_64106[(15)] = inst_63978__$1);

(statearr_64106[(11)] = inst_63975__$1);

(statearr_64106[(12)] = inst_63968__$1);

return statearr_64106;
})();
if(inst_63979){
var statearr_64107_65275 = state_64005__$1;
(statearr_64107_65275[(1)] = (13));

} else {
var statearr_64108_65276 = state_64005__$1;
(statearr_64108_65276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64006 === (17))){
var inst_63999 = (state_64005[(2)]);
var state_64005__$1 = state_64005;
var statearr_64109_65277 = state_64005__$1;
(statearr_64109_65277[(2)] = inst_63999);

(statearr_64109_65277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64006 === (3))){
var inst_63903 = (state_64005[(2)]);
var state_64005__$1 = state_64005;
var statearr_64110_65278 = state_64005__$1;
(statearr_64110_65278[(2)] = inst_63903);


cljs.core.async.impl.ioc_helpers.process_exception(state_64005__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64006 === (12))){
var inst_63915 = (state_64005[(16)]);
var inst_63956 = (state_64005[(2)]);
var inst_63957 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_63958 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_63959 = ["#e0e3a4","0.8"];
var inst_63960 = cljs.core.PersistentHashMap.fromArrays(inst_63958,inst_63959);
var inst_63961 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_63960];
var inst_63962 = cljs.core.PersistentHashMap.fromArrays(inst_63957,inst_63961);
var inst_63963 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_63915,inst_63962);
var state_64005__$1 = (function (){var statearr_64111 = state_64005;
(statearr_64111[(17)] = inst_63963);

return statearr_64111;
})();
var statearr_64112_65280 = state_64005__$1;
(statearr_64112_65280[(2)] = inst_63956);

(statearr_64112_65280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64006 === (2))){
var inst_64003 = (state_64005[(2)]);
var state_64005__$1 = state_64005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64005__$1,inst_64003);
} else {
if((state_val_64006 === (11))){
var inst_63933 = (state_64005[(2)]);
var inst_63934 = com.wsscode.common.async_cljs.throw_err(inst_63933);
var state_64005__$1 = state_64005;
var statearr_64113_65281 = state_64005__$1;
(statearr_64113_65281[(2)] = inst_63934);

(statearr_64113_65281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64006 === (9))){
var inst_63929 = (state_64005[(18)]);
var state_64005__$1 = state_64005;
var statearr_64114_65282 = state_64005__$1;
(statearr_64114_65282[(2)] = inst_63929);

(statearr_64114_65282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64006 === (5))){
var inst_63929 = (state_64005[(18)]);
var inst_63924 = (state_64005[(19)]);
var inst_63922 = (state_64005[(20)]);
var inst_63919 = (state_64005[(21)]);
var inst_63923 = (state_64005[(22)]);
var inst_63926 = (state_64005[(23)]);
var inst_63915 = (state_64005[(16)]);
var inst_63909 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_63910 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_63911 = ["#e0e3a4","0.8"];
var inst_63912 = cljs.core.PersistentHashMap.fromArrays(inst_63910,inst_63911);
var inst_63913 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_63912];
var inst_63914 = cljs.core.PersistentHashMap.fromArrays(inst_63909,inst_63913);
var inst_63915__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_63914);
var inst_63919__$1 = edn_query_language.core.query__GT_ast(query);
var inst_63920 = (function (){var trace_id__23022__auto__ = inst_63915__$1;
var ast = inst_63919__$1;
return ((function (trace_id__23022__auto__,ast,inst_63929,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63909,inst_63910,inst_63911,inst_63912,inst_63913,inst_63914,inst_63915__$1,inst_63919__$1,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function (p1__63899_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__63899_SHARP_));
});
;})(trace_id__23022__auto__,ast,inst_63929,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63909,inst_63910,inst_63911,inst_63912,inst_63913,inst_63914,inst_63915__$1,inst_63919__$1,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
})();
var inst_63921 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_63919__$1);
var inst_63922__$1 = cljs.core.every_QMARK_(inst_63920,inst_63921);
var inst_63923__$1 = (function (){var trace_id__23022__auto__ = inst_63915__$1;
var ast = inst_63919__$1;
var check_ast_opt_QMARK_ = inst_63922__$1;
return ((function (trace_id__23022__auto__,ast,check_ast_opt_QMARK_,inst_63929,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63909,inst_63910,inst_63911,inst_63912,inst_63913,inst_63914,inst_63915__$1,inst_63919__$1,inst_63920,inst_63921,inst_63922__$1,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,trace_id__23022__auto__,ast,check_ast_opt_QMARK_,inst_63929,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63909,inst_63910,inst_63911,inst_63912,inst_63913,inst_63914,inst_63915__$1,inst_63919__$1,inst_63920,inst_63921,inst_63922__$1,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function (ent,p__64133){
var map__64134 = p__64133;
var map__64134__$1 = (((((!((map__64134 == null))))?(((((map__64134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64134):map__64134);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64134__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var temp__5733__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__64136 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64136,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,key,v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,trace_id__23022__auto__,ast,check_ast_opt_QMARK_,inst_63929,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63909,inst_63910,inst_63911,inst_63912,inst_63913,inst_63914,inst_63915__$1,inst_63919__$1,inst_63920,inst_63921,inst_63922__$1,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(entity,env__$1);
}
});
;})(trace_id__23022__auto__,ast,check_ast_opt_QMARK_,inst_63929,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63909,inst_63910,inst_63911,inst_63912,inst_63913,inst_63914,inst_63915__$1,inst_63919__$1,inst_63920,inst_63921,inst_63922__$1,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
})();
var inst_63924__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_63925 = cljs.core.seq(coll);
var inst_63926__$1 = cljs.core.first(inst_63925);
var inst_63927 = cljs.core.next(inst_63925);
var inst_63928 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_63924__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_63929__$1 = (inst_63923__$1.cljs$core$IFn$_invoke$arity$2 ? inst_63923__$1.cljs$core$IFn$_invoke$arity$2(inst_63928,inst_63926__$1) : inst_63923__$1.call(null,inst_63928,inst_63926__$1));
var inst_63930 = com.wsscode.common.async_cljs.chan_QMARK_(inst_63929__$1);
var state_64005__$1 = (function (){var statearr_64139 = state_64005;
(statearr_64139[(24)] = inst_63927);

(statearr_64139[(18)] = inst_63929__$1);

(statearr_64139[(19)] = inst_63924__$1);

(statearr_64139[(20)] = inst_63922__$1);

(statearr_64139[(21)] = inst_63919__$1);

(statearr_64139[(22)] = inst_63923__$1);

(statearr_64139[(23)] = inst_63926__$1);

(statearr_64139[(16)] = inst_63915__$1);

return statearr_64139;
})();
if(inst_63930){
var statearr_64140_65295 = state_64005__$1;
(statearr_64140_65295[(1)] = (8));

} else {
var statearr_64141_65296 = state_64005__$1;
(statearr_64141_65296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64006 === (14))){
var inst_63978 = (state_64005[(15)]);
var state_64005__$1 = state_64005;
var statearr_64142_65298 = state_64005__$1;
(statearr_64142_65298[(2)] = inst_63978);

(statearr_64142_65298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64006 === (16))){
var inst_63982 = (state_64005[(2)]);
var inst_63983 = com.wsscode.common.async_cljs.throw_err(inst_63982);
var state_64005__$1 = state_64005;
var statearr_64143_65299 = state_64005__$1;
(statearr_64143_65299[(2)] = inst_63983);

(statearr_64143_65299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64006 === (10))){
var inst_63927 = (state_64005[(24)]);
var inst_63924 = (state_64005[(19)]);
var inst_63922 = (state_64005[(20)]);
var inst_63919 = (state_64005[(21)]);
var inst_63923 = (state_64005[(22)]);
var inst_63926 = (state_64005[(23)]);
var inst_63915 = (state_64005[(16)]);
var inst_63937 = (state_64005[(2)]);
var inst_63938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_63939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_63940 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_63941 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_63927,inst_63940);
var inst_63942 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_63938,inst_63941);
var inst_63943 = (function (){var from_chan = inst_63938;
var join_item = inst_63923;
var first_res = inst_63937;
var check_ast_opt_QMARK_ = inst_63922;
var trace_id__23022__auto__ = inst_63915;
var out_chan = inst_63939;
var first__63918 = inst_63926;
var ast = inst_63919;
var env__$1 = inst_63924;
var seq__63917 = inst_63927;
var vec__63916 = coll;
var head = inst_63926;
var tail = inst_63927;
return ((function (from_chan,join_item,first_res,check_ast_opt_QMARK_,trace_id__23022__auto__,out_chan,first__63918,ast,env__$1,seq__63917,vec__63916,head,tail,inst_63927,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63937,inst_63938,inst_63939,inst_63940,inst_63941,inst_63942,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__64144,res_ch){
var vec__64145 = p__64144;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64145,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64145,(1),null);
var c__52131__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto____$1,vec__64145,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,trace_id__23022__auto__,out_chan,first__63918,ast,env__$1,seq__63917,vec__63916,head,tail,inst_63927,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63937,inst_63938,inst_63939,inst_63940,inst_63941,inst_63942,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto____$1,vec__64145,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,trace_id__23022__auto__,out_chan,first__63918,ast,env__$1,seq__63917,vec__63916,head,tail,inst_63927,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63937,inst_63938,inst_63939,inst_63940,inst_63941,inst_63942,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function (state_64189){
var state_val_64190 = (state_64189[(1)]);
if((state_val_64190 === (7))){
var inst_64163 = (state_64189[(2)]);
var state_64189__$1 = state_64189;
var statearr_64191_65306 = state_64189__$1;
(statearr_64191_65306[(2)] = inst_64163);

(statearr_64191_65306[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64190 === (1))){
var inst_64150 = (state_64189[(7)]);
var inst_64149 = (i + (1));
var inst_64150__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_64149);
var inst_64152 = (inst_64150__$1 == null);
var inst_64153 = cljs.core.not(inst_64152);
var state_64189__$1 = (function (){var statearr_64192 = state_64189;
(statearr_64192[(7)] = inst_64150__$1);

return statearr_64192;
})();
if(inst_64153){
var statearr_64193_65307 = state_64189__$1;
(statearr_64193_65307[(1)] = (2));

} else {
var statearr_64194_65308 = state_64189__$1;
(statearr_64194_65308[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64190 === (4))){
var inst_64166 = (state_64189[(2)]);
var state_64189__$1 = state_64189;
if(cljs.core.truth_(inst_64166)){
var statearr_64195_65309 = state_64189__$1;
(statearr_64195_65309[(1)] = (8));

} else {
var statearr_64196_65310 = state_64189__$1;
(statearr_64196_65310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64190 === (15))){
var inst_64186 = (state_64189[(2)]);
var inst_64187 = cljs.core.async.close_BANG_(res_ch);
var state_64189__$1 = (function (){var statearr_64197 = state_64189;
(statearr_64197[(8)] = inst_64186);

return statearr_64197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64189__$1,inst_64187);
} else {
if((state_val_64190 === (13))){
var inst_64184 = (state_64189[(2)]);
var state_64189__$1 = state_64189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64189__$1,(15),res_ch,inst_64184);
} else {
if((state_val_64190 === (6))){
var state_64189__$1 = state_64189;
var statearr_64198_65311 = state_64189__$1;
(statearr_64198_65311[(2)] = false);

(statearr_64198_65311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64190 === (3))){
var state_64189__$1 = state_64189;
var statearr_64199_65312 = state_64189__$1;
(statearr_64199_65312[(2)] = false);

(statearr_64199_65312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64190 === (12))){
var inst_64177 = (state_64189[(9)]);
var state_64189__$1 = state_64189;
var statearr_64200_65315 = state_64189__$1;
(statearr_64200_65315[(2)] = inst_64177);

(statearr_64200_65315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64190 === (2))){
var inst_64150 = (state_64189[(7)]);
var inst_64155 = inst_64150.cljs$lang$protocol_mask$partition0$;
var inst_64156 = (inst_64155 & (64));
var inst_64157 = inst_64150.cljs$core$ISeq$;
var inst_64158 = (cljs.core.PROTOCOL_SENTINEL === inst_64157);
var inst_64159 = ((inst_64156) || (inst_64158));
var state_64189__$1 = state_64189;
if(cljs.core.truth_(inst_64159)){
var statearr_64201_65319 = state_64189__$1;
(statearr_64201_65319[(1)] = (5));

} else {
var statearr_64202_65320 = state_64189__$1;
(statearr_64202_65320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64190 === (11))){
var inst_64177 = (state_64189[(9)]);
var state_64189__$1 = state_64189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64189__$1,(14),inst_64177);
} else {
if((state_val_64190 === (9))){
var inst_64150 = (state_64189[(7)]);
var state_64189__$1 = state_64189;
var statearr_64203_65321 = state_64189__$1;
(statearr_64203_65321[(2)] = inst_64150);

(statearr_64203_65321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64190 === (5))){
var state_64189__$1 = state_64189;
var statearr_64204_65322 = state_64189__$1;
(statearr_64204_65322[(2)] = true);

(statearr_64204_65322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64190 === (14))){
var inst_64181 = (state_64189[(2)]);
var state_64189__$1 = state_64189;
var statearr_64205_65323 = state_64189__$1;
(statearr_64205_65323[(2)] = inst_64181);

(statearr_64205_65323[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64190 === (10))){
var inst_64177 = (state_64189[(9)]);
var inst_64171 = (state_64189[(2)]);
var inst_64172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64171,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_64173 = cljs.core.deref(entity_path_cache);
var inst_64174 = cljs.core.PersistentHashMap.EMPTY;
var inst_64175 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_64173,inst_64172,inst_64174);
var inst_64176 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_64175,ent], 0));
var inst_64177__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_64171,inst_64176) : join_item.call(null,inst_64171,inst_64176));
var inst_64178 = com.wsscode.common.async_cljs.chan_QMARK_(inst_64177__$1);
var state_64189__$1 = (function (){var statearr_64206 = state_64189;
(statearr_64206[(9)] = inst_64177__$1);

return statearr_64206;
})();
if(inst_64178){
var statearr_64207_65327 = state_64189__$1;
(statearr_64207_65327[(1)] = (11));

} else {
var statearr_64208_65328 = state_64189__$1;
(statearr_64208_65328[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64190 === (8))){
var inst_64150 = (state_64189[(7)]);
var inst_64168 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64150);
var state_64189__$1 = state_64189;
var statearr_64209_65331 = state_64189__$1;
(statearr_64209_65331[(2)] = inst_64168);

(statearr_64209_65331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__52131__auto____$1,vec__64145,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,trace_id__23022__auto__,out_chan,first__63918,ast,env__$1,seq__63917,vec__63916,head,tail,inst_63927,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63937,inst_63938,inst_63939,inst_63940,inst_63941,inst_63942,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
;
return ((function (switch__52035__auto__,c__52131__auto____$1,vec__64145,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,trace_id__23022__auto__,out_chan,first__63918,ast,env__$1,seq__63917,vec__63916,head,tail,inst_63927,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63937,inst_63938,inst_63939,inst_63940,inst_63941,inst_63942,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto____0 = (function (){
var statearr_64210 = [null,null,null,null,null,null,null,null,null,null];
(statearr_64210[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto__);

(statearr_64210[(1)] = (1));

return statearr_64210;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto____1 = (function (state_64189){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64189);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64211){if((e64211 instanceof Object)){
var ex__52039__auto__ = e64211;
var statearr_64212_65347 = state_64189;
(statearr_64212_65347[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64211;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65353 = state_64189;
state_64189 = G__65353;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto__ = function(state_64189){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto____1.call(this,state_64189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto____$1,vec__64145,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,trace_id__23022__auto__,out_chan,first__63918,ast,env__$1,seq__63917,vec__63916,head,tail,inst_63927,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63937,inst_63938,inst_63939,inst_63940,inst_63941,inst_63942,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
})();
var state__52133__auto__ = (function (){var statearr_64213 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64213[(6)] = c__52131__auto____$1);

return statearr_64213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto____$1,vec__64145,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,trace_id__23022__auto__,out_chan,first__63918,ast,env__$1,seq__63917,vec__63916,head,tail,inst_63927,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63937,inst_63938,inst_63939,inst_63940,inst_63941,inst_63942,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
);

return c__52131__auto____$1;
});
;})(from_chan,join_item,first_res,check_ast_opt_QMARK_,trace_id__23022__auto__,out_chan,first__63918,ast,env__$1,seq__63917,vec__63916,head,tail,inst_63927,inst_63924,inst_63922,inst_63919,inst_63923,inst_63926,inst_63915,inst_63937,inst_63938,inst_63939,inst_63940,inst_63941,inst_63942,state_val_64006,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
})();
var inst_63944 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_63939,inst_63943,inst_63938);
var inst_63951 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63952 = [inst_63937];
var inst_63953 = (new cljs.core.PersistentVector(null,1,(5),inst_63951,inst_63952,null));
var inst_63954 = cljs.core.async.into(inst_63953,inst_63939);
var state_64005__$1 = (function (){var statearr_64214 = state_64005;
(statearr_64214[(25)] = inst_63942);

(statearr_64214[(26)] = inst_63944);

return statearr_64214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64005__$1,(12),inst_63954);
} else {
if((state_val_64006 === (8))){
var inst_63929 = (state_64005[(18)]);
var state_64005__$1 = state_64005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64005__$1,(11),inst_63929);
} else {
return null;
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
}
}
}
}
}
});})(c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
;
return ((function (switch__52035__auto__,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__52036__auto____0 = (function (){
var statearr_64215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64215[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__52036__auto__);

(statearr_64215[(1)] = (1));

return statearr_64215;
});
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__52036__auto____1 = (function (state_64005){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64005);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64216){if((e64216 instanceof Object)){
var ex__52039__auto__ = e64216;
var statearr_64217_65356 = state_64005;
(statearr_64217_65356[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65357 = state_64005;
state_64005 = G__65357;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__52036__auto__ = function(state_64005){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__52036__auto____1.call(this,state_64005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__52036__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
})();
var state__52133__auto__ = (function (){var statearr_64218 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64218[(6)] = c__52131__auto__);

return statearr_64218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,map__63901,map__63901__$1,env,query,entity_path_cache))
);

return c__52131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Runs the current subquery against the items of the given collection.
 */
com.wsscode.pathom.core.join_seq = (function com$wsscode$pathom$core$join_seq(p__64219,coll){
var map__64220 = p__64219;
var map__64220__$1 = (((((!((map__64220 == null))))?(((((map__64220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64220):map__64220);
var env = map__64220__$1;
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64220__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","join-seq","com.wsscode.pathom.core/join-seq",523699901),new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836),cljs.core.count(coll)], null));

if(cljs.core.truth_(parallel_QMARK_)){
return com.wsscode.pathom.core.join_seq_parallel(env,coll);
} else {
var join_item = ((function (map__64220,map__64220__$1,env,parallel_QMARK_){
return (function com$wsscode$pathom$core$join_seq_$_join_item(ent,out){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(ent,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,cljs.core.count(out)));
});})(map__64220,map__64220__$1,env,parallel_QMARK_))
;
var out = cljs.core.PersistentVector.EMPTY;
var G__64225 = coll;
var vec__64226 = G__64225;
var seq__64227 = cljs.core.seq(vec__64226);
var first__64228 = cljs.core.first(seq__64227);
var seq__64227__$1 = cljs.core.next(seq__64227);
var ent = first__64228;
var tail = seq__64227__$1;
var out__$1 = out;
var G__64225__$1 = G__64225;
while(true){
var out__$2 = out__$1;
var vec__64295 = G__64225__$1;
var seq__64296 = cljs.core.seq(vec__64295);
var first__64297 = cljs.core.first(seq__64296);
var seq__64296__$1 = cljs.core.next(seq__64296);
var ent__$1 = first__64297;
var tail__$1 = seq__64296__$1;
if(cljs.core.truth_(ent__$1)){
var res = join_item(ent__$1,out__$2);
if(com.wsscode.common.async_cljs.chan_QMARK_(res)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (out__$1,G__64225__$1,c__52131__auto__,res,out__$2,vec__64295,seq__64296,first__64297,seq__64296__$1,ent__$1,tail__$1,out,G__64225,vec__64226,seq__64227,first__64228,seq__64227__$1,ent,tail,map__64220,map__64220__$1,env,parallel_QMARK_){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (out__$1,G__64225__$1,c__52131__auto__,res,out__$2,vec__64295,seq__64296,first__64297,seq__64296__$1,ent__$1,tail__$1,out,G__64225,vec__64226,seq__64227,first__64228,seq__64227__$1,ent,tail,map__64220,map__64220__$1,env,parallel_QMARK_){
return (function (state_64345){
var state_val_64346 = (state_64345[(1)]);
if((state_val_64346 === (7))){
var inst_64341 = (state_64345[(2)]);
var state_64345__$1 = state_64345;
var statearr_64347_65367 = state_64345__$1;
(statearr_64347_65367[(2)] = inst_64341);


cljs.core.async.impl.ioc_helpers.process_exception(state_64345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64346 === (1))){
var state_64345__$1 = state_64345;
var statearr_64348_65368 = state_64345__$1;
(statearr_64348_65368[(2)] = null);

(statearr_64348_65368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64346 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64345,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_64312 = cljs.core.PersistentVector.EMPTY_NODE;
var state_64345__$1 = (function (){var statearr_64350 = state_64345;
(statearr_64350[(7)] = inst_64312);

return statearr_64350;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64345__$1,(5),res);
} else {
if((state_val_64346 === (6))){
var inst_64322 = (state_64345[(8)]);
var inst_64328 = (state_64345[(9)]);
var inst_64327 = cljs.core.seq(inst_64322);
var inst_64328__$1 = cljs.core.first(inst_64327);
var inst_64329 = cljs.core.next(inst_64327);
var state_64345__$1 = (function (){var statearr_64351 = state_64345;
(statearr_64351[(9)] = inst_64328__$1);

(statearr_64351[(10)] = inst_64329);

return statearr_64351;
})();
if(cljs.core.truth_(inst_64328__$1)){
var statearr_64352_65371 = state_64345__$1;
(statearr_64352_65371[(1)] = (8));

} else {
var statearr_64353_65372 = state_64345__$1;
(statearr_64353_65372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64346 === (3))){
var inst_64301 = (state_64345[(2)]);
var state_64345__$1 = state_64345;
var statearr_64356_65373 = state_64345__$1;
(statearr_64356_65373[(2)] = inst_64301);


cljs.core.async.impl.ioc_helpers.process_exception(state_64345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64346 === (2))){
var inst_64343 = (state_64345[(2)]);
var state_64345__$1 = state_64345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64345__$1,inst_64343);
} else {
if((state_val_64346 === (11))){
var inst_64329 = (state_64345[(10)]);
var inst_64321 = (state_64345[(11)]);
var inst_64333 = (state_64345[(2)]);
var inst_64334 = com.wsscode.common.async_cljs.throw_err(inst_64333);
var inst_64335 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_64321,inst_64334);
var inst_64321__$1 = inst_64335;
var inst_64322 = inst_64329;
var state_64345__$1 = (function (){var statearr_64357 = state_64345;
(statearr_64357[(8)] = inst_64322);

(statearr_64357[(11)] = inst_64321__$1);

return statearr_64357;
})();
var statearr_64358_65377 = state_64345__$1;
(statearr_64358_65377[(2)] = null);

(statearr_64358_65377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64346 === (9))){
var inst_64321 = (state_64345[(11)]);
var state_64345__$1 = state_64345;
var statearr_64359_65382 = state_64345__$1;
(statearr_64359_65382[(2)] = inst_64321);

(statearr_64359_65382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64346 === (5))){
var inst_64312 = (state_64345[(7)]);
var inst_64314 = (state_64345[(2)]);
var inst_64315 = com.wsscode.common.async_cljs.throw_err(inst_64314);
var inst_64316 = [inst_64315];
var inst_64317 = (new cljs.core.PersistentVector(null,1,(5),inst_64312,inst_64316,null));
var inst_64318 = cljs.core.seq(tail__$1);
var inst_64319 = cljs.core.first(inst_64318);
var inst_64320 = cljs.core.next(inst_64318);
var inst_64321 = inst_64317;
var inst_64322 = tail__$1;
var state_64345__$1 = (function (){var statearr_64360 = state_64345;
(statearr_64360[(12)] = inst_64320);

(statearr_64360[(8)] = inst_64322);

(statearr_64360[(13)] = inst_64319);

(statearr_64360[(11)] = inst_64321);

return statearr_64360;
})();
var statearr_64361_65401 = state_64345__$1;
(statearr_64361_65401[(2)] = null);

(statearr_64361_65401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64346 === (10))){
var inst_64339 = (state_64345[(2)]);
var state_64345__$1 = state_64345;
var statearr_64362_65411 = state_64345__$1;
(statearr_64362_65411[(2)] = inst_64339);

(statearr_64362_65411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64346 === (8))){
var inst_64328 = (state_64345[(9)]);
var inst_64321 = (state_64345[(11)]);
var inst_64331 = join_item(inst_64328,inst_64321);
var state_64345__$1 = state_64345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64345__$1,(11),inst_64331);
} else {
return null;
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
});})(out__$1,G__64225__$1,c__52131__auto__,res,out__$2,vec__64295,seq__64296,first__64297,seq__64296__$1,ent__$1,tail__$1,out,G__64225,vec__64226,seq__64227,first__64228,seq__64227__$1,ent,tail,map__64220,map__64220__$1,env,parallel_QMARK_))
;
return ((function (out__$1,G__64225__$1,switch__52035__auto__,c__52131__auto__,res,out__$2,vec__64295,seq__64296,first__64297,seq__64296__$1,ent__$1,tail__$1,out,G__64225,vec__64226,seq__64227,first__64228,seq__64227__$1,ent,tail,map__64220,map__64220__$1,env,parallel_QMARK_){
return (function() {
var com$wsscode$pathom$core$join_seq_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$join_seq_$_state_machine__52036__auto____0 = (function (){
var statearr_64363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64363[(0)] = com$wsscode$pathom$core$join_seq_$_state_machine__52036__auto__);

(statearr_64363[(1)] = (1));

return statearr_64363;
});
var com$wsscode$pathom$core$join_seq_$_state_machine__52036__auto____1 = (function (state_64345){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64345);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64364){if((e64364 instanceof Object)){
var ex__52039__auto__ = e64364;
var statearr_64365_65450 = state_64345;
(statearr_64365_65450[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64364;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65468 = state_64345;
state_64345 = G__65468;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_$_state_machine__52036__auto__ = function(state_64345){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_$_state_machine__52036__auto____1.call(this,state_64345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_$_state_machine__52036__auto____0;
com$wsscode$pathom$core$join_seq_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$join_seq_$_state_machine__52036__auto__;
})()
;})(out__$1,G__64225__$1,switch__52035__auto__,c__52131__auto__,res,out__$2,vec__64295,seq__64296,first__64297,seq__64296__$1,ent__$1,tail__$1,out,G__64225,vec__64226,seq__64227,first__64228,seq__64227__$1,ent,tail,map__64220,map__64220__$1,env,parallel_QMARK_))
})();
var state__52133__auto__ = (function (){var statearr_64366 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64366[(6)] = c__52131__auto__);

return statearr_64366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(out__$1,G__64225__$1,c__52131__auto__,res,out__$2,vec__64295,seq__64296,first__64297,seq__64296__$1,ent__$1,tail__$1,out,G__64225,vec__64226,seq__64227,first__64228,seq__64227__$1,ent,tail,map__64220,map__64220__$1,env,parallel_QMARK_))
);

return c__52131__auto__;
} else {
var G__65481 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out__$2,res);
var G__65482 = tail__$1;
out__$1 = G__65481;
G__64225__$1 = G__65482;
continue;
}
} else {
return out__$2;
}
break;
}
}
});
com.wsscode.pathom.core.ident_QMARK_ = (function com$wsscode$pathom$core$ident_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))));
});
com.wsscode.pathom.core.ident_key_STAR_ = (function com$wsscode$pathom$core$ident_key_STAR_(key){
if(cljs.core.vector_QMARK_(key)){
return cljs.core.first(key);
} else {
return null;
}
});
/**
 * The first element of an ident.
 */
com.wsscode.pathom.core.ident_key = (function com$wsscode$pathom$core$ident_key(p__64370){
var map__64371 = p__64370;
var map__64371__$1 = (((((!((map__64371 == null))))?(((((map__64371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64371):map__64371);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64371__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__64373 = ast;
if((G__64373 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__64373);
}
})();
if(cljs.core.vector_QMARK_(key)){
return cljs.core.first(key);
} else {
return null;
}
});
com.wsscode.pathom.core.ident_value_STAR_ = (function com$wsscode$pathom$core$ident_value_STAR_(key){
if(cljs.core.vector_QMARK_(key)){
return cljs.core.second(key);
} else {
return null;
}
});
/**
 * The second element of an ident
 */
com.wsscode.pathom.core.ident_value = (function com$wsscode$pathom$core$ident_value(p__64374){
var map__64375 = p__64374;
var map__64375__$1 = (((((!((map__64375 == null))))?(((((map__64375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64375):map__64375);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64375__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__64377 = ast;
if((G__64377 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__64377);
}
})();
if(cljs.core.sequential_QMARK_(key)){
return cljs.core.second(key);
} else {
return null;
}
});
/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
com.wsscode.pathom.core.elide_ast_nodes = (function com$wsscode$pathom$core$elide_ast_nodes(p__64379,elision_set){
var map__64380 = p__64379;
var map__64380__$1 = (((((!((map__64380 == null))))?(((((map__64380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64380):map__64380);
var ast = map__64380__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64380__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64380__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if(((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key)))){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__64380,map__64380__$1,ast,key,union_key){
return (function (c){
if(cljs.core.truth_(c)){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__64380,map__64380__$1,ast,key,union_key){
return (function (p1__64378_SHARP_){
return (com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__64378_SHARP_,elision_set) : com.wsscode.pathom.core.elide_ast_nodes.call(null,p1__64378_SHARP_,elision_set));
});})(union_elision_QMARK_,map__64380,map__64380__$1,ast,key,union_key))
,c));
} else {
return null;
}
});})(union_elision_QMARK_,map__64380,map__64380__$1,ast,key,union_key))
);
}
});
com.wsscode.pathom.core.normalize_env = (function com$wsscode$pathom$core$normalize_env(p__64382){
var map__64383 = p__64382;
var map__64383__$1 = (((((!((map__64383 == null))))?(((((map__64383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64383):map__64383);
var env = map__64383__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64383__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__64385 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if((new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249).cljs$core$IFn$_invoke$arity$1(env) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64385,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
} else {
return G__64385;
}
});
com.wsscode.pathom.core.merge_queries_STAR_ = (function com$wsscode$pathom$core$merge_queries_STAR_(qa,qb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast,p__64388){
var map__64389 = p__64388;
var map__64389__$1 = (((((!((map__64389 == null))))?(((((map__64389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64389):map__64389);
var item_b = map__64389__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64389__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64389__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64389__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5733__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__64389,map__64389__$1,item_b,key,type,params){
return (function (p1__64387_SHARP_,p2__64386_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__64386_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64387_SHARP_,p2__64386_SHARP_], null);
} else {
return null;
}
});})(map__64389,map__64389__$1,item_b,key,type,params))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__64391 = temp__5733__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64391,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64391,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(item),params)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),com.wsscode.pathom.core.merge_queries_STAR_,item_b);
} else {
return cljs.core.reduced(null);
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),type)))){
return cljs.core.assoc_in(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),item_b);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.reduced(null);
} else {
return ast;

}
}
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,item_b);
}
}),qa,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(qb));
});
com.wsscode.pathom.core.merge_queries = (function com$wsscode$pathom$core$merge_queries(qa,qb){
var G__64394 = com.wsscode.pathom.core.merge_queries_STAR_(com.wsscode.pathom.core.query__GT_ast(qa),com.wsscode.pathom.core.query__GT_ast(qb));
if((G__64394 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast__GT_query(G__64394);
}
});
/**
 * Converts ident values and param values to ::p/var.
 */
com.wsscode.pathom.core.normalize_query_variables = (function com$wsscode$pathom$core$normalize_query_variables(query){
return com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.transduce_children(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var G__64396 = x;
var G__64396__$1 = ((com.wsscode.pathom.core.ident_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64396,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null)):G__64396);
if(cljs.core.truth_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__64396__$1,new cljs.core.Keyword(null,"params","params",710516235),((function (G__64396,G__64396__$1){
return (function (p1__64395_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__64396,G__64396__$1){
return (function (p__64397){
var vec__64398 = p__64397;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64398,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64398,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null);
});})(G__64396,G__64396__$1))
),p1__64395_SHARP_);
});})(G__64396,G__64396__$1))
);
} else {
return G__64396__$1;
}
})),com.wsscode.pathom.core.query__GT_ast(query)));
});
/**
 * Generates a consistent hash from the query. The query first goes to a process to remove any
 *   variables from idents and params, then we get the Clojure hash of it. You can use this to save
 *   information about a query that can be used to correlate with the query later.
 */
com.wsscode.pathom.core.query_id = (function com$wsscode$pathom$core$query_id(query){
return cljs.core.hash(com.wsscode.pathom.core.normalize_query_variables(query));
});
com.wsscode.pathom.core.key_dispatch = (function com$wsscode$pathom$core$key_dispatch(p__64401){
var map__64402 = p__64401;
var map__64402__$1 = (((((!((map__64402 == null))))?(((((map__64402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64402):map__64402);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64402__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
});
/**
 * Dispatch on the first element (type) of an incoming ident.
 */
com.wsscode.pathom.core.entity_dispatch = (function com$wsscode$pathom$core$entity_dispatch(p__64404){
var map__64405 = p__64404;
var map__64405__$1 = (((((!((map__64405 == null))))?(((((map__64405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64405):map__64405);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64405__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return null;
}
});
/**
 * Produces a reader that will respond to any keyword whose namespace
 *   is in the set `(::placeholder-prefixes env)`. The join node logical
 *   level stays the same as the parent where the placeholder node is
 *   requested.
 */
com.wsscode.pathom.core.env_placeholder_reader = (function com$wsscode$pathom$core$env_placeholder_reader(p__64407){
var map__64408 = p__64407;
var map__64408__$1 = (((((!((map__64408 == null))))?(((((map__64408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64408):map__64408);
var env = map__64408__$1;
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64408__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
if(cljs.core.truth_(placeholder_prefixes)){
} else {
throw (new Error(["Assert failed: ","To use env-placeholder-reader please add ::p/placeholder-prefixes to your environment.","\n","placeholder-prefixes"].join('')));
}

if(cljs.core.contains_QMARK_(placeholder_prefixes,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env))))){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * This will lift the queries from placeholders to the same level of the query, as if there was not placeholders in it.
 */
com.wsscode.pathom.core.lift_placeholders = (function com$wsscode$pathom$core$lift_placeholders(p__64411,query){
var map__64412 = p__64411;
var map__64412__$1 = (((((!((map__64412 == null))))?(((((map__64412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64412):map__64412);
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64412__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var ast = com.wsscode.pathom.core.query__GT_ast(query);
var ast_SINGLEQUOTE_ = clojure.walk.postwalk(((function (ast,map__64412,map__64412__$1,placeholder_prefixes){
return (function (x){
var temp__5733__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5733__auto__)){
var children = temp__5733__auto__;
var map__64414 = cljs.core.group_by(((function (children,temp__5733__auto__,ast,map__64412,map__64412__$1,placeholder_prefixes){
return (function (p1__64410_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__64410_SHARP_))) && (cljs.core.contains_QMARK_(placeholder_prefixes,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(p1__64410_SHARP_)))));
});})(children,temp__5733__auto__,ast,map__64412,map__64412__$1,placeholder_prefixes))
,children);
var map__64414__$1 = (((((!((map__64414 == null))))?(((((map__64414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64414):map__64414);
var placeholders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64414__$1,true);
var regular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64414__$1,false);
var _LT__GT_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var or__4131__auto__ = regular;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.core.merge_queries_STAR_,_LT__GT_,placeholders);
} else {
return x;
}
});})(ast,map__64412,map__64412__$1,placeholder_prefixes))
,ast);
return com.wsscode.pathom.core.ast__GT_query(ast_SINGLEQUOTE_);
});
/**
 * Map reader will try to find the ast key on the current entity and output it. When the value is a map and a
 *   sub query is present, it will apply the sub query on that value (recursively). When the value is a sequence,
 *   map-reader will do a join on each of the items (and apply sub queries if it's present and values are maps.
 * 
 *   Map-reader will defer the read when the key is not present at entity.
 */
com.wsscode.pathom.core.map_reader = (function com$wsscode$pathom$core$map_reader(p__64416){
var map__64417 = p__64416;
var map__64417__$1 = (((((!((map__64417 == null))))?(((((map__64417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64417):map__64417);
var env = map__64417__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64417__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64417__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5733__auto__ = cljs.core.find(entity,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__64419 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64419,(1),null);
if(cljs.core.sequential_QMARK_(v)){
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(v);
if(and__4120__auto__){
return query;
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(v,env);
} else {
return v;
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Like map-reader, but it has extra options (read from the environment):
 *   map-key-transform: (fn [key]) will transform the key on the AST before trying to match with entity key
 *   map-value-transform: (fn [key value]) will transform the output value after reading from the entity.
 * 
 *   The reason to have a separated reader is so the plain version (map-reader) can be faster by avoiding checking
 *   the presence of transform functions.
 */
com.wsscode.pathom.core.map_reader_STAR_ = (function com$wsscode$pathom$core$map_reader_STAR_(p__64422){
var map__64423 = p__64422;
var map__64423__$1 = (((((!((map__64423 == null))))?(((((map__64423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64423):map__64423);
var map_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64423__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));
var map_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64423__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));
return ((function (map__64423,map__64423__$1,map_key_transform,map_value_transform){
return (function (p__64425){
var map__64426 = p__64425;
var map__64426__$1 = (((((!((map__64426 == null))))?(((((map__64426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64426):map__64426);
var env = map__64426__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64426__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64426__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64426__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var key = (function (){var G__64428 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(map_key_transform)){
return (map_key_transform.cljs$core$IFn$_invoke$arity$1 ? map_key_transform.cljs$core$IFn$_invoke$arity$1(G__64428) : map_key_transform.call(null,G__64428));
} else {
return G__64428;
}
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5733__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__64429 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64429,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64429,(1),null);
if(cljs.core.sequential_QMARK_(v)){
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(v);
if(and__4120__auto__){
return query;
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v));
} else {
var G__64432 = v;
if(cljs.core.truth_(map_value_transform)){
var G__64433 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__64434 = G__64432;
return (map_value_transform.cljs$core$IFn$_invoke$arity$2 ? map_value_transform.cljs$core$IFn$_invoke$arity$2(G__64433,G__64434) : map_value_transform.call(null,G__64433,G__64434));
} else {
return G__64432;
}
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
;})(map__64423,map__64423__$1,map_key_transform,map_value_transform))
});
/**
 * Like map-reader*, but handles plain Javascript objects instead of Clojure maps.
 */
com.wsscode.pathom.core.js_obj_reader = (function com$wsscode$pathom$core$js_obj_reader(p__64435){
var map__64436 = p__64435;
var map__64436__$1 = (((((!((map__64436 == null))))?(((((map__64436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64436):map__64436);
var env = map__64436__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64436__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64436__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64436__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64436__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),((function (map__64436,map__64436__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__64436,map__64436__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64436__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var js_key = (function (){var G__64438 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__64438) : js_key_transform.call(null,G__64438));
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(goog.object.containsKey(entity,js_key))){
var v = goog.object.get(entity,js_key);
if(cljs.core.truth_(Array.isArray(v))){
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join_seq(env,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(v));
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = query;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),Object);
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v));
} else {
var G__64439 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__64440 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__64439,G__64440) : js_value_transform.call(null,G__64439,G__64440));
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * This reader will join on any ident join, the entity for the join will be a map containing the same
 *   key and value expressed on the ident, eg: [{[:id 123] [:id]}], the join entry will be {:id 123}.
 */
com.wsscode.pathom.core.ident_join_reader = (function com$wsscode$pathom$core$ident_join_reader(env){
var temp__5733__auto__ = com.wsscode.pathom.core.ident_key(env);
if(cljs.core.truth_(temp__5733__auto__)){
var key = temp__5733__auto__;
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([key,com.wsscode.pathom.core.ident_value(env)]),env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Helper to create a plugin that can view/modify the env/tx of a top-level request.
 *   f - (fn [{:keys [env tx]}] {:env new-env :tx new-tx})
 *   If the function returns no env or tx, then the parser will not be called (aborts the parse)
 */
com.wsscode.pathom.core.pre_process_parser_plugin = (function com$wsscode$pathom$core$pre_process_parser_plugin(f){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$pre_process_parser_plugin_$_transform_parser_out_plugin_external(parser){
return (function com$wsscode$pathom$core$pre_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal(env,tx){
var map__64441 = (function (){var G__64442 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"tx","tx",466630418),tx], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64442) : f.call(null,G__64442));
})();
var map__64441__$1 = (((((!((map__64441 == null))))?(((((map__64441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64441):map__64441);
var env__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64441__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var tx__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64441__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
if(((cljs.core.map_QMARK_(env__$1)) && (cljs.core.seq(tx__$1)))){
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env__$1,tx__$1) : parser.call(null,env__$1,tx__$1));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
})], null);
});
/**
 * Helper to create a plugin to work on the parser output. `f` will run once with the parser final result.
 */
com.wsscode.pathom.core.post_process_parser_plugin = (function com$wsscode$pathom$core$post_process_parser_plugin(f){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external(parser){
return (function com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal(env,tx){
var res__59683__auto__ = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__){
return (function (state_64459){
var state_val_64462 = (state_64459[(1)]);
if((state_val_64462 === (1))){
var state_64459__$1 = state_64459;
var statearr_64463_65624 = state_64459__$1;
(statearr_64463_65624[(2)] = null);

(statearr_64463_65624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64462 === (2))){
var inst_64456 = (state_64459[(2)]);
var state_64459__$1 = state_64459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64459__$1,inst_64456);
} else {
if((state_val_64462 === (3))){
var inst_64447 = (state_64459[(2)]);
var state_64459__$1 = state_64459;
var statearr_64464_65625 = state_64459__$1;
(statearr_64464_65625[(2)] = inst_64447);


cljs.core.async.impl.ioc_helpers.process_exception(state_64459__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64462 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64459,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_64459__$1 = state_64459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64459__$1,(5),res__59683__auto__);
} else {
if((state_val_64462 === (5))){
var inst_64452 = (state_64459[(2)]);
var inst_64453 = com.wsscode.common.async_cljs.throw_err(inst_64452);
var inst_64454 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64453) : f.call(null,inst_64453));
var state_64459__$1 = state_64459;
var statearr_64465_65629 = state_64459__$1;
(statearr_64465_65629[(2)] = inst_64454);


cljs.core.async.impl.ioc_helpers.process_exception(state_64459__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__52131__auto__,res__59683__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59683__auto__){
return (function() {
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__52036__auto____0 = (function (){
var statearr_64466 = [null,null,null,null,null,null,null];
(statearr_64466[(0)] = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__52036__auto__);

(statearr_64466[(1)] = (1));

return statearr_64466;
});
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__52036__auto____1 = (function (state_64459){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64459);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64467){if((e64467 instanceof Object)){
var ex__52039__auto__ = e64467;
var statearr_64468_65631 = state_64459;
(statearr_64468_65631[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65634 = state_64459;
state_64459 = G__65634;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__52036__auto__ = function(state_64459){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__52036__auto____1.call(this,state_64459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__52036__auto____0;
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__))
})();
var state__52133__auto__ = (function (){var statearr_64469 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64469[(6)] = c__52131__auto__);

return statearr_64469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__))
);

return c__52131__auto__;
} else {
var res = res__59683__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(res) : f.call(null,res));
}
});
})], null);
});
com.wsscode.pathom.core.elide_special_outputs_plugin = com.wsscode.pathom.core.post_process_parser_plugin(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.elide_items,com.wsscode.pathom.core.special_outputs));
com.wsscode.pathom.core.error_message = (function com$wsscode$pathom$core$error_message(err){
return err.message;
});
com.wsscode.pathom.core.error_str = (function com$wsscode$pathom$core$error_str(err){
var msg = err.message;
var data = cljs.core.ex_data(err);
var G__64473 = msg;
if(cljs.core.truth_(data)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64473)," - ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join('');
} else {
return G__64473;
}
});
/**
 * Helper function to update a mutation action.
 */
com.wsscode.pathom.core.update_action = (function com$wsscode$pathom$core$update_action(m,f){
if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"action","action",-811238024))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"action","action",-811238024),f);
} else {
return m;
}
});
com.wsscode.pathom.core.process_error = (function com$wsscode$pathom$core$process_error(p__64474,e){
var map__64475 = p__64474;
var map__64475__$1 = (((((!((map__64475 == null))))?(((((map__64475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64475):map__64475);
var env = map__64475__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64475__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return com.wsscode.pathom.core.error_str(e);
}
});
com.wsscode.pathom.core.add_error = (function com$wsscode$pathom$core$add_error(p__64478,e){
var map__64479 = p__64478;
var map__64479__$1 = (((((!((map__64479 == null))))?(((((map__64479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64479):map__64479);
var env = map__64479__$1;
var errors_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64479__$1,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64479__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core.truth_(errors_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(errors_STAR_,cljs.core.assoc,path,com.wsscode.pathom.core.process_error(env,e));
} else {
}

return new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882);
});
com.wsscode.pathom.core.wrap_handle_exception = (function com$wsscode$pathom$core$wrap_handle_exception(reader){
return (function com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal(p__64483){
var map__64484 = p__64483;
var map__64484__$1 = (((((!((map__64484 == null))))?(((((map__64484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64484):map__64484);
var env = map__64484__$1;
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64484__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
try{var x = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.common.async_cljs.chan_QMARK_(x)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,x,map__64484,map__64484__$1,env,fail_fast_QMARK_){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,x,map__64484,map__64484__$1,env,fail_fast_QMARK_){
return (function (state_64498){
var state_val_64499 = (state_64498[(1)]);
if((state_val_64499 === (1))){
var state_64498__$1 = state_64498;
var statearr_64500_65653 = state_64498__$1;
(statearr_64500_65653[(2)] = null);

(statearr_64500_65653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64499 === (2))){
var inst_64496 = (state_64498[(2)]);
var state_64498__$1 = state_64498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64498__$1,inst_64496);
} else {
if((state_val_64499 === (3))){
var inst_64487 = (state_64498[(2)]);
var inst_64488 = com.wsscode.pathom.core.add_error(env,inst_64487);
var state_64498__$1 = state_64498;
var statearr_64501_65671 = state_64498__$1;
(statearr_64501_65671[(2)] = inst_64488);


cljs.core.async.impl.ioc_helpers.process_exception(state_64498__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64499 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64498,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_64498__$1 = state_64498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64498__$1,(5),x);
} else {
if((state_val_64499 === (5))){
var inst_64493 = (state_64498[(2)]);
var inst_64494 = com.wsscode.common.async_cljs.throw_err(inst_64493);
var state_64498__$1 = state_64498;
var statearr_64502_65672 = state_64498__$1;
(statearr_64502_65672[(2)] = inst_64494);


cljs.core.async.impl.ioc_helpers.process_exception(state_64498__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__52131__auto__,x,map__64484,map__64484__$1,env,fail_fast_QMARK_))
;
return ((function (switch__52035__auto__,c__52131__auto__,x,map__64484,map__64484__$1,env,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__52036__auto____0 = (function (){
var statearr_64503 = [null,null,null,null,null,null,null];
(statearr_64503[(0)] = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__52036__auto__);

(statearr_64503[(1)] = (1));

return statearr_64503;
});
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__52036__auto____1 = (function (state_64498){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64498);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64504){if((e64504 instanceof Object)){
var ex__52039__auto__ = e64504;
var statearr_64505_65675 = state_64498;
(statearr_64505_65675[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64504;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65676 = state_64498;
state_64498 = G__65676;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__52036__auto__ = function(state_64498){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__52036__auto____1.call(this,state_64498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__52036__auto____0;
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,x,map__64484,map__64484__$1,env,fail_fast_QMARK_))
})();
var state__52133__auto__ = (function (){var statearr_64506 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64506[(6)] = c__52131__auto__);

return statearr_64506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,x,map__64484,map__64484__$1,env,fail_fast_QMARK_))
);

return c__52131__auto__;
} else {
return x;
}
}catch (e64486){var e = e64486;
return com.wsscode.pathom.core.add_error(env,e);
}}
});
});
com.wsscode.pathom.core.wrap_mutate_handle_exception = (function com$wsscode$pathom$core$wrap_mutate_handle_exception(mutate){
return (function com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal(p__64508,k,p){
var map__64509 = p__64508;
var map__64509__$1 = (((((!((map__64509 == null))))?(((((map__64509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64509):map__64509);
var env = map__64509__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64509__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64509__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p));
} else {
try{return com.wsscode.pathom.core.update_action((mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p)),((function (map__64509,map__64509__$1,env,process_error,fail_fast_QMARK_){
return (function (action){
return ((function (map__64509,map__64509__$1,env,process_error,fail_fast_QMARK_){
return (function (){
try{var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res,map__64509,map__64509__$1,env,process_error,fail_fast_QMARK_){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res,map__64509,map__64509__$1,env,process_error,fail_fast_QMARK_){
return (function (state_64532){
var state_val_64534 = (state_64532[(1)]);
if((state_val_64534 === (1))){
var state_64532__$1 = state_64532;
var statearr_64536_65682 = state_64532__$1;
(statearr_64536_65682[(2)] = null);

(statearr_64536_65682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64534 === (2))){
var inst_64530 = (state_64532[(2)]);
var state_64532__$1 = state_64532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64532__$1,inst_64530);
} else {
if((state_val_64534 === (3))){
var inst_64513 = (state_64532[(2)]);
var state_64532__$1 = (function (){var statearr_64543 = state_64532;
(statearr_64543[(7)] = inst_64513);

return statearr_64543;
})();
if(cljs.core.truth_(process_error)){
var statearr_64544_65686 = state_64532__$1;
(statearr_64544_65686[(1)] = (4));

} else {
var statearr_64545_65687 = state_64532__$1;
(statearr_64545_65687[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64534 === (4))){
var inst_64513 = (state_64532[(7)]);
var inst_64515 = (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,inst_64513) : process_error.call(null,env,inst_64513));
var state_64532__$1 = state_64532;
var statearr_64547_65699 = state_64532__$1;
(statearr_64547_65699[(2)] = inst_64515);

(statearr_64547_65699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64534 === (5))){
var inst_64513 = (state_64532[(7)]);
var inst_64517 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_64518 = com.wsscode.pathom.core.error_str(inst_64513);
var inst_64519 = [inst_64518];
var inst_64520 = cljs.core.PersistentHashMap.fromArrays(inst_64517,inst_64519);
var state_64532__$1 = state_64532;
var statearr_64548_65703 = state_64532__$1;
(statearr_64548_65703[(2)] = inst_64520);

(statearr_64548_65703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64534 === (6))){
var inst_64522 = (state_64532[(2)]);
var state_64532__$1 = state_64532;
var statearr_64549_65704 = state_64532__$1;
(statearr_64549_65704[(2)] = inst_64522);


cljs.core.async.impl.ioc_helpers.process_exception(state_64532__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64534 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64532,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_64532__$1 = state_64532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64532__$1,(8),res);
} else {
if((state_val_64534 === (8))){
var inst_64527 = (state_64532[(2)]);
var inst_64528 = com.wsscode.common.async_cljs.throw_err(inst_64527);
var state_64532__$1 = state_64532;
var statearr_64551_65723 = state_64532__$1;
(statearr_64551_65723[(2)] = inst_64528);


cljs.core.async.impl.ioc_helpers.process_exception(state_64532__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__52131__auto__,res,map__64509,map__64509__$1,env,process_error,fail_fast_QMARK_))
;
return ((function (switch__52035__auto__,c__52131__auto__,res,map__64509,map__64509__$1,env,process_error,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__52036__auto____0 = (function (){
var statearr_64552 = [null,null,null,null,null,null,null,null];
(statearr_64552[(0)] = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__52036__auto__);

(statearr_64552[(1)] = (1));

return statearr_64552;
});
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__52036__auto____1 = (function (state_64532){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64532);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64553){if((e64553 instanceof Object)){
var ex__52039__auto__ = e64553;
var statearr_64554_65725 = state_64532;
(statearr_64554_65725[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64553;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65726 = state_64532;
state_64532 = G__65726;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__52036__auto__ = function(state_64532){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__52036__auto____1.call(this,state_64532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__52036__auto____0;
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res,map__64509,map__64509__$1,env,process_error,fail_fast_QMARK_))
})();
var state__52133__auto__ = (function (){var statearr_64556 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64556[(6)] = c__52131__auto__);

return statearr_64556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res,map__64509,map__64509__$1,env,process_error,fail_fast_QMARK_))
);

return c__52131__auto__;
} else {
return res;
}
}catch (e64512){var e = e64512;
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
}});
;})(map__64509,map__64509__$1,env,process_error,fail_fast_QMARK_))
});})(map__64509,map__64509__$1,env,process_error,fail_fast_QMARK_))
);
}catch (e64511){var e = e64511;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (e,map__64509,map__64509__$1,env,process_error,fail_fast_QMARK_){
return (function (){
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
});})(e,map__64509,map__64509__$1,env,process_error,fail_fast_QMARK_))
], null);
}}
});
});
com.wsscode.pathom.core.wrap_parser_exception = (function com$wsscode$pathom$core$wrap_parser_exception(parser){
return (function com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal(env,tx){
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var res__59683__auto__ = (function (){var G__64559 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),errors);
var G__64560 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__64559,G__64560) : parser.call(null,G__64559,G__64560));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__,errors){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__,errors){
return (function (state_64581){
var state_val_64582 = (state_64581[(1)]);
if((state_val_64582 === (1))){
var state_64581__$1 = state_64581;
var statearr_64583_65745 = state_64581__$1;
(statearr_64583_65745[(2)] = null);

(statearr_64583_65745[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64582 === (2))){
var inst_64579 = (state_64581[(2)]);
var state_64581__$1 = state_64581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64581__$1,inst_64579);
} else {
if((state_val_64582 === (3))){
var inst_64561 = (state_64581[(2)]);
var state_64581__$1 = state_64581;
var statearr_64586_65747 = state_64581__$1;
(statearr_64586_65747[(2)] = inst_64561);


cljs.core.async.impl.ioc_helpers.process_exception(state_64581__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64582 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64581,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_64581__$1 = state_64581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64581__$1,(5),res__59683__auto__);
} else {
if((state_val_64582 === (5))){
var inst_64567 = (state_64581[(2)]);
var inst_64568 = com.wsscode.common.async_cljs.throw_err(inst_64567);
var inst_64570 = cljs.core.deref(errors);
var inst_64571 = cljs.core.seq(inst_64570);
var state_64581__$1 = (function (){var statearr_64587 = state_64581;
(statearr_64587[(7)] = inst_64568);

return statearr_64587;
})();
if(inst_64571){
var statearr_64588_65749 = state_64581__$1;
(statearr_64588_65749[(1)] = (6));

} else {
var statearr_64589_65750 = state_64581__$1;
(statearr_64589_65750[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64582 === (6))){
var inst_64568 = (state_64581[(7)]);
var inst_64573 = cljs.core.deref(errors);
var inst_64574 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_64568,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),inst_64573);
var state_64581__$1 = state_64581;
var statearr_64590_65752 = state_64581__$1;
(statearr_64590_65752[(2)] = inst_64574);

(statearr_64590_65752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64582 === (7))){
var inst_64568 = (state_64581[(7)]);
var state_64581__$1 = state_64581;
var statearr_64591_65754 = state_64581__$1;
(statearr_64591_65754[(2)] = inst_64568);

(statearr_64591_65754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64582 === (8))){
var inst_64577 = (state_64581[(2)]);
var state_64581__$1 = state_64581;
var statearr_64592_65756 = state_64581__$1;
(statearr_64592_65756[(2)] = inst_64577);


cljs.core.async.impl.ioc_helpers.process_exception(state_64581__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__52131__auto__,res__59683__auto__,errors))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59683__auto__,errors){
return (function() {
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__52036__auto____0 = (function (){
var statearr_64593 = [null,null,null,null,null,null,null,null];
(statearr_64593[(0)] = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__52036__auto__);

(statearr_64593[(1)] = (1));

return statearr_64593;
});
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__52036__auto____1 = (function (state_64581){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64581);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64594){if((e64594 instanceof Object)){
var ex__52039__auto__ = e64594;
var statearr_64595_65759 = state_64581;
(statearr_64595_65759[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65764 = state_64581;
state_64581 = G__65764;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__52036__auto__ = function(state_64581){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__52036__auto____1.call(this,state_64581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__52036__auto____0;
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__,errors))
})();
var state__52133__auto__ = (function (){var statearr_64596 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64596[(6)] = c__52131__auto__);

return statearr_64596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__,errors))
);

return c__52131__auto__;
} else {
var res = res__59683__auto__;
var G__64598 = res;
if(cljs.core.seq(cljs.core.deref(errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64598,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.deref(errors));
} else {
return G__64598;
}
}
});
});
com.wsscode.pathom.core.error_handler_plugin = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),com.wsscode.pathom.core.wrap_handle_exception,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),com.wsscode.pathom.core.wrap_parser_exception,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202),com.wsscode.pathom.core.wrap_mutate_handle_exception], null);
com.wsscode.pathom.core.trace_plugin = com.wsscode.pathom.trace.trace_plugin;
com.wsscode.pathom.core.collapse_error_path = (function com$wsscode$pathom$core$collapse_error_path(m,path){

return cljs.core.vec((function (){var path_SINGLEQUOTE_ = path;
while(true){
if((cljs.core.count(path_SINGLEQUOTE_) === (0))){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),path);
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,path_SINGLEQUOTE_))){
return path_SINGLEQUOTE_;
} else {
var G__65773 = cljs.core.butlast(path_SINGLEQUOTE_);
path_SINGLEQUOTE_ = G__65773;
continue;
}
}
break;
}
})());
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","collapse-error-path","com.wsscode.pathom.core/collapse-error-path",-1124133360,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
com.wsscode.pathom.core.raise_errors = (function com$wsscode$pathom$core$raise_errors(data){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__64599){
var vec__64600 = p__64599;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64600,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64600,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,path))){
var path_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.last(path)], null));
return cljs.core.assoc_in(m,path_SINGLEQUOTE_,err);
} else {
return m;
}
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","raise-errors","com.wsscode.pathom.core/raise-errors",77570572,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__64609){
return cljs.core.map_QMARK_(G__64609);
})], null),(function (G__64609){
return cljs.core.map_QMARK_(G__64609);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));
/**
 * Mutations running through a parser all come back in a map like this {'my/mutation {:result {...}}}. This function
 *   converts that to {'my/mutation {...}}. Copied from fulcro.server.
 */
com.wsscode.pathom.core.raise_response = (function com$wsscode$pathom$core$raise_response(resp){
return clojure.walk.prewalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__64627){
var vec__64628 = p__64627;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64628,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64628,(1),null);
if((((k instanceof cljs.core.Symbol)) && ((!((new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(v) == null)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
return x;
}
}),resp);
});
com.wsscode.pathom.core.raise_mutation_result_plugin = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$raise_mutation_result_wrap_parser(parser){
return (function com$wsscode$pathom$core$raise_mutation_result_wrap_parser_$_raise_mutation_result_wrap_internal(env,tx){
return com.wsscode.pathom.core.raise_response((parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx)));
});
})], null);
com.wsscode.pathom.core.env_plugin = (function com$wsscode$pathom$core$env_plugin(extra_env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$env_plugin_$_env_plugin_wrap_parser(parser){
return (function com$wsscode$pathom$core$env_plugin_$_env_plugin_wrap_parser_$_env_plugin_wrap_internal(env,tx){
var G__64634 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_env,env], 0));
var G__64635 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__64634,G__64635) : parser.call(null,G__64634,G__64635));
});
})], null);
});
/**
 * This plugin receives a function that will be called to wrap the current
 *   enviroment each time the main parser is called (parser level).
 */
com.wsscode.pathom.core.env_wrap_plugin = (function com$wsscode$pathom$core$env_wrap_plugin(extra_env_wrapper){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$env_wrap_plugin_$_env_wrap_wrap_parser(parser){
return (function com$wsscode$pathom$core$env_wrap_plugin_$_env_wrap_wrap_parser_$_env_wrap_wrap_internal(env,tx){
var G__64636 = (extra_env_wrapper.cljs$core$IFn$_invoke$arity$1 ? extra_env_wrapper.cljs$core$IFn$_invoke$arity$1(env) : extra_env_wrapper.call(null,env));
var G__64637 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__64636,G__64637) : parser.call(null,G__64636,G__64637));
});
})], null);
});
/**
 * DEPRECATED not required anymore, this was integrated in the main engine.
 */
com.wsscode.pathom.core.request_cache_plugin = cljs.core.PersistentArrayMap.EMPTY;
com.wsscode.pathom.core.cached_STAR_ = (function com$wsscode$pathom$core$cached_STAR_(env,key,body_fn){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(temp__5733__auto__)){
var cache = temp__5733__auto__;
var temp__5733__auto____$1 = cljs.core.find(cljs.core.deref(cache),key);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__64638 = temp__5733__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64638,(0),null);
var hit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64638,(1),null);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-hit","com.wsscode.pathom.core/cache-hit",1851998374),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

return com.wsscode.common.async_cljs.throw_err(hit);
} else {
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

var res__59683__auto__ = (function (){try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}catch (e64641){var e = e64641;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,e);

throw e;
}})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__,temp__5733__auto____$1,cache,temp__5733__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__,temp__5733__auto____$1,cache,temp__5733__auto__){
return (function (state_64653){
var state_val_64654 = (state_64653[(1)]);
if((state_val_64654 === (1))){
var state_64653__$1 = state_64653;
var statearr_64655_65793 = state_64653__$1;
(statearr_64655_65793[(2)] = null);

(statearr_64655_65793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64654 === (2))){
var inst_64651 = (state_64653[(2)]);
var state_64653__$1 = state_64653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64653__$1,inst_64651);
} else {
if((state_val_64654 === (3))){
var inst_64642 = (state_64653[(2)]);
var state_64653__$1 = state_64653;
var statearr_64656_65798 = state_64653__$1;
(statearr_64656_65798[(2)] = inst_64642);


cljs.core.async.impl.ioc_helpers.process_exception(state_64653__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64654 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64653,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_64653__$1 = state_64653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64653__$1,(5),res__59683__auto__);
} else {
if((state_val_64654 === (5))){
var inst_64647 = (state_64653[(2)]);
var inst_64648 = com.wsscode.common.async_cljs.throw_err(inst_64647);
var inst_64649 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,inst_64648);
var state_64653__$1 = (function (){var statearr_64657 = state_64653;
(statearr_64657[(7)] = inst_64649);

return statearr_64657;
})();
var statearr_64658_65803 = state_64653__$1;
(statearr_64658_65803[(2)] = inst_64648);


cljs.core.async.impl.ioc_helpers.process_exception(state_64653__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__52131__auto__,res__59683__auto__,temp__5733__auto____$1,cache,temp__5733__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59683__auto__,temp__5733__auto____$1,cache,temp__5733__auto__){
return (function() {
var com$wsscode$pathom$core$cached_STAR__$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$cached_STAR__$_state_machine__52036__auto____0 = (function (){
var statearr_64661 = [null,null,null,null,null,null,null,null];
(statearr_64661[(0)] = com$wsscode$pathom$core$cached_STAR__$_state_machine__52036__auto__);

(statearr_64661[(1)] = (1));

return statearr_64661;
});
var com$wsscode$pathom$core$cached_STAR__$_state_machine__52036__auto____1 = (function (state_64653){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64653);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64662){if((e64662 instanceof Object)){
var ex__52039__auto__ = e64662;
var statearr_64664_65804 = state_64653;
(statearr_64664_65804[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64662;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65805 = state_64653;
state_64653 = G__65805;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_STAR__$_state_machine__52036__auto__ = function(state_64653){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__52036__auto____1.call(this,state_64653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_STAR__$_state_machine__52036__auto____0;
com$wsscode$pathom$core$cached_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_STAR__$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$cached_STAR__$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__,temp__5733__auto____$1,cache,temp__5733__auto__))
})();
var state__52133__auto__ = (function (){var statearr_64666 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64666[(6)] = c__52131__auto__);

return statearr_64666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__,temp__5733__auto____$1,cache,temp__5733__auto__))
);

return c__52131__auto__;
} else {
var hit = res__59683__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,hit);

return hit;
}
}
} else {
return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}
});
com.wsscode.pathom.core.cached_async_STAR_ = (function com$wsscode$pathom$core$cached_async_STAR_(env,key,f){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(temp__5733__auto__)){
var cache = temp__5733__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.update,key,((function (cache,temp__5733__auto__){
return (function (x){
if(cljs.core.truth_(x)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-hit","com.wsscode.pathom.core/cache-hit",1851998374),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

return x;
} else {
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

var ch__59712__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__52131__auto___65815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___65815,ch__59712__auto__,cache,temp__5733__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___65815,ch__59712__auto__,cache,temp__5733__auto__){
return (function (state_64683){
var state_val_64684 = (state_64683[(1)]);
if((state_val_64684 === (1))){
var state_64683__$1 = state_64683;
var statearr_64685_65817 = state_64683__$1;
(statearr_64685_65817[(2)] = null);

(statearr_64685_65817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64684 === (2))){
var inst_64680 = (state_64683[(2)]);
var inst_64681 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__59712__auto__,inst_64680);
var state_64683__$1 = state_64683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64683__$1,inst_64681);
} else {
if((state_val_64684 === (3))){
var inst_64667 = (state_64683[(2)]);
var state_64683__$1 = state_64683;
var statearr_64686_65823 = state_64683__$1;
(statearr_64686_65823[(2)] = inst_64667);


cljs.core.async.impl.ioc_helpers.process_exception(state_64683__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64684 === (4))){
var inst_64671 = (state_64683[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64683,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_64671__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_64672 = com.wsscode.common.async_cljs.chan_QMARK_(inst_64671__$1);
var state_64683__$1 = (function (){var statearr_64687 = state_64683;
(statearr_64687[(7)] = inst_64671__$1);

return statearr_64687;
})();
if(inst_64672){
var statearr_64688_65824 = state_64683__$1;
(statearr_64688_65824[(1)] = (5));

} else {
var statearr_64689_65825 = state_64683__$1;
(statearr_64689_65825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64684 === (5))){
var inst_64671 = (state_64683[(7)]);
var state_64683__$1 = state_64683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64683__$1,(8),inst_64671);
} else {
if((state_val_64684 === (6))){
var inst_64671 = (state_64683[(7)]);
var state_64683__$1 = state_64683;
var statearr_64691_65828 = state_64683__$1;
(statearr_64691_65828[(2)] = inst_64671);

(statearr_64691_65828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64684 === (7))){
var inst_64678 = (state_64683[(2)]);
var state_64683__$1 = state_64683;
var statearr_64692_65829 = state_64683__$1;
(statearr_64692_65829[(2)] = inst_64678);


cljs.core.async.impl.ioc_helpers.process_exception(state_64683__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64684 === (8))){
var inst_64675 = (state_64683[(2)]);
var state_64683__$1 = state_64683;
var statearr_64693_65831 = state_64683__$1;
(statearr_64693_65831[(2)] = inst_64675);

(statearr_64693_65831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__52131__auto___65815,ch__59712__auto__,cache,temp__5733__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto___65815,ch__59712__auto__,cache,temp__5733__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto____0 = (function (){
var statearr_64694 = [null,null,null,null,null,null,null,null];
(statearr_64694[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto__);

(statearr_64694[(1)] = (1));

return statearr_64694;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto____1 = (function (state_64683){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64683);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64695){if((e64695 instanceof Object)){
var ex__52039__auto__ = e64695;
var statearr_64696_65837 = state_64683;
(statearr_64696_65837[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65840 = state_64683;
state_64683 = G__65840;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto__ = function(state_64683){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto____1.call(this,state_64683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___65815,ch__59712__auto__,cache,temp__5733__auto__))
})();
var state__52133__auto__ = (function (){var statearr_64698 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64698[(6)] = c__52131__auto___65815);

return statearr_64698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___65815,ch__59712__auto__,cache,temp__5733__auto__))
);


return ch__59712__auto__;
}
});})(cache,temp__5733__auto__))
);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),key);
} else {
var ch__59712__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__52131__auto___65841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___65841,ch__59712__auto__,temp__5733__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___65841,ch__59712__auto__,temp__5733__auto__){
return (function (state_64715){
var state_val_64716 = (state_64715[(1)]);
if((state_val_64716 === (1))){
var state_64715__$1 = state_64715;
var statearr_64718_65842 = state_64715__$1;
(statearr_64718_65842[(2)] = null);

(statearr_64718_65842[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64716 === (2))){
var inst_64712 = (state_64715[(2)]);
var inst_64713 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__59712__auto__,inst_64712);
var state_64715__$1 = state_64715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64715__$1,inst_64713);
} else {
if((state_val_64716 === (3))){
var inst_64699 = (state_64715[(2)]);
var state_64715__$1 = state_64715;
var statearr_64719_65845 = state_64715__$1;
(statearr_64719_65845[(2)] = inst_64699);


cljs.core.async.impl.ioc_helpers.process_exception(state_64715__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64716 === (4))){
var inst_64703 = (state_64715[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64715,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_64703__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_64704 = com.wsscode.common.async_cljs.chan_QMARK_(inst_64703__$1);
var state_64715__$1 = (function (){var statearr_64720 = state_64715;
(statearr_64720[(7)] = inst_64703__$1);

return statearr_64720;
})();
if(inst_64704){
var statearr_64721_65847 = state_64715__$1;
(statearr_64721_65847[(1)] = (5));

} else {
var statearr_64722_65848 = state_64715__$1;
(statearr_64722_65848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64716 === (5))){
var inst_64703 = (state_64715[(7)]);
var state_64715__$1 = state_64715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64715__$1,(8),inst_64703);
} else {
if((state_val_64716 === (6))){
var inst_64703 = (state_64715[(7)]);
var state_64715__$1 = state_64715;
var statearr_64723_65849 = state_64715__$1;
(statearr_64723_65849[(2)] = inst_64703);

(statearr_64723_65849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64716 === (7))){
var inst_64710 = (state_64715[(2)]);
var state_64715__$1 = state_64715;
var statearr_64724_65850 = state_64715__$1;
(statearr_64724_65850[(2)] = inst_64710);


cljs.core.async.impl.ioc_helpers.process_exception(state_64715__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64716 === (8))){
var inst_64707 = (state_64715[(2)]);
var state_64715__$1 = state_64715;
var statearr_64725_65852 = state_64715__$1;
(statearr_64725_65852[(2)] = inst_64707);

(statearr_64725_65852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__52131__auto___65841,ch__59712__auto__,temp__5733__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto___65841,ch__59712__auto__,temp__5733__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto____0 = (function (){
var statearr_64726 = [null,null,null,null,null,null,null,null];
(statearr_64726[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto__);

(statearr_64726[(1)] = (1));

return statearr_64726;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto____1 = (function (state_64715){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64715);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64727){if((e64727 instanceof Object)){
var ex__52039__auto__ = e64727;
var statearr_64728_65856 = state_64715;
(statearr_64728_65856[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64727;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65858 = state_64715;
state_64715 = G__65858;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto__ = function(state_64715){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto____1.call(this,state_64715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___65841,ch__59712__auto__,temp__5733__auto__))
})();
var state__52133__auto__ = (function (){var statearr_64729 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64729[(6)] = c__52131__auto___65841);

return statearr_64729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___65841,ch__59712__auto__,temp__5733__auto__))
);


return ch__59712__auto__;
}
});
com.wsscode.pathom.core.cached_async = (function com$wsscode$pathom$core$cached_async(p__64730,key,f){
var map__64731 = p__64730;
var map__64731__$1 = (((((!((map__64731 == null))))?(((((map__64731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64731):map__64731);
var env = map__64731__$1;
var async_request_cache_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64731__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64731__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(async_request_cache_ch)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
} else {
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(async_request_cache_ch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,key,f,out], null));

var ch__59712__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__52131__auto___65859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___65859,ch__59712__auto__,out,map__64731,map__64731__$1,env,async_request_cache_ch,request_cache){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___65859,ch__59712__auto__,out,map__64731,map__64731__$1,env,async_request_cache_ch,request_cache){
return (function (state_64749){
var state_val_64750 = (state_64749[(1)]);
if((state_val_64750 === (1))){
var state_64749__$1 = state_64749;
var statearr_64755_65865 = state_64749__$1;
(statearr_64755_65865[(2)] = null);

(statearr_64755_65865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64750 === (2))){
var inst_64746 = (state_64749[(2)]);
var inst_64747 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__59712__auto__,inst_64746);
var state_64749__$1 = state_64749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64749__$1,inst_64747);
} else {
if((state_val_64750 === (3))){
var inst_64735 = (state_64749[(2)]);
var state_64749__$1 = state_64749;
var statearr_64763_65872 = state_64749__$1;
(statearr_64763_65872[(2)] = inst_64735);


cljs.core.async.impl.ioc_helpers.process_exception(state_64749__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64750 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64749,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_64749__$1 = state_64749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64749__$1,(6),out);
} else {
if((state_val_64750 === (5))){
var inst_64744 = (state_64749[(2)]);
var state_64749__$1 = state_64749;
var statearr_64768_65873 = state_64749__$1;
(statearr_64768_65873[(2)] = inst_64744);


cljs.core.async.impl.ioc_helpers.process_exception(state_64749__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64750 === (6))){
var inst_64742 = (state_64749[(2)]);
var state_64749__$1 = state_64749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64749__$1,(5),inst_64742);
} else {
return null;
}
}
}
}
}
}
});})(c__52131__auto___65859,ch__59712__auto__,out,map__64731,map__64731__$1,env,async_request_cache_ch,request_cache))
;
return ((function (switch__52035__auto__,c__52131__auto___65859,ch__59712__auto__,out,map__64731,map__64731__$1,env,async_request_cache_ch,request_cache){
return (function() {
var com$wsscode$pathom$core$cached_async_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$cached_async_$_state_machine__52036__auto____0 = (function (){
var statearr_64769 = [null,null,null,null,null,null,null];
(statearr_64769[(0)] = com$wsscode$pathom$core$cached_async_$_state_machine__52036__auto__);

(statearr_64769[(1)] = (1));

return statearr_64769;
});
var com$wsscode$pathom$core$cached_async_$_state_machine__52036__auto____1 = (function (state_64749){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64749);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64770){if((e64770 instanceof Object)){
var ex__52039__auto__ = e64770;
var statearr_64771_65876 = state_64749;
(statearr_64771_65876[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65877 = state_64749;
state_64749 = G__65877;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_$_state_machine__52036__auto__ = function(state_64749){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_$_state_machine__52036__auto____1.call(this,state_64749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_$_state_machine__52036__auto____0;
com$wsscode$pathom$core$cached_async_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$cached_async_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___65859,ch__59712__auto__,out,map__64731,map__64731__$1,env,async_request_cache_ch,request_cache))
})();
var state__52133__auto__ = (function (){var statearr_64772 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64772[(6)] = c__52131__auto___65859);

return statearr_64772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___65859,ch__59712__auto__,out,map__64731,map__64731__$1,env,async_request_cache_ch,request_cache))
);


return ch__59712__auto__;
}
} else {
return com.wsscode.pathom.core.cached_async_STAR_(env,key,f);
}
});
com.wsscode.pathom.core.request_cache_async_loop = (function com$wsscode$pathom$core$request_cache_async_loop(ch){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__){
return (function (state_64794){
var state_val_64795 = (state_64794[(1)]);
if((state_val_64795 === (1))){
var state_64794__$1 = state_64794;
var statearr_64796_65885 = state_64794__$1;
(statearr_64796_65885[(2)] = null);

(statearr_64796_65885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64795 === (2))){
var state_64794__$1 = state_64794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64794__$1,(4),ch);
} else {
if((state_val_64795 === (3))){
var inst_64792 = (state_64794[(2)]);
var state_64794__$1 = state_64794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64794__$1,inst_64792);
} else {
if((state_val_64795 === (4))){
var inst_64775 = (state_64794[(7)]);
var inst_64775__$1 = (state_64794[(2)]);
var state_64794__$1 = (function (){var statearr_64797 = state_64794;
(statearr_64797[(7)] = inst_64775__$1);

return statearr_64797;
})();
if(cljs.core.truth_(inst_64775__$1)){
var statearr_64798_65886 = state_64794__$1;
(statearr_64798_65886[(1)] = (5));

} else {
var statearr_64799_65887 = state_64794__$1;
(statearr_64799_65887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64795 === (5))){
var inst_64775 = (state_64794[(7)]);
var inst_64780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64775,(0),null);
var inst_64781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64775,(1),null);
var inst_64782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64775,(2),null);
var inst_64783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64775,(3),null);
var inst_64784 = com.wsscode.pathom.core.cached_async_STAR_(inst_64780,inst_64781,inst_64782);
var state_64794__$1 = state_64794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64794__$1,(8),inst_64783,inst_64784);
} else {
if((state_val_64795 === (6))){
var state_64794__$1 = state_64794;
var statearr_64800_65888 = state_64794__$1;
(statearr_64800_65888[(2)] = null);

(statearr_64800_65888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64795 === (7))){
var inst_64790 = (state_64794[(2)]);
var state_64794__$1 = state_64794;
var statearr_64801_65889 = state_64794__$1;
(statearr_64801_65889[(2)] = inst_64790);

(statearr_64801_65889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64795 === (8))){
var inst_64786 = (state_64794[(2)]);
var state_64794__$1 = (function (){var statearr_64802 = state_64794;
(statearr_64802[(8)] = inst_64786);

return statearr_64802;
})();
var statearr_64803_65893 = state_64794__$1;
(statearr_64803_65893[(2)] = null);

(statearr_64803_65893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__52131__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto__){
return (function() {
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__52036__auto____0 = (function (){
var statearr_64804 = [null,null,null,null,null,null,null,null,null];
(statearr_64804[(0)] = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__52036__auto__);

(statearr_64804[(1)] = (1));

return statearr_64804;
});
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__52036__auto____1 = (function (state_64794){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64794);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64805){if((e64805 instanceof Object)){
var ex__52039__auto__ = e64805;
var statearr_64806_65898 = state_64794;
(statearr_64806_65898[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64805;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65901 = state_64794;
state_64794 = G__65901;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__52036__auto__ = function(state_64794){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__52036__auto____1.call(this,state_64794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__52036__auto____0;
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__))
})();
var state__52133__auto__ = (function (){var statearr_64807 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64807[(6)] = c__52131__auto__);

return statearr_64807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__))
);

return c__52131__auto__;
});
com.wsscode.pathom.core.cache_hit = (function com$wsscode$pathom$core$cache_hit(p__64808,key,value){
var map__64809 = p__64808;
var map__64809__$1 = (((((!((map__64809 == null))))?(((((map__64809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64809):map__64809);
var env = map__64809__$1;
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64809__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(request_cache,cljs.core.assoc,key,value);

return value;
});
com.wsscode.pathom.core.cache_contains_QMARK_ = (function com$wsscode$pathom$core$cache_contains_QMARK_(p__64811,key){
var map__64812 = p__64811;
var map__64812__$1 = (((((!((map__64812 == null))))?(((((map__64812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64812):map__64812);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64812__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.cache_read = (function com$wsscode$pathom$core$cache_read(p__64814,key){
var map__64815 = p__64814;
var map__64815__$1 = (((((!((map__64815 == null))))?(((((map__64815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64815):map__64815);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64815__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.wrap_add_path = (function com$wsscode$pathom$core$wrap_add_path(reader){
return (function (p__64817){
var map__64818 = p__64817;
var map__64818__$1 = (((((!((map__64818 == null))))?(((((map__64818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64818):map__64818);
var env = map__64818__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64818__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__64820 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(G__64820) : reader.call(null,G__64820));
});
});
com.wsscode.pathom.core.group_plugins_by_action = (function com$wsscode$pathom$core$group_plugins_by_action(plugins){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,p){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$1,p__64821){
var vec__64822 = p__64821;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64822,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(g__$1,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
}),g,p);
}),cljs.core.PersistentArrayMap.EMPTY,plugins);
});
com.wsscode.pathom.core.wrap_normalize_env = (function com$wsscode$pathom$core$wrap_normalize_env(var_args){
var G__64826 = arguments.length;
switch (G__64826) {
case 1:
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$1 = (function (parser){
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.PersistentVector.EMPTY);
});

com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2 = (function (parser,plugins){
return (function() {
var com$wsscode$pathom$core$wrap_normalize_env_internal = null;
var com$wsscode$pathom$core$wrap_normalize_env_internal__2 = (function (env,tx){
return com$wsscode$pathom$core$wrap_normalize_env_internal.cljs$core$IFn$_invoke$arity$3(env,tx,null);
});
var com$wsscode$pathom$core$wrap_normalize_env_internal__3 = (function (env,tx,target){
var G__64827 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx], null),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","plugin-actions","com.wsscode.pathom.core/plugin-actions",-876552970),com.wsscode.pathom.core.group_plugins_by_action(plugins),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),plugins,new cljs.core.Keyword(null,"target","target",253001721),target], null)], 0));
var G__64828 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__64827,G__64828) : parser.call(null,G__64827,G__64828));
});
com$wsscode$pathom$core$wrap_normalize_env_internal = function(env,tx,target){
switch(arguments.length){
case 2:
return com$wsscode$pathom$core$wrap_normalize_env_internal__2.call(this,env,tx);
case 3:
return com$wsscode$pathom$core$wrap_normalize_env_internal__3.call(this,env,tx,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_normalize_env_internal.cljs$core$IFn$_invoke$arity$2 = com$wsscode$pathom$core$wrap_normalize_env_internal__2;
com$wsscode$pathom$core$wrap_normalize_env_internal.cljs$core$IFn$_invoke$arity$3 = com$wsscode$pathom$core$wrap_normalize_env_internal__3;
return com$wsscode$pathom$core$wrap_normalize_env_internal;
})()
});

com.wsscode.pathom.core.wrap_normalize_env.cljs$lang$maxFixedArity = 2;

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
com.wsscode.pathom.core.wrap_setup_async_cache = (function com$wsscode$pathom$core$wrap_setup_async_cache(parser){
return (function com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal(env,tx){
var async_cache_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),(1024)));
com.wsscode.pathom.core.request_cache_async_loop(async_cache_ch);

var res__59683__auto__ = (function (){var G__64829 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369),async_cache_ch);
var G__64830 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__64829,G__64830) : parser.call(null,G__64829,G__64830));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__,async_cache_ch){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__,async_cache_ch){
return (function (state_64842){
var state_val_64843 = (state_64842[(1)]);
if((state_val_64843 === (1))){
var state_64842__$1 = state_64842;
var statearr_64844_65950 = state_64842__$1;
(statearr_64844_65950[(2)] = null);

(statearr_64844_65950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64843 === (2))){
var inst_64840 = (state_64842[(2)]);
var state_64842__$1 = state_64842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64842__$1,inst_64840);
} else {
if((state_val_64843 === (3))){
var inst_64831 = (state_64842[(2)]);
var state_64842__$1 = state_64842;
var statearr_64845_65951 = state_64842__$1;
(statearr_64845_65951[(2)] = inst_64831);


cljs.core.async.impl.ioc_helpers.process_exception(state_64842__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64843 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64842,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_64842__$1 = state_64842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64842__$1,(5),res__59683__auto__);
} else {
if((state_val_64843 === (5))){
var inst_64836 = (state_64842[(2)]);
var inst_64837 = com.wsscode.common.async_cljs.throw_err(inst_64836);
var inst_64838 = cljs.core.async.close_BANG_(async_cache_ch);
var state_64842__$1 = (function (){var statearr_64846 = state_64842;
(statearr_64846[(7)] = inst_64838);

return statearr_64846;
})();
var statearr_64847_65957 = state_64842__$1;
(statearr_64847_65957[(2)] = inst_64837);


cljs.core.async.impl.ioc_helpers.process_exception(state_64842__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__52131__auto__,res__59683__auto__,async_cache_ch))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59683__auto__,async_cache_ch){
return (function() {
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__52036__auto____0 = (function (){
var statearr_64848 = [null,null,null,null,null,null,null,null];
(statearr_64848[(0)] = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__52036__auto__);

(statearr_64848[(1)] = (1));

return statearr_64848;
});
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__52036__auto____1 = (function (state_64842){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_64842);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e64849){if((e64849 instanceof Object)){
var ex__52039__auto__ = e64849;
var statearr_64850_65962 = state_64842;
(statearr_64850_65962[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65964 = state_64842;
state_64842 = G__65964;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__52036__auto__ = function(state_64842){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__52036__auto____1.call(this,state_64842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__52036__auto____0;
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__52036__auto____1;
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__,async_cache_ch))
})();
var state__52133__auto__ = (function (){var statearr_64851 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_64851[(6)] = c__52131__auto__);

return statearr_64851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__,async_cache_ch))
);

return c__52131__auto__;
} else {
var res = res__59683__auto__;
cljs.core.async.close_BANG_(async_cache_ch);

return res;
}
});
});
com.wsscode.pathom.core.wrap_reduce_params = (function com$wsscode$pathom$core$wrap_reduce_params(reader){
return (function() {
var G__65968 = null;
var G__65968__1 = (function (env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
var G__65968__3 = (function (env,_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
G__65968 = function(env,_,___$1){
switch(arguments.length){
case 1:
return G__65968__1.call(this,env);
case 3:
return G__65968__3.call(this,env,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65968.cljs$core$IFn$_invoke$arity$1 = G__65968__1;
G__65968.cljs$core$IFn$_invoke$arity$3 = G__65968__3;
return G__65968;
})()
});
com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_ = (function com$wsscode$pathom$core$pathom_read_SINGLEQUOTE_(p__64852){
var map__64853 = p__64852;
var map__64853__$1 = (((((!((map__64853 == null))))?(((((map__64853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64853):map__64853);
var env = map__64853__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64853__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
return com.wsscode.pathom.core.read_from(env,reader);
});
com.wsscode.pathom.core.apply_plugins = (function com$wsscode$pathom$core$apply_plugins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65973 = arguments.length;
var i__4731__auto___65974 = (0);
while(true){
if((i__4731__auto___65974 < len__4730__auto___65973)){
args__4736__auto__.push((arguments[i__4731__auto___65974]));

var G__65975 = (i__4731__auto___65974 + (1));
i__4731__auto___65974 = G__65975;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic = (function (v,plugins,key,params){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (x,plugin){
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,key);
if(cljs.core.truth_(f)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,params);
} else {
return x;
}
}),v,plugins);
});

com.wsscode.pathom.core.apply_plugins.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.wsscode.pathom.core.apply_plugins.cljs$lang$applyTo = (function (seq64855){
var G__64856 = cljs.core.first(seq64855);
var seq64855__$1 = cljs.core.next(seq64855);
var G__64857 = cljs.core.first(seq64855__$1);
var seq64855__$2 = cljs.core.next(seq64855__$1);
var G__64858 = cljs.core.first(seq64855__$2);
var seq64855__$3 = cljs.core.next(seq64855__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64856,G__64857,G__64858,seq64855__$3);
});

com.wsscode.pathom.core.exec_plugin_actions = (function com$wsscode$pathom$core$exec_plugin_actions(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65984 = arguments.length;
var i__4731__auto___65985 = (0);
while(true){
if((i__4731__auto___65985 < len__4730__auto___65984)){
args__4736__auto__.push((arguments[i__4731__auto___65985]));

var G__65986 = (i__4731__auto___65985 + (1));
i__4731__auto___65985 = G__65986;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic = (function (env,key,v,args){
var plugins = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","plugin-actions","com.wsscode.pathom.core/plugin-actions",-876552970),key], null),cljs.core.PersistentVector.EMPTY);
var augmented_v = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (plugins){
return (function (x,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
});})(plugins))
,v,plugins);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(augmented_v,args);
});

com.wsscode.pathom.core.exec_plugin_actions.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.wsscode.pathom.core.exec_plugin_actions.cljs$lang$applyTo = (function (seq64859){
var G__64860 = cljs.core.first(seq64859);
var seq64859__$1 = cljs.core.next(seq64859);
var G__64861 = cljs.core.first(seq64859__$1);
var seq64859__$2 = cljs.core.next(seq64859__$1);
var G__64862 = cljs.core.first(seq64859__$2);
var seq64859__$3 = cljs.core.next(seq64859__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64860,G__64861,G__64862,seq64859__$3);
});

com.wsscode.pathom.core.easy_plugins = (function com$wsscode$pathom$core$easy_plugins(p__64869){
var map__64870 = p__64869;
var map__64870__$1 = (((((!((map__64870 == null))))?(((((map__64870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64870):map__64870);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64870__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64870__$1,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var G__64873 = plugins;
var G__64873__$1 = ((cljs.core.fn_QMARK_(env))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_wrap_plugin(env)], null),G__64873):G__64873);
if(cljs.core.map_QMARK_(env)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(env)], null),G__64873__$1);
} else {
return G__64873__$1;
}
});
com.wsscode.pathom.core.settings_mutation = (function com$wsscode$pathom$core$settings_mutation(settings){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173).cljs$core$IFn$_invoke$arity$1(settings);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"mutate","mutate",1422419038).cljs$core$IFn$_invoke$arity$1(settings);
}
});
/**
 * Create a new pathom serial parser, this parser is capable of waiting for core.async
 *   to continue processing, allowing async operations to happen during the parsing.
 * 
 *   Options to tune the parser:
 * 
 *   ::p/env - Use this key to provide a default environment for the parser. This is a sugar
 *   to use the p/env-plugin.
 * 
 *   ::p/mutate - A mutate function that will be called to run mutations, this function
 *   must have the signature: (mutate env key params)
 * 
 *   ::p/plugins - A vector with plugins.
 */
com.wsscode.pathom.core.parser = (function com$wsscode$pathom$core$parser(settings){
var plugins = com.wsscode.pathom.core.easy_plugins(settings);
var mutate = com.wsscode.pathom.core.settings_mutation(settings);
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.parser.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261))),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202)):null)], null)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0)),plugins);
});
/**
 * Create a new pathom async parser, this parser is serial and capable of waiting for core.async
 *   to continue processing, allowing async operations to happen during the parsing.
 * 
 *   Options to tune the parser:
 * 
 *   ::p/env - Use this key to provide a default environment for the parser. This is a sugar
 *   to use the p/env-plugin.
 * 
 *   ::p/mutate - A mutate function that will be called to run mutations, this function
 *   must have the signature: (mutate env key params)
 * 
 *   ::p/plugins - A vector with plugins.
 */
com.wsscode.pathom.core.async_parser = (function com$wsscode$pathom$core$async_parser(settings){
var plugins = com.wsscode.pathom.core.easy_plugins(settings);
var mutate = com.wsscode.pathom.core.settings_mutation(settings);
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.wrap_setup_async_cache(com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.parser.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261))),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202)):null)], null)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0))),plugins);
});
/**
 * Creaate a new pathom parallel parser, this parser is capable of coordinating parallel
 *   data fetch. This also works as an async parser and will handle core async channels
 *   properly.
 * 
 *   Options to tune the parser:
 * 
 *   ::p/env - Use this key to provide a default environment for the parser. This is a sugar
 *   to use the p/env-plugin.
 * 
 *   ::p/mutate - A mutate function that will be called to run mutations, this function
 *   must have the signature: (mutate env key params)
 * 
 *   ::p/plugins - A vector with plugins.
 * 
 *   ::pc/async-request-cache-ch-size - Pathom uses internally a queue to avoid concurrency
 *   issues with concurrency, each request gets its own channel, so you can consider this
 *   size needs to accomodate the max parallelism for a single query. Default: 1024
 * 
 *   ::pt/max-key-iterations - there is a loop that happens when processing attributes in
 *   parallel, this loop will cause multiple iterations to happen in order for a single
 *   atribute to be processed, but in some conditions this loop can go indefinely, to
 *   prevent this situation this option allows to control the max number of iterations, after
 *   that it will give up on processing that attribute. Default: 10
 * 
 *   ::pt/key-process-timeout - Max time allowed to run the full query. This is a cascading
 *   timeout, the first level will have the total amount
 */
com.wsscode.pathom.core.parallel_parser = (function com$wsscode$pathom$core$parallel_parser(settings){
var plugins = com.wsscode.pathom.core.easy_plugins(settings);
var mutate = com.wsscode.pathom.core.settings_mutation(settings);
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.wrap_setup_async_cache(com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.parser.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261))),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202)):null),new cljs.core.Keyword(null,"add-error","add-error",-1195330235),com.wsscode.pathom.core.add_error], null)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0))),plugins);
});
/**
 * Starting from a map, do a EQL selection on that map. Think of this function as
 *   a power up version of select-keys, but supporting nested selections and placeholders
 *   using the default `>` namespace.
 * 
 *   Example:
 *   (p/map-select {:foo "bar" :deep {:a 1 :b 2}} [{:deep [:a]}])
 *   => {:deep {:a 1}}
 */
com.wsscode.pathom.core.map_select = (function (){var parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.elide_special_outputs_plugin], null)], null));
return ((function (parser){
return (function (map,selection){
var G__64886 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),map], null);
var G__64887 = selection;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__64886,G__64887) : parser.call(null,G__64886,G__64887));
});
;})(parser))
})();
com.wsscode.pathom.core.continue$ = com.wsscode.pathom.core.join;
com.wsscode.pathom.core.continue_seq = com.wsscode.pathom.core.join_seq;
/**
 * DEPRECATED: use env-placeholder-reader instead.
 * 
 *   Produces a reader that will respond to any keyword with the namespace ns. The join node logical level stays the same
 *   as the parent where the placeholder node is requested.
 */
com.wsscode.pathom.core.placeholder_reader = (function com$wsscode$pathom$core$placeholder_reader(var_args){
var G__64892 = arguments.length;
switch (G__64892) {
case 0:
return com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$1(">");
});

com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return (function (p__64895){
var map__64897 = p__64895;
var map__64897__$1 = (((((!((map__64897 == null))))?(((((map__64897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64897):map__64897);
var env = map__64897__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64897__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast)))){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
});

com.wsscode.pathom.core.placeholder_reader.cljs$lang$maxFixedArity = 1;

com.wsscode.pathom.core.placeholder_node = com.wsscode.pathom.core.placeholder_reader;
/**
 * DEPRECATED: use p/parser to create your parser
 */
com.wsscode.pathom.core.pathom_read = (function com$wsscode$pathom$core$pathom_read(p__64901,_,___$1){
var map__64902 = p__64901;
var map__64902__$1 = (((((!((map__64902 == null))))?(((((map__64902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64902):map__64902);
var env = map__64902__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64902__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64902__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
return com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
})()], null);
});
/**
 * DEPRECATED: use ident-value instead
 */
com.wsscode.pathom.core.ast_key_id = (function com$wsscode$pathom$core$ast_key_id(ast){
var key = (function (){var G__64908 = ast;
if((G__64908 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__64908);
}
})();
if(cljs.core.sequential_QMARK_(key)){
return cljs.core.second(key);
} else {
return null;
}
});
com.wsscode.pathom.core.ensure_attrs = (function com$wsscode$pathom$core$ensure_attrs(env,attributes){

return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
});

//# sourceMappingURL=com.wsscode.pathom.core.js.map
