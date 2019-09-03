goog.provide('com.wsscode.pathom.parser');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.trace');
goog.require('clojure.set');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
com.wsscode.pathom.parser.atom_QMARK_ = (function com$wsscode$pathom$parser$atom_QMARK_(x){
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
com.wsscode.pathom.parser.mark_meta = (function com$wsscode$pathom$parser$mark_meta(source,target){
var G__59949 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59949,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(source));
} else {
return G__59949;
}
});
com.wsscode.pathom.parser.symbol__GT_ast = (function com$wsscode$pathom$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.keyword__GT_ast = (function com$wsscode$pathom$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.union_entry__GT_ast = (function com$wsscode$pathom$parser$union_entry__GT_ast(p__59951){
var vec__59952 = p__59951;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59952,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.union__GT_ast = (function com$wsscode$pathom$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.union_entry__GT_ast),m)], null);
});
com.wsscode.pathom.parser.call__GT_ast = (function com$wsscode$pathom$parser$call__GT_ast(p__59959){
var vec__59960 = p__59959;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59960,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59960,(1),null);
var call = vec__59960;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : com.wsscode.pathom.parser.expr__GT_ast.call(null,args)),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : com.wsscode.pathom.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__4131__auto__ = args;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__59963 = com.wsscode.pathom.parser.mark_meta(call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59963,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__59963;
}
}
});
/**
 * Convert a query to its AST representation.
 */
com.wsscode.pathom.parser.query__GT_ast = (function com$wsscode$pathom$parser$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.parser.mark_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),query)], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.join__GT_ast = (function com$wsscode$pathom$parser$join__GT_ast(join){
var query_root_QMARK_ = new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join));
var vec__59964 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59964,(1),null);
var ast = (com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : com.wsscode.pathom.parser.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,com.wsscode.pathom.parser.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),((((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v))))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
com.wsscode.pathom.parser.ident__GT_ast = (function com$wsscode$pathom$parser$ident__GT_ast(p__59967){
var vec__59968 = p__59967;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59968,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59968,(1),null);
var ref = vec__59968;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
com.wsscode.pathom.parser.expr__GT_ast = (function com$wsscode$pathom$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return com.wsscode.pathom.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return com.wsscode.pathom.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return com.wsscode.pathom.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return com.wsscode.pathom.parser.ident__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return com.wsscode.pathom.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
com.wsscode.pathom.parser.wrap_expr = (function com$wsscode$pathom$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__59972 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__59972,null,(1),null));
} else {
return G__59972;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
com.wsscode.pathom.parser.parameterize = (function com$wsscode$pathom$parser$parameterize(expr,params){
if((!(cljs.core.empty_QMARK_(params)))){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,params,null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,expr,null,(1),null));
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
com.wsscode.pathom.parser.ast__GT_expr = (function com$wsscode$pathom$parser$ast__GT_expr(var_args){
var G__59980 = arguments.length;
switch (G__59980) {
case 1:
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(ast,false);
});

com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__59987,unparse_QMARK_){
var map__59988 = p__59987;
var map__59988__$1 = (((((!((map__59988 == null))))?(((((map__59988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59988):map__59988);
var ast = map__59988__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59988__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59988__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59988__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__59990 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__59988,map__59988__$1,ast,ast_meta,type,component){
return (function (p1__59973_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__59973_SHARP_,unparse_QMARK_);
});})(map__59988,map__59988__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__59990,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__59990;
}
} else {
var map__59991 = ast;
var map__59991__$1 = (((((!((map__59991 == null))))?(((((map__59991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59991):map__59991);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59991__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59991__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59991__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59991__$1,new cljs.core.Keyword(null,"params","params",710516235));
return com.wsscode.pathom.parser.wrap_expr(query_root,(cljs.core.truth_((function (){var and__4120__auto__ = params;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
} else {
return and__4120__auto__;
}
})())?(function (){var expr = com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
return com.wsscode.pathom.parser.parameterize(expr,params);
})():(function (){var key__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type))?com.wsscode.pathom.parser.parameterize(key,params):key);
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),type);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
if(and__4120__auto__){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
} else {
return and__4120__auto__;
}
}
})())){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) && ((!(typeof query === 'number'))) && (((unparse_QMARK_ === true) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)))))){
var map__59997 = ast;
var map__59997__$1 = (((((!((map__59997 == null))))?(((((map__59997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59997):map__59997);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59997__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta(query);
if(((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__59999 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__59999,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__59999;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__59997,map__59997__$1,children,query_meta,key__$1,map__59991,map__59991__$1,key,query,query_root,params,map__59988,map__59988__$1,ast,ast_meta,type,component){
return (function (p__60001){
var map__60002 = p__60001;
var map__60002__$1 = (((((!((map__60002 == null))))?(((((map__60002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60002):map__60002);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60002__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60002__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60002__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__60004 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__60002,map__60002__$1,union_key,children__$1,component__$1,map__59997,map__59997__$1,children,query_meta,key__$1,map__59991,map__59991__$1,key,query,query_root,params,map__59988,map__59988__$1,ast,ast_meta,type,component){
return (function (p1__59974_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__59974_SHARP_,unparse_QMARK_);
});})(map__60002,map__60002__$1,union_key,children__$1,component__$1,map__59997,map__59997__$1,children,query_meta,key__$1,map__59991,map__59991__$1,key,query,query_root,params,map__59988,map__59988__$1,ast,ast_meta,type,component))
),children__$1);
if((!((component__$1 == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__60004,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__60004;
}
})()], null);
});})(map__59997,map__59997__$1,children,query_meta,key__$1,map__59991,map__59991__$1,key,query,query_root,params,map__59988,map__59988__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__60005 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__59997,map__59997__$1,children,query_meta,key__$1,map__59991,map__59991__$1,key,query,query_root,params,map__59988,map__59988__$1,ast,ast_meta,type,component){
return (function (p1__59975_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__59975_SHARP_,unparse_QMARK_);
});})(map__59997,map__59997__$1,children,query_meta,key__$1,map__59991,map__59991__$1,key,query,query_root,params,map__59988,map__59988__$1,ast,ast_meta,type,component))
),children);
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__60005,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__60005;
}
})()]),ast_meta);
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,query]),ast_meta);
}
} else {
return key__$1;
}
})()));
}
});

com.wsscode.pathom.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;

com.wsscode.pathom.parser.focus_subquery_union_STAR_ = (function com$wsscode$pathom$parser$focus_subquery_union_STAR_(query_ast,sub_ast){
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__60013_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__60013_SHARP_),p1__60013_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_index){
return (function (children,p__60015){
var map__60016 = p__60015;
var map__60016__$1 = (((((!((map__60016 == null))))?(((((map__60016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60016):map__60016);
var union_entry = map__60016__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_index,union_key);
if(cljs.core.truth_(temp__5733__auto__)){
var sub = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,(com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(union_entry,sub) : com.wsscode.pathom.parser.focus_subquery_STAR_.call(null,union_entry,sub)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,union_entry);
}
});})(s_index))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast)));
});
com.wsscode.pathom.parser.focus_subquery_STAR_ = (function com$wsscode$pathom$parser$focus_subquery_STAR_(query_ast,sub_ast){
var q_index = cljs.core.group_by(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q_index){
return (function (children,p__60023){
var map__60024 = p__60023;
var map__60024__$1 = (((((!((map__60024 == null))))?(((((map__60024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60024):map__60024);
var focus = map__60024__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60024__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60024__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5733__auto__)){
var source = temp__5733__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source,temp__5733__auto__,map__60024,map__60024__$1,focus,key,type,q_index){
return (function (children__$1,source__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"join","join",-758861890),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source__$1)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,(com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(source__$1,focus) : com.wsscode.pathom.parser.focus_subquery_STAR_.call(null,source__$1,focus)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"union","union",2142937499),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source__$1)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,com.wsscode.pathom.parser.focus_subquery_union_STAR_(source__$1,focus));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,source__$1);

}
}
});})(source,temp__5733__auto__,map__60024,map__60024__$1,focus,key,type,q_index))
,children,source);
} else {
return children;
}
});})(q_index))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast)));
});
/**
 * Given a query, focus it along the specified query expression.
 * 
 *   Examples:
 *  (focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (fulcro.client.primitives/focus-query [{:foo [:bar :baz]} :woz] [{:foo [:bar]} :woz])
 *  => [{:foo [:bar]} :woz]
 */
com.wsscode.pathom.parser.focus_subquery = (function com$wsscode$pathom$parser$focus_subquery(query,sub_query){
var query_ast = com.wsscode.pathom.parser.query__GT_ast(query);
var sub_ast = com.wsscode.pathom.parser.query__GT_ast(sub_query);
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.parser.focus_subquery_STAR_(query_ast,sub_ast),true);
});
com.wsscode.pathom.parser.normalize_atom = (function com$wsscode$pathom$parser$normalize_atom(x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x);
}
});
com.wsscode.pathom.parser.ast__GT_out_key = (function com$wsscode$pathom$parser$ast__GT_out_key(ast){
var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"key","key",-1516042587));
}
});
com.wsscode.pathom.parser.parser = (function com$wsscode$pathom$parser$parser(p__60027){
var map__60028 = p__60027;
var map__60028__$1 = (((((!((map__60028 == null))))?(((((map__60028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60028):map__60028);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60028__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60028__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__60028,map__60028__$1,read,mutate){
return (function com$wsscode$pathom$parser$parser_$_self(env,tx){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__23022__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));
var res__23023__auto__ = (function (){var map__60035 = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903).cljs$core$IFn$_invoke$arity$1(tx);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.parser.query__GT_ast(tx);
}
})();
var map__60035__$1 = (((((!((map__60035 == null))))?(((((map__60035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60035):map__60035);
var tx_ast = map__60035__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self);
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__60041 = children;
var vec__60042 = G__60041;
var seq__60043 = cljs.core.seq(vec__60042);
var first__60044 = cljs.core.first(seq__60043);
var seq__60043__$1 = cljs.core.next(seq__60043);
var map__60045 = first__60044;
var map__60045__$1 = (((((!((map__60045 == null))))?(((((map__60045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60045):map__60045);
var ast = map__60045__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60045__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60045__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60045__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60045__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__60043__$1;
var res__$1 = res;
var G__60041__$1 = G__60041;
while(true){
var res__$2 = res__$1;
var vec__60066 = G__60041__$1;
var seq__60067 = cljs.core.seq(vec__60066);
var first__60068 = cljs.core.first(seq__60067);
var seq__60067__$1 = cljs.core.next(seq__60067);
var map__60069 = first__60068;
var map__60069__$1 = (((((!((map__60069 == null))))?(((((map__60069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60069):map__60069);
var ast__$1 = map__60069__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__60067__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var query__$2 = (function (){var G__60071 = query__$1;
if(cljs.core.vector_QMARK_(query__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__60071,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
} else {
return G__60071;
}
})();
var env__$2 = (function (){var G__60072 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$2], null)], 0));
var G__60072__$1 = (((query__$2 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60072,new cljs.core.Keyword(null,"query","query",-1288509510)):G__60072);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$2)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60072__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__60072__$1;
}
})();
var value = (function (){var G__60074 = type__$1;
var G__60074__$1 = (((G__60074 instanceof cljs.core.Keyword))?G__60074.fqn:null);
switch (G__60074__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__60076 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__60076__$1 = (((((!((map__60076 == null))))?(((((map__60076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60076):map__60076);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60076__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$2) : read.call(null,env__$2));

break;
default:
return null;

}
})();
var G__62565 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__62566 = tail__$1;
res__$1 = G__62565;
G__60041__$1 = G__62566;
continue;
} else {
return res__$2;
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__23022__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));

return res__23023__auto__;
} else {
var map__60081 = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903).cljs$core$IFn$_invoke$arity$1(tx);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.parser.query__GT_ast(tx);
}
})();
var map__60081__$1 = (((((!((map__60081 == null))))?(((((map__60081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60081):map__60081);
var tx_ast = map__60081__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60081__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self);
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__60087 = children;
var vec__60088 = G__60087;
var seq__60089 = cljs.core.seq(vec__60088);
var first__60090 = cljs.core.first(seq__60089);
var seq__60089__$1 = cljs.core.next(seq__60089);
var map__60091 = first__60090;
var map__60091__$1 = (((((!((map__60091 == null))))?(((((map__60091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60091):map__60091);
var ast = map__60091__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60091__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60091__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60091__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60091__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__60089__$1;
var res__$1 = res;
var G__60087__$1 = G__60087;
while(true){
var res__$2 = res__$1;
var vec__60109 = G__60087__$1;
var seq__60110 = cljs.core.seq(vec__60109);
var first__60111 = cljs.core.first(seq__60110);
var seq__60110__$1 = cljs.core.next(seq__60110);
var map__60112 = first__60111;
var map__60112__$1 = (((((!((map__60112 == null))))?(((((map__60112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60112):map__60112);
var ast__$1 = map__60112__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60112__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60112__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60112__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60112__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__60110__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var query__$2 = (function (){var G__60114 = query__$1;
if(cljs.core.vector_QMARK_(query__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__60114,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
} else {
return G__60114;
}
})();
var env__$2 = (function (){var G__60115 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$2], null)], 0));
var G__60115__$1 = (((query__$2 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60115,new cljs.core.Keyword(null,"query","query",-1288509510)):G__60115);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$2)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60115__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__60115__$1;
}
})();
var value = (function (){var G__60116 = type__$1;
var G__60116__$1 = (((G__60116 instanceof cljs.core.Keyword))?G__60116.fqn:null);
switch (G__60116__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__60117 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__60117__$1 = (((((!((map__60117 == null))))?(((((map__60117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60117):map__60117);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60117__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$2) : read.call(null,env__$2));

break;
default:
return null;

}
})();
var G__62603 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__62604 = tail__$1;
res__$1 = G__62603;
G__60087__$1 = G__62604;
continue;
} else {
return res__$2;
}
break;
}
}
});
;})(map__60028,map__60028__$1,read,mutate))
});
com.wsscode.pathom.parser.async_parser = (function com$wsscode$pathom$parser$async_parser(p__60119){
var map__60121 = p__60119;
var map__60121__$1 = (((((!((map__60121 == null))))?(((((map__60121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60121):map__60121);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60121__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60121__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__60121,map__60121__$1,read,mutate){
return (function com$wsscode$pathom$parser$async_parser_$_self(env,tx){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,map__60121,map__60121__$1,read,mutate){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,map__60121,map__60121__$1,read,mutate){
return (function (state_60580){
var state_val_60581 = (state_60580[(1)]);
if((state_val_60581 === (121))){
var inst_60472 = (state_60580[(7)]);
var inst_60504 = (state_60580[(2)]);
var state_60580__$1 = (function (){var statearr_60582 = state_60580;
(statearr_60582[(8)] = inst_60504);

return statearr_60582;
})();
var G__60583_62624 = inst_60472;
var G__60583_62625__$1 = (((G__60583_62624 instanceof cljs.core.Keyword))?G__60583_62624.fqn:null);
switch (G__60583_62625__$1) {
case "call":
var statearr_60584_62639 = state_60580__$1;
(statearr_60584_62639[(1)] = (123));


break;
case "prop":
case "join":
case "union":
var statearr_60585_62640 = state_60580__$1;
(statearr_60585_62640[(1)] = (139));


break;
default:
var statearr_60586_62641 = state_60580__$1;
(statearr_60586_62641[(1)] = (143));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (65))){
var inst_60316 = (state_60580[(9)]);
var inst_60315 = (state_60580[(2)]);
var inst_60316__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60315,new cljs.core.Keyword(null,"action","action",-811238024));
var state_60580__$1 = (function (){var statearr_60588 = state_60580;
(statearr_60588[(9)] = inst_60316__$1);

return statearr_60588;
})();
if(cljs.core.truth_(inst_60316__$1)){
var statearr_60589_62645 = state_60580__$1;
(statearr_60589_62645[(1)] = (66));

} else {
var statearr_60590_62646 = state_60580__$1;
(statearr_60590_62646[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (70))){
var state_60580__$1 = state_60580;
var statearr_60591_62647 = state_60580__$1;
(statearr_60591_62647[(2)] = null);

(statearr_60591_62647[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (62))){
var inst_60307 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60592_62648 = state_60580__$1;
(statearr_60592_62648[(2)] = inst_60307);

(statearr_60592_62648[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (74))){
var inst_60343 = (state_60580[(10)]);
var state_60580__$1 = state_60580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60580__$1,(77),inst_60343);
} else {
if((state_val_60581 === (110))){
var inst_60470 = (state_60580[(11)]);
var inst_60396 = (state_60580[(12)]);
var inst_60471 = (state_60580[(13)]);
var inst_60476 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_60477 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_60471];
var inst_60478 = cljs.core.PersistentHashMap.fromArrays(inst_60476,inst_60477);
var inst_60479 = com.wsscode.pathom.trace.trace(inst_60396,inst_60478);
var inst_60481 = cljs.core.vector_QMARK_(inst_60470);
var state_60580__$1 = (function (){var statearr_60593 = state_60580;
(statearr_60593[(14)] = inst_60479);

return statearr_60593;
})();
if(inst_60481){
var statearr_60594_62651 = state_60580__$1;
(statearr_60594_62651[(1)] = (113));

} else {
var statearr_60595_62652 = state_60580__$1;
(statearr_60595_62652[(1)] = (114));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (130))){
var state_60580__$1 = state_60580;
var statearr_60596_62655 = state_60580__$1;
(statearr_60596_62655[(2)] = true);

(statearr_60596_62655[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (128))){
var state_60580__$1 = state_60580;
var statearr_60600_62656 = state_60580__$1;
(statearr_60600_62656[(2)] = false);

(statearr_60600_62656[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (7))){
var inst_60576 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60601_62657 = state_60580__$1;
(statearr_60601_62657[(2)] = inst_60576);


cljs.core.async.impl.ioc_helpers.process_exception(state_60580__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (59))){
var inst_60310 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60310)){
var statearr_60602_62660 = state_60580__$1;
(statearr_60602_62660[(1)] = (63));

} else {
var statearr_60603_62661 = state_60580__$1;
(statearr_60603_62661[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (86))){
var inst_60385 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60604_62662 = state_60580__$1;
(statearr_60604_62662[(2)] = inst_60385);

(statearr_60604_62662[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (20))){
var inst_60185 = (state_60580[(15)]);
var inst_60194 = inst_60185.cljs$lang$protocol_mask$partition0$;
var inst_60195 = (inst_60194 & (64));
var inst_60196 = inst_60185.cljs$core$ISeq$;
var inst_60197 = (cljs.core.PROTOCOL_SENTINEL === inst_60196);
var inst_60198 = ((inst_60195) || (inst_60197));
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60198)){
var statearr_60608_62664 = state_60580__$1;
(statearr_60608_62664[(1)] = (23));

} else {
var statearr_60609_62665 = state_60580__$1;
(statearr_60609_62665[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (72))){
var inst_60285 = (state_60580[(16)]);
var inst_60335 = (state_60580[(2)]);
var inst_60338 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_60285) : read.call(null,inst_60285));
var state_60580__$1 = (function (){var statearr_60610 = state_60580;
(statearr_60610[(17)] = inst_60335);

return statearr_60610;
})();
var statearr_60611_62666 = state_60580__$1;
(statearr_60611_62666[(2)] = inst_60338);

(statearr_60611_62666[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (58))){
var state_60580__$1 = state_60580;
var statearr_60612_62668 = state_60580__$1;
(statearr_60612_62668[(2)] = false);

(statearr_60612_62668[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (60))){
var state_60580__$1 = state_60580;
var statearr_60613_62669 = state_60580__$1;
(statearr_60613_62669[(2)] = true);

(statearr_60613_62669[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (27))){
var inst_60185 = (state_60580[(15)]);
var state_60580__$1 = state_60580;
var statearr_60614_62670 = state_60580__$1;
(statearr_60614_62670[(2)] = inst_60185);

(statearr_60614_62670[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (1))){
var state_60580__$1 = state_60580;
var statearr_60615_62671 = state_60580__$1;
(statearr_60615_62671[(2)] = null);

(statearr_60615_62671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (69))){
var state_60580__$1 = state_60580;
if(cljs.core.truth_(read)){
var statearr_60616_62672 = state_60580__$1;
(statearr_60616_62672[(1)] = (70));

} else {
var statearr_60620_62673 = state_60580__$1;
(statearr_60620_62673[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (101))){
var inst_60447 = (state_60580[(18)]);
var inst_60453 = inst_60447.cljs$lang$protocol_mask$partition0$;
var inst_60454 = (inst_60453 & (64));
var inst_60455 = inst_60447.cljs$core$ISeq$;
var inst_60456 = (cljs.core.PROTOCOL_SENTINEL === inst_60455);
var inst_60457 = ((inst_60454) || (inst_60456));
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60457)){
var statearr_60621_62675 = state_60580__$1;
(statearr_60621_62675[(1)] = (104));

} else {
var statearr_60622_62676 = state_60580__$1;
(statearr_60622_62676[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (24))){
var state_60580__$1 = state_60580;
var statearr_60625_62677 = state_60580__$1;
(statearr_60625_62677[(2)] = false);

(statearr_60625_62677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (102))){
var state_60580__$1 = state_60580;
var statearr_60626_62678 = state_60580__$1;
(statearr_60626_62678[(2)] = false);

(statearr_60626_62678[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (135))){
var inst_60535 = (state_60580[(19)]);
var inst_60534 = (state_60580[(2)]);
var inst_60535__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60534,new cljs.core.Keyword(null,"action","action",-811238024));
var state_60580__$1 = (function (){var statearr_60627 = state_60580;
(statearr_60627[(19)] = inst_60535__$1);

return statearr_60627;
})();
if(cljs.core.truth_(inst_60535__$1)){
var statearr_60629_62685 = state_60580__$1;
(statearr_60629_62685[(1)] = (136));

} else {
var statearr_60630_62686 = state_60580__$1;
(statearr_60630_62686[(1)] = (137));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (55))){
var inst_60288 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_60289 = (new Error(inst_60288));
var inst_60290 = (function(){throw inst_60289})();
var state_60580__$1 = state_60580;
var statearr_60631_62687 = state_60580__$1;
(statearr_60631_62687[(2)] = inst_60290);

(statearr_60631_62687[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (85))){
var state_60580__$1 = state_60580;
var statearr_60633_62688 = state_60580__$1;
(statearr_60633_62688[(2)] = false);

(statearr_60633_62688[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (39))){
var inst_60246 = (state_60580[(20)]);
var inst_60246__$1 = (state_60580[(2)]);
var inst_60247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60246__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_60248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60246__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_60254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60246__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_60255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60246__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_60580__$1 = (function (){var statearr_60634 = state_60580;
(statearr_60634[(21)] = inst_60248);

(statearr_60634[(22)] = inst_60247);

(statearr_60634[(20)] = inst_60246__$1);

(statearr_60634[(23)] = inst_60255);

(statearr_60634[(24)] = inst_60254);

return statearr_60634;
})();
if(cljs.core.truth_(inst_60246__$1)){
var statearr_60635_62689 = state_60580__$1;
(statearr_60635_62689[(1)] = (40));

} else {
var statearr_60636_62690 = state_60580__$1;
(statearr_60636_62690[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (88))){
var inst_60371 = (state_60580[(25)]);
var state_60580__$1 = state_60580;
var statearr_60637_62691 = state_60580__$1;
(statearr_60637_62691[(2)] = inst_60371);

(statearr_60637_62691[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (46))){
var inst_60272 = (state_60580[(26)]);
var inst_60275 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_60272,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_60580__$1 = state_60580;
var statearr_60638_62692 = state_60580__$1;
(statearr_60638_62692[(2)] = inst_60275);

(statearr_60638_62692[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_60580,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_60135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60135)){
var statearr_60639_62693 = state_60580__$1;
(statearr_60639_62693[(1)] = (5));

} else {
var statearr_60640_62694 = state_60580__$1;
(statearr_60640_62694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (77))){
var inst_60347 = (state_60580[(2)]);
var inst_60348 = com.wsscode.common.async_cljs.throw_err(inst_60347);
var state_60580__$1 = state_60580;
var statearr_60641_62695 = state_60580__$1;
(statearr_60641_62695[(2)] = inst_60348);

(statearr_60641_62695[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (106))){
var inst_60461 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60642_62696 = state_60580__$1;
(statearr_60642_62696[(2)] = inst_60461);

(statearr_60642_62696[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (119))){
var inst_60395 = (state_60580[(27)]);
var inst_60497 = (state_60580[(28)]);
var inst_60501 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_60497,new cljs.core.Keyword(null,"query","query",-1288509510),inst_60395);
var state_60580__$1 = state_60580;
var statearr_60643_62698 = state_60580__$1;
(statearr_60643_62698[(2)] = inst_60501);

(statearr_60643_62698[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (95))){
var inst_60426 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60651_62699 = state_60580__$1;
(statearr_60651_62699[(2)] = inst_60426);

(statearr_60651_62699[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (144))){
var inst_60553 = (state_60580[(29)]);
var state_60580__$1 = state_60580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60580__$1,(147),inst_60553);
} else {
if((state_val_60581 === (54))){
var state_60580__$1 = state_60580;
var statearr_60654_62700 = state_60580__$1;
(statearr_60654_62700[(2)] = null);

(statearr_60654_62700[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (92))){
var inst_60429 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60429)){
var statearr_60655_62701 = state_60580__$1;
(statearr_60655_62701[(1)] = (96));

} else {
var statearr_60657_62702 = state_60580__$1;
(statearr_60657_62702[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (141))){
var inst_60544 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_60545 = (new Error(inst_60544));
var inst_60546 = (function(){throw inst_60545})();
var state_60580__$1 = state_60580;
var statearr_60661_62703 = state_60580__$1;
(statearr_60661_62703[(2)] = inst_60546);

(statearr_60661_62703[(1)] = (142));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (137))){
var state_60580__$1 = state_60580;
var statearr_60662_62704 = state_60580__$1;
(statearr_60662_62704[(2)] = null);

(statearr_60662_62704[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (104))){
var state_60580__$1 = state_60580;
var statearr_60663_62705 = state_60580__$1;
(statearr_60663_62705[(2)] = true);

(statearr_60663_62705[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (15))){
var state_60580__$1 = state_60580;
var statearr_60664_62706 = state_60580__$1;
(statearr_60664_62706[(2)] = false);

(statearr_60664_62706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (48))){
var inst_60267 = (state_60580[(30)]);
var inst_60278 = (state_60580[(2)]);
var inst_60279 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_60280 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60279,inst_60267);
var state_60580__$1 = (function (){var statearr_60665 = state_60580;
(statearr_60665[(31)] = inst_60278);

return statearr_60665;
})();
if(inst_60280){
var statearr_60666_62707 = state_60580__$1;
(statearr_60666_62707[(1)] = (49));

} else {
var statearr_60667_62708 = state_60580__$1;
(statearr_60667_62708[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (50))){
var inst_60278 = (state_60580[(31)]);
var state_60580__$1 = state_60580;
var statearr_60668_62709 = state_60580__$1;
(statearr_60668_62709[(2)] = inst_60278);

(statearr_60668_62709[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (116))){
var inst_60491 = (state_60580[(32)]);
var inst_60494 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_60491,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_60580__$1 = state_60580;
var statearr_60670_62710 = state_60580__$1;
(statearr_60670_62710[(2)] = inst_60494);

(statearr_60670_62710[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (75))){
var inst_60343 = (state_60580[(10)]);
var state_60580__$1 = state_60580;
var statearr_60671_62713 = state_60580__$1;
(statearr_60671_62713[(2)] = inst_60343);

(statearr_60671_62713[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (99))){
var inst_60447 = (state_60580[(18)]);
var inst_60440 = (state_60580[(33)]);
var inst_60446 = cljs.core.seq(inst_60440);
var inst_60447__$1 = cljs.core.first(inst_60446);
var inst_60448 = cljs.core.next(inst_60446);
var inst_60450 = (inst_60447__$1 == null);
var inst_60451 = cljs.core.not(inst_60450);
var state_60580__$1 = (function (){var statearr_60672 = state_60580;
(statearr_60672[(18)] = inst_60447__$1);

(statearr_60672[(34)] = inst_60448);

return statearr_60672;
})();
if(inst_60451){
var statearr_60673_62714 = state_60580__$1;
(statearr_60673_62714[(1)] = (101));

} else {
var statearr_60674_62715 = state_60580__$1;
(statearr_60674_62715[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (21))){
var state_60580__$1 = state_60580;
var statearr_60682_62716 = state_60580__$1;
(statearr_60682_62716[(2)] = false);

(statearr_60682_62716[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (31))){
var inst_60224 = (state_60580[(35)]);
var inst_60230 = inst_60224.cljs$lang$protocol_mask$partition0$;
var inst_60231 = (inst_60230 & (64));
var inst_60232 = inst_60224.cljs$core$ISeq$;
var inst_60233 = (cljs.core.PROTOCOL_SENTINEL === inst_60232);
var inst_60234 = ((inst_60231) || (inst_60233));
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60234)){
var statearr_60683_62719 = state_60580__$1;
(statearr_60683_62719[(1)] = (34));

} else {
var statearr_60684_62720 = state_60580__$1;
(statearr_60684_62720[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (113))){
var inst_60470 = (state_60580[(11)]);
var inst_60393 = (state_60580[(36)]);
var inst_60483 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(inst_60470,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_60393);
var state_60580__$1 = state_60580;
var statearr_60685_62721 = state_60580__$1;
(statearr_60685_62721[(2)] = inst_60483);

(statearr_60685_62721[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (32))){
var state_60580__$1 = state_60580;
var statearr_60686_62723 = state_60580__$1;
(statearr_60686_62723[(2)] = false);

(statearr_60686_62723[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (136))){
var inst_60535 = (state_60580[(19)]);
var inst_60537 = (inst_60535.cljs$core$IFn$_invoke$arity$0 ? inst_60535.cljs$core$IFn$_invoke$arity$0() : inst_60535.call(null));
var state_60580__$1 = state_60580;
var statearr_60689_62724 = state_60580__$1;
(statearr_60689_62724[(2)] = inst_60537);

(statearr_60689_62724[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (139))){
var state_60580__$1 = state_60580;
if(cljs.core.truth_(read)){
var statearr_60690_62725 = state_60580__$1;
(statearr_60690_62725[(1)] = (140));

} else {
var statearr_60691_62726 = state_60580__$1;
(statearr_60691_62726[(1)] = (141));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (40))){
var inst_60248 = (state_60580[(21)]);
var inst_60247 = (state_60580[(22)]);
var inst_60172 = (state_60580[(37)]);
var inst_60257 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_60258 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_60248];
var inst_60259 = cljs.core.PersistentHashMap.fromArrays(inst_60257,inst_60258);
var inst_60260 = com.wsscode.pathom.trace.trace(inst_60172,inst_60259);
var inst_60262 = cljs.core.vector_QMARK_(inst_60247);
var state_60580__$1 = (function (){var statearr_60692 = state_60580;
(statearr_60692[(38)] = inst_60260);

return statearr_60692;
})();
if(inst_60262){
var statearr_60693_62731 = state_60580__$1;
(statearr_60693_62731[(1)] = (43));

} else {
var statearr_60694_62732 = state_60580__$1;
(statearr_60694_62732[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (129))){
var inst_60529 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60529)){
var statearr_60695_62736 = state_60580__$1;
(statearr_60695_62736[(1)] = (133));

} else {
var statearr_60696_62737 = state_60580__$1;
(statearr_60696_62737[(1)] = (134));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (91))){
var state_60580__$1 = state_60580;
var statearr_60698_62738 = state_60580__$1;
(statearr_60698_62738[(2)] = false);

(statearr_60698_62738[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (117))){
var inst_60491 = (state_60580[(32)]);
var state_60580__$1 = state_60580;
var statearr_60699_62742 = state_60580__$1;
(statearr_60699_62742[(2)] = inst_60491);

(statearr_60699_62742[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (108))){
var inst_60447 = (state_60580[(18)]);
var state_60580__$1 = state_60580;
var statearr_60707_62743 = state_60580__$1;
(statearr_60707_62743[(2)] = inst_60447);

(statearr_60707_62743[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (56))){
var inst_60248 = (state_60580[(21)]);
var inst_60294 = (state_60580[(39)]);
var inst_60255 = (state_60580[(23)]);
var inst_60285 = (state_60580[(16)]);
var inst_60292 = (state_60580[(2)]);
var inst_60294__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_60285,inst_60248,inst_60255) : mutate.call(null,inst_60285,inst_60248,inst_60255));
var inst_60296 = (inst_60294__$1 == null);
var inst_60297 = cljs.core.not(inst_60296);
var state_60580__$1 = (function (){var statearr_60709 = state_60580;
(statearr_60709[(39)] = inst_60294__$1);

(statearr_60709[(40)] = inst_60292);

return statearr_60709;
})();
if(inst_60297){
var statearr_60710_62744 = state_60580__$1;
(statearr_60710_62744[(1)] = (57));

} else {
var statearr_60711_62745 = state_60580__$1;
(statearr_60711_62745[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (33))){
var inst_60241 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60241)){
var statearr_60712_62746 = state_60580__$1;
(statearr_60712_62746[(1)] = (37));

} else {
var statearr_60713_62747 = state_60580__$1;
(statearr_60713_62747[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (13))){
var inst_60164 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60164)){
var statearr_60714_62749 = state_60580__$1;
(statearr_60714_62749[(1)] = (17));

} else {
var statearr_60715_62750 = state_60580__$1;
(statearr_60715_62750[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (22))){
var inst_60205 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60205)){
var statearr_60716_62751 = state_60580__$1;
(statearr_60716_62751[(1)] = (26));

} else {
var statearr_60717_62752 = state_60580__$1;
(statearr_60717_62752[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (90))){
var inst_60412 = (state_60580[(41)]);
var inst_60418 = inst_60412.cljs$lang$protocol_mask$partition0$;
var inst_60419 = (inst_60418 & (64));
var inst_60420 = inst_60412.cljs$core$ISeq$;
var inst_60421 = (cljs.core.PROTOCOL_SENTINEL === inst_60420);
var inst_60422 = ((inst_60419) || (inst_60421));
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60422)){
var statearr_60718_62753 = state_60580__$1;
(statearr_60718_62753[(1)] = (93));

} else {
var statearr_60720_62754 = state_60580__$1;
(statearr_60720_62754[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (109))){
var inst_60469 = (state_60580[(42)]);
var inst_60469__$1 = (state_60580[(2)]);
var inst_60470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60469__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_60471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60469__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_60472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60469__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_60473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60469__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_60580__$1 = (function (){var statearr_60725 = state_60580;
(statearr_60725[(11)] = inst_60470);

(statearr_60725[(42)] = inst_60469__$1);

(statearr_60725[(7)] = inst_60472);

(statearr_60725[(43)] = inst_60473);

(statearr_60725[(13)] = inst_60471);

return statearr_60725;
})();
if(cljs.core.truth_(inst_60469__$1)){
var statearr_60726_62755 = state_60580__$1;
(statearr_60726_62755[(1)] = (110));

} else {
var statearr_60727_62756 = state_60580__$1;
(statearr_60727_62756[(1)] = (111));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (143))){
var state_60580__$1 = state_60580;
var statearr_60729_62757 = state_60580__$1;
(statearr_60729_62757[(2)] = null);

(statearr_60729_62757[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (36))){
var inst_60238 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60730_62758 = state_60580__$1;
(statearr_60730_62758[(2)] = inst_60238);

(statearr_60730_62758[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (41))){
var inst_60215 = (state_60580[(44)]);
var state_60580__$1 = state_60580;
var statearr_60740_62763 = state_60580__$1;
(statearr_60740_62763[(2)] = inst_60215);

(statearr_60740_62763[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (118))){
var inst_60486 = (state_60580[(45)]);
var inst_60497 = (state_60580[(2)]);
var inst_60498 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_60499 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60498,inst_60486);
var state_60580__$1 = (function (){var statearr_60741 = state_60580;
(statearr_60741[(28)] = inst_60497);

return statearr_60741;
})();
if(inst_60499){
var statearr_60742_62764 = state_60580__$1;
(statearr_60742_62764[(1)] = (119));

} else {
var statearr_60743_62765 = state_60580__$1;
(statearr_60743_62765[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (89))){
var inst_60393 = (state_60580[(36)]);
var inst_60394 = (state_60580[(46)]);
var inst_60412 = (state_60580[(41)]);
var inst_60393__$1 = (state_60580[(2)]);
var inst_60394__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60393__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_60395 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_60393__$1);
var inst_60396 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self);
var inst_60410 = cljs.core.PersistentHashMap.EMPTY;
var inst_60411 = cljs.core.seq(inst_60394__$1);
var inst_60412__$1 = cljs.core.first(inst_60411);
var inst_60413 = cljs.core.next(inst_60411);
var inst_60415 = (inst_60412__$1 == null);
var inst_60416 = cljs.core.not(inst_60415);
var state_60580__$1 = (function (){var statearr_60744 = state_60580;
(statearr_60744[(27)] = inst_60395);

(statearr_60744[(36)] = inst_60393__$1);

(statearr_60744[(47)] = inst_60410);

(statearr_60744[(12)] = inst_60396);

(statearr_60744[(48)] = inst_60413);

(statearr_60744[(46)] = inst_60394__$1);

(statearr_60744[(41)] = inst_60412__$1);

return statearr_60744;
})();
if(inst_60416){
var statearr_60745_62770 = state_60580__$1;
(statearr_60745_62770[(1)] = (90));

} else {
var statearr_60746_62771 = state_60580__$1;
(statearr_60746_62771[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (100))){
var inst_60574 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60747_62772 = state_60580__$1;
(statearr_60747_62772[(2)] = inst_60574);

(statearr_60747_62772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (131))){
var state_60580__$1 = state_60580;
var statearr_60748_62773 = state_60580__$1;
(statearr_60748_62773[(2)] = false);

(statearr_60748_62773[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (122))){
var inst_60553 = (state_60580[(29)]);
var inst_60553__$1 = (state_60580[(2)]);
var inst_60554 = com.wsscode.common.async_cljs.chan_QMARK_(inst_60553__$1);
var state_60580__$1 = (function (){var statearr_60750 = state_60580;
(statearr_60750[(29)] = inst_60553__$1);

return statearr_60750;
})();
if(inst_60554){
var statearr_60751_62777 = state_60580__$1;
(statearr_60751_62777[(1)] = (144));

} else {
var statearr_60755_62778 = state_60580__$1;
(statearr_60755_62778[(1)] = (145));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (43))){
var inst_60169 = (state_60580[(49)]);
var inst_60247 = (state_60580[(22)]);
var inst_60264 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(inst_60247,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_60169);
var state_60580__$1 = state_60580;
var statearr_60761_62780 = state_60580__$1;
(statearr_60761_62780[(2)] = inst_60264);

(statearr_60761_62780[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (61))){
var state_60580__$1 = state_60580;
var statearr_60762_62784 = state_60580__$1;
(statearr_60762_62784[(2)] = false);

(statearr_60762_62784[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (29))){
var inst_60216 = (state_60580[(50)]);
var inst_60224 = (state_60580[(35)]);
var inst_60223 = cljs.core.seq(inst_60216);
var inst_60224__$1 = cljs.core.first(inst_60223);
var inst_60225 = cljs.core.next(inst_60223);
var inst_60227 = (inst_60224__$1 == null);
var inst_60228 = cljs.core.not(inst_60227);
var state_60580__$1 = (function (){var statearr_60763 = state_60580;
(statearr_60763[(51)] = inst_60225);

(statearr_60763[(35)] = inst_60224__$1);

return statearr_60763;
})();
if(inst_60228){
var statearr_60765_62785 = state_60580__$1;
(statearr_60765_62785[(1)] = (31));

} else {
var statearr_60766_62786 = state_60580__$1;
(statearr_60766_62786[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (44))){
var inst_60247 = (state_60580[(22)]);
var state_60580__$1 = state_60580;
var statearr_60767_62787 = state_60580__$1;
(statearr_60767_62787[(2)] = inst_60247);

(statearr_60767_62787[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (93))){
var state_60580__$1 = state_60580;
var statearr_60768_62788 = state_60580__$1;
(statearr_60768_62788[(2)] = true);

(statearr_60768_62788[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (6))){
var inst_60366 = (state_60580[(52)]);
var inst_60366__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903).cljs$core$IFn$_invoke$arity$1(tx);
var state_60580__$1 = (function (){var statearr_60773 = state_60580;
(statearr_60773[(52)] = inst_60366__$1);

return statearr_60773;
})();
if(cljs.core.truth_(inst_60366__$1)){
var statearr_60774_62789 = state_60580__$1;
(statearr_60774_62789[(1)] = (78));

} else {
var statearr_60775_62790 = state_60580__$1;
(statearr_60775_62790[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (111))){
var inst_60439 = (state_60580[(53)]);
var state_60580__$1 = state_60580;
var statearr_60776_62791 = state_60580__$1;
(statearr_60776_62791[(2)] = inst_60439);

(statearr_60776_62791[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (28))){
var inst_60182 = (state_60580[(54)]);
var inst_60170 = (state_60580[(55)]);
var inst_60210 = (state_60580[(2)]);
var inst_60211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60210,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_60212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60210,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_60213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60210,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_60214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60210,new cljs.core.Keyword(null,"params","params",710516235));
var inst_60215 = inst_60182;
var inst_60216 = inst_60170;
var state_60580__$1 = (function (){var statearr_60777 = state_60580;
(statearr_60777[(50)] = inst_60216);

(statearr_60777[(56)] = inst_60213);

(statearr_60777[(44)] = inst_60215);

(statearr_60777[(57)] = inst_60211);

(statearr_60777[(58)] = inst_60214);

(statearr_60777[(59)] = inst_60212);

return statearr_60777;
})();
var statearr_60778_62795 = state_60580__$1;
(statearr_60778_62795[(2)] = null);

(statearr_60778_62795[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (134))){
var inst_60513 = (state_60580[(60)]);
var state_60580__$1 = state_60580;
var statearr_60779_62796 = state_60580__$1;
(statearr_60779_62796[(2)] = inst_60513);

(statearr_60779_62796[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (64))){
var inst_60294 = (state_60580[(39)]);
var state_60580__$1 = state_60580;
var statearr_60780_62797 = state_60580__$1;
(statearr_60780_62797[(2)] = inst_60294);

(statearr_60780_62797[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (103))){
var inst_60464 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60464)){
var statearr_60781_62798 = state_60580__$1;
(statearr_60781_62798[(1)] = (107));

} else {
var statearr_60782_62800 = state_60580__$1;
(statearr_60782_62800[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (51))){
var inst_60254 = (state_60580[(24)]);
var inst_60285 = (state_60580[(2)]);
var state_60580__$1 = (function (){var statearr_60783 = state_60580;
(statearr_60783[(16)] = inst_60285);

return statearr_60783;
})();
var G__60784_62803 = inst_60254;
var G__60784_62804__$1 = (((G__60784_62803 instanceof cljs.core.Keyword))?G__60784_62803.fqn:null);
switch (G__60784_62804__$1) {
case "call":
var statearr_60785_62806 = state_60580__$1;
(statearr_60785_62806[(1)] = (53));


break;
case "prop":
case "join":
case "union":
var statearr_60786_62807 = state_60580__$1;
(statearr_60786_62807[(1)] = (69));


break;
default:
var statearr_60787_62808 = state_60580__$1;
(statearr_60787_62808[(1)] = (73));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (25))){
var inst_60202 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60788_62809 = state_60580__$1;
(statearr_60788_62809[(2)] = inst_60202);

(statearr_60788_62809[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (34))){
var state_60580__$1 = state_60580;
var statearr_60789_62810 = state_60580__$1;
(statearr_60789_62810[(2)] = true);

(statearr_60789_62810[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (146))){
var inst_60469 = (state_60580[(42)]);
var inst_60448 = (state_60580[(34)]);
var inst_60439 = (state_60580[(53)]);
var inst_60566 = (state_60580[(2)]);
var inst_60567 = com.wsscode.pathom.parser.ast__GT_out_key(inst_60469);
var inst_60568 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_60439,inst_60567,inst_60566);
var inst_60439__$1 = inst_60568;
var inst_60440 = inst_60448;
var state_60580__$1 = (function (){var statearr_60790 = state_60580;
(statearr_60790[(53)] = inst_60439__$1);

(statearr_60790[(33)] = inst_60440);

return statearr_60790;
})();
var statearr_60791_62811 = state_60580__$1;
(statearr_60791_62811[(2)] = null);

(statearr_60791_62811[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (125))){
var inst_60507 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_60508 = (new Error(inst_60507));
var inst_60509 = (function(){throw inst_60508})();
var state_60580__$1 = state_60580;
var statearr_60792_62812 = state_60580__$1;
(statearr_60792_62812[(2)] = inst_60509);

(statearr_60792_62812[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (17))){
var inst_60147 = (state_60580[(61)]);
var inst_60166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60147);
var state_60580__$1 = state_60580;
var statearr_60793_62813 = state_60580__$1;
(statearr_60793_62813[(2)] = inst_60166);

(statearr_60793_62813[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (3))){
var inst_60130 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60795_62814 = state_60580__$1;
(statearr_60795_62814[(2)] = inst_60130);


cljs.core.async.impl.ioc_helpers.process_exception(state_60580__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (12))){
var state_60580__$1 = state_60580;
var statearr_60796_62815 = state_60580__$1;
(statearr_60796_62815[(2)] = false);

(statearr_60796_62815[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (2))){
var inst_60578 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60580__$1,inst_60578);
} else {
if((state_val_60581 === (66))){
var inst_60316 = (state_60580[(9)]);
var inst_60319 = (inst_60316.cljs$core$IFn$_invoke$arity$0 ? inst_60316.cljs$core$IFn$_invoke$arity$0() : inst_60316.call(null));
var state_60580__$1 = state_60580;
var statearr_60797_62816 = state_60580__$1;
(statearr_60797_62816[(2)] = inst_60319);

(statearr_60797_62816[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (142))){
var inst_60504 = (state_60580[(8)]);
var inst_60548 = (state_60580[(2)]);
var inst_60549 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_60504) : read.call(null,inst_60504));
var state_60580__$1 = (function (){var statearr_60798 = state_60580;
(statearr_60798[(62)] = inst_60548);

return statearr_60798;
})();
var statearr_60799_62818 = state_60580__$1;
(statearr_60799_62818[(2)] = inst_60549);

(statearr_60799_62818[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (107))){
var inst_60447 = (state_60580[(18)]);
var inst_60466 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60447);
var state_60580__$1 = state_60580;
var statearr_60800_62820 = state_60580__$1;
(statearr_60800_62820[(2)] = inst_60466);

(statearr_60800_62820[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (23))){
var state_60580__$1 = state_60580;
var statearr_60801_62821 = state_60580__$1;
(statearr_60801_62821[(2)] = true);

(statearr_60801_62821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (47))){
var inst_60272 = (state_60580[(26)]);
var state_60580__$1 = state_60580;
var statearr_60809_62822 = state_60580__$1;
(statearr_60809_62822[(2)] = inst_60272);

(statearr_60809_62822[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (35))){
var state_60580__$1 = state_60580;
var statearr_60812_62823 = state_60580__$1;
(statearr_60812_62823[(2)] = false);

(statearr_60812_62823[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (127))){
var inst_60513 = (state_60580[(60)]);
var inst_60518 = inst_60513.cljs$lang$protocol_mask$partition0$;
var inst_60519 = (inst_60518 & (64));
var inst_60520 = inst_60513.cljs$core$ISeq$;
var inst_60521 = (cljs.core.PROTOCOL_SENTINEL === inst_60520);
var inst_60522 = ((inst_60519) || (inst_60521));
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60522)){
var statearr_60813_62824 = state_60580__$1;
(statearr_60813_62824[(1)] = (130));

} else {
var statearr_60814_62825 = state_60580__$1;
(statearr_60814_62825[(1)] = (131));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (82))){
var state_60580__$1 = state_60580;
var statearr_60815_62826 = state_60580__$1;
(statearr_60815_62826[(2)] = false);

(statearr_60815_62826[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (76))){
var inst_60215 = (state_60580[(44)]);
var inst_60246 = (state_60580[(20)]);
var inst_60225 = (state_60580[(51)]);
var inst_60351 = (state_60580[(2)]);
var inst_60352 = com.wsscode.pathom.parser.ast__GT_out_key(inst_60246);
var inst_60353 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_60215,inst_60352,inst_60351);
var inst_60215__$1 = inst_60353;
var inst_60216 = inst_60225;
var state_60580__$1 = (function (){var statearr_60816 = state_60580;
(statearr_60816[(50)] = inst_60216);

(statearr_60816[(44)] = inst_60215__$1);

return statearr_60816;
})();
var statearr_60817_62827 = state_60580__$1;
(statearr_60817_62827[(2)] = null);

(statearr_60817_62827[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (97))){
var inst_60412 = (state_60580[(41)]);
var state_60580__$1 = state_60580;
var statearr_60822_62829 = state_60580__$1;
(statearr_60822_62829[(2)] = inst_60412);

(statearr_60822_62829[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (19))){
var inst_60185 = (state_60580[(15)]);
var inst_60169 = (state_60580[(49)]);
var inst_60170 = (state_60580[(55)]);
var inst_60169__$1 = (state_60580[(2)]);
var inst_60170__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_60171 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_60169__$1);
var inst_60172 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self);
var inst_60182 = cljs.core.PersistentHashMap.EMPTY;
var inst_60183 = cljs.core.seq(inst_60170__$1);
var inst_60185__$1 = cljs.core.first(inst_60183);
var inst_60186 = cljs.core.next(inst_60183);
var inst_60191 = (inst_60185__$1 == null);
var inst_60192 = cljs.core.not(inst_60191);
var state_60580__$1 = (function (){var statearr_60823 = state_60580;
(statearr_60823[(54)] = inst_60182);

(statearr_60823[(15)] = inst_60185__$1);

(statearr_60823[(49)] = inst_60169__$1);

(statearr_60823[(63)] = inst_60171);

(statearr_60823[(64)] = inst_60186);

(statearr_60823[(55)] = inst_60170__$1);

(statearr_60823[(37)] = inst_60172);

return statearr_60823;
})();
if(inst_60192){
var statearr_60824_62832 = state_60580__$1;
(statearr_60824_62832[(1)] = (20));

} else {
var statearr_60825_62833 = state_60580__$1;
(statearr_60825_62833[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (57))){
var inst_60294 = (state_60580[(39)]);
var inst_60299 = inst_60294.cljs$lang$protocol_mask$partition0$;
var inst_60300 = (inst_60299 & (64));
var inst_60301 = inst_60294.cljs$core$ISeq$;
var inst_60302 = (cljs.core.PROTOCOL_SENTINEL === inst_60301);
var inst_60303 = ((inst_60300) || (inst_60302));
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60303)){
var statearr_60827_62834 = state_60580__$1;
(statearr_60827_62834[(1)] = (60));

} else {
var statearr_60831_62835 = state_60580__$1;
(statearr_60831_62835[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (68))){
var inst_60322 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60836_62839 = state_60580__$1;
(statearr_60836_62839[(2)] = inst_60322);

(statearr_60836_62839[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (11))){
var inst_60147 = (state_60580[(61)]);
var inst_60153 = inst_60147.cljs$lang$protocol_mask$partition0$;
var inst_60154 = (inst_60153 & (64));
var inst_60155 = inst_60147.cljs$core$ISeq$;
var inst_60156 = (cljs.core.PROTOCOL_SENTINEL === inst_60155);
var inst_60157 = ((inst_60154) || (inst_60156));
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60157)){
var statearr_60838_62840 = state_60580__$1;
(statearr_60838_62840[(1)] = (14));

} else {
var statearr_60839_62841 = state_60580__$1;
(statearr_60839_62841[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (115))){
var inst_60486 = (state_60580[(45)]);
var inst_60469 = (state_60580[(42)]);
var inst_60396 = (state_60580[(12)]);
var inst_60486__$1 = (state_60580[(2)]);
var inst_60488 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_60489 = [inst_60469,inst_60486__$1];
var inst_60490 = cljs.core.PersistentHashMap.fromArrays(inst_60488,inst_60489);
var inst_60491 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60396,inst_60490], 0));
var inst_60492 = (inst_60486__$1 == null);
var state_60580__$1 = (function (){var statearr_60840 = state_60580;
(statearr_60840[(45)] = inst_60486__$1);

(statearr_60840[(32)] = inst_60491);

return statearr_60840;
})();
if(cljs.core.truth_(inst_60492)){
var statearr_60841_62844 = state_60580__$1;
(statearr_60841_62844[(1)] = (116));

} else {
var statearr_60843_62845 = state_60580__$1;
(statearr_60843_62845[(1)] = (117));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (9))){
var inst_60145 = com.wsscode.pathom.parser.query__GT_ast(tx);
var state_60580__$1 = state_60580;
var statearr_60844_62846 = state_60580__$1;
(statearr_60844_62846[(2)] = inst_60145);

(statearr_60844_62846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (145))){
var inst_60553 = (state_60580[(29)]);
var state_60580__$1 = state_60580;
var statearr_60845_62847 = state_60580__$1;
(statearr_60845_62847[(2)] = inst_60553);

(statearr_60845_62847[(1)] = (146));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (5))){
var inst_60142 = (state_60580[(65)]);
var inst_60137 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_60138 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_60139 = cljs.core.PersistentHashMap.fromArrays(inst_60137,inst_60138);
var inst_60140 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_60139);
var inst_60142__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903).cljs$core$IFn$_invoke$arity$1(tx);
var state_60580__$1 = (function (){var statearr_60850 = state_60580;
(statearr_60850[(66)] = inst_60140);

(statearr_60850[(65)] = inst_60142__$1);

return statearr_60850;
})();
if(cljs.core.truth_(inst_60142__$1)){
var statearr_60851_62848 = state_60580__$1;
(statearr_60851_62848[(1)] = (8));

} else {
var statearr_60852_62849 = state_60580__$1;
(statearr_60852_62849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (112))){
var inst_60572 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60853_62850 = state_60580__$1;
(statearr_60853_62850[(2)] = inst_60572);

(statearr_60853_62850[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (83))){
var inst_60388 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60388)){
var statearr_60854_62851 = state_60580__$1;
(statearr_60854_62851[(1)] = (87));

} else {
var statearr_60855_62852 = state_60580__$1;
(statearr_60855_62852[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (138))){
var inst_60540 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60856_62853 = state_60580__$1;
(statearr_60856_62853[(2)] = inst_60540);

(statearr_60856_62853[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (14))){
var state_60580__$1 = state_60580;
var statearr_60857_62854 = state_60580__$1;
(statearr_60857_62854[(2)] = true);

(statearr_60857_62854[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (45))){
var inst_60267 = (state_60580[(30)]);
var inst_60246 = (state_60580[(20)]);
var inst_60172 = (state_60580[(37)]);
var inst_60267__$1 = (state_60580[(2)]);
var inst_60269 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_60270 = [inst_60246,inst_60267__$1];
var inst_60271 = cljs.core.PersistentHashMap.fromArrays(inst_60269,inst_60270);
var inst_60272 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60172,inst_60271], 0));
var inst_60273 = (inst_60267__$1 == null);
var state_60580__$1 = (function (){var statearr_60859 = state_60580;
(statearr_60859[(30)] = inst_60267__$1);

(statearr_60859[(26)] = inst_60272);

return statearr_60859;
})();
if(cljs.core.truth_(inst_60273)){
var statearr_60860_62855 = state_60580__$1;
(statearr_60860_62855[(1)] = (46));

} else {
var statearr_60861_62856 = state_60580__$1;
(statearr_60861_62856[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (53))){
var state_60580__$1 = state_60580;
if(cljs.core.truth_(mutate)){
var statearr_60862_62857 = state_60580__$1;
(statearr_60862_62857[(1)] = (54));

} else {
var statearr_60863_62859 = state_60580__$1;
(statearr_60863_62859[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (78))){
var inst_60366 = (state_60580[(52)]);
var state_60580__$1 = state_60580;
var statearr_60864_62860 = state_60580__$1;
(statearr_60864_62860[(2)] = inst_60366);

(statearr_60864_62860[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (132))){
var inst_60526 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60865_62863 = state_60580__$1;
(statearr_60865_62863[(2)] = inst_60526);

(statearr_60865_62863[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (26))){
var inst_60185 = (state_60580[(15)]);
var inst_60207 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60185);
var state_60580__$1 = state_60580;
var statearr_60866_62864 = state_60580__$1;
(statearr_60866_62864[(2)] = inst_60207);

(statearr_60866_62864[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (123))){
var state_60580__$1 = state_60580;
if(cljs.core.truth_(mutate)){
var statearr_60867_62865 = state_60580__$1;
(statearr_60867_62865[(1)] = (124));

} else {
var statearr_60868_62866 = state_60580__$1;
(statearr_60868_62866[(1)] = (125));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (140))){
var state_60580__$1 = state_60580;
var statearr_60869_62867 = state_60580__$1;
(statearr_60869_62867[(2)] = null);

(statearr_60869_62867[(1)] = (142));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (16))){
var inst_60161 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60873_62869 = state_60580__$1;
(statearr_60873_62869[(2)] = inst_60161);

(statearr_60873_62869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (133))){
var inst_60513 = (state_60580[(60)]);
var inst_60531 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60513);
var state_60580__$1 = state_60580;
var statearr_60878_62880 = state_60580__$1;
(statearr_60878_62880[(2)] = inst_60531);

(statearr_60878_62880[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (81))){
var inst_60371 = (state_60580[(25)]);
var inst_60377 = inst_60371.cljs$lang$protocol_mask$partition0$;
var inst_60378 = (inst_60377 & (64));
var inst_60379 = inst_60371.cljs$core$ISeq$;
var inst_60380 = (cljs.core.PROTOCOL_SENTINEL === inst_60379);
var inst_60381 = ((inst_60378) || (inst_60380));
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60381)){
var statearr_60881_62881 = state_60580__$1;
(statearr_60881_62881[(1)] = (84));

} else {
var statearr_60882_62882 = state_60580__$1;
(statearr_60882_62882[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (120))){
var inst_60497 = (state_60580[(28)]);
var state_60580__$1 = state_60580;
var statearr_60883_62884 = state_60580__$1;
(statearr_60883_62884[(2)] = inst_60497);

(statearr_60883_62884[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (79))){
var inst_60369 = com.wsscode.pathom.parser.query__GT_ast(tx);
var state_60580__$1 = state_60580;
var statearr_60884_62886 = state_60580__$1;
(statearr_60884_62886[(2)] = inst_60369);

(statearr_60884_62886[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (38))){
var inst_60224 = (state_60580[(35)]);
var state_60580__$1 = state_60580;
var statearr_60885_62887 = state_60580__$1;
(statearr_60885_62887[(2)] = inst_60224);

(statearr_60885_62887[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (126))){
var inst_60473 = (state_60580[(43)]);
var inst_60504 = (state_60580[(8)]);
var inst_60513 = (state_60580[(60)]);
var inst_60471 = (state_60580[(13)]);
var inst_60511 = (state_60580[(2)]);
var inst_60513__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_60504,inst_60471,inst_60473) : mutate.call(null,inst_60504,inst_60471,inst_60473));
var inst_60515 = (inst_60513__$1 == null);
var inst_60516 = cljs.core.not(inst_60515);
var state_60580__$1 = (function (){var statearr_60886 = state_60580;
(statearr_60886[(67)] = inst_60511);

(statearr_60886[(60)] = inst_60513__$1);

return statearr_60886;
})();
if(inst_60516){
var statearr_60887_62888 = state_60580__$1;
(statearr_60887_62888[(1)] = (127));

} else {
var statearr_60888_62889 = state_60580__$1;
(statearr_60888_62889[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (98))){
var inst_60410 = (state_60580[(47)]);
var inst_60394 = (state_60580[(46)]);
var inst_60434 = (state_60580[(2)]);
var inst_60435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60434,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_60436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60434,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_60437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60434,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_60438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60434,new cljs.core.Keyword(null,"params","params",710516235));
var inst_60439 = inst_60410;
var inst_60440 = inst_60394;
var state_60580__$1 = (function (){var statearr_60889 = state_60580;
(statearr_60889[(68)] = inst_60436);

(statearr_60889[(69)] = inst_60438);

(statearr_60889[(70)] = inst_60437);

(statearr_60889[(53)] = inst_60439);

(statearr_60889[(33)] = inst_60440);

(statearr_60889[(71)] = inst_60435);

return statearr_60889;
})();
var statearr_60890_62890 = state_60580__$1;
(statearr_60890_62890[(2)] = null);

(statearr_60890_62890[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (124))){
var state_60580__$1 = state_60580;
var statearr_60896_62891 = state_60580__$1;
(statearr_60896_62891[(2)] = null);

(statearr_60896_62891[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (87))){
var inst_60371 = (state_60580[(25)]);
var inst_60390 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60371);
var state_60580__$1 = state_60580;
var statearr_60897_62894 = state_60580__$1;
(statearr_60897_62894[(2)] = inst_60390);

(statearr_60897_62894[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (30))){
var inst_60140 = (state_60580[(66)]);
var inst_60359 = (state_60580[(2)]);
var inst_60360 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_60361 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_60362 = cljs.core.PersistentHashMap.fromArrays(inst_60360,inst_60361);
var inst_60363 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_60140,inst_60362);
var state_60580__$1 = (function (){var statearr_60905 = state_60580;
(statearr_60905[(72)] = inst_60363);

return statearr_60905;
})();
var statearr_60907_62909 = state_60580__$1;
(statearr_60907_62909[(2)] = inst_60359);

(statearr_60907_62909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (73))){
var state_60580__$1 = state_60580;
var statearr_60913_62913 = state_60580__$1;
(statearr_60913_62913[(2)] = null);

(statearr_60913_62913[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (96))){
var inst_60412 = (state_60580[(41)]);
var inst_60431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60412);
var state_60580__$1 = state_60580;
var statearr_60914_62915 = state_60580__$1;
(statearr_60914_62915[(2)] = inst_60431);

(statearr_60914_62915[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (10))){
var inst_60147 = (state_60580[(61)]);
var inst_60147__$1 = (state_60580[(2)]);
var inst_60149 = (inst_60147__$1 == null);
var inst_60150 = cljs.core.not(inst_60149);
var state_60580__$1 = (function (){var statearr_60915 = state_60580;
(statearr_60915[(61)] = inst_60147__$1);

return statearr_60915;
})();
if(inst_60150){
var statearr_60916_62922 = state_60580__$1;
(statearr_60916_62922[(1)] = (11));

} else {
var statearr_60917_62923 = state_60580__$1;
(statearr_60917_62923[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (18))){
var inst_60147 = (state_60580[(61)]);
var state_60580__$1 = state_60580;
var statearr_60918_62925 = state_60580__$1;
(statearr_60918_62925[(2)] = inst_60147);

(statearr_60918_62925[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (105))){
var state_60580__$1 = state_60580;
var statearr_60919_62926 = state_60580__$1;
(statearr_60919_62926[(2)] = false);

(statearr_60919_62926[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (52))){
var inst_60343 = (state_60580[(10)]);
var inst_60343__$1 = (state_60580[(2)]);
var inst_60344 = com.wsscode.common.async_cljs.chan_QMARK_(inst_60343__$1);
var state_60580__$1 = (function (){var statearr_60920 = state_60580;
(statearr_60920[(10)] = inst_60343__$1);

return statearr_60920;
})();
if(inst_60344){
var statearr_60921_62929 = state_60580__$1;
(statearr_60921_62929[(1)] = (74));

} else {
var statearr_60922_62930 = state_60580__$1;
(statearr_60922_62930[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (114))){
var inst_60470 = (state_60580[(11)]);
var state_60580__$1 = state_60580;
var statearr_60923_62931 = state_60580__$1;
(statearr_60923_62931[(2)] = inst_60470);

(statearr_60923_62931[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (147))){
var inst_60562 = (state_60580[(2)]);
var inst_60563 = com.wsscode.common.async_cljs.throw_err(inst_60562);
var state_60580__$1 = state_60580;
var statearr_60924_62932 = state_60580__$1;
(statearr_60924_62932[(2)] = inst_60563);

(statearr_60924_62932[(1)] = (146));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (67))){
var state_60580__$1 = state_60580;
var statearr_60925_62938 = state_60580__$1;
(statearr_60925_62938[(2)] = null);

(statearr_60925_62938[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (71))){
var inst_60329 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_60330 = (new Error(inst_60329));
var inst_60331 = (function(){throw inst_60330})();
var state_60580__$1 = state_60580;
var statearr_60927_62942 = state_60580__$1;
(statearr_60927_62942[(2)] = inst_60331);

(statearr_60927_62942[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (42))){
var inst_60357 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60928_62943 = state_60580__$1;
(statearr_60928_62943[(2)] = inst_60357);

(statearr_60928_62943[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (80))){
var inst_60371 = (state_60580[(25)]);
var inst_60371__$1 = (state_60580[(2)]);
var inst_60374 = (inst_60371__$1 == null);
var inst_60375 = cljs.core.not(inst_60374);
var state_60580__$1 = (function (){var statearr_60929 = state_60580;
(statearr_60929[(25)] = inst_60371__$1);

return statearr_60929;
})();
if(inst_60375){
var statearr_60930_62949 = state_60580__$1;
(statearr_60930_62949[(1)] = (81));

} else {
var statearr_60931_62950 = state_60580__$1;
(statearr_60931_62950[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (37))){
var inst_60224 = (state_60580[(35)]);
var inst_60243 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60224);
var state_60580__$1 = state_60580;
var statearr_60941_62986 = state_60580__$1;
(statearr_60941_62986[(2)] = inst_60243);

(statearr_60941_62986[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (63))){
var inst_60294 = (state_60580[(39)]);
var inst_60312 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60294);
var state_60580__$1 = state_60580;
var statearr_60942_62987 = state_60580__$1;
(statearr_60942_62987[(2)] = inst_60312);

(statearr_60942_62987[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (94))){
var state_60580__$1 = state_60580;
var statearr_60943_62990 = state_60580__$1;
(statearr_60943_62990[(2)] = false);

(statearr_60943_62990[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (8))){
var inst_60142 = (state_60580[(65)]);
var state_60580__$1 = state_60580;
var statearr_60949_62992 = state_60580__$1;
(statearr_60949_62992[(2)] = inst_60142);

(statearr_60949_62992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (49))){
var inst_60278 = (state_60580[(31)]);
var inst_60171 = (state_60580[(63)]);
var inst_60282 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_60278,new cljs.core.Keyword(null,"query","query",-1288509510),inst_60171);
var state_60580__$1 = state_60580;
var statearr_60953_62997 = state_60580__$1;
(statearr_60953_62997[(2)] = inst_60282);

(statearr_60953_62997[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (84))){
var state_60580__$1 = state_60580;
var statearr_60958_63001 = state_60580__$1;
(statearr_60958_63001[(2)] = true);

(statearr_60958_63001[(1)] = (86));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto__,map__60121,map__60121__$1,read,mutate))
;
return ((function (switch__52035__auto__,c__52131__auto__,map__60121,map__60121__$1,read,mutate){
return (function() {
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__52036__auto____0 = (function (){
var statearr_60960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60960[(0)] = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__52036__auto__);

(statearr_60960[(1)] = (1));

return statearr_60960;
});
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__52036__auto____1 = (function (state_60580){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_60580);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e60962){if((e60962 instanceof Object)){
var ex__52039__auto__ = e60962;
var statearr_60963_63008 = state_60580;
(statearr_60963_63008[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63012 = state_60580;
state_60580 = G__63012;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__52036__auto__ = function(state_60580){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__52036__auto____1.call(this,state_60580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__52036__auto____0;
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__52036__auto____1;
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,map__60121,map__60121__$1,read,mutate))
})();
var state__52133__auto__ = (function (){var statearr_60965 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_60965[(6)] = c__52131__auto__);

return statearr_60965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,map__60121,map__60121__$1,read,mutate))
);

return c__52131__auto__;
});
;})(map__60121,map__60121__$1,read,mutate))
});
com.wsscode.pathom.parser.watch_pending_key = (function com$wsscode$pathom$parser$watch_pending_key(p__60969,key){
var map__60970 = p__60969;
var map__60970__$1 = (((((!((map__60970 == null))))?(((((map__60970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60970):map__60970);
var env = map__60970__$1;
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60970__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(key_watchers,cljs.core.update,key,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ch], 0));

var c__52131__auto___63019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___63019,ch,map__60970,map__60970__$1,env,key_watchers){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___63019,ch,map__60970,map__60970__$1,env,key_watchers){
return (function (state_60995){
var state_val_60996 = (state_60995[(1)]);
if((state_val_60996 === (1))){
var inst_60972 = cljs.core.async.timeout((1));
var state_60995__$1 = state_60995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60995__$1,(2),inst_60972);
} else {
if((state_val_60996 === (2))){
var inst_60974 = (state_60995[(2)]);
var inst_60976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
var inst_60977 = cljs.core.deref(inst_60976);
var inst_60978 = cljs.core.contains_QMARK_(inst_60977,key);
var state_60995__$1 = (function (){var statearr_60997 = state_60995;
(statearr_60997[(7)] = inst_60974);

return statearr_60997;
})();
if(inst_60978){
var statearr_60998_63020 = state_60995__$1;
(statearr_60998_63020[(1)] = (3));

} else {
var statearr_60999_63021 = state_60995__$1;
(statearr_60999_63021[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60996 === (3))){
var inst_60980 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_60981 = [new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watcher-safeguard","com.wsscode.pathom.parser/flush-watcher-safeguard",-1594921178),key];
var inst_60982 = cljs.core.PersistentHashMap.fromArrays(inst_60980,inst_60981);
var inst_60983 = com.wsscode.pathom.trace.trace(env,inst_60982);
var inst_60984 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_60985 = [key];
var inst_60986 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_60985);
var inst_60987 = [inst_60986];
var inst_60988 = cljs.core.PersistentHashMap.fromArrays(inst_60984,inst_60987);
var inst_60989 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_60988);
var inst_60990 = cljs.core.async.close_BANG_(ch);
var state_60995__$1 = (function (){var statearr_61000 = state_60995;
(statearr_61000[(8)] = inst_60989);

(statearr_61000[(9)] = inst_60983);

return statearr_61000;
})();
var statearr_61001_63022 = state_60995__$1;
(statearr_61001_63022[(2)] = inst_60990);

(statearr_61001_63022[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60996 === (4))){
var state_60995__$1 = state_60995;
var statearr_61002_63023 = state_60995__$1;
(statearr_61002_63023[(2)] = null);

(statearr_61002_63023[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60996 === (5))){
var inst_60993 = (state_60995[(2)]);
var state_60995__$1 = state_60995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60995__$1,inst_60993);
} else {
return null;
}
}
}
}
}
});})(c__52131__auto___63019,ch,map__60970,map__60970__$1,env,key_watchers))
;
return ((function (switch__52035__auto__,c__52131__auto___63019,ch,map__60970,map__60970__$1,env,key_watchers){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__52036__auto____0 = (function (){
var statearr_61003 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61003[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__52036__auto__);

(statearr_61003[(1)] = (1));

return statearr_61003;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__52036__auto____1 = (function (state_60995){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_60995);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e61004){if((e61004 instanceof Object)){
var ex__52039__auto__ = e61004;
var statearr_61005_63027 = state_60995;
(statearr_61005_63027[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63029 = state_60995;
state_60995 = G__63029;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__52036__auto__ = function(state_60995){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__52036__auto____1.call(this,state_60995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__52036__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__52036__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___63019,ch,map__60970,map__60970__$1,env,key_watchers))
})();
var state__52133__auto__ = (function (){var statearr_61006 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_61006[(6)] = c__52131__auto___63019);

return statearr_61006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___63019,ch,map__60970,map__60970__$1,env,key_watchers))
);


return ch;
});
com.wsscode.pathom.parser.process_error = (function com$wsscode$pathom$parser$process_error(p__61012,e){
var map__61013 = p__61012;
var map__61013__$1 = (((((!((map__61013 == null))))?(((((map__61013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61013):map__61013);
var env = map__61013__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61013__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return e;
}
});
com.wsscode.pathom.parser.parallel_process_value = (function com$wsscode$pathom$parser$parallel_process_value(env,tx,ast,key_watchers,res,waiting,processing,read,mutate,key_iterations,tail){
var map__61019 = ast;
var map__61019__$1 = (((((!((map__61019 == null))))?(((((map__61019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61019):map__61019);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61019__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61019__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61019__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61019__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$1 = (function (){var G__61025 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),waiting,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404),key_watchers], null)], 0));
var G__61025__$1 = (((query == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61025,new cljs.core.Keyword(null,"query","query",-1288509510)):G__61025);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61025__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx);
} else {
return G__61025__$1;
}
})();
var value = (function (){var G__61026 = type;
var G__61026__$1 = (((G__61026 instanceof cljs.core.Keyword))?G__61026.fqn:null);
switch (G__61026__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__61027 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$1,key,params) : mutate.call(null,env__$1,key,params));
var map__61027__$1 = (((((!((map__61027 == null))))?(((((map__61027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61027):map__61027);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61027__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,map__61027,map__61027__$1,action,G__61026,G__61026__$1,map__61019,map__61019__$1,query,key,type,params,env__$1){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,map__61027,map__61027__$1,action,G__61026,G__61026__$1,map__61019,map__61019__$1,query,key,type,params,env__$1){
return (function (state_61054){
var state_val_61055 = (state_61054[(1)]);
if((state_val_61055 === (1))){
var state_61054__$1 = state_61054;
var statearr_61056_63038 = state_61054__$1;
(statearr_61056_63038[(2)] = null);

(statearr_61056_63038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61055 === (2))){
var inst_61052 = (state_61054[(2)]);
var state_61054__$1 = state_61054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61054__$1,inst_61052);
} else {
if((state_val_61055 === (3))){
var inst_61029 = (state_61054[(2)]);
var inst_61030 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973)];
var inst_61032 = com.wsscode.pathom.parser.process_error(env__$1,inst_61029);
var inst_61033 = [inst_61032];
var inst_61034 = cljs.core.PersistentHashMap.fromArrays(inst_61030,inst_61033);
var state_61054__$1 = state_61054;
var statearr_61064_63039 = state_61054__$1;
(statearr_61064_63039[(2)] = inst_61034);


cljs.core.async.impl.ioc_helpers.process_exception(state_61054__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61055 === (4))){
var inst_61042 = (state_61054[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61054,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_61038 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"mutation","mutation",-285823378)];
var inst_61039 = [new cljs.core.Keyword("com.wsscode.pathom.parser","call-mutation","com.wsscode.pathom.parser/call-mutation",-603334495),key];
var inst_61040 = cljs.core.PersistentHashMap.fromArrays(inst_61038,inst_61039);
var inst_61041 = com.wsscode.pathom.trace.trace(env__$1,inst_61040);
var inst_61042__$1 = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
var inst_61043 = com.wsscode.common.async_cljs.chan_QMARK_(inst_61042__$1);
var state_61054__$1 = (function (){var statearr_61065 = state_61054;
(statearr_61065[(7)] = inst_61042__$1);

(statearr_61065[(8)] = inst_61041);

return statearr_61065;
})();
if(inst_61043){
var statearr_61066_63043 = state_61054__$1;
(statearr_61066_63043[(1)] = (5));

} else {
var statearr_61067_63044 = state_61054__$1;
(statearr_61067_63044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61055 === (5))){
var inst_61042 = (state_61054[(7)]);
var state_61054__$1 = state_61054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61054__$1,(8),inst_61042);
} else {
if((state_val_61055 === (6))){
var inst_61042 = (state_61054[(7)]);
var state_61054__$1 = state_61054;
var statearr_61068_63045 = state_61054__$1;
(statearr_61068_63045[(2)] = inst_61042);

(statearr_61068_63045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61055 === (7))){
var inst_61050 = (state_61054[(2)]);
var state_61054__$1 = state_61054;
var statearr_61069_63046 = state_61054__$1;
(statearr_61069_63046[(2)] = inst_61050);


cljs.core.async.impl.ioc_helpers.process_exception(state_61054__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61055 === (8))){
var inst_61046 = (state_61054[(2)]);
var inst_61047 = com.wsscode.common.async_cljs.throw_err(inst_61046);
var state_61054__$1 = state_61054;
var statearr_61070_63047 = state_61054__$1;
(statearr_61070_63047[(2)] = inst_61047);

(statearr_61070_63047[(1)] = (7));


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
});})(c__52131__auto__,map__61027,map__61027__$1,action,G__61026,G__61026__$1,map__61019,map__61019__$1,query,key,type,params,env__$1))
;
return ((function (switch__52035__auto__,c__52131__auto__,map__61027,map__61027__$1,action,G__61026,G__61026__$1,map__61019,map__61019__$1,query,key,type,params,env__$1){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto____0 = (function (){
var statearr_61071 = [null,null,null,null,null,null,null,null,null];
(statearr_61071[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto__);

(statearr_61071[(1)] = (1));

return statearr_61071;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto____1 = (function (state_61054){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_61054);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e61072){if((e61072 instanceof Object)){
var ex__52039__auto__ = e61072;
var statearr_61073_63051 = state_61054;
(statearr_61073_63051[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63052 = state_61054;
state_61054 = G__63052;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto__ = function(state_61054){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto____1.call(this,state_61054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,map__61027,map__61027__$1,action,G__61026,G__61026__$1,map__61019,map__61019__$1,query,key,type,params,env__$1))
})();
var state__52133__auto__ = (function (){var statearr_61074 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_61074[(6)] = c__52131__auto__);

return statearr_61074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,map__61027,map__61027__$1,action,G__61026,G__61026__$1,map__61019,map__61019__$1,query,key,type,params,env__$1))
);

return c__52131__auto__;
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__23022__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
var res__23023__auto__ = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__23022__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return res__23023__auto__;
} else {
return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
}

break;
default:
return null;

}
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(value)){
var provides = cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
var stream = (function (){var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,provides,map__61019,map__61019__$1,query,key,type,params,env__$1,value){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,provides,map__61019,map__61019__$1,query,key,type,params,env__$1,value){
return (function (state_61086){
var state_val_61087 = (state_61086[(1)]);
if((state_val_61087 === (1))){
var inst_61076 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_61077 = [key,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)];
var state_61086__$1 = (function (){var statearr_61089 = state_61086;
(statearr_61089[(7)] = inst_61077);

(statearr_61089[(8)] = inst_61076);

return statearr_61089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61086__$1,(2),value);
} else {
if((state_val_61087 === (2))){
var inst_61077 = (state_61086[(7)]);
var inst_61076 = (state_61086[(8)]);
var inst_61079 = (state_61086[(2)]);
var inst_61080 = com.wsscode.pathom.parser.ast__GT_out_key(ast);
var inst_61081 = [inst_61079,inst_61080];
var inst_61082 = cljs.core.PersistentHashMap.fromArrays(inst_61077,inst_61081);
var inst_61083 = [provides,true,inst_61082];
var inst_61084 = cljs.core.PersistentHashMap.fromArrays(inst_61076,inst_61083);
var state_61086__$1 = state_61086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61086__$1,inst_61084);
} else {
return null;
}
}
});})(c__52131__auto__,provides,map__61019,map__61019__$1,query,key,type,params,env__$1,value))
;
return ((function (switch__52035__auto__,c__52131__auto__,provides,map__61019,map__61019__$1,query,key,type,params,env__$1,value){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto____0 = (function (){
var statearr_61095 = [null,null,null,null,null,null,null,null,null];
(statearr_61095[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto__);

(statearr_61095[(1)] = (1));

return statearr_61095;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto____1 = (function (state_61086){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_61086);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e61096){if((e61096 instanceof Object)){
var ex__52039__auto__ = e61096;
var statearr_61100_63059 = state_61086;
(statearr_61100_63059[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63060 = state_61086;
state_61086 = G__63060;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto__ = function(state_61086){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto____1.call(this,state_61086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,provides,map__61019,map__61019__$1,query,key,type,params,env__$1,value))
})();
var state__52133__auto__ = (function (){var statearr_61103 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_61103[(6)] = c__52131__auto__);

return statearr_61103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,provides,map__61019,map__61019__$1,query,key,type,params,env__$1,value))
);

return c__52131__auto__;
})();
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","async-return","com.wsscode.pathom.parser/async-return",-1319623828),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,stream),key_iterations,tail], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value))){
var provides = new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value);
var stream = new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292).cljs$core$IFn$_invoke$arity$1(value);
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provided-return","com.wsscode.pathom.parser/provided-return",9084378),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,stream),key_iterations,tail], null);
} else {
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","value-return","com.wsscode.pathom.parser/value-return",1158220150),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,com.wsscode.pathom.parser.ast__GT_out_key(ast),value),waiting,processing,key_iterations,tail], null);

}
}
});
com.wsscode.pathom.parser.parallel_flush_watchers = (function com$wsscode$pathom$parser$parallel_flush_watchers(env,key_watchers,provides,error){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__23022__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));
var res__23023__auto__ = (function (){var seq__61104 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__61105 = null;
var count__61106 = (0);
var i__61107 = (0);
while(true){
if((i__61107 < count__61106)){
var vec__61123 = chunk__61105.cljs$core$IIndexed$_nth$arity$2(null,i__61107);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61123,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61123,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__61129_63062 = cljs.core.seq(watchers);
var chunk__61130_63063 = null;
var count__61131_63064 = (0);
var i__61132_63065 = (0);
while(true){
if((i__61132_63065 < count__61131_63064)){
var out_63066 = chunk__61130_63063.cljs$core$IIndexed$_nth$arity$2(null,i__61132_63065);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_63066,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_63066);


var G__63067 = seq__61129_63062;
var G__63068 = chunk__61130_63063;
var G__63069 = count__61131_63064;
var G__63070 = (i__61132_63065 + (1));
seq__61129_63062 = G__63067;
chunk__61130_63063 = G__63068;
count__61131_63064 = G__63069;
i__61132_63065 = G__63070;
continue;
} else {
var temp__5735__auto___63071 = cljs.core.seq(seq__61129_63062);
if(temp__5735__auto___63071){
var seq__61129_63072__$1 = temp__5735__auto___63071;
if(cljs.core.chunked_seq_QMARK_(seq__61129_63072__$1)){
var c__4550__auto___63074 = cljs.core.chunk_first(seq__61129_63072__$1);
var G__63075 = cljs.core.chunk_rest(seq__61129_63072__$1);
var G__63076 = c__4550__auto___63074;
var G__63077 = cljs.core.count(c__4550__auto___63074);
var G__63078 = (0);
seq__61129_63062 = G__63075;
chunk__61130_63063 = G__63076;
count__61131_63064 = G__63077;
i__61132_63065 = G__63078;
continue;
} else {
var out_63079 = cljs.core.first(seq__61129_63072__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_63079,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_63079);


var G__63080 = cljs.core.next(seq__61129_63072__$1);
var G__63081 = null;
var G__63082 = (0);
var G__63083 = (0);
seq__61129_63062 = G__63080;
chunk__61130_63063 = G__63081;
count__61131_63064 = G__63082;
i__61132_63065 = G__63083;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__63084 = seq__61104;
var G__63085 = chunk__61105;
var G__63086 = count__61106;
var G__63087 = (i__61107 + (1));
seq__61104 = G__63084;
chunk__61105 = G__63085;
count__61106 = G__63086;
i__61107 = G__63087;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61104);
if(temp__5735__auto__){
var seq__61104__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61104__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61104__$1);
var G__63088 = cljs.core.chunk_rest(seq__61104__$1);
var G__63089 = c__4550__auto__;
var G__63090 = cljs.core.count(c__4550__auto__);
var G__63091 = (0);
seq__61104 = G__63088;
chunk__61105 = G__63089;
count__61106 = G__63090;
i__61107 = G__63091;
continue;
} else {
var vec__61139 = cljs.core.first(seq__61104__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61139,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61139,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__61142_63092 = cljs.core.seq(watchers);
var chunk__61143_63093 = null;
var count__61144_63094 = (0);
var i__61145_63095 = (0);
while(true){
if((i__61145_63095 < count__61144_63094)){
var out_63099 = chunk__61143_63093.cljs$core$IIndexed$_nth$arity$2(null,i__61145_63095);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_63099,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_63099);


var G__63100 = seq__61142_63092;
var G__63101 = chunk__61143_63093;
var G__63102 = count__61144_63094;
var G__63103 = (i__61145_63095 + (1));
seq__61142_63092 = G__63100;
chunk__61143_63093 = G__63101;
count__61144_63094 = G__63102;
i__61145_63095 = G__63103;
continue;
} else {
var temp__5735__auto___63104__$1 = cljs.core.seq(seq__61142_63092);
if(temp__5735__auto___63104__$1){
var seq__61142_63105__$1 = temp__5735__auto___63104__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61142_63105__$1)){
var c__4550__auto___63106 = cljs.core.chunk_first(seq__61142_63105__$1);
var G__63107 = cljs.core.chunk_rest(seq__61142_63105__$1);
var G__63108 = c__4550__auto___63106;
var G__63109 = cljs.core.count(c__4550__auto___63106);
var G__63110 = (0);
seq__61142_63092 = G__63107;
chunk__61143_63093 = G__63108;
count__61144_63094 = G__63109;
i__61145_63095 = G__63110;
continue;
} else {
var out_63115 = cljs.core.first(seq__61142_63105__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_63115,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_63115);


var G__63116 = cljs.core.next(seq__61142_63105__$1);
var G__63117 = null;
var G__63118 = (0);
var G__63119 = (0);
seq__61142_63092 = G__63116;
chunk__61143_63093 = G__63117;
count__61144_63094 = G__63118;
i__61145_63095 = G__63119;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__63120 = cljs.core.next(seq__61104__$1);
var G__63121 = null;
var G__63122 = (0);
var G__63123 = (0);
seq__61104 = G__63120;
chunk__61105 = G__63121;
count__61106 = G__63122;
i__61107 = G__63123;
continue;
}
} else {
return null;
}
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__23022__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));

return res__23023__auto__;
} else {
var seq__61152 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__61153 = null;
var count__61154 = (0);
var i__61155 = (0);
while(true){
if((i__61155 < count__61154)){
var vec__61185 = chunk__61153.cljs$core$IIndexed$_nth$arity$2(null,i__61155);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61185,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61185,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__61188_63125 = cljs.core.seq(watchers);
var chunk__61189_63126 = null;
var count__61190_63127 = (0);
var i__61191_63128 = (0);
while(true){
if((i__61191_63128 < count__61190_63127)){
var out_63129 = chunk__61189_63126.cljs$core$IIndexed$_nth$arity$2(null,i__61191_63128);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_63129,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_63129);


var G__63130 = seq__61188_63125;
var G__63131 = chunk__61189_63126;
var G__63132 = count__61190_63127;
var G__63133 = (i__61191_63128 + (1));
seq__61188_63125 = G__63130;
chunk__61189_63126 = G__63131;
count__61190_63127 = G__63132;
i__61191_63128 = G__63133;
continue;
} else {
var temp__5735__auto___63134 = cljs.core.seq(seq__61188_63125);
if(temp__5735__auto___63134){
var seq__61188_63135__$1 = temp__5735__auto___63134;
if(cljs.core.chunked_seq_QMARK_(seq__61188_63135__$1)){
var c__4550__auto___63136 = cljs.core.chunk_first(seq__61188_63135__$1);
var G__63137 = cljs.core.chunk_rest(seq__61188_63135__$1);
var G__63138 = c__4550__auto___63136;
var G__63139 = cljs.core.count(c__4550__auto___63136);
var G__63140 = (0);
seq__61188_63125 = G__63137;
chunk__61189_63126 = G__63138;
count__61190_63127 = G__63139;
i__61191_63128 = G__63140;
continue;
} else {
var out_63141 = cljs.core.first(seq__61188_63135__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_63141,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_63141);


var G__63143 = cljs.core.next(seq__61188_63135__$1);
var G__63144 = null;
var G__63145 = (0);
var G__63146 = (0);
seq__61188_63125 = G__63143;
chunk__61189_63126 = G__63144;
count__61190_63127 = G__63145;
i__61191_63128 = G__63146;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__63147 = seq__61152;
var G__63148 = chunk__61153;
var G__63149 = count__61154;
var G__63150 = (i__61155 + (1));
seq__61152 = G__63147;
chunk__61153 = G__63148;
count__61154 = G__63149;
i__61155 = G__63150;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61152);
if(temp__5735__auto__){
var seq__61152__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61152__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61152__$1);
var G__63151 = cljs.core.chunk_rest(seq__61152__$1);
var G__63152 = c__4550__auto__;
var G__63153 = cljs.core.count(c__4550__auto__);
var G__63154 = (0);
seq__61152 = G__63151;
chunk__61153 = G__63152;
count__61154 = G__63153;
i__61155 = G__63154;
continue;
} else {
var vec__61201 = cljs.core.first(seq__61152__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61201,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61201,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__61205_63156 = cljs.core.seq(watchers);
var chunk__61206_63157 = null;
var count__61207_63158 = (0);
var i__61208_63159 = (0);
while(true){
if((i__61208_63159 < count__61207_63158)){
var out_63164 = chunk__61206_63157.cljs$core$IIndexed$_nth$arity$2(null,i__61208_63159);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_63164,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_63164);


var G__63168 = seq__61205_63156;
var G__63169 = chunk__61206_63157;
var G__63170 = count__61207_63158;
var G__63171 = (i__61208_63159 + (1));
seq__61205_63156 = G__63168;
chunk__61206_63157 = G__63169;
count__61207_63158 = G__63170;
i__61208_63159 = G__63171;
continue;
} else {
var temp__5735__auto___63172__$1 = cljs.core.seq(seq__61205_63156);
if(temp__5735__auto___63172__$1){
var seq__61205_63173__$1 = temp__5735__auto___63172__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61205_63173__$1)){
var c__4550__auto___63178 = cljs.core.chunk_first(seq__61205_63173__$1);
var G__63179 = cljs.core.chunk_rest(seq__61205_63173__$1);
var G__63180 = c__4550__auto___63178;
var G__63181 = cljs.core.count(c__4550__auto___63178);
var G__63182 = (0);
seq__61205_63156 = G__63179;
chunk__61206_63157 = G__63180;
count__61207_63158 = G__63181;
i__61208_63159 = G__63182;
continue;
} else {
var out_63205 = cljs.core.first(seq__61205_63173__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_63205,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_63205);


var G__63212 = cljs.core.next(seq__61205_63173__$1);
var G__63213 = null;
var G__63214 = (0);
var G__63215 = (0);
seq__61205_63156 = G__63212;
chunk__61206_63157 = G__63213;
count__61207_63158 = G__63214;
i__61208_63159 = G__63215;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__63224 = cljs.core.next(seq__61152__$1);
var G__63225 = null;
var G__63226 = (0);
var G__63227 = (0);
seq__61152 = G__63224;
chunk__61153 = G__63225;
count__61154 = G__63226;
i__61155 = G__63227;
continue;
}
} else {
return null;
}
}
break;
}
}
});
com.wsscode.pathom.parser.default_step_fn = (function com$wsscode$pathom$parser$default_step_fn(amount,min){
return (function (env,x){
var G__61214 = (x - amount);
var G__61215 = min;
return Math.max(G__61214,G__61215);
});
});
com.wsscode.pathom.parser.call_parallel_parser = (function com$wsscode$pathom$parser$call_parallel_parser(p__61224,p__61225,tx){
var map__61226 = p__61224;
var map__61226__$1 = (((((!((map__61226 == null))))?(((((map__61226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61226):map__61226);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61226__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61226__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
var map__61227 = p__61225;
var map__61227__$1 = (((((!((map__61227 == null))))?(((((map__61227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61227):map__61227);
var env = map__61227__$1;
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61227__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61227__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var max_key_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61227__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),(10));
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61227__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165));
var key_process_timeout_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61227__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout-step","com.wsscode.pathom.parser/key-process-timeout-step",202902239));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61227__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61227__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (state_61862){
var state_val_61863 = (state_61862[(1)]);
if((state_val_61863 === (121))){
var inst_61659 = (state_61862[(7)]);
var inst_61657 = (state_61862[(8)]);
var inst_61619 = (state_61862[(9)]);
var inst_61285 = (state_61862[(10)]);
var inst_61668 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_61669 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_61657,max_key_iterations];
var inst_61670 = cljs.core.PersistentHashMap.fromArrays(inst_61668,inst_61669);
var inst_61671 = com.wsscode.pathom.trace.trace(inst_61285,inst_61670);
var inst_61673 = cljs.core.contains_QMARK_(inst_61619,inst_61659);
var inst_61674 = (!(inst_61673));
var state_61862__$1 = (function (){var statearr_61872 = state_61862;
(statearr_61872[(11)] = inst_61671);

return statearr_61872;
})();
if(inst_61674){
var statearr_61873_63272 = state_61862__$1;
(statearr_61873_63272[(1)] = (124));

} else {
var statearr_61874_63273 = state_61862__$1;
(statearr_61874_63273[(1)] = (125));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (65))){
var inst_61369 = (state_61862[(12)]);
var inst_61336 = (state_61862[(13)]);
var inst_61425 = cljs.core.contains_QMARK_(inst_61336,inst_61369);
var state_61862__$1 = state_61862;
if(inst_61425){
var statearr_61875_63274 = state_61862__$1;
(statearr_61875_63274[(1)] = (67));

} else {
var statearr_61876_63275 = state_61862__$1;
(statearr_61876_63275[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (70))){
var inst_61335 = (state_61862[(14)]);
var inst_61347 = (state_61862[(15)]);
var inst_61337 = (state_61862[(16)]);
var inst_61368 = (state_61862[(17)]);
var inst_61276 = (state_61862[(18)]);
var inst_61336 = (state_61862[(13)]);
var inst_61338 = (state_61862[(19)]);
var inst_61285 = (state_61862[(10)]);
var inst_61437 = com.wsscode.pathom.parser.parallel_process_value(inst_61285,tx,inst_61368,inst_61276,inst_61335,inst_61336,inst_61337,read,mutate,inst_61338,inst_61347);
var inst_61438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61437,(0),null);
var inst_61439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61437,(1),null);
var inst_61440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61437,(2),null);
var inst_61441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61437,(3),null);
var inst_61442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61437,(4),null);
var inst_61335__$1 = inst_61438;
var inst_61336__$1 = inst_61439;
var inst_61337__$1 = inst_61440;
var inst_61338__$1 = inst_61441;
var inst_61339 = inst_61442;
var state_61862__$1 = (function (){var statearr_61877 = state_61862;
(statearr_61877[(14)] = inst_61335__$1);

(statearr_61877[(16)] = inst_61337__$1);

(statearr_61877[(20)] = inst_61339);

(statearr_61877[(13)] = inst_61336__$1);

(statearr_61877[(19)] = inst_61338__$1);

return statearr_61877;
})();
var statearr_61878_63290 = state_61862__$1;
(statearr_61878_63290[(2)] = null);

(statearr_61878_63290[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (62))){
var inst_61409 = (state_61862[(21)]);
var state_61862__$1 = state_61862;
var statearr_61879_63291 = state_61862__$1;
(statearr_61879_63291[(2)] = inst_61409);

(statearr_61879_63291[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (74))){
var inst_61335 = (state_61862[(14)]);
var state_61862__$1 = state_61862;
var statearr_61880_63292 = state_61862__$1;
(statearr_61880_63292[(2)] = inst_61335);

(statearr_61880_63292[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (110))){
var state_61862__$1 = state_61862;
var statearr_61881_63293 = state_61862__$1;
(statearr_61881_63293[(2)] = false);

(statearr_61881_63293[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (130))){
var inst_61657 = (state_61862[(8)]);
var inst_61620 = (state_61862[(22)]);
var inst_61692 = cljs.core.contains_QMARK_(inst_61620,inst_61657);
var state_61862__$1 = state_61862;
var statearr_61882_63294 = state_61862__$1;
(statearr_61882_63294[(2)] = inst_61692);

(statearr_61882_63294[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (128))){
var inst_61690 = (state_61862[(23)]);
var inst_61285 = (state_61862[(10)]);
var inst_61690__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_61285);
var state_61862__$1 = (function (){var statearr_61883 = state_61862;
(statearr_61883[(23)] = inst_61690__$1);

return statearr_61883;
})();
if(cljs.core.truth_(inst_61690__$1)){
var statearr_61884_63295 = state_61862__$1;
(statearr_61884_63295[(1)] = (130));

} else {
var statearr_61885_63296 = state_61862__$1;
(statearr_61885_63296[(1)] = (131));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (153))){
var inst_61745 = (state_61862[(24)]);
var state_61862__$1 = state_61862;
var statearr_61886_63297 = state_61862__$1;
(statearr_61886_63297[(2)] = inst_61745);

(statearr_61886_63297[(1)] = (154));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (7))){
var inst_61239 = (state_61862[(2)]);
var state_61862__$1 = (function (){var statearr_61887 = state_61862;
(statearr_61887[(25)] = inst_61239);

return statearr_61887;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_61888_63298 = state_61862__$1;
(statearr_61888_63298[(1)] = (8));

} else {
var statearr_61889_63300 = state_61862__$1;
(statearr_61889_63300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (59))){
var inst_61409 = (state_61862[(21)]);
var inst_61285 = (state_61862[(10)]);
var inst_61409__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_61285);
var state_61862__$1 = (function (){var statearr_61890 = state_61862;
(statearr_61890[(21)] = inst_61409__$1);

return statearr_61890;
})();
if(cljs.core.truth_(inst_61409__$1)){
var statearr_61891_63301 = state_61862__$1;
(statearr_61891_63301[(1)] = (61));

} else {
var statearr_61892_63302 = state_61862__$1;
(statearr_61892_63302[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (86))){
var inst_61497 = (state_61862[(26)]);
var inst_61500 = (state_61862[(27)]);
var inst_61491 = (state_61862[(28)]);
var inst_61490 = (state_61862[(29)]);
var inst_61504 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683)];
var inst_61505 = cljs.core.boolean$(inst_61491);
var inst_61506 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-pending","com.wsscode.pathom.parser/process-pending",-536495871),inst_61490,inst_61500,inst_61505];
var inst_61507 = cljs.core.PersistentHashMap.fromArrays(inst_61504,inst_61506);
var state_61862__$1 = (function (){var statearr_61894 = state_61862;
(statearr_61894[(30)] = inst_61507);

return statearr_61894;
})();
if(cljs.core.truth_(inst_61497)){
var statearr_61895_63303 = state_61862__$1;
(statearr_61895_63303[(1)] = (89));

} else {
var statearr_61896_63304 = state_61862__$1;
(statearr_61896_63304[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (154))){
var inst_61744 = (state_61862[(31)]);
var inst_61781 = (state_61862[(32)]);
var inst_61620 = (state_61862[(22)]);
var inst_61767 = (state_61862[(33)]);
var inst_61769 = (state_61862[(34)]);
var inst_61767__$1 = (state_61862[(2)]);
var inst_61768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61767__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673));
var inst_61769__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61767__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507));
var inst_61770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61767__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683));
var inst_61771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61767__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var inst_61772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61744,(1),null);
var inst_61781__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278).cljs$core$IFn$_invoke$arity$1(inst_61767__$1);
var inst_61782 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_61769__$1,inst_61781__$1);
var inst_61783 = new cljs.core.Keyword("pathom","as","pathom/as",-2134138450).cljs$core$IFn$_invoke$arity$1(inst_61768);
var inst_61784 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_61768,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450));
var inst_61785 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_61620,inst_61781__$1);
var state_61862__$1 = (function (){var statearr_61897 = state_61862;
(statearr_61897[(35)] = inst_61783);

(statearr_61897[(36)] = inst_61770);

(statearr_61897[(37)] = inst_61782);

(statearr_61897[(38)] = inst_61784);

(statearr_61897[(39)] = inst_61771);

(statearr_61897[(40)] = inst_61772);

(statearr_61897[(41)] = inst_61785);

(statearr_61897[(32)] = inst_61781__$1);

(statearr_61897[(33)] = inst_61767__$1);

(statearr_61897[(34)] = inst_61769__$1);

return statearr_61897;
})();
if(cljs.core.truth_(inst_61767__$1)){
var statearr_61900_63305 = state_61862__$1;
(statearr_61900_63305[(1)] = (155));

} else {
var statearr_61904_63306 = state_61862__$1;
(statearr_61904_63306[(1)] = (156));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (20))){
var state_61862__$1 = state_61862;
var statearr_61912_63307 = state_61862__$1;
(statearr_61912_63307[(2)] = key_watchers);

(statearr_61912_63307[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (72))){
var inst_61446 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_61913_63308 = state_61862__$1;
(statearr_61913_63308[(2)] = inst_61446);

(statearr_61913_63308[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (58))){
var inst_61335 = (state_61862[(14)]);
var inst_61347 = (state_61862[(15)]);
var inst_61337 = (state_61862[(16)]);
var inst_61369 = (state_61862[(12)]);
var inst_61336 = (state_61862[(13)]);
var inst_61338 = (state_61862[(19)]);
var inst_61285 = (state_61862[(10)]);
var inst_61396 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_61397 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_61369];
var inst_61398 = cljs.core.PersistentHashMap.fromArrays(inst_61396,inst_61397);
var inst_61399 = com.wsscode.pathom.trace.trace(inst_61285,inst_61398);
var tmp61908 = inst_61335;
var tmp61909 = inst_61337;
var tmp61910 = inst_61336;
var tmp61911 = inst_61338;
var inst_61335__$1 = tmp61908;
var inst_61336__$1 = tmp61910;
var inst_61337__$1 = tmp61909;
var inst_61338__$1 = tmp61911;
var inst_61339 = inst_61347;
var state_61862__$1 = (function (){var statearr_61914 = state_61862;
(statearr_61914[(14)] = inst_61335__$1);

(statearr_61914[(42)] = inst_61399);

(statearr_61914[(16)] = inst_61337__$1);

(statearr_61914[(20)] = inst_61339);

(statearr_61914[(13)] = inst_61336__$1);

(statearr_61914[(19)] = inst_61338__$1);

return statearr_61914;
})();
var statearr_61915_63312 = state_61862__$1;
(statearr_61915_63312[(2)] = null);

(statearr_61915_63312[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (60))){
var inst_61452 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_61922_63313 = state_61862__$1;
(statearr_61922_63313[(2)] = inst_61452);

(statearr_61922_63313[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (27))){
var inst_61304 = cljs.core.PersistentHashSet.EMPTY;
var state_61862__$1 = state_61862;
var statearr_61923_63314 = state_61862__$1;
(statearr_61923_63314[(2)] = inst_61304);

(statearr_61923_63314[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (1))){
var state_61862__$1 = state_61862;
var statearr_61924_63315 = state_61862__$1;
(statearr_61924_63315[(2)] = null);

(statearr_61924_63315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (69))){
var inst_61448 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_61925_63316 = state_61862__$1;
(statearr_61925_63316[(2)] = inst_61448);

(statearr_61925_63316[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (101))){
var state_61862__$1 = state_61862;
var statearr_61926_63317 = state_61862__$1;
(statearr_61926_63317[(2)] = true);

(statearr_61926_63317[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (24))){
var inst_61582 = cljs.core.PersistentHashMap.EMPTY;
var state_61862__$1 = (function (){var statearr_61927 = state_61862;
(statearr_61927[(43)] = inst_61582);

return statearr_61927;
})();
if(cljs.core.truth_(waiting)){
var statearr_61928_63318 = state_61862__$1;
(statearr_61928_63318[(1)] = (95));

} else {
var statearr_61929_63319 = state_61862__$1;
(statearr_61929_63319[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (102))){
var state_61862__$1 = state_61862;
var statearr_61930_63323 = state_61862__$1;
(statearr_61930_63323[(2)] = false);

(statearr_61930_63323[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (135))){
var inst_61730 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_61932_63324 = state_61862__$1;
(statearr_61932_63324[(2)] = inst_61730);

(statearr_61932_63324[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (55))){
var inst_61335 = (state_61862[(14)]);
var inst_61371 = (state_61862[(44)]);
var inst_61388 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_61335,inst_61371,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_61862__$1 = state_61862;
var statearr_61933_63325 = state_61862__$1;
(statearr_61933_63325[(2)] = inst_61388);

(statearr_61933_63325[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (85))){
var inst_61497 = (state_61862[(26)]);
var inst_61490 = (state_61862[(29)]);
var inst_61336 = (state_61862[(13)]);
var inst_61487 = (state_61862[(45)]);
var inst_61464 = (state_61862[(46)]);
var inst_61487__$1 = (state_61862[(2)]);
var inst_61488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61487__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673));
var inst_61490__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61487__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507));
var inst_61491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61487__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683));
var inst_61492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61487__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var inst_61496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61464,(1),null);
var inst_61497__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278).cljs$core$IFn$_invoke$arity$1(inst_61487__$1);
var inst_61498 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_61490__$1,inst_61497__$1);
var inst_61499 = new cljs.core.Keyword("pathom","as","pathom/as",-2134138450).cljs$core$IFn$_invoke$arity$1(inst_61488);
var inst_61500 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_61488,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450));
var inst_61501 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_61336,inst_61497__$1);
var state_61862__$1 = (function (){var statearr_61941 = state_61862;
(statearr_61941[(26)] = inst_61497__$1);

(statearr_61941[(47)] = inst_61501);

(statearr_61941[(27)] = inst_61500);

(statearr_61941[(48)] = inst_61499);

(statearr_61941[(49)] = inst_61498);

(statearr_61941[(28)] = inst_61491);

(statearr_61941[(29)] = inst_61490__$1);

(statearr_61941[(50)] = inst_61492);

(statearr_61941[(51)] = inst_61496);

(statearr_61941[(45)] = inst_61487__$1);

return statearr_61941;
})();
if(cljs.core.truth_(inst_61487__$1)){
var statearr_61942_63326 = state_61862__$1;
(statearr_61942_63326[(1)] = (86));

} else {
var statearr_61943_63327 = state_61862__$1;
(statearr_61943_63327[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (39))){
var inst_61291 = (state_61862[(52)]);
var inst_61244 = (state_61862[(53)]);
var inst_61285 = (state_61862[(10)]);
var inst_61567 = (state_61862[(2)]);
var inst_61568 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_61569 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_61244];
var inst_61570 = cljs.core.PersistentHashMap.fromArrays(inst_61568,inst_61569);
var inst_61571 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(inst_61285,inst_61291,inst_61570);
var state_61862__$1 = (function (){var statearr_61947 = state_61862;
(statearr_61947[(54)] = inst_61571);

return statearr_61947;
})();
var statearr_61948_63328 = state_61862__$1;
(statearr_61948_63328[(2)] = inst_61567);

(statearr_61948_63328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (88))){
var inst_61560 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_61956_63329 = state_61862__$1;
(statearr_61956_63329[(2)] = inst_61560);

(statearr_61956_63329[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (46))){
var inst_61346 = (state_61862[(55)]);
var inst_61365 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61346);
var state_61862__$1 = state_61862;
var statearr_61958_63330 = state_61862__$1;
(statearr_61958_63330[(2)] = inst_61365);

(statearr_61958_63330[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (149))){
var state_61862__$1 = state_61862;
var statearr_61959_63331 = state_61862__$1;
(statearr_61959_63331[(2)] = true);

(statearr_61959_63331[(1)] = (151));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (157))){
var inst_61849 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_61960_63332 = state_61862__$1;
(statearr_61960_63332[(2)] = inst_61849);

(statearr_61960_63332[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61862,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_61862__$1 = state_61862;
if(cljs.core.truth_(key_process_timeout_step)){
var statearr_61961_63333 = state_61862__$1;
(statearr_61961_63333[(1)] = (5));

} else {
var statearr_61962_63334 = state_61862__$1;
(statearr_61962_63334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (77))){
var inst_61465 = (state_61862[(56)]);
var inst_61471 = inst_61465.cljs$lang$protocol_mask$partition0$;
var inst_61472 = (inst_61471 & (64));
var inst_61473 = inst_61465.cljs$core$ISeq$;
var inst_61474 = (cljs.core.PROTOCOL_SENTINEL === inst_61473);
var inst_61475 = ((inst_61472) || (inst_61474));
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61475)){
var statearr_61963_63336 = state_61862__$1;
(statearr_61963_63336[(1)] = (80));

} else {
var statearr_61964_63337 = state_61862__$1;
(statearr_61964_63337[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (106))){
var inst_61588 = (state_61862[(57)]);
var inst_61590 = (state_61862[(58)]);
var inst_61267 = (state_61862[(59)]);
var inst_61614 = (state_61862[(60)]);
var inst_61587 = (state_61862[(61)]);
var inst_61582 = (state_61862[(43)]);
var inst_61614__$1 = (state_61862[(2)]);
var inst_61615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61614__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_61619 = inst_61582;
var inst_61620 = inst_61587;
var inst_61621 = inst_61588;
var inst_61622 = inst_61590;
var inst_61623 = inst_61267;
var state_61862__$1 = (function (){var statearr_61965 = state_61862;
(statearr_61965[(60)] = inst_61614__$1);

(statearr_61965[(22)] = inst_61620);

(statearr_61965[(62)] = inst_61622);

(statearr_61965[(63)] = inst_61623);

(statearr_61965[(64)] = inst_61615);

(statearr_61965[(65)] = inst_61621);

(statearr_61965[(9)] = inst_61619);

return statearr_61965;
})();
var statearr_61966_63339 = state_61862__$1;
(statearr_61966_63339[(2)] = null);

(statearr_61966_63339[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (119))){
var inst_61621 = (state_61862[(65)]);
var inst_61736 = cljs.core.seq(inst_61621);
var state_61862__$1 = state_61862;
if(inst_61736){
var statearr_61967_63341 = state_61862__$1;
(statearr_61967_63341[(1)] = (142));

} else {
var statearr_61968_63342 = state_61862__$1;
(statearr_61968_63342[(1)] = (143));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (95))){
var state_61862__$1 = state_61862;
var statearr_61969_63343 = state_61862__$1;
(statearr_61969_63343[(2)] = waiting);

(statearr_61969_63343[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (144))){
var inst_61852 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_61973_63344 = state_61862__$1;
(statearr_61973_63344[(2)] = inst_61852);

(statearr_61973_63344[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (54))){
var inst_61454 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_61978_63345 = state_61862__$1;
(statearr_61978_63345[(2)] = inst_61454);

(statearr_61978_63345[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (92))){
var inst_61335 = (state_61862[(14)]);
var inst_61501 = (state_61862[(47)]);
var inst_61337 = (state_61862[(16)]);
var inst_61500 = (state_61862[(27)]);
var inst_61499 = (state_61862[(48)]);
var inst_61498 = (state_61862[(49)]);
var inst_61338 = (state_61862[(19)]);
var inst_61285 = (state_61862[(10)]);
var inst_61519 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_61520 = [new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result","com.wsscode.pathom.parser/merge-result",870398873),inst_61500];
var inst_61521 = cljs.core.PersistentHashMap.fromArrays(inst_61519,inst_61520);
var inst_61522 = com.wsscode.pathom.trace.trace(inst_61285,inst_61521);
var inst_61523 = cljs.core.vals(inst_61500);
var inst_61524 = cljs.core.first(inst_61523);
var inst_61525 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_61335,inst_61499,inst_61524);
var inst_61526 = cljs.core.PersistentHashSet.EMPTY;
var inst_61527 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_61498);
var inst_61528 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_61526,inst_61527,inst_61501);
var inst_61529 = cljs.core.PersistentVector.EMPTY;
var tmp61971 = inst_61337;
var tmp61972 = inst_61338;
var inst_61335__$1 = inst_61525;
var inst_61336 = inst_61528;
var inst_61337__$1 = tmp61971;
var inst_61338__$1 = tmp61972;
var inst_61339 = inst_61529;
var state_61862__$1 = (function (){var statearr_61979 = state_61862;
(statearr_61979[(14)] = inst_61335__$1);

(statearr_61979[(66)] = inst_61522);

(statearr_61979[(16)] = inst_61337__$1);

(statearr_61979[(20)] = inst_61339);

(statearr_61979[(13)] = inst_61336);

(statearr_61979[(19)] = inst_61338__$1);

return statearr_61979;
})();
var statearr_61980_63346 = state_61862__$1;
(statearr_61980_63346[(2)] = null);

(statearr_61980_63346[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (141))){
var inst_61726 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_61981_63347 = state_61862__$1;
(statearr_61981_63347[(2)] = inst_61726);

(statearr_61981_63347[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (137))){
var state_61862__$1 = state_61862;
var statearr_61982_63348 = state_61862__$1;
(statearr_61982_63348[(1)] = (139));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (104))){
var inst_61592 = (state_61862[(67)]);
var inst_61611 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61592);
var state_61862__$1 = state_61862;
var statearr_61984_63349 = state_61862__$1;
(statearr_61984_63349[(2)] = inst_61611);

(statearr_61984_63349[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (15))){
var state_61862__$1 = state_61862;
var statearr_61986_63350 = state_61862__$1;
(statearr_61986_63350[(2)] = false);

(statearr_61986_63350[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (48))){
var inst_61368 = (state_61862[(17)]);
var inst_61368__$1 = (state_61862[(2)]);
var inst_61369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61368__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_61862__$1 = (function (){var statearr_61987 = state_61862;
(statearr_61987[(17)] = inst_61368__$1);

(statearr_61987[(12)] = inst_61369);

return statearr_61987;
})();
if(cljs.core.truth_(inst_61368__$1)){
var statearr_61988_63351 = state_61862__$1;
(statearr_61988_63351[(1)] = (49));

} else {
var statearr_61989_63352 = state_61862__$1;
(statearr_61989_63352[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (50))){
var inst_61337 = (state_61862[(16)]);
var inst_61456 = cljs.core.seq(inst_61337);
var state_61862__$1 = state_61862;
if(inst_61456){
var statearr_61990_63353 = state_61862__$1;
(statearr_61990_63353[(1)] = (73));

} else {
var statearr_61991_63354 = state_61862__$1;
(statearr_61991_63354[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (116))){
var inst_61634 = (state_61862[(68)]);
var state_61862__$1 = state_61862;
var statearr_61992_63355 = state_61862__$1;
(statearr_61992_63355[(2)] = inst_61634);

(statearr_61992_63355[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (75))){
var inst_61563 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_61993_63356 = state_61862__$1;
(statearr_61993_63356[(2)] = inst_61563);

(statearr_61993_63356[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (159))){
var inst_61791 = (state_61862[(69)]);
var state_61862__$1 = state_61862;
var statearr_61994_63357 = state_61862__$1;
(statearr_61994_63357[(2)] = inst_61791);

(statearr_61994_63357[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (99))){
var state_61862__$1 = state_61862;
var statearr_61995_63358 = state_61862__$1;
(statearr_61995_63358[(2)] = false);

(statearr_61995_63358[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (21))){
var inst_61273 = cljs.core.PersistentHashMap.EMPTY;
var inst_61274 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_61273);
var state_61862__$1 = state_61862;
var statearr_61999_63359 = state_61862__$1;
(statearr_61999_63359[(2)] = inst_61274);

(statearr_61999_63359[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (31))){
var inst_61328 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61328)){
var statearr_62002_63360 = state_61862__$1;
(statearr_62002_63360[(1)] = (35));

} else {
var statearr_62005_63361 = state_61862__$1;
(statearr_62005_63361[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (113))){
var state_61862__$1 = state_61862;
var statearr_62012_63362 = state_61862__$1;
(statearr_62012_63362[(2)] = false);

(statearr_62012_63362[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (32))){
var state_61862__$1 = state_61862;
var statearr_62015_63363 = state_61862__$1;
(statearr_62015_63363[(2)] = true);

(statearr_62015_63363[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (136))){
var inst_61657 = (state_61862[(8)]);
var inst_61620 = (state_61862[(22)]);
var inst_61622 = (state_61862[(62)]);
var inst_61635 = (state_61862[(70)]);
var inst_61621 = (state_61862[(65)]);
var inst_61619 = (state_61862[(9)]);
var inst_61285 = (state_61862[(10)]);
var inst_61707 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_61708 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_61657];
var inst_61709 = cljs.core.PersistentHashMap.fromArrays(inst_61707,inst_61708);
var inst_61710 = com.wsscode.pathom.trace.trace(inst_61285,inst_61709);
var tmp62006 = inst_61620;
var tmp62007 = inst_61622;
var tmp62008 = inst_61621;
var tmp62009 = inst_61619;
var inst_61619__$1 = tmp62009;
var inst_61620__$1 = tmp62006;
var inst_61621__$1 = tmp62008;
var inst_61622__$1 = tmp62007;
var inst_61623 = inst_61635;
var state_61862__$1 = (function (){var statearr_62016 = state_61862;
(statearr_62016[(71)] = inst_61710);

(statearr_62016[(22)] = inst_61620__$1);

(statearr_62016[(62)] = inst_61622__$1);

(statearr_62016[(63)] = inst_61623);

(statearr_62016[(65)] = inst_61621__$1);

(statearr_62016[(9)] = inst_61619__$1);

return statearr_62016;
})();
var statearr_62017_63364 = state_61862__$1;
(statearr_62017_63364[(2)] = null);

(statearr_62017_63364[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (139))){
var inst_61656 = (state_61862[(72)]);
var inst_61620 = (state_61862[(22)]);
var inst_61622 = (state_61862[(62)]);
var inst_61276 = (state_61862[(18)]);
var inst_61635 = (state_61862[(70)]);
var inst_61621 = (state_61862[(65)]);
var inst_61619 = (state_61862[(9)]);
var inst_61285 = (state_61862[(10)]);
var inst_61717 = com.wsscode.pathom.parser.parallel_process_value(inst_61285,tx,inst_61656,inst_61276,inst_61619,inst_61620,inst_61621,read,mutate,inst_61622,inst_61635);
var inst_61718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61717,(0),null);
var inst_61719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61717,(1),null);
var inst_61720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61717,(2),null);
var inst_61721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61717,(3),null);
var inst_61722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61717,(4),null);
var inst_61619__$1 = inst_61718;
var inst_61620__$1 = inst_61719;
var inst_61621__$1 = inst_61720;
var inst_61622__$1 = inst_61721;
var inst_61623 = inst_61722;
var state_61862__$1 = (function (){var statearr_62018 = state_61862;
(statearr_62018[(22)] = inst_61620__$1);

(statearr_62018[(62)] = inst_61622__$1);

(statearr_62018[(63)] = inst_61623);

(statearr_62018[(65)] = inst_61621__$1);

(statearr_62018[(9)] = inst_61619__$1);

return statearr_62018;
})();
var statearr_62019_63365 = state_61862__$1;
(statearr_62019_63365[(2)] = null);

(statearr_62019_63365[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (40))){
var inst_61346 = (state_61862[(55)]);
var inst_61352 = inst_61346.cljs$lang$protocol_mask$partition0$;
var inst_61353 = (inst_61352 & (64));
var inst_61354 = inst_61346.cljs$core$ISeq$;
var inst_61355 = (cljs.core.PROTOCOL_SENTINEL === inst_61354);
var inst_61356 = ((inst_61353) || (inst_61355));
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61356)){
var statearr_62020_63366 = state_61862__$1;
(statearr_62020_63366[(1)] = (43));

} else {
var statearr_62021_63375 = state_61862__$1;
(statearr_62021_63375[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (129))){
var inst_61732 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62022_63378 = state_61862__$1;
(statearr_62022_63378[(2)] = inst_61732);

(statearr_62022_63378[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (91))){
var inst_61335 = (state_61862[(14)]);
var inst_61333 = (state_61862[(73)]);
var inst_61311 = (state_61862[(74)]);
var inst_61282 = (state_61862[(75)]);
var inst_61267 = (state_61862[(59)]);
var inst_61347 = (state_61862[(15)]);
var inst_61497 = (state_61862[(26)]);
var inst_61501 = (state_61862[(47)]);
var inst_61266 = (state_61862[(76)]);
var inst_61291 = (state_61862[(52)]);
var inst_61337 = (state_61862[(16)]);
var inst_61339 = (state_61862[(20)]);
var inst_61500 = (state_61862[(27)]);
var inst_61239 = (state_61862[(25)]);
var inst_61499 = (state_61862[(48)]);
var inst_61310 = (state_61862[(77)]);
var inst_61498 = (state_61862[(49)]);
var inst_61491 = (state_61862[(28)]);
var inst_61368 = (state_61862[(17)]);
var inst_61490 = (state_61862[(29)]);
var inst_61276 = (state_61862[(18)]);
var inst_61492 = (state_61862[(50)]);
var inst_61244 = (state_61862[(53)]);
var inst_61496 = (state_61862[(51)]);
var inst_61369 = (state_61862[(12)]);
var inst_61487 = (state_61862[(45)]);
var inst_61338 = (state_61862[(19)]);
var inst_61464 = (state_61862[(46)]);
var inst_61346 = (state_61862[(55)]);
var inst_61285 = (state_61862[(10)]);
var inst_61512 = (state_61862[(2)]);
var inst_61513 = com.wsscode.pathom.trace.trace(inst_61285,inst_61512);
var inst_61514 = new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031).cljs$core$IFn$_invoke$arity$1(inst_61285);
var inst_61515 = (function (){var res = inst_61335;
var G__61296 = inst_61339;
var map__61234 = inst_61266;
var p = inst_61496;
var merge_result_QMARK_ = inst_61491;
var key_watchers__$1 = inst_61276;
var children = inst_61267;
var vec__61341 = inst_61339;
var first__61343 = inst_61346;
var vec__61297 = inst_61267;
var map__61300 = inst_61333;
var map__61344 = inst_61368;
var response_value = inst_61500;
var processing = inst_61337;
var key = inst_61369;
var key_process_timeout__$1 = inst_61244;
var seq__61298 = inst_61311;
var trace_id__23022__auto__ = inst_61291;
var key_as = inst_61499;
var ast = inst_61368;
var key_process_timeout_step__$1 = inst_61239;
var provides_SINGLEQUOTE_ = inst_61498;
var msg = inst_61487;
var env__$1 = inst_61285;
var waiting__$1 = inst_61501;
var path_entity = inst_61282;
var vec__61458 = inst_61464;
var key_iterations = inst_61338;
var map__61461 = inst_61487;
var tail = inst_61347;
var waiting_SINGLEQUOTE_ = inst_61497;
var seq__61342 = inst_61347;
var error = inst_61492;
var provides = inst_61490;
var first__61299 = inst_61310;
return ((function (res,G__61296,map__61234,p,merge_result_QMARK_,key_watchers__$1,children,vec__61341,first__61343,vec__61297,map__61300,map__61344,response_value,processing,key,key_process_timeout__$1,seq__61298,trace_id__23022__auto__,key_as,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,waiting__$1,path_entity,vec__61458,key_iterations,map__61461,tail,waiting_SINGLEQUOTE_,seq__61342,error,provides,first__61299,inst_61335,inst_61333,inst_61311,inst_61282,inst_61267,inst_61347,inst_61497,inst_61501,inst_61266,inst_61291,inst_61337,inst_61339,inst_61500,inst_61239,inst_61499,inst_61310,inst_61498,inst_61491,inst_61368,inst_61490,inst_61276,inst_61492,inst_61244,inst_61496,inst_61369,inst_61487,inst_61338,inst_61464,inst_61346,inst_61285,inst_61512,inst_61513,inst_61514,state_val_61863,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p1__61220_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_value,p1__61220_SHARP_], 0));
});
;})(res,G__61296,map__61234,p,merge_result_QMARK_,key_watchers__$1,children,vec__61341,first__61343,vec__61297,map__61300,map__61344,response_value,processing,key,key_process_timeout__$1,seq__61298,trace_id__23022__auto__,key_as,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,waiting__$1,path_entity,vec__61458,key_iterations,map__61461,tail,waiting_SINGLEQUOTE_,seq__61342,error,provides,first__61299,inst_61335,inst_61333,inst_61311,inst_61282,inst_61267,inst_61347,inst_61497,inst_61501,inst_61266,inst_61291,inst_61337,inst_61339,inst_61500,inst_61239,inst_61499,inst_61310,inst_61498,inst_61491,inst_61368,inst_61490,inst_61276,inst_61492,inst_61244,inst_61496,inst_61369,inst_61487,inst_61338,inst_61464,inst_61346,inst_61285,inst_61512,inst_61513,inst_61514,state_val_61863,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_61516 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(inst_61514,inst_61515);
var inst_61517 = com.wsscode.pathom.parser.parallel_flush_watchers(inst_61285,inst_61276,inst_61498,inst_61492);
var state_61862__$1 = (function (){var statearr_62024 = state_61862;
(statearr_62024[(78)] = inst_61517);

(statearr_62024[(79)] = inst_61516);

(statearr_62024[(80)] = inst_61513);

return statearr_62024;
})();
if(cljs.core.truth_(inst_61491)){
var statearr_62025_63382 = state_61862__$1;
(statearr_62025_63382[(1)] = (92));

} else {
var statearr_62026_63383 = state_61862__$1;
(statearr_62026_63383[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (117))){
var inst_61656 = (state_61862[(72)]);
var inst_61656__$1 = (state_61862[(2)]);
var inst_61657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61656__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_61862__$1 = (function (){var statearr_62029 = state_61862;
(statearr_62029[(72)] = inst_61656__$1);

(statearr_62029[(8)] = inst_61657);

return statearr_62029;
})();
if(cljs.core.truth_(inst_61656__$1)){
var statearr_62030_63384 = state_61862__$1;
(statearr_62030_63384[(1)] = (118));

} else {
var statearr_62031_63385 = state_61862__$1;
(statearr_62031_63385[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (108))){
var inst_61856 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62033_63410 = state_61862__$1;
(statearr_62033_63410[(2)] = inst_61856);

(statearr_62033_63410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (156))){
var inst_61772 = (state_61862[(40)]);
var inst_61785 = (state_61862[(41)]);
var inst_61622 = (state_61862[(62)]);
var inst_61621 = (state_61862[(65)]);
var inst_61619 = (state_61862[(9)]);
var inst_61845 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(inst_61621,inst_61772);
var inst_61846 = cljs.core.PersistentVector.EMPTY;
var tmp62027 = inst_61622;
var tmp62028 = inst_61619;
var inst_61619__$1 = tmp62028;
var inst_61620 = inst_61785;
var inst_61621__$1 = inst_61845;
var inst_61622__$1 = tmp62027;
var inst_61623 = inst_61846;
var state_61862__$1 = (function (){var statearr_62039 = state_61862;
(statearr_62039[(22)] = inst_61620);

(statearr_62039[(62)] = inst_61622__$1);

(statearr_62039[(63)] = inst_61623);

(statearr_62039[(65)] = inst_61621__$1);

(statearr_62039[(9)] = inst_61619__$1);

return statearr_62039;
})();
var statearr_62040_63411 = state_61862__$1;
(statearr_62040_63411[(2)] = null);

(statearr_62040_63411[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (56))){
var inst_61335 = (state_61862[(14)]);
var state_61862__$1 = state_61862;
var statearr_62041_63412 = state_61862__$1;
(statearr_62041_63412[(2)] = inst_61335);

(statearr_62041_63412[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (33))){
var state_61862__$1 = state_61862;
var statearr_62042_63413 = state_61862__$1;
(statearr_62042_63413[(2)] = false);

(statearr_62042_63413[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (13))){
var inst_61261 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61261)){
var statearr_62043_63414 = state_61862__$1;
(statearr_62043_63414[(1)] = (17));

} else {
var statearr_62044_63415 = state_61862__$1;
(statearr_62044_63415[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (22))){
var inst_61282 = (state_61862[(75)]);
var inst_61267 = (state_61862[(59)]);
var inst_61266 = (state_61862[(76)]);
var inst_61239 = (state_61862[(25)]);
var inst_61276 = (state_61862[(18)]);
var inst_61244 = (state_61862[(53)]);
var inst_61285 = (state_61862[(10)]);
var inst_61276__$1 = (state_61862[(2)]);
var inst_61277 = cljs.core.deref(entity_path_cache);
var inst_61281 = cljs.core.PersistentHashMap.EMPTY;
var inst_61282__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_61277,path,inst_61281);
var inst_61283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),inst_61244], 0));
var inst_61284 = (function (){var key_process_timeout_step__$1 = inst_61239;
var key_process_timeout__$1 = inst_61244;
var map__61234 = inst_61266;
var children = inst_61267;
var key_watchers__$1 = inst_61276__$1;
var path_entity = inst_61282__$1;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__61234,children,key_watchers__$1,path_entity,inst_61282,inst_61267,inst_61266,inst_61239,inst_61276,inst_61244,inst_61285,inst_61276__$1,inst_61277,inst_61281,inst_61282__$1,inst_61283,state_val_61863,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(x,((function (key_process_timeout_step__$1,key_process_timeout__$1,map__61234,children,key_watchers__$1,path_entity,inst_61282,inst_61267,inst_61266,inst_61239,inst_61276,inst_61244,inst_61285,inst_61276__$1,inst_61277,inst_61281,inst_61282__$1,inst_61283,state_val_61863,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p1__61216_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,p1__61216_SHARP_], 0));
});})(key_process_timeout_step__$1,key_process_timeout__$1,map__61234,children,key_watchers__$1,path_entity,inst_61282,inst_61267,inst_61266,inst_61239,inst_61276,inst_61244,inst_61285,inst_61276__$1,inst_61277,inst_61281,inst_61282__$1,inst_61283,state_val_61863,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,x], 0)));
}
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__61234,children,key_watchers__$1,path_entity,inst_61282,inst_61267,inst_61266,inst_61239,inst_61276,inst_61244,inst_61285,inst_61276__$1,inst_61277,inst_61281,inst_61282__$1,inst_61283,state_val_61863,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_61285__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_61283,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),inst_61284);
var inst_61286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61285__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_61862__$1 = (function (){var statearr_62045 = state_61862;
(statearr_62045[(75)] = inst_61282__$1);

(statearr_62045[(18)] = inst_61276__$1);

(statearr_62045[(10)] = inst_61285__$1);

return statearr_62045;
})();
if(cljs.core.truth_(inst_61286)){
var statearr_62046_63417 = state_61862__$1;
(statearr_62046_63417[(1)] = (23));

} else {
var statearr_62047_63418 = state_61862__$1;
(statearr_62047_63418[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (90))){
var inst_61507 = (state_61862[(30)]);
var state_61862__$1 = state_61862;
var statearr_62048_63419 = state_61862__$1;
(statearr_62048_63419[(2)] = inst_61507);

(statearr_62048_63419[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (109))){
var inst_61634 = (state_61862[(68)]);
var inst_61640 = inst_61634.cljs$lang$protocol_mask$partition0$;
var inst_61641 = (inst_61640 & (64));
var inst_61642 = inst_61634.cljs$core$ISeq$;
var inst_61643 = (cljs.core.PROTOCOL_SENTINEL === inst_61642);
var inst_61644 = ((inst_61641) || (inst_61643));
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61644)){
var statearr_62049_63420 = state_61862__$1;
(statearr_62049_63420[(1)] = (112));

} else {
var statearr_62050_63422 = state_61862__$1;
(statearr_62050_63422[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (143))){
var inst_61619 = (state_61862[(9)]);
var state_61862__$1 = state_61862;
var statearr_62051_63425 = state_61862__$1;
(statearr_62051_63425[(2)] = inst_61619);

(statearr_62051_63425[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (36))){
var inst_61310 = (state_61862[(77)]);
var state_61862__$1 = state_61862;
var statearr_62052_63427 = state_61862__$1;
(statearr_62052_63427[(2)] = inst_61310);

(statearr_62052_63427[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (41))){
var state_61862__$1 = state_61862;
var statearr_62053_63428 = state_61862__$1;
(statearr_62053_63428[(2)] = false);

(statearr_62053_63428[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (118))){
var inst_61656 = (state_61862[(72)]);
var inst_61657 = (state_61862[(8)]);
var inst_61622 = (state_61862[(62)]);
var inst_61285 = (state_61862[(10)]);
var inst_61659 = com.wsscode.pathom.parser.ast__GT_out_key(inst_61656);
var inst_61660 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_61661 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_61657];
var inst_61662 = cljs.core.PersistentHashMap.fromArrays(inst_61660,inst_61661);
var inst_61663 = com.wsscode.pathom.trace.trace(inst_61285,inst_61662);
var inst_61664 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_61622,inst_61657,(0));
var inst_61665 = (max_key_iterations - (1));
var inst_61666 = (inst_61664 > inst_61665);
var state_61862__$1 = (function (){var statearr_62056 = state_61862;
(statearr_62056[(7)] = inst_61659);

(statearr_62056[(81)] = inst_61663);

return statearr_62056;
})();
if(cljs.core.truth_(inst_61666)){
var statearr_62057_63433 = state_61862__$1;
(statearr_62057_63433[(1)] = (121));

} else {
var statearr_62058_63434 = state_61862__$1;
(statearr_62058_63434[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (150))){
var state_61862__$1 = state_61862;
var statearr_62059_63436 = state_61862__$1;
(statearr_62059_63436[(2)] = false);

(statearr_62059_63436[(1)] = (151));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (162))){
var inst_61783 = (state_61862[(35)]);
var inst_61770 = (state_61862[(36)]);
var inst_61782 = (state_61862[(37)]);
var inst_61784 = (state_61862[(38)]);
var inst_61282 = (state_61862[(75)]);
var inst_61771 = (state_61862[(39)]);
var inst_61744 = (state_61862[(31)]);
var inst_61267 = (state_61862[(59)]);
var inst_61772 = (state_61862[(40)]);
var inst_61785 = (state_61862[(41)]);
var inst_61266 = (state_61862[(76)]);
var inst_61593 = (state_61862[(82)]);
var inst_61781 = (state_61862[(32)]);
var inst_61656 = (state_61862[(72)]);
var inst_61657 = (state_61862[(8)]);
var inst_61614 = (state_61862[(60)]);
var inst_61592 = (state_61862[(67)]);
var inst_61767 = (state_61862[(33)]);
var inst_61622 = (state_61862[(62)]);
var inst_61634 = (state_61862[(68)]);
var inst_61239 = (state_61862[(25)]);
var inst_61623 = (state_61862[(63)]);
var inst_61276 = (state_61862[(18)]);
var inst_61244 = (state_61862[(53)]);
var inst_61635 = (state_61862[(70)]);
var inst_61621 = (state_61862[(65)]);
var inst_61769 = (state_61862[(34)]);
var inst_61619 = (state_61862[(9)]);
var inst_61285 = (state_61862[(10)]);
var inst_61821 = cljs.core.keys(inst_61619);
var inst_61822 = cljs.core.set(inst_61821);
var inst_61823 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_61822,com.wsscode.pathom.parser.ast__GT_out_key);
var inst_61824 = cljs.core.vec(inst_61782);
var inst_61825 = com.wsscode.pathom.parser.focus_subquery(tx,inst_61824);
var inst_61826 = com.wsscode.pathom.parser.query__GT_ast(inst_61825);
var inst_61827 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_61826);
var inst_61828 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_61823,inst_61827);
var inst_61829 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_61828);
var inst_61830 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)];
var inst_61831 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),inst_61829);
var inst_61832 = [new cljs.core.Keyword("com.wsscode.pathom.parser","reset-loop","com.wsscode.pathom.parser/reset-loop",-808527604),inst_61831];
var inst_61833 = cljs.core.PersistentHashMap.fromArrays(inst_61830,inst_61832);
var inst_61834 = com.wsscode.pathom.trace.trace(inst_61285,inst_61833);
var inst_61835 = cljs.core.PersistentHashSet.EMPTY;
var inst_61836 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_61782);
var inst_61837 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_61835,inst_61836,inst_61785);
var inst_61839 = (function (){var res = inst_61619;
var vec__61578 = inst_61267;
var map__61741 = inst_61767;
var map__61234 = inst_61266;
var p = inst_61772;
var seq__61579 = inst_61593;
var merge_result_QMARK_ = inst_61770;
var key_watchers__$1 = inst_61276;
var first__61580 = inst_61592;
var vec__61627 = inst_61623;
var children = inst_61267;
var response_value = inst_61784;
var processing = inst_61621;
var key = inst_61657;
var key_process_timeout__$1 = inst_61244;
var next_children = inst_61829;
var key_as = inst_61783;
var seq__61628 = inst_61635;
var map__61630 = inst_61656;
var ast = inst_61656;
var key_process_timeout_step__$1 = inst_61239;
var provides_SINGLEQUOTE_ = inst_61782;
var msg = inst_61767;
var env__$1 = inst_61285;
var map__61581 = inst_61614;
var vec__61738 = inst_61744;
var waiting__$1 = inst_61785;
var path_entity = inst_61282;
var first__61629 = inst_61634;
var key_iterations = inst_61622;
var G__61577 = inst_61623;
var tail = inst_61635;
var waiting_SINGLEQUOTE_ = inst_61781;
var error = inst_61771;
var provides = inst_61769;
return ((function (res,vec__61578,map__61741,map__61234,p,seq__61579,merge_result_QMARK_,key_watchers__$1,first__61580,vec__61627,children,response_value,processing,key,key_process_timeout__$1,next_children,key_as,seq__61628,map__61630,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,map__61581,vec__61738,waiting__$1,path_entity,first__61629,key_iterations,G__61577,tail,waiting_SINGLEQUOTE_,error,provides,inst_61783,inst_61770,inst_61782,inst_61784,inst_61282,inst_61771,inst_61744,inst_61267,inst_61772,inst_61785,inst_61266,inst_61593,inst_61781,inst_61656,inst_61657,inst_61614,inst_61592,inst_61767,inst_61622,inst_61634,inst_61239,inst_61623,inst_61276,inst_61244,inst_61635,inst_61621,inst_61769,inst_61619,inst_61285,inst_61821,inst_61822,inst_61823,inst_61824,inst_61825,inst_61826,inst_61827,inst_61828,inst_61829,inst_61830,inst_61831,inst_61832,inst_61833,inst_61834,inst_61835,inst_61836,inst_61837,state_val_61863,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (iter,p__61838){
var map__62061 = p__61838;
var map__62061__$1 = (((((!((map__62061 == null))))?(((((map__62061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62061):map__62061);
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62061__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(iter,key__$1,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});
;})(res,vec__61578,map__61741,map__61234,p,seq__61579,merge_result_QMARK_,key_watchers__$1,first__61580,vec__61627,children,response_value,processing,key,key_process_timeout__$1,next_children,key_as,seq__61628,map__61630,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,map__61581,vec__61738,waiting__$1,path_entity,first__61629,key_iterations,G__61577,tail,waiting_SINGLEQUOTE_,error,provides,inst_61783,inst_61770,inst_61782,inst_61784,inst_61282,inst_61771,inst_61744,inst_61267,inst_61772,inst_61785,inst_61266,inst_61593,inst_61781,inst_61656,inst_61657,inst_61614,inst_61592,inst_61767,inst_61622,inst_61634,inst_61239,inst_61623,inst_61276,inst_61244,inst_61635,inst_61621,inst_61769,inst_61619,inst_61285,inst_61821,inst_61822,inst_61823,inst_61824,inst_61825,inst_61826,inst_61827,inst_61828,inst_61829,inst_61830,inst_61831,inst_61832,inst_61833,inst_61834,inst_61835,inst_61836,inst_61837,state_val_61863,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_61840 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_61839,inst_61622,inst_61829);
var tmp62054 = inst_61621;
var tmp62055 = inst_61619;
var inst_61619__$1 = tmp62055;
var inst_61620 = inst_61837;
var inst_61621__$1 = tmp62054;
var inst_61622__$1 = inst_61840;
var inst_61623__$1 = inst_61829;
var state_61862__$1 = (function (){var statearr_62063 = state_61862;
(statearr_62063[(83)] = inst_61834);

(statearr_62063[(22)] = inst_61620);

(statearr_62063[(62)] = inst_61622__$1);

(statearr_62063[(63)] = inst_61623__$1);

(statearr_62063[(65)] = inst_61621__$1);

(statearr_62063[(9)] = inst_61619__$1);

return statearr_62063;
})();
var statearr_62064_63439 = state_61862__$1;
(statearr_62064_63439[(2)] = null);

(statearr_62064_63439[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (89))){
var inst_61507 = (state_61862[(30)]);
var inst_61497 = (state_61862[(26)]);
var inst_61509 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_61507,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),inst_61497);
var state_61862__$1 = state_61862;
var statearr_62065_63440 = state_61862__$1;
(statearr_62065_63440[(2)] = inst_61509);

(statearr_62065_63440[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (100))){
var inst_61609 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61609)){
var statearr_62066_63441 = state_61862__$1;
(statearr_62066_63441[(1)] = (104));

} else {
var statearr_62067_63442 = state_61862__$1;
(statearr_62067_63442[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (131))){
var inst_61690 = (state_61862[(23)]);
var state_61862__$1 = state_61862;
var statearr_62068_63443 = state_61862__$1;
(statearr_62068_63443[(2)] = inst_61690);

(statearr_62068_63443[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (122))){
var inst_61659 = (state_61862[(7)]);
var inst_61619 = (state_61862[(9)]);
var inst_61682 = cljs.core.contains_QMARK_(inst_61619,inst_61659);
var state_61862__$1 = state_61862;
if(inst_61682){
var statearr_62073_63444 = state_61862__$1;
(statearr_62073_63444[(1)] = (127));

} else {
var statearr_62075_63445 = state_61862__$1;
(statearr_62075_63445[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (43))){
var state_61862__$1 = state_61862;
var statearr_62076_63446 = state_61862__$1;
(statearr_62076_63446[(2)] = true);

(statearr_62076_63446[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (61))){
var inst_61369 = (state_61862[(12)]);
var inst_61336 = (state_61862[(13)]);
var inst_61411 = cljs.core.contains_QMARK_(inst_61336,inst_61369);
var state_61862__$1 = state_61862;
var statearr_62077_63447 = state_61862__$1;
(statearr_62077_63447[(2)] = inst_61411);

(statearr_62077_63447[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (29))){
var inst_61310 = (state_61862[(77)]);
var inst_61317 = inst_61310.cljs$lang$protocol_mask$partition0$;
var inst_61318 = (inst_61317 & (64));
var inst_61319 = inst_61310.cljs$core$ISeq$;
var inst_61320 = (cljs.core.PROTOCOL_SENTINEL === inst_61319);
var inst_61321 = ((inst_61318) || (inst_61320));
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61321)){
var statearr_62079_63448 = state_61862__$1;
(statearr_62079_63448[(1)] = (32));

} else {
var statearr_62080_63449 = state_61862__$1;
(statearr_62080_63449[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (151))){
var inst_61759 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62087_63450 = state_61862__$1;
(statearr_62087_63450[(2)] = inst_61759);

(statearr_62087_63450[(1)] = (148));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (44))){
var state_61862__$1 = state_61862;
var statearr_62088_63451 = state_61862__$1;
(statearr_62088_63451[(2)] = false);

(statearr_62088_63451[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (93))){
var inst_61335 = (state_61862[(14)]);
var inst_61333 = (state_61862[(73)]);
var inst_61311 = (state_61862[(74)]);
var inst_61282 = (state_61862[(75)]);
var inst_61267 = (state_61862[(59)]);
var inst_61347 = (state_61862[(15)]);
var inst_61497 = (state_61862[(26)]);
var inst_61501 = (state_61862[(47)]);
var inst_61266 = (state_61862[(76)]);
var inst_61291 = (state_61862[(52)]);
var inst_61337 = (state_61862[(16)]);
var inst_61339 = (state_61862[(20)]);
var inst_61500 = (state_61862[(27)]);
var inst_61239 = (state_61862[(25)]);
var inst_61499 = (state_61862[(48)]);
var inst_61310 = (state_61862[(77)]);
var inst_61498 = (state_61862[(49)]);
var inst_61491 = (state_61862[(28)]);
var inst_61368 = (state_61862[(17)]);
var inst_61490 = (state_61862[(29)]);
var inst_61276 = (state_61862[(18)]);
var inst_61492 = (state_61862[(50)]);
var inst_61244 = (state_61862[(53)]);
var inst_61496 = (state_61862[(51)]);
var inst_61369 = (state_61862[(12)]);
var inst_61487 = (state_61862[(45)]);
var inst_61338 = (state_61862[(19)]);
var inst_61464 = (state_61862[(46)]);
var inst_61346 = (state_61862[(55)]);
var inst_61285 = (state_61862[(10)]);
var inst_61532 = cljs.core.keys(inst_61335);
var inst_61533 = cljs.core.set(inst_61532);
var inst_61534 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_61533,com.wsscode.pathom.parser.ast__GT_out_key);
var inst_61535 = cljs.core.vec(inst_61498);
var inst_61536 = com.wsscode.pathom.parser.focus_subquery(tx,inst_61535);
var inst_61537 = com.wsscode.pathom.parser.query__GT_ast(inst_61536);
var inst_61538 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_61537);
var inst_61539 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_61534,inst_61538);
var inst_61540 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_61539);
var inst_61541 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)];
var inst_61542 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),inst_61540);
var inst_61543 = [new cljs.core.Keyword("com.wsscode.pathom.parser","reset-loop","com.wsscode.pathom.parser/reset-loop",-808527604),inst_61542];
var inst_61544 = cljs.core.PersistentHashMap.fromArrays(inst_61541,inst_61543);
var inst_61545 = com.wsscode.pathom.trace.trace(inst_61285,inst_61544);
var inst_61546 = cljs.core.PersistentHashSet.EMPTY;
var inst_61547 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_61498);
var inst_61548 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_61546,inst_61547,inst_61501);
var inst_61550 = (function (){var res = inst_61335;
var G__61296 = inst_61339;
var map__61234 = inst_61266;
var p = inst_61496;
var merge_result_QMARK_ = inst_61491;
var key_watchers__$1 = inst_61276;
var children = inst_61267;
var vec__61341 = inst_61339;
var first__61343 = inst_61346;
var vec__61297 = inst_61267;
var map__61300 = inst_61333;
var map__61344 = inst_61368;
var response_value = inst_61500;
var processing = inst_61337;
var key = inst_61369;
var key_process_timeout__$1 = inst_61244;
var seq__61298 = inst_61311;
var trace_id__23022__auto__ = inst_61291;
var next_children = inst_61540;
var key_as = inst_61499;
var ast = inst_61368;
var key_process_timeout_step__$1 = inst_61239;
var provides_SINGLEQUOTE_ = inst_61498;
var msg = inst_61487;
var env__$1 = inst_61285;
var waiting__$1 = inst_61501;
var path_entity = inst_61282;
var vec__61458 = inst_61464;
var key_iterations = inst_61338;
var map__61461 = inst_61487;
var tail = inst_61347;
var waiting_SINGLEQUOTE_ = inst_61497;
var seq__61342 = inst_61347;
var error = inst_61492;
var provides = inst_61490;
var first__61299 = inst_61310;
return ((function (res,G__61296,map__61234,p,merge_result_QMARK_,key_watchers__$1,children,vec__61341,first__61343,vec__61297,map__61300,map__61344,response_value,processing,key,key_process_timeout__$1,seq__61298,trace_id__23022__auto__,next_children,key_as,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,waiting__$1,path_entity,vec__61458,key_iterations,map__61461,tail,waiting_SINGLEQUOTE_,seq__61342,error,provides,first__61299,inst_61335,inst_61333,inst_61311,inst_61282,inst_61267,inst_61347,inst_61497,inst_61501,inst_61266,inst_61291,inst_61337,inst_61339,inst_61500,inst_61239,inst_61499,inst_61310,inst_61498,inst_61491,inst_61368,inst_61490,inst_61276,inst_61492,inst_61244,inst_61496,inst_61369,inst_61487,inst_61338,inst_61464,inst_61346,inst_61285,inst_61532,inst_61533,inst_61534,inst_61535,inst_61536,inst_61537,inst_61538,inst_61539,inst_61540,inst_61541,inst_61542,inst_61543,inst_61544,inst_61545,inst_61546,inst_61547,inst_61548,state_val_61863,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (iter,p__61549){
var map__62091 = p__61549;
var map__62091__$1 = (((((!((map__62091 == null))))?(((((map__62091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62091):map__62091);
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(iter,key__$1,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});
;})(res,G__61296,map__61234,p,merge_result_QMARK_,key_watchers__$1,children,vec__61341,first__61343,vec__61297,map__61300,map__61344,response_value,processing,key,key_process_timeout__$1,seq__61298,trace_id__23022__auto__,next_children,key_as,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,waiting__$1,path_entity,vec__61458,key_iterations,map__61461,tail,waiting_SINGLEQUOTE_,seq__61342,error,provides,first__61299,inst_61335,inst_61333,inst_61311,inst_61282,inst_61267,inst_61347,inst_61497,inst_61501,inst_61266,inst_61291,inst_61337,inst_61339,inst_61500,inst_61239,inst_61499,inst_61310,inst_61498,inst_61491,inst_61368,inst_61490,inst_61276,inst_61492,inst_61244,inst_61496,inst_61369,inst_61487,inst_61338,inst_61464,inst_61346,inst_61285,inst_61532,inst_61533,inst_61534,inst_61535,inst_61536,inst_61537,inst_61538,inst_61539,inst_61540,inst_61541,inst_61542,inst_61543,inst_61544,inst_61545,inst_61546,inst_61547,inst_61548,state_val_61863,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_61551 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_61550,inst_61338,inst_61540);
var tmp62085 = inst_61335;
var tmp62086 = inst_61337;
var inst_61335__$1 = tmp62085;
var inst_61336 = inst_61548;
var inst_61337__$1 = tmp62086;
var inst_61338__$1 = inst_61551;
var inst_61339__$1 = inst_61540;
var state_61862__$1 = (function (){var statearr_62100 = state_61862;
(statearr_62100[(14)] = inst_61335__$1);

(statearr_62100[(16)] = inst_61337__$1);

(statearr_62100[(20)] = inst_61339__$1);

(statearr_62100[(84)] = inst_61545);

(statearr_62100[(13)] = inst_61336);

(statearr_62100[(19)] = inst_61338__$1);

return statearr_62100;
})();
var statearr_62103_63504 = state_61862__$1;
(statearr_62103_63504[(2)] = null);

(statearr_62103_63504[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (6))){
var inst_61237 = com.wsscode.pathom.parser.default_step_fn((1000),(1000));
var state_61862__$1 = state_61862;
var statearr_62104_63506 = state_61862__$1;
(statearr_62104_63506[(2)] = inst_61237);

(statearr_62104_63506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (111))){
var inst_61651 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61651)){
var statearr_62105_63514 = state_61862__$1;
(statearr_62105_63514[(1)] = (115));

} else {
var statearr_62106_63515 = state_61862__$1;
(statearr_62106_63515[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (28))){
var inst_61267 = (state_61862[(59)]);
var inst_61310 = (state_61862[(77)]);
var inst_61306 = (state_61862[(2)]);
var inst_61307 = cljs.core.PersistentHashSet.EMPTY;
var inst_61308 = cljs.core.PersistentHashMap.EMPTY;
var inst_61309 = cljs.core.seq(inst_61267);
var inst_61310__$1 = cljs.core.first(inst_61309);
var inst_61311 = cljs.core.next(inst_61309);
var inst_61314 = (inst_61310__$1 == null);
var inst_61315 = cljs.core.not(inst_61314);
var state_61862__$1 = (function (){var statearr_62110 = state_61862;
(statearr_62110[(85)] = inst_61306);

(statearr_62110[(74)] = inst_61311);

(statearr_62110[(77)] = inst_61310__$1);

(statearr_62110[(86)] = inst_61307);

(statearr_62110[(87)] = inst_61308);

return statearr_62110;
})();
if(inst_61315){
var statearr_62111_63519 = state_61862__$1;
(statearr_62111_63519[(1)] = (29));

} else {
var statearr_62112_63521 = state_61862__$1;
(statearr_62112_63521[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (134))){
var inst_61657 = (state_61862[(8)]);
var inst_61620 = (state_61862[(22)]);
var inst_61705 = cljs.core.contains_QMARK_(inst_61620,inst_61657);
var state_61862__$1 = state_61862;
if(inst_61705){
var statearr_62120_63522 = state_61862__$1;
(statearr_62120_63522[(1)] = (136));

} else {
var statearr_62121_63523 = state_61862__$1;
(statearr_62121_63523[(1)] = (137));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (64))){
var inst_61335 = (state_61862[(14)]);
var inst_61347 = (state_61862[(15)]);
var inst_61337 = (state_61862[(16)]);
var inst_61369 = (state_61862[(12)]);
var inst_61336 = (state_61862[(13)]);
var inst_61338 = (state_61862[(19)]);
var inst_61285 = (state_61862[(10)]);
var inst_61416 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_61417 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_61369];
var inst_61418 = cljs.core.PersistentHashMap.fromArrays(inst_61416,inst_61417);
var inst_61419 = com.wsscode.pathom.trace.trace(inst_61285,inst_61418);
var inst_61420 = com.wsscode.pathom.parser.watch_pending_key(inst_61285,inst_61369);
var inst_61421 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_61337,inst_61420);
var tmp62107 = inst_61335;
var tmp62108 = inst_61336;
var tmp62109 = inst_61338;
var inst_61335__$1 = tmp62107;
var inst_61336__$1 = tmp62108;
var inst_61337__$1 = inst_61421;
var inst_61338__$1 = tmp62109;
var inst_61339 = inst_61347;
var state_61862__$1 = (function (){var statearr_62128 = state_61862;
(statearr_62128[(14)] = inst_61335__$1);

(statearr_62128[(16)] = inst_61337__$1);

(statearr_62128[(20)] = inst_61339);

(statearr_62128[(88)] = inst_61419);

(statearr_62128[(13)] = inst_61336__$1);

(statearr_62128[(19)] = inst_61338__$1);

return statearr_62128;
})();
var statearr_62129_63525 = state_61862__$1;
(statearr_62129_63525[(2)] = null);

(statearr_62129_63525[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (155))){
var inst_61770 = (state_61862[(36)]);
var inst_61784 = (state_61862[(38)]);
var inst_61781 = (state_61862[(32)]);
var inst_61769 = (state_61862[(34)]);
var inst_61788 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683)];
var inst_61789 = cljs.core.boolean$(inst_61770);
var inst_61790 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-pending","com.wsscode.pathom.parser/process-pending",-536495871),inst_61769,inst_61784,inst_61789];
var inst_61791 = cljs.core.PersistentHashMap.fromArrays(inst_61788,inst_61790);
var state_61862__$1 = (function (){var statearr_62130 = state_61862;
(statearr_62130[(69)] = inst_61791);

return statearr_62130;
})();
if(cljs.core.truth_(inst_61781)){
var statearr_62131_63527 = state_61862__$1;
(statearr_62131_63527[(1)] = (158));

} else {
var statearr_62132_63528 = state_61862__$1;
(statearr_62132_63528[(1)] = (159));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (103))){
var inst_61606 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62133_63530 = state_61862__$1;
(statearr_62133_63530[(2)] = inst_61606);

(statearr_62133_63530[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (51))){
var inst_61565 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62134_63533 = state_61862__$1;
(statearr_62134_63533[(2)] = inst_61565);

(statearr_62134_63533[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (25))){
var inst_61858 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62135_63541 = state_61862__$1;
(statearr_62135_63541[(2)] = inst_61858);


cljs.core.async.impl.ioc_helpers.process_exception(state_61862__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (34))){
var inst_61325 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62141_63542 = state_61862__$1;
(statearr_62141_63542[(2)] = inst_61325);

(statearr_62141_63542[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (146))){
var inst_61745 = (state_61862[(24)]);
var inst_61751 = inst_61745.cljs$lang$protocol_mask$partition0$;
var inst_61752 = (inst_61751 & (64));
var inst_61753 = inst_61745.cljs$core$ISeq$;
var inst_61754 = (cljs.core.PROTOCOL_SENTINEL === inst_61753);
var inst_61755 = ((inst_61752) || (inst_61754));
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61755)){
var statearr_62144_63543 = state_61862__$1;
(statearr_62144_63543[(1)] = (149));

} else {
var statearr_62145_63544 = state_61862__$1;
(statearr_62145_63544[(1)] = (150));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (125))){
var inst_61619 = (state_61862[(9)]);
var state_61862__$1 = state_61862;
var statearr_62146_63545 = state_61862__$1;
(statearr_62146_63545[(2)] = inst_61619);

(statearr_62146_63545[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (148))){
var inst_61762 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61762)){
var statearr_62148_63546 = state_61862__$1;
(statearr_62148_63546[(1)] = (152));

} else {
var statearr_62149_63547 = state_61862__$1;
(statearr_62149_63547[(1)] = (153));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (17))){
var inst_61245 = (state_61862[(89)]);
var inst_61263 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61245);
var state_61862__$1 = state_61862;
var statearr_62151_63549 = state_61862__$1;
(statearr_62151_63549[(2)] = inst_61263);

(statearr_62151_63549[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (3))){
var inst_61230 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62152_63550 = state_61862__$1;
(statearr_62152_63550[(2)] = inst_61230);


cljs.core.async.impl.ioc_helpers.process_exception(state_61862__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (12))){
var state_61862__$1 = state_61862;
var statearr_62153_63551 = state_61862__$1;
(statearr_62153_63551[(2)] = false);

(statearr_62153_63551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (152))){
var inst_61745 = (state_61862[(24)]);
var inst_61764 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61745);
var state_61862__$1 = state_61862;
var statearr_62154_63552 = state_61862__$1;
(statearr_62154_63552[(2)] = inst_61764);

(statearr_62154_63552[(1)] = (154));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (2))){
var inst_61860 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61862__$1,inst_61860);
} else {
if((state_val_61863 === (66))){
var inst_61450 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62162_63555 = state_61862__$1;
(statearr_62162_63555[(2)] = inst_61450);

(statearr_62162_63555[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (142))){
var inst_61621 = (state_61862[(65)]);
var inst_61742 = cljs.core.vec(inst_61621);
var state_61862__$1 = state_61862;
return cljs.core.async.ioc_alts_BANG_(state_61862__$1,(145),inst_61742);
} else {
if((state_val_61863 === (107))){
var inst_61634 = (state_61862[(68)]);
var inst_61623 = (state_61862[(63)]);
var inst_61631 = cljs.core.seq(inst_61623);
var inst_61634__$1 = cljs.core.first(inst_61631);
var inst_61635 = cljs.core.next(inst_61631);
var inst_61637 = (inst_61634__$1 == null);
var inst_61638 = cljs.core.not(inst_61637);
var state_61862__$1 = (function (){var statearr_62163 = state_61862;
(statearr_62163[(68)] = inst_61634__$1);

(statearr_62163[(70)] = inst_61635);

return statearr_62163;
})();
if(inst_61638){
var statearr_62164_63556 = state_61862__$1;
(statearr_62164_63556[(1)] = (109));

} else {
var statearr_62165_63557 = state_61862__$1;
(statearr_62165_63557[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (23))){
var inst_61244 = (state_61862[(53)]);
var inst_61285 = (state_61862[(10)]);
var inst_61288 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_61289 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_61244];
var inst_61290 = cljs.core.PersistentHashMap.fromArrays(inst_61288,inst_61289);
var inst_61291 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(inst_61285,inst_61290);
var inst_61301 = cljs.core.PersistentHashMap.EMPTY;
var state_61862__$1 = (function (){var statearr_62166 = state_61862;
(statearr_62166[(90)] = inst_61301);

(statearr_62166[(52)] = inst_61291);

return statearr_62166;
})();
if(cljs.core.truth_(waiting)){
var statearr_62167_63558 = state_61862__$1;
(statearr_62167_63558[(1)] = (26));

} else {
var statearr_62168_63559 = state_61862__$1;
(statearr_62168_63559[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (47))){
var inst_61346 = (state_61862[(55)]);
var state_61862__$1 = state_61862;
var statearr_62173_63566 = state_61862__$1;
(statearr_62173_63566[(2)] = inst_61346);

(statearr_62173_63566[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (158))){
var inst_61791 = (state_61862[(69)]);
var inst_61781 = (state_61862[(32)]);
var inst_61793 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_61791,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),inst_61781);
var state_61862__$1 = state_61862;
var statearr_62182_63567 = state_61862__$1;
(statearr_62182_63567[(2)] = inst_61793);

(statearr_62182_63567[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (35))){
var inst_61310 = (state_61862[(77)]);
var inst_61330 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61310);
var state_61862__$1 = state_61862;
var statearr_62183_63569 = state_61862__$1;
(statearr_62183_63569[(2)] = inst_61330);

(statearr_62183_63569[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (127))){
var inst_61657 = (state_61862[(8)]);
var inst_61620 = (state_61862[(22)]);
var inst_61622 = (state_61862[(62)]);
var inst_61635 = (state_61862[(70)]);
var inst_61621 = (state_61862[(65)]);
var inst_61619 = (state_61862[(9)]);
var inst_61285 = (state_61862[(10)]);
var inst_61684 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_61685 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_61657];
var inst_61686 = cljs.core.PersistentHashMap.fromArrays(inst_61684,inst_61685);
var inst_61687 = com.wsscode.pathom.trace.trace(inst_61285,inst_61686);
var tmp62174 = inst_61620;
var tmp62175 = inst_61622;
var tmp62176 = inst_61621;
var tmp62177 = inst_61619;
var inst_61619__$1 = tmp62177;
var inst_61620__$1 = tmp62174;
var inst_61621__$1 = tmp62176;
var inst_61622__$1 = tmp62175;
var inst_61623 = inst_61635;
var state_61862__$1 = (function (){var statearr_62189 = state_61862;
(statearr_62189[(22)] = inst_61620__$1);

(statearr_62189[(62)] = inst_61622__$1);

(statearr_62189[(63)] = inst_61623);

(statearr_62189[(91)] = inst_61687);

(statearr_62189[(65)] = inst_61621__$1);

(statearr_62189[(9)] = inst_61619__$1);

return statearr_62189;
})();
var statearr_62194_63573 = state_61862__$1;
(statearr_62194_63573[(2)] = null);

(statearr_62194_63573[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (82))){
var inst_61479 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62195_63574 = state_61862__$1;
(statearr_62195_63574[(2)] = inst_61479);

(statearr_62195_63574[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (76))){
var inst_61465 = (state_61862[(56)]);
var inst_61464 = (state_61862[(46)]);
var inst_61464__$1 = (state_61862[(2)]);
var inst_61465__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61464__$1,(0),null);
var inst_61468 = (inst_61465__$1 == null);
var inst_61469 = cljs.core.not(inst_61468);
var state_61862__$1 = (function (){var statearr_62196 = state_61862;
(statearr_62196[(56)] = inst_61465__$1);

(statearr_62196[(46)] = inst_61464__$1);

return statearr_62196;
})();
if(inst_61469){
var statearr_62197_63575 = state_61862__$1;
(statearr_62197_63575[(1)] = (77));

} else {
var statearr_62198_63576 = state_61862__$1;
(statearr_62198_63576[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (97))){
var inst_61267 = (state_61862[(59)]);
var inst_61592 = (state_61862[(67)]);
var inst_61587 = (state_61862[(2)]);
var inst_61588 = cljs.core.PersistentHashSet.EMPTY;
var inst_61590 = cljs.core.PersistentHashMap.EMPTY;
var inst_61591 = cljs.core.seq(inst_61267);
var inst_61592__$1 = cljs.core.first(inst_61591);
var inst_61593 = cljs.core.next(inst_61591);
var inst_61595 = (inst_61592__$1 == null);
var inst_61596 = cljs.core.not(inst_61595);
var state_61862__$1 = (function (){var statearr_62202 = state_61862;
(statearr_62202[(57)] = inst_61588);

(statearr_62202[(58)] = inst_61590);

(statearr_62202[(82)] = inst_61593);

(statearr_62202[(67)] = inst_61592__$1);

(statearr_62202[(61)] = inst_61587);

return statearr_62202;
})();
if(inst_61596){
var statearr_62203_63584 = state_61862__$1;
(statearr_62203_63584[(1)] = (98));

} else {
var statearr_62204_63586 = state_61862__$1;
(statearr_62204_63586[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (19))){
var inst_61266 = (state_61862[(76)]);
var inst_61266__$1 = (state_61862[(2)]);
var inst_61267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var state_61862__$1 = (function (){var statearr_62205 = state_61862;
(statearr_62205[(59)] = inst_61267);

(statearr_62205[(76)] = inst_61266__$1);

return statearr_62205;
})();
if(cljs.core.truth_(key_watchers)){
var statearr_62206_63588 = state_61862__$1;
(statearr_62206_63588[(1)] = (20));

} else {
var statearr_62207_63589 = state_61862__$1;
(statearr_62207_63589[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (57))){
var inst_61347 = (state_61862[(15)]);
var inst_61337 = (state_61862[(16)]);
var inst_61336 = (state_61862[(13)]);
var inst_61338 = (state_61862[(19)]);
var inst_61391 = (state_61862[(2)]);
var tmp62199 = inst_61337;
var tmp62200 = inst_61336;
var tmp62201 = inst_61338;
var inst_61335 = inst_61391;
var inst_61336__$1 = tmp62200;
var inst_61337__$1 = tmp62199;
var inst_61338__$1 = tmp62201;
var inst_61339 = inst_61347;
var state_61862__$1 = (function (){var statearr_62208 = state_61862;
(statearr_62208[(14)] = inst_61335);

(statearr_62208[(16)] = inst_61337__$1);

(statearr_62208[(20)] = inst_61339);

(statearr_62208[(13)] = inst_61336__$1);

(statearr_62208[(19)] = inst_61338__$1);

return statearr_62208;
})();
var statearr_62209_63615 = state_61862__$1;
(statearr_62209_63615[(2)] = null);

(statearr_62209_63615[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (68))){
var state_61862__$1 = state_61862;
var statearr_62210_63616 = state_61862__$1;
(statearr_62210_63616[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (11))){
var inst_61245 = (state_61862[(89)]);
var inst_61250 = inst_61245.cljs$lang$protocol_mask$partition0$;
var inst_61251 = (inst_61250 & (64));
var inst_61252 = inst_61245.cljs$core$ISeq$;
var inst_61253 = (cljs.core.PROTOCOL_SENTINEL === inst_61252);
var inst_61254 = ((inst_61251) || (inst_61253));
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61254)){
var statearr_62212_63617 = state_61862__$1;
(statearr_62212_63617[(1)] = (14));

} else {
var statearr_62213_63618 = state_61862__$1;
(statearr_62213_63618[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (115))){
var inst_61634 = (state_61862[(68)]);
var inst_61653 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61634);
var state_61862__$1 = state_61862;
var statearr_62214_63619 = state_61862__$1;
(statearr_62214_63619[(2)] = inst_61653);

(statearr_62214_63619[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (9))){
var state_61862__$1 = state_61862;
var statearr_62215_63620 = state_61862__$1;
(statearr_62215_63620[(2)] = null);

(statearr_62215_63620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (145))){
var inst_61744 = (state_61862[(31)]);
var inst_61745 = (state_61862[(24)]);
var inst_61744__$1 = (state_61862[(2)]);
var inst_61745__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61744__$1,(0),null);
var inst_61747 = (inst_61745__$1 == null);
var inst_61748 = cljs.core.not(inst_61747);
var state_61862__$1 = (function (){var statearr_62219 = state_61862;
(statearr_62219[(31)] = inst_61744__$1);

(statearr_62219[(24)] = inst_61745__$1);

return statearr_62219;
})();
if(inst_61748){
var statearr_62220_63622 = state_61862__$1;
(statearr_62220_63622[(1)] = (146));

} else {
var statearr_62222_63623 = state_61862__$1;
(statearr_62222_63623[(1)] = (147));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (5))){
var state_61862__$1 = state_61862;
var statearr_62223_63624 = state_61862__$1;
(statearr_62223_63624[(2)] = key_process_timeout_step);

(statearr_62223_63624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (112))){
var state_61862__$1 = state_61862;
var statearr_62224_63626 = state_61862__$1;
(statearr_62224_63626[(2)] = true);

(statearr_62224_63626[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (83))){
var inst_61465 = (state_61862[(56)]);
var inst_61484 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61465);
var state_61862__$1 = state_61862;
var statearr_62225_63627 = state_61862__$1;
(statearr_62225_63627[(2)] = inst_61484);

(statearr_62225_63627[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (138))){
var inst_61728 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62258_63628 = state_61862__$1;
(statearr_62258_63628[(2)] = inst_61728);

(statearr_62258_63628[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (14))){
var state_61862__$1 = state_61862;
var statearr_62260_63629 = state_61862__$1;
(statearr_62260_63629[(2)] = true);

(statearr_62260_63629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (45))){
var inst_61360 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62262_63630 = state_61862__$1;
(statearr_62262_63630[(2)] = inst_61360);

(statearr_62262_63630[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (53))){
var inst_61335 = (state_61862[(14)]);
var inst_61371 = (state_61862[(44)]);
var inst_61394 = cljs.core.contains_QMARK_(inst_61335,inst_61371);
var state_61862__$1 = state_61862;
if(inst_61394){
var statearr_62263_63631 = state_61862__$1;
(statearr_62263_63631[(1)] = (58));

} else {
var statearr_62264_63632 = state_61862__$1;
(statearr_62264_63632[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (78))){
var state_61862__$1 = state_61862;
var statearr_62265_63633 = state_61862__$1;
(statearr_62265_63633[(2)] = false);

(statearr_62265_63633[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (132))){
var inst_61695 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61695)){
var statearr_62266_63634 = state_61862__$1;
(statearr_62266_63634[(1)] = (133));

} else {
var statearr_62267_63635 = state_61862__$1;
(statearr_62267_63635[(1)] = (134));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (26))){
var state_61862__$1 = state_61862;
var statearr_62269_63636 = state_61862__$1;
(statearr_62269_63636[(2)] = waiting);

(statearr_62269_63636[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (123))){
var inst_61734 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62270_63637 = state_61862__$1;
(statearr_62270_63637[(2)] = inst_61734);

(statearr_62270_63637[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (140))){
var state_61862__$1 = state_61862;
var statearr_62274_63638 = state_61862__$1;
(statearr_62274_63638[(2)] = null);

(statearr_62274_63638[(1)] = (141));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (16))){
var inst_61258 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62275_63639 = state_61862__$1;
(statearr_62275_63639[(2)] = inst_61258);

(statearr_62275_63639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (133))){
var inst_61657 = (state_61862[(8)]);
var inst_61620 = (state_61862[(22)]);
var inst_61622 = (state_61862[(62)]);
var inst_61635 = (state_61862[(70)]);
var inst_61621 = (state_61862[(65)]);
var inst_61619 = (state_61862[(9)]);
var inst_61285 = (state_61862[(10)]);
var inst_61697 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_61698 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_61657];
var inst_61699 = cljs.core.PersistentHashMap.fromArrays(inst_61697,inst_61698);
var inst_61700 = com.wsscode.pathom.trace.trace(inst_61285,inst_61699);
var inst_61701 = com.wsscode.pathom.parser.watch_pending_key(inst_61285,inst_61657);
var inst_61702 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_61621,inst_61701);
var tmp62271 = inst_61620;
var tmp62272 = inst_61622;
var tmp62273 = inst_61619;
var inst_61619__$1 = tmp62273;
var inst_61620__$1 = tmp62271;
var inst_61621__$1 = inst_61702;
var inst_61622__$1 = tmp62272;
var inst_61623 = inst_61635;
var state_61862__$1 = (function (){var statearr_62279 = state_61862;
(statearr_62279[(92)] = inst_61700);

(statearr_62279[(22)] = inst_61620__$1);

(statearr_62279[(62)] = inst_61622__$1);

(statearr_62279[(63)] = inst_61623);

(statearr_62279[(65)] = inst_61621__$1);

(statearr_62279[(9)] = inst_61619__$1);

return statearr_62279;
})();
var statearr_62280_63640 = state_61862__$1;
(statearr_62280_63640[(2)] = null);

(statearr_62280_63640[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (163))){
var inst_61843 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62281_63641 = state_61862__$1;
(statearr_62281_63641[(2)] = inst_61843);

(statearr_62281_63641[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (81))){
var state_61862__$1 = state_61862;
var statearr_62282_63642 = state_61862__$1;
(statearr_62282_63642[(2)] = false);

(statearr_62282_63642[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (120))){
var inst_61854 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62283_63643 = state_61862__$1;
(statearr_62283_63643[(2)] = inst_61854);

(statearr_62283_63643[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (79))){
var inst_61482 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61482)){
var statearr_62287_63644 = state_61862__$1;
(statearr_62287_63644[(1)] = (83));

} else {
var statearr_62288_63645 = state_61862__$1;
(statearr_62288_63645[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (38))){
var inst_61339 = (state_61862[(20)]);
var inst_61346 = (state_61862[(55)]);
var inst_61345 = cljs.core.seq(inst_61339);
var inst_61346__$1 = cljs.core.first(inst_61345);
var inst_61347 = cljs.core.next(inst_61345);
var inst_61349 = (inst_61346__$1 == null);
var inst_61350 = cljs.core.not(inst_61349);
var state_61862__$1 = (function (){var statearr_62289 = state_61862;
(statearr_62289[(15)] = inst_61347);

(statearr_62289[(55)] = inst_61346__$1);

return statearr_62289;
})();
if(inst_61350){
var statearr_62290_63646 = state_61862__$1;
(statearr_62290_63646[(1)] = (40));

} else {
var statearr_62291_63647 = state_61862__$1;
(statearr_62291_63647[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (126))){
var inst_61620 = (state_61862[(22)]);
var inst_61622 = (state_61862[(62)]);
var inst_61635 = (state_61862[(70)]);
var inst_61621 = (state_61862[(65)]);
var inst_61679 = (state_61862[(2)]);
var tmp62284 = inst_61620;
var tmp62285 = inst_61622;
var tmp62286 = inst_61621;
var inst_61619 = inst_61679;
var inst_61620__$1 = tmp62284;
var inst_61621__$1 = tmp62286;
var inst_61622__$1 = tmp62285;
var inst_61623 = inst_61635;
var state_61862__$1 = (function (){var statearr_62293 = state_61862;
(statearr_62293[(22)] = inst_61620__$1);

(statearr_62293[(62)] = inst_61622__$1);

(statearr_62293[(63)] = inst_61623);

(statearr_62293[(65)] = inst_61621__$1);

(statearr_62293[(9)] = inst_61619);

return statearr_62293;
})();
var statearr_62294_63660 = state_61862__$1;
(statearr_62294_63660[(2)] = null);

(statearr_62294_63660[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (98))){
var inst_61592 = (state_61862[(67)]);
var inst_61598 = inst_61592.cljs$lang$protocol_mask$partition0$;
var inst_61599 = (inst_61598 & (64));
var inst_61600 = inst_61592.cljs$core$ISeq$;
var inst_61601 = (cljs.core.PROTOCOL_SENTINEL === inst_61600);
var inst_61602 = ((inst_61599) || (inst_61601));
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61602)){
var statearr_62297_63661 = state_61862__$1;
(statearr_62297_63661[(1)] = (101));

} else {
var statearr_62298_63662 = state_61862__$1;
(statearr_62298_63662[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (124))){
var inst_61659 = (state_61862[(7)]);
var inst_61619 = (state_61862[(9)]);
var inst_61676 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_61619,inst_61659,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_61862__$1 = state_61862;
var statearr_62299_63663 = state_61862__$1;
(statearr_62299_63663[(2)] = inst_61676);

(statearr_62299_63663[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (87))){
var inst_61335 = (state_61862[(14)]);
var inst_61501 = (state_61862[(47)]);
var inst_61337 = (state_61862[(16)]);
var inst_61496 = (state_61862[(51)]);
var inst_61338 = (state_61862[(19)]);
var inst_61556 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(inst_61337,inst_61496);
var inst_61557 = cljs.core.PersistentVector.EMPTY;
var tmp62295 = inst_61335;
var tmp62296 = inst_61338;
var inst_61335__$1 = tmp62295;
var inst_61336 = inst_61501;
var inst_61337__$1 = inst_61556;
var inst_61338__$1 = tmp62296;
var inst_61339 = inst_61557;
var state_61862__$1 = (function (){var statearr_62301 = state_61862;
(statearr_62301[(14)] = inst_61335__$1);

(statearr_62301[(16)] = inst_61337__$1);

(statearr_62301[(20)] = inst_61339);

(statearr_62301[(13)] = inst_61336);

(statearr_62301[(19)] = inst_61338__$1);

return statearr_62301;
})();
var statearr_62302_63682 = state_61862__$1;
(statearr_62302_63682[(2)] = null);

(statearr_62302_63682[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (160))){
var inst_61783 = (state_61862[(35)]);
var inst_61770 = (state_61862[(36)]);
var inst_61782 = (state_61862[(37)]);
var inst_61784 = (state_61862[(38)]);
var inst_61282 = (state_61862[(75)]);
var inst_61771 = (state_61862[(39)]);
var inst_61744 = (state_61862[(31)]);
var inst_61267 = (state_61862[(59)]);
var inst_61772 = (state_61862[(40)]);
var inst_61785 = (state_61862[(41)]);
var inst_61266 = (state_61862[(76)]);
var inst_61593 = (state_61862[(82)]);
var inst_61781 = (state_61862[(32)]);
var inst_61656 = (state_61862[(72)]);
var inst_61657 = (state_61862[(8)]);
var inst_61614 = (state_61862[(60)]);
var inst_61592 = (state_61862[(67)]);
var inst_61767 = (state_61862[(33)]);
var inst_61622 = (state_61862[(62)]);
var inst_61634 = (state_61862[(68)]);
var inst_61239 = (state_61862[(25)]);
var inst_61623 = (state_61862[(63)]);
var inst_61276 = (state_61862[(18)]);
var inst_61244 = (state_61862[(53)]);
var inst_61635 = (state_61862[(70)]);
var inst_61621 = (state_61862[(65)]);
var inst_61769 = (state_61862[(34)]);
var inst_61619 = (state_61862[(9)]);
var inst_61285 = (state_61862[(10)]);
var inst_61797 = (state_61862[(2)]);
var inst_61798 = com.wsscode.pathom.trace.trace(inst_61285,inst_61797);
var inst_61800 = new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031).cljs$core$IFn$_invoke$arity$1(inst_61285);
var inst_61801 = (function (){var res = inst_61619;
var vec__61578 = inst_61267;
var map__61741 = inst_61767;
var map__61234 = inst_61266;
var p = inst_61772;
var seq__61579 = inst_61593;
var merge_result_QMARK_ = inst_61770;
var key_watchers__$1 = inst_61276;
var first__61580 = inst_61592;
var vec__61627 = inst_61623;
var children = inst_61267;
var response_value = inst_61784;
var processing = inst_61621;
var key = inst_61657;
var key_process_timeout__$1 = inst_61244;
var key_as = inst_61783;
var seq__61628 = inst_61635;
var map__61630 = inst_61656;
var ast = inst_61656;
var key_process_timeout_step__$1 = inst_61239;
var provides_SINGLEQUOTE_ = inst_61782;
var msg = inst_61767;
var env__$1 = inst_61285;
var map__61581 = inst_61614;
var vec__61738 = inst_61744;
var waiting__$1 = inst_61785;
var path_entity = inst_61282;
var first__61629 = inst_61634;
var key_iterations = inst_61622;
var G__61577 = inst_61623;
var tail = inst_61635;
var waiting_SINGLEQUOTE_ = inst_61781;
var error = inst_61771;
var provides = inst_61769;
return ((function (res,vec__61578,map__61741,map__61234,p,seq__61579,merge_result_QMARK_,key_watchers__$1,first__61580,vec__61627,children,response_value,processing,key,key_process_timeout__$1,key_as,seq__61628,map__61630,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,map__61581,vec__61738,waiting__$1,path_entity,first__61629,key_iterations,G__61577,tail,waiting_SINGLEQUOTE_,error,provides,inst_61783,inst_61770,inst_61782,inst_61784,inst_61282,inst_61771,inst_61744,inst_61267,inst_61772,inst_61785,inst_61266,inst_61593,inst_61781,inst_61656,inst_61657,inst_61614,inst_61592,inst_61767,inst_61622,inst_61634,inst_61239,inst_61623,inst_61276,inst_61244,inst_61635,inst_61621,inst_61769,inst_61619,inst_61285,inst_61797,inst_61798,inst_61800,state_val_61863,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p1__61220_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_value,p1__61220_SHARP_], 0));
});
;})(res,vec__61578,map__61741,map__61234,p,seq__61579,merge_result_QMARK_,key_watchers__$1,first__61580,vec__61627,children,response_value,processing,key,key_process_timeout__$1,key_as,seq__61628,map__61630,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,map__61581,vec__61738,waiting__$1,path_entity,first__61629,key_iterations,G__61577,tail,waiting_SINGLEQUOTE_,error,provides,inst_61783,inst_61770,inst_61782,inst_61784,inst_61282,inst_61771,inst_61744,inst_61267,inst_61772,inst_61785,inst_61266,inst_61593,inst_61781,inst_61656,inst_61657,inst_61614,inst_61592,inst_61767,inst_61622,inst_61634,inst_61239,inst_61623,inst_61276,inst_61244,inst_61635,inst_61621,inst_61769,inst_61619,inst_61285,inst_61797,inst_61798,inst_61800,state_val_61863,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_61802 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(inst_61800,inst_61801);
var inst_61803 = com.wsscode.pathom.parser.parallel_flush_watchers(inst_61285,inst_61276,inst_61782,inst_61771);
var state_61862__$1 = (function (){var statearr_62305 = state_61862;
(statearr_62305[(93)] = inst_61798);

(statearr_62305[(94)] = inst_61803);

(statearr_62305[(95)] = inst_61802);

return statearr_62305;
})();
if(cljs.core.truth_(inst_61770)){
var statearr_62306_63684 = state_61862__$1;
(statearr_62306_63684[(1)] = (161));

} else {
var statearr_62307_63685 = state_61862__$1;
(statearr_62307_63685[(1)] = (162));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (30))){
var state_61862__$1 = state_61862;
var statearr_62312_63686 = state_61862__$1;
(statearr_62312_63686[(2)] = false);

(statearr_62312_63686[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (73))){
var inst_61337 = (state_61862[(16)]);
var inst_61462 = cljs.core.vec(inst_61337);
var state_61862__$1 = state_61862;
return cljs.core.async.ioc_alts_BANG_(state_61862__$1,(76),inst_61462);
} else {
if((state_val_61863 === (96))){
var inst_61585 = cljs.core.PersistentHashSet.EMPTY;
var state_61862__$1 = state_61862;
var statearr_62313_63689 = state_61862__$1;
(statearr_62313_63689[(2)] = inst_61585);

(statearr_62313_63689[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (10))){
var inst_61245 = (state_61862[(89)]);
var inst_61244 = (state_61862[(2)]);
var inst_61245__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_61247 = (inst_61245__$1 == null);
var inst_61248 = cljs.core.not(inst_61247);
var state_61862__$1 = (function (){var statearr_62314 = state_61862;
(statearr_62314[(89)] = inst_61245__$1);

(statearr_62314[(53)] = inst_61244);

return statearr_62314;
})();
if(inst_61248){
var statearr_62315_63707 = state_61862__$1;
(statearr_62315_63707[(1)] = (11));

} else {
var statearr_62316_63708 = state_61862__$1;
(statearr_62316_63708[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (18))){
var inst_61245 = (state_61862[(89)]);
var state_61862__$1 = state_61862;
var statearr_62317_63709 = state_61862__$1;
(statearr_62317_63709[(2)] = inst_61245);

(statearr_62317_63709[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (105))){
var inst_61592 = (state_61862[(67)]);
var state_61862__$1 = state_61862;
var statearr_62318_63710 = state_61862__$1;
(statearr_62318_63710[(2)] = inst_61592);

(statearr_62318_63710[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (52))){
var inst_61335 = (state_61862[(14)]);
var inst_61371 = (state_61862[(44)]);
var inst_61369 = (state_61862[(12)]);
var inst_61285 = (state_61862[(10)]);
var inst_61380 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_61381 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_61369,max_key_iterations];
var inst_61382 = cljs.core.PersistentHashMap.fromArrays(inst_61380,inst_61381);
var inst_61383 = com.wsscode.pathom.trace.trace(inst_61285,inst_61382);
var inst_61385 = cljs.core.contains_QMARK_(inst_61335,inst_61371);
var inst_61386 = (!(inst_61385));
var state_61862__$1 = (function (){var statearr_62319 = state_61862;
(statearr_62319[(96)] = inst_61383);

return statearr_62319;
})();
if(inst_61386){
var statearr_62320_63711 = state_61862__$1;
(statearr_62320_63711[(1)] = (55));

} else {
var statearr_62321_63712 = state_61862__$1;
(statearr_62321_63712[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (114))){
var inst_61648 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62326_63713 = state_61862__$1;
(statearr_62326_63713[(2)] = inst_61648);

(statearr_62326_63713[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (147))){
var state_61862__$1 = state_61862;
var statearr_62330_63714 = state_61862__$1;
(statearr_62330_63714[(2)] = false);

(statearr_62330_63714[(1)] = (148));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (67))){
var inst_61335 = (state_61862[(14)]);
var inst_61347 = (state_61862[(15)]);
var inst_61337 = (state_61862[(16)]);
var inst_61369 = (state_61862[(12)]);
var inst_61336 = (state_61862[(13)]);
var inst_61338 = (state_61862[(19)]);
var inst_61285 = (state_61862[(10)]);
var inst_61427 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_61428 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_61369];
var inst_61429 = cljs.core.PersistentHashMap.fromArrays(inst_61427,inst_61428);
var inst_61430 = com.wsscode.pathom.trace.trace(inst_61285,inst_61429);
var tmp62322 = inst_61335;
var tmp62323 = inst_61337;
var tmp62324 = inst_61336;
var tmp62325 = inst_61338;
var inst_61335__$1 = tmp62322;
var inst_61336__$1 = tmp62324;
var inst_61337__$1 = tmp62323;
var inst_61338__$1 = tmp62325;
var inst_61339 = inst_61347;
var state_61862__$1 = (function (){var statearr_62335 = state_61862;
(statearr_62335[(14)] = inst_61335__$1);

(statearr_62335[(16)] = inst_61337__$1);

(statearr_62335[(97)] = inst_61430);

(statearr_62335[(20)] = inst_61339);

(statearr_62335[(13)] = inst_61336__$1);

(statearr_62335[(19)] = inst_61338__$1);

return statearr_62335;
})();
var statearr_62336_63715 = state_61862__$1;
(statearr_62336_63715[(2)] = null);

(statearr_62336_63715[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (161))){
var inst_61783 = (state_61862[(35)]);
var inst_61782 = (state_61862[(37)]);
var inst_61784 = (state_61862[(38)]);
var inst_61785 = (state_61862[(41)]);
var inst_61622 = (state_61862[(62)]);
var inst_61621 = (state_61862[(65)]);
var inst_61619 = (state_61862[(9)]);
var inst_61285 = (state_61862[(10)]);
var inst_61808 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_61809 = [new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result","com.wsscode.pathom.parser/merge-result",870398873),inst_61784];
var inst_61810 = cljs.core.PersistentHashMap.fromArrays(inst_61808,inst_61809);
var inst_61811 = com.wsscode.pathom.trace.trace(inst_61285,inst_61810);
var inst_61812 = cljs.core.vals(inst_61784);
var inst_61813 = cljs.core.first(inst_61812);
var inst_61814 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_61619,inst_61783,inst_61813);
var inst_61815 = cljs.core.PersistentHashSet.EMPTY;
var inst_61816 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_61782);
var inst_61817 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_61815,inst_61816,inst_61785);
var inst_61818 = cljs.core.PersistentVector.EMPTY;
var tmp62327 = inst_61622;
var tmp62328 = inst_61621;
var inst_61619__$1 = inst_61814;
var inst_61620 = inst_61817;
var inst_61621__$1 = tmp62328;
var inst_61622__$1 = tmp62327;
var inst_61623 = inst_61818;
var state_61862__$1 = (function (){var statearr_62338 = state_61862;
(statearr_62338[(98)] = inst_61811);

(statearr_62338[(22)] = inst_61620);

(statearr_62338[(62)] = inst_61622__$1);

(statearr_62338[(63)] = inst_61623);

(statearr_62338[(65)] = inst_61621__$1);

(statearr_62338[(9)] = inst_61619__$1);

return statearr_62338;
})();
var statearr_62339_63723 = state_61862__$1;
(statearr_62339_63723[(2)] = null);

(statearr_62339_63723[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (71))){
var state_61862__$1 = state_61862;
var statearr_62340_63724 = state_61862__$1;
(statearr_62340_63724[(2)] = null);

(statearr_62340_63724[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (42))){
var inst_61363 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61363)){
var statearr_62341_63725 = state_61862__$1;
(statearr_62341_63725[(1)] = (46));

} else {
var statearr_62342_63726 = state_61862__$1;
(statearr_62342_63726[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (80))){
var state_61862__$1 = state_61862;
var statearr_62343_63727 = state_61862__$1;
(statearr_62343_63727[(2)] = true);

(statearr_62343_63727[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (37))){
var inst_61306 = (state_61862[(85)]);
var inst_61301 = (state_61862[(90)]);
var inst_61333 = (state_61862[(73)]);
var inst_61267 = (state_61862[(59)]);
var inst_61307 = (state_61862[(86)]);
var inst_61308 = (state_61862[(87)]);
var inst_61333__$1 = (state_61862[(2)]);
var inst_61334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61333__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_61335 = inst_61301;
var inst_61336 = inst_61306;
var inst_61337 = inst_61307;
var inst_61338 = inst_61308;
var inst_61339 = inst_61267;
var state_61862__$1 = (function (){var statearr_62344 = state_61862;
(statearr_62344[(14)] = inst_61335);

(statearr_62344[(73)] = inst_61333__$1);

(statearr_62344[(99)] = inst_61334);

(statearr_62344[(16)] = inst_61337);

(statearr_62344[(20)] = inst_61339);

(statearr_62344[(13)] = inst_61336);

(statearr_62344[(19)] = inst_61338);

return statearr_62344;
})();
var statearr_62345_63728 = state_61862__$1;
(statearr_62345_63728[(2)] = null);

(statearr_62345_63728[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (63))){
var inst_61414 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
if(cljs.core.truth_(inst_61414)){
var statearr_62346_63732 = state_61862__$1;
(statearr_62346_63732[(1)] = (64));

} else {
var statearr_62350_63734 = state_61862__$1;
(statearr_62350_63734[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (94))){
var inst_61554 = (state_61862[(2)]);
var state_61862__$1 = state_61862;
var statearr_62351_63738 = state_61862__$1;
(statearr_62351_63738[(2)] = inst_61554);

(statearr_62351_63738[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (8))){
var inst_61239 = (state_61862[(25)]);
var inst_61241 = (inst_61239.cljs$core$IFn$_invoke$arity$2 ? inst_61239.cljs$core$IFn$_invoke$arity$2(env,key_process_timeout) : inst_61239.call(null,env,key_process_timeout));
var state_61862__$1 = state_61862;
var statearr_62352_63749 = state_61862__$1;
(statearr_62352_63749[(2)] = inst_61241);

(statearr_62352_63749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (49))){
var inst_61368 = (state_61862[(17)]);
var inst_61369 = (state_61862[(12)]);
var inst_61338 = (state_61862[(19)]);
var inst_61285 = (state_61862[(10)]);
var inst_61371 = com.wsscode.pathom.parser.ast__GT_out_key(inst_61368);
var inst_61372 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_61373 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_61369];
var inst_61374 = cljs.core.PersistentHashMap.fromArrays(inst_61372,inst_61373);
var inst_61375 = com.wsscode.pathom.trace.trace(inst_61285,inst_61374);
var inst_61376 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_61338,inst_61369,(0));
var inst_61377 = (max_key_iterations - (1));
var inst_61378 = (inst_61376 > inst_61377);
var state_61862__$1 = (function (){var statearr_62353 = state_61862;
(statearr_62353[(44)] = inst_61371);

(statearr_62353[(100)] = inst_61375);

return statearr_62353;
})();
if(cljs.core.truth_(inst_61378)){
var statearr_62354_63751 = state_61862__$1;
(statearr_62354_63751[(1)] = (52));

} else {
var statearr_62355_63752 = state_61862__$1;
(statearr_62355_63752[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61863 === (84))){
var inst_61465 = (state_61862[(56)]);
var state_61862__$1 = state_61862;
var statearr_62360_63753 = state_61862__$1;
(statearr_62360_63753[(2)] = inst_61465);

(statearr_62360_63753[(1)] = (85));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
;
return ((function (switch__52035__auto__,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function() {
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__52036__auto____0 = (function (){
var statearr_62361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62361[(0)] = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__52036__auto__);

(statearr_62361[(1)] = (1));

return statearr_62361;
});
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__52036__auto____1 = (function (state_61862){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_61862);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e62365){if((e62365 instanceof Object)){
var ex__52039__auto__ = e62365;
var statearr_62366_63766 = state_61862;
(statearr_62366_63766[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63767 = state_61862;
state_61862 = G__63767;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__52036__auto__ = function(state_61862){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__52036__auto____1.call(this,state_61862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__52036__auto____0;
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__52036__auto____1;
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var state__52133__auto__ = (function (){var statearr_62367 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_62367[(6)] = c__52131__auto__);

return statearr_62367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,map__61226,map__61226__$1,read,mutate,map__61227,map__61227__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return c__52131__auto__;
});
com.wsscode.pathom.parser.parallel_parser = (function com$wsscode$pathom$parser$parallel_parser(p__62368){
var map__62369 = p__62368;
var map__62369__$1 = (((((!((map__62369 == null))))?(((((map__62369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62369):map__62369);
var pconfig = map__62369__$1;
var add_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62369__$1,new cljs.core.Keyword(null,"add-error","add-error",-1195330235));
return ((function (map__62369,map__62369__$1,pconfig,add_error){
return (function com$wsscode$pathom$parser$parallel_parser_$_self(p__62371,tx){
var map__62372 = p__62371;
var map__62372__$1 = (((((!((map__62372 == null))))?(((((map__62372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62372):map__62372);
var env = map__62372__$1;
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62372__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),(60000));
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,map__62372,map__62372__$1,env,key_process_timeout,map__62369,map__62369__$1,pconfig,add_error){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,map__62372,map__62372__$1,env,key_process_timeout,map__62369,map__62369__$1,pconfig,add_error){
return (function (state_62421){
var state_val_62422 = (state_62421[(1)]);
if((state_val_62422 === (7))){
var inst_62403 = (state_62421[(2)]);
var state_62421__$1 = state_62421;
return cljs.core.async.ioc_alts_BANG_(state_62421__$1,(8),inst_62403);
} else {
if((state_val_62422 === (1))){
var state_62421__$1 = state_62421;
var statearr_62423_63768 = state_62421__$1;
(statearr_62423_63768[(2)] = null);

(statearr_62423_63768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62422 === (4))){
var inst_62391 = (state_62421[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_62421,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_62390 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parallel_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),key_process_timeout], 0));
var inst_62391__$1 = com.wsscode.pathom.parser.call_parallel_parser(pconfig,inst_62390,tx);
var inst_62394 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62395 = [inst_62391__$1];
var inst_62396 = (new cljs.core.PersistentVector(null,1,(5),inst_62394,inst_62395,null));
var state_62421__$1 = (function (){var statearr_62424 = state_62421;
(statearr_62424[(8)] = inst_62396);

(statearr_62424[(7)] = inst_62391__$1);

return statearr_62424;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_62425_63769 = state_62421__$1;
(statearr_62425_63769[(1)] = (5));

} else {
var statearr_62426_63770 = state_62421__$1;
(statearr_62426_63770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62422 === (6))){
var inst_62396 = (state_62421[(8)]);
var state_62421__$1 = state_62421;
var statearr_62427_63771 = state_62421__$1;
(statearr_62427_63771[(2)] = inst_62396);

(statearr_62427_63771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62422 === (3))){
var inst_62382 = (state_62421[(2)]);
var state_62421__$1 = state_62421;
var statearr_62428_63772 = state_62421__$1;
(statearr_62428_63772[(2)] = inst_62382);


cljs.core.async.impl.ioc_helpers.process_exception(state_62421__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62422 === (2))){
var inst_62419 = (state_62421[(2)]);
var state_62421__$1 = state_62421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62421__$1,inst_62419);
} else {
if((state_val_62422 === (11))){
var inst_62417 = (state_62421[(2)]);
var state_62421__$1 = state_62421;
var statearr_62429_63773 = state_62421__$1;
(statearr_62429_63773[(2)] = inst_62417);


cljs.core.async.impl.ioc_helpers.process_exception(state_62421__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62422 === (9))){
var inst_62406 = (state_62421[(9)]);
var state_62421__$1 = state_62421;
var statearr_62434_63774 = state_62421__$1;
(statearr_62434_63774[(2)] = inst_62406);

(statearr_62434_63774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62422 === (5))){
var inst_62396 = (state_62421[(8)]);
var inst_62399 = cljs.core.async.timeout(key_process_timeout);
var inst_62400 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_62396,inst_62399);
var state_62421__$1 = state_62421;
var statearr_62435_63812 = state_62421__$1;
(statearr_62435_63812[(2)] = inst_62400);

(statearr_62435_63812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62422 === (10))){
var inst_62411 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_62412 = [key_process_timeout];
var inst_62413 = cljs.core.PersistentHashMap.fromArrays(inst_62411,inst_62412);
var inst_62414 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Parallel read timeout",inst_62413);
var inst_62415 = (add_error.cljs$core$IFn$_invoke$arity$2 ? add_error.cljs$core$IFn$_invoke$arity$2(env,inst_62414) : add_error.call(null,env,inst_62414));
var state_62421__$1 = state_62421;
var statearr_62436_63815 = state_62421__$1;
(statearr_62436_63815[(2)] = inst_62415);

(statearr_62436_63815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62422 === (8))){
var inst_62391 = (state_62421[(7)]);
var inst_62405 = (state_62421[(2)]);
var inst_62406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62405,(0),null);
var inst_62407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62405,(1),null);
var inst_62408 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62391,inst_62407);
var state_62421__$1 = (function (){var statearr_62438 = state_62421;
(statearr_62438[(9)] = inst_62406);

return statearr_62438;
})();
if(inst_62408){
var statearr_62439_63818 = state_62421__$1;
(statearr_62439_63818[(1)] = (9));

} else {
var statearr_62440_63820 = state_62421__$1;
(statearr_62440_63820[(1)] = (10));

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
});})(c__52131__auto__,map__62372,map__62372__$1,env,key_process_timeout,map__62369,map__62369__$1,pconfig,add_error))
;
return ((function (switch__52035__auto__,c__52131__auto__,map__62372,map__62372__$1,env,key_process_timeout,map__62369,map__62369__$1,pconfig,add_error){
return (function() {
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__52036__auto__ = null;
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__52036__auto____0 = (function (){
var statearr_62442 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62442[(0)] = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__52036__auto__);

(statearr_62442[(1)] = (1));

return statearr_62442;
});
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__52036__auto____1 = (function (state_62421){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_62421);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e62446){if((e62446 instanceof Object)){
var ex__52039__auto__ = e62446;
var statearr_62447_63824 = state_62421;
(statearr_62447_63824[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63825 = state_62421;
state_62421 = G__63825;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__52036__auto__ = function(state_62421){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__52036__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__52036__auto____1.call(this,state_62421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__52036__auto____0;
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__52036__auto____1;
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,map__62372,map__62372__$1,env,key_process_timeout,map__62369,map__62369__$1,pconfig,add_error))
})();
var state__52133__auto__ = (function (){var statearr_62448 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_62448[(6)] = c__52131__auto__);

return statearr_62448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,map__62372,map__62372__$1,env,key_process_timeout,map__62369,map__62369__$1,pconfig,add_error))
);

return c__52131__auto__;
});
;})(map__62369,map__62369__$1,pconfig,add_error))
});
com.wsscode.pathom.parser.unique_ident_QMARK_ = (function com$wsscode$pathom$parser$unique_ident_QMARK_(x){
return ((cljs.core.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(x))));
});

//# sourceMappingURL=com.wsscode.pathom.parser.js.map
