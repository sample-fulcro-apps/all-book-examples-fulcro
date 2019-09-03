goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__54337 = coll;
var G__54338 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__54337,G__54338) : shadow.dom.lazy_native_coll_seq.call(null,G__54337,G__54338));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__54354 = arguments.length;
switch (G__54354) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__54359 = arguments.length;
switch (G__54359) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__54366 = arguments.length;
switch (G__54366) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__54371 = arguments.length;
switch (G__54371) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__54382 = arguments.length;
switch (G__54382) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__54387 = document;
var G__54388 = shadow.dom.dom_node(el);
return goog.dom.contains(G__54387,G__54388);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__54393 = shadow.dom.dom_node(parent);
var G__54394 = shadow.dom.dom_node(el);
return goog.dom.contains(G__54393,G__54394);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__54404 = shadow.dom.dom_node(el);
var G__54405 = cls;
return goog.dom.classlist.add(G__54404,G__54405);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__54408 = shadow.dom.dom_node(el);
var G__54409 = cls;
return goog.dom.classlist.remove(G__54408,G__54409);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__54415 = arguments.length;
switch (G__54415) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__54420 = shadow.dom.dom_node(el);
var G__54421 = cls;
return goog.dom.classlist.toggle(G__54420,G__54421);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e54423){if((e54423 instanceof Object)){
var e = e54423;
return console.log("didnt support attachEvent",el,e);
} else {
throw e54423;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__54424 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__54425 = null;
var count__54426 = (0);
var i__54427 = (0);
while(true){
if((i__54427 < count__54426)){
var el = chunk__54425.cljs$core$IIndexed$_nth$arity$2(null,i__54427);
var handler_55075__$1 = ((function (seq__54424,chunk__54425,count__54426,i__54427,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54424,chunk__54425,count__54426,i__54427,el))
;
var G__54448_55077 = el;
var G__54449_55078 = cljs.core.name(ev);
var G__54450_55079 = handler_55075__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54448_55077,G__54449_55078,G__54450_55079) : shadow.dom.dom_listen.call(null,G__54448_55077,G__54449_55078,G__54450_55079));


var G__55080 = seq__54424;
var G__55081 = chunk__54425;
var G__55082 = count__54426;
var G__55083 = (i__54427 + (1));
seq__54424 = G__55080;
chunk__54425 = G__55081;
count__54426 = G__55082;
i__54427 = G__55083;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54424);
if(temp__5735__auto__){
var seq__54424__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54424__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54424__$1);
var G__55085 = cljs.core.chunk_rest(seq__54424__$1);
var G__55086 = c__4550__auto__;
var G__55087 = cljs.core.count(c__4550__auto__);
var G__55088 = (0);
seq__54424 = G__55085;
chunk__54425 = G__55086;
count__54426 = G__55087;
i__54427 = G__55088;
continue;
} else {
var el = cljs.core.first(seq__54424__$1);
var handler_55089__$1 = ((function (seq__54424,chunk__54425,count__54426,i__54427,el,seq__54424__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54424,chunk__54425,count__54426,i__54427,el,seq__54424__$1,temp__5735__auto__))
;
var G__54455_55092 = el;
var G__54456_55093 = cljs.core.name(ev);
var G__54457_55094 = handler_55089__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54455_55092,G__54456_55093,G__54457_55094) : shadow.dom.dom_listen.call(null,G__54455_55092,G__54456_55093,G__54457_55094));


var G__55095 = cljs.core.next(seq__54424__$1);
var G__55096 = null;
var G__55097 = (0);
var G__55098 = (0);
seq__54424 = G__55095;
chunk__54425 = G__55096;
count__54426 = G__55097;
i__54427 = G__55098;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__54462 = arguments.length;
switch (G__54462) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__54470 = shadow.dom.dom_node(el);
var G__54471 = cljs.core.name(ev);
var G__54472 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54470,G__54471,G__54472) : shadow.dom.dom_listen.call(null,G__54470,G__54471,G__54472));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__54484 = shadow.dom.dom_node(el);
var G__54485 = cljs.core.name(ev);
var G__54486 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__54484,G__54485,G__54486) : shadow.dom.dom_listen_remove.call(null,G__54484,G__54485,G__54486));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__54487 = cljs.core.seq(events);
var chunk__54488 = null;
var count__54489 = (0);
var i__54490 = (0);
while(true){
if((i__54490 < count__54489)){
var vec__54500 = chunk__54488.cljs$core$IIndexed$_nth$arity$2(null,i__54490);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54500,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__55127 = seq__54487;
var G__55128 = chunk__54488;
var G__55129 = count__54489;
var G__55130 = (i__54490 + (1));
seq__54487 = G__55127;
chunk__54488 = G__55128;
count__54489 = G__55129;
i__54490 = G__55130;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54487);
if(temp__5735__auto__){
var seq__54487__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54487__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54487__$1);
var G__55131 = cljs.core.chunk_rest(seq__54487__$1);
var G__55132 = c__4550__auto__;
var G__55133 = cljs.core.count(c__4550__auto__);
var G__55134 = (0);
seq__54487 = G__55131;
chunk__54488 = G__55132;
count__54489 = G__55133;
i__54490 = G__55134;
continue;
} else {
var vec__54505 = cljs.core.first(seq__54487__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54505,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__55135 = cljs.core.next(seq__54487__$1);
var G__55136 = null;
var G__55137 = (0);
var G__55138 = (0);
seq__54487 = G__55135;
chunk__54488 = G__55136;
count__54489 = G__55137;
i__54490 = G__55138;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__54508 = cljs.core.seq(styles);
var chunk__54509 = null;
var count__54510 = (0);
var i__54511 = (0);
while(true){
if((i__54511 < count__54510)){
var vec__54524 = chunk__54509.cljs$core$IIndexed$_nth$arity$2(null,i__54511);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54524,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54524,(1),null);
var G__54527_55142 = dom;
var G__54528_55143 = cljs.core.name(k);
var G__54529_55144 = (((v == null))?"":v);
goog.style.setStyle(G__54527_55142,G__54528_55143,G__54529_55144);


var G__55145 = seq__54508;
var G__55146 = chunk__54509;
var G__55147 = count__54510;
var G__55148 = (i__54511 + (1));
seq__54508 = G__55145;
chunk__54509 = G__55146;
count__54510 = G__55147;
i__54511 = G__55148;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54508);
if(temp__5735__auto__){
var seq__54508__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54508__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54508__$1);
var G__55152 = cljs.core.chunk_rest(seq__54508__$1);
var G__55153 = c__4550__auto__;
var G__55154 = cljs.core.count(c__4550__auto__);
var G__55155 = (0);
seq__54508 = G__55152;
chunk__54509 = G__55153;
count__54510 = G__55154;
i__54511 = G__55155;
continue;
} else {
var vec__54530 = cljs.core.first(seq__54508__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54530,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54530,(1),null);
var G__54533_55156 = dom;
var G__54534_55157 = cljs.core.name(k);
var G__54535_55158 = (((v == null))?"":v);
goog.style.setStyle(G__54533_55156,G__54534_55157,G__54535_55158);


var G__55159 = cljs.core.next(seq__54508__$1);
var G__55160 = null;
var G__55161 = (0);
var G__55162 = (0);
seq__54508 = G__55159;
chunk__54509 = G__55160;
count__54510 = G__55161;
i__54511 = G__55162;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__54536_55166 = key;
var G__54536_55167__$1 = (((G__54536_55166 instanceof cljs.core.Keyword))?G__54536_55166.fqn:null);
switch (G__54536_55167__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_55181 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_55181,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_55181,"aria-");
}
})())){
el.setAttribute(ks_55181,value);
} else {
(el[ks_55181] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__54540 = shadow.dom.dom_node(el);
var G__54541 = cls;
return goog.dom.classlist.contains(G__54540,G__54541);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__54544){
var map__54545 = p__54544;
var map__54545__$1 = (((((!((map__54545 == null))))?(((((map__54545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54545):map__54545);
var props = map__54545__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54545__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__54547 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54547,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54547,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54547,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__54550 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__54550,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__54550;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__54552 = arguments.length;
switch (G__54552) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__54554){
var vec__54555 = p__54554;
var seq__54556 = cljs.core.seq(vec__54555);
var first__54557 = cljs.core.first(seq__54556);
var seq__54556__$1 = cljs.core.next(seq__54556);
var nn = first__54557;
var first__54557__$1 = cljs.core.first(seq__54556__$1);
var seq__54556__$2 = cljs.core.next(seq__54556__$1);
var np = first__54557__$1;
var nc = seq__54556__$2;
var node = vec__54555;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54558 = nn;
var G__54559 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54558,G__54559) : create_fn.call(null,G__54558,G__54559));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54560 = nn;
var G__54561 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54560,G__54561) : create_fn.call(null,G__54560,G__54561));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__54562 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54562,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54562,(1),null);
var seq__54565_55209 = cljs.core.seq(node_children);
var chunk__54566_55210 = null;
var count__54567_55211 = (0);
var i__54568_55212 = (0);
while(true){
if((i__54568_55212 < count__54567_55211)){
var child_struct_55213 = chunk__54566_55210.cljs$core$IIndexed$_nth$arity$2(null,i__54568_55212);
var children_55214 = shadow.dom.dom_node(child_struct_55213);
if(cljs.core.seq_QMARK_(children_55214)){
var seq__54587_55215 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_55214));
var chunk__54589_55216 = null;
var count__54590_55217 = (0);
var i__54591_55218 = (0);
while(true){
if((i__54591_55218 < count__54590_55217)){
var child_55229 = chunk__54589_55216.cljs$core$IIndexed$_nth$arity$2(null,i__54591_55218);
if(cljs.core.truth_(child_55229)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55229);


var G__55230 = seq__54587_55215;
var G__55231 = chunk__54589_55216;
var G__55232 = count__54590_55217;
var G__55233 = (i__54591_55218 + (1));
seq__54587_55215 = G__55230;
chunk__54589_55216 = G__55231;
count__54590_55217 = G__55232;
i__54591_55218 = G__55233;
continue;
} else {
var G__55234 = seq__54587_55215;
var G__55235 = chunk__54589_55216;
var G__55236 = count__54590_55217;
var G__55237 = (i__54591_55218 + (1));
seq__54587_55215 = G__55234;
chunk__54589_55216 = G__55235;
count__54590_55217 = G__55236;
i__54591_55218 = G__55237;
continue;
}
} else {
var temp__5735__auto___55238 = cljs.core.seq(seq__54587_55215);
if(temp__5735__auto___55238){
var seq__54587_55239__$1 = temp__5735__auto___55238;
if(cljs.core.chunked_seq_QMARK_(seq__54587_55239__$1)){
var c__4550__auto___55240 = cljs.core.chunk_first(seq__54587_55239__$1);
var G__55241 = cljs.core.chunk_rest(seq__54587_55239__$1);
var G__55242 = c__4550__auto___55240;
var G__55243 = cljs.core.count(c__4550__auto___55240);
var G__55244 = (0);
seq__54587_55215 = G__55241;
chunk__54589_55216 = G__55242;
count__54590_55217 = G__55243;
i__54591_55218 = G__55244;
continue;
} else {
var child_55245 = cljs.core.first(seq__54587_55239__$1);
if(cljs.core.truth_(child_55245)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55245);


var G__55246 = cljs.core.next(seq__54587_55239__$1);
var G__55247 = null;
var G__55248 = (0);
var G__55249 = (0);
seq__54587_55215 = G__55246;
chunk__54589_55216 = G__55247;
count__54590_55217 = G__55248;
i__54591_55218 = G__55249;
continue;
} else {
var G__55250 = cljs.core.next(seq__54587_55239__$1);
var G__55251 = null;
var G__55252 = (0);
var G__55253 = (0);
seq__54587_55215 = G__55250;
chunk__54589_55216 = G__55251;
count__54590_55217 = G__55252;
i__54591_55218 = G__55253;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_55214);
}


var G__55254 = seq__54565_55209;
var G__55255 = chunk__54566_55210;
var G__55256 = count__54567_55211;
var G__55257 = (i__54568_55212 + (1));
seq__54565_55209 = G__55254;
chunk__54566_55210 = G__55255;
count__54567_55211 = G__55256;
i__54568_55212 = G__55257;
continue;
} else {
var temp__5735__auto___55258 = cljs.core.seq(seq__54565_55209);
if(temp__5735__auto___55258){
var seq__54565_55259__$1 = temp__5735__auto___55258;
if(cljs.core.chunked_seq_QMARK_(seq__54565_55259__$1)){
var c__4550__auto___55260 = cljs.core.chunk_first(seq__54565_55259__$1);
var G__55261 = cljs.core.chunk_rest(seq__54565_55259__$1);
var G__55262 = c__4550__auto___55260;
var G__55263 = cljs.core.count(c__4550__auto___55260);
var G__55264 = (0);
seq__54565_55209 = G__55261;
chunk__54566_55210 = G__55262;
count__54567_55211 = G__55263;
i__54568_55212 = G__55264;
continue;
} else {
var child_struct_55266 = cljs.core.first(seq__54565_55259__$1);
var children_55268 = shadow.dom.dom_node(child_struct_55266);
if(cljs.core.seq_QMARK_(children_55268)){
var seq__54593_55269 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_55268));
var chunk__54595_55270 = null;
var count__54596_55271 = (0);
var i__54597_55272 = (0);
while(true){
if((i__54597_55272 < count__54596_55271)){
var child_55273 = chunk__54595_55270.cljs$core$IIndexed$_nth$arity$2(null,i__54597_55272);
if(cljs.core.truth_(child_55273)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55273);


var G__55274 = seq__54593_55269;
var G__55275 = chunk__54595_55270;
var G__55276 = count__54596_55271;
var G__55277 = (i__54597_55272 + (1));
seq__54593_55269 = G__55274;
chunk__54595_55270 = G__55275;
count__54596_55271 = G__55276;
i__54597_55272 = G__55277;
continue;
} else {
var G__55278 = seq__54593_55269;
var G__55279 = chunk__54595_55270;
var G__55280 = count__54596_55271;
var G__55281 = (i__54597_55272 + (1));
seq__54593_55269 = G__55278;
chunk__54595_55270 = G__55279;
count__54596_55271 = G__55280;
i__54597_55272 = G__55281;
continue;
}
} else {
var temp__5735__auto___55282__$1 = cljs.core.seq(seq__54593_55269);
if(temp__5735__auto___55282__$1){
var seq__54593_55284__$1 = temp__5735__auto___55282__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54593_55284__$1)){
var c__4550__auto___55285 = cljs.core.chunk_first(seq__54593_55284__$1);
var G__55286 = cljs.core.chunk_rest(seq__54593_55284__$1);
var G__55287 = c__4550__auto___55285;
var G__55288 = cljs.core.count(c__4550__auto___55285);
var G__55289 = (0);
seq__54593_55269 = G__55286;
chunk__54595_55270 = G__55287;
count__54596_55271 = G__55288;
i__54597_55272 = G__55289;
continue;
} else {
var child_55290 = cljs.core.first(seq__54593_55284__$1);
if(cljs.core.truth_(child_55290)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55290);


var G__55291 = cljs.core.next(seq__54593_55284__$1);
var G__55292 = null;
var G__55293 = (0);
var G__55294 = (0);
seq__54593_55269 = G__55291;
chunk__54595_55270 = G__55292;
count__54596_55271 = G__55293;
i__54597_55272 = G__55294;
continue;
} else {
var G__55295 = cljs.core.next(seq__54593_55284__$1);
var G__55296 = null;
var G__55297 = (0);
var G__55298 = (0);
seq__54593_55269 = G__55295;
chunk__54595_55270 = G__55296;
count__54596_55271 = G__55297;
i__54597_55272 = G__55298;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_55268);
}


var G__55303 = cljs.core.next(seq__54565_55259__$1);
var G__55304 = null;
var G__55305 = (0);
var G__55306 = (0);
seq__54565_55209 = G__55303;
chunk__54566_55210 = G__55304;
count__54567_55211 = G__55305;
i__54568_55212 = G__55306;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__54599 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__54599);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__54601 = cljs.core.seq(node);
var chunk__54602 = null;
var count__54603 = (0);
var i__54604 = (0);
while(true){
if((i__54604 < count__54603)){
var n = chunk__54602.cljs$core$IIndexed$_nth$arity$2(null,i__54604);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__55313 = seq__54601;
var G__55314 = chunk__54602;
var G__55315 = count__54603;
var G__55316 = (i__54604 + (1));
seq__54601 = G__55313;
chunk__54602 = G__55314;
count__54603 = G__55315;
i__54604 = G__55316;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54601);
if(temp__5735__auto__){
var seq__54601__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54601__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54601__$1);
var G__55318 = cljs.core.chunk_rest(seq__54601__$1);
var G__55319 = c__4550__auto__;
var G__55320 = cljs.core.count(c__4550__auto__);
var G__55321 = (0);
seq__54601 = G__55318;
chunk__54602 = G__55319;
count__54603 = G__55320;
i__54604 = G__55321;
continue;
} else {
var n = cljs.core.first(seq__54601__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__55322 = cljs.core.next(seq__54601__$1);
var G__55323 = null;
var G__55324 = (0);
var G__55325 = (0);
seq__54601 = G__55322;
chunk__54602 = G__55323;
count__54603 = G__55324;
i__54604 = G__55325;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__54605 = shadow.dom.dom_node(new$);
var G__54606 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__54605,G__54606);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__54608 = arguments.length;
switch (G__54608) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__54618 = arguments.length;
switch (G__54618) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__54648 = arguments.length;
switch (G__54648) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55338 = arguments.length;
var i__4731__auto___55339 = (0);
while(true){
if((i__4731__auto___55339 < len__4730__auto___55338)){
args__4736__auto__.push((arguments[i__4731__auto___55339]));

var G__55340 = (i__4731__auto___55339 + (1));
i__4731__auto___55339 = G__55340;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__54697_55341 = cljs.core.seq(nodes);
var chunk__54698_55342 = null;
var count__54699_55343 = (0);
var i__54700_55344 = (0);
while(true){
if((i__54700_55344 < count__54699_55343)){
var node_55345 = chunk__54698_55342.cljs$core$IIndexed$_nth$arity$2(null,i__54700_55344);
fragment.appendChild(shadow.dom._to_dom(node_55345));


var G__55346 = seq__54697_55341;
var G__55347 = chunk__54698_55342;
var G__55348 = count__54699_55343;
var G__55349 = (i__54700_55344 + (1));
seq__54697_55341 = G__55346;
chunk__54698_55342 = G__55347;
count__54699_55343 = G__55348;
i__54700_55344 = G__55349;
continue;
} else {
var temp__5735__auto___55350 = cljs.core.seq(seq__54697_55341);
if(temp__5735__auto___55350){
var seq__54697_55351__$1 = temp__5735__auto___55350;
if(cljs.core.chunked_seq_QMARK_(seq__54697_55351__$1)){
var c__4550__auto___55352 = cljs.core.chunk_first(seq__54697_55351__$1);
var G__55353 = cljs.core.chunk_rest(seq__54697_55351__$1);
var G__55354 = c__4550__auto___55352;
var G__55355 = cljs.core.count(c__4550__auto___55352);
var G__55356 = (0);
seq__54697_55341 = G__55353;
chunk__54698_55342 = G__55354;
count__54699_55343 = G__55355;
i__54700_55344 = G__55356;
continue;
} else {
var node_55357 = cljs.core.first(seq__54697_55351__$1);
fragment.appendChild(shadow.dom._to_dom(node_55357));


var G__55358 = cljs.core.next(seq__54697_55351__$1);
var G__55359 = null;
var G__55360 = (0);
var G__55361 = (0);
seq__54697_55341 = G__55358;
chunk__54698_55342 = G__55359;
count__54699_55343 = G__55360;
i__54700_55344 = G__55361;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq54695){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54695));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__54702_55362 = cljs.core.seq(scripts);
var chunk__54703_55363 = null;
var count__54704_55364 = (0);
var i__54705_55365 = (0);
while(true){
if((i__54705_55365 < count__54704_55364)){
var vec__54712_55366 = chunk__54703_55363.cljs$core$IIndexed$_nth$arity$2(null,i__54705_55365);
var script_tag_55367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54712_55366,(0),null);
var script_body_55368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54712_55366,(1),null);
eval(script_body_55368);


var G__55369 = seq__54702_55362;
var G__55370 = chunk__54703_55363;
var G__55371 = count__54704_55364;
var G__55372 = (i__54705_55365 + (1));
seq__54702_55362 = G__55369;
chunk__54703_55363 = G__55370;
count__54704_55364 = G__55371;
i__54705_55365 = G__55372;
continue;
} else {
var temp__5735__auto___55373 = cljs.core.seq(seq__54702_55362);
if(temp__5735__auto___55373){
var seq__54702_55374__$1 = temp__5735__auto___55373;
if(cljs.core.chunked_seq_QMARK_(seq__54702_55374__$1)){
var c__4550__auto___55375 = cljs.core.chunk_first(seq__54702_55374__$1);
var G__55376 = cljs.core.chunk_rest(seq__54702_55374__$1);
var G__55377 = c__4550__auto___55375;
var G__55378 = cljs.core.count(c__4550__auto___55375);
var G__55379 = (0);
seq__54702_55362 = G__55376;
chunk__54703_55363 = G__55377;
count__54704_55364 = G__55378;
i__54705_55365 = G__55379;
continue;
} else {
var vec__54715_55384 = cljs.core.first(seq__54702_55374__$1);
var script_tag_55385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54715_55384,(0),null);
var script_body_55386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54715_55384,(1),null);
eval(script_body_55386);


var G__55389 = cljs.core.next(seq__54702_55374__$1);
var G__55390 = null;
var G__55391 = (0);
var G__55392 = (0);
seq__54702_55362 = G__55389;
chunk__54703_55363 = G__55390;
count__54704_55364 = G__55391;
i__54705_55365 = G__55392;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__54718){
var vec__54719 = p__54718;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54719,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54719,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__54742 = shadow.dom.dom_node(el);
var G__54743 = cls;
return goog.dom.getAncestorByClass(G__54742,G__54743);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__54746 = arguments.length;
switch (G__54746) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__54748 = shadow.dom.dom_node(el);
var G__54749 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__54748,G__54749);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__54750 = shadow.dom.dom_node(el);
var G__54751 = cljs.core.name(tag);
var G__54752 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__54750,G__54751,G__54752);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__54753 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__54753);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__54754 = shadow.dom.dom_node(dom);
var G__54755 = value;
return goog.dom.forms.setValue(G__54754,G__54755);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__54767 = cljs.core.seq(style_keys);
var chunk__54768 = null;
var count__54769 = (0);
var i__54770 = (0);
while(true){
if((i__54770 < count__54769)){
var it = chunk__54768.cljs$core$IIndexed$_nth$arity$2(null,i__54770);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55400 = seq__54767;
var G__55401 = chunk__54768;
var G__55402 = count__54769;
var G__55403 = (i__54770 + (1));
seq__54767 = G__55400;
chunk__54768 = G__55401;
count__54769 = G__55402;
i__54770 = G__55403;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54767);
if(temp__5735__auto__){
var seq__54767__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54767__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54767__$1);
var G__55404 = cljs.core.chunk_rest(seq__54767__$1);
var G__55405 = c__4550__auto__;
var G__55406 = cljs.core.count(c__4550__auto__);
var G__55407 = (0);
seq__54767 = G__55404;
chunk__54768 = G__55405;
count__54769 = G__55406;
i__54770 = G__55407;
continue;
} else {
var it = cljs.core.first(seq__54767__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55408 = cljs.core.next(seq__54767__$1);
var G__55409 = null;
var G__55410 = (0);
var G__55411 = (0);
seq__54767 = G__55408;
chunk__54768 = G__55409;
count__54769 = G__55410;
i__54770 = G__55411;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54778,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54792 = k54778;
var G__54792__$1 = (((G__54792 instanceof cljs.core.Keyword))?G__54792.fqn:null);
switch (G__54792__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54778,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54797){
var vec__54798 = p__54797;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54798,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54798,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54777){
var self__ = this;
var G__54777__$1 = this;
return (new cljs.core.RecordIter((0),G__54777__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__54813 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54813(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54779,other54780){
var self__ = this;
var this54779__$1 = this;
return (((!((other54780 == null)))) && ((this54779__$1.constructor === other54780.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54779__$1.x,other54780.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54779__$1.y,other54780.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54779__$1.__extmap,other54780.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54777){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54814 = cljs.core.keyword_identical_QMARK_;
var expr__54815 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54817 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__54818 = expr__54815;
return (pred__54814.cljs$core$IFn$_invoke$arity$2 ? pred__54814.cljs$core$IFn$_invoke$arity$2(G__54817,G__54818) : pred__54814.call(null,G__54817,G__54818));
})())){
return (new shadow.dom.Coordinate(G__54777,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54819 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__54820 = expr__54815;
return (pred__54814.cljs$core$IFn$_invoke$arity$2 ? pred__54814.cljs$core$IFn$_invoke$arity$2(G__54819,G__54820) : pred__54814.call(null,G__54819,G__54820));
})())){
return (new shadow.dom.Coordinate(self__.x,G__54777,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54777),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54777){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__54777,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__54781){
var extmap__4424__auto__ = (function (){var G__54825 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54781,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__54781)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54825);
} else {
return G__54825;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__54781),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__54781),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__54827 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__54827);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__54829 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__54829);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__54831 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__54831);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54833,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54838 = k54833;
var G__54838__$1 = (((G__54838 instanceof cljs.core.Keyword))?G__54838.fqn:null);
switch (G__54838__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54833,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54839){
var vec__54840 = p__54839;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54840,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54840,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54832){
var self__ = this;
var G__54832__$1 = this;
return (new cljs.core.RecordIter((0),G__54832__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__54851 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54851(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54834,other54835){
var self__ = this;
var this54834__$1 = this;
return (((!((other54835 == null)))) && ((this54834__$1.constructor === other54835.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54834__$1.w,other54835.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54834__$1.h,other54835.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54834__$1.__extmap,other54835.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54832){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54857 = cljs.core.keyword_identical_QMARK_;
var expr__54858 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54861 = new cljs.core.Keyword(null,"w","w",354169001);
var G__54862 = expr__54858;
return (pred__54857.cljs$core$IFn$_invoke$arity$2 ? pred__54857.cljs$core$IFn$_invoke$arity$2(G__54861,G__54862) : pred__54857.call(null,G__54861,G__54862));
})())){
return (new shadow.dom.Size(G__54832,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54863 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__54864 = expr__54858;
return (pred__54857.cljs$core$IFn$_invoke$arity$2 ? pred__54857.cljs$core$IFn$_invoke$arity$2(G__54863,G__54864) : pred__54857.call(null,G__54863,G__54864));
})())){
return (new shadow.dom.Size(self__.w,G__54832,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54832),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54832){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__54832,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__54836){
var extmap__4424__auto__ = (function (){var G__54872 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54836,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__54836)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54872);
} else {
return G__54872;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__54836),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__54836),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__54875 = shadow.dom.dom_node(el);
return goog.style.getSize(G__54875);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__55449 = (i + (1));
var G__55450 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__55449;
ret = G__55450;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54889){
var vec__54890 = p__54889;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54890,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54890,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__54896 = arguments.length;
switch (G__54896) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54913_55459 = new_node;
var G__54914_55460 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__54913_55459,G__54914_55460);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54917_55461 = new_node;
var G__54918_55462 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__54917_55461,G__54918_55462);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__55463 = ps;
var G__55464 = (i + (1));
el__$1 = G__55463;
i = G__55464;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__54921 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__54921);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__54922 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__54922);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__54923 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__54923);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__54924 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54924,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54924,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54924,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__54927_55474 = cljs.core.seq(props);
var chunk__54928_55475 = null;
var count__54929_55476 = (0);
var i__54930_55477 = (0);
while(true){
if((i__54930_55477 < count__54929_55476)){
var vec__54937_55479 = chunk__54928_55475.cljs$core$IIndexed$_nth$arity$2(null,i__54930_55477);
var k_55480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54937_55479,(0),null);
var v_55481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54937_55479,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_55480);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55480),v_55481);


var G__55482 = seq__54927_55474;
var G__55483 = chunk__54928_55475;
var G__55484 = count__54929_55476;
var G__55485 = (i__54930_55477 + (1));
seq__54927_55474 = G__55482;
chunk__54928_55475 = G__55483;
count__54929_55476 = G__55484;
i__54930_55477 = G__55485;
continue;
} else {
var temp__5735__auto___55486 = cljs.core.seq(seq__54927_55474);
if(temp__5735__auto___55486){
var seq__54927_55487__$1 = temp__5735__auto___55486;
if(cljs.core.chunked_seq_QMARK_(seq__54927_55487__$1)){
var c__4550__auto___55488 = cljs.core.chunk_first(seq__54927_55487__$1);
var G__55489 = cljs.core.chunk_rest(seq__54927_55487__$1);
var G__55490 = c__4550__auto___55488;
var G__55491 = cljs.core.count(c__4550__auto___55488);
var G__55492 = (0);
seq__54927_55474 = G__55489;
chunk__54928_55475 = G__55490;
count__54929_55476 = G__55491;
i__54930_55477 = G__55492;
continue;
} else {
var vec__54940_55493 = cljs.core.first(seq__54927_55487__$1);
var k_55494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54940_55493,(0),null);
var v_55495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54940_55493,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_55494);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55494),v_55495);


var G__55496 = cljs.core.next(seq__54927_55487__$1);
var G__55497 = null;
var G__55498 = (0);
var G__55499 = (0);
seq__54927_55474 = G__55496;
chunk__54928_55475 = G__55497;
count__54929_55476 = G__55498;
i__54930_55477 = G__55499;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__54944 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54944,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54944,(1),null);
var seq__54947_55500 = cljs.core.seq(node_children);
var chunk__54949_55501 = null;
var count__54950_55502 = (0);
var i__54951_55503 = (0);
while(true){
if((i__54951_55503 < count__54950_55502)){
var child_struct_55504 = chunk__54949_55501.cljs$core$IIndexed$_nth$arity$2(null,i__54951_55503);
if((!((child_struct_55504 == null)))){
if(typeof child_struct_55504 === 'string'){
var text_55505 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55505),child_struct_55504].join(''));
} else {
var children_55506 = shadow.dom.svg_node(child_struct_55504);
if(cljs.core.seq_QMARK_(children_55506)){
var seq__54977_55507 = cljs.core.seq(children_55506);
var chunk__54979_55508 = null;
var count__54980_55509 = (0);
var i__54981_55510 = (0);
while(true){
if((i__54981_55510 < count__54980_55509)){
var child_55511 = chunk__54979_55508.cljs$core$IIndexed$_nth$arity$2(null,i__54981_55510);
if(cljs.core.truth_(child_55511)){
node.appendChild(child_55511);


var G__55512 = seq__54977_55507;
var G__55513 = chunk__54979_55508;
var G__55514 = count__54980_55509;
var G__55515 = (i__54981_55510 + (1));
seq__54977_55507 = G__55512;
chunk__54979_55508 = G__55513;
count__54980_55509 = G__55514;
i__54981_55510 = G__55515;
continue;
} else {
var G__55516 = seq__54977_55507;
var G__55517 = chunk__54979_55508;
var G__55518 = count__54980_55509;
var G__55519 = (i__54981_55510 + (1));
seq__54977_55507 = G__55516;
chunk__54979_55508 = G__55517;
count__54980_55509 = G__55518;
i__54981_55510 = G__55519;
continue;
}
} else {
var temp__5735__auto___55520 = cljs.core.seq(seq__54977_55507);
if(temp__5735__auto___55520){
var seq__54977_55521__$1 = temp__5735__auto___55520;
if(cljs.core.chunked_seq_QMARK_(seq__54977_55521__$1)){
var c__4550__auto___55522 = cljs.core.chunk_first(seq__54977_55521__$1);
var G__55523 = cljs.core.chunk_rest(seq__54977_55521__$1);
var G__55524 = c__4550__auto___55522;
var G__55525 = cljs.core.count(c__4550__auto___55522);
var G__55526 = (0);
seq__54977_55507 = G__55523;
chunk__54979_55508 = G__55524;
count__54980_55509 = G__55525;
i__54981_55510 = G__55526;
continue;
} else {
var child_55527 = cljs.core.first(seq__54977_55521__$1);
if(cljs.core.truth_(child_55527)){
node.appendChild(child_55527);


var G__55528 = cljs.core.next(seq__54977_55521__$1);
var G__55529 = null;
var G__55530 = (0);
var G__55531 = (0);
seq__54977_55507 = G__55528;
chunk__54979_55508 = G__55529;
count__54980_55509 = G__55530;
i__54981_55510 = G__55531;
continue;
} else {
var G__55532 = cljs.core.next(seq__54977_55521__$1);
var G__55533 = null;
var G__55534 = (0);
var G__55535 = (0);
seq__54977_55507 = G__55532;
chunk__54979_55508 = G__55533;
count__54980_55509 = G__55534;
i__54981_55510 = G__55535;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55506);
}
}


var G__55536 = seq__54947_55500;
var G__55537 = chunk__54949_55501;
var G__55538 = count__54950_55502;
var G__55539 = (i__54951_55503 + (1));
seq__54947_55500 = G__55536;
chunk__54949_55501 = G__55537;
count__54950_55502 = G__55538;
i__54951_55503 = G__55539;
continue;
} else {
var G__55540 = seq__54947_55500;
var G__55541 = chunk__54949_55501;
var G__55542 = count__54950_55502;
var G__55543 = (i__54951_55503 + (1));
seq__54947_55500 = G__55540;
chunk__54949_55501 = G__55541;
count__54950_55502 = G__55542;
i__54951_55503 = G__55543;
continue;
}
} else {
var temp__5735__auto___55544 = cljs.core.seq(seq__54947_55500);
if(temp__5735__auto___55544){
var seq__54947_55545__$1 = temp__5735__auto___55544;
if(cljs.core.chunked_seq_QMARK_(seq__54947_55545__$1)){
var c__4550__auto___55546 = cljs.core.chunk_first(seq__54947_55545__$1);
var G__55547 = cljs.core.chunk_rest(seq__54947_55545__$1);
var G__55548 = c__4550__auto___55546;
var G__55549 = cljs.core.count(c__4550__auto___55546);
var G__55550 = (0);
seq__54947_55500 = G__55547;
chunk__54949_55501 = G__55548;
count__54950_55502 = G__55549;
i__54951_55503 = G__55550;
continue;
} else {
var child_struct_55551 = cljs.core.first(seq__54947_55545__$1);
if((!((child_struct_55551 == null)))){
if(typeof child_struct_55551 === 'string'){
var text_55552 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55552),child_struct_55551].join(''));
} else {
var children_55553 = shadow.dom.svg_node(child_struct_55551);
if(cljs.core.seq_QMARK_(children_55553)){
var seq__54985_55554 = cljs.core.seq(children_55553);
var chunk__54987_55555 = null;
var count__54988_55556 = (0);
var i__54989_55557 = (0);
while(true){
if((i__54989_55557 < count__54988_55556)){
var child_55558 = chunk__54987_55555.cljs$core$IIndexed$_nth$arity$2(null,i__54989_55557);
if(cljs.core.truth_(child_55558)){
node.appendChild(child_55558);


var G__55559 = seq__54985_55554;
var G__55560 = chunk__54987_55555;
var G__55561 = count__54988_55556;
var G__55562 = (i__54989_55557 + (1));
seq__54985_55554 = G__55559;
chunk__54987_55555 = G__55560;
count__54988_55556 = G__55561;
i__54989_55557 = G__55562;
continue;
} else {
var G__55563 = seq__54985_55554;
var G__55564 = chunk__54987_55555;
var G__55565 = count__54988_55556;
var G__55566 = (i__54989_55557 + (1));
seq__54985_55554 = G__55563;
chunk__54987_55555 = G__55564;
count__54988_55556 = G__55565;
i__54989_55557 = G__55566;
continue;
}
} else {
var temp__5735__auto___55567__$1 = cljs.core.seq(seq__54985_55554);
if(temp__5735__auto___55567__$1){
var seq__54985_55568__$1 = temp__5735__auto___55567__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54985_55568__$1)){
var c__4550__auto___55569 = cljs.core.chunk_first(seq__54985_55568__$1);
var G__55570 = cljs.core.chunk_rest(seq__54985_55568__$1);
var G__55571 = c__4550__auto___55569;
var G__55572 = cljs.core.count(c__4550__auto___55569);
var G__55573 = (0);
seq__54985_55554 = G__55570;
chunk__54987_55555 = G__55571;
count__54988_55556 = G__55572;
i__54989_55557 = G__55573;
continue;
} else {
var child_55574 = cljs.core.first(seq__54985_55568__$1);
if(cljs.core.truth_(child_55574)){
node.appendChild(child_55574);


var G__55575 = cljs.core.next(seq__54985_55568__$1);
var G__55576 = null;
var G__55577 = (0);
var G__55578 = (0);
seq__54985_55554 = G__55575;
chunk__54987_55555 = G__55576;
count__54988_55556 = G__55577;
i__54989_55557 = G__55578;
continue;
} else {
var G__55579 = cljs.core.next(seq__54985_55568__$1);
var G__55580 = null;
var G__55581 = (0);
var G__55582 = (0);
seq__54985_55554 = G__55579;
chunk__54987_55555 = G__55580;
count__54988_55556 = G__55581;
i__54989_55557 = G__55582;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55553);
}
}


var G__55586 = cljs.core.next(seq__54947_55545__$1);
var G__55587 = null;
var G__55588 = (0);
var G__55589 = (0);
seq__54947_55500 = G__55586;
chunk__54949_55501 = G__55587;
count__54950_55502 = G__55588;
i__54951_55503 = G__55589;
continue;
} else {
var G__55590 = cljs.core.next(seq__54947_55545__$1);
var G__55591 = null;
var G__55592 = (0);
var G__55593 = (0);
seq__54947_55500 = G__55590;
chunk__54949_55501 = G__55591;
count__54950_55502 = G__55592;
i__54951_55503 = G__55593;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__54995_55594 = shadow.dom._to_svg;
var G__54996_55595 = "string";
var G__54997_55596 = ((function (G__54995_55594,G__54996_55595){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__54995_55594,G__54996_55595))
;
goog.object.set(G__54995_55594,G__54996_55595,G__54997_55596);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__55002_55601 = shadow.dom._to_svg;
var G__55003_55602 = "null";
var G__55004_55603 = ((function (G__55002_55601,G__55003_55602){
return (function (_){
return null;
});})(G__55002_55601,G__55003_55602))
;
goog.object.set(G__55002_55601,G__55003_55602,G__55004_55603);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55604 = arguments.length;
var i__4731__auto___55605 = (0);
while(true){
if((i__4731__auto___55605 < len__4730__auto___55604)){
args__4736__auto__.push((arguments[i__4731__auto___55605]));

var G__55606 = (i__4731__auto___55605 + (1));
i__4731__auto___55605 = G__55606;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq55005){
var G__55007 = cljs.core.first(seq55005);
var seq55005__$1 = cljs.core.next(seq55005);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55007,seq55005__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__55012 = arguments.length;
switch (G__55012) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__55018_55644 = shadow.dom.dom_node(el);
var G__55019_55645 = cljs.core.name(event);
var G__55020_55646 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__55018_55644,G__55019_55645,G__55020_55646) : shadow.dom.dom_listen.call(null,G__55018_55644,G__55019_55645,G__55020_55646));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__52131__auto___55647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___55647,buf,chan,event_fn){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___55647,buf,chan,event_fn){
return (function (state_55027){
var state_val_55028 = (state_55027[(1)]);
if((state_val_55028 === (1))){
var state_55027__$1 = state_55027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55027__$1,(2),once_or_cleanup);
} else {
if((state_val_55028 === (2))){
var inst_55024 = (state_55027[(2)]);
var inst_55025 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_55027__$1 = (function (){var statearr_55030 = state_55027;
(statearr_55030[(7)] = inst_55024);

return statearr_55030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55027__$1,inst_55025);
} else {
return null;
}
}
});})(c__52131__auto___55647,buf,chan,event_fn))
;
return ((function (switch__52035__auto__,c__52131__auto___55647,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__52036__auto__ = null;
var shadow$dom$state_machine__52036__auto____0 = (function (){
var statearr_55033 = [null,null,null,null,null,null,null,null];
(statearr_55033[(0)] = shadow$dom$state_machine__52036__auto__);

(statearr_55033[(1)] = (1));

return statearr_55033;
});
var shadow$dom$state_machine__52036__auto____1 = (function (state_55027){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_55027);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e55035){if((e55035 instanceof Object)){
var ex__52039__auto__ = e55035;
var statearr_55036_55648 = state_55027;
(statearr_55036_55648[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55649 = state_55027;
state_55027 = G__55649;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
shadow$dom$state_machine__52036__auto__ = function(state_55027){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__52036__auto____0.call(this);
case 1:
return shadow$dom$state_machine__52036__auto____1.call(this,state_55027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__52036__auto____0;
shadow$dom$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__52036__auto____1;
return shadow$dom$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___55647,buf,chan,event_fn))
})();
var state__52133__auto__ = (function (){var statearr_55037 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_55037[(6)] = c__52131__auto___55647);

return statearr_55037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___55647,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
