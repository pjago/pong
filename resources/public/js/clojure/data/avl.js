// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.data.avl');
goog.require('cljs.core');

/**
* @constructor
 * @implements {clojure.data.avl.Object}
*/
clojure.data.avl.AVLNode = (function (edit,key,val,left,right,height,rank){
this.edit = edit;
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.height = height;
this.rank = rank;
})
clojure.data.avl.AVLNode.prototype.setHeight = (function (h){
var self__ = this;
var this$ = this;
self__.height = h;

return this$;
});

clojure.data.avl.AVLNode.prototype.setKey = (function (k){
var self__ = this;
var this$ = this;
self__.key = k;

return this$;
});

clojure.data.avl.AVLNode.prototype.getRank = (function (){
var self__ = this;
var this$ = this;
return self__.rank;
});

clojure.data.avl.AVLNode.prototype.setLeft = (function (l){
var self__ = this;
var this$ = this;
self__.left = l;

return this$;
});

clojure.data.avl.AVLNode.prototype.getKey = (function (){
var self__ = this;
var this$ = this;
return self__.key;
});

clojure.data.avl.AVLNode.prototype.setVal = (function (v){
var self__ = this;
var this$ = this;
self__.val = v;

return this$;
});

clojure.data.avl.AVLNode.prototype.getVal = (function (){
var self__ = this;
var this$ = this;
return self__.val;
});

clojure.data.avl.AVLNode.prototype.setRight = (function (r){
var self__ = this;
var this$ = this;
self__.right = r;

return this$;
});

clojure.data.avl.AVLNode.prototype.getHeight = (function (){
var self__ = this;
var this$ = this;
return self__.height;
});

clojure.data.avl.AVLNode.prototype.getRight = (function (){
var self__ = this;
var this$ = this;
return self__.right;
});

clojure.data.avl.AVLNode.prototype.setRank = (function (r){
var self__ = this;
var this$ = this;
self__.rank = r;

return this$;
});

clojure.data.avl.AVLNode.prototype.getLeft = (function (){
var self__ = this;
var this$ = this;
return self__.left;
});

clojure.data.avl.AVLNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit","edit",-1302639,null),cljs.core.with_meta(new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.data.avl.AVLNode.cljs$lang$type = true;

clojure.data.avl.AVLNode.cljs$lang$ctorStr = "clojure.data.avl/AVLNode";

clojure.data.avl.AVLNode.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"clojure.data.avl/AVLNode");
});

clojure.data.avl.__GT_AVLNode = (function clojure$data$avl$__GT_AVLNode(edit,key,val,left,right,height,rank){
return (new clojure.data.avl.AVLNode(edit,key,val,left,right,height,rank));
});

clojure.data.avl.height = (function clojure$data$avl$height(node){
if((node == null)){
return (0);
} else {
return node.height;
}
});
clojure.data.avl.ensure_editable = (function clojure$data$avl$ensure_editable(var_args){
var args24703 = [];
var len__19784__auto___24706 = arguments.length;
var i__19785__auto___24707 = (0);
while(true){
if((i__19785__auto___24707 < len__19784__auto___24706)){
args24703.push((arguments[i__19785__auto___24707]));

var G__24708 = (i__19785__auto___24707 + (1));
i__19785__auto___24707 = G__24708;
continue;
} else {
}
break;
}

var G__24705 = args24703.length;
switch (G__24705) {
case 1:
return clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24703.length)].join('')));

}
});

clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$1 = (function (edit){
if(cljs.core.not.call(null,edit)){
throw cljs.core.ex_info.call(null,"Transient used after persistent! call",cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});

clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2 = (function (edit,node){
if((edit === node.edit)){
return node;
} else {
return (new clojure.data.avl.AVLNode(edit,node.getKey(),node.getVal(),node.getLeft(),node.getRight(),node.getHeight(),node.getRank()));
}
});

clojure.data.avl.ensure_editable.cljs$lang$maxFixedArity = 2;
clojure.data.avl.rotate_left = (function clojure$data$avl$rotate_left(node){
var l = node.getLeft();
var r = node.getRight();
var rl = r.getLeft();
var rr = r.getRight();
var lh = clojure.data.avl.height.call(null,l);
var rlh = clojure.data.avl.height.call(null,rl);
var rrh = clojure.data.avl.height.call(null,rr);
var rnk = node.getRank();
var rnkr = r.getRank();
return (new clojure.data.avl.AVLNode(null,r.getKey(),r.getVal(),(new clojure.data.avl.AVLNode(null,node.getKey(),node.getVal(),l,rl,((function (){var x__19057__auto__ = lh;
var y__19058__auto__ = rlh;
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)),rnk)),rr,(function (){var x__19057__auto__ = (function (){var x__19057__auto__ = (lh + (2));
var y__19058__auto__ = (rlh + (2));
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})();
var y__19058__auto__ = (rrh + (1));
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})(),((rnk + rnkr) + (1))));
});
clojure.data.avl.rotate_left_BANG_ = (function clojure$data$avl$rotate_left_BANG_(edit,node){
var node__$1 = clojure.data.avl.ensure_editable.call(null,edit,node);
var l = node__$1.getLeft();
var r = clojure.data.avl.ensure_editable.call(null,edit,node__$1.getRight());
var rl = r.getLeft();
var rr = r.getRight();
var lh = clojure.data.avl.height.call(null,l);
var rlh = clojure.data.avl.height.call(null,rl);
var rrh = clojure.data.avl.height.call(null,rr);
var rnk = node__$1.getRank();
var rnkr = r.getRank();
r.setLeft(node__$1);

r.setHeight((function (){var x__19057__auto__ = (function (){var x__19057__auto__ = (lh + (2));
var y__19058__auto__ = (rlh + (2));
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})();
var y__19058__auto__ = (rrh + (1));
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})());

r.setRank(((rnk + rnkr) + (1)));

node__$1.setRight(rl);

node__$1.setHeight(((function (){var x__19057__auto__ = lh;
var y__19058__auto__ = rlh;
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)));

return r;
});
clojure.data.avl.rotate_right = (function clojure$data$avl$rotate_right(node){
var r = node.getRight();
var l = node.getLeft();
var lr = l.getRight();
var ll = l.getLeft();
var rh = clojure.data.avl.height.call(null,r);
var lrh = clojure.data.avl.height.call(null,lr);
var llh = clojure.data.avl.height.call(null,ll);
var rnk = node.getRank();
var rnkl = l.getRank();
return (new clojure.data.avl.AVLNode(null,l.getKey(),l.getVal(),ll,(new clojure.data.avl.AVLNode(null,node.getKey(),node.getVal(),lr,r,((function (){var x__19057__auto__ = rh;
var y__19058__auto__ = lrh;
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)),((rnk - rnkl) - (1)))),(function (){var x__19057__auto__ = (function (){var x__19057__auto__ = (rh + (2));
var y__19058__auto__ = (lrh + (2));
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})();
var y__19058__auto__ = (llh + (1));
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})(),rnkl));
});
clojure.data.avl.rotate_right_BANG_ = (function clojure$data$avl$rotate_right_BANG_(edit,node){
var node__$1 = clojure.data.avl.ensure_editable.call(null,edit,node);
var r = node__$1.getRight();
var l = clojure.data.avl.ensure_editable.call(null,edit,node__$1.getLeft());
var lr = l.getRight();
var ll = l.getLeft();
var rh = clojure.data.avl.height.call(null,r);
var lrh = clojure.data.avl.height.call(null,lr);
var llh = clojure.data.avl.height.call(null,ll);
var rnk = node__$1.getRank();
var rnkl = l.getRank();
l.setRight(node__$1);

l.setHeight((function (){var x__19057__auto__ = (function (){var x__19057__auto__ = (rh + (2));
var y__19058__auto__ = (lrh + (2));
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})();
var y__19058__auto__ = (llh + (1));
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})());

node__$1.setLeft(lr);

node__$1.setHeight(((function (){var x__19057__auto__ = rh;
var y__19058__auto__ = lrh;
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)));

node__$1.setRank(((rnk - rnkl) - (1)));

return l;
});
clojure.data.avl.lookup = (function clojure$data$avl$lookup(comp,node,k){
while(true){
if((node == null)){
return null;
} else {
var c = comp.call(null,k,node.getKey());
if((c === (0))){
return node;
} else {
if((c < (0))){
var G__24803 = comp;
var G__24804 = node.getLeft();
var G__24805 = k;
comp = G__24803;
node = G__24804;
k = G__24805;
continue;
} else {
var G__24806 = comp;
var G__24807 = node.getRight();
var G__24808 = k;
comp = G__24806;
node = G__24807;
k = G__24808;
continue;

}
}
}
break;
}
});
clojure.data.avl.lookup_nearest = (function clojure$data$avl$lookup_nearest(comp,node,test,k){
var below_QMARK_ = ((cljs.core._LT_ === test)) || ((cljs.core._LT__EQ_ === test));
var equal_QMARK_ = ((cljs.core._LT__EQ_ === test)) || ((cljs.core._GT__EQ_ === test));
var back_QMARK_ = ((below_QMARK_)?cljs.core.neg_QMARK_:cljs.core.pos_QMARK_);
var backward = ((below_QMARK_)?((function (below_QMARK_,equal_QMARK_,back_QMARK_){
return (function (p1__24809_SHARP_){
return p1__24809_SHARP_.getLeft();
});})(below_QMARK_,equal_QMARK_,back_QMARK_))
:((function (below_QMARK_,equal_QMARK_,back_QMARK_){
return (function (p1__24810_SHARP_){
return p1__24810_SHARP_.getRight();
});})(below_QMARK_,equal_QMARK_,back_QMARK_))
);
var forward = ((below_QMARK_)?((function (below_QMARK_,equal_QMARK_,back_QMARK_,backward){
return (function (p1__24811_SHARP_){
return p1__24811_SHARP_.getRight();
});})(below_QMARK_,equal_QMARK_,back_QMARK_,backward))
:((function (below_QMARK_,equal_QMARK_,back_QMARK_,backward){
return (function (p1__24812_SHARP_){
return p1__24812_SHARP_.getLeft();
});})(below_QMARK_,equal_QMARK_,back_QMARK_,backward))
);
var prev = null;
var node__$1 = node;
while(true){
if((node__$1 == null)){
return prev;
} else {
var c = comp.call(null,k,node__$1.getKey());
if((c === (0))){
if(equal_QMARK_){
return node__$1;
} else {
var G__24856 = prev;
var G__24857 = backward.call(null,node__$1);
prev = G__24856;
node__$1 = G__24857;
continue;
}
} else {
if(cljs.core.truth_(back_QMARK_.call(null,c))){
var G__24860 = prev;
var G__24861 = backward.call(null,node__$1);
prev = G__24860;
node__$1 = G__24861;
continue;
} else {
var G__24862 = node__$1;
var G__24863 = forward.call(null,node__$1);
prev = G__24862;
node__$1 = G__24863;
continue;

}
}
}
break;
}
});
clojure.data.avl.select = (function clojure$data$avl$select(node,rank){
while(true){
if((node == null)){
return null;
} else {
var node_rank = node.getRank();
if((node_rank === rank)){
return node;
} else {
if((node_rank < rank)){
var G__24864 = node.getRight();
var G__24865 = ((rank - node_rank) - (1));
node = G__24864;
rank = G__24865;
continue;
} else {
var G__24868 = node.getLeft();
var G__24869 = rank;
node = G__24868;
rank = G__24869;
continue;

}
}
}
break;
}
});
clojure.data.avl.rank = (function clojure$data$avl$rank(comp,node,k){
while(true){
if((node == null)){
return (-1);
} else {
var c = comp.call(null,k,node.getKey());
if((c === (0))){
return node.getRank();
} else {
if((c < (0))){
var G__24892 = comp;
var G__24893 = node.getLeft();
var G__24894 = k;
comp = G__24892;
node = G__24893;
k = G__24894;
continue;
} else {
var r = clojure$data$avl$rank.call(null,comp,node.getRight(),k);
if(((-1) === r)){
return (-1);
} else {
return ((node.getRank() + r) + (1));
}

}
}
}
break;
}
});
clojure.data.avl.maybe_rebalance = (function clojure$data$avl$maybe_rebalance(node){
var l = node.getLeft();
var r = node.getRight();
var lh = clojure.data.avl.height.call(null,l);
var rh = clojure.data.avl.height.call(null,r);
var b = (lh - rh);
if((b < (-1))){
var rl = r.getLeft();
var rr = r.getRight();
var rlh = clojure.data.avl.height.call(null,rl);
var rrh = clojure.data.avl.height.call(null,rr);
if(((rlh - rrh) === (1))){
var new_right = clojure.data.avl.rotate_right.call(null,r);
return clojure.data.avl.rotate_left.call(null,(new clojure.data.avl.AVLNode(null,node.getKey(),node.getVal(),node.getLeft(),new_right,((function (){var x__19057__auto__ = lh;
var y__19058__auto__ = clojure.data.avl.height.call(null,new_right);
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)),node.getRank())));
} else {
return clojure.data.avl.rotate_left.call(null,node);
}
} else {
if((b > (1))){
var ll = l.getLeft();
var lr = l.getRight();
var llh = clojure.data.avl.height.call(null,ll);
var lrh = clojure.data.avl.height.call(null,lr);
if(((lrh - llh) === (1))){
var new_left = clojure.data.avl.rotate_left.call(null,l);
return clojure.data.avl.rotate_right.call(null,(new clojure.data.avl.AVLNode(null,node.getKey(),node.getVal(),new_left,node.getRight(),((function (){var x__19057__auto__ = rh;
var y__19058__auto__ = clojure.data.avl.height.call(null,new_left);
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)),node.getRank())));
} else {
return clojure.data.avl.rotate_right.call(null,node);
}
} else {
return node;

}
}
});
clojure.data.avl.maybe_rebalance_BANG_ = (function clojure$data$avl$maybe_rebalance_BANG_(edit,node){
var l = node.getLeft();
var r = node.getRight();
var lh = clojure.data.avl.height.call(null,l);
var rh = clojure.data.avl.height.call(null,r);
var b = (lh - rh);
if((b < (-1))){
var node__$1 = clojure.data.avl.ensure_editable.call(null,edit,node);
var rl = r.getLeft();
var rr = r.getRight();
var rlh = clojure.data.avl.height.call(null,rl);
var rrh = clojure.data.avl.height.call(null,rr);
if(((rlh - rrh) >= (2))){
var new_right = clojure.data.avl.rotate_right_BANG_.call(null,edit,r);
node__$1.setRight(new_right);

node__$1.setHeight(((function (){var x__19057__auto__ = lh;
var y__19058__auto__ = clojure.data.avl.height.call(null,new_right);
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)));

return clojure.data.avl.rotate_left_BANG_.call(null,edit,node__$1);
} else {
return clojure.data.avl.rotate_left_BANG_.call(null,edit,node__$1);
}
} else {
if((b > (1))){
var node__$1 = clojure.data.avl.ensure_editable.call(null,edit,node);
var ll = l.getLeft();
var lr = l.getRight();
var llh = clojure.data.avl.height.call(null,ll);
var lrh = clojure.data.avl.height.call(null,lr);
if(((lrh - llh) >= (2))){
var new_left = clojure.data.avl.rotate_left_BANG_.call(null,edit,l);
node__$1.setLeft(new_left);

node__$1.setHeight(((function (){var x__19057__auto__ = rh;
var y__19058__auto__ = clojure.data.avl.height.call(null,new_left);
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)));

return clojure.data.avl.rotate_right_BANG_.call(null,edit,node__$1);
} else {
return clojure.data.avl.rotate_right_BANG_.call(null,edit,node__$1);
}
} else {
return node;

}
}
});
clojure.data.avl.insert = (function clojure$data$avl$insert(comp,node,k,v,found_QMARK_){
if((node == null)){
return (new clojure.data.avl.AVLNode(null,k,v,null,null,(1),(0)));
} else {
var nk = node.getKey();
var c = comp.call(null,k,nk);
if((c === (0))){
found_QMARK_.val = true;

return (new clojure.data.avl.AVLNode(null,k,v,node.getLeft(),node.getRight(),node.getHeight(),node.getRank()));
} else {
if((c < (0))){
var new_child = clojure$data$avl$insert.call(null,comp,node.getLeft(),k,v,found_QMARK_);
return clojure.data.avl.maybe_rebalance.call(null,(new clojure.data.avl.AVLNode(null,nk,node.getVal(),new_child,node.getRight(),((function (){var x__19057__auto__ = new_child.getHeight();
var y__19058__auto__ = clojure.data.avl.height.call(null,node.getRight());
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)),(cljs.core.truth_(found_QMARK_.val)?node.getRank():(node.getRank() + (1))))));
} else {
var new_child = clojure$data$avl$insert.call(null,comp,node.getRight(),k,v,found_QMARK_);
return clojure.data.avl.maybe_rebalance.call(null,(new clojure.data.avl.AVLNode(null,nk,node.getVal(),node.getLeft(),new_child,((function (){var x__19057__auto__ = new_child.getHeight();
var y__19058__auto__ = clojure.data.avl.height.call(null,node.getLeft());
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)),node.getRank())));

}
}
}
});
clojure.data.avl.insert_BANG_ = (function clojure$data$avl$insert_BANG_(edit,comp,node,k,v,found_QMARK_){
if((node == null)){
return (new clojure.data.avl.AVLNode(edit,k,v,null,null,(1),(0)));
} else {
var node__$1 = clojure.data.avl.ensure_editable.call(null,edit,node);
var nk = node__$1.getKey();
var c = comp.call(null,k,nk);
if((c === (0))){
found_QMARK_.val = true;

node__$1.setKey(k);

node__$1.setVal(v);

return node__$1;
} else {
if((c < (0))){
var new_child = clojure$data$avl$insert_BANG_.call(null,edit,comp,node__$1.getLeft(),k,v,found_QMARK_);
node__$1.setLeft(new_child);

node__$1.setHeight(((function (){var x__19057__auto__ = new_child.getHeight();
var y__19058__auto__ = clojure.data.avl.height.call(null,node__$1.getRight());
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)));

if(cljs.core.not.call(null,found_QMARK_.val)){
node__$1.setRank((node__$1.getRank() + (1)));
} else {
}

return clojure.data.avl.maybe_rebalance_BANG_.call(null,edit,node__$1);
} else {
var new_child = clojure$data$avl$insert_BANG_.call(null,edit,comp,node__$1.getRight(),k,v,found_QMARK_);
node__$1.setRight(new_child);

node__$1.setHeight(((function (){var x__19057__auto__ = new_child.getHeight();
var y__19058__auto__ = clojure.data.avl.height.call(null,node__$1.getLeft());
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)));

return clojure.data.avl.maybe_rebalance_BANG_.call(null,edit,node__$1);

}
}
}
});
clojure.data.avl.get_rightmost = (function clojure$data$avl$get_rightmost(node){
while(true){
var temp__4655__auto__ = node.getRight();
if(cljs.core.truth_(temp__4655__auto__)){
var r = temp__4655__auto__;
var G__25067 = r;
node = G__25067;
continue;
} else {
return node;
}
break;
}
});
clojure.data.avl.delete_rightmost = (function clojure$data$avl$delete_rightmost(node){
var temp__4655__auto__ = node.getRight();
if(cljs.core.truth_(temp__4655__auto__)){
var r = temp__4655__auto__;
var l = node.getLeft();
var new_right = clojure$data$avl$delete_rightmost.call(null,r);
return (new clojure.data.avl.AVLNode(null,node.getKey(),node.getVal(),l,new_right,((function (){var x__19057__auto__ = clojure.data.avl.height.call(null,l);
var y__19058__auto__ = clojure.data.avl.height.call(null,new_right);
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)),node.getRank()));
} else {
return node.getLeft();
}
});
clojure.data.avl.delete_rightmost_BANG_ = (function clojure$data$avl$delete_rightmost_BANG_(edit,node){
if(!((node == null))){
var node__$1 = clojure.data.avl.ensure_editable.call(null,edit,node);
var r = node__$1.getRight();
if((r == null)){
var temp__4655__auto__ = node__$1.getLeft();
if(cljs.core.truth_(temp__4655__auto__)){
var l = temp__4655__auto__;
return clojure.data.avl.ensure_editable.call(null,edit,l);
} else {
return null;
}
} else {
if((r.getRight() == null)){
node__$1.setRight(r.getLeft());

node__$1.setHeight(((function (){var x__19057__auto__ = clojure.data.avl.height.call(null,node__$1.getLeft());
var y__19058__auto__ = clojure.data.avl.height.call(null,r.getLeft());
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)));

return node__$1;
} else {
var new_right = clojure$data$avl$delete_rightmost_BANG_.call(null,edit,r);
node__$1.setRight(new_right);

node__$1.setHeight(((function (){var x__19057__auto__ = clojure.data.avl.height.call(null,node__$1.getLeft());
var y__19058__auto__ = clojure.data.avl.height.call(null,new_right);
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)));

return node__$1;

}
}
} else {
return null;
}
});
clojure.data.avl.delete$ = (function clojure$data$avl$delete(comp,node,k,found_QMARK_){
if((node == null)){
return null;
} else {
var nk = node.getKey();
var c = comp.call(null,k,nk);
if((c === (0))){
var l = node.getLeft();
var r = node.getRight();
found_QMARK_.val = true;

if(cljs.core.truth_((function (){var and__18714__auto__ = l;
if(cljs.core.truth_(and__18714__auto__)){
return r;
} else {
return and__18714__auto__;
}
})())){
var p = clojure.data.avl.get_rightmost.call(null,l);
var l_SINGLEQUOTE_ = clojure.data.avl.delete_rightmost.call(null,l);
return (new clojure.data.avl.AVLNode(null,p.getKey(),p.getVal(),l_SINGLEQUOTE_,r,((function (){var x__19057__auto__ = clojure.data.avl.height.call(null,l_SINGLEQUOTE_);
var y__19058__auto__ = clojure.data.avl.height.call(null,r);
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)),(node.getRank() - (1))));
} else {
var or__18726__auto__ = l;
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return r;
}
}
} else {
if((c < (0))){
var new_child = clojure$data$avl$delete.call(null,comp,node.getLeft(),k,found_QMARK_);
if((new_child === node.getLeft())){
return node;
} else {
return clojure.data.avl.maybe_rebalance.call(null,(new clojure.data.avl.AVLNode(null,nk,node.getVal(),new_child,node.getRight(),((function (){var x__19057__auto__ = clojure.data.avl.height.call(null,new_child);
var y__19058__auto__ = clojure.data.avl.height.call(null,node.getRight());
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)),(cljs.core.truth_(found_QMARK_.val)?(node.getRank() - (1)):node.getRank()))));
}
} else {
var new_child = clojure$data$avl$delete.call(null,comp,node.getRight(),k,found_QMARK_);
if((new_child === node.getRight())){
return node;
} else {
return clojure.data.avl.maybe_rebalance.call(null,(new clojure.data.avl.AVLNode(null,nk,node.getVal(),node.getLeft(),new_child,((function (){var x__19057__auto__ = clojure.data.avl.height.call(null,new_child);
var y__19058__auto__ = clojure.data.avl.height.call(null,node.getLeft());
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)),node.getRank())));
}

}
}
}
});
clojure.data.avl.delete_BANG_ = (function clojure$data$avl$delete_BANG_(edit,comp,node,k,found_QMARK_){
if((node == null)){
return null;
} else {
var nk = node.getKey();
var c = comp.call(null,k,nk);
if((c === (0))){
var l = node.getLeft();
var r = node.getRight();
found_QMARK_.val = true;

if(cljs.core.truth_((function (){var and__18714__auto__ = l;
if(cljs.core.truth_(and__18714__auto__)){
return r;
} else {
return and__18714__auto__;
}
})())){
var node__$1 = clojure.data.avl.ensure_editable.call(null,edit,node);
var p = clojure.data.avl.get_rightmost.call(null,l);
var l_SINGLEQUOTE_ = clojure.data.avl.delete_rightmost_BANG_.call(null,edit,l);
node__$1.setKey(p.getKey());

node__$1.setVal(p.getVal());

node__$1.setLeft(l_SINGLEQUOTE_);

node__$1.setHeight(((function (){var x__19057__auto__ = clojure.data.avl.height.call(null,l_SINGLEQUOTE_);
var y__19058__auto__ = clojure.data.avl.height.call(null,r);
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)));

node__$1.setRank((node__$1.getRank() - (1)));

return node__$1;
} else {
if(cljs.core.truth_(l)){
return l;
} else {
if(cljs.core.truth_(r)){
return r;
} else {
return null;

}
}
}
} else {
if((c < (0))){
var new_child = clojure$data$avl$delete_BANG_.call(null,edit,comp,node.getLeft(),k,found_QMARK_);
if((new_child === node.getLeft())){
return node;
} else {
var node__$1 = clojure.data.avl.ensure_editable.call(null,edit,node);
node__$1.setLeft(new_child);

node__$1.setHeight(((function (){var x__19057__auto__ = clojure.data.avl.height.call(null,new_child);
var y__19058__auto__ = clojure.data.avl.height.call(null,node__$1.getRight());
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)));

if(cljs.core.truth_(found_QMARK_.val)){
node__$1.setRank((node__$1.getRank() - (1)));
} else {
}

return clojure.data.avl.maybe_rebalance_BANG_.call(null,edit,node__$1);
}
} else {
var new_child = clojure$data$avl$delete_BANG_.call(null,edit,comp,node.getRight(),k,found_QMARK_);
if((new_child === node.getRight())){
return node;
} else {
var node__$1 = clojure.data.avl.ensure_editable.call(null,edit,node);
node__$1.setRight(new_child);

node__$1.setHeight(((function (){var x__19057__auto__ = clojure.data.avl.height.call(null,new_child);
var y__19058__auto__ = clojure.data.avl.height.call(null,node__$1.getLeft());
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)));

return clojure.data.avl.maybe_rebalance_BANG_.call(null,edit,node__$1);
}

}
}
}
});
clojure.data.avl.join = (function clojure$data$avl$join(comp,left_count,left,right){
if((left == null)){
return right;
} else {
if((right == null)){
return left;
} else {
var lh = left.getHeight();
var rh = right.getHeight();
if((lh === rh)){
var left_min = clojure.data.avl.get_rightmost.call(null,left);
var new_left = clojure.data.avl.delete$.call(null,comp,left,left_min.getKey(),(new cljs.core.Box(false)));
return (new clojure.data.avl.AVLNode(null,left_min.getKey(),left_min.getVal(),new_left,right,(rh + (1)),(left_count - (1))));
} else {
if((lh < rh)){
var step = ((function (lh,rh){
return (function clojure$data$avl$join_$_step(current,lvl){
if((lvl === (0))){
return clojure$data$avl$join.call(null,comp,left_count,left,current);
} else {
if((current.getLeft() == null)){
return (new clojure.data.avl.AVLNode(null,current.getKey(),current.getVal(),left,current.getRight(),(2),left_count));
} else {
var new_child = clojure$data$avl$join_$_step.call(null,current.getLeft(),(lvl - (1)));
var current_r = current.getRight();
return clojure.data.avl.maybe_rebalance.call(null,(new clojure.data.avl.AVLNode(null,current.getKey(),current.getVal(),new_child,current_r,((function (){var x__19057__auto__ = new_child.getHeight();
var y__19058__auto__ = (cljs.core.truth_(current_r)?current_r.getHeight():(0));
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)),(left_count + current.getRank()))));

}
}
});})(lh,rh))
;
return step.call(null,right,(rh - lh));
} else {
var step = ((function (lh,rh){
return (function clojure$data$avl$join_$_step(current,cnt,lvl){
if((lvl === (0))){
return clojure$data$avl$join.call(null,comp,cnt,current,right);
} else {
if((current.getRight() == null)){
return (new clojure.data.avl.AVLNode(null,current.getKey(),current.getVal(),current.getLeft(),right,(2),current.getRank()));
} else {
var new_child = clojure$data$avl$join_$_step.call(null,current.getRight(),((cnt - current.getRank()) - (1)),(lvl - (1)));
var current_l = current.getLeft();
return clojure.data.avl.maybe_rebalance.call(null,(new clojure.data.avl.AVLNode(null,current.getKey(),current.getVal(),current_l,new_child,((function (){var x__19057__auto__ = new_child.getHeight();
var y__19058__auto__ = (cljs.core.truth_(current_l)?current_l.getHeight():(0));
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})() + (1)),current.getRank())));

}
}
});})(lh,rh))
;
return step.call(null,left,left_count,(lh - rh));

}
}

}
}
});
clojure.data.avl.split = (function clojure$data$avl$split(comp,node,k){
var step = (function clojure$data$avl$split_$_step(node__$1){
if((node__$1 == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null);
} else {
var c = comp.call(null,k,node__$1.getKey());
if((c === (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node__$1.getLeft(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node__$1.getKey(),node__$1.getVal()], null),node__$1.getRight()], null);
} else {
if((c < (0))){
var vec__25264 = clojure$data$avl$split_$_step.call(null,node__$1.getLeft());
var l = cljs.core.nth.call(null,vec__25264,(0),null);
var e = cljs.core.nth.call(null,vec__25264,(1),null);
var r = cljs.core.nth.call(null,vec__25264,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,e,clojure.data.avl.join.call(null,comp,(node__$1.getRank() - (cljs.core.truth_(e)?(clojure.data.avl.rank.call(null,comp,node__$1.getLeft(),cljs.core.key.call(null,e)) + (1)):(cljs.core.truth_(r)?(clojure.data.avl.rank.call(null,comp,node__$1.getLeft(),clojure.data.avl.get_rightmost.call(null,r).getKey()) + (1)):node__$1.getRank()
))),r,clojure.data.avl.insert.call(null,comp,node__$1.getRight(),node__$1.getKey(),node__$1.getVal(),(new cljs.core.Box(false))))], null);
} else {
var vec__25265 = clojure$data$avl$split_$_step.call(null,node__$1.getRight());
var l = cljs.core.nth.call(null,vec__25265,(0),null);
var e = cljs.core.nth.call(null,vec__25265,(1),null);
var r = cljs.core.nth.call(null,vec__25265,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.data.avl.join.call(null,comp,(node__$1.getRank() + (1)),clojure.data.avl.insert.call(null,comp,node__$1.getLeft(),node__$1.getKey(),node__$1.getVal(),(new cljs.core.Box(false))),l),e,r], null);

}
}
}
});
return step.call(null,node);
});
clojure.data.avl.range = (function clojure$data$avl$range(comp,node,low,high){
var vec__25280 = clojure.data.avl.split.call(null,comp,node,low);
var _ = cljs.core.nth.call(null,vec__25280,(0),null);
var low_e = cljs.core.nth.call(null,vec__25280,(1),null);
var r = cljs.core.nth.call(null,vec__25280,(2),null);
var vec__25281 = clojure.data.avl.split.call(null,comp,r,high);
var l = cljs.core.nth.call(null,vec__25281,(0),null);
var high_e = cljs.core.nth.call(null,vec__25281,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__25281,(2),null);
var G__25282 = l;
var G__25282__$1 = (cljs.core.truth_(low_e)?(function (){var node__$1 = G__25282;
return clojure.data.avl.insert.call(null,comp,node__$1,cljs.core.key.call(null,low_e),cljs.core.val.call(null,low_e),(new cljs.core.Box(false)));
})():G__25282);
if(cljs.core.truth_(high_e)){
var node__$1 = G__25282__$1;
return clojure.data.avl.insert.call(null,comp,node__$1,cljs.core.key.call(null,high_e),cljs.core.val.call(null,high_e),(new cljs.core.Box(false)));
} else {
return G__25282__$1;
}
});
clojure.data.avl.seq_push = (function clojure$data$avl$seq_push(node,stack,ascending_QMARK_){
var node__$1 = node;
var stack__$1 = stack;
while(true){
if((node__$1 == null)){
return stack__$1;
} else {
var G__25300 = (cljs.core.truth_(ascending_QMARK_)?node__$1.left:node__$1.right);
var G__25301 = cljs.core.conj.call(null,stack__$1,node__$1);
node__$1 = G__25300;
stack__$1 = G__25301;
continue;
}
break;
}
});
clojure.data.avl.create_seq = (function clojure$data$avl$create_seq(node,ascending_QMARK_,cnt){
return clojure.data.avl.__GT_AVLMapSeq.call(null,null,clojure.data.avl.seq_push.call(null,node,null,ascending_QMARK_),ascending_QMARK_,cnt,null);
});
clojure.data.avl.avl_map_kv_reduce = (function clojure$data$avl$avl_map_kv_reduce(node,f,init){
var init__$1 = (((node.getLeft() == null))?init:clojure$data$avl$avl_map_kv_reduce.call(null,node.getLeft(),f,init));
if(cljs.core.reduced_QMARK_.call(null,init__$1)){
return init__$1;
} else {
var init__$2 = f.call(null,init__$1,node.getKey(),node.getVal());
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return init__$2;
} else {
var init__$3 = (((node.getRight() == null))?init__$2:clojure$data$avl$avl_map_kv_reduce.call(null,node.getRight(),f,init__$2));
return init__$3;
}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {clojure.data.avl.Object}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.data.avl.AVLMapSeq = (function (_meta,stack,ascending_QMARK_,cnt,_hash){
this._meta = _meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.data.avl.AVLMapSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__._meta;
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._seq.call(null,cljs.core._rest.call(null,this$__$1));
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt < (0))){
return (cljs.core._count.call(null,cljs.core._next.call(null,this$__$1)) + (1));
} else {
return self__.cnt;
}
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__19161__auto__ = self__._hash;
if(!((h__19161__auto__ == null))){
return h__19161__auto__;
} else {
var h__19161__auto____$1 = cljs.core.hash_coll.call(null,this$__$1);
self__._hash = h__19161__auto____$1;

return h__19161__auto____$1;
}
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential.call(null,this$__$1,that);
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta);
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq_reduce.call(null,f,this$__$1);
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,this$__$1);
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = cljs.core.peek.call(null,self__.stack);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null);
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = cljs.core.first.call(null,self__.stack);
var next_stack = clojure.data.avl.seq_push.call(null,(cljs.core.truth_(self__.ascending_QMARK_)?node.right:node.left),cljs.core.next.call(null,self__.stack),self__.ascending_QMARK_);
if((next_stack == null)){
return cljs.core.List.EMPTY;
} else {
return (new clojure.data.avl.AVLMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
}
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLMapSeq(meta,self__.stack,self__.ascending_QMARK_,self__.cnt,self__._hash));
});

clojure.data.avl.AVLMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,x,this$__$1);
});

clojure.data.avl.AVLMapSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null),new cljs.core.Symbol(null,"stack","stack",847125597,null),new cljs.core.Symbol(null,"ascending?","ascending?",-1938452653,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.data.avl.AVLMapSeq.cljs$lang$type = true;

clojure.data.avl.AVLMapSeq.cljs$lang$ctorStr = "clojure.data.avl/AVLMapSeq";

clojure.data.avl.AVLMapSeq.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"clojure.data.avl/AVLMapSeq");
});

clojure.data.avl.__GT_AVLMapSeq = (function clojure$data$avl$__GT_AVLMapSeq(_meta,stack,ascending_QMARK_,cnt,_hash){
return (new clojure.data.avl.AVLMapSeq(_meta,stack,ascending_QMARK_,cnt,_hash));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {clojure.data.avl.Object}
 * @implements {cljs.core.IEditableCollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.data.avl.AVLMap = (function (comp,tree,cnt,_meta,_hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this._meta = _meta;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 418776863;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
clojure.data.avl.AVLMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

clojure.data.avl.AVLMap.prototype.getTree = (function (){
var self__ = this;
var this$ = this;
return self__.tree;
});

clojure.data.avl.AVLMap.prototype.nearest = (function (test,k){
var self__ = this;
var this$ = this;
var temp__4655__auto__ = clojure.data.avl.lookup_nearest.call(null,self__.comp,self__.tree,test,k);
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.getKey(),node.getVal()], null);
} else {
return null;
}
});

clojure.data.avl.AVLMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

clojure.data.avl.AVLMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var n = clojure.data.avl.lookup.call(null,self__.comp,self__.tree,k);
if(!((n == null))){
return n.val;
} else {
return not_found;
}
});

clojure.data.avl.AVLMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
if((self__.tree == null)){
return init;
} else {
var init__$1 = clojure.data.avl.avl_map_kv_reduce.call(null,self__.tree,f,init);
if(cljs.core.reduced_QMARK_.call(null,init__$1)){
return cljs.core.deref.call(null,init__$1);
} else {
return init__$1;
}
}
});

clojure.data.avl.AVLMap.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = clojure.data.avl.select.call(null,self__.tree,i);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n.getKey(),n.getVal()], null);
} else {
throw cljs.core.ex_info.call(null,"nth index out of bounds in AVL tree",cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.data.avl.AVLMap.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = clojure.data.avl.select.call(null,self__.tree,i);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n.getKey(),n.getVal()], null);
} else {
return not_found;
}
});

clojure.data.avl.AVLMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__._meta;
});

clojure.data.avl.AVLMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.cnt;
});

clojure.data.avl.AVLMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return clojure.data.avl.create_seq.call(null,self__.tree,false,self__.cnt);
} else {
return null;
}
});

clojure.data.avl.AVLMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__19161__auto__ = self__._hash;
if(!((h__19161__auto__ == null))){
return h__19161__auto__;
} else {
var h__19161__auto____$1 = cljs.core.hash_unordered_coll.call(null,this$__$1);
self__._hash = h__19161__auto____$1;

return h__19161__auto____$1;
}
});

clojure.data.avl.AVLMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_map.call(null,this$__$1,that);
});

clojure.data.avl.AVLMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clojure.data.avl.__GT_AVLTransientMap.call(null,{},self__.comp,self__.tree,self__.cnt);
});

clojure.data.avl.AVLMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLMap(self__.comp,null,(0),self__._meta,(0)));
});

clojure.data.avl.AVLMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
var found_QMARK_ = (new cljs.core.Box(false));
var new_tree = clojure.data.avl.delete$.call(null,self__.comp,self__.tree,k,found_QMARK_);
if(cljs.core.truth_(found_QMARK_.val)){
return (new clojure.data.avl.AVLMap(self__.comp,new_tree,(self__.cnt - (1)),self__._meta,null));
} else {
return this$__$1;
}
});

clojure.data.avl.AVLMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
var found_QMARK_ = (new cljs.core.Box(false));
var new_tree = clojure.data.avl.insert.call(null,self__.comp,self__.tree,k,v,found_QMARK_);
return (new clojure.data.avl.AVLMap(self__.comp,new_tree,(cljs.core.truth_(found_QMARK_.val)?self__.cnt:(self__.cnt + (1))),self__._meta,null));
});

clojure.data.avl.AVLMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return !((clojure.data.avl.lookup.call(null,self__.comp,self__.tree,k) == null));
});

clojure.data.avl.AVLMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return clojure.data.avl.create_seq.call(null,self__.tree,true,self__.cnt);
} else {
return null;
}
});

clojure.data.avl.AVLMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLMap(self__.comp,self__.tree,self__.cnt,meta,self__._hash));
});

clojure.data.avl.AVLMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core.assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});

clojure.data.avl.AVLMap.prototype.call = (function() {
var G__25559 = null;
var G__25559__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__25559__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__25559 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25559__2.call(this,self__,k);
case 3:
return G__25559__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25559.cljs$core$IFn$_invoke$arity$2 = G__25559__2;
G__25559.cljs$core$IFn$_invoke$arity$3 = G__25559__3;
return G__25559;
})()
;

clojure.data.avl.AVLMap.prototype.apply = (function (self__,args25390){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25390)));
});

clojure.data.avl.AVLMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

clojure.data.avl.AVLMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

clojure.data.avl.AVLMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return clojure.data.avl.create_seq.call(null,self__.tree,ascending_QMARK_,self__.cnt);
} else {
return null;
}
});

clojure.data.avl.AVLMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
var stack = null;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = self__.comp.call(null,k,t.key);
if((c === (0))){
return (new clojure.data.avl.AVLMapSeq(null,cljs.core.conj.call(null,stack,t),ascending_QMARK_,(-1),null));
} else {
if(cljs.core.truth_(ascending_QMARK_)){
if((c < (0))){
var G__25589 = cljs.core.conj.call(null,stack,t);
var G__25590 = t.left;
stack = G__25589;
t = G__25590;
continue;
} else {
var G__25598 = stack;
var G__25599 = t.right;
stack = G__25598;
t = G__25599;
continue;
}
} else {
if((c > (0))){
var G__25603 = cljs.core.conj.call(null,stack,t);
var G__25604 = t.right;
stack = G__25603;
t = G__25604;
continue;
} else {
var G__25605 = stack;
var G__25606 = t.left;
stack = G__25605;
t = G__25606;
continue;
}

}
}
} else {
if(!((stack == null))){
return (new clojure.data.avl.AVLMapSeq(null,stack,ascending_QMARK_,(-1),null));
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

clojure.data.avl.AVLMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.key.call(null,entry);
});

clojure.data.avl.AVLMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.comp;
});

clojure.data.avl.AVLMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.data.avl.AVLMap.cljs$lang$type = true;

clojure.data.avl.AVLMap.cljs$lang$ctorStr = "clojure.data.avl/AVLMap";

clojure.data.avl.AVLMap.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"clojure.data.avl/AVLMap");
});

clojure.data.avl.__GT_AVLMap = (function clojure$data$avl$__GT_AVLMap(comp,tree,cnt,_meta,_hash){
return (new clojure.data.avl.AVLMap(comp,tree,cnt,_meta,_hash));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ITransientMap}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientAssociative}
 * @implements {cljs.core.ILookup}
*/
clojure.data.avl.AVLTransientMap = (function (edit,comp,tree,cnt){
this.edit = edit;
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 56;
})
clojure.data.avl.AVLTransientMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.cnt;
});

clojure.data.avl.AVLTransientMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

clojure.data.avl.AVLTransientMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var n = clojure.data.avl.lookup.call(null,self__.comp,self__.tree,k);
if(!((n == null))){
return n.getVal();
} else {
return not_found;
}
});

clojure.data.avl.AVLTransientMap.prototype.call = (function() {
var G__25664 = null;
var G__25664__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__25664__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__25664 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25664__2.call(this,self__,k);
case 3:
return G__25664__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25664.cljs$core$IFn$_invoke$arity$2 = G__25664__2;
G__25664.cljs$core$IFn$_invoke$arity$3 = G__25664__3;
return G__25664;
})()
;

clojure.data.avl.AVLTransientMap.prototype.apply = (function (self__,args25657){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25657)));
});

clojure.data.avl.AVLTransientMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

clojure.data.avl.AVLTransientMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

clojure.data.avl.AVLTransientMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core.assoc_BANG_.call(null,this$__$1,cljs.core.nth.call(null,entry,(0)),cljs.core.nth.call(null,entry,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,this$__$1,entry);
}
});

clojure.data.avl.AVLTransientMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
clojure.data.avl.ensure_editable.call(null,self__.edit);

self__.edit = null;

return (new clojure.data.avl.AVLMap(self__.comp,self__.tree,self__.cnt,null,null));
});

clojure.data.avl.AVLTransientMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
clojure.data.avl.ensure_editable.call(null,self__.edit);

var found_QMARK_ = (new cljs.core.Box(false));
var new_tree = clojure.data.avl.insert_BANG_.call(null,self__.edit,self__.comp,self__.tree,k,v,found_QMARK_);
self__.tree = new_tree;

if(cljs.core.not.call(null,found_QMARK_.val)){
self__.cnt = (self__.cnt + (1));
} else {
}

return this$__$1;
});

clojure.data.avl.AVLTransientMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
clojure.data.avl.ensure_editable.call(null,self__.edit);

var found_QMARK_ = (new cljs.core.Box(false));
var new_tree = clojure.data.avl.delete_BANG_.call(null,self__.edit,self__.comp,self__.tree,k,found_QMARK_);
if(cljs.core.truth_(found_QMARK_.val)){
self__.tree = new_tree;

self__.cnt = (self__.cnt - (1));
} else {
}

return this$__$1;
});

clojure.data.avl.AVLTransientMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"edit","edit",-1302639,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.with_meta(new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.data.avl.AVLTransientMap.cljs$lang$type = true;

clojure.data.avl.AVLTransientMap.cljs$lang$ctorStr = "clojure.data.avl/AVLTransientMap";

clojure.data.avl.AVLTransientMap.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"clojure.data.avl/AVLTransientMap");
});

clojure.data.avl.__GT_AVLTransientMap = (function clojure$data$avl$__GT_AVLTransientMap(edit,comp,tree,cnt){
return (new clojure.data.avl.AVLTransientMap(edit,comp,tree,cnt));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {clojure.data.avl.Object}
 * @implements {cljs.core.IEditableCollection}
 * @implements {cljs.core.ISet}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
clojure.data.avl.AVLSet = (function (_meta,avl_map,_hash){
this._meta = _meta;
this.avl_map = avl_map;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 417730847;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
clojure.data.avl.AVLSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

clojure.data.avl.AVLSet.prototype.getTree = (function (){
var self__ = this;
var this$ = this;
return self__.avl_map.tree;
});

clojure.data.avl.AVLSet.prototype.nearest = (function (test,k){
var self__ = this;
var this$ = this;
var temp__4655__auto__ = clojure.data.avl.lookup_nearest.call(null,self__.avl_map.comp,self__.avl_map.getTree(),test,k);
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return node.getKey();
} else {
return null;
}
});

clojure.data.avl.AVLSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,v,null);
});

clojure.data.avl.AVLSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,v,not_found){
var self__ = this;
var this$__$1 = this;
var n = clojure.data.avl.lookup.call(null,self__.avl_map.comp,self__.avl_map.tree,v);
if(!((n == null))){
return n.key;
} else {
return not_found;
}
});

clojure.data.avl.AVLSet.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = clojure.data.avl.select.call(null,self__.avl_map.tree,i);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return n.getVal();
} else {
throw cljs.core.ex_info.call(null,"nth index out of bounds in AVL tree",cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.data.avl.AVLSet.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = clojure.data.avl.select.call(null,self__.avl_map.tree,i);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return n.getVal();
} else {
return not_found;
}
});

clojure.data.avl.AVLSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__._meta;
});

clojure.data.avl.AVLSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._count.call(null,self__.avl_map);
});

clojure.data.avl.AVLSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,self__.avl_map));
});

clojure.data.avl.AVLSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__19161__auto__ = self__._hash;
if(!((h__19161__auto__ == null))){
return h__19161__auto__;
} else {
var h__19161__auto____$1 = cljs.core.hash_unordered_coll.call(null,this$__$1);
self__._hash = h__19161__auto____$1;

return h__19161__auto____$1;
}
});

clojure.data.avl.AVLSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (cljs.core.set_QMARK_.call(null,that)) && ((cljs.core.count.call(null,this$__$1) === cljs.core.count.call(null,that))) && (cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p1__25702_SHARP_){
return cljs.core.contains_QMARK_.call(null,this$__$1,p1__25702_SHARP_);
});})(this$__$1))
,that));
});

clojure.data.avl.AVLSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clojure.data.avl.__GT_AVLTransientSet.call(null,cljs.core._as_transient.call(null,self__.avl_map));
});

clojure.data.avl.AVLSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLSet(self__._meta,cljs.core.empty.call(null,self__.avl_map),(0)));
});

clojure.data.avl.AVLSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLSet(self__._meta,cljs.core.dissoc.call(null,self__.avl_map,v),null));
});

clojure.data.avl.AVLSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.keys.call(null,self__.avl_map);
});

clojure.data.avl.AVLSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLSet(meta,self__.avl_map,self__._hash));
});

clojure.data.avl.AVLSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLSet(self__._meta,cljs.core.assoc.call(null,self__.avl_map,x,x),null));
});

clojure.data.avl.AVLSet.prototype.call = (function() {
var G__25781 = null;
var G__25781__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__25781__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__25781 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25781__2.call(this,self__,k);
case 3:
return G__25781__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25781.cljs$core$IFn$_invoke$arity$2 = G__25781__2;
G__25781.cljs$core$IFn$_invoke$arity$3 = G__25781__3;
return G__25781;
})()
;

clojure.data.avl.AVLSet.prototype.apply = (function (self__,args25703){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25703)));
});

clojure.data.avl.AVLSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

clojure.data.avl.AVLSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

clojure.data.avl.AVLSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return cljs.core.keys.call(null,cljs.core._sorted_seq.call(null,self__.avl_map,ascending_QMARK_));
});

clojure.data.avl.AVLSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return cljs.core.keys.call(null,cljs.core._sorted_seq_from.call(null,self__.avl_map,k,ascending_QMARK_));
});

clojure.data.avl.AVLSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return entry;
});

clojure.data.avl.AVLSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._comparator.call(null,self__.avl_map);
});

clojure.data.avl.AVLSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null),new cljs.core.Symbol(null,"avl-map","avl-map",1856103343,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.data.avl.AVLSet.cljs$lang$type = true;

clojure.data.avl.AVLSet.cljs$lang$ctorStr = "clojure.data.avl/AVLSet";

clojure.data.avl.AVLSet.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"clojure.data.avl/AVLSet");
});

clojure.data.avl.__GT_AVLSet = (function clojure$data$avl$__GT_AVLSet(_meta,avl_map,_hash){
return (new clojure.data.avl.AVLSet(_meta,avl_map,_hash));
});


/**
* @constructor
 * @implements {cljs.core.ITransientSet}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ILookup}
*/
clojure.data.avl.AVLTransientSet = (function (transient_avl_map){
this.transient_avl_map = transient_avl_map;
this.cljs$lang$protocol_mask$partition1$ = 136;
this.cljs$lang$protocol_mask$partition0$ = 259;
})
clojure.data.avl.AVLTransientSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.transient_avl_map = cljs.core._assoc_BANG_.call(null,self__.transient_avl_map,k,k);

return this$__$1;
});

clojure.data.avl.AVLTransientSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.transient_avl_map.edit == null)){
throw cljs.core.ex_info.call(null,"persistent! used twice",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (new clojure.data.avl.AVLSet(null,cljs.core._persistent_BANG_.call(null,self__.transient_avl_map),null));
}
});

clojure.data.avl.AVLTransientSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.transient_avl_map = cljs.core._dissoc_BANG_.call(null,self__.transient_avl_map,k);

return this$__$1;
});

clojure.data.avl.AVLTransientSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._count.call(null,self__.transient_avl_map);
});

clojure.data.avl.AVLTransientSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

clojure.data.avl.AVLTransientSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
if((cljs.core._lookup.call(null,self__.transient_avl_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});

clojure.data.avl.AVLTransientSet.prototype.call = (function() {
var G__25824 = null;
var G__25824__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,self__.transient_avl_map,k);
});
var G__25824__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,self__.transient_avl_map,k,not_found);
});
G__25824 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25824__2.call(this,self__,k);
case 3:
return G__25824__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25824.cljs$core$IFn$_invoke$arity$2 = G__25824__2;
G__25824.cljs$core$IFn$_invoke$arity$3 = G__25824__3;
return G__25824;
})()
;

clojure.data.avl.AVLTransientSet.prototype.apply = (function (self__,args25812){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25812)));
});

clojure.data.avl.AVLTransientSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,self__.transient_avl_map,k);
});

clojure.data.avl.AVLTransientSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,self__.transient_avl_map,k,not_found);
});

clojure.data.avl.AVLTransientSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"transient-avl-map","transient-avl-map",1489301191,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.data.avl.AVLTransientSet.cljs$lang$type = true;

clojure.data.avl.AVLTransientSet.cljs$lang$ctorStr = "clojure.data.avl/AVLTransientSet";

clojure.data.avl.AVLTransientSet.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"clojure.data.avl/AVLTransientSet");
});

clojure.data.avl.__GT_AVLTransientSet = (function clojure$data$avl$__GT_AVLTransientSet(transient_avl_map){
return (new clojure.data.avl.AVLTransientSet(transient_avl_map));
});

clojure.data.avl.empty_map = (new clojure.data.avl.AVLMap(cljs.core.compare,null,(0),null,(0)));
clojure.data.avl.empty_set = (new clojure.data.avl.AVLSet(null,clojure.data.avl.empty_map,(0)));
clojure.data.avl.AVLMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

clojure.data.avl.AVLMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
});

clojure.data.avl.AVLMap.prototype.cljs$core$IPrintWithWriter$ = true;

clojure.data.avl.AVLMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
var pr_pair = ((function (this$__$1){
return (function clojure$data$avl$pr_pair(keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(this$__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,this$__$1);
});

clojure.data.avl.AVLSet.prototype.cljs$core$IPrintWithWriter$ = true;

clojure.data.avl.AVLSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,this$__$1);
});
/**
 * keyval => key val
 *   Returns a new AVL map with supplied mappings.
 */
clojure.data.avl.sorted_map = (function clojure$data$avl$sorted_map(var_args){
var args__19791__auto__ = [];
var len__19784__auto___25852 = arguments.length;
var i__19785__auto___25853 = (0);
while(true){
if((i__19785__auto___25853 < len__19784__auto___25852)){
args__19791__auto__.push((arguments[i__19785__auto___25853]));

var G__25858 = (i__19785__auto___25853 + (1));
i__19785__auto___25853 = G__25858;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return clojure.data.avl.sorted_map.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

clojure.data.avl.sorted_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = cljs.core.transient$.call(null,clojure.data.avl.empty_map);
while(true){
if(in$){
var temp__4655__auto__ = cljs.core.next.call(null,in$);
if(temp__4655__auto__){
var nin = temp__4655__auto__;
var G__25868 = cljs.core.next.call(null,nin);
var G__25869 = cljs.core.assoc_BANG_.call(null,out,cljs.core.first.call(null,in$),cljs.core.first.call(null,nin));
in$ = G__25868;
out = G__25869;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("sorted-map: no value supplied for key: "),cljs.core.str(cljs.core.first.call(null,in$))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
});

clojure.data.avl.sorted_map.cljs$lang$maxFixedArity = (0);

clojure.data.avl.sorted_map.cljs$lang$applyTo = (function (seq25847){
return clojure.data.avl.sorted_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25847));
});
/**
 * keyval => key val
 *   Returns a new sorted map with supplied mappings, using the supplied
 *   comparator.
 */
clojure.data.avl.sorted_map_by = (function clojure$data$avl$sorted_map_by(var_args){
var args__19791__auto__ = [];
var len__19784__auto___25876 = arguments.length;
var i__19785__auto___25877 = (0);
while(true){
if((i__19785__auto___25877 < len__19784__auto___25876)){
args__19791__auto__.push((arguments[i__19785__auto___25877]));

var G__25880 = (i__19785__auto___25877 + (1));
i__19785__auto___25877 = G__25880;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return clojure.data.avl.sorted_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

clojure.data.avl.sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = (new clojure.data.avl.AVLTransientMap({},cljs.core.fn__GT_comparator.call(null,comparator),null,(0)));
while(true){
if(in$){
var temp__4655__auto__ = cljs.core.next.call(null,in$);
if(temp__4655__auto__){
var nin = temp__4655__auto__;
var G__25890 = cljs.core.next.call(null,nin);
var G__25891 = cljs.core.assoc_BANG_.call(null,out,cljs.core.first.call(null,in$),cljs.core.first.call(null,nin));
in$ = G__25890;
out = G__25891;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("sorted-map-by: no value supplied for key: "),cljs.core.str(cljs.core.first.call(null,in$))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
});

clojure.data.avl.sorted_map_by.cljs$lang$maxFixedArity = (1);

clojure.data.avl.sorted_map_by.cljs$lang$applyTo = (function (seq25872){
var G__25873 = cljs.core.first.call(null,seq25872);
var seq25872__$1 = cljs.core.next.call(null,seq25872);
return clojure.data.avl.sorted_map_by.cljs$core$IFn$_invoke$arity$variadic(G__25873,seq25872__$1);
});
/**
 * Returns a new sorted set with supplied keys.
 */
clojure.data.avl.sorted_set = (function clojure$data$avl$sorted_set(var_args){
var args__19791__auto__ = [];
var len__19784__auto___25908 = arguments.length;
var i__19785__auto___25909 = (0);
while(true){
if((i__19785__auto___25909 < len__19784__auto___25908)){
args__19791__auto__.push((arguments[i__19785__auto___25909]));

var G__25910 = (i__19785__auto___25909 + (1));
i__19785__auto___25909 = G__25910;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return clojure.data.avl.sorted_set.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

clojure.data.avl.sorted_set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,cljs.core.transient$.call(null,clojure.data.avl.empty_set),keys));
});

clojure.data.avl.sorted_set.cljs$lang$maxFixedArity = (0);

clojure.data.avl.sorted_set.cljs$lang$applyTo = (function (seq25893){
return clojure.data.avl.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25893));
});
/**
 * Returns a new sorted set with supplied keys, using the supplied comparator.
 */
clojure.data.avl.sorted_set_by = (function clojure$data$avl$sorted_set_by(var_args){
var args__19791__auto__ = [];
var len__19784__auto___25922 = arguments.length;
var i__19785__auto___25923 = (0);
while(true){
if((i__19785__auto___25923 < len__19784__auto___25922)){
args__19791__auto__.push((arguments[i__19785__auto___25923]));

var G__25924 = (i__19785__auto___25923 + (1));
i__19785__auto___25923 = G__25924;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return clojure.data.avl.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

clojure.data.avl.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keys){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,(new clojure.data.avl.AVLTransientSet(cljs.core._as_transient.call(null,clojure.data.avl.sorted_map_by.call(null,cljs.core.fn__GT_comparator.call(null,comparator))))),keys));
});

clojure.data.avl.sorted_set_by.cljs$lang$maxFixedArity = (1);

clojure.data.avl.sorted_set_by.cljs$lang$applyTo = (function (seq25911){
var G__25912 = cljs.core.first.call(null,seq25911);
var seq25911__$1 = cljs.core.next.call(null,seq25911);
return clojure.data.avl.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic(G__25912,seq25911__$1);
});
/**
 * Returns the rank of x in coll or -1 if not present.
 */
clojure.data.avl.rank_of = (function clojure$data$avl$rank_of(coll,x){
return clojure.data.avl.rank.call(null,cljs.core._comparator.call(null,coll),coll.getTree(),x);
});
/**
 * (alpha)
 * 
 *   Equivalent to, but more efficient than, (first (subseq* coll test x)),
 *   where subseq* is clojure.core/subseq for test in #{>, >=} and
 *   clojure.core/rsubseq for test in #{<, <=}.
 */
clojure.data.avl.nearest = (function clojure$data$avl$nearest(coll,test,x){
return coll.nearest(test,x);
});
/**
 * (alpha)
 * 
 *   Returns [left e? right], where left and right are collections of
 *   the same type as coll and containing, respectively, the keys below
 *   and above k in the ordering determined by coll's comparator, while
 *   e? is the entry at key k for maps, the stored copy of the key k for
 *   sets, nil if coll does not contain k.
 */
clojure.data.avl.split_key = (function clojure$data$avl$split_key(k,coll){
var comp = cljs.core._comparator.call(null,coll);
var vec__25947 = clojure.data.avl.split.call(null,comp,coll.getTree(),k);
var left = cljs.core.nth.call(null,vec__25947,(0),null);
var e_QMARK_ = cljs.core.nth.call(null,vec__25947,(1),null);
var right = cljs.core.nth.call(null,vec__25947,(2),null);
var keyfn = ((cljs.core.map_QMARK_.call(null,coll))?cljs.core.key:cljs.core.identity);
var wrap = ((cljs.core.map_QMARK_.call(null,coll))?((function (comp,vec__25947,left,e_QMARK_,right,keyfn){
return (function clojure$data$avl$split_key_$_wrap_map(tree,cnt){
return (new clojure.data.avl.AVLMap(comp,tree,cnt,null,(-1)));
});})(comp,vec__25947,left,e_QMARK_,right,keyfn))
:((function (comp,vec__25947,left,e_QMARK_,right,keyfn){
return (function clojure$data$avl$split_key_$_wrap_set(tree,cnt){
return (new clojure.data.avl.AVLSet(null,(new clojure.data.avl.AVLMap(comp,tree,cnt,null,(-1))),(-1)));
});})(comp,vec__25947,left,e_QMARK_,right,keyfn))
);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap.call(null,left,(cljs.core.truth_((function (){var or__18726__auto__ = e_QMARK_;
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return right;
}
})())?clojure.data.avl.rank_of.call(null,coll,keyfn.call(null,clojure.data.avl.nearest.call(null,coll,cljs.core._GT__EQ_,k))):cljs.core.count.call(null,coll))),(cljs.core.truth_((function (){var and__18714__auto__ = e_QMARK_;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.set_QMARK_.call(null,coll);
} else {
return and__18714__auto__;
}
})())?cljs.core.key.call(null,e_QMARK_):e_QMARK_),wrap.call(null,right,(cljs.core.truth_(right)?(cljs.core.count.call(null,coll) - clojure.data.avl.rank_of.call(null,coll,keyfn.call(null,clojure.data.avl.nearest.call(null,coll,cljs.core._GT_,k)))):(0)))], null);
});
/**
 * (alpha)
 * 
 *   Equivalent to, but more efficient than,
 *   [(into (empty coll) (take n coll))
 * (into (empty coll) (drop n coll))].
 */
clojure.data.avl.split_at = (function clojure$data$avl$split_at(n,coll){
if((n >= cljs.core.count.call(null,coll))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll,cljs.core.empty.call(null,coll)], null);
} else {
var k = cljs.core.nth.call(null,coll,n);
var k__$1 = ((cljs.core.map_QMARK_.call(null,coll))?cljs.core.key.call(null,k):k);
var vec__25998 = clojure.data.avl.split_key.call(null,k__$1,coll);
var l = cljs.core.nth.call(null,vec__25998,(0),null);
var e = cljs.core.nth.call(null,vec__25998,(1),null);
var r = cljs.core.nth.call(null,vec__25998,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,cljs.core.conj.call(null,r,e)], null);
}
});
/**
 * (alpha)
 * 
 *   Returns an AVL collection comprising the entries of coll between
 *   start and end (in the sense determined by coll's comparator) in
 *   logarithmic time. Whether the endpoints are themselves included in
 *   the returned collection depends on the provided tests; start-test
 *   must be either > or >=, end-test must be either < or <=.
 * 
 *   When passed a single test and limit, subrange infers the other end
 *   of the range from the test: > / >= mean to include items up to the
 *   end of coll, < / <= mean to include items taken from the beginning
 *   of coll.
 * 
 *   (subrange >= start <= end) is equivalent to, but more efficient
 *   than, (into (empty coll) (subseq coll >= start <= end).
 */
clojure.data.avl.subrange = (function clojure$data$avl$subrange(var_args){
var args26008 = [];
var len__19784__auto___26030 = arguments.length;
var i__19785__auto___26031 = (0);
while(true){
if((i__19785__auto___26031 < len__19784__auto___26030)){
args26008.push((arguments[i__19785__auto___26031]));

var G__26032 = (i__19785__auto___26031 + (1));
i__19785__auto___26031 = G__26032;
continue;
} else {
}
break;
}

var G__26010 = args26008.length;
switch (G__26010) {
case 3:
return clojure.data.avl.subrange.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.data.avl.subrange.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26008.length)].join('')));

}
});

clojure.data.avl.subrange.cljs$core$IFn$_invoke$arity$3 = (function (coll,test,limit){
if((cljs.core.count.call(null,coll) === (0))){
return coll;
} else {
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test))){
return clojure.data.avl.subrange.call(null,coll,test,limit,cljs.core._LT__EQ_,clojure.data.avl.select.call(null,coll.getTree(),(cljs.core.count.call(null,coll) - (1))).getKey());
} else {
return clojure.data.avl.subrange.call(null,coll,cljs.core._GT__EQ_,clojure.data.avl.select.call(null,coll.getTree(),(0)).getKey(),test,limit);

}
}
});

clojure.data.avl.subrange.cljs$core$IFn$_invoke$arity$5 = (function (coll,start_test,start,end_test,end){
if((cljs.core.count.call(null,coll) === (0))){
return coll;
} else {
var comp = cljs.core._comparator.call(null,coll);
if((comp.call(null,start,end) > (0))){
throw cljs.core.ex_info.call(null,"start greater than end in subrange",cljs.core.PersistentArrayMap.EMPTY);
} else {
var keyfn = ((cljs.core.map_QMARK_.call(null,coll))?cljs.core.key:cljs.core.identity);
var l = clojure.data.avl.nearest.call(null,coll,start_test,start);
var h = clojure.data.avl.nearest.call(null,coll,end_test,end);
if(cljs.core.truth_((function (){var and__18714__auto__ = l;
if(cljs.core.truth_(and__18714__auto__)){
return h;
} else {
return and__18714__auto__;
}
})())){
var tree = clojure.data.avl.range.call(null,comp,coll.getTree(),keyfn.call(null,l),keyfn.call(null,h));
var cnt = ((clojure.data.avl.rank_of.call(null,coll,keyfn.call(null,h)) - clojure.data.avl.rank_of.call(null,coll,keyfn.call(null,l))) + (1));
var m = (new clojure.data.avl.AVLMap(comp,tree,cnt,null,(-1)));
if(cljs.core.map_QMARK_.call(null,coll)){
return m;
} else {
return (new clojure.data.avl.AVLSet(null,m,(-1)));
}
} else {
return cljs.core.empty.call(null,coll);
}
}
}
});

clojure.data.avl.subrange.cljs$lang$maxFixedArity = 5;

//# sourceMappingURL=avl.js.map