goog.provide('book.main');
goog.require('cljs.core');
goog.require('book.database');
goog.require('com.fulcrologic.fulcro.inspect.inspect_client');
goog.require('com.fulcrologic.fulcro.networking.mock_server_remote');
goog.require('book.macros');
goog.require('book.ui.d3_example');
goog.require('book.ui.focus_example');
goog.require('book.ui.hover_example');
goog.require('book.ui.victory_example');
goog.require('book.queries.union_example_1');
goog.require('book.react_interop.google_maps_example');
goog.require('book.react_interop.stripe_example');
goog.require('book.react_interop.react_motion_example');
goog.require('book.queries.dynamic_queries');
goog.require('book.queries.dynamic_query_parameters');
goog.require('book.queries.recursive_demo_1');
goog.require('book.queries.recursive_demo_2');
goog.require('book.queries.recursive_demo_3');
goog.require('book.queries.recursive_demo_bullets');
goog.require('book.forms.form_state_demo_1');
goog.require('book.forms.form_state_demo_2');
goog.require('book.demos.autocomplete');
goog.require('book.ui_routing');
goog.require('book.simple_router_1');
goog.require('book.simple_router_2');
goog.require('book.dynamic_router_example');
goog.require('book.tree_to_db');
goog.require('book.merge_component');
goog.require('book.html_converter');
goog.require('book.server.morphing_example');
goog.require('book.server.network_activity');
goog.require('book.server.ui_blocking_example');
goog.require('book.demos.server_error_handling');
goog.require('book.demos.cascading_dropdowns');
goog.require('book.demos.dynamic_ui_routing');
goog.require('book.demos.initial_app_state');
goog.require('book.demos.loading_data_basics');
goog.require('book.demos.loading_data_targeting_entities');
goog.require('book.demos.loading_in_response_to_UI_routing');
goog.require('book.demos.loading_indicators');
goog.require('book.demos.paginating_large_lists_from_server');
goog.require('book.demos.parallel_vs_sequential_loading');
goog.require('book.demos.parent_child_ownership_relations');
goog.require('book.demos.pre_merge.post_mutation_countdown');
goog.require('book.demos.pre_merge.post_mutation_countdown_many');
goog.require('book.demos.pre_merge.countdown');
goog.require('book.demos.pre_merge.countdown_many');
goog.require('book.demos.pre_merge.countdown_with_initial');
goog.require('book.demos.pre_merge.countdown_initial_state');
goog.require('book.demos.pre_merge.countdown_extracted');
goog.require('book.demos.pre_merge.countdown_mutation');
goog.require('book.pathom');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('taoensso.timbre');
goog.require('com.fulcrologic.fulcro_css.css_injection');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('book.example_1');
goog.require('com.fulcrologic.fulcro.data_fetch');
goog.require('com.fulcrologic.fulcro.application');
goog.require('taoensso.encore');
book.main.non_conflicting_resolvers = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [book.demos.autocomplete.list_resolver,book.forms.form_state_demo_2.resolvers,book.demos.pre_merge.post_mutation_countdown.resolvers,book.demos.pre_merge.post_mutation_countdown_many.resolvers,book.demos.pre_merge.countdown.resolvers,book.demos.pre_merge.countdown_many.resolvers,book.demos.pre_merge.countdown_with_initial.resolvers,book.demos.pre_merge.countdown_initial_state.resolvers,book.demos.pre_merge.countdown_extracted.resolvers,book.demos.paginating_large_lists_from_server.infinite_pages,book.demos.parallel_vs_sequential_loading.long_query_resolver,book.demos.server_error_handling.resolvers,book.server.ui_blocking_example.submit_form_mutation,book.server.network_activity.silly_resolver], null);
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.people_server !== 'undefined')){
} else {
book.main.people_server = book.pathom.mock_remote.cljs$core$IFn$_invoke$arity$2(book.database.general_resolvers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connection","connection",-123599300),book.database.connection], null));
}
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.example_server !== 'undefined')){
} else {
book.main.example_server = book.pathom.mock_remote.cljs$core$IFn$_invoke$arity$1(book.main.non_conflicting_resolvers);
}

var options__72617__auto___89930 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$main$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server-control","delay","server-control/delay",1550680204),new cljs.core.Keyword("ui","hidden?","ui/hidden?",1339686336)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$main$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","hidden?","ui/hidden?",1339686336),true], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$main$ident_STAR_(this$,p__89902){
var map__89903 = p__89902;
var map__89903__$1 = (((((!((map__89903 == null))))?(((((map__89903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89903):map__89903);
var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89903__$1,new cljs.core.Keyword("server-control","delay","server-control/delay",1550680204));
var hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89903__$1,new cljs.core.Keyword("ui","hidden?","ui/hidden?",1339686336));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server-control","by-id","server-control/by-id",-8631790),new cljs.core.Keyword(null,"server","server",1499190120)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$main$render_ServerControl(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89905 = com.fulcrologic.fulcro.components.props(this$);
var map__89905__$1 = (((((!((map__89905 == null))))?(((((map__89905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89905):map__89905);
var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89905__$1,new cljs.core.Keyword("server-control","delay","server-control/delay",1550680204));
var hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89905__$1,new cljs.core.Keyword("ui","hidden?","ui/hidden?",1339686336));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"height","height",1025178622)],[(0),"180px",1.0,"3px",(60000),(cljs.core.truth_(hidden_QMARK_)?"-179px":"-1px"),new cljs.core.Keyword(null,"fixed","fixed",-562004358),"10px","3px groove white",new cljs.core.Keyword(null,"white","white",-483998618),"130px"])], null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Latency: ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({}),com.fulcrologic.fulcro.components.force_children(delay)]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["br",({})])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["button",({"disabled": (delay >= (2000)), "onClick": ((function (map__89905,map__89905__$1,delay,hidden_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.pathom","set-server-latency","book.pathom/set-server-latency",1183291941,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"delay","delay",-574225219),null,(1),null)),(new cljs.core.List(null,(delay + (50)),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__89905,map__89905__$1,delay,hidden_QMARK_))
}),"Slower"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["button",({"disabled": (delay <= (0)), "onClick": ((function (map__89905,map__89905__$1,delay,hidden_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("book.pathom","set-server-latency","book.pathom/set-server-latency",1183291941,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"delay","delay",-574225219),null,(1),null)),(new cljs.core.List(null,(delay - (50)),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__89905,map__89905__$1,delay,hidden_QMARK_))
}),"Faster"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"onClick": ((function (map__89905,map__89905__$1,delay,hidden_QMARK_){
return (function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","hidden?","ui/hidden?",1339686336));
});})(map__89905,map__89905__$1,delay,hidden_QMARK_))
, "style": ({"color": "grey", "backgroundColor": "lightgray", "padding": "5px", "paddingLeft": "10px", "fontSize": "14px", "position": new cljs.core.Keyword(null,"relative","relative",22796862), "opacity": 1.0, "transform": "rotate(-90deg) translate(12px, -100px)"})}),"Server Controls"]))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.ServerControl !== 'undefined')){
} else {
book.main.ServerControl = ((function (options__72617__auto___89930){
return (function book$main$ServerControl(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89930,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89931)){
var init_state__72620__auto___89932 = temp__5733__auto___89931;
this__72619__auto__.state = (function (){var obj89908 = ({"fulcro$state":(function (){var G__89909 = this__72619__auto__;
var G__89910 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89932.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89932.cljs$core$IFn$_invoke$arity$2(G__89909,G__89910) : init_state__72620__auto___89932.call(null,G__89909,G__89910));
})()});
return obj89908;
})();
} else {
this__72619__auto__.state = (function (){var obj89912 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89912;
})();
}

return null;
});})(options__72617__auto___89930))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.main.ServerControl,new cljs.core.Keyword("book.main","ServerControl","book.main/ServerControl",1195107868),options__72617__auto___89930);
book.main.ui_server_control = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(book.main.ServerControl);

var options__72617__auto___89933 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$main$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"server-control","server-control",-2026565579),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.main.ServerControl)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$main$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"server-control","server-control",-2026565579),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"server-control","server-control",-2026565579),book.main.ServerControl], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$main$render_ServerControlRoot(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89914 = com.fulcrologic.fulcro.components.props(this$);
var map__89914__$1 = (((((!((map__89914 == null))))?(((((map__89914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89914):map__89914);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89914__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var server_control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89914__$1,new cljs.core.Keyword(null,"server-control","server-control",-2026565579));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"key": react_key}),com.fulcrologic.fulcro.components.force_children((book.main.ui_server_control.cljs$core$IFn$_invoke$arity$1 ? book.main.ui_server_control.cljs$core$IFn$_invoke$arity$1(server_control) : book.main.ui_server_control.call(null,server_control)))]);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.ServerControlRoot !== 'undefined')){
} else {
book.main.ServerControlRoot = ((function (options__72617__auto___89933){
return (function book$main$ServerControlRoot(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___89934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___89933,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___89934)){
var init_state__72620__auto___89935 = temp__5733__auto___89934;
this__72619__auto__.state = (function (){var obj89917 = ({"fulcro$state":(function (){var G__89918 = this__72619__auto__;
var G__89919 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___89935.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___89935.cljs$core$IFn$_invoke$arity$2(G__89918,G__89919) : init_state__72620__auto___89935.call(null,G__89918,G__89919));
})()});
return obj89917;
})();
} else {
this__72619__auto__.state = (function (){var obj89921 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj89921;
})();
}

return null;
});})(options__72617__auto___89933))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.main.ServerControlRoot,new cljs.core.Keyword("book.main","ServerControlRoot","book.main/ServerControlRoot",-1374378984),options__72617__auto___89933);
com.fulcrologic.fulcro_css.css_injection.upsert_css("example-css",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),book.macros.ExampleRoot,new cljs.core.Keyword(null,"auto-include?","auto-include?",-351901260),false], null));
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_example_1 !== 'undefined')){
} else {
book.main.fulcroapp_example_1 = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-example-1"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"example-1",book.main.fulcroapp_example_1);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_example_1,book.example_1.Root,"example-1");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_ui_d3 !== 'undefined')){
} else {
book.main.fulcroapp_ui_d3 = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-ui-d3"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"ui-d3",book.main.fulcroapp_ui_d3);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_ui_d3,book.ui.d3_example.Root,"ui-d3");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_focus_example !== 'undefined')){
} else {
book.main.fulcroapp_focus_example = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-focus-example"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"focus-example",book.main.fulcroapp_focus_example);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_focus_example,book.ui.focus_example.Root,"focus-example");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_google_maps_example !== 'undefined')){
} else {
book.main.fulcroapp_google_maps_example = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-google-maps-example"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"google-maps-example",book.main.fulcroapp_google_maps_example);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_google_maps_example,book.react_interop.google_maps_example.Root,"google-maps-example");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_stripe_example !== 'undefined')){
} else {
book.main.fulcroapp_stripe_example = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-stripe-example"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"stripe-example",book.main.fulcroapp_stripe_example);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_stripe_example,book.react_interop.stripe_example.Root,"stripe-example");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_hover_example !== 'undefined')){
} else {
book.main.fulcroapp_hover_example = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-hover-example"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"hover-example",book.main.fulcroapp_hover_example);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_hover_example,book.ui.hover_example.Root,"hover-example");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_motion_example !== 'undefined')){
} else {
book.main.fulcroapp_motion_example = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-motion-example"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"motion-example",book.main.fulcroapp_motion_example);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_motion_example,book.react_interop.react_motion_example.Root,"motion-example");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_victory_example !== 'undefined')){
} else {
book.main.fulcroapp_victory_example = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-victory-example"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"victory-example",book.main.fulcroapp_victory_example);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_victory_example,book.ui.victory_example.Root,"victory-example");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_union_example_1 !== 'undefined')){
} else {
book.main.fulcroapp_union_example_1 = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-union-example-1"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"union-example-1",book.main.fulcroapp_union_example_1);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_union_example_1,book.queries.union_example_1.Root,"union-example-1");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_ui_blocking_example !== 'undefined')){
} else {
book.main.fulcroapp_ui_blocking_example = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-ui-blocking-example",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"ui-blocking-example",book.main.fulcroapp_ui_blocking_example);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_ui_blocking_example,book.server.ui_blocking_example.Root,"ui-blocking-example");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_network_activity !== 'undefined')){
} else {
book.main.fulcroapp_network_activity = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-network-activity",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"network-activity",book.main.fulcroapp_network_activity);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_network_activity,book.server.network_activity.Root,"network-activity");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_dynamic_queries !== 'undefined')){
} else {
book.main.fulcroapp_dynamic_queries = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-dynamic-queries"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"dynamic-queries",book.main.fulcroapp_dynamic_queries);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_dynamic_queries,book.queries.dynamic_queries.Root,"dynamic-queries");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_dynamic_query_parameters !== 'undefined')){
} else {
book.main.fulcroapp_dynamic_query_parameters = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-dynamic-query-parameters"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"dynamic-query-parameters",book.main.fulcroapp_dynamic_query_parameters);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_dynamic_query_parameters,book.queries.dynamic_query_parameters.Root,"dynamic-query-parameters");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_ui_routing !== 'undefined')){
} else {
book.main.fulcroapp_ui_routing = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-ui-routing",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"ui-routing",book.main.fulcroapp_ui_routing);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_ui_routing,book.ui_routing.Root,"ui-routing");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_simple_router_1 !== 'undefined')){
} else {
book.main.fulcroapp_simple_router_1 = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-simple-router-1"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"simple-router-1",book.main.fulcroapp_simple_router_1);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_simple_router_1,book.simple_router_1.Root,"simple-router-1");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_simple_router_2 !== 'undefined')){
} else {
book.main.fulcroapp_simple_router_2 = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-simple-router-2"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"simple-router-2",book.main.fulcroapp_simple_router_2);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_simple_router_2,book.simple_router_2.Root,"simple-router-2");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_tree_to_db !== 'undefined')){
} else {
book.main.fulcroapp_tree_to_db = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-tree-to-db",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"tree-to-db",book.main.fulcroapp_tree_to_db);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_tree_to_db,book.tree_to_db.Root,"tree-to-db");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_merge_component !== 'undefined')){
} else {
book.main.fulcroapp_merge_component = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-merge-component",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"merge-component",book.main.fulcroapp_merge_component);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_merge_component,book.merge_component.Root,"merge-component");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_html_converter !== 'undefined')){
} else {
book.main.fulcroapp_html_converter = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-html-converter"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"html-converter",book.main.fulcroapp_html_converter);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_html_converter,book.html_converter.Root,"html-converter");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_form_state_demo_1 !== 'undefined')){
} else {
book.main.fulcroapp_form_state_demo_1 = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-form-state-demo-1",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"form-state-demo-1",book.main.fulcroapp_form_state_demo_1);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_form_state_demo_1,book.forms.form_state_demo_1.Root,"form-state-demo-1");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_form_state_demo_2 !== 'undefined')){
} else {
book.main.fulcroapp_form_state_demo_2 = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-form-state-demo-2",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"form-state-demo-2",book.main.fulcroapp_form_state_demo_2);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_form_state_demo_2,book.forms.form_state_demo_2.Root,"form-state-demo-2");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_autocomplete_demo !== 'undefined')){
} else {
book.main.fulcroapp_autocomplete_demo = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-autocomplete-demo",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"autocomplete-demo",book.main.fulcroapp_autocomplete_demo);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_autocomplete_demo,book.demos.autocomplete.AutocompleteRoot,"autocomplete-demo");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_dynamic_router_example !== 'undefined')){
} else {
book.main.fulcroapp_dynamic_router_example = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-dynamic-router-example",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.people_server,new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),book.dynamic_router_example.client_did_mount], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"dynamic-router-example",book.main.fulcroapp_dynamic_router_example);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_dynamic_router_example,book.dynamic_router_example.Root,"dynamic-router-example");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_dynamic_ui_routing !== 'undefined')){
} else {
book.main.fulcroapp_dynamic_ui_routing = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-dynamic-ui-routing",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server,new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),book.demos.dynamic_ui_routing.application_loaded], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"dynamic-ui-routing",book.main.fulcroapp_dynamic_ui_routing);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_dynamic_ui_routing,book.demos.dynamic_ui_routing.Root,"dynamic-ui-routing");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_recursive_demo_1 !== 'undefined')){
} else {
book.main.fulcroapp_recursive_demo_1 = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-recursive-demo-1"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"recursive-demo-1",book.main.fulcroapp_recursive_demo_1);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_recursive_demo_1,book.queries.recursive_demo_1.Root,"recursive-demo-1");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_recursive_demo_2 !== 'undefined')){
} else {
book.main.fulcroapp_recursive_demo_2 = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-recursive-demo-2"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"recursive-demo-2",book.main.fulcroapp_recursive_demo_2);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_recursive_demo_2,book.queries.recursive_demo_2.Root,"recursive-demo-2");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_recursive_demo_3 !== 'undefined')){
} else {
book.main.fulcroapp_recursive_demo_3 = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-recursive-demo-3"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"recursive-demo-3",book.main.fulcroapp_recursive_demo_3);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_recursive_demo_3,book.queries.recursive_demo_3.Root,"recursive-demo-3");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_recursive_demo_bullets !== 'undefined')){
} else {
book.main.fulcroapp_recursive_demo_bullets = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-recursive-demo-bullets"], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"recursive-demo-bullets",book.main.fulcroapp_recursive_demo_bullets);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_recursive_demo_bullets,book.queries.recursive_demo_bullets.Root,"recursive-demo-bullets");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_loading_data_basics !== 'undefined')){
} else {
book.main.fulcroapp_loading_data_basics = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-loading-data-basics",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.people_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"loading-data-basics",book.main.fulcroapp_loading_data_basics);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_loading_data_basics,book.demos.loading_data_basics.Root,"loading-data-basics");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_loading_in_response_to_UI_routing !== 'undefined')){
} else {
book.main.fulcroapp_loading_in_response_to_UI_routing = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-loading-in-response-to-UI-routing",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"loading-in-response-to-UI-routing",book.main.fulcroapp_loading_in_response_to_UI_routing);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_loading_in_response_to_UI_routing,book.demos.loading_in_response_to_UI_routing.Root,"loading-in-response-to-UI-routing");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_initial_app_state !== 'undefined')){
} else {
book.main.fulcroapp_initial_app_state = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-initial-app-state",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"initial-app-state",book.main.fulcroapp_initial_app_state);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_initial_app_state,book.demos.initial_app_state.Root,"initial-app-state");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_paginating_large_lists_from_server !== 'undefined')){
} else {
book.main.fulcroapp_paginating_large_lists_from_server = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-paginating-large-lists-from-server",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server,new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),book.demos.paginating_large_lists_from_server.initialize], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"paginating-large-lists-from-server",book.main.fulcroapp_paginating_large_lists_from_server);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_paginating_large_lists_from_server,book.demos.paginating_large_lists_from_server.Root,"paginating-large-lists-from-server");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_parallel_vs_sequential_loading !== 'undefined')){
} else {
book.main.fulcroapp_parallel_vs_sequential_loading = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-parallel-vs-sequential-loading",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"parallel-vs-sequential-loading",book.main.fulcroapp_parallel_vs_sequential_loading);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_parallel_vs_sequential_loading,book.demos.parallel_vs_sequential_loading.Root,"parallel-vs-sequential-loading");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_parent_child_ownership_relations !== 'undefined')){
} else {
book.main.fulcroapp_parent_child_ownership_relations = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-parent-child-ownership-relations",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"parent-child-ownership-relations",book.main.fulcroapp_parent_child_ownership_relations);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_parent_child_ownership_relations,book.demos.parent_child_ownership_relations.Root,"parent-child-ownership-relations");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_pre_merge_postmutations !== 'undefined')){
} else {
book.main.fulcroapp_pre_merge_postmutations = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-pre-merge-postmutations",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"pre-merge-postmutations",book.main.fulcroapp_pre_merge_postmutations);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_pre_merge_postmutations,book.demos.pre_merge.post_mutation_countdown.Root,"pre-merge-postmutations");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_pre_merge_postmutations_many !== 'undefined')){
} else {
book.main.fulcroapp_pre_merge_postmutations_many = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-pre-merge-postmutations-many",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"pre-merge-postmutations-many",book.main.fulcroapp_pre_merge_postmutations_many);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_pre_merge_postmutations_many,book.demos.pre_merge.post_mutation_countdown_many.Root,"pre-merge-postmutations-many");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_countdown_single !== 'undefined')){
} else {
book.main.fulcroapp_countdown_single = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-countdown-single",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"countdown-single",book.main.fulcroapp_countdown_single);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_countdown_single,book.demos.pre_merge.countdown.Root,"countdown-single");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_countdown_many !== 'undefined')){
} else {
book.main.fulcroapp_countdown_many = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-countdown-many",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"countdown-many",book.main.fulcroapp_countdown_many);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_countdown_many,book.demos.pre_merge.countdown_many.Root,"countdown-many");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_countdown_with_initial !== 'undefined')){
} else {
book.main.fulcroapp_countdown_with_initial = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-countdown-with-initial",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"countdown-with-initial",book.main.fulcroapp_countdown_with_initial);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_countdown_with_initial,book.demos.pre_merge.countdown_with_initial.Root,"countdown-with-initial");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_countdown_extracted !== 'undefined')){
} else {
book.main.fulcroapp_countdown_extracted = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-countdown-extracted",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"countdown-extracted",book.main.fulcroapp_countdown_extracted);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_countdown_extracted,book.demos.pre_merge.countdown_extracted.Root,"countdown-extracted");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_countdown_initial_state !== 'undefined')){
} else {
book.main.fulcroapp_countdown_initial_state = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-countdown-initial-state",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"countdown-initial-state",book.main.fulcroapp_countdown_initial_state);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_countdown_initial_state,book.demos.pre_merge.countdown_initial_state.Root,"countdown-initial-state");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_countdown_mutation !== 'undefined')){
} else {
book.main.fulcroapp_countdown_mutation = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-countdown-mutation",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"countdown-mutation",book.main.fulcroapp_countdown_mutation);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_countdown_mutation,book.demos.pre_merge.countdown_mutation.Root,"countdown-mutation");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.fulcroapp_server_error_handling !== 'undefined')){
} else {
book.main.fulcroapp_server_error_handling = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"fulcroapp-server-error-handling",new cljs.core.Keyword(null,"remotes","remotes",1132366312),book.main.example_server,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497),(function (p__89926){
var map__89927 = p__89926;
var map__89927__$1 = (((((!((map__89927 == null))))?(((((map__89927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89927):map__89927);
var result = map__89927__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89927__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var or__4131__auto__ = com.fulcrologic.fulcro.application.default_remote_error_QMARK_(result);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return book.demos.server_error_handling.contains_error_QMARK_(body);
}
})], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(book.macros.app_registry,cljs.core.assoc,"server-error-handling",book.main.fulcroapp_server_error_handling);

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.fulcroapp_server_error_handling,book.demos.server_error_handling.Root,"server-error-handling");
if((typeof book !== 'undefined') && (typeof book.main !== 'undefined') && (typeof book.main.server_control_app !== 'undefined')){
} else {
book.main.server_control_app = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),(function (app){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__89929 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delay","delay",-574225219),(100)], null);
return (book.pathom.set_server_latency.cljs$core$IFn$_invoke$arity$1 ? book.pathom.set_server_latency.cljs$core$IFn$_invoke$arity$1(G__89929) : book.pathom.set_server_latency.call(null,G__89929));
})()], null));
})], null));
}
book.main.init = (function book$main$init(){
console.log("Init");

if(com.fulcrologic.fulcro.inspect.inspect_client.INSPECT){
com.fulcrologic.fulcro.inspect.inspect_client.install(cljs.core.PersistentArrayMap.EMPTY);
} else {
}

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(book.main.server_control_app,book.main.ServerControlRoot,"server-controls");

console.log("Seeding demo database");

return book.database.seed_database();
});
goog.exportSymbol('book.main.init', book.main.init);
book.main.focus = (function book$main$focus(app_id){
var b2__47075__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(book.macros.app_registry),app_id);
if(cljs.core.truth_(b2__47075__auto__)){
var app = b2__47075__auto__;
var b2__47075__auto____$1 = com.fulcrologic.fulcro.application.current_state(app);
if(cljs.core.truth_(b2__47075__auto____$1)){
var state_map = b2__47075__auto____$1;
var b2__47075__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
if(cljs.core.truth_(b2__47075__auto____$2)){
var inspect_id = b2__47075__auto____$2;
return com.fulcrologic.fulcro.inspect.inspect_client.set_active_app(inspect_id);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('book.main.focus', book.main.focus);

//# sourceMappingURL=book.main.js.map
