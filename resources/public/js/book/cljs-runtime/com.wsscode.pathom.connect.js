goog.provide('com.wsscode.pathom.connect');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.parser');
goog.require('com.wsscode.pathom.trace');
goog.require('com.wsscode.common.combinatorics');
goog.require('com.wsscode.common.async_cljs');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('edn_query_language.core');
com.wsscode.pathom.connect.atom_with = (function com$wsscode$pathom$connect$atom_with(spec){
return cljs.spec.alpha.with_gen(com.wsscode.pathom.core.atom_QMARK_,(function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.atom,cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(spec)], 0));
}));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.symbol_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65055){
return cljs.core.set_QMARK_(G__65055);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"set","set",304602554)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65062){
return cljs.core.set_QMARK_(G__65062);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65064){
return cljs.core.map_QMARK_(G__65064);
})], null),(function (G__65064){
return cljs.core.map_QMARK_(G__65064);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation","com.wsscode.pathom.connect/mutation",-1953746968),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65073){
return cljs.core.map_QMARK_(G__65073);
})], null),(function (G__65073){
return cljs.core.map_QMARK_(G__65073);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65078){
return cljs.core.map_QMARK_(G__65078);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),new cljs.core.Keyword(null,"union","union",2142937499),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),new cljs.core.Keyword(null,"union","union",2142937499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65081){
return ((cljs.core.vector_QMARK_(G__65081)) && (((((function (){var or__4131__auto__ = (1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__65081))) && ((cljs.core.bounded_count((1)
,G__65081) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65090){
return cljs.core.map_QMARK_(G__65090);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65096){
return cljs.core.map_QMARK_(G__65096);
}),(function (G__65096){
return cljs.core.contains_QMARK_(G__65096,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__65096){
return ((cljs.core.map_QMARK_(G__65096)) && (cljs.core.contains_QMARK_(G__65096,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.connect","atom-with","com.wsscode.pathom.connect/atom-with",1449744364,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))),com.wsscode.pathom.connect.atom_with(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"number?","number?",-1747282210,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.number_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65107){
return cljs.core.map_QMARK_(G__65107);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))], null),null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65109){
return cljs.core.map_QMARK_(G__65109);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65112){
return cljs.core.map_QMARK_(G__65112);
}),(function (G__65112){
return cljs.core.contains_QMARK_(G__65112,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__65112){
return ((cljs.core.map_QMARK_(G__65112)) && (cljs.core.contains_QMARK_(G__65112,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutations","com.wsscode.pathom.connect/mutations",1762289215),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65127){
return cljs.core.map_QMARK_(G__65127);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65128){
return cljs.core.map_QMARK_(G__65128);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65131){
return cljs.core.map_QMARK_(G__65131);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"set?","set?",1636014792,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65135){
return cljs.core.set_QMARK_(G__65135);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65134){
return cljs.core.map_QMARK_(G__65134);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65140){
return cljs.core.map_QMARK_(G__65140);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65144){
return cljs.core.map_QMARK_(G__65144);
})], null),(function (G__65144){
return cljs.core.map_QMARK_(G__65144);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","tuple","s/tuple",1167863840,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65149){
return cljs.core.set_QMARK_(G__65149);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65150){
return cljs.core.coll_QMARK_(G__65150);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword(null,"deep","deep",2090866875),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65156){
return cljs.core.map_QMARK_(G__65156);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"deep","deep",2090866875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65159){
return ((cljs.core.vector_QMARK_(G__65159)) && (((((function (){var or__4131__auto__ = (2);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((2)
,G__65159))) && ((cljs.core.bounded_count((2)
,G__65159) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65162){
return cljs.core.map_QMARK_(G__65162);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65165){
return cljs.core.set_QMARK_(G__65165);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65166){
return cljs.core.map_QMARK_(G__65166);
})], null),(function (G__65166){
return cljs.core.map_QMARK_(G__65166);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"multi","multi",-190293005)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentHashSet.EMPTY]),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65169){
return cljs.core.map_QMARK_(G__65169);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65170){
return cljs.core.map_QMARK_(G__65170);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14366__auto__,v__14367__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14367__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65175){
return cljs.core.map_QMARK_(G__65175);
}),(function (G__65175){
return cljs.core.contains_QMARK_(G__65175,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
}),(function (G__65175){
return cljs.core.contains_QMARK_(G__65175,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
})], null),(function (G__65175){
return ((cljs.core.map_QMARK_(G__65175)) && (cljs.core.contains_QMARK_(G__65175,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))) && (cljs.core.contains_QMARK_(G__65175,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)))], null),null]))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65182){
return cljs.core.map_QMARK_(G__65182);
}),(function (G__65182){
return cljs.core.contains_QMARK_(G__65182,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
})], null),(function (G__65182){
return ((cljs.core.map_QMARK_(G__65182)) && (cljs.core.contains_QMARK_(G__65182,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)))], null),null]))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword(null,"mutation","mutation",-285823378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),new cljs.core.Keyword(null,"operations","operations",1630691895),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"operations","operations",1630691895)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65194){
return cljs.core.coll_QMARK_(G__65194);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65195){
return cljs.core.coll_QMARK_(G__65195);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65198){
return cljs.core.coll_QMARK_(G__65198);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolver","resolver",-1740553583)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),null,null,null));
/**
 * Get resolver map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.resolver_data = (function com$wsscode$pathom$connect$resolver_data(env_or_indexes,sym){
var idx = (function (){var G__65201 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__65201);
} else {
return G__65201;
}
})();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),sym], null));
});
/**
 * Get mutation map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.mutation_data = (function com$wsscode$pathom$connect$mutation_data(env_or_indexes,sym){
var idx = (function (){var G__65202 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__65202);
} else {
return G__65202;
}
})();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
});
com.wsscode.pathom.connect.flat_query = (function com$wsscode$pathom$connect$flat_query(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.connect.flat_query,cljs.core.vals(query)));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.merge_io_attrs = (function com$wsscode$pathom$connect$merge_io_attrs(a,b){
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.connect.merge_io_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if(cljs.core.map_QMARK_(a)){
return a;
} else {
if(cljs.core.map_QMARK_(b)){
return b;
} else {
return b;

}
}
}
});
com.wsscode.pathom.connect.normalize_io = (function com$wsscode$pathom$connect$normalize_io(output){
if(cljs.core.map_QMARK_(output)){
var unions = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__65204){
var vec__65205 = p__65204;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65205,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65205,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.normalize_io.call(null,v))], null);
})),output);
var merged = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.connect.merge_io_attrs,cljs.core.vals(unions));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(merged,new cljs.core.Keyword("com.wsscode.pathom.connect","unions","com.wsscode.pathom.connect/unions",-2088386406),unions);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
if(cljs.core.map_QMARK_(x)){
var vec__65208 = cljs.core.first(x);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65208,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65208,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.normalize_io.call(null,v))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.PersistentArrayMap.EMPTY], null);
}
})),output);
}
});
/**
 * Merge ::index-io maps.
 */
com.wsscode.pathom.connect.merge_io = (function com$wsscode$pathom$connect$merge_io(a,b){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.connect.merge_io_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
/**
 * Merge ::index-oir maps.
 */
com.wsscode.pathom.connect.merge_oir = (function com$wsscode$pathom$connect$merge_oir(a,b){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (p1__65212_SHARP_,p2__65213_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__65212_SHARP_,p2__65213_SHARP_], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
com.wsscode.pathom.connect.merge_grow = (function com$wsscode$pathom$connect$merge_grow(a,b){
if(((cljs.core.set_QMARK_(a)) && (cljs.core.set_QMARK_(b)))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.connect.merge_grow,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if((b == null)){
return a;
} else {
return b;

}
}
}
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.connect !== 'undefined') && (typeof com.wsscode.pathom.connect.index_merger !== 'undefined')){
} else {
/**
 * This is an extensible gateway so you can define different strategies for merging different
 *   kinds of indexes.
 */
com.wsscode.pathom.connect.index_merger = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65219 = cljs.core.get_global_hierarchy;
return (fexpr__65219.cljs$core$IFn$_invoke$arity$0 ? fexpr__65219.cljs$core$IFn$_invoke$arity$0() : fexpr__65219.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.connect","index-merger"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (k,_,___$1){
return k;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),(function (_,ia,ib){
return com.wsscode.pathom.connect.merge_io(ia,ib);
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),(function (_,ia,ib){
return com.wsscode.pathom.connect.merge_oir(ia,ib);
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (_,a,b){
return com.wsscode.pathom.connect.merge_grow(a,b);
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,a,b){
return com.wsscode.pathom.connect.merge_grow(a,b);
}));
com.wsscode.pathom.connect.merge_indexes = (function com$wsscode$pathom$connect$merge_indexes(ia,ib){
return cljs.core.reduce_kv((function (idx,k,v){
if(cljs.core.contains_QMARK_(idx,k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(idx,k,(function (p1__65227_SHARP_){
return (com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3(k,p1__65227_SHARP_,v) : com.wsscode.pathom.connect.index_merger.call(null,k,p1__65227_SHARP_,v));
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx,k,v);
}
}),ia,ib);
});
com.wsscode.pathom.connect.output_provides_STAR_ = (function com$wsscode$pathom$connect$output_provides_STAR_(p__65233){
var map__65234 = p__65233;
var map__65234__$1 = (((((!((map__65234 == null))))?(((((map__65234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65234):map__65234);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65234__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65234__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__$1 = (cljs.core.truth_((function (){var G__65236 = children;
var G__65236__$1 = (((G__65236 == null))?null:cljs.core.first(G__65236));
var G__65236__$2 = (((G__65236__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__65236__$1));
if((G__65236__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__65236__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0)):children);
var G__65237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
if(cljs.core.seq(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__65237,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__65237,children__$1,map__65234,map__65234__$1,key,children){
return (function (x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__65237,children__$1,map__65234,map__65234__$1,key,children){
return (function (p1__65231_SHARP_){
return cljs.core.vec(cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[key,p1__65231_SHARP_],null))));
});})(G__65237,children__$1,map__65234,map__65234__$1,key,children))
,x);
});})(G__65237,children__$1,map__65234,map__65234__$1,key,children))
,((function (G__65237,children__$1,map__65234,map__65234__$1,key,children){
return (function (p1__65232_SHARP_){
return (com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1(p1__65232_SHARP_) : com.wsscode.pathom.connect.output_provides_STAR_.call(null,p1__65232_SHARP_));
});})(G__65237,children__$1,map__65234,map__65234__$1,key,children))
)),children__$1);
} else {
return G__65237;
}
});
com.wsscode.pathom.connect.output_provides = (function com$wsscode$pathom$connect$output_provides(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides),cljs.core.vals(query));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides_STAR_),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.normalized_children = (function com$wsscode$pathom$connect$normalized_children(p__65241){
var map__65243 = p__65241;
var map__65243__$1 = (((((!((map__65243 == null))))?(((((map__65243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65243):map__65243);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65243__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var G__65245 = children;
var G__65245__$1 = (((G__65245 == null))?null:cljs.core.first(G__65245));
var G__65245__$2 = (((G__65245__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__65245__$1));
if((G__65245__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__65245__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0));
} else {
return children;
}
});
com.wsscode.pathom.connect.index_attributes = (function com$wsscode$pathom$connect$index_attributes(p__65249){
var map__65251 = p__65249;
var map__65251__$1 = (((((!((map__65251 == null))))?(((((map__65251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65251):map__65251);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65251__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65251__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65251__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var provides = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__65251,map__65251__$1,sym,input,output){
return (function (p1__65247_SHARP_){
return cljs.core.contains_QMARK_(input,p1__65247_SHARP_);
});})(map__65251,map__65251__$1,sym,input,output))
,com.wsscode.pathom.connect.output_provides(output));
var sym_group = cljs.core.PersistentHashSet.createAsIfByAssoc([sym]);
var attr_provides = cljs.core.zipmap(provides,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sym_group));
var input_count = cljs.core.count(input);
var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,provides,sym_group,attr_provides,input_count,map__65251,map__65251__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),attr_provides,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,provides,sym_group,attr_provides,input_count,map__65251,map__65251__$1,sym,input,output))
,_LT__GT_,(function (){var G__65256 = input_count;
switch (G__65256) {
case (0):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY], null);

break;
case (1):
return input;

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);

}
})());
var _LT__GT___$2 = (((input_count > (1)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__65251,map__65251__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.PersistentHashSet.createAsIfByAssoc([input]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__65251,map__65251__$1,sym,input,output))
,_LT__GT___$1,input):_LT__GT___$1);
var _LT__GT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__65251,map__65251__$1,sym,input,output){
return (function (idx,out_attr){
if(cljs.core.vector_QMARK_(out_attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,cljs.core.peek(out_attr),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.peek(out_attr),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null),cljs.core.pop(out_attr)),sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,out_attr,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),out_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([input,sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__65251,map__65251__$1,sym,input,output))
,_LT__GT___$2,provides);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__65251,map__65251__$1,sym,input,output){
return (function (idx,p__65261){
var map__65262 = p__65261;
var map__65262__$1 = (((((!((map__65262 == null))))?(((((map__65262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65262):map__65262);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65262__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__65264 = idx;
if(cljs.core.truth_(key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__65264,key,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(children)?new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732):new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711)),sym_group]));
} else {
return G__65264;
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__65251,map__65251__$1,sym,input,output))
,_LT__GT___$3,((cljs.core.map_QMARK_(output))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__65251,map__65251__$1,sym,input,output){
return (function (p1__65248_SHARP_){
return cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom.connect.normalized_children,edn_query_language.core.query__GT_ast(p1__65248_SHARP_));
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__65251,map__65251__$1,sym,input,output))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(output)], 0)):cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982),edn_query_language.core.query__GT_ast(output))));
});
/**
 * Low level function to add resolvers to the index. This function adds the resolver
 *   configuration to the index set, adds the resolver to the ::pc/index-resolvers, add
 *   the output to input index in the ::pc/index-oir and the reverse index for auto-complete
 *   to the index ::pc/index-io.
 * 
 *   This is a low level function, for adding to your index prefer using `pc/register`.
 */
com.wsscode.pathom.connect.add = (function com$wsscode$pathom$connect$add(var_args){
var G__65270 = arguments.length;
switch (G__65270) {
case 2:
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$2 = (function (indexes,sym){
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3(indexes,sym,cljs.core.PersistentArrayMap.EMPTY);
});

com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3 = (function (indexes,sym,sym_data){
var map__65271 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.EMPTY], null),sym_data], 0));
var map__65271__$1 = (((((!((map__65271 == null))))?(((((map__65271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65271):map__65271);
var sym_data__$1 = map__65271__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65271__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65271__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var input_SINGLEQUOTE_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input))) && (cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentHashSet.EMPTY], null)),cljs.core.first(input)))))?cljs.core.PersistentHashSet.EMPTY:input);
return com.wsscode.pathom.connect.merge_indexes(indexes,(function (){var G__65273 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,sym_data__$1]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),com.wsscode.pathom.connect.index_attributes(sym_data__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentArrayMap.createAsIfByAssoc([input_SINGLEQUOTE_,com.wsscode.pathom.connect.normalize_io(output)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (input_SINGLEQUOTE_,map__65271,map__65271__$1,sym_data__$1,input,output){
return (function (indexes__$1,out_attr){
var G__65274 = indexes__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([out_attr]),input)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__65274,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_attr,input], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),sym);
} else {
return G__65274;
}
});})(input_SINGLEQUOTE_,map__65271,map__65271__$1,sym_data__$1,input,output))
,cljs.core.PersistentArrayMap.EMPTY,com.wsscode.pathom.connect.flat_query(output))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65273,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(input_SINGLEQUOTE_)]));
} else {
return G__65273;
}
})());
});

com.wsscode.pathom.connect.add.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","add","com.wsscode.pathom.connect/add",-52020600,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65279){
return cljs.core.map_QMARK_(G__65279);
})], null),(function (G__65279){
return cljs.core.map_QMARK_(G__65279);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null,null));
com.wsscode.pathom.connect.add_mutation = (function com$wsscode$pathom$connect$add_mutation(indexes,sym,p__65286){
var map__65288 = p__65286;
var map__65288__$1 = (((((!((map__65288 == null))))?(((((map__65288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65288):map__65288);
var data = map__65288__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65288__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65288__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
return com.wsscode.pathom.connect.merge_indexes(indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (){var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,map__65288,map__65288__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,map__65288,map__65288__$1,data,params,output))
,_LT__GT_,(function (){var G__65291 = params;
var G__65291__$1 = (((G__65291 == null))?null:edn_query_language.core.query__GT_ast(G__65291));
if((G__65291__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__65291__$1);
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,map__65288,map__65288__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,_LT__GT___$1,map__65288,map__65288__$1,data,params,output))
,_LT__GT___$1,(function (){var G__65292 = output;
var G__65292__$1 = (((G__65292 == null))?null:edn_query_language.core.query__GT_ast(G__65292));
if((G__65292__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__65292__$1);
}
})());
})()], null));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","add-mutation","com.wsscode.pathom.connect/add-mutation",-1209253784,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65297){
return cljs.core.map_QMARK_(G__65297);
})], null),(function (G__65297){
return cljs.core.map_QMARK_(G__65297);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null,null));
/**
 * Updates the index by registering the given resolver or mutation (lets call it item),
 *   an item can be:
 * 
 *   1. a resolver map
 *   2. a mutation map
 *   3. a sequence with items
 * 
 *   The sequence version can have nested sequences, they will be recursively add.
 * 
 *   Examples of possible usages:
 * 
 *    (-> {} ; blank index
 *        (pc/register one-resolver) ; single resolver
 *        (pc/register one-mutation) ; single mutation
 *        (pc/register [one-resolver one-mutation]) ; sequence of resolvers/mutations
 *        (pc/register [[resolver1 resolver2] [resolver3 mutation]]) ; nested sequences
 *        (pc/register [[resolver1 resolver2] resolver-out [resolver3 mutation]]) ; all mixed
 *        )
 *   
 */
com.wsscode.pathom.connect.register = (function com$wsscode$pathom$connect$register(indexes,item_or_items){
if(cljs.core.sequential_QMARK_(item_or_items)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.register,indexes,item_or_items);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772).cljs$core$IFn$_invoke$arity$1(item_or_items))){
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3(indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(item_or_items),item_or_items);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112).cljs$core$IFn$_invoke$arity$1(item_or_items))){
return com.wsscode.pathom.connect.add_mutation(indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(item_or_items),item_or_items);
} else {
return null;
}
}
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",1254247877,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"register","register",1968522516)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
com.wsscode.pathom.connect.sort_resolvers = (function com$wsscode$pathom$connect$sort_resolvers(p__65316,resolvers,e){
var map__65317 = p__65316;
var map__65317__$1 = (((((!((map__65317 == null))))?(((((map__65317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65317):map__65317);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (map__65317,map__65317__$1,request_cache){
return (function (s){
if(cljs.core.truth_(request_cache)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e], null))){
return (0);
} else {
return (1);
}
} else {
return (1);
}
});})(map__65317,map__65317__$1,request_cache))
,resolvers);
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.pick_resolver = (function com$wsscode$pathom$connect$pick_resolver(p__65324){
var map__65325 = p__65324;
var map__65325__$1 = (((((!((map__65325 == null))))?(((((map__65325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65325):map__65325);
var env = map__65325__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65325__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65325__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null));
if(cljs.core.truth_(temp__5733__auto__)){
var attr_resolvers = temp__5733__auto__;
var r = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attr_resolvers,temp__5733__auto__,k,e,map__65325,map__65325__$1,env,indexes,dependency_track){
return (function (p__65332){
var vec__65333 = p__65332;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65333,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65333,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});})(attr_resolvers,temp__5733__auto__,k,e,map__65325,map__65325__$1,env,indexes,dependency_track))
,attr_resolvers));
var G__65340 = r;
var vec__65341 = G__65340;
var seq__65342 = cljs.core.seq(vec__65341);
var first__65343 = cljs.core.first(seq__65342);
var seq__65342__$1 = cljs.core.next(seq__65342);
var map__65344 = first__65343;
var map__65344__$1 = (((((!((map__65344 == null))))?(((((map__65344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65344):map__65344);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65344__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65344__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t = seq__65342__$1;
var xs = vec__65341;
var G__65340__$1 = G__65340;
while(true){
var vec__65349 = G__65340__$1;
var seq__65350 = cljs.core.seq(vec__65349);
var first__65351 = cljs.core.first(seq__65350);
var seq__65350__$1 = cljs.core.next(seq__65350);
var map__65352 = first__65351;
var map__65352__$1 = (((((!((map__65352 == null))))?(((((map__65352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65352):map__65352);
var sym__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65352__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t__$1 = seq__65350__$1;
var xs__$1 = vec__65349;
if(cljs.core.truth_(xs__$1)){
if((!(cljs.core.contains_QMARK_(dependency_track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null))))){
var e__$1 = (function (){try{return com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true),new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null)),attrs__$1));
}catch (e65355){var _ = e65355;
return cljs.core.PersistentArrayMap.EMPTY;
}})();
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs__$1),cljs.core.set(cljs.core.keys(e__$1)));
if(cljs.core.seq(missing)){
var G__68971 = t__$1;
G__65340__$1 = G__68971;
continue;
} else {
var e__$2 = cljs.core.select_keys(e__$1,attrs__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),e__$2,new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.first(com.wsscode.pathom.connect.sort_resolvers(env,sym__$1,e__$2))], null);
}
} else {
return null;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","pick-resolver","com.wsscode.pathom.connect/pick-resolver",162465702,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65358){
return cljs.core.map_QMARK_(G__65358);
}),(function (G__65358){
return cljs.core.contains_QMARK_(G__65358,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
})], null),(function (G__65358){
return ((cljs.core.map_QMARK_(G__65358)) && (cljs.core.contains_QMARK_(G__65358,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.async_pick_resolver = (function com$wsscode$pathom$connect$async_pick_resolver(p__65374){
var map__65375 = p__65374;
var map__65375__$1 = (((((!((map__65375 == null))))?(((((map__65375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65375):map__65375);
var env = map__65375__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65375__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65375__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,map__65375,map__65375__$1,env,indexes,dependency_track){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,map__65375,map__65375__$1,env,indexes,dependency_track){
return (function (state_65529){
var state_val_65530 = (state_65529[(1)]);
if((state_val_65530 === (7))){
var inst_65525 = (state_65529[(2)]);
var state_65529__$1 = state_65529;
var statearr_65531_68978 = state_65529__$1;
(statearr_65531_68978[(2)] = inst_65525);


cljs.core.async.impl.ioc_helpers.process_exception(state_65529__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (20))){
var state_65529__$1 = state_65529;
var statearr_65532_68979 = state_65529__$1;
(statearr_65532_68979[(2)] = false);

(statearr_65532_68979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (27))){
var inst_65435 = (state_65529[(7)]);
var inst_65465 = (state_65529[(2)]);
var inst_65466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65465,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_65467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65465,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var state_65529__$1 = (function (){var statearr_65533 = state_65529;
(statearr_65533[(8)] = inst_65467);

(statearr_65533[(9)] = inst_65466);

return statearr_65533;
})();
if(cljs.core.truth_(inst_65435)){
var statearr_65535_68980 = state_65529__$1;
(statearr_65535_68980[(1)] = (28));

} else {
var statearr_65537_68981 = state_65529__$1;
(statearr_65537_68981[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (1))){
var state_65529__$1 = state_65529;
var statearr_65538_68982 = state_65529__$1;
(statearr_65538_68982[(2)] = null);

(statearr_65538_68982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (24))){
var inst_65457 = (state_65529[(2)]);
var state_65529__$1 = state_65529;
var statearr_65539_68983 = state_65529__$1;
(statearr_65539_68983[(2)] = inst_65457);

(statearr_65539_68983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (39))){
var inst_65497 = (state_65529[(10)]);
var inst_65467 = (state_65529[(8)]);
var inst_65466 = (state_65529[(9)]);
var inst_65507 = [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)];
var inst_65508 = cljs.core.select_keys(inst_65497,inst_65467);
var inst_65509 = com.wsscode.pathom.connect.sort_resolvers(env,inst_65466,inst_65497);
var inst_65510 = cljs.core.first(inst_65509);
var inst_65511 = [inst_65508,inst_65510];
var inst_65512 = cljs.core.PersistentHashMap.fromArrays(inst_65507,inst_65511);
var state_65529__$1 = state_65529;
var statearr_65540_68984 = state_65529__$1;
(statearr_65540_68984[(2)] = inst_65512);

(statearr_65540_68984[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (4))){
var inst_65389 = (state_65529[(11)]);
var inst_65384 = (state_65529[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_65529,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_65383 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_65384__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_65383);
var inst_65385 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_65386 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65387 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),inst_65384__$1];
var inst_65388 = (new cljs.core.PersistentVector(null,2,(5),inst_65386,inst_65387,null));
var inst_65389__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_65388);
var state_65529__$1 = (function (){var statearr_65541 = state_65529;
(statearr_65541[(11)] = inst_65389__$1);

(statearr_65541[(12)] = inst_65384__$1);

(statearr_65541[(13)] = inst_65385);

return statearr_65541;
})();
if(cljs.core.truth_(inst_65389__$1)){
var statearr_65542_68985 = state_65529__$1;
(statearr_65542_68985[(1)] = (5));

} else {
var statearr_65543_68986 = state_65529__$1;
(statearr_65543_68986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (15))){
var inst_65407 = (state_65529[(14)]);
var state_65529__$1 = state_65529;
var statearr_65544_68987 = state_65529__$1;
(statearr_65544_68987[(2)] = inst_65407);

(statearr_65544_68987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (21))){
var inst_65460 = (state_65529[(2)]);
var state_65529__$1 = state_65529;
if(cljs.core.truth_(inst_65460)){
var statearr_65547_68988 = state_65529__$1;
(statearr_65547_68988[(1)] = (25));

} else {
var statearr_65548_68989 = state_65529__$1;
(statearr_65548_68989[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (31))){
var state_65529__$1 = state_65529;
var statearr_65549_68990 = state_65529__$1;
(statearr_65549_68990[(2)] = null);

(statearr_65549_68990[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (32))){
var state_65529__$1 = state_65529;
var statearr_65550_68991 = state_65529__$1;
(statearr_65550_68991[(2)] = null);

(statearr_65550_68991[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (40))){
var inst_65514 = (state_65529[(2)]);
var state_65529__$1 = state_65529;
var statearr_65551_68992 = state_65529__$1;
(statearr_65551_68992[(2)] = inst_65514);

(statearr_65551_68992[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (33))){
var inst_65517 = (state_65529[(2)]);
var state_65529__$1 = state_65529;
var statearr_65552_68993 = state_65529__$1;
(statearr_65552_68993[(2)] = inst_65517);

(statearr_65552_68993[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (13))){
var inst_65424 = (state_65529[(2)]);
var state_65529__$1 = state_65529;
var statearr_65553_68994 = state_65529__$1;
(statearr_65553_68994[(2)] = inst_65424);

(statearr_65553_68994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (22))){
var state_65529__$1 = state_65529;
var statearr_65554_68995 = state_65529__$1;
(statearr_65554_68995[(2)] = true);

(statearr_65554_68995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (36))){
var inst_65467 = (state_65529[(8)]);
var inst_65466 = (state_65529[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_65529,(35),new cljs.core.Keyword(null,"default","default",-1987822328),null,(34));
var inst_65483 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true);
var inst_65484 = cljs.core.PersistentHashSet.EMPTY;
var inst_65485 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,inst_65484);
var inst_65486 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65487 = [inst_65466,inst_65467];
var inst_65488 = (new cljs.core.PersistentVector(null,2,(5),inst_65486,inst_65487,null));
var inst_65489 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_65483,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),inst_65485,inst_65488);
var inst_65490 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(inst_65489,inst_65467);
var state_65529__$1 = state_65529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65529__$1,(37),inst_65490);
} else {
if((state_val_65530 === (29))){
var state_65529__$1 = state_65529;
var statearr_65557_68997 = state_65529__$1;
(statearr_65557_68997[(2)] = null);

(statearr_65557_68997[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (6))){
var state_65529__$1 = state_65529;
var statearr_65558_68998 = state_65529__$1;
(statearr_65558_68998[(2)] = null);

(statearr_65558_68998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (28))){
var inst_65467 = (state_65529[(8)]);
var inst_65466 = (state_65529[(9)]);
var inst_65470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65471 = [inst_65466,inst_65467];
var inst_65472 = (new cljs.core.PersistentVector(null,2,(5),inst_65470,inst_65471,null));
var inst_65473 = cljs.core.contains_QMARK_(dependency_track,inst_65472);
var inst_65474 = (!(inst_65473));
var state_65529__$1 = state_65529;
if(inst_65474){
var statearr_65561_68999 = state_65529__$1;
(statearr_65561_68999[(1)] = (31));

} else {
var statearr_65562_69000 = state_65529__$1;
(statearr_65562_69000[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (25))){
var inst_65442 = (state_65529[(15)]);
var inst_65462 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_65442);
var state_65529__$1 = state_65529;
var statearr_65563_69001 = state_65529__$1;
(statearr_65563_69001[(2)] = inst_65462);

(statearr_65563_69001[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (34))){
var inst_65497 = (state_65529[(10)]);
var inst_65467 = (state_65529[(8)]);
var inst_65497__$1 = (state_65529[(2)]);
var inst_65498 = cljs.core.set(inst_65467);
var inst_65499 = cljs.core.keys(inst_65497__$1);
var inst_65500 = cljs.core.set(inst_65499);
var inst_65501 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_65498,inst_65500);
var inst_65503 = cljs.core.seq(inst_65501);
var state_65529__$1 = (function (){var statearr_65564 = state_65529;
(statearr_65564[(10)] = inst_65497__$1);

return statearr_65564;
})();
if(inst_65503){
var statearr_65565_69002 = state_65529__$1;
(statearr_65565_69002[(1)] = (38));

} else {
var statearr_65566_69003 = state_65529__$1;
(statearr_65566_69003[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (17))){
var inst_65442 = (state_65529[(15)]);
var inst_65435 = (state_65529[(7)]);
var inst_65441 = cljs.core.seq(inst_65435);
var inst_65442__$1 = cljs.core.first(inst_65441);
var inst_65443 = cljs.core.next(inst_65441);
var inst_65445 = (inst_65442__$1 == null);
var inst_65446 = cljs.core.not(inst_65445);
var state_65529__$1 = (function (){var statearr_65567 = state_65529;
(statearr_65567[(15)] = inst_65442__$1);

(statearr_65567[(16)] = inst_65443);

return statearr_65567;
})();
if(inst_65446){
var statearr_65568_69004 = state_65529__$1;
(statearr_65568_69004[(1)] = (19));

} else {
var statearr_65569_69005 = state_65529__$1;
(statearr_65569_69005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (3))){
var inst_65378 = (state_65529[(2)]);
var state_65529__$1 = state_65529;
var statearr_65572_69006 = state_65529__$1;
(statearr_65572_69006[(2)] = inst_65378);


cljs.core.async.impl.ioc_helpers.process_exception(state_65529__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (12))){
var state_65529__$1 = state_65529;
var statearr_65573_69007 = state_65529__$1;
(statearr_65573_69007[(2)] = false);

(statearr_65573_69007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (2))){
var inst_65527 = (state_65529[(2)]);
var state_65529__$1 = state_65529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65529__$1,inst_65527);
} else {
if((state_val_65530 === (23))){
var state_65529__$1 = state_65529;
var statearr_65574_69008 = state_65529__$1;
(statearr_65574_69008[(2)] = false);

(statearr_65574_69008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (35))){
var inst_65476 = (state_65529[(2)]);
var inst_65477 = cljs.core.PersistentHashMap.EMPTY;
var state_65529__$1 = (function (){var statearr_65575 = state_65529;
(statearr_65575[(17)] = inst_65476);

return statearr_65575;
})();
var statearr_65576_69009 = state_65529__$1;
(statearr_65576_69009[(2)] = inst_65477);


cljs.core.async.impl.ioc_helpers.process_exception(state_65529__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (19))){
var inst_65442 = (state_65529[(15)]);
var inst_65448 = inst_65442.cljs$lang$protocol_mask$partition0$;
var inst_65449 = (inst_65448 & (64));
var inst_65451 = inst_65442.cljs$core$ISeq$;
var inst_65452 = (cljs.core.PROTOCOL_SENTINEL === inst_65451);
var inst_65453 = ((inst_65449) || (inst_65452));
var state_65529__$1 = state_65529;
if(cljs.core.truth_(inst_65453)){
var statearr_65577_69010 = state_65529__$1;
(statearr_65577_69010[(1)] = (22));

} else {
var statearr_65578_69011 = state_65529__$1;
(statearr_65578_69011[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (11))){
var state_65529__$1 = state_65529;
var statearr_65580_69012 = state_65529__$1;
(statearr_65580_69012[(2)] = true);

(statearr_65580_69012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (9))){
var state_65529__$1 = state_65529;
var statearr_65582_69013 = state_65529__$1;
(statearr_65582_69013[(2)] = false);

(statearr_65582_69013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (5))){
var inst_65407 = (state_65529[(14)]);
var inst_65395 = (state_65529[(18)]);
var inst_65389 = (state_65529[(11)]);
var inst_65384 = (state_65529[(12)]);
var inst_65385 = (state_65529[(13)]);
var inst_65391 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769));
var inst_65393 = (function (){var k = inst_65384;
var e = inst_65385;
var temp__5733__auto__ = inst_65389;
var attr_resolvers = inst_65389;
return ((function (k,e,temp__5733__auto__,attr_resolvers,inst_65407,inst_65395,inst_65389,inst_65384,inst_65385,inst_65391,state_val_65530,c__52131__auto__,map__65375,map__65375__$1,env,indexes,dependency_track){
return (function (p__65392){
var vec__65583 = p__65392;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65583,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65583,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});
;})(k,e,temp__5733__auto__,attr_resolvers,inst_65407,inst_65395,inst_65389,inst_65384,inst_65385,inst_65391,state_val_65530,c__52131__auto__,map__65375,map__65375__$1,env,indexes,dependency_track))
})();
var inst_65394 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_65393,inst_65389);
var inst_65395__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_65391,inst_65394);
var inst_65406 = cljs.core.seq(inst_65395__$1);
var inst_65407__$1 = cljs.core.first(inst_65406);
var inst_65408 = cljs.core.next(inst_65406);
var inst_65413 = (inst_65407__$1 == null);
var inst_65414 = cljs.core.not(inst_65413);
var state_65529__$1 = (function (){var statearr_65586 = state_65529;
(statearr_65586[(14)] = inst_65407__$1);

(statearr_65586[(18)] = inst_65395__$1);

(statearr_65586[(19)] = inst_65408);

return statearr_65586;
})();
if(inst_65414){
var statearr_65587_69014 = state_65529__$1;
(statearr_65587_69014[(1)] = (8));

} else {
var statearr_65588_69015 = state_65529__$1;
(statearr_65588_69015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (14))){
var inst_65407 = (state_65529[(14)]);
var inst_65429 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_65407);
var state_65529__$1 = state_65529;
var statearr_65589_69016 = state_65529__$1;
(statearr_65589_69016[(2)] = inst_65429);

(statearr_65589_69016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (26))){
var inst_65442 = (state_65529[(15)]);
var state_65529__$1 = state_65529;
var statearr_65595_69017 = state_65529__$1;
(statearr_65595_69017[(2)] = inst_65442);

(statearr_65595_69017[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (16))){
var inst_65395 = (state_65529[(18)]);
var inst_65432 = (state_65529[(2)]);
var inst_65433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65432,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_65434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65432,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var inst_65435 = inst_65395;
var state_65529__$1 = (function (){var statearr_65596 = state_65529;
(statearr_65596[(20)] = inst_65433);

(statearr_65596[(7)] = inst_65435);

(statearr_65596[(21)] = inst_65434);

return statearr_65596;
})();
var statearr_65597_69018 = state_65529__$1;
(statearr_65597_69018[(2)] = null);

(statearr_65597_69018[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (38))){
var inst_65443 = (state_65529[(16)]);
var inst_65435 = inst_65443;
var state_65529__$1 = (function (){var statearr_65598 = state_65529;
(statearr_65598[(7)] = inst_65435);

return statearr_65598;
})();
var statearr_65599_69019 = state_65529__$1;
(statearr_65599_69019[(2)] = null);

(statearr_65599_69019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (30))){
var inst_65520 = (state_65529[(2)]);
var state_65529__$1 = state_65529;
var statearr_65600_69021 = state_65529__$1;
(statearr_65600_69021[(2)] = inst_65520);

(statearr_65600_69021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (10))){
var inst_65427 = (state_65529[(2)]);
var state_65529__$1 = state_65529;
if(cljs.core.truth_(inst_65427)){
var statearr_65601_69023 = state_65529__$1;
(statearr_65601_69023[(1)] = (14));

} else {
var statearr_65602_69025 = state_65529__$1;
(statearr_65602_69025[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (18))){
var inst_65522 = (state_65529[(2)]);
var state_65529__$1 = state_65529;
var statearr_65603_69026 = state_65529__$1;
(statearr_65603_69026[(2)] = inst_65522);

(statearr_65603_69026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (37))){
var inst_65492 = (state_65529[(2)]);
var inst_65493 = com.wsscode.common.async_cljs.throw_err(inst_65492);
var inst_65494 = com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,inst_65493);
var state_65529__$1 = state_65529;
var statearr_65604_69027 = state_65529__$1;
(statearr_65604_69027[(2)] = inst_65494);


cljs.core.async.impl.ioc_helpers.process_exception(state_65529__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65530 === (8))){
var inst_65407 = (state_65529[(14)]);
var inst_65416 = inst_65407.cljs$lang$protocol_mask$partition0$;
var inst_65417 = (inst_65416 & (64));
var inst_65418 = inst_65407.cljs$core$ISeq$;
var inst_65419 = (cljs.core.PROTOCOL_SENTINEL === inst_65418);
var inst_65420 = ((inst_65417) || (inst_65419));
var state_65529__$1 = state_65529;
if(cljs.core.truth_(inst_65420)){
var statearr_65605_69028 = state_65529__$1;
(statearr_65605_69028[(1)] = (11));

} else {
var statearr_65606_69029 = state_65529__$1;
(statearr_65606_69029[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
});})(c__52131__auto__,map__65375,map__65375__$1,env,indexes,dependency_track))
;
return ((function (switch__52035__auto__,c__52131__auto__,map__65375,map__65375__$1,env,indexes,dependency_track){
return (function() {
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__52036__auto____0 = (function (){
var statearr_65607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65607[(0)] = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__52036__auto__);

(statearr_65607[(1)] = (1));

return statearr_65607;
});
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__52036__auto____1 = (function (state_65529){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_65529);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e65608){if((e65608 instanceof Object)){
var ex__52039__auto__ = e65608;
var statearr_65609_69033 = state_65529;
(statearr_65609_69033[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65608;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69034 = state_65529;
state_65529 = G__69034;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__52036__auto__ = function(state_65529){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__52036__auto____1.call(this,state_65529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,map__65375,map__65375__$1,env,indexes,dependency_track))
})();
var state__52133__auto__ = (function (){var statearr_65610 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_65610[(6)] = c__52131__auto__);

return statearr_65610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,map__65375,map__65375__$1,env,indexes,dependency_track))
);

return c__52131__auto__;
});
com.wsscode.pathom.connect.default_resolver_dispatch = (function com$wsscode$pathom$connect$default_resolver_dispatch(p__65611,entity){
var map__65612 = p__65611;
var map__65612__$1 = (((((!((map__65612 == null))))?(((((map__65612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65612):map__65612);
var env = map__65612__$1;
var map__65613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65612__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__65613__$1 = (((((!((map__65613 == null))))?(((((map__65613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65613):map__65613);
var resolver = map__65613__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65613__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Default resolver-dispatch is not supported on CLJS, please implement ::p.connect/resolver-dispatch in your parser environment.",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Helper method that extract resolver symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for resolver dispatch.
 */
com.wsscode.pathom.connect.resolver_dispatch = (function com$wsscode$pathom$connect$resolver_dispatch(var_args){
var G__65618 = arguments.length;
switch (G__65618) {
case 1:
return com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$1 = (function (env){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
});

com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$2 = (function (env,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
});

com.wsscode.pathom.connect.resolver_dispatch.cljs$lang$maxFixedArity = 2;

/**
 * This dispatch method will fire the resolver by looking at the ::pc/resolve
 *   key in the resolver map details.
 */
com.wsscode.pathom.connect.resolver_dispatch_embedded = (function com$wsscode$pathom$connect$resolver_dispatch_embedded(p__65619,entity){
var map__65620 = p__65619;
var map__65620__$1 = (((((!((map__65620 == null))))?(((((map__65620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65620):map__65620);
var env = map__65620__$1;
var map__65621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65620__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__65621__$1 = (((((!((map__65621 == null))))?(((((map__65621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65621):map__65621);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65621__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65621__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
if(cljs.core.truth_(resolve)){
} else {
throw (new Error(["Assert failed: ",["Can't find resolve fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","resolve"].join('')));
}

return (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,entity) : resolve.call(null,env,entity));
});
com.wsscode.pathom.connect.step_weight = (function com$wsscode$pathom$connect$step_weight(value,new_value){
return (((function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + new_value) * 0.5);
});
com.wsscode.pathom.connect.update_resolver_weight = (function com$wsscode$pathom$connect$update_resolver_weight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69042 = arguments.length;
var i__4731__auto___69043 = (0);
while(true){
if((i__4731__auto___69043 < len__4730__auto___69042)){
args__4736__auto__.push((arguments[i__4731__auto___69043]));

var G__69044 = (i__4731__auto___69043 + (1));
i__4731__auto___69043 = G__69044;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic = (function (p__65630,resolver,args){
var map__65632 = p__65630;
var map__65632__$1 = (((((!((map__65632 == null))))?(((((map__65632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65632):map__65632);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65632__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,resolver_weights,cljs.core.update,resolver,args);
} else {
return null;
}
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$applyTo = (function (seq65626){
var G__65627 = cljs.core.first(seq65626);
var seq65626__$1 = cljs.core.next(seq65626);
var G__65628 = cljs.core.first(seq65626__$1);
var seq65626__$2 = cljs.core.next(seq65626__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65627,G__65628,seq65626__$2);
});

com.wsscode.pathom.connect.call_resolver_STAR_ = (function com$wsscode$pathom$connect$call_resolver_STAR_(p__65635,entity){
var map__65636 = p__65635;
var map__65636__$1 = (((((!((map__65636 == null))))?(((((map__65636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65636):map__65636);
var env = map__65636__$1;
var resolver_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65636__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.default_resolver_dispatch);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65636__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_sym = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env));
var tid = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),resolver_sym,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),entity], null));
var start = com.wsscode.pathom.trace.now();
var res__59702__auto__ = (function (){try{return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","wrap-resolve","com.wsscode.pathom.connect/wrap-resolve",1728436586),resolver_dispatch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,entity], 0));
}catch (e65638){var e = e65638;
return e;
}})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59702__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59702__auto__,resolver_sym,tid,start,map__65636,map__65636__$1,env,resolver_dispatch,resolver_weights){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59702__auto__,resolver_sym,tid,start,map__65636,map__65636__$1,env,resolver_dispatch,resolver_weights){
return (function (state_65669){
var state_val_65670 = (state_65669[(1)]);
if((state_val_65670 === (7))){
var state_65669__$1 = state_65669;
var statearr_65673_69074 = state_65669__$1;
(statearr_65673_69074[(2)] = null);

(statearr_65673_69074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65670 === (1))){
var state_65669__$1 = state_65669;
var statearr_65674_69075 = state_65669__$1;
(statearr_65674_69075[(2)] = null);

(statearr_65674_69075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65670 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_65669,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_65669__$1 = state_65669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65669__$1,(5),res__59702__auto__);
} else {
if((state_val_65670 === (6))){
var inst_65646 = com.wsscode.pathom.trace.now();
var inst_65647 = (inst_65646 - start);
var inst_65648 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_65647], 0));
var state_65669__$1 = state_65669;
var statearr_65677_69076 = state_65669__$1;
(statearr_65677_69076[(2)] = inst_65648);

(statearr_65677_69076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65670 === (3))){
var inst_65639 = (state_65669[(2)]);
var state_65669__$1 = state_65669;
var statearr_65678_69077 = state_65669__$1;
(statearr_65678_69077[(2)] = inst_65639);


cljs.core.async.impl.ioc_helpers.process_exception(state_65669__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65670 === (2))){
var inst_65667 = (state_65669[(2)]);
var state_65669__$1 = state_65669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65669__$1,inst_65667);
} else {
if((state_val_65670 === (11))){
var inst_65644 = (state_65669[(7)]);
var inst_65663 = (state_65669[(2)]);
var inst_65664 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,inst_65663);
var inst_65665 = com.wsscode.common.async_cljs.throw_err(inst_65644);
var state_65669__$1 = (function (){var statearr_65679 = state_65669;
(statearr_65679[(8)] = inst_65664);

return statearr_65679;
})();
var statearr_65680_69078 = state_65669__$1;
(statearr_65680_69078[(2)] = inst_65665);


cljs.core.async.impl.ioc_helpers.process_exception(state_65669__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65670 === (9))){
var inst_65656 = (state_65669[(9)]);
var inst_65644 = (state_65669[(7)]);
var inst_65659 = com.wsscode.pathom.core.process_error(env,inst_65644);
var inst_65660 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_65656,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_65659);
var state_65669__$1 = state_65669;
var statearr_65681_69079 = state_65669__$1;
(statearr_65681_69079[(2)] = inst_65660);

(statearr_65681_69079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65670 === (5))){
var inst_65644 = (state_65669[(2)]);
var state_65669__$1 = (function (){var statearr_65683 = state_65669;
(statearr_65683[(7)] = inst_65644);

return statearr_65683;
})();
if(cljs.core.truth_(resolver_weights)){
var statearr_65684_69082 = state_65669__$1;
(statearr_65684_69082[(1)] = (6));

} else {
var statearr_65685_69083 = state_65669__$1;
(statearr_65685_69083[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65670 === (10))){
var inst_65656 = (state_65669[(9)]);
var state_65669__$1 = state_65669;
var statearr_65688_69084 = state_65669__$1;
(statearr_65688_69084[(2)] = inst_65656);

(statearr_65688_69084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65670 === (8))){
var inst_65644 = (state_65669[(7)]);
var inst_65651 = (state_65669[(2)]);
var inst_65654 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_65655 = [new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)];
var inst_65656 = cljs.core.PersistentHashMap.fromArrays(inst_65654,inst_65655);
var inst_65657 = com.wsscode.common.async_cljs.error_QMARK_(inst_65644);
var state_65669__$1 = (function (){var statearr_65689 = state_65669;
(statearr_65689[(9)] = inst_65656);

(statearr_65689[(10)] = inst_65651);

return statearr_65689;
})();
if(inst_65657){
var statearr_65690_69085 = state_65669__$1;
(statearr_65690_69085[(1)] = (9));

} else {
var statearr_65691_69086 = state_65669__$1;
(statearr_65691_69086[(1)] = (10));

}

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
});})(c__52131__auto__,res__59702__auto__,resolver_sym,tid,start,map__65636,map__65636__$1,env,resolver_dispatch,resolver_weights))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59702__auto__,resolver_sym,tid,start,map__65636,map__65636__$1,env,resolver_dispatch,resolver_weights){
return (function() {
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__52036__auto____0 = (function (){
var statearr_65693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65693[(0)] = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__52036__auto__);

(statearr_65693[(1)] = (1));

return statearr_65693;
});
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__52036__auto____1 = (function (state_65669){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_65669);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e65694){if((e65694 instanceof Object)){
var ex__52039__auto__ = e65694;
var statearr_65695_69095 = state_65669;
(statearr_65695_69095[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65694;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69096 = state_65669;
state_65669 = G__69096;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__52036__auto__ = function(state_65669){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__52036__auto____1.call(this,state_65669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59702__auto__,resolver_sym,tid,start,map__65636,map__65636__$1,env,resolver_dispatch,resolver_weights))
})();
var state__52133__auto__ = (function (){var statearr_65696 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_65696[(6)] = c__52131__auto__);

return statearr_65696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59702__auto__,resolver_sym,tid,start,map__65636,map__65636__$1,env,resolver_dispatch,resolver_weights))
);

return c__52131__auto__;
} else {
var x = res__59702__auto__;
if(cljs.core.truth_(resolver_weights)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.now() - start)], 0));
} else {
}

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,(function (){var G__65697 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)], null);
if(com.wsscode.common.async_cljs.error_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65697,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,x));
} else {
return G__65697;
}
})());

return com.wsscode.common.async_cljs.throw_err(x);
}
});
com.wsscode.pathom.connect.call_resolver = (function com$wsscode$pathom$connect$call_resolver(p__65700,entity){
var map__65701 = p__65700;
var map__65701__$1 = (((((!((map__65701 == null))))?(((((map__65701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65701):map__65701);
var env = map__65701__$1;
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65701__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__65701,map__65701__$1,env,pool_chan){
return (function (p1__65698_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__65698_SHARP_));
});})(map__65701,map__65701__$1,env,pool_chan))
,entity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));
} else {
if(cljs.core.truth_(pool_chan)){
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__52131__auto___69099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___69099,out,map__65701,map__65701__$1,env,pool_chan){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___69099,out,map__65701,map__65701__$1,env,pool_chan){
return (function (state_65722){
var state_val_65724 = (state_65722[(1)]);
if((state_val_65724 === (1))){
var inst_65705 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_65706 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_65707 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_65706);
var inst_65708 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_65709 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_65708);
var inst_65710 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_65711 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_65710);
var inst_65712 = [new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419),inst_65707,inst_65709,inst_65711,entity];
var inst_65713 = cljs.core.PersistentHashMap.fromArrays(inst_65705,inst_65712);
var inst_65714 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_65713);
var inst_65715 = [new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"f","f",-1597136552)];
var inst_65716 = (function (){var tid = inst_65714;
return ((function (tid,inst_65705,inst_65706,inst_65707,inst_65708,inst_65709,inst_65710,inst_65711,inst_65712,inst_65713,inst_65714,inst_65715,state_val_65724,c__52131__auto___69099,out,map__65701,map__65701__$1,env,pool_chan){
return (function (){
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419)], null));

try{return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}catch (e65727){var e = e65727;
return e;
}});
;})(tid,inst_65705,inst_65706,inst_65707,inst_65708,inst_65709,inst_65710,inst_65711,inst_65712,inst_65713,inst_65714,inst_65715,state_val_65724,c__52131__auto___69099,out,map__65701,map__65701__$1,env,pool_chan))
})();
var inst_65717 = [out,inst_65716];
var inst_65718 = cljs.core.PersistentHashMap.fromArrays(inst_65715,inst_65717);
var state_65722__$1 = state_65722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65722__$1,(2),pool_chan,inst_65718);
} else {
if((state_val_65724 === (2))){
var inst_65720 = (state_65722[(2)]);
var state_65722__$1 = state_65722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65722__$1,inst_65720);
} else {
return null;
}
}
});})(c__52131__auto___69099,out,map__65701,map__65701__$1,env,pool_chan))
;
return ((function (switch__52035__auto__,c__52131__auto___69099,out,map__65701,map__65701__$1,env,pool_chan){
return (function() {
var com$wsscode$pathom$connect$call_resolver_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_$_state_machine__52036__auto____0 = (function (){
var statearr_65728 = [null,null,null,null,null,null,null];
(statearr_65728[(0)] = com$wsscode$pathom$connect$call_resolver_$_state_machine__52036__auto__);

(statearr_65728[(1)] = (1));

return statearr_65728;
});
var com$wsscode$pathom$connect$call_resolver_$_state_machine__52036__auto____1 = (function (state_65722){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_65722);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e65729){if((e65729 instanceof Object)){
var ex__52039__auto__ = e65729;
var statearr_65730_69141 = state_65722;
(statearr_65730_69141[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69142 = state_65722;
state_65722 = G__69142;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_$_state_machine__52036__auto__ = function(state_65722){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__52036__auto____1.call(this,state_65722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$call_resolver_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$call_resolver_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___69099,out,map__65701,map__65701__$1,env,pool_chan))
})();
var state__52133__auto__ = (function (){var statearr_65731 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_65731[(6)] = c__52131__auto___69099);

return statearr_65731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___69099,out,map__65701,map__65701__$1,env,pool_chan))
);


return out;
} else {
return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}
}
});
com.wsscode.pathom.connect.entity_select_keys = (function com$wsscode$pathom$connect$entity_select_keys(env,entity,input){
var entity__$1 = com.wsscode.pathom.core.maybe_atom(entity);
var res__59683__auto__ = ((clojure.set.subset_QMARK_(input,entity__$1))?entity__$1:com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),entity__$1),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0)),cljs.core.vec(input)));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__,entity__$1){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__,entity__$1){
return (function (state_65743){
var state_val_65744 = (state_65743[(1)]);
if((state_val_65744 === (1))){
var state_65743__$1 = state_65743;
var statearr_65746_69148 = state_65743__$1;
(statearr_65746_69148[(2)] = null);

(statearr_65746_69148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65744 === (2))){
var inst_65741 = (state_65743[(2)]);
var state_65743__$1 = state_65743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65743__$1,inst_65741);
} else {
if((state_val_65744 === (3))){
var inst_65732 = (state_65743[(2)]);
var state_65743__$1 = state_65743;
var statearr_65748_69149 = state_65743__$1;
(statearr_65748_69149[(2)] = inst_65732);


cljs.core.async.impl.ioc_helpers.process_exception(state_65743__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65744 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_65743,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_65743__$1 = state_65743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65743__$1,(5),res__59683__auto__);
} else {
if((state_val_65744 === (5))){
var inst_65737 = (state_65743[(2)]);
var inst_65738 = com.wsscode.common.async_cljs.throw_err(inst_65737);
var inst_65739 = cljs.core.select_keys(inst_65738,input);
var state_65743__$1 = state_65743;
var statearr_65751_69151 = state_65743__$1;
(statearr_65751_69151[(2)] = inst_65739);


cljs.core.async.impl.ioc_helpers.process_exception(state_65743__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__52131__auto__,res__59683__auto__,entity__$1))
;
return ((function (switch__52035__auto__,c__52131__auto__,res__59683__auto__,entity__$1){
return (function() {
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__52036__auto____0 = (function (){
var statearr_65753 = [null,null,null,null,null,null,null];
(statearr_65753[(0)] = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__52036__auto__);

(statearr_65753[(1)] = (1));

return statearr_65753;
});
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__52036__auto____1 = (function (state_65743){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_65743);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e65755){if((e65755 instanceof Object)){
var ex__52039__auto__ = e65755;
var statearr_65757_69152 = state_65743;
(statearr_65757_69152[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69173 = state_65743;
state_65743 = G__69173;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__52036__auto__ = function(state_65743){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__52036__auto____1.call(this,state_65743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__,entity__$1))
})();
var state__52133__auto__ = (function (){var statearr_65758 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_65758[(6)] = c__52131__auto__);

return statearr_65758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__,entity__$1))
);

return c__52131__auto__;
} else {
var e = res__59683__auto__;
return cljs.core.select_keys(e,input);
}
});
com.wsscode.pathom.connect.all_values_valid_QMARK_ = (function com$wsscode$pathom$connect$all_values_valid_QMARK_(m,input){
return ((cljs.core.every_QMARK_((function (p__65765){
var vec__65766 = p__65765;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65766,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65766,(1),null);
return cljs.core.not((com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.core.break_values.call(null,v)));
}),m)) && (cljs.core.every_QMARK_(m,input)));
});
com.wsscode.pathom.connect.cache_batch = (function com$wsscode$pathom$connect$cache_batch(env,resolver_sym,linked_results){
var params = com.wsscode.pathom.core.params(env);
var seq__65769 = cljs.core.seq(linked_results);
var chunk__65770 = null;
var count__65771 = (0);
var i__65772 = (0);
while(true){
if((i__65772 < count__65771)){
var vec__65780 = chunk__65770.cljs$core$IIndexed$_nth$arity$2(null,i__65772);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65780,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65780,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__65769,chunk__65770,count__65771,i__65772,vec__65780,input,value,params){
return (function (){
return value;
});})(seq__65769,chunk__65770,count__65771,i__65772,vec__65780,input,value,params))
);


var G__69185 = seq__65769;
var G__69186 = chunk__65770;
var G__69187 = count__65771;
var G__69188 = (i__65772 + (1));
seq__65769 = G__69185;
chunk__65770 = G__69186;
count__65771 = G__69187;
i__65772 = G__69188;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65769);
if(temp__5735__auto__){
var seq__65769__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65769__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65769__$1);
var G__69189 = cljs.core.chunk_rest(seq__65769__$1);
var G__69190 = c__4550__auto__;
var G__69191 = cljs.core.count(c__4550__auto__);
var G__69192 = (0);
seq__65769 = G__69189;
chunk__65770 = G__69190;
count__65771 = G__69191;
i__65772 = G__69192;
continue;
} else {
var vec__65783 = cljs.core.first(seq__65769__$1);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65783,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65783,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__65769,chunk__65770,count__65771,i__65772,vec__65783,input,value,seq__65769__$1,temp__5735__auto__,params){
return (function (){
return value;
});})(seq__65769,chunk__65770,count__65771,i__65772,vec__65783,input,value,seq__65769__$1,temp__5735__auto__,params))
);


var G__69201 = cljs.core.next(seq__65769__$1);
var G__69202 = null;
var G__69203 = (0);
var G__69204 = (0);
seq__65769 = G__69201;
chunk__65770 = G__69202;
count__65771 = G__69203;
i__65772 = G__69204;
continue;
}
} else {
return null;
}
}
break;
}
});
com.wsscode.pathom.connect.output__GT_provides = (function com$wsscode$pathom$connect$output__GT_provides(output){
var ast = com.wsscode.pathom.core.query__GT_ast(output);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
});
/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
com.wsscode.pathom.connect.distinct_by = (function com$wsscode$pathom$connect$distinct_by(var_args){
var G__65787 = arguments.length;
switch (G__65787) {
case 1:
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen){
return (function() {
var G__69209 = null;
var G__69209__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__69209__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__69209__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__69209 = function(result,x){
switch(arguments.length){
case 0:
return G__69209__0.call(this);
case 1:
return G__69209__1.call(this,result);
case 2:
return G__69209__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69209.cljs$core$IFn$_invoke$arity$0 = G__69209__0;
G__69209.cljs$core$IFn$_invoke$arity$1 = G__69209__1;
G__69209.cljs$core$IFn$_invoke$arity$2 = G__69209__2;
return G__69209;
})()
;})(seen))
});
});

com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function com$wsscode$pathom$connect$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__65792 = (function (p__65794,seen__$1){
while(true){
var vec__65795 = p__65794;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65795,(0),null);
var xs__$1 = vec__65795;
var temp__5735__auto__ = cljs.core.seq(xs__$1);
if(temp__5735__auto__){
var s = temp__5735__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__69238 = cljs.core.rest(s);
var G__69239 = seen__$1;
p__65794 = G__69238;
seen__$1 = G__69239;
continue;
} else {
return cljs.core.cons(x,com$wsscode$pathom$connect$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
});
return fexpr__65792(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

com.wsscode.pathom.connect.distinct_by.cljs$lang$maxFixedArity = 2;

com.wsscode.pathom.connect.compute_paths_STAR_ = (function com$wsscode$pathom$connect$compute_paths_STAR_(index_oir,keys,bad_keys,attr,pending){
if(cljs.core.contains_QMARK_(index_oir,attr)){
return cljs.core.reduce_kv((function (paths,input,resolvers){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.some(bad_keys,input);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((cljs.core.contains_QMARK_(input,attr)) || (((cljs.core.seq(input)) && (cljs.core.every_QMARK_(pending,input)))));
}
})())){
return paths;
} else {
var new_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__65799_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,p1__65799_SHARP_], null)],null));
})),resolvers);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(input,keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pending], 0));
if(cljs.core.seq(missing)){
var missing_paths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_paths,missing){
return (function (p1__65801_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(new_paths,missing))
,cljs.core.first(p1__65801_SHARP_),cljs.core.next(p1__65801_SHARP_));
});})(new_paths,missing))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.wsscode.common.combinatorics.cartesian_product,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (new_paths,missing){
return (function (p1__65800_SHARP_){
var G__65806 = index_oir;
var G__65807 = keys;
var G__65808 = bad_keys;
var G__65809 = p1__65800_SHARP_;
var G__65810 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,p1__65800_SHARP_);
return (com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5(G__65806,G__65807,G__65808,G__65809,G__65810) : com.wsscode.pathom.connect.compute_paths_STAR_.call(null,G__65806,G__65807,G__65808,G__65809,G__65810));
});})(new_paths,missing))
),missing)));
if(cljs.core.seq(missing_paths)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (missing_paths,new_paths,missing){
return (function (p1__65802_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (missing_paths,new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(missing_paths,new_paths,missing))
,cljs.core.first(p1__65802_SHARP_),cljs.core.next(p1__65802_SHARP_));
});})(missing_paths,new_paths,missing))
,com.wsscode.common.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_paths,missing_paths], 0))));
} else {
return paths;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,new_paths);
}
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(index_oir,attr));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
/**
 * This function will return a set of possible paths given a set of available keys to reach some attribute. You also
 *   send a set of bad keys, bad keys mean information you cannot use (maybe they already got an error, or you known will
 *   not be available).
 */
com.wsscode.pathom.connect.compute_paths = (function com$wsscode$pathom$connect$compute_paths(index_oir,keys,bad_keys,attr){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__65811_SHARP_){
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__65811_SHARP_);
}),(function (p1__65812_SHARP_){
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__65812_SHARP_);
}),cljs.core.rseq)),com.wsscode.pathom.connect.compute_paths_STAR_(index_oir,keys,bad_keys,attr,cljs.core.PersistentHashSet.createAsIfByAssoc([attr])));
});
com.wsscode.pathom.connect.split_good_bad_keys = (function com$wsscode$pathom$connect$split_good_bad_keys(entity){
var map__65814 = cljs.core.group_by((function (p1__65813_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__65813_SHARP_));
}),entity);
var map__65814__$1 = (((((!((map__65814 == null))))?(((((map__65814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65814):map__65814);
var bad_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65814__$1,true);
var good_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65814__$1,false);
var good_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),good_keys);
var bad_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),bad_keys);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [good_keys__$1,bad_keys__$1], null);
});
com.wsscode.pathom.connect.path_cost = (function com$wsscode$pathom$connect$path_cost(p__65818,path){
var map__65819 = p__65818;
var map__65819__$1 = (((((!((map__65819 == null))))?(((((map__65819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65819):map__65819);
var env = map__65819__$1;
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65819__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65819__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
var weights = (function (){var or__4131__auto__ = (function (){var G__65822 = resolver_weights;
if((G__65822 == null)){
return null;
} else {
return cljs.core.deref(G__65822);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (weights,map__65819,map__65819__$1,env,resolver_weights,request_cache){
return (function (sym){
var e = cljs.core.select_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.resolver_data(env,sym)));
if(cljs.core.truth_((function (){var and__4120__auto__ = request_cache;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e], null));
} else {
return and__4120__auto__;
}
})())){
return (1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(weights,sym,(1));
}
});})(weights,map__65819,map__65819__$1,env,resolver_weights,request_cache))
),cljs.core._PLUS_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","path-cost","com.wsscode.pathom.connect/path-cost",-825763067,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65826){
return cljs.core.coll_QMARK_(G__65826);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
com.wsscode.pathom.connect.default_sort_plan = (function com$wsscode$pathom$connect$default_sort_plan(env,plan){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__65827_SHARP_){
return com.wsscode.pathom.connect.path_cost(env,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__65827_SHARP_));
}),plan);
});
com.wsscode.pathom.connect.resolve_plan = (function com$wsscode$pathom$connect$resolve_plan(p__65830){
var map__65832 = p__65830;
var map__65832__$1 = (((((!((map__65832 == null))))?(((((map__65832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65832):map__65832);
var env = map__65832__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65832__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sort_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65832__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var sort_plan__$1 = (function (){var or__4131__auto__ = sort_plan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.connect.default_sort_plan;
}
})();
var vec__65834 = com.wsscode.pathom.connect.split_good_bad_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
var good_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65834,(0),null);
var bad_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65834,(1),null);
var G__65838 = env;
var G__65839 = com.wsscode.pathom.connect.compute_paths(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746).cljs$core$IFn$_invoke$arity$1(indexes),good_keys,bad_keys,key);
return (sort_plan__$1.cljs$core$IFn$_invoke$arity$2 ? sort_plan__$1.cljs$core$IFn$_invoke$arity$2(G__65838,G__65839) : sort_plan__$1.call(null,G__65838,G__65839));
});
com.wsscode.pathom.connect.resolver__GT_output = (function com$wsscode$pathom$connect$resolver__GT_output(env,resolver_sym){
var map__65843 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__65843__$1 = (((((!((map__65843 == null))))?(((((map__65843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65843):map__65843);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var compute_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","compute-output","com.wsscode.pathom.connect/compute-output",2103799942));
if(cljs.core.truth_(compute_output)){
return (compute_output.cljs$core$IFn$_invoke$arity$1 ? compute_output.cljs$core$IFn$_invoke$arity$1(env) : compute_output.call(null,env));
} else {
if(cljs.core.truth_(output)){
return output;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No output available",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

}
}
});
com.wsscode.pathom.connect.plan__GT_provides = (function com$wsscode$pathom$connect$plan__GT_provides(env,plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__65846_SHARP_){
return com.wsscode.pathom.connect.output__GT_provides(com.wsscode.pathom.connect.resolver__GT_output(env,cljs.core.second(p1__65846_SHARP_)));
})),plan);
});
com.wsscode.pathom.connect.plan__GT_resolvers = (function com$wsscode$pathom$connect$plan__GT_resolvers(plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.flatten(plan));
});
com.wsscode.pathom.connect.decrease_path_costs = (function com$wsscode$pathom$connect$decrease_path_costs(p__65853,plan){
var map__65854 = p__65853;
var map__65854__$1 = (((((!((map__65854 == null))))?(((((map__65854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65854):map__65854);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65854__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_weight_decrease_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65854__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weight-decrease-amount","com.wsscode.pathom.connect/resolver-weight-decrease-amount",-937582293),(1));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(resolver_weights,((function (map__65854,map__65854__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (p1__65851_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__65854,map__65854__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (rw,rsym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rw,rsym,(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(rw,rsym,(0)) - resolver_weight_decrease_amount);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});})(map__65854,map__65854__$1,resolver_weights,resolver_weight_decrease_amount))
,p1__65851_SHARP_,com.wsscode.pathom.connect.plan__GT_resolvers(plan));
});})(map__65854,map__65854__$1,resolver_weights,resolver_weight_decrease_amount))
);
} else {
return null;
}
});
com.wsscode.pathom.connect.reader_compute_plan = (function com$wsscode$pathom$connect$reader_compute_plan(env,failed_resolvers){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (plan_trace_id){
return (function (p1__65857_SHARP_){
return cljs.core.some(failed_resolvers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__65857_SHARP_));
});})(plan_trace_id))
,com.wsscode.pathom.connect.resolve_plan(env));
if(cljs.core.seq(plan)){
var plan_SINGLEQUOTE_ = cljs.core.first(plan);
var out = com.wsscode.pathom.connect.plan__GT_provides(env,plan_SINGLEQUOTE_);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),plan,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out], null));

com.wsscode.pathom.connect.decrease_path_costs(env,plan);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan_SINGLEQUOTE_,out], null);
} else {
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));

return null;
}
});
/**
 * Returns a set containing all attributes that are expected to participate in path
 *   resolution given a query. This function is intended to help dynamic
 *   resolvers that need to know which attributes are required before doing a call to the
 *   information source. For example, we never want to issue more than one GraphQL query
 *   to the same server at the same query level, but if we just look at the parent query
 *   is not enough; that's because some of the attributes might require other attributes
 *   to be fetched, this function will scan the attributes and figure everything that is
 *   required so you can issue a single request.
 * 
 *   Please note the attribute calculation might depend on the data currently available
 *   in the `::p/entity`, if you are calculating attributes for a different context
 *   you might want to replace some of the entity data.
 * 
 *   This function is intended to be called during resolver code.
 */
com.wsscode.pathom.connect.project_query_attributes = (function com$wsscode$pathom$connect$project_query_attributes(env,query){
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.query__GT_ast(com.wsscode.pathom.core.lift_placeholders(env,query)));
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (children){
return (function (p__65860,p__65861){
var map__65862 = p__65860;
var map__65862__$1 = (((((!((map__65862 == null))))?(((((map__65862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65862):map__65862);
var acc = map__65862__$1;
var provided = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65862__$1,new cljs.core.Keyword(null,"provided","provided",-1493091365));
var map__65863 = p__65861;
var map__65863__$1 = (((((!((map__65863 == null))))?(((((map__65863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65863):map__65863);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65863__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.contains_QMARK_(provided,key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
} else {
var temp__5733__auto__ = cljs.core.first(com.wsscode.pathom.connect.resolve_plan(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),key)));
if(cljs.core.truth_(temp__5733__auto__)){
var plan = temp__5733__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,(function (){var G__65874 = plan;
var G__65874__$1 = (((G__65874 == null))?null:cljs.core.first(G__65874));
var G__65874__$2 = (((G__65874__$1 == null))?null:cljs.core.second(G__65874__$1));
var G__65874__$3 = (((G__65874__$2 == null))?null:com.wsscode.pathom.connect.resolver_data(env,G__65874__$2));
if((G__65874__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(G__65874__$3);
}
})()),new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),plan),new cljs.core.Keyword(null,"provided","provided",-1493091365),cljs.core.into,com.wsscode.pathom.connect.plan__GT_provides(env,plan));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
}
}
});})(children))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"provided","provided",-1493091365),cljs.core.PersistentHashSet.EMPTY], null),children));
});
/**
 * Project query attributes for the parent query. See
 */
com.wsscode.pathom.connect.project_parent_query_attributes = (function com$wsscode$pathom$connect$project_parent_query_attributes(p__65878){
var map__65879 = p__65878;
var map__65879__$1 = (((((!((map__65879 == null))))?(((((map__65879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65879):map__65879);
var env = map__65879__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65879__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
return com.wsscode.pathom.connect.project_query_attributes(env,parent_query);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","project-parent-query-attributes","com.wsscode.pathom.connect/project-parent-query-attributes",-418196403,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),null,null,null));
/**
 * DEPRECATED: use reader2 instead
 * 
 *   Connect reader, this reader will lookup the given key in the index
 *   to process it, in case the resolver input can't be satisfied it will
 *   do a recursive lookup trying to find the next input.
 * 
 *   I recommend you switch to reader2, which instead plans ahead of time
 *   the full path it will need to cover to go from the current data to
 *   the requested attribute.
 */
com.wsscode.pathom.connect.reader = (function com$wsscode$pathom$connect$reader(p__65894){
var map__65895 = p__65894;
var map__65895__$1 = (((((!((map__65895 == null))))?(((((map__65895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65895):map__65895);
var env = map__65895__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65895__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65895__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var temp__5733__auto__ = com.wsscode.pathom.connect.pick_resolver(env);
if(cljs.core.truth_(temp__5733__auto__)){
var map__65899 = temp__5733__auto__;
var map__65899__$1 = (((((!((map__65899 == null))))?(((((map__65899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65899):map__65899);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65899__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65899__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var map__65902 = com.wsscode.pathom.connect.resolver_data(env,s);
var map__65902__$1 = (((((!((map__65902 == null))))?(((((map__65902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65902):map__65902);
var resolver = map__65902__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65902__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65902__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65902__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.common.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e,p], null),((function (map__65902,map__65902__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__65899,map__65899__$1,e,s,temp__5733__auto__,k,p,map__65895,map__65895__$1,env,indexes,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (map__65902,map__65902__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__65899,map__65899__$1,e,s,temp__5733__auto__,k,p,map__65895,map__65895__$1,env,indexes,processing_sequence){
return (function (p1__65891_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__65891_SHARP_,input);
});})(map__65902,map__65902__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__65899,map__65899__$1,e,s,temp__5733__auto__,k,p,map__65895,map__65895__$1,env,indexes,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__65902,map__65902__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__65899,map__65899__$1,e,s,temp__5733__auto__,k,p,map__65895,map__65895__$1,env,indexes,processing_sequence){
return (function (p1__65890_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__65890_SHARP_,input);
});})(map__65902,map__65902__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__65899,map__65899__$1,e,s,temp__5733__auto__,k,p,map__65895,map__65895__$1,env,indexes,processing_sequence))
,processing_sequence)));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,s,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
});})(map__65902,map__65902__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__65899,map__65899__$1,e,s,temp__5733__auto__,k,p,map__65895,map__65895__$1,env,indexes,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
if((!((((response__$1 == null)) || (cljs.core.map_QMARK_(response__$1)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from resolver must be a map.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),s,new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null));
} else {
}

com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (map__65902,map__65902__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__65899,map__65899__$1,e,s,temp__5733__auto__,k,p,map__65895,map__65895__$1,env,indexes,processing_sequence){
return (function (p1__65892_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__65892_SHARP_], 0));
});})(map__65902,map__65902__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__65899,map__65899__$1,e,s,temp__5733__auto__,k,p,map__65895,map__65895__$1,env,indexes,processing_sequence))
);

var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$1,k);
if(cljs.core.sequential_QMARK_(x)){
return com.wsscode.pathom.core.join_seq(env_SINGLEQUOTE_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,x));
} else {
if((x == null)){
if(cljs.core.contains_QMARK_(response__$1,k)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x),env_SINGLEQUOTE_);

}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.process_simple_reader_response = (function com$wsscode$pathom$connect$process_simple_reader_response(p__65909,response){
var map__65910 = p__65909;
var map__65910__$1 = (((((!((map__65910 == null))))?(((((map__65910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65910):map__65910);
var env = map__65910__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65910__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,key);
if(cljs.core.truth_((function (){var and__4120__auto__ = query;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.sequential_QMARK_(x);
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join_seq(env,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,x));
} else {
if((x == null)){
if(cljs.core.contains_QMARK_(response,key)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x),env);

}
}
});
com.wsscode.pathom.connect.reader2 = (function com$wsscode$pathom$connect$reader2(p__65922){
var map__65923 = p__65922;
var map__65923__$1 = (((((!((map__65923 == null))))?(((((map__65923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65923):map__65923);
var env = map__65923__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65923__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65923__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65923__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5733__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__65926 = temp__5733__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65926,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65926,(1),null);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var G__65936 = plan;
var vec__65937 = G__65936;
var seq__65938 = cljs.core.seq(vec__65937);
var first__65939 = cljs.core.first(seq__65938);
var seq__65938__$1 = cljs.core.next(seq__65938);
var step = first__65939;
var tail = seq__65938__$1;
var failed_resolvers = cljs.core.PersistentArrayMap.EMPTY;
var out_left = out;
var G__65936__$1 = G__65936;
var failed_resolvers__$1 = failed_resolvers;
var out_left__$1 = out_left;
while(true){
var vec__65976 = G__65936__$1;
var seq__65977 = cljs.core.seq(vec__65976);
var first__65978 = cljs.core.first(seq__65977);
var seq__65977__$1 = cljs.core.next(seq__65977);
var step__$1 = first__65978;
var tail__$1 = seq__65977__$1;
var failed_resolvers__$2 = failed_resolvers__$1;
var out_left__$2 = out_left__$1;
if(cljs.core.truth_(step__$1)){
var vec__65979 = step__$1;
var key_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65979,(0),null);
var resolver_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65979,(1),null);
var map__65982 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__65982__$1 = (((((!((map__65982 == null))))?(((((map__65982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65982):map__65982);
var resolver = map__65982__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65982__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65982__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65982__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = com.wsscode.pathom.connect.resolver__GT_output(env,resolver_sym);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var e = cljs.core.select_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1),input);
var p = com.wsscode.pathom.core.params(env__$1);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.common.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,p], null),((function (G__65936__$1,failed_resolvers__$1,out_left__$1,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__23022__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));
var res__23023__auto__ = (function (){var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__65936__$1,failed_resolvers__$1,out_left__$1,_,trace_id__23022__auto__,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__65914_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__65914_SHARP_,input);
});})(G__65936__$1,failed_resolvers__$1,out_left__$1,_,trace_id__23022__auto__,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__65936__$1,failed_resolvers__$1,out_left__$1,_,trace_id__23022__auto__,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__65913_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__65913_SHARP_,input);
});})(G__65936__$1,failed_resolvers__$1,out_left__$1,_,trace_id__23022__auto__,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var ___$2 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,resolver_sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__23022__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));

return res__23023__auto__;
} else {
var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__65936__$1,failed_resolvers__$1,out_left__$1,_,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__65914_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__65914_SHARP_,input);
});})(G__65936__$1,failed_resolvers__$1,out_left__$1,_,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__65936__$1,failed_resolvers__$1,out_left__$1,_,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__65913_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__65913_SHARP_,input);
});})(G__65936__$1,failed_resolvers__$1,out_left__$1,_,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var ___$2 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,resolver_sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
}
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
});})(G__65936__$1,failed_resolvers__$1,out_left__$1,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var response__$1 = (function (){var or__4131__auto__ = response;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var replan = ((function (G__65936__$1,failed_resolvers__$1,out_left__$1,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers__$2,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (G__65936__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__65919_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__65919_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(G__65936__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5733__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$3);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__65987 = temp__5733__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65987,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65987,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$3,out_SINGLEQUOTE_], null);
} else {
return null;
}
});})(G__65936__$1,failed_resolvers__$1,out_left__$1,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence))
;
if(cljs.core.map_QMARK_(response__$1)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (G__65936__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,replan,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__65920_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$2,p1__65920_SHARP_], 0));
});})(G__65936__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__65979,key_SINGLEQUOTE_,resolver_sym,map__65982,map__65982__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,replan,vec__65976,seq__65977,first__65978,seq__65977__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__65936,vec__65937,seq__65938,first__65939,seq__65938__$1,step,tail,failed_resolvers,out_left,key,vec__65926,plan,out,temp__5733__auto__,map__65923,map__65923__$1,env,indexes,max_resolver_weight,processing_sequence))
);

if(((cljs.core.contains_QMARK_(response__$2,key_SINGLEQUOTE_)) && (cljs.core.not((function (){var G__65991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__65991) : com.wsscode.pathom.core.break_values.call(null,G__65991));
})())))){
var out_provides = com.wsscode.pathom.connect.output__GT_provides(output);
com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

if(cljs.core.seq(tail__$1)){
var G__69297 = tail__$1;
var G__69298 = failed_resolvers__$2;
var G__69299 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(out_left__$2,out_provides);
G__65936__$1 = G__69297;
failed_resolvers__$1 = G__69298;
out_left__$1 = G__69299;
continue;
} else {
return com.wsscode.pathom.connect.process_simple_reader_response(env_SINGLEQUOTE_,response__$2);
}
} else {
var temp__5733__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null)));
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__65992 = temp__5733__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65992,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65992,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65992,(2),null);
var G__69301 = plan__$1;
var G__69302 = failed_resolvers__$3;
var G__69303 = out_SINGLEQUOTE_;
G__65936__$1 = G__69301;
failed_resolvers__$1 = G__69302;
out_left__$1 = G__69303;
continue;
} else {
if(cljs.core.seq(tail__$1)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null));
} else {
}

return com.wsscode.pathom.connect.process_simple_reader_response(env_SINGLEQUOTE_,response__$2);
}
}
} else {
var temp__5733__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null)));
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__65995 = temp__5733__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65995,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65995,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65995,(2),null);
var G__69309 = plan__$1;
var G__69310 = failed_resolvers__$3;
var G__69311 = out_SINGLEQUOTE_;
G__65936__$1 = G__69309;
failed_resolvers__$1 = G__69310;
out_left__$1 = G__69311;
continue;
} else {
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null));
}

}
} else {
return null;
}
break;
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.map_async_serial = (function com$wsscode$pathom$connect$map_async_serial(f,s){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__){
return (function (state_66034){
var state_val_66035 = (state_66034[(1)]);
if((state_val_66035 === (7))){
var inst_66006 = (state_66034[(7)]);
var inst_66008 = (state_66034[(8)]);
var inst_66008__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_66006) : f.call(null,inst_66006));
var inst_66015 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66008__$1);
var state_66034__$1 = (function (){var statearr_66037 = state_66034;
(statearr_66037[(8)] = inst_66008__$1);

return statearr_66037;
})();
if(inst_66015){
var statearr_66038_69315 = state_66034__$1;
(statearr_66038_69315[(1)] = (10));

} else {
var statearr_66039_69316 = state_66034__$1;
(statearr_66039_69316[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66035 === (1))){
var state_66034__$1 = state_66034;
var statearr_66040_69317 = state_66034__$1;
(statearr_66040_69317[(2)] = null);

(statearr_66040_69317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66035 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66034,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_66002 = cljs.core.PersistentVector.EMPTY;
var inst_66003 = inst_66002;
var inst_66004 = s;
var state_66034__$1 = (function (){var statearr_66041 = state_66034;
(statearr_66041[(9)] = inst_66004);

(statearr_66041[(10)] = inst_66003);

return statearr_66041;
})();
var statearr_66042_69322 = state_66034__$1;
(statearr_66042_69322[(2)] = null);

(statearr_66042_69322[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66035 === (13))){
var inst_66018 = (state_66034[(2)]);
var inst_66019 = com.wsscode.common.async_cljs.throw_err(inst_66018);
var state_66034__$1 = state_66034;
var statearr_66043_69323 = state_66034__$1;
(statearr_66043_69323[(2)] = inst_66019);

(statearr_66043_69323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66035 === (6))){
var inst_66030 = (state_66034[(2)]);
var state_66034__$1 = state_66034;
var statearr_66044_69324 = state_66034__$1;
(statearr_66044_69324[(2)] = inst_66030);


cljs.core.async.impl.ioc_helpers.process_exception(state_66034__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66035 === (3))){
var inst_65998 = (state_66034[(2)]);
var state_66034__$1 = state_66034;
var statearr_66045_69325 = state_66034__$1;
(statearr_66045_69325[(2)] = inst_65998);


cljs.core.async.impl.ioc_helpers.process_exception(state_66034__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66035 === (12))){
var inst_66004 = (state_66034[(9)]);
var inst_66003 = (state_66034[(10)]);
var inst_66022 = (state_66034[(2)]);
var inst_66023 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_66003,inst_66022);
var inst_66024 = cljs.core.next(inst_66004);
var inst_66003__$1 = inst_66023;
var inst_66004__$1 = inst_66024;
var state_66034__$1 = (function (){var statearr_66046 = state_66034;
(statearr_66046[(9)] = inst_66004__$1);

(statearr_66046[(10)] = inst_66003__$1);

return statearr_66046;
})();
var statearr_66047_69329 = state_66034__$1;
(statearr_66047_69329[(2)] = null);

(statearr_66047_69329[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66035 === (2))){
var inst_66032 = (state_66034[(2)]);
var state_66034__$1 = state_66034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66034__$1,inst_66032);
} else {
if((state_val_66035 === (11))){
var inst_66008 = (state_66034[(8)]);
var state_66034__$1 = state_66034;
var statearr_66048_69330 = state_66034__$1;
(statearr_66048_69330[(2)] = inst_66008);

(statearr_66048_69330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66035 === (9))){
var inst_66028 = (state_66034[(2)]);
var state_66034__$1 = state_66034;
var statearr_66049_69331 = state_66034__$1;
(statearr_66049_69331[(2)] = inst_66028);

(statearr_66049_69331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66035 === (5))){
var inst_66006 = (state_66034[(7)]);
var inst_66004 = (state_66034[(9)]);
var inst_66006__$1 = cljs.core.first(inst_66004);
var state_66034__$1 = (function (){var statearr_66050 = state_66034;
(statearr_66050[(7)] = inst_66006__$1);

return statearr_66050;
})();
if(cljs.core.truth_(inst_66006__$1)){
var statearr_66051_69333 = state_66034__$1;
(statearr_66051_69333[(1)] = (7));

} else {
var statearr_66052_69338 = state_66034__$1;
(statearr_66052_69338[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66035 === (10))){
var inst_66008 = (state_66034[(8)]);
var state_66034__$1 = state_66034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66034__$1,(13),inst_66008);
} else {
if((state_val_66035 === (8))){
var inst_66003 = (state_66034[(10)]);
var state_66034__$1 = state_66034;
var statearr_66053_69339 = state_66034__$1;
(statearr_66053_69339[(2)] = inst_66003);

(statearr_66053_69339[(1)] = (9));


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
});})(c__52131__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto__){
return (function() {
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__52036__auto____0 = (function (){
var statearr_66058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66058[(0)] = com$wsscode$pathom$connect$map_async_serial_$_state_machine__52036__auto__);

(statearr_66058[(1)] = (1));

return statearr_66058;
});
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__52036__auto____1 = (function (state_66034){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_66034);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e66059){if((e66059 instanceof Object)){
var ex__52039__auto__ = e66059;
var statearr_66060_69343 = state_66034;
(statearr_66060_69343[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69345 = state_66034;
state_66034 = G__69345;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$map_async_serial_$_state_machine__52036__auto__ = function(state_66034){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__52036__auto____1.call(this,state_66034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$map_async_serial_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$map_async_serial_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__))
})();
var state__52133__auto__ = (function (){var statearr_66065 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_66065[(6)] = c__52131__auto__);

return statearr_66065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__))
);

return c__52131__auto__;
});
/**
 * DEPRECATED: use async-reader2
 * 
 *   Like reader, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader = (function com$wsscode$pathom$connect$async_reader(p__66072){
var map__66073 = p__66072;
var map__66073__$1 = (((((!((map__66073 == null))))?(((((map__66073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66073):map__66073);
var env = map__66073__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66073__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66073__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence){
return (function (state_66245){
var state_val_66250 = (state_66245[(1)]);
if((state_val_66250 === (7))){
var state_66245__$1 = state_66245;
var statearr_66255_69351 = state_66245__$1;
(statearr_66255_69351[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_66255_69351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (59))){
var inst_66225 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
var statearr_66256_69352 = state_66245__$1;
(statearr_66256_69352[(2)] = inst_66225);

(statearr_66256_69352[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (20))){
var inst_66132 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
if(cljs.core.truth_(inst_66132)){
var statearr_66257_69354 = state_66245__$1;
(statearr_66257_69354[(1)] = (24));

} else {
var statearr_66258_69355 = state_66245__$1;
(statearr_66258_69355[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (58))){
var inst_66217 = (state_66245[(7)]);
var state_66245__$1 = state_66245;
var statearr_66259_69357 = state_66245__$1;
(statearr_66259_69357[(2)] = inst_66217);

(statearr_66259_69357[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (60))){
var inst_66221 = (state_66245[(2)]);
var inst_66222 = com.wsscode.common.async_cljs.throw_err(inst_66221);
var state_66245__$1 = state_66245;
var statearr_66260_69358 = state_66245__$1;
(statearr_66260_69358[(2)] = inst_66222);

(statearr_66260_69358[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (27))){
var inst_66139 = (state_66245[(8)]);
var inst_66145 = (state_66245[(9)]);
var inst_66109 = (state_66245[(10)]);
var inst_66110 = (state_66245[(11)]);
var inst_66111 = (state_66245[(12)]);
var inst_66138 = (state_66245[(13)]);
var inst_66086 = (state_66245[(14)]);
var inst_66151 = (state_66245[(15)]);
var inst_66137 = (state_66245[(16)]);
var inst_66144 = (state_66245[(17)]);
var inst_66147 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66148 = [inst_66111,inst_66110,p];
var inst_66149 = (new cljs.core.PersistentVector(null,3,(5),inst_66147,inst_66148,null));
var inst_66150 = (function (){var input = inst_66144;
var temp__5733__auto__ = inst_66086;
var cache_QMARK_ = inst_66138;
var batch_QMARK_ = inst_66139;
var env__$1 = inst_66145;
var e = inst_66110;
var s = inst_66111;
var map__66112 = inst_66137;
var resolver = inst_66137;
var map__66088 = inst_66109;
return ((function (input,temp__5733__auto__,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,map__66088,inst_66139,inst_66145,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66151,inst_66137,inst_66144,inst_66147,inst_66148,inst_66149,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence){
return (function (){
var c__52131__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto____$1,input,temp__5733__auto__,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,map__66088,inst_66139,inst_66145,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66151,inst_66137,inst_66144,inst_66147,inst_66148,inst_66149,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto____$1,input,temp__5733__auto__,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,map__66088,inst_66139,inst_66145,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66151,inst_66137,inst_66144,inst_66147,inst_66148,inst_66149,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence){
return (function (state_66324){
var state_val_66325 = (state_66324[(1)]);
if((state_val_66325 === (7))){
var inst_66276 = (state_66324[(2)]);
var state_66324__$1 = state_66324;
if(cljs.core.truth_(inst_66276)){
var statearr_66326_69365 = state_66324__$1;
(statearr_66326_69365[(1)] = (8));

} else {
var statearr_66327_69366 = state_66324__$1;
(statearr_66327_69366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (1))){
var state_66324__$1 = state_66324;
var statearr_66328_69368 = state_66324__$1;
(statearr_66328_69368[(2)] = null);

(statearr_66328_69368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66324,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_66324__$1 = state_66324;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_66329_69369 = state_66324__$1;
(statearr_66329_69369[(1)] = (5));

} else {
var statearr_66330_69370 = state_66324__$1;
(statearr_66330_69370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (15))){
var inst_66297 = (state_66324[(2)]);
var inst_66298 = com.wsscode.common.async_cljs.throw_err(inst_66297);
var state_66324__$1 = state_66324;
var statearr_66331_69371 = state_66324__$1;
(statearr_66331_69371[(2)] = inst_66298);

(statearr_66331_69371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (13))){
var inst_66293 = (state_66324[(7)]);
var state_66324__$1 = state_66324;
var statearr_66332_69372 = state_66324__$1;
(statearr_66332_69372[(2)] = inst_66293);

(statearr_66332_69372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (6))){
var state_66324__$1 = state_66324;
var statearr_66333_69373 = state_66324__$1;
(statearr_66333_69373[(2)] = batch_QMARK_);

(statearr_66333_69373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (17))){
var inst_66310 = (state_66324[(8)]);
var state_66324__$1 = state_66324;
var statearr_66334_69374 = state_66324__$1;
(statearr_66334_69374[(2)] = inst_66310);

(statearr_66334_69374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (3))){
var inst_66269 = (state_66324[(2)]);
var state_66324__$1 = state_66324;
var statearr_66335_69375 = state_66324__$1;
(statearr_66335_69375[(2)] = inst_66269);


cljs.core.async.impl.ioc_helpers.process_exception(state_66324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (12))){
var inst_66293 = (state_66324[(7)]);
var state_66324__$1 = state_66324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66324__$1,(15),inst_66293);
} else {
if((state_val_66325 === (2))){
var inst_66322 = (state_66324[(2)]);
var state_66324__$1 = state_66324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66324__$1,inst_66322);
} else {
if((state_val_66325 === (19))){
var inst_66314 = (state_66324[(2)]);
var inst_66315 = com.wsscode.common.async_cljs.throw_err(inst_66314);
var state_66324__$1 = state_66324;
var statearr_66339_69377 = state_66324__$1;
(statearr_66339_69377[(2)] = inst_66315);

(statearr_66339_69377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (11))){
var inst_66282 = (state_66324[(9)]);
var inst_66293 = (state_66324[(7)]);
var inst_66288 = (state_66324[(10)]);
var inst_66286 = (state_66324[(2)]);
var inst_66287 = com.wsscode.common.async_cljs.throw_err(inst_66286);
var inst_66288__$1 = cljs.core.filterv(inst_66282,inst_66287);
var inst_66293__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,inst_66288__$1);
var inst_66294 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66293__$1);
var state_66324__$1 = (function (){var statearr_66340 = state_66324;
(statearr_66340[(7)] = inst_66293__$1);

(statearr_66340[(10)] = inst_66288__$1);

return statearr_66340;
})();
if(inst_66294){
var statearr_66341_69382 = state_66324__$1;
(statearr_66341_69382[(1)] = (12));

} else {
var statearr_66342_69383 = state_66324__$1;
(statearr_66342_69383[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (9))){
var inst_66310 = (state_66324[(8)]);
var inst_66310__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,e);
var inst_66311 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66310__$1);
var state_66324__$1 = (function (){var statearr_66343 = state_66324;
(statearr_66343[(8)] = inst_66310__$1);

return statearr_66343;
})();
if(inst_66311){
var statearr_66344_69384 = state_66324__$1;
(statearr_66344_69384[(1)] = (16));

} else {
var statearr_66346_69385 = state_66324__$1;
(statearr_66346_69385[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (5))){
var state_66324__$1 = state_66324;
var statearr_66347_69386 = state_66324__$1;
(statearr_66347_69386[(2)] = processing_sequence);

(statearr_66347_69386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (14))){
var inst_66288 = (state_66324[(10)]);
var inst_66305 = (state_66324[(2)]);
var inst_66306 = cljs.core.zipmap(inst_66288,inst_66305);
var inst_66307 = com.wsscode.pathom.connect.cache_batch(env__$1,s,inst_66306);
var inst_66308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66306,e);
var state_66324__$1 = (function (){var statearr_66348 = state_66324;
(statearr_66348[(11)] = inst_66307);

return statearr_66348;
})();
var statearr_66349_69388 = state_66324__$1;
(statearr_66349_69388[(2)] = inst_66308);

(statearr_66349_69388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (16))){
var inst_66310 = (state_66324[(8)]);
var state_66324__$1 = state_66324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66324__$1,(19),inst_66310);
} else {
if((state_val_66325 === (10))){
var inst_66320 = (state_66324[(2)]);
var state_66324__$1 = state_66324;
var statearr_66350_69390 = state_66324__$1;
(statearr_66350_69390[(2)] = inst_66320);


cljs.core.async.impl.ioc_helpers.process_exception(state_66324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (18))){
var inst_66318 = (state_66324[(2)]);
var state_66324__$1 = state_66324;
var statearr_66351_69391 = state_66324__$1;
(statearr_66351_69391[(2)] = inst_66318);

(statearr_66351_69391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (8))){
var inst_66282 = (function (){return ((function (state_val_66325,c__52131__auto____$1,input,temp__5733__auto__,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,map__66088,inst_66139,inst_66145,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66151,inst_66137,inst_66144,inst_66147,inst_66148,inst_66149,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence){
return (function (p1__66067_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__66067_SHARP_,input);
});
;})(state_val_66325,c__52131__auto____$1,input,temp__5733__auto__,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,map__66088,inst_66139,inst_66145,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66151,inst_66137,inst_66144,inst_66147,inst_66148,inst_66149,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence))
})();
var inst_66283 = (function (){return ((function (inst_66282,state_val_66325,c__52131__auto____$1,input,temp__5733__auto__,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,map__66088,inst_66139,inst_66145,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66151,inst_66137,inst_66144,inst_66147,inst_66148,inst_66149,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence){
return (function (p1__66066_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__66066_SHARP_,input);
});
;})(inst_66282,state_val_66325,c__52131__auto____$1,input,temp__5733__auto__,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,map__66088,inst_66139,inst_66145,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66151,inst_66137,inst_66144,inst_66147,inst_66148,inst_66149,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence))
})();
var inst_66284 = com.wsscode.pathom.connect.map_async_serial(inst_66283,processing_sequence);
var state_66324__$1 = (function (){var statearr_66352 = state_66324;
(statearr_66352[(9)] = inst_66282);

return statearr_66352;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66324__$1,(11),inst_66284);
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
}
}
});})(c__52131__auto____$1,input,temp__5733__auto__,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,map__66088,inst_66139,inst_66145,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66151,inst_66137,inst_66144,inst_66147,inst_66148,inst_66149,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence))
;
return ((function (switch__52035__auto__,c__52131__auto____$1,input,temp__5733__auto__,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,map__66088,inst_66139,inst_66145,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66151,inst_66137,inst_66144,inst_66147,inst_66148,inst_66149,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto____0 = (function (){
var statearr_66353 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66353[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto__);

(statearr_66353[(1)] = (1));

return statearr_66353;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto____1 = (function (state_66324){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_66324);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e66354){if((e66354 instanceof Object)){
var ex__52039__auto__ = e66354;
var statearr_66355_69400 = state_66324;
(statearr_66355_69400[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69401 = state_66324;
state_66324 = G__69401;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto__ = function(state_66324){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto____1.call(this,state_66324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto____$1,input,temp__5733__auto__,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,map__66088,inst_66139,inst_66145,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66151,inst_66137,inst_66144,inst_66147,inst_66148,inst_66149,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence))
})();
var state__52133__auto__ = (function (){var statearr_66356 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_66356[(6)] = c__52131__auto____$1);

return statearr_66356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto____$1,input,temp__5733__auto__,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,map__66088,inst_66139,inst_66145,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66151,inst_66137,inst_66144,inst_66147,inst_66148,inst_66149,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence))
);

return c__52131__auto____$1;
});
;})(input,temp__5733__auto__,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,map__66088,inst_66139,inst_66145,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66151,inst_66137,inst_66144,inst_66147,inst_66148,inst_66149,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence))
})();
var inst_66151__$1 = com.wsscode.pathom.core.cached_async(inst_66145,inst_66149,inst_66150);
var inst_66152 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66151__$1);
var state_66245__$1 = (function (){var statearr_66357 = state_66245;
(statearr_66357[(15)] = inst_66151__$1);

return statearr_66357;
})();
if(inst_66152){
var statearr_66358_69403 = state_66245__$1;
(statearr_66358_69403[(1)] = (30));

} else {
var statearr_66359_69404 = state_66245__$1;
(statearr_66359_69404[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (1))){
var state_66245__$1 = state_66245;
var statearr_66360_69405 = state_66245__$1;
(statearr_66360_69405[(2)] = null);

(statearr_66360_69405[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (24))){
var inst_66113 = (state_66245[(18)]);
var inst_66134 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_66113);
var state_66245__$1 = state_66245;
var statearr_66361_69411 = state_66245__$1;
(statearr_66361_69411[(2)] = inst_66134);

(statearr_66361_69411[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (55))){
var state_66245__$1 = state_66245;
var statearr_66362_69413 = state_66245__$1;
(statearr_66362_69413[(2)] = null);

(statearr_66362_69413[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (39))){
var state_66245__$1 = state_66245;
var statearr_66363_69414 = state_66245__$1;
(statearr_66363_69414[(2)] = null);

(statearr_66363_69414[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (46))){
var inst_66205 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
var statearr_66364_69415 = state_66245__$1;
(statearr_66364_69415[(2)] = inst_66205);

(statearr_66364_69415[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66245,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_66083 = com.wsscode.pathom.connect.async_pick_resolver(env);
var state_66245__$1 = state_66245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66245__$1,(5),inst_66083);
} else {
if((state_val_66250 === (54))){
var inst_66172 = (state_66245[(19)]);
var inst_66193 = (state_66245[(20)]);
var inst_66217 = (state_66245[(7)]);
var inst_66216 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_66193);
var inst_66217__$1 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_66216,inst_66172);
var inst_66218 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66217__$1);
var state_66245__$1 = (function (){var statearr_66365 = state_66245;
(statearr_66365[(7)] = inst_66217__$1);

return statearr_66365;
})();
if(inst_66218){
var statearr_66366_69419 = state_66245__$1;
(statearr_66366_69419[(1)] = (57));

} else {
var statearr_66367_69420 = state_66245__$1;
(statearr_66367_69420[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (15))){
var inst_66086 = (state_66245[(14)]);
var inst_66106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_66086);
var state_66245__$1 = state_66245;
var statearr_66368_69422 = state_66245__$1;
(statearr_66368_69422[(2)] = inst_66106);

(statearr_66368_69422[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (48))){
var inst_66173 = (state_66245[(21)]);
var inst_66209 = cljs.core.contains_QMARK_(inst_66173,k);
var state_66245__$1 = state_66245;
if(inst_66209){
var statearr_66369_69423 = state_66245__$1;
(statearr_66369_69423[(1)] = (51));

} else {
var statearr_66370_69424 = state_66245__$1;
(statearr_66370_69424[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (50))){
var inst_66230 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
var statearr_66371_69425 = state_66245__$1;
(statearr_66371_69425[(2)] = inst_66230);

(statearr_66371_69425[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (21))){
var state_66245__$1 = state_66245;
var statearr_66372_69428 = state_66245__$1;
(statearr_66372_69428[(2)] = true);

(statearr_66372_69428[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (31))){
var inst_66151 = (state_66245[(15)]);
var state_66245__$1 = state_66245;
var statearr_66373_69429 = state_66245__$1;
(statearr_66373_69429[(2)] = inst_66151);

(statearr_66373_69429[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (32))){
var inst_66159 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
var statearr_66374_69430 = state_66245__$1;
(statearr_66374_69430[(2)] = inst_66159);

(statearr_66374_69430[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (40))){
var inst_66139 = (state_66245[(8)]);
var inst_66145 = (state_66245[(9)]);
var inst_66172 = (state_66245[(19)]);
var inst_66109 = (state_66245[(10)]);
var inst_66110 = (state_66245[(11)]);
var inst_66111 = (state_66245[(12)]);
var inst_66138 = (state_66245[(13)]);
var inst_66086 = (state_66245[(14)]);
var inst_66173 = (state_66245[(21)]);
var inst_66193 = (state_66245[(20)]);
var inst_66137 = (state_66245[(16)]);
var inst_66144 = (state_66245[(17)]);
var inst_66190 = (state_66245[(2)]);
var inst_66191 = (function (){var input = inst_66144;
var temp__5733__auto__ = inst_66086;
var response = inst_66173;
var cache_QMARK_ = inst_66138;
var batch_QMARK_ = inst_66139;
var env__$1 = inst_66145;
var e = inst_66110;
var s = inst_66111;
var map__66112 = inst_66137;
var resolver = inst_66137;
var env_SINGLEQUOTE_ = inst_66172;
var map__66088 = inst_66109;
return ((function (input,temp__5733__auto__,response,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,env_SINGLEQUOTE_,map__66088,inst_66139,inst_66145,inst_66172,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66173,inst_66193,inst_66137,inst_66144,inst_66190,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence){
return (function (p1__66068_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__66068_SHARP_], 0));
});
;})(input,temp__5733__auto__,response,cache_QMARK_,batch_QMARK_,env__$1,e,s,map__66112,resolver,env_SINGLEQUOTE_,map__66088,inst_66139,inst_66145,inst_66172,inst_66109,inst_66110,inst_66111,inst_66138,inst_66086,inst_66173,inst_66193,inst_66137,inst_66144,inst_66190,state_val_66250,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence))
})();
var inst_66192 = com.wsscode.pathom.core.swap_entity_BANG_(inst_66172,inst_66191);
var inst_66193__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66173,k);
var inst_66194 = cljs.core.sequential_QMARK_(inst_66193__$1);
var state_66245__$1 = (function (){var statearr_66376 = state_66245;
(statearr_66376[(20)] = inst_66193__$1);

(statearr_66376[(22)] = inst_66192);

(statearr_66376[(23)] = inst_66190);

return statearr_66376;
})();
if(inst_66194){
var statearr_66377_69436 = state_66245__$1;
(statearr_66377_69436[(1)] = (41));

} else {
var statearr_66378_69437 = state_66245__$1;
(statearr_66378_69437[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (56))){
var inst_66228 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
var statearr_66379_69439 = state_66245__$1;
(statearr_66379_69439[(2)] = inst_66228);

(statearr_66379_69439[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (33))){
var inst_66155 = (state_66245[(2)]);
var inst_66156 = com.wsscode.common.async_cljs.throw_err(inst_66155);
var state_66245__$1 = state_66245;
var statearr_66380_69440 = state_66245__$1;
(statearr_66380_69440[(2)] = inst_66156);

(statearr_66380_69440[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (13))){
var state_66245__$1 = state_66245;
var statearr_66381_69441 = state_66245__$1;
(statearr_66381_69441[(2)] = false);

(statearr_66381_69441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (22))){
var state_66245__$1 = state_66245;
var statearr_66382_69442 = state_66245__$1;
(statearr_66382_69442[(2)] = false);

(statearr_66382_69442[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (36))){
var inst_66169 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
var statearr_66383_69443 = state_66245__$1;
(statearr_66383_69443[(2)] = inst_66169);

(statearr_66383_69443[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (41))){
var inst_66172 = (state_66245[(19)]);
var inst_66193 = (state_66245[(20)]);
var inst_66197 = (state_66245[(24)]);
var inst_66196 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,inst_66193);
var inst_66197__$1 = com.wsscode.pathom.core.join_seq(inst_66172,inst_66196);
var inst_66198 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66197__$1);
var state_66245__$1 = (function (){var statearr_66384 = state_66245;
(statearr_66384[(24)] = inst_66197__$1);

return statearr_66384;
})();
if(inst_66198){
var statearr_66385_69444 = state_66245__$1;
(statearr_66385_69444[(1)] = (44));

} else {
var statearr_66386_69445 = state_66245__$1;
(statearr_66386_69445[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (43))){
var inst_66232 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
var statearr_66387_69446 = state_66245__$1;
(statearr_66387_69446[(2)] = inst_66232);

(statearr_66387_69446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (29))){
var inst_66145 = (state_66245[(9)]);
var inst_66173 = (state_66245[(21)]);
var inst_66171 = (state_66245[(2)]);
var inst_66172 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_66171,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_66145);
var inst_66173__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_66171,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_66174 = (inst_66173__$1 == null);
var inst_66179 = cljs.core.map_QMARK_(inst_66173__$1);
var inst_66180 = ((inst_66174) || (inst_66179));
var inst_66181 = cljs.core.not(inst_66180);
var state_66245__$1 = (function (){var statearr_66388 = state_66245;
(statearr_66388[(19)] = inst_66172);

(statearr_66388[(21)] = inst_66173__$1);

return statearr_66388;
})();
if(inst_66181){
var statearr_66389_69447 = state_66245__$1;
(statearr_66389_69447[(1)] = (38));

} else {
var statearr_66390_69448 = state_66245__$1;
(statearr_66390_69448[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (44))){
var inst_66197 = (state_66245[(24)]);
var state_66245__$1 = state_66245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66245__$1,(47),inst_66197);
} else {
if((state_val_66250 === (6))){
var inst_66086 = (state_66245[(14)]);
var inst_66090 = (inst_66086 == null);
var inst_66091 = cljs.core.not(inst_66090);
var state_66245__$1 = state_66245;
if(inst_66091){
var statearr_66391_69449 = state_66245__$1;
(statearr_66391_69449[(1)] = (9));

} else {
var statearr_66392_69450 = state_66245__$1;
(statearr_66392_69450[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (28))){
var inst_66145 = (state_66245[(9)]);
var inst_66161 = (state_66245[(25)]);
var inst_66110 = (state_66245[(11)]);
var inst_66161__$1 = com.wsscode.pathom.connect.call_resolver(inst_66145,inst_66110);
var inst_66162 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66161__$1);
var state_66245__$1 = (function (){var statearr_66393 = state_66245;
(statearr_66393[(25)] = inst_66161__$1);

return statearr_66393;
})();
if(inst_66162){
var statearr_66394_69451 = state_66245__$1;
(statearr_66394_69451[(1)] = (34));

} else {
var statearr_66395_69453 = state_66245__$1;
(statearr_66395_69453[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (51))){
var inst_66193 = (state_66245[(20)]);
var state_66245__$1 = state_66245;
var statearr_66396_69454 = state_66245__$1;
(statearr_66396_69454[(2)] = inst_66193);

(statearr_66396_69454[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (25))){
var inst_66113 = (state_66245[(18)]);
var state_66245__$1 = state_66245;
var statearr_66397_69455 = state_66245__$1;
(statearr_66397_69455[(2)] = inst_66113);

(statearr_66397_69455[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (34))){
var inst_66161 = (state_66245[(25)]);
var state_66245__$1 = state_66245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66245__$1,(37),inst_66161);
} else {
if((state_val_66250 === (17))){
var inst_66109 = (state_66245[(10)]);
var inst_66111 = (state_66245[(12)]);
var inst_66113 = (state_66245[(18)]);
var inst_66109__$1 = (state_66245[(2)]);
var inst_66110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66109__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_66111__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66109__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var inst_66113__$1 = com.wsscode.pathom.connect.resolver_data(env,inst_66111__$1);
var inst_66118 = (inst_66113__$1 == null);
var inst_66119 = cljs.core.not(inst_66118);
var state_66245__$1 = (function (){var statearr_66398 = state_66245;
(statearr_66398[(10)] = inst_66109__$1);

(statearr_66398[(11)] = inst_66110);

(statearr_66398[(12)] = inst_66111__$1);

(statearr_66398[(18)] = inst_66113__$1);

return statearr_66398;
})();
if(inst_66119){
var statearr_66399_69460 = state_66245__$1;
(statearr_66399_69460[(1)] = (18));

} else {
var statearr_66400_69461 = state_66245__$1;
(statearr_66400_69461[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (3))){
var inst_66075 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
var statearr_66401_69462 = state_66245__$1;
(statearr_66401_69462[(2)] = inst_66075);


cljs.core.async.impl.ioc_helpers.process_exception(state_66245__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (12))){
var state_66245__$1 = state_66245;
var statearr_66402_69463 = state_66245__$1;
(statearr_66402_69463[(2)] = true);

(statearr_66402_69463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (2))){
var inst_66243 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66245__$1,inst_66243);
} else {
if((state_val_66250 === (23))){
var inst_66129 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
var statearr_66403_69466 = state_66245__$1;
(statearr_66403_69466[(2)] = inst_66129);

(statearr_66403_69466[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (47))){
var inst_66201 = (state_66245[(2)]);
var inst_66202 = com.wsscode.common.async_cljs.throw_err(inst_66201);
var state_66245__$1 = state_66245;
var statearr_66404_69468 = state_66245__$1;
(statearr_66404_69468[(2)] = inst_66202);

(statearr_66404_69468[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (35))){
var inst_66161 = (state_66245[(25)]);
var state_66245__$1 = state_66245;
var statearr_66405_69469 = state_66245__$1;
(statearr_66405_69469[(2)] = inst_66161);

(statearr_66405_69469[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (19))){
var state_66245__$1 = state_66245;
var statearr_66406_69471 = state_66245__$1;
(statearr_66406_69471[(2)] = false);

(statearr_66406_69471[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (57))){
var inst_66217 = (state_66245[(7)]);
var state_66245__$1 = state_66245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66245__$1,(60),inst_66217);
} else {
if((state_val_66250 === (11))){
var inst_66104 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
if(cljs.core.truth_(inst_66104)){
var statearr_66407_69474 = state_66245__$1;
(statearr_66407_69474[(1)] = (15));

} else {
var statearr_66408_69475 = state_66245__$1;
(statearr_66408_69475[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (9))){
var inst_66086 = (state_66245[(14)]);
var inst_66093 = inst_66086.cljs$lang$protocol_mask$partition0$;
var inst_66094 = (inst_66093 & (64));
var inst_66095 = inst_66086.cljs$core$ISeq$;
var inst_66096 = (cljs.core.PROTOCOL_SENTINEL === inst_66095);
var inst_66097 = ((inst_66094) || (inst_66096));
var state_66245__$1 = state_66245;
if(cljs.core.truth_(inst_66097)){
var statearr_66409_69478 = state_66245__$1;
(statearr_66409_69478[(1)] = (12));

} else {
var statearr_66410_69479 = state_66245__$1;
(statearr_66410_69479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (5))){
var inst_66086 = (state_66245[(14)]);
var inst_66085 = (state_66245[(2)]);
var inst_66086__$1 = com.wsscode.common.async_cljs.throw_err(inst_66085);
var state_66245__$1 = (function (){var statearr_66411 = state_66245;
(statearr_66411[(14)] = inst_66086__$1);

return statearr_66411;
})();
if(cljs.core.truth_(inst_66086__$1)){
var statearr_66412_69480 = state_66245__$1;
(statearr_66412_69480[(1)] = (6));

} else {
var statearr_66413_69481 = state_66245__$1;
(statearr_66413_69481[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (14))){
var inst_66101 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
var statearr_66414_69482 = state_66245__$1;
(statearr_66414_69482[(2)] = inst_66101);

(statearr_66414_69482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (45))){
var inst_66197 = (state_66245[(24)]);
var state_66245__$1 = state_66245;
var statearr_66415_69483 = state_66245__$1;
(statearr_66415_69483[(2)] = inst_66197);

(statearr_66415_69483[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (53))){
var inst_66213 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
var statearr_66416_69484 = state_66245__$1;
(statearr_66416_69484[(2)] = inst_66213);

(statearr_66416_69484[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (26))){
var inst_66138 = (state_66245[(13)]);
var inst_66137 = (state_66245[(16)]);
var inst_66137__$1 = (state_66245[(2)]);
var inst_66138__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_66137__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_66139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66137__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_66144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66137__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_66145 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_66137__$1);
var state_66245__$1 = (function (){var statearr_66417 = state_66245;
(statearr_66417[(8)] = inst_66139);

(statearr_66417[(9)] = inst_66145);

(statearr_66417[(13)] = inst_66138__$1);

(statearr_66417[(16)] = inst_66137__$1);

(statearr_66417[(17)] = inst_66144);

return statearr_66417;
})();
if(cljs.core.truth_(inst_66138__$1)){
var statearr_66418_69490 = state_66245__$1;
(statearr_66418_69490[(1)] = (27));

} else {
var statearr_66419_69491 = state_66245__$1;
(statearr_66419_69491[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (16))){
var inst_66086 = (state_66245[(14)]);
var state_66245__$1 = state_66245;
var statearr_66420_69492 = state_66245__$1;
(statearr_66420_69492[(2)] = inst_66086);

(statearr_66420_69492[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (38))){
var inst_66111 = (state_66245[(12)]);
var inst_66173 = (state_66245[(21)]);
var inst_66183 = [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"response","response",-1068424192)];
var inst_66184 = [inst_66111,inst_66173];
var inst_66185 = cljs.core.PersistentHashMap.fromArrays(inst_66183,inst_66184);
var inst_66186 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from reader must be a map.",inst_66185);
var inst_66187 = (function(){throw inst_66186})();
var state_66245__$1 = state_66245;
var statearr_66421_69494 = state_66245__$1;
(statearr_66421_69494[(2)] = inst_66187);

(statearr_66421_69494[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (30))){
var inst_66151 = (state_66245[(15)]);
var state_66245__$1 = state_66245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66245__$1,(33),inst_66151);
} else {
if((state_val_66250 === (10))){
var state_66245__$1 = state_66245;
var statearr_66422_69501 = state_66245__$1;
(statearr_66422_69501[(2)] = false);

(statearr_66422_69501[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (18))){
var inst_66113 = (state_66245[(18)]);
var inst_66121 = inst_66113.cljs$lang$protocol_mask$partition0$;
var inst_66122 = (inst_66121 & (64));
var inst_66123 = inst_66113.cljs$core$ISeq$;
var inst_66124 = (cljs.core.PROTOCOL_SENTINEL === inst_66123);
var inst_66125 = ((inst_66122) || (inst_66124));
var state_66245__$1 = state_66245;
if(cljs.core.truth_(inst_66125)){
var statearr_66423_69502 = state_66245__$1;
(statearr_66423_69502[(1)] = (21));

} else {
var statearr_66424_69503 = state_66245__$1;
(statearr_66424_69503[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (52))){
var state_66245__$1 = state_66245;
var statearr_66425_69505 = state_66245__$1;
(statearr_66425_69505[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_66425_69505[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (42))){
var inst_66193 = (state_66245[(20)]);
var inst_66207 = (inst_66193 == null);
var state_66245__$1 = state_66245;
if(cljs.core.truth_(inst_66207)){
var statearr_66426_69506 = state_66245__$1;
(statearr_66426_69506[(1)] = (48));

} else {
var statearr_66427_69507 = state_66245__$1;
(statearr_66427_69507[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (37))){
var inst_66165 = (state_66245[(2)]);
var inst_66166 = com.wsscode.common.async_cljs.throw_err(inst_66165);
var state_66245__$1 = state_66245;
var statearr_66428_69508 = state_66245__$1;
(statearr_66428_69508[(2)] = inst_66166);

(statearr_66428_69508[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (8))){
var inst_66241 = (state_66245[(2)]);
var state_66245__$1 = state_66245;
var statearr_66429_69509 = state_66245__$1;
(statearr_66429_69509[(2)] = inst_66241);


cljs.core.async.impl.ioc_helpers.process_exception(state_66245__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (49))){
var state_66245__$1 = state_66245;
var statearr_66430_69510 = state_66245__$1;
(statearr_66430_69510[(1)] = (54));



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
});})(c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence))
;
return ((function (switch__52035__auto__,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto____0 = (function (){
var statearr_66432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66432[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto__);

(statearr_66432[(1)] = (1));

return statearr_66432;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto____1 = (function (state_66245){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_66245);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e66433){if((e66433 instanceof Object)){
var ex__52039__auto__ = e66433;
var statearr_66434_69515 = state_66245;
(statearr_66434_69515[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69523 = state_66245;
state_66245 = G__69523;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto__ = function(state_66245){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto____1.call(this,state_66245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence))
})();
var state__52133__auto__ = (function (){var statearr_66435 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_66435[(6)] = c__52131__auto__);

return statearr_66435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,k,p,map__66073,map__66073__$1,env,indexes,processing_sequence))
);

return c__52131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.async_read_cache_read = (function com$wsscode$pathom$connect$async_read_cache_read(env,resolver_sym,e,batch_QMARK_,processing_sequence,trace_data,input){
var params = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_async(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,params], null),((function (params){
return (function (){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,params){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,params){
return (function (state_66533){
var state_val_66534 = (state_66533[(1)]);
if((state_val_66534 === (7))){
var inst_66445 = (state_66533[(2)]);
var state_66533__$1 = state_66533;
if(cljs.core.truth_(inst_66445)){
var statearr_66535_69525 = state_66533__$1;
(statearr_66535_69525[(1)] = (8));

} else {
var statearr_66536_69526 = state_66533__$1;
(statearr_66536_69526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (20))){
var inst_66499 = (state_66533[(7)]);
var state_66533__$1 = state_66533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66533__$1,(23),inst_66499);
} else {
if((state_val_66534 === (27))){
var inst_66523 = (state_66533[(2)]);
var inst_66524 = com.wsscode.common.async_cljs.throw_err(inst_66523);
var state_66533__$1 = state_66533;
var statearr_66539_69532 = state_66533__$1;
(statearr_66539_69532[(2)] = inst_66524);

(statearr_66539_69532[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (1))){
var state_66533__$1 = state_66533;
var statearr_66544_69533 = state_66533__$1;
(statearr_66544_69533[(2)] = null);

(statearr_66544_69533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (24))){
var inst_66519 = (state_66533[(8)]);
var state_66533__$1 = state_66533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66533__$1,(27),inst_66519);
} else {
if((state_val_66534 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66533,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_66533__$1 = state_66533;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_66547_69534 = state_66533__$1;
(statearr_66547_69534[(1)] = (5));

} else {
var statearr_66548_69535 = state_66533__$1;
(statearr_66548_69535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (15))){
var inst_66465 = (state_66533[(9)]);
var state_66533__$1 = state_66533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66533__$1,(18),inst_66465);
} else {
if((state_val_66534 === (21))){
var inst_66499 = (state_66533[(7)]);
var state_66533__$1 = state_66533;
var statearr_66549_69537 = state_66533__$1;
(statearr_66549_69537[(2)] = inst_66499);

(statearr_66549_69537[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (13))){
var inst_66517 = (state_66533[(2)]);
var state_66533__$1 = state_66533;
var statearr_66550_69540 = state_66533__$1;
(statearr_66550_69540[(2)] = inst_66517);

(statearr_66550_69540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (22))){
var inst_66494 = (state_66533[(10)]);
var inst_66507 = (state_66533[(2)]);
var inst_66508 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_66509 = cljs.core.count(inst_66507);
var inst_66510 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_66509];
var inst_66511 = cljs.core.PersistentHashMap.fromArrays(inst_66508,inst_66510);
var inst_66512 = com.wsscode.pathom.trace.trace(env,inst_66511);
var inst_66513 = cljs.core.zipmap(inst_66494,inst_66507);
var inst_66514 = com.wsscode.pathom.connect.cache_batch(env,resolver_sym,inst_66513);
var inst_66515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66513,e);
var state_66533__$1 = (function (){var statearr_66551 = state_66533;
(statearr_66551[(11)] = inst_66514);

(statearr_66551[(12)] = inst_66512);

return statearr_66551;
})();
var statearr_66552_69542 = state_66533__$1;
(statearr_66552_69542[(2)] = inst_66515);

(statearr_66552_69542[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (6))){
var state_66533__$1 = state_66533;
var statearr_66553_69543 = state_66533__$1;
(statearr_66553_69543[(2)] = batch_QMARK_);

(statearr_66553_69543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (25))){
var inst_66519 = (state_66533[(8)]);
var state_66533__$1 = state_66533;
var statearr_66554_69546 = state_66533__$1;
(statearr_66554_69546[(2)] = inst_66519);

(statearr_66554_69546[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (17))){
var inst_66450 = (state_66533[(13)]);
var inst_66460 = (state_66533[(14)]);
var inst_66473 = (state_66533[(2)]);
var inst_66474 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_66475 = cljs.core.count(inst_66473);
var inst_66476 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_66475];
var inst_66477 = cljs.core.PersistentHashMap.fromArrays(inst_66474,inst_66476);
var inst_66478 = com.wsscode.pathom.trace.trace(env,inst_66477);
var inst_66479 = cljs.core.zipmap(inst_66460,inst_66473);
var inst_66480 = com.wsscode.pathom.connect.cache_batch(env,resolver_sym,inst_66479);
var inst_66481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66479,e);
var inst_66482 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_66483 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_66450,inst_66482);
var state_66533__$1 = (function (){var statearr_66555 = state_66533;
(statearr_66555[(15)] = inst_66483);

(statearr_66555[(16)] = inst_66478);

(statearr_66555[(17)] = inst_66480);

return statearr_66555;
})();
var statearr_66556_69549 = state_66533__$1;
(statearr_66556_69549[(2)] = inst_66481);

(statearr_66556_69549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (3))){
var inst_66438 = (state_66533[(2)]);
var state_66533__$1 = state_66533;
var statearr_66557_69550 = state_66533__$1;
(statearr_66557_69550[(2)] = inst_66438);


cljs.core.async.impl.ioc_helpers.process_exception(state_66533__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (12))){
var inst_66485 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_66486 = com.wsscode.pathom.trace.trace(env,inst_66485);
var inst_66487 = (function (){var _ = inst_66486;
return ((function (_,inst_66485,inst_66486,state_val_66534,c__52131__auto__,params){
return (function (p1__66437_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__66437_SHARP_,input);
});
;})(_,inst_66485,inst_66486,state_val_66534,c__52131__auto__,params))
})();
var inst_66488 = (function (){var _ = inst_66486;
return ((function (_,inst_66485,inst_66486,inst_66487,state_val_66534,c__52131__auto__,params){
return (function (p1__66436_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__66436_SHARP_,input);
});
;})(_,inst_66485,inst_66486,inst_66487,state_val_66534,c__52131__auto__,params))
})();
var inst_66489 = com.wsscode.pathom.connect.map_async_serial(inst_66488,processing_sequence);
var state_66533__$1 = (function (){var statearr_66558 = state_66533;
(statearr_66558[(18)] = inst_66487);

return statearr_66558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66533__$1,(19),inst_66489);
} else {
if((state_val_66534 === (2))){
var inst_66531 = (state_66533[(2)]);
var state_66533__$1 = state_66533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66533__$1,inst_66531);
} else {
if((state_val_66534 === (23))){
var inst_66503 = (state_66533[(2)]);
var inst_66504 = com.wsscode.common.async_cljs.throw_err(inst_66503);
var state_66533__$1 = state_66533;
var statearr_66559_69555 = state_66533__$1;
(statearr_66559_69555[(2)] = inst_66504);

(statearr_66559_69555[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (19))){
var inst_66487 = (state_66533[(18)]);
var inst_66494 = (state_66533[(10)]);
var inst_66499 = (state_66533[(7)]);
var inst_66491 = (state_66533[(2)]);
var inst_66492 = com.wsscode.common.async_cljs.throw_err(inst_66491);
var inst_66493 = cljs.core.filterv(inst_66487,inst_66492);
var inst_66494__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_66493);
var inst_66495 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_66496 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_66494__$1];
var inst_66497 = cljs.core.PersistentHashMap.fromArrays(inst_66495,inst_66496);
var inst_66498 = com.wsscode.pathom.trace.trace(env,inst_66497);
var inst_66499__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_66494__$1);
var inst_66500 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66499__$1);
var state_66533__$1 = (function (){var statearr_66560 = state_66533;
(statearr_66560[(10)] = inst_66494__$1);

(statearr_66560[(19)] = inst_66498);

(statearr_66560[(7)] = inst_66499__$1);

return statearr_66560;
})();
if(inst_66500){
var statearr_66561_69560 = state_66533__$1;
(statearr_66561_69560[(1)] = (20));

} else {
var statearr_66562_69561 = state_66533__$1;
(statearr_66562_69561[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (11))){
var inst_66450 = (state_66533[(13)]);
var inst_66449 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_66450__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_66449);
var inst_66451 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_66452 = com.wsscode.pathom.trace.trace(env,inst_66451);
var inst_66453 = (function (){var trace_id__23022__auto__ = inst_66450__$1;
var _ = inst_66452;
return ((function (trace_id__23022__auto__,_,inst_66450,inst_66449,inst_66450__$1,inst_66451,inst_66452,state_val_66534,c__52131__auto__,params){
return (function (p1__66437_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__66437_SHARP_,input);
});
;})(trace_id__23022__auto__,_,inst_66450,inst_66449,inst_66450__$1,inst_66451,inst_66452,state_val_66534,c__52131__auto__,params))
})();
var inst_66454 = (function (){var trace_id__23022__auto__ = inst_66450__$1;
var _ = inst_66452;
return ((function (trace_id__23022__auto__,_,inst_66450,inst_66449,inst_66450__$1,inst_66451,inst_66452,inst_66453,state_val_66534,c__52131__auto__,params){
return (function (p1__66436_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__66436_SHARP_,input);
});
;})(trace_id__23022__auto__,_,inst_66450,inst_66449,inst_66450__$1,inst_66451,inst_66452,inst_66453,state_val_66534,c__52131__auto__,params))
})();
var inst_66455 = com.wsscode.pathom.connect.map_async_serial(inst_66454,processing_sequence);
var state_66533__$1 = (function (){var statearr_66563 = state_66533;
(statearr_66563[(13)] = inst_66450__$1);

(statearr_66563[(20)] = inst_66453);

return statearr_66563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66533__$1,(14),inst_66455);
} else {
if((state_val_66534 === (9))){
var inst_66519 = (state_66533[(8)]);
var inst_66519__$1 = com.wsscode.pathom.connect.call_resolver(env,e);
var inst_66520 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66519__$1);
var state_66533__$1 = (function (){var statearr_66564 = state_66533;
(statearr_66564[(8)] = inst_66519__$1);

return statearr_66564;
})();
if(inst_66520){
var statearr_66565_69580 = state_66533__$1;
(statearr_66565_69580[(1)] = (24));

} else {
var statearr_66566_69581 = state_66533__$1;
(statearr_66566_69581[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (5))){
var state_66533__$1 = state_66533;
var statearr_66567_69582 = state_66533__$1;
(statearr_66567_69582[(2)] = processing_sequence);

(statearr_66567_69582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (14))){
var inst_66465 = (state_66533[(9)]);
var inst_66453 = (state_66533[(20)]);
var inst_66460 = (state_66533[(14)]);
var inst_66457 = (state_66533[(2)]);
var inst_66458 = com.wsscode.common.async_cljs.throw_err(inst_66457);
var inst_66459 = cljs.core.filterv(inst_66453,inst_66458);
var inst_66460__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_66459);
var inst_66461 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_66462 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_66460__$1];
var inst_66463 = cljs.core.PersistentHashMap.fromArrays(inst_66461,inst_66462);
var inst_66464 = com.wsscode.pathom.trace.trace(env,inst_66463);
var inst_66465__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_66460__$1);
var inst_66466 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66465__$1);
var state_66533__$1 = (function (){var statearr_66568 = state_66533;
(statearr_66568[(21)] = inst_66464);

(statearr_66568[(9)] = inst_66465__$1);

(statearr_66568[(14)] = inst_66460__$1);

return statearr_66568;
})();
if(inst_66466){
var statearr_66569_69586 = state_66533__$1;
(statearr_66569_69586[(1)] = (15));

} else {
var statearr_66570_69587 = state_66533__$1;
(statearr_66570_69587[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (26))){
var inst_66527 = (state_66533[(2)]);
var state_66533__$1 = state_66533;
var statearr_66571_69588 = state_66533__$1;
(statearr_66571_69588[(2)] = inst_66527);

(statearr_66571_69588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (16))){
var inst_66465 = (state_66533[(9)]);
var state_66533__$1 = state_66533;
var statearr_66572_69589 = state_66533__$1;
(statearr_66572_69589[(2)] = inst_66465);

(statearr_66572_69589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (10))){
var inst_66529 = (state_66533[(2)]);
var state_66533__$1 = state_66533;
var statearr_66573_69590 = state_66533__$1;
(statearr_66573_69590[(2)] = inst_66529);


cljs.core.async.impl.ioc_helpers.process_exception(state_66533__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (18))){
var inst_66469 = (state_66533[(2)]);
var inst_66470 = com.wsscode.common.async_cljs.throw_err(inst_66469);
var state_66533__$1 = state_66533;
var statearr_66574_69591 = state_66533__$1;
(statearr_66574_69591[(2)] = inst_66470);

(statearr_66574_69591[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66534 === (8))){
var inst_66447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_66533__$1 = state_66533;
if(cljs.core.truth_(inst_66447)){
var statearr_66575_69594 = state_66533__$1;
(statearr_66575_69594[(1)] = (11));

} else {
var statearr_66576_69595 = state_66533__$1;
(statearr_66576_69595[(1)] = (12));

}

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
});})(c__52131__auto__,params))
;
return ((function (switch__52035__auto__,c__52131__auto__,params){
return (function() {
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__52036__auto____0 = (function (){
var statearr_66577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66577[(0)] = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__52036__auto__);

(statearr_66577[(1)] = (1));

return statearr_66577;
});
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__52036__auto____1 = (function (state_66533){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_66533);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e66578){if((e66578 instanceof Object)){
var ex__52039__auto__ = e66578;
var statearr_66579_69596 = state_66533;
(statearr_66579_69596[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66578;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69599 = state_66533;
state_66533 = G__69599;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__52036__auto__ = function(state_66533){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__52036__auto____1.call(this,state_66533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,params))
})();
var state__52133__auto__ = (function (){var statearr_66580 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_66580[(6)] = c__52131__auto__);

return statearr_66580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,params))
);

return c__52131__auto__;
});})(params))
);
});
/**
 * Like reader2, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader2 = (function com$wsscode$pathom$connect$async_reader2(p__66583){
var map__66584 = p__66583;
var map__66584__$1 = (((((!((map__66584 == null))))?(((((map__66584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66584):map__66584);
var env = map__66584__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66584__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66584__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66584__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5733__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__66589 = temp__5733__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66589,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66589,(1),null);
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,vec__66589,plan,out,temp__5733__auto__,map__66584,map__66584__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,vec__66589,plan,out,temp__5733__auto__,map__66584,map__66584__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (state_66804){
var state_val_66805 = (state_66804[(1)]);
if((state_val_66805 === (7))){
var inst_66629 = (state_66804[(7)]);
var inst_66617 = (state_66804[(8)]);
var inst_66625 = (state_66804[(9)]);
var inst_66624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66617,(0),null);
var inst_66625__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66617,(1),null);
var inst_66626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66627 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_66625__$1];
var inst_66628 = (new cljs.core.PersistentVector(null,2,(5),inst_66626,inst_66627,null));
var inst_66629__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_66628);
var inst_66631 = (inst_66629__$1 == null);
var inst_66632 = cljs.core.not(inst_66631);
var state_66804__$1 = (function (){var statearr_66806 = state_66804;
(statearr_66806[(10)] = inst_66624);

(statearr_66806[(7)] = inst_66629__$1);

(statearr_66806[(9)] = inst_66625__$1);

return statearr_66806;
})();
if(inst_66632){
var statearr_66807_69621 = state_66804__$1;
(statearr_66807_69621[(1)] = (10));

} else {
var statearr_66808_69624 = state_66804__$1;
(statearr_66808_69624[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (59))){
var inst_66770 = (state_66804[(11)]);
var inst_66775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66770,(0),null);
var inst_66776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66770,(1),null);
var inst_66777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66770,(2),null);
var inst_66609 = inst_66775;
var inst_66610 = inst_66776;
var inst_66611 = inst_66777;
var state_66804__$1 = (function (){var statearr_66809 = state_66804;
(statearr_66809[(12)] = inst_66609);

(statearr_66809[(13)] = inst_66610);

(statearr_66809[(14)] = inst_66611);

return statearr_66809;
})();
var statearr_66810_69626 = state_66804__$1;
(statearr_66810_69626[(2)] = null);

(statearr_66810_69626[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (20))){
var inst_66657 = (state_66804[(15)]);
var inst_66655 = (state_66804[(16)]);
var inst_66672 = (state_66804[(17)]);
var inst_66672__$1 = com.wsscode.pathom.connect.call_resolver(inst_66655,inst_66657);
var inst_66673 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66672__$1);
var state_66804__$1 = (function (){var statearr_66811 = state_66804;
(statearr_66811[(17)] = inst_66672__$1);

return statearr_66811;
})();
if(inst_66673){
var statearr_66812_69631 = state_66804__$1;
(statearr_66812_69631[(1)] = (26));

} else {
var statearr_66813_69633 = state_66804__$1;
(statearr_66813_69633[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (58))){
var inst_66793 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66814_69635 = state_66804__$1;
(statearr_66814_69635[(2)] = inst_66793);

(statearr_66814_69635[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (60))){
var inst_66687 = (state_66804[(18)]);
var inst_66597 = (state_66804[(19)]);
var inst_66625 = (state_66804[(9)]);
var inst_66655 = (state_66804[(16)]);
var inst_66780 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_66781 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),inst_66597,inst_66625,inst_66687];
var inst_66782 = cljs.core.PersistentHashMap.fromArrays(inst_66780,inst_66781);
var inst_66783 = com.wsscode.pathom.trace.trace(inst_66655,inst_66782);
var inst_66784 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_66785 = [inst_66687];
var inst_66786 = cljs.core.PersistentHashMap.fromArrays(inst_66784,inst_66785);
var inst_66787 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_66786);
var inst_66788 = (function(){throw inst_66787})();
var state_66804__$1 = (function (){var statearr_66815 = state_66804;
(statearr_66815[(20)] = inst_66783);

return statearr_66815;
})();
var statearr_66816_69642 = state_66804__$1;
(statearr_66816_69642[(2)] = inst_66788);

(statearr_66816_69642[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (27))){
var inst_66672 = (state_66804[(17)]);
var state_66804__$1 = state_66804;
var statearr_66817_69644 = state_66804__$1;
(statearr_66817_69644[(2)] = inst_66672);

(statearr_66817_69644[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (1))){
var state_66804__$1 = state_66804;
var statearr_66824_69646 = state_66804__$1;
(statearr_66824_69646[(2)] = null);

(statearr_66824_69646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (24))){
var inst_66670 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66826_69649 = state_66804__$1;
(statearr_66826_69649[(2)] = inst_66670);

(statearr_66826_69649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (55))){
var inst_66753 = (state_66804[(2)]);
var inst_66754 = com.wsscode.common.async_cljs.throw_err(inst_66753);
var state_66804__$1 = state_66804;
var statearr_66827_69650 = state_66804__$1;
(statearr_66827_69650[(2)] = inst_66754);

(statearr_66827_69650[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (39))){
var inst_66610 = (state_66804[(13)]);
var inst_66702 = (state_66804[(21)]);
var inst_66611 = (state_66804[(14)]);
var inst_66618 = (state_66804[(22)]);
var inst_66709 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_66611,inst_66702);
var tmp66825 = inst_66610;
var inst_66609 = inst_66618;
var inst_66610__$1 = tmp66825;
var inst_66611__$1 = inst_66709;
var state_66804__$1 = (function (){var statearr_66828 = state_66804;
(statearr_66828[(12)] = inst_66609);

(statearr_66828[(13)] = inst_66610__$1);

(statearr_66828[(14)] = inst_66611__$1);

return statearr_66828;
})();
var statearr_66832_69652 = state_66804__$1;
(statearr_66832_69652[(2)] = null);

(statearr_66832_69652[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (46))){
var inst_66729 = (state_66804[(23)]);
var inst_66734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66729,(0),null);
var inst_66735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66729,(1),null);
var inst_66736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66729,(2),null);
var inst_66609 = inst_66734;
var inst_66610 = inst_66735;
var inst_66611 = inst_66736;
var state_66804__$1 = (function (){var statearr_66833 = state_66804;
(statearr_66833[(12)] = inst_66609);

(statearr_66833[(13)] = inst_66610);

(statearr_66833[(14)] = inst_66611);

return statearr_66833;
})();
var statearr_66834_69655 = state_66804__$1;
(statearr_66834_69655[(2)] = null);

(statearr_66834_69655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66804,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_66596 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_66597 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_66596);
var inst_66605 = cljs.core.seq(plan);
var inst_66606 = cljs.core.first(inst_66605);
var inst_66607 = cljs.core.next(inst_66605);
var inst_66608 = cljs.core.PersistentHashMap.EMPTY;
var inst_66609 = plan;
var inst_66610 = inst_66608;
var inst_66611 = out;
var state_66804__$1 = (function (){var statearr_66835 = state_66804;
(statearr_66835[(19)] = inst_66597);

(statearr_66835[(24)] = inst_66606);

(statearr_66835[(12)] = inst_66609);

(statearr_66835[(13)] = inst_66610);

(statearr_66835[(25)] = inst_66607);

(statearr_66835[(14)] = inst_66611);

return statearr_66835;
})();
var statearr_66836_69658 = state_66804__$1;
(statearr_66836_69658[(2)] = null);

(statearr_66836_69658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (54))){
var inst_66757 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66837_69660 = state_66804__$1;
(statearr_66837_69660[(2)] = inst_66757);

(statearr_66837_69660[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (15))){
var inst_66642 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66838_69661 = state_66804__$1;
(statearr_66838_69661[(2)] = inst_66642);

(statearr_66838_69661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (48))){
var inst_66759 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66839_69662 = state_66804__$1;
(statearr_66839_69662[(2)] = inst_66759);

(statearr_66839_69662[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (50))){
var state_66804__$1 = state_66804;
var statearr_66840_69663 = state_66804__$1;
(statearr_66840_69663[(2)] = null);

(statearr_66840_69663[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (21))){
var inst_66682 = (state_66804[(26)]);
var inst_66682__$1 = (state_66804[(2)]);
var state_66804__$1 = (function (){var statearr_66841 = state_66804;
(statearr_66841[(26)] = inst_66682__$1);

return statearr_66841;
})();
if(cljs.core.truth_(inst_66682__$1)){
var statearr_66842_69666 = state_66804__$1;
(statearr_66842_69666[(1)] = (30));

} else {
var statearr_66843_69667 = state_66804__$1;
(statearr_66843_69667[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (31))){
var inst_66685 = cljs.core.PersistentHashMap.EMPTY;
var state_66804__$1 = state_66804;
var statearr_66844_69668 = state_66804__$1;
(statearr_66844_69668[(2)] = inst_66685);

(statearr_66844_69668[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (32))){
var inst_66687 = (state_66804[(18)]);
var inst_66597 = (state_66804[(19)]);
var inst_66650 = (state_66804[(27)]);
var inst_66657 = (state_66804[(15)]);
var inst_66653 = (state_66804[(28)]);
var inst_66652 = (state_66804[(29)]);
var inst_66606 = (state_66804[(24)]);
var inst_66609 = (state_66804[(12)]);
var inst_66610 = (state_66804[(13)]);
var inst_66651 = (state_66804[(30)]);
var inst_66624 = (state_66804[(10)]);
var inst_66607 = (state_66804[(25)]);
var inst_66617 = (state_66804[(8)]);
var inst_66654 = (state_66804[(31)]);
var inst_66625 = (state_66804[(9)]);
var inst_66611 = (state_66804[(14)]);
var inst_66660 = (state_66804[(32)]);
var inst_66655 = (state_66804[(16)]);
var inst_66618 = (state_66804[(22)]);
var inst_66687__$1 = (state_66804[(2)]);
var inst_66688 = (function (){var input = inst_66653;
var step = inst_66617;
var key_SINGLEQUOTE_ = inst_66624;
var seq__66603 = inst_66607;
var map__66623 = inst_66650;
var response = inst_66687__$1;
var G__66601 = inst_66609;
var cache_QMARK_ = inst_66651;
var out_left = inst_66611;
var vec__66620 = inst_66617;
var key = inst_66597;
var seq__66614 = inst_66618;
var failed_resolvers = inst_66610;
var vec__66613 = inst_66609;
var first__66604 = inst_66606;
var batch_QMARK_ = inst_66652;
var output = inst_66654;
var env__$1 = inst_66655;
var e = inst_66657;
var vec__66602 = plan;
var resolver_sym = inst_66625;
var trace_data = inst_66660;
var first__66615 = inst_66617;
var resolver = inst_66650;
var tail = inst_66618;
return ((function (input,step,key_SINGLEQUOTE_,seq__66603,map__66623,response,G__66601,cache_QMARK_,out_left,vec__66620,key,seq__66614,failed_resolvers,vec__66613,first__66604,batch_QMARK_,output,env__$1,e,vec__66602,resolver_sym,trace_data,first__66615,resolver,tail,inst_66687,inst_66597,inst_66650,inst_66657,inst_66653,inst_66652,inst_66606,inst_66609,inst_66610,inst_66651,inst_66624,inst_66607,inst_66617,inst_66654,inst_66625,inst_66611,inst_66660,inst_66655,inst_66618,inst_66687__$1,state_val_66805,c__52131__auto__,vec__66589,plan,out,temp__5733__auto__,map__66584,map__66584__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (failed_resolvers__$1,input,step,key_SINGLEQUOTE_,seq__66603,map__66623,response,G__66601,cache_QMARK_,out_left,vec__66620,key,seq__66614,failed_resolvers,vec__66613,first__66604,batch_QMARK_,output,env__$1,e,vec__66602,resolver_sym,trace_data,first__66615,resolver,tail,inst_66687,inst_66597,inst_66650,inst_66657,inst_66653,inst_66652,inst_66606,inst_66609,inst_66610,inst_66651,inst_66624,inst_66607,inst_66617,inst_66654,inst_66625,inst_66611,inst_66660,inst_66655,inst_66618,inst_66687__$1,state_val_66805,c__52131__auto__,vec__66589,plan,out,temp__5733__auto__,map__66584,map__66584__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__66581_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__66581_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(failed_resolvers__$1,input,step,key_SINGLEQUOTE_,seq__66603,map__66623,response,G__66601,cache_QMARK_,out_left,vec__66620,key,seq__66614,failed_resolvers,vec__66613,first__66604,batch_QMARK_,output,env__$1,e,vec__66602,resolver_sym,trace_data,first__66615,resolver,tail,inst_66687,inst_66597,inst_66650,inst_66657,inst_66653,inst_66652,inst_66606,inst_66609,inst_66610,inst_66651,inst_66624,inst_66607,inst_66617,inst_66654,inst_66625,inst_66611,inst_66660,inst_66655,inst_66618,inst_66687__$1,state_val_66805,c__52131__auto__,vec__66589,plan,out,temp__5733__auto__,map__66584,map__66584__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5733__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$1);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__66845 = temp__5733__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66845,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66845,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$1,out_SINGLEQUOTE_], null);
} else {
return null;
}
});
;})(input,step,key_SINGLEQUOTE_,seq__66603,map__66623,response,G__66601,cache_QMARK_,out_left,vec__66620,key,seq__66614,failed_resolvers,vec__66613,first__66604,batch_QMARK_,output,env__$1,e,vec__66602,resolver_sym,trace_data,first__66615,resolver,tail,inst_66687,inst_66597,inst_66650,inst_66657,inst_66653,inst_66652,inst_66606,inst_66609,inst_66610,inst_66651,inst_66624,inst_66607,inst_66617,inst_66654,inst_66625,inst_66611,inst_66660,inst_66655,inst_66618,inst_66687__$1,state_val_66805,c__52131__auto__,vec__66589,plan,out,temp__5733__auto__,map__66584,map__66584__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var inst_66689 = cljs.core.map_QMARK_(inst_66687__$1);
var state_66804__$1 = (function (){var statearr_66848 = state_66804;
(statearr_66848[(18)] = inst_66687__$1);

(statearr_66848[(33)] = inst_66688);

return statearr_66848;
})();
if(inst_66689){
var statearr_66849_69680 = state_66804__$1;
(statearr_66849_69680[(1)] = (33));

} else {
var statearr_66850_69681 = state_66804__$1;
(statearr_66850_69681[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (40))){
var inst_66712 = (state_66804[(34)]);
var inst_66692 = (state_66804[(35)]);
var inst_66691 = (state_66804[(36)]);
var inst_66712__$1 = com.wsscode.pathom.connect.process_simple_reader_response(inst_66691,inst_66692);
var inst_66713 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66712__$1);
var state_66804__$1 = (function (){var statearr_66851 = state_66804;
(statearr_66851[(34)] = inst_66712__$1);

return statearr_66851;
})();
if(inst_66713){
var statearr_66852_69684 = state_66804__$1;
(statearr_66852_69684[(1)] = (42));

} else {
var statearr_66853_69685 = state_66804__$1;
(statearr_66853_69685[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (56))){
var inst_66687 = (state_66804[(18)]);
var inst_66770 = (state_66804[(11)]);
var inst_66688 = (state_66804[(33)]);
var inst_66766 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_66767 = [inst_66687];
var inst_66768 = cljs.core.PersistentHashMap.fromArrays(inst_66766,inst_66767);
var inst_66769 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_66768);
var inst_66770__$1 = (inst_66688.cljs$core$IFn$_invoke$arity$1 ? inst_66688.cljs$core$IFn$_invoke$arity$1(inst_66769) : inst_66688.call(null,inst_66769));
var state_66804__$1 = (function (){var statearr_66854 = state_66804;
(statearr_66854[(11)] = inst_66770__$1);

return statearr_66854;
})();
if(cljs.core.truth_(inst_66770__$1)){
var statearr_66855_69687 = state_66804__$1;
(statearr_66855_69687[(1)] = (59));

} else {
var statearr_66856_69688 = state_66804__$1;
(statearr_66856_69688[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (33))){
var inst_66687 = (state_66804[(18)]);
var inst_66597 = (state_66804[(19)]);
var inst_66650 = (state_66804[(27)]);
var inst_66657 = (state_66804[(15)]);
var inst_66653 = (state_66804[(28)]);
var inst_66652 = (state_66804[(29)]);
var inst_66606 = (state_66804[(24)]);
var inst_66609 = (state_66804[(12)]);
var inst_66610 = (state_66804[(13)]);
var inst_66651 = (state_66804[(30)]);
var inst_66624 = (state_66804[(10)]);
var inst_66607 = (state_66804[(25)]);
var inst_66617 = (state_66804[(8)]);
var inst_66654 = (state_66804[(31)]);
var inst_66688 = (state_66804[(33)]);
var inst_66625 = (state_66804[(9)]);
var inst_66611 = (state_66804[(14)]);
var inst_66692 = (state_66804[(35)]);
var inst_66691 = (state_66804[(36)]);
var inst_66660 = (state_66804[(32)]);
var inst_66655 = (state_66804[(16)]);
var inst_66618 = (state_66804[(22)]);
var inst_66691__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_66687,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_66655);
var inst_66692__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_66687,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_66693 = (function (){var input = inst_66653;
var step = inst_66617;
var key_SINGLEQUOTE_ = inst_66624;
var seq__66603 = inst_66607;
var map__66623 = inst_66650;
var response = inst_66692__$1;
var G__66601 = inst_66609;
var cache_QMARK_ = inst_66651;
var out_left = inst_66611;
var vec__66620 = inst_66617;
var key = inst_66597;
var seq__66614 = inst_66618;
var failed_resolvers = inst_66610;
var vec__66613 = inst_66609;
var first__66604 = inst_66606;
var batch_QMARK_ = inst_66652;
var output = inst_66654;
var env__$1 = inst_66655;
var e = inst_66657;
var vec__66602 = plan;
var resolver_sym = inst_66625;
var trace_data = inst_66660;
var first__66615 = inst_66617;
var resolver = inst_66650;
var replan = inst_66688;
var env_SINGLEQUOTE_ = inst_66691__$1;
var tail = inst_66618;
return ((function (input,step,key_SINGLEQUOTE_,seq__66603,map__66623,response,G__66601,cache_QMARK_,out_left,vec__66620,key,seq__66614,failed_resolvers,vec__66613,first__66604,batch_QMARK_,output,env__$1,e,vec__66602,resolver_sym,trace_data,first__66615,resolver,replan,env_SINGLEQUOTE_,tail,inst_66687,inst_66597,inst_66650,inst_66657,inst_66653,inst_66652,inst_66606,inst_66609,inst_66610,inst_66651,inst_66624,inst_66607,inst_66617,inst_66654,inst_66688,inst_66625,inst_66611,inst_66692,inst_66691,inst_66660,inst_66655,inst_66618,inst_66691__$1,inst_66692__$1,state_val_66805,c__52131__auto__,vec__66589,plan,out,temp__5733__auto__,map__66584,map__66584__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__66582_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__66582_SHARP_], 0));
});
;})(input,step,key_SINGLEQUOTE_,seq__66603,map__66623,response,G__66601,cache_QMARK_,out_left,vec__66620,key,seq__66614,failed_resolvers,vec__66613,first__66604,batch_QMARK_,output,env__$1,e,vec__66602,resolver_sym,trace_data,first__66615,resolver,replan,env_SINGLEQUOTE_,tail,inst_66687,inst_66597,inst_66650,inst_66657,inst_66653,inst_66652,inst_66606,inst_66609,inst_66610,inst_66651,inst_66624,inst_66607,inst_66617,inst_66654,inst_66688,inst_66625,inst_66611,inst_66692,inst_66691,inst_66660,inst_66655,inst_66618,inst_66691__$1,inst_66692__$1,state_val_66805,c__52131__auto__,vec__66589,plan,out,temp__5733__auto__,map__66584,map__66584__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var inst_66694 = com.wsscode.pathom.core.swap_entity_BANG_(inst_66691__$1,inst_66693);
var inst_66696 = cljs.core.contains_QMARK_(inst_66692__$1,inst_66624);
var inst_66697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66692__$1,inst_66624);
var inst_66698 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_66697) : com.wsscode.pathom.core.break_values.call(null,inst_66697));
var inst_66699 = cljs.core.not(inst_66698);
var inst_66700 = ((inst_66696) && (inst_66699));
var state_66804__$1 = (function (){var statearr_66857 = state_66804;
(statearr_66857[(37)] = inst_66694);

(statearr_66857[(35)] = inst_66692__$1);

(statearr_66857[(36)] = inst_66691__$1);

return statearr_66857;
})();
if(cljs.core.truth_(inst_66700)){
var statearr_66858_69698 = state_66804__$1;
(statearr_66858_69698[(1)] = (36));

} else {
var statearr_66859_69699 = state_66804__$1;
(statearr_66859_69699[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (13))){
var state_66804__$1 = state_66804;
var statearr_66860_69700 = state_66804__$1;
(statearr_66860_69700[(2)] = true);

(statearr_66860_69700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (22))){
var inst_66662 = (state_66804[(38)]);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66804__$1,(25),inst_66662);
} else {
if((state_val_66805 === (36))){
var inst_66597 = (state_66804[(19)]);
var inst_66654 = (state_66804[(31)]);
var inst_66625 = (state_66804[(9)]);
var inst_66691 = (state_66804[(36)]);
var inst_66618 = (state_66804[(22)]);
var inst_66702 = com.wsscode.pathom.connect.output__GT_provides(inst_66654);
var inst_66703 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_66704 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),inst_66597,inst_66625];
var inst_66705 = cljs.core.PersistentHashMap.fromArrays(inst_66703,inst_66704);
var inst_66706 = com.wsscode.pathom.trace.trace(inst_66691,inst_66705);
var inst_66707 = cljs.core.seq(inst_66618);
var state_66804__$1 = (function (){var statearr_66861 = state_66804;
(statearr_66861[(39)] = inst_66706);

(statearr_66861[(21)] = inst_66702);

return statearr_66861;
})();
if(inst_66707){
var statearr_66862_69703 = state_66804__$1;
(statearr_66862_69703[(1)] = (39));

} else {
var statearr_66863_69704 = state_66804__$1;
(statearr_66863_69704[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (41))){
var inst_66722 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66864_69706 = state_66804__$1;
(statearr_66864_69706[(2)] = inst_66722);

(statearr_66864_69706[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (43))){
var inst_66712 = (state_66804[(34)]);
var state_66804__$1 = state_66804;
var statearr_66865_69708 = state_66804__$1;
(statearr_66865_69708[(2)] = inst_66712);

(statearr_66865_69708[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (61))){
var inst_66790 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66866_69709 = state_66804__$1;
(statearr_66866_69709[(2)] = inst_66790);

(statearr_66866_69709[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (29))){
var inst_66676 = (state_66804[(2)]);
var inst_66677 = com.wsscode.common.async_cljs.throw_err(inst_66676);
var state_66804__$1 = state_66804;
var statearr_66867_69710 = state_66804__$1;
(statearr_66867_69710[(2)] = inst_66677);

(statearr_66867_69710[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (44))){
var inst_66720 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66868_69711 = state_66804__$1;
(statearr_66868_69711[(2)] = inst_66720);

(statearr_66868_69711[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (6))){
var inst_66800 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66869_69712 = state_66804__$1;
(statearr_66869_69712[(2)] = inst_66800);


cljs.core.async.impl.ioc_helpers.process_exception(state_66804__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (28))){
var inst_66680 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66870_69713 = state_66804__$1;
(statearr_66870_69713[(2)] = inst_66680);

(statearr_66870_69713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (51))){
var inst_66749 = (state_66804[(40)]);
var inst_66692 = (state_66804[(35)]);
var inst_66691 = (state_66804[(36)]);
var inst_66748 = (state_66804[(2)]);
var inst_66749__$1 = com.wsscode.pathom.connect.process_simple_reader_response(inst_66691,inst_66692);
var inst_66750 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66749__$1);
var state_66804__$1 = (function (){var statearr_66871 = state_66804;
(statearr_66871[(41)] = inst_66748);

(statearr_66871[(40)] = inst_66749__$1);

return statearr_66871;
})();
if(inst_66750){
var statearr_66872_69714 = state_66804__$1;
(statearr_66872_69714[(1)] = (52));

} else {
var statearr_66873_69715 = state_66804__$1;
(statearr_66873_69715[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (25))){
var inst_66666 = (state_66804[(2)]);
var inst_66667 = com.wsscode.common.async_cljs.throw_err(inst_66666);
var state_66804__$1 = state_66804;
var statearr_66874_69716 = state_66804__$1;
(statearr_66874_69716[(2)] = inst_66667);

(statearr_66874_69716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (34))){
var state_66804__$1 = state_66804;
var statearr_66875_69717 = state_66804__$1;
(statearr_66875_69717[(1)] = (56));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (17))){
var inst_66629 = (state_66804[(7)]);
var state_66804__$1 = state_66804;
var statearr_66877_69718 = state_66804__$1;
(statearr_66877_69718[(2)] = inst_66629);

(statearr_66877_69718[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (3))){
var inst_66592 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66878_69719 = state_66804__$1;
(statearr_66878_69719[(2)] = inst_66592);


cljs.core.async.impl.ioc_helpers.process_exception(state_66804__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (12))){
var inst_66645 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
if(cljs.core.truth_(inst_66645)){
var statearr_66879_69721 = state_66804__$1;
(statearr_66879_69721[(1)] = (16));

} else {
var statearr_66880_69722 = state_66804__$1;
(statearr_66880_69722[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (2))){
var inst_66802 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66804__$1,inst_66802);
} else {
if((state_val_66805 === (23))){
var inst_66662 = (state_66804[(38)]);
var state_66804__$1 = state_66804;
var statearr_66881_69723 = state_66804__$1;
(statearr_66881_69723[(2)] = inst_66662);

(statearr_66881_69723[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (47))){
var inst_66618 = (state_66804[(22)]);
var inst_66739 = cljs.core.seq(inst_66618);
var state_66804__$1 = state_66804;
if(inst_66739){
var statearr_66882_69725 = state_66804__$1;
(statearr_66882_69725[(1)] = (49));

} else {
var statearr_66883_69726 = state_66804__$1;
(statearr_66883_69726[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (35))){
var inst_66795 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66885_69727 = state_66804__$1;
(statearr_66885_69727[(2)] = inst_66795);

(statearr_66885_69727[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (19))){
var inst_66662 = (state_66804[(38)]);
var inst_66657 = (state_66804[(15)]);
var inst_66653 = (state_66804[(28)]);
var inst_66652 = (state_66804[(29)]);
var inst_66625 = (state_66804[(9)]);
var inst_66660 = (state_66804[(32)]);
var inst_66655 = (state_66804[(16)]);
var inst_66662__$1 = com.wsscode.pathom.connect.async_read_cache_read(inst_66655,inst_66625,inst_66657,inst_66652,processing_sequence,inst_66660,inst_66653);
var inst_66663 = com.wsscode.common.async_cljs.chan_QMARK_(inst_66662__$1);
var state_66804__$1 = (function (){var statearr_66886 = state_66804;
(statearr_66886[(38)] = inst_66662__$1);

return statearr_66886;
})();
if(inst_66663){
var statearr_66887_69729 = state_66804__$1;
(statearr_66887_69729[(1)] = (22));

} else {
var statearr_66888_69730 = state_66804__$1;
(statearr_66888_69730[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (57))){
var state_66804__$1 = state_66804;
var statearr_66889_69731 = state_66804__$1;
(statearr_66889_69731[(2)] = null);

(statearr_66889_69731[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (11))){
var state_66804__$1 = state_66804;
var statearr_66890_69732 = state_66804__$1;
(statearr_66890_69732[(2)] = false);

(statearr_66890_69732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (9))){
var inst_66798 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66891_69734 = state_66804__$1;
(statearr_66891_69734[(2)] = inst_66798);

(statearr_66891_69734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (5))){
var inst_66609 = (state_66804[(12)]);
var inst_66617 = (state_66804[(8)]);
var inst_66616 = cljs.core.seq(inst_66609);
var inst_66617__$1 = cljs.core.first(inst_66616);
var inst_66618 = cljs.core.next(inst_66616);
var state_66804__$1 = (function (){var statearr_66892 = state_66804;
(statearr_66892[(8)] = inst_66617__$1);

(statearr_66892[(22)] = inst_66618);

return statearr_66892;
})();
if(cljs.core.truth_(inst_66617__$1)){
var statearr_66893_69735 = state_66804__$1;
(statearr_66893_69735[(1)] = (7));

} else {
var statearr_66894_69736 = state_66804__$1;
(statearr_66894_69736[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (14))){
var state_66804__$1 = state_66804;
var statearr_66895_69737 = state_66804__$1;
(statearr_66895_69737[(2)] = false);

(statearr_66895_69737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (45))){
var inst_66716 = (state_66804[(2)]);
var inst_66717 = com.wsscode.common.async_cljs.throw_err(inst_66716);
var state_66804__$1 = state_66804;
var statearr_66896_69740 = state_66804__$1;
(statearr_66896_69740[(2)] = inst_66717);

(statearr_66896_69740[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (53))){
var inst_66749 = (state_66804[(40)]);
var state_66804__$1 = state_66804;
var statearr_66897_69741 = state_66804__$1;
(statearr_66897_69741[(2)] = inst_66749);

(statearr_66897_69741[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (26))){
var inst_66672 = (state_66804[(17)]);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66804__$1,(29),inst_66672);
} else {
if((state_val_66805 === (16))){
var inst_66629 = (state_66804[(7)]);
var inst_66647 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_66629);
var state_66804__$1 = state_66804;
var statearr_66898_69742 = state_66804__$1;
(statearr_66898_69742[(2)] = inst_66647);

(statearr_66898_69742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (38))){
var inst_66761 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66899_69744 = state_66804__$1;
(statearr_66899_69744[(2)] = inst_66761);

(statearr_66899_69744[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (30))){
var inst_66682 = (state_66804[(26)]);
var state_66804__$1 = state_66804;
var statearr_66900_69746 = state_66804__$1;
(statearr_66900_69746[(2)] = inst_66682);

(statearr_66900_69746[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (10))){
var inst_66629 = (state_66804[(7)]);
var inst_66634 = inst_66629.cljs$lang$protocol_mask$partition0$;
var inst_66635 = (inst_66634 & (64));
var inst_66636 = inst_66629.cljs$core$ISeq$;
var inst_66637 = (cljs.core.PROTOCOL_SENTINEL === inst_66636);
var inst_66638 = ((inst_66635) || (inst_66637));
var state_66804__$1 = state_66804;
if(cljs.core.truth_(inst_66638)){
var statearr_66901_69747 = state_66804__$1;
(statearr_66901_69747[(1)] = (13));

} else {
var statearr_66902_69748 = state_66804__$1;
(statearr_66902_69748[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (18))){
var inst_66597 = (state_66804[(19)]);
var inst_66650 = (state_66804[(27)]);
var inst_66657 = (state_66804[(15)]);
var inst_66653 = (state_66804[(28)]);
var inst_66651 = (state_66804[(30)]);
var inst_66625 = (state_66804[(9)]);
var inst_66655 = (state_66804[(16)]);
var inst_66650__$1 = (state_66804[(2)]);
var inst_66651__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_66650__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_66652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66650__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_66653__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66650__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_66654 = com.wsscode.pathom.connect.resolver__GT_output(env,inst_66625);
var inst_66655__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_66650__$1);
var inst_66656 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_66655__$1);
var inst_66657__$1 = cljs.core.select_keys(inst_66656,inst_66653__$1);
var inst_66658 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_66659 = [inst_66597,inst_66625,inst_66657__$1];
var inst_66660 = cljs.core.PersistentHashMap.fromArrays(inst_66658,inst_66659);
var state_66804__$1 = (function (){var statearr_66903 = state_66804;
(statearr_66903[(27)] = inst_66650__$1);

(statearr_66903[(15)] = inst_66657__$1);

(statearr_66903[(28)] = inst_66653__$1);

(statearr_66903[(29)] = inst_66652);

(statearr_66903[(30)] = inst_66651__$1);

(statearr_66903[(31)] = inst_66654);

(statearr_66903[(32)] = inst_66660);

(statearr_66903[(16)] = inst_66655__$1);

return statearr_66903;
})();
if(cljs.core.truth_(inst_66651__$1)){
var statearr_66904_69753 = state_66804__$1;
(statearr_66904_69753[(1)] = (19));

} else {
var statearr_66905_69754 = state_66804__$1;
(statearr_66905_69754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (52))){
var inst_66749 = (state_66804[(40)]);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66804__$1,(55),inst_66749);
} else {
if((state_val_66805 === (42))){
var inst_66712 = (state_66804[(34)]);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66804__$1,(45),inst_66712);
} else {
if((state_val_66805 === (37))){
var inst_66729 = (state_66804[(23)]);
var inst_66624 = (state_66804[(10)]);
var inst_66688 = (state_66804[(33)]);
var inst_66692 = (state_66804[(35)]);
var inst_66725 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_66726 = [inst_66692,inst_66624];
var inst_66727 = cljs.core.PersistentHashMap.fromArrays(inst_66725,inst_66726);
var inst_66728 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_66727);
var inst_66729__$1 = (inst_66688.cljs$core$IFn$_invoke$arity$1 ? inst_66688.cljs$core$IFn$_invoke$arity$1(inst_66728) : inst_66688.call(null,inst_66728));
var state_66804__$1 = (function (){var statearr_66907 = state_66804;
(statearr_66907[(23)] = inst_66729__$1);

return statearr_66907;
})();
if(cljs.core.truth_(inst_66729__$1)){
var statearr_66908_69762 = state_66804__$1;
(statearr_66908_69762[(1)] = (46));

} else {
var statearr_66909_69763 = state_66804__$1;
(statearr_66909_69763[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (8))){
var state_66804__$1 = state_66804;
var statearr_66911_69764 = state_66804__$1;
(statearr_66911_69764[(2)] = null);

(statearr_66911_69764[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (49))){
var inst_66624 = (state_66804[(10)]);
var inst_66692 = (state_66804[(35)]);
var inst_66741 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_66742 = [inst_66692,inst_66624];
var inst_66743 = cljs.core.PersistentHashMap.fromArrays(inst_66741,inst_66742);
var inst_66744 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_66743);
var inst_66745 = (function(){throw inst_66744})();
var state_66804__$1 = state_66804;
var statearr_66916_69768 = state_66804__$1;
(statearr_66916_69768[(2)] = inst_66745);

(statearr_66916_69768[(1)] = (51));


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
});})(c__52131__auto__,vec__66589,plan,out,temp__5733__auto__,map__66584,map__66584__$1,env,indexes,max_resolver_weight,processing_sequence))
;
return ((function (switch__52035__auto__,c__52131__auto__,vec__66589,plan,out,temp__5733__auto__,map__66584,map__66584__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader2_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$async_reader2_$_state_machine__52036__auto____0 = (function (){
var statearr_66917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66917[(0)] = com$wsscode$pathom$connect$async_reader2_$_state_machine__52036__auto__);

(statearr_66917[(1)] = (1));

return statearr_66917;
});
var com$wsscode$pathom$connect$async_reader2_$_state_machine__52036__auto____1 = (function (state_66804){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_66804);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e66918){if((e66918 instanceof Object)){
var ex__52039__auto__ = e66918;
var statearr_66919_69775 = state_66804;
(statearr_66919_69775[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66918;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69776 = state_66804;
state_66804 = G__69776;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader2_$_state_machine__52036__auto__ = function(state_66804){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__52036__auto____1.call(this,state_66804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader2_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader2_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$async_reader2_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader2_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$async_reader2_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,vec__66589,plan,out,temp__5733__auto__,map__66584,map__66584__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var state__52133__auto__ = (function (){var statearr_66920 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_66920[(6)] = c__52131__auto__);

return statearr_66920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,vec__66589,plan,out,temp__5733__auto__,map__66584,map__66584__$1,env,indexes,max_resolver_weight,processing_sequence))
);

return c__52131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.parallel_batch_error = (function com$wsscode$pathom$connect$parallel_batch_error(p__66921,e){
var map__66922 = p__66921;
var map__66922__$1 = (((((!((map__66922 == null))))?(((((map__66922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66922):map__66922);
var env = map__66922__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66922__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var map__66924 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var map__66924__$1 = (((((!((map__66924 == null))))?(((((map__66924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66924):map__66924);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66924__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var item_count = cljs.core.count(processing_sequence);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-error","com.wsscode.pathom.connect/batch-result-error",-1587594017),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,e)], null));

var output_SINGLEQUOTE_ = com.wsscode.pathom.connect.output__GT_provides(output);
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$1(env));
var seq__66926_69778 = cljs.core.seq(output_SINGLEQUOTE_);
var chunk__66931_69779 = null;
var count__66932_69780 = (0);
var i__66933_69781 = (0);
while(true){
if((i__66933_69781 < count__66932_69780)){
var o_69782 = chunk__66931_69779.cljs$core$IIndexed$_nth$arity$2(null,i__66933_69781);
var seq__66934_69783 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__66935_69784 = null;
var count__66936_69785 = (0);
var i__66937_69786 = (0);
while(true){
if((i__66937_69786 < count__66936_69785)){
var i_69787 = chunk__66935_69784.cljs$core$IIndexed$_nth$arity$2(null,i__66937_69786);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_69787,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_69782], 0))),e);


var G__69788 = seq__66934_69783;
var G__69789 = chunk__66935_69784;
var G__69790 = count__66936_69785;
var G__69791 = (i__66937_69786 + (1));
seq__66934_69783 = G__69788;
chunk__66935_69784 = G__69789;
count__66936_69785 = G__69790;
i__66937_69786 = G__69791;
continue;
} else {
var temp__5735__auto___69792 = cljs.core.seq(seq__66934_69783);
if(temp__5735__auto___69792){
var seq__66934_69793__$1 = temp__5735__auto___69792;
if(cljs.core.chunked_seq_QMARK_(seq__66934_69793__$1)){
var c__4550__auto___69794 = cljs.core.chunk_first(seq__66934_69793__$1);
var G__69795 = cljs.core.chunk_rest(seq__66934_69793__$1);
var G__69796 = c__4550__auto___69794;
var G__69797 = cljs.core.count(c__4550__auto___69794);
var G__69798 = (0);
seq__66934_69783 = G__69795;
chunk__66935_69784 = G__69796;
count__66936_69785 = G__69797;
i__66937_69786 = G__69798;
continue;
} else {
var i_69800 = cljs.core.first(seq__66934_69793__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_69800,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_69782], 0))),e);


var G__69803 = cljs.core.next(seq__66934_69793__$1);
var G__69804 = null;
var G__69805 = (0);
var G__69806 = (0);
seq__66934_69783 = G__69803;
chunk__66935_69784 = G__69804;
count__66936_69785 = G__69805;
i__66937_69786 = G__69806;
continue;
}
} else {
}
}
break;
}

var G__69807 = seq__66926_69778;
var G__69808 = chunk__66931_69779;
var G__69809 = count__66932_69780;
var G__69810 = (i__66933_69781 + (1));
seq__66926_69778 = G__69807;
chunk__66931_69779 = G__69808;
count__66932_69780 = G__69809;
i__66933_69781 = G__69810;
continue;
} else {
var temp__5735__auto___69811 = cljs.core.seq(seq__66926_69778);
if(temp__5735__auto___69811){
var seq__66926_69812__$1 = temp__5735__auto___69811;
if(cljs.core.chunked_seq_QMARK_(seq__66926_69812__$1)){
var c__4550__auto___69813 = cljs.core.chunk_first(seq__66926_69812__$1);
var G__69814 = cljs.core.chunk_rest(seq__66926_69812__$1);
var G__69815 = c__4550__auto___69813;
var G__69816 = cljs.core.count(c__4550__auto___69813);
var G__69817 = (0);
seq__66926_69778 = G__69814;
chunk__66931_69779 = G__69815;
count__66932_69780 = G__69816;
i__66933_69781 = G__69817;
continue;
} else {
var o_69818 = cljs.core.first(seq__66926_69812__$1);
var seq__66927_69819 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__66928_69820 = null;
var count__66929_69821 = (0);
var i__66930_69822 = (0);
while(true){
if((i__66930_69822 < count__66929_69821)){
var i_69823 = chunk__66928_69820.cljs$core$IIndexed$_nth$arity$2(null,i__66930_69822);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_69823,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_69818], 0))),e);


var G__69827 = seq__66927_69819;
var G__69828 = chunk__66928_69820;
var G__69829 = count__66929_69821;
var G__69830 = (i__66930_69822 + (1));
seq__66927_69819 = G__69827;
chunk__66928_69820 = G__69828;
count__66929_69821 = G__69829;
i__66930_69822 = G__69830;
continue;
} else {
var temp__5735__auto___69831__$1 = cljs.core.seq(seq__66927_69819);
if(temp__5735__auto___69831__$1){
var seq__66927_69832__$1 = temp__5735__auto___69831__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66927_69832__$1)){
var c__4550__auto___69833 = cljs.core.chunk_first(seq__66927_69832__$1);
var G__69834 = cljs.core.chunk_rest(seq__66927_69832__$1);
var G__69835 = c__4550__auto___69833;
var G__69836 = cljs.core.count(c__4550__auto___69833);
var G__69837 = (0);
seq__66927_69819 = G__69834;
chunk__66928_69820 = G__69835;
count__66929_69821 = G__69836;
i__66930_69822 = G__69837;
continue;
} else {
var i_69838 = cljs.core.first(seq__66927_69832__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_69838,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_69818], 0))),e);


var G__69839 = cljs.core.next(seq__66927_69832__$1);
var G__69840 = null;
var G__69841 = (0);
var G__69842 = (0);
seq__66927_69819 = G__69839;
chunk__66928_69820 = G__69840;
count__66929_69821 = G__69841;
i__66930_69822 = G__69842;
continue;
}
} else {
}
}
break;
}

var G__69843 = cljs.core.next(seq__66926_69812__$1);
var G__69844 = null;
var G__69845 = (0);
var G__69846 = (0);
seq__66926_69778 = G__69843;
chunk__66931_69779 = G__69844;
count__66932_69780 = G__69845;
i__66933_69781 = G__69846;
continue;
}
} else {
}
}
break;
}

return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(item_count,cljs.core.zipmap(output_SINGLEQUOTE_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882))));
});
com.wsscode.pathom.connect.group_input_indexes = (function com$wsscode$pathom$connect$group_input_indexes(inputs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__66951){
var vec__66956 = p__66951;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66956,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66956,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,input,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),i);
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
});
com.wsscode.pathom.connect.parallel_batch = (function com$wsscode$pathom$connect$parallel_batch(p__66967){
var map__66968 = p__66967;
var map__66968__$1 = (((((!((map__66968 == null))))?(((((map__66968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66968):map__66968);
var env = map__66968__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66968__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66968__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66968__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function (state_67342){
var state_val_67343 = (state_67342[(1)]);
if((state_val_67343 === (65))){
var inst_67224 = (state_67342[(2)]);
var inst_67225 = com.wsscode.common.async_cljs.throw_err(inst_67224);
var state_67342__$1 = state_67342;
var statearr_67344_69847 = state_67342__$1;
(statearr_67344_69847[(2)] = inst_67225);


cljs.core.async.impl.ioc_helpers.process_exception(state_67342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (70))){
var inst_67256 = (state_67342[(7)]);
var inst_67257 = (state_67342[(8)]);
var inst_67259 = (inst_67257 < inst_67256);
var inst_67260 = inst_67259;
var state_67342__$1 = state_67342;
if(cljs.core.truth_(inst_67260)){
var statearr_67345_69848 = state_67342__$1;
(statearr_67345_69848[(1)] = (72));

} else {
var statearr_67346_69849 = state_67342__$1;
(statearr_67346_69849[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (62))){
var inst_67202 = (state_67342[(9)]);
var inst_67216 = (state_67342[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67342,(61),new cljs.core.Keyword(null,"default","default",-1987822328),null,(60));
var inst_67216__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_67202);
var inst_67217 = com.wsscode.common.async_cljs.chan_QMARK_(inst_67216__$1);
var state_67342__$1 = (function (){var statearr_67347 = state_67342;
(statearr_67347[(10)] = inst_67216__$1);

return statearr_67347;
})();
if(inst_67217){
var statearr_67348_69850 = state_67342__$1;
(statearr_67348_69850[(1)] = (63));

} else {
var statearr_67349_69851 = state_67342__$1;
(statearr_67349_69851[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (74))){
var inst_67326 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
var statearr_67353_69852 = state_67342__$1;
(statearr_67353_69852[(2)] = inst_67326);

(statearr_67353_69852[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (7))){
var inst_66992 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
if(cljs.core.truth_(inst_66992)){
var statearr_67357_69853 = state_67342__$1;
(statearr_67357_69853[(1)] = (11));

} else {
var statearr_67358_69854 = state_67342__$1;
(statearr_67358_69854[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (59))){
var inst_67188 = (state_67342[(11)]);
var inst_67201 = (state_67342[(12)]);
var inst_67004 = (state_67342[(13)]);
var inst_67003 = (state_67342[(14)]);
var inst_67194 = (state_67342[(15)]);
var inst_66997 = (state_67342[(16)]);
var inst_67007 = (state_67342[(17)]);
var inst_66999 = (state_67342[(18)]);
var inst_67202 = (state_67342[(9)]);
var inst_67001 = (state_67342[(19)]);
var inst_66998 = (state_67342[(20)]);
var inst_67198 = (state_67342[(2)]);
var inst_67199 = com.wsscode.common.async_cljs.throw_err(inst_67198);
var inst_67200 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_67188,inst_67194,inst_67199);
var inst_67201__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_67200);
var inst_67202__$1 = cljs.core.keys(inst_67201__$1);
var inst_67203 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_67204 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_67202__$1];
var inst_67205 = cljs.core.PersistentHashMap.fromArrays(inst_67203,inst_67204);
var inst_67206 = com.wsscode.pathom.trace.trace(env,inst_67205);
var inst_67207 = cljs.core.PersistentVector.EMPTY;
var inst_67208 = (function (){var input = inst_66999;
var items = inst_67202__$1;
var items_map = inst_67201__$1;
var key = inst_67003;
var _ = inst_67206;
var map__66975 = inst_66997;
var params = inst_67004;
var e = inst_67001;
var resolver_sym = inst_66998;
var trace_data = inst_67007;
return ((function (input,items,items_map,key,_,map__66975,params,e,resolver_sym,trace_data,inst_67188,inst_67201,inst_67004,inst_67003,inst_67194,inst_66997,inst_67007,inst_66999,inst_67202,inst_67001,inst_66998,inst_67198,inst_67199,inst_67200,inst_67201__$1,inst_67202__$1,inst_67203,inst_67204,inst_67205,inst_67206,inst_67207,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items,items_map,key,_,map__66975,params,e,resolver_sym,trace_data,inst_67188,inst_67201,inst_67004,inst_67003,inst_67194,inst_66997,inst_67007,inst_66999,inst_67202,inst_67001,inst_66998,inst_67198,inst_67199,inst_67200,inst_67201__$1,inst_67202__$1,inst_67203,inst_67204,inst_67205,inst_67206,inst_67207,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_67209 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_67208);
var inst_67210 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_67207,inst_67209,inst_67202__$1);
var state_67342__$1 = (function (){var statearr_67392 = state_67342;
(statearr_67392[(12)] = inst_67201__$1);

(statearr_67392[(21)] = inst_67210);

(statearr_67392[(9)] = inst_67202__$1);

return statearr_67392;
})();
var statearr_67393_69855 = state_67342__$1;
(statearr_67393_69855[(2)] = null);

(statearr_67393_69855[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (86))){
var inst_67321 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
var statearr_67394_69856 = state_67342__$1;
(statearr_67394_69856[(2)] = inst_67321);

(statearr_67394_69856[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (20))){
var inst_67022 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
var statearr_67396_69857 = state_67342__$1;
(statearr_67396_69857[(2)] = inst_67022);

(statearr_67396_69857[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (72))){
var inst_67257 = (state_67342[(8)]);
var inst_67255 = (state_67342[(22)]);
var inst_67272 = (state_67342[(23)]);
var inst_67268 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_67255,inst_67257);
var inst_67269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67268,(0),null);
var inst_67270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67268,(1),null);
var inst_67271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67270,(0),null);
var inst_67272__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67270,(1),null);
var state_67342__$1 = (function (){var statearr_67397 = state_67342;
(statearr_67397[(24)] = inst_67271);

(statearr_67397[(25)] = inst_67269);

(statearr_67397[(23)] = inst_67272__$1);

return statearr_67397;
})();
if(cljs.core.truth_(inst_67272__$1)){
var statearr_67398_69858 = state_67342__$1;
(statearr_67398_69858[(1)] = (75));

} else {
var statearr_67399_69859 = state_67342__$1;
(statearr_67399_69859[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (58))){
var inst_67186 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
var statearr_67400_69860 = state_67342__$1;
(statearr_67400_69860[(2)] = inst_67186);

(statearr_67400_69860[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (60))){
var inst_67210 = (state_67342[(21)]);
var inst_67202 = (state_67342[(9)]);
var inst_67227 = (state_67342[(26)]);
var inst_67227__$1 = (state_67342[(2)]);
var inst_67228 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_67232 = cljs.core.count(inst_67227__$1);
var inst_67233 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_67232];
var inst_67234 = cljs.core.PersistentHashMap.fromArrays(inst_67228,inst_67233);
var inst_67235 = com.wsscode.pathom.trace.trace(env,inst_67234);
var inst_67236 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_67210,inst_67227__$1);
var inst_67237 = cljs.core.zipmap(inst_67202,inst_67236);
var inst_67238 = cljs.core.first(inst_67227__$1);
var inst_67239 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_67238);
var inst_67240 = cljs.core.count(path);
var inst_67241 = (inst_67240 >= (2));
var inst_67242 = ((inst_67239) && (inst_67241));
var state_67342__$1 = (function (){var statearr_67405 = state_67342;
(statearr_67405[(27)] = inst_67235);

(statearr_67405[(28)] = inst_67237);

(statearr_67405[(26)] = inst_67227__$1);

return statearr_67405;
})();
if(cljs.core.truth_(inst_67242)){
var statearr_67406_69864 = state_67342__$1;
(statearr_67406_69864[(1)] = (67));

} else {
var statearr_67409_69865 = state_67342__$1;
(statearr_67409_69865[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (27))){
var inst_67060 = (state_67342[(2)]);
var inst_67061 = com.wsscode.common.async_cljs.throw_err(inst_67060);
var state_67342__$1 = state_67342;
var statearr_67411_69866 = state_67342__$1;
(statearr_67411_69866[(2)] = inst_67061);


cljs.core.async.impl.ioc_helpers.process_exception(state_67342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (1))){
var state_67342__$1 = state_67342;
var statearr_67412_69868 = state_67342__$1;
(statearr_67412_69868[(2)] = null);

(statearr_67412_69868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (69))){
var inst_67237 = (state_67342[(28)]);
var inst_67248 = (state_67342[(2)]);
var inst_67253 = cljs.core.seq(inst_67237);
var inst_67254 = inst_67253;
var inst_67255 = null;
var inst_67256 = (0);
var inst_67257 = (0);
var state_67342__$1 = (function (){var statearr_67413 = state_67342;
(statearr_67413[(7)] = inst_67256);

(statearr_67413[(8)] = inst_67257);

(statearr_67413[(29)] = inst_67254);

(statearr_67413[(22)] = inst_67255);

(statearr_67413[(30)] = inst_67248);

return statearr_67413;
})();
var statearr_67414_69869 = state_67342__$1;
(statearr_67414_69869[(2)] = null);

(statearr_67414_69869[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (24))){
var inst_67052 = (state_67342[(31)]);
var inst_67038 = (state_67342[(32)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67342,(23),new cljs.core.Keyword(null,"default","default",-1987822328),null,(22));
var inst_67052__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_67038);
var inst_67053 = com.wsscode.common.async_cljs.chan_QMARK_(inst_67052__$1);
var state_67342__$1 = (function (){var statearr_67418 = state_67342;
(statearr_67418[(31)] = inst_67052__$1);

return statearr_67418;
})();
if(inst_67053){
var statearr_67419_69870 = state_67342__$1;
(statearr_67419_69870[(1)] = (25));

} else {
var statearr_67420_69871 = state_67342__$1;
(statearr_67420_69871[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (55))){
var inst_67004 = (state_67342[(13)]);
var inst_67001 = (state_67342[(19)]);
var inst_66998 = (state_67342[(20)]);
var inst_67181 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67182 = [inst_66998,inst_67001,inst_67004];
var inst_67183 = (new cljs.core.PersistentVector(null,3,(5),inst_67181,inst_67182,null));
var inst_67184 = com.wsscode.pathom.core.cache_read(env,inst_67183);
var state_67342__$1 = state_67342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67342__$1,(58),inst_67184);
} else {
if((state_val_67343 === (85))){
var inst_67287 = (state_67342[(33)]);
var inst_67306 = (state_67342[(34)]);
var inst_67302 = cljs.core.first(inst_67287);
var inst_67303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67302,(0),null);
var inst_67304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67302,(1),null);
var inst_67305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67304,(0),null);
var inst_67306__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67304,(1),null);
var state_67342__$1 = (function (){var statearr_67428 = state_67342;
(statearr_67428[(35)] = inst_67303);

(statearr_67428[(36)] = inst_67305);

(statearr_67428[(34)] = inst_67306__$1);

return statearr_67428;
})();
if(cljs.core.truth_(inst_67306__$1)){
var statearr_67429_69872 = state_67342__$1;
(statearr_67429_69872[(1)] = (87));

} else {
var statearr_67430_69873 = state_67342__$1;
(statearr_67430_69873[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (39))){
var inst_67090 = (state_67342[(37)]);
var inst_67088 = (state_67342[(38)]);
var inst_67087 = (state_67342[(39)]);
var inst_67089 = (state_67342[(40)]);
var inst_67116 = (state_67342[(2)]);
var inst_67117 = (inst_67090 + (1));
var tmp67421 = inst_67088;
var tmp67422 = inst_67087;
var tmp67423 = inst_67089;
var inst_67087__$1 = tmp67422;
var inst_67088__$1 = tmp67421;
var inst_67089__$1 = tmp67423;
var inst_67090__$1 = inst_67117;
var state_67342__$1 = (function (){var statearr_67431 = state_67342;
(statearr_67431[(37)] = inst_67090__$1);

(statearr_67431[(38)] = inst_67088__$1);

(statearr_67431[(39)] = inst_67087__$1);

(statearr_67431[(40)] = inst_67089__$1);

(statearr_67431[(41)] = inst_67116);

return statearr_67431;
})();
var statearr_67432_69874 = state_67342__$1;
(statearr_67432_69874[(2)] = null);

(statearr_67432_69874[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (88))){
var inst_67305 = (state_67342[(36)]);
var inst_67315 = cljs.core.async.close_BANG_(inst_67305);
var state_67342__$1 = state_67342;
var statearr_67433_69875 = state_67342__$1;
(statearr_67433_69875[(2)] = inst_67315);

(statearr_67433_69875[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (46))){
var inst_67120 = (state_67342[(42)]);
var inst_67124 = cljs.core.chunk_first(inst_67120);
var inst_67125 = cljs.core.chunk_rest(inst_67120);
var inst_67126 = cljs.core.count(inst_67124);
var inst_67087 = inst_67125;
var inst_67088 = inst_67124;
var inst_67089 = inst_67126;
var inst_67090 = (0);
var state_67342__$1 = (function (){var statearr_67443 = state_67342;
(statearr_67443[(37)] = inst_67090);

(statearr_67443[(38)] = inst_67088);

(statearr_67443[(39)] = inst_67087);

(statearr_67443[(40)] = inst_67089);

return statearr_67443;
})();
var statearr_67445_69880 = state_67342__$1;
(statearr_67445_69880[(2)] = null);

(statearr_67445_69880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (4))){
var inst_66976 = (state_67342[(43)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67342,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_66976__$1 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_66978 = (inst_66976__$1 == null);
var inst_66979 = cljs.core.not(inst_66978);
var state_67342__$1 = (function (){var statearr_67446 = state_67342;
(statearr_67446[(43)] = inst_66976__$1);

return statearr_67446;
})();
if(inst_66979){
var statearr_67447_69881 = state_67342__$1;
(statearr_67447_69881[(1)] = (5));

} else {
var statearr_67450_69882 = state_67342__$1;
(statearr_67450_69882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (77))){
var inst_67256 = (state_67342[(7)]);
var inst_67257 = (state_67342[(8)]);
var inst_67254 = (state_67342[(29)]);
var inst_67255 = (state_67342[(22)]);
var inst_67283 = (state_67342[(2)]);
var inst_67284 = (inst_67257 + (1));
var tmp67436 = inst_67256;
var tmp67437 = inst_67254;
var tmp67438 = inst_67255;
var inst_67254__$1 = tmp67437;
var inst_67255__$1 = tmp67438;
var inst_67256__$1 = tmp67436;
var inst_67257__$1 = inst_67284;
var state_67342__$1 = (function (){var statearr_67451 = state_67342;
(statearr_67451[(7)] = inst_67256__$1);

(statearr_67451[(8)] = inst_67257__$1);

(statearr_67451[(29)] = inst_67254__$1);

(statearr_67451[(22)] = inst_67255__$1);

(statearr_67451[(44)] = inst_67283);

return statearr_67451;
})();
var statearr_67452_69886 = state_67342__$1;
(statearr_67452_69886[(2)] = null);

(statearr_67452_69886[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (54))){
var inst_67138 = (state_67342[(45)]);
var inst_67145 = (state_67342[(2)]);
var inst_67146 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_67138,inst_67145);
var state_67342__$1 = state_67342;
var statearr_67453_69889 = state_67342__$1;
(statearr_67453_69889[(2)] = inst_67146);

(statearr_67453_69889[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (92))){
var inst_67305 = (state_67342[(36)]);
var inst_67312 = (state_67342[(2)]);
var inst_67313 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_67305,inst_67312);
var state_67342__$1 = state_67342;
var statearr_67454_69891 = state_67342__$1;
(statearr_67454_69891[(2)] = inst_67313);

(statearr_67454_69891[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (15))){
var inst_67004 = (state_67342[(13)]);
var inst_67001 = (state_67342[(19)]);
var inst_66998 = (state_67342[(20)]);
var inst_67175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67176 = [inst_66998,inst_67001,inst_67004];
var inst_67177 = (new cljs.core.PersistentVector(null,3,(5),inst_67175,inst_67176,null));
var inst_67178 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_67177);
var state_67342__$1 = state_67342;
if(inst_67178){
var statearr_67456_69895 = state_67342__$1;
(statearr_67456_69895[(1)] = (55));

} else {
var statearr_67458_69896 = state_67342__$1;
(statearr_67458_69896[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (48))){
var inst_67155 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
var statearr_67459_69897 = state_67342__$1;
(statearr_67459_69897[(2)] = inst_67155);

(statearr_67459_69897[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (50))){
var inst_67138 = (state_67342[(45)]);
var inst_67149 = cljs.core.async.close_BANG_(inst_67138);
var state_67342__$1 = state_67342;
var statearr_67462_69898 = state_67342__$1;
(statearr_67462_69898[(2)] = inst_67149);

(statearr_67462_69898[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (75))){
var inst_67272 = (state_67342[(23)]);
var state_67342__$1 = state_67342;
if(cljs.core.truth_(inst_67272)){
var statearr_67463_69902 = state_67342__$1;
(statearr_67463_69902[(1)] = (78));

} else {
var statearr_67464_69903 = state_67342__$1;
(statearr_67464_69903[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (21))){
var inst_67011 = (state_67342[(46)]);
var inst_67004 = (state_67342[(13)]);
var inst_67003 = (state_67342[(14)]);
var inst_66997 = (state_67342[(16)]);
var inst_67007 = (state_67342[(17)]);
var inst_66999 = (state_67342[(18)]);
var inst_67001 = (state_67342[(19)]);
var inst_67024 = (state_67342[(47)]);
var inst_67030 = (state_67342[(48)]);
var inst_67038 = (state_67342[(32)]);
var inst_66998 = (state_67342[(20)]);
var inst_67037 = (state_67342[(49)]);
var inst_67034 = (state_67342[(2)]);
var inst_67035 = com.wsscode.common.async_cljs.throw_err(inst_67034);
var inst_67036 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_67024,inst_67030,inst_67035);
var inst_67037__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_67036);
var inst_67038__$1 = cljs.core.keys(inst_67037__$1);
var inst_67039 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_67040 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_67038__$1];
var inst_67041 = cljs.core.PersistentHashMap.fromArrays(inst_67039,inst_67040);
var inst_67042 = com.wsscode.pathom.trace.trace(env,inst_67041);
var inst_67043 = cljs.core.PersistentVector.EMPTY;
var inst_67044 = (function (){var input = inst_66999;
var items = inst_67038__$1;
var items_map = inst_67037__$1;
var key = inst_67003;
var _ = inst_67042;
var trace_id__23022__auto__ = inst_67011;
var map__66975 = inst_66997;
var params = inst_67004;
var e = inst_67001;
var resolver_sym = inst_66998;
var trace_data = inst_67007;
return ((function (input,items,items_map,key,_,trace_id__23022__auto__,map__66975,params,e,resolver_sym,trace_data,inst_67011,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_67024,inst_67030,inst_67038,inst_66998,inst_67037,inst_67034,inst_67035,inst_67036,inst_67037__$1,inst_67038__$1,inst_67039,inst_67040,inst_67041,inst_67042,inst_67043,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items,items_map,key,_,trace_id__23022__auto__,map__66975,params,e,resolver_sym,trace_data,inst_67011,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_67024,inst_67030,inst_67038,inst_66998,inst_67037,inst_67034,inst_67035,inst_67036,inst_67037__$1,inst_67038__$1,inst_67039,inst_67040,inst_67041,inst_67042,inst_67043,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_67045 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_67044);
var inst_67046 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_67043,inst_67045,inst_67038__$1);
var state_67342__$1 = (function (){var statearr_67466 = state_67342;
(statearr_67466[(32)] = inst_67038__$1);

(statearr_67466[(50)] = inst_67046);

(statearr_67466[(49)] = inst_67037__$1);

return statearr_67466;
})();
var statearr_67467_69911 = state_67342__$1;
(statearr_67467_69911[(2)] = null);

(statearr_67467_69911[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (31))){
var inst_67070 = (state_67342[(51)]);
var inst_67081 = (state_67342[(2)]);
var inst_67086 = cljs.core.seq(inst_67070);
var inst_67087 = inst_67086;
var inst_67088 = null;
var inst_67089 = (0);
var inst_67090 = (0);
var state_67342__$1 = (function (){var statearr_67468 = state_67342;
(statearr_67468[(52)] = inst_67081);

(statearr_67468[(37)] = inst_67090);

(statearr_67468[(38)] = inst_67088);

(statearr_67468[(39)] = inst_67087);

(statearr_67468[(40)] = inst_67089);

return statearr_67468;
})();
var statearr_67469_69915 = state_67342__$1;
(statearr_67469_69915[(2)] = null);

(statearr_67469_69915[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (32))){
var inst_67090 = (state_67342[(37)]);
var inst_67089 = (state_67342[(40)]);
var inst_67092 = (inst_67090 < inst_67089);
var inst_67093 = inst_67092;
var state_67342__$1 = state_67342;
if(cljs.core.truth_(inst_67093)){
var statearr_67470_69916 = state_67342__$1;
(statearr_67470_69916[(1)] = (34));

} else {
var statearr_67471_69917 = state_67342__$1;
(statearr_67471_69917[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (40))){
var inst_67105 = (state_67342[(53)]);
var state_67342__$1 = state_67342;
var statearr_67475_69918 = state_67342__$1;
(statearr_67475_69918[(2)] = inst_67105);

(statearr_67475_69918[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (91))){
var inst_67310 = cljs.core.PersistentHashMap.EMPTY;
var state_67342__$1 = state_67342;
var statearr_67476_69919 = state_67342__$1;
(statearr_67476_69919[(2)] = inst_67310);

(statearr_67476_69919[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (56))){
var inst_67004 = (state_67342[(13)]);
var inst_67003 = (state_67342[(14)]);
var inst_66997 = (state_67342[(16)]);
var inst_67007 = (state_67342[(17)]);
var inst_66999 = (state_67342[(18)]);
var inst_67001 = (state_67342[(19)]);
var inst_66998 = (state_67342[(20)]);
var inst_67188 = cljs.core.PersistentVector.EMPTY;
var inst_67189 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_67190 = (function (){var map__66975 = inst_66997;
var resolver_sym = inst_66998;
var input = inst_66999;
var e = inst_67001;
var key = inst_67003;
var params = inst_67004;
var trace_data = inst_67007;
return ((function (map__66975,resolver_sym,input,e,key,params,trace_data,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_66998,inst_67188,inst_67189,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__66960_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__66960_SHARP_),input);
});
;})(map__66975,resolver_sym,input,e,key,params,trace_data,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_66998,inst_67188,inst_67189,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_67191 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_67190);
var inst_67192 = (function (){var map__66975 = inst_66997;
var resolver_sym = inst_66998;
var input = inst_66999;
var e = inst_67001;
var key = inst_67003;
var params = inst_67004;
var trace_data = inst_67007;
return ((function (map__66975,resolver_sym,input,e,key,params,trace_data,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_66998,inst_67188,inst_67189,inst_67190,inst_67191,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__66961_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,cljs.core.second(p1__66961_SHARP_),params], null));
});
;})(map__66975,resolver_sym,input,e,key,params,trace_data,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_66998,inst_67188,inst_67189,inst_67190,inst_67191,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_67193 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_67192);
var inst_67194 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_67189,inst_67191,inst_67193);
var inst_67195 = (function (){var map__66975 = inst_66997;
var resolver_sym = inst_66998;
var input = inst_66999;
var e = inst_67001;
var key = inst_67003;
var params = inst_67004;
var trace_data = inst_67007;
return ((function (map__66975,resolver_sym,input,e,key,params,trace_data,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_66998,inst_67188,inst_67189,inst_67190,inst_67191,inst_67192,inst_67193,inst_67194,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__66959_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__66959_SHARP_,input);
});
;})(map__66975,resolver_sym,input,e,key,params,trace_data,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_66998,inst_67188,inst_67189,inst_67190,inst_67191,inst_67192,inst_67193,inst_67194,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_67196 = com.wsscode.pathom.connect.map_async_serial(inst_67195,processing_sequence);
var state_67342__$1 = (function (){var statearr_67477 = state_67342;
(statearr_67477[(11)] = inst_67188);

(statearr_67477[(15)] = inst_67194);

return statearr_67477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67342__$1,(59),inst_67196);
} else {
if((state_val_67343 === (33))){
var inst_67070 = (state_67342[(51)]);
var inst_67001 = (state_67342[(19)]);
var inst_67162 = (state_67342[(2)]);
var inst_67163 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67164 = cljs.core.PersistentHashMap.EMPTY;
var inst_67165 = [null,inst_67164];
var inst_67166 = (new cljs.core.PersistentVector(null,2,(5),inst_67163,inst_67165,null));
var inst_67167 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_67070,inst_67001,inst_67166);
var inst_67168 = cljs.core.second(inst_67167);
var state_67342__$1 = (function (){var statearr_67478 = state_67342;
(statearr_67478[(54)] = inst_67162);

return statearr_67478;
})();
var statearr_67479_69925 = state_67342__$1;
(statearr_67479_69925[(2)] = inst_67168);

(statearr_67479_69925[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (13))){
var inst_67003 = (state_67342[(14)]);
var inst_66997 = (state_67342[(16)]);
var inst_66999 = (state_67342[(18)]);
var inst_67001 = (state_67342[(19)]);
var inst_66998 = (state_67342[(20)]);
var inst_66997__$1 = (state_67342[(2)]);
var inst_66998__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66997__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var inst_66999__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66997__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_67000 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_67001__$1 = cljs.core.select_keys(inst_67000,inst_66999__$1);
var inst_67002 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_67003__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_67002);
var inst_67004 = com.wsscode.pathom.core.params(env);
var inst_67005 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_67006 = [inst_67003__$1,inst_66998__$1,inst_67001__$1];
var inst_67007 = cljs.core.PersistentHashMap.fromArrays(inst_67005,inst_67006);
var inst_67008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_67342__$1 = (function (){var statearr_67480 = state_67342;
(statearr_67480[(13)] = inst_67004);

(statearr_67480[(14)] = inst_67003__$1);

(statearr_67480[(16)] = inst_66997__$1);

(statearr_67480[(17)] = inst_67007);

(statearr_67480[(18)] = inst_66999__$1);

(statearr_67480[(19)] = inst_67001__$1);

(statearr_67480[(20)] = inst_66998__$1);

return statearr_67480;
})();
if(cljs.core.truth_(inst_67008)){
var statearr_67481_69928 = state_67342__$1;
(statearr_67481_69928[(1)] = (14));

} else {
var statearr_67482_69929 = state_67342__$1;
(statearr_67482_69929[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (22))){
var inst_67038 = (state_67342[(32)]);
var inst_67063 = (state_67342[(55)]);
var inst_67046 = (state_67342[(50)]);
var inst_67063__$1 = (state_67342[(2)]);
var inst_67064 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_67065 = cljs.core.count(inst_67063__$1);
var inst_67066 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_67065];
var inst_67067 = cljs.core.PersistentHashMap.fromArrays(inst_67064,inst_67066);
var inst_67068 = com.wsscode.pathom.trace.trace(env,inst_67067);
var inst_67069 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_67046,inst_67063__$1);
var inst_67070 = cljs.core.zipmap(inst_67038,inst_67069);
var inst_67071 = cljs.core.first(inst_67063__$1);
var inst_67072 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_67071);
var inst_67073 = cljs.core.count(path);
var inst_67074 = (inst_67073 >= (2));
var inst_67075 = ((inst_67072) && (inst_67074));
var state_67342__$1 = (function (){var statearr_67483 = state_67342;
(statearr_67483[(51)] = inst_67070);

(statearr_67483[(56)] = inst_67068);

(statearr_67483[(55)] = inst_67063__$1);

return statearr_67483;
})();
if(cljs.core.truth_(inst_67075)){
var statearr_67484_69931 = state_67342__$1;
(statearr_67484_69931[(1)] = (29));

} else {
var statearr_67485_69932 = state_67342__$1;
(statearr_67485_69932[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (90))){
var inst_67306 = (state_67342[(34)]);
var state_67342__$1 = state_67342;
var statearr_67486_69934 = state_67342__$1;
(statearr_67486_69934[(2)] = inst_67306);

(statearr_67486_69934[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (36))){
var inst_67160 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
var statearr_67487_69937 = state_67342__$1;
(statearr_67487_69937[(2)] = inst_67160);

(statearr_67487_69937[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (41))){
var inst_67109 = cljs.core.PersistentHashMap.EMPTY;
var state_67342__$1 = state_67342;
var statearr_67488_69938 = state_67342__$1;
(statearr_67488_69938[(2)] = inst_67109);

(statearr_67488_69938[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (89))){
var inst_67287 = (state_67342[(33)]);
var inst_67317 = (state_67342[(2)]);
var inst_67318 = cljs.core.next(inst_67287);
var inst_67254 = inst_67318;
var inst_67255 = null;
var inst_67256 = (0);
var inst_67257 = (0);
var state_67342__$1 = (function (){var statearr_67489 = state_67342;
(statearr_67489[(7)] = inst_67256);

(statearr_67489[(8)] = inst_67257);

(statearr_67489[(29)] = inst_67254);

(statearr_67489[(22)] = inst_67255);

(statearr_67489[(57)] = inst_67317);

return statearr_67489;
})();
var statearr_67490_69940 = state_67342__$1;
(statearr_67490_69940[(2)] = null);

(statearr_67490_69940[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (43))){
var inst_67120 = (state_67342[(42)]);
var inst_67122 = cljs.core.chunked_seq_QMARK_(inst_67120);
var state_67342__$1 = state_67342;
if(inst_67122){
var statearr_67491_69944 = state_67342__$1;
(statearr_67491_69944[(1)] = (46));

} else {
var statearr_67492_69945 = state_67342__$1;
(statearr_67492_69945[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (61))){
var inst_67211 = (state_67342[(2)]);
var inst_67212 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_67211);
var state_67342__$1 = state_67342;
var statearr_67493_69946 = state_67342__$1;
(statearr_67493_69946[(2)] = inst_67212);


cljs.core.async.impl.ioc_helpers.process_exception(state_67342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (29))){
var inst_67070 = (state_67342[(51)]);
var inst_67011 = (state_67342[(46)]);
var inst_67004 = (state_67342[(13)]);
var inst_67003 = (state_67342[(14)]);
var inst_67068 = (state_67342[(56)]);
var inst_66997 = (state_67342[(16)]);
var inst_67007 = (state_67342[(17)]);
var inst_66999 = (state_67342[(18)]);
var inst_67001 = (state_67342[(19)]);
var inst_67038 = (state_67342[(32)]);
var inst_66998 = (state_67342[(20)]);
var inst_67063 = (state_67342[(55)]);
var inst_67046 = (state_67342[(50)]);
var inst_67037 = (state_67342[(49)]);
var inst_67077 = (function (){var input = inst_66999;
var items = inst_67038;
var items_map = inst_67037;
var linked_results = inst_67070;
var key = inst_67003;
var channels = inst_67046;
var _ = inst_67068;
var trace_id__23022__auto__ = inst_67011;
var map__66975 = inst_66997;
var params = inst_67004;
var e = inst_67001;
var resolver_sym = inst_66998;
var trace_data = inst_67007;
var batch_result = inst_67063;
return ((function (input,items,items_map,linked_results,key,channels,_,trace_id__23022__auto__,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67070,inst_67011,inst_67004,inst_67003,inst_67068,inst_66997,inst_67007,inst_66999,inst_67001,inst_67038,inst_66998,inst_67063,inst_67046,inst_67037,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items,items_map,linked_results,key,channels,_,trace_id__23022__auto__,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67070,inst_67011,inst_67004,inst_67003,inst_67068,inst_66997,inst_67007,inst_66999,inst_67001,inst_67038,inst_66998,inst_67063,inst_67046,inst_67037,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__67494){
var vec__67495 = p__67494;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67495,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67495,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__67495,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,trace_id__23022__auto__,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67070,inst_67011,inst_67004,inst_67003,inst_67068,inst_66997,inst_67007,inst_66999,inst_67001,inst_67038,inst_66998,inst_67063,inst_67046,inst_67037,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__67495,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,trace_id__23022__auto__,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67070,inst_67011,inst_67004,inst_67003,inst_67068,inst_66997,inst_67007,inst_66999,inst_67001,inst_67038,inst_66998,inst_67063,inst_67046,inst_67037,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__66962_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__66962_SHARP_], 0));
});})(vec__67495,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,trace_id__23022__auto__,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67070,inst_67011,inst_67004,inst_67003,inst_67068,inst_66997,inst_67007,inst_66999,inst_67001,inst_67038,inst_66998,inst_67063,inst_67046,inst_67037,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__67495,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,trace_id__23022__auto__,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67070,inst_67011,inst_67004,inst_67003,inst_67068,inst_66997,inst_67007,inst_66999,inst_67001,inst_67038,inst_66998,inst_67063,inst_67046,inst_67037,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items,items_map,linked_results,key,channels,_,trace_id__23022__auto__,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67070,inst_67011,inst_67004,inst_67003,inst_67068,inst_66997,inst_67007,inst_66999,inst_67001,inst_67038,inst_66998,inst_67063,inst_67046,inst_67037,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(items,batch_result));
});
;})(input,items,items_map,linked_results,key,channels,_,trace_id__23022__auto__,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67070,inst_67011,inst_67004,inst_67003,inst_67068,inst_66997,inst_67007,inst_66999,inst_67001,inst_67038,inst_66998,inst_67063,inst_67046,inst_67037,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_67078 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_67077);
var state_67342__$1 = state_67342;
var statearr_67498_69949 = state_67342__$1;
(statearr_67498_69949[(2)] = inst_67078);

(statearr_67498_69949[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (44))){
var state_67342__$1 = state_67342;
var statearr_67499_69950 = state_67342__$1;
(statearr_67499_69950[(2)] = null);

(statearr_67499_69950[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (6))){
var state_67342__$1 = state_67342;
var statearr_67500_69951 = state_67342__$1;
(statearr_67500_69951[(2)] = false);

(statearr_67500_69951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (28))){
var inst_67056 = (state_67342[(2)]);
var inst_67057 = com.wsscode.common.async_cljs.throw_err(inst_67056);
var state_67342__$1 = state_67342;
var statearr_67501_69952 = state_67342__$1;
(statearr_67501_69952[(2)] = inst_67057);

(statearr_67501_69952[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (64))){
var inst_67216 = (state_67342[(10)]);
var state_67342__$1 = state_67342;
var statearr_67502_69954 = state_67342__$1;
(statearr_67502_69954[(2)] = inst_67216);

(statearr_67502_69954[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (51))){
var inst_67120 = (state_67342[(42)]);
var inst_67151 = (state_67342[(2)]);
var inst_67152 = cljs.core.next(inst_67120);
var inst_67087 = inst_67152;
var inst_67088 = null;
var inst_67089 = (0);
var inst_67090 = (0);
var state_67342__$1 = (function (){var statearr_67503 = state_67342;
(statearr_67503[(37)] = inst_67090);

(statearr_67503[(38)] = inst_67088);

(statearr_67503[(39)] = inst_67087);

(statearr_67503[(40)] = inst_67089);

(statearr_67503[(58)] = inst_67151);

return statearr_67503;
})();
var statearr_67504_69956 = state_67342__$1;
(statearr_67504_69956[(2)] = null);

(statearr_67504_69956[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (25))){
var inst_67052 = (state_67342[(31)]);
var state_67342__$1 = state_67342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67342__$1,(28),inst_67052);
} else {
if((state_val_67343 === (34))){
var inst_67090 = (state_67342[(37)]);
var inst_67088 = (state_67342[(38)]);
var inst_67105 = (state_67342[(53)]);
var inst_67101 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_67088,inst_67090);
var inst_67102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67101,(0),null);
var inst_67103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67101,(1),null);
var inst_67104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67103,(0),null);
var inst_67105__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67103,(1),null);
var state_67342__$1 = (function (){var statearr_67505 = state_67342;
(statearr_67505[(59)] = inst_67102);

(statearr_67505[(60)] = inst_67104);

(statearr_67505[(53)] = inst_67105__$1);

return statearr_67505;
})();
if(cljs.core.truth_(inst_67105__$1)){
var statearr_67506_69961 = state_67342__$1;
(statearr_67506_69961[(1)] = (37));

} else {
var statearr_67507_69962 = state_67342__$1;
(statearr_67507_69962[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (17))){
var inst_67004 = (state_67342[(13)]);
var inst_67001 = (state_67342[(19)]);
var inst_66998 = (state_67342[(20)]);
var inst_67017 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67018 = [inst_66998,inst_67001,inst_67004];
var inst_67019 = (new cljs.core.PersistentVector(null,3,(5),inst_67017,inst_67018,null));
var inst_67020 = com.wsscode.pathom.core.cache_read(env,inst_67019);
var state_67342__$1 = state_67342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67342__$1,(20),inst_67020);
} else {
if((state_val_67343 === (3))){
var inst_66971 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
var statearr_67508_69967 = state_67342__$1;
(statearr_67508_69967[(2)] = inst_66971);


cljs.core.async.impl.ioc_helpers.process_exception(state_67342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (12))){
var inst_66976 = (state_67342[(43)]);
var state_67342__$1 = state_67342;
var statearr_67509_69968 = state_67342__$1;
(statearr_67509_69968[(2)] = inst_66976);

(statearr_67509_69968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (2))){
var inst_67340 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67342__$1,inst_67340);
} else {
if((state_val_67343 === (66))){
var inst_67220 = (state_67342[(2)]);
var inst_67221 = com.wsscode.common.async_cljs.throw_err(inst_67220);
var state_67342__$1 = state_67342;
var statearr_67510_69970 = state_67342__$1;
(statearr_67510_69970[(2)] = inst_67221);

(statearr_67510_69970[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (23))){
var inst_67047 = (state_67342[(2)]);
var inst_67048 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_67047);
var state_67342__$1 = state_67342;
var statearr_67511_69971 = state_67342__$1;
(statearr_67511_69971[(2)] = inst_67048);


cljs.core.async.impl.ioc_helpers.process_exception(state_67342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (47))){
var inst_67139 = (state_67342[(61)]);
var inst_67120 = (state_67342[(42)]);
var inst_67135 = cljs.core.first(inst_67120);
var inst_67136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67135,(0),null);
var inst_67137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67135,(1),null);
var inst_67138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67137,(0),null);
var inst_67139__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67137,(1),null);
var state_67342__$1 = (function (){var statearr_67512 = state_67342;
(statearr_67512[(45)] = inst_67138);

(statearr_67512[(61)] = inst_67139__$1);

(statearr_67512[(62)] = inst_67136);

return statearr_67512;
})();
if(cljs.core.truth_(inst_67139__$1)){
var statearr_67513_69972 = state_67342__$1;
(statearr_67513_69972[(1)] = (49));

} else {
var statearr_67514_69973 = state_67342__$1;
(statearr_67514_69973[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (35))){
var inst_67087 = (state_67342[(39)]);
var inst_67120 = (state_67342[(42)]);
var inst_67120__$1 = cljs.core.seq(inst_67087);
var state_67342__$1 = (function (){var statearr_67515 = state_67342;
(statearr_67515[(42)] = inst_67120__$1);

return statearr_67515;
})();
if(inst_67120__$1){
var statearr_67516_69974 = state_67342__$1;
(statearr_67516_69974[(1)] = (43));

} else {
var statearr_67517_69975 = state_67342__$1;
(statearr_67517_69975[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (82))){
var state_67342__$1 = state_67342;
var statearr_67518_69978 = state_67342__$1;
(statearr_67518_69978[(2)] = null);

(statearr_67518_69978[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (76))){
var inst_67271 = (state_67342[(24)]);
var inst_67281 = cljs.core.async.close_BANG_(inst_67271);
var state_67342__$1 = state_67342;
var statearr_67519_69980 = state_67342__$1;
(statearr_67519_69980[(2)] = inst_67281);

(statearr_67519_69980[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (19))){
var inst_67011 = (state_67342[(46)]);
var inst_67007 = (state_67342[(17)]);
var inst_67171 = (state_67342[(2)]);
var inst_67172 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_67007,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_67173 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_67011,inst_67172);
var state_67342__$1 = (function (){var statearr_67521 = state_67342;
(statearr_67521[(63)] = inst_67173);

return statearr_67521;
})();
var statearr_67522_69982 = state_67342__$1;
(statearr_67522_69982[(2)] = inst_67171);

(statearr_67522_69982[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (57))){
var inst_67336 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
var statearr_67523_69984 = state_67342__$1;
(statearr_67523_69984[(2)] = inst_67336);

(statearr_67523_69984[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (68))){
var state_67342__$1 = state_67342;
var statearr_67525_69985 = state_67342__$1;
(statearr_67525_69985[(2)] = null);

(statearr_67525_69985[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (11))){
var inst_66976 = (state_67342[(43)]);
var inst_66994 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_66976);
var state_67342__$1 = state_67342;
var statearr_67527_69986 = state_67342__$1;
(statearr_67527_69986[(2)] = inst_66994);

(statearr_67527_69986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (9))){
var state_67342__$1 = state_67342;
var statearr_67528_69988 = state_67342__$1;
(statearr_67528_69988[(2)] = false);

(statearr_67528_69988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (5))){
var inst_66976 = (state_67342[(43)]);
var inst_66981 = inst_66976.cljs$lang$protocol_mask$partition0$;
var inst_66982 = (inst_66981 & (64));
var inst_66983 = inst_66976.cljs$core$ISeq$;
var inst_66984 = (cljs.core.PROTOCOL_SENTINEL === inst_66983);
var inst_66985 = ((inst_66982) || (inst_66984));
var state_67342__$1 = state_67342;
if(cljs.core.truth_(inst_66985)){
var statearr_67530_69989 = state_67342__$1;
(statearr_67530_69989[(1)] = (8));

} else {
var statearr_67531_69990 = state_67342__$1;
(statearr_67531_69990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (83))){
var inst_67324 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
var statearr_67532_69991 = state_67342__$1;
(statearr_67532_69991[(2)] = inst_67324);

(statearr_67532_69991[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (14))){
var inst_67004 = (state_67342[(13)]);
var inst_67007 = (state_67342[(17)]);
var inst_67001 = (state_67342[(19)]);
var inst_66998 = (state_67342[(20)]);
var inst_67010 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_67007,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_67011 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_67010);
var inst_67012 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67013 = [inst_66998,inst_67001,inst_67004];
var inst_67014 = (new cljs.core.PersistentVector(null,3,(5),inst_67012,inst_67013,null));
var inst_67015 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_67014);
var state_67342__$1 = (function (){var statearr_67533 = state_67342;
(statearr_67533[(46)] = inst_67011);

return statearr_67533;
})();
if(inst_67015){
var statearr_67534_69992 = state_67342__$1;
(statearr_67534_69992[(1)] = (17));

} else {
var statearr_67535_69993 = state_67342__$1;
(statearr_67535_69993[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (45))){
var inst_67158 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
var statearr_67536_69998 = state_67342__$1;
(statearr_67536_69998[(2)] = inst_67158);

(statearr_67536_69998[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (53))){
var inst_67143 = cljs.core.PersistentHashMap.EMPTY;
var state_67342__$1 = state_67342;
var statearr_67537_69999 = state_67342__$1;
(statearr_67537_69999[(2)] = inst_67143);

(statearr_67537_69999[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (78))){
var inst_67272 = (state_67342[(23)]);
var state_67342__$1 = state_67342;
var statearr_67538_70000 = state_67342__$1;
(statearr_67538_70000[(2)] = inst_67272);

(statearr_67538_70000[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (26))){
var inst_67052 = (state_67342[(31)]);
var state_67342__$1 = state_67342;
var statearr_67539_70001 = state_67342__$1;
(statearr_67539_70001[(2)] = inst_67052);

(statearr_67539_70001[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (16))){
var inst_67338 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
var statearr_67540_70002 = state_67342__$1;
(statearr_67540_70002[(2)] = inst_67338);


cljs.core.async.impl.ioc_helpers.process_exception(state_67342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (81))){
var inst_67287 = (state_67342[(33)]);
var inst_67289 = cljs.core.chunked_seq_QMARK_(inst_67287);
var state_67342__$1 = state_67342;
if(inst_67289){
var statearr_67541_70003 = state_67342__$1;
(statearr_67541_70003[(1)] = (84));

} else {
var statearr_67542_70004 = state_67342__$1;
(statearr_67542_70004[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (79))){
var inst_67276 = cljs.core.PersistentHashMap.EMPTY;
var state_67342__$1 = state_67342;
var statearr_67543_70006 = state_67342__$1;
(statearr_67543_70006[(2)] = inst_67276);

(statearr_67543_70006[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (38))){
var inst_67104 = (state_67342[(60)]);
var inst_67114 = cljs.core.async.close_BANG_(inst_67104);
var state_67342__$1 = state_67342;
var statearr_67544_70007 = state_67342__$1;
(statearr_67544_70007[(2)] = inst_67114);

(statearr_67544_70007[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (87))){
var inst_67306 = (state_67342[(34)]);
var state_67342__$1 = state_67342;
if(cljs.core.truth_(inst_67306)){
var statearr_67545_70008 = state_67342__$1;
(statearr_67545_70008[(1)] = (90));

} else {
var statearr_67546_70009 = state_67342__$1;
(statearr_67546_70009[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (30))){
var state_67342__$1 = state_67342;
var statearr_67547_70010 = state_67342__$1;
(statearr_67547_70010[(2)] = null);

(statearr_67547_70010[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (73))){
var inst_67287 = (state_67342[(33)]);
var inst_67254 = (state_67342[(29)]);
var inst_67287__$1 = cljs.core.seq(inst_67254);
var state_67342__$1 = (function (){var statearr_67548 = state_67342;
(statearr_67548[(33)] = inst_67287__$1);

return statearr_67548;
})();
if(inst_67287__$1){
var statearr_67549_70013 = state_67342__$1;
(statearr_67549_70013[(1)] = (81));

} else {
var statearr_67550_70014 = state_67342__$1;
(statearr_67550_70014[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (10))){
var inst_66989 = (state_67342[(2)]);
var state_67342__$1 = state_67342;
var statearr_67551_70015 = state_67342__$1;
(statearr_67551_70015[(2)] = inst_66989);

(statearr_67551_70015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (18))){
var inst_67011 = (state_67342[(46)]);
var inst_67004 = (state_67342[(13)]);
var inst_67003 = (state_67342[(14)]);
var inst_66997 = (state_67342[(16)]);
var inst_67007 = (state_67342[(17)]);
var inst_66999 = (state_67342[(18)]);
var inst_67001 = (state_67342[(19)]);
var inst_66998 = (state_67342[(20)]);
var inst_67024 = cljs.core.PersistentVector.EMPTY;
var inst_67025 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_67026 = (function (){var map__66975 = inst_66997;
var resolver_sym = inst_66998;
var input = inst_66999;
var e = inst_67001;
var key = inst_67003;
var params = inst_67004;
var trace_data = inst_67007;
var trace_id__23022__auto__ = inst_67011;
return ((function (map__66975,resolver_sym,input,e,key,params,trace_data,trace_id__23022__auto__,inst_67011,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_66998,inst_67024,inst_67025,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__66960_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__66960_SHARP_),input);
});
;})(map__66975,resolver_sym,input,e,key,params,trace_data,trace_id__23022__auto__,inst_67011,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_66998,inst_67024,inst_67025,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_67027 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_67026);
var inst_67028 = (function (){var map__66975 = inst_66997;
var resolver_sym = inst_66998;
var input = inst_66999;
var e = inst_67001;
var key = inst_67003;
var params = inst_67004;
var trace_data = inst_67007;
var trace_id__23022__auto__ = inst_67011;
return ((function (map__66975,resolver_sym,input,e,key,params,trace_data,trace_id__23022__auto__,inst_67011,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_66998,inst_67024,inst_67025,inst_67026,inst_67027,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__66961_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,cljs.core.second(p1__66961_SHARP_),params], null));
});
;})(map__66975,resolver_sym,input,e,key,params,trace_data,trace_id__23022__auto__,inst_67011,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_66998,inst_67024,inst_67025,inst_67026,inst_67027,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_67029 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_67028);
var inst_67030 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_67025,inst_67027,inst_67029);
var inst_67031 = (function (){var map__66975 = inst_66997;
var resolver_sym = inst_66998;
var input = inst_66999;
var e = inst_67001;
var key = inst_67003;
var params = inst_67004;
var trace_data = inst_67007;
var trace_id__23022__auto__ = inst_67011;
return ((function (map__66975,resolver_sym,input,e,key,params,trace_data,trace_id__23022__auto__,inst_67011,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_66998,inst_67024,inst_67025,inst_67026,inst_67027,inst_67028,inst_67029,inst_67030,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__66959_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__66959_SHARP_,input);
});
;})(map__66975,resolver_sym,input,e,key,params,trace_data,trace_id__23022__auto__,inst_67011,inst_67004,inst_67003,inst_66997,inst_67007,inst_66999,inst_67001,inst_66998,inst_67024,inst_67025,inst_67026,inst_67027,inst_67028,inst_67029,inst_67030,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_67032 = com.wsscode.pathom.connect.map_async_serial(inst_67031,processing_sequence);
var state_67342__$1 = (function (){var statearr_67553 = state_67342;
(statearr_67553[(47)] = inst_67024);

(statearr_67553[(48)] = inst_67030);

return statearr_67553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67342__$1,(21),inst_67032);
} else {
if((state_val_67343 === (52))){
var inst_67139 = (state_67342[(61)]);
var state_67342__$1 = state_67342;
var statearr_67554_70018 = state_67342__$1;
(statearr_67554_70018[(2)] = inst_67139);

(statearr_67554_70018[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (67))){
var inst_67235 = (state_67342[(27)]);
var inst_67237 = (state_67342[(28)]);
var inst_67201 = (state_67342[(12)]);
var inst_67004 = (state_67342[(13)]);
var inst_67210 = (state_67342[(21)]);
var inst_67003 = (state_67342[(14)]);
var inst_66997 = (state_67342[(16)]);
var inst_67007 = (state_67342[(17)]);
var inst_66999 = (state_67342[(18)]);
var inst_67202 = (state_67342[(9)]);
var inst_67001 = (state_67342[(19)]);
var inst_67227 = (state_67342[(26)]);
var inst_66998 = (state_67342[(20)]);
var inst_67244 = (function (){var input = inst_66999;
var items = inst_67202;
var items_map = inst_67201;
var linked_results = inst_67237;
var key = inst_67003;
var channels = inst_67210;
var _ = inst_67235;
var map__66975 = inst_66997;
var params = inst_67004;
var e = inst_67001;
var resolver_sym = inst_66998;
var trace_data = inst_67007;
var batch_result = inst_67227;
return ((function (input,items,items_map,linked_results,key,channels,_,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67235,inst_67237,inst_67201,inst_67004,inst_67210,inst_67003,inst_66997,inst_67007,inst_66999,inst_67202,inst_67001,inst_67227,inst_66998,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items,items_map,linked_results,key,channels,_,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67235,inst_67237,inst_67201,inst_67004,inst_67210,inst_67003,inst_66997,inst_67007,inst_66999,inst_67202,inst_67001,inst_67227,inst_66998,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__67555){
var vec__67556 = p__67555;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67556,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67556,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__67556,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67235,inst_67237,inst_67201,inst_67004,inst_67210,inst_67003,inst_66997,inst_67007,inst_66999,inst_67202,inst_67001,inst_67227,inst_66998,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__67556,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67235,inst_67237,inst_67201,inst_67004,inst_67210,inst_67003,inst_66997,inst_67007,inst_66999,inst_67202,inst_67001,inst_67227,inst_66998,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__66962_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__66962_SHARP_], 0));
});})(vec__67556,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67235,inst_67237,inst_67201,inst_67004,inst_67210,inst_67003,inst_66997,inst_67007,inst_66999,inst_67202,inst_67001,inst_67227,inst_66998,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__67556,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67235,inst_67237,inst_67201,inst_67004,inst_67210,inst_67003,inst_66997,inst_67007,inst_66999,inst_67202,inst_67001,inst_67227,inst_66998,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items,items_map,linked_results,key,channels,_,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67235,inst_67237,inst_67201,inst_67004,inst_67210,inst_67003,inst_66997,inst_67007,inst_66999,inst_67202,inst_67001,inst_67227,inst_66998,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(items,batch_result));
});
;})(input,items,items_map,linked_results,key,channels,_,map__66975,params,e,resolver_sym,trace_data,batch_result,inst_67235,inst_67237,inst_67201,inst_67004,inst_67210,inst_67003,inst_66997,inst_67007,inst_66999,inst_67202,inst_67001,inst_67227,inst_66998,state_val_67343,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_67245 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_67244);
var state_67342__$1 = state_67342;
var statearr_67559_70022 = state_67342__$1;
(statearr_67559_70022[(2)] = inst_67245);

(statearr_67559_70022[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (71))){
var inst_67237 = (state_67342[(28)]);
var inst_67001 = (state_67342[(19)]);
var inst_67328 = (state_67342[(2)]);
var inst_67329 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67330 = cljs.core.PersistentHashMap.EMPTY;
var inst_67331 = [null,inst_67330];
var inst_67332 = (new cljs.core.PersistentVector(null,2,(5),inst_67329,inst_67331,null));
var inst_67333 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_67237,inst_67001,inst_67332);
var inst_67334 = cljs.core.second(inst_67333);
var state_67342__$1 = (function (){var statearr_67560 = state_67342;
(statearr_67560[(64)] = inst_67328);

return statearr_67560;
})();
var statearr_67561_70023 = state_67342__$1;
(statearr_67561_70023[(2)] = inst_67334);

(statearr_67561_70023[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (42))){
var inst_67104 = (state_67342[(60)]);
var inst_67111 = (state_67342[(2)]);
var inst_67112 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_67104,inst_67111);
var state_67342__$1 = state_67342;
var statearr_67562_70024 = state_67342__$1;
(statearr_67562_70024[(2)] = inst_67112);

(statearr_67562_70024[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (80))){
var inst_67271 = (state_67342[(24)]);
var inst_67278 = (state_67342[(2)]);
var inst_67279 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_67271,inst_67278);
var state_67342__$1 = state_67342;
var statearr_67563_70025 = state_67342__$1;
(statearr_67563_70025[(2)] = inst_67279);

(statearr_67563_70025[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (37))){
var inst_67105 = (state_67342[(53)]);
var state_67342__$1 = state_67342;
if(cljs.core.truth_(inst_67105)){
var statearr_67564_70027 = state_67342__$1;
(statearr_67564_70027[(1)] = (40));

} else {
var statearr_67565_70028 = state_67342__$1;
(statearr_67565_70028[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (63))){
var inst_67216 = (state_67342[(10)]);
var state_67342__$1 = state_67342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67342__$1,(66),inst_67216);
} else {
if((state_val_67343 === (8))){
var state_67342__$1 = state_67342;
var statearr_67566_70032 = state_67342__$1;
(statearr_67566_70032[(2)] = true);

(statearr_67566_70032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (49))){
var inst_67139 = (state_67342[(61)]);
var state_67342__$1 = state_67342;
if(cljs.core.truth_(inst_67139)){
var statearr_67568_70033 = state_67342__$1;
(statearr_67568_70033[(1)] = (52));

} else {
var statearr_67569_70034 = state_67342__$1;
(statearr_67569_70034[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67343 === (84))){
var inst_67287 = (state_67342[(33)]);
var inst_67291 = cljs.core.chunk_first(inst_67287);
var inst_67292 = cljs.core.chunk_rest(inst_67287);
var inst_67293 = cljs.core.count(inst_67291);
var inst_67254 = inst_67292;
var inst_67255 = inst_67291;
var inst_67256 = inst_67293;
var inst_67257 = (0);
var state_67342__$1 = (function (){var statearr_67570 = state_67342;
(statearr_67570[(7)] = inst_67256);

(statearr_67570[(8)] = inst_67257);

(statearr_67570[(29)] = inst_67254);

(statearr_67570[(22)] = inst_67255);

return statearr_67570;
})();
var statearr_67571_70037 = state_67342__$1;
(statearr_67571_70037[(2)] = null);

(statearr_67571_70037[(1)] = (70));


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
}
}
}
}
}
}
}
}
}
});})(c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
;
return ((function (switch__52035__auto__,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache){
return (function() {
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__52036__auto____0 = (function (){
var statearr_67572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67572[(0)] = com$wsscode$pathom$connect$parallel_batch_$_state_machine__52036__auto__);

(statearr_67572[(1)] = (1));

return statearr_67572;
});
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__52036__auto____1 = (function (state_67342){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_67342);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e67573){if((e67573 instanceof Object)){
var ex__52039__auto__ = e67573;
var statearr_67574_70039 = state_67342;
(statearr_67574_70039[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67573;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70040 = state_67342;
state_67342 = G__70040;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_batch_$_state_machine__52036__auto__ = function(state_67342){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__52036__auto____1.call(this,state_67342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_batch_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$parallel_batch_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
})();
var state__52133__auto__ = (function (){var statearr_67575 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_67575[(6)] = c__52131__auto__);

return statearr_67575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,map__66968,map__66968__$1,env,processing_sequence,path,entity_path_cache))
);

return c__52131__auto__;
});
com.wsscode.pathom.connect.parallel_reader = (function com$wsscode$pathom$connect$parallel_reader(p__67579){
var map__67580 = p__67579;
var map__67580__$1 = (((((!((map__67580 == null))))?(((((map__67580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67580):map__67580);
var env = map__67580__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67580__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67580__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67580__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67580__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var temp__5733__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67582 = temp__5733__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67582,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67582,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out,new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292),(function (){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var params = com.wsscode.pathom.core.params(env);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),plan);
var c__52131__auto___70041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_67955){
var state_val_67956 = (state_67955[(1)]);
if((state_val_67956 === (65))){
var inst_67785 = (state_67955[(7)]);
var inst_67598 = (state_67955[(8)]);
var inst_67597 = (state_67955[(9)]);
var inst_67609 = (state_67955[(10)]);
var inst_67794 = (state_67955[(2)]);
var inst_67795 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_67598,inst_67785);
var tmp67957 = inst_67597;
var inst_67596 = inst_67609;
var inst_67597__$1 = tmp67957;
var inst_67598__$1 = inst_67795;
var state_67955__$1 = (function (){var statearr_67958 = state_67955;
(statearr_67958[(11)] = inst_67596);

(statearr_67958[(8)] = inst_67598__$1);

(statearr_67958[(9)] = inst_67597__$1);

(statearr_67958[(12)] = inst_67794);

return statearr_67958;
})();
var statearr_67959_70044 = state_67955__$1;
(statearr_67959_70044[(2)] = null);

(statearr_67959_70044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (70))){
var inst_67819 = (state_67955[(13)]);
var inst_67653 = (state_67955[(14)]);
var inst_67824 = com.wsscode.pathom.core.add_error(inst_67653,inst_67819);
var state_67955__$1 = state_67955;
var statearr_67960_70045 = state_67955__$1;
(statearr_67960_70045[(2)] = inst_67824);

(statearr_67960_70045[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (62))){
var inst_67785 = (state_67955[(7)]);
var inst_67616 = (state_67955[(15)]);
var inst_67775 = (state_67955[(16)]);
var inst_67652 = (state_67955[(17)]);
var inst_67653 = (state_67955[(14)]);
var inst_67785__$1 = com.wsscode.pathom.connect.output__GT_provides(inst_67652);
var inst_67786 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_67787 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),key,inst_67616];
var inst_67788 = cljs.core.PersistentHashMap.fromArrays(inst_67786,inst_67787);
var inst_67789 = com.wsscode.pathom.trace.trace(inst_67653,inst_67788);
var inst_67790 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_67791 = [inst_67785__$1,inst_67775];
var inst_67792 = cljs.core.PersistentHashMap.fromArrays(inst_67790,inst_67791);
var state_67955__$1 = (function (){var statearr_67961 = state_67955;
(statearr_67961[(7)] = inst_67785__$1);

(statearr_67961[(18)] = inst_67789);

return statearr_67961;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67955__$1,(65),ch,inst_67792);
} else {
if((state_val_67956 === (74))){
var inst_67775 = (state_67955[(16)]);
var inst_67615 = (state_67955[(19)]);
var inst_67833 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_67775,inst_67615,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_67955__$1 = state_67955;
var statearr_67962_70046 = state_67955__$1;
(statearr_67962_70046[(2)] = inst_67833);

(statearr_67962_70046[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (7))){
var inst_67620 = (state_67955[(20)]);
var inst_67625 = inst_67620.cljs$lang$protocol_mask$partition0$;
var inst_67626 = (inst_67625 & (64));
var inst_67627 = inst_67620.cljs$core$ISeq$;
var inst_67628 = (cljs.core.PROTOCOL_SENTINEL === inst_67627);
var inst_67629 = ((inst_67626) || (inst_67628));
var state_67955__$1 = state_67955;
if(cljs.core.truth_(inst_67629)){
var statearr_67967_70047 = state_67955__$1;
(statearr_67967_70047[(1)] = (10));

} else {
var statearr_67968_70048 = state_67955__$1;
(statearr_67968_70048[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (59))){
var inst_67593 = (state_67955[(21)]);
var inst_67608 = (state_67955[(22)]);
var inst_67596 = (state_67955[(11)]);
var inst_67655 = (state_67955[(23)]);
var inst_67659 = (state_67955[(24)]);
var inst_67598 = (state_67955[(8)]);
var inst_67616 = (state_67955[(15)]);
var inst_67775 = (state_67955[(16)]);
var inst_67594 = (state_67955[(25)]);
var inst_67597 = (state_67955[(9)]);
var inst_67652 = (state_67955[(17)]);
var inst_67615 = (state_67955[(19)]);
var inst_67651 = (state_67955[(26)]);
var inst_67609 = (state_67955[(10)]);
var inst_67649 = (state_67955[(27)]);
var inst_67648 = (state_67955[(28)]);
var inst_67759 = (state_67955[(29)]);
var inst_67653 = (state_67955[(14)]);
var inst_67643 = (state_67955[(30)]);
var inst_67760 = (state_67955[(31)]);
var inst_67775__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_67759,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_67776 = (function (){var G__67588 = inst_67596;
var input = inst_67651;
var step = inst_67608;
var key_SINGLEQUOTE_ = inst_67615;
var seq__67602 = inst_67609;
var response = inst_67775__$1;
var seq__67590 = inst_67594;
var cache_QMARK_ = inst_67648;
var out_left = inst_67598;
var map__67614 = inst_67643;
var first__67591 = inst_67593;
var failed_resolvers = inst_67597;
var vec__67589 = plan;
var vec__67601 = inst_67596;
var batch_QMARK_ = inst_67649;
var output = inst_67652;
var env__$2 = inst_67653;
var e = inst_67655;
var resolver_sym = inst_67616;
var trace_data = inst_67659;
var resolver = inst_67643;
var first__67603 = inst_67608;
var replan = inst_67760;
var vec__67611 = inst_67608;
var tail = inst_67609;
return ((function (G__67588,input,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,replan,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67775,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67759,inst_67653,inst_67643,inst_67760,inst_67775__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__67577_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__67577_SHARP_], 0));
});
;})(G__67588,input,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,replan,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67775,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67759,inst_67653,inst_67643,inst_67760,inst_67775__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_67777 = com.wsscode.pathom.core.swap_entity_BANG_(inst_67653,inst_67776);
var inst_67779 = cljs.core.contains_QMARK_(inst_67775__$1,inst_67615);
var inst_67780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67775__$1,inst_67615);
var inst_67781 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_67780) : com.wsscode.pathom.core.break_values.call(null,inst_67780));
var inst_67782 = cljs.core.not(inst_67781);
var inst_67783 = ((inst_67779) && (inst_67782));
var state_67955__$1 = (function (){var statearr_67971 = state_67955;
(statearr_67971[(16)] = inst_67775__$1);

(statearr_67971[(32)] = inst_67777);

return statearr_67971;
})();
if(cljs.core.truth_(inst_67783)){
var statearr_67972_70051 = state_67955__$1;
(statearr_67972_70051[(1)] = (62));

} else {
var statearr_67973_70052 = state_67955__$1;
(statearr_67973_70052[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (86))){
var inst_67897 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_67976_70053 = state_67955__$1;
(statearr_67976_70053[(2)] = inst_67897);

(statearr_67976_70053[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (20))){
var inst_67667 = (state_67955[(33)]);
var inst_67677 = inst_67667.cljs$lang$protocol_mask$partition0$;
var inst_67678 = (inst_67677 & (64));
var inst_67679 = inst_67667.cljs$core$ISeq$;
var inst_67680 = (cljs.core.PROTOCOL_SENTINEL === inst_67679);
var inst_67681 = ((inst_67678) || (inst_67680));
var state_67955__$1 = state_67955;
if(cljs.core.truth_(inst_67681)){
var statearr_67979_70054 = state_67955__$1;
(statearr_67979_70054[(1)] = (23));

} else {
var statearr_67980_70055 = state_67955__$1;
(statearr_67980_70055[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (72))){
var inst_67775 = (state_67955[(16)]);
var inst_67615 = (state_67955[(19)]);
var inst_67827 = (state_67955[(2)]);
var inst_67828 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_67830 = cljs.core.contains_QMARK_(inst_67775,inst_67615);
var inst_67831 = (!(inst_67830));
var state_67955__$1 = (function (){var statearr_67982 = state_67955;
(statearr_67982[(34)] = inst_67827);

(statearr_67982[(35)] = inst_67828);

return statearr_67982;
})();
if(inst_67831){
var statearr_67983_70056 = state_67955__$1;
(statearr_67983_70056[(1)] = (74));

} else {
var statearr_67984_70057 = state_67955__$1;
(statearr_67984_70057[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (58))){
var inst_67945 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_67986_70058 = state_67955__$1;
(statearr_67986_70058[(2)] = inst_67945);

(statearr_67986_70058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (60))){
var inst_67759 = (state_67955[(29)]);
var inst_67853 = com.wsscode.common.async_cljs.error_QMARK_(inst_67759);
var state_67955__$1 = state_67955;
if(inst_67853){
var statearr_67987_70060 = state_67955__$1;
(statearr_67987_70060[(1)] = (80));

} else {
var statearr_67988_70061 = state_67955__$1;
(statearr_67988_70061[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (27))){
var inst_67667 = (state_67955[(33)]);
var state_67955__$1 = state_67955;
var statearr_67991_70063 = state_67955__$1;
(statearr_67991_70063[(2)] = inst_67667);

(statearr_67991_70063[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (1))){
var inst_67592 = cljs.core.seq(plan);
var inst_67593 = cljs.core.first(inst_67592);
var inst_67594 = cljs.core.next(inst_67592);
var inst_67595 = cljs.core.PersistentHashMap.EMPTY;
var inst_67596 = plan;
var inst_67597 = inst_67595;
var inst_67598 = out;
var state_67955__$1 = (function (){var statearr_67992 = state_67955;
(statearr_67992[(21)] = inst_67593);

(statearr_67992[(11)] = inst_67596);

(statearr_67992[(8)] = inst_67598);

(statearr_67992[(25)] = inst_67594);

(statearr_67992[(9)] = inst_67597);

return statearr_67992;
})();
var statearr_67994_70064 = state_67955__$1;
(statearr_67994_70064[(2)] = null);

(statearr_67994_70064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (69))){
var inst_67849 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_67995_70065 = state_67955__$1;
(statearr_67995_70065[(2)] = inst_67849);

(statearr_67995_70065[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (24))){
var state_67955__$1 = state_67955;
var statearr_67997_70066 = state_67955__$1;
(statearr_67997_70066[(2)] = false);

(statearr_67997_70066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (55))){
var inst_67750 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_67998_70067 = state_67955__$1;
(statearr_67998_70067[(2)] = inst_67750);


cljs.core.async.impl.ioc_helpers.process_exception(state_67955__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (85))){
var inst_67616 = (state_67955[(15)]);
var inst_67609 = (state_67955[(10)]);
var inst_67759 = (state_67955[(29)]);
var inst_67653 = (state_67955[(14)]);
var inst_67868 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_67869 = [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),key,inst_67616];
var inst_67870 = cljs.core.PersistentHashMap.fromArrays(inst_67868,inst_67869);
var inst_67871 = com.wsscode.pathom.trace.trace(inst_67653,inst_67870);
var inst_67873 = com.wsscode.pathom.core.add_error(inst_67653,inst_67759);
var inst_67875 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_67877 = cljs.core.seq(inst_67609);
var state_67955__$1 = (function (){var statearr_67999 = state_67955;
(statearr_67999[(36)] = inst_67873);

(statearr_67999[(37)] = inst_67875);

(statearr_67999[(38)] = inst_67871);

return statearr_67999;
})();
if(inst_67877){
var statearr_68000_70068 = state_67955__$1;
(statearr_68000_70068[(1)] = (88));

} else {
var statearr_68001_70069 = state_67955__$1;
(statearr_68001_70069[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (39))){
var inst_67593 = (state_67955[(21)]);
var inst_67608 = (state_67955[(22)]);
var inst_67596 = (state_67955[(11)]);
var inst_67655 = (state_67955[(23)]);
var inst_67659 = (state_67955[(24)]);
var inst_67598 = (state_67955[(8)]);
var inst_67616 = (state_67955[(15)]);
var inst_67594 = (state_67955[(25)]);
var inst_67597 = (state_67955[(9)]);
var inst_67652 = (state_67955[(17)]);
var inst_67615 = (state_67955[(19)]);
var inst_67651 = (state_67955[(26)]);
var inst_67609 = (state_67955[(10)]);
var inst_67649 = (state_67955[(27)]);
var inst_67648 = (state_67955[(28)]);
var inst_67653 = (state_67955[(14)]);
var inst_67643 = (state_67955[(30)]);
var inst_67712 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_67659,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_67713 = com.wsscode.pathom.trace.trace(inst_67653,inst_67712);
var inst_67714 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67715 = [inst_67616,inst_67655,params];
var inst_67716 = (new cljs.core.PersistentVector(null,3,(5),inst_67714,inst_67715,null));
var inst_67717 = (function (){var G__67588 = inst_67596;
var input = inst_67651;
var step = inst_67608;
var key_SINGLEQUOTE_ = inst_67615;
var seq__67602 = inst_67609;
var seq__67590 = inst_67594;
var cache_QMARK_ = inst_67648;
var out_left = inst_67598;
var map__67614 = inst_67643;
var first__67591 = inst_67593;
var failed_resolvers = inst_67597;
var vec__67589 = plan;
var vec__67601 = inst_67596;
var batch_QMARK_ = inst_67649;
var output = inst_67652;
var env__$2 = inst_67653;
var e = inst_67655;
var resolver_sym = inst_67616;
var trace_data = inst_67659;
var resolver = inst_67643;
var first__67603 = inst_67608;
var vec__67611 = inst_67608;
var tail = inst_67609;
return ((function (G__67588,input,step,key_SINGLEQUOTE_,seq__67602,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67653,inst_67643,inst_67712,inst_67713,inst_67714,inst_67715,inst_67716,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var c__52131__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67653,inst_67643,inst_67712,inst_67713,inst_67714,inst_67715,inst_67716,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67653,inst_67643,inst_67712,inst_67713,inst_67714,inst_67715,inst_67716,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_68041){
var state_val_68042 = (state_68041[(1)]);
if((state_val_68042 === (7))){
var inst_68032 = (state_68041[(7)]);
var inst_68032__$1 = (state_68041[(2)]);
var state_68041__$1 = (function (){var statearr_68048 = state_68041;
(statearr_68048[(7)] = inst_68032__$1);

return statearr_68048;
})();
if(cljs.core.truth_(inst_68032__$1)){
var statearr_68049_70070 = state_68041__$1;
(statearr_68049_70070[(1)] = (9));

} else {
var statearr_68050_70071 = state_68041__$1;
(statearr_68050_70071[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68042 === (1))){
var state_68041__$1 = state_68041;
var statearr_68051_70072 = state_68041__$1;
(statearr_68051_70072[(2)] = null);

(statearr_68051_70072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68042 === (4))){
var inst_68025 = (state_68041[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_68041,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_68025__$1 = com.wsscode.pathom.connect.call_resolver(env__$2,e);
var inst_68026 = com.wsscode.common.async_cljs.chan_QMARK_(inst_68025__$1);
var state_68041__$1 = (function (){var statearr_68052 = state_68041;
(statearr_68052[(8)] = inst_68025__$1);

return statearr_68052;
})();
if(inst_68026){
var statearr_68053_70073 = state_68041__$1;
(statearr_68053_70073[(1)] = (5));

} else {
var statearr_68057_70074 = state_68041__$1;
(statearr_68057_70074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68042 === (6))){
var inst_68025 = (state_68041[(8)]);
var state_68041__$1 = state_68041;
var statearr_68058_70075 = state_68041__$1;
(statearr_68058_70075[(2)] = inst_68025);

(statearr_68058_70075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68042 === (3))){
var inst_68021 = (state_68041[(2)]);
var state_68041__$1 = state_68041;
var statearr_68060_70076 = state_68041__$1;
(statearr_68060_70076[(2)] = inst_68021);


cljs.core.async.impl.ioc_helpers.process_exception(state_68041__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68042 === (2))){
var inst_68039 = (state_68041[(2)]);
var state_68041__$1 = state_68041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68041__$1,inst_68039);
} else {
if((state_val_68042 === (11))){
var inst_68037 = (state_68041[(2)]);
var state_68041__$1 = state_68041;
var statearr_68061_70077 = state_68041__$1;
(statearr_68061_70077[(2)] = inst_68037);


cljs.core.async.impl.ioc_helpers.process_exception(state_68041__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68042 === (9))){
var inst_68032 = (state_68041[(7)]);
var state_68041__$1 = state_68041;
var statearr_68062_70078 = state_68041__$1;
(statearr_68062_70078[(2)] = inst_68032);

(statearr_68062_70078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68042 === (5))){
var inst_68025 = (state_68041[(8)]);
var state_68041__$1 = state_68041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68041__$1,(8),inst_68025);
} else {
if((state_val_68042 === (10))){
var inst_68035 = cljs.core.PersistentHashMap.EMPTY;
var state_68041__$1 = state_68041;
var statearr_68064_70079 = state_68041__$1;
(statearr_68064_70079[(2)] = inst_68035);

(statearr_68064_70079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68042 === (8))){
var inst_68029 = (state_68041[(2)]);
var state_68041__$1 = state_68041;
var statearr_68066_70080 = state_68041__$1;
(statearr_68066_70080[(2)] = inst_68029);

(statearr_68066_70080[(1)] = (7));


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
});})(c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67653,inst_67643,inst_67712,inst_67713,inst_67714,inst_67715,inst_67716,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__52035__auto__,c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67653,inst_67643,inst_67712,inst_67713,inst_67714,inst_67715,inst_67716,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____0 = (function (){
var statearr_68091 = [null,null,null,null,null,null,null,null,null];
(statearr_68091[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__);

(statearr_68091[(1)] = (1));

return statearr_68091;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____1 = (function (state_68041){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_68041);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e68097){if((e68097 instanceof Object)){
var ex__52039__auto__ = e68097;
var statearr_68102_70082 = state_68041;
(statearr_68102_70082[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70086 = state_68041;
state_68041 = G__70086;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__ = function(state_68041){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____1.call(this,state_68041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67653,inst_67643,inst_67712,inst_67713,inst_67714,inst_67715,inst_67716,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__52133__auto__ = (function (){var statearr_68104 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_68104[(6)] = c__52131__auto____$1);

return statearr_68104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67653,inst_67643,inst_67712,inst_67713,inst_67714,inst_67715,inst_67716,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__52131__auto____$1;
});
;})(G__67588,input,step,key_SINGLEQUOTE_,seq__67602,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67653,inst_67643,inst_67712,inst_67713,inst_67714,inst_67715,inst_67716,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_67718 = com.wsscode.pathom.core.cached_async(inst_67653,inst_67716,inst_67717);
var state_67955__$1 = (function (){var statearr_68108 = state_67955;
(statearr_68108[(39)] = inst_67713);

return statearr_68108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67955__$1,(42),inst_67718);
} else {
if((state_val_67956 === (88))){
var inst_67883 = [key];
var inst_67884 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_67885 = cljs.core.PersistentHashMap.fromArrays(inst_67883,inst_67884);
var state_67955__$1 = state_67955;
var statearr_68111_70088 = state_67955__$1;
(statearr_68111_70088[(2)] = inst_67885);

(statearr_68111_70088[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (46))){
var inst_67752 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68118_70089 = state_67955__$1;
(statearr_68118_70089[(2)] = inst_67752);

(statearr_68118_70089[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (4))){
var inst_67608 = (state_67955[(22)]);
var inst_67620 = (state_67955[(20)]);
var inst_67616 = (state_67955[(15)]);
var inst_67615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67608,(0),null);
var inst_67616__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67608,(1),null);
var inst_67617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67618 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_67616__$1];
var inst_67619 = (new cljs.core.PersistentVector(null,2,(5),inst_67617,inst_67618,null));
var inst_67620__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_67619);
var inst_67622 = (inst_67620__$1 == null);
var inst_67623 = cljs.core.not(inst_67622);
var state_67955__$1 = (function (){var statearr_68127 = state_67955;
(statearr_68127[(20)] = inst_67620__$1);

(statearr_68127[(15)] = inst_67616__$1);

(statearr_68127[(19)] = inst_67615);

return statearr_68127;
})();
if(inst_67623){
var statearr_68129_70090 = state_67955__$1;
(statearr_68129_70090[(1)] = (7));

} else {
var statearr_68130_70091 = state_67955__$1;
(statearr_68130_70091[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (77))){
var inst_67836 = (state_67955[(40)]);
var inst_67615 = (state_67955[(19)]);
var inst_67839 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_67836,inst_67615,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var state_67955__$1 = state_67955;
var statearr_68132_70092 = state_67955__$1;
(statearr_68132_70092[(2)] = inst_67839);

(statearr_68132_70092[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (95))){
var inst_67907 = (state_67955[(41)]);
var inst_67912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67907,(0),null);
var inst_67913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67907,(1),null);
var inst_67914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67907,(2),null);
var inst_67596 = inst_67912;
var inst_67597 = inst_67913;
var inst_67598 = inst_67914;
var state_67955__$1 = (function (){var statearr_68134 = state_67955;
(statearr_68134[(11)] = inst_67596);

(statearr_68134[(8)] = inst_67598);

(statearr_68134[(9)] = inst_67597);

return statearr_68134;
})();
var statearr_68135_70095 = state_67955__$1;
(statearr_68135_70095[(2)] = null);

(statearr_68135_70095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (54))){
var inst_67748 = cljs.core.PersistentHashMap.EMPTY;
var state_67955__$1 = state_67955;
var statearr_68139_70096 = state_67955__$1;
(statearr_68139_70096[(2)] = inst_67748);

(statearr_68139_70096[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (92))){
var state_67955__$1 = state_67955;
var statearr_68140_70097 = state_67955__$1;
(statearr_68140_70097[(2)] = null);

(statearr_68140_70097[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (15))){
var inst_67655 = (state_67955[(23)]);
var inst_67616 = (state_67955[(15)]);
var inst_67615 = (state_67955[(19)]);
var inst_67651 = (state_67955[(26)]);
var inst_67653 = (state_67955[(14)]);
var inst_67643 = (state_67955[(30)]);
var inst_67643__$1 = (state_67955[(2)]);
var inst_67648 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_67643__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_67649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67643__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_67651__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67643__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_67652 = com.wsscode.pathom.connect.resolver__GT_output(env__$1,inst_67616);
var inst_67653__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_67643__$1);
var inst_67654 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_67653__$1);
var inst_67655__$1 = cljs.core.select_keys(inst_67654,inst_67651__$1);
var inst_67657 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_67658 = [key,inst_67616,inst_67655__$1];
var inst_67659 = cljs.core.PersistentHashMap.fromArrays(inst_67657,inst_67658);
var inst_67660 = cljs.core.contains_QMARK_(waiting,inst_67615);
var state_67955__$1 = (function (){var statearr_68146 = state_67955;
(statearr_68146[(23)] = inst_67655__$1);

(statearr_68146[(24)] = inst_67659);

(statearr_68146[(17)] = inst_67652);

(statearr_68146[(26)] = inst_67651__$1);

(statearr_68146[(27)] = inst_67649);

(statearr_68146[(28)] = inst_67648);

(statearr_68146[(14)] = inst_67653__$1);

(statearr_68146[(30)] = inst_67643__$1);

return statearr_68146;
})();
if(inst_67660){
var statearr_68147_70101 = state_67955__$1;
(statearr_68147_70101[(1)] = (16));

} else {
var statearr_68148_70102 = state_67955__$1;
(statearr_68148_70102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (48))){
var inst_67655 = (state_67955[(23)]);
var inst_67736 = (state_67955[(42)]);
var inst_67653 = (state_67955[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67955,(47),new cljs.core.Keyword(null,"default","default",-1987822328),null,(46));
var inst_67736__$1 = com.wsscode.pathom.connect.call_resolver(inst_67653,inst_67655);
var inst_67737 = com.wsscode.common.async_cljs.chan_QMARK_(inst_67736__$1);
var state_67955__$1 = (function (){var statearr_68149 = state_67955;
(statearr_68149[(42)] = inst_67736__$1);

return statearr_68149;
})();
if(inst_67737){
var statearr_68150_70104 = state_67955__$1;
(statearr_68150_70104[(1)] = (49));

} else {
var statearr_68152_70106 = state_67955__$1;
(statearr_68152_70106[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (50))){
var inst_67736 = (state_67955[(42)]);
var state_67955__$1 = state_67955;
var statearr_68153_70107 = state_67955__$1;
(statearr_68153_70107[(2)] = inst_67736);

(statearr_68153_70107[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (75))){
var inst_67775 = (state_67955[(16)]);
var state_67955__$1 = state_67955;
var statearr_68155_70108 = state_67955__$1;
(statearr_68155_70108[(2)] = inst_67775);

(statearr_68155_70108[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (21))){
var state_67955__$1 = state_67955;
var statearr_68156_70109 = state_67955__$1;
(statearr_68156_70109[(2)] = false);

(statearr_68156_70109[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (31))){
var inst_67698 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68157_70110 = state_67955__$1;
(statearr_68157_70110[(2)] = inst_67698);

(statearr_68157_70110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (32))){
var inst_67649 = (state_67955[(27)]);
var state_67955__$1 = state_67955;
if(cljs.core.truth_(inst_67649)){
var statearr_68161_70111 = state_67955__$1;
(statearr_68161_70111[(1)] = (35));

} else {
var statearr_68162_70112 = state_67955__$1;
(statearr_68162_70112[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (40))){
var inst_67722 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68165_70113 = state_67955__$1;
(statearr_68165_70113[(2)] = inst_67722);

(statearr_68165_70113[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (91))){
var inst_67759 = (state_67955[(29)]);
var inst_67760 = (state_67955[(31)]);
var inst_67900 = cljs.core.PersistentHashMap.EMPTY;
var inst_67901 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_67902 = [inst_67759];
var inst_67903 = cljs.core.PersistentHashMap.fromArrays(inst_67901,inst_67902);
var inst_67904 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_67903);
var inst_67905 = (inst_67760.cljs$core$IFn$_invoke$arity$2 ? inst_67760.cljs$core$IFn$_invoke$arity$2(inst_67900,inst_67904) : inst_67760.call(null,inst_67900,inst_67904));
var state_67955__$1 = state_67955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67955__$1,(94),inst_67905);
} else {
if((state_val_67956 === (56))){
var inst_67598 = (state_67955[(8)]);
var inst_67597 = (state_67955[(9)]);
var inst_67609 = (state_67955[(10)]);
var inst_67653 = (state_67955[(14)]);
var inst_67767 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_67653);
var inst_67768 = cljs.core.keys(inst_67767);
var inst_67769 = cljs.core.set(inst_67768);
var inst_67770 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_67598,inst_67769);
var tmp68163 = inst_67597;
var inst_67596 = inst_67609;
var inst_67597__$1 = tmp68163;
var inst_67598__$1 = inst_67770;
var state_67955__$1 = (function (){var statearr_68168 = state_67955;
(statearr_68168[(11)] = inst_67596);

(statearr_68168[(8)] = inst_67598__$1);

(statearr_68168[(9)] = inst_67597__$1);

return statearr_68168;
})();
var statearr_68169_70114 = state_67955__$1;
(statearr_68169_70114[(2)] = null);

(statearr_68169_70114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (33))){
var state_67955__$1 = state_67955;
var statearr_68170_70116 = state_67955__$1;
(statearr_68170_70116[(1)] = (43));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (13))){
var inst_67620 = (state_67955[(20)]);
var inst_67640 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_67620);
var state_67955__$1 = state_67955;
var statearr_68172_70118 = state_67955__$1;
(statearr_68172_70118[(2)] = inst_67640);

(statearr_68172_70118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (22))){
var inst_67688 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
if(cljs.core.truth_(inst_67688)){
var statearr_68177_70119 = state_67955__$1;
(statearr_68177_70119[(1)] = (26));

} else {
var statearr_68178_70120 = state_67955__$1;
(statearr_68178_70120[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (90))){
var inst_67759 = (state_67955[(29)]);
var inst_67875 = (state_67955[(37)]);
var inst_67890 = (state_67955[(2)]);
var inst_67891 = [out,inst_67759,inst_67890];
var inst_67892 = cljs.core.PersistentHashMap.fromArrays(inst_67875,inst_67891);
var state_67955__$1 = state_67955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67955__$1,(87),ch,inst_67892);
} else {
if((state_val_67956 === (36))){
var inst_67649 = (state_67955[(27)]);
var state_67955__$1 = state_67955;
var statearr_68179_70121 = state_67955__$1;
(statearr_68179_70121[(2)] = inst_67649);

(statearr_68179_70121[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (41))){
var inst_67710 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68180_70122 = state_67955__$1;
(statearr_68180_70122[(2)] = inst_67710);

(statearr_68180_70122[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (89))){
var inst_67598 = (state_67955[(8)]);
var inst_67887 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var inst_67888 = cljs.core.zipmap(inst_67598,inst_67887);
var state_67955__$1 = state_67955;
var statearr_68181_70123 = state_67955__$1;
(statearr_68181_70123[(2)] = inst_67888);

(statearr_68181_70123[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (43))){
var state_67955__$1 = state_67955;
var statearr_68182_70124 = state_67955__$1;
(statearr_68182_70124[(2)] = null);

(statearr_68182_70124[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (61))){
var inst_67943 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68183_70129 = state_67955__$1;
(statearr_68183_70129[(2)] = inst_67943);

(statearr_68183_70129[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (29))){
var inst_67694 = (state_67955[(43)]);
var state_67955__$1 = state_67955;
var statearr_68184_70130 = state_67955__$1;
(statearr_68184_70130[(2)] = inst_67694);

(statearr_68184_70130[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (44))){
var state_67955__$1 = state_67955;
var statearr_68185_70131 = state_67955__$1;
(statearr_68185_70131[(2)] = null);

(statearr_68185_70131[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (93))){
var inst_67939 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68186_70132 = state_67955__$1;
(statearr_68186_70132[(2)] = inst_67939);

(statearr_68186_70132[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (6))){
var inst_67949 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68187_70133 = state_67955__$1;
(statearr_68187_70133[(2)] = inst_67949);

(statearr_68187_70133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (28))){
var inst_67694 = (state_67955[(43)]);
var inst_67693 = (state_67955[(2)]);
var inst_67694__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67693,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var state_67955__$1 = (function (){var statearr_68188 = state_67955;
(statearr_68188[(43)] = inst_67694__$1);

return statearr_68188;
})();
if(cljs.core.truth_(inst_67694__$1)){
var statearr_68189_70134 = state_67955__$1;
(statearr_68189_70134[(1)] = (29));

} else {
var statearr_68190_70135 = state_67955__$1;
(statearr_68190_70135[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (64))){
var inst_67851 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68191_70136 = state_67955__$1;
(statearr_68191_70136[(2)] = inst_67851);

(statearr_68191_70136[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (51))){
var inst_67745 = (state_67955[(44)]);
var inst_67745__$1 = (state_67955[(2)]);
var state_67955__$1 = (function (){var statearr_68192 = state_67955;
(statearr_68192[(44)] = inst_67745__$1);

return statearr_68192;
})();
if(cljs.core.truth_(inst_67745__$1)){
var statearr_68193_70137 = state_67955__$1;
(statearr_68193_70137[(1)] = (53));

} else {
var statearr_68194_70138 = state_67955__$1;
(statearr_68194_70138[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (25))){
var inst_67685 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68195_70139 = state_67955__$1;
(statearr_68195_70139[(2)] = inst_67685);

(statearr_68195_70139[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (34))){
var inst_67757 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68196_70140 = state_67955__$1;
(statearr_68196_70140[(2)] = inst_67757);

(statearr_68196_70140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (17))){
var inst_67648 = (state_67955[(28)]);
var state_67955__$1 = state_67955;
if(cljs.core.truth_(inst_67648)){
var statearr_68197_70141 = state_67955__$1;
(statearr_68197_70141[(1)] = (32));

} else {
var statearr_68198_70142 = state_67955__$1;
(statearr_68198_70142[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (3))){
var inst_67951 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67955__$1,inst_67951);
} else {
if((state_val_67956 === (12))){
var inst_67635 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68199_70144 = state_67955__$1;
(statearr_68199_70144[(2)] = inst_67635);

(statearr_68199_70144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (2))){
var inst_67608 = (state_67955[(22)]);
var inst_67596 = (state_67955[(11)]);
var inst_67607 = cljs.core.seq(inst_67596);
var inst_67608__$1 = cljs.core.first(inst_67607);
var inst_67609 = cljs.core.next(inst_67607);
var state_67955__$1 = (function (){var statearr_68200 = state_67955;
(statearr_68200[(22)] = inst_67608__$1);

(statearr_68200[(10)] = inst_67609);

return statearr_68200;
})();
if(cljs.core.truth_(inst_67608__$1)){
var statearr_68201_70147 = state_67955__$1;
(statearr_68201_70147[(1)] = (4));

} else {
var statearr_68202_70148 = state_67955__$1;
(statearr_68202_70148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (66))){
var inst_67804 = (state_67955[(45)]);
var inst_67804__$1 = (state_67955[(2)]);
var state_67955__$1 = (function (){var statearr_68203 = state_67955;
(statearr_68203[(45)] = inst_67804__$1);

return statearr_68203;
})();
if(cljs.core.truth_(inst_67804__$1)){
var statearr_68204_70149 = state_67955__$1;
(statearr_68204_70149[(1)] = (67));

} else {
var statearr_68205_70150 = state_67955__$1;
(statearr_68205_70150[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (23))){
var state_67955__$1 = state_67955;
var statearr_68206_70151 = state_67955__$1;
(statearr_68206_70151[(2)] = true);

(statearr_68206_70151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (47))){
var inst_67725 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68207_70152 = state_67955__$1;
(statearr_68207_70152[(2)] = inst_67725);


cljs.core.async.impl.ioc_helpers.process_exception(state_67955__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (35))){
var state_67955__$1 = state_67955;
var statearr_68208_70153 = state_67955__$1;
(statearr_68208_70153[(2)] = processing_sequence);

(statearr_68208_70153[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (82))){
var inst_67941 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68209_70155 = state_67955__$1;
(statearr_68209_70155[(2)] = inst_67941);

(statearr_68209_70155[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (76))){
var inst_67609 = (state_67955[(10)]);
var inst_67836 = (state_67955[(2)]);
var inst_67837 = cljs.core.seq(inst_67609);
var state_67955__$1 = (function (){var statearr_68212 = state_67955;
(statearr_68212[(40)] = inst_67836);

return statearr_68212;
})();
if(inst_67837){
var statearr_68213_70156 = state_67955__$1;
(statearr_68213_70156[(1)] = (77));

} else {
var statearr_68214_70157 = state_67955__$1;
(statearr_68214_70157[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (97))){
var inst_67936 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68215_70158 = state_67955__$1;
(statearr_68215_70158[(2)] = inst_67936);

(statearr_68215_70158[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (19))){
var inst_67667 = (state_67955[(33)]);
var inst_67667__$1 = (state_67955[(2)]);
var inst_67670 = (inst_67667__$1 == null);
var inst_67671 = cljs.core.not(inst_67670);
var state_67955__$1 = (function (){var statearr_68216 = state_67955;
(statearr_68216[(33)] = inst_67667__$1);

return statearr_68216;
})();
if(inst_67671){
var statearr_68218_70159 = state_67955__$1;
(statearr_68218_70159[(1)] = (20));

} else {
var statearr_68219_70160 = state_67955__$1;
(statearr_68219_70160[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (57))){
var inst_67759 = (state_67955[(29)]);
var inst_67773 = cljs.core.map_QMARK_(inst_67759);
var state_67955__$1 = state_67955;
if(inst_67773){
var statearr_68220_70161 = state_67955__$1;
(statearr_68220_70161[(1)] = (59));

} else {
var statearr_68221_70162 = state_67955__$1;
(statearr_68221_70162[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (68))){
var inst_67593 = (state_67955[(21)]);
var inst_67608 = (state_67955[(22)]);
var inst_67596 = (state_67955[(11)]);
var inst_67655 = (state_67955[(23)]);
var inst_67659 = (state_67955[(24)]);
var inst_67598 = (state_67955[(8)]);
var inst_67819 = (state_67955[(13)]);
var inst_67616 = (state_67955[(15)]);
var inst_67775 = (state_67955[(16)]);
var inst_67594 = (state_67955[(25)]);
var inst_67804 = (state_67955[(45)]);
var inst_67597 = (state_67955[(9)]);
var inst_67652 = (state_67955[(17)]);
var inst_67615 = (state_67955[(19)]);
var inst_67651 = (state_67955[(26)]);
var inst_67609 = (state_67955[(10)]);
var inst_67649 = (state_67955[(27)]);
var inst_67648 = (state_67955[(28)]);
var inst_67653 = (state_67955[(14)]);
var inst_67643 = (state_67955[(30)]);
var inst_67760 = (state_67955[(31)]);
var inst_67816 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_67817 = [inst_67775,inst_67615];
var inst_67818 = cljs.core.PersistentHashMap.fromArrays(inst_67816,inst_67817);
var inst_67819__$1 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_67818);
var inst_67820 = (function (){var G__67588 = inst_67596;
var input = inst_67651;
var temp__5733__auto____$1 = inst_67804;
var step = inst_67608;
var key_SINGLEQUOTE_ = inst_67615;
var seq__67602 = inst_67609;
var response = inst_67775;
var seq__67590 = inst_67594;
var cache_QMARK_ = inst_67648;
var out_left = inst_67598;
var map__67614 = inst_67643;
var first__67591 = inst_67593;
var failed_resolvers = inst_67597;
var vec__67589 = plan;
var vec__67601 = inst_67596;
var err = inst_67819__$1;
var batch_QMARK_ = inst_67649;
var output = inst_67652;
var env__$2 = inst_67653;
var e = inst_67655;
var resolver_sym = inst_67616;
var trace_data = inst_67659;
var resolver = inst_67643;
var first__67603 = inst_67608;
var replan = inst_67760;
var vec__67611 = inst_67608;
var tail = inst_67609;
return ((function (G__67588,input,temp__5733__auto____$1,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,err,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,replan,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67819,inst_67616,inst_67775,inst_67594,inst_67804,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67653,inst_67643,inst_67760,inst_67816,inst_67817,inst_67818,inst_67819__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__67578_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__67578_SHARP_], 0));
});
;})(G__67588,input,temp__5733__auto____$1,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,err,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,replan,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67819,inst_67616,inst_67775,inst_67594,inst_67804,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67653,inst_67643,inst_67760,inst_67816,inst_67817,inst_67818,inst_67819__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_67821 = com.wsscode.pathom.core.swap_entity_BANG_(inst_67653,inst_67820);
var inst_67822 = cljs.core.seq(inst_67609);
var state_67955__$1 = (function (){var statearr_68222 = state_67955;
(statearr_68222[(46)] = inst_67821);

(statearr_68222[(13)] = inst_67819__$1);

return statearr_68222;
})();
if(inst_67822){
var statearr_68223_70163 = state_67955__$1;
(statearr_68223_70163[(1)] = (70));

} else {
var statearr_68224_70164 = state_67955__$1;
(statearr_68224_70164[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (11))){
var state_67955__$1 = state_67955;
var statearr_68225_70165 = state_67955__$1;
(statearr_68225_70165[(2)] = false);

(statearr_68225_70165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (9))){
var inst_67638 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
if(cljs.core.truth_(inst_67638)){
var statearr_68226_70166 = state_67955__$1;
(statearr_68226_70166[(1)] = (13));

} else {
var statearr_68227_70167 = state_67955__$1;
(statearr_68227_70167[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (5))){
var inst_67947 = cljs.core.async.close_BANG_(ch);
var state_67955__$1 = state_67955;
var statearr_68228_70168 = state_67955__$1;
(statearr_68228_70168[(2)] = inst_67947);

(statearr_68228_70168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (83))){
var inst_67858 = (state_67955[(47)]);
var inst_67858__$1 = (state_67955[(2)]);
var state_67955__$1 = (function (){var statearr_68229 = state_67955;
(statearr_68229[(47)] = inst_67858__$1);

return statearr_68229;
})();
if(cljs.core.truth_(inst_67858__$1)){
var statearr_68230_70169 = state_67955__$1;
(statearr_68230_70169[(1)] = (84));

} else {
var statearr_68231_70170 = state_67955__$1;
(statearr_68231_70170[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (14))){
var inst_67620 = (state_67955[(20)]);
var state_67955__$1 = state_67955;
var statearr_68232_70171 = state_67955__$1;
(statearr_68232_70171[(2)] = inst_67620);

(statearr_68232_70171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (45))){
var inst_67755 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68233_70172 = state_67955__$1;
(statearr_68233_70172[(2)] = inst_67755);

(statearr_68233_70172[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (53))){
var inst_67745 = (state_67955[(44)]);
var state_67955__$1 = state_67955;
var statearr_68234_70173 = state_67955__$1;
(statearr_68234_70173[(2)] = inst_67745);

(statearr_68234_70173[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (78))){
var inst_67836 = (state_67955[(40)]);
var state_67955__$1 = state_67955;
var statearr_68235_70174 = state_67955__$1;
(statearr_68235_70174[(2)] = inst_67836);

(statearr_68235_70174[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (26))){
var inst_67667 = (state_67955[(33)]);
var inst_67690 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_67667);
var state_67955__$1 = state_67955;
var statearr_68236_70176 = state_67955__$1;
(statearr_68236_70176[(2)] = inst_67690);

(statearr_68236_70176[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (16))){
var inst_67659 = (state_67955[(24)]);
var inst_67615 = (state_67955[(19)]);
var inst_67653 = (state_67955[(14)]);
var inst_67662 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inst_67659,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-resolver","com.wsscode.pathom.connect/waiting-resolver",-321792495),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),inst_67615], 0));
var inst_67663 = com.wsscode.pathom.trace.trace(inst_67653,inst_67662);
var inst_67665 = com.wsscode.pathom.parser.watch_pending_key(inst_67653,inst_67615);
var state_67955__$1 = (function (){var statearr_68239 = state_67955;
(statearr_68239[(48)] = inst_67663);

return statearr_68239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67955__$1,(19),inst_67665);
} else {
if((state_val_67956 === (81))){
var state_67955__$1 = state_67955;
var statearr_68246_70177 = state_67955__$1;
(statearr_68246_70177[(1)] = (91));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (79))){
var inst_67828 = (state_67955[(35)]);
var inst_67819 = (state_67955[(13)]);
var inst_67842 = (state_67955[(2)]);
var inst_67843 = [out,inst_67819,inst_67842];
var inst_67844 = cljs.core.PersistentHashMap.fromArrays(inst_67828,inst_67843);
var state_67955__$1 = state_67955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67955__$1,(73),ch,inst_67844);
} else {
if((state_val_67956 === (38))){
var inst_67653 = (state_67955[(14)]);
var inst_67708 = com.wsscode.pathom.connect.parallel_batch(inst_67653);
var state_67955__$1 = state_67955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67955__$1,(41),inst_67708);
} else {
if((state_val_67956 === (98))){
var inst_67933 = (state_67955[(2)]);
var inst_67934 = cljs.core.async.close_BANG_(ch);
var state_67955__$1 = (function (){var statearr_68249 = state_67955;
(statearr_68249[(49)] = inst_67933);

return statearr_68249;
})();
var statearr_68250_70178 = state_67955__$1;
(statearr_68250_70178[(2)] = inst_67934);

(statearr_68250_70178[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (87))){
var inst_67894 = (state_67955[(2)]);
var inst_67895 = cljs.core.async.close_BANG_(ch);
var state_67955__$1 = (function (){var statearr_68251 = state_67955;
(statearr_68251[(50)] = inst_67894);

return statearr_68251;
})();
var statearr_68252_70179 = state_67955__$1;
(statearr_68252_70179[(2)] = inst_67895);

(statearr_68252_70179[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (30))){
var state_67955__$1 = state_67955;
var statearr_68253_70180 = state_67955__$1;
(statearr_68253_70180[(2)] = new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359));

(statearr_68253_70180[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (73))){
var inst_67846 = (state_67955[(2)]);
var inst_67847 = cljs.core.async.close_BANG_(ch);
var state_67955__$1 = (function (){var statearr_68254 = state_67955;
(statearr_68254[(51)] = inst_67846);

return statearr_68254;
})();
var statearr_68255_70181 = state_67955__$1;
(statearr_68255_70181[(2)] = inst_67847);

(statearr_68255_70181[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (96))){
var inst_67616 = (state_67955[(15)]);
var inst_67759 = (state_67955[(29)]);
var inst_67653 = (state_67955[(14)]);
var inst_67917 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_67918 = [inst_67759];
var inst_67919 = cljs.core.PersistentHashMap.fromArrays(inst_67917,inst_67918);
var inst_67920 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_67919);
var inst_67921 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_67922 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),key,inst_67616,inst_67759];
var inst_67923 = cljs.core.PersistentHashMap.fromArrays(inst_67921,inst_67922);
var inst_67924 = com.wsscode.pathom.trace.trace(inst_67653,inst_67923);
var inst_67925 = com.wsscode.pathom.core.add_error(inst_67653,inst_67920);
var inst_67926 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_67927 = [key];
var inst_67928 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_67929 = cljs.core.PersistentHashMap.fromArrays(inst_67927,inst_67928);
var inst_67930 = [out,inst_67920,inst_67929];
var inst_67931 = cljs.core.PersistentHashMap.fromArrays(inst_67926,inst_67930);
var state_67955__$1 = (function (){var statearr_68256 = state_67955;
(statearr_68256[(52)] = inst_67925);

(statearr_68256[(53)] = inst_67924);

return statearr_68256;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67955__$1,(98),ch,inst_67931);
} else {
if((state_val_67956 === (10))){
var state_67955__$1 = state_67955;
var statearr_68257_70184 = state_67955__$1;
(statearr_68257_70184[(2)] = true);

(statearr_68257_70184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (18))){
var inst_67593 = (state_67955[(21)]);
var inst_67608 = (state_67955[(22)]);
var inst_67596 = (state_67955[(11)]);
var inst_67655 = (state_67955[(23)]);
var inst_67659 = (state_67955[(24)]);
var inst_67598 = (state_67955[(8)]);
var inst_67616 = (state_67955[(15)]);
var inst_67594 = (state_67955[(25)]);
var inst_67597 = (state_67955[(9)]);
var inst_67652 = (state_67955[(17)]);
var inst_67615 = (state_67955[(19)]);
var inst_67651 = (state_67955[(26)]);
var inst_67609 = (state_67955[(10)]);
var inst_67649 = (state_67955[(27)]);
var inst_67648 = (state_67955[(28)]);
var inst_67759 = (state_67955[(29)]);
var inst_67653 = (state_67955[(14)]);
var inst_67643 = (state_67955[(30)]);
var inst_67759__$1 = (state_67955[(2)]);
var inst_67760 = (function (){var G__67588 = inst_67596;
var input = inst_67651;
var step = inst_67608;
var key_SINGLEQUOTE_ = inst_67615;
var seq__67602 = inst_67609;
var response = inst_67759__$1;
var seq__67590 = inst_67594;
var cache_QMARK_ = inst_67648;
var out_left = inst_67598;
var map__67614 = inst_67643;
var first__67591 = inst_67593;
var failed_resolvers = inst_67597;
var vec__67589 = plan;
var vec__67601 = inst_67596;
var batch_QMARK_ = inst_67649;
var output = inst_67652;
var env__$2 = inst_67653;
var e = inst_67655;
var resolver_sym = inst_67616;
var trace_data = inst_67659;
var resolver = inst_67643;
var first__67603 = inst_67608;
var vec__67611 = inst_67608;
var tail = inst_67609;
return ((function (G__67588,input,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67759,inst_67653,inst_67643,inst_67759__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (value,error){
var c__52131__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67759,inst_67653,inst_67643,inst_67759__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67759,inst_67653,inst_67643,inst_67759__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_68281){
var state_val_68282 = (state_68281[(1)]);
if((state_val_68282 === (1))){
var inst_68261 = (state_68281[(7)]);
var inst_68258 = (state_68281[(8)]);
var inst_68258__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
var inst_68259 = (function (){var failed_resolvers__$1 = inst_68258__$1;
return ((function (failed_resolvers__$1,inst_68261,inst_68258,inst_68258__$1,state_val_68282,c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67759,inst_67653,inst_67643,inst_67759__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__67576_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__67576_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});
;})(failed_resolvers__$1,inst_68261,inst_68258,inst_68258__$1,state_val_68282,c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67759,inst_67653,inst_67643,inst_67759__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_68260 = com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$2,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_68259], 0));
var inst_68261__$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$2,inst_68258__$1);
var state_68281__$1 = (function (){var statearr_68283 = state_68281;
(statearr_68283[(9)] = inst_68260);

(statearr_68283[(7)] = inst_68261__$1);

(statearr_68283[(8)] = inst_68258__$1);

return statearr_68283;
})();
if(cljs.core.truth_(inst_68261__$1)){
var statearr_68286_70188 = state_68281__$1;
(statearr_68286_70188[(1)] = (2));

} else {
var statearr_68287_70189 = state_68281__$1;
(statearr_68287_70189[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68282 === (2))){
var inst_68267 = (state_68281[(10)]);
var inst_68261 = (state_68281[(7)]);
var inst_68266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68261,(0),null);
var inst_68267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68261,(1),null);
var inst_68268 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_68269 = [out,inst_68267__$1,value];
var inst_68270 = cljs.core.PersistentHashMap.fromArrays(inst_68268,inst_68269);
var state_68281__$1 = (function (){var statearr_68288 = state_68281;
(statearr_68288[(11)] = inst_68266);

(statearr_68288[(10)] = inst_68267__$1);

return statearr_68288;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68281__$1,(5),ch,inst_68270);
} else {
if((state_val_68282 === (3))){
var state_68281__$1 = state_68281;
var statearr_68289_70190 = state_68281__$1;
(statearr_68289_70190[(2)] = null);

(statearr_68289_70190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68282 === (4))){
var inst_68279 = (state_68281[(2)]);
var state_68281__$1 = state_68281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68281__$1,inst_68279);
} else {
if((state_val_68282 === (5))){
var inst_68266 = (state_68281[(11)]);
var inst_68267 = (state_68281[(10)]);
var inst_68258 = (state_68281[(8)]);
var inst_68272 = (state_68281[(2)]);
var inst_68274 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68275 = [inst_68266,inst_68258,inst_68267];
var inst_68276 = (new cljs.core.PersistentVector(null,3,(5),inst_68274,inst_68275,null));
var state_68281__$1 = (function (){var statearr_68294 = state_68281;
(statearr_68294[(12)] = inst_68272);

return statearr_68294;
})();
var statearr_68295_70194 = state_68281__$1;
(statearr_68295_70194[(2)] = inst_68276);

(statearr_68295_70194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67759,inst_67653,inst_67643,inst_67759__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__52035__auto__,c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67759,inst_67653,inst_67643,inst_67759__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____0 = (function (){
var statearr_68296 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68296[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__);

(statearr_68296[(1)] = (1));

return statearr_68296;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____1 = (function (state_68281){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_68281);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e68303){if((e68303 instanceof Object)){
var ex__52039__auto__ = e68303;
var statearr_68304_70199 = state_68281;
(statearr_68304_70199[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68303;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70200 = state_68281;
state_68281 = G__70200;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__ = function(state_68281){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____1.call(this,state_68281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67759,inst_67653,inst_67643,inst_67759__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__52133__auto__ = (function (){var statearr_68311 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_68311[(6)] = c__52131__auto____$1);

return statearr_68311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto____$1,G__67588,input,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67759,inst_67653,inst_67643,inst_67759__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__52131__auto____$1;
});
;})(G__67588,input,step,key_SINGLEQUOTE_,seq__67602,response,seq__67590,cache_QMARK_,out_left,map__67614,first__67591,failed_resolvers,vec__67589,vec__67601,batch_QMARK_,output,env__$2,e,resolver_sym,trace_data,resolver,first__67603,vec__67611,tail,inst_67593,inst_67608,inst_67596,inst_67655,inst_67659,inst_67598,inst_67616,inst_67594,inst_67597,inst_67652,inst_67615,inst_67651,inst_67609,inst_67649,inst_67648,inst_67759,inst_67653,inst_67643,inst_67759__$1,state_val_67956,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_67761 = (new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359) === inst_67759__$1);
var state_67955__$1 = (function (){var statearr_68312 = state_67955;
(statearr_68312[(29)] = inst_67759__$1);

(statearr_68312[(31)] = inst_67760);

return statearr_68312;
})();
if(cljs.core.truth_(inst_67761)){
var statearr_68313_70201 = state_67955__$1;
(statearr_68313_70201[(1)] = (56));

} else {
var statearr_68314_70202 = state_67955__$1;
(statearr_68314_70202[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (52))){
var inst_67741 = (state_67955[(2)]);
var inst_67742 = com.wsscode.common.async_cljs.throw_err(inst_67741);
var state_67955__$1 = state_67955;
var statearr_68315_70203 = state_67955__$1;
(statearr_68315_70203[(2)] = inst_67742);

(statearr_68315_70203[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (67))){
var inst_67804 = (state_67955[(45)]);
var inst_67811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67804,(0),null);
var inst_67812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67804,(1),null);
var inst_67813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67804,(2),null);
var inst_67596 = inst_67811;
var inst_67597 = inst_67812;
var inst_67598 = inst_67813;
var state_67955__$1 = (function (){var statearr_68316 = state_67955;
(statearr_68316[(11)] = inst_67596);

(statearr_68316[(8)] = inst_67598);

(statearr_68316[(9)] = inst_67597);

return statearr_68316;
})();
var statearr_68317_70204 = state_67955__$1;
(statearr_68317_70204[(2)] = null);

(statearr_68317_70204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (71))){
var state_67955__$1 = state_67955;
var statearr_68318_70205 = state_67955__$1;
(statearr_68318_70205[(2)] = null);

(statearr_68318_70205[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (42))){
var inst_67720 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
var statearr_68319_70206 = state_67955__$1;
(statearr_68319_70206[(2)] = inst_67720);

(statearr_68319_70206[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (80))){
var inst_67759 = (state_67955[(29)]);
var inst_67760 = (state_67955[(31)]);
var inst_67855 = cljs.core.PersistentHashMap.EMPTY;
var inst_67856 = (inst_67760.cljs$core$IFn$_invoke$arity$2 ? inst_67760.cljs$core$IFn$_invoke$arity$2(inst_67855,inst_67759) : inst_67760.call(null,inst_67855,inst_67759));
var state_67955__$1 = state_67955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67955__$1,(83),inst_67856);
} else {
if((state_val_67956 === (37))){
var inst_67705 = (state_67955[(2)]);
var state_67955__$1 = state_67955;
if(cljs.core.truth_(inst_67705)){
var statearr_68320_70207 = state_67955__$1;
(statearr_68320_70207[(1)] = (38));

} else {
var statearr_68321_70208 = state_67955__$1;
(statearr_68321_70208[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (63))){
var inst_67775 = (state_67955[(16)]);
var inst_67615 = (state_67955[(19)]);
var inst_67760 = (state_67955[(31)]);
var inst_67798 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_67799 = [inst_67775,inst_67615];
var inst_67800 = cljs.core.PersistentHashMap.fromArrays(inst_67798,inst_67799);
var inst_67801 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_67800);
var inst_67802 = (inst_67760.cljs$core$IFn$_invoke$arity$2 ? inst_67760.cljs$core$IFn$_invoke$arity$2(inst_67775,inst_67801) : inst_67760.call(null,inst_67775,inst_67801));
var state_67955__$1 = state_67955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67955__$1,(66),inst_67802);
} else {
if((state_val_67956 === (94))){
var inst_67907 = (state_67955[(41)]);
var inst_67907__$1 = (state_67955[(2)]);
var state_67955__$1 = (function (){var statearr_68322 = state_67955;
(statearr_68322[(41)] = inst_67907__$1);

return statearr_68322;
})();
if(cljs.core.truth_(inst_67907__$1)){
var statearr_68323_70209 = state_67955__$1;
(statearr_68323_70209[(1)] = (95));

} else {
var statearr_68324_70210 = state_67955__$1;
(statearr_68324_70210[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (8))){
var state_67955__$1 = state_67955;
var statearr_68325_70211 = state_67955__$1;
(statearr_68325_70211[(2)] = false);

(statearr_68325_70211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67956 === (49))){
var inst_67736 = (state_67955[(42)]);
var state_67955__$1 = state_67955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67955__$1,(52),inst_67736);
} else {
if((state_val_67956 === (84))){
var inst_67858 = (state_67955[(47)]);
var inst_67863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67858,(0),null);
var inst_67864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67858,(1),null);
var inst_67865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67858,(2),null);
var inst_67596 = inst_67863;
var inst_67597 = inst_67864;
var inst_67598 = inst_67865;
var state_67955__$1 = (function (){var statearr_68326 = state_67955;
(statearr_68326[(11)] = inst_67596);

(statearr_68326[(8)] = inst_67598);

(statearr_68326[(9)] = inst_67597);

return statearr_68326;
})();
var statearr_68327_70212 = state_67955__$1;
(statearr_68327_70212[(2)] = null);

(statearr_68327_70212[(1)] = (2));


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
});})(c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__52035__auto__,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____0 = (function (){
var statearr_68328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68328[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__);

(statearr_68328[(1)] = (1));

return statearr_68328;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____1 = (function (state_67955){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_67955);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e68329){if((e68329 instanceof Object)){
var ex__52039__auto__ = e68329;
var statearr_68330_70213 = state_67955;
(statearr_68330_70213[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70214 = state_67955;
state_67955 = G__70214;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__ = function(state_67955){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____1.call(this,state_67955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__52133__auto__ = (function (){var statearr_68331 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_68331[(6)] = c__52131__auto___70041);

return statearr_68331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___70041,ch,key,params,env__$1,vec__67582,plan,out,temp__5733__auto__,map__67580,map__67580__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);


return ch;
})()], null);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.index_reader = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),(function (p__68332){
var map__68333 = p__68332;
var map__68333__$1 = (((((!((map__68333 == null))))?(((((map__68333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68333):map__68333);
var env = map__68333__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68333__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(indexes,env);
})], null);
com.wsscode.pathom.connect.indexed_ident = (function com$wsscode$pathom$connect$indexed_ident(p__68335){
var map__68336 = p__68335;
var map__68336__$1 = (((((!((map__68336 == null))))?(((((map__68336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68336):map__68336);
var env = map__68336__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68336__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var temp__5733__auto__ = com.wsscode.pathom.core.ident_key(env);
if(cljs.core.truth_(temp__5733__auto__)){
var attr = temp__5733__auto__;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007).cljs$core$IFn$_invoke$arity$1(indexes),attr)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,com.wsscode.pathom.core.ident_value(env)]);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Helper to return a resolver map
 */
com.wsscode.pathom.connect.resolver = (function com$wsscode$pathom$connect$resolver(sym,p__68338,resolve){
var map__68339 = p__68338;
var map__68339__$1 = (((((!((map__68339 == null))))?(((((map__68339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68339):map__68339);
var options = map__68339__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68339__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__68341 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),resolve], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__68341) : transform.call(null,G__68341));
} else {
return G__68341;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","defresolver","com.wsscode.pathom.connect/defresolver",1615901468,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.simple_symbol_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68342){
return ((cljs.core.vector_QMARK_(G__68342)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.bounded_count((2),G__68342))));
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2))], null),null),cljs.core.any_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
com.wsscode.pathom.connect.attr_alias_name = (function com$wsscode$pathom$connect$attr_alias_name(from,to){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),(1)))),"->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),(1))))].join(''));
});
/**
 * Create a resolver that will convert property `from` to a property `to` with
 *   the same value. This only creates the alias in one direction
 */
com.wsscode.pathom.connect.alias_resolver = (function com$wsscode$pathom$connect$alias_resolver(from,to){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),com.wsscode.pathom.connect.attr_alias_name(from,to),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.createAsIfByAssoc([from]),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),(function (_,input){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from)]);
})], null);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","alias-resolver","com.wsscode.pathom.connect/alias-resolver",920724457,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),null,null,null));
/**
 * Like alias-resolver, but returns a vector containing the alias in both directions.
 */
com.wsscode.pathom.connect.alias_resolver2 = (function com$wsscode$pathom$connect$alias_resolver2(from,to){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.alias_resolver(from,to),com.wsscode.pathom.connect.alias_resolver(to,from)], null);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","alias-resolver2","com.wsscode.pathom.connect/alias-resolver2",-133273996,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),null,null,null));
/**
 * Helper to return a mutation map
 */
com.wsscode.pathom.connect.mutation = (function com$wsscode$pathom$connect$mutation(sym,p__68379,mutate){
var map__68380 = p__68379;
var map__68380__$1 = (((((!((map__68380 == null))))?(((((map__68380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68380):map__68380);
var options = map__68380__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68380__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__68382 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),mutate], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__68382) : transform.call(null,G__68382));
} else {
return G__68382;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","defmutation","com.wsscode.pathom.connect/defmutation",642780868,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.simple_symbol_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68411){
return ((cljs.core.vector_QMARK_(G__68411)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.bounded_count((2),G__68411))));
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2))], null),null),cljs.core.any_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Reader for idents on connect, this reader will make a join to the ident making the
 *   context have that ident key and value. For example the ident [:user/id 123] will make
 *   a join to a context {:user/id 123}. This reader will continue if connect doesn't have
 *   a path to respond to that ident.
 * 
 *   This reader also supports params to add more context besides the entity value. To use
 *   that send the `:pathom/context` param with the join, as in:
 * 
 *   [{([:user/id 123] {:pathom/context {:user/foo "bar"}})
 *  [:user/name]}]
 * 
 *   In the previous case, the context will be the merge between the identity and the
 *   context, {:user/id 123 :user/foo "bar"} in this case.
 */
com.wsscode.pathom.connect.ident_reader = (function com$wsscode$pathom$connect$ident_reader(env){
var temp__5733__auto__ = com.wsscode.pathom.connect.indexed_ident(env);
if(cljs.core.truth_(temp__5733__auto__)){
var ent = temp__5733__auto__;
var extra_context = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","context","pathom/context",-1452257614)], null));
var ent__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ent,extra_context], 0));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ent__$1),env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Like ident-reader, but ident key doesn't have to be in the index, this will respond
 *   to any ident join. Also supports extra context with :pathom/context param.
 */
com.wsscode.pathom.connect.open_ident_reader = (function com$wsscode$pathom$connect$open_ident_reader(env){
var temp__5733__auto__ = com.wsscode.pathom.core.ident_key(env);
if(cljs.core.truth_(temp__5733__auto__)){
var key = temp__5733__auto__;
var extra_context = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","context","pathom/context",-1452257614)], null));
var ent = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([key,com.wsscode.pathom.core.ident_value(env)]),extra_context], 0));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ent),env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Return a resolver that will dispatch to single-fn when the input is a single value, and multi-fn when
 *   multiple inputs are provided (on batch cases).
 * 
 *   Many times the implementation for the single can be the same as the multi, getting the first item, and
 *   if you provide only one function (the multi-fn) we will setup the single one automatically running
 *   the multi and returning the first result.
 */
com.wsscode.pathom.connect.batch_resolver = (function com$wsscode$pathom$connect$batch_resolver(var_args){
var G__68418 = arguments.length;
switch (G__68418) {
case 1:
return com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1 = (function (multi_fn){
return com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$2((function (env,input){
var res__59683__auto__ = (function (){var G__68419 = env;
var G__68420 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(G__68419,G__68420) : multi_fn.call(null,G__68419,G__68420));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__59683__auto__)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,res__59683__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,res__59683__auto__){
return (function (state_68432){
var state_val_68433 = (state_68432[(1)]);
if((state_val_68433 === (1))){
var state_68432__$1 = state_68432;
var statearr_68434_70244 = state_68432__$1;
(statearr_68434_70244[(2)] = null);

(statearr_68434_70244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68433 === (2))){
var inst_68430 = (state_68432[(2)]);
var state_68432__$1 = state_68432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68432__$1,inst_68430);
} else {
if((state_val_68433 === (3))){
var inst_68421 = (state_68432[(2)]);
var state_68432__$1 = state_68432;
var statearr_68439_70247 = state_68432__$1;
(statearr_68439_70247[(2)] = inst_68421);


cljs.core.async.impl.ioc_helpers.process_exception(state_68432__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68433 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_68432,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_68432__$1 = state_68432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68432__$1,(5),res__59683__auto__);
} else {
if((state_val_68433 === (5))){
var inst_68426 = (state_68432[(2)]);
var inst_68427 = com.wsscode.common.async_cljs.throw_err(inst_68426);
var inst_68428 = cljs.core.first(inst_68427);
var state_68432__$1 = state_68432;
var statearr_68441_70249 = state_68432__$1;
(statearr_68441_70249[(2)] = inst_68428);


cljs.core.async.impl.ioc_helpers.process_exception(state_68432__$1);

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
var com$wsscode$pathom$connect$state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$state_machine__52036__auto____0 = (function (){
var statearr_68442 = [null,null,null,null,null,null,null];
(statearr_68442[(0)] = com$wsscode$pathom$connect$state_machine__52036__auto__);

(statearr_68442[(1)] = (1));

return statearr_68442;
});
var com$wsscode$pathom$connect$state_machine__52036__auto____1 = (function (state_68432){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_68432);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e68443){if((e68443 instanceof Object)){
var ex__52039__auto__ = e68443;
var statearr_68444_70252 = state_68432;
(statearr_68444_70252[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68443;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70254 = state_68432;
state_68432 = G__70254;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$state_machine__52036__auto__ = function(state_68432){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$state_machine__52036__auto____1.call(this,state_68432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$state_machine__52036__auto____0;
com$wsscode$pathom$connect$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$state_machine__52036__auto____1;
return com$wsscode$pathom$connect$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,res__59683__auto__))
})();
var state__52133__auto__ = (function (){var statearr_68446 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_68446[(6)] = c__52131__auto__);

return statearr_68446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,res__59683__auto__))
);

return c__52131__auto__;
} else {
var res = res__59683__auto__;
return cljs.core.first(res);
}
}),multi_fn);
});

com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$2 = (function (single_fn,multi_fn){
return (function (env,input){
if(cljs.core.sequential_QMARK_(input)){
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(env,input) : multi_fn.call(null,env,input));
} else {
return (single_fn.cljs$core$IFn$_invoke$arity$2 ? single_fn.cljs$core$IFn$_invoke$arity$2(env,input) : single_fn.call(null,env,input));
}
});
});

com.wsscode.pathom.connect.batch_resolver.cljs$lang$maxFixedArity = 2;

/**
 * Given a resolver that implements the many case, return one that also supports the
 *   single case by running the many and taking the first result out.
 */
com.wsscode.pathom.connect.transform_batch_resolver = (function com$wsscode$pathom$connect$transform_batch_resolver(resolver){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver);
});
/**
 * Given a resolver that implements the single item case, wrap it implementing a batch
 *   resolver that will make a batch by running many in parallel, using `n` as the concurrency
 *   number.
 */
com.wsscode.pathom.connect.transform_auto_batch = (function com$wsscode$pathom$connect$transform_auto_batch(n){
return (function (p__68447){
var map__68448 = p__68447;
var map__68448__$1 = (((((!((map__68448 == null))))?(((((map__68448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68448):map__68448);
var resolver = map__68448__$1;
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68448__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1(((function (map__68448,map__68448__$1,resolver,resolve){
return (function (env,inputs){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,map__68448,map__68448__$1,resolver,resolve){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,map__68448,map__68448__$1,resolver,resolve){
return (function (state_68460){
var state_val_68461 = (state_68460[(1)]);
if((state_val_68461 === (1))){
var inst_68450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_68451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_68452 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_68450,inputs);
var inst_68453 = (function (){var from_chan = inst_68450;
var out_chan = inst_68451;
return ((function (from_chan,out_chan,inst_68450,inst_68451,inst_68452,state_val_68461,c__52131__auto__,map__68448,map__68448__$1,resolver,resolve){
return (function com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline(input,res_ch){
var c__52131__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto____$1,from_chan,out_chan,inst_68450,inst_68451,inst_68452,state_val_68461,c__52131__auto__,map__68448,map__68448__$1,resolver,resolve){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto____$1,from_chan,out_chan,inst_68450,inst_68451,inst_68452,state_val_68461,c__52131__auto__,map__68448,map__68448__$1,resolver,resolve){
return (function (state_68474){
var state_val_68475 = (state_68474[(1)]);
if((state_val_68475 === (1))){
var inst_68462 = (state_68474[(7)]);
var inst_68462__$1 = (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,input) : resolve.call(null,env,input));
var inst_68463 = com.wsscode.common.async_cljs.chan_QMARK_(inst_68462__$1);
var state_68474__$1 = (function (){var statearr_68476 = state_68474;
(statearr_68476[(7)] = inst_68462__$1);

return statearr_68476;
})();
if(inst_68463){
var statearr_68477_70258 = state_68474__$1;
(statearr_68477_70258[(1)] = (2));

} else {
var statearr_68478_70259 = state_68474__$1;
(statearr_68478_70259[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68475 === (2))){
var inst_68462 = (state_68474[(7)]);
var state_68474__$1 = state_68474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68474__$1,(5),inst_68462);
} else {
if((state_val_68475 === (3))){
var inst_68462 = (state_68474[(7)]);
var state_68474__$1 = state_68474;
var statearr_68479_70262 = state_68474__$1;
(statearr_68479_70262[(2)] = inst_68462);

(statearr_68479_70262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68475 === (4))){
var inst_68469 = (state_68474[(2)]);
var state_68474__$1 = state_68474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68474__$1,(6),res_ch,inst_68469);
} else {
if((state_val_68475 === (5))){
var inst_68466 = (state_68474[(2)]);
var state_68474__$1 = state_68474;
var statearr_68480_70263 = state_68474__$1;
(statearr_68480_70263[(2)] = inst_68466);

(statearr_68480_70263[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68475 === (6))){
var inst_68471 = (state_68474[(2)]);
var inst_68472 = cljs.core.async.close_BANG_(res_ch);
var state_68474__$1 = (function (){var statearr_68481 = state_68474;
(statearr_68481[(8)] = inst_68471);

return statearr_68481;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_68474__$1,inst_68472);
} else {
return null;
}
}
}
}
}
}
});})(c__52131__auto____$1,from_chan,out_chan,inst_68450,inst_68451,inst_68452,state_val_68461,c__52131__auto__,map__68448,map__68448__$1,resolver,resolve))
;
return ((function (switch__52035__auto__,c__52131__auto____$1,from_chan,out_chan,inst_68450,inst_68451,inst_68452,state_val_68461,c__52131__auto__,map__68448,map__68448__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__52036__auto____0 = (function (){
var statearr_68482 = [null,null,null,null,null,null,null,null,null];
(statearr_68482[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__52036__auto__);

(statearr_68482[(1)] = (1));

return statearr_68482;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__52036__auto____1 = (function (state_68474){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_68474);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e68483){if((e68483 instanceof Object)){
var ex__52039__auto__ = e68483;
var statearr_68484_70268 = state_68474;
(statearr_68484_70268[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70269 = state_68474;
state_68474 = G__70269;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__52036__auto__ = function(state_68474){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__52036__auto____1.call(this,state_68474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto____$1,from_chan,out_chan,inst_68450,inst_68451,inst_68452,state_val_68461,c__52131__auto__,map__68448,map__68448__$1,resolver,resolve))
})();
var state__52133__auto__ = (function (){var statearr_68485 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_68485[(6)] = c__52131__auto____$1);

return statearr_68485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto____$1,from_chan,out_chan,inst_68450,inst_68451,inst_68452,state_val_68461,c__52131__auto__,map__68448,map__68448__$1,resolver,resolve))
);

return c__52131__auto____$1;
});
;})(from_chan,out_chan,inst_68450,inst_68451,inst_68452,state_val_68461,c__52131__auto__,map__68448,map__68448__$1,resolver,resolve))
})();
var inst_68454 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4(n,inst_68451,inst_68453,inst_68450);
var inst_68455 = cljs.core.PersistentVector.EMPTY;
var inst_68456 = cljs.core.async.into(inst_68455,inst_68451);
var state_68460__$1 = (function (){var statearr_68486 = state_68460;
(statearr_68486[(7)] = inst_68452);

(statearr_68486[(8)] = inst_68454);

return statearr_68486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68460__$1,(2),inst_68456);
} else {
if((state_val_68461 === (2))){
var inst_68458 = (state_68460[(2)]);
var state_68460__$1 = state_68460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68460__$1,inst_68458);
} else {
return null;
}
}
});})(c__52131__auto__,map__68448,map__68448__$1,resolver,resolve))
;
return ((function (switch__52035__auto__,c__52131__auto__,map__68448,map__68448__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__52036__auto____0 = (function (){
var statearr_68487 = [null,null,null,null,null,null,null,null,null];
(statearr_68487[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__52036__auto__);

(statearr_68487[(1)] = (1));

return statearr_68487;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__52036__auto____1 = (function (state_68460){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_68460);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e68488){if((e68488 instanceof Object)){
var ex__52039__auto__ = e68488;
var statearr_68489_70274 = state_68460;
(statearr_68489_70274[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68488;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70275 = state_68460;
state_68460 = G__70275;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__52036__auto__ = function(state_68460){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__52036__auto____1.call(this,state_68460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,map__68448,map__68448__$1,resolver,resolve))
})();
var state__52133__auto__ = (function (){var statearr_68490 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_68490[(6)] = c__52131__auto__);

return statearr_68490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,map__68448,map__68448__$1,resolver,resolve))
);

return c__52131__auto__;
});})(map__68448,map__68448__$1,resolver,resolve))
)], 0));
});
});
com.wsscode.pathom.connect.all_readers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.reader,com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
com.wsscode.pathom.connect.all_async_readers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.async_reader,com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
com.wsscode.pathom.connect.all_parallel_readers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
/**
 * Helper method that extract key from ast symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for mutation dispatch.
 */
com.wsscode.pathom.connect.mutation_dispatch = (function com$wsscode$pathom$connect$mutation_dispatch(env,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
});
/**
 * This dispatch method will fire the mutation by looking at the ::pc/mutate
 *   key in the mutation map details.
 */
com.wsscode.pathom.connect.mutation_dispatch_embedded = (function com$wsscode$pathom$connect$mutation_dispatch_embedded(p__68491,entity){
var map__68493 = p__68491;
var map__68493__$1 = (((((!((map__68493 == null))))?(((((map__68493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68493):map__68493);
var env = map__68493__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68493__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sym = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
var map__68495 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
var map__68495__$1 = (((((!((map__68495 == null))))?(((((map__68495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68495):map__68495);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68495__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ",["Can't find mutate fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","mutate"].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$2 ? mutate.cljs$core$IFn$_invoke$arity$2(env,entity) : mutate.call(null,env,entity));
});
/**
 * Sync mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate = (function com$wsscode$pathom$connect$mutate(p__68497,sym_SINGLEQUOTE_,p__68498){
var map__68499 = p__68497;
var map__68499__$1 = (((((!((map__68499 == null))))?(((((map__68499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68499):map__68499);
var env = map__68499__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68499__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68499__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68499__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68499__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__68500 = p__68498;
var map__68500__$1 = (((((!((map__68500 == null))))?(((((map__68500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68500):map__68500);
var input = map__68500__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68500__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5733__auto__)){
var map__68503 = temp__5733__auto__;
var map__68503__$1 = (((((!((map__68503 == null))))?(((((map__68503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68503):map__68503);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68503__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__68503,map__68503__$1,sym,temp__5733__auto__,map__68499,map__68499__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__68500,map__68500__$1,input,context){
return (function (){
var res = (function (){var G__68505 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var G__68506 = input;
return (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(G__68505,G__68506) : mutate_dispatch.call(null,G__68505,G__68506));
})();
var res__$1 = (function (){var G__68507 = res;
if(cljs.core.truth_((function (){var and__4120__auto__ = context;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(res);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__68507,context], 0));
} else {
return G__68507;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = query;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(res__$1);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(res__$1,mutation_join_globals),com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(res__$1),env__$1)], 0));
} else {
return res__$1;
}
});})(env__$1,map__68503,map__68503__$1,sym,temp__5733__auto__,map__68499,map__68499__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__68500,map__68500__$1,input,context))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Async mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate_async = (function com$wsscode$pathom$connect$mutate_async(p__68508,sym_SINGLEQUOTE_,p__68509){
var map__68510 = p__68508;
var map__68510__$1 = (((((!((map__68510 == null))))?(((((map__68510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68510):map__68510);
var env = map__68510__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68510__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68510__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68510__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68510__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__68511 = p__68509;
var map__68511__$1 = (((((!((map__68511 == null))))?(((((map__68511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68511):map__68511);
var input = map__68511__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68511__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5733__auto__)){
var map__68514 = temp__5733__auto__;
var map__68514__$1 = (((((!((map__68514 == null))))?(((((map__68514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68514):map__68514);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68514__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__68514,map__68514__$1,sym,temp__5733__auto__,map__68510,map__68510__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__68511,map__68511__$1,input,context){
return (function (){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,env__$1,map__68514,map__68514__$1,sym,temp__5733__auto__,map__68510,map__68510__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__68511,map__68511__$1,input,context){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,env__$1,map__68514,map__68514__$1,sym,temp__5733__auto__,map__68510,map__68510__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__68511,map__68511__$1,input,context){
return (function (state_68562){
var state_val_68563 = (state_68562[(1)]);
if((state_val_68563 === (7))){
var inst_68536 = (state_68562[(2)]);
var state_68562__$1 = (function (){var statearr_68564 = state_68562;
(statearr_68564[(7)] = inst_68536);

return statearr_68564;
})();
if(cljs.core.truth_(context)){
var statearr_68565_70303 = state_68562__$1;
(statearr_68565_70303[(1)] = (9));

} else {
var statearr_68566_70304 = state_68562__$1;
(statearr_68566_70304[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (1))){
var state_68562__$1 = state_68562;
var statearr_68567_70305 = state_68562__$1;
(statearr_68567_70305[(2)] = null);

(statearr_68567_70305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (4))){
var inst_68528 = (state_68562[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_68562,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_68527 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var inst_68528__$1 = (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(inst_68527,input) : mutate_dispatch.call(null,inst_68527,input));
var inst_68529 = com.wsscode.common.async_cljs.chan_QMARK_(inst_68528__$1);
var state_68562__$1 = (function (){var statearr_68568 = state_68562;
(statearr_68568[(8)] = inst_68528__$1);

return statearr_68568;
})();
if(inst_68529){
var statearr_68569_70312 = state_68562__$1;
(statearr_68569_70312[(1)] = (5));

} else {
var statearr_68570_70313 = state_68562__$1;
(statearr_68570_70313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (15))){
var inst_68547 = (state_68562[(9)]);
var inst_68549 = cljs.core.select_keys(inst_68547,mutation_join_globals);
var inst_68550 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_68547);
var inst_68551 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_68550,env__$1);
var state_68562__$1 = (function (){var statearr_68571 = state_68562;
(statearr_68571[(10)] = inst_68549);

return statearr_68571;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68562__$1,(18),inst_68551);
} else {
if((state_val_68563 === (13))){
var inst_68536 = (state_68562[(7)]);
var state_68562__$1 = state_68562;
var statearr_68572_70316 = state_68562__$1;
(statearr_68572_70316[(2)] = inst_68536);

(statearr_68572_70316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (6))){
var inst_68528 = (state_68562[(8)]);
var state_68562__$1 = state_68562;
var statearr_68573_70317 = state_68562__$1;
(statearr_68573_70317[(2)] = inst_68528);

(statearr_68573_70317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (17))){
var inst_68558 = (state_68562[(2)]);
var state_68562__$1 = state_68562;
var statearr_68574_70319 = state_68562__$1;
(statearr_68574_70319[(2)] = inst_68558);


cljs.core.async.impl.ioc_helpers.process_exception(state_68562__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (3))){
var inst_68522 = (state_68562[(2)]);
var state_68562__$1 = state_68562;
var statearr_68575_70323 = state_68562__$1;
(statearr_68575_70323[(2)] = inst_68522);


cljs.core.async.impl.ioc_helpers.process_exception(state_68562__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (12))){
var inst_68536 = (state_68562[(7)]);
var inst_68544 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_68536,context], 0));
var state_68562__$1 = state_68562;
var statearr_68576_70324 = state_68562__$1;
(statearr_68576_70324[(2)] = inst_68544);

(statearr_68576_70324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (2))){
var inst_68560 = (state_68562[(2)]);
var state_68562__$1 = state_68562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68562__$1,inst_68560);
} else {
if((state_val_68563 === (11))){
var inst_68542 = (state_68562[(2)]);
var state_68562__$1 = state_68562;
if(cljs.core.truth_(inst_68542)){
var statearr_68577_70327 = state_68562__$1;
(statearr_68577_70327[(1)] = (12));

} else {
var statearr_68578_70328 = state_68562__$1;
(statearr_68578_70328[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (9))){
var inst_68536 = (state_68562[(7)]);
var inst_68539 = cljs.core.map_QMARK_(inst_68536);
var state_68562__$1 = state_68562;
var statearr_68579_70329 = state_68562__$1;
(statearr_68579_70329[(2)] = inst_68539);

(statearr_68579_70329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (5))){
var inst_68528 = (state_68562[(8)]);
var state_68562__$1 = state_68562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68562__$1,(8),inst_68528);
} else {
if((state_val_68563 === (14))){
var inst_68547 = (state_68562[(2)]);
var state_68562__$1 = (function (){var statearr_68580 = state_68562;
(statearr_68580[(9)] = inst_68547);

return statearr_68580;
})();
if(cljs.core.truth_(query)){
var statearr_68581_70330 = state_68562__$1;
(statearr_68581_70330[(1)] = (15));

} else {
var statearr_68582_70331 = state_68562__$1;
(statearr_68582_70331[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (16))){
var inst_68547 = (state_68562[(9)]);
var state_68562__$1 = state_68562;
var statearr_68583_70332 = state_68562__$1;
(statearr_68583_70332[(2)] = inst_68547);

(statearr_68583_70332[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (10))){
var state_68562__$1 = state_68562;
var statearr_68584_70333 = state_68562__$1;
(statearr_68584_70333[(2)] = context);

(statearr_68584_70333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (18))){
var inst_68549 = (state_68562[(10)]);
var inst_68553 = (state_68562[(2)]);
var inst_68554 = com.wsscode.common.async_cljs.throw_err(inst_68553);
var inst_68555 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_68549,inst_68554], 0));
var state_68562__$1 = state_68562;
var statearr_68585_70334 = state_68562__$1;
(statearr_68585_70334[(2)] = inst_68555);

(statearr_68585_70334[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68563 === (8))){
var inst_68532 = (state_68562[(2)]);
var inst_68533 = com.wsscode.common.async_cljs.throw_err(inst_68532);
var state_68562__$1 = state_68562;
var statearr_68587_70335 = state_68562__$1;
(statearr_68587_70335[(2)] = inst_68533);

(statearr_68587_70335[(1)] = (7));


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
}
}
}
});})(c__52131__auto__,env__$1,map__68514,map__68514__$1,sym,temp__5733__auto__,map__68510,map__68510__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__68511,map__68511__$1,input,context))
;
return ((function (switch__52035__auto__,c__52131__auto__,env__$1,map__68514,map__68514__$1,sym,temp__5733__auto__,map__68510,map__68510__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__68511,map__68511__$1,input,context){
return (function() {
var com$wsscode$pathom$connect$mutate_async_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$connect$mutate_async_$_state_machine__52036__auto____0 = (function (){
var statearr_68588 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68588[(0)] = com$wsscode$pathom$connect$mutate_async_$_state_machine__52036__auto__);

(statearr_68588[(1)] = (1));

return statearr_68588;
});
var com$wsscode$pathom$connect$mutate_async_$_state_machine__52036__auto____1 = (function (state_68562){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_68562);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e68589){if((e68589 instanceof Object)){
var ex__52039__auto__ = e68589;
var statearr_68590_70336 = state_68562;
(statearr_68590_70336[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70337 = state_68562;
state_68562 = G__70337;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$connect$mutate_async_$_state_machine__52036__auto__ = function(state_68562){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__52036__auto____1.call(this,state_68562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$mutate_async_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$mutate_async_$_state_machine__52036__auto____0;
com$wsscode$pathom$connect$mutate_async_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$mutate_async_$_state_machine__52036__auto____1;
return com$wsscode$pathom$connect$mutate_async_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,env__$1,map__68514,map__68514__$1,sym,temp__5733__auto__,map__68510,map__68510__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__68511,map__68511__$1,input,context))
})();
var state__52133__auto__ = (function (){var statearr_68591 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_68591[(6)] = c__52131__auto__);

return statearr_68591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,env__$1,map__68514,map__68514__$1,sym,temp__5733__auto__,map__68510,map__68510__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__68511,map__68511__$1,input,context))
);

return c__52131__auto__;
});})(env__$1,map__68514,map__68514__$1,sym,temp__5733__auto__,map__68510,map__68510__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__68511,map__68511__$1,input,context))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Given multi-method mm and index atom idx, returns a function with the given signature:
 * [sym config f], the function will be add to the mm and will be indexed using config as
 * the config params for connect/add.
 */
com.wsscode.pathom.connect.resolver_factory = (function com$wsscode$pathom$connect$resolver_factory(mm,idx){
return (function com$wsscode$pathom$connect$resolver_factory_$_resolver_factory_internal(sym,config,f){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

mm.cljs$core$IMultiFn$_add_method$arity$3(null,sym,(function (env,input){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(env,input) : f.call(null,env,input));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(idx,com.wsscode.pathom.connect.add,sym,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),f], null),config], 0)));
});
});
com.wsscode.pathom.connect.mutation_factory = (function com$wsscode$pathom$connect$mutation_factory(mm,idx){
return (function com$wsscode$pathom$connect$mutation_factory_$_mutation_factory_internal(sym,config,f){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

mm.cljs$core$IMultiFn$_add_method$arity$3(null,sym,(function (env,input){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(env,input) : f.call(null,env,input));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(idx,com.wsscode.pathom.connect.add_mutation,sym,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),f], null),config], 0)));
});
});
com.wsscode.pathom.connect.cached = (function com$wsscode$pathom$connect$cached(cache,x,f){
if(cljs.core.truth_(cache)){
if(cljs.core.contains_QMARK_(cljs.core.deref(cache),x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),x);
} else {
var res = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,x,res);

return res;
}
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
com.wsscode.pathom.connect.discover_attrs = (function com$wsscode$pathom$connect$discover_attrs(p__68596,ctx){
var map__68597 = p__68596;
var map__68597__$1 = (((((!((map__68597 == null))))?(((((map__68597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68597):map__68597);
var index = map__68597__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68597__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68597__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776));
return com.wsscode.pathom.connect.cached(cache,ctx,((function (map__68597,map__68597__$1,index,index_io,cache){
return (function (){
var base_keys = (((cljs.core.count(ctx) > (1)))?(function (){var tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__68597,map__68597__$1,index,index_io,cache){
return (function (a,b){
var attrs = (function (){var G__68599 = index;
var G__68600 = cljs.core.vec(b);
return (com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2(G__68599,G__68600) : com.wsscode.pathom.connect.discover_attrs.call(null,G__68599,G__68600));
})();
if((a == null)){
return attrs;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(b)),com.wsscode.pathom.connect.merge_io,attrs);
}
});})(map__68597,map__68597__$1,index,index_io,cache))
,null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__68597,map__68597__$1,index,index_io,cache){
return (function (p1__68593_SHARP_,p2__68592_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(p2__68592_SHARP_) - (p1__68593_SHARP_ + (1))),p2__68592_SHARP_);
});})(map__68597,map__68597__$1,index,index_io,cache))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(ctx) - (1)),ctx)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.vec(cljs.core.next(cljs.core.reverse(ctx))));
})():com.wsscode.pathom.connect.merge_io(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(index_io,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.first(ctx)], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(ctx)]),cljs.core.PersistentArrayMap.EMPTY)));
var available = index_io;
var collected = base_keys;
while(true){
var attrs = cljs.core.set(cljs.core.keys(collected));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (available,collected,attrs,base_keys,map__68597,map__68597__$1,index,index_io,cache){
return (function (p__68605){
var vec__68606 = p__68605;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68606,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68606,(1),null);
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(k,attrs));
});})(available,collected,attrs,base_keys,map__68597,map__68597__$1,index,index_io,cache))
,available);
if(cljs.core.seq(matches)){
var G__70354 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (available,collected,attrs,matches,base_keys,map__68597,map__68597__$1,index,index_io,cache){
return (function (p1__68594_SHARP_,p2__68595_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__68594_SHARP_,p2__68595_SHARP_);
});})(available,collected,attrs,matches,base_keys,map__68597,map__68597__$1,index,index_io,cache))
,available,cljs.core.keys(matches));
var G__70355 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.merge_io,collected,cljs.core.vals(matches));
available = G__70354;
collected = G__70355;
continue;
} else {
return collected;
}
break;
}
});})(map__68597,map__68597__$1,index,index_io,cache))
);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","discover-attrs","com.wsscode.pathom.connect/discover-attrs",-1426753571,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"ctx","ctx",-493610118)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68613){
return cljs.core.coll_QMARK_(G__68613);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),null,null,null));
/**
 * This will use the ::index-resolvers to re-build the index. You might need that if in development you changed some definitions
 *   and got in a dirty state somehow
 */
com.wsscode.pathom.connect.reprocess_index = (function com$wsscode$pathom$connect$reprocess_index(p__68614){
var map__68615 = p__68614;
var map__68615__$1 = (((((!((map__68615 == null))))?(((((map__68615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68615):map__68615);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68615__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
return cljs.core.reduce_kv(com.wsscode.pathom.connect.add,cljs.core.PersistentArrayMap.EMPTY,index_resolvers);
});
/**
 * Helper function to transform a data into an output shape.
 */
com.wsscode.pathom.connect.data__GT_shape = (function com$wsscode$pathom$connect$data__GT_shape(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68617_SHARP_){
if(cljs.core.map_QMARK_(p1__68617_SHARP_)){
return cljs.core.ffirst(p1__68617_SHARP_);
} else {
return p1__68617_SHARP_;
}
}),cljs.core.reduce_kv((function (out,k,v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,((cljs.core.map_QMARK_(v))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,(com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.data__GT_shape.call(null,v))]):((cljs.core.sequential_QMARK_(v))?(function (){var shape = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (q,x){
return com.wsscode.pathom.core.merge_queries(q,(com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1(x) : com.wsscode.pathom.connect.data__GT_shape.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,v);
if(cljs.core.seq(shape)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,shape]);
} else {
return k;
}
})():k
)));
}),cljs.core.PersistentVector.EMPTY,data)));
} else {
return null;
}
});
/**
 * Sorts output list to match input list.
 * 
 *   When doing batch requests you must return a vector in the same order respective to
 *   the order of inputs. Many times when calling an external API sending a list of ids
 *   the returned list doesn't always garantee input order. To fix these cases this
 *   function can restore the order. Example:
 * 
 *    (fn batch-resolver [env inputs]
 *      ; inputs => [{:my.entity/id 1} {:my.entity/id 2}]
 *      (batch-restore-sort {::inputs inputs
 *                           ::key    :my.entity/id}
 *        [{:my.entity/id    2
 *          :my.entity/color :my.entity.color/green}
 *         {:my.entity/id    1
 *          :my.entity/color :my.entity.color/purple}])
 *      ; => [{:my.entity/id    1
 *      ;      :my.entity/color :my.entity.color/purple}
 *      ;     {:my.entity/id    2
 *      ;      :my.entity/color :my.entity.color/green}]
 * 
 *   You can provide a ::batch-default function to fill in for missing items on the output. The
 *   default function will take the respective input and must return a map containing
 *   any data you want to add, usually some nil keys to declare that value should not
 *   require further lookup.
 */
com.wsscode.pathom.connect.batch_restore_sort = (function com$wsscode$pathom$connect$batch_restore_sort(p__68620,items){
var map__68621 = p__68620;
var map__68621__$1 = (((((!((map__68621 == null))))?(((((map__68621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68621):map__68621);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68621__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","inputs","com.wsscode.pathom.connect/inputs",-1635802936));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68621__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","key","com.wsscode.pathom.connect/key",1316653363));
var batch_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68621__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch-default","com.wsscode.pathom.connect/batch-default",2069925724));
var index = cljs.core.group_by(key,items);
var batch_default__$1 = (function (){var or__4131__auto__ = batch_default;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,index,map__68621,map__68621__$1,inputs,key,batch_default){
return (function (p1__68618_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([key],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__68618_SHARP_,key)]);
});
;})(or__4131__auto__,index,map__68621,map__68621__$1,inputs,key,batch_default))
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (index,batch_default__$1,map__68621,map__68621__$1,inputs,key,batch_default){
return (function (input){
var or__4131__auto__ = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,key)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (batch_default__$1.cljs$core$IFn$_invoke$arity$1 ? batch_default__$1.cljs$core$IFn$_invoke$arity$1(input) : batch_default__$1.call(null,input));
}
});})(index,batch_default__$1,map__68621,map__68621__$1,inputs,key,batch_default))
),inputs);
});
com.wsscode.pathom.connect.index_explorer_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","index-explorer-resolver","com.wsscode.pathom.connect/index-explorer-resolver",-1613438284,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))], null);
}));
com.wsscode.pathom.connect.indexes_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","indexes-resolver","com.wsscode.pathom.connect/indexes-resolver",-1892611171,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null)], null)], null)], null)], null),(function (env,_){
return cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null));
}));
com.wsscode.pathom.connect.resolver_weights_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-resolver","com.wsscode.pathom.connect/resolver-weights-resolver",-600539046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),(function (){var G__68627 = env;
var G__68627__$1 = (((G__68627 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__68627));
if((G__68627__$1 == null)){
return null;
} else {
return cljs.core.deref(G__68627__$1);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_sorted_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-sorted-resolver","com.wsscode.pathom.connect/resolver-weights-sorted-resolver",-1672618105,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218),(function (){var G__68630 = env;
var G__68630__$1 = (((G__68630 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__68630));
var G__68630__$2 = (((G__68630__$1 == null))?null:cljs.core.deref(G__68630__$1));
if((G__68630__$2 == null)){
return null;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,((function (G__68630,G__68630__$1,G__68630__$2){
return (function (p1__68629_SHARP_,p2__68628_SHARP_){
return cljs.core.compare(p2__68628_SHARP_,p1__68629_SHARP_);
});})(G__68630,G__68630__$1,G__68630__$2))
,G__68630__$2);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_resolvers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.resolver_weights_resolver,com.wsscode.pathom.connect.resolver_weights_sorted_resolver], null);
com.wsscode.pathom.connect.connect_resolvers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.indexes_resolver,com.wsscode.pathom.connect.resolver_weights_resolvers], null);
/**
 * This plugin facilitates the connect setup in a parser. It works by wrapping the parser,
 *   it setups the connect resolver and mutation dispatch using the embedded dispatchers (check resolver
 *   map format in the book for more details). It also sets up the resolver weights for load
 *   balacing calculation. Here are the available options to configure the plugin:
 * 
 *   `::pc/indexes` - provide an index atom to be used, otherwise the plugin will create one
 *   `::pc/register` - a resolver, mutation or sequence of resolvers/mutations to register in
 *   the index
 *   `::pc/pool-chan` - override the thread pool, use `nil` to disable thread pool feature (not recommneded)
 * 
 *   This plugin also looks for the key `::pc/register` in the other plugins used in the
 *   parser configuration, this enable plugins to provide resolvers/mutations to be available
 *   in your connect system.
 * 
 *   By default this plugin will also register resolvers to provide the index itself, if
 *   you for some reason need to hide it you can dissoc the `::pc/register` from the output
 *   and they will not be available, but consider that doing so you lose the ability to
 *   have instrospection in tools like Pathom Viz and Fulcro Inspect.
 */
com.wsscode.pathom.connect.connect_plugin = (function com$wsscode$pathom$connect$connect_plugin(var_args){
var G__68632 = arguments.length;
switch (G__68632) {
case 0:
return com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1 = (function (p__68634){
var map__68635 = p__68634;
var map__68635__$1 = (((((!((map__68635 == null))))?(((((map__68635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68635):map__68635);
var env = map__68635__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68635__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var indexes__$1 = (function (){var or__4131__auto__ = indexes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),((function (indexes__$1,pool_chan,map__68635,map__68635__$1,env,indexes){
return (function com$wsscode$pathom$connect$connect_wrap_parser(parser,p__68641){
var map__68642 = p__68641;
var map__68642__$1 = (((((!((map__68642 == null))))?(((((map__68642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68642):map__68642);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68642__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var plugin_registry = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),plugins);
var resolver_weights = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indexes__$1,com.wsscode.pathom.connect.register,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plugin_registry,cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.PersistentVector.EMPTY)], null));

return ((function (plugin_registry,resolver_weights,map__68642,map__68642__$1,plugins,indexes__$1,pool_chan,map__68635,map__68635__$1,env,indexes){
return (function (env__$1,tx){
var G__68644 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.resolver_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),com.wsscode.pathom.connect.mutation_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(indexes__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),resolver_weights,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449),pool_chan], null),env__$1], 0));
var G__68645 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__68644,G__68645) : parser.call(null,G__68644,G__68645));
});
;})(plugin_registry,resolver_weights,map__68642,map__68642__$1,plugins,indexes__$1,pool_chan,map__68635,map__68635__$1,env,indexes))
});})(indexes__$1,pool_chan,map__68635,map__68635__$1,env,indexes))
,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.connect.connect_resolvers], null);
});

com.wsscode.pathom.connect.connect_plugin.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=com.wsscode.pathom.connect.js.map
