goog.provide('book.demos.cascading_dropdowns');
goog.require('cljs.core');
goog.require('com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.components');
goog.require('book.elements');
goog.require('taoensso.timbre');
goog.require('com.wsscode.pathom.connect');
book.demos.cascading_dropdowns.option = (function book$demos$cascading_dropdowns$option(value,text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"value","value",305978217),value], null);
});
book.demos.cascading_dropdowns.model_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.cascading-dropdowns","model-resolver","book.demos.cascading-dropdowns/model-resolver",700173473,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"models","models",-1985455662)], null)], null),(function book$demos$cascading_dropdowns$model_resolver(env,_){
var make = new cljs.core.Keyword(null,"make","make",-1284043325).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"models","models",-1985455662),(function (){var G__89046 = make;
var G__89046__$1 = (((G__89046 instanceof cljs.core.Keyword))?G__89046.fqn:null);
switch (G__89046__$1) {
case "ford":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.demos.cascading_dropdowns.option(new cljs.core.Keyword(null,"escort","escort",-1921119179),"Escort"),book.demos.cascading_dropdowns.option(new cljs.core.Keyword(null,"F-150","F-150",1813101546),"F-150")], null);

break;
case "honda":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.demos.cascading_dropdowns.option(new cljs.core.Keyword(null,"civic","civic",-1124334065),"Civic"),book.demos.cascading_dropdowns.option(new cljs.core.Keyword(null,"accort","accort",702516379),"Accord")], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89046__$1)].join('')));

}
})()], null);
}));
/**
 * Wrap an example in an iframe so we can load external CSS without affecting the containing page.
 */
book.demos.cascading_dropdowns.render_example = (function book$demos$cascading_dropdowns$render_example(var_args){
var args__4736__auto__ = [];
var len__4730__auto___89051 = arguments.length;
var i__4731__auto___89052 = (0);
while(true){
if((i__4731__auto___89052 < len__4730__auto___89051)){
args__4736__auto__.push((arguments[i__4731__auto___89052]));

var G__89053 = (i__4731__auto___89052 + (1));
i__4731__auto___89052 = G__89053;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return book.demos.cascading_dropdowns.render_example.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

book.demos.cascading_dropdowns.render_example.cljs$core$IFn$_invoke$arity$variadic = (function (width,height,children){
return book.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),(0),new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"width","width",-384071477),width], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(com.fulcrologic.fulcro.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"example-frame-key"], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["style",({}),".boxed {border: 1px solid black}"]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["link",({"rel": "stylesheet", "href": "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"})]),children));
});

book.demos.cascading_dropdowns.render_example.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
book.demos.cascading_dropdowns.render_example.cljs$lang$applyTo = (function (seq89047){
var G__89048 = cljs.core.first(seq89047);
var seq89047__$1 = cljs.core.next(seq89047);
var G__89049 = cljs.core.first(seq89047__$1);
var seq89047__$2 = cljs.core.next(seq89047__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89048,G__89049,seq89047__$2);
});


//# sourceMappingURL=book.demos.cascading_dropdowns.js.map
