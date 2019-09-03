goog.provide('book.demos.autocomplete');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('book.demos.airports');
goog.require('clojure.string');
goog.require('goog.functions');
goog.require('com.wsscode.pathom.connect');
book.demos.autocomplete.airport_search = (function book$demos$autocomplete$airport_search(s){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (i){
return clojure.string.includes_QMARK_(clojure.string.lower_case(i),clojure.string.lower_case(s));
}),book.demos.airports.airports)));
});
book.demos.autocomplete.list_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.demos.autocomplete","list-resolver","book.demos.autocomplete/list-resolver",1850699748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("autocomplete","airports","autocomplete/airports",-859107970)], null)], null),(function book$demos$autocomplete$list_resolver(env,params){
var search = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"search","search",1564939822)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("autocomplete","airports","autocomplete/airports",-859107970),book.demos.autocomplete.airport_search(search)], null);
}));
/**
 * Returns the ident for an autocomplete control. Can be passed a map of props, or a raw ID.
 */
book.demos.autocomplete.autocomplete_ident = (function book$demos$autocomplete$autocomplete_ident(id_or_props){
if(cljs.core.map_QMARK_(id_or_props)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("autocomplete","by-id","autocomplete/by-id",1258348123),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(id_or_props)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("autocomplete","by-id","autocomplete/by-id",1258348123),id_or_props], null);
}
});

var options__72617__auto___86075 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$autocomplete$render_CompletionList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85968 = com.fulcrologic.fulcro.components.props(this$);
var map__85968__$1 = (((((!((map__85968 == null))))?(((((map__85968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85968):map__85968);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85968__$1,new cljs.core.Keyword(null,"values","values",372645556));
var onValueSelect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85968__$1,new cljs.core.Keyword(null,"onValueSelect","onValueSelect",1459965157));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["ul",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__85968,map__85968__$1,values,onValueSelect){
return (function (v){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:void(0)",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85968,map__85968__$1,values,onValueSelect){
return (function (){
return (onValueSelect.cljs$core$IFn$_invoke$arity$1 ? onValueSelect.cljs$core$IFn$_invoke$arity$1(v) : onValueSelect.call(null,v));
});})(map__85968,map__85968__$1,values,onValueSelect))
], null),com.fulcrologic.fulcro.components.force_children(v)], null),null))], null),null);
});})(map__85968,map__85968__$1,values,onValueSelect))
,values))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.autocomplete !== 'undefined') && (typeof book.demos.autocomplete.CompletionList !== 'undefined')){
} else {
book.demos.autocomplete.CompletionList = ((function (options__72617__auto___86075){
return (function book$demos$autocomplete$CompletionList(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86075,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86084)){
var init_state__72620__auto___86085 = temp__5733__auto___86084;
this__72619__auto__.state = (function (){var obj85975 = ({"fulcro$state":(function (){var G__85976 = this__72619__auto__;
var G__85977 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86085.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86085.cljs$core$IFn$_invoke$arity$2(G__85976,G__85977) : init_state__72620__auto___86085.call(null,G__85976,G__85977));
})()});
return obj85975;
})();
} else {
this__72619__auto__.state = (function (){var obj85979 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85979;
})();
}

return null;
});})(options__72617__auto___86075))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.autocomplete.CompletionList,new cljs.core.Keyword("book.demos.autocomplete","CompletionList","book.demos.autocomplete/CompletionList",-1753928012),options__72617__auto___86075);
book.demos.autocomplete.ui_completion_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.demos.autocomplete.CompletionList);
/**
 * Mutation: Autocomplete suggestions are loaded in a non-visible property to prevent flicker. This is
 *   used as a post mutation to move them to the active UI field so they appear.
 */
book.demos.autocomplete.populate_loaded_suggestions = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.demos.autocomplete","populate-loaded-suggestions","book.demos.autocomplete/populate-loaded-suggestions",782209418,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.demos.autocomplete","populate-loaded-suggestions","book.demos.autocomplete/populate-loaded-suggestions",782209418,null),(function (fulcro_mutation_env_symbol){
var map__85984 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__85984__$1 = (((((!((map__85984 == null))))?(((((map__85984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85984):map__85984);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85984__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__85984,map__85984__$1,id){
return (function book$demos$autocomplete$action(p__85990){
var map__85991 = p__85990;
var map__85991__$1 = (((((!((map__85991 == null))))?(((((map__85991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85991):map__85991);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85991__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var autocomplete_path_86091 = book.demos.autocomplete.autocomplete_ident(id);
var source_path_86092 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(autocomplete_path_86091,new cljs.core.Keyword("autocomplete","loaded-suggestions","autocomplete/loaded-suggestions",1983810835));
var target_path_86093 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(autocomplete_path_86091,new cljs.core.Keyword("autocomplete","suggestions","autocomplete/suggestions",-1359770322));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,target_path_86093,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),source_path_86092));

return null;
});})(map__85984,map__85984__$1,id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__85984,map__85984__$1,id){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__85984,map__85984__$1,id))
], null);
}));
/**
 * A debounced function that will trigger a load of the server suggestions into a temporary locations and fire
 * a post mutation when that is complete to move them into the main UI view.
 */
book.demos.autocomplete.get_suggestions = (function (){var load_suggestions = (function book$demos$autocomplete$load_suggestions(comp,new_value,id){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(comp,new cljs.core.Keyword("autocomplete","airports","autocomplete/airports",-859107970),null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search","search",1564939822),new_value], null),new cljs.core.Keyword(null,"marker","marker",865118313),false,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("book.demos.autocomplete","populate-loaded-suggestions","book.demos.autocomplete/populate-loaded-suggestions",782209418,null),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(book.demos.autocomplete.autocomplete_ident(id),new cljs.core.Keyword("autocomplete","loaded-suggestions","autocomplete/loaded-suggestions",1983810835))], null));
});
return goog.functions.debounce(load_suggestions,(500));
})();

var options__72617__auto___86096 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$autocomplete$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("autocomplete","loaded-suggestions","autocomplete/loaded-suggestions",1983810835),new cljs.core.Keyword("autocomplete","suggestions","autocomplete/suggestions",-1359770322),new cljs.core.Keyword("autocomplete","value","autocomplete/value",-1068569759)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$autocomplete$ident_STAR_(this$,p__86051){
var map__86052 = p__86051;
var map__86052__$1 = (((((!((map__86052 == null))))?(((((map__86052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86052):map__86052);
var props = map__86052__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86052__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86052__$1,new cljs.core.Keyword("autocomplete","suggestions","autocomplete/suggestions",-1359770322));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86052__$1,new cljs.core.Keyword("autocomplete","value","autocomplete/value",-1068569759));
return book.demos.autocomplete.autocomplete_ident(props);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$autocomplete$build_raw_initial_state_STAR_(p__86054){
var map__86055 = p__86054;
var map__86055__$1 = (((((!((map__86055 == null))))?(((((map__86055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86055):map__86055);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86055__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("autocomplete","suggestions","autocomplete/suggestions",-1359770322),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("autocomplete","value","autocomplete/value",-1068569759),""], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$autocomplete$render_Autocomplete(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86057 = com.fulcrologic.fulcro.components.props(this$);
var map__86057__$1 = (((((!((map__86057 == null))))?(((((map__86057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86057):map__86057);
var props = map__86057__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86057__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86057__$1,new cljs.core.Keyword("autocomplete","suggestions","autocomplete/suggestions",-1359770322));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86057__$1,new cljs.core.Keyword("autocomplete","value","autocomplete/value",-1068569759));
var field_id = ["autocomplete-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var filtered_suggestions = ((cljs.core.vector_QMARK_(suggestions))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (field_id,map__86057,map__86057__$1,props,id,suggestions,value){
return (function (p1__86050_SHARP_){
return clojure.string.includes_QMARK_(clojure.string.lower_case(p1__86050_SHARP_),clojure.string.lower_case(value));
});})(field_id,map__86057,map__86057__$1,props,id,suggestions,value))
,suggestions):null);
var exact_match_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(filtered_suggestions))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.first(filtered_suggestions))));
var onSelect = ((function (field_id,filtered_suggestions,exact_match_QMARK_,map__86057,map__86057__$1,props,id,suggestions,value){
return (function (v){
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("autocomplete","value","autocomplete/value",-1068569759),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),v], 0));
});})(field_id,filtered_suggestions,exact_match_QMARK_,map__86057,map__86057__$1,props,id,suggestions,value))
;
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"height": "600px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),field_id], null),"Airport: "], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),field_id,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (field_id,filtered_suggestions,exact_match_QMARK_,onSelect,map__86057,map__86057__$1,props,id,suggestions,value){
return (function (evt){
var new_value = evt.target.value;
if((new_value.length >= (2))){
(book.demos.autocomplete.get_suggestions.cljs$core$IFn$_invoke$arity$3 ? book.demos.autocomplete.get_suggestions.cljs$core$IFn$_invoke$arity$3(this$,new_value,id) : book.demos.autocomplete.get_suggestions.call(null,this$,new_value,id));
} else {
com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("autocomplete","suggestions","autocomplete/suggestions",-1359770322),cljs.core.PersistentVector.EMPTY);
}

return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("autocomplete","value","autocomplete/value",-1068569759),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),new_value], 0));
});})(field_id,filtered_suggestions,exact_match_QMARK_,onSelect,map__86057,map__86057__$1,props,id,suggestions,value))
], null)], null),null)),com.fulcrologic.fulcro.components.force_children(((((cljs.core.vector_QMARK_(suggestions)) && (cljs.core.seq(suggestions)) && ((!(exact_match_QMARK_)))))?(function (){var G__86059 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),filtered_suggestions,new cljs.core.Keyword(null,"onValueSelect","onValueSelect",1459965157),onSelect], null);
return (book.demos.autocomplete.ui_completion_list.cljs$core$IFn$_invoke$arity$1 ? book.demos.autocomplete.ui_completion_list.cljs$core$IFn$_invoke$arity$1(G__86059) : book.demos.autocomplete.ui_completion_list.call(null,G__86059));
})():null))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.autocomplete !== 'undefined') && (typeof book.demos.autocomplete.Autocomplete !== 'undefined')){
} else {
book.demos.autocomplete.Autocomplete = ((function (options__72617__auto___86096){
return (function book$demos$autocomplete$Autocomplete(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86096,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86106)){
var init_state__72620__auto___86107 = temp__5733__auto___86106;
this__72619__auto__.state = (function (){var obj86061 = ({"fulcro$state":(function (){var G__86062 = this__72619__auto__;
var G__86063 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86107.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86107.cljs$core$IFn$_invoke$arity$2(G__86062,G__86063) : init_state__72620__auto___86107.call(null,G__86062,G__86063));
})()});
return obj86061;
})();
} else {
this__72619__auto__.state = (function (){var obj86065 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86065;
})();
}

return null;
});})(options__72617__auto___86096))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.autocomplete.Autocomplete,new cljs.core.Keyword("book.demos.autocomplete","Autocomplete","book.demos.autocomplete/Autocomplete",1637037431),options__72617__auto___86096);
book.demos.autocomplete.ui_autocomplete = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.demos.autocomplete.Autocomplete);

var options__72617__auto___86109 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$autocomplete$build_raw_initial_state_STAR_(p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"airport-input","airport-input",-491999577),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(book.demos.autocomplete.Autocomplete,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"airports","airports",-21430890)], null))], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$autocomplete$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"airport-input","airport-input",-491999577),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.demos.autocomplete.Autocomplete)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$autocomplete$render_AutocompleteRoot(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86066 = com.fulcrologic.fulcro.components.props(this$);
var map__86066__$1 = (((((!((map__86066 == null))))?(((((map__86066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86066):map__86066);
var airport_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86066__$1,new cljs.core.Keyword(null,"airport-input","airport-input",-491999577));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({}),"Airport Autocomplete"]),com.fulcrologic.fulcro.components.force_children((book.demos.autocomplete.ui_autocomplete.cljs$core$IFn$_invoke$arity$1 ? book.demos.autocomplete.ui_autocomplete.cljs$core$IFn$_invoke$arity$1(airport_input) : book.demos.autocomplete.ui_autocomplete.call(null,airport_input)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.autocomplete !== 'undefined') && (typeof book.demos.autocomplete.AutocompleteRoot !== 'undefined')){
} else {
book.demos.autocomplete.AutocompleteRoot = ((function (options__72617__auto___86109){
return (function book$demos$autocomplete$AutocompleteRoot(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86109,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86111)){
var init_state__72620__auto___86112 = temp__5733__auto___86111;
this__72619__auto__.state = (function (){var obj86070 = ({"fulcro$state":(function (){var G__86071 = this__72619__auto__;
var G__86072 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86112.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86112.cljs$core$IFn$_invoke$arity$2(G__86071,G__86072) : init_state__72620__auto___86112.call(null,G__86071,G__86072));
})()});
return obj86070;
})();
} else {
this__72619__auto__.state = (function (){var obj86074 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86074;
})();
}

return null;
});})(options__72617__auto___86109))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.autocomplete.AutocompleteRoot,new cljs.core.Keyword("book.demos.autocomplete","AutocompleteRoot","book.demos.autocomplete/AutocompleteRoot",762881086),options__72617__auto___86109);

//# sourceMappingURL=book.demos.autocomplete.js.map
