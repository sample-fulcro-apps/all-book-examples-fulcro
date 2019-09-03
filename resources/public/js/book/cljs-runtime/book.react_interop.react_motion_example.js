goog.provide('book.react_interop.react_motion_example');
goog.require('cljs.core');
var module$node_modules$react_motion$lib$react_motion=shadow.js.require("module$node_modules$react_motion$lib$react_motion", {});
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.algorithms.react_interop');
book.react_interop.react_motion_example.ui_motion = com.fulcrologic.fulcro.algorithms.react_interop.react_factory(module$node_modules$react_motion$lib$react_motion.Motion);

var options__72617__auto___85538 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$react_interop$react_motion_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","id","block/id",-1461684825),new cljs.core.Keyword("block","name","block/name",1619760316)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$react_interop$react_motion_example$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","id","block/id",-1461684825),new cljs.core.Keyword("block","id","block/id",-1461684825).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$react_interop$react_motion_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","id","block/id",-1461684825),(1),new cljs.core.Keyword("block","name","block/name",1619760316),"A Block"], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$react_interop$react_motion_example$render_Block(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85477 = com.fulcrologic.fulcro.components.props(this$);
var map__85477__$1 = (((((!((map__85477 == null))))?(((((map__85477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85477):map__85477);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85477__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var map__85478 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__85478__$1 = (((((!((map__85478 == null))))?(((((map__85478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85478):map__85478);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85478__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),top], null)], null),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),"Name?"]),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__85477,map__85477__$1,name,map__85478,map__85478__$1,top){
return (function (p1__85458_SHARP_){
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),p1__85458_SHARP_], 0));
});})(map__85477,map__85477__$1,name,map__85478,map__85478__$1,top))
], null)], null),null))], null),null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.react_interop !== 'undefined') && (typeof book.react_interop.react_motion_example !== 'undefined') && (typeof book.react_interop.react_motion_example.Block !== 'undefined')){
} else {
book.react_interop.react_motion_example.Block = ((function (options__72617__auto___85538){
return (function book$react_interop$react_motion_example$Block(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85538,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85542)){
var init_state__72620__auto___85543 = temp__5733__auto___85542;
this__72619__auto__.state = (function (){var obj85495 = ({"fulcro$state":(function (){var G__85496 = this__72619__auto__;
var G__85497 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85543.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85543.cljs$core$IFn$_invoke$arity$2(G__85496,G__85497) : init_state__72620__auto___85543.call(null,G__85496,G__85497));
})()});
return obj85495;
})();
} else {
this__72619__auto__.state = (function (){var obj85499 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85499;
})();
}

return null;
});})(options__72617__auto___85538))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.react_interop.react_motion_example.Block,new cljs.core.Keyword("book.react-interop.react-motion-example","Block","book.react-interop.react-motion-example/Block",-1205932517),options__72617__auto___85538);
book.react_interop.react_motion_example.ui_block = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.react_interop.react_motion_example.Block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

var options__72617__auto___85544 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$react_interop$react_motion_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","slid?","ui/slid?",1150946808),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.react_interop.react_motion_example.Block)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$react_interop$react_motion_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","slid?","ui/slid?",1150946808),false,new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"N"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),book.react_interop.react_motion_example.Block], null),params);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$react_interop$react_motion_example$ident_STAR_(this$,p__85500){
var map__85501 = p__85500;
var map__85501__$1 = (((((!((map__85501 == null))))?(((((map__85501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85501):map__85501);
var slid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85501__$1,new cljs.core.Keyword("ui","slid?","ui/slid?",1150946808));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85501__$1,new cljs.core.Keyword(null,"block","block",664686210));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.Keyword(null,"demo","demo",851880189)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$react_interop$react_motion_example$render_Demo(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85503 = com.fulcrologic.fulcro.components.props(this$);
var map__85503__$1 = (((((!((map__85503 == null))))?(((((map__85503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85503):map__85503);
var slid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85503__$1,new cljs.core.Keyword("ui","slid?","ui/slid?",1150946808));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85503__$1,new cljs.core.Keyword(null,"block","block",664686210));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"overflow": "hidden", "height": "150px", "margin": "5px", "padding": "5px", "border": "1px solid black", "border-radius": "10px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__85503,map__85503__$1,slid_QMARK_,block){
return (function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","slid?","ui/slid?",1150946808));
});})(map__85503,map__85503__$1,slid_QMARK_,block))
], null),"Toggle"], null),null)),com.fulcrologic.fulcro.components.force_children((function (){var G__85507 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["y",(function (){var G__85509 = (cljs.core.truth_(slid_QMARK_)?(175):(0));
return module$node_modules$react_motion$lib$react_motion.spring(G__85509);
})()], null)], null);
var G__85508 = ((function (G__85507,map__85503,map__85503__$1,slid_QMARK_,block){
return (function (p){
var y = com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(p,"y");
var parent__72530__auto__ = this$;
var r__72531__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.components.any__GT_app(parent__72530__auto__);
}
})();
var d__72532__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (com.fulcrologic.fulcro.components.depth(parent__72530__auto__) + (1));
}
})();
var s__72533__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(parent__72530__auto__);
}
})();
var p__72534__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return parent__72530__auto__;
}
})();
var _STAR_app_STAR__orig_val__85511 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__85512 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__85513 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__85514 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__85515 = r__72531__auto__;
var _STAR_depth_STAR__temp_val__85516 = d__72532__auto__;
var _STAR_shared_STAR__temp_val__85517 = s__72533__auto__;
var _STAR_parent_STAR__temp_val__85518 = p__72534__auto__;
com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__85515;

com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__85516;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__85517;

com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__85518;

try{return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__85519 = com.fulcrologic.fulcro.components.computed(block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),y], null));
return (book.react_interop.react_motion_example.ui_block.cljs$core$IFn$_invoke$arity$1 ? book.react_interop.react_motion_example.ui_block.cljs$core$IFn$_invoke$arity$1(G__85519) : book.react_interop.react_motion_example.ui_block.call(null,G__85519));
})()], null),new cljs.core.Keyword(null,".demo",".demo",-301832727));
}finally {com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__85514;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__85513;

com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__85512;

com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__85511;
}});})(G__85507,map__85503,map__85503__$1,slid_QMARK_,block))
;
return (book.react_interop.react_motion_example.ui_motion.cljs$core$IFn$_invoke$arity$2 ? book.react_interop.react_motion_example.ui_motion.cljs$core$IFn$_invoke$arity$2(G__85507,G__85508) : book.react_interop.react_motion_example.ui_motion.call(null,G__85507,G__85508));
})())]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.react_interop !== 'undefined') && (typeof book.react_interop.react_motion_example !== 'undefined') && (typeof book.react_interop.react_motion_example.Demo !== 'undefined')){
} else {
book.react_interop.react_motion_example.Demo = ((function (options__72617__auto___85544){
return (function book$react_interop$react_motion_example$Demo(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85544,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85558)){
var init_state__72620__auto___85559 = temp__5733__auto___85558;
this__72619__auto__.state = (function (){var obj85522 = ({"fulcro$state":(function (){var G__85523 = this__72619__auto__;
var G__85524 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85559.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85559.cljs$core$IFn$_invoke$arity$2(G__85523,G__85524) : init_state__72620__auto___85559.call(null,G__85523,G__85524));
})()});
return obj85522;
})();
} else {
this__72619__auto__.state = (function (){var obj85526 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85526;
})();
}

return null;
});})(options__72617__auto___85544))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.react_interop.react_motion_example.Demo,new cljs.core.Keyword("book.react-interop.react-motion-example","Demo","book.react-interop.react-motion-example/Demo",1735914451),options__72617__auto___85544);
book.react_interop.react_motion_example.ui_demo = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.react_interop.react_motion_example.Demo);

var options__72617__auto___85560 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$react_interop$react_motion_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","demo","root/demo",854403103),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.react_interop.react_motion_example.Demo)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$react_interop$react_motion_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","demo","root/demo",854403103),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","demo","root/demo",854403103),book.react_interop.react_motion_example.Demo], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$react_interop$react_motion_example$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85528 = com.fulcrologic.fulcro.components.props(this$);
var map__85528__$1 = (((((!((map__85528 == null))))?(((((map__85528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85528):map__85528);
var props = map__85528__$1;
var demo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85528__$1,new cljs.core.Keyword("root","demo","root/demo",854403103));
return (book.react_interop.react_motion_example.ui_demo.cljs$core$IFn$_invoke$arity$1 ? book.react_interop.react_motion_example.ui_demo.cljs$core$IFn$_invoke$arity$1(demo) : book.react_interop.react_motion_example.ui_demo.call(null,demo));
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.react_interop !== 'undefined') && (typeof book.react_interop.react_motion_example !== 'undefined') && (typeof book.react_interop.react_motion_example.Root !== 'undefined')){
} else {
book.react_interop.react_motion_example.Root = ((function (options__72617__auto___85560){
return (function book$react_interop$react_motion_example$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85560,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85564)){
var init_state__72620__auto___85565 = temp__5733__auto___85564;
this__72619__auto__.state = (function (){var obj85533 = ({"fulcro$state":(function (){var G__85534 = this__72619__auto__;
var G__85535 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85565.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85565.cljs$core$IFn$_invoke$arity$2(G__85534,G__85535) : init_state__72620__auto___85565.call(null,G__85534,G__85535));
})()});
return obj85533;
})();
} else {
this__72619__auto__.state = (function (){var obj85537 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85537;
})();
}

return null;
});})(options__72617__auto___85560))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.react_interop.react_motion_example.Root,new cljs.core.Keyword("book.react-interop.react-motion-example","Root","book.react-interop.react-motion-example/Root",125067219),options__72617__auto___85560);

//# sourceMappingURL=book.react_interop.react_motion_example.js.map
