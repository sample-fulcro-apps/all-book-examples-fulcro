goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.rendering.keyframe_render');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.components');
goog.require('clojure.set');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app,ident,c){
if(cljs.core.truth_((function (){var and__4120__auto__ = c;
if(cljs.core.truth_(and__4120__auto__)){
return ident;
} else {
return and__4120__auto__;
}
})())){
var map__74546 = app;
var map__74546__$1 = (((((!((map__74546 == null))))?(((((map__74546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74546):map__74546);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74546__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__74546,map__74546__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
});})(map__74546,map__74546__$1,state_atom,state_map,query,q,data_tree,new_props))
,null)),null,-1620610441);
}

if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(c))){
return c.setState(((function (map__74546,map__74546__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (s){
return ({"fulcro$value": new_props});
});})(map__74546,map__74546__$1,state_atom,state_map,query,q,data_tree,new_props))
);
} else {
return null;
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident. If that is your application root,","consider moving that changing state to a child component."], null);
}),null)),null,-969386885);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app,ident){
var seq__74563 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app,ident));
var chunk__74564 = null;
var count__74565 = (0);
var i__74566 = (0);
while(true){
if((i__74566 < count__74565)){
var c = chunk__74564.cljs$core$IIndexed$_nth$arity$2(null,i__74566);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__74700 = seq__74563;
var G__74701 = chunk__74564;
var G__74702 = count__74565;
var G__74703 = (i__74566 + (1));
seq__74563 = G__74700;
chunk__74564 = G__74701;
count__74565 = G__74702;
i__74566 = G__74703;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__74563);
if(temp__5735__auto__){
var seq__74563__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74563__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__74563__$1);
var G__74704 = cljs.core.chunk_rest(seq__74563__$1);
var G__74705 = c__4550__auto__;
var G__74706 = cljs.core.count(c__4550__auto__);
var G__74707 = (0);
seq__74563 = G__74704;
chunk__74564 = G__74705;
count__74565 = G__74706;
i__74566 = G__74707;
continue;
} else {
var c = cljs.core.first(seq__74563__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__74708 = cljs.core.next(seq__74563__$1);
var G__74709 = null;
var G__74710 = (0);
var G__74711 = (0);
seq__74563 = G__74708;
chunk__74564 = G__74709;
count__74565 = G__74710;
i__74566 = G__74711;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,ident);

var map__74570 = app;
var map__74570__$1 = (((((!((map__74570 == null))))?(((((map__74570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74570):map__74570);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74570__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__74571 = cljs.core.deref(runtime_atom);
var map__74571__$1 = (((((!((map__74571 == null))))?(((((map__74571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74571):map__74571);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74571__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__74572 = indexes;
var map__74572__$1 = (((((!((map__74572 == null))))?(((((map__74572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74572):map__74572);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74572__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74572__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74572__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4131__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__74577 = cljs.core.seq(classes);
var chunk__74578 = null;
var count__74579 = (0);
var i__74580 = (0);
while(true){
if((i__74580 < count__74579)){
var class$ = chunk__74578.cljs$core$IIndexed$_nth$arity$2(null,i__74580);
var seq__74606_74712 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__74608_74713 = null;
var count__74609_74714 = (0);
var i__74610_74715 = (0);
while(true){
if((i__74610_74715 < count__74609_74714)){
var component_74716 = chunk__74608_74713.cljs$core$IIndexed$_nth$arity$2(null,i__74610_74715);
var component_ident_74717 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_74716);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_74717,component_74716);


var G__74718 = seq__74606_74712;
var G__74719 = chunk__74608_74713;
var G__74720 = count__74609_74714;
var G__74721 = (i__74610_74715 + (1));
seq__74606_74712 = G__74718;
chunk__74608_74713 = G__74719;
count__74609_74714 = G__74720;
i__74610_74715 = G__74721;
continue;
} else {
var temp__5735__auto___74722 = cljs.core.seq(seq__74606_74712);
if(temp__5735__auto___74722){
var seq__74606_74723__$1 = temp__5735__auto___74722;
if(cljs.core.chunked_seq_QMARK_(seq__74606_74723__$1)){
var c__4550__auto___74724 = cljs.core.chunk_first(seq__74606_74723__$1);
var G__74725 = cljs.core.chunk_rest(seq__74606_74723__$1);
var G__74726 = c__4550__auto___74724;
var G__74727 = cljs.core.count(c__4550__auto___74724);
var G__74728 = (0);
seq__74606_74712 = G__74725;
chunk__74608_74713 = G__74726;
count__74609_74714 = G__74727;
i__74610_74715 = G__74728;
continue;
} else {
var component_74729 = cljs.core.first(seq__74606_74723__$1);
var component_ident_74730 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_74729);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_74730,component_74729);


var G__74731 = cljs.core.next(seq__74606_74723__$1);
var G__74732 = null;
var G__74733 = (0);
var G__74734 = (0);
seq__74606_74712 = G__74731;
chunk__74608_74713 = G__74732;
count__74609_74714 = G__74733;
i__74610_74715 = G__74734;
continue;
}
} else {
}
}
break;
}


var G__74735 = seq__74577;
var G__74736 = chunk__74578;
var G__74737 = count__74579;
var G__74738 = (i__74580 + (1));
seq__74577 = G__74735;
chunk__74578 = G__74736;
count__74579 = G__74737;
i__74580 = G__74738;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__74577);
if(temp__5735__auto__){
var seq__74577__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74577__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__74577__$1);
var G__74739 = cljs.core.chunk_rest(seq__74577__$1);
var G__74740 = c__4550__auto__;
var G__74741 = cljs.core.count(c__4550__auto__);
var G__74742 = (0);
seq__74577 = G__74739;
chunk__74578 = G__74740;
count__74579 = G__74741;
i__74580 = G__74742;
continue;
} else {
var class$ = cljs.core.first(seq__74577__$1);
var seq__74612_74743 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__74614_74744 = null;
var count__74615_74745 = (0);
var i__74616_74746 = (0);
while(true){
if((i__74616_74746 < count__74615_74745)){
var component_74747 = chunk__74614_74744.cljs$core$IIndexed$_nth$arity$2(null,i__74616_74746);
var component_ident_74748 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_74747);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_74748,component_74747);


var G__74751 = seq__74612_74743;
var G__74752 = chunk__74614_74744;
var G__74753 = count__74615_74745;
var G__74754 = (i__74616_74746 + (1));
seq__74612_74743 = G__74751;
chunk__74614_74744 = G__74752;
count__74615_74745 = G__74753;
i__74616_74746 = G__74754;
continue;
} else {
var temp__5735__auto___74755__$1 = cljs.core.seq(seq__74612_74743);
if(temp__5735__auto___74755__$1){
var seq__74612_74756__$1 = temp__5735__auto___74755__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74612_74756__$1)){
var c__4550__auto___74757 = cljs.core.chunk_first(seq__74612_74756__$1);
var G__74758 = cljs.core.chunk_rest(seq__74612_74756__$1);
var G__74759 = c__4550__auto___74757;
var G__74760 = cljs.core.count(c__4550__auto___74757);
var G__74761 = (0);
seq__74612_74743 = G__74758;
chunk__74614_74744 = G__74759;
count__74615_74745 = G__74760;
i__74616_74746 = G__74761;
continue;
} else {
var component_74762 = cljs.core.first(seq__74612_74756__$1);
var component_ident_74763 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_74762);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_74763,component_74762);


var G__74764 = cljs.core.next(seq__74612_74756__$1);
var G__74765 = null;
var G__74766 = (0);
var G__74767 = (0);
seq__74612_74743 = G__74764;
chunk__74614_74744 = G__74765;
count__74615_74745 = G__74766;
i__74616_74746 = G__74767;
continue;
}
} else {
}
}
break;
}


var G__74768 = cljs.core.next(seq__74577__$1);
var G__74769 = null;
var G__74770 = (0);
var G__74771 = (0);
seq__74577 = G__74768;
chunk__74578 = G__74769;
count__74579 = G__74770;
i__74580 = G__74771;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app,property_set){
if(cljs.core.seq(property_set)){
var map__74647 = app;
var map__74647__$1 = (((((!((map__74647 == null))))?(((((map__74647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74647):map__74647);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74647__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__74648 = cljs.core.deref(runtime_atom);
var map__74648__$1 = (((((!((map__74648 == null))))?(((((map__74648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74648):map__74648);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74648__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__74649 = indexes;
var map__74649__$1 = (((((!((map__74649 == null))))?(((((map__74649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74649):map__74649);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74649__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74649__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__74647,map__74647__$1,runtime_atom,map__74648,map__74648__$1,indexes,map__74649,map__74649__$1,prop__GT_classes,class__GT_components){
return (function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (classes,map__74647,map__74647__$1,runtime_atom,map__74648,map__74648__$1,indexes,map__74649,map__74649__$1,prop__GT_classes,class__GT_components){
return (function (p1__74645_SHARP_,p2__74646_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__74645_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__74646_SHARP_) : class__GT_components.call(null,p2__74646_SHARP_)));
});})(classes,map__74647,map__74647__$1,runtime_atom,map__74648,map__74648__$1,indexes,map__74649,map__74649__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
});})(map__74647,map__74647__$1,runtime_atom,map__74648,map__74648__$1,indexes,map__74649,map__74649__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app){
var map__74658 = app;
var map__74658__$1 = (((((!((map__74658 == null))))?(((((map__74658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74658):map__74658);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74658__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74658__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__74659 = cljs.core.deref(runtime_atom);
var map__74659__$1 = (((((!((map__74659 == null))))?(((((map__74659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74659):map__74659);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74659__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74659__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74659__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74659__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__74660 = indexes;
var map__74660__$1 = (((((!((map__74660 == null))))?(((((map__74660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74660):map__74660);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74660__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74660__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74660__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74660__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__74666 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__74666__$1 = (((((!((map__74666 == null))))?(((((map__74666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74666):map__74666);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74666__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74666__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,limited_props);
var seq__74669_74775 = cljs.core.seq(limited_to_render);
var chunk__74671_74776 = null;
var count__74672_74777 = (0);
var i__74673_74778 = (0);
while(true){
if((i__74673_74778 < count__74672_74777)){
var c_74779 = chunk__74671_74776.cljs$core$IIndexed$_nth$arity$2(null,i__74673_74778);
var ident_74780 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_74779);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_74780,c_74779);


var G__74781 = seq__74669_74775;
var G__74782 = chunk__74671_74776;
var G__74783 = count__74672_74777;
var G__74784 = (i__74673_74778 + (1));
seq__74669_74775 = G__74781;
chunk__74671_74776 = G__74782;
count__74672_74777 = G__74783;
i__74673_74778 = G__74784;
continue;
} else {
var temp__5735__auto___74785 = cljs.core.seq(seq__74669_74775);
if(temp__5735__auto___74785){
var seq__74669_74786__$1 = temp__5735__auto___74785;
if(cljs.core.chunked_seq_QMARK_(seq__74669_74786__$1)){
var c__4550__auto___74787 = cljs.core.chunk_first(seq__74669_74786__$1);
var G__74788 = cljs.core.chunk_rest(seq__74669_74786__$1);
var G__74789 = c__4550__auto___74787;
var G__74790 = cljs.core.count(c__4550__auto___74787);
var G__74791 = (0);
seq__74669_74775 = G__74788;
chunk__74671_74776 = G__74789;
count__74672_74777 = G__74790;
i__74673_74778 = G__74791;
continue;
} else {
var c_74792 = cljs.core.first(seq__74669_74786__$1);
var ident_74793 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_74792);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_74793,c_74792);


var G__74794 = cljs.core.next(seq__74669_74786__$1);
var G__74795 = null;
var G__74796 = (0);
var G__74797 = (0);
seq__74669_74775 = G__74794;
chunk__74671_74776 = G__74795;
count__74672_74777 = G__74796;
i__74673_74778 = G__74797;
continue;
}
} else {
}
}
break;
}

var seq__74675 = cljs.core.seq(limited_idents);
var chunk__74676 = null;
var count__74677 = (0);
var i__74678 = (0);
while(true){
if((i__74678 < count__74677)){
var i = chunk__74676.cljs$core$IIndexed$_nth$arity$2(null,i__74678);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__74798 = seq__74675;
var G__74799 = chunk__74676;
var G__74800 = count__74677;
var G__74801 = (i__74678 + (1));
seq__74675 = G__74798;
chunk__74676 = G__74799;
count__74677 = G__74800;
i__74678 = G__74801;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__74675);
if(temp__5735__auto__){
var seq__74675__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74675__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__74675__$1);
var G__74802 = cljs.core.chunk_rest(seq__74675__$1);
var G__74803 = c__4550__auto__;
var G__74804 = cljs.core.count(c__4550__auto__);
var G__74805 = (0);
seq__74675 = G__74802;
chunk__74676 = G__74803;
count__74677 = G__74804;
i__74678 = G__74805;
continue;
} else {
var i = cljs.core.first(seq__74675__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__74806 = cljs.core.next(seq__74675__$1);
var G__74807 = null;
var G__74808 = (0);
var G__74809 = (0);
seq__74675 = G__74806;
chunk__74676 = G__74807;
count__74677 = G__74808;
i__74678 = G__74809;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4131__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (state_map,idents_in_joins__$1,map__74658,map__74658__$1,runtime_atom,state_atom,map__74659,map__74659__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__74660,map__74660__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_){
return (function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
});})(state_map,idents_in_joins__$1,map__74658,map__74658__$1,runtime_atom,state_atom,map__74659,map__74659__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__74660,map__74660__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_))
,cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__74679 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__74679__$1 = (((((!((map__74679 == null))))?(((((map__74679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74679):map__74679);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74679__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74679__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__74681_74813 = cljs.core.seq(all_idents);
var chunk__74682_74814 = null;
var count__74683_74815 = (0);
var i__74684_74816 = (0);
while(true){
if((i__74684_74816 < count__74683_74815)){
var i_74817 = chunk__74682_74814.cljs$core$IIndexed$_nth$arity$2(null,i__74684_74816);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_74817);


var G__74818 = seq__74681_74813;
var G__74819 = chunk__74682_74814;
var G__74820 = count__74683_74815;
var G__74821 = (i__74684_74816 + (1));
seq__74681_74813 = G__74818;
chunk__74682_74814 = G__74819;
count__74683_74815 = G__74820;
i__74684_74816 = G__74821;
continue;
} else {
var temp__5735__auto___74822 = cljs.core.seq(seq__74681_74813);
if(temp__5735__auto___74822){
var seq__74681_74823__$1 = temp__5735__auto___74822;
if(cljs.core.chunked_seq_QMARK_(seq__74681_74823__$1)){
var c__4550__auto___74824 = cljs.core.chunk_first(seq__74681_74823__$1);
var G__74825 = cljs.core.chunk_rest(seq__74681_74823__$1);
var G__74826 = c__4550__auto___74824;
var G__74827 = cljs.core.count(c__4550__auto___74824);
var G__74828 = (0);
seq__74681_74813 = G__74825;
chunk__74682_74814 = G__74826;
count__74683_74815 = G__74827;
i__74684_74816 = G__74828;
continue;
} else {
var i_74829 = cljs.core.first(seq__74681_74823__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_74829);


var G__74830 = cljs.core.next(seq__74681_74823__$1);
var G__74831 = null;
var G__74832 = (0);
var G__74833 = (0);
seq__74681_74813 = G__74830;
chunk__74682_74814 = G__74831;
count__74683_74815 = G__74832;
i__74684_74816 = G__74833;
continue;
}
} else {
}
}
break;
}

var seq__74685 = cljs.core.seq(extra_to_force);
var chunk__74686 = null;
var count__74687 = (0);
var i__74688 = (0);
while(true){
if((i__74688 < count__74687)){
var c = chunk__74686.cljs$core$IIndexed$_nth$arity$2(null,i__74688);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__74834 = seq__74685;
var G__74835 = chunk__74686;
var G__74836 = count__74687;
var G__74837 = (i__74688 + (1));
seq__74685 = G__74834;
chunk__74686 = G__74835;
count__74687 = G__74836;
i__74688 = G__74837;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__74685);
if(temp__5735__auto__){
var seq__74685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74685__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__74685__$1);
var G__74838 = cljs.core.chunk_rest(seq__74685__$1);
var G__74839 = c__4550__auto__;
var G__74840 = cljs.core.count(c__4550__auto__);
var G__74841 = (0);
seq__74685 = G__74838;
chunk__74686 = G__74839;
count__74687 = G__74840;
i__74688 = G__74841;
continue;
} else {
var c = cljs.core.first(seq__74685__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__74842 = cljs.core.next(seq__74685__$1);
var G__74843 = null;
var G__74844 = (0);
var G__74845 = (0);
seq__74685 = G__74842;
chunk__74686 = G__74843;
count__74687 = G__74844;
i__74688 = G__74845;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__74692 = arguments.length;
switch (G__74692) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__74695){
var map__74696 = p__74695;
var map__74696__$1 = (((((!((map__74696 == null))))?(((((map__74696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74696):map__74696);
var options = map__74696__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74696__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74696__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4131__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app);
}catch (e74698){var e = e74698;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__74696,map__74696__$1,options,force_root_QMARK_,root_props_changed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
});})(e,map__74696,map__74696__$1,options,force_root_QMARK_,root_props_changed_QMARK_))
,null)),null,-693343468);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
}}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
