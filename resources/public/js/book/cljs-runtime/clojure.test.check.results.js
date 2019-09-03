goog.provide('clojure.test.check.results');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.test.check.results.Result = function(){};

/**
 * A boolean indicating if the result passed.
 */
clojure.test.check.results.pass_QMARK_ = (function clojure$test$check$results$pass_QMARK_(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$pass_QMARK_$arity$1 == null)))))){
return result.clojure$test$check$results$Result$pass_QMARK_$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.pass_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.pass_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.pass?",result);
}
}
}
});

/**
 * A map of data about the trial.
 */
clojure.test.check.results.result_data = (function clojure$test$check$results$result_data(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$result_data$arity$1 == null)))))){
return result.clojure$test$check$results$Result$result_data$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.result_data[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.result_data["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.result-data",result);
}
}
}
});

goog.object.set(clojure.test.check.results.Result,"_",true);

var G__45305_45325 = clojure.test.check.results.pass_QMARK_;
var G__45306_45326 = "_";
var G__45307_45327 = ((function (G__45305_45325,G__45306_45326){
return (function (this$){
return cljs.core.boolean$(this$);
});})(G__45305_45325,G__45306_45326))
;
goog.object.set(G__45305_45325,G__45306_45326,G__45307_45327);

var G__45308_45328 = clojure.test.check.results.result_data;
var G__45309_45329 = "_";
var G__45310_45330 = ((function (G__45308_45328,G__45309_45329){
return (function (this$){
return null;
});})(G__45308_45328,G__45309_45329))
;
goog.object.set(G__45308_45328,G__45309_45329,G__45310_45330);

goog.object.set(clojure.test.check.results.Result,"null",true);

var G__45311_45331 = clojure.test.check.results.pass_QMARK_;
var G__45312_45332 = "null";
var G__45313_45333 = ((function (G__45311_45331,G__45312_45332){
return (function (this$){
return false;
});})(G__45311_45331,G__45312_45332))
;
goog.object.set(G__45311_45331,G__45312_45332,G__45313_45333);

var G__45314_45335 = clojure.test.check.results.result_data;
var G__45315_45336 = "null";
var G__45316_45337 = ((function (G__45314_45335,G__45315_45336){
return (function (this$){
return null;
});})(G__45314_45335,G__45315_45336))
;
goog.object.set(G__45314_45335,G__45315_45336,G__45316_45337);

//# sourceMappingURL=clojure.test.check.results.js.map
