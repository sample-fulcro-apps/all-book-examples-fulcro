goog.provide('ghostwheel.logging');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
ghostwheel.logging._STAR_nesting = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
ghostwheel.logging._STAR_report_output_STAR_ = new cljs.core.Keyword(null,"js-console","js-console",1240105791);
ghostwheel.logging.ghostwheel_colors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"base1","base1",-1379049855),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"purple1","purple1",1665392325),new cljs.core.Keyword(null,"base3","base3",-1172895995),new cljs.core.Keyword(null,"purple0","purple0",-1668477083),new cljs.core.Keyword(null,"orange0","orange0",1459969095),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"base2","base2",1736987560),new cljs.core.Keyword(null,"green0","green0",935416937),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"green1","green1",1162170698),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"purple2","purple2",-1568108659),new cljs.core.Keyword(null,"base0","base0",128742798),new cljs.core.Keyword(null,"orange1","orange1",1540366992),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"base00","base00",-1549387019),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"base01","base01",277019065),new cljs.core.Keyword(null,"base03","base03",269270489),new cljs.core.Keyword(null,"base02","base02",-1734030562),new cljs.core.Keyword(null,"black","black",1294279647)],["#93a1a1","#cb4b16","#b87a93","#fdf6e3","#967a93","#fe8709","#b58900","#eee8d5","#82da38","#859900","#54a627","#2aa198","#6c71c4","#7d9cf8","#839496","#f17d3e","#dc322f","#268bd2","#657b83","#d33682","#586e75","#002b36","#073642","#002b36"]);
ghostwheel.logging.ops_with_bindings = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),null,new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),null,new cljs.core.Symbol("ghostwheel.tracer","extend-protocol","ghostwheel.tracer/extend-protocol",-1387613853,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,new cljs.core.Symbol("ghostwheel.tracer","defmethod","ghostwheel.tracer/defmethod",41043138,null),null,new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),null,new cljs.core.Symbol("ghostwheel.tracer","defn-","ghostwheel.tracer/defn-",410431175,null),null,new cljs.core.Symbol("ghostwheel.tracer","let","ghostwheel.tracer/let",-1135560835,null),null,new cljs.core.Symbol("ghostwheel.tracer","defn","ghostwheel.tracer/defn",-1888156609,null),null,new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),null,new cljs.core.Symbol("ghostwheel.tracer","reify","ghostwheel.tracer/reify",-914829536,null),null,new cljs.core.Symbol("ghostwheel.tracer","fn","ghostwheel.tracer/fn",-1296883590,null),null,new cljs.core.Symbol(null,"reify","reify",1885539699,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),null,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),null,new cljs.core.Symbol("ghostwheel.tracer","deftype","ghostwheel.tracer/deftype",-1592147015,null),null,new cljs.core.Symbol("ghostwheel.tracer","defrecord","ghostwheel.tracer/defrecord",-917570066,null),null,new cljs.core.Symbol("ghostwheel.tracer","extend-type","ghostwheel.tracer/extend-type",704466912,null),null], null), null);
ghostwheel.logging.wrap_line = (function ghostwheel$logging$wrap_line(size,text){
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,["~{~<~%~1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),":;~A~> ~}"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/ /)], 0));
});
ghostwheel.logging.wrap = (function ghostwheel$logging$wrap(line){
return ghostwheel.logging.wrap_line((80),line);
});
ghostwheel.logging.truncate_string = (function ghostwheel$logging$truncate_string(long_string,limit){
if((cljs.core.count(long_string) > limit)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(long_string,(0),limit)),"..."].join('');
} else {
return long_string;
}
});
ghostwheel.logging.get_styled_label = (function ghostwheel$logging$get_styled_label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___68045 = arguments.length;
var i__4731__auto___68046 = (0);
while(true){
if((i__4731__auto___68046 < len__4730__auto___68045)){
args__4736__auto__.push((arguments[i__4731__auto___68046]));

var G__68047 = (i__4731__auto___68046 + (1));
i__4731__auto___68046 = G__68047;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic = (function (label,p__67630,output,p__67631){
var map__67644 = p__67630;
var map__67644__$1 = (((((!((map__67644 == null))))?(((((map__67644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67644):map__67644);
var style = map__67644__$1;
var foreground = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67644__$1,new cljs.core.Keyword("ghostwheel.logging","foreground","ghostwheel.logging/foreground",-473507023));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67644__$1,new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67644__$1,new cljs.core.Keyword("ghostwheel.logging","weight","ghostwheel.logging/weight",-88030216));
var vec__67645 = p__67631;
var length = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67645,(0),null);
if(cljs.core.not(style)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null);
} else {
var label__$1 = (function (){var G__67656 = (cljs.core.truth_(length)?ghostwheel.logging.truncate_string(label,length):label);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
return ["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67656)].join('');
} else {
return G__67656;
}
})();
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791)))?["color: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(foreground)?foreground:(cljs.core.truth_(background)?"white":new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)
))),";","background: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(background)?background:"white")),";","font-weight: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(weight)?weight:"500")),";",(cljs.core.truth_(background)?"text-shadow: 0.5px 0.5px black;":null),(cljs.core.truth_(background)?"padding: 2px 6px; border-radius: 2px;":null)].join(''):null);
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1,style__$1], null)));
}
});

ghostwheel.logging.get_styled_label.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
ghostwheel.logging.get_styled_label.cljs$lang$applyTo = (function (seq67600){
var G__67604 = cljs.core.first(seq67600);
var seq67600__$1 = cljs.core.next(seq67600);
var G__67605 = cljs.core.first(seq67600__$1);
var seq67600__$2 = cljs.core.next(seq67600__$1);
var G__67606 = cljs.core.first(seq67600__$2);
var seq67600__$3 = cljs.core.next(seq67600__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67604,G__67605,G__67606,seq67600__$3);
});

ghostwheel.logging.plain_log = (function ghostwheel$logging$plain_log(msg){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67669_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ghostwheel.logging._STAR_nesting)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67669_SHARP_)].join('');
}),clojure.string.split_lines(((typeof msg === 'string')?msg:(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67673_68067 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67674_68068 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67675_68069 = true;
var _STAR_print_fn_STAR__temp_val__67676_68070 = ((function (_STAR_print_newline_STAR__orig_val__67673_68067,_STAR_print_fn_STAR__orig_val__67674_68068,_STAR_print_newline_STAR__temp_val__67675_68069,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__67673_68067,_STAR_print_fn_STAR__orig_val__67674_68068,_STAR_print_newline_STAR__temp_val__67675_68069,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67675_68069;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67676_68070;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(msg);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67674_68068;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67673_68067;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()))))], 0));
});
ghostwheel.logging.log = (function ghostwheel$logging$log(var_args){
var G__67706 = arguments.length;
switch (G__67706) {
case 0:
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0 = (function (){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2("",null);
});

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(msg,null);
});

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2 = (function (msg,style){
var styled_msg = ghostwheel.logging.get_styled_label(msg,style,ghostwheel.logging._STAR_report_output_STAR_);
var G__67733 = ghostwheel.logging._STAR_report_output_STAR_;
var G__67733__$1 = (((G__67733 instanceof cljs.core.Keyword))?G__67733.fqn:null);
switch (G__67733__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_log,styled_msg);

break;
case "js-console":
return console.log.apply(console,cljs.core.to_array(styled_msg));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67733__$1)].join('')));

}
});

ghostwheel.logging.log.cljs$lang$maxFixedArity = 2;

ghostwheel.logging.DBG = (function ghostwheel$logging$DBG(var_args){
var G__67738 = arguments.length;
switch (G__67738) {
case 0:
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___68074 = arguments.length;
var i__4731__auto___68075 = (0);
while(true){
if((i__4731__auto___68075 < len__4730__auto___68074)){
args_arr__4751__auto__.push((arguments[i__4731__auto___68075]));

var G__68076 = (i__4731__auto___68075 + (1));
i__4731__auto___68075 = G__68076;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((0)),(0),null));
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$variadic(argseq__4752__auto__);

}
});

ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$0 = (function (){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("#> MARK");
});

ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$variadic = (function (msgs){
var seq__67763_68078 = cljs.core.seq(msgs);
var chunk__67764_68079 = null;
var count__67765_68080 = (0);
var i__67766_68081 = (0);
while(true){
if((i__67766_68081 < count__67765_68080)){
var msg_68082 = chunk__67764_68079.cljs$core$IIndexed$_nth$arity$2(null,i__67766_68081);
if((msg_68082 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_68082);
}


var G__68084 = seq__67763_68078;
var G__68085 = chunk__67764_68079;
var G__68086 = count__67765_68080;
var G__68087 = (i__67766_68081 + (1));
seq__67763_68078 = G__68084;
chunk__67764_68079 = G__68085;
count__67765_68080 = G__68086;
i__67766_68081 = G__68087;
continue;
} else {
var temp__5735__auto___68088 = cljs.core.seq(seq__67763_68078);
if(temp__5735__auto___68088){
var seq__67763_68089__$1 = temp__5735__auto___68088;
if(cljs.core.chunked_seq_QMARK_(seq__67763_68089__$1)){
var c__4550__auto___68090 = cljs.core.chunk_first(seq__67763_68089__$1);
var G__68092 = cljs.core.chunk_rest(seq__67763_68089__$1);
var G__68093 = c__4550__auto___68090;
var G__68094 = cljs.core.count(c__4550__auto___68090);
var G__68095 = (0);
seq__67763_68078 = G__68092;
chunk__67764_68079 = G__68093;
count__67765_68080 = G__68094;
i__67766_68081 = G__68095;
continue;
} else {
var msg_68096 = cljs.core.first(seq__67763_68089__$1);
if((msg_68096 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_68096);
}


var G__68098 = cljs.core.next(seq__67763_68089__$1);
var G__68099 = null;
var G__68100 = (0);
var G__68101 = (0);
seq__67763_68078 = G__68098;
chunk__67764_68079 = G__68099;
count__67765_68080 = G__68100;
i__67766_68081 = G__68101;
continue;
}
} else {
}
}
break;
}

return cljs.core.last(msgs);
});

/** @this {Function} */
ghostwheel.logging.DBG.cljs$lang$applyTo = (function (seq67735){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67735));
});

ghostwheel.logging.DBG.cljs$lang$maxFixedArity = (0);

ghostwheel.logging.log_raw = (function ghostwheel$logging$log_raw(var_args){
var args__4736__auto__ = [];
var len__4730__auto___68105 = arguments.length;
var i__4731__auto___68106 = (0);
while(true){
if((i__4731__auto___68106 < len__4730__auto___68105)){
args__4736__auto__.push((arguments[i__4731__auto___68106]));

var G__68107 = (i__4731__auto___68106 + (1));
i__4731__auto___68106 = G__68107;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic = (function (format_strings,objs){
var G__67872 = ghostwheel.logging._STAR_report_output_STAR_;
var G__67872__$1 = (((G__67872 instanceof cljs.core.Keyword))?G__67872.fqn:null);
switch (G__67872__$1) {
case "repl":
var seq__67879 = cljs.core.seq(objs);
var chunk__67880 = null;
var count__67881 = (0);
var i__67882 = (0);
while(true){
if((i__67882 < count__67881)){
var obj = chunk__67880.cljs$core$IIndexed$_nth$arity$2(null,i__67882);
ghostwheel.logging.plain_log(obj);


var G__68112 = seq__67879;
var G__68113 = chunk__67880;
var G__68114 = count__67881;
var G__68115 = (i__67882 + (1));
seq__67879 = G__68112;
chunk__67880 = G__68113;
count__67881 = G__68114;
i__67882 = G__68115;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67879);
if(temp__5735__auto__){
var seq__67879__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67879__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67879__$1);
var G__68119 = cljs.core.chunk_rest(seq__67879__$1);
var G__68120 = c__4550__auto__;
var G__68121 = cljs.core.count(c__4550__auto__);
var G__68122 = (0);
seq__67879 = G__68119;
chunk__67880 = G__68120;
count__67881 = G__68121;
i__67882 = G__68122;
continue;
} else {
var obj = cljs.core.first(seq__67879__$1);
ghostwheel.logging.plain_log(obj);


var G__68123 = cljs.core.next(seq__67879__$1);
var G__68124 = null;
var G__68125 = (0);
var G__68126 = (0);
seq__67879 = G__68123;
chunk__67880 = G__68124;
count__67881 = G__68125;
i__67882 = G__68126;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "js-console":
return console.log.apply(console,cljs.core.to_array(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(format_strings,objs)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67872__$1)].join('')));

}
});

ghostwheel.logging.log_raw.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ghostwheel.logging.log_raw.cljs$lang$applyTo = (function (seq67805){
var G__67806 = cljs.core.first(seq67805);
var seq67805__$1 = cljs.core.next(seq67805);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67806,seq67805__$1);
});

ghostwheel.logging.error = (function ghostwheel$logging$error(msg){
var G__67963 = ghostwheel.logging._STAR_report_output_STAR_;
var G__67963__$1 = (((G__67963 instanceof cljs.core.Keyword))?G__67963.fqn:null);
switch (G__67963__$1) {
case "repl":
ghostwheel.logging.plain_log("ERROR:");

return ghostwheel.logging.plain_log(msg);

break;
case "js-console":
return console.error(msg);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67963__$1)].join('')));

}
});
ghostwheel.logging.plain_group = (function ghostwheel$logging$plain_group(label){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(["|> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__67964_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67964_SHARP_),"| "].join('');
}));
});
ghostwheel.logging.group_STAR_ = (function ghostwheel$logging$group_STAR_(var_args){
var G__67966 = arguments.length;
switch (G__67966) {
case 2:
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (open_QMARK_,label){
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3(open_QMARK_,label,null);
});

ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (open_QMARK_,label,style){
var styled_label = ghostwheel.logging.get_styled_label(label,style,ghostwheel.logging._STAR_report_output_STAR_);
var G__67969 = ghostwheel.logging._STAR_report_output_STAR_;
var G__67969__$1 = (((G__67969 instanceof cljs.core.Keyword))?G__67969.fqn:null);
switch (G__67969__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_group,styled_label);

break;
case "js-console":
return (cljs.core.truth_(open_QMARK_)?console.group:console.groupCollapsed).apply(console,cljs.core.to_array(styled_label));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67969__$1)].join('')));

}
});

ghostwheel.logging.group_STAR_.cljs$lang$maxFixedArity = 3;

ghostwheel.logging.group = (function ghostwheel$logging$group(var_args){
var G__67975 = arguments.length;
switch (G__67975) {
case 1:
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$1 = (function (label){
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(label,null);
});

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2 = (function (label,style){
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3(true,label,style);
});

ghostwheel.logging.group.cljs$lang$maxFixedArity = 2;

ghostwheel.logging.group_collapsed = (function ghostwheel$logging$group_collapsed(var_args){
var G__67985 = arguments.length;
switch (G__67985) {
case 1:
return ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$1 = (function (label){
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(label,null);
});

ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2 = (function (label,style){
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3(false,label,style);
});

ghostwheel.logging.group_collapsed.cljs$lang$maxFixedArity = 2;

var plain_group_end_68145 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__67993_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__67993_SHARP_,(0),(function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (cljs.core.count(p1__67993_SHARP_) - (2));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
}));
});
ghostwheel.logging.group_end = ((function (plain_group_end_68145){
return (function ghostwheel$logging$group_end(){
var G__67996 = ghostwheel.logging._STAR_report_output_STAR_;
var G__67996__$1 = (((G__67996 instanceof cljs.core.Keyword))?G__67996.fqn:null);
switch (G__67996__$1) {
case "repl":
return plain_group_end_68145();

break;
case "js-console":
return console.groupEnd();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67996__$1)].join('')));

}
});})(plain_group_end_68145))
;
ghostwheel.logging.log_bold = (function ghostwheel$logging$log_bold(msg){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","weight","ghostwheel.logging/weight",-88030216),"bold"], null));
});
ghostwheel.logging.clog = (function ghostwheel$logging$clog(data){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data);

return data;
});
/**
 * Pretty console log
 */
ghostwheel.logging.pr_clog = (function ghostwheel$logging$pr_clog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___68158 = arguments.length;
var i__4731__auto___68159 = (0);
while(true){
if((i__4731__auto___68159 < len__4730__auto___68158)){
args__4736__auto__.push((arguments[i__4731__auto___68159]));

var G__68160 = (i__4731__auto___68159 + (1));
i__4731__auto___68159 = G__68160;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic = (function (label,data,p__68015){
var vec__68017 = p__68015;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68017,(0),null);
if(cljs.core.truth_(data)){
ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(label,style);

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data);

ghostwheel.logging.group_end();
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(label,style);
}

return data;
});

ghostwheel.logging.pr_clog.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
ghostwheel.logging.pr_clog.cljs$lang$applyTo = (function (seq68002){
var G__68003 = cljs.core.first(seq68002);
var seq68002__$1 = cljs.core.next(seq68002);
var G__68004 = cljs.core.first(seq68002__$1);
var seq68002__$2 = cljs.core.next(seq68002__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68003,G__68004,seq68002__$2);
});


//# sourceMappingURL=ghostwheel.logging.js.map
