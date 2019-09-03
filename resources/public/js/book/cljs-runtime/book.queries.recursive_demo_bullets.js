goog.provide('book.queries.recursive_demo_bullets');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('clojure.string');

var options__72617__auto___85890 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$recursive_demo_bullets$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","checked?","ui/checked?",2024814615),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","label","item/label",1746690887),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","subitems","item/subitems",-1209138268),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$recursive_demo_bullets$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$recursive_demo_bullets$render_Item(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85855 = com.fulcrologic.fulcro.components.props(this$);
var map__85855__$1 = (((((!((map__85855 == null))))?(((((map__85855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85855):map__85855);
var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85855__$1,new cljs.core.Keyword("ui","checked?","ui/checked?",2024814615));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85855__$1,new cljs.core.Keyword("item","label","item/label",1746690887));
var subitems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85855__$1,new cljs.core.Keyword("item","subitems","item/subitems",-1209138268));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),((cljs.core.boolean_QMARK_(checked_QMARK_))?checked_QMARK_:false),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__85855,map__85855__$1,checked_QMARK_,label,subitems){
return (function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","checked?","ui/checked?",2024814615));
});})(map__85855,map__85855__$1,checked_QMARK_,label,subitems))
], null)], null),null),com.fulcrologic.fulcro.components.force_children(label),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(subitems)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(book.queries.recursive_demo_bullets.ui_item,subitems)], null),null):null))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.recursive_demo_bullets !== 'undefined') && (typeof book.queries.recursive_demo_bullets.Item !== 'undefined')){
} else {
book.queries.recursive_demo_bullets.Item = ((function (options__72617__auto___85890){
return (function book$queries$recursive_demo_bullets$Item(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85890,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85897)){
var init_state__72620__auto___85898 = temp__5733__auto___85897;
this__72619__auto__.state = (function (){var obj85861 = ({"fulcro$state":(function (){var G__85862 = this__72619__auto__;
var G__85863 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85898.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85898.cljs$core$IFn$_invoke$arity$2(G__85862,G__85863) : init_state__72620__auto___85898.call(null,G__85862,G__85863));
})()});
return obj85861;
})();
} else {
this__72619__auto__.state = (function (){var obj85865 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85865;
})();
}

return null;
});})(options__72617__auto___85890))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.recursive_demo_bullets.Item,new cljs.core.Keyword("book.queries.recursive-demo-bullets","Item","book.queries.recursive-demo-bullets/Item",-1736808789),options__72617__auto___85890);
book.queries.recursive_demo_bullets.ui_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.queries.recursive_demo_bullets.Item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));

var options__72617__auto___85899 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$recursive_demo_bullets$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","items","list/items",1035416224),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.recursive_demo_bullets.Item)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function book$queries$recursive_demo_bullets$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","by-id","list/by-id",-2140791259),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$recursive_demo_bullets$render_ItemList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85870 = com.fulcrologic.fulcro.components.props(this$);
var map__85870__$1 = (((((!((map__85870 == null))))?(((((map__85870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85870):map__85870);
var props = map__85870__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85870__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85870__$1,new cljs.core.Keyword("list","items","list/items",1035416224));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(book.queries.recursive_demo_bullets.ui_item,items)], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.recursive_demo_bullets !== 'undefined') && (typeof book.queries.recursive_demo_bullets.ItemList !== 'undefined')){
} else {
book.queries.recursive_demo_bullets.ItemList = ((function (options__72617__auto___85899){
return (function book$queries$recursive_demo_bullets$ItemList(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85899,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85900)){
var init_state__72620__auto___85901 = temp__5733__auto___85900;
this__72619__auto__.state = (function (){var obj85875 = ({"fulcro$state":(function (){var G__85876 = this__72619__auto__;
var G__85877 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85901.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85901.cljs$core$IFn$_invoke$arity$2(G__85876,G__85877) : init_state__72620__auto___85901.call(null,G__85876,G__85877));
})()});
return obj85875;
})();
} else {
this__72619__auto__.state = (function (){var obj85879 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85879;
})();
}

return null;
});})(options__72617__auto___85899))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.recursive_demo_bullets.ItemList,new cljs.core.Keyword("book.queries.recursive-demo-bullets","ItemList","book.queries.recursive-demo-bullets/ItemList",56165006),options__72617__auto___85899);
book.queries.recursive_demo_bullets.ui_item_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(book.queries.recursive_demo_bullets.ItemList,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));

var options__72617__auto___85903 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function book$queries$recursive_demo_bullets$build_raw_initial_state_STAR_(p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("list","items","list/items",1035416224),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2),new cljs.core.Keyword("item","label","item/label",1746690887),"A",new cljs.core.Keyword("item","subitems","item/subitems",-1209138268),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(7),new cljs.core.Keyword("item","label","item/label",1746690887),"A.1",new cljs.core.Keyword("item","subitems","item/subitems",-1209138268),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(8),new cljs.core.Keyword("item","label","item/label",1746690887),"A.1.1",new cljs.core.Keyword("item","subitems","item/subitems",-1209138268),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(3),new cljs.core.Keyword("item","label","item/label",1746690887),"B",new cljs.core.Keyword("item","subitems","item/subitems",-1209138268),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(6),new cljs.core.Keyword("item","label","item/label",1746690887),"B.1"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(4),new cljs.core.Keyword("item","label","item/label",1746690887),"C",new cljs.core.Keyword("item","subitems","item/subitems",-1209138268),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(5),new cljs.core.Keyword("item","label","item/label",1746690887),"D",new cljs.core.Keyword("item","subitems","item/subitems",-1209138268),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(6),new cljs.core.Keyword("item","label","item/label",1746690887),"B.1"], null)], null)], null)], null)], null)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function book$queries$recursive_demo_bullets$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(book.queries.recursive_demo_bullets.ItemList)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function book$queries$recursive_demo_bullets$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__85882 = com.fulcrologic.fulcro.components.props(this$);
var map__85882__$1 = (((((!((map__85882 == null))))?(((((map__85882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85882):map__85882);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85882__$1,new cljs.core.Keyword(null,"list","list",765357683));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(book.queries.recursive_demo_bullets.ui_item_list.cljs$core$IFn$_invoke$arity$1 ? book.queries.recursive_demo_bullets.ui_item_list.cljs$core$IFn$_invoke$arity$1(list) : book.queries.recursive_demo_bullets.ui_item_list.call(null,list))], null),null);
}));
})], null);
if((typeof book !== 'undefined') && (typeof book.queries !== 'undefined') && (typeof book.queries.recursive_demo_bullets !== 'undefined') && (typeof book.queries.recursive_demo_bullets.Root !== 'undefined')){
} else {
book.queries.recursive_demo_bullets.Root = ((function (options__72617__auto___85903){
return (function book$queries$recursive_demo_bullets$Root(props__72618__auto__){
var this__72619__auto__ = this;
var temp__5733__auto___85909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__72617__auto___85903,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___85909)){
var init_state__72620__auto___85910 = temp__5733__auto___85909;
this__72619__auto__.state = (function (){var obj85885 = ({"fulcro$state":(function (){var G__85886 = this__72619__auto__;
var G__85887 = goog.object.get(props__72618__auto__,"fulcro$value");
return (init_state__72620__auto___85910.cljs$core$IFn$_invoke$arity$2 ? init_state__72620__auto___85910.cljs$core$IFn$_invoke$arity$2(G__85886,G__85887) : init_state__72620__auto___85910.call(null,G__85886,G__85887));
})()});
return obj85885;
})();
} else {
this__72619__auto__.state = (function (){var obj85889 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj85889;
})();
}

return null;
});})(options__72617__auto___85903))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(book.queries.recursive_demo_bullets.Root,new cljs.core.Keyword("book.queries.recursive-demo-bullets","Root","book.queries.recursive-demo-bullets/Root",-1490604599),options__72617__auto___85903);

//# sourceMappingURL=book.queries.recursive_demo_bullets.js.map
