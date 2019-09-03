goog.provide('book.forms.form_state_demo_2');
goog.require('cljs.core');
goog.require('com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.form_state');
goog.require('com.fulcrologic.fulcro.algorithms.tempid');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('com.wsscode.pathom.connect');
goog.require('book.elements');
goog.require('taoensso.timbre');
book.forms.form_state_demo_2.person_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("book.forms.form-state-demo-2","person-resolver","book.forms.form-state-demo-2/person-resolver",-2077796716,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","id","person/id",-392409377),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295)], null)], null),(function book$forms$form_state_demo_2$person_resolver(env,p__85918){
var map__85919 = p__85918;
var map__85919__$1 = (((((!((map__85919 == null))))?(((((map__85919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85919):map__85919);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85919__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("person","id","person/id",-392409377),id,new cljs.core.Keyword("person","name","person/name",549444500),["User ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword("person","age","person/age",387881455),(56),new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),(1),new cljs.core.Keyword("phone","number","phone/number",1397184156),"555-111-1212",new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword(null,"work","work",385770312)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),(2),new cljs.core.Keyword("phone","number","phone/number",1397184156),"555-333-4444",new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null)], null);
}));
if((typeof book !== 'undefined') && (typeof book.forms !== 'undefined') && (typeof book.forms.form_state_demo_2 !== 'undefined') && (typeof book.forms.form_state_demo_2.id !== 'undefined')){
} else {
book.forms.form_state_demo_2.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1000));
}
book.forms.form_state_demo_2.next_id = (function book$forms$form_state_demo_2$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.forms.form_state_demo_2.id,cljs.core.inc);
});
book.forms.form_state_demo_2.submit_person_mutation = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("book.forms.form-state-demo-2","submit-person-mutation","book.forms.form-state-demo-2/submit-person-mutation",1706489337,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("book.forms.form-state-demo-2","submit-person","book.forms.form-state-demo-2/submit-person",1916664948,null)], null),(function book$forms$form_state_demo_2$submit_person_mutation(env,inputs){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
console.log("Server received form submission with content: ");

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(params);

var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params){
return (function (p__85931){
var vec__85932 = p__85931;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85932,(1),null);
return cljs.core.second(k);
});})(params))
,new cljs.core.Keyword(null,"diff","diff",2135942783).cljs$core$IFn$_invoke$arity$1(params));
var remaps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (ids,params){
return (function (v){
if(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,book.forms.form_state_demo_2.next_id()], null);
} else {
return null;
}
});})(ids,params))
,ids));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),remaps], null);
}));
book.forms.form_state_demo_2.resolvers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.forms.form_state_demo_2.person_resolver,book.forms.form_state_demo_2.submit_person_mutation], null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("person","name","person/name",549444500),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__85935#","p1__85935#",-58036923,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),cljs.core.list(new cljs.core.Symbol("clojure.string","trim","clojure.string/trim",-1498124613,null),new cljs.core.Symbol(null,"p1__85935#","p1__85935#",-58036923,null))))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),cljs.core.list(new cljs.core.Symbol("clojure.string","trim","clojure.string/trim",-1498124613,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__85935_SHARP_){
return cljs.core.seq(clojure.string.trim(p1__85935_SHARP_));
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("person","age","person/age",387881455),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","int-in-range?","cljs.spec.alpha/int-in-range?",92650900,null),(1),(120),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__85936_SHARP_){
return cljs.spec.alpha.int_in_range_QMARK_((1),(120),p1__85936_SHARP_);
}));
/**
 * A helper function for getting aspects of a particular field.
 */
book.forms.form_state_demo_2.field_attrs = (function book$forms$form_state_demo_2$field_attrs(component,field){
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
book.forms.form_state_demo_2.integer_fields = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","age","person/age",387881455),null], null), null);
book.forms.form_state_demo_2.input_with_label = (function book$forms$form_state_demo_2$input_with_label(component,field,label,validation_message,input){
var map__85939 = book.forms.form_state_demo_2.field_attrs(component,field);
var map__85939__$1 = (((((!((map__85939 == null))))?(((((map__85939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85939):map__85939);
var dirty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85939__$1,new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846));
var invalid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85939__$1,new cljs.core.Keyword(null,"invalid?","invalid?",789397235));
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(invalid_QMARK_)?"error":null),(cljs.core.truth_(dirty_QMARK_)?"warning":null)], null)], null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)], null),com.fulcrologic.fulcro.components.force_children(label)], null),null)),com.fulcrologic.fulcro.components.force_children(input)], null),new cljs.core.Keyword(null,".field",".field",954681856)),(cljs.core.truth_(invalid_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui error message"}),com.fulcrologic.fulcro.components.force_children(validation_message)]):null),(cljs.core.truth_(dirty_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui warning message"}),"(dirty)"]):null)], 0));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("phone","number","phone/number",1397184156),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/\(?[0-9]{3}[-.)]? *[0-9]{3}-?[0-9]{4}/,new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__85941_SHARP_){
return cljs.core.re_matches(/\(?[0-9]{3}[-.)]? *[0-9]{3}-?[0-9]{4}/,p1__85941_SHARP_);
}));

var options__72617__auto___86083 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$forms$form_state_demo_2$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),new cljs.core.Keyword("phone","number","phone/number",1397184156),new cljs.core.Keyword("phone","type","phone/type",1541079546),com.fulcrologic.fulcro.algorithms.form_state.form_config_join], null);
}),new cljs.core.Keyword(null,"form-fields","form-fields",35924568),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("phone","type","phone/type",1541079546),null,new cljs.core.Keyword("phone","number","phone/number",1397184156),null], null), null),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$forms$form_state_demo_2$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),new cljs.core.Keyword("phone","id","phone/id",-1272714042).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$forms$form_state_demo_2$render_PhoneForm(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85964 = com.fulcrologic.fulcro.components.props(this$);
var map__85964__$1 = (((((!((map__85964 == null))))?(((((map__85964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85964):map__85964);
var props = map__85964__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85964__$1,new cljs.core.Keyword("phone","id","phone/id",-1272714042));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85964__$1,new cljs.core.Keyword("phone","number","phone/number",1397184156));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85964__$1,new cljs.core.Keyword("phone","type","phone/type",1541079546));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.forms.form_state_demo_2.input_with_label(this$,new cljs.core.Keyword("phone","number","phone/number",1397184156),"Phone:","10-digit phone number is required.",com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(number);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__85964,map__85964__$1,props,id,number,type){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__85970 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),id], null),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword("phone","number","phone/number",1397184156)], null);
return (com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.cljs$core$IFn$_invoke$arity$1(G__85970) : com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.call(null,G__85970));
})()], null));
});})(map__85964,map__85964__$1,props,id,number,type))
,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__85964,map__85964__$1,props,id,number,type){
return (function (p1__85942_SHARP_){
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("phone","number","phone/number",1397184156),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),p1__85942_SHARP_], 0));
});})(map__85964,map__85964__$1,props,id,number,type))
], null)], null),null)),com.fulcrologic.fulcro.components.force_children(book.forms.form_state_demo_2.input_with_label(this$,new cljs.core.Keyword("phone","type","phone/type",1541079546),"Type:","",(function (){var G__85971 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(type),new cljs.core.Keyword(null,"selection","selection",975998651),true,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Home",new cljs.core.Keyword(null,"value","value",305978217),"home"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Work",new cljs.core.Keyword(null,"value","value",305978217),"work"], null)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__85964,map__85964__$1,props,id,number,type){
return (function (_,v){
var temp__5735__auto__ = (function (){var G__85972 = v.value;
if((G__85972 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__85972);
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var v__$1 = temp__5735__auto__;
com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("phone","type","phone/type",1541079546),v__$1);

return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__85973 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword("phone","type","phone/type",1541079546)], null);
return (com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.cljs$core$IFn$_invoke$arity$1(G__85973) : com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.call(null,G__85973));
})()], null));
} else {
return null;
}
});})(map__85964,map__85964__$1,props,id,number,type))
], null);
return (com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown.cljs$core$IFn$_invoke$arity$1(G__85971) : com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown.call(null,G__85971));
})()))], null),new cljs.core.Keyword(null,".ui.form",".ui.form",158215099))], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.forms !== 'undefined') && (typeof book.forms.form_state_demo_2 !== 'undefined') && (typeof book.forms.form_state_demo_2.PhoneForm !== 'undefined')){
} else {
book.forms.form_state_demo_2.PhoneForm = ((function (options__72617__auto___86083){
return (function book$forms$form_state_demo_2$PhoneForm(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86083,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86089)){
var init_state__72620__auto___86090 = temp__5733__auto___86089;
this__72619__auto__.state = (function (){var obj85987 = ({"fulcro$state":(function (){var G__85988 = this__72619__auto__;
var G__85989 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86090.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86090.cljs$core$IFn$_invoke$arity$2(G__85988,G__85989) : init_state__72620__auto___86090.call(null,G__85988,G__85989));
})()});
return obj85987;
})();
} else {
this__72619__auto__.state = (function (){var obj85994 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85994;
})();
}

return null;
});})(options__72617__auto___86083))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.forms.form_state_demo_2.PhoneForm,new cljs.core.Keyword("book.forms.form-state-demo-2","PhoneForm","book.forms.form-state-demo-2/PhoneForm",-1131296700),options__72617__auto___86083);
book.forms.form_state_demo_2.ui_phone_form = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.forms.form_state_demo_2.PhoneForm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("phone","id","phone/id",-1272714042)], null));
/**
 * Add the given phone info to a person.
 */
book.forms.form_state_demo_2.add_phone_STAR_ = (function book$forms$form_state_demo_2$add_phone_STAR_(state_map,phone_id,person_id,type,number){
var phone_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),phone_id], null);
var new_phone_entity = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),phone_id,new cljs.core.Keyword("phone","type","phone/type",1541079546),type,new cljs.core.Keyword("phone","number","phone/number",1397184156),number], null);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),person_id,new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),phone_ident),phone_ident,new_phone_entity);
});
/**
 * Mutation: Add a phone number to a person, and initialize it as a working form.
 */
book.forms.form_state_demo_2.add_phone = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.forms.form-state-demo-2","add-phone","book.forms.form-state-demo-2/add-phone",-203719092,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.forms.form-state-demo-2","add-phone","book.forms.form-state-demo-2/add-phone",-203719092,null),(function (fulcro_mutation_env_symbol){
var map__85996 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__85996__$1 = (((((!((map__85996 == null))))?(((((map__85996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85996):map__85996);
var person_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85996__$1,new cljs.core.Keyword(null,"person-id","person-id",1251942696));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__85996,map__85996__$1,person_id){
return (function book$forms$form_state_demo_2$action(p__85998){
var map__85999 = p__85998;
var map__85999__$1 = (((((!((map__85999 == null))))?(((((map__85999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85999):map__85999);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85999__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var phone_id_86097 = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (phone_id_86097,map__85999,map__85999__$1,state,map__85996,map__85996__$1,person_id){
return (function (s){
return com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_(book.forms.form_state_demo_2.add_phone_STAR_(s,phone_id_86097,person_id,new cljs.core.Keyword(null,"home","home",-74557309),""),book.forms.form_state_demo_2.PhoneForm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","id","phone/id",-1272714042),phone_id_86097], null));
});})(phone_id_86097,map__85999,map__85999__$1,state,map__85996,map__85996__$1,person_id))
);

return null;
});})(map__85996,map__85996__$1,person_id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__85996,map__85996__$1,person_id){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__85996,map__85996__$1,person_id))
], null);
}));

var options__72617__auto___86098 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$forms$form_state_demo_2$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.forms.form_state_demo_2.PhoneForm)], null),com.fulcrologic.fulcro.algorithms.form_state.form_config_join], null);
}),new cljs.core.Keyword(null,"form-fields","form-fields",35924568),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("person","age","person/age",387881455),null,new cljs.core.Keyword("person","name","person/name",549444500),null,new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295),null], null), null),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$forms$form_state_demo_2$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$forms$form_state_demo_2$render_PersonForm(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86008 = com.fulcrologic.fulcro.components.props(this$);
var map__86008__$1 = (((((!((map__86008 == null))))?(((((map__86008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86008):map__86008);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86008__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86008__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86008__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var phone_numbers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86008__$1,new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.forms.form_state_demo_2.input_with_label(this$,new cljs.core.Keyword("person","name","person/name",549444500),"Name:","Name is required.",com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__86008,map__86008__$1,id,name,age,phone_numbers){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__86010 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id], null),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword("person","name","person/name",549444500)], null);
return (com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.cljs$core$IFn$_invoke$arity$1(G__86010) : com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.call(null,G__86010));
})(),new cljs.core.Keyword("root","person","root/person",-1065409981)], null));
});})(map__86008,map__86008__$1,id,name,age,phone_numbers))
,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__86008,map__86008__$1,id,name,age,phone_numbers){
return (function (evt){
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("person","name","person/name",549444500),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),evt], 0));
});})(map__86008,map__86008__$1,id,name,age,phone_numbers))
], null)], null),null)),com.fulcrologic.fulcro.components.force_children(book.forms.form_state_demo_2.input_with_label(this$,new cljs.core.Keyword("person","age","person/age",387881455),"Age:","Age must be between 1 and 120",com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = age;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__86008,map__86008__$1,id,name,age,phone_numbers){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__86011 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id], null),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword("person","age","person/age",387881455)], null);
return (com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.cljs$core$IFn$_invoke$arity$1(G__86011) : com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.call(null,G__86011));
})(),new cljs.core.Keyword("root","person","root/person",-1065409981)], null));
});})(map__86008,map__86008__$1,id,name,age,phone_numbers))
,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__86008,map__86008__$1,id,name,age,phone_numbers){
return (function (p1__86007_SHARP_){
return com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("person","age","person/age",387881455),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),p1__86007_SHARP_], 0));
});})(map__86008,map__86008__$1,id,name,age,phone_numbers))
], null)], null),null))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({}),"Phone numbers:"])),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(phone_numbers))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(book.forms.form_state_demo_2.ui_phone_form,phone_numbers):null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86008,map__86008__$1,id,name,age,phone_numbers){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.forms.form-state-demo-2","add-phone","book.forms.form-state-demo-2/add-phone",-203719092,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"person-id","person-id",1251942696),null,(1),null)),(new cljs.core.List(null,id,null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__86008,map__86008__$1,id,name,age,phone_numbers))
], null),"+"], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607)))], null),new cljs.core.Keyword(null,".ui.form",".ui.form",158215099));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.forms !== 'undefined') && (typeof book.forms.form_state_demo_2 !== 'undefined') && (typeof book.forms.form_state_demo_2.PersonForm !== 'undefined')){
} else {
book.forms.form_state_demo_2.PersonForm = ((function (options__72617__auto___86098){
return (function book$forms$form_state_demo_2$PersonForm(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86098,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86099)){
var init_state__72620__auto___86100 = temp__5733__auto___86099;
this__72619__auto__.state = (function (){var obj86013 = ({"fulcro$state":(function (){var G__86014 = this__72619__auto__;
var G__86015 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86100.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86100.cljs$core$IFn$_invoke$arity$2(G__86014,G__86015) : init_state__72620__auto___86100.call(null,G__86014,G__86015));
})()});
return obj86013;
})();
} else {
this__72619__auto__.state = (function (){var obj86017 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86017;
})();
}

return null;
});})(options__72617__auto___86098))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.forms.form_state_demo_2.PersonForm,new cljs.core.Keyword("book.forms.form-state-demo-2","PersonForm","book.forms.form-state-demo-2/PersonForm",2092369807),options__72617__auto___86098);
book.forms.form_state_demo_2.ui_person_form = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.forms.form_state_demo_2.PersonForm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));
/**
 * Add a person with the given details to the state database.
 */
book.forms.form_state_demo_2.add_person_STAR_ = (function book$forms$form_state_demo_2$add_person_STAR_(state_map,id,name,age){
var person_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id], null);
var person = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("person","id","person/id",-392409377),id,new cljs.core.Keyword("person","name","person/name",549444500),name,new cljs.core.Keyword("person","age","person/age",387881455),age], null);
return cljs.core.assoc_in(state_map,person_ident,person);
});
/**
 * 
 */
book.forms.form_state_demo_2.edit_new_person = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.forms.form-state-demo-2","edit-new-person","book.forms.form-state-demo-2/edit-new-person",-513770190,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.forms.form-state-demo-2","edit-new-person","book.forms.form-state-demo-2/edit-new-person",-513770190,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (_){
return (function book$forms$form_state_demo_2$action(p__86019){
var map__86020 = p__86019;
var map__86020__$1 = (((((!((map__86020 == null))))?(((((map__86020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86020):map__86020);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86020__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var person_id_86101 = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
var person_ident_86102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),person_id_86101], null);
var phone_id_86103 = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (person_id_86101,person_ident_86102,phone_id_86103,map__86020,map__86020__$1,state,_){
return (function (s){
return com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(book.forms.form_state_demo_2.add_phone_STAR_(book.forms.form_state_demo_2.add_person_STAR_(s,person_id_86101,"",(0)),phone_id_86103,person_id_86101,new cljs.core.Keyword(null,"home","home",-74557309),""),new cljs.core.Keyword("root","person","root/person",-1065409981),person_ident_86102),book.forms.form_state_demo_2.PersonForm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),person_id_86101], null));
});})(person_id_86101,person_ident_86102,phone_id_86103,map__86020,map__86020__$1,state,_))
);

return null;
});})(_))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (_){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(_))
], null);
}));
/**
 * Turn an existing person with phone numbers into an editable form with phone subforms.
 */
book.forms.form_state_demo_2.edit_existing_person = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.forms.form-state-demo-2","edit-existing-person","book.forms.form-state-demo-2/edit-existing-person",234876358,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.forms.form-state-demo-2","edit-existing-person","book.forms.form-state-demo-2/edit-existing-person",234876358,null),(function (fulcro_mutation_env_symbol){
var map__86026 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__86026__$1 = (((((!((map__86026 == null))))?(((((map__86026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86026):map__86026);
var person_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86026__$1,new cljs.core.Keyword(null,"person-id","person-id",1251942696));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__86026,map__86026__$1,person_id){
return (function book$forms$form_state_demo_2$action(p__86028){
var map__86029 = p__86028;
var map__86029__$1 = (((((!((map__86029 == null))))?(((((map__86029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86029):map__86029);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86029__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__86029,map__86029__$1,state,map__86026,map__86026__$1,person_id){
return (function (s){
return com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.form_state.entity__GT_pristine_STAR_(com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("root","person","root/person",-1065409981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),person_id], null)),book.forms.form_state_demo_2.PersonForm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),person_id], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),person_id], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),person_id], null));
});})(map__86029,map__86029__$1,state,map__86026,map__86026__$1,person_id))
);

return null;
});})(map__86026,map__86026__$1,person_id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__86026,map__86026__$1,person_id){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__86026,map__86026__$1,person_id))
], null);
}));
/**
 * 
 */
book.forms.form_state_demo_2.submit_person = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("book.forms.form-state-demo-2","submit-person","book.forms.form-state-demo-2/submit-person",1916664948,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("book.forms.form-state-demo-2","submit-person","book.forms.form-state-demo-2/submit-person",1916664948,null),(function (fulcro_mutation_env_symbol){
var map__86031 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__86031__$1 = (((((!((map__86031 == null))))?(((((map__86031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86031):map__86031);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86031__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),((function (map__86031,map__86031__$1,id){
return (function book$forms$form_state_demo_2$remote(env){
return true;
});})(map__86031,map__86031__$1,id))
,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__86031,map__86031__$1,id){
return (function book$forms$form_state_demo_2$action(p__86033){
var map__86034 = p__86033;
var map__86034__$1 = (((((!((map__86034 == null))))?(((((map__86034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86034):map__86034);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86034__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.algorithms.form_state.entity__GT_pristine_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id], null));

return null;
});})(map__86031,map__86031__$1,id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__86031,map__86031__$1,id){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__86031,map__86031__$1,id))
], null);
}));

var options__72617__auto___86113 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$forms$form_state_demo_2$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","person","root/person",-1065409981),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.forms.form_state_demo_2.PersonForm)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$forms$form_state_demo_2$build_raw_initial_state_STAR_(params){
return cljs.core.PersistentArrayMap.EMPTY;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$forms$form_state_demo_2$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__86040 = com.fulcrologic.fulcro.components.props(this$);
var map__86040__$1 = (((((!((map__86040 == null))))?(((((map__86040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86040):map__86040);
var person = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86040__$1,new cljs.core.Keyword("root","person","root/person",-1065409981));
return book.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),(0),new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(820)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["link",({"rel": "stylesheet", "href": "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"})]),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86040,map__86040__$1,person){
return (function (){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),(21)], null),book.forms.form_state_demo_2.PersonForm,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("root","person","root/person",-1065409981)], null),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("book.forms.form-state-demo-2","edit-existing-person","book.forms.form-state-demo-2/edit-existing-person",234876358,null),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person-id","person-id",1251942696),(21)], null)], null));
});})(map__86040,map__86040__$1,person))
], null),"Simulate Edit (existing) Person from Server"], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86040,map__86040__$1,person){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.forms.form-state-demo-2","edit-new-person","book.forms.form-state-demo-2/edit-new-person",-513770190,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(map__86040,map__86040__$1,person))
], null),"Simulate New Person Creation"], null),new cljs.core.Keyword(null,".ui.buton",".ui.buton",1975783013))),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(person))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.forms.form_state_demo_2.ui_person_form.cljs$core$IFn$_invoke$arity$1 ? book.forms.form_state_demo_2.ui_person_form.cljs$core$IFn$_invoke$arity$1(person) : book.forms.form_state_demo_2.ui_person_form.call(null,person))], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126)):null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86040,map__86040__$1,person){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","reset-form!","com.fulcrologic.fulcro.algorithms.form-state/reset-form!",-1216636000,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("person","id","person/id",-392409377),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(person),null,(1),null)))))),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__86040,map__86040__$1,person))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(person)))], null),"Reset"], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__86040,map__86040__$1,person){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.forms.form-state-demo-2","submit-person","book.forms.form-state-demo-2/submit-person",1916664948,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",-1388402092),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(person),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"diff","diff",2135942783),null,(1),null)),(new cljs.core.List(null,com.fulcrologic.fulcro.algorithms.form_state.dirty_fields(person,false),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));
});})(map__86040,map__86040__$1,person))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_.cljs$core$IFn$_invoke$arity$1(person)) || ((!(com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(person)))))], null),"Submit"], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607)))], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126)))], null),new cljs.core.Keyword(null,".ui.container.segments",".ui.container.segments",-1993725276)));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.forms !== 'undefined') && (typeof book.forms.form_state_demo_2 !== 'undefined') && (typeof book.forms.form_state_demo_2.Root !== 'undefined')){
} else {
book.forms.form_state_demo_2.Root = ((function (options__72617__auto___86113){
return (function book$forms$form_state_demo_2$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___86125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___86113,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___86125)){
var init_state__72620__auto___86126 = temp__5733__auto___86125;
this__72619__auto__.state = (function (){var obj86049 = ({"fulcro$state":(function (){var G__86076 = this__72619__auto__;
var G__86077 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___86126.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___86126.cljs$core$IFn$_invoke$arity$2(G__86076,G__86077) : init_state__72620__auto___86126.call(null,G__86076,G__86077));
})()});
return obj86049;
})();
} else {
this__72619__auto__.state = (function (){var obj86079 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj86079;
})();
}

return null;
});})(options__72617__auto___86113))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.forms.form_state_demo_2.Root,new cljs.core.Keyword("book.forms.form-state-demo-2","Root","book.forms.form-state-demo-2/Root",-1664877929),options__72617__auto___86113);

//# sourceMappingURL=book.forms.form_state_demo_2.js.map
