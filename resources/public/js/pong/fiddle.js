// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.fiddle');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('pong.system');
goog.require('pong.aframe_react');
goog.require('om.dom');
goog.require('pong.parser');
goog.require('cljs.core.async');
goog.require('clojure.core.matrix.operators');
goog.require('clojure.core.matrix');
goog.require('clojure.data.avl');
goog.require('pong.ui.counters');
goog.require('om.next');
goog.require('pong.core');
goog.require('pong.ui.spheres');
pong.fiddle.reset_mult_BANG_ = (function pong$fiddle$reset_mult_BANG_(st,mult){
return cljs.core.reset_BANG_.call(null,st,cljs.core.reduce.call(null,(function (p1__39373_SHARP_,p2__39374_SHARP_){
return cljs.core.assoc_in.call(null,p1__39373_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),p2__39374_SHARP_,new cljs.core.Keyword(null,"mult","mult",1466794774)], null),mult);
}),cljs.core.deref.call(null,st),cljs.core.range.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword("count","by-id","count/by-id",-2098627242).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,st))))));
});
pong.parser.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),pong.core.app_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null));
new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pong.core.app_state)));
pong.aframe_react.serialize.call(null,new cljs.core.Keyword("triangle","a","triangle/a",684026198).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pong.core.app_state))));
cljs.core.reset_BANG_.call(null,pong.core.app_state,cljs.core.reduce_kv.call(null,(function (p1__39375_SHARP_,p2__39376_SHARP_,p3__39377_SHARP_){
return cljs.core.assoc.call(null,p1__39375_SHARP_,p2__39376_SHARP_,p3__39377_SHARP_);
}),clojure.data.avl.sorted_map.call(null),om.next.tree__GT_db.call(null,pong.core.App,pong.core.init_data,true)));
pong.fiddle.reset_mult_BANG_.call(null,pong.core.app_state,0.4);
om.next.path.call(null,om.next.class__GT_any.call(null,pong.core.reconciler,pong.ui.spheres.CounterSphere));

om.next.path.call(null,om.next.class__GT_any.call(null,pong.core.reconciler,pong.ui.counters.Counter));
om.next.transact_BANG_.call(null,om.next.class__GT_any.call(null,pong.core.reconciler,pong.core.App),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment!","increment!",283705852,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null))], null));
om.next.transact_BANG_.call(null,om.next.class__GT_any.call(null,pong.core.reconciler,pong.core.App),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"decrement!","decrement!",-457164555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null))], null));
var el_39378 = om.dom.node.call(null,om.next.class__GT_any.call(null,pong.core.reconciler,pong.aframe_react.Entity));
console.log(el_39378);

el_39378.addEventListener("click",((function (el_39378){
return (function (){
return console.log("Click!");
});})(el_39378))
);

(el_39378["onclick"] = ((function (el_39378){
return (function (){
return console.log("On click!");
});})(el_39378))
);
pong.fiddle.loop_sys = (function pong$fiddle$loop_sys(){
window.requestAnimationFrame(pong$fiddle$loop_sys);

return cljs.core.swap_BANG_.call(null,pong.core.app_state,pong.system.step_dom,0.01666);
});

window.requestAnimationFrame(pong.fiddle.loop_sys);

//# sourceMappingURL=fiddle.js.map