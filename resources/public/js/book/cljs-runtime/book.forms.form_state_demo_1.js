goog.provide('book.forms.form_state_demo_1');
goog.require('cljs.core');
goog.require('com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown');
goog.require('book.elements');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.algorithms.form_state');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('cljs.spec.alpha');
goog.require('taoensso.timbre');

/**
 * A helper function for getting aspects of a particular field.
 */
book.forms.form_state_demo_1.field_attrs = (function book$forms$form_state_demo_1$field_attrs(component,field){
var form = com.fulcrologic.fulcro.components.props(component);
var entity_ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(component,form);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(entity_ident)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(entity_ident))].join('');
var is_dirty_QMARK_ = com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$2(form,field);
var clean_QMARK_ = (!(is_dirty_QMARK_));
var validity = com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$2(form,field);
var is_invalid_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid","invalid",412869516),validity);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(form,field,"");
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),is_dirty_QMARK_,new cljs.core.Keyword(null,"ident","ident",-742346),entity_ident,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"validity","validity",890377214),validity,new cljs.core.Keyword(null,"invalid?","invalid?",789397235),is_invalid_QMARK_,new cljs.core.Keyword(null,"value","value",305978217),value], null);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("phone","number","phone/number",1397184156),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/\(?[0-9]{3}[-.)]? *[0-9]{3}-?[0-9]{4}/,new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__85917_SHARP_){
return cljs.core.re_matches(/\(?[0-9]{3}[-.)]? *[0-9]{3}-?[0-9]{4}/,p1__85917_SHARP_);
}));
/**
 * 
 */
book.forms.form_state_demo_1.abort_phone_edit = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.forms.form-state-demo-1","abort-phone-edit","book.forms.form-state-demo-1/abort-phone-edit",156035354,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.forms.form-state-demo-1","abort-phone-edit","book.forms.form-state-demo-1/abort-phone-edit",156035354,null),(function (fulcro_mutation_env_symbol){
var map__85921 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__85921__$1 = (((((!((map__85921 == null))))?(((((map__85921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85921):map__85921);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85921__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),((function (map__85921,map__85921__$1,id){
return (function book$forms$form_state_demo_1$refresh(env){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("root","phone","root/phone",-759107079)], null);
});})(map__85921,map__85921__$1,id))
,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__85921,map__85921__$1,id){
return (function book$forms$form_state_demo_1$action(p__85923){
var map__85924 = p__85923;
var map__85924__$1 = (((((!((map__85924 == null))))?(((((map__85924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85924):map__85924);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85924__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__85924,map__85924__$1,state,map__85921,map__85921__$1,id){
return (function (s){
return com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword("root","phone","root/phone",-759107079)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),id], null));
});})(map__85924,map__85924__$1,state,map__85921,map__85921__$1,id))
);

return null;
});})(map__85921,map__85921__$1,id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__85921,map__85921__$1,id){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__85921,map__85921__$1,id))
], null);
}));
/**
 * 
 */
book.forms.form_state_demo_1.submit_phone = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.forms.form-state-demo-1","submit-phone","book.forms.form-state-demo-1/submit-phone",944961817,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.forms.form-state-demo-1","submit-phone","book.forms.form-state-demo-1/submit-phone",944961817,null),(function (fulcro_mutation_env_symbol){
var map__85926 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__85926__$1 = (((((!((map__85926 == null))))?(((((map__85926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85926):map__85926);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85926__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85926__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"remote","remote",-1593576576),((function (map__85926,map__85926__$1,id,delta){
return (function book$forms$form_state_demo_1$remote(env){
return true;
});})(map__85926,map__85926__$1,id,delta))
,new cljs.core.Keyword(null,"refresh","refresh",1947415525),((function (map__85926,map__85926__$1,id,delta){
return (function book$forms$form_state_demo_1$refresh(env){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("root","phone","root/phone",-759107079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),id], null)], null);
});})(map__85926,map__85926__$1,id,delta))
,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__85926,map__85926__$1,id,delta){
return (function book$forms$form_state_demo_1$action(p__85928){
var map__85929 = p__85928;
var map__85929__$1 = (((((!((map__85929 == null))))?(((((map__85929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85929):map__85929);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85929__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__85929,map__85929__$1,state,map__85926,map__85926__$1,id,delta){
return (function (s){
return com.fulcrologic.fulcro.algorithms.form_state.entity__GT_pristine_STAR_(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword("root","phone","root/phone",-759107079)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),id], null));
});})(map__85929,map__85929__$1,state,map__85926,map__85926__$1,id,delta))
);

return null;
});})(map__85926,map__85926__$1,id,delta))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__85926,map__85926__$1,id,delta){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__85926,map__85926__$1,id,delta))
], null);
}));
book.forms.form_state_demo_1.input_with_label = (function book$forms$form_state_demo_1$input_with_label(component,field,label,validation_message,input){
var map__85937 = book.forms.form_state_demo_1.field_attrs(component,field);
var map__85937__$1 = (((((!((map__85937 == null))))?(((((map__85937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85937):map__85937);
var dirty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85937__$1,new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846));
var invalid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85937__$1,new cljs.core.Keyword(null,"invalid?","invalid?",789397235));
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(invalid_QMARK_)?"error":null),(cljs.core.truth_(dirty_QMARK_)?"warning":null)], null)], null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)], null),com.fulcrologic.fulcro.components.force_children(label)], null),null)),com.fulcrologic.fulcro.components.force_children(input)], null),new cljs.core.Keyword(null,".field",".field",954681856)),(cljs.core.truth_(invalid_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui error message"}),com.fulcrologic.fulcro.components.force_children(validation_message)]):null),(cljs.core.truth_(dirty_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui warning message"}),"(dirty)"]):null)], 0));
});

var options__72617__auto___86068 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$forms$form_state_demo_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword("phone","number","phone/number",1397184156),com.fulcrologic.fulcro.algorithms.form_state.form_config_join], null);
}),new cljs.core.Keyword(null,"form-fields","form-fields",35924568),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("phone","type","phone/type",1541079546),null,new cljs.core.Keyword("phone","number","phone/number",1397184156),null], null), null),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$forms$form_state_demo_1$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),new cljs.core.Keyword("phone","id","phone/id",-1272714042).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$forms$form_state_demo_1$render_PhoneForm(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85944 = com.fulcrologic.fulcro.components.props(this$);
var map__85944__$1 = (((((!((map__85944 == null))))?(((((map__85944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85944):map__85944);
var props = map__85944__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85944__$1,new cljs.core.Keyword("phone","id","phone/id",-1272714042));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85944__$1,new cljs.core.Keyword("phone","type","phone/type",1541079546));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85944__$1,new cljs.core.Keyword("phone","number","phone/number",1397184156));
var dirty_QMARK_ = com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(props);
var invalid_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid","invalid",412869516),com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$1(props));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((invalid_QMARK_)?"error":null),((dirty_QMARK_)?"warning":null)], null)], null),com.fulcrologic.fulcro.components.force_children(book.forms.form_state_demo_1.input_with_label(this$,new cljs.core.Keyword("phone","number","phone/number",1397184156),"Phone:","10-digit phone number is required.",com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(number);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (dirty_QMARK_,invalid_QMARK_,map__85944,map__85944__$1,props,id,type,number){
return (function (p1__85943_SHARP_){
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("phone","number","phone/number",1397184156),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),p1__85943_SHARP_], 0));
});})(dirty_QMARK_,invalid_QMARK_,map__85944,map__85944__$1,props,id,type,number))
], null)], null),null))),com.fulcrologic.fulcro.components.force_children(book.forms.form_state_demo_1.input_with_label(this$,new cljs.core.Keyword("phone","type","phone/type",1541079546),"Type:","",(function (){var G__85946 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(type),new cljs.core.Keyword(null,"selection","selection",975998651),true,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Home",new cljs.core.Keyword(null,"value","value",305978217),"home"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Work",new cljs.core.Keyword(null,"value","value",305978217),"work"], null)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (dirty_QMARK_,invalid_QMARK_,map__85944,map__85944__$1,props,id,type,number){
return (function (_,v){
var temp__5735__auto__ = (function (){var G__85947 = v.value;
if((G__85947 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__85947);
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var v__$1 = temp__5735__auto__;
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("phone","type","phone/type",1541079546),v__$1);
} else {
return null;
}
});})(dirty_QMARK_,invalid_QMARK_,map__85944,map__85944__$1,props,id,type,number))
], null);
return (com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown.cljs$core$IFn$_invoke$arity$1(G__85946) : com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown.call(null,G__85946));
})())),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (dirty_QMARK_,invalid_QMARK_,map__85944,map__85944__$1,props,id,type,number){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__85948 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
return (book.forms.form_state_demo_1.abort_phone_edit.cljs$core$IFn$_invoke$arity$1 ? book.forms.form_state_demo_1.abort_phone_edit.cljs$core$IFn$_invoke$arity$1(G__85948) : book.forms.form_state_demo_1.abort_phone_edit.call(null,G__85948));
})()], null));
});})(dirty_QMARK_,invalid_QMARK_,map__85944,map__85944__$1,props,id,type,number))
], null),"Cancel"], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(((!(com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$core$IFn$_invoke$arity$1(props)))) || (com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_.cljs$core$IFn$_invoke$arity$1(props))),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (dirty_QMARK_,invalid_QMARK_,map__85944,map__85944__$1,props,id,type,number){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__85949 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"delta","delta",108939957),com.fulcrologic.fulcro.algorithms.form_state.dirty_fields(props,true)], null);
return (book.forms.form_state_demo_1.submit_phone.cljs$core$IFn$_invoke$arity$1 ? book.forms.form_state_demo_1.submit_phone.cljs$core$IFn$_invoke$arity$1(G__85949) : book.forms.form_state_demo_1.submit_phone.call(null,G__85949));
})()], null));
});})(dirty_QMARK_,invalid_QMARK_,map__85944,map__85944__$1,props,id,type,number))
], null),"Commit!"], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607)))], null),new cljs.core.Keyword(null,".ui.form",".ui.form",158215099));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.forms !== 'undefined') && (typeof book.forms.form_state_demo_1 !== 'undefined') && (typeof book.forms.form_state_demo_1.PhoneForm !== 'undefined')){
} else {
book.forms.form_state_demo_1.PhoneForm = ((function (options__72617__auto___86068){
return (function book$forms$form_state_demo_1$PhoneForm(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86068,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86080)){
var init_state__72620__auto___86081 = temp__5733__auto___86080;
this__72619__auto__.state = (function (){var obj85951 = ({"fulcro$state":(function (){var G__85952 = this__72619__auto__;
var G__85953 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86081.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86081.cljs$core$IFn$_invoke$arity$2(G__85952,G__85953) : init_state__72620__auto___86081.call(null,G__85952,G__85953));
})()});
return obj85951;
})();
} else {
this__72619__auto__.state = (function (){var obj85955 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85955;
})();
}

return null;
});})(options__72617__auto___86068))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.forms.form_state_demo_1.PhoneForm,new cljs.core.Keyword("book.forms.form-state-demo-1","PhoneForm","book.forms.form-state-demo-1/PhoneForm",-1131296701),options__72617__auto___86068);
book.forms.form_state_demo_1.ui_phone_form = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.forms.form_state_demo_1.PhoneForm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("phone","id","phone/id",-1272714042)], null));

var options__72617__auto___86082 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$forms$form_state_demo_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),new cljs.core.Keyword("phone","number","phone/number",1397184156),new cljs.core.Keyword("phone","type","phone/type",1541079546)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$forms$form_state_demo_1$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("phone","number","phone/number",1397184156),new cljs.core.Keyword("param","number","param/number",1396841273),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword("param","type","param/type",1541794073)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$forms$form_state_demo_1$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),new cljs.core.Keyword("phone","id","phone/id",-1272714042).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$forms$form_state_demo_1$render_PhoneNumber(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85956 = com.fulcrologic.fulcro.components.props(this$);
var map__85956__$1 = (((((!((map__85956 == null))))?(((((map__85956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85956):map__85956);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85956__$1,new cljs.core.Keyword("phone","id","phone/id",-1272714042));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85956__$1,new cljs.core.Keyword("phone","type","phone/type",1541079546));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85956__$1,new cljs.core.Keyword("phone","number","phone/number",1397184156));
var map__85957 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__85957__$1 = (((((!((map__85957 == null))))?(((((map__85957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85957):map__85957);
var onSelect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85957__$1,new cljs.core.Keyword(null,"onSelect","onSelect",251862405));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85956,map__85956__$1,id,type,number,map__85957,map__85957__$1,onSelect){
return (function (){
return (onSelect.cljs$core$IFn$_invoke$arity$1 ? onSelect.cljs$core$IFn$_invoke$arity$1(id) : onSelect.call(null,id));
});})(map__85956,map__85956__$1,id,type,number,map__85957,map__85957__$1,onSelect))
], null),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"home","home",-74557309),"Home",new cljs.core.Keyword(null,"work","work",385770312),"Work",null,"Unknown"], null),type)),")"].join(''))], null),null)], null),new cljs.core.Keyword(null,".ui.item",".ui.item",-1037787816));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.forms !== 'undefined') && (typeof book.forms.form_state_demo_1 !== 'undefined') && (typeof book.forms.form_state_demo_1.PhoneNumber !== 'undefined')){
} else {
book.forms.form_state_demo_1.PhoneNumber = ((function (options__72617__auto___86082){
return (function book$forms$form_state_demo_1$PhoneNumber(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86082,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86086)){
var init_state__72620__auto___86087 = temp__5733__auto___86086;
this__72619__auto__.state = (function (){var obj85961 = ({"fulcro$state":(function (){var G__85962 = this__72619__auto__;
var G__85963 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86087.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86087.cljs$core$IFn$_invoke$arity$2(G__85962,G__85963) : init_state__72620__auto___86087.call(null,G__85962,G__85963));
})()});
return obj85961;
})();
} else {
this__72619__auto__.state = (function (){var obj85966 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85966;
})();
}

return null;
});})(options__72617__auto___86082))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.forms.form_state_demo_1.PhoneNumber,new cljs.core.Keyword("book.forms.form-state-demo-1","PhoneNumber","book.forms.form-state-demo-1/PhoneNumber",294351001),options__72617__auto___86082);
book.forms.form_state_demo_1.ui_phone_number = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.forms.form_state_demo_1.PhoneNumber,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("phone","id","phone/id",-1272714042)], null));

var options__72617__auto___86088 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$forms$form_state_demo_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phonebook","id","phonebook/id",-403846947),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("phonebook","phone-numbers","phonebook/phone-numbers",1515411709),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.forms.form_state_demo_1.PhoneNumber)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$forms$form_state_demo_1$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("phonebook","id","phonebook/id",-403846947),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword("phonebook","phone-numbers","phonebook/phone-numbers",1515411709),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"number","number",1570378438),"541-555-1212",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"number","number",1570378438),"541-555-5533",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"work","work",385770312)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("phonebook","phone-numbers","phonebook/phone-numbers",1515411709),book.forms.form_state_demo_1.PhoneNumber], null),params);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$forms$form_state_demo_1$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phonebook","id","phonebook/id",-403846947),new cljs.core.Keyword("phonebook","id","phonebook/id",-403846947).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$forms$form_state_demo_1$render_PhoneBook(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85980 = com.fulcrologic.fulcro.components.props(this$);
var map__85980__$1 = (((((!((map__85980 == null))))?(((((map__85980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85980):map__85980);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85980__$1,new cljs.core.Keyword("phonebook","id","phonebook/id",-403846947));
var phone_numbers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85980__$1,new cljs.core.Keyword("phonebook","phone-numbers","phonebook/phone-numbers",1515411709));
var map__85981 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__85981__$1 = (((((!((map__85981 == null))))?(((((map__85981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85981):map__85981);
var onSelect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85981__$1,new cljs.core.Keyword(null,"onSelect","onSelect",251862405));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({}),"Phone Book (click a number to edit)"]),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__85980,map__85980__$1,id,phone_numbers,map__85981,map__85981__$1,onSelect){
return (function (n){
var G__85995 = com.fulcrologic.fulcro.components.computed(n,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onSelect","onSelect",251862405),onSelect], null));
return (book.forms.form_state_demo_1.ui_phone_number.cljs$core$IFn$_invoke$arity$1 ? book.forms.form_state_demo_1.ui_phone_number.cljs$core$IFn$_invoke$arity$1(G__85995) : book.forms.form_state_demo_1.ui_phone_number.call(null,G__85995));
});})(map__85980,map__85980__$1,id,phone_numbers,map__85981,map__85981__$1,onSelect))
,phone_numbers)], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.forms !== 'undefined') && (typeof book.forms.form_state_demo_1 !== 'undefined') && (typeof book.forms.form_state_demo_1.PhoneBook !== 'undefined')){
} else {
book.forms.form_state_demo_1.PhoneBook = ((function (options__72617__auto___86088){
return (function book$forms$form_state_demo_1$PhoneBook(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86088,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86094)){
var init_state__72620__auto___86095 = temp__5733__auto___86094;
this__72619__auto__.state = (function (){var obj86001 = ({"fulcro$state":(function (){var G__86003 = this__72619__auto__;
var G__86004 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86095.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86095.cljs$core$IFn$_invoke$arity$2(G__86003,G__86004) : init_state__72620__auto___86095.call(null,G__86003,G__86004));
})()});
return obj86001;
})();
} else {
this__72619__auto__.state = (function (){var obj86006 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86006;
})();
}

return null;
});})(options__72617__auto___86088))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.forms.form_state_demo_1.PhoneBook,new cljs.core.Keyword("book.forms.form-state-demo-1","PhoneBook","book.forms.form-state-demo-1/PhoneBook",1433482138),options__72617__auto___86088);
book.forms.form_state_demo_1.ui_phone_book = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.forms.form_state_demo_1.PhoneBook,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("phonebook","id","phonebook/id",-403846947)], null));
/**
 * 
 */
book.forms.form_state_demo_1.edit_phone_number = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.forms.form-state-demo-1","edit-phone-number","book.forms.form-state-demo-1/edit-phone-number",-461914963,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.forms.form-state-demo-1","edit-phone-number","book.forms.form-state-demo-1/edit-phone-number",-461914963,null),(function (fulcro_mutation_env_symbol){
var map__86018 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__86018__$1 = (((((!((map__86018 == null))))?(((((map__86018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86018):map__86018);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86018__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__86018,map__86018__$1,id){
return (function book$forms$form_state_demo_1$action(p__86023){
var map__86024 = p__86023;
var map__86024__$1 = (((((!((map__86024 == null))))?(((((map__86024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86024):map__86024);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86024__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var phone_type_86104 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),id,new cljs.core.Keyword("phone","type","phone/type",1541079546)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (phone_type_86104,map__86024,map__86024__$1,state,map__86018,map__86018__$1,id){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_(s,book.forms.form_state_demo_1.PhoneForm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),id], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),id], null)),new cljs.core.Keyword("root","phone","root/phone",-759107079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),id], null));
});})(phone_type_86104,map__86024,map__86024__$1,state,map__86018,map__86018__$1,id))
);

return null;
});})(map__86018,map__86018__$1,id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__86018,map__86018__$1,id){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__86018,map__86018__$1,id))
], null);
}));

var options__72617__auto___86105 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$forms$form_state_demo_1$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","phonebook","root/phonebook",1904645417),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.forms.form_state_demo_1.PhoneBook)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","phone","root/phone",-759107079),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.forms.form_state_demo_1.PhoneForm)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$forms$form_state_demo_1$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("root","phonebook","root/phonebook",1904645417),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("root","phone","root/phone",-759107079),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("root","phonebook","root/phonebook",1904645417),book.forms.form_state_demo_1.PhoneBook,new cljs.core.Keyword("root","phone","root/phone",-759107079),book.forms.form_state_demo_1.PhoneForm], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$forms$form_state_demo_1$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86036 = com.fulcrologic.fulcro.components.props(this$);
var map__86036__$1 = (((((!((map__86036 == null))))?(((((map__86036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86036):map__86036);
var phone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86036__$1,new cljs.core.Keyword("root","phone","root/phone",-759107079));
var phonebook = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86036__$1,new cljs.core.Keyword("root","phonebook","root/phonebook",1904645417));
return book.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),(0),new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(400)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["link",({"rel": "stylesheet", "href": "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"})]),com.fulcrologic.fulcro.components.force_children(((cljs.core.contains_QMARK_(phone,new cljs.core.Keyword("phone","number","phone/number",1397184156)))?(book.forms.form_state_demo_1.ui_phone_form.cljs$core$IFn$_invoke$arity$1 ? book.forms.form_state_demo_1.ui_phone_form.cljs$core$IFn$_invoke$arity$1(phone) : book.forms.form_state_demo_1.ui_phone_form.call(null,phone)):(function (){var G__86038 = com.fulcrologic.fulcro.components.computed(phonebook,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (map__86036,map__86036__$1,phone,phonebook){
return (function (id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__86039 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
return (book.forms.form_state_demo_1.edit_phone_number.cljs$core$IFn$_invoke$arity$1 ? book.forms.form_state_demo_1.edit_phone_number.cljs$core$IFn$_invoke$arity$1(G__86039) : book.forms.form_state_demo_1.edit_phone_number.call(null,G__86039));
})()], null));
});})(map__86036,map__86036__$1,phone,phonebook))
], null));
return (book.forms.form_state_demo_1.ui_phone_book.cljs$core$IFn$_invoke$arity$1 ? book.forms.form_state_demo_1.ui_phone_book.cljs$core$IFn$_invoke$arity$1(G__86038) : book.forms.form_state_demo_1.ui_phone_book.call(null,G__86038));
})()))], null),null));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.forms !== 'undefined') && (typeof book.forms.form_state_demo_1 !== 'undefined') && (typeof book.forms.form_state_demo_1.Root !== 'undefined')){
} else {
book.forms.form_state_demo_1.Root = ((function (options__72617__auto___86105){
return (function book$forms$form_state_demo_1$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86105,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86108)){
var init_state__72620__auto___86110 = temp__5733__auto___86108;
this__72619__auto__.state = (function (){var obj86043 = ({"fulcro$state":(function (){var G__86044 = this__72619__auto__;
var G__86045 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86110.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86110.cljs$core$IFn$_invoke$arity$2(G__86044,G__86045) : init_state__72620__auto___86110.call(null,G__86044,G__86045));
})()});
return obj86043;
})();
} else {
this__72619__auto__.state = (function (){var obj86047 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86047;
})();
}

return null;
});})(options__72617__auto___86105))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.forms.form_state_demo_1.Root,new cljs.core.Keyword("book.forms.form-state-demo-1","Root","book.forms.form-state-demo-1/Root",-1664877934),options__72617__auto___86105);

//# sourceMappingURL=book.forms.form_state_demo_1.js.map
