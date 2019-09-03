goog.provide('book.ui.victory_example');
goog.require('cljs.core');
goog.require('cljs.pprint');
var module$node_modules$victory$lib$index=shadow.js.require("module$node_modules$victory$lib$index", {});
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.react_interop');
goog.require('com.fulcrologic.fulcro.components');
goog.require('taoensso.timbre');
book.ui.victory_example.us_dollars = (function book$ui$victory_example$us_dollars(n){
return ["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~:d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0)))].join('');
});
book.ui.victory_example.vchart = com.fulcrologic.fulcro.algorithms.react_interop.react_factory(module$node_modules$victory$lib$index.VictoryChart);
book.ui.victory_example.vaxis = com.fulcrologic.fulcro.algorithms.react_interop.react_factory(module$node_modules$victory$lib$index.VictoryAxis);
book.ui.victory_example.vline = com.fulcrologic.fulcro.algorithms.react_interop.react_factory(module$node_modules$victory$lib$index.VictoryLine);

var options__72617__auto___85048 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui$victory_example$render_YearlyValueChart(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85002 = com.fulcrologic.fulcro.components.props(this$);
var map__85002__$1 = (((((!((map__85002 == null))))?(((((map__85002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85002):map__85002);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85002__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var plot_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85002__$1,new cljs.core.Keyword(null,"plot-data","plot-data",-1568449718));
var x_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85002__$1,new cljs.core.Keyword(null,"x-step","x-step",1475980413));
var start_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),plot_data));
var end_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),plot_data));
var years = cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_year,(end_year + (1)),x_step);
var dates = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (start_year,end_year,years,map__85002,map__85002__$1,label,plot_data,x_step){
return (function (p1__85001_SHARP_){
return (new Date(p1__85001_SHARP_,(1),(2)));
});})(start_year,end_year,years,map__85002,map__85002__$1,label,plot_data,x_step))
,years);
var map__85006 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (start_year,end_year,years,dates,map__85002,map__85002__$1,label,plot_data,x_step){
return (function (p__85008,p__85009){
var map__85010 = p__85008;
var map__85010__$1 = (((((!((map__85010 == null))))?(((((map__85010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85010):map__85010);
var acc = map__85010__$1;
var min_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85010__$1,new cljs.core.Keyword(null,"min-value","min-value",-1119123315));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85010__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var map__85011 = p__85009;
var map__85011__$1 = (((((!((map__85011 == null))))?(((((map__85011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85011):map__85011);
var n = map__85011__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85011__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),(function (){var x__4222__auto__ = min_value;
var y__4223__auto__ = value;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-value","max-value",687805168),(function (){var x__4219__auto__ = max_value;
var y__4220__auto__ = value;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()], 0));
});})(start_year,end_year,years,dates,map__85002,map__85002__$1,label,plot_data,x_step))
,cljs.core.PersistentArrayMap.EMPTY,plot_data);
var map__85006__$1 = (((((!((map__85006 == null))))?(((((map__85006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85006):map__85006);
var min_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85006__$1,new cljs.core.Keyword(null,"min-value","min-value",-1119123315));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85006__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var min_value__$1 = ((0.8 * min_value) | (0));
var max_value__$1 = ((1.2 * max_value) | (0));
var points = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (start_year,end_year,years,dates,map__85006,map__85006__$1,min_value,max_value,min_value__$1,max_value__$1,map__85002,map__85002__$1,label,plot_data,x_step){
return (function (p__85017){
var map__85018 = p__85017;
var map__85018__$1 = (((((!((map__85018 == null))))?(((((map__85018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85018):map__85018);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85018__$1,new cljs.core.Keyword(null,"year","year",335913393));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85018__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new Date(year,(1),(2))),new cljs.core.Keyword(null,"y","y",-1757859776),value], null);
});})(start_year,end_year,years,dates,map__85006,map__85006__$1,min_value,max_value,min_value__$1,max_value__$1,map__85002,map__85002__$1,label,plot_data,x_step))
,plot_data);
var G__85020 = null;
var G__85021 = (function (){var G__85024 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"standalone","standalone",-1091481044),false,new cljs.core.Keyword(null,"scale","scale",-230427353),"time",new cljs.core.Keyword(null,"tickFormat","tickFormat",630400564),((function (G__85020,start_year,end_year,years,dates,map__85006,map__85006__$1,min_value,max_value,min_value__$1,max_value__$1,points,map__85002,map__85002__$1,label,plot_data,x_step){
return (function (d){
return d.getFullYear();
});})(G__85020,start_year,end_year,years,dates,map__85006,map__85006__$1,min_value,max_value,min_value__$1,max_value__$1,points,map__85002,map__85002__$1,label,plot_data,x_step))
,new cljs.core.Keyword(null,"tickValues","tickValues",-1034811026),dates], null);
return (book.ui.victory_example.vaxis.cljs$core$IFn$_invoke$arity$1 ? book.ui.victory_example.vaxis.cljs$core$IFn$_invoke$arity$1(G__85024) : book.ui.victory_example.vaxis.call(null,G__85024));
})();
var G__85022 = (function (){var G__85027 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dependentAxis","dependentAxis",1962305846),true,new cljs.core.Keyword(null,"standalone","standalone",-1091481044),false,new cljs.core.Keyword(null,"tickFormat","tickFormat",630400564),((function (G__85020,G__85021,start_year,end_year,years,dates,map__85006,map__85006__$1,min_value,max_value,min_value__$1,max_value__$1,points,map__85002,map__85002__$1,label,plot_data,x_step){
return (function (y){
return book.ui.victory_example.us_dollars(y);
});})(G__85020,G__85021,start_year,end_year,years,dates,map__85006,map__85006__$1,min_value,max_value,min_value__$1,max_value__$1,points,map__85002,map__85002__$1,label,plot_data,x_step))
,new cljs.core.Keyword(null,"domain","domain",1847214937),[min_value__$1,max_value__$1]], null);
return (book.ui.victory_example.vaxis.cljs$core$IFn$_invoke$arity$1 ? book.ui.victory_example.vaxis.cljs$core$IFn$_invoke$arity$1(G__85027) : book.ui.victory_example.vaxis.call(null,G__85027));
})();
var G__85023 = (function (){var G__85030 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),points], null);
return (book.ui.victory_example.vline.cljs$core$IFn$_invoke$arity$1 ? book.ui.victory_example.vline.cljs$core$IFn$_invoke$arity$1(G__85030) : book.ui.victory_example.vline.call(null,G__85030));
})();
return (book.ui.victory_example.vchart.cljs$core$IFn$_invoke$arity$4 ? book.ui.victory_example.vchart.cljs$core$IFn$_invoke$arity$4(G__85020,G__85021,G__85022,G__85023) : book.ui.victory_example.vchart.call(null,G__85020,G__85021,G__85022,G__85023));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui !== 'undefined') && (typeof book.ui.victory_example !== 'undefined') && (typeof book.ui.victory_example.YearlyValueChart !== 'undefined')){
} else {
book.ui.victory_example.YearlyValueChart = ((function (options__72617__auto___85048){
return (function book$ui$victory_example$YearlyValueChart(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85048,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85055)){
var init_state__72620__auto___85056 = temp__5733__auto___85055;
this__72619__auto__.state = (function (){var obj85035 = ({"fulcro$state":(function (){var G__85036 = this__72619__auto__;
var G__85037 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85056.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85056.cljs$core$IFn$_invoke$arity$2(G__85036,G__85037) : init_state__72620__auto___85056.call(null,G__85036,G__85037));
})()});
return obj85035;
})();
} else {
this__72619__auto__.state = (function (){var obj85039 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85039;
})();
}

return null;
});})(options__72617__auto___85048))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui.victory_example.YearlyValueChart,new cljs.core.Keyword("book.ui.victory-example","YearlyValueChart","book.ui.victory-example/YearlyValueChart",1331542543),options__72617__auto___85048);
book.ui.victory_example.yearly_value_chart = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui.victory_example.YearlyValueChart);

var options__72617__auto___85057 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui$victory_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Yearly Value",new cljs.core.Keyword(null,"x-step","x-step",1475980413),(2),new cljs.core.Keyword(null,"plot-data","plot-data",-1568449718),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1983),new cljs.core.Keyword(null,"value","value",305978217),(20)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1984),new cljs.core.Keyword(null,"value","value",305978217),(100)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1985),new cljs.core.Keyword(null,"value","value",305978217),(90)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1986),new cljs.core.Keyword(null,"value","value",305978217),(89)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1987),new cljs.core.Keyword(null,"value","value",305978217),(88)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1988),new cljs.core.Keyword(null,"value","value",305978217),(85)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1989),new cljs.core.Keyword(null,"value","value",305978217),(83)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1990),new cljs.core.Keyword(null,"value","value",305978217),(80)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1991),new cljs.core.Keyword(null,"value","value",305978217),(70)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1992),new cljs.core.Keyword(null,"value","value",305978217),(80)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1993),new cljs.core.Keyword(null,"value","value",305978217),(90)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1994),new cljs.core.Keyword(null,"value","value",305978217),(95)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1995),new cljs.core.Keyword(null,"value","value",305978217),(110)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1996),new cljs.core.Keyword(null,"value","value",305978217),(120)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1997),new cljs.core.Keyword(null,"value","value",305978217),(160)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1998),new cljs.core.Keyword(null,"value","value",305978217),(170)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(1999),new cljs.core.Keyword(null,"value","value",305978217),(180)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(2000),new cljs.core.Keyword(null,"value","value",305978217),(180)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(2001),new cljs.core.Keyword(null,"value","value",305978217),(200)], null)], null)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui$victory_example$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.ui.victory_example.yearly_value_chart.cljs$core$IFn$_invoke$arity$1 ? book.ui.victory_example.yearly_value_chart.cljs$core$IFn$_invoke$arity$1(props) : book.ui.victory_example.yearly_value_chart.call(null,props))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui !== 'undefined') && (typeof book.ui.victory_example !== 'undefined') && (typeof book.ui.victory_example.Root !== 'undefined')){
} else {
book.ui.victory_example.Root = ((function (options__72617__auto___85057){
return (function book$ui$victory_example$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85057,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85058)){
var init_state__72620__auto___85059 = temp__5733__auto___85058;
this__72619__auto__.state = (function (){var obj85043 = ({"fulcro$state":(function (){var G__85044 = this__72619__auto__;
var G__85045 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85059.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85059.cljs$core$IFn$_invoke$arity$2(G__85044,G__85045) : init_state__72620__auto___85059.call(null,G__85044,G__85045));
})()});
return obj85043;
})();
} else {
this__72619__auto__.state = (function (){var obj85047 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85047;
})();
}

return null;
});})(options__72617__auto___85057))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui.victory_example.Root,new cljs.core.Keyword("book.ui.victory-example","Root","book.ui.victory-example/Root",-376608728),options__72617__auto___85057);

//# sourceMappingURL=book.ui.victory_example.js.map
