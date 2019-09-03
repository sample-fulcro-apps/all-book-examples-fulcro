goog.provide('book.elements');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
book.elements.update_frame_content = (function book$elements$update_frame_content(this$,child){
var frame_component = goog.object.get(this$,"frame-component");
if(cljs.core.truth_(frame_component)){
return ReactDOM.render(child,frame_component);
} else {
return null;
}
});
book.elements.start_frame = (function book$elements$start_frame(this$){
var frame_body = ReactDOM.findDOMNode(this$).contentDocument.body;
var map__85352 = com.fulcrologic.fulcro.components.props(this$);
var map__85352__$1 = (((((!((map__85352 == null))))?(((((map__85352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85352):map__85352);
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85352__$1,new cljs.core.Keyword(null,"child","child",623967545));
var e1 = document.createElement("div");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),(function (){var G__85354 = frame_body;
var G__85355 = ["children","length"];
return goog.object.getValueByKeys(G__85354,G__85355);
})())){
frame_body.appendChild(e1);

goog.object.set(this$,"frame-component",e1);

return book.elements.update_frame_content(this$,child);
} else {
return null;
}
});

var options__72617__auto___85375 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
return book.elements.start_frame(this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (this$,_,___$1){
var child = new cljs.core.Keyword(null,"child","child",623967545).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.props(this$));
return book.elements.update_frame_content(this$,child);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$elements$render_IFrame(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.props(this$),new cljs.core.Keyword(null,"child","child",623967545)),new cljs.core.Keyword(null,"onLoad","onLoad",-1227893830),((function (props){
return (function (){
return book.elements.start_frame(this$);
});})(props))
))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.elements !== 'undefined') && (typeof book.elements.IFrame !== 'undefined')){
} else {
book.elements.IFrame = ((function (options__72617__auto___85375){
return (function book$elements$IFrame(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85375,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85381)){
var init_state__72620__auto___85382 = temp__5733__auto___85381;
this__72619__auto__.state = (function (){var obj85363 = ({"fulcro$state":(function (){var G__85364 = this__72619__auto__;
var G__85365 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85382.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85382.cljs$core$IFn$_invoke$arity$2(G__85364,G__85365) : init_state__72620__auto___85382.call(null,G__85364,G__85365));
})()});
return obj85363;
})();
} else {
this__72619__auto__.state = (function (){var obj85368 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85368;
})();
}

return null;
});})(options__72617__auto___85375))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.elements.IFrame,new cljs.core.Keyword("book.elements","IFrame","book.elements/IFrame",-432139828),options__72617__auto___85375);
var factory_85383 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.elements.IFrame);
book.elements.ui_iframe = ((function (factory_85383){
return (function book$elements$ui_iframe(props,child){
var G__85369 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"child","child",623967545),child);
return (factory_85383.cljs$core$IFn$_invoke$arity$1 ? factory_85383.cljs$core$IFn$_invoke$arity$1(G__85369) : factory_85383.call(null,G__85369));
});})(factory_85383))
;

//# sourceMappingURL=book.elements.js.map
