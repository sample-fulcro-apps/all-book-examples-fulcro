goog.provide('book.ui.focus_example');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('goog.object');

var options__72617__auto___80861 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui$focus_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"ABC",new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui$focus_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$ui$focus_example$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("field","by-id","field/by-id",-2101203607),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save-ref","save-ref",153912851),(function (r){
return goog.object.set(this$,"input-ref",r);
})], null);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (this$,prev_props,_){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(prev_props));
if(and__4120__auto__){
return new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.props(this$));
} else {
return and__4120__auto__;
}
})())){
var temp__5735__auto__ = goog.object.get(this$,"input-ref");
if(cljs.core.truth_(temp__5735__auto__)){
var input_field = temp__5735__auto__;
return input_field.focus();
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui$focus_example$render_ClickToEditField(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__80808 = com.fulcrologic.fulcro.components.props(this$);
var map__80808__$1 = (((((!((map__80808 == null))))?(((((map__80808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80808):map__80808);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80808__$1,new cljs.core.Keyword(null,"value","value",305978217));
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80808__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var save_ref = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"save-ref","save-ref",153912851));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (save_ref,map__80808,map__80808__$1,value,editing_QMARK_){
return (function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
});})(save_ref,map__80808,map__80808__$1,value,editing_QMARK_))
], null),"Click to focus (if not already editing): "], null),null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (save_ref,map__80808,map__80808__$1,value,editing_QMARK_){
return (function (p1__80801_SHARP_){
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__80801_SHARP_], 0));
});})(save_ref,map__80808,map__80808__$1,value,editing_QMARK_))
,new cljs.core.Keyword(null,"ref","ref",1289896967),save_ref], null)], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (save_ref,map__80808,map__80808__$1,value,editing_QMARK_){
return (function (){
var temp__5735__auto__ = goog.object.get(this$,"input-ref");
if(cljs.core.truth_(temp__5735__auto__)){
var input_field = temp__5735__auto__;
input_field.focus();

return input_field.setSelectionRange((0),input_field.value.length);
} else {
return null;
}
});})(save_ref,map__80808,map__80808__$1,value,editing_QMARK_))
], null),"Highlight All"], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui !== 'undefined') && (typeof book.ui.focus_example !== 'undefined') && (typeof book.ui.focus_example.ClickToEditField !== 'undefined')){
} else {
book.ui.focus_example.ClickToEditField = ((function (options__72617__auto___80861){
return (function book$ui$focus_example$ClickToEditField(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___80876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___80861,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___80876)){
var init_state__72620__auto___80877 = temp__5733__auto___80876;
this__72619__auto__.state = (function (){var obj80837 = ({"fulcro$state":(function (){var G__80838 = this__72619__auto__;
var G__80839 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___80877.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___80877.cljs$core$IFn$_invoke$arity$2(G__80838,G__80839) : init_state__72620__auto___80877.call(null,G__80838,G__80839));
})()});
return obj80837;
})();
} else {
this__72619__auto__.state = (function (){var obj80842 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj80842;
})();
}

return null;
});})(options__72617__auto___80861))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui.focus_example.ClickToEditField,new cljs.core.Keyword("book.ui.focus-example","ClickToEditField","book.ui.focus-example/ClickToEditField",970291971),options__72617__auto___80861);
book.ui.focus_example.ui_click_to_edit = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.ui.focus_example.ClickToEditField);

var options__72617__auto___80878 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$ui$focus_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.ui.focus_example.ClickToEditField)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$ui$focus_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),book.ui.focus_example.ClickToEditField], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$ui$focus_example$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__80850 = com.fulcrologic.fulcro.components.props(this$);
var map__80850__$1 = (((((!((map__80850 == null))))?(((((map__80850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80850):map__80850);
var props = map__80850__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80850__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return (book.ui.focus_example.ui_click_to_edit.cljs$core$IFn$_invoke$arity$1 ? book.ui.focus_example.ui_click_to_edit.cljs$core$IFn$_invoke$arity$1(field) : book.ui.focus_example.ui_click_to_edit.call(null,field));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.ui !== 'undefined') && (typeof book.ui.focus_example !== 'undefined') && (typeof book.ui.focus_example.Root !== 'undefined')){
} else {
book.ui.focus_example.Root = ((function (options__72617__auto___80878){
return (function book$ui$focus_example$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___80885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___80878,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___80885)){
var init_state__72620__auto___80889 = temp__5733__auto___80885;
this__72619__auto__.state = (function (){var obj80853 = ({"fulcro$state":(function (){var G__80854 = this__72619__auto__;
var G__80855 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___80889.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___80889.cljs$core$IFn$_invoke$arity$2(G__80854,G__80855) : init_state__72620__auto___80889.call(null,G__80854,G__80855));
})()});
return obj80853;
})();
} else {
this__72619__auto__.state = (function (){var obj80860 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj80860;
})();
}

return null;
});})(options__72617__auto___80878))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.ui.focus_example.Root,new cljs.core.Keyword("book.ui.focus-example","Root","book.ui.focus-example/Root",-1226677094),options__72617__auto___80878);

//# sourceMappingURL=book.ui.focus_example.js.map
