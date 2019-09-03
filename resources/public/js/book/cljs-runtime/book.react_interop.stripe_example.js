goog.provide('book.react_interop.stripe_example');
goog.require('cljs.core');
var module$node_modules$react_stripe_elements$lib$index=shadow.js.require("module$node_modules$react_stripe_elements$lib$index", {});
goog.require('com.fulcrologic.fulcro.algorithms.react_interop');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.mutations');
book.react_interop.stripe_example.test_key = "pk_test_crQ5GM8nCR8tM06YZcgunnmZ00qjGWhSNV";
book.react_interop.stripe_example.ui_stripe_provider = com.fulcrologic.fulcro.algorithms.react_interop.react_factory(module$node_modules$react_stripe_elements$lib$index.StripeProvider);
book.react_interop.stripe_example.ui_elements = com.fulcrologic.fulcro.algorithms.react_interop.react_factory(module$node_modules$react_stripe_elements$lib$index.Elements);
book.react_interop.stripe_example.ui_card_element = com.fulcrologic.fulcro.algorithms.react_interop.react_factory(module$node_modules$react_stripe_elements$lib$index.CardNumberElement);
book.react_interop.stripe_example.ui_exp_element = com.fulcrologic.fulcro.algorithms.react_interop.react_factory(module$node_modules$react_stripe_elements$lib$index.CardExpiryElement);
book.react_interop.stripe_example.ui_cvc_element = com.fulcrologic.fulcro.algorithms.react_interop.react_factory(module$node_modules$react_stripe_elements$lib$index.CardCvcElement);
book.react_interop.stripe_example.handle_result = (function book$react_interop$stripe_example$handle_result(result){
var map__85406 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__85406__$1 = (((((!((map__85406 == null))))?(((((map__85406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85406):map__85406);
var map__85407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85406__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var map__85407__$1 = (((((!((map__85407 == null))))?(((((map__85407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85407):map__85407);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85407__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var map__85408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85406__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var map__85408__$1 = (((((!((map__85408 == null))))?(((((map__85408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85408):map__85408);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85408__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(message)){
alert(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join(''));
} else {
}

if(cljs.core.truth_(id)){
return alert(["Created payment token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
return null;
}
});

var options__72617__auto___85456 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$react_interop$stripe_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customer","name","customer/name",-1039810549)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$react_interop$stripe_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("customer","name","customer/name",-1039810549),""], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$react_interop$stripe_example$ident_STAR_(this$,p__85415){
var map__85416 = p__85415;
var map__85416__$1 = (((((!((map__85416 == null))))?(((((map__85416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85416):map__85416);
var props = map__85416__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85416__$1,new cljs.core.Keyword("customer","name","customer/name",-1039810549));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("book.react-interop.stripe-example","ccform","book.react-interop.stripe-example/ccform",-1514941259)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$react_interop$stripe_example$render_CCForm(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85418 = com.fulcrologic.fulcro.components.props(this$);
var map__85418__$1 = (((((!((map__85418 == null))))?(((((map__85418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85418):map__85418);
var props = map__85418__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85418__$1,new cljs.core.Keyword("customer","name","customer/name",-1039810549));
var map__85419 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__85419__$1 = (((((!((map__85419 == null))))?(((((map__85419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85419):map__85419);
var computed = map__85419__$1;
var injected_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85419__$1,new cljs.core.Keyword(null,"injected-props","injected-props",366631973));
var stripe = com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(injected_props,"stripe");
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),((function (stripe,map__85418,map__85418__$1,props,name,map__85419,map__85419__$1,computed,injected_props){
return (function (e){
return e.preventDefault();
});})(stripe,map__85418,map__85418__$1,props,name,map__85419,map__85419__$1,computed,injected_props))
], null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),"Name"]),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (stripe,map__85418,map__85418__$1,props,name,map__85419,map__85419__$1,computed,injected_props){
return (function (p1__85414_SHARP_){
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("customer","name","customer/name",-1039810549),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),p1__85414_SHARP_], 0));
});})(stripe,map__85418,map__85418__$1,props,name,map__85419,map__85419__$1,computed,injected_props))
], null)], null),null))], null),new cljs.core.Keyword(null,".field",".field",954681856))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),"Card Number"]),com.fulcrologic.fulcro.components.force_children((function (){var G__85424 = cljs.core.PersistentArrayMap.EMPTY;
return (book.react_interop.stripe_example.ui_card_element.cljs$core$IFn$_invoke$arity$1 ? book.react_interop.stripe_example.ui_card_element.cljs$core$IFn$_invoke$arity$1(G__85424) : book.react_interop.stripe_example.ui_card_element.call(null,G__85424));
})())], null),new cljs.core.Keyword(null,".field",".field",954681856))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),"Expired"]),com.fulcrologic.fulcro.components.force_children((function (){var G__85425 = cljs.core.PersistentArrayMap.EMPTY;
return (book.react_interop.stripe_example.ui_exp_element.cljs$core$IFn$_invoke$arity$1 ? book.react_interop.stripe_example.ui_exp_element.cljs$core$IFn$_invoke$arity$1(G__85425) : book.react_interop.stripe_example.ui_exp_element.call(null,G__85425));
})())], null),new cljs.core.Keyword(null,".field",".field",954681856)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),"CVC"]),com.fulcrologic.fulcro.components.force_children((function (){var G__85428 = cljs.core.PersistentArrayMap.EMPTY;
return (book.react_interop.stripe_example.ui_cvc_element.cljs$core$IFn$_invoke$arity$1 ? book.react_interop.stripe_example.ui_cvc_element.cljs$core$IFn$_invoke$arity$1(G__85428) : book.react_interop.stripe_example.ui_cvc_element.call(null,G__85428));
})())], null),new cljs.core.Keyword(null,".field",".field",954681856)))], null),new cljs.core.Keyword(null,".two.fields",".two.fields",-2107074471))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (stripe,map__85418,map__85418__$1,props,name,map__85419,map__85419__$1,computed,injected_props){
return (function (e){
return stripe.createToken(({"type": "card", "name": name})).then(((function (stripe,map__85418,map__85418__$1,props,name,map__85419,map__85419__$1,computed,injected_props){
return (function (result){
return book.react_interop.stripe_example.handle_result(result);
});})(stripe,map__85418,map__85418__$1,props,name,map__85419,map__85419__$1,computed,injected_props))
).catch(((function (stripe,map__85418,map__85418__$1,props,name,map__85419,map__85419__$1,computed,injected_props){
return (function (result){
return book.react_interop.stripe_example.handle_result(result);
});})(stripe,map__85418,map__85418__$1,props,name,map__85419,map__85419__$1,computed,injected_props))
);
});})(stripe,map__85418,map__85418__$1,props,name,map__85419,map__85419__$1,computed,injected_props))
], null),"Pay"], null),null))], null),new cljs.core.Keyword(null,".ui.form",".ui.form",158215099));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.react_interop !== 'undefined') && (typeof book.react_interop.stripe_example !== 'undefined') && (typeof book.react_interop.stripe_example.CCForm !== 'undefined')){
} else {
book.react_interop.stripe_example.CCForm = ((function (options__72617__auto___85456){
return (function book$react_interop$stripe_example$CCForm(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85456,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85465)){
var init_state__72620__auto___85469 = temp__5733__auto___85465;
this__72619__auto__.state = (function (){var obj85431 = ({"fulcro$state":(function (){var G__85432 = this__72619__auto__;
var G__85433 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85469.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85469.cljs$core$IFn$_invoke$arity$2(G__85432,G__85433) : init_state__72620__auto___85469.call(null,G__85432,G__85433));
})()});
return obj85431;
})();
} else {
this__72619__auto__.state = (function (){var obj85435 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85435;
})();
}

return null;
});})(options__72617__auto___85456))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.react_interop.stripe_example.CCForm,new cljs.core.Keyword("book.react-interop.stripe-example","CCForm","book.react-interop.stripe-example/CCForm",-1851540678),options__72617__auto___85456);
book.react_interop.stripe_example.ui_cc_form = com.fulcrologic.fulcro.algorithms.react_interop.hoc_factory(book.react_interop.stripe_example.CCForm,module$node_modules$react_stripe_elements$lib$index.injectStripe);

var options__72617__auto___85475 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$react_interop$stripe_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","cc-form","root/cc-form",-400856068),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.react_interop.stripe_example.CCForm)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$react_interop$stripe_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","cc-form","root/cc-form",-400856068),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","cc-form","root/cc-form",-400856068),book.react_interop.stripe_example.CCForm], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$react_interop$stripe_example$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85436 = com.fulcrologic.fulcro.components.props(this$);
var map__85436__$1 = (((((!((map__85436 == null))))?(((((map__85436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85436):map__85436);
var props = map__85436__$1;
var cc_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85436__$1,new cljs.core.Keyword("root","cc-form","root/cc-form",-400856068));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Payment Form"]),com.fulcrologic.fulcro.components.force_children((function (){var G__85439 = ({"apiKey": book.react_interop.stripe_example.test_key});
var G__85440 = (function (){var G__85441 = ({});
var G__85442 = (book.react_interop.stripe_example.ui_cc_form.cljs$core$IFn$_invoke$arity$2 ? book.react_interop.stripe_example.ui_cc_form.cljs$core$IFn$_invoke$arity$2(this$,cc_form) : book.react_interop.stripe_example.ui_cc_form.call(null,this$,cc_form));
return (book.react_interop.stripe_example.ui_elements.cljs$core$IFn$_invoke$arity$2 ? book.react_interop.stripe_example.ui_elements.cljs$core$IFn$_invoke$arity$2(G__85441,G__85442) : book.react_interop.stripe_example.ui_elements.call(null,G__85441,G__85442));
})();
return (book.react_interop.stripe_example.ui_stripe_provider.cljs$core$IFn$_invoke$arity$2 ? book.react_interop.stripe_example.ui_stripe_provider.cljs$core$IFn$_invoke$arity$2(G__85439,G__85440) : book.react_interop.stripe_example.ui_stripe_provider.call(null,G__85439,G__85440));
})())], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.react_interop !== 'undefined') && (typeof book.react_interop.stripe_example !== 'undefined') && (typeof book.react_interop.stripe_example.Root !== 'undefined')){
} else {
book.react_interop.stripe_example.Root = ((function (options__72617__auto___85475){
return (function book$react_interop$stripe_example$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85475,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85486)){
var init_state__72620__auto___85487 = temp__5733__auto___85486;
this__72619__auto__.state = (function (){var obj85449 = ({"fulcro$state":(function (){var G__85450 = this__72619__auto__;
var G__85451 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85487.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85487.cljs$core$IFn$_invoke$arity$2(G__85450,G__85451) : init_state__72620__auto___85487.call(null,G__85450,G__85451));
})()});
return obj85449;
})();
} else {
this__72619__auto__.state = (function (){var obj85453 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85453;
})();
}

return null;
});})(options__72617__auto___85475))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.react_interop.stripe_example.Root,new cljs.core.Keyword("book.react-interop.stripe-example","Root","book.react-interop.stripe-example/Root",981014860),options__72617__auto___85475);

//# sourceMappingURL=book.react_interop.stripe_example.js.map
