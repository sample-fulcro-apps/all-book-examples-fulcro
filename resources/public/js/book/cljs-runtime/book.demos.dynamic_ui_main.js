goog.provide('book.demos.dynamic_ui_main');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.routing.legacy_ui_routers');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('shadow.loader');
goog.require('taoensso.timbre');

var options__72617__auto___89895 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$demos$dynamic_ui_main$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.routing.legacy_ui_routers.dynamic_route_key,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"main-prop","main-prop",1607909159)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$demos$dynamic_ui_main$build_raw_initial_state_STAR_(params){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.routing.legacy_ui_routers.dynamic_route_key,new cljs.core.Keyword(null,"ui-main","ui-main",226371438),new cljs.core.Keyword(null,"label","label",1718410804),"MAIN",new cljs.core.Keyword(null,"main-prop","main-prop",1607909159),"main page data"]);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$demos$dynamic_ui_main$ident_STAR_(this$,p__89873){
var map__89874 = p__89873;
var map__89874__$1 = (((((!((map__89874 == null))))?(((((map__89874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89874):map__89874);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89874__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var main_prop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89874__$1,new cljs.core.Keyword(null,"main-prop","main-prop",1607909159));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-main","ui-main",226371438),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$demos$dynamic_ui_main$render_Main(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89878 = com.fulcrologic.fulcro.components.props(this$);
var map__89878__$1 = (((((!((map__89878 == null))))?(((((map__89878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89878):map__89878);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89878__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var main_prop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89878__$1,new cljs.core.Keyword(null,"main-prop","main-prop",1607909159));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"backgroundColor": "red"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(main_prop)].join(''))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.demos !== 'undefined') && (typeof book.demos.dynamic_ui_main !== 'undefined') && (typeof book.demos.dynamic_ui_main.Main !== 'undefined')){
} else {
book.demos.dynamic_ui_main.Main = ((function (options__72617__auto___89895){
return (function book$demos$dynamic_ui_main$Main(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89895,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89899)){
var init_state__72620__auto___89900 = temp__5733__auto___89899;
this__72619__auto__.state = (function (){var obj89887 = ({"fulcro$state":(function (){var G__89888 = this__72619__auto__;
var G__89889 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89900.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89900.cljs$core$IFn$_invoke$arity$2(G__89888,G__89889) : init_state__72620__auto___89900.call(null,G__89888,G__89889));
})()});
return obj89887;
})();
} else {
this__72619__auto__.state = (function (){var obj89891 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89891;
})();
}

return null;
});})(options__72617__auto___89895))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.demos.dynamic_ui_main.Main,new cljs.core.Keyword("book.demos.dynamic-ui-main","Main","book.demos.dynamic-ui-main/Main",461487812),options__72617__auto___89895);
book.demos.dynamic_ui_main.init = (function book$demos$dynamic_ui_main$init(){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"book.demos.dynamic-ui-main",null,20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dynamic ui main loaded"], null);
}),null)),null,648911754);
});
goog.exportSymbol('book.demos.dynamic_ui_main.init', book.demos.dynamic_ui_main.init);
com.fulcrologic.fulcro.routing.legacy_ui_routers.get_dynamic_router_target.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ui-main","ui-main",226371438),(function (k){
return book.demos.dynamic_ui_main.Main;
}));
var G__89894_89901 = new cljs.core.Keyword(null,"ui-main","ui-main",226371438);
shadow.loader.set_loaded_BANG_(G__89894_89901);

//# sourceMappingURL=book.demos.dynamic_ui_main.js.map
