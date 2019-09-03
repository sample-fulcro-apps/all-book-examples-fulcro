goog.provide('com.fulcrologic.fulcro.networking.mock_server_remote');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.algorithms.tx_processing');
goog.require('taoensso.timbre');
goog.require('edn_query_language.core');
goog.require('cljs.core.async');
/**
 * Create a remote that mocks a Fulcro remote server.
 * 
 *   :parser - A function `(fn [eql-query] async-channel)` that returns a core async channel with the result for the
 *   given eql-query.
 */
com.fulcrologic.fulcro.networking.mock_server_remote.mock_http_server = (function com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server(p__74381){
var map__74382 = p__74381;
var map__74382__$1 = (((((!((map__74382 == null))))?(((((map__74382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74382):map__74382);
var options = map__74382__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74382__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transmit!","transmit!",-107149039),((function (map__74382,map__74382__$1,options,parser){
return (function com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG_(p__74385,p__74386){
var map__74387 = p__74385;
var map__74387__$1 = (((((!((map__74387 == null))))?(((((map__74387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74387):map__74387);
var active_requests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74387__$1,new cljs.core.Keyword(null,"active-requests","active-requests",1354177961));
var map__74388 = p__74386;
var map__74388__$1 = (((((!((map__74388 == null))))?(((((map__74388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74388):map__74388);
var send_node = map__74388__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74388__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74388__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74388__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
var edn = edn_query_language.core.ast__GT_query(ast);
var ok_handler = ((function (edn,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser){
return (function (result){
try{var G__74392 = cljs.core.select_keys(result,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),null,new cljs.core.Keyword(null,"transaction","transaction",1777321997),null,new cljs.core.Keyword(null,"status-code","status-code",-1060410130),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null));
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__74392) : result_handler.call(null,G__74392));
}catch (e74391){var e = e74391;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.mock-server-remote",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,edn,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Result handler failed with an exception."], null);
});})(e,edn,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser))
,null)),null,-414866938);
}});})(edn,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser))
;
var error_handler = ((function (edn,ok_handler,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser){
return (function (error_result){
try{var G__74394 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500)], null),cljs.core.select_keys(error_result,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),null,new cljs.core.Keyword(null,"transaction","transaction",1777321997),null,new cljs.core.Keyword(null,"status-code","status-code",-1060410130),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null))], 0));
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__74394) : result_handler.call(null,G__74394));
}catch (e74393){var e = e74393;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.mock-server-remote",null,27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,edn,ok_handler,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Error handler failed with an exception."], null);
});})(e,edn,ok_handler,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser))
,null)),null,-1098827462);
}});})(edn,ok_handler,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser))
;
try{var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,edn,ok_handler,error_handler,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,edn,ok_handler,error_handler,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser){
return (function (state_74405){
var state_val_74406 = (state_74405[(1)]);
if((state_val_74406 === (1))){
var inst_74396 = (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(edn) : parser.call(null,edn));
var state_74405__$1 = state_74405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74405__$1,(2),inst_74396);
} else {
if((state_val_74406 === (2))){
var inst_74398 = (state_74405[(2)]);
var inst_74399 = [new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"status-code","status-code",-1060410130),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_74400 = [edn,(200),inst_74398];
var inst_74401 = cljs.core.PersistentHashMap.fromArrays(inst_74399,inst_74400);
var inst_74402 = ok_handler(inst_74401);
var state_74405__$1 = state_74405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74405__$1,inst_74402);
} else {
return null;
}
}
});})(c__52131__auto__,edn,ok_handler,error_handler,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser))
;
return ((function (switch__52035__auto__,c__52131__auto__,edn,ok_handler,error_handler,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser){
return (function() {
var com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG__$_state_machine__52036__auto__ = null;
var com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG__$_state_machine__52036__auto____0 = (function (){
var statearr_74412 = [null,null,null,null,null,null,null];
(statearr_74412[(0)] = com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG__$_state_machine__52036__auto__);

(statearr_74412[(1)] = (1));

return statearr_74412;
});
var com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG__$_state_machine__52036__auto____1 = (function (state_74405){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_74405);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e74413){if((e74413 instanceof Object)){
var ex__52039__auto__ = e74413;
var statearr_74414_74424 = state_74405;
(statearr_74414_74424[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_74405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74425 = state_74405;
state_74405 = G__74425;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG__$_state_machine__52036__auto__ = function(state_74405){
switch(arguments.length){
case 0:
return com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG__$_state_machine__52036__auto____0.call(this);
case 1:
return com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG__$_state_machine__52036__auto____1.call(this,state_74405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG__$_state_machine__52036__auto____0;
com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG__$_state_machine__52036__auto____1;
return com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_transmit_BANG__$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,edn,ok_handler,error_handler,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser))
})();
var state__52133__auto__ = (function (){var statearr_74417 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_74417[(6)] = c__52131__auto__);

return statearr_74417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,edn,ok_handler,error_handler,map__74387,map__74387__$1,active_requests,map__74388,map__74388__$1,send_node,ast,result_handler,update_handler,map__74382,map__74382__$1,options,parser))
);

return c__52131__auto__;
}catch (e74395){var e = e74395;
return error_handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transaction","transaction",1777321997),edn,new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500)], null));
}});})(map__74382,map__74382__$1,options,parser))
,new cljs.core.Keyword(null,"abort!","abort!",-220883953),((function (map__74382,map__74382__$1,options,parser){
return (function com$fulcrologic$fulcro$networking$mock_server_remote$mock_http_server_$_abort_BANG_(this$,id){
return null;
});})(map__74382,map__74382__$1,options,parser))
], null)], 0));
});

//# sourceMappingURL=com.fulcrologic.fulcro.networking.mock_server_remote.js.map
