goog.provide('ghostwheel.reporting');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('cljs.test');
goog.require('expound.alpha');
goog.require('clojure.string');
goog.require('ghostwheel.logging');
ghostwheel.reporting._STAR_all_tests_successful = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
ghostwheel.reporting.wrap = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.wrap_line,(80));
ghostwheel.reporting.inc_report_counter_BANG_ = cljs.test.inc_report_counter_BANG_;
ghostwheel.reporting.warning_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"orange0","orange0",1459969095).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null);
ghostwheel.reporting.snippets = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498)," => Test coverage incomplete:",new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005)," => No generative testing performed"], null);
if((typeof ghostwheel !== 'undefined') && (typeof ghostwheel.reporting !== 'undefined') && (typeof ghostwheel.reporting.report !== 'undefined')){
} else {
ghostwheel.reporting.report = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__68646 = cljs.core.get_global_hierarchy;
return (fexpr__68646.cljs$core$IFn$_invoke$arity$0 ? fexpr__68646.cljs$core$IFn$_invoke$arity$0() : fexpr__68646.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ghostwheel.reporting","report"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),(function (m){
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["Checking ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m))," ..."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"base01","base01",277019065).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),(function (m){
return ghostwheel.logging.group_end();
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"summary","summary",380847952),(function (m){
var map__68647 = m;
var map__68647__$1 = (((((!((map__68647 == null))))?(((((map__68647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68647):map__68647);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68647__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68647__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68647__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68647__$1,new cljs.core.Keyword(null,"test","test",577538877));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68647__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var passed_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pass,test);
var warnings_QMARK_ = (function (){var G__68649 = warn;
if((G__68649 == null)){
return null;
} else {
return (G__68649 > (0));
}
})();
var color = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(test,(0)))?new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors):((passed_QMARK_)?new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors):new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)
));
var label = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(test,(0)))?"No active tests found":((passed_QMARK_)?["Passed all ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," checks"].join(''):["Failed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," checks",(((error > (0)))?["; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)," test error(s)"].join(''):null)].join('')
));
ghostwheel.logging.group_end();

if(cljs.core.truth_((function (){var or__4131__auto__ = (!(passed_QMARK_));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return warnings_QMARK_;
}
})())){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),color], null));

if(cljs.core.truth_(warnings_QMARK_)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(warn)," warning(s)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"orange0","orange0",1459969095).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));
} else {
}

return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((5),ghostwheel.logging.group_end));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
var map__68650 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
var map__68650__$1 = (((((!((map__68650 == null))))?(((((map__68650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68650):map__68650);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68650__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var fspec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68650__$1,new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275));
var spec_checks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68650__$1,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688));
var check_coverage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68650__$1,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858));
var marked_unsafe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68650__$1,new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850));
var report_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68650__$1,new cljs.core.Keyword("ghostwheel.reporting","report-output","ghostwheel.reporting/report-output",-1798642788));
var G__68658_68777 = new cljs.core.Keyword(null,"pass","pass",1574159993);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__68658_68777) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__68658_68777));

if(cljs.core.truth_(check_coverage)){
if(cljs.core.truth_(marked_unsafe)){
var G__68659_68778 = new cljs.core.Keyword(null,"warn","warn",-436710552);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__68659_68778) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__68659_68778));

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 Function marked as unsafe.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets))].join(''),ghostwheel.reporting.warning_style);

return ghostwheel.logging.group_end();
} else {
if(cljs.core.not(fspec)){
var G__68663_68779 = new cljs.core.Keyword(null,"warn","warn",-436710552);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__68663_68779) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__68663_68779));

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 Missing fspec(s)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets))].join(''),ghostwheel.reporting.warning_style);

return ghostwheel.logging.group_end();
} else {
if(cljs.core.not(spec_checks)){
var G__68664_68780 = new cljs.core.Keyword(null,"warn","warn",-436710552);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__68664_68780) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__68664_68780));

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 Number of tests set to 0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets))].join(''),ghostwheel.reporting.warning_style);

return ghostwheel.logging.group_end();
} else {
return null;

}
}
}
} else {
return null;
}
}));
ghostwheel.reporting.explain_problem_str = (function ghostwheel$reporting$explain_problem_str(failure_type,problem){
var map__68670 = problem;
var map__68670__$1 = (((((!((map__68670 == null))))?(((((map__68670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68670):map__68670);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68670__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68670__$1,new cljs.core.Keyword(null,"val","val",128701612));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68670__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68670__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68670__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var G__68677 = failure_type;
var G__68677__$1 = (((G__68677 instanceof cljs.core.Keyword))?G__68677.fqn:null);
switch (G__68677__$1) {
case "check-failed":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"not","not",-595976884),pred], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ret","ret",-468222814)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at","at",1476951349),path], null):null),((cljs.core.seq(via))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"via","via",-1904457336),via], null):null)], null));

break;
case "instrument":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"not","not",-595976884),pred,new cljs.core.Keyword(null,"at","at",1476951349),path], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(via))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"via","via",-1904457336),via], null):null)], null));

break;
case "else":
return problem;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68677__$1)].join('')));

}
});
ghostwheel.reporting.issue_msg = "\nPlease file an issue at https://github.com/gnl/ghostwheel/issues if you encounter false positives or negatives in side effect detection.";
ghostwheel.reporting.report_unexpected_side_effects = (function ghostwheel$reporting$report_unexpected_side_effects(message){
var map__68687 = message;
var map__68687__$1 = (((((!((map__68687 == null))))?(((((map__68687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68687):map__68687);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68687__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var found_fx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68687__$1,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799));
ghostwheel.logging.log_bold("Possible side effects detected in function marked as safe:\n");

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.log,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__68687,map__68687__$1,fn_name,found_fx){
return (function (p__68693){
var vec__68694 = p__68693;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68694,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68694,(1),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68694,(2),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),(cljs.core.truth_(form)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"at","at",-1177484420,null),form], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(details)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),details], null):null)], 0)));
});})(map__68687,map__68687__$1,fn_name,found_fx))
,found_fx)));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((function (){var G__68702 = ["=> Either remove the side effects, rename the function to '",[cljs.core.name(fn_name),"!'"].join('')," to mark it as unsafe, or add ^::g/ignore-fx to its metadata to disable this warning and consider the function safe for automated generative testing."].join('');
return (ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1(G__68702) : ghostwheel.reporting.wrap.call(null,G__68702));
})());

return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.issue_msg) : ghostwheel.reporting.wrap.call(null,ghostwheel.reporting.issue_msg)));
});
ghostwheel.reporting.report_unexpected_safety = (function ghostwheel$reporting$report_unexpected_safety(message){
var safe_name = clojure.string.replace(cljs.core.name(new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528).cljs$core$IFn$_invoke$arity$1(message)),/!$/,"");
ghostwheel.logging.log_bold("No side effects detected in function marked as unsafe.");

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((function (){var G__68707 = ["=> If safe, rename to '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(safe_name),"'. If unsafe, rename the called unsafe functions to suffix them with a '!', or add the ^::g/ignore-fx metadata to disable this check."].join('');
return (ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1(G__68707) : ghostwheel.reporting.wrap.call(null,G__68707));
})());

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.issue_msg) : ghostwheel.reporting.wrap.call(null,ghostwheel.reporting.issue_msg)));

return ghostwheel.logging.log;
});
ghostwheel.reporting.report_spec_check = (function ghostwheel$reporting$report_spec_check(p__68709){
var map__68710 = p__68709;
var map__68710__$1 = (((((!((map__68710 == null))))?(((((map__68710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68710):map__68710);
var spec_checks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68710__$1,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68710__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var seq__68712 = cljs.core.seq(spec_checks);
var chunk__68716 = null;
var count__68717 = (0);
var i__68718 = (0);
while(true){
if((i__68718 < count__68717)){
var check = chunk__68716.cljs$core$IIndexed$_nth$arity$2(null,i__68718);
var test_ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(check,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960));
if(cljs.core.not(new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(test_ret))){
var spec_error_68782 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(test_ret);
var data_68783 = spec_error_68782.data;
var msg_68784 = (function (){try{return spec_error_68782.message;
}catch (e68744){if((e68744 instanceof Object)){
var _ = e68744;
return null;
} else {
throw e68744;

}
}})();
if(cljs.core.not(data_68783)){
ghostwheel.logging.log_bold(msg_68784);
} else {
var temp__5735__auto___68785 = new cljs.core.Keyword("cljs.spec.test.alpha","args","cljs.spec.test.alpha/args",78409593).cljs$core$IFn$_invoke$arity$1(data_68783);
if(cljs.core.truth_(temp__5735__auto___68785)){
var args_68786 = temp__5735__auto___68785;
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("\nCall:");

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(cljs.core.with_meta(fn_name,null),args_68786));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(data_68783),new cljs.core.Keyword(null,"instrument","instrument",-960698844))){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split_lines(msg_68784))),"\n"].join(''));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__68750_68790 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__68751_68791 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__68752_68792 = true;
var _STAR_print_fn_STAR__temp_val__68753_68793 = ((function (seq__68712,chunk__68716,count__68717,i__68718,_STAR_print_newline_STAR__orig_val__68750_68790,_STAR_print_fn_STAR__orig_val__68751_68791,_STAR_print_newline_STAR__temp_val__68752_68792,sb__4661__auto__,spec_error_68782,data_68783,msg_68784,test_ret,check,map__68710,map__68710__$1,spec_checks,fn_name){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__68712,chunk__68716,count__68717,i__68718,_STAR_print_newline_STAR__orig_val__68750_68790,_STAR_print_fn_STAR__orig_val__68751_68791,_STAR_print_newline_STAR__temp_val__68752_68792,sb__4661__auto__,spec_error_68782,data_68783,msg_68784,test_ret,check,map__68710,map__68710__$1,spec_checks,fn_name))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68752_68792;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68753_68793;

try{var fexpr__68754_68797 = expound.alpha.custom_printer(null);
(fexpr__68754_68797.cljs$core$IFn$_invoke$arity$1 ? fexpr__68754_68797.cljs$core$IFn$_invoke$arity$1(data_68783) : fexpr__68754_68797.call(null,data_68783));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68751_68791;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68750_68790;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),"\n"].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_report_output_STAR_,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2("Raw error data:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"base0","base0",128742798).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_68784);

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data_68783);

ghostwheel.logging.group_end();
} else {
}
}


var G__68801 = seq__68712;
var G__68802 = chunk__68716;
var G__68803 = count__68717;
var G__68804 = (i__68718 + (1));
seq__68712 = G__68801;
chunk__68716 = G__68802;
count__68717 = G__68803;
i__68718 = G__68804;
continue;
} else {
var G__68806 = seq__68712;
var G__68807 = chunk__68716;
var G__68808 = count__68717;
var G__68809 = (i__68718 + (1));
seq__68712 = G__68806;
chunk__68716 = G__68807;
count__68717 = G__68808;
i__68718 = G__68809;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68712);
if(temp__5735__auto__){
var seq__68712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68712__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__68712__$1);
var G__68810 = cljs.core.chunk_rest(seq__68712__$1);
var G__68811 = c__4550__auto__;
var G__68812 = cljs.core.count(c__4550__auto__);
var G__68813 = (0);
seq__68712 = G__68810;
chunk__68716 = G__68811;
count__68717 = G__68812;
i__68718 = G__68813;
continue;
} else {
var check = cljs.core.first(seq__68712__$1);
var test_ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(check,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960));
if(cljs.core.not(new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(test_ret))){
var spec_error_68814 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(test_ret);
var data_68815 = spec_error_68814.data;
var msg_68816 = (function (){try{return spec_error_68814.message;
}catch (e68755){if((e68755 instanceof Object)){
var _ = e68755;
return null;
} else {
throw e68755;

}
}})();
if(cljs.core.not(data_68815)){
ghostwheel.logging.log_bold(msg_68816);
} else {
var temp__5735__auto___68817__$1 = new cljs.core.Keyword("cljs.spec.test.alpha","args","cljs.spec.test.alpha/args",78409593).cljs$core$IFn$_invoke$arity$1(data_68815);
if(cljs.core.truth_(temp__5735__auto___68817__$1)){
var args_68818 = temp__5735__auto___68817__$1;
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("\nCall:");

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(cljs.core.with_meta(fn_name,null),args_68818));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(data_68815),new cljs.core.Keyword(null,"instrument","instrument",-960698844))){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split_lines(msg_68816))),"\n"].join(''));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__68761_68819 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__68762_68820 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__68763_68821 = true;
var _STAR_print_fn_STAR__temp_val__68764_68822 = ((function (seq__68712,chunk__68716,count__68717,i__68718,_STAR_print_newline_STAR__orig_val__68761_68819,_STAR_print_fn_STAR__orig_val__68762_68820,_STAR_print_newline_STAR__temp_val__68763_68821,sb__4661__auto__,spec_error_68814,data_68815,msg_68816,test_ret,check,seq__68712__$1,temp__5735__auto__,map__68710,map__68710__$1,spec_checks,fn_name){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__68712,chunk__68716,count__68717,i__68718,_STAR_print_newline_STAR__orig_val__68761_68819,_STAR_print_fn_STAR__orig_val__68762_68820,_STAR_print_newline_STAR__temp_val__68763_68821,sb__4661__auto__,spec_error_68814,data_68815,msg_68816,test_ret,check,seq__68712__$1,temp__5735__auto__,map__68710,map__68710__$1,spec_checks,fn_name))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68763_68821;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68764_68822;

try{var fexpr__68766_68823 = expound.alpha.custom_printer(null);
(fexpr__68766_68823.cljs$core$IFn$_invoke$arity$1 ? fexpr__68766_68823.cljs$core$IFn$_invoke$arity$1(data_68815) : fexpr__68766_68823.call(null,data_68815));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68762_68820;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68761_68819;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),"\n"].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_report_output_STAR_,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2("Raw error data:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"base0","base0",128742798).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_68816);

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data_68815);

ghostwheel.logging.group_end();
} else {
}
}


var G__68825 = cljs.core.next(seq__68712__$1);
var G__68826 = null;
var G__68827 = (0);
var G__68828 = (0);
seq__68712 = G__68825;
chunk__68716 = G__68826;
count__68717 = G__68827;
i__68718 = G__68828;
continue;
} else {
var G__68829 = cljs.core.next(seq__68712__$1);
var G__68830 = null;
var G__68831 = (0);
var G__68832 = (0);
seq__68712 = G__68829;
chunk__68716 = G__68830;
count__68717 = G__68831;
i__68718 = G__68832;
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
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
var message = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
var map__68767 = message;
var map__68767__$1 = (((((!((map__68767 == null))))?(((((map__68767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68767):map__68767);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68767__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68767__$1,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845));
var summary = (function (){var G__68769 = failure;
var G__68769__$1 = (((G__68769 instanceof cljs.core.Keyword))?G__68769.fqn:null);
switch (G__68769__$1) {
case "ghostwheel.reporting/unexpected-fx":
return "Possible side effects detected";

break;
case "ghostwheel.reporting/unexpected-safety":
return "Expected side effects not detected";

break;
case "ghostwheel.reporting/spec-failure":
return "Spec check";

break;
default:
return null;

}
})();
var start_group = ghostwheel.logging.group;
var G__68770_68834 = new cljs.core.Keyword(null,"fail","fail",1706214930);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__68770_68834) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__68770_68834));

var G__68771_68835 = ["FAILED: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(summary)].join('');
var G__68772_68836 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null);
(start_group.cljs$core$IFn$_invoke$arity$2 ? start_group.cljs$core$IFn$_invoke$arity$2(G__68771_68835,G__68772_68836) : start_group.call(null,G__68771_68835,G__68772_68836));

var G__68773_68837 = failure;
var G__68773_68838__$1 = (((G__68773_68837 instanceof cljs.core.Keyword))?G__68773_68837.fqn:null);
switch (G__68773_68838__$1) {
case "ghostwheel.reporting/unexpected-fx":
ghostwheel.reporting.report_unexpected_side_effects(message);

break;
case "ghostwheel.reporting/unexpected-safety":
ghostwheel.reporting.report_unexpected_safety(message);

break;
case "ghostwheel.reporting/spec-failure":
ghostwheel.reporting.report_spec_check(message);

break;
default:
ghostwheel.logging.log_bold(["Undefined failure reason: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(failure)].join(''));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(message);

}

return ghostwheel.logging.group_end();
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563),(function (m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ghostwheel.reporting._STAR_all_tests_successful,(function (p1__68774_SHARP_,p2__68775_SHARP_){
var and__4120__auto__ = p1__68774_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return p2__68775_SHARP_;
} else {
return and__4120__auto__;
}
}),cljs.test.successful_QMARK_(m));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));

//# sourceMappingURL=ghostwheel.reporting.js.map
