goog.provide('book.react_interop.google_maps_example');
goog.require('cljs.core');
var module$node_modules$google_maps_react$dist$index=shadow.js.require("module$node_modules$google_maps_react$dist$index", {});
goog.require('com.fulcrologic.fulcro.algorithms.react_interop');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
book.react_interop.google_maps_example.ui_google_map = com.fulcrologic.fulcro.algorithms.react_interop.react_factory(module$node_modules$google_maps_react$dist$index.Map);
book.react_interop.google_maps_example.ui_map_marker = com.fulcrologic.fulcro.algorithms.react_interop.react_factory(module$node_modules$google_maps_react$dist$index.Marker);

var options__72617__auto___85395 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$react_interop$google_maps_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","latitude","map/latitude",394969075),new cljs.core.Keyword("map","longitude","map/longitude",-1268722480)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$react_interop$google_maps_example$ident_STAR_(this$,p__85356){
var map__85357 = p__85356;
var map__85357__$1 = (((((!((map__85357 == null))))?(((((map__85357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85357):map__85357);
var props = map__85357__$1;
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85357__$1,new cljs.core.Keyword("map","latitude","map/latitude",394969075));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85357__$1,new cljs.core.Keyword("map","longitude","map/longitude",-1268722480));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("book.react-interop.google-maps-example","location-view","book.react-interop.google-maps-example/location-view",1565589155)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$react_interop$google_maps_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("map","latitude","map/latitude",394969075),45.5051,new cljs.core.Keyword("map","longitude","map/longitude",-1268722480),-122.675], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$react_interop$google_maps_example$render_LocationView(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85359 = com.fulcrologic.fulcro.components.props(this$);
var map__85359__$1 = (((((!((map__85359 == null))))?(((((map__85359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85359):map__85359);
var props = map__85359__$1;
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85359__$1,new cljs.core.Keyword("map","latitude","map/latitude",394969075));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85359__$1,new cljs.core.Keyword("map","longitude","map/longitude",-1268722480));
var map__85360 = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__85360__$1 = (((((!((map__85360 == null))))?(((((map__85360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85360):map__85360);
var computed = map__85360__$1;
var injected_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85360__$1,new cljs.core.Keyword(null,"injected-props","injected-props",366631973));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"width": "520px", "height": "520px"})}),com.fulcrologic.fulcro.components.force_children((function (){var G__85370 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"google","google",578454873),injected_props.google,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(5),new cljs.core.Keyword(null,"initialCenter","initialCenter",-823920987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),latitude,new cljs.core.Keyword(null,"lng","lng",1667213918),longitude], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"height","height",1025178622),"90%"], null)], null);
var G__85371 = (function (){var G__85372 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),latitude,new cljs.core.Keyword(null,"lng","lng",1667213918),longitude], null)], null);
return (book.react_interop.google_maps_example.ui_map_marker.cljs$core$IFn$_invoke$arity$1 ? book.react_interop.google_maps_example.ui_map_marker.cljs$core$IFn$_invoke$arity$1(G__85372) : book.react_interop.google_maps_example.ui_map_marker.call(null,G__85372));
})();
return (book.react_interop.google_maps_example.ui_google_map.cljs$core$IFn$_invoke$arity$2 ? book.react_interop.google_maps_example.ui_google_map.cljs$core$IFn$_invoke$arity$2(G__85370,G__85371) : book.react_interop.google_maps_example.ui_google_map.call(null,G__85370,G__85371));
})())])], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.react_interop !== 'undefined') && (typeof book.react_interop.google_maps_example !== 'undefined') && (typeof book.react_interop.google_maps_example.LocationView !== 'undefined')){
} else {
book.react_interop.google_maps_example.LocationView = ((function (options__72617__auto___85395){
return (function book$react_interop$google_maps_example$LocationView(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85395,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85399)){
var init_state__72620__auto___85401 = temp__5733__auto___85399;
this__72619__auto__.state = (function (){var obj85374 = ({"fulcro$state":(function (){var G__85376 = this__72619__auto__;
var G__85377 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85401.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85401.cljs$core$IFn$_invoke$arity$2(G__85376,G__85377) : init_state__72620__auto___85401.call(null,G__85376,G__85377));
})()});
return obj85374;
})();
} else {
this__72619__auto__.state = (function (){var obj85379 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85379;
})();
}

return null;
});})(options__72617__auto___85395))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.react_interop.google_maps_example.LocationView,new cljs.core.Keyword("book.react-interop.google-maps-example","LocationView","book.react-interop.google-maps-example/LocationView",-848891170),options__72617__auto___85395);
book.react_interop.google_maps_example.injectGoogle = (function (){var G__85380 = ({"apiKey": "AIzaSyAM9PWfj-rJDnmyJvh8QNkO4pgGzy5s_Yg"});
return module$node_modules$google_maps_react$dist$index.GoogleApiWrapper(G__85380);
})();
book.react_interop.google_maps_example.ui_location_view = com.fulcrologic.fulcro.algorithms.react_interop.hoc_factory(book.react_interop.google_maps_example.LocationView,book.react_interop.google_maps_example.injectGoogle);

var options__72617__auto___85402 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$react_interop$google_maps_example$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","location-view","root/location-view",-283874303),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.react_interop.google_maps_example.LocationView)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$react_interop$google_maps_example$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","location-view","root/location-view",-283874303),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","location-view","root/location-view",-283874303),book.react_interop.google_maps_example.LocationView], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$react_interop$google_maps_example$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85384 = com.fulcrologic.fulcro.components.props(this$);
var map__85384__$1 = (((((!((map__85384 == null))))?(((((map__85384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85384):map__85384);
var props = map__85384__$1;
var location_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85384__$1,new cljs.core.Keyword("root","location-view","root/location-view",-283874303));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"A Map View"]),com.fulcrologic.fulcro.components.force_children((book.react_interop.google_maps_example.ui_location_view.cljs$core$IFn$_invoke$arity$2 ? book.react_interop.google_maps_example.ui_location_view.cljs$core$IFn$_invoke$arity$2(this$,location_view) : book.react_interop.google_maps_example.ui_location_view.call(null,this$,location_view)))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.react_interop !== 'undefined') && (typeof book.react_interop.google_maps_example !== 'undefined') && (typeof book.react_interop.google_maps_example.Root !== 'undefined')){
} else {
book.react_interop.google_maps_example.Root = ((function (options__72617__auto___85402){
return (function book$react_interop$google_maps_example$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85402,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85404)){
var init_state__72620__auto___85405 = temp__5733__auto___85404;
this__72619__auto__.state = (function (){var obj85387 = ({"fulcro$state":(function (){var G__85389 = this__72619__auto__;
var G__85390 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85405.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85405.cljs$core$IFn$_invoke$arity$2(G__85389,G__85390) : init_state__72620__auto___85405.call(null,G__85389,G__85390));
})()});
return obj85387;
})();
} else {
this__72619__auto__.state = (function (){var obj85392 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85392;
})();
}

return null;
});})(options__72617__auto___85402))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.react_interop.google_maps_example.Root,new cljs.core.Keyword("book.react-interop.google-maps-example","Root","book.react-interop.google-maps-example/Root",1673195038),options__72617__auto___85402);

//# sourceMappingURL=book.react_interop.google_maps_example.js.map
