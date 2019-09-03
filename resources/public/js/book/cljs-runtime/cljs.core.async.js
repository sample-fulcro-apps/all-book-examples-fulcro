goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__52194 = arguments.length;
switch (G__52194) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52195 = (function (f,blockable,meta52196){
this.f = f;
this.blockable = blockable;
this.meta52196 = meta52196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52197,meta52196__$1){
var self__ = this;
var _52197__$1 = this;
return (new cljs.core.async.t_cljs$core$async52195(self__.f,self__.blockable,meta52196__$1));
});

cljs.core.async.t_cljs$core$async52195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52197){
var self__ = this;
var _52197__$1 = this;
return self__.meta52196;
});

cljs.core.async.t_cljs$core$async52195.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52195.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async52195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async52195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta52196","meta52196",-1336224708,null)], null);
});

cljs.core.async.t_cljs$core$async52195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52195";

cljs.core.async.t_cljs$core$async52195.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52195");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52195.
 */
cljs.core.async.__GT_t_cljs$core$async52195 = (function cljs$core$async$__GT_t_cljs$core$async52195(f__$1,blockable__$1,meta52196){
return (new cljs.core.async.t_cljs$core$async52195(f__$1,blockable__$1,meta52196));
});

}

return (new cljs.core.async.t_cljs$core$async52195(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__52200 = arguments.length;
switch (G__52200) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__52202 = arguments.length;
switch (G__52202) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__52206 = arguments.length;
switch (G__52206) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_53859 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53859) : fn1.call(null,val_53859));
} else {
cljs.core.async.impl.dispatch.run(((function (val_53859,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53859) : fn1.call(null,val_53859));
});})(val_53859,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__52208 = arguments.length;
switch (G__52208) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___53868 = n;
var x_53869 = (0);
while(true){
if((x_53869 < n__4607__auto___53868)){
(a[x_53869] = x_53869);

var G__53870 = (x_53869 + (1));
x_53869 = G__53870;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52209 = (function (flag,meta52210){
this.flag = flag;
this.meta52210 = meta52210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_52211,meta52210__$1){
var self__ = this;
var _52211__$1 = this;
return (new cljs.core.async.t_cljs$core$async52209(self__.flag,meta52210__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async52209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_52211){
var self__ = this;
var _52211__$1 = this;
return self__.meta52210;
});})(flag))
;

cljs.core.async.t_cljs$core$async52209.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async52209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52209.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52210","meta52210",766894312,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async52209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52209";

cljs.core.async.t_cljs$core$async52209.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52209");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52209.
 */
cljs.core.async.__GT_t_cljs$core$async52209 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52209(flag__$1,meta52210){
return (new cljs.core.async.t_cljs$core$async52209(flag__$1,meta52210));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async52209(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52212 = (function (flag,cb,meta52213){
this.flag = flag;
this.cb = cb;
this.meta52213 = meta52213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52214,meta52213__$1){
var self__ = this;
var _52214__$1 = this;
return (new cljs.core.async.t_cljs$core$async52212(self__.flag,self__.cb,meta52213__$1));
});

cljs.core.async.t_cljs$core$async52212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52214){
var self__ = this;
var _52214__$1 = this;
return self__.meta52213;
});

cljs.core.async.t_cljs$core$async52212.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async52212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async52212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52213","meta52213",-1508618264,null)], null);
});

cljs.core.async.t_cljs$core$async52212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52212";

cljs.core.async.t_cljs$core$async52212.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52212");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52212.
 */
cljs.core.async.__GT_t_cljs$core$async52212 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52212(flag__$1,cb__$1,meta52213){
return (new cljs.core.async.t_cljs$core$async52212(flag__$1,cb__$1,meta52213));
});

}

return (new cljs.core.async.t_cljs$core$async52212(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52215_SHARP_){
var G__52217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52215_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52217) : fret.call(null,G__52217));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52216_SHARP_){
var G__52218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52216_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52218) : fret.call(null,G__52218));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53897 = (i + (1));
i = G__53897;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53902 = arguments.length;
var i__4731__auto___53904 = (0);
while(true){
if((i__4731__auto___53904 < len__4730__auto___53902)){
args__4736__auto__.push((arguments[i__4731__auto___53904]));

var G__53906 = (i__4731__auto___53904 + (1));
i__4731__auto___53904 = G__53906;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52221){
var map__52222 = p__52221;
var map__52222__$1 = (((((!((map__52222 == null))))?(((((map__52222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52222):map__52222);
var opts = map__52222__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52219){
var G__52220 = cljs.core.first(seq52219);
var seq52219__$1 = cljs.core.next(seq52219);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52220,seq52219__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__52225 = arguments.length;
switch (G__52225) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__52131__auto___53915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___53915){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___53915){
return (function (state_52249){
var state_val_52250 = (state_52249[(1)]);
if((state_val_52250 === (7))){
var inst_52245 = (state_52249[(2)]);
var state_52249__$1 = state_52249;
var statearr_52251_53916 = state_52249__$1;
(statearr_52251_53916[(2)] = inst_52245);

(statearr_52251_53916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52250 === (1))){
var state_52249__$1 = state_52249;
var statearr_52252_53917 = state_52249__$1;
(statearr_52252_53917[(2)] = null);

(statearr_52252_53917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52250 === (4))){
var inst_52228 = (state_52249[(7)]);
var inst_52228__$1 = (state_52249[(2)]);
var inst_52229 = (inst_52228__$1 == null);
var state_52249__$1 = (function (){var statearr_52253 = state_52249;
(statearr_52253[(7)] = inst_52228__$1);

return statearr_52253;
})();
if(cljs.core.truth_(inst_52229)){
var statearr_52254_53920 = state_52249__$1;
(statearr_52254_53920[(1)] = (5));

} else {
var statearr_52255_53921 = state_52249__$1;
(statearr_52255_53921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52250 === (13))){
var state_52249__$1 = state_52249;
var statearr_52256_53922 = state_52249__$1;
(statearr_52256_53922[(2)] = null);

(statearr_52256_53922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52250 === (6))){
var inst_52228 = (state_52249[(7)]);
var state_52249__$1 = state_52249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52249__$1,(11),to,inst_52228);
} else {
if((state_val_52250 === (3))){
var inst_52247 = (state_52249[(2)]);
var state_52249__$1 = state_52249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52249__$1,inst_52247);
} else {
if((state_val_52250 === (12))){
var state_52249__$1 = state_52249;
var statearr_52257_53949 = state_52249__$1;
(statearr_52257_53949[(2)] = null);

(statearr_52257_53949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52250 === (2))){
var state_52249__$1 = state_52249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52249__$1,(4),from);
} else {
if((state_val_52250 === (11))){
var inst_52238 = (state_52249[(2)]);
var state_52249__$1 = state_52249;
if(cljs.core.truth_(inst_52238)){
var statearr_52258_53951 = state_52249__$1;
(statearr_52258_53951[(1)] = (12));

} else {
var statearr_52259_53952 = state_52249__$1;
(statearr_52259_53952[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52250 === (9))){
var state_52249__$1 = state_52249;
var statearr_52260_53954 = state_52249__$1;
(statearr_52260_53954[(2)] = null);

(statearr_52260_53954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52250 === (5))){
var state_52249__$1 = state_52249;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52261_53955 = state_52249__$1;
(statearr_52261_53955[(1)] = (8));

} else {
var statearr_52262_53956 = state_52249__$1;
(statearr_52262_53956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52250 === (14))){
var inst_52243 = (state_52249[(2)]);
var state_52249__$1 = state_52249;
var statearr_52263_53957 = state_52249__$1;
(statearr_52263_53957[(2)] = inst_52243);

(statearr_52263_53957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52250 === (10))){
var inst_52235 = (state_52249[(2)]);
var state_52249__$1 = state_52249;
var statearr_52264_53960 = state_52249__$1;
(statearr_52264_53960[(2)] = inst_52235);

(statearr_52264_53960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52250 === (8))){
var inst_52232 = cljs.core.async.close_BANG_(to);
var state_52249__$1 = state_52249;
var statearr_52265_53961 = state_52249__$1;
(statearr_52265_53961[(2)] = inst_52232);

(statearr_52265_53961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___53915))
;
return ((function (switch__52035__auto__,c__52131__auto___53915){
return (function() {
var cljs$core$async$state_machine__52036__auto__ = null;
var cljs$core$async$state_machine__52036__auto____0 = (function (){
var statearr_52266 = [null,null,null,null,null,null,null,null];
(statearr_52266[(0)] = cljs$core$async$state_machine__52036__auto__);

(statearr_52266[(1)] = (1));

return statearr_52266;
});
var cljs$core$async$state_machine__52036__auto____1 = (function (state_52249){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_52249);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e52267){if((e52267 instanceof Object)){
var ex__52039__auto__ = e52267;
var statearr_52268_53963 = state_52249;
(statearr_52268_53963[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53966 = state_52249;
state_52249 = G__53966;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$state_machine__52036__auto__ = function(state_52249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52036__auto____1.call(this,state_52249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52036__auto____0;
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52036__auto____1;
return cljs$core$async$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___53915))
})();
var state__52133__auto__ = (function (){var statearr_52269 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_52269[(6)] = c__52131__auto___53915);

return statearr_52269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___53915))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__52270){
var vec__52271 = p__52270;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52271,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52271,(1),null);
var job = vec__52271;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__52131__auto___53972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___53972,res,vec__52271,v,p,job,jobs,results){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___53972,res,vec__52271,v,p,job,jobs,results){
return (function (state_52278){
var state_val_52279 = (state_52278[(1)]);
if((state_val_52279 === (1))){
var state_52278__$1 = state_52278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52278__$1,(2),res,v);
} else {
if((state_val_52279 === (2))){
var inst_52275 = (state_52278[(2)]);
var inst_52276 = cljs.core.async.close_BANG_(res);
var state_52278__$1 = (function (){var statearr_52280 = state_52278;
(statearr_52280[(7)] = inst_52275);

return statearr_52280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52278__$1,inst_52276);
} else {
return null;
}
}
});})(c__52131__auto___53972,res,vec__52271,v,p,job,jobs,results))
;
return ((function (switch__52035__auto__,c__52131__auto___53972,res,vec__52271,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0 = (function (){
var statearr_52281 = [null,null,null,null,null,null,null,null];
(statearr_52281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__);

(statearr_52281[(1)] = (1));

return statearr_52281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1 = (function (state_52278){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_52278);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e52282){if((e52282 instanceof Object)){
var ex__52039__auto__ = e52282;
var statearr_52283_53979 = state_52278;
(statearr_52283_53979[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52282;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53982 = state_52278;
state_52278 = G__53982;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__ = function(state_52278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1.call(this,state_52278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___53972,res,vec__52271,v,p,job,jobs,results))
})();
var state__52133__auto__ = (function (){var statearr_52284 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_52284[(6)] = c__52131__auto___53972);

return statearr_52284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___53972,res,vec__52271,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__52285){
var vec__52286 = p__52285;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52286,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52286,(1),null);
var job = vec__52286;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___53990 = n;
var __53991 = (0);
while(true){
if((__53991 < n__4607__auto___53990)){
var G__52289_53992 = type;
var G__52289_53993__$1 = (((G__52289_53992 instanceof cljs.core.Keyword))?G__52289_53992.fqn:null);
switch (G__52289_53993__$1) {
case "compute":
var c__52131__auto___53995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53991,c__52131__auto___53995,G__52289_53992,G__52289_53993__$1,n__4607__auto___53990,jobs,results,process,async){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (__53991,c__52131__auto___53995,G__52289_53992,G__52289_53993__$1,n__4607__auto___53990,jobs,results,process,async){
return (function (state_52302){
var state_val_52303 = (state_52302[(1)]);
if((state_val_52303 === (1))){
var state_52302__$1 = state_52302;
var statearr_52304_53996 = state_52302__$1;
(statearr_52304_53996[(2)] = null);

(statearr_52304_53996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (2))){
var state_52302__$1 = state_52302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52302__$1,(4),jobs);
} else {
if((state_val_52303 === (3))){
var inst_52300 = (state_52302[(2)]);
var state_52302__$1 = state_52302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52302__$1,inst_52300);
} else {
if((state_val_52303 === (4))){
var inst_52292 = (state_52302[(2)]);
var inst_52293 = process(inst_52292);
var state_52302__$1 = state_52302;
if(cljs.core.truth_(inst_52293)){
var statearr_52305_53998 = state_52302__$1;
(statearr_52305_53998[(1)] = (5));

} else {
var statearr_52306_53999 = state_52302__$1;
(statearr_52306_53999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (5))){
var state_52302__$1 = state_52302;
var statearr_52307_54001 = state_52302__$1;
(statearr_52307_54001[(2)] = null);

(statearr_52307_54001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (6))){
var state_52302__$1 = state_52302;
var statearr_52308_54002 = state_52302__$1;
(statearr_52308_54002[(2)] = null);

(statearr_52308_54002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52303 === (7))){
var inst_52298 = (state_52302[(2)]);
var state_52302__$1 = state_52302;
var statearr_52309_54003 = state_52302__$1;
(statearr_52309_54003[(2)] = inst_52298);

(statearr_52309_54003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53991,c__52131__auto___53995,G__52289_53992,G__52289_53993__$1,n__4607__auto___53990,jobs,results,process,async))
;
return ((function (__53991,switch__52035__auto__,c__52131__auto___53995,G__52289_53992,G__52289_53993__$1,n__4607__auto___53990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0 = (function (){
var statearr_52310 = [null,null,null,null,null,null,null];
(statearr_52310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__);

(statearr_52310[(1)] = (1));

return statearr_52310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1 = (function (state_52302){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_52302);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e52311){if((e52311 instanceof Object)){
var ex__52039__auto__ = e52311;
var statearr_52312_54005 = state_52302;
(statearr_52312_54005[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52311;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54006 = state_52302;
state_52302 = G__54006;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__ = function(state_52302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1.call(this,state_52302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__;
})()
;})(__53991,switch__52035__auto__,c__52131__auto___53995,G__52289_53992,G__52289_53993__$1,n__4607__auto___53990,jobs,results,process,async))
})();
var state__52133__auto__ = (function (){var statearr_52313 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_52313[(6)] = c__52131__auto___53995);

return statearr_52313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(__53991,c__52131__auto___53995,G__52289_53992,G__52289_53993__$1,n__4607__auto___53990,jobs,results,process,async))
);


break;
case "async":
var c__52131__auto___54007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53991,c__52131__auto___54007,G__52289_53992,G__52289_53993__$1,n__4607__auto___53990,jobs,results,process,async){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (__53991,c__52131__auto___54007,G__52289_53992,G__52289_53993__$1,n__4607__auto___53990,jobs,results,process,async){
return (function (state_52326){
var state_val_52327 = (state_52326[(1)]);
if((state_val_52327 === (1))){
var state_52326__$1 = state_52326;
var statearr_52328_54009 = state_52326__$1;
(statearr_52328_54009[(2)] = null);

(statearr_52328_54009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52327 === (2))){
var state_52326__$1 = state_52326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52326__$1,(4),jobs);
} else {
if((state_val_52327 === (3))){
var inst_52324 = (state_52326[(2)]);
var state_52326__$1 = state_52326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52326__$1,inst_52324);
} else {
if((state_val_52327 === (4))){
var inst_52316 = (state_52326[(2)]);
var inst_52317 = async(inst_52316);
var state_52326__$1 = state_52326;
if(cljs.core.truth_(inst_52317)){
var statearr_52329_54013 = state_52326__$1;
(statearr_52329_54013[(1)] = (5));

} else {
var statearr_52330_54014 = state_52326__$1;
(statearr_52330_54014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52327 === (5))){
var state_52326__$1 = state_52326;
var statearr_52331_54015 = state_52326__$1;
(statearr_52331_54015[(2)] = null);

(statearr_52331_54015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52327 === (6))){
var state_52326__$1 = state_52326;
var statearr_52332_54017 = state_52326__$1;
(statearr_52332_54017[(2)] = null);

(statearr_52332_54017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52327 === (7))){
var inst_52322 = (state_52326[(2)]);
var state_52326__$1 = state_52326;
var statearr_52333_54018 = state_52326__$1;
(statearr_52333_54018[(2)] = inst_52322);

(statearr_52333_54018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53991,c__52131__auto___54007,G__52289_53992,G__52289_53993__$1,n__4607__auto___53990,jobs,results,process,async))
;
return ((function (__53991,switch__52035__auto__,c__52131__auto___54007,G__52289_53992,G__52289_53993__$1,n__4607__auto___53990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0 = (function (){
var statearr_52334 = [null,null,null,null,null,null,null];
(statearr_52334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__);

(statearr_52334[(1)] = (1));

return statearr_52334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1 = (function (state_52326){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_52326);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e52335){if((e52335 instanceof Object)){
var ex__52039__auto__ = e52335;
var statearr_52336_54020 = state_52326;
(statearr_52336_54020[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52335;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54021 = state_52326;
state_52326 = G__54021;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__ = function(state_52326){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1.call(this,state_52326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__;
})()
;})(__53991,switch__52035__auto__,c__52131__auto___54007,G__52289_53992,G__52289_53993__$1,n__4607__auto___53990,jobs,results,process,async))
})();
var state__52133__auto__ = (function (){var statearr_52337 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_52337[(6)] = c__52131__auto___54007);

return statearr_52337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(__53991,c__52131__auto___54007,G__52289_53992,G__52289_53993__$1,n__4607__auto___53990,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52289_53993__$1)].join('')));

}

var G__54022 = (__53991 + (1));
__53991 = G__54022;
continue;
} else {
}
break;
}

var c__52131__auto___54023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___54023,jobs,results,process,async){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___54023,jobs,results,process,async){
return (function (state_52359){
var state_val_52360 = (state_52359[(1)]);
if((state_val_52360 === (7))){
var inst_52355 = (state_52359[(2)]);
var state_52359__$1 = state_52359;
var statearr_52361_54028 = state_52359__$1;
(statearr_52361_54028[(2)] = inst_52355);

(statearr_52361_54028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52360 === (1))){
var state_52359__$1 = state_52359;
var statearr_52362_54029 = state_52359__$1;
(statearr_52362_54029[(2)] = null);

(statearr_52362_54029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52360 === (4))){
var inst_52340 = (state_52359[(7)]);
var inst_52340__$1 = (state_52359[(2)]);
var inst_52341 = (inst_52340__$1 == null);
var state_52359__$1 = (function (){var statearr_52363 = state_52359;
(statearr_52363[(7)] = inst_52340__$1);

return statearr_52363;
})();
if(cljs.core.truth_(inst_52341)){
var statearr_52364_54035 = state_52359__$1;
(statearr_52364_54035[(1)] = (5));

} else {
var statearr_52365_54040 = state_52359__$1;
(statearr_52365_54040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52360 === (6))){
var inst_52345 = (state_52359[(8)]);
var inst_52340 = (state_52359[(7)]);
var inst_52345__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_52346 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52347 = [inst_52340,inst_52345__$1];
var inst_52348 = (new cljs.core.PersistentVector(null,2,(5),inst_52346,inst_52347,null));
var state_52359__$1 = (function (){var statearr_52366 = state_52359;
(statearr_52366[(8)] = inst_52345__$1);

return statearr_52366;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52359__$1,(8),jobs,inst_52348);
} else {
if((state_val_52360 === (3))){
var inst_52357 = (state_52359[(2)]);
var state_52359__$1 = state_52359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52359__$1,inst_52357);
} else {
if((state_val_52360 === (2))){
var state_52359__$1 = state_52359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52359__$1,(4),from);
} else {
if((state_val_52360 === (9))){
var inst_52352 = (state_52359[(2)]);
var state_52359__$1 = (function (){var statearr_52367 = state_52359;
(statearr_52367[(9)] = inst_52352);

return statearr_52367;
})();
var statearr_52368_54053 = state_52359__$1;
(statearr_52368_54053[(2)] = null);

(statearr_52368_54053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52360 === (5))){
var inst_52343 = cljs.core.async.close_BANG_(jobs);
var state_52359__$1 = state_52359;
var statearr_52369_54063 = state_52359__$1;
(statearr_52369_54063[(2)] = inst_52343);

(statearr_52369_54063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52360 === (8))){
var inst_52345 = (state_52359[(8)]);
var inst_52350 = (state_52359[(2)]);
var state_52359__$1 = (function (){var statearr_52370 = state_52359;
(statearr_52370[(10)] = inst_52350);

return statearr_52370;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52359__$1,(9),results,inst_52345);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___54023,jobs,results,process,async))
;
return ((function (switch__52035__auto__,c__52131__auto___54023,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0 = (function (){
var statearr_52371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__);

(statearr_52371[(1)] = (1));

return statearr_52371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1 = (function (state_52359){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_52359);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e52372){if((e52372 instanceof Object)){
var ex__52039__auto__ = e52372;
var statearr_52373_54069 = state_52359;
(statearr_52373_54069[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54071 = state_52359;
state_52359 = G__54071;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__ = function(state_52359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1.call(this,state_52359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___54023,jobs,results,process,async))
})();
var state__52133__auto__ = (function (){var statearr_52374 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_52374[(6)] = c__52131__auto___54023);

return statearr_52374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___54023,jobs,results,process,async))
);


var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,jobs,results,process,async){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,jobs,results,process,async){
return (function (state_52412){
var state_val_52413 = (state_52412[(1)]);
if((state_val_52413 === (7))){
var inst_52408 = (state_52412[(2)]);
var state_52412__$1 = state_52412;
var statearr_52414_54082 = state_52412__$1;
(statearr_52414_54082[(2)] = inst_52408);

(statearr_52414_54082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (20))){
var state_52412__$1 = state_52412;
var statearr_52415_54083 = state_52412__$1;
(statearr_52415_54083[(2)] = null);

(statearr_52415_54083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (1))){
var state_52412__$1 = state_52412;
var statearr_52416_54084 = state_52412__$1;
(statearr_52416_54084[(2)] = null);

(statearr_52416_54084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (4))){
var inst_52377 = (state_52412[(7)]);
var inst_52377__$1 = (state_52412[(2)]);
var inst_52378 = (inst_52377__$1 == null);
var state_52412__$1 = (function (){var statearr_52417 = state_52412;
(statearr_52417[(7)] = inst_52377__$1);

return statearr_52417;
})();
if(cljs.core.truth_(inst_52378)){
var statearr_52418_54086 = state_52412__$1;
(statearr_52418_54086[(1)] = (5));

} else {
var statearr_52419_54087 = state_52412__$1;
(statearr_52419_54087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (15))){
var inst_52390 = (state_52412[(8)]);
var state_52412__$1 = state_52412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52412__$1,(18),to,inst_52390);
} else {
if((state_val_52413 === (21))){
var inst_52403 = (state_52412[(2)]);
var state_52412__$1 = state_52412;
var statearr_52420_54088 = state_52412__$1;
(statearr_52420_54088[(2)] = inst_52403);

(statearr_52420_54088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (13))){
var inst_52405 = (state_52412[(2)]);
var state_52412__$1 = (function (){var statearr_52421 = state_52412;
(statearr_52421[(9)] = inst_52405);

return statearr_52421;
})();
var statearr_52422_54094 = state_52412__$1;
(statearr_52422_54094[(2)] = null);

(statearr_52422_54094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (6))){
var inst_52377 = (state_52412[(7)]);
var state_52412__$1 = state_52412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52412__$1,(11),inst_52377);
} else {
if((state_val_52413 === (17))){
var inst_52398 = (state_52412[(2)]);
var state_52412__$1 = state_52412;
if(cljs.core.truth_(inst_52398)){
var statearr_52423_54096 = state_52412__$1;
(statearr_52423_54096[(1)] = (19));

} else {
var statearr_52424_54097 = state_52412__$1;
(statearr_52424_54097[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (3))){
var inst_52410 = (state_52412[(2)]);
var state_52412__$1 = state_52412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52412__$1,inst_52410);
} else {
if((state_val_52413 === (12))){
var inst_52387 = (state_52412[(10)]);
var state_52412__$1 = state_52412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52412__$1,(14),inst_52387);
} else {
if((state_val_52413 === (2))){
var state_52412__$1 = state_52412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52412__$1,(4),results);
} else {
if((state_val_52413 === (19))){
var state_52412__$1 = state_52412;
var statearr_52425_54100 = state_52412__$1;
(statearr_52425_54100[(2)] = null);

(statearr_52425_54100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (11))){
var inst_52387 = (state_52412[(2)]);
var state_52412__$1 = (function (){var statearr_52426 = state_52412;
(statearr_52426[(10)] = inst_52387);

return statearr_52426;
})();
var statearr_52427_54164 = state_52412__$1;
(statearr_52427_54164[(2)] = null);

(statearr_52427_54164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (9))){
var state_52412__$1 = state_52412;
var statearr_52428_54165 = state_52412__$1;
(statearr_52428_54165[(2)] = null);

(statearr_52428_54165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (5))){
var state_52412__$1 = state_52412;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52429_54167 = state_52412__$1;
(statearr_52429_54167[(1)] = (8));

} else {
var statearr_52430_54168 = state_52412__$1;
(statearr_52430_54168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (14))){
var inst_52390 = (state_52412[(8)]);
var inst_52392 = (state_52412[(11)]);
var inst_52390__$1 = (state_52412[(2)]);
var inst_52391 = (inst_52390__$1 == null);
var inst_52392__$1 = cljs.core.not(inst_52391);
var state_52412__$1 = (function (){var statearr_52431 = state_52412;
(statearr_52431[(8)] = inst_52390__$1);

(statearr_52431[(11)] = inst_52392__$1);

return statearr_52431;
})();
if(inst_52392__$1){
var statearr_52432_54169 = state_52412__$1;
(statearr_52432_54169[(1)] = (15));

} else {
var statearr_52433_54171 = state_52412__$1;
(statearr_52433_54171[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (16))){
var inst_52392 = (state_52412[(11)]);
var state_52412__$1 = state_52412;
var statearr_52434_54173 = state_52412__$1;
(statearr_52434_54173[(2)] = inst_52392);

(statearr_52434_54173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (10))){
var inst_52384 = (state_52412[(2)]);
var state_52412__$1 = state_52412;
var statearr_52435_54174 = state_52412__$1;
(statearr_52435_54174[(2)] = inst_52384);

(statearr_52435_54174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (18))){
var inst_52395 = (state_52412[(2)]);
var state_52412__$1 = state_52412;
var statearr_52436_54175 = state_52412__$1;
(statearr_52436_54175[(2)] = inst_52395);

(statearr_52436_54175[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52413 === (8))){
var inst_52381 = cljs.core.async.close_BANG_(to);
var state_52412__$1 = state_52412;
var statearr_52437_54176 = state_52412__$1;
(statearr_52437_54176[(2)] = inst_52381);

(statearr_52437_54176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto__,jobs,results,process,async))
;
return ((function (switch__52035__auto__,c__52131__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0 = (function (){
var statearr_52438 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__);

(statearr_52438[(1)] = (1));

return statearr_52438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1 = (function (state_52412){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_52412);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e52439){if((e52439 instanceof Object)){
var ex__52039__auto__ = e52439;
var statearr_52440_54177 = state_52412;
(statearr_52440_54177[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52439;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54178 = state_52412;
state_52412 = G__54178;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__ = function(state_52412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1.call(this,state_52412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__52036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,jobs,results,process,async))
})();
var state__52133__auto__ = (function (){var statearr_52441 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_52441[(6)] = c__52131__auto__);

return statearr_52441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,jobs,results,process,async))
);

return c__52131__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__52443 = arguments.length;
switch (G__52443) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__52445 = arguments.length;
switch (G__52445) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__52447 = arguments.length;
switch (G__52447) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__52131__auto___54196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___54196,tc,fc){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___54196,tc,fc){
return (function (state_52473){
var state_val_52474 = (state_52473[(1)]);
if((state_val_52474 === (7))){
var inst_52469 = (state_52473[(2)]);
var state_52473__$1 = state_52473;
var statearr_52475_54199 = state_52473__$1;
(statearr_52475_54199[(2)] = inst_52469);

(statearr_52475_54199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52474 === (1))){
var state_52473__$1 = state_52473;
var statearr_52476_54200 = state_52473__$1;
(statearr_52476_54200[(2)] = null);

(statearr_52476_54200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52474 === (4))){
var inst_52450 = (state_52473[(7)]);
var inst_52450__$1 = (state_52473[(2)]);
var inst_52451 = (inst_52450__$1 == null);
var state_52473__$1 = (function (){var statearr_52477 = state_52473;
(statearr_52477[(7)] = inst_52450__$1);

return statearr_52477;
})();
if(cljs.core.truth_(inst_52451)){
var statearr_52478_54201 = state_52473__$1;
(statearr_52478_54201[(1)] = (5));

} else {
var statearr_52479_54202 = state_52473__$1;
(statearr_52479_54202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52474 === (13))){
var state_52473__$1 = state_52473;
var statearr_52480_54203 = state_52473__$1;
(statearr_52480_54203[(2)] = null);

(statearr_52480_54203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52474 === (6))){
var inst_52450 = (state_52473[(7)]);
var inst_52456 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52450) : p.call(null,inst_52450));
var state_52473__$1 = state_52473;
if(cljs.core.truth_(inst_52456)){
var statearr_52481_54206 = state_52473__$1;
(statearr_52481_54206[(1)] = (9));

} else {
var statearr_52482_54207 = state_52473__$1;
(statearr_52482_54207[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52474 === (3))){
var inst_52471 = (state_52473[(2)]);
var state_52473__$1 = state_52473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52473__$1,inst_52471);
} else {
if((state_val_52474 === (12))){
var state_52473__$1 = state_52473;
var statearr_52483_54208 = state_52473__$1;
(statearr_52483_54208[(2)] = null);

(statearr_52483_54208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52474 === (2))){
var state_52473__$1 = state_52473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52473__$1,(4),ch);
} else {
if((state_val_52474 === (11))){
var inst_52450 = (state_52473[(7)]);
var inst_52460 = (state_52473[(2)]);
var state_52473__$1 = state_52473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52473__$1,(8),inst_52460,inst_52450);
} else {
if((state_val_52474 === (9))){
var state_52473__$1 = state_52473;
var statearr_52484_54211 = state_52473__$1;
(statearr_52484_54211[(2)] = tc);

(statearr_52484_54211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52474 === (5))){
var inst_52453 = cljs.core.async.close_BANG_(tc);
var inst_52454 = cljs.core.async.close_BANG_(fc);
var state_52473__$1 = (function (){var statearr_52485 = state_52473;
(statearr_52485[(8)] = inst_52453);

return statearr_52485;
})();
var statearr_52486_54212 = state_52473__$1;
(statearr_52486_54212[(2)] = inst_52454);

(statearr_52486_54212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52474 === (14))){
var inst_52467 = (state_52473[(2)]);
var state_52473__$1 = state_52473;
var statearr_52487_54225 = state_52473__$1;
(statearr_52487_54225[(2)] = inst_52467);

(statearr_52487_54225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52474 === (10))){
var state_52473__$1 = state_52473;
var statearr_52488_54226 = state_52473__$1;
(statearr_52488_54226[(2)] = fc);

(statearr_52488_54226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52474 === (8))){
var inst_52462 = (state_52473[(2)]);
var state_52473__$1 = state_52473;
if(cljs.core.truth_(inst_52462)){
var statearr_52489_54230 = state_52473__$1;
(statearr_52489_54230[(1)] = (12));

} else {
var statearr_52490_54232 = state_52473__$1;
(statearr_52490_54232[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___54196,tc,fc))
;
return ((function (switch__52035__auto__,c__52131__auto___54196,tc,fc){
return (function() {
var cljs$core$async$state_machine__52036__auto__ = null;
var cljs$core$async$state_machine__52036__auto____0 = (function (){
var statearr_52491 = [null,null,null,null,null,null,null,null,null];
(statearr_52491[(0)] = cljs$core$async$state_machine__52036__auto__);

(statearr_52491[(1)] = (1));

return statearr_52491;
});
var cljs$core$async$state_machine__52036__auto____1 = (function (state_52473){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_52473);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e52492){if((e52492 instanceof Object)){
var ex__52039__auto__ = e52492;
var statearr_52493_54233 = state_52473;
(statearr_52493_54233[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54234 = state_52473;
state_52473 = G__54234;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$state_machine__52036__auto__ = function(state_52473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52036__auto____1.call(this,state_52473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52036__auto____0;
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52036__auto____1;
return cljs$core$async$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___54196,tc,fc))
})();
var state__52133__auto__ = (function (){var statearr_52494 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_52494[(6)] = c__52131__auto___54196);

return statearr_52494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___54196,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__){
return (function (state_52515){
var state_val_52516 = (state_52515[(1)]);
if((state_val_52516 === (7))){
var inst_52511 = (state_52515[(2)]);
var state_52515__$1 = state_52515;
var statearr_52517_54244 = state_52515__$1;
(statearr_52517_54244[(2)] = inst_52511);

(statearr_52517_54244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (1))){
var inst_52495 = init;
var state_52515__$1 = (function (){var statearr_52518 = state_52515;
(statearr_52518[(7)] = inst_52495);

return statearr_52518;
})();
var statearr_52519_54245 = state_52515__$1;
(statearr_52519_54245[(2)] = null);

(statearr_52519_54245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (4))){
var inst_52498 = (state_52515[(8)]);
var inst_52498__$1 = (state_52515[(2)]);
var inst_52499 = (inst_52498__$1 == null);
var state_52515__$1 = (function (){var statearr_52520 = state_52515;
(statearr_52520[(8)] = inst_52498__$1);

return statearr_52520;
})();
if(cljs.core.truth_(inst_52499)){
var statearr_52521_54255 = state_52515__$1;
(statearr_52521_54255[(1)] = (5));

} else {
var statearr_52522_54256 = state_52515__$1;
(statearr_52522_54256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (6))){
var inst_52502 = (state_52515[(9)]);
var inst_52495 = (state_52515[(7)]);
var inst_52498 = (state_52515[(8)]);
var inst_52502__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52495,inst_52498) : f.call(null,inst_52495,inst_52498));
var inst_52503 = cljs.core.reduced_QMARK_(inst_52502__$1);
var state_52515__$1 = (function (){var statearr_52523 = state_52515;
(statearr_52523[(9)] = inst_52502__$1);

return statearr_52523;
})();
if(inst_52503){
var statearr_52524_54257 = state_52515__$1;
(statearr_52524_54257[(1)] = (8));

} else {
var statearr_52525_54258 = state_52515__$1;
(statearr_52525_54258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (3))){
var inst_52513 = (state_52515[(2)]);
var state_52515__$1 = state_52515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52515__$1,inst_52513);
} else {
if((state_val_52516 === (2))){
var state_52515__$1 = state_52515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52515__$1,(4),ch);
} else {
if((state_val_52516 === (9))){
var inst_52502 = (state_52515[(9)]);
var inst_52495 = inst_52502;
var state_52515__$1 = (function (){var statearr_52526 = state_52515;
(statearr_52526[(7)] = inst_52495);

return statearr_52526;
})();
var statearr_52527_54259 = state_52515__$1;
(statearr_52527_54259[(2)] = null);

(statearr_52527_54259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (5))){
var inst_52495 = (state_52515[(7)]);
var state_52515__$1 = state_52515;
var statearr_52528_54260 = state_52515__$1;
(statearr_52528_54260[(2)] = inst_52495);

(statearr_52528_54260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (10))){
var inst_52509 = (state_52515[(2)]);
var state_52515__$1 = state_52515;
var statearr_52529_54261 = state_52515__$1;
(statearr_52529_54261[(2)] = inst_52509);

(statearr_52529_54261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (8))){
var inst_52502 = (state_52515[(9)]);
var inst_52505 = cljs.core.deref(inst_52502);
var state_52515__$1 = state_52515;
var statearr_52530_54262 = state_52515__$1;
(statearr_52530_54262[(2)] = inst_52505);

(statearr_52530_54262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__52036__auto__ = null;
var cljs$core$async$reduce_$_state_machine__52036__auto____0 = (function (){
var statearr_52531 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52531[(0)] = cljs$core$async$reduce_$_state_machine__52036__auto__);

(statearr_52531[(1)] = (1));

return statearr_52531;
});
var cljs$core$async$reduce_$_state_machine__52036__auto____1 = (function (state_52515){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_52515);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e52532){if((e52532 instanceof Object)){
var ex__52039__auto__ = e52532;
var statearr_52533_54268 = state_52515;
(statearr_52533_54268[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54269 = state_52515;
state_52515 = G__54269;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__52036__auto__ = function(state_52515){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__52036__auto____1.call(this,state_52515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__52036__auto____0;
cljs$core$async$reduce_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__52036__auto____1;
return cljs$core$async$reduce_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__))
})();
var state__52133__auto__ = (function (){var statearr_52534 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_52534[(6)] = c__52131__auto__);

return statearr_52534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__))
);

return c__52131__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__,f__$1){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__,f__$1){
return (function (state_52540){
var state_val_52541 = (state_52540[(1)]);
if((state_val_52541 === (1))){
var inst_52535 = cljs.core.async.reduce(f__$1,init,ch);
var state_52540__$1 = state_52540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52540__$1,(2),inst_52535);
} else {
if((state_val_52541 === (2))){
var inst_52537 = (state_52540[(2)]);
var inst_52538 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52537) : f__$1.call(null,inst_52537));
var state_52540__$1 = state_52540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52540__$1,inst_52538);
} else {
return null;
}
}
});})(c__52131__auto__,f__$1))
;
return ((function (switch__52035__auto__,c__52131__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__52036__auto__ = null;
var cljs$core$async$transduce_$_state_machine__52036__auto____0 = (function (){
var statearr_52542 = [null,null,null,null,null,null,null];
(statearr_52542[(0)] = cljs$core$async$transduce_$_state_machine__52036__auto__);

(statearr_52542[(1)] = (1));

return statearr_52542;
});
var cljs$core$async$transduce_$_state_machine__52036__auto____1 = (function (state_52540){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_52540);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e52543){if((e52543 instanceof Object)){
var ex__52039__auto__ = e52543;
var statearr_52544_54277 = state_52540;
(statearr_52544_54277[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54278 = state_52540;
state_52540 = G__54278;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__52036__auto__ = function(state_52540){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__52036__auto____1.call(this,state_52540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__52036__auto____0;
cljs$core$async$transduce_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__52036__auto____1;
return cljs$core$async$transduce_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__,f__$1))
})();
var state__52133__auto__ = (function (){var statearr_52545 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_52545[(6)] = c__52131__auto__);

return statearr_52545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__,f__$1))
);

return c__52131__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__52547 = arguments.length;
switch (G__52547) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__){
return (function (state_52572){
var state_val_52573 = (state_52572[(1)]);
if((state_val_52573 === (7))){
var inst_52554 = (state_52572[(2)]);
var state_52572__$1 = state_52572;
var statearr_52574_54284 = state_52572__$1;
(statearr_52574_54284[(2)] = inst_52554);

(statearr_52574_54284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52573 === (1))){
var inst_52548 = cljs.core.seq(coll);
var inst_52549 = inst_52548;
var state_52572__$1 = (function (){var statearr_52575 = state_52572;
(statearr_52575[(7)] = inst_52549);

return statearr_52575;
})();
var statearr_52576_54285 = state_52572__$1;
(statearr_52576_54285[(2)] = null);

(statearr_52576_54285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52573 === (4))){
var inst_52549 = (state_52572[(7)]);
var inst_52552 = cljs.core.first(inst_52549);
var state_52572__$1 = state_52572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52572__$1,(7),ch,inst_52552);
} else {
if((state_val_52573 === (13))){
var inst_52566 = (state_52572[(2)]);
var state_52572__$1 = state_52572;
var statearr_52577_54286 = state_52572__$1;
(statearr_52577_54286[(2)] = inst_52566);

(statearr_52577_54286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52573 === (6))){
var inst_52557 = (state_52572[(2)]);
var state_52572__$1 = state_52572;
if(cljs.core.truth_(inst_52557)){
var statearr_52578_54287 = state_52572__$1;
(statearr_52578_54287[(1)] = (8));

} else {
var statearr_52579_54288 = state_52572__$1;
(statearr_52579_54288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52573 === (3))){
var inst_52570 = (state_52572[(2)]);
var state_52572__$1 = state_52572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52572__$1,inst_52570);
} else {
if((state_val_52573 === (12))){
var state_52572__$1 = state_52572;
var statearr_52580_54289 = state_52572__$1;
(statearr_52580_54289[(2)] = null);

(statearr_52580_54289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52573 === (2))){
var inst_52549 = (state_52572[(7)]);
var state_52572__$1 = state_52572;
if(cljs.core.truth_(inst_52549)){
var statearr_52581_54290 = state_52572__$1;
(statearr_52581_54290[(1)] = (4));

} else {
var statearr_52582_54291 = state_52572__$1;
(statearr_52582_54291[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52573 === (11))){
var inst_52563 = cljs.core.async.close_BANG_(ch);
var state_52572__$1 = state_52572;
var statearr_52583_54292 = state_52572__$1;
(statearr_52583_54292[(2)] = inst_52563);

(statearr_52583_54292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52573 === (9))){
var state_52572__$1 = state_52572;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52584_54293 = state_52572__$1;
(statearr_52584_54293[(1)] = (11));

} else {
var statearr_52585_54294 = state_52572__$1;
(statearr_52585_54294[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52573 === (5))){
var inst_52549 = (state_52572[(7)]);
var state_52572__$1 = state_52572;
var statearr_52586_54295 = state_52572__$1;
(statearr_52586_54295[(2)] = inst_52549);

(statearr_52586_54295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52573 === (10))){
var inst_52568 = (state_52572[(2)]);
var state_52572__$1 = state_52572;
var statearr_52587_54296 = state_52572__$1;
(statearr_52587_54296[(2)] = inst_52568);

(statearr_52587_54296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52573 === (8))){
var inst_52549 = (state_52572[(7)]);
var inst_52559 = cljs.core.next(inst_52549);
var inst_52549__$1 = inst_52559;
var state_52572__$1 = (function (){var statearr_52588 = state_52572;
(statearr_52588[(7)] = inst_52549__$1);

return statearr_52588;
})();
var statearr_52589_54297 = state_52572__$1;
(statearr_52589_54297[(2)] = null);

(statearr_52589_54297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto__){
return (function() {
var cljs$core$async$state_machine__52036__auto__ = null;
var cljs$core$async$state_machine__52036__auto____0 = (function (){
var statearr_52590 = [null,null,null,null,null,null,null,null];
(statearr_52590[(0)] = cljs$core$async$state_machine__52036__auto__);

(statearr_52590[(1)] = (1));

return statearr_52590;
});
var cljs$core$async$state_machine__52036__auto____1 = (function (state_52572){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_52572);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e52591){if((e52591 instanceof Object)){
var ex__52039__auto__ = e52591;
var statearr_52592_54298 = state_52572;
(statearr_52592_54298[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54299 = state_52572;
state_52572 = G__54299;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$state_machine__52036__auto__ = function(state_52572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52036__auto____1.call(this,state_52572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52036__auto____0;
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52036__auto____1;
return cljs$core$async$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__))
})();
var state__52133__auto__ = (function (){var statearr_52593 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_52593[(6)] = c__52131__auto__);

return statearr_52593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__))
);

return c__52131__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52594 = (function (ch,cs,meta52595){
this.ch = ch;
this.cs = cs;
this.meta52595 = meta52595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52596,meta52595__$1){
var self__ = this;
var _52596__$1 = this;
return (new cljs.core.async.t_cljs$core$async52594(self__.ch,self__.cs,meta52595__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52596){
var self__ = this;
var _52596__$1 = this;
return self__.meta52595;
});})(cs))
;

cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52594.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52595","meta52595",175887220,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async52594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52594";

cljs.core.async.t_cljs$core$async52594.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52594");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52594.
 */
cljs.core.async.__GT_t_cljs$core$async52594 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async52594(ch__$1,cs__$1,meta52595){
return (new cljs.core.async.t_cljs$core$async52594(ch__$1,cs__$1,meta52595));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async52594(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__52131__auto___54330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___54330,cs,m,dchan,dctr,done){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___54330,cs,m,dchan,dctr,done){
return (function (state_52731){
var state_val_52732 = (state_52731[(1)]);
if((state_val_52732 === (7))){
var inst_52727 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52733_54333 = state_52731__$1;
(statearr_52733_54333[(2)] = inst_52727);

(statearr_52733_54333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (20))){
var inst_52630 = (state_52731[(7)]);
var inst_52642 = cljs.core.first(inst_52630);
var inst_52643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52642,(0),null);
var inst_52644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52642,(1),null);
var state_52731__$1 = (function (){var statearr_52734 = state_52731;
(statearr_52734[(8)] = inst_52643);

return statearr_52734;
})();
if(cljs.core.truth_(inst_52644)){
var statearr_52735_54336 = state_52731__$1;
(statearr_52735_54336[(1)] = (22));

} else {
var statearr_52736_54355 = state_52731__$1;
(statearr_52736_54355[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (27))){
var inst_52674 = (state_52731[(9)]);
var inst_52672 = (state_52731[(10)]);
var inst_52679 = (state_52731[(11)]);
var inst_52599 = (state_52731[(12)]);
var inst_52679__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52672,inst_52674);
var inst_52680 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52679__$1,inst_52599,done);
var state_52731__$1 = (function (){var statearr_52737 = state_52731;
(statearr_52737[(11)] = inst_52679__$1);

return statearr_52737;
})();
if(cljs.core.truth_(inst_52680)){
var statearr_52738_54357 = state_52731__$1;
(statearr_52738_54357[(1)] = (30));

} else {
var statearr_52739_54358 = state_52731__$1;
(statearr_52739_54358[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (1))){
var state_52731__$1 = state_52731;
var statearr_52740_54360 = state_52731__$1;
(statearr_52740_54360[(2)] = null);

(statearr_52740_54360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (24))){
var inst_52630 = (state_52731[(7)]);
var inst_52649 = (state_52731[(2)]);
var inst_52650 = cljs.core.next(inst_52630);
var inst_52608 = inst_52650;
var inst_52609 = null;
var inst_52610 = (0);
var inst_52611 = (0);
var state_52731__$1 = (function (){var statearr_52741 = state_52731;
(statearr_52741[(13)] = inst_52610);

(statearr_52741[(14)] = inst_52611);

(statearr_52741[(15)] = inst_52609);

(statearr_52741[(16)] = inst_52649);

(statearr_52741[(17)] = inst_52608);

return statearr_52741;
})();
var statearr_52742_54361 = state_52731__$1;
(statearr_52742_54361[(2)] = null);

(statearr_52742_54361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (39))){
var state_52731__$1 = state_52731;
var statearr_52746_54362 = state_52731__$1;
(statearr_52746_54362[(2)] = null);

(statearr_52746_54362[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (4))){
var inst_52599 = (state_52731[(12)]);
var inst_52599__$1 = (state_52731[(2)]);
var inst_52600 = (inst_52599__$1 == null);
var state_52731__$1 = (function (){var statearr_52747 = state_52731;
(statearr_52747[(12)] = inst_52599__$1);

return statearr_52747;
})();
if(cljs.core.truth_(inst_52600)){
var statearr_52748_54364 = state_52731__$1;
(statearr_52748_54364[(1)] = (5));

} else {
var statearr_52749_54365 = state_52731__$1;
(statearr_52749_54365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (15))){
var inst_52610 = (state_52731[(13)]);
var inst_52611 = (state_52731[(14)]);
var inst_52609 = (state_52731[(15)]);
var inst_52608 = (state_52731[(17)]);
var inst_52626 = (state_52731[(2)]);
var inst_52627 = (inst_52611 + (1));
var tmp52743 = inst_52610;
var tmp52744 = inst_52609;
var tmp52745 = inst_52608;
var inst_52608__$1 = tmp52745;
var inst_52609__$1 = tmp52744;
var inst_52610__$1 = tmp52743;
var inst_52611__$1 = inst_52627;
var state_52731__$1 = (function (){var statearr_52750 = state_52731;
(statearr_52750[(13)] = inst_52610__$1);

(statearr_52750[(14)] = inst_52611__$1);

(statearr_52750[(15)] = inst_52609__$1);

(statearr_52750[(18)] = inst_52626);

(statearr_52750[(17)] = inst_52608__$1);

return statearr_52750;
})();
var statearr_52751_54367 = state_52731__$1;
(statearr_52751_54367[(2)] = null);

(statearr_52751_54367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (21))){
var inst_52653 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52755_54368 = state_52731__$1;
(statearr_52755_54368[(2)] = inst_52653);

(statearr_52755_54368[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (31))){
var inst_52679 = (state_52731[(11)]);
var inst_52683 = done(null);
var inst_52684 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52679);
var state_52731__$1 = (function (){var statearr_52756 = state_52731;
(statearr_52756[(19)] = inst_52683);

return statearr_52756;
})();
var statearr_52757_54369 = state_52731__$1;
(statearr_52757_54369[(2)] = inst_52684);

(statearr_52757_54369[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (32))){
var inst_52673 = (state_52731[(20)]);
var inst_52671 = (state_52731[(21)]);
var inst_52674 = (state_52731[(9)]);
var inst_52672 = (state_52731[(10)]);
var inst_52686 = (state_52731[(2)]);
var inst_52687 = (inst_52674 + (1));
var tmp52752 = inst_52673;
var tmp52753 = inst_52671;
var tmp52754 = inst_52672;
var inst_52671__$1 = tmp52753;
var inst_52672__$1 = tmp52754;
var inst_52673__$1 = tmp52752;
var inst_52674__$1 = inst_52687;
var state_52731__$1 = (function (){var statearr_52758 = state_52731;
(statearr_52758[(22)] = inst_52686);

(statearr_52758[(20)] = inst_52673__$1);

(statearr_52758[(21)] = inst_52671__$1);

(statearr_52758[(9)] = inst_52674__$1);

(statearr_52758[(10)] = inst_52672__$1);

return statearr_52758;
})();
var statearr_52759_54372 = state_52731__$1;
(statearr_52759_54372[(2)] = null);

(statearr_52759_54372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (40))){
var inst_52699 = (state_52731[(23)]);
var inst_52703 = done(null);
var inst_52704 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52699);
var state_52731__$1 = (function (){var statearr_52760 = state_52731;
(statearr_52760[(24)] = inst_52703);

return statearr_52760;
})();
var statearr_52761_54374 = state_52731__$1;
(statearr_52761_54374[(2)] = inst_52704);

(statearr_52761_54374[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (33))){
var inst_52690 = (state_52731[(25)]);
var inst_52692 = cljs.core.chunked_seq_QMARK_(inst_52690);
var state_52731__$1 = state_52731;
if(inst_52692){
var statearr_52762_54375 = state_52731__$1;
(statearr_52762_54375[(1)] = (36));

} else {
var statearr_52763_54376 = state_52731__$1;
(statearr_52763_54376[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (13))){
var inst_52620 = (state_52731[(26)]);
var inst_52623 = cljs.core.async.close_BANG_(inst_52620);
var state_52731__$1 = state_52731;
var statearr_52764_54378 = state_52731__$1;
(statearr_52764_54378[(2)] = inst_52623);

(statearr_52764_54378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (22))){
var inst_52643 = (state_52731[(8)]);
var inst_52646 = cljs.core.async.close_BANG_(inst_52643);
var state_52731__$1 = state_52731;
var statearr_52765_54379 = state_52731__$1;
(statearr_52765_54379[(2)] = inst_52646);

(statearr_52765_54379[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (36))){
var inst_52690 = (state_52731[(25)]);
var inst_52694 = cljs.core.chunk_first(inst_52690);
var inst_52695 = cljs.core.chunk_rest(inst_52690);
var inst_52696 = cljs.core.count(inst_52694);
var inst_52671 = inst_52695;
var inst_52672 = inst_52694;
var inst_52673 = inst_52696;
var inst_52674 = (0);
var state_52731__$1 = (function (){var statearr_52766 = state_52731;
(statearr_52766[(20)] = inst_52673);

(statearr_52766[(21)] = inst_52671);

(statearr_52766[(9)] = inst_52674);

(statearr_52766[(10)] = inst_52672);

return statearr_52766;
})();
var statearr_52767_54380 = state_52731__$1;
(statearr_52767_54380[(2)] = null);

(statearr_52767_54380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (41))){
var inst_52690 = (state_52731[(25)]);
var inst_52706 = (state_52731[(2)]);
var inst_52707 = cljs.core.next(inst_52690);
var inst_52671 = inst_52707;
var inst_52672 = null;
var inst_52673 = (0);
var inst_52674 = (0);
var state_52731__$1 = (function (){var statearr_52768 = state_52731;
(statearr_52768[(20)] = inst_52673);

(statearr_52768[(21)] = inst_52671);

(statearr_52768[(9)] = inst_52674);

(statearr_52768[(10)] = inst_52672);

(statearr_52768[(27)] = inst_52706);

return statearr_52768;
})();
var statearr_52769_54383 = state_52731__$1;
(statearr_52769_54383[(2)] = null);

(statearr_52769_54383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (43))){
var state_52731__$1 = state_52731;
var statearr_52770_54384 = state_52731__$1;
(statearr_52770_54384[(2)] = null);

(statearr_52770_54384[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (29))){
var inst_52715 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52771_54385 = state_52731__$1;
(statearr_52771_54385[(2)] = inst_52715);

(statearr_52771_54385[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (44))){
var inst_52724 = (state_52731[(2)]);
var state_52731__$1 = (function (){var statearr_52772 = state_52731;
(statearr_52772[(28)] = inst_52724);

return statearr_52772;
})();
var statearr_52773_54386 = state_52731__$1;
(statearr_52773_54386[(2)] = null);

(statearr_52773_54386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (6))){
var inst_52663 = (state_52731[(29)]);
var inst_52662 = cljs.core.deref(cs);
var inst_52663__$1 = cljs.core.keys(inst_52662);
var inst_52664 = cljs.core.count(inst_52663__$1);
var inst_52665 = cljs.core.reset_BANG_(dctr,inst_52664);
var inst_52670 = cljs.core.seq(inst_52663__$1);
var inst_52671 = inst_52670;
var inst_52672 = null;
var inst_52673 = (0);
var inst_52674 = (0);
var state_52731__$1 = (function (){var statearr_52774 = state_52731;
(statearr_52774[(29)] = inst_52663__$1);

(statearr_52774[(30)] = inst_52665);

(statearr_52774[(20)] = inst_52673);

(statearr_52774[(21)] = inst_52671);

(statearr_52774[(9)] = inst_52674);

(statearr_52774[(10)] = inst_52672);

return statearr_52774;
})();
var statearr_52775_54399 = state_52731__$1;
(statearr_52775_54399[(2)] = null);

(statearr_52775_54399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (28))){
var inst_52690 = (state_52731[(25)]);
var inst_52671 = (state_52731[(21)]);
var inst_52690__$1 = cljs.core.seq(inst_52671);
var state_52731__$1 = (function (){var statearr_52776 = state_52731;
(statearr_52776[(25)] = inst_52690__$1);

return statearr_52776;
})();
if(inst_52690__$1){
var statearr_52777_54406 = state_52731__$1;
(statearr_52777_54406[(1)] = (33));

} else {
var statearr_52778_54407 = state_52731__$1;
(statearr_52778_54407[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (25))){
var inst_52673 = (state_52731[(20)]);
var inst_52674 = (state_52731[(9)]);
var inst_52676 = (inst_52674 < inst_52673);
var inst_52677 = inst_52676;
var state_52731__$1 = state_52731;
if(cljs.core.truth_(inst_52677)){
var statearr_52779_54410 = state_52731__$1;
(statearr_52779_54410[(1)] = (27));

} else {
var statearr_52780_54411 = state_52731__$1;
(statearr_52780_54411[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (34))){
var state_52731__$1 = state_52731;
var statearr_52781_54412 = state_52731__$1;
(statearr_52781_54412[(2)] = null);

(statearr_52781_54412[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (17))){
var state_52731__$1 = state_52731;
var statearr_52782_54413 = state_52731__$1;
(statearr_52782_54413[(2)] = null);

(statearr_52782_54413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (3))){
var inst_52729 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52731__$1,inst_52729);
} else {
if((state_val_52732 === (12))){
var inst_52658 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52783_54431 = state_52731__$1;
(statearr_52783_54431[(2)] = inst_52658);

(statearr_52783_54431[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (2))){
var state_52731__$1 = state_52731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52731__$1,(4),ch);
} else {
if((state_val_52732 === (23))){
var state_52731__$1 = state_52731;
var statearr_52784_54432 = state_52731__$1;
(statearr_52784_54432[(2)] = null);

(statearr_52784_54432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (35))){
var inst_52713 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52785_54433 = state_52731__$1;
(statearr_52785_54433[(2)] = inst_52713);

(statearr_52785_54433[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (19))){
var inst_52630 = (state_52731[(7)]);
var inst_52634 = cljs.core.chunk_first(inst_52630);
var inst_52635 = cljs.core.chunk_rest(inst_52630);
var inst_52636 = cljs.core.count(inst_52634);
var inst_52608 = inst_52635;
var inst_52609 = inst_52634;
var inst_52610 = inst_52636;
var inst_52611 = (0);
var state_52731__$1 = (function (){var statearr_52786 = state_52731;
(statearr_52786[(13)] = inst_52610);

(statearr_52786[(14)] = inst_52611);

(statearr_52786[(15)] = inst_52609);

(statearr_52786[(17)] = inst_52608);

return statearr_52786;
})();
var statearr_52787_54447 = state_52731__$1;
(statearr_52787_54447[(2)] = null);

(statearr_52787_54447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (11))){
var inst_52630 = (state_52731[(7)]);
var inst_52608 = (state_52731[(17)]);
var inst_52630__$1 = cljs.core.seq(inst_52608);
var state_52731__$1 = (function (){var statearr_52788 = state_52731;
(statearr_52788[(7)] = inst_52630__$1);

return statearr_52788;
})();
if(inst_52630__$1){
var statearr_52789_54451 = state_52731__$1;
(statearr_52789_54451[(1)] = (16));

} else {
var statearr_52790_54452 = state_52731__$1;
(statearr_52790_54452[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (9))){
var inst_52660 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52791_54453 = state_52731__$1;
(statearr_52791_54453[(2)] = inst_52660);

(statearr_52791_54453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (5))){
var inst_52606 = cljs.core.deref(cs);
var inst_52607 = cljs.core.seq(inst_52606);
var inst_52608 = inst_52607;
var inst_52609 = null;
var inst_52610 = (0);
var inst_52611 = (0);
var state_52731__$1 = (function (){var statearr_52792 = state_52731;
(statearr_52792[(13)] = inst_52610);

(statearr_52792[(14)] = inst_52611);

(statearr_52792[(15)] = inst_52609);

(statearr_52792[(17)] = inst_52608);

return statearr_52792;
})();
var statearr_52793_54454 = state_52731__$1;
(statearr_52793_54454[(2)] = null);

(statearr_52793_54454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (14))){
var state_52731__$1 = state_52731;
var statearr_52794_54458 = state_52731__$1;
(statearr_52794_54458[(2)] = null);

(statearr_52794_54458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (45))){
var inst_52721 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52795_54459 = state_52731__$1;
(statearr_52795_54459[(2)] = inst_52721);

(statearr_52795_54459[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (26))){
var inst_52663 = (state_52731[(29)]);
var inst_52717 = (state_52731[(2)]);
var inst_52718 = cljs.core.seq(inst_52663);
var state_52731__$1 = (function (){var statearr_52796 = state_52731;
(statearr_52796[(31)] = inst_52717);

return statearr_52796;
})();
if(inst_52718){
var statearr_52797_54461 = state_52731__$1;
(statearr_52797_54461[(1)] = (42));

} else {
var statearr_52798_54463 = state_52731__$1;
(statearr_52798_54463[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (16))){
var inst_52630 = (state_52731[(7)]);
var inst_52632 = cljs.core.chunked_seq_QMARK_(inst_52630);
var state_52731__$1 = state_52731;
if(inst_52632){
var statearr_52799_54464 = state_52731__$1;
(statearr_52799_54464[(1)] = (19));

} else {
var statearr_52800_54465 = state_52731__$1;
(statearr_52800_54465[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (38))){
var inst_52710 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52801_54466 = state_52731__$1;
(statearr_52801_54466[(2)] = inst_52710);

(statearr_52801_54466[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (30))){
var state_52731__$1 = state_52731;
var statearr_52802_54467 = state_52731__$1;
(statearr_52802_54467[(2)] = null);

(statearr_52802_54467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (10))){
var inst_52611 = (state_52731[(14)]);
var inst_52609 = (state_52731[(15)]);
var inst_52619 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52609,inst_52611);
var inst_52620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52619,(0),null);
var inst_52621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52619,(1),null);
var state_52731__$1 = (function (){var statearr_52803 = state_52731;
(statearr_52803[(26)] = inst_52620);

return statearr_52803;
})();
if(cljs.core.truth_(inst_52621)){
var statearr_52804_54468 = state_52731__$1;
(statearr_52804_54468[(1)] = (13));

} else {
var statearr_52805_54469 = state_52731__$1;
(statearr_52805_54469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (18))){
var inst_52656 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52806_54491 = state_52731__$1;
(statearr_52806_54491[(2)] = inst_52656);

(statearr_52806_54491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (42))){
var state_52731__$1 = state_52731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52731__$1,(45),dchan);
} else {
if((state_val_52732 === (37))){
var inst_52690 = (state_52731[(25)]);
var inst_52699 = (state_52731[(23)]);
var inst_52599 = (state_52731[(12)]);
var inst_52699__$1 = cljs.core.first(inst_52690);
var inst_52700 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52699__$1,inst_52599,done);
var state_52731__$1 = (function (){var statearr_52807 = state_52731;
(statearr_52807[(23)] = inst_52699__$1);

return statearr_52807;
})();
if(cljs.core.truth_(inst_52700)){
var statearr_52808_54498 = state_52731__$1;
(statearr_52808_54498[(1)] = (39));

} else {
var statearr_52809_54499 = state_52731__$1;
(statearr_52809_54499[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (8))){
var inst_52610 = (state_52731[(13)]);
var inst_52611 = (state_52731[(14)]);
var inst_52613 = (inst_52611 < inst_52610);
var inst_52614 = inst_52613;
var state_52731__$1 = state_52731;
if(cljs.core.truth_(inst_52614)){
var statearr_52810_54503 = state_52731__$1;
(statearr_52810_54503[(1)] = (10));

} else {
var statearr_52811_54504 = state_52731__$1;
(statearr_52811_54504[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___54330,cs,m,dchan,dctr,done))
;
return ((function (switch__52035__auto__,c__52131__auto___54330,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__52036__auto__ = null;
var cljs$core$async$mult_$_state_machine__52036__auto____0 = (function (){
var statearr_52812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52812[(0)] = cljs$core$async$mult_$_state_machine__52036__auto__);

(statearr_52812[(1)] = (1));

return statearr_52812;
});
var cljs$core$async$mult_$_state_machine__52036__auto____1 = (function (state_52731){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_52731);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e52813){if((e52813 instanceof Object)){
var ex__52039__auto__ = e52813;
var statearr_52814_54537 = state_52731;
(statearr_52814_54537[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54538 = state_52731;
state_52731 = G__54538;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__52036__auto__ = function(state_52731){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__52036__auto____1.call(this,state_52731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__52036__auto____0;
cljs$core$async$mult_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__52036__auto____1;
return cljs$core$async$mult_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___54330,cs,m,dchan,dctr,done))
})();
var state__52133__auto__ = (function (){var statearr_52815 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_52815[(6)] = c__52131__auto___54330);

return statearr_52815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___54330,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__52817 = arguments.length;
switch (G__52817) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54575 = arguments.length;
var i__4731__auto___54576 = (0);
while(true){
if((i__4731__auto___54576 < len__4730__auto___54575)){
args__4736__auto__.push((arguments[i__4731__auto___54576]));

var G__54577 = (i__4731__auto___54576 + (1));
i__4731__auto___54576 = G__54577;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52822){
var map__52823 = p__52822;
var map__52823__$1 = (((((!((map__52823 == null))))?(((((map__52823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52823):map__52823);
var opts = map__52823__$1;
var statearr_52825_54578 = state;
(statearr_52825_54578[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__52823,map__52823__$1,opts){
return (function (val){
var statearr_52826_54579 = state;
(statearr_52826_54579[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__52823,map__52823__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_52827_54580 = state;
(statearr_52827_54580[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52818){
var G__52819 = cljs.core.first(seq52818);
var seq52818__$1 = cljs.core.next(seq52818);
var G__52820 = cljs.core.first(seq52818__$1);
var seq52818__$2 = cljs.core.next(seq52818__$1);
var G__52821 = cljs.core.first(seq52818__$2);
var seq52818__$3 = cljs.core.next(seq52818__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52819,G__52820,G__52821,seq52818__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52828 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52828 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52829){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52829 = meta52829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52830,meta52829__$1){
var self__ = this;
var _52830__$1 = this;
return (new cljs.core.async.t_cljs$core$async52828(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52829__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52830){
var self__ = this;
var _52830__$1 = this;
return self__.meta52829;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52829","meta52829",-1863827103,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52828";

cljs.core.async.t_cljs$core$async52828.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52828");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52828.
 */
cljs.core.async.__GT_t_cljs$core$async52828 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async52828(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52829){
return (new cljs.core.async.t_cljs$core$async52828(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52829));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async52828(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__52131__auto___54609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___54609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___54609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_52932){
var state_val_52933 = (state_52932[(1)]);
if((state_val_52933 === (7))){
var inst_52847 = (state_52932[(2)]);
var state_52932__$1 = state_52932;
var statearr_52934_54610 = state_52932__$1;
(statearr_52934_54610[(2)] = inst_52847);

(statearr_52934_54610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (20))){
var inst_52859 = (state_52932[(7)]);
var state_52932__$1 = state_52932;
var statearr_52935_54611 = state_52932__$1;
(statearr_52935_54611[(2)] = inst_52859);

(statearr_52935_54611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (27))){
var state_52932__$1 = state_52932;
var statearr_52936_54612 = state_52932__$1;
(statearr_52936_54612[(2)] = null);

(statearr_52936_54612[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (1))){
var inst_52834 = (state_52932[(8)]);
var inst_52834__$1 = calc_state();
var inst_52836 = (inst_52834__$1 == null);
var inst_52837 = cljs.core.not(inst_52836);
var state_52932__$1 = (function (){var statearr_52937 = state_52932;
(statearr_52937[(8)] = inst_52834__$1);

return statearr_52937;
})();
if(inst_52837){
var statearr_52938_54613 = state_52932__$1;
(statearr_52938_54613[(1)] = (2));

} else {
var statearr_52939_54614 = state_52932__$1;
(statearr_52939_54614[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (24))){
var inst_52883 = (state_52932[(9)]);
var inst_52906 = (state_52932[(10)]);
var inst_52892 = (state_52932[(11)]);
var inst_52906__$1 = (inst_52883.cljs$core$IFn$_invoke$arity$1 ? inst_52883.cljs$core$IFn$_invoke$arity$1(inst_52892) : inst_52883.call(null,inst_52892));
var state_52932__$1 = (function (){var statearr_52940 = state_52932;
(statearr_52940[(10)] = inst_52906__$1);

return statearr_52940;
})();
if(cljs.core.truth_(inst_52906__$1)){
var statearr_52941_54615 = state_52932__$1;
(statearr_52941_54615[(1)] = (29));

} else {
var statearr_52942_54616 = state_52932__$1;
(statearr_52942_54616[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (4))){
var inst_52850 = (state_52932[(2)]);
var state_52932__$1 = state_52932;
if(cljs.core.truth_(inst_52850)){
var statearr_52943_54619 = state_52932__$1;
(statearr_52943_54619[(1)] = (8));

} else {
var statearr_52944_54620 = state_52932__$1;
(statearr_52944_54620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (15))){
var inst_52877 = (state_52932[(2)]);
var state_52932__$1 = state_52932;
if(cljs.core.truth_(inst_52877)){
var statearr_52945_54621 = state_52932__$1;
(statearr_52945_54621[(1)] = (19));

} else {
var statearr_52946_54622 = state_52932__$1;
(statearr_52946_54622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (21))){
var inst_52882 = (state_52932[(12)]);
var inst_52882__$1 = (state_52932[(2)]);
var inst_52883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52882__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52882__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52882__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52932__$1 = (function (){var statearr_52947 = state_52932;
(statearr_52947[(12)] = inst_52882__$1);

(statearr_52947[(9)] = inst_52883);

(statearr_52947[(13)] = inst_52884);

return statearr_52947;
})();
return cljs.core.async.ioc_alts_BANG_(state_52932__$1,(22),inst_52885);
} else {
if((state_val_52933 === (31))){
var inst_52914 = (state_52932[(2)]);
var state_52932__$1 = state_52932;
if(cljs.core.truth_(inst_52914)){
var statearr_52948_54634 = state_52932__$1;
(statearr_52948_54634[(1)] = (32));

} else {
var statearr_52949_54639 = state_52932__$1;
(statearr_52949_54639[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (32))){
var inst_52891 = (state_52932[(14)]);
var state_52932__$1 = state_52932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52932__$1,(35),out,inst_52891);
} else {
if((state_val_52933 === (33))){
var inst_52882 = (state_52932[(12)]);
var inst_52859 = inst_52882;
var state_52932__$1 = (function (){var statearr_52950 = state_52932;
(statearr_52950[(7)] = inst_52859);

return statearr_52950;
})();
var statearr_52951_54642 = state_52932__$1;
(statearr_52951_54642[(2)] = null);

(statearr_52951_54642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (13))){
var inst_52859 = (state_52932[(7)]);
var inst_52866 = inst_52859.cljs$lang$protocol_mask$partition0$;
var inst_52867 = (inst_52866 & (64));
var inst_52868 = inst_52859.cljs$core$ISeq$;
var inst_52869 = (cljs.core.PROTOCOL_SENTINEL === inst_52868);
var inst_52870 = ((inst_52867) || (inst_52869));
var state_52932__$1 = state_52932;
if(cljs.core.truth_(inst_52870)){
var statearr_52952_54644 = state_52932__$1;
(statearr_52952_54644[(1)] = (16));

} else {
var statearr_52953_54645 = state_52932__$1;
(statearr_52953_54645[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (22))){
var inst_52892 = (state_52932[(11)]);
var inst_52891 = (state_52932[(14)]);
var inst_52890 = (state_52932[(2)]);
var inst_52891__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52890,(0),null);
var inst_52892__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52890,(1),null);
var inst_52893 = (inst_52891__$1 == null);
var inst_52894 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52892__$1,change);
var inst_52895 = ((inst_52893) || (inst_52894));
var state_52932__$1 = (function (){var statearr_52954 = state_52932;
(statearr_52954[(11)] = inst_52892__$1);

(statearr_52954[(14)] = inst_52891__$1);

return statearr_52954;
})();
if(cljs.core.truth_(inst_52895)){
var statearr_52955_54654 = state_52932__$1;
(statearr_52955_54654[(1)] = (23));

} else {
var statearr_52956_54656 = state_52932__$1;
(statearr_52956_54656[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (36))){
var inst_52882 = (state_52932[(12)]);
var inst_52859 = inst_52882;
var state_52932__$1 = (function (){var statearr_52957 = state_52932;
(statearr_52957[(7)] = inst_52859);

return statearr_52957;
})();
var statearr_52958_54658 = state_52932__$1;
(statearr_52958_54658[(2)] = null);

(statearr_52958_54658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (29))){
var inst_52906 = (state_52932[(10)]);
var state_52932__$1 = state_52932;
var statearr_52959_54661 = state_52932__$1;
(statearr_52959_54661[(2)] = inst_52906);

(statearr_52959_54661[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (6))){
var state_52932__$1 = state_52932;
var statearr_52960_54662 = state_52932__$1;
(statearr_52960_54662[(2)] = false);

(statearr_52960_54662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (28))){
var inst_52902 = (state_52932[(2)]);
var inst_52903 = calc_state();
var inst_52859 = inst_52903;
var state_52932__$1 = (function (){var statearr_52961 = state_52932;
(statearr_52961[(7)] = inst_52859);

(statearr_52961[(15)] = inst_52902);

return statearr_52961;
})();
var statearr_52962_54667 = state_52932__$1;
(statearr_52962_54667[(2)] = null);

(statearr_52962_54667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (25))){
var inst_52928 = (state_52932[(2)]);
var state_52932__$1 = state_52932;
var statearr_52963_54668 = state_52932__$1;
(statearr_52963_54668[(2)] = inst_52928);

(statearr_52963_54668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (34))){
var inst_52926 = (state_52932[(2)]);
var state_52932__$1 = state_52932;
var statearr_52964_54670 = state_52932__$1;
(statearr_52964_54670[(2)] = inst_52926);

(statearr_52964_54670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (17))){
var state_52932__$1 = state_52932;
var statearr_52965_54671 = state_52932__$1;
(statearr_52965_54671[(2)] = false);

(statearr_52965_54671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (3))){
var state_52932__$1 = state_52932;
var statearr_52966_54672 = state_52932__$1;
(statearr_52966_54672[(2)] = false);

(statearr_52966_54672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (12))){
var inst_52930 = (state_52932[(2)]);
var state_52932__$1 = state_52932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52932__$1,inst_52930);
} else {
if((state_val_52933 === (2))){
var inst_52834 = (state_52932[(8)]);
var inst_52839 = inst_52834.cljs$lang$protocol_mask$partition0$;
var inst_52840 = (inst_52839 & (64));
var inst_52841 = inst_52834.cljs$core$ISeq$;
var inst_52842 = (cljs.core.PROTOCOL_SENTINEL === inst_52841);
var inst_52843 = ((inst_52840) || (inst_52842));
var state_52932__$1 = state_52932;
if(cljs.core.truth_(inst_52843)){
var statearr_52967_54682 = state_52932__$1;
(statearr_52967_54682[(1)] = (5));

} else {
var statearr_52968_54683 = state_52932__$1;
(statearr_52968_54683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (23))){
var inst_52891 = (state_52932[(14)]);
var inst_52897 = (inst_52891 == null);
var state_52932__$1 = state_52932;
if(cljs.core.truth_(inst_52897)){
var statearr_52969_54684 = state_52932__$1;
(statearr_52969_54684[(1)] = (26));

} else {
var statearr_52970_54685 = state_52932__$1;
(statearr_52970_54685[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (35))){
var inst_52917 = (state_52932[(2)]);
var state_52932__$1 = state_52932;
if(cljs.core.truth_(inst_52917)){
var statearr_52971_54686 = state_52932__$1;
(statearr_52971_54686[(1)] = (36));

} else {
var statearr_52972_54687 = state_52932__$1;
(statearr_52972_54687[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (19))){
var inst_52859 = (state_52932[(7)]);
var inst_52879 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52859);
var state_52932__$1 = state_52932;
var statearr_52973_54688 = state_52932__$1;
(statearr_52973_54688[(2)] = inst_52879);

(statearr_52973_54688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (11))){
var inst_52859 = (state_52932[(7)]);
var inst_52863 = (inst_52859 == null);
var inst_52864 = cljs.core.not(inst_52863);
var state_52932__$1 = state_52932;
if(inst_52864){
var statearr_52974_54689 = state_52932__$1;
(statearr_52974_54689[(1)] = (13));

} else {
var statearr_52975_54690 = state_52932__$1;
(statearr_52975_54690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (9))){
var inst_52834 = (state_52932[(8)]);
var state_52932__$1 = state_52932;
var statearr_52976_54691 = state_52932__$1;
(statearr_52976_54691[(2)] = inst_52834);

(statearr_52976_54691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (5))){
var state_52932__$1 = state_52932;
var statearr_52977_54692 = state_52932__$1;
(statearr_52977_54692[(2)] = true);

(statearr_52977_54692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (14))){
var state_52932__$1 = state_52932;
var statearr_52978_54693 = state_52932__$1;
(statearr_52978_54693[(2)] = false);

(statearr_52978_54693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (26))){
var inst_52892 = (state_52932[(11)]);
var inst_52899 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52892);
var state_52932__$1 = state_52932;
var statearr_52979_54694 = state_52932__$1;
(statearr_52979_54694[(2)] = inst_52899);

(statearr_52979_54694[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (16))){
var state_52932__$1 = state_52932;
var statearr_52980_54696 = state_52932__$1;
(statearr_52980_54696[(2)] = true);

(statearr_52980_54696[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (38))){
var inst_52922 = (state_52932[(2)]);
var state_52932__$1 = state_52932;
var statearr_52981_54701 = state_52932__$1;
(statearr_52981_54701[(2)] = inst_52922);

(statearr_52981_54701[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (30))){
var inst_52883 = (state_52932[(9)]);
var inst_52884 = (state_52932[(13)]);
var inst_52892 = (state_52932[(11)]);
var inst_52909 = cljs.core.empty_QMARK_(inst_52883);
var inst_52910 = (inst_52884.cljs$core$IFn$_invoke$arity$1 ? inst_52884.cljs$core$IFn$_invoke$arity$1(inst_52892) : inst_52884.call(null,inst_52892));
var inst_52911 = cljs.core.not(inst_52910);
var inst_52912 = ((inst_52909) && (inst_52911));
var state_52932__$1 = state_52932;
var statearr_52982_54723 = state_52932__$1;
(statearr_52982_54723[(2)] = inst_52912);

(statearr_52982_54723[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (10))){
var inst_52834 = (state_52932[(8)]);
var inst_52855 = (state_52932[(2)]);
var inst_52856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52855,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52855,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52855,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52859 = inst_52834;
var state_52932__$1 = (function (){var statearr_52983 = state_52932;
(statearr_52983[(7)] = inst_52859);

(statearr_52983[(16)] = inst_52857);

(statearr_52983[(17)] = inst_52856);

(statearr_52983[(18)] = inst_52858);

return statearr_52983;
})();
var statearr_52984_54731 = state_52932__$1;
(statearr_52984_54731[(2)] = null);

(statearr_52984_54731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (18))){
var inst_52874 = (state_52932[(2)]);
var state_52932__$1 = state_52932;
var statearr_52985_54733 = state_52932__$1;
(statearr_52985_54733[(2)] = inst_52874);

(statearr_52985_54733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (37))){
var state_52932__$1 = state_52932;
var statearr_52986_54734 = state_52932__$1;
(statearr_52986_54734[(2)] = null);

(statearr_52986_54734[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52933 === (8))){
var inst_52834 = (state_52932[(8)]);
var inst_52852 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52834);
var state_52932__$1 = state_52932;
var statearr_52987_54735 = state_52932__$1;
(statearr_52987_54735[(2)] = inst_52852);

(statearr_52987_54735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___54609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__52035__auto__,c__52131__auto___54609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__52036__auto__ = null;
var cljs$core$async$mix_$_state_machine__52036__auto____0 = (function (){
var statearr_52988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52988[(0)] = cljs$core$async$mix_$_state_machine__52036__auto__);

(statearr_52988[(1)] = (1));

return statearr_52988;
});
var cljs$core$async$mix_$_state_machine__52036__auto____1 = (function (state_52932){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_52932);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e52989){if((e52989 instanceof Object)){
var ex__52039__auto__ = e52989;
var statearr_52990_54736 = state_52932;
(statearr_52990_54736[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52989;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54737 = state_52932;
state_52932 = G__54737;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__52036__auto__ = function(state_52932){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__52036__auto____1.call(this,state_52932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__52036__auto____0;
cljs$core$async$mix_$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__52036__auto____1;
return cljs$core$async$mix_$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___54609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__52133__auto__ = (function (){var statearr_52991 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_52991[(6)] = c__52131__auto___54609);

return statearr_52991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___54609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52993 = arguments.length;
switch (G__52993) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__52996 = arguments.length;
switch (G__52996) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__52994_SHARP_){
if(cljs.core.truth_((p1__52994_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52994_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52994_SHARP_.call(null,topic)))){
return p1__52994_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52994_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52997 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52998){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52998 = meta52998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_52999,meta52998__$1){
var self__ = this;
var _52999__$1 = this;
return (new cljs.core.async.t_cljs$core$async52997(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52998__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_52999){
var self__ = this;
var _52999__$1 = this;
return self__.meta52998;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52997.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52998","meta52998",13349073,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52997";

cljs.core.async.t_cljs$core$async52997.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52997");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52997.
 */
cljs.core.async.__GT_t_cljs$core$async52997 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async52997(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52998){
return (new cljs.core.async.t_cljs$core$async52997(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52998));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async52997(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__52131__auto___54785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___54785,mults,ensure_mult,p){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___54785,mults,ensure_mult,p){
return (function (state_53071){
var state_val_53072 = (state_53071[(1)]);
if((state_val_53072 === (7))){
var inst_53067 = (state_53071[(2)]);
var state_53071__$1 = state_53071;
var statearr_53073_54787 = state_53071__$1;
(statearr_53073_54787[(2)] = inst_53067);

(statearr_53073_54787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (20))){
var state_53071__$1 = state_53071;
var statearr_53074_54789 = state_53071__$1;
(statearr_53074_54789[(2)] = null);

(statearr_53074_54789[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (1))){
var state_53071__$1 = state_53071;
var statearr_53075_54790 = state_53071__$1;
(statearr_53075_54790[(2)] = null);

(statearr_53075_54790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (24))){
var inst_53050 = (state_53071[(7)]);
var inst_53059 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_53050);
var state_53071__$1 = state_53071;
var statearr_53076_54791 = state_53071__$1;
(statearr_53076_54791[(2)] = inst_53059);

(statearr_53076_54791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (4))){
var inst_53002 = (state_53071[(8)]);
var inst_53002__$1 = (state_53071[(2)]);
var inst_53003 = (inst_53002__$1 == null);
var state_53071__$1 = (function (){var statearr_53077 = state_53071;
(statearr_53077[(8)] = inst_53002__$1);

return statearr_53077;
})();
if(cljs.core.truth_(inst_53003)){
var statearr_53078_54793 = state_53071__$1;
(statearr_53078_54793[(1)] = (5));

} else {
var statearr_53079_54794 = state_53071__$1;
(statearr_53079_54794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (15))){
var inst_53044 = (state_53071[(2)]);
var state_53071__$1 = state_53071;
var statearr_53080_54795 = state_53071__$1;
(statearr_53080_54795[(2)] = inst_53044);

(statearr_53080_54795[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (21))){
var inst_53064 = (state_53071[(2)]);
var state_53071__$1 = (function (){var statearr_53081 = state_53071;
(statearr_53081[(9)] = inst_53064);

return statearr_53081;
})();
var statearr_53082_54796 = state_53071__$1;
(statearr_53082_54796[(2)] = null);

(statearr_53082_54796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (13))){
var inst_53026 = (state_53071[(10)]);
var inst_53028 = cljs.core.chunked_seq_QMARK_(inst_53026);
var state_53071__$1 = state_53071;
if(inst_53028){
var statearr_53083_54801 = state_53071__$1;
(statearr_53083_54801[(1)] = (16));

} else {
var statearr_53084_54802 = state_53071__$1;
(statearr_53084_54802[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (22))){
var inst_53056 = (state_53071[(2)]);
var state_53071__$1 = state_53071;
if(cljs.core.truth_(inst_53056)){
var statearr_53085_54803 = state_53071__$1;
(statearr_53085_54803[(1)] = (23));

} else {
var statearr_53086_54804 = state_53071__$1;
(statearr_53086_54804[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (6))){
var inst_53002 = (state_53071[(8)]);
var inst_53052 = (state_53071[(11)]);
var inst_53050 = (state_53071[(7)]);
var inst_53050__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_53002) : topic_fn.call(null,inst_53002));
var inst_53051 = cljs.core.deref(mults);
var inst_53052__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53051,inst_53050__$1);
var state_53071__$1 = (function (){var statearr_53087 = state_53071;
(statearr_53087[(11)] = inst_53052__$1);

(statearr_53087[(7)] = inst_53050__$1);

return statearr_53087;
})();
if(cljs.core.truth_(inst_53052__$1)){
var statearr_53088_54805 = state_53071__$1;
(statearr_53088_54805[(1)] = (19));

} else {
var statearr_53089_54806 = state_53071__$1;
(statearr_53089_54806[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (25))){
var inst_53061 = (state_53071[(2)]);
var state_53071__$1 = state_53071;
var statearr_53090_54807 = state_53071__$1;
(statearr_53090_54807[(2)] = inst_53061);

(statearr_53090_54807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (17))){
var inst_53026 = (state_53071[(10)]);
var inst_53035 = cljs.core.first(inst_53026);
var inst_53036 = cljs.core.async.muxch_STAR_(inst_53035);
var inst_53037 = cljs.core.async.close_BANG_(inst_53036);
var inst_53038 = cljs.core.next(inst_53026);
var inst_53012 = inst_53038;
var inst_53013 = null;
var inst_53014 = (0);
var inst_53015 = (0);
var state_53071__$1 = (function (){var statearr_53091 = state_53071;
(statearr_53091[(12)] = inst_53014);

(statearr_53091[(13)] = inst_53012);

(statearr_53091[(14)] = inst_53013);

(statearr_53091[(15)] = inst_53037);

(statearr_53091[(16)] = inst_53015);

return statearr_53091;
})();
var statearr_53092_54808 = state_53071__$1;
(statearr_53092_54808[(2)] = null);

(statearr_53092_54808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (3))){
var inst_53069 = (state_53071[(2)]);
var state_53071__$1 = state_53071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53071__$1,inst_53069);
} else {
if((state_val_53072 === (12))){
var inst_53046 = (state_53071[(2)]);
var state_53071__$1 = state_53071;
var statearr_53093_54812 = state_53071__$1;
(statearr_53093_54812[(2)] = inst_53046);

(statearr_53093_54812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (2))){
var state_53071__$1 = state_53071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53071__$1,(4),ch);
} else {
if((state_val_53072 === (23))){
var state_53071__$1 = state_53071;
var statearr_53094_54821 = state_53071__$1;
(statearr_53094_54821[(2)] = null);

(statearr_53094_54821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (19))){
var inst_53002 = (state_53071[(8)]);
var inst_53052 = (state_53071[(11)]);
var inst_53054 = cljs.core.async.muxch_STAR_(inst_53052);
var state_53071__$1 = state_53071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53071__$1,(22),inst_53054,inst_53002);
} else {
if((state_val_53072 === (11))){
var inst_53012 = (state_53071[(13)]);
var inst_53026 = (state_53071[(10)]);
var inst_53026__$1 = cljs.core.seq(inst_53012);
var state_53071__$1 = (function (){var statearr_53095 = state_53071;
(statearr_53095[(10)] = inst_53026__$1);

return statearr_53095;
})();
if(inst_53026__$1){
var statearr_53096_54822 = state_53071__$1;
(statearr_53096_54822[(1)] = (13));

} else {
var statearr_53097_54823 = state_53071__$1;
(statearr_53097_54823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (9))){
var inst_53048 = (state_53071[(2)]);
var state_53071__$1 = state_53071;
var statearr_53098_54824 = state_53071__$1;
(statearr_53098_54824[(2)] = inst_53048);

(statearr_53098_54824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (5))){
var inst_53009 = cljs.core.deref(mults);
var inst_53010 = cljs.core.vals(inst_53009);
var inst_53011 = cljs.core.seq(inst_53010);
var inst_53012 = inst_53011;
var inst_53013 = null;
var inst_53014 = (0);
var inst_53015 = (0);
var state_53071__$1 = (function (){var statearr_53099 = state_53071;
(statearr_53099[(12)] = inst_53014);

(statearr_53099[(13)] = inst_53012);

(statearr_53099[(14)] = inst_53013);

(statearr_53099[(16)] = inst_53015);

return statearr_53099;
})();
var statearr_53100_54826 = state_53071__$1;
(statearr_53100_54826[(2)] = null);

(statearr_53100_54826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (14))){
var state_53071__$1 = state_53071;
var statearr_53104_54828 = state_53071__$1;
(statearr_53104_54828[(2)] = null);

(statearr_53104_54828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (16))){
var inst_53026 = (state_53071[(10)]);
var inst_53030 = cljs.core.chunk_first(inst_53026);
var inst_53031 = cljs.core.chunk_rest(inst_53026);
var inst_53032 = cljs.core.count(inst_53030);
var inst_53012 = inst_53031;
var inst_53013 = inst_53030;
var inst_53014 = inst_53032;
var inst_53015 = (0);
var state_53071__$1 = (function (){var statearr_53105 = state_53071;
(statearr_53105[(12)] = inst_53014);

(statearr_53105[(13)] = inst_53012);

(statearr_53105[(14)] = inst_53013);

(statearr_53105[(16)] = inst_53015);

return statearr_53105;
})();
var statearr_53106_54830 = state_53071__$1;
(statearr_53106_54830[(2)] = null);

(statearr_53106_54830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (10))){
var inst_53014 = (state_53071[(12)]);
var inst_53012 = (state_53071[(13)]);
var inst_53013 = (state_53071[(14)]);
var inst_53015 = (state_53071[(16)]);
var inst_53020 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_53013,inst_53015);
var inst_53021 = cljs.core.async.muxch_STAR_(inst_53020);
var inst_53022 = cljs.core.async.close_BANG_(inst_53021);
var inst_53023 = (inst_53015 + (1));
var tmp53101 = inst_53014;
var tmp53102 = inst_53012;
var tmp53103 = inst_53013;
var inst_53012__$1 = tmp53102;
var inst_53013__$1 = tmp53103;
var inst_53014__$1 = tmp53101;
var inst_53015__$1 = inst_53023;
var state_53071__$1 = (function (){var statearr_53107 = state_53071;
(statearr_53107[(12)] = inst_53014__$1);

(statearr_53107[(13)] = inst_53012__$1);

(statearr_53107[(17)] = inst_53022);

(statearr_53107[(14)] = inst_53013__$1);

(statearr_53107[(16)] = inst_53015__$1);

return statearr_53107;
})();
var statearr_53108_54837 = state_53071__$1;
(statearr_53108_54837[(2)] = null);

(statearr_53108_54837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (18))){
var inst_53041 = (state_53071[(2)]);
var state_53071__$1 = state_53071;
var statearr_53109_54843 = state_53071__$1;
(statearr_53109_54843[(2)] = inst_53041);

(statearr_53109_54843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53072 === (8))){
var inst_53014 = (state_53071[(12)]);
var inst_53015 = (state_53071[(16)]);
var inst_53017 = (inst_53015 < inst_53014);
var inst_53018 = inst_53017;
var state_53071__$1 = state_53071;
if(cljs.core.truth_(inst_53018)){
var statearr_53110_54844 = state_53071__$1;
(statearr_53110_54844[(1)] = (10));

} else {
var statearr_53111_54845 = state_53071__$1;
(statearr_53111_54845[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___54785,mults,ensure_mult,p))
;
return ((function (switch__52035__auto__,c__52131__auto___54785,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__52036__auto__ = null;
var cljs$core$async$state_machine__52036__auto____0 = (function (){
var statearr_53112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53112[(0)] = cljs$core$async$state_machine__52036__auto__);

(statearr_53112[(1)] = (1));

return statearr_53112;
});
var cljs$core$async$state_machine__52036__auto____1 = (function (state_53071){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_53071);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e53113){if((e53113 instanceof Object)){
var ex__52039__auto__ = e53113;
var statearr_53114_54846 = state_53071;
(statearr_53114_54846[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54847 = state_53071;
state_53071 = G__54847;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$state_machine__52036__auto__ = function(state_53071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52036__auto____1.call(this,state_53071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52036__auto____0;
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52036__auto____1;
return cljs$core$async$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___54785,mults,ensure_mult,p))
})();
var state__52133__auto__ = (function (){var statearr_53115 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_53115[(6)] = c__52131__auto___54785);

return statearr_53115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___54785,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__53117 = arguments.length;
switch (G__53117) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__53119 = arguments.length;
switch (G__53119) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__53121 = arguments.length;
switch (G__53121) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__52131__auto___54852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___54852,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___54852,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53160){
var state_val_53161 = (state_53160[(1)]);
if((state_val_53161 === (7))){
var state_53160__$1 = state_53160;
var statearr_53162_54853 = state_53160__$1;
(statearr_53162_54853[(2)] = null);

(statearr_53162_54853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53161 === (1))){
var state_53160__$1 = state_53160;
var statearr_53163_54854 = state_53160__$1;
(statearr_53163_54854[(2)] = null);

(statearr_53163_54854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53161 === (4))){
var inst_53124 = (state_53160[(7)]);
var inst_53126 = (inst_53124 < cnt);
var state_53160__$1 = state_53160;
if(cljs.core.truth_(inst_53126)){
var statearr_53164_54855 = state_53160__$1;
(statearr_53164_54855[(1)] = (6));

} else {
var statearr_53165_54856 = state_53160__$1;
(statearr_53165_54856[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53161 === (15))){
var inst_53156 = (state_53160[(2)]);
var state_53160__$1 = state_53160;
var statearr_53166_54860 = state_53160__$1;
(statearr_53166_54860[(2)] = inst_53156);

(statearr_53166_54860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53161 === (13))){
var inst_53149 = cljs.core.async.close_BANG_(out);
var state_53160__$1 = state_53160;
var statearr_53167_54865 = state_53160__$1;
(statearr_53167_54865[(2)] = inst_53149);

(statearr_53167_54865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53161 === (6))){
var state_53160__$1 = state_53160;
var statearr_53168_54866 = state_53160__$1;
(statearr_53168_54866[(2)] = null);

(statearr_53168_54866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53161 === (3))){
var inst_53158 = (state_53160[(2)]);
var state_53160__$1 = state_53160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53160__$1,inst_53158);
} else {
if((state_val_53161 === (12))){
var inst_53146 = (state_53160[(8)]);
var inst_53146__$1 = (state_53160[(2)]);
var inst_53147 = cljs.core.some(cljs.core.nil_QMARK_,inst_53146__$1);
var state_53160__$1 = (function (){var statearr_53169 = state_53160;
(statearr_53169[(8)] = inst_53146__$1);

return statearr_53169;
})();
if(cljs.core.truth_(inst_53147)){
var statearr_53170_54867 = state_53160__$1;
(statearr_53170_54867[(1)] = (13));

} else {
var statearr_53171_54868 = state_53160__$1;
(statearr_53171_54868[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53161 === (2))){
var inst_53123 = cljs.core.reset_BANG_(dctr,cnt);
var inst_53124 = (0);
var state_53160__$1 = (function (){var statearr_53172 = state_53160;
(statearr_53172[(7)] = inst_53124);

(statearr_53172[(9)] = inst_53123);

return statearr_53172;
})();
var statearr_53173_54869 = state_53160__$1;
(statearr_53173_54869[(2)] = null);

(statearr_53173_54869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53161 === (11))){
var inst_53124 = (state_53160[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53160,(10),Object,null,(9));
var inst_53133 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_53124) : chs__$1.call(null,inst_53124));
var inst_53134 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_53124) : done.call(null,inst_53124));
var inst_53135 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_53133,inst_53134);
var state_53160__$1 = state_53160;
var statearr_53174_54870 = state_53160__$1;
(statearr_53174_54870[(2)] = inst_53135);


cljs.core.async.impl.ioc_helpers.process_exception(state_53160__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53161 === (9))){
var inst_53124 = (state_53160[(7)]);
var inst_53137 = (state_53160[(2)]);
var inst_53138 = (inst_53124 + (1));
var inst_53124__$1 = inst_53138;
var state_53160__$1 = (function (){var statearr_53175 = state_53160;
(statearr_53175[(7)] = inst_53124__$1);

(statearr_53175[(10)] = inst_53137);

return statearr_53175;
})();
var statearr_53176_54871 = state_53160__$1;
(statearr_53176_54871[(2)] = null);

(statearr_53176_54871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53161 === (5))){
var inst_53144 = (state_53160[(2)]);
var state_53160__$1 = (function (){var statearr_53177 = state_53160;
(statearr_53177[(11)] = inst_53144);

return statearr_53177;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53160__$1,(12),dchan);
} else {
if((state_val_53161 === (14))){
var inst_53146 = (state_53160[(8)]);
var inst_53151 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_53146);
var state_53160__$1 = state_53160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53160__$1,(16),out,inst_53151);
} else {
if((state_val_53161 === (16))){
var inst_53153 = (state_53160[(2)]);
var state_53160__$1 = (function (){var statearr_53178 = state_53160;
(statearr_53178[(12)] = inst_53153);

return statearr_53178;
})();
var statearr_53179_54873 = state_53160__$1;
(statearr_53179_54873[(2)] = null);

(statearr_53179_54873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53161 === (10))){
var inst_53128 = (state_53160[(2)]);
var inst_53129 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_53160__$1 = (function (){var statearr_53180 = state_53160;
(statearr_53180[(13)] = inst_53128);

return statearr_53180;
})();
var statearr_53181_54874 = state_53160__$1;
(statearr_53181_54874[(2)] = inst_53129);


cljs.core.async.impl.ioc_helpers.process_exception(state_53160__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53161 === (8))){
var inst_53142 = (state_53160[(2)]);
var state_53160__$1 = state_53160;
var statearr_53182_54876 = state_53160__$1;
(statearr_53182_54876[(2)] = inst_53142);

(statearr_53182_54876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___54852,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__52035__auto__,c__52131__auto___54852,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__52036__auto__ = null;
var cljs$core$async$state_machine__52036__auto____0 = (function (){
var statearr_53183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53183[(0)] = cljs$core$async$state_machine__52036__auto__);

(statearr_53183[(1)] = (1));

return statearr_53183;
});
var cljs$core$async$state_machine__52036__auto____1 = (function (state_53160){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_53160);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e53184){if((e53184 instanceof Object)){
var ex__52039__auto__ = e53184;
var statearr_53185_54877 = state_53160;
(statearr_53185_54877[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54878 = state_53160;
state_53160 = G__54878;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$state_machine__52036__auto__ = function(state_53160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52036__auto____1.call(this,state_53160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52036__auto____0;
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52036__auto____1;
return cljs$core$async$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___54852,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__52133__auto__ = (function (){var statearr_53186 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_53186[(6)] = c__52131__auto___54852);

return statearr_53186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___54852,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__53189 = arguments.length;
switch (G__53189) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52131__auto___54880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___54880,out){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___54880,out){
return (function (state_53224){
var state_val_53225 = (state_53224[(1)]);
if((state_val_53225 === (7))){
var inst_53201 = (state_53224[(7)]);
var inst_53200 = (state_53224[(8)]);
var inst_53200__$1 = (state_53224[(2)]);
var inst_53201__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53200__$1,(0),null);
var inst_53202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53200__$1,(1),null);
var inst_53203 = (inst_53201__$1 == null);
var state_53224__$1 = (function (){var statearr_53226 = state_53224;
(statearr_53226[(9)] = inst_53202);

(statearr_53226[(7)] = inst_53201__$1);

(statearr_53226[(8)] = inst_53200__$1);

return statearr_53226;
})();
if(cljs.core.truth_(inst_53203)){
var statearr_53231_54881 = state_53224__$1;
(statearr_53231_54881[(1)] = (8));

} else {
var statearr_53232_54882 = state_53224__$1;
(statearr_53232_54882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (1))){
var inst_53190 = cljs.core.vec(chs);
var inst_53191 = inst_53190;
var state_53224__$1 = (function (){var statearr_53233 = state_53224;
(statearr_53233[(10)] = inst_53191);

return statearr_53233;
})();
var statearr_53234_54883 = state_53224__$1;
(statearr_53234_54883[(2)] = null);

(statearr_53234_54883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (4))){
var inst_53191 = (state_53224[(10)]);
var state_53224__$1 = state_53224;
return cljs.core.async.ioc_alts_BANG_(state_53224__$1,(7),inst_53191);
} else {
if((state_val_53225 === (6))){
var inst_53220 = (state_53224[(2)]);
var state_53224__$1 = state_53224;
var statearr_53235_54888 = state_53224__$1;
(statearr_53235_54888[(2)] = inst_53220);

(statearr_53235_54888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (3))){
var inst_53222 = (state_53224[(2)]);
var state_53224__$1 = state_53224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53224__$1,inst_53222);
} else {
if((state_val_53225 === (2))){
var inst_53191 = (state_53224[(10)]);
var inst_53193 = cljs.core.count(inst_53191);
var inst_53194 = (inst_53193 > (0));
var state_53224__$1 = state_53224;
if(cljs.core.truth_(inst_53194)){
var statearr_53246_54893 = state_53224__$1;
(statearr_53246_54893[(1)] = (4));

} else {
var statearr_53247_54894 = state_53224__$1;
(statearr_53247_54894[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (11))){
var inst_53191 = (state_53224[(10)]);
var inst_53213 = (state_53224[(2)]);
var tmp53236 = inst_53191;
var inst_53191__$1 = tmp53236;
var state_53224__$1 = (function (){var statearr_53248 = state_53224;
(statearr_53248[(10)] = inst_53191__$1);

(statearr_53248[(11)] = inst_53213);

return statearr_53248;
})();
var statearr_53253_54897 = state_53224__$1;
(statearr_53253_54897[(2)] = null);

(statearr_53253_54897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (9))){
var inst_53201 = (state_53224[(7)]);
var state_53224__$1 = state_53224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53224__$1,(11),out,inst_53201);
} else {
if((state_val_53225 === (5))){
var inst_53218 = cljs.core.async.close_BANG_(out);
var state_53224__$1 = state_53224;
var statearr_53260_54898 = state_53224__$1;
(statearr_53260_54898[(2)] = inst_53218);

(statearr_53260_54898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (10))){
var inst_53216 = (state_53224[(2)]);
var state_53224__$1 = state_53224;
var statearr_53261_54899 = state_53224__$1;
(statearr_53261_54899[(2)] = inst_53216);

(statearr_53261_54899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (8))){
var inst_53202 = (state_53224[(9)]);
var inst_53201 = (state_53224[(7)]);
var inst_53191 = (state_53224[(10)]);
var inst_53200 = (state_53224[(8)]);
var inst_53205 = (function (){var cs = inst_53191;
var vec__53196 = inst_53200;
var v = inst_53201;
var c = inst_53202;
return ((function (cs,vec__53196,v,c,inst_53202,inst_53201,inst_53191,inst_53200,state_val_53225,c__52131__auto___54880,out){
return (function (p1__53187_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__53187_SHARP_);
});
;})(cs,vec__53196,v,c,inst_53202,inst_53201,inst_53191,inst_53200,state_val_53225,c__52131__auto___54880,out))
})();
var inst_53208 = cljs.core.filterv(inst_53205,inst_53191);
var inst_53191__$1 = inst_53208;
var state_53224__$1 = (function (){var statearr_53267 = state_53224;
(statearr_53267[(10)] = inst_53191__$1);

return statearr_53267;
})();
var statearr_53268_54900 = state_53224__$1;
(statearr_53268_54900[(2)] = null);

(statearr_53268_54900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___54880,out))
;
return ((function (switch__52035__auto__,c__52131__auto___54880,out){
return (function() {
var cljs$core$async$state_machine__52036__auto__ = null;
var cljs$core$async$state_machine__52036__auto____0 = (function (){
var statearr_53269 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53269[(0)] = cljs$core$async$state_machine__52036__auto__);

(statearr_53269[(1)] = (1));

return statearr_53269;
});
var cljs$core$async$state_machine__52036__auto____1 = (function (state_53224){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_53224);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e53271){if((e53271 instanceof Object)){
var ex__52039__auto__ = e53271;
var statearr_53275_54901 = state_53224;
(statearr_53275_54901[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54902 = state_53224;
state_53224 = G__54902;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$state_machine__52036__auto__ = function(state_53224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52036__auto____1.call(this,state_53224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52036__auto____0;
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52036__auto____1;
return cljs$core$async$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___54880,out))
})();
var state__52133__auto__ = (function (){var statearr_53276 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_53276[(6)] = c__52131__auto___54880);

return statearr_53276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___54880,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__53278 = arguments.length;
switch (G__53278) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52131__auto___54904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___54904,out){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___54904,out){
return (function (state_53302){
var state_val_53303 = (state_53302[(1)]);
if((state_val_53303 === (7))){
var inst_53284 = (state_53302[(7)]);
var inst_53284__$1 = (state_53302[(2)]);
var inst_53285 = (inst_53284__$1 == null);
var inst_53286 = cljs.core.not(inst_53285);
var state_53302__$1 = (function (){var statearr_53304 = state_53302;
(statearr_53304[(7)] = inst_53284__$1);

return statearr_53304;
})();
if(inst_53286){
var statearr_53305_54905 = state_53302__$1;
(statearr_53305_54905[(1)] = (8));

} else {
var statearr_53306_54906 = state_53302__$1;
(statearr_53306_54906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53303 === (1))){
var inst_53279 = (0);
var state_53302__$1 = (function (){var statearr_53307 = state_53302;
(statearr_53307[(8)] = inst_53279);

return statearr_53307;
})();
var statearr_53308_54907 = state_53302__$1;
(statearr_53308_54907[(2)] = null);

(statearr_53308_54907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53303 === (4))){
var state_53302__$1 = state_53302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53302__$1,(7),ch);
} else {
if((state_val_53303 === (6))){
var inst_53297 = (state_53302[(2)]);
var state_53302__$1 = state_53302;
var statearr_53309_54908 = state_53302__$1;
(statearr_53309_54908[(2)] = inst_53297);

(statearr_53309_54908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53303 === (3))){
var inst_53299 = (state_53302[(2)]);
var inst_53300 = cljs.core.async.close_BANG_(out);
var state_53302__$1 = (function (){var statearr_53310 = state_53302;
(statearr_53310[(9)] = inst_53299);

return statearr_53310;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53302__$1,inst_53300);
} else {
if((state_val_53303 === (2))){
var inst_53279 = (state_53302[(8)]);
var inst_53281 = (inst_53279 < n);
var state_53302__$1 = state_53302;
if(cljs.core.truth_(inst_53281)){
var statearr_53311_54909 = state_53302__$1;
(statearr_53311_54909[(1)] = (4));

} else {
var statearr_53312_54910 = state_53302__$1;
(statearr_53312_54910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53303 === (11))){
var inst_53279 = (state_53302[(8)]);
var inst_53289 = (state_53302[(2)]);
var inst_53290 = (inst_53279 + (1));
var inst_53279__$1 = inst_53290;
var state_53302__$1 = (function (){var statearr_53313 = state_53302;
(statearr_53313[(8)] = inst_53279__$1);

(statearr_53313[(10)] = inst_53289);

return statearr_53313;
})();
var statearr_53314_54911 = state_53302__$1;
(statearr_53314_54911[(2)] = null);

(statearr_53314_54911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53303 === (9))){
var state_53302__$1 = state_53302;
var statearr_53315_54912 = state_53302__$1;
(statearr_53315_54912[(2)] = null);

(statearr_53315_54912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53303 === (5))){
var state_53302__$1 = state_53302;
var statearr_53318_54915 = state_53302__$1;
(statearr_53318_54915[(2)] = null);

(statearr_53318_54915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53303 === (10))){
var inst_53294 = (state_53302[(2)]);
var state_53302__$1 = state_53302;
var statearr_53319_54916 = state_53302__$1;
(statearr_53319_54916[(2)] = inst_53294);

(statearr_53319_54916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53303 === (8))){
var inst_53284 = (state_53302[(7)]);
var state_53302__$1 = state_53302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53302__$1,(11),out,inst_53284);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___54904,out))
;
return ((function (switch__52035__auto__,c__52131__auto___54904,out){
return (function() {
var cljs$core$async$state_machine__52036__auto__ = null;
var cljs$core$async$state_machine__52036__auto____0 = (function (){
var statearr_53325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53325[(0)] = cljs$core$async$state_machine__52036__auto__);

(statearr_53325[(1)] = (1));

return statearr_53325;
});
var cljs$core$async$state_machine__52036__auto____1 = (function (state_53302){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_53302);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e53326){if((e53326 instanceof Object)){
var ex__52039__auto__ = e53326;
var statearr_53327_54919 = state_53302;
(statearr_53327_54919[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54920 = state_53302;
state_53302 = G__54920;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$state_machine__52036__auto__ = function(state_53302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52036__auto____1.call(this,state_53302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52036__auto____0;
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52036__auto____1;
return cljs$core$async$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___54904,out))
})();
var state__52133__auto__ = (function (){var statearr_53328 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_53328[(6)] = c__52131__auto___54904);

return statearr_53328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___54904,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53330 = (function (f,ch,meta53331){
this.f = f;
this.ch = ch;
this.meta53331 = meta53331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53332,meta53331__$1){
var self__ = this;
var _53332__$1 = this;
return (new cljs.core.async.t_cljs$core$async53330(self__.f,self__.ch,meta53331__$1));
});

cljs.core.async.t_cljs$core$async53330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53332){
var self__ = this;
var _53332__$1 = this;
return self__.meta53331;
});

cljs.core.async.t_cljs$core$async53330.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async53330.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53335 = (function (f,ch,meta53331,_,fn1,meta53336){
this.f = f;
this.ch = ch;
this.meta53331 = meta53331;
this._ = _;
this.fn1 = fn1;
this.meta53336 = meta53336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53337,meta53336__$1){
var self__ = this;
var _53337__$1 = this;
return (new cljs.core.async.t_cljs$core$async53335(self__.f,self__.ch,self__.meta53331,self__._,self__.fn1,meta53336__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async53335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53337){
var self__ = this;
var _53337__$1 = this;
return self__.meta53336;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__53329_SHARP_){
var G__53342 = (((p1__53329_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__53329_SHARP_) : self__.f.call(null,p1__53329_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__53342) : f1.call(null,G__53342));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async53335.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53331","meta53331",-1273598668,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53330","cljs.core.async/t_cljs$core$async53330",566856690,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53336","meta53336",549940550,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53335";

cljs.core.async.t_cljs$core$async53335.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53335");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53335.
 */
cljs.core.async.__GT_t_cljs$core$async53335 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53335(f__$1,ch__$1,meta53331__$1,___$2,fn1__$1,meta53336){
return (new cljs.core.async.t_cljs$core$async53335(f__$1,ch__$1,meta53331__$1,___$2,fn1__$1,meta53336));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async53335(self__.f,self__.ch,self__.meta53331,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__53350 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__53350) : self__.f.call(null,G__53350));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async53330.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async53330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53331","meta53331",-1273598668,null)], null);
});

cljs.core.async.t_cljs$core$async53330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53330";

cljs.core.async.t_cljs$core$async53330.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53330");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53330.
 */
cljs.core.async.__GT_t_cljs$core$async53330 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53330(f__$1,ch__$1,meta53331){
return (new cljs.core.async.t_cljs$core$async53330(f__$1,ch__$1,meta53331));
});

}

return (new cljs.core.async.t_cljs$core$async53330(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53358 = (function (f,ch,meta53359){
this.f = f;
this.ch = ch;
this.meta53359 = meta53359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53360,meta53359__$1){
var self__ = this;
var _53360__$1 = this;
return (new cljs.core.async.t_cljs$core$async53358(self__.f,self__.ch,meta53359__$1));
});

cljs.core.async.t_cljs$core$async53358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53360){
var self__ = this;
var _53360__$1 = this;
return self__.meta53359;
});

cljs.core.async.t_cljs$core$async53358.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53358.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53358.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53358.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53358.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53358.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async53358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53359","meta53359",-747504299,null)], null);
});

cljs.core.async.t_cljs$core$async53358.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53358";

cljs.core.async.t_cljs$core$async53358.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53358");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53358.
 */
cljs.core.async.__GT_t_cljs$core$async53358 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53358(f__$1,ch__$1,meta53359){
return (new cljs.core.async.t_cljs$core$async53358(f__$1,ch__$1,meta53359));
});

}

return (new cljs.core.async.t_cljs$core$async53358(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53367 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53367 = (function (p,ch,meta53368){
this.p = p;
this.ch = ch;
this.meta53368 = meta53368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53369,meta53368__$1){
var self__ = this;
var _53369__$1 = this;
return (new cljs.core.async.t_cljs$core$async53367(self__.p,self__.ch,meta53368__$1));
});

cljs.core.async.t_cljs$core$async53367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53369){
var self__ = this;
var _53369__$1 = this;
return self__.meta53368;
});

cljs.core.async.t_cljs$core$async53367.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53367.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async53367.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53367.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async53367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53368","meta53368",-929291423,null)], null);
});

cljs.core.async.t_cljs$core$async53367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53367";

cljs.core.async.t_cljs$core$async53367.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53367");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53367.
 */
cljs.core.async.__GT_t_cljs$core$async53367 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53367(p__$1,ch__$1,meta53368){
return (new cljs.core.async.t_cljs$core$async53367(p__$1,ch__$1,meta53368));
});

}

return (new cljs.core.async.t_cljs$core$async53367(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__53407 = arguments.length;
switch (G__53407) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52131__auto___54960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___54960,out){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___54960,out){
return (function (state_53433){
var state_val_53434 = (state_53433[(1)]);
if((state_val_53434 === (7))){
var inst_53429 = (state_53433[(2)]);
var state_53433__$1 = state_53433;
var statearr_53451_54961 = state_53433__$1;
(statearr_53451_54961[(2)] = inst_53429);

(statearr_53451_54961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (1))){
var state_53433__$1 = state_53433;
var statearr_53453_54962 = state_53433__$1;
(statearr_53453_54962[(2)] = null);

(statearr_53453_54962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (4))){
var inst_53414 = (state_53433[(7)]);
var inst_53414__$1 = (state_53433[(2)]);
var inst_53415 = (inst_53414__$1 == null);
var state_53433__$1 = (function (){var statearr_53454 = state_53433;
(statearr_53454[(7)] = inst_53414__$1);

return statearr_53454;
})();
if(cljs.core.truth_(inst_53415)){
var statearr_53465_54963 = state_53433__$1;
(statearr_53465_54963[(1)] = (5));

} else {
var statearr_53466_54964 = state_53433__$1;
(statearr_53466_54964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (6))){
var inst_53414 = (state_53433[(7)]);
var inst_53419 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53414) : p.call(null,inst_53414));
var state_53433__$1 = state_53433;
if(cljs.core.truth_(inst_53419)){
var statearr_53467_54965 = state_53433__$1;
(statearr_53467_54965[(1)] = (8));

} else {
var statearr_53468_54966 = state_53433__$1;
(statearr_53468_54966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (3))){
var inst_53431 = (state_53433[(2)]);
var state_53433__$1 = state_53433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53433__$1,inst_53431);
} else {
if((state_val_53434 === (2))){
var state_53433__$1 = state_53433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53433__$1,(4),ch);
} else {
if((state_val_53434 === (11))){
var inst_53423 = (state_53433[(2)]);
var state_53433__$1 = state_53433;
var statearr_53486_54973 = state_53433__$1;
(statearr_53486_54973[(2)] = inst_53423);

(statearr_53486_54973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (9))){
var state_53433__$1 = state_53433;
var statearr_53487_54974 = state_53433__$1;
(statearr_53487_54974[(2)] = null);

(statearr_53487_54974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (5))){
var inst_53417 = cljs.core.async.close_BANG_(out);
var state_53433__$1 = state_53433;
var statearr_53488_54975 = state_53433__$1;
(statearr_53488_54975[(2)] = inst_53417);

(statearr_53488_54975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (10))){
var inst_53426 = (state_53433[(2)]);
var state_53433__$1 = (function (){var statearr_53493 = state_53433;
(statearr_53493[(8)] = inst_53426);

return statearr_53493;
})();
var statearr_53494_54976 = state_53433__$1;
(statearr_53494_54976[(2)] = null);

(statearr_53494_54976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (8))){
var inst_53414 = (state_53433[(7)]);
var state_53433__$1 = state_53433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53433__$1,(11),out,inst_53414);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___54960,out))
;
return ((function (switch__52035__auto__,c__52131__auto___54960,out){
return (function() {
var cljs$core$async$state_machine__52036__auto__ = null;
var cljs$core$async$state_machine__52036__auto____0 = (function (){
var statearr_53495 = [null,null,null,null,null,null,null,null,null];
(statearr_53495[(0)] = cljs$core$async$state_machine__52036__auto__);

(statearr_53495[(1)] = (1));

return statearr_53495;
});
var cljs$core$async$state_machine__52036__auto____1 = (function (state_53433){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_53433);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e53498){if((e53498 instanceof Object)){
var ex__52039__auto__ = e53498;
var statearr_53499_54983 = state_53433;
(statearr_53499_54983[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54984 = state_53433;
state_53433 = G__54984;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$state_machine__52036__auto__ = function(state_53433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52036__auto____1.call(this,state_53433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52036__auto____0;
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52036__auto____1;
return cljs$core$async$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___54960,out))
})();
var state__52133__auto__ = (function (){var statearr_53508 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_53508[(6)] = c__52131__auto___54960);

return statearr_53508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___54960,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53518 = arguments.length;
switch (G__53518) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__52131__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto__){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto__){
return (function (state_53580){
var state_val_53581 = (state_53580[(1)]);
if((state_val_53581 === (7))){
var inst_53576 = (state_53580[(2)]);
var state_53580__$1 = state_53580;
var statearr_53582_54992 = state_53580__$1;
(statearr_53582_54992[(2)] = inst_53576);

(statearr_53582_54992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (20))){
var inst_53546 = (state_53580[(7)]);
var inst_53557 = (state_53580[(2)]);
var inst_53558 = cljs.core.next(inst_53546);
var inst_53532 = inst_53558;
var inst_53533 = null;
var inst_53534 = (0);
var inst_53535 = (0);
var state_53580__$1 = (function (){var statearr_53583 = state_53580;
(statearr_53583[(8)] = inst_53535);

(statearr_53583[(9)] = inst_53533);

(statearr_53583[(10)] = inst_53557);

(statearr_53583[(11)] = inst_53534);

(statearr_53583[(12)] = inst_53532);

return statearr_53583;
})();
var statearr_53584_54993 = state_53580__$1;
(statearr_53584_54993[(2)] = null);

(statearr_53584_54993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (1))){
var state_53580__$1 = state_53580;
var statearr_53585_54994 = state_53580__$1;
(statearr_53585_54994[(2)] = null);

(statearr_53585_54994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (4))){
var inst_53521 = (state_53580[(13)]);
var inst_53521__$1 = (state_53580[(2)]);
var inst_53522 = (inst_53521__$1 == null);
var state_53580__$1 = (function (){var statearr_53586 = state_53580;
(statearr_53586[(13)] = inst_53521__$1);

return statearr_53586;
})();
if(cljs.core.truth_(inst_53522)){
var statearr_53587_54998 = state_53580__$1;
(statearr_53587_54998[(1)] = (5));

} else {
var statearr_53588_54999 = state_53580__$1;
(statearr_53588_54999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (15))){
var state_53580__$1 = state_53580;
var statearr_53592_55000 = state_53580__$1;
(statearr_53592_55000[(2)] = null);

(statearr_53592_55000[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (21))){
var state_53580__$1 = state_53580;
var statearr_53594_55001 = state_53580__$1;
(statearr_53594_55001[(2)] = null);

(statearr_53594_55001[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (13))){
var inst_53535 = (state_53580[(8)]);
var inst_53533 = (state_53580[(9)]);
var inst_53534 = (state_53580[(11)]);
var inst_53532 = (state_53580[(12)]);
var inst_53542 = (state_53580[(2)]);
var inst_53543 = (inst_53535 + (1));
var tmp53589 = inst_53533;
var tmp53590 = inst_53534;
var tmp53591 = inst_53532;
var inst_53532__$1 = tmp53591;
var inst_53533__$1 = tmp53589;
var inst_53534__$1 = tmp53590;
var inst_53535__$1 = inst_53543;
var state_53580__$1 = (function (){var statearr_53595 = state_53580;
(statearr_53595[(8)] = inst_53535__$1);

(statearr_53595[(9)] = inst_53533__$1);

(statearr_53595[(14)] = inst_53542);

(statearr_53595[(11)] = inst_53534__$1);

(statearr_53595[(12)] = inst_53532__$1);

return statearr_53595;
})();
var statearr_53596_55006 = state_53580__$1;
(statearr_53596_55006[(2)] = null);

(statearr_53596_55006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (22))){
var state_53580__$1 = state_53580;
var statearr_53597_55008 = state_53580__$1;
(statearr_53597_55008[(2)] = null);

(statearr_53597_55008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (6))){
var inst_53521 = (state_53580[(13)]);
var inst_53530 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53521) : f.call(null,inst_53521));
var inst_53531 = cljs.core.seq(inst_53530);
var inst_53532 = inst_53531;
var inst_53533 = null;
var inst_53534 = (0);
var inst_53535 = (0);
var state_53580__$1 = (function (){var statearr_53598 = state_53580;
(statearr_53598[(8)] = inst_53535);

(statearr_53598[(9)] = inst_53533);

(statearr_53598[(11)] = inst_53534);

(statearr_53598[(12)] = inst_53532);

return statearr_53598;
})();
var statearr_53599_55009 = state_53580__$1;
(statearr_53599_55009[(2)] = null);

(statearr_53599_55009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (17))){
var inst_53546 = (state_53580[(7)]);
var inst_53550 = cljs.core.chunk_first(inst_53546);
var inst_53551 = cljs.core.chunk_rest(inst_53546);
var inst_53552 = cljs.core.count(inst_53550);
var inst_53532 = inst_53551;
var inst_53533 = inst_53550;
var inst_53534 = inst_53552;
var inst_53535 = (0);
var state_53580__$1 = (function (){var statearr_53600 = state_53580;
(statearr_53600[(8)] = inst_53535);

(statearr_53600[(9)] = inst_53533);

(statearr_53600[(11)] = inst_53534);

(statearr_53600[(12)] = inst_53532);

return statearr_53600;
})();
var statearr_53601_55010 = state_53580__$1;
(statearr_53601_55010[(2)] = null);

(statearr_53601_55010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (3))){
var inst_53578 = (state_53580[(2)]);
var state_53580__$1 = state_53580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53580__$1,inst_53578);
} else {
if((state_val_53581 === (12))){
var inst_53566 = (state_53580[(2)]);
var state_53580__$1 = state_53580;
var statearr_53602_55013 = state_53580__$1;
(statearr_53602_55013[(2)] = inst_53566);

(statearr_53602_55013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (2))){
var state_53580__$1 = state_53580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53580__$1,(4),in$);
} else {
if((state_val_53581 === (23))){
var inst_53574 = (state_53580[(2)]);
var state_53580__$1 = state_53580;
var statearr_53603_55014 = state_53580__$1;
(statearr_53603_55014[(2)] = inst_53574);

(statearr_53603_55014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (19))){
var inst_53561 = (state_53580[(2)]);
var state_53580__$1 = state_53580;
var statearr_53604_55015 = state_53580__$1;
(statearr_53604_55015[(2)] = inst_53561);

(statearr_53604_55015[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (11))){
var inst_53532 = (state_53580[(12)]);
var inst_53546 = (state_53580[(7)]);
var inst_53546__$1 = cljs.core.seq(inst_53532);
var state_53580__$1 = (function (){var statearr_53605 = state_53580;
(statearr_53605[(7)] = inst_53546__$1);

return statearr_53605;
})();
if(inst_53546__$1){
var statearr_53606_55016 = state_53580__$1;
(statearr_53606_55016[(1)] = (14));

} else {
var statearr_53607_55017 = state_53580__$1;
(statearr_53607_55017[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (9))){
var inst_53568 = (state_53580[(2)]);
var inst_53569 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53580__$1 = (function (){var statearr_53608 = state_53580;
(statearr_53608[(15)] = inst_53568);

return statearr_53608;
})();
if(cljs.core.truth_(inst_53569)){
var statearr_53609_55021 = state_53580__$1;
(statearr_53609_55021[(1)] = (21));

} else {
var statearr_53610_55023 = state_53580__$1;
(statearr_53610_55023[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (5))){
var inst_53524 = cljs.core.async.close_BANG_(out);
var state_53580__$1 = state_53580;
var statearr_53611_55029 = state_53580__$1;
(statearr_53611_55029[(2)] = inst_53524);

(statearr_53611_55029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (14))){
var inst_53546 = (state_53580[(7)]);
var inst_53548 = cljs.core.chunked_seq_QMARK_(inst_53546);
var state_53580__$1 = state_53580;
if(inst_53548){
var statearr_53612_55031 = state_53580__$1;
(statearr_53612_55031[(1)] = (17));

} else {
var statearr_53613_55032 = state_53580__$1;
(statearr_53613_55032[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (16))){
var inst_53564 = (state_53580[(2)]);
var state_53580__$1 = state_53580;
var statearr_53614_55034 = state_53580__$1;
(statearr_53614_55034[(2)] = inst_53564);

(statearr_53614_55034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53581 === (10))){
var inst_53535 = (state_53580[(8)]);
var inst_53533 = (state_53580[(9)]);
var inst_53540 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_53533,inst_53535);
var state_53580__$1 = state_53580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53580__$1,(13),out,inst_53540);
} else {
if((state_val_53581 === (18))){
var inst_53546 = (state_53580[(7)]);
var inst_53555 = cljs.core.first(inst_53546);
var state_53580__$1 = state_53580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53580__$1,(20),out,inst_53555);
} else {
if((state_val_53581 === (8))){
var inst_53535 = (state_53580[(8)]);
var inst_53534 = (state_53580[(11)]);
var inst_53537 = (inst_53535 < inst_53534);
var inst_53538 = inst_53537;
var state_53580__$1 = state_53580;
if(cljs.core.truth_(inst_53538)){
var statearr_53615_55038 = state_53580__$1;
(statearr_53615_55038[(1)] = (10));

} else {
var statearr_53616_55039 = state_53580__$1;
(statearr_53616_55039[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto__))
;
return ((function (switch__52035__auto__,c__52131__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__52036__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__52036__auto____0 = (function (){
var statearr_53617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53617[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__52036__auto__);

(statearr_53617[(1)] = (1));

return statearr_53617;
});
var cljs$core$async$mapcat_STAR__$_state_machine__52036__auto____1 = (function (state_53580){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_53580);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e53619){if((e53619 instanceof Object)){
var ex__52039__auto__ = e53619;
var statearr_53624_55040 = state_53580;
(statearr_53624_55040[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55041 = state_53580;
state_53580 = G__55041;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__52036__auto__ = function(state_53580){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__52036__auto____1.call(this,state_53580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__52036__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__52036__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto__))
})();
var state__52133__auto__ = (function (){var statearr_53625 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_53625[(6)] = c__52131__auto__);

return statearr_53625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto__))
);

return c__52131__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53627 = arguments.length;
switch (G__53627) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__53633 = arguments.length;
switch (G__53633) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__53635 = arguments.length;
switch (G__53635) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52131__auto___55046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___55046,out){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___55046,out){
return (function (state_53659){
var state_val_53660 = (state_53659[(1)]);
if((state_val_53660 === (7))){
var inst_53654 = (state_53659[(2)]);
var state_53659__$1 = state_53659;
var statearr_53661_55048 = state_53659__$1;
(statearr_53661_55048[(2)] = inst_53654);

(statearr_53661_55048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (1))){
var inst_53636 = null;
var state_53659__$1 = (function (){var statearr_53662 = state_53659;
(statearr_53662[(7)] = inst_53636);

return statearr_53662;
})();
var statearr_53663_55049 = state_53659__$1;
(statearr_53663_55049[(2)] = null);

(statearr_53663_55049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (4))){
var inst_53639 = (state_53659[(8)]);
var inst_53639__$1 = (state_53659[(2)]);
var inst_53640 = (inst_53639__$1 == null);
var inst_53641 = cljs.core.not(inst_53640);
var state_53659__$1 = (function (){var statearr_53664 = state_53659;
(statearr_53664[(8)] = inst_53639__$1);

return statearr_53664;
})();
if(inst_53641){
var statearr_53665_55050 = state_53659__$1;
(statearr_53665_55050[(1)] = (5));

} else {
var statearr_53666_55051 = state_53659__$1;
(statearr_53666_55051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (6))){
var state_53659__$1 = state_53659;
var statearr_53667_55052 = state_53659__$1;
(statearr_53667_55052[(2)] = null);

(statearr_53667_55052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (3))){
var inst_53656 = (state_53659[(2)]);
var inst_53657 = cljs.core.async.close_BANG_(out);
var state_53659__$1 = (function (){var statearr_53668 = state_53659;
(statearr_53668[(9)] = inst_53656);

return statearr_53668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53659__$1,inst_53657);
} else {
if((state_val_53660 === (2))){
var state_53659__$1 = state_53659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53659__$1,(4),ch);
} else {
if((state_val_53660 === (11))){
var inst_53639 = (state_53659[(8)]);
var inst_53648 = (state_53659[(2)]);
var inst_53636 = inst_53639;
var state_53659__$1 = (function (){var statearr_53669 = state_53659;
(statearr_53669[(10)] = inst_53648);

(statearr_53669[(7)] = inst_53636);

return statearr_53669;
})();
var statearr_53670_55053 = state_53659__$1;
(statearr_53670_55053[(2)] = null);

(statearr_53670_55053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (9))){
var inst_53639 = (state_53659[(8)]);
var state_53659__$1 = state_53659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53659__$1,(11),out,inst_53639);
} else {
if((state_val_53660 === (5))){
var inst_53636 = (state_53659[(7)]);
var inst_53639 = (state_53659[(8)]);
var inst_53643 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53639,inst_53636);
var state_53659__$1 = state_53659;
if(inst_53643){
var statearr_53672_55054 = state_53659__$1;
(statearr_53672_55054[(1)] = (8));

} else {
var statearr_53673_55055 = state_53659__$1;
(statearr_53673_55055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (10))){
var inst_53651 = (state_53659[(2)]);
var state_53659__$1 = state_53659;
var statearr_53674_55056 = state_53659__$1;
(statearr_53674_55056[(2)] = inst_53651);

(statearr_53674_55056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (8))){
var inst_53636 = (state_53659[(7)]);
var tmp53671 = inst_53636;
var inst_53636__$1 = tmp53671;
var state_53659__$1 = (function (){var statearr_53675 = state_53659;
(statearr_53675[(7)] = inst_53636__$1);

return statearr_53675;
})();
var statearr_53676_55057 = state_53659__$1;
(statearr_53676_55057[(2)] = null);

(statearr_53676_55057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___55046,out))
;
return ((function (switch__52035__auto__,c__52131__auto___55046,out){
return (function() {
var cljs$core$async$state_machine__52036__auto__ = null;
var cljs$core$async$state_machine__52036__auto____0 = (function (){
var statearr_53677 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53677[(0)] = cljs$core$async$state_machine__52036__auto__);

(statearr_53677[(1)] = (1));

return statearr_53677;
});
var cljs$core$async$state_machine__52036__auto____1 = (function (state_53659){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_53659);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e53678){if((e53678 instanceof Object)){
var ex__52039__auto__ = e53678;
var statearr_53679_55060 = state_53659;
(statearr_53679_55060[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55062 = state_53659;
state_53659 = G__55062;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$state_machine__52036__auto__ = function(state_53659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52036__auto____1.call(this,state_53659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52036__auto____0;
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52036__auto____1;
return cljs$core$async$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___55046,out))
})();
var state__52133__auto__ = (function (){var statearr_53680 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_53680[(6)] = c__52131__auto___55046);

return statearr_53680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___55046,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53682 = arguments.length;
switch (G__53682) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52131__auto___55065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___55065,out){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___55065,out){
return (function (state_53720){
var state_val_53721 = (state_53720[(1)]);
if((state_val_53721 === (7))){
var inst_53716 = (state_53720[(2)]);
var state_53720__$1 = state_53720;
var statearr_53722_55066 = state_53720__$1;
(statearr_53722_55066[(2)] = inst_53716);

(statearr_53722_55066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53721 === (1))){
var inst_53683 = (new Array(n));
var inst_53684 = inst_53683;
var inst_53685 = (0);
var state_53720__$1 = (function (){var statearr_53723 = state_53720;
(statearr_53723[(7)] = inst_53684);

(statearr_53723[(8)] = inst_53685);

return statearr_53723;
})();
var statearr_53724_55067 = state_53720__$1;
(statearr_53724_55067[(2)] = null);

(statearr_53724_55067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53721 === (4))){
var inst_53688 = (state_53720[(9)]);
var inst_53688__$1 = (state_53720[(2)]);
var inst_53689 = (inst_53688__$1 == null);
var inst_53690 = cljs.core.not(inst_53689);
var state_53720__$1 = (function (){var statearr_53725 = state_53720;
(statearr_53725[(9)] = inst_53688__$1);

return statearr_53725;
})();
if(inst_53690){
var statearr_53726_55068 = state_53720__$1;
(statearr_53726_55068[(1)] = (5));

} else {
var statearr_53727_55069 = state_53720__$1;
(statearr_53727_55069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53721 === (15))){
var inst_53710 = (state_53720[(2)]);
var state_53720__$1 = state_53720;
var statearr_53728_55070 = state_53720__$1;
(statearr_53728_55070[(2)] = inst_53710);

(statearr_53728_55070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53721 === (13))){
var state_53720__$1 = state_53720;
var statearr_53729_55071 = state_53720__$1;
(statearr_53729_55071[(2)] = null);

(statearr_53729_55071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53721 === (6))){
var inst_53685 = (state_53720[(8)]);
var inst_53706 = (inst_53685 > (0));
var state_53720__$1 = state_53720;
if(cljs.core.truth_(inst_53706)){
var statearr_53730_55072 = state_53720__$1;
(statearr_53730_55072[(1)] = (12));

} else {
var statearr_53731_55073 = state_53720__$1;
(statearr_53731_55073[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53721 === (3))){
var inst_53718 = (state_53720[(2)]);
var state_53720__$1 = state_53720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53720__$1,inst_53718);
} else {
if((state_val_53721 === (12))){
var inst_53684 = (state_53720[(7)]);
var inst_53708 = cljs.core.vec(inst_53684);
var state_53720__$1 = state_53720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53720__$1,(15),out,inst_53708);
} else {
if((state_val_53721 === (2))){
var state_53720__$1 = state_53720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53720__$1,(4),ch);
} else {
if((state_val_53721 === (11))){
var inst_53700 = (state_53720[(2)]);
var inst_53701 = (new Array(n));
var inst_53684 = inst_53701;
var inst_53685 = (0);
var state_53720__$1 = (function (){var statearr_53732 = state_53720;
(statearr_53732[(7)] = inst_53684);

(statearr_53732[(8)] = inst_53685);

(statearr_53732[(10)] = inst_53700);

return statearr_53732;
})();
var statearr_53733_55084 = state_53720__$1;
(statearr_53733_55084[(2)] = null);

(statearr_53733_55084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53721 === (9))){
var inst_53684 = (state_53720[(7)]);
var inst_53698 = cljs.core.vec(inst_53684);
var state_53720__$1 = state_53720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53720__$1,(11),out,inst_53698);
} else {
if((state_val_53721 === (5))){
var inst_53693 = (state_53720[(11)]);
var inst_53684 = (state_53720[(7)]);
var inst_53688 = (state_53720[(9)]);
var inst_53685 = (state_53720[(8)]);
var inst_53692 = (inst_53684[inst_53685] = inst_53688);
var inst_53693__$1 = (inst_53685 + (1));
var inst_53694 = (inst_53693__$1 < n);
var state_53720__$1 = (function (){var statearr_53734 = state_53720;
(statearr_53734[(11)] = inst_53693__$1);

(statearr_53734[(12)] = inst_53692);

return statearr_53734;
})();
if(cljs.core.truth_(inst_53694)){
var statearr_53735_55090 = state_53720__$1;
(statearr_53735_55090[(1)] = (8));

} else {
var statearr_53736_55091 = state_53720__$1;
(statearr_53736_55091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53721 === (14))){
var inst_53713 = (state_53720[(2)]);
var inst_53714 = cljs.core.async.close_BANG_(out);
var state_53720__$1 = (function (){var statearr_53738 = state_53720;
(statearr_53738[(13)] = inst_53713);

return statearr_53738;
})();
var statearr_53739_55099 = state_53720__$1;
(statearr_53739_55099[(2)] = inst_53714);

(statearr_53739_55099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53721 === (10))){
var inst_53704 = (state_53720[(2)]);
var state_53720__$1 = state_53720;
var statearr_53740_55101 = state_53720__$1;
(statearr_53740_55101[(2)] = inst_53704);

(statearr_53740_55101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53721 === (8))){
var inst_53693 = (state_53720[(11)]);
var inst_53684 = (state_53720[(7)]);
var tmp53737 = inst_53684;
var inst_53684__$1 = tmp53737;
var inst_53685 = inst_53693;
var state_53720__$1 = (function (){var statearr_53741 = state_53720;
(statearr_53741[(7)] = inst_53684__$1);

(statearr_53741[(8)] = inst_53685);

return statearr_53741;
})();
var statearr_53742_55102 = state_53720__$1;
(statearr_53742_55102[(2)] = null);

(statearr_53742_55102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___55065,out))
;
return ((function (switch__52035__auto__,c__52131__auto___55065,out){
return (function() {
var cljs$core$async$state_machine__52036__auto__ = null;
var cljs$core$async$state_machine__52036__auto____0 = (function (){
var statearr_53743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53743[(0)] = cljs$core$async$state_machine__52036__auto__);

(statearr_53743[(1)] = (1));

return statearr_53743;
});
var cljs$core$async$state_machine__52036__auto____1 = (function (state_53720){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_53720);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e53744){if((e53744 instanceof Object)){
var ex__52039__auto__ = e53744;
var statearr_53745_55103 = state_53720;
(statearr_53745_55103[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55104 = state_53720;
state_53720 = G__55104;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$state_machine__52036__auto__ = function(state_53720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52036__auto____1.call(this,state_53720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52036__auto____0;
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52036__auto____1;
return cljs$core$async$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___55065,out))
})();
var state__52133__auto__ = (function (){var statearr_53746 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_53746[(6)] = c__52131__auto___55065);

return statearr_53746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___55065,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53748 = arguments.length;
switch (G__53748) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52131__auto___55106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52131__auto___55106,out){
return (function (){
var f__52132__auto__ = (function (){var switch__52035__auto__ = ((function (c__52131__auto___55106,out){
return (function (state_53794){
var state_val_53795 = (state_53794[(1)]);
if((state_val_53795 === (7))){
var inst_53786 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
var statearr_53796_55107 = state_53794__$1;
(statearr_53796_55107[(2)] = inst_53786);

(statearr_53796_55107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (1))){
var inst_53749 = [];
var inst_53750 = inst_53749;
var inst_53751 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53794__$1 = (function (){var statearr_53797 = state_53794;
(statearr_53797[(7)] = inst_53750);

(statearr_53797[(8)] = inst_53751);

return statearr_53797;
})();
var statearr_53798_55110 = state_53794__$1;
(statearr_53798_55110[(2)] = null);

(statearr_53798_55110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (4))){
var inst_53754 = (state_53794[(9)]);
var inst_53754__$1 = (state_53794[(2)]);
var inst_53755 = (inst_53754__$1 == null);
var inst_53756 = cljs.core.not(inst_53755);
var state_53794__$1 = (function (){var statearr_53800 = state_53794;
(statearr_53800[(9)] = inst_53754__$1);

return statearr_53800;
})();
if(inst_53756){
var statearr_53801_55111 = state_53794__$1;
(statearr_53801_55111[(1)] = (5));

} else {
var statearr_53802_55113 = state_53794__$1;
(statearr_53802_55113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (15))){
var inst_53780 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
var statearr_53803_55115 = state_53794__$1;
(statearr_53803_55115[(2)] = inst_53780);

(statearr_53803_55115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (13))){
var state_53794__$1 = state_53794;
var statearr_53805_55116 = state_53794__$1;
(statearr_53805_55116[(2)] = null);

(statearr_53805_55116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (6))){
var inst_53750 = (state_53794[(7)]);
var inst_53775 = inst_53750.length;
var inst_53776 = (inst_53775 > (0));
var state_53794__$1 = state_53794;
if(cljs.core.truth_(inst_53776)){
var statearr_53806_55117 = state_53794__$1;
(statearr_53806_55117[(1)] = (12));

} else {
var statearr_53807_55118 = state_53794__$1;
(statearr_53807_55118[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (3))){
var inst_53788 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53794__$1,inst_53788);
} else {
if((state_val_53795 === (12))){
var inst_53750 = (state_53794[(7)]);
var inst_53778 = cljs.core.vec(inst_53750);
var state_53794__$1 = state_53794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53794__$1,(15),out,inst_53778);
} else {
if((state_val_53795 === (2))){
var state_53794__$1 = state_53794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53794__$1,(4),ch);
} else {
if((state_val_53795 === (11))){
var inst_53758 = (state_53794[(10)]);
var inst_53754 = (state_53794[(9)]);
var inst_53768 = (state_53794[(2)]);
var inst_53769 = [];
var inst_53770 = inst_53769.push(inst_53754);
var inst_53750 = inst_53769;
var inst_53751 = inst_53758;
var state_53794__$1 = (function (){var statearr_53808 = state_53794;
(statearr_53808[(11)] = inst_53768);

(statearr_53808[(7)] = inst_53750);

(statearr_53808[(8)] = inst_53751);

(statearr_53808[(12)] = inst_53770);

return statearr_53808;
})();
var statearr_53809_55120 = state_53794__$1;
(statearr_53809_55120[(2)] = null);

(statearr_53809_55120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (9))){
var inst_53750 = (state_53794[(7)]);
var inst_53766 = cljs.core.vec(inst_53750);
var state_53794__$1 = state_53794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53794__$1,(11),out,inst_53766);
} else {
if((state_val_53795 === (5))){
var inst_53751 = (state_53794[(8)]);
var inst_53758 = (state_53794[(10)]);
var inst_53754 = (state_53794[(9)]);
var inst_53758__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53754) : f.call(null,inst_53754));
var inst_53759 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53758__$1,inst_53751);
var inst_53760 = cljs.core.keyword_identical_QMARK_(inst_53751,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53761 = ((inst_53759) || (inst_53760));
var state_53794__$1 = (function (){var statearr_53811 = state_53794;
(statearr_53811[(10)] = inst_53758__$1);

return statearr_53811;
})();
if(cljs.core.truth_(inst_53761)){
var statearr_53812_55123 = state_53794__$1;
(statearr_53812_55123[(1)] = (8));

} else {
var statearr_53813_55124 = state_53794__$1;
(statearr_53813_55124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (14))){
var inst_53783 = (state_53794[(2)]);
var inst_53784 = cljs.core.async.close_BANG_(out);
var state_53794__$1 = (function (){var statearr_53815 = state_53794;
(statearr_53815[(13)] = inst_53783);

return statearr_53815;
})();
var statearr_53816_55125 = state_53794__$1;
(statearr_53816_55125[(2)] = inst_53784);

(statearr_53816_55125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (10))){
var inst_53773 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
var statearr_53817_55177 = state_53794__$1;
(statearr_53817_55177[(2)] = inst_53773);

(statearr_53817_55177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (8))){
var inst_53750 = (state_53794[(7)]);
var inst_53758 = (state_53794[(10)]);
var inst_53754 = (state_53794[(9)]);
var inst_53763 = inst_53750.push(inst_53754);
var tmp53814 = inst_53750;
var inst_53750__$1 = tmp53814;
var inst_53751 = inst_53758;
var state_53794__$1 = (function (){var statearr_53818 = state_53794;
(statearr_53818[(7)] = inst_53750__$1);

(statearr_53818[(14)] = inst_53763);

(statearr_53818[(8)] = inst_53751);

return statearr_53818;
})();
var statearr_53819_55185 = state_53794__$1;
(statearr_53819_55185[(2)] = null);

(statearr_53819_55185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52131__auto___55106,out))
;
return ((function (switch__52035__auto__,c__52131__auto___55106,out){
return (function() {
var cljs$core$async$state_machine__52036__auto__ = null;
var cljs$core$async$state_machine__52036__auto____0 = (function (){
var statearr_53820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53820[(0)] = cljs$core$async$state_machine__52036__auto__);

(statearr_53820[(1)] = (1));

return statearr_53820;
});
var cljs$core$async$state_machine__52036__auto____1 = (function (state_53794){
while(true){
var ret_value__52037__auto__ = (function (){try{while(true){
var result__52038__auto__ = switch__52035__auto__(state_53794);
if(cljs.core.keyword_identical_QMARK_(result__52038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52038__auto__;
}
break;
}
}catch (e53821){if((e53821 instanceof Object)){
var ex__52039__auto__ = e53821;
var statearr_53823_55186 = state_53794;
(statearr_53823_55186[(5)] = ex__52039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53821;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55190 = state_53794;
state_53794 = G__55190;
continue;
} else {
return ret_value__52037__auto__;
}
break;
}
});
cljs$core$async$state_machine__52036__auto__ = function(state_53794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52036__auto____1.call(this,state_53794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52036__auto____0;
cljs$core$async$state_machine__52036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52036__auto____1;
return cljs$core$async$state_machine__52036__auto__;
})()
;})(switch__52035__auto__,c__52131__auto___55106,out))
})();
var state__52133__auto__ = (function (){var statearr_53825 = (f__52132__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52132__auto__.cljs$core$IFn$_invoke$arity$0() : f__52132__auto__.call(null));
(statearr_53825[(6)] = c__52131__auto___55106);

return statearr_53825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52133__auto__);
});})(c__52131__auto___55106,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
