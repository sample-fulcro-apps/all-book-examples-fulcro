goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87747 = arguments.length;
var i__4731__auto___87748 = (0);
while(true){
if((i__4731__auto___87748 < len__4730__auto___87747)){
args__4736__auto__.push((arguments[i__4731__auto___87748]));

var G__87749 = (i__4731__auto___87748 + (1));
i__4731__auto___87748 = G__87749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq87622){
var G__87623 = cljs.core.first(seq87622);
var seq87622__$1 = cljs.core.next(seq87622);
var G__87624 = cljs.core.first(seq87622__$1);
var seq87622__$2 = cljs.core.next(seq87622__$1);
var G__87625 = cljs.core.first(seq87622__$2);
var seq87622__$3 = cljs.core.next(seq87622__$2);
var G__87626 = cljs.core.first(seq87622__$3);
var seq87622__$4 = cljs.core.next(seq87622__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87623,G__87624,G__87625,G__87626,seq87622__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87750 = arguments.length;
var i__4731__auto___87751 = (0);
while(true){
if((i__4731__auto___87751 < len__4730__auto___87750)){
args__4736__auto__.push((arguments[i__4731__auto___87751]));

var G__87752 = (i__4731__auto___87751 + (1));
i__4731__auto___87751 = G__87752;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__87584__auto__,rest__87585__auto__){
var convert_case__87586__auto__ = (function (p1__87582__87587__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__87582__87587__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87585__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__87584__auto__,convert_case__87586__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq87633){
var G__87634 = cljs.core.first(seq87633);
var seq87633__$1 = cljs.core.next(seq87633);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87634,seq87633__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87754 = arguments.length;
var i__4731__auto___87755 = (0);
while(true){
if((i__4731__auto___87755 < len__4730__auto___87754)){
args__4736__auto__.push((arguments[i__4731__auto___87755]));

var G__87756 = (i__4731__auto___87755 + (1));
i__4731__auto___87755 = G__87756;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq87636){
var G__87637 = cljs.core.first(seq87636);
var seq87636__$1 = cljs.core.next(seq87636);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87637,seq87636__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87757 = arguments.length;
var i__4731__auto___87758 = (0);
while(true){
if((i__4731__auto___87758 < len__4730__auto___87757)){
args__4736__auto__.push((arguments[i__4731__auto___87758]));

var G__87759 = (i__4731__auto___87758 + (1));
i__4731__auto___87758 = G__87759;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq87638){
var G__87639 = cljs.core.first(seq87638);
var seq87638__$1 = cljs.core.next(seq87638);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87639,seq87638__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87767 = arguments.length;
var i__4731__auto___87768 = (0);
while(true){
if((i__4731__auto___87768 < len__4730__auto___87767)){
args__4736__auto__.push((arguments[i__4731__auto___87768]));

var G__87769 = (i__4731__auto___87768 + (1));
i__4731__auto___87768 = G__87769;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq87640){
var G__87641 = cljs.core.first(seq87640);
var seq87640__$1 = cljs.core.next(seq87640);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87641,seq87640__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87773 = arguments.length;
var i__4731__auto___87774 = (0);
while(true){
if((i__4731__auto___87774 < len__4730__auto___87773)){
args__4736__auto__.push((arguments[i__4731__auto___87774]));

var G__87776 = (i__4731__auto___87774 + (1));
i__4731__auto___87774 = G__87776;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__87584__auto__,rest__87585__auto__){
var convert_case__87586__auto__ = (function (p1__87582__87587__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__87582__87587__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87585__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__87584__auto__,convert_case__87586__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq87644){
var G__87645 = cljs.core.first(seq87644);
var seq87644__$1 = cljs.core.next(seq87644);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87645,seq87644__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87777 = arguments.length;
var i__4731__auto___87778 = (0);
while(true){
if((i__4731__auto___87778 < len__4730__auto___87777)){
args__4736__auto__.push((arguments[i__4731__auto___87778]));

var G__87779 = (i__4731__auto___87778 + (1));
i__4731__auto___87778 = G__87779;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq87646){
var G__87647 = cljs.core.first(seq87646);
var seq87646__$1 = cljs.core.next(seq87646);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87647,seq87646__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87780 = arguments.length;
var i__4731__auto___87781 = (0);
while(true){
if((i__4731__auto___87781 < len__4730__auto___87780)){
args__4736__auto__.push((arguments[i__4731__auto___87781]));

var G__87782 = (i__4731__auto___87781 + (1));
i__4731__auto___87781 = G__87782;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq87650){
var G__87651 = cljs.core.first(seq87650);
var seq87650__$1 = cljs.core.next(seq87650);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87651,seq87650__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87783 = arguments.length;
var i__4731__auto___87784 = (0);
while(true){
if((i__4731__auto___87784 < len__4730__auto___87783)){
args__4736__auto__.push((arguments[i__4731__auto___87784]));

var G__87785 = (i__4731__auto___87784 + (1));
i__4731__auto___87784 = G__87785;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq87653){
var G__87654 = cljs.core.first(seq87653);
var seq87653__$1 = cljs.core.next(seq87653);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87654,seq87653__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87787 = arguments.length;
var i__4731__auto___87788 = (0);
while(true){
if((i__4731__auto___87788 < len__4730__auto___87787)){
args__4736__auto__.push((arguments[i__4731__auto___87788]));

var G__87789 = (i__4731__auto___87788 + (1));
i__4731__auto___87788 = G__87789;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__87584__auto__,rest__87585__auto__){
var convert_case__87586__auto__ = (function (p1__87582__87587__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__87582__87587__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87585__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__87584__auto__,convert_case__87586__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq87655){
var G__87656 = cljs.core.first(seq87655);
var seq87655__$1 = cljs.core.next(seq87655);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87656,seq87655__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87790 = arguments.length;
var i__4731__auto___87791 = (0);
while(true){
if((i__4731__auto___87791 < len__4730__auto___87790)){
args__4736__auto__.push((arguments[i__4731__auto___87791]));

var G__87792 = (i__4731__auto___87791 + (1));
i__4731__auto___87791 = G__87792;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq87665){
var G__87666 = cljs.core.first(seq87665);
var seq87665__$1 = cljs.core.next(seq87665);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87666,seq87665__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87793 = arguments.length;
var i__4731__auto___87794 = (0);
while(true){
if((i__4731__auto___87794 < len__4730__auto___87793)){
args__4736__auto__.push((arguments[i__4731__auto___87794]));

var G__87795 = (i__4731__auto___87794 + (1));
i__4731__auto___87794 = G__87795;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq87667){
var G__87668 = cljs.core.first(seq87667);
var seq87667__$1 = cljs.core.next(seq87667);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87668,seq87667__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87796 = arguments.length;
var i__4731__auto___87797 = (0);
while(true){
if((i__4731__auto___87797 < len__4730__auto___87796)){
args__4736__auto__.push((arguments[i__4731__auto___87797]));

var G__87798 = (i__4731__auto___87797 + (1));
i__4731__auto___87797 = G__87798;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq87671){
var G__87672 = cljs.core.first(seq87671);
var seq87671__$1 = cljs.core.next(seq87671);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87672,seq87671__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87800 = arguments.length;
var i__4731__auto___87801 = (0);
while(true){
if((i__4731__auto___87801 < len__4730__auto___87800)){
args__4736__auto__.push((arguments[i__4731__auto___87801]));

var G__87802 = (i__4731__auto___87801 + (1));
i__4731__auto___87801 = G__87802;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__87584__auto__,rest__87585__auto__){
var convert_case__87586__auto__ = (function (p1__87582__87587__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__87582__87587__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87585__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__87584__auto__,convert_case__87586__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq87673){
var G__87674 = cljs.core.first(seq87673);
var seq87673__$1 = cljs.core.next(seq87673);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87674,seq87673__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87808 = arguments.length;
var i__4731__auto___87809 = (0);
while(true){
if((i__4731__auto___87809 < len__4730__auto___87808)){
args__4736__auto__.push((arguments[i__4731__auto___87809]));

var G__87811 = (i__4731__auto___87809 + (1));
i__4731__auto___87809 = G__87811;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq87685){
var G__87686 = cljs.core.first(seq87685);
var seq87685__$1 = cljs.core.next(seq87685);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87686,seq87685__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87813 = arguments.length;
var i__4731__auto___87814 = (0);
while(true){
if((i__4731__auto___87814 < len__4730__auto___87813)){
args__4736__auto__.push((arguments[i__4731__auto___87814]));

var G__87815 = (i__4731__auto___87814 + (1));
i__4731__auto___87814 = G__87815;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq87696){
var G__87697 = cljs.core.first(seq87696);
var seq87696__$1 = cljs.core.next(seq87696);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87697,seq87696__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87819 = arguments.length;
var i__4731__auto___87820 = (0);
while(true){
if((i__4731__auto___87820 < len__4730__auto___87819)){
args__4736__auto__.push((arguments[i__4731__auto___87820]));

var G__87821 = (i__4731__auto___87820 + (1));
i__4731__auto___87820 = G__87821;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq87699){
var G__87700 = cljs.core.first(seq87699);
var seq87699__$1 = cljs.core.next(seq87699);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87700,seq87699__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87823 = arguments.length;
var i__4731__auto___87824 = (0);
while(true){
if((i__4731__auto___87824 < len__4730__auto___87823)){
args__4736__auto__.push((arguments[i__4731__auto___87824]));

var G__87825 = (i__4731__auto___87824 + (1));
i__4731__auto___87824 = G__87825;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__87584__auto__,rest__87585__auto__){
var convert_case__87586__auto__ = (function (p1__87582__87587__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__87582__87587__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87585__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__87584__auto__,convert_case__87586__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq87703){
var G__87704 = cljs.core.first(seq87703);
var seq87703__$1 = cljs.core.next(seq87703);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87704,seq87703__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87826 = arguments.length;
var i__4731__auto___87827 = (0);
while(true){
if((i__4731__auto___87827 < len__4730__auto___87826)){
args__4736__auto__.push((arguments[i__4731__auto___87827]));

var G__87828 = (i__4731__auto___87827 + (1));
i__4731__auto___87827 = G__87828;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq87705){
var G__87706 = cljs.core.first(seq87705);
var seq87705__$1 = cljs.core.next(seq87705);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87706,seq87705__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87829 = arguments.length;
var i__4731__auto___87830 = (0);
while(true){
if((i__4731__auto___87830 < len__4730__auto___87829)){
args__4736__auto__.push((arguments[i__4731__auto___87830]));

var G__87831 = (i__4731__auto___87830 + (1));
i__4731__auto___87830 = G__87831;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq87707){
var G__87708 = cljs.core.first(seq87707);
var seq87707__$1 = cljs.core.next(seq87707);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87708,seq87707__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87836 = arguments.length;
var i__4731__auto___87837 = (0);
while(true){
if((i__4731__auto___87837 < len__4730__auto___87836)){
args__4736__auto__.push((arguments[i__4731__auto___87837]));

var G__87838 = (i__4731__auto___87837 + (1));
i__4731__auto___87837 = G__87838;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq87709){
var G__87710 = cljs.core.first(seq87709);
var seq87709__$1 = cljs.core.next(seq87709);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87710,seq87709__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87843 = arguments.length;
var i__4731__auto___87844 = (0);
while(true){
if((i__4731__auto___87844 < len__4730__auto___87843)){
args__4736__auto__.push((arguments[i__4731__auto___87844]));

var G__87845 = (i__4731__auto___87844 + (1));
i__4731__auto___87844 = G__87845;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__87584__auto__,rest__87585__auto__){
var convert_case__87586__auto__ = (function (p1__87582__87587__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__87582__87587__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87585__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__87584__auto__,convert_case__87586__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq87716){
var G__87717 = cljs.core.first(seq87716);
var seq87716__$1 = cljs.core.next(seq87716);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87717,seq87716__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87848 = arguments.length;
var i__4731__auto___87849 = (0);
while(true){
if((i__4731__auto___87849 < len__4730__auto___87848)){
args__4736__auto__.push((arguments[i__4731__auto___87849]));

var G__87850 = (i__4731__auto___87849 + (1));
i__4731__auto___87849 = G__87850;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq87720){
var G__87721 = cljs.core.first(seq87720);
var seq87720__$1 = cljs.core.next(seq87720);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87721,seq87720__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87853 = arguments.length;
var i__4731__auto___87854 = (0);
while(true){
if((i__4731__auto___87854 < len__4730__auto___87853)){
args__4736__auto__.push((arguments[i__4731__auto___87854]));

var G__87855 = (i__4731__auto___87854 + (1));
i__4731__auto___87854 = G__87855;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq87725){
var G__87726 = cljs.core.first(seq87725);
var seq87725__$1 = cljs.core.next(seq87725);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87726,seq87725__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87856 = arguments.length;
var i__4731__auto___87857 = (0);
while(true){
if((i__4731__auto___87857 < len__4730__auto___87856)){
args__4736__auto__.push((arguments[i__4731__auto___87857]));

var G__87858 = (i__4731__auto___87857 + (1));
i__4731__auto___87857 = G__87858;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq87730){
var G__87731 = cljs.core.first(seq87730);
var seq87730__$1 = cljs.core.next(seq87730);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87731,seq87730__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87860 = arguments.length;
var i__4731__auto___87861 = (0);
while(true){
if((i__4731__auto___87861 < len__4730__auto___87860)){
args__4736__auto__.push((arguments[i__4731__auto___87861]));

var G__87862 = (i__4731__auto___87861 + (1));
i__4731__auto___87861 = G__87862;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__87584__auto__,rest__87585__auto__){
var convert_case__87586__auto__ = (function (p1__87582__87587__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__87582__87587__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87585__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__87584__auto__,convert_case__87586__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq87732){
var G__87733 = cljs.core.first(seq87732);
var seq87732__$1 = cljs.core.next(seq87732);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87733,seq87732__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87866 = arguments.length;
var i__4731__auto___87867 = (0);
while(true){
if((i__4731__auto___87867 < len__4730__auto___87866)){
args__4736__auto__.push((arguments[i__4731__auto___87867]));

var G__87869 = (i__4731__auto___87867 + (1));
i__4731__auto___87867 = G__87869;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq87739){
var G__87740 = cljs.core.first(seq87739);
var seq87739__$1 = cljs.core.next(seq87739);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87740,seq87739__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87871 = arguments.length;
var i__4731__auto___87872 = (0);
while(true){
if((i__4731__auto___87872 < len__4730__auto___87871)){
args__4736__auto__.push((arguments[i__4731__auto___87872]));

var G__87873 = (i__4731__auto___87872 + (1));
i__4731__auto___87872 = G__87873;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq87742){
var G__87743 = cljs.core.first(seq87742);
var seq87742__$1 = cljs.core.next(seq87742);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87743,seq87742__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___87874 = arguments.length;
var i__4731__auto___87875 = (0);
while(true){
if((i__4731__auto___87875 < len__4730__auto___87874)){
args__4736__auto__.push((arguments[i__4731__auto___87875]));

var G__87876 = (i__4731__auto___87875 + (1));
i__4731__auto___87875 = G__87876;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__87589__auto__,rest__87590__auto__){
if((!((s__87589__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__87589__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__87589__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__87590__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq87745){
var G__87746 = cljs.core.first(seq87745);
var seq87745__$1 = cljs.core.next(seq87745);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87746,seq87745__$1);
});


//# sourceMappingURL=camel_snake_kebab.core.js.map
