goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56553 = arguments.length;
var i__4731__auto___56554 = (0);
while(true){
if((i__4731__auto___56554 < len__4730__auto___56553)){
args__4736__auto__.push((arguments[i__4731__auto___56554]));

var G__56555 = (i__4731__auto___56554 + (1));
i__4731__auto___56554 = G__56555;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq56382){
var G__56383 = cljs.core.first(seq56382);
var seq56382__$1 = cljs.core.next(seq56382);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56383,seq56382__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__56386){
var map__56387 = p__56386;
var map__56387__$1 = (((((!((map__56387 == null))))?(((((map__56387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56387):map__56387);
var src = map__56387__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56387__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56387__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__56391 = cljs.core.seq(sources);
var chunk__56392 = null;
var count__56393 = (0);
var i__56394 = (0);
while(true){
if((i__56394 < count__56393)){
var map__56405 = chunk__56392.cljs$core$IIndexed$_nth$arity$2(null,i__56394);
var map__56405__$1 = (((((!((map__56405 == null))))?(((((map__56405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56405):map__56405);
var src = map__56405__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56405__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56405__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56405__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56405__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__56556 = seq__56391;
var G__56557 = chunk__56392;
var G__56558 = count__56393;
var G__56559 = (i__56394 + (1));
seq__56391 = G__56556;
chunk__56392 = G__56557;
count__56393 = G__56558;
i__56394 = G__56559;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56391);
if(temp__5735__auto__){
var seq__56391__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56391__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56391__$1);
var G__56560 = cljs.core.chunk_rest(seq__56391__$1);
var G__56561 = c__4550__auto__;
var G__56562 = cljs.core.count(c__4550__auto__);
var G__56563 = (0);
seq__56391 = G__56560;
chunk__56392 = G__56561;
count__56393 = G__56562;
i__56394 = G__56563;
continue;
} else {
var map__56407 = cljs.core.first(seq__56391__$1);
var map__56407__$1 = (((((!((map__56407 == null))))?(((((map__56407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56407):map__56407);
var src = map__56407__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56407__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56407__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56407__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56407__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__56564 = cljs.core.next(seq__56391__$1);
var G__56565 = null;
var G__56566 = (0);
var G__56567 = (0);
seq__56391 = G__56564;
chunk__56392 = G__56565;
count__56393 = G__56566;
i__56394 = G__56567;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__56412 = cljs.core.seq(js_requires);
var chunk__56413 = null;
var count__56414 = (0);
var i__56415 = (0);
while(true){
if((i__56415 < count__56414)){
var js_ns = chunk__56413.cljs$core$IIndexed$_nth$arity$2(null,i__56415);
var require_str_56568 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56568);


var G__56569 = seq__56412;
var G__56570 = chunk__56413;
var G__56571 = count__56414;
var G__56572 = (i__56415 + (1));
seq__56412 = G__56569;
chunk__56413 = G__56570;
count__56414 = G__56571;
i__56415 = G__56572;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56412);
if(temp__5735__auto__){
var seq__56412__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56412__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56412__$1);
var G__56573 = cljs.core.chunk_rest(seq__56412__$1);
var G__56574 = c__4550__auto__;
var G__56575 = cljs.core.count(c__4550__auto__);
var G__56576 = (0);
seq__56412 = G__56573;
chunk__56413 = G__56574;
count__56414 = G__56575;
i__56415 = G__56576;
continue;
} else {
var js_ns = cljs.core.first(seq__56412__$1);
var require_str_56577 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56577);


var G__56578 = cljs.core.next(seq__56412__$1);
var G__56579 = null;
var G__56580 = (0);
var G__56581 = (0);
seq__56412 = G__56578;
chunk__56413 = G__56579;
count__56414 = G__56580;
i__56415 = G__56581;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__56417 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__56417) : callback.call(null,G__56417));
} else {
var G__56418 = shadow.cljs.devtools.client.env.files_url();
var G__56419 = ((function (G__56418){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__56418))
;
var G__56420 = "POST";
var G__56421 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__56422 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__56418,G__56419,G__56420,G__56421,G__56422);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__56424){
var map__56425 = p__56424;
var map__56425__$1 = (((((!((map__56425 == null))))?(((((map__56425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56425):map__56425);
var msg = map__56425__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56425__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56425__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__56427 = info;
var map__56427__$1 = (((((!((map__56427 == null))))?(((((map__56427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56427):map__56427);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56427__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56427__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__56427,map__56427__$1,sources,compiled,map__56425,map__56425__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56429(s__56430){
return (new cljs.core.LazySeq(null,((function (map__56427,map__56427__$1,sources,compiled,map__56425,map__56425__$1,msg,info,reload_info){
return (function (){
var s__56430__$1 = s__56430;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56430__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__56435 = cljs.core.first(xs__6292__auto__);
var map__56435__$1 = (((((!((map__56435 == null))))?(((((map__56435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56435):map__56435);
var src = map__56435__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56435__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56435__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__56430__$1,map__56435,map__56435__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__56427,map__56427__$1,sources,compiled,map__56425,map__56425__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56429_$_iter__56431(s__56432){
return (new cljs.core.LazySeq(null,((function (s__56430__$1,map__56435,map__56435__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__56427,map__56427__$1,sources,compiled,map__56425,map__56425__$1,msg,info,reload_info){
return (function (){
var s__56432__$1 = s__56432;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56432__$1);
if(temp__5735__auto____$1){
var s__56432__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56432__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__56432__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__56434 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__56433 = (0);
while(true){
if((i__56433 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__56433);
cljs.core.chunk_append(b__56434,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__56582 = (i__56433 + (1));
i__56433 = G__56582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56434),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56429_$_iter__56431(cljs.core.chunk_rest(s__56432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56434),null);
}
} else {
var warning = cljs.core.first(s__56432__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56429_$_iter__56431(cljs.core.rest(s__56432__$2)));
}
} else {
return null;
}
break;
}
});})(s__56430__$1,map__56435,map__56435__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__56427,map__56427__$1,sources,compiled,map__56425,map__56425__$1,msg,info,reload_info))
,null,null));
});})(s__56430__$1,map__56435,map__56435__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__56427,map__56427__$1,sources,compiled,map__56425,map__56425__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56429(cljs.core.rest(s__56430__$1)));
} else {
var G__56583 = cljs.core.rest(s__56430__$1);
s__56430__$1 = G__56583;
continue;
}
} else {
var G__56584 = cljs.core.rest(s__56430__$1);
s__56430__$1 = G__56584;
continue;
}
} else {
return null;
}
break;
}
});})(map__56427,map__56427__$1,sources,compiled,map__56425,map__56425__$1,msg,info,reload_info))
,null,null));
});})(map__56427,map__56427__$1,sources,compiled,map__56425,map__56425__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__56437_56585 = cljs.core.seq(warnings);
var chunk__56438_56586 = null;
var count__56439_56587 = (0);
var i__56440_56588 = (0);
while(true){
if((i__56440_56588 < count__56439_56587)){
var map__56445_56589 = chunk__56438_56586.cljs$core$IIndexed$_nth$arity$2(null,i__56440_56588);
var map__56445_56590__$1 = (((((!((map__56445_56589 == null))))?(((((map__56445_56589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56445_56589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56445_56589):map__56445_56589);
var w_56591 = map__56445_56590__$1;
var msg_56592__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56445_56590__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56445_56590__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56445_56590__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56445_56590__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56595)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56593),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56594),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56592__$1)].join(''));


var G__56596 = seq__56437_56585;
var G__56597 = chunk__56438_56586;
var G__56598 = count__56439_56587;
var G__56599 = (i__56440_56588 + (1));
seq__56437_56585 = G__56596;
chunk__56438_56586 = G__56597;
count__56439_56587 = G__56598;
i__56440_56588 = G__56599;
continue;
} else {
var temp__5735__auto___56600 = cljs.core.seq(seq__56437_56585);
if(temp__5735__auto___56600){
var seq__56437_56601__$1 = temp__5735__auto___56600;
if(cljs.core.chunked_seq_QMARK_(seq__56437_56601__$1)){
var c__4550__auto___56602 = cljs.core.chunk_first(seq__56437_56601__$1);
var G__56603 = cljs.core.chunk_rest(seq__56437_56601__$1);
var G__56604 = c__4550__auto___56602;
var G__56605 = cljs.core.count(c__4550__auto___56602);
var G__56606 = (0);
seq__56437_56585 = G__56603;
chunk__56438_56586 = G__56604;
count__56439_56587 = G__56605;
i__56440_56588 = G__56606;
continue;
} else {
var map__56447_56607 = cljs.core.first(seq__56437_56601__$1);
var map__56447_56608__$1 = (((((!((map__56447_56607 == null))))?(((((map__56447_56607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56447_56607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56447_56607):map__56447_56607);
var w_56609 = map__56447_56608__$1;
var msg_56610__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56447_56608__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56447_56608__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56447_56608__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56447_56608__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56613)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56611),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56612),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56610__$1)].join(''));


var G__56619 = cljs.core.next(seq__56437_56601__$1);
var G__56620 = null;
var G__56621 = (0);
var G__56622 = (0);
seq__56437_56585 = G__56619;
chunk__56438_56586 = G__56620;
count__56439_56587 = G__56621;
i__56440_56588 = G__56622;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56427,map__56427__$1,sources,compiled,warnings,map__56425,map__56425__$1,msg,info,reload_info){
return (function (p__56449){
var map__56450 = p__56449;
var map__56450__$1 = (((((!((map__56450 == null))))?(((((map__56450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56450):map__56450);
var src = map__56450__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56450__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56450__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__56427,map__56427__$1,sources,compiled,warnings,map__56425,map__56425__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56427,map__56427__$1,sources,compiled,warnings,map__56425,map__56425__$1,msg,info,reload_info){
return (function (p__56452){
var map__56453 = p__56452;
var map__56453__$1 = (((((!((map__56453 == null))))?(((((map__56453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56453):map__56453);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56453__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__56427,map__56427__$1,sources,compiled,warnings,map__56425,map__56425__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56427,map__56427__$1,sources,compiled,warnings,map__56425,map__56425__$1,msg,info,reload_info){
return (function (p__56455){
var map__56456 = p__56455;
var map__56456__$1 = (((((!((map__56456 == null))))?(((((map__56456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56456):map__56456);
var rc = map__56456__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56456__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__56427,map__56427__$1,sources,compiled,warnings,map__56425,map__56425__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__56427,map__56427__$1,sources,compiled,warnings,map__56425,map__56425__$1,msg,info,reload_info){
return (function (p1__56423_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__56423_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__56427,map__56427__$1,sources,compiled,warnings,map__56425,map__56425__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__56458){
var map__56459 = p__56458;
var map__56459__$1 = (((((!((map__56459 == null))))?(((((map__56459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56459):map__56459);
var msg = map__56459__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56459__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__56461 = cljs.core.seq(updates);
var chunk__56463 = null;
var count__56464 = (0);
var i__56465 = (0);
while(true){
if((i__56465 < count__56464)){
var path = chunk__56463.cljs$core$IIndexed$_nth$arity$2(null,i__56465);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56493_56624 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56496_56625 = null;
var count__56497_56626 = (0);
var i__56498_56627 = (0);
while(true){
if((i__56498_56627 < count__56497_56626)){
var node_56628 = chunk__56496_56625.cljs$core$IIndexed$_nth$arity$2(null,i__56498_56627);
var path_match_56629 = shadow.cljs.devtools.client.browser.match_paths(node_56628.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56629)){
var new_link_56630 = (function (){var G__56504 = node_56628.cloneNode(true);
G__56504.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56629),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56504;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56629], 0));

goog.dom.insertSiblingAfter(new_link_56630,node_56628);

goog.dom.removeNode(node_56628);


var G__56631 = seq__56493_56624;
var G__56632 = chunk__56496_56625;
var G__56633 = count__56497_56626;
var G__56634 = (i__56498_56627 + (1));
seq__56493_56624 = G__56631;
chunk__56496_56625 = G__56632;
count__56497_56626 = G__56633;
i__56498_56627 = G__56634;
continue;
} else {
var G__56635 = seq__56493_56624;
var G__56636 = chunk__56496_56625;
var G__56637 = count__56497_56626;
var G__56638 = (i__56498_56627 + (1));
seq__56493_56624 = G__56635;
chunk__56496_56625 = G__56636;
count__56497_56626 = G__56637;
i__56498_56627 = G__56638;
continue;
}
} else {
var temp__5735__auto___56639 = cljs.core.seq(seq__56493_56624);
if(temp__5735__auto___56639){
var seq__56493_56640__$1 = temp__5735__auto___56639;
if(cljs.core.chunked_seq_QMARK_(seq__56493_56640__$1)){
var c__4550__auto___56641 = cljs.core.chunk_first(seq__56493_56640__$1);
var G__56642 = cljs.core.chunk_rest(seq__56493_56640__$1);
var G__56643 = c__4550__auto___56641;
var G__56644 = cljs.core.count(c__4550__auto___56641);
var G__56645 = (0);
seq__56493_56624 = G__56642;
chunk__56496_56625 = G__56643;
count__56497_56626 = G__56644;
i__56498_56627 = G__56645;
continue;
} else {
var node_56646 = cljs.core.first(seq__56493_56640__$1);
var path_match_56647 = shadow.cljs.devtools.client.browser.match_paths(node_56646.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56647)){
var new_link_56648 = (function (){var G__56505 = node_56646.cloneNode(true);
G__56505.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56647),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56505;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56647], 0));

goog.dom.insertSiblingAfter(new_link_56648,node_56646);

goog.dom.removeNode(node_56646);


var G__56649 = cljs.core.next(seq__56493_56640__$1);
var G__56650 = null;
var G__56651 = (0);
var G__56652 = (0);
seq__56493_56624 = G__56649;
chunk__56496_56625 = G__56650;
count__56497_56626 = G__56651;
i__56498_56627 = G__56652;
continue;
} else {
var G__56653 = cljs.core.next(seq__56493_56640__$1);
var G__56654 = null;
var G__56655 = (0);
var G__56656 = (0);
seq__56493_56624 = G__56653;
chunk__56496_56625 = G__56654;
count__56497_56626 = G__56655;
i__56498_56627 = G__56656;
continue;
}
}
} else {
}
}
break;
}


var G__56657 = seq__56461;
var G__56658 = chunk__56463;
var G__56659 = count__56464;
var G__56660 = (i__56465 + (1));
seq__56461 = G__56657;
chunk__56463 = G__56658;
count__56464 = G__56659;
i__56465 = G__56660;
continue;
} else {
var G__56661 = seq__56461;
var G__56662 = chunk__56463;
var G__56663 = count__56464;
var G__56664 = (i__56465 + (1));
seq__56461 = G__56661;
chunk__56463 = G__56662;
count__56464 = G__56663;
i__56465 = G__56664;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56461);
if(temp__5735__auto__){
var seq__56461__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56461__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56461__$1);
var G__56665 = cljs.core.chunk_rest(seq__56461__$1);
var G__56666 = c__4550__auto__;
var G__56667 = cljs.core.count(c__4550__auto__);
var G__56668 = (0);
seq__56461 = G__56665;
chunk__56463 = G__56666;
count__56464 = G__56667;
i__56465 = G__56668;
continue;
} else {
var path = cljs.core.first(seq__56461__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56510_56669 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56513_56670 = null;
var count__56514_56671 = (0);
var i__56515_56672 = (0);
while(true){
if((i__56515_56672 < count__56514_56671)){
var node_56673 = chunk__56513_56670.cljs$core$IIndexed$_nth$arity$2(null,i__56515_56672);
var path_match_56674 = shadow.cljs.devtools.client.browser.match_paths(node_56673.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56674)){
var new_link_56675 = (function (){var G__56520 = node_56673.cloneNode(true);
G__56520.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56674),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56520;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56674], 0));

goog.dom.insertSiblingAfter(new_link_56675,node_56673);

goog.dom.removeNode(node_56673);


var G__56676 = seq__56510_56669;
var G__56677 = chunk__56513_56670;
var G__56678 = count__56514_56671;
var G__56679 = (i__56515_56672 + (1));
seq__56510_56669 = G__56676;
chunk__56513_56670 = G__56677;
count__56514_56671 = G__56678;
i__56515_56672 = G__56679;
continue;
} else {
var G__56680 = seq__56510_56669;
var G__56681 = chunk__56513_56670;
var G__56682 = count__56514_56671;
var G__56683 = (i__56515_56672 + (1));
seq__56510_56669 = G__56680;
chunk__56513_56670 = G__56681;
count__56514_56671 = G__56682;
i__56515_56672 = G__56683;
continue;
}
} else {
var temp__5735__auto___56684__$1 = cljs.core.seq(seq__56510_56669);
if(temp__5735__auto___56684__$1){
var seq__56510_56685__$1 = temp__5735__auto___56684__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56510_56685__$1)){
var c__4550__auto___56686 = cljs.core.chunk_first(seq__56510_56685__$1);
var G__56687 = cljs.core.chunk_rest(seq__56510_56685__$1);
var G__56688 = c__4550__auto___56686;
var G__56689 = cljs.core.count(c__4550__auto___56686);
var G__56690 = (0);
seq__56510_56669 = G__56687;
chunk__56513_56670 = G__56688;
count__56514_56671 = G__56689;
i__56515_56672 = G__56690;
continue;
} else {
var node_56694 = cljs.core.first(seq__56510_56685__$1);
var path_match_56695 = shadow.cljs.devtools.client.browser.match_paths(node_56694.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56695)){
var new_link_56696 = (function (){var G__56521 = node_56694.cloneNode(true);
G__56521.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56695),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56521;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56695], 0));

goog.dom.insertSiblingAfter(new_link_56696,node_56694);

goog.dom.removeNode(node_56694);


var G__56697 = cljs.core.next(seq__56510_56685__$1);
var G__56698 = null;
var G__56699 = (0);
var G__56700 = (0);
seq__56510_56669 = G__56697;
chunk__56513_56670 = G__56698;
count__56514_56671 = G__56699;
i__56515_56672 = G__56700;
continue;
} else {
var G__56701 = cljs.core.next(seq__56510_56685__$1);
var G__56702 = null;
var G__56703 = (0);
var G__56704 = (0);
seq__56510_56669 = G__56701;
chunk__56513_56670 = G__56702;
count__56514_56671 = G__56703;
i__56515_56672 = G__56704;
continue;
}
}
} else {
}
}
break;
}


var G__56705 = cljs.core.next(seq__56461__$1);
var G__56706 = null;
var G__56707 = (0);
var G__56708 = (0);
seq__56461 = G__56705;
chunk__56463 = G__56706;
count__56464 = G__56707;
i__56465 = G__56708;
continue;
} else {
var G__56709 = cljs.core.next(seq__56461__$1);
var G__56710 = null;
var G__56711 = (0);
var G__56712 = (0);
seq__56461 = G__56709;
chunk__56463 = G__56710;
count__56464 = G__56711;
i__56465 = G__56712;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__56522){
var map__56523 = p__56522;
var map__56523__$1 = (((((!((map__56523 == null))))?(((((map__56523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56523):map__56523);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56523__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56523__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__56523,map__56523__$1,id,js){
return (function (){
return eval(js);
});})(map__56523,map__56523__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__56525){
var map__56526 = p__56525;
var map__56526__$1 = (((((!((map__56526 == null))))?(((((map__56526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56526):map__56526);
var msg = map__56526__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56526__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56526__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56526__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56526__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56526,map__56526__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__56528){
var map__56529 = p__56528;
var map__56529__$1 = (((((!((map__56529 == null))))?(((((map__56529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56529):map__56529);
var src = map__56529__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56529__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__56526,map__56526__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__56526,map__56526__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__56526,map__56526__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__56535){
var map__56536 = p__56535;
var map__56536__$1 = (((((!((map__56536 == null))))?(((((map__56536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56536):map__56536);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56536__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56536__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__56536,map__56536__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__56536,map__56536__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__56540){
var map__56541 = p__56540;
var map__56541__$1 = (((((!((map__56541 == null))))?(((((map__56541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56541):map__56541);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__56543){
var map__56544 = p__56543;
var map__56544__$1 = (((((!((map__56544 == null))))?(((((map__56544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56544):map__56544);
var msg = map__56544__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56544__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__56546 = type;
var G__56546__$1 = (((G__56546 instanceof cljs.core.Keyword))?G__56546.fqn:null);
switch (G__56546__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__56547 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__56548 = ((function (G__56547){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__56547))
;
var G__56549 = "POST";
var G__56550 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__56551 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__56547,G__56548,G__56549,G__56550,G__56551);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e56552){var e = e56552;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___56719 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___56719)){
var s_56720 = temp__5735__auto___56719;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_56720.onclose = ((function (s_56720,temp__5735__auto___56719){
return (function (e){
return null;
});})(s_56720,temp__5735__auto___56719))
;

s_56720.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
