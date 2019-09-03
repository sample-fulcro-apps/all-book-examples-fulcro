goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__78937__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__78617 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__78618 = cljs.core.seq(vec__78617);
var first__78619 = cljs.core.first(seq__78618);
var seq__78618__$1 = cljs.core.next(seq__78618);
var tag = first__78619;
var body = seq__78618__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__78937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78940__i = 0, G__78940__a = new Array(arguments.length -  0);
while (G__78940__i < G__78940__a.length) {G__78940__a[G__78940__i] = arguments[G__78940__i + 0]; ++G__78940__i;}
  args = new cljs.core.IndexedSeq(G__78940__a,0,null);
} 
return G__78937__delegate.call(this,args);};
G__78937.cljs$lang$maxFixedArity = 0;
G__78937.cljs$lang$applyTo = (function (arglist__78941){
var args = cljs.core.seq(arglist__78941);
return G__78937__delegate(args);
});
G__78937.cljs$core$IFn$_invoke$arity$variadic = G__78937__delegate;
return G__78937;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__78627(s__78628){
return (new cljs.core.LazySeq(null,(function (){
var s__78628__$1 = s__78628;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__78628__$1);
if(temp__5735__auto__){
var s__78628__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78628__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__78628__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__78630 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__78629 = (0);
while(true){
if((i__78629 < size__4522__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__78629);
cljs.core.chunk_append(b__78630,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__78942 = (i__78629 + (1));
i__78629 = G__78942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78630),sablono$core$update_arglists_$_iter__78627(cljs.core.chunk_rest(s__78628__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78630),null);
}
} else {
var args = cljs.core.first(s__78628__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__78627(cljs.core.rest(s__78628__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___78945 = arguments.length;
var i__4731__auto___78946 = (0);
while(true){
if((i__4731__auto___78946 < len__4730__auto___78945)){
args__4736__auto__.push((arguments[i__4731__auto___78946]));

var G__78949 = (i__4731__auto___78946 + (1));
i__4731__auto___78946 = G__78949;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__78643(s__78644){
return (new cljs.core.LazySeq(null,(function (){
var s__78644__$1 = s__78644;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__78644__$1);
if(temp__5735__auto__){
var s__78644__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78644__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__78644__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__78646 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__78645 = (0);
while(true){
if((i__78645 < size__4522__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__78645);
cljs.core.chunk_append(b__78646,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__78952 = (i__78645 + (1));
i__78645 = G__78952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78646),sablono$core$iter__78643(cljs.core.chunk_rest(s__78644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78646),null);
}
} else {
var style = cljs.core.first(s__78644__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__78643(cljs.core.rest(s__78644__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq78641){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78641));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__78670 = goog.dom.getDocument().body;
var G__78671 = (function (){var G__78672 = "script";
var G__78673 = ({"src": src});
return goog.dom.createDom(G__78672,G__78673);
})();
return goog.dom.appendChild(G__78670,G__78671);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to78674 = (function sablono$core$link_to78674(var_args){
var args__4736__auto__ = [];
var len__4730__auto___78959 = arguments.length;
var i__4731__auto___78960 = (0);
while(true){
if((i__4731__auto___78960 < len__4730__auto___78959)){
args__4736__auto__.push((arguments[i__4731__auto___78960]));

var G__78961 = (i__4731__auto___78960 + (1));
i__4731__auto___78960 = G__78961;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to78674.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to78674.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
});

sablono.core.link_to78674.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to78674.cljs$lang$applyTo = (function (seq78680){
var G__78681 = cljs.core.first(seq78680);
var seq78680__$1 = cljs.core.next(seq78680);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78681,seq78680__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to78674);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to78689 = (function sablono$core$mail_to78689(var_args){
var args__4736__auto__ = [];
var len__4730__auto___78966 = arguments.length;
var i__4731__auto___78967 = (0);
while(true){
if((i__4731__auto___78967 < len__4730__auto___78966)){
args__4736__auto__.push((arguments[i__4731__auto___78967]));

var G__78968 = (i__4731__auto___78967 + (1));
i__4731__auto___78967 = G__78968;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to78689.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to78689.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__78692){
var vec__78693 = p__78692;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78693,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to78689.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to78689.cljs$lang$applyTo = (function (seq78690){
var G__78691 = cljs.core.first(seq78690);
var seq78690__$1 = cljs.core.next(seq78690);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78691,seq78690__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to78689);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list78702 = (function sablono$core$unordered_list78702(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list78702_$_iter__78703(s__78704){
return (new cljs.core.LazySeq(null,(function (){
var s__78704__$1 = s__78704;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__78704__$1);
if(temp__5735__auto__){
var s__78704__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78704__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__78704__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__78706 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__78705 = (0);
while(true){
if((i__78705 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__78705);
cljs.core.chunk_append(b__78706,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__78981 = (i__78705 + (1));
i__78705 = G__78981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78706),sablono$core$unordered_list78702_$_iter__78703(cljs.core.chunk_rest(s__78704__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78706),null);
}
} else {
var x = cljs.core.first(s__78704__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list78702_$_iter__78703(cljs.core.rest(s__78704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list78702);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list78713 = (function sablono$core$ordered_list78713(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list78713_$_iter__78714(s__78715){
return (new cljs.core.LazySeq(null,(function (){
var s__78715__$1 = s__78715;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__78715__$1);
if(temp__5735__auto__){
var s__78715__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78715__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__78715__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__78717 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__78716 = (0);
while(true){
if((i__78716 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__78716);
cljs.core.chunk_append(b__78717,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__78988 = (i__78716 + (1));
i__78716 = G__78988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78717),sablono$core$ordered_list78713_$_iter__78714(cljs.core.chunk_rest(s__78715__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78717),null);
}
} else {
var x = cljs.core.first(s__78715__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list78713_$_iter__78714(cljs.core.rest(s__78715__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list78713);
/**
 * Create an image element.
 */
sablono.core.image78718 = (function sablono$core$image78718(var_args){
var G__78720 = arguments.length;
switch (G__78720) {
case 1:
return sablono.core.image78718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image78718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image78718.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
});

sablono.core.image78718.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image78718.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image78718);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__78721_SHARP_,p2__78722_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__78721_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__78722_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__78723_SHARP_,p2__78724_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__78723_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__78724_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__78726 = arguments.length;
switch (G__78726) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field78727 = (function sablono$core$color_field78727(var_args){
var G__78729 = arguments.length;
switch (G__78729) {
case 1:
return sablono.core.color_field78727.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field78727.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field78727.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__78607__auto__);
});

sablono.core.color_field78727.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.color_field78727.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field78727);

/**
 * Creates a date input field.
 */
sablono.core.date_field78732 = (function sablono$core$date_field78732(var_args){
var G__78736 = arguments.length;
switch (G__78736) {
case 1:
return sablono.core.date_field78732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field78732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field78732.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__78607__auto__);
});

sablono.core.date_field78732.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.date_field78732.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field78732);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field78741 = (function sablono$core$datetime_field78741(var_args){
var G__78743 = arguments.length;
switch (G__78743) {
case 1:
return sablono.core.datetime_field78741.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field78741.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field78741.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__78607__auto__);
});

sablono.core.datetime_field78741.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.datetime_field78741.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field78741);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field78744 = (function sablono$core$datetime_local_field78744(var_args){
var G__78750 = arguments.length;
switch (G__78750) {
case 1:
return sablono.core.datetime_local_field78744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field78744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field78744.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__78607__auto__);
});

sablono.core.datetime_local_field78744.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.datetime_local_field78744.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field78744);

/**
 * Creates a email input field.
 */
sablono.core.email_field78753 = (function sablono$core$email_field78753(var_args){
var G__78759 = arguments.length;
switch (G__78759) {
case 1:
return sablono.core.email_field78753.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field78753.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field78753.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__78607__auto__);
});

sablono.core.email_field78753.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.email_field78753.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field78753);

/**
 * Creates a file input field.
 */
sablono.core.file_field78760 = (function sablono$core$file_field78760(var_args){
var G__78762 = arguments.length;
switch (G__78762) {
case 1:
return sablono.core.file_field78760.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field78760.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field78760.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__78607__auto__);
});

sablono.core.file_field78760.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.file_field78760.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field78760);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field78764 = (function sablono$core$hidden_field78764(var_args){
var G__78766 = arguments.length;
switch (G__78766) {
case 1:
return sablono.core.hidden_field78764.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field78764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field78764.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__78607__auto__);
});

sablono.core.hidden_field78764.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.hidden_field78764.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field78764);

/**
 * Creates a month input field.
 */
sablono.core.month_field78772 = (function sablono$core$month_field78772(var_args){
var G__78778 = arguments.length;
switch (G__78778) {
case 1:
return sablono.core.month_field78772.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field78772.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field78772.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__78607__auto__);
});

sablono.core.month_field78772.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.month_field78772.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field78772);

/**
 * Creates a number input field.
 */
sablono.core.number_field78781 = (function sablono$core$number_field78781(var_args){
var G__78784 = arguments.length;
switch (G__78784) {
case 1:
return sablono.core.number_field78781.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field78781.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field78781.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__78607__auto__);
});

sablono.core.number_field78781.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.number_field78781.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field78781);

/**
 * Creates a password input field.
 */
sablono.core.password_field78787 = (function sablono$core$password_field78787(var_args){
var G__78789 = arguments.length;
switch (G__78789) {
case 1:
return sablono.core.password_field78787.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field78787.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field78787.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__78607__auto__);
});

sablono.core.password_field78787.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.password_field78787.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field78787);

/**
 * Creates a range input field.
 */
sablono.core.range_field78791 = (function sablono$core$range_field78791(var_args){
var G__78793 = arguments.length;
switch (G__78793) {
case 1:
return sablono.core.range_field78791.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field78791.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field78791.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__78607__auto__);
});

sablono.core.range_field78791.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.range_field78791.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field78791);

/**
 * Creates a search input field.
 */
sablono.core.search_field78797 = (function sablono$core$search_field78797(var_args){
var G__78802 = arguments.length;
switch (G__78802) {
case 1:
return sablono.core.search_field78797.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field78797.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field78797.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__78607__auto__);
});

sablono.core.search_field78797.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.search_field78797.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field78797);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field78806 = (function sablono$core$tel_field78806(var_args){
var G__78809 = arguments.length;
switch (G__78809) {
case 1:
return sablono.core.tel_field78806.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field78806.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field78806.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__78607__auto__);
});

sablono.core.tel_field78806.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.tel_field78806.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field78806);

/**
 * Creates a text input field.
 */
sablono.core.text_field78811 = (function sablono$core$text_field78811(var_args){
var G__78815 = arguments.length;
switch (G__78815) {
case 1:
return sablono.core.text_field78811.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field78811.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field78811.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__78607__auto__);
});

sablono.core.text_field78811.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.text_field78811.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field78811);

/**
 * Creates a time input field.
 */
sablono.core.time_field78822 = (function sablono$core$time_field78822(var_args){
var G__78831 = arguments.length;
switch (G__78831) {
case 1:
return sablono.core.time_field78822.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field78822.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field78822.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__78607__auto__);
});

sablono.core.time_field78822.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.time_field78822.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field78822);

/**
 * Creates a url input field.
 */
sablono.core.url_field78837 = (function sablono$core$url_field78837(var_args){
var G__78840 = arguments.length;
switch (G__78840) {
case 1:
return sablono.core.url_field78837.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field78837.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field78837.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__78607__auto__);
});

sablono.core.url_field78837.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.url_field78837.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field78837);

/**
 * Creates a week input field.
 */
sablono.core.week_field78841 = (function sablono$core$week_field78841(var_args){
var G__78850 = arguments.length;
switch (G__78850) {
case 1:
return sablono.core.week_field78841.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field78841.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field78841.cljs$core$IFn$_invoke$arity$1 = (function (name__78607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__78607__auto__);
});

sablono.core.week_field78841.cljs$core$IFn$_invoke$arity$2 = (function (name__78607__auto__,value__78608__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__78607__auto__,value__78608__auto__);
});

sablono.core.week_field78841.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field78841);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box78856 = (function sablono$core$check_box78856(var_args){
var G__78863 = arguments.length;
switch (G__78863) {
case 1:
return sablono.core.check_box78856.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box78856.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box78856.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box78856.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.check_box78856.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box78856.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box78856.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box78856);
/**
 * Creates a radio button.
 */
sablono.core.radio_button78870 = (function sablono$core$radio_button78870(var_args){
var G__78872 = arguments.length;
switch (G__78872) {
case 1:
return sablono.core.radio_button78870.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button78870.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button78870.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button78870.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
});

sablono.core.radio_button78870.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button78870.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button78870.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button78870);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__78877 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__78877);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options78879 = (function sablono$core$select_options78879(coll){
var iter__4523__auto__ = (function sablono$core$select_options78879_$_iter__78880(s__78881){
return (new cljs.core.LazySeq(null,(function (){
var s__78881__$1 = s__78881;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__78881__$1);
if(temp__5735__auto__){
var s__78881__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78881__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__78881__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__78883 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__78882 = (0);
while(true){
if((i__78882 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__78882);
cljs.core.chunk_append(b__78883,((cljs.core.sequential_QMARK_(x))?(function (){var vec__78885 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78885,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78885,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78885,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options78879.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options78879.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options78879.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__79108 = (i__78882 + (1));
i__78882 = G__79108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78883),sablono$core$select_options78879_$_iter__78880(cljs.core.chunk_rest(s__78881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78883),null);
}
} else {
var x = cljs.core.first(s__78881__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__78890 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78890,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78890,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78890,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options78879.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options78879.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options78879.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options78879_$_iter__78880(cljs.core.rest(s__78881__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options78879);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down78900 = (function sablono$core$drop_down78900(var_args){
var G__78902 = arguments.length;
switch (G__78902) {
case 2:
return sablono.core.drop_down78900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down78900.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down78900.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down78900.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down78900.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down78900.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down78900);
/**
 * Creates a text area element.
 */
sablono.core.text_area78904 = (function sablono$core$text_area78904(var_args){
var G__78906 = arguments.length;
switch (G__78906) {
case 1:
return sablono.core.text_area78904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area78904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area78904.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.text_area78904.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area78904.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area78904);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label78908 = (function sablono$core$label78908(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label78908);
/**
 * Creates a submit button.
 */
sablono.core.submit_button78911 = (function sablono$core$submit_button78911(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button78911);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button78914 = (function sablono$core$reset_button78914(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button78914);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to78915 = (function sablono$core$form_to78915(var_args){
var args__4736__auto__ = [];
var len__4730__auto___79127 = arguments.length;
var i__4731__auto___79128 = (0);
while(true){
if((i__4731__auto___79128 < len__4730__auto___79127)){
args__4736__auto__.push((arguments[i__4731__auto___79128]));

var G__79129 = (i__4731__auto___79128 + (1));
i__4731__auto___79128 = G__79129;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to78915.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to78915.cljs$core$IFn$_invoke$arity$variadic = (function (p__78924,body){
var vec__78925 = p__78924;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78925,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78925,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__78928 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__78929 = "_method";
var G__78930 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__78928,G__78929,G__78930) : sablono.core.hidden_field.call(null,G__78928,G__78929,G__78930));
})()], null)),body));
});

sablono.core.form_to78915.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to78915.cljs$lang$applyTo = (function (seq78918){
var G__78919 = cljs.core.first(seq78918);
var seq78918__$1 = cljs.core.next(seq78918);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78919,seq78918__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to78915);

//# sourceMappingURL=sablono.core.js.map
