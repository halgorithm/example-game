!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=398)}([function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
function i(t){return!!t.get&&"function"==typeof t.get||!!t.set&&"function"==typeof t.set}function n(t,e,n){var s=n?t[e]:Object.getOwnPropertyDescriptor(t,e);return!n&&s.value&&"object"==typeof s.value&&(s=s.value),!(!s||!i(s))&&(void 0===s.enumerable&&(s.enumerable=!0),void 0===s.configurable&&(s.configurable=!0),s)}function s(t,e){var i=Object.getOwnPropertyDescriptor(t,e);return!!i&&(i.value&&"object"==typeof i.value&&(i=i.value),!1===i.configurable)}function r(t,e,i,r){for(var o in e)if(e.hasOwnProperty(o)){var h=n(e,o,i);if(!1!==h){var l=r||t;if(s(l.prototype,o)){if(a.ignoreFinals)continue;throw new Error("cannot override final property '"+o+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(t.prototype,o,h)}else t.prototype[o]=e[o]}}function o(t,e){if(e){Array.isArray(e)||(e=[e]);for(var i=0;i<e.length;i++)r(t,e[i].prototype||e[i])}}function a(t){t||(t={});var e,i;if(t.initialize){if("function"!=typeof t.initialize)throw new Error("initialize must be a function");e=t.initialize,delete t.initialize}else if(t.Extends){var n=t.Extends;e=function(){n.apply(this,arguments)}}else e=function(){};t.Extends?(e.prototype=Object.create(t.Extends.prototype),e.prototype.constructor=e,i=t.Extends,delete t.Extends):e.prototype.constructor=e;var s=null;return t.Mixins&&(s=t.Mixins,delete t.Mixins),o(e,s),r(e,t,!0,i),e}a.extend=r,a.mixin=o,a.ignoreFinals=!1,t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=typeof t;return t&&"number"!==n&&"string"!==n&&t.hasOwnProperty(e)&&void 0!==t[e]?t[e]:i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(91),o=i(13),a=new n({Extends:o,initialize:function(t,e){o.call(this),this.scene=t,this.type=e,this.name="",this.active=!0,this.tabIndex=-1,this.data=null,this.renderFlags=15,this.cameraFilter=0,this.input=null,this.body=null,this.scene.sys.queueDepthSort()},setActive:function(t){return this.active=t,this},setName:function(t){return this.name=t,this},setDataEnabled:function(){return this.data||(this.data=new r(this)),this},setData:function(t,e){return this.data||(this.data=new r(this)),this.data.set(t,e),this},getData:function(t){return this.data||(this.data=new r(this)),this.data.get(t)},setInteractive:function(t,e){return this.scene.sys.input.enable(this,t,e),this},update:function(){},toJSON:function(){return s.ToJSON(this)},willRender:function(){return a.RENDER_MASK===this.renderFlags},destroy:function(){this.preDestroy&&this.preDestroy.call(this);var t=this.scene.sys;t.displayList.remove(this),t.updateList.remove(this),this.input&&(t.input.clear(this),this.input=void 0),this.data&&(this.data.destroy(),this.data=void 0),this.body&&(this.body.destroy(),this.body=void 0),t.queueDepthSort(),this.active=!1,this.visible=!1,this.scene=void 0,this.removeAllListeners()}});a.RENDER_MASK=15,t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(){};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(t&&"number"!=typeof t){if(t.hasOwnProperty(e))return t[e];if(e.indexOf(".")){for(var n=e.split("."),s=t,r=i,o=0;o<n.length;o++){if(!s.hasOwnProperty(n[o])){r=i;break}r=s[n[o]],s=s[n[o]]}return r}return i}return i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){void 0===t&&(t=0),void 0===e&&(e=t),this.x=t,this.y=e},setTo:function(t,e){return void 0===t&&(t=0),void 0===e&&(e=t),this.x=t,this.y=e,this}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){"object"==typeof t?(this.x=t.x||0,this.y=t.y||0):(void 0===e&&(e=t),this.x=t||0,this.y=e||0)},clone:function(){return new s(this.x,this.y)},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},setFromObject:function(t){return this.x=t.x||0,this.y=t.y||0,this},set:function(t,e){return void 0===e&&(e=t),this.x=t,this.y=e,this},setToPolar:function(t,e){return null==e&&(e=1),this.x=Math.cos(t)*e,this.y=Math.sin(t)*e,this},equals:function(t){return this.x===t.x&&this.y===t.y},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t):(this.x=0,this.y=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},negate:function(){return this.x=-this.x,this.y=-this.y,this},distance:function(t){var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},distanceSq:function(t){var e=t.x-this.x,i=t.y-this.y;return e*e+i*i},length:function(){var t=this.x,e=this.y;return Math.sqrt(t*t+e*e)},lengthSq:function(){var t=this.x,e=this.y;return t*t+e*e},normalize:function(){var t=this.x,e=this.y,i=t*t+e*e;return i>0&&(i=1/Math.sqrt(i),this.x=t*i,this.y=e*i),this},normalizeRightHand:function(){var t=this.x;return this.x=-1*this.y,this.y=t,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lerp:function(t,e){void 0===e&&(e=0);var i=this.x,n=this.y;return this.x=i+e*(t.x-i),this.y=n+e*(t.y-n),this},transformMat3:function(t){var e=this.x,i=this.y,n=t.val;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this},transformMat4:function(t){var e=this.x,i=this.y,n=t.val;return this.x=n[0]*e+n[4]*i+n[12],this.y=n[1]*e+n[5]*i+n[13],this},reset:function(){return this.x=0,this.y=0,this}});s.ZERO=new s,t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={},n={install:function(t){for(var e in i)t[e]=i[e]},register:function(t,e){i[t]=e},destroy:function(){i={}}};t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(35),r=i(117),o=i(217),a=i(118),h=new n({initialize:function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),this.x=t,this.y=e,this.width=i,this.height=n},contains:function(t,e){return s(this,t,e)},getPoint:function(t,e){return r(this,t,e)},getPoints:function(t,e,i){return o(this,t,e,i)},getRandomPoint:function(t){return a(this,t)},setTo:function(t,e,i,n){return this.x=t,this.y=e,this.width=i,this.height=n,this},setEmpty:function(){return this.setTo(0,0,0,0)},setPosition:function(t,e){return void 0===e&&(e=t),this.x=t,this.y=e,this},setSize:function(t,e){return void 0===e&&(e=t),this.width=t,this.height=e,this},isEmpty:function(){return this.width<=0||this.height<=0},getLineA:function(){return{x1:this.x,y1:this.y,x2:this.right,y2:this.y}},getLineB:function(){return{x1:this.right,y1:this.y,x2:this.right,y2:this.bottom}},getLineC:function(){return{x1:this.right,y1:this.bottom,x2:this.x,y2:this.bottom}},getLineD:function(){return{x1:this.x,y1:this.bottom,x2:this.x,y2:this.y}},left:{get:function(){return this.x},set:function(t){t>=this.right?this.width=0:this.width=this.right-t,this.x=t}},right:{get:function(){return this.x+this.width},set:function(t){t<=this.x?this.width=0:this.width=t-this.x}},top:{get:function(){return this.y},set:function(t){t>=this.bottom?(this.height=0,this.y=t):this.height=this.bottom-t}},bottom:{get:function(){return this.y+this.height},set:function(t){t<=this.y?this.height=0:this.height=t-this.y}},centerX:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},centerY:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(11),r=new n({initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),this.displayList,this.updateList},boot:function(){this.displayList=this.systems.displayList,this.updateList=this.systems.updateList;var t=this.systems.events;t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},existing:function(t){return(t.renderCanvas||t.renderWebGL)&&this.displayList.add(t),t.preUpdate&&this.updateList.add(t),t},shutdown:function(){},destroy:function(){this.scene=null,this.displayList=null,this.updateList=null}});r.register=function(t,e){r.prototype.hasOwnProperty(t)||(r.prototype[t]=e)},s.register("GameObjectFactory",r,"add"),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(15),s=i(4),r=function(t,e,i){var r=s(t,e,null);if(null===r)return i;if(Array.isArray(r))return n.RND.pick(r);if("object"==typeof r){if(r.hasOwnProperty("randInt"))return n.RND.integerInRange(r.randInt[0],r.randInt[1]);if(r.hasOwnProperty("randFloat"))return n.RND.realInRange(r.randFloat[0],r.randFloat[1])}else if("function"==typeof r)return r(e);return r};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s={},r=new n({initialize:function(t){this.game=t,t.events.once("boot",this.boot,this)},boot:function(){this.game.events.once("destroy",this.destroy,this)},installGlobal:function(t,e){for(var i=t.game,n=t.scene,s=t.settings.map,r=0;r<e.length;r++){var o=e[r];i[o]&&(t[o]=i[o],s.hasOwnProperty(o)&&(n[s[o]]=t[o]))}},installLocal:function(t,e){for(var i=t.scene,n=t.settings.map,r=t.settings.isBooted,o=0;o<e.length;o++){var a=e[o];if(s[a]){var h=s[a],l=new h.plugin(i);t[h.mapping]=l,n.hasOwnProperty(h.mapping)&&(i[n[h.mapping]]=l),r&&l.boot()}}},remove:function(t){delete s[t]},destroy:function(){this.game=null}});r.register=function(t,e,i){s[t]={plugin:e,mapping:i}},t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Alpha:i(430),Animation:i(216),BlendMode:i(431),ComputedSize:i(432),Depth:i(433),Flip:i(434),GetBounds:i(435),MatrixStack:i(436),Origin:i(437),Pipeline:i(119),ScaleMode:i(438),ScrollFactor:i(439),Size:i(440),Texture:i(441),Tint:i(442),ToJSON:i(443),Transform:i(444),TransformMatrix:i(219),Visible:i(445)}},function(t,e,i){"use strict";function n(){}function s(t,e,i){this.fn=t,this.context=e,this.once=i||!1}function r(t,e,i,n,r){if("function"!=typeof i)throw new TypeError("The listener must be a function");var o=new s(i,n||t,r),a=l?l+e:e;return t._events[a]?t._events[a].fn?t._events[a]=[t._events[a],o]:t._events[a].push(o):(t._events[a]=o,t._eventsCount++),t}function o(t,e){0==--t._eventsCount?t._events=new n:delete t._events[e]}function a(){this._events=new n,this._eventsCount=0}var h=Object.prototype.hasOwnProperty,l="~";Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(l=!1)),a.prototype.eventNames=function(){var t,e,i=[];if(0===this._eventsCount)return i;for(e in t=this._events)h.call(t,e)&&i.push(l?e.slice(1):e);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(t)):i},a.prototype.listeners=function(t){var e=l?l+t:t,i=this._events[e];if(!i)return[];if(i.fn)return[i.fn];for(var n=0,s=i.length,r=new Array(s);n<s;n++)r[n]=i[n].fn;return r},a.prototype.listenerCount=function(t){var e=l?l+t:t,i=this._events[e];return i?i.fn?1:i.length:0},a.prototype.emit=function(t,e,i,n,s,r){var o=l?l+t:t;if(!this._events[o])return!1;var a,h,u=this._events[o],c=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),c){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,i),!0;case 4:return u.fn.call(u.context,e,i,n),!0;case 5:return u.fn.call(u.context,e,i,n,s),!0;case 6:return u.fn.call(u.context,e,i,n,s,r),!0}for(h=1,a=new Array(c-1);h<c;h++)a[h-1]=arguments[h];u.fn.apply(u.context,a)}else{var d,f=u.length;for(h=0;h<f;h++)switch(u[h].once&&this.removeListener(t,u[h].fn,void 0,!0),c){case 1:u[h].fn.call(u[h].context);break;case 2:u[h].fn.call(u[h].context,e);break;case 3:u[h].fn.call(u[h].context,e,i);break;case 4:u[h].fn.call(u[h].context,e,i,n);break;default:if(!a)for(d=1,a=new Array(c-1);d<c;d++)a[d-1]=arguments[d];u[h].fn.apply(u[h].context,a)}}return!0},a.prototype.on=function(t,e,i){return r(this,t,e,i,!1)},a.prototype.once=function(t,e,i){return r(this,t,e,i,!0)},a.prototype.removeListener=function(t,e,i,n){var s=l?l+t:t;if(!this._events[s])return this;if(!e)return o(this,s),this;var r=this._events[s];if(r.fn)r.fn!==e||n&&!r.once||i&&r.context!==i||o(this,s);else{for(var a=0,h=[],u=r.length;a<u;a++)(r[a].fn!==e||n&&!r[a].once||i&&r[a].context!==i)&&h.push(r[a]);h.length?this._events[s]=1===h.length?h[0]:h:o(this,s)}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=l?l+t:t,this._events[e]&&o(this,e)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=l,a.EventEmitter=a,t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(11),r=new n({initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),this.displayList,this.updateList},boot:function(){this.displayList=this.systems.displayList,this.updateList=this.systems.updateList;var t=this.systems.events;t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},shutdown:function(){},destroy:function(){this.scene=null,this.displayList=null,this.updateList=null}});r.register=function(t,e){r.prototype.hasOwnProperty(t)||(r.prototype[t]=e)},s.register("GameObjectCreator",r,"make"),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(429),s={PI2:2*Math.PI,TAU:.5*Math.PI,EPSILON:1e-6,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,RND:new n};t.exports=s},function(t,e){var i={};t.exports=i,function(){i._nextId=0,i._seed=0,i._nowStartTime=+new Date,i.extend=function(t,e){var n,s;"boolean"==typeof e?(n=2,s=e):(n=1,s=!0);for(var r=n;r<arguments.length;r++){var o=arguments[r];if(o)for(var a in o)s&&o[a]&&o[a].constructor===Object?t[a]&&t[a].constructor!==Object?t[a]=o[a]:(t[a]=t[a]||{},i.extend(t[a],s,o[a])):t[a]=o[a]}return t},i.clone=function(t,e){return i.extend({},e,t)},i.keys=function(t){if(Object.keys)return Object.keys(t);var e=[];for(var i in t)e.push(i);return e},i.values=function(t){var e=[];if(Object.keys){for(var i=Object.keys(t),n=0;n<i.length;n++)e.push(t[i[n]]);return e}for(var s in t)e.push(t[s]);return e},i.get=function(t,e,i,n){e=e.split(".").slice(i,n);for(var s=0;s<e.length;s+=1)t=t[e[s]];return t},i.set=function(t,e,n,s,r){var o=e.split(".").slice(s,r);return i.get(t,e,0,-1)[o[o.length-1]]=n,n},i.shuffle=function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(i.random()*(e+1)),s=t[e];t[e]=t[n],t[n]=s}return t},i.choose=function(t){return t[Math.floor(i.random()*t.length)]},i.isElement=function(t){return t instanceof HTMLElement},i.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},i.isFunction=function(t){return"function"==typeof t},i.isPlainObject=function(t){return"object"==typeof t&&t.constructor===Object},i.isString=function(t){return"[object String]"===Object.prototype.toString.call(t)},i.clamp=function(t,e,i){return t<e?e:t>i?i:t},i.sign=function(t){return t<0?-1:1},i.now=function(){if(window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return new Date-i._nowStartTime},i.random=function(e,i){return e=void 0!==e?e:0,i=void 0!==i?i:1,e+t()*(i-e)};var t=function(){return i._seed=(9301*i._seed+49297)%233280,i._seed/233280};i.colorToNumber=function(t){return t=t.replace("#",""),3==t.length&&(t=t.charAt(0)+t.charAt(0)+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2)),parseInt(t,16)},i.logLevel=1,i.log=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.info=function(){console&&i.logLevel>0&&i.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.warn=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.nextId=function(){return i._nextId++},i.map=function(t,e){if(t.map)return t.map(e);for(var i=[],n=0;n<t.length;n+=1)i.push(e(t[n]));return i},i.topologicalSort=function(t){var i=[],n=[],s=[];for(var r in t)n[r]||s[r]||e(r,n,s,t,i);return i};var e=function(t,i,n,s,r){var o=s[t]||[];n[t]=!0;for(var a=0;a<o.length;a+=1){var h=o[a];n[h]||(i[h]||e(h,i,n,s,r))}n[t]=!1,i[t]=!0,r.push(t)};i.chain=function(){for(var t=[],e=0;e<arguments.length;e+=1){var i=arguments[e];i._chained?t.push.apply(t,i._chained):t.push(i)}var n=function(){for(var e,i=new Array(arguments.length),n=0,s=arguments.length;n<s;n++)i[n]=arguments[n];for(n=0;n<t.length;n+=1){var r=t[n].apply(e,i);void 0!==r&&(e=r)}return e};return n._chained=t,n},i.chainPathBefore=function(t,e,n){return i.set(t,e,i.chain(n,i.get(t,e)))},i.chainPathAfter=function(t,e,n){return i.set(t,e,i.chain(i.get(t,e),n))}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=function(t,e,i,s,r,o){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=o.width),void 0===s&&(s=o.height);var a=n(r,"isNotEmpty",!1),h=n(r,"isColliding",!1),l=n(r,"hasInterestingFace",!1);t<0&&(i+=t,t=0),e<0&&(s+=e,e=0),t+i>o.width&&(i=Math.max(o.width-t,0)),e+s>o.height&&(s=Math.max(o.height-e,0));for(var u=[],c=e;c<e+s;c++)for(var d=t;d<t+i;d++){var f=o.data[c][d];if(null!==f){if(a&&-1===f.index)continue;if(h&&!f.collides)continue;if(l&&!f.hasInterestingFace)continue;u.push(f)}}return u};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={LOADER_IDLE:0,LOADER_LOADING:1,LOADER_PROCESSING:2,LOADER_COMPLETE:3,LOADER_SHUTDOWN:4,LOADER_DESTROYED:5,FILE_PENDING:10,FILE_LOADING:11,FILE_LOADED:12,FILE_FAILED:13,FILE_PROCESSING:14,FILE_WAITING_LINKFILE:15,FILE_ERRORED:16,FILE_COMPLETE:17,FILE_DESTROYED:18,FILE_POPULATED:19,TEXTURE_ATLAS_JSON_ARRAY:20,TEXTURE_ATLAS_JSON_HASH:21};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(1),o=i(161),a=i(162),h=i(333),l=i(102),u=new n({initialize:function(t){if(this.type=r(t,"type",!1),this.key=r(t,"key",!1),!this.type||!this.key)throw new Error("Error calling 'Loader."+this.type+"' invalid key provided.");this.url=r(t,"url"),void 0===this.url?this.url=r(t,"path","")+this.key+"."+r(t,"extension",""):this.url=r(t,"path","").concat(this.url),this.src="",this.xhrSettings=l(r(t,"responseType",void 0)),r(t,"xhrSettings",!1)&&(this.xhrSettings=a(this.xhrSettings,r(t,"xhrSettings",{}))),this.loader=null,this.xhrLoader=null,this.state=s.FILE_PENDING,this.bytesTotal=0,this.bytesLoaded=-1,this.percentComplete=-1,this.crossOrigin=void 0,this.data=void 0,this.config=r(t,"config",{}),this.linkFile=void 0,this.linkType="",this.linkParent=!1},setLinkFile:function(t,e){this.linkFile=t,t.linkFile=this,this.linkType=e,t.linkType=e,this.linkParent=!0},resetXHR:function(){this.xhrLoader.onload=void 0,this.xhrLoader.onerror=void 0,this.xhrLoader.onprogress=void 0},load:function(t){this.loader=t,this.state===s.FILE_POPULATED?(this.onComplete(),t.nextFile(this)):(this.src=o(this,t.baseURL),0===this.src.indexOf("data:")?console.warn("Local data URIs are not supported: "+this.key):this.xhrLoader=h(this,t.xhr))},onLoad:function(t){this.resetXHR(),t.target&&200!==t.target.status?this.loader.nextFile(this,!1):this.loader.nextFile(this,!0)},onError:function(){this.resetXHR(),this.loader.nextFile(this,!1)},onProgress:function(t){t.lengthComputable&&(this.bytesLoaded=t.loaded,this.bytesTotal=t.total,this.percentComplete=Math.min(this.bytesLoaded/this.bytesTotal,1),this.loader.emit("fileprogress",this,this.percentComplete))},onProcess:function(t){this.state=s.FILE_PROCESSING,this.onComplete(),t(this)},onComplete:function(){this.linkFile?this.linkFile.state===s.FILE_WAITING_LINKFILE?(this.state=s.FILE_COMPLETE,this.linkFile.state=s.FILE_COMPLETE):this.state=s.FILE_WAITING_LINKFILE:this.state=s.FILE_COMPLETE}});u.createObjectURL=function(t,e,i){if("function"==typeof URL)t.src=URL.createObjectURL(e);else{var n=new FileReader;n.onload=function(){t.removeAttribute("crossOrigin"),t.src="data:"+(e.type||i)+";base64,"+n.result.split(",")[1]},n.onerror=t.onerror,n.readAsDataURL(e)}},u.revokeObjectURL=function(t){"function"==typeof URL&&URL.revokeObjectURL(t.src)},t.exports=u},function(t,e,i){var n={};t.exports=n;var s=i(38),r=i(39),o=i(84),a=i(16),h=i(40),l=i(164);!function(){n._inertiaScale=4,n._nextCollidingGroupId=1,n._nextNonCollidingGroupId=-1,n._nextCategory=1,n.create=function(e){var i={id:a.nextId(),type:"body",label:"Body",gameObject:null,parts:[],plugin:{},angle:0,vertices:s.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},previousPositionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,ignoreGravity:!1,ignorePointer:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0},lineWidth:0},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,_original:null},n=a.extend(i,e);return t(n,e),n},n.nextGroup=function(t){return t?n._nextNonCollidingGroupId--:n._nextCollidingGroupId++},n.nextCategory=function(){return n._nextCategory=n._nextCategory<<1,n._nextCategory};var t=function(t,e){e=e||{},n.set(t,{bounds:t.bounds||h.create(t.vertices),positionPrev:t.positionPrev||r.clone(t.position),anglePrev:t.anglePrev||t.angle,vertices:t.vertices,parts:t.parts||[t],isStatic:t.isStatic,isSleeping:t.isSleeping,parent:t.parent||t}),s.rotate(t.vertices,t.angle,t.position),l.rotate(t.axes,t.angle),h.update(t.bounds,t.vertices,t.velocity),n.set(t,{axes:e.axes||t.axes,area:e.area||t.area,mass:e.mass||t.mass,inertia:e.inertia||t.inertia});var i=t.isStatic?"#2e2b44":a.choose(["#006BA6","#0496FF","#FFBC42","#D81159","#8F2D56"]);t.render.fillStyle=t.render.fillStyle||i,t.render.strokeStyle=t.render.strokeStyle||"#000",t.render.sprite.xOffset+=-(t.bounds.min.x-t.position.x)/(t.bounds.max.x-t.bounds.min.x),t.render.sprite.yOffset+=-(t.bounds.min.y-t.position.y)/(t.bounds.max.y-t.bounds.min.y)};n.set=function(t,e){var i,s;"string"==typeof e&&(i=e,e={},e[i]=s);for(i in e)if(e.hasOwnProperty(i))switch(s=e[i],i){case"isStatic":n.setStatic(t,s);break;case"isSleeping":o.set(t,s);break;case"mass":n.setMass(t,s);break;case"density":n.setDensity(t,s);break;case"inertia":n.setInertia(t,s);break;case"vertices":n.setVertices(t,s);break;case"position":n.setPosition(t,s);break;case"angle":n.setAngle(t,s);break;case"velocity":n.setVelocity(t,s);break;case"angularVelocity":n.setAngularVelocity(t,s);break;case"parts":n.setParts(t,s);break;default:t[i]=s}},n.setStatic=function(t,e){for(var i=0;i<t.parts.length;i++){var n=t.parts[i];n.isStatic=e,e?(n._original={restitution:n.restitution,friction:n.friction,mass:n.mass,inertia:n.inertia,density:n.density,inverseMass:n.inverseMass,inverseInertia:n.inverseInertia},n.restitution=0,n.friction=1,n.mass=n.inertia=n.density=1/0,n.inverseMass=n.inverseInertia=0,n.positionPrev.x=n.position.x,n.positionPrev.y=n.position.y,n.anglePrev=n.angle,n.angularVelocity=0,n.speed=0,n.angularSpeed=0,n.motion=0):n._original&&(n.restitution=n._original.restitution,n.friction=n._original.friction,n.mass=n._original.mass,n.inertia=n._original.inertia,n.density=n._original.density,n.inverseMass=n._original.inverseMass,n.inverseInertia=n._original.inverseInertia,n._original=null)}},n.setMass=function(t,e){var i=t.inertia/(t.mass/6);t.inertia=i*(e/6),t.inverseInertia=1/t.inertia,t.mass=e,t.inverseMass=1/t.mass,t.density=t.mass/t.area},n.setDensity=function(t,e){n.setMass(t,e*t.area),t.density=e},n.setInertia=function(t,e){t.inertia=e,t.inverseInertia=1/t.inertia},n.setVertices=function(t,e){e[0].body===t?t.vertices=e:t.vertices=s.create(e,t),t.axes=l.fromVertices(t.vertices),t.area=s.area(t.vertices),n.setMass(t,t.density*t.area);var i=s.centre(t.vertices);s.translate(t.vertices,i,-1),n.setInertia(t,n._inertiaScale*s.inertia(t.vertices,t.mass)),s.translate(t.vertices,t.position),h.update(t.bounds,t.vertices,t.velocity)},n.setParts=function(t,i,r){var o;for(i=i.slice(0),t.parts.length=0,t.parts.push(t),t.parent=t,o=0;o<i.length;o++){var a=i[o];a!==t&&(a.parent=t,t.parts.push(a))}if(1!==t.parts.length){if(r=void 0===r||r){var h=[];for(o=0;o<i.length;o++)h=h.concat(i[o].vertices);s.clockwiseSort(h);var l=s.hull(h),u=s.centre(l);n.setVertices(t,l),s.translate(t.vertices,u)}var c=e(t);t.area=c.area,t.parent=t,t.position.x=c.centre.x,t.position.y=c.centre.y,t.positionPrev.x=c.centre.x,t.positionPrev.y=c.centre.y,n.setMass(t,c.mass),n.setInertia(t,c.inertia),n.setPosition(t,c.centre)}},n.setPosition=function(t,e){var i=r.sub(e,t.position);t.positionPrev.x+=i.x,t.positionPrev.y+=i.y;for(var n=0;n<t.parts.length;n++){var o=t.parts[n];o.position.x+=i.x,o.position.y+=i.y,s.translate(o.vertices,i),h.update(o.bounds,o.vertices,t.velocity)}},n.setAngle=function(t,e){var i=e-t.angle;t.anglePrev+=i;for(var n=0;n<t.parts.length;n++){var o=t.parts[n];o.angle+=i,s.rotate(o.vertices,i,t.position),l.rotate(o.axes,i),h.update(o.bounds,o.vertices,t.velocity),n>0&&r.rotateAbout(o.position,i,t.position,o.position)}},n.setVelocity=function(t,e){t.positionPrev.x=t.position.x-e.x,t.positionPrev.y=t.position.y-e.y,t.velocity.x=e.x,t.velocity.y=e.y,t.speed=r.magnitude(t.velocity)},n.setAngularVelocity=function(t,e){t.anglePrev=t.angle-e,t.angularVelocity=e,t.angularSpeed=Math.abs(t.angularVelocity)},n.translate=function(t,e){n.setPosition(t,r.add(t.position,e))},n.rotate=function(t,e,i){if(i){var s=Math.cos(e),r=Math.sin(e),o=t.position.x-i.x,a=t.position.y-i.y;n.setPosition(t,{x:i.x+(o*s-a*r),y:i.y+(o*r+a*s)}),n.setAngle(t,t.angle+e)}else n.setAngle(t,t.angle+e)},n.scale=function(t,i,r,o){o=o||t.position;for(var a=0;a<t.parts.length;a++){var u=t.parts[a];u.position.x=o.x+(u.position.x-o.x)*i,u.position.y=o.y+(u.position.y-o.y)*r,s.scale(u.vertices,i,r,o),u.axes=l.fromVertices(u.vertices),t.isStatic||(u.area=s.area(u.vertices),n.setMass(u,t.density*u.area),s.translate(u.vertices,{x:-u.position.x,y:-u.position.y}),n.setInertia(u,s.inertia(u.vertices,u.mass)),s.translate(u.vertices,{x:u.position.x,y:u.position.y})),h.update(u.bounds,u.vertices,t.velocity)}if(t.circleRadius&&(i===r?t.circleRadius*=i:t.circleRadius=null),!t.isStatic){var c=e(t);t.area=c.area,n.setMass(t,c.mass),n.setInertia(t,c.inertia)}},n.update=function(t,e,i,n){var o=Math.pow(e*i*t.timeScale,2),a=1-t.frictionAir*i*t.timeScale,u=t.position.x-t.positionPrev.x,c=t.position.y-t.positionPrev.y;t.velocity.x=u*a*n+t.force.x/t.mass*o,t.velocity.y=c*a*n+t.force.y/t.mass*o,t.positionPrev.x=t.position.x,t.positionPrev.y=t.position.y,t.position.x+=t.velocity.x,t.position.y+=t.velocity.y,t.angularVelocity=(t.angle-t.anglePrev)*a*n+t.torque/t.inertia*o,t.anglePrev=t.angle,t.angle+=t.angularVelocity,t.speed=r.magnitude(t.velocity),t.angularSpeed=Math.abs(t.angularVelocity);for(var d=0;d<t.parts.length;d++){var f=t.parts[d];s.translate(f.vertices,t.velocity),d>0&&(f.position.x+=t.velocity.x,f.position.y+=t.velocity.y),0!==t.angularVelocity&&(s.rotate(f.vertices,t.angularVelocity,t.position),l.rotate(f.axes,t.angularVelocity),d>0&&r.rotateAbout(f.position,t.angularVelocity,t.position,f.position)),h.update(f.bounds,f.vertices,t.velocity)}},n.applyForce=function(t,e,i){t.force.x+=i.x,t.force.y+=i.y;var n={x:e.x-t.position.x,y:e.y-t.position.y};t.torque+=n.x*i.y-n.y*i.x};var e=function(t){for(var e={mass:0,area:0,inertia:0,centre:{x:0,y:0}},i=1===t.parts.length?0:1;i<t.parts.length;i++){var n=t.parts[i],s=n.mass!==1/0?n.mass:1;e.mass+=n.mass,e.area+=n.area,e.inertia+=n.inertia,e.centre=r.add(e.centre,r.mult(n.position,s))}return e.centre=r.div(e.centre,e.mass),e}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(51),s=i(10),r=i(71),o=function(t,e,i){e.x=s(i,"x",0),e.y=s(i,"y",0),e.depth=s(i,"depth",0),e.flipX=s(i,"flipX",!1),e.flipY=s(i,"flipY",!1);var o=s(i,"scale",null);"number"==typeof o?e.setScale(o):null!==o&&(e.scaleX=s(o,"x",1),e.scaleY=s(o,"y",1));var a=s(i,"scrollFactor",null);"number"==typeof a?e.setScrollFactor(a):null!==a&&(e.scrollFactorX=s(a,"x",1),e.scrollFactorY=s(a,"y",1)),e.rotation=s(i,"rotation",0);var h=s(i,"angle",null);null!==h&&(e.angle=h),e.alpha=s(i,"alpha",1);var l=s(i,"origin",null);if("number"==typeof l)e.setOrigin(l);else if(null!==l){var u=s(l,"x",.5),c=s(l,"y",.5);e.setOrigin(u,c)}return e.scaleMode=s(i,"scaleMode",r.DEFAULT),e.blendMode=s(i,"blendMode",n.NORMAL),e.visible=s(i,"visible",!0),s(i,"add",!0)&&t.sys.displayList.add(e),e.preUpdate&&t.sys.updateList.add(e),e};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={CSV:0,TILED_JSON:1,ARRAY_2D:2,WELTMEISTER:3}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(24),s=i(132),r=[],o=!1;t.exports=function(){var t=function(t,e,i,h){void 0===e&&(e=1),void 0===i&&(i=1),void 0===h&&(h=n.CANVAS);var l,u=a(h);return null===u?(u={parent:t,canvas:document.createElement("canvas"),type:h},r.push(u),l=u.canvas):(u.parent=t,l=u.canvas),l.width=e,l.height=i,o&&h===n.CANVAS&&s.disable(l.getContext("2d")),l},e=function(e,i,s){return t(e,i,s,n.CANVAS)},i=function(e,i,s){return t(e,i,s,n.WEBGL)},a=function(t){return void 0===t&&(t=n.CANVAS),r.forEach(function(e){if(!e.parent&&e.type===t)return e}),null},h=function(t){var e=t instanceof HTMLCanvasElement;r.forEach(function(i){(e&&i.canvas===t||!e&&i.parent===t)&&(i.parent=null,i.canvas.width=1,i.canvas.height=1)})},l=function(){var t=0;return r.forEach(function(e){e.parent&&t++}),t},u=function(){return r.length-l()};return{create2D:e,create:t,createWebGL:i,disableSmoothing:function(){o=!0},enableSmoothing:function(){o=!1},first:a,free:u,pool:r,remove:h,total:l}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n={VERSION:"3.1.2",BlendModes:i(51),ScaleModes:i(71),AUTO:0,CANVAS:1,WEBGL:2,HEADLESS:3,FOREVER:-1,NONE:4,UP:5,DOWN:6,LEFT:7,RIGHT:8};t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(199),s=function(){var t,e,i,r,o,a,h=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof h&&(c=h,h=arguments[1]||{},l=2),u===l&&(h=this,--l);l<u;l++)if(null!=(t=arguments[l]))for(e in t)i=h[e],r=t[e],h!==r&&(c&&r&&(n(r)||(o=Array.isArray(r)))?(o?(o=!1,a=i&&Array.isArray(i)?i:[]):a=i&&n(i)?i:{},h[e]=s(c,a,r)):void 0!==r&&(h[e]=r));return h};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.y+t.height-t.height*t.originY};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.y=e-t.height+t.height*t.originY,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x-t.width*t.originX};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x=e+t.width*t.originX,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x+t.width-t.width*t.originX};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x=e-t.width+t.width*t.originX,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.y-t.height*t.originY};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.y=e+t.height*t.originY,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(t.radius>0&&e>=t.left&&e<=t.right&&i>=t.top&&i<=t.bottom){return(t.x-e)*(t.x-e)+(t.y-i)*(t.y-i)<=t.radius*t.radius}return!1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return!(t.width<=0||t.height<=0)&&(t.x<=e&&t.x+t.width>=e&&t.y<=i&&t.y+t.height>=i)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(2),o=i(496),a=new n({Extends:r,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Flip,s.GetBounds,s.Origin,s.Pipeline,s.ScaleMode,s.ScrollFactor,s.Size,s.Texture,s.Tint,s.Transform,s.Visible,o],initialize:function(t,e,i,n,o){r.call(this,t,"Sprite"),this.anims=new s.Animation(this),this.setTexture(n,o),this.setPosition(e,i),this.setSizeToFrame(),this.setOriginFromFrame(),this.initPipeline("TextureTintPipeline")},preUpdate:function(t,e){this.anims.update(t,e)},play:function(t,e,i){return this.anims.play(t,e,i),this},toJSON:function(){return s.ToJSON(this)}});t.exports=a},function(t,e,i){var n={};t.exports=n;var s=i(38),r=i(16),o=i(20),a=i(40),h=i(39),l=i(367);!function(){n.rectangle=function(t,e,i,n,a){a=a||{};var h={label:"Rectangle Body",position:{x:t,y:e},vertices:s.fromPath("L 0 0 L "+i+" 0 L "+i+" "+n+" L 0 "+n)};if(a.chamfer){var l=a.chamfer;h.vertices=s.chamfer(h.vertices,l.radius,l.quality,l.qualityMin,l.qualityMax),delete a.chamfer}return o.create(r.extend({},h,a))},n.trapezoid=function(t,e,i,n,a,h){h=h||{},a*=.5;var l,u=(1-2*a)*i,c=i*a,d=c+u,f=d+c;l=a<.5?"L 0 0 L "+c+" "+-n+" L "+d+" "+-n+" L "+f+" 0":"L 0 0 L "+d+" "+-n+" L "+f+" 0";var p={label:"Trapezoid Body",position:{x:t,y:e},vertices:s.fromPath(l)};if(h.chamfer){var v=h.chamfer;p.vertices=s.chamfer(p.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete h.chamfer}return o.create(r.extend({},p,h))},n.circle=function(t,e,i,s,o){s=s||{};var a={label:"Circle Body",circleRadius:i};o=o||25;var h=Math.ceil(Math.max(10,Math.min(o,i)));return h%2==1&&(h+=1),n.polygon(t,e,h,i,r.extend({},a,s))},n.polygon=function(t,e,i,a,h){if(h=h||{},i<3)return n.circle(t,e,a,h);for(var l=2*Math.PI/i,u="",c=.5*l,d=0;d<i;d+=1){var f=c+d*l,p=Math.cos(f)*a,v=Math.sin(f)*a;u+="L "+p.toFixed(3)+" "+v.toFixed(3)+" "}var g={label:"Polygon Body",position:{x:t,y:e},vertices:s.fromPath(u)};if(h.chamfer){var y=h.chamfer;g.vertices=s.chamfer(g.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete h.chamfer}return o.create(r.extend({},g,h))},n.fromVertices=function(t,e,i,n,u,c,d){var f,p,v,g,y,m,x,b,w;for(n=n||{},p=[],u=void 0!==u&&u,c=void 0!==c?c:.01,d=void 0!==d?d:10,l||r.warn("Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull."),r.isArray(i[0])||(i=[i]),b=0;b<i.length;b+=1)if(g=i[b],(v=s.isConvex(g))||!l)g=v?s.clockwiseSort(g):s.hull(g),p.push({position:{x:t,y:e},vertices:g});else{var T=g.map(function(t){return[t.x,t.y]});l.makeCCW(T),!1!==c&&l.removeCollinearPoints(T,c);var S=l.quickDecomp(T);for(y=0;y<S.length;y++){var A=S[y],C=A.map(function(t){return{x:t[0],y:t[1]}});d>0&&s.area(C)<d||p.push({position:s.centre(C),vertices:C})}}for(y=0;y<p.length;y++)p[y]=o.create(r.extend(p[y],n));if(u){for(y=0;y<p.length;y++){var M=p[y];for(m=y+1;m<p.length;m++){var _=p[m];if(a.overlaps(M.bounds,_.bounds)){var E=M.vertices,P=_.vertices;for(x=0;x<M.vertices.length;x++)for(w=0;w<_.vertices.length;w++){var L=h.magnitudeSquared(h.sub(E[(x+1)%E.length],P[w])),k=h.magnitudeSquared(h.sub(E[x],P[(w+1)%P.length]));L<5&&k<5&&(E[x].isInternal=!0,P[w].isInternal=!0)}}}}}return p.length>1?(f=o.create(r.extend({parts:p.slice(0)},n)),o.setPosition(f,{x:t,y:e}),f):p[0]}}()},function(t,e,i){var n={};t.exports=n;var s=i(39),r=i(16);!function(){n.create=function(t,e){for(var i=[],n=0;n<t.length;n++){var s=t[n],r={x:s.x,y:s.y,index:n,body:e,isInternal:!1,contact:null};r.contact={vertex:r,normalImpulse:0,tangentImpulse:0},i.push(r)}return i},n.fromPath=function(t,e){var i=/L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/gi,s=[];return t.replace(i,function(t,e,i){s.push({x:parseFloat(e),y:parseFloat(i)})}),n.create(s,e)},n.centre=function(t){for(var e,i,r,o=n.area(t,!0),a={x:0,y:0},h=0;h<t.length;h++)r=(h+1)%t.length,e=s.cross(t[h],t[r]),i=s.mult(s.add(t[h],t[r]),e),a=s.add(a,i);return s.div(a,6*o)},n.mean=function(t){for(var e={x:0,y:0},i=0;i<t.length;i++)e.x+=t[i].x,e.y+=t[i].y;return s.div(e,t.length)},n.area=function(t,e){for(var i=0,n=t.length-1,s=0;s<t.length;s++)i+=(t[n].x-t[s].x)*(t[n].y+t[s].y),n=s;return e?i/2:Math.abs(i)/2},n.inertia=function(t,e){for(var i,n,r=0,o=0,a=t,h=0;h<a.length;h++)n=(h+1)%a.length,i=Math.abs(s.cross(a[n],a[h])),r+=i*(s.dot(a[n],a[n])+s.dot(a[n],a[h])+s.dot(a[h],a[h])),o+=i;return e/6*(r/o)},n.translate=function(t,e,i){var n;if(i)for(n=0;n<t.length;n++)t[n].x+=e.x*i,t[n].y+=e.y*i;else for(n=0;n<t.length;n++)t[n].x+=e.x,t[n].y+=e.y;return t},n.rotate=function(t,e,i){if(0!==e){for(var n=Math.cos(e),s=Math.sin(e),r=0;r<t.length;r++){var o=t[r],a=o.x-i.x,h=o.y-i.y;o.x=i.x+(a*n-h*s),o.y=i.y+(a*s+h*n)}return t}},n.contains=function(t,e){for(var i=0;i<t.length;i++){var n=t[i],s=t[(i+1)%t.length];if((e.x-n.x)*(s.y-n.y)+(e.y-n.y)*(n.x-s.x)>0)return!1}return!0},n.scale=function(t,e,i,r){if(1===e&&1===i)return t;r=r||n.centre(t);for(var o,a,h=0;h<t.length;h++)o=t[h],a=s.sub(o,r),t[h].x=r.x+a.x*e,t[h].y=r.y+a.y*i;return t},n.chamfer=function(t,e,i,n,o){e="number"==typeof e?[e]:e||[8],e.length||(e=[e]),i=void 0!==i?i:-1,n=n||2,o=o||14;for(var a=[],h=0;h<t.length;h++){var l=t[h-1>=0?h-1:t.length-1],u=t[h],c=t[(h+1)%t.length],d=e[h<e.length?h:e.length-1];if(0!==d){var f=s.normalise({x:u.y-l.y,y:l.x-u.x}),p=s.normalise({x:c.y-u.y,y:u.x-c.x}),v=Math.sqrt(2*Math.pow(d,2)),g=s.mult(r.clone(f),d),y=s.normalise(s.mult(s.add(f,p),.5)),m=s.sub(u,s.mult(y,v)),x=i;-1===i&&(x=1.75*Math.pow(d,.32)),x=r.clamp(x,n,o),x%2==1&&(x+=1);for(var b=Math.acos(s.dot(f,p)),w=b/x,T=0;T<x;T++)a.push(s.add(s.rotate(g,w*T),m))}else a.push(u)}return a},n.clockwiseSort=function(t){var e=n.mean(t);return t.sort(function(t,i){return s.angle(e,t)-s.angle(e,i)}),t},n.isConvex=function(t){var e,i,n,s,r=0,o=t.length;if(o<3)return null;for(e=0;e<o;e++)if(i=(e+1)%o,n=(e+2)%o,s=(t[i].x-t[e].x)*(t[n].y-t[i].y),s-=(t[i].y-t[e].y)*(t[n].x-t[i].x),s<0?r|=1:s>0&&(r|=2),3===r)return!1;return 0!==r||null},n.hull=function(t){var e,i,n=[],r=[];for(t=t.slice(0),t.sort(function(t,e){var i=t.x-e.x;return 0!==i?i:t.y-e.y}),i=0;i<t.length;i+=1){for(e=t[i];r.length>=2&&s.cross3(r[r.length-2],r[r.length-1],e)<=0;)r.pop();r.push(e)}for(i=t.length-1;i>=0;i-=1){for(e=t[i];n.length>=2&&s.cross3(n[n.length-2],n[n.length-1],e)<=0;)n.pop();n.push(e)}return n.pop(),r.pop(),n.concat(r)}}()},function(t,e){var i={};t.exports=i,function(){i.create=function(t,e){return{x:t||0,y:e||0}},i.clone=function(t){return{x:t.x,y:t.y}},i.magnitude=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},i.magnitudeSquared=function(t){return t.x*t.x+t.y*t.y},i.rotate=function(t,e,i){var n=Math.cos(e),s=Math.sin(e);i||(i={});var r=t.x*n-t.y*s;return i.y=t.x*s+t.y*n,i.x=r,i},i.rotateAbout=function(t,e,i,n){var s=Math.cos(e),r=Math.sin(e);n||(n={});var o=i.x+((t.x-i.x)*s-(t.y-i.y)*r);return n.y=i.y+((t.x-i.x)*r+(t.y-i.y)*s),n.x=o,n},i.normalise=function(t){var e=i.magnitude(t);return 0===e?{x:0,y:0}:{x:t.x/e,y:t.y/e}},i.dot=function(t,e){return t.x*e.x+t.y*e.y},i.cross=function(t,e){return t.x*e.y-t.y*e.x},i.cross3=function(t,e,i){return(e.x-t.x)*(i.y-t.y)-(e.y-t.y)*(i.x-t.x)},i.add=function(t,e,i){return i||(i={}),i.x=t.x+e.x,i.y=t.y+e.y,i},i.sub=function(t,e,i){return i||(i={}),i.x=t.x-e.x,i.y=t.y-e.y,i},i.mult=function(t,e){return{x:t.x*e,y:t.y*e}},i.div=function(t,e){return{x:t.x/e,y:t.y/e}},i.perp=function(t,e){return e=!0===e?-1:1,{x:e*-t.y,y:e*t.x}},i.neg=function(t){return{x:-t.x,y:-t.y}},i.angle=function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)},i._temp=[i.create(),i.create(),i.create(),i.create(),i.create(),i.create()]}()},function(t,e){var i={};t.exports=i,function(){i.create=function(t){var e={min:{x:0,y:0},max:{x:0,y:0}};return t&&i.update(e,t),e},i.update=function(t,e,i){t.min.x=1/0,t.max.x=-1/0,t.min.y=1/0,t.max.y=-1/0;for(var n=0;n<e.length;n++){var s=e[n];s.x>t.max.x&&(t.max.x=s.x),s.x<t.min.x&&(t.min.x=s.x),s.y>t.max.y&&(t.max.y=s.y),s.y<t.min.y&&(t.min.y=s.y)}i&&(i.x>0?t.max.x+=i.x:t.min.x+=i.x,i.y>0?t.max.y+=i.y:t.min.y+=i.y)},i.contains=function(t,e){return e.x>=t.min.x&&e.x<=t.max.x&&e.y>=t.min.y&&e.y<=t.max.y},i.overlaps=function(t,e){return t.min.x<=e.max.x&&t.max.x>=e.min.x&&t.max.y>=e.min.y&&t.min.y<=e.max.y},i.translate=function(t,e){t.min.x+=e.x,t.max.x+=e.x,t.min.y+=e.y,t.max.y+=e.y},i.shift=function(t,e){var i=t.max.x-t.min.x,n=t.max.y-t.min.y;t.min.x=e.x,t.max.x=e.x+i,t.min.y=e.y,t.max.y=e.y+n}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(106),s=i(17),r=function(t,e,i,r,o){for(var a=null,h=null,l=null,u=null,c=s(t,e,i,r,null,o),d=0;d<c.length;d++){var f=c[d];f&&(f.collides?(a=n(f.x,f.y-1,!0,o),h=n(f.x,f.y+1,!0,o),l=n(f.x-1,f.y,!0,o),u=n(f.x+1,f.y,!0,o),f.faceTop=!a||!a.collides,f.faceBottom=!h||!h.collides,f.faceLeft=!l||!l.collides,f.faceRight=!u||!u.collides):f.resetFaces())}};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(113),r=i(184),o=new n({initialize:function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=255),this.r=0,this.g=0,this.b=0,this.a=255,this.gl=[0,0,0,1],this._color=0,this._color32=0,this._rgba="",this.setTo(t,e,i,n)},transparent:function(){return this.red=0,this.green=0,this.blue=0,this.alpha=0,this.update()},setTo:function(t,e,i,n){return void 0===n&&(n=255),this.red=t,this.green=e,this.blue=i,this.alpha=n,this.update()},setGLTo:function(t,e,i,n){return void 0===n&&(n=1),this.redGL=t,this.greenGL=e,this.blueGL=i,this.alphaGL=n,this.update()},setFromRGB:function(t){return this.red=t.r,this.green=t.g,this.blue=t.b,t.hasOwnProperty("a")&&(this.alpha=t.a),this.update()},update:function(){return this._color=s(this.r,this.g,this.b),this._color32=r(this.r,this.g,this.b,this.a),this._rgba="rgba("+this.r+","+this.g+","+this.b+","+this.a/255+")",this},clone:function(){return new o(this.r,this.g,this.b,this.a)},color:{get:function(){return this._color}},color32:{get:function(){return this._color32}},rgba:{get:function(){return this._rgba}},redGL:{get:function(){return this.gl[0]},set:function(t){this.gl[0]=Math.min(Math.abs(t),1),this.r=Math.floor(255*this.gl[0]),this.update()}},greenGL:{get:function(){return this.gl[1]},set:function(t){this.gl[1]=Math.min(Math.abs(t),1),this.g=Math.floor(255*this.gl[1]),this.update()}},blueGL:{get:function(){return this.gl[2]},set:function(t){this.gl[2]=Math.min(Math.abs(t),1),this.b=Math.floor(255*this.gl[2]),this.update()}},alphaGL:{get:function(){return this.gl[3]},set:function(t){this.gl[3]=Math.min(Math.abs(t),1),this.a=Math.floor(255*this.gl[3]),this.update()}},red:{get:function(){return this.r},set:function(t){t=Math.floor(Math.abs(t)),this.r=Math.min(t,255),this.gl[0]=t/255,this.update()}},green:{get:function(){return this.g},set:function(t){t=Math.floor(Math.abs(t)),this.g=Math.min(t,255),this.gl[1]=t/255,this.update()}},blue:{get:function(){return this.b},set:function(t){t=Math.floor(Math.abs(t)),this.b=Math.min(t,255),this.gl[2]=t/255,this.update()}},alpha:{get:function(){return this.a},set:function(t){t=Math.floor(Math.abs(t)),this.a=Math.min(t,255),this.gl[3]=t/255,this.update()}}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(15),s=function(t){return t*n.DEG_TO_RAD};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===e&&(e=!0);var s=n.baseTileWidth,r=n.tilemapLayer;return r&&(void 0===i&&(i=r.scene.cameras.main),t-=r.x+i.scrollX*(1-r.scrollFactorX),s*=r.scaleX),e?Math.floor(t/s):t/s};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===e&&(e=!0);var s=n.baseTileHeight,r=n.tilemapLayer;return r&&(void 0===i&&(i=r.scene.cameras.main),t-=r.y+i.scrollY*(1-r.scrollFactorY),s*=r.scaleY),e?Math.floor(t/s):t/s};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=t-i,r=e-n;return Math.sqrt(s*s+r*r)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={getTintFromFloats:function(t,e,i,n){return((255&(255*n|0))<<24|(255&(255*t|0))<<16|(255&(255*e|0))<<8|255&(255*i|0))>>>0},getTintAppendFloatAlpha:function(t,e){return((255&(255*e|0))<<24|t)>>>0},getTintAppendFloatAlphaAndSwap:function(t,e){return((255&(255*e|0))<<24|(255&(0|t))<<16|(255&(t>>8|0))<<8|255&(t>>16|0))>>>0},getFloatsFromUintRGB:function(t){return[(255&(t>>16|0))/255,(255&(t>>8|0))/255,(255&(0|t))/255]},getComponentCount:function(t,e){for(var i=0,n=0;n<t.length;++n){var s=t[n];s.type===e.FLOAT?i+=s.size:i+=1}return i}}},function(t,e,i){var n={};t.exports=n;var s=i(69),r=i(16),o=i(20);!function(){n.create=function(t){return r.extend({id:r.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{}},t)},n.setModified=function(t,e,i,s){if(t.isModified=e,i&&t.parent&&n.setModified(t.parent,e,i,s),s)for(var r=0;r<t.composites.length;r++){var o=t.composites[r];n.setModified(o,e,i,s)}},n.add=function(t,e){var i=[].concat(e);s.trigger(t,"beforeAdd",{object:e});for(var o=0;o<i.length;o++){var a=i[o];switch(a.type){case"body":if(a.parent!==a){r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}n.addBody(t,a);break;case"constraint":n.addConstraint(t,a);break;case"composite":n.addComposite(t,a);break;case"mouseConstraint":n.addConstraint(t,a.constraint)}}return s.trigger(t,"afterAdd",{object:e}),t},n.remove=function(t,e,i){var r=[].concat(e);s.trigger(t,"beforeRemove",{object:e});for(var o=0;o<r.length;o++){var a=r[o];switch(a.type){case"body":n.removeBody(t,a,i);break;case"constraint":n.removeConstraint(t,a,i);break;case"composite":n.removeComposite(t,a,i);break;case"mouseConstraint":n.removeConstraint(t,a.constraint)}}return s.trigger(t,"afterRemove",{object:e}),t},n.addComposite=function(t,e){return t.composites.push(e),e.parent=t,n.setModified(t,!0,!0,!1),t},n.removeComposite=function(t,e,i){var s=t.composites.indexOf(e);if(-1!==s&&(n.removeCompositeAt(t,s),n.setModified(t,!0,!0,!1)),i)for(var r=0;r<t.composites.length;r++)n.removeComposite(t.composites[r],e,!0);return t},n.removeCompositeAt=function(t,e){return t.composites.splice(e,1),n.setModified(t,!0,!0,!1),t},n.addBody=function(t,e){return t.bodies.push(e),n.setModified(t,!0,!0,!1),t},n.removeBody=function(t,e,i){var s=t.bodies.indexOf(e);if(-1!==s&&(n.removeBodyAt(t,s),n.setModified(t,!0,!0,!1)),i)for(var r=0;r<t.composites.length;r++)n.removeBody(t.composites[r],e,!0);return t},n.removeBodyAt=function(t,e){return t.bodies.splice(e,1),n.setModified(t,!0,!0,!1),t},n.addConstraint=function(t,e){return t.constraints.push(e),n.setModified(t,!0,!0,!1),t},n.removeConstraint=function(t,e,i){var s=t.constraints.indexOf(e);if(-1!==s&&n.removeConstraintAt(t,s),i)for(var r=0;r<t.composites.length;r++)n.removeConstraint(t.composites[r],e,!0);return t},n.removeConstraintAt=function(t,e){return t.constraints.splice(e,1),n.setModified(t,!0,!0,!1),t},n.clear=function(t,e,i){if(i)for(var s=0;s<t.composites.length;s++)n.clear(t.composites[s],e,!0);return e?t.bodies=t.bodies.filter(function(t){return t.isStatic}):t.bodies.length=0,t.constraints.length=0,t.composites.length=0,n.setModified(t,!0,!0,!1),t},n.allBodies=function(t){for(var e=[].concat(t.bodies),i=0;i<t.composites.length;i++)e=e.concat(n.allBodies(t.composites[i]));return e},n.allConstraints=function(t){for(var e=[].concat(t.constraints),i=0;i<t.composites.length;i++)e=e.concat(n.allConstraints(t.composites[i]));return e},n.allComposites=function(t){for(var e=[].concat(t.composites),i=0;i<t.composites.length;i++)e=e.concat(n.allComposites(t.composites[i]));return e},n.get=function(t,e,i){var s,r;switch(i){case"body":s=n.allBodies(t);break;case"constraint":s=n.allConstraints(t);break;case"composite":s=n.allComposites(t).concat(t)}return s?(r=s.filter(function(t){return t.id.toString()===e.toString()}),0===r.length?null:r[0]):null},n.move=function(t,e,i){return n.remove(t,e),n.add(i,e),t},n.rebase=function(t){for(var e=n.allBodies(t).concat(n.allConstraints(t)).concat(n.allComposites(t)),i=0;i<e.length;i++)e[i].id=r.nextId();return n.setModified(t,!0,!0,!1),t},n.translate=function(t,e,i){for(var s=i?n.allBodies(t):t.bodies,r=0;r<s.length;r++)o.translate(s[r],e);return n.setModified(t,!0,!0,!1),t},n.rotate=function(t,e,i,s){for(var r=Math.cos(e),a=Math.sin(e),h=s?n.allBodies(t):t.bodies,l=0;l<h.length;l++){var u=h[l],c=u.position.x-i.x,d=u.position.y-i.y;o.setPosition(u,{x:i.x+(c*r-d*a),y:i.y+(c*a+d*r)}),o.rotate(u,e)}return n.setModified(t,!0,!0,!1),t},n.scale=function(t,e,i,s,r){for(var a=r?n.allBodies(t):t.bodies,h=0;h<a.length;h++){var l=a[h],u=l.position.x-s.x,c=l.position.y-s.y;o.setPosition(l,{x:s.x+u*e,y:s.y+c*i}),o.scale(l,e,i)}return n.setModified(t,!0,!0,!1),t},n.bounds=function(t){for(var e=Matter.Composite.allBodies(t),i=[],n=0;n<e.length;n+=1){var s=e[n];i.push(s.bounds.min,s.bounds.max)}return Matter.Bounds.create(i)}}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){e?t.setCollision(!0,!0,!0,!0,!1):t.resetCollision(!1)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(325),o=new n({Mixins:[s.Alpha,s.Flip,s.Visible],initialize:function(t,e,i,n,s,r,o,a){this.layer=t,this.index=e,this.x=i,this.y=n,this.width=s,this.height=r,this.baseWidth=void 0!==o?o:s,this.baseHeight=void 0!==a?a:r,this.pixelX=0,this.pixelY=0,this.updatePixelXY(),this.properties={},this.rotation=0,this.collideLeft=!1,this.collideRight=!1,this.collideUp=!1,this.collideDown=!1,this.faceLeft=!1,this.faceRight=!1,this.faceTop=!1,this.faceBottom=!1,this.collisionCallback=null,this.collisionCallbackContext=this,this.tint=16777215,this.physics={}},containsPoint:function(t,e){return!(t<this.pixelX||e<this.pixelY||t>this.right||e>this.bottom)},copy:function(t){return this.index=t.index,this.alpha=t.alpha,this.properties=t.properties,this.visible=t.visible,this.setFlip(t.flipX,t.flipY),this.tint=t.tint,this.rotation=t.rotation,this.collideUp=t.collideUp,this.collideDown=t.collideDown,this.collideLeft=t.collideLeft,this.collideRight=t.collideRight,this.collisionCallback=t.collisionCallback,this.collisionCallbackContext=t.collisionCallbackContext,this},getCollisionGroup:function(){return this.tileset?this.tileset.getTileCollisionGroup(this.index):null},getTileData:function(){return this.tileset?this.tileset.getTileData(this.index):null},getLeft:function(t){var e=this.tilemapLayer;return e?e.tileToWorldX(this.x,t):this.x*this.baseWidth},getRight:function(t){var e=this.tilemapLayer;return e?this.getLeft(t)+this.width*e.scaleX:this.getLeft(t)+this.width},getTop:function(t){var e=this.tilemapLayer;return e?e.tileToWorldY(this.y,t)-(this.height-this.baseHeight)*e.scaleY:this.y*this.baseHeight-(this.height-this.baseHeight)},getBottom:function(t){var e=this.tilemapLayer;return e?this.getTop(t)+this.height*e.scaleY:this.getTop(t)+this.height},getBounds:function(t,e){return void 0===e&&(e=new r),e.x=this.getLeft(),e.y=this.getTop(),e.width=this.getRight()-e.x,e.height=this.getBottom()-e.y,e},getCenterX:function(t){return this.getLeft(t)+this.width/2},getCenterY:function(t){return this.getTop(t)+this.height/2},destroy:function(){this.collisionCallback=void 0,this.collisionCallbackContext=void 0,this.properties=void 0},intersects:function(t,e,i,n){return!(i<=this.pixelX||n<=this.pixelY||t>=this.right||e>=this.bottom)},isInteresting:function(t,e){return t&&e?this.canCollide||this.hasInterestingFace:t?this.collides:!!e&&this.hasInterestingFace},resetCollision:function(t){if(void 0===t&&(t=!0),this.collideLeft=!1,this.collideRight=!1,this.collideUp=!1,this.collideDown=!1,this.faceTop=!1,this.faceBottom=!1,this.faceLeft=!1,this.faceRight=!1,t){this.tilemapLayer&&this.tilemapLayer.calculateFacesAt(this.x,this.y)}return this},resetFaces:function(){return this.faceTop=!1,this.faceBottom=!1,this.faceLeft=!1,this.faceRight=!1,this},setCollision:function(t,e,i,n,s){if(void 0===e&&(e=t),void 0===i&&(i=t),void 0===n&&(n=t),void 0===s&&(s=!0),this.collideLeft=t,this.collideRight=e,this.collideUp=i,this.collideDown=n,this.faceLeft=t,this.faceRight=e,this.faceTop=i,this.faceBottom=n,s){this.tilemapLayer&&this.tilemapLayer.calculateFacesAt(this.x,this.y)}return this},setCollisionCallback:function(t,e){return null===t?(this.collisionCallback=void 0,this.collisionCallbackContext=void 0):(this.collisionCallback=t,this.collisionCallbackContext=e),this},setSize:function(t,e,i,n){return void 0!==t&&(this.width=t),void 0!==e&&(this.height=e),void 0!==i&&(this.baseWidth=i),void 0!==n&&(this.baseHeight=n),this.updatePixelXY(),this},updatePixelXY:function(){return this.pixelX=this.x*this.baseWidth,this.pixelY=this.y*this.baseHeight-(this.height-this.baseHeight),this},canCollide:{get:function(){return this.collideLeft||this.collideRight||this.collideUp||this.collideDown||this.collisionCallback}},collides:{get:function(){return this.collideLeft||this.collideRight||this.collideUp||this.collideDown}},hasInterestingFace:{get:function(){return this.faceTop||this.faceBottom||this.faceLeft||this.faceRight}},tileset:{get:function(){var t=this.tilemapLayer;return t?t.tileset:null}},tilemapLayer:{get:function(){return this.layer.tilemapLayer}},tilemap:{get:function(){var t=this.tilemapLayer;return t?t.tilemap:null}}});t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={SKIP_CHECK:-1,NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x-t.width*t.originX+.5*t.width};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.width*t.originX;return t.x=e+i-.5*t.width,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.height*t.originY;return t.y=e+i-.5*t.height,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.y-t.height*t.originY+.5*t.height};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return Math.max(e,Math.min(i,t))};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=i-e;return e+((t-e)%n+n)%n};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i){"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=e||0,this.z=i||0)},up:function(){return this.x=0,this.y=1,this.z=0,this},clone:function(){return new s(this.x,this.y,this.z)},crossVectors:function(t,e){var i=t.x,n=t.y,s=t.z,r=e.x,o=e.y,a=e.z;return this.x=n*a-s*o,this.y=s*r-i*a,this.z=i*o-n*r,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this},set:function(t,e,i){return"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=e||0,this.z=i||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},distance:function(t){var e=t.x-this.x,i=t.y-this.y,n=t.z-this.z||0;return Math.sqrt(e*e+i*i+n*n)},distanceSq:function(t){var e=t.x-this.x,i=t.y-this.y,n=t.z-this.z||0;return e*e+i*i+n*n},length:function(){var t=this.x,e=this.y,i=this.z;return Math.sqrt(t*t+e*e+i*i)},lengthSq:function(){var t=this.x,e=this.y,i=this.z;return t*t+e*e+i*i},normalize:function(){var t=this.x,e=this.y,i=this.z,n=t*t+e*e+i*i;return n>0&&(n=1/Math.sqrt(n),this.x=t*n,this.y=e*n,this.z=i*n),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z;return this.x=i*o-n*r,this.y=n*s-e*o,this.z=e*r-i*s,this},lerp:function(t,e){void 0===e&&(e=0);var i=this.x,n=this.y,s=this.z;return this.x=i+e*(t.x-i),this.y=n+e*(t.y-n),this.z=s+e*(t.z-s),this},transformMat3:function(t){var e=this.x,i=this.y,n=this.z,s=t.val;return this.x=e*s[0]+i*s[3]+n*s[6],this.y=e*s[1]+i*s[4]+n*s[7],this.z=e*s[2]+i*s[5]+n*s[8],this},transformMat4:function(t){var e=this.x,i=this.y,n=this.z,s=t.val;return this.x=s[0]*e+s[4]*i+s[8]*n+s[12],this.y=s[1]*e+s[5]*i+s[9]*n+s[13],this.z=s[2]*e+s[6]*i+s[10]*n+s[14],this},transformCoordinates:function(t){var e=this.x,i=this.y,n=this.z,s=t.val,r=e*s[0]+i*s[4]+n*s[8]+s[12],o=e*s[1]+i*s[5]+n*s[9]+s[13],a=e*s[2]+i*s[6]+n*s[10]+s[14],h=e*s[3]+i*s[7]+n*s[11]+s[15];return this.x=r/h,this.y=o/h,this.z=a/h,this},transformQuat:function(t){var e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z,a=t.w,h=a*e+r*n-o*i,l=a*i+o*e-s*n,u=a*n+s*i-r*e,c=-s*e-r*i-o*n;return this.x=h*a+c*-s+l*-o-u*-r,this.y=l*a+c*-r+u*-s-h*-o,this.z=u*a+c*-o+h*-r-l*-s,this},project:function(t){var e=this.x,i=this.y,n=this.z,s=t.val,r=s[0],o=s[1],a=s[2],h=s[3],l=s[4],u=s[5],c=s[6],d=s[7],f=s[8],p=s[9],v=s[10],g=s[11],y=s[12],m=s[13],x=s[14],b=s[15],w=1/(e*h+i*d+n*g+b);return this.x=(e*r+i*l+n*f+y)*w,this.y=(e*o+i*u+n*p+m)*w,this.z=(e*a+i*c+n*v+x)*w,this},unproject:function(t,e){var i=t.x,n=t.y,s=t.z,r=t.w,o=this.x-i,a=r-this.y-1-n,h=this.z;return this.x=2*o/s-1,this.y=2*a/r-1,this.z=2*h-1,this.project(e)},reset:function(){return this.x=0,this.y=0,this.z=0,this}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){if(this.entries=[],Array.isArray(t))for(var e=0;e<t.length;e++)this.set(t[e])},set:function(t){return-1===this.entries.indexOf(t)&&this.entries.push(t),this},get:function(t,e){for(var i=0;i<this.entries.length;i++){var n=this.entries[i];if(n[t]===e)return n}},getArray:function(){return this.entries.slice(0)},delete:function(t){var e=this.entries.indexOf(t);return e>-1&&this.entries.splice(e,1),this},dump:function(){console.group("Set");for(var t=0;t<this.entries.length;t++){var e=this.entries[t];console.log(e)}console.groupEnd()},each:function(t,e){var i,n=this.entries.slice(),s=n.length;if(e)for(i=0;i<s&&!1!==t.call(e,n[i],i);i++);else for(i=0;i<s&&!1!==t(n[i],i);i++);return this},iterate:function(t,e){var i,n=this.entries.length;if(e)for(i=0;i<n&&!1!==t.call(e,this.entries[i],i);i++);else for(i=0;i<n&&!1!==t(this.entries[i],i);i++);return this},iterateLocal:function(t){var e,i=[];for(e=1;e<arguments.length;e++)i.push(arguments[e]);var n=this.entries.length;for(e=0;e<n;e++){var s=this.entries[e];s[t].apply(s,i)}return this},clear:function(){return this.entries.length=0,this},contains:function(t){return this.entries.indexOf(t)>-1},union:function(t){var e=new s;return t.entries.forEach(function(t){e.set(t)}),this.entries.forEach(function(t){e.set(t)}),e},intersect:function(t){var e=new s;return this.entries.forEach(function(i){t.contains(i)&&e.set(i)}),e},difference:function(t){var e=new s;return this.entries.forEach(function(i){t.contains(i)||e.set(i)}),e},size:{get:function(){return this.entries.length},set:function(t){return this.entries.length=t}}});t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e={};for(var i in t)Array.isArray(t[i])?e[i]=t[i].slice(0):e[i]=t[i];return e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(2),o=i(609),a=new n({Extends:r,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Flip,s.GetBounds,s.Origin,s.Pipeline,s.ScaleMode,s.ScrollFactor,s.Size,s.Texture,s.Tint,s.Transform,s.Visible,o],initialize:function(t,e,i,n,s){r.call(this,t,"Image"),this.setTexture(n,s),this.setPosition(e,i),this.setSizeToFrame(),this.setOriginFromFrame(),this.initPipeline("TextureTintPipeline")}});t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.hasOwnProperty(e)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=t.x3-t.x1,s=t.y3-t.y1,r=t.x2-t.x1,o=t.y2-t.y1,a=e-t.x1,h=i-t.y1,l=n*n+s*s,u=n*r+s*o,c=n*a+s*h,d=r*r+o*o,f=r*a+o*h,p=l*d-u*u,v=0===p?0:1/p,g=(d*c-u*f)*v,y=(l*f-u*c)*v;return g>=0&&y>=0&&g+y<1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.atan2(t.y2-t.y1,t.x2-t.x1)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(63),r=i(327),o=i(328),a=i(125),h=new n({initialize:function(t,e,i,n,s,r){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r=0),this.x1=t,this.y1=e,this.x2=i,this.y2=n,this.x3=s,this.y3=r},contains:function(t,e){return s(this,t,e)},getPoint:function(t,e){return r(this,t,e)},getPoints:function(t,e,i){return o(this,t,e,i)},getRandomPoint:function(t){return a(this,t)},setTo:function(t,e,i,n,s,r){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r=0),this.x1=t,this.y1=e,this.x2=i,this.y2=n,this.x3=s,this.y3=r,this},getLineA:function(){return{x1:this.x1,y1:this.y1,x2:this.x2,y2:this.y2}},getLineB:function(){return{x1:this.x2,y1:this.y2,x2:this.x3,y2:this.y3}},getLineC:function(){return{x1:this.x3,y1:this.y3,x2:this.x1,y2:this.y1}},left:{get:function(){return Math.min(this.x1,this.x2,this.x3)},set:function(t){var e=0;e=this.x1<=this.x2&&this.x1<=this.x3?this.x1-t:this.x2<=this.x1&&this.x2<=this.x3?this.x2-t:this.x3-t,this.x1-=e,this.x2-=e,this.x3-=e}},right:{get:function(){return Math.max(this.x1,this.x2,this.x3)},set:function(t){var e=0;e=this.x1>=this.x2&&this.x1>=this.x3?this.x1-t:this.x2>=this.x1&&this.x2>=this.x3?this.x2-t:this.x3-t,this.x1-=e,this.x2-=e,this.x3-=e}},top:{get:function(){return Math.min(this.y1,this.y2,this.y3)},set:function(t){var e=0;e=this.y1<=this.y2&&this.y1<=this.y3?this.y1-t:this.y2<=this.y1&&this.y2<=this.y3?this.y2-t:this.y3-t,this.y1-=e,this.y2-=e,this.y3-=e}},bottom:{get:function(){return Math.max(this.y1,this.y2,this.y3)},set:function(t){var e=0;e=this.y1>=this.y2&&this.y1>=this.y3?this.y1-t:this.y2>=this.y1&&this.y2>=this.y3?this.y2-t:this.y3-t,this.y1-=e,this.y2-=e,this.y3-=e}}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(19),o=i(7),a=i(1),h=new n({Extends:r,initialize:function(t,e,i,n){var o="string"==typeof t?t:a(t,"key",""),h={type:"json",extension:a(t,"extension","json"),responseType:"text",key:o,url:a(t,"file",e),path:i,xhrSettings:a(t,"xhr",n)};r.call(this,h),"object"==typeof h.url&&(this.data=h.url,this.state=s.FILE_POPULATED)},onProcess:function(t){this.state=s.FILE_PROCESSING,this.data=JSON.parse(this.xhrLoader.responseText),this.onComplete(),t(this)}});o.register("json",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new h(t[n],e,this.path,i));else this.addFile(new h(t,e,this.path,i));return this}),t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(19),o=i(7),a=i(1),h=new n({Extends:r,initialize:function(t,e,i,n,s){var o="string"==typeof t?t:a(t,"key",""),h={type:"image",extension:a(t,"extension","png"),responseType:"blob",key:o,url:a(t,"file",e),path:i,xhrSettings:a(t,"xhr",n),config:a(t,"config",s)};r.call(this,h)},onProcess:function(t){this.state=s.FILE_PROCESSING,this.data=new Image,this.data.crossOrigin=this.crossOrigin;var e=this;this.data.onload=function(){r.revokeObjectURL(e.data),e.onComplete(),t(e)},this.data.onerror=function(){r.revokeObjectURL(e.data),e.state=s.FILE_ERRORED,t(e)},r.createObjectURL(this.data,this.xhrLoader.response,"image/png")}});o.register("image",function(t,e,i){var n,s,r;if(Array.isArray(t))for(var o=0;o<t.length;o++)n=a(t[o],"file",e),Array.isArray(n)&&2===n.length?(s=this.addFile(new h(t[o],n[0],this.path,i)),r=this.addFile(new h(t[o],n[1],this.path,i)),s.setLinkFile(r,"dataimage")):this.addFile(new h(t[o],e,this.path,i));else n=a(t,"file",e),Array.isArray(n)&&2===n.length?(s=this.addFile(new h(t,n[0],this.path,i)),r=this.addFile(new h(t,n[1],this.path,i)),s.setLinkFile(r,"dataimage")):this.addFile(new h(t,e,this.path,i));return this}),t.exports=h},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={DYNAMIC_BODY:0,STATIC_BODY:1,GROUP:2,TILEMAPLAYER:3,FACING_NONE:10,FACING_UP:11,FACING_DOWN:12,FACING_LEFT:13,FACING_RIGHT:14}},function(t,e,i){var n={};t.exports=n;var s=i(16);!function(){n.on=function(t,e,i){for(var n,s=e.split(" "),r=0;r<s.length;r++)n=s[r],t.events=t.events||{},t.events[n]=t.events[n]||[],t.events[n].push(i);return i},n.off=function(t,e,i){if(!e)return void(t.events={});"function"==typeof e&&(i=e,e=s.keys(t.events).join(" "));for(var n=e.split(" "),r=0;r<n.length;r++){var o=t.events[n[r]],a=[];if(i&&o)for(var h=0;h<o.length;h++)o[h]!==i&&a.push(o[h]);t.events[n[r]]=a}},n.trigger=function(t,e,i){var n,r,o,a;if(t.events){i||(i={}),n=e.split(" ");for(var h=0;h<n.length;h++)if(r=n[h],o=t.events[r]){a=s.clone(i,!1),a.name=r,a.source=t;for(var l=0;l<o.length;l++)o[l].apply(t,[a])}}}}()},function(t,e,i){var n={};t.exports=n;var s=i(38),r=i(39),o=i(84),a=i(40),h=i(164),l=i(16);!function(){n._warming=.4,n._torqueDampen=1,n._minLength=1e-6,n.create=function(t){var e=t;e.bodyA&&!e.pointA&&(e.pointA={x:0,y:0}),e.bodyB&&!e.pointB&&(e.pointB={x:0,y:0});var i=e.bodyA?r.add(e.bodyA.position,e.pointA):e.pointA,n=e.bodyB?r.add(e.bodyB.position,e.pointB):e.pointB,s=r.magnitude(r.sub(i,n));e.length=void 0!==e.length?e.length:s,e.id=e.id||l.nextId(),e.label=e.label||"Constraint",e.type="constraint",e.stiffness=e.stiffness||(e.length>0?1:.7),e.damping=e.damping||0,e.angularStiffness=e.angularStiffness||0,e.angleA=e.bodyA?e.bodyA.angle:e.angleA,e.angleB=e.bodyB?e.bodyB.angle:e.angleB,e.plugin={};var o={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return 0===e.length&&e.stiffness>.1?(o.type="pin",o.anchors=!1):e.stiffness<.9&&(o.type="spring"),e.render=l.extend(o,e.render),e},n.preSolveAll=function(t){for(var e=0;e<t.length;e+=1){var i=t[e],n=i.constraintImpulse;i.isStatic||0===n.x&&0===n.y&&0===n.angle||(i.position.x+=n.x,i.position.y+=n.y,i.angle+=n.angle)}},n.solveAll=function(t,e){for(var i=0;i<t.length;i+=1){var s=t[i],r=!s.bodyA||s.bodyA&&s.bodyA.isStatic,o=!s.bodyB||s.bodyB&&s.bodyB.isStatic;(r||o)&&n.solve(t[i],e)}for(i=0;i<t.length;i+=1)s=t[i],r=!s.bodyA||s.bodyA&&s.bodyA.isStatic,o=!s.bodyB||s.bodyB&&s.bodyB.isStatic,r||o||n.solve(t[i],e)},n.solve=function(t,e){var i=t.bodyA,s=t.bodyB,o=t.pointA,a=t.pointB;if(i||s){i&&!i.isStatic&&(r.rotate(o,i.angle-t.angleA,o),t.angleA=i.angle),s&&!s.isStatic&&(r.rotate(a,s.angle-t.angleB,a),t.angleB=s.angle);var h=o,l=a;if(i&&(h=r.add(i.position,o)),s&&(l=r.add(s.position,a)),h&&l){var u=r.sub(h,l),c=r.magnitude(u);c<n._minLength&&(c=n._minLength);var d,f,p,v,g,y=(c-t.length)/c,m=t.stiffness<1?t.stiffness*e:t.stiffness,x=r.mult(u,y*m),b=(i?i.inverseMass:0)+(s?s.inverseMass:0),w=(i?i.inverseInertia:0)+(s?s.inverseInertia:0),T=b+w;if(t.damping){var S=r.create();p=r.div(u,c),g=r.sub(s&&r.sub(s.position,s.positionPrev)||S,i&&r.sub(i.position,i.positionPrev)||S),v=r.dot(p,g)}i&&!i.isStatic&&(f=i.inverseMass/b,i.constraintImpulse.x-=x.x*f,i.constraintImpulse.y-=x.y*f,i.position.x-=x.x*f,i.position.y-=x.y*f,t.damping&&(i.positionPrev.x-=t.damping*p.x*v*f,i.positionPrev.y-=t.damping*p.y*v*f),d=r.cross(o,x)/T*n._torqueDampen*i.inverseInertia*(1-t.angularStiffness),i.constraintImpulse.angle-=d,i.angle-=d),s&&!s.isStatic&&(f=s.inverseMass/b,s.constraintImpulse.x+=x.x*f,s.constraintImpulse.y+=x.y*f,s.position.x+=x.x*f,s.position.y+=x.y*f,t.damping&&(s.positionPrev.x+=t.damping*p.x*v*f,s.positionPrev.y+=t.damping*p.y*v*f),d=r.cross(a,x)/T*n._torqueDampen*s.inverseInertia*(1-t.angularStiffness),s.constraintImpulse.angle+=d,s.angle+=d)}}},n.postSolveAll=function(t){for(var e=0;e<t.length;e++){var i=t[e],l=i.constraintImpulse;if(!(i.isStatic||0===l.x&&0===l.y&&0===l.angle)){o.set(i,!1);for(var u=0;u<i.parts.length;u++){var c=i.parts[u];s.translate(c.vertices,l),u>0&&(c.position.x+=l.x,c.position.y+=l.y),0!==l.angle&&(s.rotate(c.vertices,l.angle,i.position),h.rotate(c.axes,l.angle),u>0&&r.rotateAbout(c.position,l.angle,i.position,c.position)),a.update(c.bounds,c.vertices,i.velocity)}l.angle*=n._warming,l.x*=n._warming,l.y*=n._warming}}}}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={DEFAULT:0,LINEAR:0,NEAREST:1}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(34),r=i(213),o=i(214),a=i(116),h=new n({initialize:function(t,e,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),this.x=t,this.y=e,this._radius=i,this._diameter=2*i},contains:function(t,e){return s(this,t,e)},getPoint:function(t,e){return r(this,t,e)},getPoints:function(t,e,i){return o(this,t,e,i)},getRandomPoint:function(t){return a(this,t)},setTo:function(t,e,i){return this.x=t,this.y=e,this._radius=i,this._diameter=2*i,this},setEmpty:function(){return this._radius=0,this._diameter=0,this},setPosition:function(t,e){return void 0===e&&(e=t),this.x=t,this.y=e,this},isEmpty:function(){return this._radius<=0},radius:{get:function(){return this._radius},set:function(t){this._radius=t,this._diameter=2*t}},diameter:{get:function(){return this._diameter},set:function(t){this._diameter=t,this._radius=.5*t}},left:{get:function(){return this.x-this._radius},set:function(t){this.x=t+this._radius}},right:{get:function(){return this.x+this._radius},set:function(t){this.x=t-this._radius}},top:{get:function(){return this.y-this._radius},set:function(t){this.y=t+this._radius}},bottom:{get:function(){return this.y+this._radius},set:function(t){this.y=t-this._radius}}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(56),s=function(t,e,i){return t=n(t,0,1),(i-e)*t};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.sqrt((t.x2-t.x1)*(t.x2-t.x1)+(t.y2-t.y1)*(t.y2-t.y1))};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(133),r=i(8),o=i(6),a=new n({initialize:function(t){this.type=t,this.defaultDivisions=5,this.arcLengthDivisions=100,this.cacheArcLengths=[],this.needsUpdate=!0,this.active=!0,this._tmpVec2A=new o,this._tmpVec2B=new o},draw:function(t,e){return void 0===e&&(e=32),t.strokePoints(this.getPoints(e))},getBounds:function(t,e){t||(t=new r),void 0===e&&(e=16);var i=this.getLength();e>i&&(e=i/2);var n=Math.max(1,Math.round(i/e));return s(this.getSpacedPoints(n),t)},getDistancePoints:function(t){var e=this.getLength(),i=Math.max(1,e/t);return this.getSpacedPoints(i)},getEndPoint:function(t){return void 0===t&&(t=new o),this.getPointAt(1,t)},getLength:function(){var t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(void 0===t&&(t=this.arcLengthDivisions),this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var e,i=[],n=this.getPoint(0,this._tmpVec2A),s=0;i.push(0);for(var r=1;r<=t;r++)e=this.getPoint(r/t,this._tmpVec2B),s+=e.distance(n),i.push(s),n.copy(e);return this.cacheArcLengths=i,i},getPointAt:function(t,e){var i=this.getUtoTmapping(t);return this.getPoint(i,e)},getPoints:function(t){void 0===t&&(t=this.defaultDivisions);for(var e=[],i=0;i<=t;i++)e.push(this.getPoint(i/t));return e},getRandomPoint:function(t){return void 0===t&&(t=new o),this.getPoint(Math.random(),t)},getSpacedPoints:function(t){void 0===t&&(t=this.defaultDivisions);for(var e=[],i=0;i<=t;i++){var n=this.getUtoTmapping(i/t,null,t);e.push(this.getPoint(n))}return e},getStartPoint:function(t){return void 0===t&&(t=new o),this.getPointAt(0,t)},getTangent:function(t,e){void 0===e&&(e=new o);var i=t-1e-4,n=t+1e-4;return i<0&&(i=0),n>1&&(n=1),this.getPoint(i,this._tmpVec2A),this.getPoint(n,e),e.subtract(this._tmpVec2A).normalize()},getTangentAt:function(t,e){var i=this.getUtoTmapping(t);return this.getTangent(i,e)},getTFromDistance:function(t,e){return t<=0?0:this.getUtoTmapping(0,t,e)},getUtoTmapping:function(t,e,i){var n,s=this.getLengths(i),r=0,o=s.length;n=e?Math.min(e,s[o-1]):t*s[o-1];for(var a,h=0,l=o-1;h<=l;)if(r=Math.floor(h+(l-h)/2),(a=s[r]-n)<0)h=r+1;else{if(!(a>0)){l=r;break}l=r-1}if(r=l,s[r]===n)return r/(o-1);var u=s[r];return(r+(n-u)/(s[r+1]-u))/(o-1)},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()}});t.exports=a},function(t,e,i){(function(e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={android:!1,chromeOS:!1,cocoonJS:!1,cocoonJSApp:!1,cordova:!1,crosswalk:!1,desktop:!1,ejecta:!1,electron:!1,iOS:!1,iOSVersion:0,iPad:!1,iPhone:!1,kindle:!1,linux:!1,macOS:!1,node:!1,nodeWebkit:!1,pixelRatio:1,webApp:!1,windows:!1,windowsPhone:!1};t.exports=function(){var t=navigator.userAgent;/Windows/.test(t)?i.windows=!0:/Mac OS/.test(t)?i.macOS=!0:/Linux/.test(t)?i.linux=!0:/Android/.test(t)?i.android=!0:/iP[ao]d|iPhone/i.test(t)?(i.iOS=!0,navigator.appVersion.match(/OS (\d+)/),i.iOSVersion=parseInt(RegExp.$1,10)):/Kindle/.test(t)||/\bKF[A-Z][A-Z]+/.test(t)||/Silk.*Mobile Safari/.test(t)?i.kindle=!0:/CrOS/.test(t)&&(i.chromeOS=!0),(/Windows Phone/i.test(t)||/IEMobile/i.test(t))&&(i.android=!1,i.iOS=!1,i.macOS=!1,i.windows=!0,i.windowsPhone=!0);var n=/Silk/.test(t);if((i.windows||i.macOS||i.linux&&!n||i.chromeOS)&&(i.desktop=!0),(i.windowsPhone||/Windows NT/i.test(t)&&/Touch/i.test(t))&&(i.desktop=!1),navigator.standalone&&(i.webApp=!0),void 0!==window.cordova&&(i.cordova=!0),void 0!==e&&void 0!==e.versions.node&&(i.node=!0),i.node&&"object"==typeof e.versions&&(i.nodeWebkit=!!e.versions["node-webkit"],i.electron=!!e.versions.electron),navigator.isCocoonJS){i.cocoonJS=!0;try{i.cocoonJSApp="undefined"!=typeof CocoonJS}catch(t){i.cocoonJSApp=!1}}return void 0!==window.ejecta&&(i.ejecta=!0),/Crosswalk/.test(t)&&(i.crosswalk=!0),i.iPhone=-1!==t.toLowerCase().indexOf("iphone"),i.iPad=-1!==t.toLowerCase().indexOf("ipad"),i.pixelRatio=window.devicePixelRatio||1,i}()}).call(e,i(182))},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(t.width<=0||t.height<=0)return!1;var n=(e-t.x)/t.width,s=(i-t.y)/t.height;return n*=n,s*=s,n+s<.25};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(200),s=i(0),r=i(1),o=i(4),a=i(293),h=i(59),l=i(36),u=new s({initialize:function(t,e,i){void 0!==i||Array.isArray(e)||"object"!=typeof e||(i=e,e=null),this.scene=t,this.children=new h(e),this.isParent=!0,this.classType=r(i,"classType",l),this.active=r(i,"active",!0),this.maxSize=r(i,"maxSize",-1),this.defaultKey=r(i,"defaultKey",null),this.defaultFrame=r(i,"defaultFrame",null),this.runChildUpdate=r(i,"runChildUpdate",!1),this.createCallback=r(i,"createCallback",null),this.removeCallback=r(i,"removeCallback",null),this.createMultipleCallback=r(i,"createMultipleCallback",null),i&&this.createMultiple(i)},create:function(t,e,i,n,s){if(void 0===i&&(i=this.defaultKey),void 0===n&&(n=this.defaultFrame),void 0===s&&(s=!0),this.isFull())return null;var r=new this.classType(this.scene,t,e,i,n);return this.scene.sys.displayList.add(r),r.preUpdate&&this.scene.sys.updateList.add(r),r.visible=s,this.add(r),r},createMultiple:function(t){Array.isArray(t)||(t=[t]);for(var e=[],i=0;i<t.length;i++){var n=this.createFromConfig(t[i]);e=e.concat(n)}return e},createFromConfig:function(t){this.classType=r(t,"classType",this.classType);var e=r(t,"key",void 0),i=r(t,"frame",null),s=r(t,"visible",!0),h=[];if(void 0===e)return h;Array.isArray(e)||(e=[e]),Array.isArray(i)||(i=[i]);for(var l=r(t,"repeat",0),u=r(t,"randomKey",!1),c=r(t,"randomFrame",!1),d=r(t,"yoyo",!1),f=r(t,"frameQuantity",1),p=r(t,"max",0),v=a(e,i,{max:p,qty:f,random:u,randomB:c,repeat:l,yoyo:d}),g=0;g<v.length;g++)h.push(this.create(0,0,v[g].a,v[g].b,s));var y=o(t,"setXY.x",0),m=o(t,"setXY.y",0),x=o(t,"setXY.stepX",0),b=o(t,"setXY.stepY",0);n.SetXY(h,y,m,x,b);var w=o(t,"setRotation.value",0),T=o(t,"setRotation.step",0);n.SetRotation(h,w,T);var S=o(t,"setScale.x",1),A=o(t,"setScale.y",S),C=o(t,"setScale.stepX",0),M=o(t,"setScale.stepY",0);n.SetScale(h,S,A,C,M);var _=o(t,"setAlpha.value",1),E=o(t,"setAlpha.step",0);n.SetAlpha(h,_,E);var P=r(t,"hitArea",null),L=r(t,"hitAreaCallback",null);P&&n.SetHitArea(h,P,L);var k=r(t,"gridAlign",!1);return k&&n.GridAlign(h,k),this.createMultipleCallback&&this.createMultipleCallback.call(this,h),h},preUpdate:function(t,e){if(this.runChildUpdate&&0!==this.children.size)for(var i=this.children.entries.slice(),n=0;n<i.length;n++){var s=i[n];s.active&&s.update(t,e)}},add:function(t,e){return void 0===e&&(e=!1),this.children.set(t),this.createCallback&&this.createCallback.call(this,t),e&&(this.scene.sys.displayList.add(t),t.preUpdate&&this.scene.sys.updateList.add(t)),this},addMultiple:function(t,e){if(void 0===e&&(e=!1),Array.isArray(t))for(var i=0;i<t.length;i++)this.add(t[i],e);return this},remove:function(t,e){return void 0===e&&(e=!1),this.children.delete(t),e&&(this.scene.sys.displayList.remove(t),t.preUpdate&&this.scene.sys.updateList.remove(t)),this},clear:function(t){if(void 0===t&&(t=!1),t)for(var e=this.children,i=0;i<e.length;i++){var n=e[i];this.scene.sys.displayList.remove(n),n.preUpdate&&this.scene.sys.updateList.remove(n)}return this.children.clear(),this},contains:function(t){return this.children.contains(t)},getChildren:function(){return this.children.entries},getLength:function(){return this.children.size},getFirst:function(t,e,i,n,s,r,o){void 0===t&&(t=!1),void 0===e&&(e=!1);for(var a,h=this.children.entries,l=0;l<h.length;l++)if(a=h[l],a.active===t)return"number"==typeof i&&(a.x=i),"number"==typeof n&&(a.y=n),a;return e?this.create(i,n,s,r,o):null},get:function(t,e,i,n,s){return this.getFirst(!1,!0,t,e,i,n,s)},getFirstAlive:function(t,e,i,n,s,r){return this.getFirst(!0,t,e,i,n,s,r)},getFirstDead:function(t,e,i,n,s,r){return this.getFirst(!1,t,e,i,n,s,r)},playAnimation:function(t,e){return n.PlayAnimation(this.children.entries,t,e),this},isFull:function(){return-1!==this.maxSize&&this.children.size===this.maxSize},countActive:function(t){void 0===t&&(t=!0);for(var e=0,i=0;i<this.children.size;i++)this.children.entries[i].active===t&&e++;return e},getTotalUsed:function(){return this.countActive()},getTotalFree:function(){var t=this.getTotalUsed();return(-1===this.maxSize?999999999999:this.maxSize)-t},setDepth:function(t,e){return n.SetDepth(this.children.entries,t,e),this},kill:function(t){this.children.contains(t)&&t.setActive(!1)},killAndHide:function(t){this.children.contains(t)&&(t.setActive(!1),t.setVisible(!1))},toggleVisible:function(){return n.ToggleVisible(this.children.entries),this},destroy:function(){this.children.clear(),this.scene=void 0,this.children=void 0}});t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(617),s=function(t,e){if("string"==typeof t&&n.hasOwnProperty(t)){if(e){var i=e.slice(0);return i.unshift(0),function(e){return i[0]=e,n[t].apply(this,i)}}return n[t]}return"function"==typeof t?t:(Array.isArray(t)&&t.length,n.Power0)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t&&t.hasOwnProperty(e)?t[e]:i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(60),s=function(t,e){var i=n(t);for(var s in e)i.hasOwnProperty(s)||(i[s]=e[s]);return i};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={NEVER:0,LITE:1,PASSIVE:2,ACTIVE:4,FIXED:8}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={NONE:0,A:1,B:2,BOTH:3}},function(t,e,i){var n={};t.exports=n;var s=i(69);!function(){n._motionWakeThreshold=.18,n._motionSleepThreshold=.08,n._minBias=.9,n.update=function(t,e){for(var i=e*e*e,s=0;s<t.length;s++){var r=t[s],o=r.speed*r.speed+r.angularSpeed*r.angularSpeed;if(0===r.force.x&&0===r.force.y){var a=Math.min(r.motion,o),h=Math.max(r.motion,o);r.motion=n._minBias*a+(1-n._minBias)*h,r.sleepThreshold>0&&r.motion<n._motionSleepThreshold*i?(r.sleepCounter+=1,r.sleepCounter>=r.sleepThreshold&&n.set(r,!0)):r.sleepCounter>0&&(r.sleepCounter-=1)}else n.set(r,!1)}},n.afterCollisions=function(t,e){for(var i=e*e*e,s=0;s<t.length;s++){var r=t[s];if(r.isActive){var o=r.collision,a=o.bodyA.parent,h=o.bodyB.parent;if(!(a.isSleeping&&h.isSleeping||a.isStatic||h.isStatic)&&(a.isSleeping||h.isSleeping)){var l=a.isSleeping&&!a.isStatic?a:h,u=l===a?h:a;!l.isStatic&&u.motion>n._motionWakeThreshold*i&&n.set(l,!1)}}}},n.set=function(t,e){var i=t.isSleeping;e?(t.isSleeping=!0,t.sleepCounter=t.sleepThreshold,t.positionImpulse.x=0,t.positionImpulse.y=0,t.positionPrev.x=t.position.x,t.positionPrev.y=t.position.y,t.anglePrev=t.angle,t.speed=0,t.angularSpeed=0,t.motion=0,i||s.trigger(t,"sleepStart")):(t.isSleeping=!1,t.sleepCounter=0,i&&s.trigger(t,"sleepEnd"))}}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t>=0&&t<i.width&&e>=0&&e<i.height};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(1),r=new n({initialize:function(t){void 0===t&&(t={}),this.name=s(t,"name","layer"),this.x=s(t,"x",0),this.y=s(t,"y",0),this.width=s(t,"width",0),this.height=s(t,"height",0),this.tileWidth=s(t,"tileWidth",0),this.tileHeight=s(t,"tileHeight",0),this.baseTileWidth=s(t,"baseTileWidth",this.tileWidth),this.baseTileHeight=s(t,"baseTileHeight",this.tileHeight),this.widthInPixels=s(t,"widthInPixels",this.width*this.baseTileWidth),this.heightInPixels=s(t,"heightInPixels",this.height*this.baseTileHeight),this.alpha=s(t,"alpha",1),this.visible=s(t,"visible",!0),this.properties=s(t,"properties",{}),this.indexes=s(t,"indexes",[]),this.collideIndexes=s(t,"collideIndexes",[]),this.callbacks=s(t,"callbacks",[]),this.bodies=s(t,"bodies",[]),this.data=s(t,"data",[]),this.tilemapLayer=s(t,"tilemapLayer",null)}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(1),r=new n({initialize:function(t){void 0===t&&(t={}),this.name=s(t,"name","map"),this.width=s(t,"width",0),this.height=s(t,"height",0),this.tileWidth=s(t,"tileWidth",0),this.tileHeight=s(t,"tileHeight",0),this.widthInPixels=s(t,"widthInPixels",this.width*this.tileWidth),this.heightInPixels=s(t,"heightInPixels",this.height*this.tileHeight),this.format=s(t,"format",null),this.orientation=s(t,"orientation","orthogonal"),this.version=s(t,"version","1"),this.properties=s(t,"properties",{}),this.layers=s(t,"layers",[]),this.images=s(t,"images",[]),this.objects=s(t,"objects",{}),this.collision=s(t,"collision",{}),this.tilesets=s(t,"tilesets",[]),this.imageCollections=s(t,"imageCollections",[]),this.tiles=s(t,"tiles",[])}});t.exports=r},function(t,e,i){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]}return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"createAllAnimations",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"loadAllAssets",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"config",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"start",{enumerable:!0,get:function(){return u.default}}),e.scenes=e.fonts=void 0;var r=s(i(399)),o=n(i(401));e.fonts=o;var a=s(i(403)),h=n(i(183));e.scenes=h;var l=s(i(196)),u=s(i(1009))},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(51),s=i(72),r=i(34),o=i(0),a=i(12),h=i(2),l=i(8),u=i(35),c=new o({Extends:h,Mixins:[a.Depth,a.GetBounds,a.Origin,a.ScaleMode,a.Transform,a.ScrollFactor,a.Visible],initialize:function(t,e,i,s,r){void 0===s&&(s=1),void 0===r&&(r=s),h.call(this,t,"Zone"),this.setPosition(e,i),this.width=s,this.height=r,this.blendMode=n.NORMAL},displayWidth:{get:function(){return this.scaleX*this.width},set:function(t){this.scaleX=t/this.width}},displayHeight:{get:function(){return this.scaleY*this.height},set:function(t){this.scaleY=t/this.height}},setSize:function(t,e,i){return void 0===i&&(i=!0),this.width=t,this.height=e,i&&this.input&&this.input.hitArea instanceof l&&(this.input.hitArea.width=t,this.input.hitArea.height=e),this},setDisplaySize:function(t,e){return this.displayWidth=t,this.displayHeight=e,this},setCircleDropZone:function(t){return this.setDropZone(new s(0,0,t),r)},setRectangleDropZone:function(t,e){var i=-t/2,n=-e/2;return this.setDropZone(new l(i,n,t,e),u)},setDropZone:function(t,e){return void 0===t?this.setRectangleDropZone(this.width,this.height):(this.input||this.setInteractive(t,e),this.input.dropZone=!0),this},renderCanvas:function(){},renderWebGL:function(){}});t.exports=c},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 2*(t.width+t.height)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){this.parent=t,this.events=e,e||(this.events=t.events?t.events:t),this.list={},this.blockSet=!1,this._frozen=!1,this.events.once("destroy",this.destroy,this)},get:function(t){return this.list[t]},getAll:function(){var t={};for(var e in this.list)t[e]=this.list[e];return t},query:function(t){var e={};for(var i in this.list)i.match(t)&&(e[i]=this.list[i]);return e},set:function(t,e){if(this._frozen)return this;if(this.events.listenerCount("changedata")>0){this.blockSet=!1;var i=this,n=function(e){i.blockSet=!0,i.list[t]=e,i.events.emit("setdata",i.parent,t,e)};if(this.events.emit("changedata",this.parent,t,e,n),this.blockSet)return this}return this.list[t]=e,this.events.emit("setdata",this.parent,t,e),this},each:function(t,e){for(var i=[this.parent,null,void 0],n=1;n<arguments.length;n++)i.push(arguments[n]);for(var s in this.list)i[1]=s,i[2]=this.list[s],t.apply(e,i);return this},merge:function(t,e){void 0===e&&(e=!0);for(var i in t)(e||!e&&!this.has(i))&&(this.list[i]=t);return this},remove:function(t){if(!this._frozen&&this.has(t)){var e=this.list[t];delete this.list[t],this.events.emit("removedata",this,t,e)}return this},pop:function(t){var e=void 0;return!this._frozen&&this.has(t)&&(e=this.list[t],delete this.list[t],this.events.emit("removedata",this,t,e)),e},has:function(t){return this.list.hasOwnProperty(t)},setFreeze:function(t){return this._frozen=t,this},reset:function(){for(var t in this.list)delete this.list[t];return this.blockSet=!1,this._frozen=!1,this},destroy:function(){this.reset(),this.events.off("changedata"),this.events.off("setdata"),this.events.off("removedata"),this.parent=null},freeze:{get:function(){return this._frozen},set:function(t){this._frozen=!!t}},count:{get:function(){var t=0;for(var e in this.list)void 0!==this.list[e]&&t++;return t}}});t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[i],t[i]=n}return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(2),r=i(36),o=i(6),a=i(131),h=new n({Extends:s,initialize:function(t,e,i,n,h,l){s.call(this,t,"Sprite3D"),this.gameObject=new r(t,0,0,h,l),this.position=new a(e,i,n),this.size=new o(this.gameObject.width,this.gameObject.height),this.scale=new o(1,1),this.adjustScaleX=!0,this.adjustScaleY=!0,this._visible=!0},project:function(t){var e=this.position,i=this.gameObject;t.project(e,i),t.getPointSize(e,this.size,this.scale),this.scale.x<=0||this.scale.y<=0?i.setVisible(!1):(i.visible||i.setVisible(!0),this.adjustScaleX&&(i.scaleX=this.scale.x),this.adjustScaleY&&(i.scaleY=this.scale.y),i.setDepth(-1*i.z))},setVisible:function(t){return this.visible=t,this},visible:{get:function(){return this._visible},set:function(t){this._visible=t,this.gameObject.visible=t}},x:{get:function(){return this.position.x},set:function(t){this.position.x=t}},y:{get:function(){return this.position.y},set:function(t){this.position.y=t}},z:{get:function(){return this.position.z},set:function(t){this.position.z=t}}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(76),s={chrome:!1,chromeVersion:0,edge:!1,firefox:!1,firefoxVersion:0,ie:!1,ieVersion:0,mobileSafari:!1,opera:!1,safari:!1,safariVersion:0,silk:!1,trident:!1,tridentVersion:0};t.exports=function(){var t=navigator.userAgent;return/Edge\/\d+/.test(t)?s.edge=!0:/Chrome\/(\d+)/.test(t)&&!n.windowsPhone?(s.chrome=!0,s.chromeVersion=parseInt(RegExp.$1,10)):/Firefox\D+(\d+)/.test(t)?(s.firefox=!0,s.firefoxVersion=parseInt(RegExp.$1,10)):/AppleWebKit/.test(t)&&n.iOS?s.mobileSafari=!0:/MSIE (\d+\.\d+);/.test(t)?(s.ie=!0,s.ieVersion=parseInt(RegExp.$1,10)):/Opera/.test(t)?s.opera=!0:/Safari/.test(t)&&!n.windowsPhone?s.safari=!0:/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(t)&&(s.ie=!0,s.trident=!0,s.tridentVersion=parseInt(RegExp.$1,10),s.ieVersion=parseInt(RegExp.$3,10)),/Silk/.test(t)&&(s.silk=!0),s}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={PENDING:0,INIT:1,START:2,LOADING:3,CREATING:4,RUNNING:5,PAUSED:6,SLEEPING:7,SHUTDOWN:8,DESTROYED:9}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(13),r=i(3),o=new n({Extends:s,initialize:function(t){s.call(this),this.game=t,this.sounds=[],this.mute=!1,this.volume=1,this.pauseOnBlur=!0,t.events.on("blur",function(){this.pauseOnBlur&&this.onBlur()},this),t.events.on("focus",function(){this.pauseOnBlur&&this.onFocus()},this),t.events.once("destroy",this.destroy,this),this._rate=1,this._detune=0,this.locked=this.locked||!1,this.unlocked=!1,this.locked&&this.unlock()},add:r,addAudioSprite:function(t,e){var i=this.add(t,e);i.spritemap=this.game.cache.json.get(t).spritemap;for(var n in i.spritemap)if(i.spritemap.hasOwnProperty(n)){var s=i.spritemap[n];i.addMarker({name:n,start:s.start,duration:s.end-s.start,config:e})}return i},play:function(t,e){var i=this.add(t);return i.once("ended",i.destroy,i),e?e.name?(i.addMarker(e),i.play(e.name)):i.play(e):i.play()},playAudioSprite:function(t,e,i){var n=this.addAudioSprite(t);return n.once("ended",n.destroy,n),n.play(e,i)},remove:function(t){var e=this.sounds.indexOf(t);return-1!==e&&(t.destroy(),this.sounds.splice(e,1),!0)},removeByKey:function(t){for(var e=0,i=this.sounds.length-1;i>=0;i--){var n=this.sounds[i];n.key===t&&(n.destroy(),this.sounds.splice(i,1),e++)}return e},pauseAll:function(){this.forEachActiveSound(function(t){t.pause()}),this.emit("pauseall",this)},resumeAll:function(){this.forEachActiveSound(function(t){t.resume()}),this.emit("resumeall",this)},stopAll:function(){this.forEachActiveSound(function(t){t.stop()}),this.emit("stopall",this)},unlock:r,onBlur:r,onFocus:r,update:function(t,e){this.unlocked&&(this.unlocked=!1,this.locked=!1,this.emit("unlocked",this));for(var i=this.sounds.length-1;i>=0;i--)this.sounds[i].pendingRemove&&this.sounds.splice(i,1);this.sounds.forEach(function(i){i.update(t,e)})},destroy:function(){this.removeAllListeners(),this.forEachActiveSound(function(t){t.destroy()}),this.sounds.length=0,this.sounds=null,this.game=null},forEachActiveSound:function(t,e){var i=this;this.sounds.forEach(function(n,s){n.pendingRemove||t.call(e||i,n,s,i.sounds)})},rate:{get:function(){return this._rate},set:function(t){this._rate=t,this.forEachActiveSound(function(t){t.setRate()}),this.emit("rate",this,t)}},detune:{get:function(){return this._detune},set:function(t){this._detune=t,this.forEachActiveSound(function(t){t.setRate()}),this.emit("detune",this,t)}}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(13),r=i(25),o=i(3),a=new n({Extends:s,initialize:function(t,e,i){s.call(this),this.manager=t,this.key=e,this.isPlaying=!1,this.isPaused=!1,this.totalRate=1,this.duration=this.duration||0,this.totalDuration=this.totalDuration||0,this.config={delay:0},this.currentConfig=this.config,this.mute=!1,this.volume=1,this.rate=1,this.detune=0,this.seek=0,this.loop=!1,this.config=r(this.config,i),this.markers={},this.currentMarker=null,this.pendingRemove=!1},addMarker:function(t){return!(!t||!t.name||"string"!=typeof t.name)&&(this.markers[t.name]?(console.error("addMarker - Marker with name '"+t.name+"' already exists for sound '"+this.key+"'!"),!1):(t=r(!0,{name:"",start:0,duration:this.totalDuration-(t.start||0),config:{mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!1,delay:0}},t),this.markers[t.name]=t,!0))},updateMarker:function(t){return!(!t||!t.name||"string"!=typeof t.name)&&(this.markers[t.name]?(this.markers[t.name]=r(!0,this.markers[t.name],t),!0):(console.error("updateMarker - Marker with name '"+t.name+"' does not exist for sound '"+this.key+"'!"),!1))},removeMarker:function(t){var e=this.markers[t];return e?(this.markers[t]=null,e):null},play:function(t,e){if(void 0===t&&(t=""),"object"==typeof t&&(e=t,t=""),"string"!=typeof t)return console.error("Sound marker name has to be a string!"),!1;if(t){if(!this.markers[t])return console.error("No marker with name '"+t+"' found for sound '"+this.key+"'!"),!1;this.currentMarker=this.markers[t],this.currentConfig=this.currentMarker.config,this.duration=this.currentMarker.duration}else this.currentMarker=null,this.currentConfig=this.config,this.duration=this.totalDuration;return this.resetConfig(),this.currentConfig=r(this.currentConfig,e),this.isPlaying=!0,this.isPaused=!1,!0},pause:function(){return!(this.isPaused||!this.isPlaying)&&(this.isPlaying=!1,this.isPaused=!0,!0)},resume:function(){return!(!this.isPaused||this.isPlaying)&&(this.isPlaying=!0,this.isPaused=!1,!0)},stop:function(){return!(!this.isPaused&&!this.isPlaying)&&(this.isPlaying=!1,this.isPaused=!1,this.resetConfig(),!0)},applyConfig:function(){this.mute=this.currentConfig.mute,this.volume=this.currentConfig.volume,this.rate=this.currentConfig.rate,this.detune=this.currentConfig.detune,this.loop=this.currentConfig.loop},resetConfig:function(){this.currentConfig.seek=0,this.currentConfig.delay=0},update:o,destroy:function(){this.pendingRemove||(this.pendingRemove=!0,this.manager=null,this.key="",this.removeAllListeners(),this.isPlaying=!1,this.isPaused=!1,this.config=null,this.currentConfig=null,this.markers=null,this.currentMarker=null)},setRate:function(){var t=this.currentConfig.detune+this.manager.detune,e=Math.pow(1.0005777895065548,t);this.totalRate=this.currentConfig.rate*this.manager.rate*e}});Object.defineProperty(a.prototype,"rate",{get:function(){return this.currentConfig.rate},set:function(t){this.currentConfig.rate=t,this.setRate(),this.emit("rate",this,t)}}),Object.defineProperty(a.prototype,"detune",{get:function(){return this.currentConfig.detune},set:function(t){this.currentConfig.detune=t,this.setRate(),this.emit("detune",this,t)}}),t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.parent=t,this.list=[],this.position=0},add:function(t){return-1===this.getIndex(t)&&this.list.push(t),t},addAt:function(t,e){return void 0===e&&(e=0),0===this.list.length?this.add(t):(e>=0&&e<=this.list.length&&-1===this.getIndex(t)&&this.list.splice(e,0,t),t)},addMultiple:function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this.add(t[e]);return t},getAt:function(t){return this.list[t]},getIndex:function(t){return this.list.indexOf(t)},sort:function(t){return void 0===t&&(t=this.list),t.sort(this.sortIndexHandler.bind(this))},sortIndexHandler:function(t,e){var i=this.getIndex(t),n=this.getIndex(e);return i<n?-1:i>n?1:0},getByKey:function(t,e){for(var i=0;i<this.list.length;i++)if(this.list[i][t]===e)return this.list[i];return null},getByName:function(t){return this.getByKey("name",t)},getRandom:function(t,e){if(void 0===t&&(t=0),void 0===e&&(e=this.list.length),0===e||e>this.list.length)return null;var i=t+Math.floor(Math.random()*e);return this.list[i]},getFirst:function(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=this.list.length);for(var s=i;s<n;s++){var r=this.list[s];if(r[t]===e)return r}return null},getAll:function(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=this.list.length);for(var s=[],r=i;r<n;r++){var o=this.list[r];t?o[t]===e&&s.push(o):s.push(o)}return s},count:function(t,e){for(var i=0,n=0;n<this.list.length;n++){this.list[n][t]===e&&i++}return i},swap:function(t,e){if(t!==e){var i=this.getIndex(t),n=this.getIndex(e);if(i<0||n<0)throw new Error("List.swap: Supplied objects must be children of the same list");this.list[i]=e,this.list[n]=t}},moveTo:function(t,e){var i=this.getIndex(t);if(-1===i||e<0||e>=this.list.length)throw new Error("List.moveTo: The supplied index is out of bounds");return this.list.splice(i,1),this.list.splice(e,0,t),t},remove:function(t){var e=this.list.indexOf(t);return-1!==e&&this.list.splice(e,1),t},removeAt:function(t){var e=this.list[t];return e&&this.children.splice(t,1),e},removeBetween:function(t,e){void 0===t&&(t=0),void 0===e&&(e=this.list.length);var i=e-t;if(i>0&&i<=e){return this.list.splice(t,i)}if(0===i&&0===this.list.length)return[];throw new Error("List.removeBetween: Range Error, numeric values are outside the acceptable range")},removeAll:function(){for(var t=this.list.length;t--;)this.remove(this.list[t]);return this},bringToTop:function(t){return this.getIndex(t)<this.list.length&&(this.remove(t),this.add(t)),t},sendToBack:function(t){return this.getIndex(t)>0&&(this.remove(t),this.addAt(t,0)),t},moveUp:function(t){var e=this.getIndex(t);if(-1!==e&&e<this.list.length-1){var i=this.getAt(e+1);i&&this.swap(t,i)}return t},moveDown:function(t){var e=this.getIndex(t);if(e>0){var i=this.getAt(e-1);i&&this.swap(t,i)}return t},reverse:function(){return this.list.reverse(),this},shuffle:function(){for(var t=this.list.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),i=this.list[t];this.list[t]=this.list[e],this.list[e]=i}return this},replace:function(t,e){var i=this.getIndex(t);if(-1!==i)return this.remove(t),this.addAt(e,i),t},exists:function(t){return this.list.indexOf(t)>-1},setAll:function(t,e){for(var i=0;i<this.list.length;i++)this.list[i]&&(this.list[i][t]=e)},each:function(t,e){for(var i=[null],n=1;n<arguments.length;n++)i.push(arguments[n]);for(n=0;n<this.list.length;n++)i[0]=this.list[n],t.apply(e,i)},shutdown:function(){this.removeAll()},destroy:function(){this.removeAll(),this.list=[],this.parent=null},length:{get:function(){return this.list.length}},first:{get:function(){return this.position=0,this.list.length>0?this.list[0]:null}},last:{get:function(){return this.list.length>0?(this.position=this.list.length-1,this.list[this.position]):null}},next:{get:function(){return this.position<this.list.length?(this.position++,this.list[this.position]):null}},previous:{get:function(){return this.position>0?(this.position--,this.list[this.position]):null}}});t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={CREATED:0,INIT:1,DELAY:2,OFFSET_DELAY:3,PENDING_RENDER:4,PLAYING_FORWARD:5,PLAYING_BACKWARD:6,HOLD_DELAY:7,REPEAT_DELAY:8,COMPLETE:9,PENDING_ADD:20,PAUSED:21,LOOP_DELAY:22,ACTIVE:23,COMPLETE_DELAY:24,PENDING_REMOVE:25,REMOVED:26};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(2),o=i(695),a=new n({Extends:r,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Flip,s.GetBounds,s.Origin,s.Pipeline,s.ScaleMode,s.Size,s.Texture,s.Transform,s.Visible,s.ScrollFactor,o],initialize:function(t,e,i,n,s,o,a,h,l){if(r.call(this,t,"Mesh"),this.setTexture(h,l),this.setPosition(e,i),this.setSizeToFrame(),this.setOrigin(),this.initPipeline("TextureTintPipeline"),n.length!==s.length)throw new Error("Mesh Vertex count must match UV count");var u=n.length/2|0;if(o.length>0&&o.length<u)throw new Error("Mesh Color count must match Vertex count");if(a.length>0&&a.length<u)throw new Error("Mesh Alpha count must match Vertex count");var c;if(0===o.length)for(c=0;c<u;++c)o[c]=16777215;if(0===a.length)for(c=0;c<u;++c)a[c]=1;this.vertices=new Float32Array(n),this.uv=new Float32Array(s),this.colors=new Uint32Array(o),this.alphas=new Float32Array(a)}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e,i){void 0===i&&(i=new n);var s=t.x1,r=t.y1,o=t.x2,a=t.y2,h=e.x1,l=e.y1,u=e.x2,c=e.y2,d=(u-h)*(r-l)-(c-l)*(s-h),f=(o-s)*(r-l)-(a-r)*(s-h),p=(c-l)*(o-s)-(u-h)*(a-r);if(0===p)return!1;var v=d/p,g=f/p;return v>=0&&v<=1&&g>=0&&g<=1&&(i.x=s+v*(o-s),i.y=r+v*(a-r),!0)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){return void 0===t&&(t=""),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=""),void 0===s&&(s=0),{responseType:t,async:e,user:i,password:n,timeout:s,header:void 0,headerValue:void 0,overrideMimeType:void 0}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(346),r=i(36),o=new n({Extends:r,Mixins:[s.Acceleration,s.Angular,s.Bounce,s.Debug,s.Drag,s.Enable,s.Friction,s.Gravity,s.Immovable,s.Mass,s.Size,s.Velocity],initialize:function(t,e,i,n,s){r.call(this,t,e,i,n,s)}});t.exports=o},function(t,e){var i={};t.exports=i,function(){i.create=function(t,e){var n=t.bodyA,s=t.bodyB,r={id:i.id(n,s),bodyA:n,bodyB:s,activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:n.isSensor||s.isSensor,timeCreated:e,timeUpdated:e,collision:null,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return i.update(r,t,e),r},i.update=function(t,e,n){if(t.collision=e,e.collided){var s=e.supports,r=t.activeContacts,o=e.parentA,a=e.parentB;t.inverseMass=o.inverseMass+a.inverseMass,t.friction=Math.min(o.friction,a.friction),t.frictionStatic=Math.max(o.frictionStatic,a.frictionStatic),t.restitution=Math.max(o.restitution,a.restitution),t.slop=Math.max(o.slop,a.slop);for(var h=0;h<s.length;h++)r[h]=s[h].contact;var l=s.length;l<r.length&&(r.length=l),t.separation=e.depth,i.setActive(t,!0,n)}else!0===t.isActive&&i.setActive(t,!1,n)},i.setActive=function(t,e,i){e?(t.isActive=!0,t.timeUpdated=i):(t.isActive=!1,t.activeContacts.length=0)},i.id=function(t,e){return t.id<e.id?"A"+t.id+"B"+e.id:"A"+e.id+"B"+t.id}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={CalculateFacesAt:i(172),CalculateFacesWithin:i(41),Copy:i(943),CreateFromTiles:i(944),CullTiles:i(945),Fill:i(946),FilterTiles:i(947),FindByIndex:i(948),FindTile:i(949),ForEachTile:i(950),GetTileAt:i(106),GetTileAtWorldXY:i(951),GetTilesWithin:i(17),GetTilesWithinShape:i(952),GetTilesWithinWorldXY:i(953),HasTileAt:i(378),HasTileAtWorldXY:i(954),IsInLayerBounds:i(85),PutTileAt:i(173),PutTileAtWorldXY:i(955),PutTilesAt:i(956),Randomize:i(957),RemoveTileAt:i(379),RemoveTileAtWorldXY:i(958),RenderDebug:i(959),ReplaceByIndex:i(377),SetCollision:i(960),SetCollisionBetween:i(961),SetCollisionByExclusion:i(962),SetCollisionByProperty:i(963),SetCollisionFromCollisionGroup:i(964),SetTileIndexCallback:i(965),SetTileLocationCallback:i(966),Shuffle:i(967),SwapByIndex:i(968),TileToWorldX:i(107),TileToWorldXY:i(969),TileToWorldY:i(108),WeightedRandomize:i(970),WorldToTileX:i(44),WorldToTileXY:i(971),WorldToTileY:i(45)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(85),s=function(t,e,i,s){if(void 0===i&&(i=!1),n(t,e,s)){var r=s.data[e][t];return null===r?null:-1===r.index?i?r:null:r}return null};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=i.baseTileWidth,s=i.tilemapLayer,r=0;return s&&(void 0===e&&(e=s.scene.cameras.main),r=s.x+e.scrollX*(1-s.scrollFactorX),n*=s.scaleX),r+t*n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=i.baseTileHeight,s=i.tilemapLayer,r=0;return s&&(void 0===e&&(e=s.scene.cameras.main),r=s.y+e.scrollY*(1-s.scrollFactorY),n*=s.scaleY),r+t*n};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n,s,r,o,a){(void 0===i||i<=0)&&(i=32),(void 0===n||n<=0)&&(n=32),void 0===s&&(s=0),void 0===r&&(r=0),void 0===o&&(o={}),void 0===a&&(a={}),this.name=t,this.firstgid=e,this.tileWidth=i,this.tileHeight=n,this.tileMargin=s,this.tileSpacing=r,this.tileProperties=o,this.tileData=a,this.image=null,this.rows=0,this.columns=0,this.total=0,this.texCoordinates=[]},getTileProperties:function(t){return this.containsTileIndex(t)?this.tileProperties[t-this.firstgid]:null},getTileData:function(t){return this.containsTileIndex(t)?this.tileData[t-this.firstgid]:null},getTileCollisionGroup:function(t){var e=this.getTileData(t);return e&&e.objectgroup?e.objectgroup:null},containsTileIndex:function(t){return t>=this.firstgid&&t<this.firstgid+this.total},getTileTextureCoordinates:function(t){return this.containsTileIndex(t)?this.texCoordinates[t-this.firstgid]:null},setImage:function(t){return this.image=t,this.updateTileData(this.image.source[0].width,this.image.source[0].height),this},setTileSize:function(t,e){return void 0!==t&&(this.tileWidth=t),void 0!==e&&(this.tileHeight=e),this.image&&this.updateTileData(this.image.source[0].width,this.image.source[0].height),this},setSpacing:function(t,e){return void 0!==t&&(this.tileMargin=t),void 0!==e&&(this.tileSpacing=e),this.image&&this.updateTileData(this.image.source[0].width,this.image.source[0].height),this},updateTileData:function(t,e){var i=(e-2*this.tileMargin+this.tileSpacing)/(this.tileHeight+this.tileSpacing),n=(t-2*this.tileMargin+this.tileSpacing)/(this.tileWidth+this.tileSpacing);i%1==0&&n%1==0||console.warn("Tileset "+this.name+" image tile area is not an even multiple of tile size"),i=Math.floor(i),n=Math.floor(n),this.rows=i,this.columns=n,this.total=i*n,this.texCoordinates.length=0;for(var s=this.tileMargin,r=this.tileMargin,o=0;o<this.rows;o++){for(var a=0;a<this.columns;a++)this.texCoordinates.push({x:s,y:r}),s+=this.tileWidth+this.tileSpacing;s=this.tileMargin,r+=this.tileHeight+this.tileSpacing}return this}});t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n;if(t.hasOwnProperty(e)){n="function"===typeof t[e]?function(i,n,s){return t[e](i,n,s)}:function(){return t[e]}}else n="function"==typeof i?i:function(){return i};return n};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(179),s=i(10),r=i(80),o=i(79),a=i(110),h=i(392),l=i(177),u=i(4),c=i(178),d=i(180),f=i(181),p=function(t,e,i){void 0===i&&(i=n);for(var p=i.targets?i.targets:l(e),v=h(e),g=a(e,"delay",i.delay),y=a(e,"duration",i.duration),m=u(e,"easeParams",i.easeParams),x=o(u(e,"ease",i.ease),m),b=a(e,"hold",i.hold),w=a(e,"repeat",i.repeat),T=a(e,"repeatDelay",i.repeatDelay),S=r(e,"yoyo",i.yoyo),A=r(e,"flipX",i.flipX),C=r(e,"flipY",i.flipY),M=[],_=0;_<v.length;_++)for(var E=v[_].key,P=v[_].value,L=0;L<p.length;L++){var k=c(E,P),F=f(p[L],E,k.getEnd,k.getStart,o(u(P,"ease",x),m),a(P,"delay",g),a(P,"duration",y),r(P,"yoyo",S),a(P,"hold",b),a(P,"repeat",w),a(P,"repeatDelay",T),r(P,"flipX",A),r(P,"flipY",C));M.push(F)}var O=new d(t,M,p);O.offset=s(e,"offset",null),O.completeDelay=s(e,"completeDelay",0),O.loop=Math.round(s(e,"loop",0)),O.loopDelay=Math.round(s(e,"loopDelay",0)),O.paused=r(e,"paused",!1),O.useFrames=r(e,"useFrames",!1);for(var R=u(e,"callbackScope",O),B=[O,null],D=d.TYPES,I=0;I<D.length;I++){var Y=D[I],z=u(e,Y,!1);if(z){var X=u(e,Y+"Scope",R),N=u(e,Y+"Params",[]);O.setCallback(Y,z,B.concat(N),X)}}return O};t.exports=p},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(42);n.ColorToRGBA=i(407),n.ComponentToHex=i(185),n.GetColor=i(113),n.GetColor32=i(184),n.HexStringToColor=i(186),n.HSLToColor=i(408),n.HSVColorWheel=i(410),n.HSVToRGB=i(188),n.HueToComponent=i(187),n.IntegerToColor=i(189),n.IntegerToRGB=i(190),n.Interpolate=i(411),n.ObjectToColor=i(193),n.RandomRGB=i(412),n.RGBStringToColor=i(195),n.RGBToHSV=i(413),n.RGBToString=i(414),n.ValueToColor=i(114),t.exports=n},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t<<16|e<<8|i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(186),s=i(189),r=i(193),o=i(195),a=function(t){switch(typeof t){case"string":return"rgb"===t.substr(0,3).toLowerCase()?o(t):n(t);case"number":return s(t);case"object":return r(t)}};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e,i){return void 0===i&&(i=new n),i.x=t.x+t.radius*Math.cos(e),i.y=t.y+t.radius*Math.sin(e),i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e){void 0===e&&(e=new n);var i=2*Math.PI*Math.random(),s=Math.random()+Math.random(),r=s>1?2-s:s,o=r*Math.cos(i),a=r*Math.sin(i);return e.x=t.x+o*t.radius,e.y=t.y+a*t.radius,e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(90),s=i(5),r=function(t,e,i){if(void 0===i&&(i=new s),e<=0||e>=1)return i.x=t.x,i.y=t.y,i;var r=n(t)*e;return e>.5?(r-=t.width+t.height,r<=t.width?(i.x=t.right-r,i.y=t.bottom):(i.x=t.x,i.y=t.bottom-(r-t.width))):r<=t.width?(i.x=t.x+r,i.y=t.y):(i.x=t.right,i.y=t.y+(r-t.width)),i};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e){return void 0===e&&(e=new n),e.x=t.x+Math.random()*t.width,e.y=t.y+Math.random()*t.height,e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={defaultPipeline:null,pipeline:null,initPipeline:function(t){var e=this.scene.sys.game.renderer;return!(!e.gl||!e.hasPipeline(t))&&(this.defaultPipeline=e.getPipeline(t),this.pipeline=this.defaultPipeline,!0)},setPipeline:function(t){var e=this.scene.sys.game.renderer;return!(!e.gl||!e.hasPipeline(t))&&(this.pipeline=e.getPipeline(t),!0)},resetPipeline:function(){return this.pipeline=this.defaultPipeline,null!==this.pipeline},getPipelineName:function(){return this.pipeline.name}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(57),s=function(t){return n(t,-Math.PI,Math.PI)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(57),s=function(t){return n(t,-180,180)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(74),s=i(5),r=function(t,e,i,r){void 0===r&&(r=[]),e||(e=n(t)/i);for(var o=t.x1,a=t.y1,h=t.x2,l=t.y2,u=0;u<e;u++){var c=u/e,d=o+(h-o)*c,f=a+(l-a)*c;r.push(new s(d,f))}return r};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e){void 0===e&&(e=new n);var i=Math.random()*Math.PI*2,s=Math.sqrt(Math.random());return e.x=t.x+s*Math.cos(i)*t.width/2,e.y=t.y+s*Math.sin(i)*t.height/2,e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e){void 0===e&&(e=new n);var i=Math.random();return e.x=t.x1+i*(t.x2-t.x1),e.y=t.y1+i*(t.y2-t.y1),e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e){void 0===e&&(e=new n);var i=t.x2-t.x1,s=t.y2-t.y1,r=t.x3-t.x1,o=t.y3-t.y1,a=Math.random(),h=Math.random();return a+h>=1&&(a=1-a,h=1-h),e.x=t.x1+(i*a+r*h),e.y=t.y1+(s*a+o*h),e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){var r=n+Math.atan2(t.y-i,t.x-e);return t.x=e+s*Math.cos(r),t.y=i+s*Math.sin(r),t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){if(this.entries={},this.size=0,Array.isArray(t))for(var e=0;e<t.length;e++)this.set(t[e][0],t[e][1])},set:function(t,e){return this.has(t)||(this.entries[t]=e,this.size++),this},get:function(t){if(this.has(t))return this.entries[t]},getArray:function(){var t=[],e=this.entries;for(var i in e)t.push(e[i]);return t},has:function(t){return this.entries.hasOwnProperty(t)},delete:function(t){return this.has(t)&&(delete this.entries[t],this.size--),this},clear:function(){return Object.keys(this.entries).forEach(function(t){delete this.entries[t]},this),this.size=0,this},keys:function(){return Object.keys(this.entries)},values:function(){var t=[],e=this.entries;for(var i in e)t.push(e[i]);return t},dump:function(){var t=this.entries;console.group("Map");for(var e in t)console.log(e,t[e]);console.groupEnd()},each:function(t){var e=this.entries;for(var i in e)if(!1===t(i,e[i]))break;return this},contains:function(t){var e=this.entries;for(var i in e)if(e[i]===t)return!0;return!1},merge:function(t,e){void 0===e&&(e=!1);var i=this.entries,n=t.entries;for(var s in n)i.hasOwnProperty(s)&&e?i[s]=n[s]:this.set(s,n[s]);return this}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(43),r=i(8),o=i(219),a=i(114),h=i(6),l=new n({initialize:function(t,e,i,n){this.scene,this.name="",this.x=t,this.y=e,this.width=i,this.height=n,this.roundPixels=!1,this.useBounds=!1,this._bounds=new r,this.inputEnabled=!0,this.scrollX=0,this.scrollY=0,this.zoom=1,this.rotation=0,this.matrix=new o(1,0,0,1,0,0),this.transparent=!0,this.clearBeforeRender=!0,this.backgroundColor=a("rgba(0,0,0,0)"),this.disableCull=!1,this.culledObjects=[],this._shakeDuration=0,this._shakeIntensity=0,this._shakeOffsetX=0,this._shakeOffsetY=0,this._fadeDuration=0,this._fadeRed=0,this._fadeGreen=0,this._fadeBlue=0,this._fadeAlpha=0,this._flashDuration=0,this._flashRed=1,this._flashGreen=1,this._flashBlue=1,this._flashAlpha=0,this._follow=null,this._id=0},centerToBounds:function(){return this.scrollX=.5*this._bounds.width-.5*this.width,this.scrollY=.5*this._bounds.height-.5*this.height,this},centerToSize:function(){return this.scrollX=.5*this.width,this.scrollY=.5*this.height,this},cull:function(t){if(this.disableCull)return t;var e=this.matrix.matrix,i=e[0],n=e[1],s=e[2],r=e[3],o=i*r-n*s;if(!o)return t;var a=e[4],h=e[5],l=this.scrollX,u=this.scrollY,c=this.width,d=this.height,f=this.culledObjects,p=t.length;o=1/o,f.length=0;for(var v=0;v<p;++v){var g=t[v];if(g.hasOwnProperty("width")){var y=g.width,m=g.height,x=g.x-l*g.scrollFactorX-y*g.originX,b=g.y-u*g.scrollFactorY-m*g.originY,w=x*i+b*s+a,T=x*n+b*r+h,S=(x+y)*i+(b+m)*s+a,A=(x+y)*n+(b+m)*r+h,C=c+y,M=d+m;(w>-y||T>-m||w<C||T<M||S>-y||A>-m||S<C||A<M)&&f.push(g)}else f.push(g)}return f},cullHitTest:function(t){if(this.disableCull)return t;var e=this.matrix.matrix,i=e[0],n=e[1],s=e[2],r=e[3],o=i*r-n*s;if(!o)return t;var a=e[4],h=e[5],l=this.scrollX,u=this.scrollY,c=this.width,d=this.height,f=t.length;o=1/o;for(var p=[],v=0;v<f;++v){var g=t[v].gameObject;if(g.hasOwnProperty("width")){var y=g.width,m=g.height,x=g.x-l*g.scrollFactorX-y*g.originX,b=g.y-u*g.scrollFactorY-m*g.originY,w=x*i+b*s+a,T=x*n+b*r+h,S=(x+y)*i+(b+m)*s+a,A=(x+y)*n+(b+m)*r+h,C=c+y,M=d+m;(w>-y||T>-m||w<C||T<M||S>-y||A>-m||S<C||A<M)&&p.push(t[v])}else p.push(t[v])}return p},cullTilemap:function(t){var e=this.matrix.matrix,i=e[0],n=e[1],s=e[2],r=e[3],o=i*r-n*s;if(!o)return l;var a=e[4],h=e[5],l=t.tiles,u=this.scrollX,c=this.scrollY,d=this.width,f=this.height,p=this.culledObjects,v=l.length,g=t.tileWidth,y=t.tileHeight,m=d+g,x=f+y,b=t.scrollFactorX,w=t.scrollFactorY;o=1/o,p.length=0;for(var T=0;T<v;++T){var S=l[T],A=S.x-u*b,C=S.y-c*w,M=A*i+C*s+a,_=A*n+C*r+h,E=(A+g)*i+(C+y)*s+a,P=(A+g)*n+(C+y)*r+h;M>-g&&_>-y&&E<m&&P<x&&p.push(S)}return p},fade:function(t,e,i,n,s){return void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),!s&&this._fadeAlpha>0?this:(this._fadeRed=e,this._fadeGreen=i,this._fadeBlue=n,t<=0&&(t=Number.MIN_VALUE),this._fadeDuration=t,this._fadeAlpha=Number.MIN_VALUE,this)},flash:function(t,e,i,n,s){return!s&&this._flashAlpha>0?this:(void 0===e&&(e=1),void 0===i&&(i=1),void 0===n&&(n=1),this._flashRed=e,this._flashGreen=i,this._flashBlue=n,t<=0&&(t=Number.MIN_VALUE),this._flashDuration=t,this._flashAlpha=1,this)},getWorldPoint:function(t,e,i){void 0===i&&(i=new h);var n=this.matrix.matrix,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],u=n[5],c=s*a-r*o;if(!c)return i.x=t,i.y=e,i;c=1/c;var d=a*c,f=-r*c,p=-o*c,v=s*c,g=(o*u-a*l)*c,y=(r*l-s*u)*c,m=Math.cos(this.rotation),x=Math.sin(this.rotation),b=this.zoom,w=this.scrollX,T=this.scrollY,S=t+(w*m-T*x)*b,A=e+(w*x+T*m)*b;return i.x=S*d+A*p+g,i.y=S*f+A*v+y,i},ignore:function(t){if(t instanceof Array)for(var e=0;e<t.length;++e)t[e].cameraFilter|=this._id;else t.cameraFilter|=this._id;return this},preRender:function(t,e){var i=this.width,n=this.height,s=this.zoom*t,r=this.matrix,o=i/2,a=n/2,h=this._follow;if(null!==h&&(o=h.x,a=h.y,this.scrollX=o-.5*i,this.scrollY=a-.5*n),this.useBounds){var l=this._bounds,u=Math.max(0,l.right-i),c=Math.max(0,l.bottom-n);this.scrollX<l.x?this.scrollX=l.x:this.scrollX>u&&(this.scrollX=u),this.scrollY<l.y?this.scrollY=l.y:this.scrollY>c&&(this.scrollY=c)}this.roundPixels&&(this.scrollX=Math.round(this.scrollX),this.scrollY=Math.round(this.scrollY)),r.loadIdentity(),r.scale(e,e),r.translate(this.x+o,this.y+a),r.rotate(this.rotation),r.scale(s,s),r.translate(-o,-a),r.translate(this._shakeOffsetX,this._shakeOffsetY)},removeBounds:function(){return this.useBounds=!1,this._bounds.setEmpty(),this},setAngle:function(t){return void 0===t&&(t=0),this.rotation=s(t),this},setBackgroundColor:function(t){return void 0===t&&(t="rgba(0,0,0,0)"),this.backgroundColor=a(t),this.transparent=0===this.backgroundColor.alpha,this},setBounds:function(t,e,i,n){return this._bounds.setTo(t,e,i,n),this.useBounds=!0,this},setName:function(t){return void 0===t&&(t=""),this.name=t,this},setPosition:function(t,e){return void 0===e&&(e=t),this.x=t,this.y=e,this},setRotation:function(t){return void 0===t&&(t=0),this.rotation=t,this},setRoundPixels:function(t){return this.roundPixels=t,this},setScene:function(t){return this.scene=t,this},setScroll:function(t,e){return void 0===e&&(e=t),this.scrollX=t,this.scrollY=e,this},setSize:function(t,e){return void 0===e&&(e=t),this.width=t,this.height=e,this},setViewport:function(t,e,i,n){return this.x=t,this.y=e,this.width=i,this.height=n,this},setZoom:function(t){return void 0===t&&(t=1),this.zoom=t,this},shake:function(t,e,i){return void 0===e&&(e=.05),i||0===this._shakeOffsetX&&0===this._shakeOffsetY?(this._shakeDuration=t,this._shakeIntensity=e,this._shakeOffsetX=0,this._shakeOffsetY=0,this):this},startFollow:function(t,e){return this._follow=t,void 0!==e&&(this.roundPixels=e),this},stopFollow:function(){return this._follow=null,this},toJSON:function(){var t={name:this.name,x:this.x,y:this.y,width:this.width,height:this.height,zoom:this.zoom,rotation:this.rotation,roundPixels:this.roundPixels,scrollX:this.scrollX,scrollY:this.scrollY,backgroundColor:this.backgroundColor.rgba};return this.useBounds&&(t.bounds={x:this._bounds.x,y:this._bounds.y,width:this._bounds.width,height:this._bounds.height}),t},resetFX:function(){return this._flashAlpha=0,this._fadeAlpha=0,this._shakeOffsetX=0,this._shakeOffsetY=0,this._shakeDuration=0,this},update:function(t,e){if(this._flashAlpha>0&&(this._flashAlpha-=e/this._flashDuration,this._flashAlpha<0&&(this._flashAlpha=0)),this._fadeAlpha>0&&this._fadeAlpha<1&&(this._fadeAlpha+=e/this._fadeDuration,this._fadeAlpha>=1&&(this._fadeAlpha=1)),this._shakeDuration>0){var i=this._shakeIntensity;this._shakeDuration-=e,this._shakeDuration<=0?(this._shakeOffsetX=0,this._shakeOffsetY=0):(this._shakeOffsetX=(Math.random()*i*this.width*2-i*this.width)*this.zoom,this._shakeOffsetY=(Math.random()*i*this.height*2-i*this.height)*this.zoom,this.roundPixels&&(this._shakeOffsetX|=0,this._shakeOffsetY|=0))}},destroy:function(){this._bounds=void 0,this.matrix=void 0,this.culledObjects=[],this.scene=void 0}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(130),r=i(232),o=i(233),a=i(234),h=i(59),l=i(93),u=i(6),c=i(58),d=i(131),f=new c,p=new d,v=new c,g=new c,y=new s,m=new n({initialize:function(t){this.scene=t,this.displayList=t.sys.displayList,this.updateList=t.sys.updateList,this.name="",this.direction=new c(0,0,-1),this.up=new c(0,1,0),this.position=new c,this.pixelScale=128,this.projection=new s,this.view=new s,this.combined=new s,this.invProjectionView=new s,this.near=1,this.far=100,this.ray={origin:new c,direction:new c},this.viewportWidth=0,this.viewportHeight=0,this.billboardMatrixDirty=!0,this.children=new h},setPosition:function(t,e,i){return this.position.set(t,e,i),this.update()},setScene:function(t){return this.scene=t,this},setPixelScale:function(t){return this.pixelScale=t,this.update()},add:function(t){return this.children.set(t),this.updateChildren(),t},remove:function(t){return this.displayList.remove(t.gameObject),this.updateList.remove(t.gameObject),this.children.delete(t),this},clear:function(){for(var t=this.getChildren(),e=0;e<t.length;e++)this.remove(t[e]);return this},getChildren:function(){return this.children.entries},create:function(t,e,i,n,s,r){void 0===r&&(r=!0);var o=new l(this.scene,t,e,i,n,s);return this.displayList.add(o.gameObject),this.updateList.add(o.gameObject),o.visible=r,this.children.set(o),this.updateChildren(),o},createMultiple:function(t,e,i,n){void 0===n&&(n=!0);for(var s=[],r=0;r<t;r++){var o=new l(this.scene,0,0,0,e,i);this.displayList.add(o.gameObject),this.updateList.add(o.gameObject),o.visible=n,this.children.set(o),s.push(o)}return s},createRect:function(t,e,i,n){"number"==typeof t&&(t={x:t,y:t,z:t}),"number"==typeof e&&(e={x:e,y:e,z:e});for(var s=t.x*t.y*t.z,r=this.createMultiple(s,i,n),o=0,a=.5-t.z/2;a<t.z/2;a++)for(var h=.5-t.y/2;h<t.y/2;h++)for(var l=.5-t.x/2;l<t.x/2;l++){var u=l*e.x,c=h*e.y,d=a*e.z;r[o].position.set(u,c,d),o++}return this.update(),r},randomSphere:function(t,e){void 0===e&&(e=this.getChildren());for(var i=0;i<e.length;i++)r(e[i].position,t);return this.update()},randomCube:function(t,e){void 0===e&&(e=this.getChildren());for(var i=0;i<e.length;i++)o(e[i].position,t);return this.update()},translateChildren:function(t,e){void 0===e&&(e=this.getChildren());for(var i=0;i<e.length;i++)e[i].position.add(t);return this.update()},transformChildren:function(t,e){void 0===e&&(e=this.getChildren());for(var i=0;i<e.length;i++)e[i].position.transformMat4(t);return this.update()},setViewport:function(t,e){return this.viewportWidth=t,this.viewportHeight=e,this.update()},translate:function(t,e,i){return"object"==typeof t?(this.position.x+=t.x||0,this.position.y+=t.y||0,this.position.z+=t.z||0):(this.position.x+=t||0,this.position.y+=e||0,this.position.z+=i||0),this.update()},lookAt:function(t,e,i){var n=this.direction,s=this.up;return"object"==typeof t?n.copy(t):n.set(t,e,i),n.subtract(this.position).normalize(),f.copy(n).cross(s).normalize(),s.copy(f).cross(n).normalize(),this.update()},rotate:function(t,e){return a(this.direction,e,t),a(this.up,e,t),this.update()},rotateAround:function(t,e,i){return f.copy(t).subtract(this.position),this.translate(f),this.rotate(e,i),this.translate(f.negate()),this.update()},project:function(t,e){void 0===e&&(e=new d);var i=this.viewportWidth,n=this.viewportHeight,s=m.NEAR_RANGE,r=m.FAR_RANGE;return p.set(t.x,t.y,t.z,1),p.transformMat4(this.combined),0===p.w&&(p.w=1),p.x=p.x/p.w,p.y=p.y/p.w,p.z=p.z/p.w,e.x=i/2*p.x+(0+i/2),e.y=n/2*p.y+(0+n/2),e.z=(r-s)/2*p.z+(r+s)/2,(0===e.w||e.w)&&(e.w=1/p.w),e},unproject:function(t,e){void 0===e&&(e=new c);var i=p.set(0,0,this.viewportWidth,this.viewportHeight);return e.copy(t).unproject(i,this.invProjectionView)},getPickRay:function(t,e){var i=this.ray.origin.set(t,e,0),n=this.ray.direction.set(t,e,1),s=p.set(0,0,this.viewportWidth,this.viewportHeight),r=this.invProjectionView;return i.unproject(s,r),n.unproject(s,r),n.subtract(i).normalize(),this.ray},updateChildren:function(){for(var t=this.children.entries,e=0;e<t.length;e++)t[e].project(this);return this},update:function(){return this.updateChildren()},updateBillboardMatrix:function(){var t=v.set(this.direction).negate(),e=g.set(this.up).cross(t).normalize(),i=f.set(t).cross(e).normalize(),n=y.val;n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=0,n[4]=i.x,n[5]=i.y,n[6]=i.z,n[7]=0,n[8]=t.x,n[9]=t.y,n[10]=t.z,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this.billboardMatrixDirty=!1},getPointSize:function(t,e,i){void 0===i&&(i=new u),this.billboardMatrixDirty&&this.updateBillboardMatrix();var n=f,s=e.x/this.pixelScale/2,r=e.y/this.pixelScale/2;n.set(-s,-r,0).transformMat4(y).add(t),this.project(n,n);var o=n.x,a=n.y;n.set(s,r,0).transformMat4(y).add(t),this.project(n,n);var h=n.x,l=n.y,c=h-o,d=l-a;return i.set(c,d)},destroy:function(){this.children.clear(),this.scene=void 0,this.children=void 0},setX:function(t){return this.position.x=t,this.update()},setY:function(t){return this.position.y=t,this.update()},setZ:function(t){return this.position.z=t,this.update()},x:{get:function(){return this.position.x},set:function(t){this.position.x=t,this.update()}},y:{get:function(){return this.position.y},set:function(t){this.position.y=t,this.update()}},z:{get:function(){return this.position.z},set:function(t){this.position.z=t,this.update()}}});m.FAR_RANGE=1,m.NEAR_RANGE=0,t.exports=m},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.val=new Float32Array(16),t?this.copy(t):this.identity()},clone:function(){return new s(this)},set:function(t){return this.copy(t)},copy:function(t){var e=this.val,i=t.val;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this},fromArray:function(t){var e=this.val;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this},zero:function(){var t=this.val;return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=0,this},xyz:function(t,e,i){this.identity();var n=this.val;return n[12]=t,n[13]=e,n[14]=i,this},scaling:function(t,e,i){this.zero();var n=this.val;return n[0]=t,n[5]=e,n[10]=i,n[15]=1,this},identity:function(){var t=this.val;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},transpose:function(){var t=this.val,e=t[1],i=t[2],n=t[3],s=t[6],r=t[7],o=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=e,t[6]=t[9],t[7]=t[13],t[8]=i,t[9]=s,t[11]=t[14],t[12]=n,t[13]=r,t[14]=o,this},invert:function(){var t=this.val,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=t[6],h=t[7],l=t[8],u=t[9],c=t[10],d=t[11],f=t[12],p=t[13],v=t[14],g=t[15],y=e*o-i*r,m=e*a-n*r,x=e*h-s*r,b=i*a-n*o,w=i*h-s*o,T=n*h-s*a,S=l*p-u*f,A=l*v-c*f,C=l*g-d*f,M=u*v-c*p,_=u*g-d*p,E=c*g-d*v,P=y*E-m*_+x*M+b*C-w*A+T*S;return P?(P=1/P,t[0]=(o*E-a*_+h*M)*P,t[1]=(n*_-i*E-s*M)*P,t[2]=(p*T-v*w+g*b)*P,t[3]=(c*w-u*T-d*b)*P,t[4]=(a*C-r*E-h*A)*P,t[5]=(e*E-n*C+s*A)*P,t[6]=(v*x-f*T-g*m)*P,t[7]=(l*T-c*x+d*m)*P,t[8]=(r*_-o*C+h*S)*P,t[9]=(i*C-e*_-s*S)*P,t[10]=(f*w-p*x+g*y)*P,t[11]=(u*x-l*w-d*y)*P,t[12]=(o*A-r*M-a*S)*P,t[13]=(e*M-i*A+n*S)*P,t[14]=(p*m-f*b-v*y)*P,t[15]=(l*b-u*m+c*y)*P,this):null},adjoint:function(){var t=this.val,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=t[6],h=t[7],l=t[8],u=t[9],c=t[10],d=t[11],f=t[12],p=t[13],v=t[14],g=t[15];return t[0]=o*(c*g-d*v)-u*(a*g-h*v)+p*(a*d-h*c),t[1]=-(i*(c*g-d*v)-u*(n*g-s*v)+p*(n*d-s*c)),t[2]=i*(a*g-h*v)-o*(n*g-s*v)+p*(n*h-s*a),t[3]=-(i*(a*d-h*c)-o*(n*d-s*c)+u*(n*h-s*a)),t[4]=-(r*(c*g-d*v)-l*(a*g-h*v)+f*(a*d-h*c)),t[5]=e*(c*g-d*v)-l*(n*g-s*v)+f*(n*d-s*c),t[6]=-(e*(a*g-h*v)-r*(n*g-s*v)+f*(n*h-s*a)),t[7]=e*(a*d-h*c)-r*(n*d-s*c)+l*(n*h-s*a),t[8]=r*(u*g-d*p)-l*(o*g-h*p)+f*(o*d-h*u),t[9]=-(e*(u*g-d*p)-l*(i*g-s*p)+f*(i*d-s*u)),t[10]=e*(o*g-h*p)-r*(i*g-s*p)+f*(i*h-s*o),t[11]=-(e*(o*d-h*u)-r*(i*d-s*u)+l*(i*h-s*o)),t[12]=-(r*(u*v-c*p)-l*(o*v-a*p)+f*(o*c-a*u)),t[13]=e*(u*v-c*p)-l*(i*v-n*p)+f*(i*c-n*u),t[14]=-(e*(o*v-a*p)-r*(i*v-n*p)+f*(i*a-n*o)),t[15]=e*(o*c-a*u)-r*(i*c-n*u)+l*(i*a-n*o),this},determinant:function(){var t=this.val,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=t[6],h=t[7],l=t[8],u=t[9],c=t[10],d=t[11],f=t[12],p=t[13],v=t[14],g=t[15];return(e*o-i*r)*(c*g-d*v)-(e*a-n*r)*(u*g-d*p)+(e*h-s*r)*(u*v-c*p)+(i*a-n*o)*(l*g-d*f)-(i*h-s*o)*(l*v-c*f)+(n*h-s*a)*(l*p-u*f)},multiply:function(t){var e=this.val,i=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],u=e[8],c=e[9],d=e[10],f=e[11],p=e[12],v=e[13],g=e[14],y=e[15],m=t.val,x=m[0],b=m[1],w=m[2],T=m[3];return e[0]=x*i+b*o+w*u+T*p,e[1]=x*n+b*a+w*c+T*v,e[2]=x*s+b*h+w*d+T*g,e[3]=x*r+b*l+w*f+T*y,x=m[4],b=m[5],w=m[6],T=m[7],e[4]=x*i+b*o+w*u+T*p,e[5]=x*n+b*a+w*c+T*v,e[6]=x*s+b*h+w*d+T*g,e[7]=x*r+b*l+w*f+T*y,x=m[8],b=m[9],w=m[10],T=m[11],e[8]=x*i+b*o+w*u+T*p,e[9]=x*n+b*a+w*c+T*v,e[10]=x*s+b*h+w*d+T*g,e[11]=x*r+b*l+w*f+T*y,x=m[12],b=m[13],w=m[14],T=m[15],e[12]=x*i+b*o+w*u+T*p,e[13]=x*n+b*a+w*c+T*v,e[14]=x*s+b*h+w*d+T*g,e[15]=x*r+b*l+w*f+T*y,this},multiplyLocal:function(t){var e=[],i=this.val,n=t.val;return e[0]=i[0]*n[0]+i[1]*n[4]+i[2]*n[8]+i[3]*n[12],e[1]=i[0]*n[1]+i[1]*n[5]+i[2]*n[9]+i[3]*n[13],e[2]=i[0]*n[2]+i[1]*n[6]+i[2]*n[10]+i[3]*n[14],e[3]=i[0]*n[3]+i[1]*n[7]+i[2]*n[11]+i[3]*n[15],e[4]=i[4]*n[0]+i[5]*n[4]+i[6]*n[8]+i[7]*n[12],e[5]=i[4]*n[1]+i[5]*n[5]+i[6]*n[9]+i[7]*n[13],e[6]=i[4]*n[2]+i[5]*n[6]+i[6]*n[10]+i[7]*n[14],e[7]=i[4]*n[3]+i[5]*n[7]+i[6]*n[11]+i[7]*n[15],e[8]=i[8]*n[0]+i[9]*n[4]+i[10]*n[8]+i[11]*n[12],e[9]=i[8]*n[1]+i[9]*n[5]+i[10]*n[9]+i[11]*n[13],e[10]=i[8]*n[2]+i[9]*n[6]+i[10]*n[10]+i[11]*n[14],e[11]=i[8]*n[3]+i[9]*n[7]+i[10]*n[11]+i[11]*n[15],e[12]=i[12]*n[0]+i[13]*n[4]+i[14]*n[8]+i[15]*n[12],e[13]=i[12]*n[1]+i[13]*n[5]+i[14]*n[9]+i[15]*n[13],e[14]=i[12]*n[2]+i[13]*n[6]+i[14]*n[10]+i[15]*n[14],e[15]=i[12]*n[3]+i[13]*n[7]+i[14]*n[11]+i[15]*n[15],this.fromArray(e)},translate:function(t){var e=t.x,i=t.y,n=t.z,s=this.val;return s[12]=s[0]*e+s[4]*i+s[8]*n+s[12],s[13]=s[1]*e+s[5]*i+s[9]*n+s[13],s[14]=s[2]*e+s[6]*i+s[10]*n+s[14],s[15]=s[3]*e+s[7]*i+s[11]*n+s[15],this},scale:function(t){var e=t.x,i=t.y,n=t.z,s=this.val;return s[0]=s[0]*e,s[1]=s[1]*e,s[2]=s[2]*e,s[3]=s[3]*e,s[4]=s[4]*i,s[5]=s[5]*i,s[6]=s[6]*i,s[7]=s[7]*i,s[8]=s[8]*n,s[9]=s[9]*n,s[10]=s[10]*n,s[11]=s[11]*n,this},makeRotationAxis:function(t,e){var i=Math.cos(e),n=Math.sin(e),s=1-i,r=t.x,o=t.y,a=t.z,h=s*r,l=s*o;return this.set(h*r+i,h*o-n*a,h*a+n*o,0,h*o+n*a,l*o+i,l*a-n*r,0,h*a-n*o,l*a+n*r,s*a*a+i,0,0,0,0,1),this},rotate:function(t,e){var i=this.val,n=e.x,s=e.y,r=e.z,o=Math.sqrt(n*n+s*s+r*r);if(Math.abs(o)<1e-6)return null;o=1/o,n*=o,s*=o,r*=o;var a=Math.sin(t),h=Math.cos(t),l=1-h,u=i[0],c=i[1],d=i[2],f=i[3],p=i[4],v=i[5],g=i[6],y=i[7],m=i[8],x=i[9],b=i[10],w=i[11],T=n*n*l+h,S=s*n*l+r*a,A=r*n*l-s*a,C=n*s*l-r*a,M=s*s*l+h,_=r*s*l+n*a,E=n*r*l+s*a,P=s*r*l-n*a,L=r*r*l+h;return i[0]=u*T+p*S+m*A,i[1]=c*T+v*S+x*A,i[2]=d*T+g*S+b*A,i[3]=f*T+y*S+w*A,i[4]=u*C+p*M+m*_,i[5]=c*C+v*M+x*_,i[6]=d*C+g*M+b*_,i[7]=f*C+y*M+w*_,i[8]=u*E+p*P+m*L,i[9]=c*E+v*P+x*L,i[10]=d*E+g*P+b*L,i[11]=f*E+y*P+w*L,this},rotateX:function(t){var e=this.val,i=Math.sin(t),n=Math.cos(t),s=e[4],r=e[5],o=e[6],a=e[7],h=e[8],l=e[9],u=e[10],c=e[11];return e[4]=s*n+h*i,e[5]=r*n+l*i,e[6]=o*n+u*i,e[7]=a*n+c*i,e[8]=h*n-s*i,e[9]=l*n-r*i,e[10]=u*n-o*i,e[11]=c*n-a*i,this},rotateY:function(t){var e=this.val,i=Math.sin(t),n=Math.cos(t),s=e[0],r=e[1],o=e[2],a=e[3],h=e[8],l=e[9],u=e[10],c=e[11];return e[0]=s*n-h*i,e[1]=r*n-l*i,e[2]=o*n-u*i,e[3]=a*n-c*i,e[8]=s*i+h*n,e[9]=r*i+l*n,e[10]=o*i+u*n,e[11]=a*i+c*n,this},rotateZ:function(t){var e=this.val,i=Math.sin(t),n=Math.cos(t),s=e[0],r=e[1],o=e[2],a=e[3],h=e[4],l=e[5],u=e[6],c=e[7];return e[0]=s*n+h*i,e[1]=r*n+l*i,e[2]=o*n+u*i,e[3]=a*n+c*i,e[4]=h*n-s*i,e[5]=l*n-r*i,e[6]=u*n-o*i,e[7]=c*n-a*i,this},fromRotationTranslation:function(t,e){var i=this.val,n=t.x,s=t.y,r=t.z,o=t.w,a=n+n,h=s+s,l=r+r,u=n*a,c=n*h,d=n*l,f=s*h,p=s*l,v=r*l,g=o*a,y=o*h,m=o*l;return i[0]=1-(f+v),i[1]=c+m,i[2]=d-y,i[3]=0,i[4]=c-m,i[5]=1-(u+v),i[6]=p+g,i[7]=0,i[8]=d+y,i[9]=p-g,i[10]=1-(u+f),i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this},fromQuat:function(t){var e=this.val,i=t.x,n=t.y,s=t.z,r=t.w,o=i+i,a=n+n,h=s+s,l=i*o,u=i*a,c=i*h,d=n*a,f=n*h,p=s*h,v=r*o,g=r*a,y=r*h;return e[0]=1-(d+p),e[1]=u+y,e[2]=c-g,e[3]=0,e[4]=u-y,e[5]=1-(l+p),e[6]=f+v,e[7]=0,e[8]=c+g,e[9]=f-v,e[10]=1-(l+d),e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},frustum:function(t,e,i,n,s,r){var o=this.val,a=1/(e-t),h=1/(n-i),l=1/(s-r);return o[0]=2*s*a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*s*h,o[6]=0,o[7]=0,o[8]=(e+t)*a,o[9]=(n+i)*h,o[10]=(r+s)*l,o[11]=-1,o[12]=0,o[13]=0,o[14]=r*s*2*l,o[15]=0,this},perspective:function(t,e,i,n){var s=this.val,r=1/Math.tan(t/2),o=1/(i-n);return s[0]=r/e,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=r,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=(n+i)*o,s[11]=-1,s[12]=0,s[13]=0,s[14]=2*n*i*o,s[15]=0,this},perspectiveLH:function(t,e,i,n){var s=this.val;return s[0]=2*i/t,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2*i/e,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=-n/(i-n),s[11]=1,s[12]=0,s[13]=0,s[14]=i*n/(i-n),s[15]=0,this},ortho:function(t,e,i,n,s,r){var o=this.val,a=t-e,h=i-n,l=s-r;return a=0===a?a:1/a,h=0===h?h:1/h,l=0===l?l:1/l,o[0]=-2*a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=-2*h,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=2*l,o[11]=0,o[12]=(t+e)*a,o[13]=(n+i)*h,o[14]=(r+s)*l,o[15]=1,this},lookAt:function(t,e,i){var n=this.val,s=t.x,r=t.y,o=t.z,a=i.x,h=i.y,l=i.z,u=e.x,c=e.y,d=e.z;if(Math.abs(s-u)<1e-6&&Math.abs(r-c)<1e-6&&Math.abs(o-d)<1e-6)return this.identity();var f=s-u,p=r-c,v=o-d,g=1/Math.sqrt(f*f+p*p+v*v);f*=g,p*=g,v*=g;var y=h*v-l*p,m=l*f-a*v,x=a*p-h*f;g=Math.sqrt(y*y+m*m+x*x),g?(g=1/g,y*=g,m*=g,x*=g):(y=0,m=0,x=0);var b=p*x-v*m,w=v*y-f*x,T=f*m-p*y;return g=Math.sqrt(b*b+w*w+T*T),g?(g=1/g,b*=g,w*=g,T*=g):(b=0,w=0,T=0),n[0]=y,n[1]=b,n[2]=f,n[3]=0,n[4]=m,n[5]=w,n[6]=p,n[7]=0,n[8]=x,n[9]=T,n[10]=v,n[11]=0,n[12]=-(y*s+m*r+x*o),n[13]=-(b*s+w*r+T*o),n[14]=-(f*s+p*r+v*o),n[15]=1,this},yawPitchRoll:function(t,e,i){this.zero(),r.zero(),o.zero();var n=this.val,s=r.val,a=o.val,h=Math.sin(i),l=Math.cos(i);return n[10]=1,n[15]=1,n[0]=l,n[1]=h,n[4]=-h,n[5]=l,h=Math.sin(e),l=Math.cos(e),s[0]=1,s[15]=1,s[5]=l,s[10]=l,s[9]=-h,s[6]=h,h=Math.sin(t),l=Math.cos(t),a[5]=1,a[15]=1,a[0]=l,a[2]=-h,a[8]=h,a[10]=l,this.multiplyLocal(r),this.multiplyLocal(o),this},setWorldMatrix:function(t,e,i,n,s){return this.yawPitchRoll(t.y,t.x,t.z),r.scaling(i.x,i.y,i.z),o.xyz(e.x,e.y,e.z),this.multiplyLocal(r),this.multiplyLocal(o),void 0!==n&&this.multiplyLocal(n),void 0!==s&&this.multiplyLocal(s),this}}),r=new s,o=new s;t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n){"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=e||0,this.z=i||0,this.w=n||0)},clone:function(){return new s(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this.w=t.w||0,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},set:function(t,e,i,n){return"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=e||0,this.z=i||0,this.w=n||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this.w+=t.w||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this.w-=t.w||0,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,e=this.y,i=this.z,n=this.w;return Math.sqrt(t*t+e*e+i*i+n*n)},lengthSq:function(){var t=this.x,e=this.y,i=this.z,n=this.w;return t*t+e*e+i*i+n*n},normalize:function(){var t=this.x,e=this.y,i=this.z,n=this.w,s=t*t+e*e+i*i+n*n;return s>0&&(s=1/Math.sqrt(s),this.x=t*s,this.y=e*s,this.z=i*s,this.w=n*s),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,e){void 0===e&&(e=0);var i=this.x,n=this.y,s=this.z,r=this.w;return this.x=i+e*(t.x-i),this.y=n+e*(t.y-n),this.z=s+e*(t.z-s),this.w=r+e*(t.w-r),this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this.w*=t.w||1,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this.w/=t.w||1,this},distance:function(t){var e=t.x-this.x,i=t.y-this.y,n=t.z-this.z||0,s=t.w-this.w||0;return Math.sqrt(e*e+i*i+n*n+s*s)},distanceSq:function(t){var e=t.x-this.x,i=t.y-this.y,n=t.z-this.z||0,s=t.w-this.w||0;return e*e+i*i+n*n+s*s},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},transformMat4:function(t){var e=this.x,i=this.y,n=this.z,s=this.w,r=t.val;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*s,this},transformQuat:function(t){var e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z,a=t.w,h=a*e+r*n-o*i,l=a*i+o*e-s*n,u=a*n+s*i-r*e,c=-s*e-r*i-o*n;return this.x=h*a+c*-s+l*-o-u*-r,this.y=l*a+c*-r+u*-s-h*-o,this.z=u*a+c*-o+h*-r-l*-s,this},reset:function(){return this.x=0,this.y=0,this.z=0,this.w=0,this}});s.prototype.sub=s.prototype.subtract,s.prototype.mul=s.prototype.multiply,s.prototype.div=s.prototype.divide,s.prototype.dist=s.prototype.distance,s.prototype.distSq=s.prototype.distanceSq,s.prototype.len=s.prototype.length,s.prototype.lenSq=s.prototype.lengthSq,t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i="";t.exports=function(){var t=function(t){for(var e=["i","webkitI","msI","mozI","oI"],i=0;i<e.length;i++){var n=e[i]+"mageSmoothingEnabled";if(n in t)return n}return null},e=function(e){return""===i&&(i=t(e)),i&&(e[i]=!0),e};return{disable:function(e){return""===i&&(i=t(e)),i&&(e[i]=!1),e},enable:e,getPrefix:t,isEnabled:function(t){return null!==i?t[i]:null}}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=function(t,e){if(void 0===e&&(e=new n),0===t.length)return e;for(var i,s,r,o=Number.MAX_VALUE,a=Number.MAX_VALUE,h=Number.MIN_SAFE_INTEGER,l=Number.MIN_SAFE_INTEGER,u=0;u<t.length;u++)i=t[u],Array.isArray(i)?(s=i[0],r=i[1]):(s=i.x,r=i.y),o=Math.min(o,s),a=Math.min(a,r),h=Math.max(h,s),l=Math.max(l,r);return e.x=o,e.y=a,e.width=h-o,e.height=l-a,e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){var r=.5*(n-e),o=.5*(s-i),a=t*t;return(2*i-2*n+r+o)*(t*a)+(-3*i+3*n-2*r-o)*a+r*t+i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=!0);var n;return e&&("string"==typeof e?n=document.getElementById(e):"object"==typeof e&&1===e.nodeType&&(n=e)),n||(n=document.body),i&&n.style&&(n.style.overflow="hidden"),n.appendChild(t),t};t.exports=i},function(t,e,i){function n(){var t=new ArrayBuffer(4),e=new Uint8Array(t),i=new Uint32Array(t);return e[0]=161,e[1]=178,e[2]=195,e[3]=212,3569595041===i[0]||2712847316!==i[0]&&null}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var s=i(76),r=i(94),o=i(23),a={canvas:!1,canvasBitBltShift:null,file:!1,fileSystem:!1,getUserMedia:!0,littleEndian:!1,localStorage:!1,pointerLock:!1,support32bit:!1,vibration:!1,webGL:!1,worker:!1};t.exports=function(){a.canvas=!!window.CanvasRenderingContext2D||s.cocoonJS;try{a.localStorage=!!localStorage.getItem}catch(t){a.localStorage=!1}a.file=!!(window.File&&window.FileReader&&window.FileList&&window.Blob),a.fileSystem=!!window.requestFileSystem;var t=!1;return a.webGL=function(){if(window.WebGLRenderingContext)try{var e=o.createWebGL(this);s.cocoonJS&&(e.screencanvas=!1);var i=e.getContext("webgl")||e.getContext("experimental-webgl"),n=o.create2D(this),r=n.getContext("2d"),a=r.createImageData(1,1);return t=a.data instanceof Uint8ClampedArray,o.remove(e),o.remove(n),!!i}catch(t){return!1}return!1}(),a.worker=!!window.Worker,a.pointerLock="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia,window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL,a.getUserMedia=a.getUserMedia&&!!navigator.getUserMedia&&!!window.URL,r.firefox&&r.firefoxVersion<21&&(a.getUserMedia=!1),!s.iOS&&(r.ie||r.firefox||r.chrome)&&(a.canvasBitBltShift=!0),(r.safari||r.mobileSafari)&&(a.canvasBitBltShift=!1),navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(a.vibration=!0),"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint32Array&&(a.littleEndian=n()),a.support32bit="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof Int32Array&&null!==a.littleEndian&&t,a}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t>0&&0==(t&t-1)&&e>0&&0==(e&e-1)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(47),r=new n({initialize:function(t){this.name="WebGLPipeline",this.game=t.game,this.view=t.game.canvas,this.resolution=t.game.config.resolution,this.width=t.game.config.width*this.resolution,this.height=t.game.config.height*this.resolution,this.gl=t.gl,this.vertexCount=0,this.vertexCapacity=t.vertexCapacity,this.renderer=t.renderer,this.vertexData=t.vertices?t.vertices:new ArrayBuffer(t.vertexCapacity*t.vertexSize),this.vertexBuffer=this.renderer.createVertexBuffer(t.vertices?t.vertices:this.vertexData.byteLength,this.gl.STREAM_DRAW),this.program=this.renderer.createProgram(t.vertShader,t.fragShader),this.attributes=t.attributes,this.vertexSize=t.vertexSize,this.topology=t.topology,this.bytes=new Uint8Array(this.vertexData),this.vertexComponentCount=s.getComponentCount(t.attributes,this.gl),this.flushLocked=!1},shouldFlush:function(){return this.vertexCount>=this.vertexCapacity},resize:function(t,e,i){return this.width=t*i,this.height=e*i,this},bind:function(){var t=this.gl,e=this.vertexBuffer,i=this.attributes,n=this.program,s=this.renderer,r=this.vertexSize;s.setProgram(n),s.setVertexBuffer(e);for(var o=0;o<i.length;++o){var a=i[o],h=t.getAttribLocation(n,a.name);h>=0?(t.enableVertexAttribArray(h),t.vertexAttribPointer(h,a.size,a.type,a.normalized,r,a.offset)):t.disableVertexAttribArray(h)}return this},onBind:function(){return this},onPreRender:function(){return this},onRender:function(){return this},onPostRender:function(){return this},flush:function(){if(this.flushLocked)return this;this.flushLocked=!0;var t=this.gl,e=this.vertexCount,i=this.topology,n=this.vertexSize;return 0===e?void(this.flushLocked=!1):(t.bufferSubData(t.ARRAY_BUFFER,0,this.bytes.subarray(0,e*n)),t.drawArrays(i,0,e),this.vertexCount=0,this.flushLocked=!1,this)},destroy:function(){var t=this.gl;return t.deleteProgram(this.program),t.deleteBuffer(this.vertexBuffer),delete this.program,delete this.vertexBuffer,delete this.gl,this}});t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={ARC:0,BEGIN_PATH:1,CLOSE_PATH:2,FILL_RECT:3,LINE_TO:4,MOVE_TO:5,LINE_STYLE:6,FILL_STYLE:7,FILL_PATH:8,STROKE_PATH:9,FILL_TRIANGLE:10,STROKE_TRIANGLE:11,LINE_FX_TO:12,MOVE_FX_TO:13,SAVE:14,RESTORE:15,TRANSLATE:16,SCALE:17,ROTATE:18}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:42,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,SEMICOLON:186,PLUS:187,COMMA:188,MINUS:189,PERIOD:190,FORWARD_SLASH:191,BACK_SLASH:220,QUOTES:222,BACKTICK:192,OPEN_BRACKET:219,CLOSED_BRACKET:221}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(95),r=i(569),o=i(570),a=i(252),h=i(273),l=new n({initialize:function(t,e){this.scene=t,this.game,this.config=e,this.settings=h.create(e),this.canvas,this.context,this.anims,this.cache,this.plugins,this.registry,this.sound,this.textures,this.add,this.cameras,this.displayList,this.events,this.make,this.scenePlugin,this.updateList},init:function(t){this.settings.status=s.INIT,this.game=t,this.canvas=t.canvas,this.context=t.context;var e=t.plugins;this.plugins=e,e.installGlobal(this,a.Global),e.installLocal(this,a.CoreScene),e.installLocal(this,o(this)),e.installLocal(this,r(this)),this.events.emit("boot",this),this.settings.isBooted=!0},install:function(t){Array.isArray(t)||(t=[t]),this.plugins.installLocal(this,t)},step:function(t,e){this.events.emit("preupdate",t,e),this.events.emit("update",t,e),this.scene.update.call(this.scene,t,e),this.events.emit("postupdate",t,e)},render:function(t){var e=this.displayList;e.depthSort(),this.cameras.render(t,e),this.events.emit("render",t)},queueDepthSort:function(){this.displayList.queueDepthSort()},depthSort:function(){this.displayList.depthSort()},pause:function(){return this.settings.active&&(this.settings.status=s.PAUSED,this.settings.active=!1,this.events.emit("pause",this)),this},resume:function(){return this.settings.active||(this.settings.status=s.RUNNING,this.settings.active=!0,this.events.emit("resume",this)),this},sleep:function(){return this.settings.status=s.SLEEPING,this.settings.active=!1,this.settings.visible=!1,this.events.emit("sleep",this),this},wake:function(){return this.settings.status=s.RUNNING,this.settings.active=!0,this.settings.visible=!0,this.events.emit("wake",this),this},isSleeping:function(){return this.settings.status===s.SLEEPING},isActive:function(){return this.settings.status===s.RUNNING},isVisible:function(){return this.settings.visible},setVisible:function(t){return this.settings.visible=t,this},setActive:function(t){return t?this.resume():this.pause()},start:function(t){this.settings.status=s.START,this.settings.data=t,this.settings.active=!0,this.settings.visible=!0,this.events.emit("start",this)},shutdown:function(){this.settings.status=s.SHUTDOWN,this.settings.active=!1,this.settings.visible=!1,this.events.emit("shutdown",this)},destroy:function(){this.settings.status=s.DESTROYED,this.settings.active=!1,this.settings.visible=!1,this.events.emit("destroy",this)}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(25),r=new n({initialize:function(t,e,i,n,s,r,o){this.texture=t,this.name=e,this.source=t.source[i],this.sourceIndex=i,this.cutX=n,this.cutY=s,this.cutWidth=r,this.cutHeight=o,this.x=0,this.y=0,this.width=r,this.height=o,this.halfWidth=Math.floor(.5*r),this.halfHeight=Math.floor(.5*o),this.centerX=Math.floor(r/2),this.centerY=Math.floor(o/2),this.pivotX=0,this.pivotY=0,this.customPivot=!1,this.rotated=!1,this.autoRound=-1,this.customData={},this.data={cut:{x:n,y:s,w:r,h:o,r:n+r,b:s+o},trim:!1,sourceSize:{w:r,h:o},spriteSourceSize:{x:0,y:0,w:r,h:o},uvs:{x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},radius:.5*Math.sqrt(r*r+o*o),drawImage:{sx:n,sy:s,sWidth:r,sHeight:o,dWidth:r,dHeight:o}},this.updateUVs()},setTrim:function(t,e,i,n,s,r){var o=this.data,a=o.spriteSourceSize;return o.trim=!0,o.sourceSize.w=t,o.sourceSize.h=e,a.x=i,a.y=n,a.w=s,a.h=r,this.x=i,this.y=n,this.width=s,this.height=r,this.halfWidth=.5*s,this.halfHeight=.5*r,this.centerX=Math.floor(s/2),this.centerY=Math.floor(r/2),this.updateUVs()},updateUVs:function(){var t=this.cutX,e=this.cutY,i=this.cutWidth,n=this.cutHeight,s=this.data.drawImage;s.sWidth=i,s.sHeight=n,s.dWidth=i,s.dHeight=n;var r=this.source.width,o=this.source.height,a=this.data.uvs;return a.x0=t/r,a.y0=e/o,a.x1=t/r,a.y1=(e+n)/o,a.x2=(t+i)/r,a.y2=(e+n)/o,a.x3=(t+i)/r,a.y3=e/o,this},updateUVsInverted:function(){var t=this.source.width,e=this.source.height,i=this.data.uvs;return i.x3=(this.cutX+this.cutHeight)/t,i.y3=(this.cutY+this.cutWidth)/e,i.x2=this.cutX/t,i.y2=(this.cutY+this.cutWidth)/e,i.x1=this.cutX/t,i.y1=this.cutY/e,i.x0=(this.cutX+this.cutHeight)/t,i.y0=this.cutY/e,this},clone:function(){var t=new r(this.texture,this.name,this.sourceIndex);return t.cutX=this.cutX,t.cutY=this.cutY,t.cutWidth=this.cutWidth,t.cutHeight=this.cutHeight,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t.halfWidth=this.halfWidth,t.halfHeight=this.halfHeight,t.centerX=this.centerX,t.centerY=this.centerY,t.rotated=this.rotated,t.data=s(!0,t.data,this.data),t.updateUVs(),t},destroy:function(){this.texture=null,this.source=null},realWidth:{get:function(){return this.data.sourceSize.w}},realHeight:{get:function(){return this.data.sourceSize.h}},uvs:{get:function(){return this.data.uvs}},radius:{get:function(){return this.data.radius}},trimmed:{get:function(){return this.data.trim}},canvasData:{get:function(){return this.data.drawImage}}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(2),o=i(286),a=i(586),h=i(587),l=i(588),u=new n({Extends:r,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Origin,s.Pipeline,s.ScaleMode,s.Texture,s.Tint,s.Transform,s.Visible,s.ScrollFactor,l],initialize:function(t,e,i,n,s,o){void 0===s&&(s=""),r.call(this,t,"BitmapText"),this.font=n;var a=this.scene.sys.cache.bitmapFont.get(n);this.fontData=a.data,this.text=Array.isArray(s)?s.join("\n"):s,this.fontSize=o||this.fontData.size,this.setTexture(a.texture,a.frame),this.setPosition(e,i),this.setOrigin(0,0),this.initPipeline("TextureTintPipeline"),this._bounds=this.getTextBounds()},setFontSize:function(t){return this.fontSize=t,this},setText:function(t){return Array.isArray(t)&&(t=t.join("\n")),this.text=t,this},getTextBounds:function(t){return this._bounds=o(this,t),this._bounds},width:{get:function(){return this.getTextBounds(!1),this._bounds.global.width}},height:{get:function(){return this.getTextBounds(!1),this._bounds.global.height}},toJSON:function(){var t=s.ToJSON(this),e={font:this.font,text:this.text,fontSize:this.fontSize};return t.data=e,t}});u.ParseRetroFont=h,u.ParseFromAtlas=a,t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(591),s=i(594),r=i(0),o=i(12),a=i(142),h=i(2),l=i(98),u=new r({Extends:h,Mixins:[o.Alpha,o.BlendMode,o.Depth,o.Pipeline,o.ScaleMode,o.ScrollFactor,o.Size,o.Texture,o.Transform,o.Visible,n],initialize:function(t,e,i,n,s){h.call(this,t,"Blitter"),this.setTexture(n,s),this.setPosition(e,i),this.initPipeline("TextureTintPipeline"),this.children=new l,this.renderList=[],this.dirty=!1},create:function(t,e,i,n,r){void 0===n&&(n=!0),void 0===r&&(r=this.children.length),void 0===i?i=this.frame:i instanceof a||(i=this.texture.get(i));var o=new s(this,t,e,i,n);return this.children.addAt(o,r,!1),this.dirty=!0,o},createFromCallback:function(t,e,i,n){for(var s=this.createMultiple(e,i,n),r=0;r<s.length;r++){var o=s[r];t.call(this,o,r)}return s},createMultiple:function(t,e,i){void 0===e&&(e=this.frame.name),void 0===i&&(i=!0),Array.isArray(e)||(e=[e]);var n=[],s=this;return e.forEach(function(e){for(var r=0;r<t;r++)n.push(s.create(0,0,e,i))}),n},childCanRender:function(t){return t.visible&&t.alpha>0},getRenderList:function(){return this.dirty&&(this.renderList=this.children.list.filter(this.childCanRender,this),this.dirty=!1),this.renderList},clear:function(){this.children.removeAll(),this.dirty=!0}});t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(2),o=i(286),a=i(595),h=new n({Extends:r,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Origin,s.Pipeline,s.Texture,s.Tint,s.Transform,s.Visible,s.ScrollFactor,a],initialize:function(t,e,i,n,s,o){void 0===s&&(s=""),r.call(this,t,"DynamicBitmapText"),this.font=n;var a=this.scene.sys.cache.bitmapFont.get(n);this.fontData=a.data,this.text=Array.isArray(s)?s.join("\n"):s,this.fontSize=o||this.fontData.size,this.setTexture(a.texture,a.frame),this.setPosition(e,i),this.setOrigin(0,0),this.initPipeline("TextureTintPipeline"),this._bounds=this.getTextBounds(),this.scrollX=0,this.scrollY=0,this.cropWidth=0,this.cropHeight=0,this.displayCallback},setSize:function(t,e){return this.cropWidth=t,this.cropHeight=e,this},setDisplayCallback:function(t){return this.displayCallback=t,this},setFontSize:function(t){return this.fontSize=t,this},setText:function(t){return Array.isArray(t)&&(t=t.join("\n")),this.text=t,this},setScrollX:function(t){return this.scrollX=t,this},setScrollY:function(t){return this.scrollY=t,this},getTextBounds:function(t){return this._bounds=o(this,t),this._bounds},width:{get:function(){return this.getTextBounds(!1),this._bounds.global.width}},height:{get:function(){return this.getTextBounds(!1),this._bounds.global.height}},toJSON:function(){var t=s.ToJSON(this),e={font:this.font,text:this.text,fontSize:this.fontSize};return t.data=e,t}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(128),s=i(0),r=i(139),o=i(12),a=i(288),h=i(2),l=i(4),u=i(15),c=i(607),d=new s({Extends:h,Mixins:[o.Alpha,o.BlendMode,o.Depth,o.Pipeline,o.Transform,o.Visible,o.ScrollFactor,c],initialize:function(t,e){var i=l(e,"x",0),n=l(e,"y",0);h.call(this,t,"Graphics"),this.setPosition(i,n),this.initPipeline("FlatTintPipeline"),this.displayOriginX=0,this.displayOriginY=0,this.commandBuffer=[],this.defaultFillColor=-1,this.defaultFillAlpha=1,this.defaultStrokeWidth=1,this.defaultStrokeColor=-1,this.defaultStrokeAlpha=1,this._lineWidth=1,this.setDefaultStyles(e)},setDefaultStyles:function(t){return l(t,"lineStyle",null)&&(this.defaultStrokeWidth=l(t,"lineStyle.width",1),this.defaultStrokeColor=l(t,"lineStyle.color",16777215),this.defaultStrokeAlpha=l(t,"lineStyle.alpha",1),this.lineStyle(this.defaultStrokeWidth,this.defaultStrokeColor,this.defaultStrokeAlpha)),l(t,"fillStyle",null)&&(this.defaultFillColor=l(t,"fillStyle.color",16777215),this.defaultFillAlpha=l(t,"fillStyle.alpha",1),this.fillStyle(this.defaultFillColor,this.defaultFillAlpha)),this},lineStyle:function(t,e,i){return void 0===i&&(i=1),this.commandBuffer.push(r.LINE_STYLE,t,e,i),this._lineWidth=t,this},fillStyle:function(t,e){return void 0===e&&(e=1),this.commandBuffer.push(r.FILL_STYLE,t,e),this},beginPath:function(){return this.commandBuffer.push(r.BEGIN_PATH),this},closePath:function(){return this.commandBuffer.push(r.CLOSE_PATH),this},fillPath:function(){return this.commandBuffer.push(r.FILL_PATH),this},strokePath:function(){return this.commandBuffer.push(r.STROKE_PATH),this},fillCircleShape:function(t){return this.fillCircle(t.x,t.y,t.radius)},strokeCircleShape:function(t){return this.strokeCircle(t.x,t.y,t.radius)},fillCircle:function(t,e,i){return this.beginPath(),this.arc(t,e,i,0,u.PI2),this.closePath(),this.fillPath(),this},strokeCircle:function(t,e,i){return this.beginPath(),this.arc(t,e,i,0,u.PI2),this.closePath(),this.strokePath(),this},fillRectShape:function(t){return this.fillRect(t.x,t.y,t.width,t.height)},strokeRectShape:function(t){return this.strokeRect(t.x,t.y,t.width,t.height)},fillRect:function(t,e,i,n){return this.commandBuffer.push(r.FILL_RECT,t,e,i,n),this},strokeRect:function(t,e,i,n){var s=this._lineWidth/2,r=t-s,o=t+s;return this.beginPath(),this.moveTo(t,e),this.lineTo(t,e+n),this.strokePath(),this.closePath(),this.beginPath(),this.moveTo(t+i,e),this.lineTo(t+i,e+n),this.strokePath(),this.closePath(),this.beginPath(),this.moveTo(r,e),this.lineTo(o+i,e),this.strokePath(),this.closePath(),this.beginPath(),this.moveTo(r,e+n),this.lineTo(o+i,e+n),this.strokePath(),this.closePath(),this},fillPointShape:function(t,e){return this.fillPoint(t.x,t.y,e)},fillPoint:function(t,e,i){return!i||i<1?i=1:(t-=i/2,e-=i/2),this.commandBuffer.push(r.FILL_RECT,t,e,i,i),this},fillTriangleShape:function(t){return this.fillTriangle(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},strokeTriangleShape:function(t){return this.strokeTriangle(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},fillTriangle:function(t,e,i,n,s,o){return this.commandBuffer.push(r.FILL_TRIANGLE,t,e,i,n,s,o),this},strokeTriangle:function(t,e,i,n,s,o){return this.commandBuffer.push(r.STROKE_TRIANGLE,t,e,i,n,s,o),this},strokeLineShape:function(t){return this.lineBetween(t.x1,t.y1,t.x2,t.y2)},lineBetween:function(t,e,i,n){return this.beginPath(),this.moveTo(t,e),this.lineTo(i,n),this.strokePath(),this},lineTo:function(t,e){return this.commandBuffer.push(r.LINE_TO,t,e),this},moveTo:function(t,e){return this.commandBuffer.push(r.MOVE_TO,t,e),this},lineFxTo:function(t,e,i,n){return this.commandBuffer.push(r.LINE_FX_TO,t,e,i,n,1),this},moveFxTo:function(t,e,i,n){return this.commandBuffer.push(r.MOVE_FX_TO,t,e,i,n,1),this},strokePoints:function(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=t.length),this.beginPath(),this.moveTo(t[0].x,t[0].y);for(var n=1;n<i;n++)this.lineTo(t[n].x,t[n].y);return e&&this.lineTo(t[0].x,t[0].y),this.strokePath(),this},fillPoints:function(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=t.length),this.beginPath(),this.moveTo(t[0].x,t[0].y);for(var n=1;n<i;n++)this.lineTo(t[n].x,t[n].y);return e&&this.lineTo(t[0].x,t[0].y),this.fillPath(),this},strokeEllipseShape:function(t,e){void 0===e&&(e=32);var i=t.getPoints(e);return this.strokePoints(i,!0)},strokeEllipse:function(t,e,i,n,s){void 0===s&&(s=32);var r=new a(t,e,i,n),o=r.getPoints(s);return this.strokePoints(o,!0)},fillEllipseShape:function(t,e){void 0===e&&(e=32);var i=t.getPoints(e);return this.fillPoints(i,!0)},fillEllipse:function(t,e,i,n,s){void 0===s&&(s=32);var r=new a(t,e,i,n),o=r.getPoints(s);return this.fillPoints(o,!0)},arc:function(t,e,i,n,s,o){return this.commandBuffer.push(r.ARC,t,e,i,n,s,o),this},save:function(){return this.commandBuffer.push(r.SAVE),this},restore:function(){return this.commandBuffer.push(r.RESTORE),this},translate:function(t,e){return this.commandBuffer.push(r.TRANSLATE,t,e),this},scale:function(t,e){return this.commandBuffer.push(r.SCALE,t,e),this},rotate:function(t){return this.commandBuffer.push(r.ROTATE,t),this},clear:function(){return this.commandBuffer.length=0,this.defaultFillColor>-1&&this.fillStyle(this.defaultFillColor,this.defaultFillAlpha),this.defaultStrokeColor>-1&&this.lineStyle(this.defaultStrokeWidth,this.defaultStrokeColor,this.defaultStrokeAlpha),this},generateTexture:function(t,e,i){var n=this.scene.sys;void 0===e&&(e=n.game.config.width),void 0===i&&(i=n.game.config.height),d.TargetCamera.setViewport(0,0,e,i),d.TargetCamera.scrollX=this.x,d.TargetCamera.scrollY=this.y;var s,r;if("string"==typeof t)if(n.textures.exists(t)){s=n.textures.get(t);var o=s.getSourceImage();o instanceof HTMLCanvasElement&&(r=o.getContext("2d"))}else s=n.textures.createCanvas(t,e,i),r=s.getSourceImage().getContext("2d");else t instanceof HTMLCanvasElement&&(r=t.getContext("2d"));return r&&(this.renderCanvas(n.game.renderer,this,0,d.TargetCamera,r),n.game.renderer.gl&&s&&(s.source[0].glTexture=n.game.renderer.canvasToTexture(r.canvas,s.source[0].glTexture,!0,0))),this}});d.TargetCamera=new n(0,0,0,0),t.exports=d},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(77),r=i(289),o=i(290),a=i(123),h=new n({initialize:function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),this.x=t,this.y=e,this.width=i,this.height=n},contains:function(t,e){return s(this,t,e)},getPoint:function(t,e){return r(this,t,e)},getPoints:function(t,e,i){return o(this,t,e,i)},getRandomPoint:function(t){return a(this,t)},setTo:function(t,e,i,n){return this.x=t,this.y=e,this.width=i,this.height=n,this},setEmpty:function(){return this.width=0,this.height=0,this},setPosition:function(t,e){return void 0===e&&(e=t),this.x=t,this.y=e,this},setSize:function(t,e){return void 0===e&&(e=t),this.width=t,this.height=e,this},isEmpty:function(){return this.width<=0||this.height<=0},getMinorRadius:function(){return Math.min(this.width,this.height)/2},getMajorRadius:function(){return Math.max(this.width,this.height)/2},left:{get:function(){return this.x-this.width/2},set:function(t){this.x=t+this.width/2}},right:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},top:{get:function(){return this.y-this.height/2},set:function(t){this.y=t+this.height/2}},bottom:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e,i){void 0===i&&(i=new n);var s=t.width/2,r=t.height/2;return i.x=t.x+s*Math.cos(e),i.y=t.y+r*Math.sin(e),i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(2),o=i(612),a=i(98),h=i(613),l=i(652),u=new n({Extends:r,Mixins:[s.Depth,s.Visible,s.Pipeline,l],initialize:function(t,e,i,n){if(r.call(this,t,"ParticleEmitterManager"),this.blendMode=-1,this.timeScale=1,this.texture=null,this.frame=null,this.frameNames=[],null===i||"object"!=typeof i&&!Array.isArray(i)||(n=i,i=null),this.setTexture(e,i),this.initPipeline("TextureTintPipeline"),this.emitters=new a(this),this.wells=new a(this),n){Array.isArray(n)||(n=[n]);for(var s=0;s<n.length;s++)this.createEmitter(n[s])}},setTexture:function(t,e){return this.texture=this.scene.sys.textures.get(t),this.setFrame(e)},setFrame:function(t){return this.frame=this.texture.get(t),this.frameNames=this.texture.getFramesFromTextureSource(this.frame.sourceIndex),this.defaultFrame=this.frame,this},setEmitterFrames:function(t,e){Array.isArray(t)||(t=[t]);var i=e.frames;i.length=0;for(var n=0;n<t.length;n++){var s=t[n];-1!==this.frameNames.indexOf(s)&&i.push(this.texture.get(s))}return i.length>0?e.defaultFrame=i[0]:e.defaultFrame=this.defaultFrame,this},addEmitter:function(t){return this.emitters.add(t)},createEmitter:function(t){return this.addEmitter(new h(this,t))},addGravityWell:function(t){return this.wells.add(t)},createGravityWell:function(t){return this.addGravityWell(new o(t))},emitParticle:function(t,e,i){for(var n=this.emitters.list,s=0;s<n.length;s++){var r=n[s];r.active&&r.emitParticle(t,e,i)}return this},emitParticleAt:function(t,e,i){return this.emitParticle(i,t,e)},pause:function(){return this.active=!1,this},resume:function(){return this.active=!0,this},getProcessors:function(){return this.wells.getAll("active",!0)},preUpdate:function(t,e){e*=this.timeScale;for(var i=this.emitters.list,n=0;n<i.length;n++){var s=i[n];s.active&&s.preUpdate(t,e)}}});t.exports=u},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=t.length);var n=e+Math.floor(Math.random()*i);return void 0===t[n]?null:t[n]};t.exports=i},function(t,e,i){var n=i(0),s=i(12),r=i(2),o=i(655),a=i(656),h=new n({Extends:r,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Flip,s.GetBounds,s.MatrixStack,s.Origin,s.Pipeline,s.ScaleMode,s.ScrollFactor,s.Size,s.Tint,s.Transform,s.Visible,a],initialize:function(t,e,i,n,s){if(r.call(this,t,"RenderTexture"),this.initMatrixStack(),this.renderer=t.sys.game.renderer,this.renderer.type===Phaser.WEBGL){var a=this.renderer.gl;this.gl=a,this.fill=o.fill,this.clear=o.clear,this.draw=o.draw,this.drawFrame=o.drawFrame,this.texture=this.renderer.createTexture2D(0,a.NEAREST,a.NEAREST,a.CLAMP_TO_EDGE,a.CLAMP_TO_EDGE,a.RGBA,null,n,s,!1),this.framebuffer=this.renderer.createFramebuffer(n,s,this.texture,!1)}else this.fill=function(){},this.clear=function(){},this.draw=function(){},this.drawFrame=function(){};this.setPosition(e,i),this.setSize(n,s),this.initPipeline("TextureTintPipeline")},destroy:function(){r.destroy.call(this),this.renderer.type===Phaser.WEBGL&&(this.renderer.deleteTexture(this.texture),this.renderer.deleteFramebuffer(this.framebuffer))}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(135),s=i(23),r=i(0),o=i(12),a=i(2),h=i(659),l=i(4),u=i(250),c=i(660),d=i(663),f=new r({Extends:a,Mixins:[o.Alpha,o.BlendMode,o.Depth,o.Flip,o.GetBounds,o.Origin,o.Pipeline,o.ScaleMode,o.ScrollFactor,o.Tint,o.Transform,o.Visible,c],initialize:function(t,e,i,n,r){void 0===e&&(e=0),void 0===i&&(i=0),a.call(this,t,"Text"),this.setPosition(e,i),this.setOrigin(0,0),this.initPipeline("TextureTintPipeline"),this.canvas=s.create(this),this.context=this.canvas.getContext("2d"),this.style=new d(this,r),this.autoRound=!0,this.splitRegExp=/(?:\r\n|\r|\n)/,this.text="",this.resolution=1,this.padding={left:0,right:0,top:0,bottom:0},this.width=1,this.height=1,this.canvasTexture=null,this.dirty=!1,this.initRTL(),r&&r.padding&&this.setPadding(r.padding),this.setText(n);var o=this;t.sys.game.renderer.onContextRestored(function(){o.canvasTexture=null,o.dirty=!0})},initRTL:function(){this.style.rtl&&(this.canvas.dir="rtl",this.context.direction="rtl",this.canvas.style.display="none",n(this.canvas,this.scene.sys.canvas),this.originX=1)},runWordWrap:function(t){var e=this.style;if(e.wordWrapCallback){var i=e.wordWrapCallback.call(e.wordWrapCallbackScope,t,this);return Array.isArray(i)&&(i=i.join("\n")),i}return e.wordWrapWidth?e.wordWrapUseAdvanced?this.advancedWordWrap(t,this.context,this.style.wordWrapWidth):this.basicWordWrap(t,this.context,this.style.wordWrapWidth):t},advancedWordWrap:function(t,e,i){for(var n="",s=t.replace(/ +/gi," ").split(this.splitRegExp),r=s.length,o=0;o<r;o++){var a=s[o],h="";a=a.replace(/^ *|\s*$/gi,"");if(e.measureText(a).width<i)n+=a+"\n";else{for(var l=i,u=a.split(" "),c=0;c<u.length;c++){var d=u[c],f=d+" ",p=e.measureText(f).width;if(p>l){if(0===c){for(var v=f;v.length&&(v=v.slice(0,-1),!((p=e.measureText(v).width)<=l)););if(!v.length)throw new Error("This text's wordWrapWidth setting is less than a single character!");var g=d.substr(v.length);u[c]=g,h+=v}var y=u[c].length?c:c+1,m=u.slice(y).join(" ").replace(/[ \n]*$/gi,"");s[o+1]=m+" "+(s[o+1]||""),r=s.length;break}h+=f,l-=p}n+=h.replace(/[ \n]*$/gi,"")+"\n"}}return n=n.replace(/[\s|\n]*$/gi,"")},basicWordWrap:function(t,e,i){for(var n="",s=t.split(this.splitRegExp),r=0;r<s.length;r++){for(var o=i,a=s[r].split(" "),h=0;h<a.length;h++){var l=e.measureText(a[h]).width,u=l+e.measureText(" ").width;u>o?(h>0&&(n+="\n"),n+=a[h]+" ",o=i-l):(o-=u,n+=a[h]+" ")}r<s.length-1&&(n+="\n")}return n},getWrappedText:function(t){return void 0===t&&(t=this.text),this.runWordWrap(t).split(this.splitRegExp)},setText:function(t){return t||(t=""),Array.isArray(t)&&(t=t.join("\n")),t!==this.text&&(this.text=t.toString(),this.updateText()),this},setStyle:function(t){return this.style.setStyle(t)},setFont:function(t){return this.style.setFont(t)},setFontFamily:function(t){return this.style.setFontFamily(t)},setFontSize:function(t){return this.style.setFontSize(t)},setFontStyle:function(t){return this.style.setFontStyle(t)},setFixedSize:function(t,e){return this.style.setFixedSize(t,e)},setBackgroundColor:function(t){return this.style.setBackgroundColor(t)},setFill:function(t){return this.style.setFill(t)},setColor:function(t){return this.style.setColor(t)},setStroke:function(t,e){return this.style.setStroke(t,e)},setShadow:function(t,e,i,n,s,r){return this.style.setShadow(t,e,i,n,s,r)},setShadowOffset:function(t,e){return this.style.setShadowOffset(t,e)},setShadowColor:function(t){return this.style.setShadowColor(t)},setShadowBlur:function(t){return this.style.setShadowBlur(t)},setShadowStroke:function(t){return this.style.setShadowStroke(t)},setShadowFill:function(t){return this.style.setShadowFill(t)},setWordWrapWidth:function(t,e){return this.style.setWordWrapWidth(t,e)},setWordWrapCallback:function(t,e){return this.style.setWordWrapCallback(t,e)},setAlign:function(t){return this.style.setAlign(t)},setPadding:function(t,e,i,n){if("object"==typeof t){var s=t,r=l(s,"x",null);null!==r?(t=r,i=r):(t=l(s,"left",0),i=l(s,"right",t));var o=l(s,"y",null);null!==o?(e=o,n=o):(e=l(s,"top",0),n=l(s,"bottom",e))}else void 0===t&&(t=0),void 0===e&&(e=t),void 0===i&&(i=t),void 0===n&&(n=e);return this.padding.left=t,this.padding.top=e,this.padding.right=i,this.padding.bottom=n,this.updateText()},setMaxLines:function(t){return this.style.setMaxLines(t)},updateText:function(){var t=this.canvas,e=this.context,i=this.style,n=this.resolution,s=i.metrics;i.syncFont(t,e);var r=this.text;(i.wordWrapWidth||i.wordWrapCallback)&&(r=this.runWordWrap(this.text));var o=r.split(this.splitRegExp),a=h(this,s,o),l=this.padding,u=a.width+l.left+l.right,c=a.height+l.top+l.bottom;0===i.fixedWidth&&(this.width=u),0===i.fixedHeight&&(this.height=c),this.updateDisplayOrigin(),u*=n,c*=n,u=Math.max(u,1),c=Math.max(c,1),t.width!==u||t.height!==c?(t.width=u,t.height=c,i.syncFont(t,e)):e.clearRect(0,0,u,c),e.save(),i.backgroundColor&&(e.fillStyle=i.backgroundColor,e.fillRect(0,0,u,c)),i.syncStyle(t,e),e.textBaseline="alphabetic",e.translate(l.left,l.top);for(var d,f,p=0;p<a.lines;p++)d=i.strokeThickness/2,f=i.strokeThickness/2+p*a.lineHeight+s.ascent,p>0&&(f+=a.lineSpacing*p),i.rtl?d=u-d:"right"===i.align?d+=a.width-a.lineWidths[p]:"center"===i.align&&(d+=(a.width-a.lineWidths[p])/2),this.autoRound&&(d=Math.round(d),f=Math.round(f)),i.strokeThickness&&(this.style.syncShadow(e,i.shadowStroke),e.strokeText(o[p],d,f)),i.color&&(this.style.syncShadow(e,i.shadowFill),e.fillText(o[p],d,f));return e.restore(),this.dirty=!0,this},getTextMetrics:function(){return this.style.getTextMetrics()},toJSON:function(){var t=o.ToJSON(this),e={autoRound:this.autoRound,text:this.text,style:this.style.toJSON(),resolution:this.resolution,padding:{left:this.padding.left,right:this.padding.right,top:this.padding.top,bottom:this.padding.bottom}};return t.data=e,t},preDestroy:function(){this.style.rtl&&u(this.canvas),s.remove(this.canvas)}});t.exports=f},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(23),s=i(0),r=i(12),o=i(2),a=i(309),h=i(665),l=new s({Extends:o,Mixins:[r.Alpha,r.BlendMode,r.Depth,r.Flip,r.GetBounds,r.Origin,r.Pipeline,r.ScaleMode,r.ScrollFactor,r.Size,r.Texture,r.Tint,r.Transform,r.Visible,h],initialize:function(t,e,i,s,r,h,l){var u=t.sys.game.renderer;o.call(this,t,"TileSprite"),this.tilePositionX=0,this.tilePositionY=0,this.dirty=!0,this.tileTexture=null,this.renderer=u,this.setTexture(h,l),this.setPosition(e,i),this.setSize(s,r),this.setOriginFromFrame(),this.initPipeline("TextureTintPipeline"),this.potWidth=a(this.frame.width),this.potHeight=a(this.frame.height),this.canvasPattern=null,this.canvasBuffer=n.create2D(null,this.potWidth,this.potHeight),this.canvasBufferCtx=this.canvasBuffer.getContext("2d"),this.updateTileTexture(),t.sys.game.renderer.onContextRestored(function(t){var e=t.gl;this.tileTexture=null,this.dirty=!0,this.tileTexture=t.createTexture2D(0,e.LINEAR,e.LINEAR,e.REPEAT,e.REPEAT,e.RGBA,this.canvasBuffer,this.potWidth,this.potHeight)},this)},updateTileTexture:function(){this.dirty&&(this.canvasBufferCtx.drawImage(this.frame.source.image,this.frame.cutX,this.frame.cutY,this.frame.cutWidth,this.frame.cutHeight,0,0,this.potWidth,this.potHeight),this.renderer.gl?this.tileTexture=this.renderer.canvasToTexture(this.canvasBuffer,this.tileTexture,null===this.tileTexture,this.scaleMode):this.canvasPattern=this.canvasBufferCtx.createPattern(this.canvasBuffer,"repeat"),this.dirty=!1)},destroy:function(){this.renderer&&this.renderer.deleteTexture(this.tileTexture),n.remove(this.canvasBuffer),this.canvasPattern=null,this.canvasBufferCtx=null,this.canvasBuffer=null,this.renderer=null,this.visible=!1}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(10),s=function(t,e){var i=n(e,"anims",null);if(null===i)return t;if("string"==typeof i)t.anims.play(i);else if("object"==typeof i){var s=t.anims,r=n(i,"key",void 0),o=n(i,"startFrame",void 0),a=n(i,"delay",0),h=n(i,"repeat",0),l=n(i,"repeatDelay",0),u=n(i,"yoyo",!1),c=n(i,"play",!1),d=n(i,"delayedPlay",0);s.delay(a),s.repeat(h),s.repeatDelay(l),s.yoyo(u),c?s.play(r,o):d>0?s.delayedPlay(d,r,o):s.load(r)}return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(100),r=new n({Extends:s,initialize:function(t,e,i,n,r){var o=[0,0,0,0,0,0,0,0,0,0,0,0],a=[0,0,0,1,1,1,0,0,1,1,1,0],h=[16777215,16777215,16777215,16777215,16777215,16777215],l=[1,1,1,1,1,1];s.call(this,t,e,i,o,a,h,l,n,r),this.resetPosition()},topLeftX:{get:function(){return this.x+this.vertices[0]},set:function(t){this.vertices[0]=t-this.x,this.vertices[6]=t-this.x}},topLeftY:{get:function(){return this.y+this.vertices[1]},set:function(t){this.vertices[1]=t-this.y,this.vertices[7]=t-this.y}},topRightX:{get:function(){return this.x+this.vertices[10]},set:function(t){this.vertices[10]=t-this.x}},topRightY:{get:function(){return this.y+this.vertices[11]},set:function(t){this.vertices[11]=t-this.y}},bottomLeftX:{get:function(){return this.x+this.vertices[2]},set:function(t){this.vertices[2]=t-this.x}},bottomLeftY:{get:function(){return this.y+this.vertices[3]},set:function(t){this.vertices[3]=t-this.y}},bottomRightX:{get:function(){return this.x+this.vertices[4]},set:function(t){this.vertices[4]=t-this.x,this.vertices[8]=t-this.x}},bottomRightY:{get:function(){return this.y+this.vertices[5]},set:function(t){this.vertices[5]=t-this.y,this.vertices[9]=t-this.y}},topLeftAlpha:{get:function(){return this.alphas[0]},set:function(t){this.alphas[0]=t,this.alphas[3]=t}},topRightAlpha:{get:function(){return this.alphas[5]},set:function(t){this.alphas[5]=t}},bottomLeftAlpha:{get:function(){return this.alphas[1]},set:function(t){this.alphas[1]=t}},bottomRightAlpha:{get:function(){return this.alphas[2]},set:function(t){this.alphas[2]=t,this.alphas[4]=t}},topLeftColor:{get:function(){return this.colors[0]},set:function(t){this.colors[0]=t,this.colors[3]=t}},topRightColor:{get:function(){return this.colors[5]},set:function(t){this.colors[5]=t}},bottomLeftColor:{get:function(){return this.colors[1]},set:function(t){this.colors[1]=t}},bottomRightColor:{get:function(){return this.colors[2]},set:function(t){this.colors[2]=t,this.colors[4]=t}},setTopLeft:function(t,e){return this.topLeftX=t,this.topLeftY=e,this},setTopRight:function(t,e){return this.topRightX=t,this.topRightY=e,this},setBottomLeft:function(t,e){return this.bottomLeftX=t,this.bottomLeftY=e,this},setBottomRight:function(t,e){return this.bottomRightX=t,this.bottomRightY=e,this},resetPosition:function(){var t=this.x,e=this.y,i=Math.floor(this.width/2),n=Math.floor(this.height/2);return this.setTopLeft(t-i,e-n),this.setTopRight(t+i,e-n),this.setBottomLeft(t-i,e+n),this.setBottomRight(t+i,e+n),this},resetAlpha:function(){var t=this.alphas;return t[0]=1,t[1]=1,t[2]=1,t[3]=1,t[4]=1,t[5]=1,this},resetColors:function(){var t=this.colors;return t[0]=16777215,t[1]=16777215,t[2]=16777215,t[3]=16777215,t[4]=16777215,t[5]=16777215,this},reset:function(){return this.resetPosition(),this.resetAlpha(),this.resetColors()}});t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===i&&(i=!1),void 0===n&&(n=[]);for(var s,r,o,a,h,l,u=t.x3-t.x1,c=t.y3-t.y1,d=t.x2-t.x1,f=t.y2-t.y1,p=u*u+c*c,v=u*d+c*f,g=d*d+f*f,y=p*g-v*v,m=0===y?0:1/y,x=t.x1,b=t.y1,w=0;w<e.length&&(o=e[w].x-x,a=e[w].y-b,h=u*o+c*a,l=d*o+f*a,s=(g*h-v*l)*m,r=(p*l-v*h)*m,!(s>=0&&r>=0&&s+r<1&&(n.push({x:e[w].x,y:e[w].y}),i)));w++);return n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=Math.cos(n),r=Math.sin(n),o=t.x1-e,a=t.y1-i;return t.x1=o*s-a*r+e,t.y1=o*r+a*s+i,o=t.x2-e,a=t.y2-i,t.x2=o*s-a*r+e,t.y2=o*r+a*s+i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){for(var n=!1,s=-1,r=t.points.length-1;++s<t.points.length;r=s){var o=t.points[s].x,a=t.points[s].y,h=t.points[r].x,l=t.points[r].y;(a<=i&&i<l||l<=i&&i<a)&&e<(h-o)*(i-a)/(l-a)+o&&(n=!n)}return n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 0===t.height?NaN:t.width/t.height};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=Math.cos(n),r=Math.sin(n),o=t.x1-e,a=t.y1-i;return t.x1=o*s-a*r+e,t.y1=o*r+a*s+i,o=t.x2-e,a=t.y2-i,t.x2=o*s-a*r+e,t.y2=o*r+a*s+i,o=t.x3-e,a=t.y3-i,t.x3=o*s-a*r+e,t.y3=o*r+a*s+i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return!!t.url&&(t.url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/)?t.url:e+t.url)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(25),s=i(102),r=function(t,e){var i=void 0===t?s():n({},t);if(e)for(var r in e)void 0!==e[r]&&(i[r]=e[r]);return i};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Acceleration:i(900),BodyScale:i(901),BodyType:i(902),Bounce:i(903),CheckAgainst:i(904),Collides:i(905),Debug:i(906),Friction:i(907),Gravity:i(908),Offset:i(909),SetGameObject:i(910),Velocity:i(911)}},function(t,e,i){var n={};t.exports=n;var s=i(39),r=i(16);!function(){n.fromVertices=function(t){for(var e={},i=0;i<t.length;i++){var n=(i+1)%t.length,o=s.normalise({x:t[n].y-t[i].y,y:t[i].x-t[n].x}),a=0===o.y?1/0:o.x/o.y;a=a.toFixed(3).toString(),e[a]=o}return r.values(e)},n.rotate=function(t,e){if(0!==e)for(var i=Math.cos(e),n=Math.sin(e),s=0;s<t.length;s++){var r,o=t[s];r=o.x*i-o.y*n,o.y=o.x*n+o.y*i,o.x=r}}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Bounce:i(917),Collision:i(918),Force:i(919),Friction:i(920),Gravity:i(921),Mass:i(922),Static:i(923),Sensor:i(924),SetBody:i(925),Sleep:i(926),Transform:i(927),Velocity:i(928)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(37),s=i(20),r=i(0),o=i(165),a=i(1),h=i(62),l=i(38),u=new r({Mixins:[o.Bounce,o.Collision,o.Friction,o.Gravity,o.Mass,o.Sensor,o.Sleep,o.Static],initialize:function(t,e,i){this.tile=e,this.world=t,e.physics.matterBody&&e.physics.matterBody.destroy(),e.physics.matterBody=this;var n=a(i,"body",null),s=a(i,"addToWorld",!0);if(n)this.setBody(n,s);else{var r=e.getCollisionGroup();a(r,"objects",[]).length>0?this.setFromTileCollision(i):this.setFromTileRectangle(i)}},setFromTileRectangle:function(t){void 0===t&&(t={}),h(t,"isStatic")||(t.isStatic=!0),h(t,"addToWorld")||(t.addToWorld=!0);var e=this.tile.getBounds(),i=e.x+e.width/2,s=e.y+e.height/2,r=n.rectangle(i,s,e.width,e.height,t);return this.setBody(r,t.addToWorld),this},setFromTileCollision:function(t){void 0===t&&(t={}),h(t,"isStatic")||(t.isStatic=!0),h(t,"addToWorld")||(t.addToWorld=!0);for(var e=this.tile.tilemapLayer.scaleX,i=this.tile.tilemapLayer.scaleY,r=this.tile.getLeft(),o=this.tile.getTop(),u=this.tile.getCollisionGroup(),c=a(u,"objects",[]),d=[],f=0;f<c.length;f++){var p=c[f],v=r+p.x*e,g=o+p.y*i,y=p.width*e,m=p.height*i,x=null;if(p.rectangle)x=n.rectangle(v+y/2,g+m/2,y,m,t);else if(p.ellipse)x=n.circle(v+y/2,g+m/2,y/2,t);else if(p.polygon||p.polyline){var b=p.polygon?p.polygon:p.polyline,w=b.map(function(t){return{x:t.x*e,y:t.y*i}}),T=l.create(w);if(l.isConvex(w)){var S=l.centre(T);v+=S.x,g+=S.y}x=n.fromVertices(v,g,T,t)}x&&d.push(x)}return 1===d.length?this.setBody(d[0],t.addToWorld):d.length>1&&(t.parts=d,this.setBody(s.create(t),t.addToWorld)),this},setBody:function(t,e){return void 0===e&&(e=!0),this.body&&this.removeBody(),this.body=t,this.body.gameObject=this,e&&this.world.add(this.body),this},removeBody:function(){return this.body&&(this.world.remove(this.body),this.body.gameObject=void 0,this.body=void 0),this},destroy:function(){this.removeBody(),this.tile.physics.matterBody=void 0}});t.exports=u},function(t,e,i){var n={};t.exports=n;var s=i(168),r=i(104),o=i(40);!function(){n.collisions=function(t,e){for(var i=[],a=e.pairs.table,h=e.metrics,l=0;l<t.length;l++){var u=t[l][0],c=t[l][1];if((!u.isStatic&&!u.isSleeping||!c.isStatic&&!c.isSleeping)&&(n.canCollide(u.collisionFilter,c.collisionFilter)&&(h.midphaseTests+=1,o.overlaps(u.bounds,c.bounds))))for(var d=u.parts.length>1?1:0;d<u.parts.length;d++)for(var f=u.parts[d],p=c.parts.length>1?1:0;p<c.parts.length;p++){var v=c.parts[p];if(f===u&&v===c||o.overlaps(f.bounds,v.bounds)){var g,y=r.id(f,v),m=a[y];g=m&&m.isActive?m.collision:null;var x=s.collides(f,v,g);h.narrowphaseTests+=1,x.reused&&(h.narrowReuseCount+=1),x.collided&&(i.push(x),h.narrowDetections+=1)}}}return i},n.canCollide=function(t,e){return t.group===e.group&&0!==t.group?t.group>0:0!=(t.mask&e.category)&&0!=(e.mask&t.category)}}()},function(t,e,i){var n={};t.exports=n;var s=i(38),r=i(39);!function(){n.collides=function(e,n,o){var a,h,l,u,c=!1;if(o){var d=e.parent,f=n.parent,p=d.speed*d.speed+d.angularSpeed*d.angularSpeed+f.speed*f.speed+f.angularSpeed*f.angularSpeed;c=o&&o.collided&&p<.2,u=o}else u={collided:!1,bodyA:e,bodyB:n};if(o&&c){var v=u.axisBody,g=v===e?n:e,y=[v.axes[o.axisNumber]];if(l=t(v.vertices,g.vertices,y),u.reused=!0,l.overlap<=0)return u.collided=!1,u}else{if(a=t(e.vertices,n.vertices,e.axes),a.overlap<=0)return u.collided=!1,u;if(h=t(n.vertices,e.vertices,n.axes),h.overlap<=0)return u.collided=!1,u;a.overlap<h.overlap?(l=a,u.axisBody=e):(l=h,u.axisBody=n),u.axisNumber=l.axisNumber}u.bodyA=e.id<n.id?e:n,u.bodyB=e.id<n.id?n:e,u.collided=!0,u.depth=l.overlap,u.parentA=u.bodyA.parent,u.parentB=u.bodyB.parent,e=u.bodyA,n=u.bodyB,r.dot(l.axis,r.sub(n.position,e.position))<0?u.normal={x:l.axis.x,y:l.axis.y}:u.normal={x:-l.axis.x,y:-l.axis.y},u.tangent=r.perp(u.normal),u.penetration=u.penetration||{},u.penetration.x=u.normal.x*u.depth,u.penetration.y=u.normal.y*u.depth;var m=i(e,n,u.normal),x=[];if(s.contains(e.vertices,m[0])&&x.push(m[0]),s.contains(e.vertices,m[1])&&x.push(m[1]),x.length<2){var b=i(n,e,r.neg(u.normal));s.contains(n.vertices,b[0])&&x.push(b[0]),x.length<2&&s.contains(n.vertices,b[1])&&x.push(b[1])}return x.length<1&&(x=[m[0]]),u.supports=x,u};var t=function(t,i,n){for(var s,o,a=r._temp[0],h=r._temp[1],l={overlap:Number.MAX_VALUE},u=0;u<n.length;u++){if(o=n[u],e(a,t,o),e(h,i,o),(s=Math.min(a.max-h.min,h.max-a.min))<=0)return l.overlap=s,l;s<l.overlap&&(l.overlap=s,l.axis=o,l.axisNumber=u)}return l},e=function(t,e,i){for(var n=r.dot(e[0],i),s=n,o=1;o<e.length;o+=1){var a=r.dot(e[o],i);a>s?s=a:a<n&&(n=a)}t.min=n,t.max=s},i=function(t,e,i){for(var n,s,o,a,h=Number.MAX_VALUE,l=r._temp[0],u=e.vertices,c=t.position,d=0;d<u.length;d++)s=u[d],l.x=s.x-c.x,l.y=s.y-c.y,(n=-r.dot(i,l))<h&&(h=n,o=s);return s=u[o.index-1>=0?o.index-1:u.length-1],l.x=s.x-c.x,l.y=s.y-c.y,h=-r.dot(i,l),a=s,s=u[(o.index+1)%u.length],l.x=s.x-c.x,l.y=s.y-c.y,n=-r.dot(i,l),n<h&&(a=s),[o,a]}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(371);n.Body=i(20),n.Composite=i(48),n.World=i(171),n.Detector=i(167),n.Grid=i(372),n.Pairs=i(373),n.Pair=i(104),n.Query=i(930),n.Resolver=i(374),n.SAT=i(168),n.Constraint=i(70),n.Common=i(16),n.Engine=i(375),n.Events=i(69),n.Sleeping=i(84),n.Plugin=i(170),n.Bodies=i(37),n.Composites=i(368),n.Axes=i(164),n.Bounds=i(40),n.Svg=i(932),n.Vector=i(39),n.Vertices=i(38),n.World.add=n.Composite.add,n.World.remove=n.Composite.remove,n.World.addComposite=n.Composite.addComposite,n.World.addBody=n.Composite.addBody,n.World.addConstraint=n.Composite.addConstraint,n.World.clear=n.Composite.clear,t.exports=n},function(t,e,i){var n={};t.exports=n;var s=i(16);!function(){n._registry={},n.register=function(t){if(n.isPlugin(t)||s.warn("Plugin.register:",n.toString(t),"does not implement all required fields."),t.name in n._registry){var e=n._registry[t.name],i=n.versionParse(t.version).number,r=n.versionParse(e.version).number;i>r?(s.warn("Plugin.register:",n.toString(e),"was upgraded to",n.toString(t)),n._registry[t.name]=t):i<r?s.warn("Plugin.register:",n.toString(e),"can not be downgraded to",n.toString(t)):t!==e&&s.warn("Plugin.register:",n.toString(t),"is already registered to different plugin object")}else n._registry[t.name]=t;return t},n.resolve=function(t){return n._registry[n.dependencyParse(t).name]},n.toString=function(t){return"string"==typeof t?t:(t.name||"anonymous")+"@"+(t.version||t.range||"0.0.0")},n.isPlugin=function(t){return t&&t.name&&t.version&&t.install},n.isUsed=function(t,e){return t.used.indexOf(e)>-1},n.isFor=function(t,e){var i=t.for&&n.dependencyParse(t.for);return!t.for||e.name===i.name&&n.versionSatisfies(e.version,i.range)},n.use=function(t,e){if(t.uses=(t.uses||[]).concat(e||[]),0===t.uses.length)return void s.warn("Plugin.use:",n.toString(t),"does not specify any dependencies to install.");for(var i=n.dependencies(t),r=s.topologicalSort(i),o=[],a=0;a<r.length;a+=1)if(r[a]!==t.name){var h=n.resolve(r[a]);h?n.isUsed(t,h.name)||(n.isFor(h,t)||(s.warn("Plugin.use:",n.toString(h),"is for",h.for,"but installed on",n.toString(t)+"."),h._warned=!0),h.install?h.install(t):(s.warn("Plugin.use:",n.toString(h),"does not specify an install function."),h._warned=!0),h._warned?(o.push("🔶 "+n.toString(h)),delete h._warned):o.push("✅ "+n.toString(h)),t.used.push(h.name)):o.push("❌ "+r[a])}o.length>0&&!h.silent&&s.info(o.join("  "))},n.dependencies=function(t,e){var i=n.dependencyParse(t),r=i.name;if(e=e||{},!(r in e)){t=n.resolve(t)||t,e[r]=s.map(t.uses||[],function(e){n.isPlugin(e)&&n.register(e);var r=n.dependencyParse(e),o=n.resolve(e);return o&&!n.versionSatisfies(o.version,r.range)?(s.warn("Plugin.dependencies:",n.toString(o),"does not satisfy",n.toString(r),"used by",n.toString(i)+"."),o._warned=!0,t._warned=!0):o||(s.warn("Plugin.dependencies:",n.toString(e),"used by",n.toString(i),"could not be resolved."),t._warned=!0),r.name});for(var o=0;o<e[r].length;o+=1)n.dependencies(e[r][o],e);return e}},n.dependencyParse=function(t){if(s.isString(t)){return/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/.test(t)||s.warn("Plugin.dependencyParse:",t,"is not a valid dependency string."),{name:t.split("@")[0],range:t.split("@")[1]||"*"}}return{name:t.name,range:t.range||t.version}},n.versionParse=function(t){/^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/.test(t)||s.warn("Plugin.versionParse:",t,"is not a valid version or range.");var e=t.split("-");t=e[0];var i=isNaN(Number(t[0])),n=i?t.substr(1):t,r=s.map(n.split("."),function(t){return Number(t)});return{isRange:i,version:n,range:t,operator:i?t[0]:"",parts:r,prerelease:e[1],number:1e8*r[0]+1e4*r[1]+r[2]}},n.versionSatisfies=function(t,e){e=e||"*";var i=n.versionParse(e),s=i.parts,r=n.versionParse(t),o=r.parts;if(i.isRange){if("*"===i.operator||"*"===t)return!0;if("~"===i.operator)return o[0]===s[0]&&o[1]===s[1]&&o[2]>=s[2];if("^"===i.operator)return s[0]>0?o[0]===s[0]&&r.number>=i.number:s[1]>0?o[1]===s[1]&&o[2]>=s[2]:o[2]===s[2]}return t===e||"*"===t}}()},function(t,e,i){var n={};t.exports=n;var s=i(48),r=(i(70),i(16));!function(){n.create=function(t){var e=s.create(),i={label:"World",gravity:{x:0,y:1,scale:.001},bounds:{min:{x:-1/0,y:-1/0},max:{x:1/0,y:1/0}}};return r.extend(e,i,t)}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(106),s=function(t,e,i){var s=n(t,e,!0,i),r=n(t,e-1,!0,i),o=n(t,e+1,!0,i),a=n(t-1,e,!0,i),h=n(t+1,e,!0,i),l=s&&s.collides;return l&&(s.faceBottom=!0,s.faceBottom=!0,s.faceLeft=!0,s.faceRight=!0),r&&r.collides&&(l&&(s.faceTop=!1),r.faceBottom=!l),o&&o.collides&&(l&&(s.faceBottom=!1),o.faceTop=!l),a&&a.collides&&(l&&(s.faceLeft=!1),a.faceRight=!l),h&&h.collides&&(l&&(s.faceRight=!1),h.faceLeft=!l),s&&!s.collides&&s.resetFaces(),s};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(50),s=i(85),r=i(172),o=i(49),a=function(t,e,i,a,h){if(!s(e,i,h))return null;void 0===a&&(a=!0);var l=h.data[i][e],u=l&&l.collides;if(t instanceof n)null===h.data[i][e]&&(h.data[i][e]=new n(h,t.index,e,i,t.width,t.height)),h.data[i][e].copy(t);else{var c=t;null===h.data[i][e]?h.data[i][e]=new n(h,c,e,i,h.tileWidth,h.tileHeight):h.data[i][e].index=c}var d=h.data[i][e],f=-1!==h.collideIndexes.indexOf(d.index);return o(d,f),a&&u!==d.collides&&r(e,i,h),d};t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=i.collideIndexes.indexOf(t);e&&-1===n?i.collideIndexes.push(t):e||-1===n||i.collideIndexes.splice(n,1)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=i(86),r=i(87),o=i(50),a=function(t,e,i,a,h){for(var l=new s({tileWidth:i,tileHeight:a}),u=new r({name:t,tileWidth:i,tileHeight:a,format:n.ARRAY_2D,layers:[l]}),c=[],d=e.length,f=0,p=0;p<e.length;p++){c[p]=[];for(var v=e[p],g=0;g<v.length;g++){var y=parseInt(v[g],10);Number.isNaN(y)||-1===y?c[p][g]=h?null:new o(l,-1,g,p,i,a):c[p][g]=new o(l,y,g,p,i,a)}0===f&&(f=v.length)}return u.width=l.width=f,u.height=l.height=d,u.widthInPixels=l.widthInPixels=f*i,u.heightInPixels=l.heightInPixels=d*a,l.data=c,u};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=i(87),r=i(380),o=i(388),a=function(t,e,i,a,h,l,u,c){void 0===i&&(i=32),void 0===a&&(a=32),void 0===h&&(h=10),void 0===l&&(l=10),void 0===c&&(c=!1);var d=null;if(Array.isArray(u)){d=r(void 0!==e?e:"map",n.ARRAY_2D,u,i,a,c)}else if(void 0!==e){var f=t.cache.tilemap.get(e);f?d=r(e,f.format,f.data,i,a,c):console.warn("No map data found for key "+e)}return null===d&&(d=new s({tileWidth:i,tileHeight:a,width:h,height:l})),new o(t,d)};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(4),s=function(t){var e=n(t,"targets",null);return null===e?e:("function"==typeof e&&(e=e.call()),Array.isArray(e)||(e=[e]),e)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
function i(t){return!!t.getStart&&"function"==typeof t.getStart}function n(t){return!!t.getEnd&&"function"==typeof t.getEnd}function s(t){return i(t)||n(t)}var r=function(t,e){var o,a=function(t,e,i){return i},h=function(t,e,i){return i},l=typeof e;if("number"===l)a=function(){return e};else if("string"===l){var u=e[0],c=parseFloat(e.substr(2));switch(u){case"+":a=function(t,e,i){return i+c};break;case"-":a=function(t,e,i){return i-c};break;case"*":a=function(t,e,i){return i*c};break;case"/":a=function(t,e,i){return i/c};break;default:a=function(){return parseFloat(e)}}}else"function"===l?a=e:"object"===l&&s(e)?(n(e)&&(a=e.getEnd),i(e)&&(h=e.getStart)):e.hasOwnProperty("value")&&(o=r(t,e.value));return o||(o={getEnd:a,getStart:h}),o};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={targets:null,delay:0,duration:1e3,ease:"Power0",easeParams:null,hold:0,repeat:0,repeatDelay:0,yoyo:!1,flipX:!1,flipY:!1};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(14),r=i(9),o=i(99),a=new n({initialize:function(t,e,i){this.parent=t,this.parentIsTimeline=t.hasOwnProperty("isTimeline"),this.data=e,this.totalData=e.length,this.targets=i,this.totalTargets=i.length,this.useFrames=!1,this.timeScale=1,this.loop=0,this.loopDelay=0,this.loopCounter=0,this.completeDelay=0,this.countdown=0,this.offset=0,this.calculatedOffset=0,this.state=o.PENDING_ADD,this._pausedState=o.PENDING_ADD,this.paused=!1,this.elapsed=0,this.totalElapsed=0,this.duration=0,this.progress=0,this.totalDuration=0,this.totalProgress=0,this.callbacks={onComplete:null,onLoop:null,onRepeat:null,onStart:null,onUpdate:null,onYoyo:null},this.callbackScope},getValue:function(){return this.data[0].current},setTimeScale:function(t){return this.timeScale=t,this},getTimeScale:function(){return this.timeScale},isPlaying:function(){return this.state===o.ACTIVE},isPaused:function(){return this.state===o.PAUSED},hasTarget:function(t){return-1!==this.targets.indexOf(t)},updateTo:function(t,e,i){for(var n=0;n<this.totalData;n++){var s=this.data[n];if(s.key===t){s.end=e,i&&(s.start=s.current);break}}return this},restart:function(){this.stop(),this.play()},calcDuration:function(){for(var t=0,e=this.data,i=0;i<this.totalData;i++){var n=e[i];n.t1=n.duration+n.hold,n.yoyo&&(n.t1+=n.duration),n.t2=n.t1+n.repeatDelay,n.totalDuration=n.delay+n.t1,-1===n.repeat?n.totalDuration+=999999999999*n.t2:n.repeat>0&&(n.totalDuration+=n.t2*n.repeat),n.totalDuration>t&&(t=n.totalDuration)}this.duration=t,this.loopCounter=-1===this.loop?999999999999:this.loop,this.loopCounter>0?this.totalDuration=this.duration+this.completeDelay+(this.duration+this.loopDelay)*this.loopCounter:this.totalDuration=this.duration+this.completeDelay},init:function(){for(var t=this.data,e=this.totalTargets,i=0;i<this.totalData;i++){var n=t[i],s=n.target,r=n.gen;n.delay=r.delay(i,e,s),n.duration=r.duration(i,e,s),n.hold=r.hold(i,e,s),n.repeat=r.repeat(i,e,s),n.repeatDelay=r.repeatDelay(i,e,s)}return this.calcDuration(),this.progress=0,this.totalProgress=0,this.elapsed=0,this.totalElapsed=0,!(this.paused&&!this.parentIsTimeline)||(this.state=o.PAUSED,!1)},nextState:function(){if(this.loopCounter>0){this.elapsed=0,this.progress=0,this.loopCounter--;var t=this.callbacks.onLoop;t&&(t.params[1]=this.targets,t.func.apply(t.scope,t.params)),this.resetTweenData(!0),this.loopDelay>0?(this.countdown=this.loopDelay,this.state=o.LOOP_DELAY):this.state=o.ACTIVE}else if(this.completeDelay>0)this.countdown=this.completeDelay,this.state=o.COMPLETE_DELAY;else{var e=this.callbacks.onComplete;e&&(e.params[1]=this.targets,e.func.apply(e.scope,e.params)),this.state=o.PENDING_REMOVE}},pause:function(){if(this.state!==o.PAUSED)return this.paused=!0,this._pausedState=this.state,this.state=o.PAUSED,this},play:function(t){if(this.state!==o.ACTIVE){this.state!==o.PENDING_REMOVE&&this.state!==o.REMOVED||(this.init(),this.parent.makeActive(this),t=!0);var e=this.callbacks.onStart;this.parentIsTimeline?(this.resetTweenData(t),0===this.calculatedOffset?(e&&(e.params[1]=this.targets,e.func.apply(e.scope,e.params)),this.state=o.ACTIVE):(this.countdown=this.calculatedOffset,this.state=o.OFFSET_DELAY)):this.paused?(this.paused=!1,this.parent.makeActive(this)):(this.resetTweenData(t),this.state=o.ACTIVE,e&&(e.params[1]=this.targets,e.func.apply(e.scope,e.params)))}},resetTweenData:function(t){for(var e=this.data,i=0;i<this.totalData;i++){var n=e[i];n.progress=0,n.elapsed=0,n.repeatCounter=-1===n.repeat?999999999999:n.repeat,t?(n.start=n.getStartValue(n.target,n.key,n.start),n.end=n.getEndValue(n.target,n.key,n.end),n.current=n.start,n.state=o.PLAYING_FORWARD):n.delay>0?(n.elapsed=n.delay,n.state=o.DELAY):n.state=o.PENDING_RENDER}},resume:function(){return this.state===o.PAUSED&&(this.paused=!1,this.state=this._pausedState),this},seek:function(t){for(var e=this.data,i=0;i<this.totalData;i++){var n=this.totalDuration*t,s=e[i],r=0,o=0;n<=s.delay?(r=0,o=0):n>=s.totalDuration?(r=1,o=s.duration):n>s.delay&&n<=s.t1?(n=Math.max(0,n-s.delay),r=n/s.t1,o=s.duration*r):n>s.t1&&n<s.totalDuration&&(n-=s.delay,n-=s.t1,(n=n/s.t2%1*s.t2)>s.repeatDelay&&(r=n/s.t1,o=s.duration*r)),s.progress=r,s.elapsed=o;var a=s.ease(s.progress);s.current=s.start+(s.end-s.start)*a,s.target[s.key]=s.current}},setCallback:function(t,e,i,n){return this.callbacks[t]={func:e,scope:n,params:i},this},stop:function(t){void 0!==t&&this.seek(t),this.state=o.PENDING_REMOVE},update:function(t,e){if(this.state===o.PAUSED)return!1;switch(this.useFrames&&(e=1*this.parent.timeScale),e*=this.timeScale,this.elapsed+=e,this.progress=Math.min(this.elapsed/this.duration,1),this.totalElapsed+=e,this.totalProgress=Math.min(this.totalElapsed/this.totalDuration,1),this.state){case o.ACTIVE:for(var i=!1,n=0;n<this.totalData;n++)this.updateTweenData(this,this.data[n],e)&&(i=!0);i||this.nextState();break;case o.LOOP_DELAY:this.countdown-=e,this.countdown<=0&&(this.state=o.ACTIVE);break;case o.OFFSET_DELAY:if(this.countdown-=e,this.countdown<=0){var s=this.callbacks.onStart;s&&(s.params[1]=this.targets,s.func.apply(s.scope,s.params)),this.state=o.ACTIVE}break;case o.COMPLETE_DELAY:if(this.countdown-=e,this.countdown<=0){var r=this.callbacks.onComplete;r&&r.func.apply(r.scope,r.params),this.state=o.PENDING_REMOVE}}return this.state===o.PENDING_REMOVE},setStateFromEnd:function(t,e,i){if(e.yoyo){e.elapsed=i,e.progress=i/e.duration,e.flipX&&e.target.toggleFlipX(),e.flipY&&e.target.toggleFlipY();var n=t.callbacks.onYoyo;return n&&(n.params[1]=e.target,n.func.apply(n.scope,n.params)),e.start=e.getStartValue(e.target,e.key,e.start),o.PLAYING_BACKWARD}if(e.repeatCounter>0){e.repeatCounter--,e.elapsed=i,e.progress=i/e.duration,e.flipX&&e.target.toggleFlipX(),e.flipY&&e.target.toggleFlipY();var s=t.callbacks.onRepeat;return s&&(s.params[1]=e.target,s.func.apply(s.scope,s.params)),e.start=e.getStartValue(e.target,e.key,e.start),e.end=e.getEndValue(e.target,e.key,e.start),e.repeatDelay>0?(e.elapsed=e.repeatDelay-i,e.current=e.start,e.target[e.key]=e.current,o.REPEAT_DELAY):o.PLAYING_FORWARD}return o.COMPLETE},setStateFromStart:function(t,e,i){if(e.repeatCounter>0){e.repeatCounter--,e.elapsed=i,e.progress=i/e.duration,e.flipX&&e.target.toggleFlipX(),e.flipY&&e.target.toggleFlipY();var n=t.callbacks.onRepeat;return n&&(n.params[1]=e.target,n.func.apply(n.scope,n.params)),e.end=e.getEndValue(e.target,e.key,e.start),e.repeatDelay>0?(e.elapsed=e.repeatDelay-i,e.current=e.start,e.target[e.key]=e.current,o.REPEAT_DELAY):o.PLAYING_FORWARD}return o.COMPLETE},updateTweenData:function(t,e,i){switch(e.state){case o.PLAYING_FORWARD:case o.PLAYING_BACKWARD:if(!e.target){e.state=o.COMPLETE;break}var n=e.elapsed,s=e.duration,r=0;n+=i,n>s&&(r=n-s,n=s);var a,h=e.state===o.PLAYING_FORWARD,l=n/s;a=h?e.ease(l):e.ease(1-l),e.current=e.start+(e.end-e.start)*a,e.target[e.key]=e.current,e.elapsed=n,e.progress=l;var u=t.callbacks.onUpdate;u&&(u.params[1]=e.target,u.func.apply(u.scope,u.params)),1===l&&(h?e.hold>0?(e.elapsed=e.hold-r,e.state=o.HOLD_DELAY):e.state=this.setStateFromEnd(t,e,r):e.state=this.setStateFromStart(t,e,r));break;case o.DELAY:e.elapsed-=i,e.elapsed<=0&&(e.elapsed=Math.abs(e.elapsed),e.state=o.PENDING_RENDER);break;case o.REPEAT_DELAY:e.elapsed-=i,e.elapsed<=0&&(e.elapsed=Math.abs(e.elapsed),e.state=o.PLAYING_FORWARD);break;case o.HOLD_DELAY:e.elapsed-=i,e.elapsed<=0&&(e.state=this.setStateFromEnd(t,e,Math.abs(e.elapsed)));break;case o.PENDING_RENDER:e.target?(e.start=e.getStartValue(e.target,e.key,e.target[e.key]),e.end=e.getEndValue(e.target,e.key,e.start),e.current=e.start,e.target[e.key]=e.start,e.state=o.PLAYING_FORWARD):e.state=o.COMPLETE}return e.state!==o.COMPLETE}});a.TYPES=["onComplete","onLoop","onRepeat","onStart","onUpdate","onYoyo"],r.register("tween",function(t){return this.scene.sys.tweens.add(t)}),s.register("tween",function(t){return this.scene.sys.tweens.create(t)}),t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s,r,o,a,h,l,u,c,d){return{target:t,key:e,getEndValue:i,getStartValue:n,ease:s,duration:0,totalDuration:0,delay:0,yoyo:a,hold:0,repeat:0,repeatDelay:0,flipX:c,flipY:d,progress:0,elapsed:0,repeatCounter:0,start:0,current:0,end:0,t1:0,t2:0,gen:{delay:r,duration:o,hold:h,repeat:l,repeatDelay:u},state:0}};t.exports=i},function(t,e){function i(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function s(t){if(u===setTimeout)return setTimeout(t,0);if((u===i||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function r(t){if(c===clearTimeout)return clearTimeout(t);if((c===n||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{return c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}function o(){v&&f&&(v=!1,f.length?p=f.concat(p):g=-1,p.length&&a())}function a(){if(!v){var t=s(o);v=!0;for(var e=p.length;e;){for(f=p,p=[];++g<e;)f&&f[g].run();g=-1,e=p.length}f=null,v=!1,r(t)}}function h(t,e){this.fun=t,this.array=e}function l(){}var u,c,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:i}catch(t){u=i}try{c="function"==typeof clearTimeout?clearTimeout:n}catch(t){c=n}}();var f,p=[],v=!1,g=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];p.push(new h(t,e)),1!==p.length||v||s(a)},h.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"PlayScene",{enumerable:!0,get:function(){return n.default}});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(406))},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){return n<<24|t<<16|e<<8|i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=t.toString(16);return 1===e.length?"0"+e:e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(42),s=function(t){var e=new n;t=t.replace(/^(?:#|0x)?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,i,n){return e+e+i+i+n+n});var i=/^(?:#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);if(i){var s=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16);e.setTo(s,r,o)}return e};t.exports=s},function(t,e,i){(function(t){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var e=function(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t};t.export=e}).call(e,i(409)(t))},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(113),s=function(t,e,i){void 0===e&&(e=1),void 0===i&&(i=1);var s=Math.floor(6*t),r=6*t-s,o=Math.floor(i*(1-e)*255),a=Math.floor(i*(1-r*e)*255),h=Math.floor(i*(1-(1-r)*e)*255);i=Math.floor(i*=255);var l={r:i,g:i,b:i,color:0},u=s%6;return 0===u?(l.g=h,l.b=o):1===u?(l.r=a,l.b=o):2===u?(l.r=o,l.b=h):3===u?(l.r=o,l.g=a):4===u?(l.r=h,l.g=o):5===u&&(l.g=o,l.b=a),l.color=n(l.r,l.g,l.b),l};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(42),s=i(190),r=function(t){var e=s(t);return new n(e.r,e.g,e.b,e.a)};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t>16777215?{a:t>>>24,r:t>>16&255,g:t>>8&255,b:255&t}:{a:255,r:t>>16&255,g:t>>8&255,b:255&t}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(192),s=function(t,e){var i=t.length-1,s=i*e,r=Math.floor(s);return e<0?n(t[0],t[1],s):e>1?n(t[i],t[i-1],i-s):n(t[r],t[r+1>i?i:r+1],s-r)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return(e-t)*i+t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(42),s=function(t){return new n(t.r,t.g,t.b,t.a)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(42),s=function(t){var e=new n,i=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?))?\s*\)$/.exec(t.toLowerCase());if(i){var s=parseInt(i[1],10),r=parseInt(i[2],10),o=parseInt(i[3],10),a=void 0!==i[4]?parseFloat(i[4]):1;e.setTo(s,r,o,255*a)}return e};t.exports=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(t){return t&&t.__esModule?t:{default:t}}(i(197)),s=Object.freeze({type:n.default.AUTO,width:768,height:432,disableContextMenu:!0}),r=s;e.default=r},function(t,e,i){(function(e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
i(415);var n=i(24),s=i(25),r={Actions:i(200),Animation:i(487),Cache:i(488),Cameras:i(489),Class:i(0),Create:i(500),Curves:i(506),Data:i(509),Display:i(511),DOM:i(536),EventEmitter:i(537),Game:i(538),GameObjects:i(583),Geom:i(312),Input:i(799),Loader:i(813),Math:i(831),Physics:i(873),Scene:i(271),Scenes:i(936),Sound:i(938),Structs:i(939),Textures:i(940),Tilemaps:i(942),Time:i(991),Tweens:i(993),Utils:i(997)};r=s(!1,r,n),t.exports=r,e.Phaser=r}).call(e,i(198))},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){if("object"!=typeof t||t.nodeType||t===t.window)return!1;try{if(t.constructor&&!{}.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Angle:i(425),Call:i(426),GetFirst:i(427),GridAlign:i(428),IncAlpha:i(446),IncX:i(447),IncXY:i(448),IncY:i(449),PlaceOnCircle:i(450),PlaceOnEllipse:i(451),PlaceOnLine:i(452),PlaceOnRectangle:i(453),PlaceOnTriangle:i(454),PlayAnimation:i(455),RandomCircle:i(456),RandomEllipse:i(457),RandomLine:i(458),RandomRectangle:i(459),RandomTriangle:i(460),Rotate:i(461),RotateAround:i(462),RotateAroundDistance:i(463),ScaleX:i(464),ScaleXY:i(465),ScaleY:i(466),SetAlpha:i(467),SetBlendMode:i(468),SetDepth:i(469),SetHitArea:i(470),SetOrigin:i(471),SetRotation:i(472),SetScale:i(473),SetScaleX:i(474),SetScaleY:i(475),SetTint:i(476),SetVisible:i(477),SetX:i(478),SetXY:i(479),SetY:i(480),ShiftPosition:i(481),Shuffle:i(482),SmootherStep:i(483),SmoothStep:i(484),Spread:i(485),ToggleVisible:i(486)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(202),s=[];s[n.BOTTOM_CENTER]=i(203),s[n.BOTTOM_LEFT]=i(204),s[n.BOTTOM_RIGHT]=i(205),s[n.CENTER]=i(206),s[n.LEFT_CENTER]=i(208),s[n.RIGHT_CENTER]=i(209),s[n.TOP_CENTER]=i(210),s[n.TOP_LEFT]=i(211),s[n.TOP_RIGHT]=i(212);var r=function(t,e,i,n,r){return s[i](t,e,n,r)};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={TOP_LEFT:0,TOP_CENTER:1,TOP_RIGHT:2,LEFT_TOP:3,LEFT_CENTER:4,LEFT_BOTTOM:5,CENTER:6,RIGHT_TOP:7,RIGHT_CENTER:8,RIGHT_BOTTOM:9,BOTTOM_LEFT:10,BOTTOM_CENTER:11,BOTTOM_RIGHT:12};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=i(52),r=i(27),o=i(53),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)+i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=i(28),r=i(27),o=i(29),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)-i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=i(30),r=i(27),o=i(31),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)+i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(207),s=i(52),r=i(55),o=function(t,e,i,o){return void 0===i&&(i=0),void 0===o&&(o=0),n(t,s(e)+i,r(e)+o),t};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(53),s=i(54),r=function(t,e,i){return n(t,e),s(t,i)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(55),s=i(28),r=i(54),o=i(29),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)-i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(55),s=i(30),r=i(54),o=i(31),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)+i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(52),s=i(32),r=i(53),o=i(33),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,n(e)+i),o(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(28),s=i(32),r=i(29),o=i(33),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,n(e)-i),o(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(30),s=i(32),r=i(31),o=i(33),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,n(e)+i),o(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(115),s=i(73),r=i(15),o=i(5),a=function(t,e,i){void 0===i&&(i=new o);var a=s(e,0,r.PI2);return n(t,a,i)};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(215),s=i(115),r=i(73),o=i(15),a=function(t,e,i,a){void 0===a&&(a=[]),e||(e=n(t)/i);for(var h=0;h<e;h++){var l=r(h/e,0,o.PI2);a.push(s(t,l))}return a};t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.PI*t.radius*2};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.parent=t,this.animationManager=t.scene.sys.anims,this.animationManager.once("remove",this.remove,this),this.isPlaying=!1,this.currentAnim=null,this.currentFrame=null,this._timeScale=1,this.frameRate=0,this.duration=0,this.msPerFrame=0,this.skipMissedFrames=!0,this._delay=0,this._repeat=0,this._repeatDelay=0,this._yoyo=!1,this.forward=!0,this.accumulator=0,this.nextTick=0,this.repeatCounter=0,this.pendingRepeat=!1,this._paused=!1,this._wasPlaying=!1,this._callbackArgs=[t,null],this._updateParams=[]},delay:function(t){return void 0===t?this._delay:(this._delay=t,this)},delayedPlay:function(t,e,i){return this.play(e,!0,i),this.nextTick+=1e3*t,this},getCurrentKey:function(){if(this.currentAnim)return this.currentAnim.key},load:function(t,e){return void 0===e&&(e=0),this.isPlaying&&this.stop(),this.animationManager.load(this,t,e),this},pause:function(t){return this._paused||(this._paused=!0,this._wasPlaying=this.isPlaying,this.isPlaying=!1),void 0!==t&&this.updateFrame(t),this},paused:function(t){return void 0!==t?t?this.pause():this.resume():this._paused},play:function(t,e,i){if(void 0===e&&(e=!1),void 0===i&&(i=0),e&&this.isPlaying&&this.currentAnim.key===t)return this;this.load(t,i);var n=this.currentAnim;return this.repeatCounter=-1===this._repeat?Number.MAX_VALUE:this._repeat,n.getFirstTick(this),this.forward=!0,this.isPlaying=!0,this.pendingRepeat=!1,n.showOnStart&&(this.parent.visible=!0),n.onStart&&n.onStart.apply(n.callbackScope,this._callbackArgs.concat(n.onStartParams)),this},progress:function(t){if(void 0===t){var e=this.currentFrame.progress;return this.forward||(e=1-e),e}return this},remove:function(t){if(void 0===t&&(t=this.currentAnim),this.isPlaying&&t.key===this.currentAnim.key){this.stop();var e=this.parent,i=this.currentAnim.frames[0];this.currentFrame=i,e.texture=i.frame.texture,e.frame=i.frame}},repeat:function(t){return void 0===t?this._repeat:(this._repeat=t,this.repeatCounter=0,this)},repeatDelay:function(t){return void 0===t?this._repeatDelay:(this._repeatDelay=t,this)},restart:function(t){return void 0===t&&(t=!1),this.currentAnim.getFirstTick(this,t),this.forward=!0,this.isPlaying=!0,this.pendingRepeat=!1,this._paused=!1,this.updateFrame(this.currentAnim.frames[0]),this},resume:function(t){return this._paused&&(this._paused=!1,this.isPlaying=this._wasPlaying),void 0!==t&&this.updateFrame(t),this},stop:function(t){void 0===t&&(t=!1),this.isPlaying=!1;var e=this.currentAnim;return t&&e.onComplete&&e.onComplete.apply(e.callbackScope,this._callbackArgs.concat(e.onCompleteParams)),this},timeScale:function(t){return void 0===t?this._timeScale:(this._timeScale=t,this)},totalFrames:function(){return this.currentAnim.frames.length},totalProgres:function(){},update:function(t,e){this.isPlaying&&!this.currentAnim.paused&&(this.accumulator+=e*this._timeScale,this.accumulator>=this.nextTick&&this.currentAnim.setFrame(this))},updateFrame:function(t){var e=this.parent;if(this.currentFrame=t,e.texture=t.frame.texture,e.frame=t.frame,this.isPlaying){t.setAlpha&&(e.alpha=t.alpha);var i=this.currentAnim;i.onUpdate&&i.onUpdate.apply(i.callbackScope,this._updateParams),t.onUpdate&&t.onUpdate(e,t)}},yoyo:function(t){return void 0===t?this._yoyo:(this._yoyo=t,this)},destroy:function(){}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(117),s=i(90),r=function(t,e,i,r){void 0===r&&(r=[]),e||(e=s(t)/i);for(var o=0;o<e;o++){var a=o/e;r.push(n(t,a))}return r};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=Math.cos(n),r=Math.sin(n),o=t.x-e,a=t.y-i;return t.x=o*s-a*r+e,t.y=o*r+a*s+i,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n,s,r){void 0===t&&(t=1),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=1),void 0===s&&(s=0),void 0===r&&(r=0),this.matrix=new Float32Array([t,e,i,n,s,r,0,0,1]),this.decomposedMatrix={translateX:0,translateY:0,scaleX:1,scaleY:1,rotation:0}},loadIdentity:function(){var t=this.matrix;return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,this},translate:function(t,e){var i=this.matrix;return i[4]=i[0]*t+i[2]*e+i[4],i[5]=i[1]*t+i[3]*e+i[5],this},scale:function(t,e){var i=this.matrix;return i[0]*=t,i[1]*=t,i[2]*=e,i[3]*=e,this},rotate:function(t){var e=Math.sin(t),i=Math.cos(t);return this.transform(i,e,-e,i,0,0)},multiply:function(t){var e=this.matrix,i=t.matrix,n=e[0],s=e[1],r=e[2],o=e[3],a=e[4],h=e[5],l=i[0],u=i[1],c=i[2],d=i[3],f=i[4],p=i[5];return e[0]=l*n+u*r,e[1]=l*s+u*o,e[2]=c*n+d*r,e[3]=c*s+d*o,e[4]=f*n+p*r+a,e[5]=f*s+p*o+h,this},transform:function(t,e,i,n,s,r){var o=this.matrix,a=o[0],h=o[1],l=o[2],u=o[3],c=o[4],d=o[5];return o[0]=t*a+e*l,o[1]=t*h+e*u,o[2]=i*a+n*l,o[3]=i*h+n*u,o[4]=s*a+r*l+c,o[5]=s*h+r*u+d,this},transformPoint:function(t,e,i){void 0===i&&(i={x:0,y:0});var n=this.matrix,s=n[0],r=n[1],o=n[2],a=n[3],h=n[4],l=n[5];return i.x=t*s+e*o+h,i.y=t*r+e*a+l,i},invert:function(){var t=this.matrix,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=e*s-i*n;return t[0]=s/a,t[1]=-i/a,t[2]=-n/a,t[3]=e/a,t[4]=(n*o-s*r)/a,t[5]=-(e*o-i*r)/a,this},setTransform:function(t,e,i,n,s,r){var o=this.matrix;return o[0]=t,o[1]=e,o[2]=i,o[3]=n,o[4]=s,o[5]=r,this},decomposeMatrix:function(){var t=this.decomposedMatrix,e=this.matrix,i=e[0],n=e[1],s=e[2],r=e[3],o=i*i,a=n*n,h=s*s,l=r*r,u=Math.sqrt(o+h),c=Math.sqrt(a+l);return t.translateX=e[4],t.translateY=e[5],t.scaleX=u,t.scaleY=c,t.rotation=Math.acos(i/u)*(Math.atan(-s/i)<0?-1:1),t},applyITRS:function(t,e,i,n,s){var r=this.matrix,o=Math.sin(i),a=Math.cos(i);return r[4]=t,r[5]=e,r[0]=a*n,r[1]=-o*n,r[2]=o*s,r[3]=a*s,this}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(90),s=i(5),r=function(t,e,i,r){if(void 0===r&&(r=[]),!e&&!i)return r;e?i=Math.round(n(t)/e):e=n(t)/i;for(var o=t.x,a=t.y,h=0,l=0;l<i;l++)switch(r.push(new s(o,a)),h){case 0:o+=e,o>=t.right&&(h=1,a+=o-t.right,o=t.right);break;case 1:a+=e,a>=t.bottom&&(h=2,o-=a-t.bottom,a=t.bottom);break;case 2:o-=e,o<=t.left&&(h=3,a-=t.left-o,o=t.left);break;case 3:a-=e,a<=t.top&&(h=0,a=t.top)}return r};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){void 0===e&&(e=1);for(var i=null,n=0;n<e;n++)i=t.shift(),t.push(i);return i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){void 0===e&&(e=1);for(var i=null,n=0;n<e;n++)i=t.pop(),t.unshift(i);return i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===e&&(e=1),void 0===i&&(i=[]);var n=Math.round(t.x1),s=Math.round(t.y1),r=Math.round(t.x2),o=Math.round(t.y2),a=Math.abs(r-n),h=Math.abs(o-s),l=n<r?1:-1,u=s<o?1:-1,c=a-h;i.push({x:n,y:s});for(var d=1;n!==r||s!==o;){var f=c<<1;f>-h&&(c-=h,n+=l),f<a&&(c+=a,s+=u),d%e==0&&i.push({x:n,y:s}),d++}return i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return(t=Math.max(0,Math.min(1,(t-e)/(i-e))))*t*t*(t*(6*t-15)+10)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return(t=Math.max(0,Math.min(1,(t-e)/(i-e))))*t*(3-2*t)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(227),r=i(4),o=new n({initialize:function(t,e,i){this.manager=t,this.key=e,this.type="frame",this.frames=this.getFrames(t.textureManager,r(i,"frames",[]),r(i,"defaultTextureKey",null)),this.frameRate=r(i,"frameRate",null),this.duration=r(i,"duration",null),null===this.duration&&null===this.frameRate?(this.frameRate=24,this.duration=this.frameRate/this.frames.length):this.duration&&null===this.frameRate?this.frameRate=this.frames.length/this.duration:this.duration=this.frames.length/this.frameRate,this.msPerFrame=1e3/this.frameRate,this.skipMissedFrames=r(i,"skipMissedFrames",!0),this.delay=r(i,"delay",0),this.repeat=r(i,"repeat",0),this.repeatDelay=r(i,"repeatDelay",0),this.yoyo=r(i,"yoyo",!1),this.showOnStart=r(i,"showOnStart",!1),this.hideOnComplete=r(i,"hideOnComplete",!1),this.callbackScope=r(i,"callbackScope",this),this.onStart=r(i,"onStart",!1),this.onStartParams=r(i,"onStartParams",[]),this.onRepeat=r(i,"onRepeat",!1),this.onRepeatParams=r(i,"onRepeatParams",[]),this.onUpdate=r(i,"onUpdate",!1),this.onUpdateParams=r(i,"onUpdateParams",[]),this.onComplete=r(i,"onComplete",!1),this.onCompleteParams=r(i,"onCompleteParams",[]),this.paused=!1,this.manager.on("pauseall",this.pause.bind(this)),this.manager.on("resumeall",this.resume.bind(this))},addFrame:function(t){return this.addFrameAt(this.frames.length,t)},addFrameAt:function(t,e){var i=this.getFrames(this.manager.textureManager,e);if(i.length>0){if(0===t)this.frames=i.concat(this.frames);else if(t===this.frames.length)this.frames=this.frames.concat(i);else{var n=this.frames.slice(0,t),s=this.frames.slice(t);this.frames=n.concat(i,s)}this.updateFrameSequence()}return this},checkFrame:function(t){return t<this.frames.length},completeAnimation:function(t){this.hideOnComplete&&(t.parent.visible=!1),t.stop(!0)},getFirstTick:function(t,e){void 0===e&&(e=!0),t.accumulator=0,t.nextTick=t.msPerFrame+t.currentFrame.duration,e&&(t.nextTick+=1e3*t._delay)},getFrameAt:function(t){return this.frames[t]},getFrames:function(t,e,i){var n,o,a,h,l=[],u=1;if("string"==typeof e){h=e;var c=t.get(h),d=c.getFrameNames();e=[],d.forEach(function(t,i){e.push({key:h,frame:i})})}if(!Array.isArray(e)||0===e.length)return l;for(a=0;a<e.length;a++){var f=e[a],p=r(f,"key",i);if(p){var v=r(f,"frame",0),g=t.getFrame(p,v);o=new s(p,v,u,g),o.duration=r(f,"duration",0),o.onUpdate=r(f,"onUpdate",null),o.isFirst=!n,n&&(n.nextFrame=o,o.prevFrame=n),l.push(o),n=o,u++}}if(l.length>0){o.isLast=!0,o.nextFrame=l[0],l[0].prevFrame=o;var y=1/(l.length-1);for(a=0;a<l.length;a++)l[a].progress=a*y}return l},getNextTick:function(t){t.accumulator-=t.nextTick,t.nextTick=t.msPerFrame+t.currentFrame.duration},load:function(t,e){e>=this.frames.length&&(e=0),t.currentAnim!==this&&(t.currentAnim=this,t._timeScale=1,t.frameRate=this.frameRate,t.duration=this.duration,t.msPerFrame=this.msPerFrame,t.skipMissedFrames=this.skipMissedFrames,t._delay=this.delay,t._repeat=this.repeat,t._repeatDelay=this.repeatDelay,t._yoyo=this.yoyo,t._callbackArgs[1]=this,t._updateParams=t._callbackArgs.concat(this.onUpdateParams)),t.updateFrame(this.frames[e])},nextFrame:function(t){var e=t.currentFrame;e.isLast?this.yoyo?(t.forward=!1,t.updateFrame(e.prevFrame),this.getNextTick(t)):t.repeatCounter>0?this.repeatAnimation(t):this.completeAnimation(t):(t.updateFrame(e.nextFrame),this.getNextTick(t))},previousFrame:function(t){var e=t.currentFrame;e.isFirst?t.repeatCounter>0?this.repeatAnimation(t):this.completeAnimation(t):(t.updateFrame(e.prevFrame),this.getNextTick(t))},removeFrame:function(t){var e=this.frames.indexOf(t);return-1!==e&&this.removeFrameAt(e),this},removeFrameAt:function(t){return this.frames.splice(t,1),this.updateFrameSequence(),this},repeatAnimation:function(t){t._repeatDelay>0&&!1===t.pendingRepeat?(t.pendingRepeat=!0,t.accumulator-=t.nextTick,t.nextTick+=1e3*t._repeatDelay):(t.repeatCounter--,t.forward=!0,t.updateFrame(t.currentFrame.nextFrame),this.getNextTick(t),t.pendingRepeat=!1,this.onRepeat&&this.onRepeat.apply(this.callbackScope,t._callbackArgs.concat(this.onRepeatParams)))},setFrame:function(t){t.forward?this.nextFrame(t):this.previousFrame(t)},toJSON:function(){var t={key:this.key,type:this.type,frames:[],frameRate:this.frameRate,duration:this.duration,skipMissedFrames:this.skipMissedFrames,delay:this.delay,repeat:this.repeat,repeatDelay:this.repeatDelay,yoyo:this.yoyo,showOnStart:this.showOnStart,hideOnComplete:this.hideOnComplete};return this.frames.forEach(function(e){t.frames.push(e.toJSON())}),t},updateFrameSequence:function(){for(var t=this.frames.length,e=1/(t-1),i=0;i<t;i++){var n=this.frames[i];n.index=i+1,n.isFirst=!1,n.isLast=!1,n.progress=i*e,0===i?(n.isFirst=!0,n.isLast=1===t,n.prevFrame=this.frames[t-1],n.nextFrame=this.frames[i+1]):i===t-1?(n.isLast=!0,n.prevFrame=this.frames[t-2],n.nextFrame=this.frames[0]):t>1&&(n.prevFrame=this.frames[i-1],n.nextFrame=this.frames[i+1])}return this},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this},destroy:function(){}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n){this.textureKey=t,this.textureFrame=e,this.index=i,this.frame=n,this.isFirst=!1,this.isLast=!1,this.prevFrame=null,this.nextFrame=null,this.duration=0,this.progress=0,this.onUpdate=null},toJSON:function(){return{key:this.textureKey,frame:this.textureFrame,duration:this.duration}},destroy:function(){this.frame=void 0,this.onUpdate=void 0}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(226),s=i(0),r=i(127),o=i(13),a=i(4),h=i(229),l=new s({Extends:o,initialize:function(t){o.call(this),this.game=t,this.textureManager=null,this.globalTimeScale=1,this.anims=new r,this.paused=!1,this.name="AnimationManager",t.events.once("boot",this.boot,this)},boot:function(){this.textureManager=this.game.textures,this.game.events.once("destroy",this.destroy,this)},add:function(t,e){return this.anims.has(t)?void console.warn("Animation with key",t,"already exists"):(e.key=t,this.anims.set(t,e),this.emit("add",t,e),this)},create:function(t){var e=t.key;if(!e||this.anims.has(e))return void console.warn("Invalid Animation Key, or Key already in use: "+e);var i=new n(this,e,t);return this.anims.set(e,i),this.emit("add",e,i),i},fromJSON:function(t,e){void 0===e&&(e=!1),e&&this.anims.clear(),"string"==typeof t&&(t=JSON.parse(t));var i=[];if(t.hasOwnProperty("anims")&&Array.isArray(t.anims)){for(var n=0;n<t.anims.length;n++)i.push(this.create(t.anims[n]));t.hasOwnProperty("globalTimeScale")&&(this.globalTimeScale=t.globalTimeScale)}else t.hasOwnProperty("key")&&"frame"===t.type&&i.push(this.create(t));return i},generateFrameNames:function(t,e){var i=a(e,"prefix",""),n=a(e,"start",0),s=a(e,"end",0),r=a(e,"suffix",""),o=a(e,"zeroPad",0),l=a(e,"outputArray",[]),u=a(e,"frames",!1),c=this.textureManager.get(t);if(!c)return l;var d=n<s?1:-1;s+=d;var f,p;if(Array.isArray(u))for(f=0;f<u.length;f++)p=i+h(u[f],o,"0",1)+r,c.has(p)&&l.push({key:t,frame:p});else for(f=n;f!==s;f+=d)p=i+h(f,o,"0",1)+r,c.has(p)&&l.push({key:t,frame:p});return l},generateFrameNumbers:function(t,e){var i=a(e,"start",0),n=a(e,"end",-1),s=a(e,"first",!1),r=a(e,"outputArray",[]),o=a(e,"frames",!1),h=this.textureManager.get(t);if(!h)return r;s&&h.has(s)&&r.push({key:t,frame:s});var l;if(Array.isArray(o))for(l=0;l<o.length;l++)h.has(o[l])&&r.push({key:t,frame:o[l]});else for(-1===n&&(n=h.frameTotal),l=i;l<=n;l++)h.has(l)&&r.push({key:t,frame:l});return r},get:function(t){return this.anims.get(t)},load:function(t,e,i){var n=this.get(e);return n&&n.load(t,i),t},pauseAll:function(){return this.paused||(this.paused=!0,this.emit("pauseall")),this},play:function(t,e){if(Array.isArray(e)||(e=[e]),this.get(t)){for(var i=0;i<e.length;i++)e[i].anims.play(t);return this}},remove:function(t){var e=this.get(t);return e&&(this.emit("remove",t,e),this.anims.delete(t)),e},resumeAll:function(){return this.paused&&(this.paused=!1,this.emit("resumeall")),this},staggerPlay:function(t,e,i){if(void 0===i&&(i=0),Array.isArray(e)||(e=[e]),this.get(t)){for(var n=0;n<e.length;n++)e[n].anims.delayedPlay(i*n,t);return this}},toJSON:function(t){if(void 0!==t&&""!==t)return this.anims.get(t).toJSON();var e={anims:[],globalTimeScale:this.globalTimeScale};return this.anims.each(function(t,i){e.anims.push(i.toJSON())}),e},destroy:function(){this.anims.clear(),this.textureManager=null,this.game=null}});t.exports=l},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===e&&(e=0),void 0===i&&(i=" "),void 0===n&&(n=3),t=t.toString();var s=0;if(e+1>=t.length)switch(n){case 1:t=new Array(e+1-t.length).join(i)+t;break;case 3:var r=Math.ceil((s=e-t.length)/2),o=s-r;t=new Array(o+1).join(i)+t+new Array(r+1).join(i);break;default:t+=new Array(e+1-t.length).join(i)}return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(127),r=i(13),o=new n({initialize:function(){this.entries=new s,this.events=new r},add:function(t,e){return this.entries.set(t,e),this.events.emit("add",this,t,e),this},has:function(t){return this.entries.has(t)},get:function(t){return this.entries.get(t)},remove:function(t){var e=this.get(t);return e&&(this.entries.delete(t),this.events.emit("remove",this,t,e.data)),this},destroy:function(){this.entries.clear(),this.events.removeAllListeners(),this.entries=null,this.events=null}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(230),s=i(0),r=new s({initialize:function(t){this.game=t,this.binary=new n,this.bitmapFont=new n,this.json=new n,this.physics=new n,this.shader=new n,this.audio=new n,this.text=new n,this.obj=new n,this.tilemap=new n,this.xml=new n,this.custom={},this.game.events.once("destroy",this.destroy,this)},addCustom:function(t){return this.custom.hasOwnProperty(t)||(this.custom[t]=new n),this.custom[t]},destroy:function(){for(var t=["binary","bitmapFont","json","physics","shader","audio","text","obj","tilemap","xml"],e=0;e<t.length;e++)this[t[e]].destroy(),this[t[e]]=null;for(var i in this.custom)this.custom[i].destroy();this.custom=null,this.game=null}});t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){void 0===e&&(e=1);var i=2*Math.random()*Math.PI,n=2*Math.random()-1,s=Math.sqrt(1-n*n)*e;return t.x=Math.cos(i)*s,t.y=Math.sin(i)*s,t.z=n*e,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=1),t.x=(2*Math.random()-1)*e,t.y=(2*Math.random()-1)*e,t.z=(2*Math.random()-1)*e,t.w=(2*Math.random()-1)*e,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(58),s=i(130),r=i(235),o=new s,a=new r,h=new n,l=function(t,e,i){return a.setAxisAngle(e,i),o.fromRotationTranslation(a,h.set(0,0,0)),t.transformMat4(o)};t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(58),r=i(236),o=new Int8Array([1,2,0]),a=new Float32Array([0,0,0]),h=new s(1,0,0),l=new s(0,1,0),u=new s,c=new r,d=new n({initialize:function(t,e,i,n){"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=e||0,this.z=i||0,this.w=n||0)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this},set:function(t,e,i,n){return"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=e||0,this.z=i||0,this.w=n||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,e=this.y,i=this.z,n=this.w;return Math.sqrt(t*t+e*e+i*i+n*n)},lengthSq:function(){var t=this.x,e=this.y,i=this.z,n=this.w;return t*t+e*e+i*i+n*n},normalize:function(){var t=this.x,e=this.y,i=this.z,n=this.w,s=t*t+e*e+i*i+n*n;return s>0&&(s=1/Math.sqrt(s),this.x=t*s,this.y=e*s,this.z=i*s,this.w=n*s),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,e){void 0===e&&(e=0);var i=this.x,n=this.y,s=this.z,r=this.w;return this.x=i+e*(t.x-i),this.y=n+e*(t.y-n),this.z=s+e*(t.z-s),this.w=r+e*(t.w-r),this},rotationTo:function(t,e){var i=t.x*e.x+t.y*e.y+t.z*e.z;return i<-.999999?(u.copy(h).cross(t).length()<1e-6&&u.copy(l).cross(t),u.normalize(),this.setAxisAngle(u,Math.PI)):i>.999999?(this.x=0,this.y=0,this.z=0,this.w=1,this):(u.copy(t).cross(e),this.x=u.x,this.y=u.y,this.z=u.z,this.w=1+i,this.normalize())},setAxes:function(t,e,i){var n=c.val;return n[0]=e.x,n[3]=e.y,n[6]=e.z,n[1]=i.x,n[4]=i.y,n[7]=i.z,n[2]=-t.x,n[5]=-t.y,n[8]=-t.z,this.fromMat3(c).normalize()},identity:function(){return this.x=0,this.y=0,this.z=0,this.w=1,this},setAxisAngle:function(t,e){e*=.5;var i=Math.sin(e);return this.x=i*t.x,this.y=i*t.y,this.z=i*t.z,this.w=Math.cos(e),this},multiply:function(t){var e=this.x,i=this.y,n=this.z,s=this.w,r=t.x,o=t.y,a=t.z,h=t.w;return this.x=e*h+s*r+i*a-n*o,this.y=i*h+s*o+n*r-e*a,this.z=n*h+s*a+e*o-i*r,this.w=s*h-e*r-i*o-n*a,this},slerp:function(t,e){var i=this.x,n=this.y,s=this.z,r=this.w,o=t.x,a=t.y,h=t.z,l=t.w,u=i*o+n*a+s*h+r*l;u<0&&(u=-u,o=-o,a=-a,h=-h,l=-l);var c=1-e,d=e;if(1-u>1e-6){var f=Math.acos(u),p=Math.sin(f);c=Math.sin((1-e)*f)/p,d=Math.sin(e*f)/p}return this.x=c*i+d*o,this.y=c*n+d*a,this.z=c*s+d*h,this.w=c*r+d*l,this},invert:function(){var t=this.x,e=this.y,i=this.z,n=this.w,s=t*t+e*e+i*i+n*n,r=s?1/s:0;return this.x=-t*r,this.y=-e*r,this.z=-i*r,this.w=n*r,this},conjugate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},rotateX:function(t){t*=.5;var e=this.x,i=this.y,n=this.z,s=this.w,r=Math.sin(t),o=Math.cos(t);return this.x=e*o+s*r,this.y=i*o+n*r,this.z=n*o-i*r,this.w=s*o-e*r,this},rotateY:function(t){t*=.5;var e=this.x,i=this.y,n=this.z,s=this.w,r=Math.sin(t),o=Math.cos(t);return this.x=e*o-n*r,this.y=i*o+s*r,this.z=n*o+e*r,this.w=s*o-i*r,this},rotateZ:function(t){t*=.5;var e=this.x,i=this.y,n=this.z,s=this.w,r=Math.sin(t),o=Math.cos(t);return this.x=e*o+i*r,this.y=i*o-e*r,this.z=n*o+s*r,this.w=s*o-n*r,this},calculateW:function(){var t=this.x,e=this.y,i=this.z;return this.w=-Math.sqrt(Math.abs(1-t*t-e*e-i*i)),this},fromMat3:function(t){var e,i=t.val,n=i[0]+i[4]+i[8];if(n>0)e=Math.sqrt(n+1),this.w=.5*e,e=.5/e,this.x=(i[7]-i[5])*e,this.y=(i[2]-i[6])*e,this.z=(i[3]-i[1])*e;else{var s=0;i[4]>i[0]&&(s=1),i[8]>i[3*s+s]&&(s=2);var r=o[s],h=o[r];e=Math.sqrt(i[3*s+s]-i[3*r+r]-i[3*h+h]+1),a[s]=.5*e,e=.5/e,a[r]=(i[3*r+s]+i[3*s+r])*e,a[h]=(i[3*h+s]+i[3*s+h])*e,this.x=a[0],this.y=a[1],this.z=a[2],this.w=(i[3*h+r]-i[3*r+h])*e}return this}});t.exports=d},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.val=new Float32Array(9),t?this.copy(t):this.identity()},clone:function(){return new s(this)},set:function(t){return this.copy(t)},copy:function(t){var e=this.val,i=t.val;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this},fromMat4:function(t){var e=t.val,i=this.val;return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[4],i[4]=e[5],i[5]=e[6],i[6]=e[8],i[7]=e[9],i[8]=e[10],this},fromArray:function(t){var e=this.val;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this},identity:function(){var t=this.val;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,this},transpose:function(){var t=this.val,e=t[1],i=t[2],n=t[5];return t[1]=t[3],t[2]=t[6],t[3]=e,t[5]=t[7],t[6]=i,t[7]=n,this},invert:function(){var t=this.val,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=t[6],h=t[7],l=t[8],u=l*r-o*h,c=-l*s+o*a,d=h*s-r*a,f=e*u+i*c+n*d;return f?(f=1/f,t[0]=u*f,t[1]=(-l*i+n*h)*f,t[2]=(o*i-n*r)*f,t[3]=c*f,t[4]=(l*e-n*a)*f,t[5]=(-o*e+n*s)*f,t[6]=d*f,t[7]=(-h*e+i*a)*f,t[8]=(r*e-i*s)*f,this):null},adjoint:function(){var t=this.val,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=t[6],h=t[7],l=t[8];return t[0]=r*l-o*h,t[1]=n*h-i*l,t[2]=i*o-n*r,t[3]=o*a-s*l,t[4]=e*l-n*a,t[5]=n*s-e*o,t[6]=s*h-r*a,t[7]=i*a-e*h,t[8]=e*r-i*s,this},determinant:function(){var t=this.val,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=t[6],h=t[7],l=t[8];return e*(l*r-o*h)+i*(-l*s+o*a)+n*(h*s-r*a)},multiply:function(t){var e=this.val,i=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],u=e[8],c=t.val,d=c[0],f=c[1],p=c[2],v=c[3],g=c[4],y=c[5],m=c[6],x=c[7],b=c[8];return e[0]=d*i+f*r+p*h,e[1]=d*n+f*o+p*l,e[2]=d*s+f*a+p*u,e[3]=v*i+g*r+y*h,e[4]=v*n+g*o+y*l,e[5]=v*s+g*a+y*u,e[6]=m*i+x*r+b*h,e[7]=m*n+x*o+b*l,e[8]=m*s+x*a+b*u,this},translate:function(t){var e=this.val,i=t.x,n=t.y;return e[6]=i*e[0]+n*e[3]+e[6],e[7]=i*e[1]+n*e[4]+e[7],e[8]=i*e[2]+n*e[5]+e[8],this},rotate:function(t){var e=this.val,i=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=Math.sin(t),l=Math.cos(t);return e[0]=l*i+h*r,e[1]=l*n+h*o,e[2]=l*s+h*a,e[3]=l*r-h*i,e[4]=l*o-h*n,e[5]=l*a-h*s,this},scale:function(t){var e=this.val,i=t.x,n=t.y;return e[0]=i*e[0],e[1]=i*e[1],e[2]=i*e[2],e[3]=n*e[3],e[4]=n*e[4],e[5]=n*e[5],this},fromQuat:function(t){var e=t.x,i=t.y,n=t.z,s=t.w,r=e+e,o=i+i,a=n+n,h=e*r,l=e*o,u=e*a,c=i*o,d=i*a,f=n*a,p=s*r,v=s*o,g=s*a,y=this.val;return y[0]=1-(c+f),y[3]=l+g,y[6]=u-v,y[1]=l-g,y[4]=1-(h+f),y[7]=d+p,y[2]=u+v,y[5]=d-p,y[8]=1-(h+c),this},normalFromMat4:function(t){var e=t.val,i=this.val,n=e[0],s=e[1],r=e[2],o=e[3],a=e[4],h=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],v=e[12],g=e[13],y=e[14],m=e[15],x=n*h-s*a,b=n*l-r*a,w=n*u-o*a,T=s*l-r*h,S=s*u-o*h,A=r*u-o*l,C=c*g-d*v,M=c*y-f*v,_=c*m-p*v,E=d*y-f*g,P=d*m-p*g,L=f*m-p*y,k=x*L-b*P+w*E+T*_-S*M+A*C;return k?(k=1/k,i[0]=(h*L-l*P+u*E)*k,i[1]=(l*_-a*L-u*M)*k,i[2]=(a*P-h*_+u*C)*k,i[3]=(r*P-s*L-o*E)*k,i[4]=(n*L-r*_+o*M)*k,i[5]=(s*_-n*P-o*C)*k,i[6]=(g*A-y*S+m*T)*k,i[7]=(y*w-v*A-m*b)*k,i[8]=(v*S-g*w+m*x)*k,this):null}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(129),s=i(0),r=i(58),o=new r,a=new s({Extends:n,initialize:function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0),n.call(this,t),this.viewportWidth=e,this.viewportHeight=i,this._zoom=1,this.near=0,this.update()},setToOrtho:function(t,e,i){void 0===e&&(e=this.viewportWidth),void 0===i&&(i=this.viewportHeight);var n=this.zoom;return this.up.set(0,t?-1:1,0),this.direction.set(0,0,t?1:-1),this.position.set(n*e/2,n*i/2,0),this.viewportWidth=e,this.viewportHeight=i,this.update()},update:function(){var t=this.viewportWidth,e=this.viewportHeight,i=Math.abs(this.near),n=Math.abs(this.far),s=this.zoom;return 0===t||0===e?this:(this.projection.ortho(s*-t/2,s*t/2,s*-e/2,s*e/2,i,n),o.copy(this.position).add(this.direction),this.view.lookAt(this.position,o,this.up),this.combined.copy(this.projection).multiply(this.view),this.invProjectionView.copy(this.combined).invert(),this.billboardMatrixDirty=!0,this.updateChildren(),this)},zoom:{get:function(){return this._zoom},set:function(t){this._zoom=t,this.update()}}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(129),s=i(0),r=i(58),o=new r,a=new s({Extends:n,initialize:function(t,e,i,s){void 0===e&&(e=80),void 0===i&&(i=0),void 0===s&&(s=0),n.call(this,t),this.viewportWidth=i,this.viewportHeight=s,this.fieldOfView=e*Math.PI/180,this.update()},setFOV:function(t){return this.fieldOfView=t*Math.PI/180,this},update:function(){var t=this.viewportWidth/this.viewportHeight;return this.projection.perspective(this.fieldOfView,t,Math.abs(this.near),Math.abs(this.far)),o.copy(this.position).add(this.direction),this.view.lookAt(this.position,o,this.up),this.combined.copy(this.projection).multiply(this.view),this.invProjectionView.copy(this.combined).invert(),this.billboardMatrixDirty=!0,this.updateChildren(),this}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(240),s=i(23),r=i(4),o=function(t){var e=r(t,"data",[]),i=r(t,"canvas",null),o=r(t,"palette",n),a=r(t,"pixelWidth",1),h=r(t,"pixelHeight",a),l=r(t,"resizeCanvas",!0),u=r(t,"clearCanvas",!0),c=r(t,"preRender",null),d=r(t,"postRender",null),f=Math.floor(Math.abs(e[0].length*a)),p=Math.floor(Math.abs(e.length*h));i||(i=s.create2D(this,f,p),l=!1,u=!1),l&&(i.width=f,i.height=p);var v=i.getContext("2d");u&&v.clearRect(0,0,f,p),c&&c(i,v);for(var g=0;g<e.length;g++)for(var y=e[g],m=0;m<y.length;m++){var x=y[m];"."!==x&&" "!==x&&(v.fillStyle=o[x],v.fillRect(m*a,g*h,a,h))}return d&&d(i,v),i};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={0:"#000",1:"#9D9D9D",2:"#FFF",3:"#BE2633",4:"#E06F8B",5:"#493C2B",6:"#A46422",7:"#EB8931",8:"#F7E26B",9:"#2F484E",A:"#44891A",B:"#A3CE27",C:"#1B2632",D:"#005784",E:"#31A2F2",F:"#B2DCEF"}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(242),r=i(75),o=i(6),a=new n({Extends:r,initialize:function(t,e,i,n){r.call(this,"CubicBezierCurve"),Array.isArray(t)&&(n=new o(t[6],t[7]),i=new o(t[4],t[5]),e=new o(t[2],t[3]),t=new o(t[0],t[1])),this.p0=t,this.p1=e,this.p2=i,this.p3=n},getStartPoint:function(t){return void 0===t&&(t=new o),t.copy(this.p0)},getResolution:function(t){return t},getPoint:function(t,e){void 0===e&&(e=new o);var i=this.p0,n=this.p1,r=this.p2,a=this.p3;return e.set(s(t,i.x,n.x,r.x,a.x),s(t,i.y,n.y,r.y,a.y))},draw:function(t,e){void 0===e&&(e=32);var i=this.getPoints(e);t.beginPath(),t.moveTo(this.p0.x,this.p0.y);for(var n=1;n<i.length;n++)t.lineTo(i[n].x,i[n].y);return t.strokePath(),t},toJSON:function(){return{type:this.type,points:[this.p0.x,this.p0.y,this.p1.x,this.p1.y,this.p2.x,this.p2.y,this.p3.x,this.p3.y]}}});a.fromJSON=function(t){var e=t.points,i=new o(e[0],e[1]),n=new o(e[2],e[3]),s=new o(e[4],e[5]),r=new o(e[6],e[7]);return new a(i,n,s,r)},t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
function i(t,e){var i=1-t;return i*i*i*e}function n(t,e){var i=1-t;return 3*i*i*t*e}function s(t,e){return 3*(1-t)*t*t*e}function r(t,e){return t*t*t*e}var o=function(t,e,o,a,h){return i(t,e)+n(t,o)+s(t,a)+r(t,h)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(75),r=i(43),o=i(4),a=i(244),h=i(6),l=new n({Extends:s,initialize:function(t,e,i,n,a,l,u,c){if("object"==typeof t){var d=t;t=o(d,"x",0),e=o(d,"y",0),i=o(d,"xRadius",0),n=o(d,"yRadius",i),a=o(d,"startAngle",0),l=o(d,"endAngle",360),u=o(d,"clockwise",!1),c=o(d,"rotation",0)}else void 0===n&&(n=i),void 0===a&&(a=0),void 0===l&&(l=360),void 0===u&&(u=!1),void 0===c&&(c=0);s.call(this,"EllipseCurve"),this.p0=new h(t,e),this._xRadius=i,this._yRadius=n,this._startAngle=r(a),this._endAngle=r(l),this._clockwise=u,this._rotation=r(c)},getStartPoint:function(t){return void 0===t&&(t=new h),this.getPoint(0,t)},getResolution:function(t){return 2*t},getPoint:function(t,e){void 0===e&&(e=new h);for(var i=2*Math.PI,n=this._endAngle-this._startAngle,s=Math.abs(n)<Number.EPSILON;n<0;)n+=i;for(;n>i;)n-=i;n<Number.EPSILON&&(n=s?0:i),this._clockwise&&!s&&(n===i?n=-i:n-=i);var r=this._startAngle+t*n,o=this.p0.x+this._xRadius*Math.cos(r),a=this.p0.y+this._yRadius*Math.sin(r);if(0!==this._rotation){var l=Math.cos(this._rotation),u=Math.sin(this._rotation),c=o-this.p0.x,d=a-this.p0.y;o=c*l-d*u+this.p0.x,a=c*u+d*l+this.p0.y}return e.set(o,a)},setXRadius:function(t){return this.xRadius=t,this},setYRadius:function(t){return this.yRadius=t,this},setWidth:function(t){return this.xRadius=2*t,this},setHeight:function(t){return this.yRadius=2*t,this},setStartAngle:function(t){return this.startAngle=t,this},setEndAngle:function(t){return this.endAngle=t,this},setClockwise:function(t){return this.clockwise=t,this},setRotation:function(t){return this.rotation=t,this},x:{get:function(){return this.p0.x},set:function(t){this.p0.x=t}},y:{get:function(){return this.p0.y},set:function(t){this.p0.y=t}},xRadius:{get:function(){return this._xRadius},set:function(t){this._xRadius=t}},yRadius:{get:function(){return this._yRadius},set:function(t){this._yRadius=t}},startAngle:{get:function(){return a(this._startAngle)},set:function(t){this._startAngle=r(t)}},endAngle:{get:function(){return a(this._endAngle)},set:function(t){this._endAngle=r(t)}},clockwise:{get:function(){return this._clockwise},set:function(t){this._clockwise=t}},rotation:{get:function(){return this._rotation},set:function(t){this._rotation=r(t)}},toJSON:function(){return{type:this.type,x:this.p0.x,y:this.p0.y,xRadius:this._xRadius,yRadius:this._yRadius,startAngle:a(this._startAngle),endAngle:a(this._endAngle),clockwise:this._clockwise,rotation:a(this._rotation)}}});l.fromJSON=function(t){return new l(t)},t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(15),s=function(t){return t*n.RAD_TO_DEG};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(75),r=i(133),o=i(8),a=i(6),h=new a,l=new n({Extends:s,initialize:function(t,e){s.call(this,"LineCurve"),Array.isArray(t)&&(e=new a(t[2],t[3]),t=new a(t[0],t[1])),this.p0=t,this.p1=e},getBounds:function(t){return void 0===t&&(t=new o),r([this.p0,this.p1],t)},getStartPoint:function(t){return void 0===t&&(t=new a),t.copy(this.p0)},getResolution:function(){return 1},getPoint:function(t,e){return void 0===e&&(e=new a),1===t?e.copy(this.p1):(e.copy(this.p1).subtract(this.p0).scale(t).add(this.p0),e)},getPointAt:function(t,e){return this.getPoint(t,e)},getTangent:function(){return h.copy(this.p1).subtract(this.p0).normalize()},draw:function(t){return t.lineBetween(this.p0.x,this.p0.y,this.p1.x,this.p1.y),t},toJSON:function(){return{type:this.type,points:[this.p0.x,this.p0.y,this.p1.x,this.p1.y]}}});l.fromJSON=function(t){var e=t.points,i=new a(e[0],e[1]),n=new a(e[2],e[3]);return new l(i,n)},t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(134),s=i(0),r=i(75),o=i(6),a=new s({Extends:r,initialize:function(t){void 0===t&&(t=[]),r.call(this,"SplineCurve"),this.points=[],this.addPoints(t)},addPoints:function(t){for(var e=0;e<t.length;e++){var i=new o;"number"==typeof t[e]?(i.x=t[e],i.y=t[e+1],e++):Array.isArray(t[e])?(i.x=t[e][0],i.y=t[e][1]):(i.x=t[e].x,i.y=t[e].y),this.points.push(i)}return this},addPoint:function(t,e){var i=new o(t,e);return this.points.push(i),i},getStartPoint:function(t){return void 0===t&&(t=new o),t.copy(this.points[0])},getResolution:function(t){return t*this.points.length},getPoint:function(t,e){void 0===e&&(e=new o);var i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,h=i[0===r?r:r-1],l=i[r],u=i[r>i.length-2?i.length-1:r+1],c=i[r>i.length-3?i.length-1:r+2];return e.set(n(a,h.x,l.x,u.x,c.x),n(a,h.y,l.y,u.y,c.y))},toJSON:function(){for(var t=[],e=0;e<this.points.length;e++)t.push(this.points[e].x),t.push(this.points[e].y);return{type:this.type,points:t}}});a.fromJSON=function(t){return new a(t.points)},t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setCrisp:function(t){return["optimizeSpeed","crisp-edges","-moz-crisp-edges","-webkit-optimize-contrast","optimize-contrast","pixelated"].forEach(function(e){t.style["image-rendering"]=e}),t.style.msInterpolationMode="nearest-neighbor",t},setBicubic:function(t){return t.style["image-rendering"]="auto",t.style.msInterpolationMode="bicubic",t}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(76),s=function(t){if("complete"===document.readyState||"interactive"===document.readyState)return void t();var e=function(){document.removeEventListener("deviceready",e,!0),document.removeEventListener("DOMContentLoaded",e,!0),window.removeEventListener("load",e,!0),t()};document.body?n.cordova&&!n.cocoonJS?document.addEventListener("deviceready",e,!1):(document.addEventListener("DOMContentLoaded",e,!0),window.addEventListener("load",e,!0)):window.setTimeout(e,20)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e="";try{if(window.DOMParser){var i=new DOMParser;e=i.parseFromString(t,"text/xml")}else e=new ActiveXObject("Microsoft.XMLDOM"),e.loadXML(t)}catch(t){e=null}return e&&e.documentElement&&!e.getElementsByTagName("parsererror").length?e:null};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){t.parentNode&&t.parentNode.removeChild(t)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(3),r=new n({initialize:function(){this.isRunning=!1,this.callback=s,this.tick=0,this.isSetTimeOut=!1,this.timeOutID=null,this.lastTime=0;var t=this;this.step=function e(i){t.lastTime=t.tick,t.tick=i,t.callback(i),t.timeOutID=window.requestAnimationFrame(e)},this.stepTimeout=function e(){var i=Date.now(),n=Math.max(16+t.lastTime-i,0);t.lastTime=t.tick,t.tick=i,t.callback(i),t.timeOutID=window.setTimeout(e,n)}},start:function(t,e){this.isRunning||(this.callback=t,this.isSetTimeOut=e,this.isRunning=!0,this.timeOutID=e?window.setTimeout(this.stepTimeout,0):window.requestAnimationFrame(this.step))},stop:function(){this.isRunning=!1,this.isSetTimeOut?clearTimeout(this.timeOutID):window.cancelAnimationFrame(this.timeOutID)},destroy:function(){this.stop(),this.callback=s}});t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={Global:["anims","cache","registry","sound","textures"],CoreScene:["EventEmitter","CameraManager","GameObjectCreator","GameObjectFactory","ScenePlugin","DisplayList","UpdateList"],DefaultScene:["CameraManager3D","Clock","DataManagerPlugin","InputPlugin","Loader","TweenManager","LightsPlugin"]};t.exports=i},function(t,e,i){function n(){var t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/",e="AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",i=new Image;return i.onload=function(){var n=new Image;n.onload=function(){var t=r.create(n,6,1),e=t.getContext("2d");if(e.globalCompositeOperation="multiply",e.drawImage(i,0,0),e.drawImage(n,2,0),!e.getImageData(2,0,1,1))return!1;var s=e.getImageData(2,0,1,1).data;r.remove(n),o.supportNewBlendModes=255===s[0]&&0===s[1]&&0===s[2]},n.src=t+"/wCKxvRF"+e},i.src=t+"AP804Oa6"+e,!1}function s(){var t=r.create(this,2,1),e=t.getContext("2d");e.fillStyle="rgba(10, 20, 30, 0.5)",e.fillRect(0,0,1,1);var i=e.getImageData(0,0,1,1);if(null===i)return!1;e.putImageData(i,1,0);var n=e.getImageData(1,0,1,1);return n.data[0]===i.data[0]&&n.data[1]===i.data[1]&&n.data[2]===i.data[2]&&n.data[3]===i.data[3]}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var r=i(23),o={supportInverseAlpha:!1,supportNewBlendModes:!1};t.exports=function(){return void 0!==document&&(o.supportNewBlendModes=n(),o.supportInverseAlpha=s()),o}()},function(t,e,i){"use strict";function n(t,e,i){i=i||2;var n=e&&e.length,r=n?e[0]*i:t.length,a=s(t,0,r,i,!0),h=[];if(!a)return h;var l,u,d,f,p,v,g;if(n&&(a=c(t,e,a,i)),t.length>80*i){l=d=t[0],u=f=t[1];for(var y=i;y<r;y+=i)p=t[y],v=t[y+1],p<l&&(l=p),v<u&&(u=v),p>d&&(d=p),v>f&&(f=v);g=Math.max(d-l,f-u)}return o(a,h,i,l,u,g),h}function s(t,e,i,n,s){var r,o;if(s===k(t,e,i,n)>0)for(r=e;r<i;r+=n)o=E(r,t[r],t[r+1],o);else for(r=i-n;r>=e;r-=n)o=E(r,t[r],t[r+1],o);return o&&T(o,o.next)&&(P(o),o=o.next),o}function r(t,e){if(!t)return t;e||(e=t);var i,n=t;do{if(i=!1,n.steiner||!T(n,n.next)&&0!==w(n.prev,n,n.next))n=n.next;else{if(P(n),(n=e=n.prev)===n.next)return null;i=!0}}while(i||n!==e);return e}function o(t,e,i,n,s,c,d){if(t){!d&&c&&v(t,n,s,c);for(var f,p,g=t;t.prev!==t.next;)if(f=t.prev,p=t.next,c?h(t,n,s,c):a(t))e.push(f.i/i),e.push(t.i/i),e.push(p.i/i),P(t),t=p.next,g=p.next;else if((t=p)===g){d?1===d?(t=l(t,e,i),o(t,e,i,n,s,c,2)):2===d&&u(t,e,i,n,s,c):o(r(t),e,i,n,s,c,1);break}}}function a(t){var e=t.prev,i=t,n=t.next;if(w(e,i,n)>=0)return!1;for(var s=t.next.next;s!==t.prev;){if(x(e.x,e.y,i.x,i.y,n.x,n.y,s.x,s.y)&&w(s.prev,s,s.next)>=0)return!1;s=s.next}return!0}function h(t,e,i,n){var s=t.prev,r=t,o=t.next;if(w(s,r,o)>=0)return!1;for(var a=s.x<r.x?s.x<o.x?s.x:o.x:r.x<o.x?r.x:o.x,h=s.y<r.y?s.y<o.y?s.y:o.y:r.y<o.y?r.y:o.y,l=s.x>r.x?s.x>o.x?s.x:o.x:r.x>o.x?r.x:o.x,u=s.y>r.y?s.y>o.y?s.y:o.y:r.y>o.y?r.y:o.y,c=y(a,h,e,i,n),d=y(l,u,e,i,n),f=t.nextZ;f&&f.z<=d;){if(f!==t.prev&&f!==t.next&&x(s.x,s.y,r.x,r.y,o.x,o.y,f.x,f.y)&&w(f.prev,f,f.next)>=0)return!1;f=f.nextZ}for(f=t.prevZ;f&&f.z>=c;){if(f!==t.prev&&f!==t.next&&x(s.x,s.y,r.x,r.y,o.x,o.y,f.x,f.y)&&w(f.prev,f,f.next)>=0)return!1;f=f.prevZ}return!0}function l(t,e,i){var n=t;do{var s=n.prev,r=n.next.next;!T(s,r)&&S(s,n,n.next,r)&&C(s,r)&&C(r,s)&&(e.push(s.i/i),e.push(n.i/i),e.push(r.i/i),P(n),P(n.next),n=t=r),n=n.next}while(n!==t);return n}function u(t,e,i,n,s,a){var h=t;do{for(var l=h.next.next;l!==h.prev;){if(h.i!==l.i&&b(h,l)){var u=_(h,l);return h=r(h,h.next),u=r(u,u.next),o(h,e,i,n,s,a),void o(u,e,i,n,s,a)}l=l.next}h=h.next}while(h!==t)}function c(t,e,i,n){var o,a,h,l,u,c=[];for(o=0,a=e.length;o<a;o++)h=e[o]*n,l=o<a-1?e[o+1]*n:t.length,u=s(t,h,l,n,!1),u===u.next&&(u.steiner=!0),c.push(m(u));for(c.sort(d),o=0;o<c.length;o++)f(c[o],i),i=r(i,i.next);return i}function d(t,e){return t.x-e.x}function f(t,e){if(e=p(t,e)){var i=_(e,t);r(i,i.next)}}function p(t,e){var i,n=e,s=t.x,r=t.y,o=-1/0;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){var a=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=s&&a>o){if(o=a,a===s){if(r===n.y)return n;if(r===n.next.y)return n.next}i=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!i)return null;if(s===o)return i.prev;var h,l=i,u=i.x,c=i.y,d=1/0;for(n=i.next;n!==l;)s>=n.x&&n.x>=u&&s!==n.x&&x(r<c?s:o,r,u,c,r<c?o:s,r,n.x,n.y)&&((h=Math.abs(r-n.y)/(s-n.x))<d||h===d&&n.x>i.x)&&C(n,t)&&(i=n,d=h),n=n.next;return i}function v(t,e,i,n){var s=t;do{null===s.z&&(s.z=y(s.x,s.y,e,i,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,g(s)}function g(t){var e,i,n,s,r,o,a,h,l=1;do{for(i=t,t=null,r=null,o=0;i;){for(o++,n=i,a=0,e=0;e<l&&(a++,n=n.nextZ);e++);for(h=l;a>0||h>0&&n;)0!==a&&(0===h||!n||i.z<=n.z)?(s=i,i=i.nextZ,a--):(s=n,n=n.nextZ,h--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;i=n}r.nextZ=null,l*=2}while(o>1);return t}function y(t,e,i,n,s){return t=32767*(t-i)/s,e=32767*(e-n)/s,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1}function m(t){var e=t,i=t;do{e.x<i.x&&(i=e),e=e.next}while(e!==t);return i}function x(t,e,i,n,s,r,o,a){return(s-o)*(e-a)-(t-o)*(r-a)>=0&&(t-o)*(n-a)-(i-o)*(e-a)>=0&&(i-o)*(r-a)-(s-o)*(n-a)>=0}function b(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!A(t,e)&&C(t,e)&&C(e,t)&&M(t,e)}function w(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)}function T(t,e){return t.x===e.x&&t.y===e.y}function S(t,e,i,n){return!!(T(t,e)&&T(i,n)||T(t,n)&&T(i,e))||w(t,e,i)>0!=w(t,e,n)>0&&w(i,n,t)>0!=w(i,n,e)>0}function A(t,e){var i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&S(i,i.next,t,e))return!0;i=i.next}while(i!==t);return!1}function C(t,e){return w(t.prev,t,t.next)<0?w(t,e,t.next)>=0&&w(t,t.prev,e)>=0:w(t,e,t.prev)<0||w(t,t.next,e)<0}function M(t,e){var i=t,n=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{i.y>r!=i.next.y>r&&i.next.y!==i.y&&s<(i.next.x-i.x)*(r-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next}while(i!==t);return n}function _(t,e){var i=new L(t.i,t.x,t.y),n=new L(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,i.next=s,s.prev=i,n.next=i,i.prev=n,r.next=n,n.prev=r,n}function E(t,e,i,n){var s=new L(t,e,i);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function P(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function L(t,e,i){this.i=t,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function k(t,e,i,n){for(var s=0,r=e,o=i-n;r<i;r+=n)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports=n,n.deviation=function(t,e,i,n){var s=e&&e.length,r=s?e[0]*i:t.length,o=Math.abs(k(t,0,r,i));if(s)for(var a=0,h=e.length;a<h;a++){var l=e[a]*i,u=a<h-1?e[a+1]*i:t.length;o-=Math.abs(k(t,l,u,i))}var c=0;for(a=0;a<n.length;a+=3){var d=n[a]*i,f=n[a+1]*i,p=n[a+2]*i;c+=Math.abs((t[d]-t[p])*(t[f+1]-t[d+1])-(t[d]-t[f])*(t[p+1]-t[d+1]))}return 0===o&&0===c?0:Math.abs((c-o)/o)},n.flatten=function(t){for(var e=t[0][0].length,i={vertices:[],holes:[],dimensions:e},n=0,s=0;s<t.length;s++){for(var r=0;r<t[s].length;r++)for(var o=0;o<e;o++)i.vertices.push(t[s][r][o]);s>0&&(n+=t[s-1].length,i.holes.push(n))}return i}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={modelMatrixDirty:!1,viewMatrixDirty:!1,projectionMatrixDirty:!1,modelMatrix:null,viewMatrix:null,projectionMatrix:null,mvpInit:function(){return this.modelMatrixDirty=!0,this.viewMatrixDirty=!0,this.projectionMatrixDirty=!0,this.modelMatrix=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.viewMatrix=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.projectionMatrix=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this},mvpUpdate:function(){var t=this.program;return this.modelMatrixDirty&&(this.renderer.setMatrix4(t,"uModelMatrix",!1,this.modelMatrix),this.modelMatrixDirty=!1),this.viewMatrixDirty&&(this.renderer.setMatrix4(t,"uViewMatrix",!1,this.viewMatrix),this.viewMatrixDirty=!1),this.projectionMatrixDirty&&(this.renderer.setMatrix4(t,"uProjectionMatrix",!1,this.projectionMatrix),this.projectionMatrixDirty=!1),this},modelIdentity:function(){var t=this.modelMatrix;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this.modelMatrixDirty=!0,this},modelScale:function(t,e,i){var n=this.modelMatrix;return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n[4]=n[4]*e,n[5]=n[5]*e,n[6]=n[6]*e,n[7]=n[7]*e,n[8]=n[8]*i,n[9]=n[9]*i,n[10]=n[10]*i,n[11]=n[11]*i,this.modelMatrixDirty=!0,this},modelTranslate:function(t,e,i){var n=this.modelMatrix;return n[12]=n[0]*t+n[4]*e+n[8]*i+n[12],n[13]=n[1]*t+n[5]*e+n[9]*i+n[13],n[14]=n[2]*t+n[6]*e+n[10]*i+n[14],n[15]=n[3]*t+n[7]*e+n[11]*i+n[15],this.modelMatrixDirty=!0,this},modelRotateX:function(t){var e=this.modelMatrix,i=Math.sin(t),n=Math.cos(t),s=e[4],r=e[5],o=e[6],a=e[7],h=e[8],l=e[9],u=e[10],c=e[11];return e[4]=s*n+h*i,e[5]=r*n+l*i,e[6]=o*n+u*i,e[7]=a*n+c*i,e[8]=h*n-s*i,e[9]=l*n-r*i,e[10]=u*n-o*i,e[11]=c*n-a*i,this.modelMatrixDirty=!0,this},modelRotateY:function(t){var e=this.modelMatrix,i=Math.sin(t),n=Math.cos(t),s=e[0],r=e[1],o=e[2],a=e[3],h=e[8],l=e[9],u=e[10],c=e[11];return e[0]=s*n-h*i,e[1]=r*n-l*i,e[2]=o*n-u*i,e[3]=a*n-c*i,e[8]=s*i+h*n,e[9]=r*i+l*n,e[10]=o*i+u*n,e[11]=a*i+c*n,this.modelMatrixDirty=!0,this},modelRotateZ:function(t){var e=this.modelMatrix,i=Math.sin(t),n=Math.cos(t),s=e[0],r=e[1],o=e[2],a=e[3],h=e[4],l=e[5],u=e[6],c=e[7];return e[0]=s*n+h*i,e[1]=r*n+l*i,e[2]=o*n+u*i,e[3]=a*n+c*i,e[4]=h*n-s*i,e[5]=l*n-r*i,e[6]=u*n-o*i,e[7]=c*n-a*i,this.modelMatrixDirty=!0,this},viewIdentity:function(){var t=this.viewMatrix;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this.viewMatrixDirty=!0,this},viewScale:function(t,e,i){var n=this.viewMatrix;return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n[4]=n[4]*e,n[5]=n[5]*e,n[6]=n[6]*e,n[7]=n[7]*e,n[8]=n[8]*i,n[9]=n[9]*i,n[10]=n[10]*i,n[11]=n[11]*i,this.viewMatrixDirty=!0,this},viewTranslate:function(t,e,i){var n=this.viewMatrix;return n[12]=n[0]*t+n[4]*e+n[8]*i+n[12],n[13]=n[1]*t+n[5]*e+n[9]*i+n[13],n[14]=n[2]*t+n[6]*e+n[10]*i+n[14],n[15]=n[3]*t+n[7]*e+n[11]*i+n[15],this.viewMatrixDirty=!0,this},viewRotateX:function(t){var e=this.viewMatrix,i=Math.sin(t),n=Math.cos(t),s=e[4],r=e[5],o=e[6],a=e[7],h=e[8],l=e[9],u=e[10],c=e[11];return e[4]=s*n+h*i,e[5]=r*n+l*i,e[6]=o*n+u*i,e[7]=a*n+c*i,e[8]=h*n-s*i,e[9]=l*n-r*i,e[10]=u*n-o*i,e[11]=c*n-a*i,this.viewMatrixDirty=!0,this},viewRotateY:function(t){var e=this.viewMatrix,i=Math.sin(t),n=Math.cos(t),s=e[0],r=e[1],o=e[2],a=e[3],h=e[8],l=e[9],u=e[10],c=e[11];return e[0]=s*n-h*i,e[1]=r*n-l*i,e[2]=o*n-u*i,e[3]=a*n-c*i,e[8]=s*i+h*n,e[9]=r*i+l*n,e[10]=o*i+u*n,e[11]=a*i+c*n,this.viewMatrixDirty=!0,this},viewRotateZ:function(t){var e=this.viewMatrix,i=Math.sin(t),n=Math.cos(t),s=e[0],r=e[1],o=e[2],a=e[3],h=e[4],l=e[5],u=e[6],c=e[7];return e[0]=s*n+h*i,e[1]=r*n+l*i,e[2]=o*n+u*i,e[3]=a*n+c*i,e[4]=h*n-s*i,e[5]=l*n-r*i,e[6]=u*n-o*i,e[7]=c*n-a*i,this.viewMatrixDirty=!0,this},viewLoad2D:function(t){var e=this.viewMatrix;return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=0,e[4]=t[2],e[5]=t[3],e[6]=0,e[7]=0,e[8]=t[4],e[9]=t[5],e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this.viewMatrixDirty=!0,this},viewLoad:function(t){var e=this.viewMatrix;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this.viewMatrixDirty=!0,this},projIdentity:function(){var t=this.projectionMatrix;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this.projectionMatrixDirty=!0,this},projOrtho:function(t,e,i,n,s,r){var o=this.projectionMatrix,a=1/(t-e),h=1/(i-n),l=1/(s-r);return o[0]=-2*a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=-2*h,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=2*l,o[11]=0,o[12]=(t+e)*a,o[13]=(n+i)*h,o[14]=(r+s)*l,o[15]=1,this.projectionMatrixDirty=!0,this},projPersp:function(t,e,i,n){var s=this.projectionMatrix,r=1/Math.tan(t/2),o=1/(i-n);return s[0]=r/e,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=r,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=(n+i)*o,s[11]=-1,s[12]=0,s[13]=0,s[14]=2*n*i*o,s[15]=0,this.projectionMatrixDirty=!0,this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(554),r=i(257),o=10,a=new n({Extends:r,initialize:function(t,e,i){r.call(this,t,e,i,s.replace("%LIGHT_COUNT%",o.toString()))},onBind:function(){r.prototype.onBind.call(this);var t=this.renderer,e=this.program;return this.mvpUpdate(),t.setInt1(e,"uNormSampler",1),t.setFloat2(e,"uResolution",this.width,this.height),this},onRender:function(t,e){var i=t.lights;if(i.culledLights.length=0,i.lights.length<=0||!i.active)return this;var n,s=this.renderer,r=this.program,a=t.lights.cull(e),h=Math.min(a.length,o),l=e.matrix,u={x:0,y:0},c=s.height;for(n=0;n<o;++n)s.setFloat1(r,"uLights["+n+"].radius",0);if(h<=0)return this;for(s.setFloat4(r,"uCamera",e.x,e.y,e.rotation,e.zoom),s.setFloat3(r,"uAmbientLightColor",i.ambientColor.r,i.ambientColor.g,i.ambientColor.b),n=0;n<h;++n){var d=a[n],f="uLights["+n+"].";l.transformPoint(d.x,d.y,u),s.setFloat2(r,f+"position",u.x-e.scrollX*d.scrollFactorX*e.zoom,c-(u.y-e.scrollY*d.scrollFactorY*e.zoom)),s.setFloat3(r,f+"color",d.r,d.g,d.b),s.setFloat1(r,f+"intensity",d.intensity),s.setFloat1(r,f+"radius",d.radius)}return this},drawStaticTilemapLayer:function(t,e){var i=t.texture.dataSource[0];i?(this.renderer.setPipeline(this),this.setTexture2D(i.glTexture,1),r.prototype.drawStaticTilemapLayer.call(this,t,e)):(console.warn("Normal map texture missing for using Light2D pipeline. StaticTilemapLayer rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.drawStaticTilemapLayer(t,e))},drawEmitterManager:function(t,e){var i=t.texture.dataSource[0];i?(this.renderer.setPipeline(this),this.setTexture2D(i.glTexture,1),r.prototype.drawEmitterManager.call(this,t,e)):(console.warn("Normal map texture missing for using Light2D pipeline. EmitterManager rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.drawEmitterManager(t,e))},drawBlitter:function(t,e){var i=t.texture.dataSource[0];i?(this.renderer.setPipeline(this),this.setTexture2D(i.glTexture,1),r.prototype.drawBlitter.call(this,t,e)):(console.warn("Normal map texture missing for using Light2D pipeline. Blitter rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.drawBlitter(t,e))},batchSprite:function(t,e){var i=t.texture.dataSource[0];i?(this.renderer.setPipeline(this),this.setTexture2D(i.glTexture,1),r.prototype.batchSprite.call(this,t,e)):(console.warn("Normal map texture missing for using Light2D pipeline. Sprite rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchSprite(t,e))},batchMesh:function(t,e){var i=t.texture.dataSource[0];i?(this.renderer.setPipeline(this),this.setTexture2D(i.glTexture,1),r.prototype.batchMesh.call(this,t,e)):(console.warn("Normal map texture missing for using Light2D pipeline. Mesh rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchMesh(t,e))},batchBitmapText:function(t,e){var i=t.texture.dataSource[0];i?(this.renderer.setPipeline(this),this.setTexture2D(i.glTexture,1),r.prototype.batchBitmapText.call(this,t,e)):(console.warn("Normal map texture missing for using Light2D pipeline. BitmapText rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchBitmapText(t,e))},batchDynamicBitmapText:function(t,e){var i=t.texture.dataSource[0];i?(this.renderer.setPipeline(this),this.setTexture2D(i.glTexture,1),r.prototype.batchDynamicBitmapText.call(this,t,e)):(console.warn("Normal map texture missing for using Light2D pipeline. DynamicBitmapText rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchDynamicBitmapText(t,e))},batchText:function(t,e){var i=t.texture.dataSource[0];i?(this.renderer.setPipeline(this),this.setTexture2D(i.glTexture,1),r.prototype.batchText.call(this,t,e)):(console.warn("Normal map texture missing for using Light2D pipeline. Text rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchText(t,e))},batchDynamicTilemapLayer:function(t,e){var i=t.texture.dataSource[0];i?(this.renderer.setPipeline(this),this.setTexture2D(i.glTexture,1),r.prototype.batchDynamicTilemapLayer.call(this,t,e)):(console.warn("Normal map texture missing for using Light2D pipeline. DynamicTilemapLayer rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchDynamicTilemapLayer(t,e))},batchTileSprite:function(t,e){var i=t.texture.dataSource[0];i?(this.renderer.setPipeline(this),this.setTexture2D(i.glTexture,1),r.prototype.batchTileSprite.call(this,t,e)):(console.warn("Normal map texture missing for using Light2D pipeline. TileSprite rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchTileSprite(t,e))}});a.LIGHT_COUNT=o,t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(255),r=i(555),o=i(556),a=i(47),h=i(138),l=new n({Extends:h,Mixins:[s],initialize:function(t,e,i,n){h.call(this,{game:t,gl:e,renderer:i,topology:e.TRIANGLES,vertShader:o,fragShader:n||r,vertexCapacity:12e3,vertexSize:2*Float32Array.BYTES_PER_ELEMENT+2*Float32Array.BYTES_PER_ELEMENT+4*Uint8Array.BYTES_PER_ELEMENT,attributes:[{name:"inPosition",size:2,type:e.FLOAT,normalized:!1,offset:0},{name:"inTexCoord",size:2,type:e.FLOAT,normalized:!1,offset:2*Float32Array.BYTES_PER_ELEMENT},{name:"inTint",size:4,type:e.UNSIGNED_BYTE,normalized:!0,offset:4*Float32Array.BYTES_PER_ELEMENT}]}),this.vertexViewF32=new Float32Array(this.vertexData),this.vertexViewU32=new Uint32Array(this.vertexData),this.maxQuads=2e3,this.batches=[],this.mvpInit()},setTexture2D:function(t,e){if(!t)return this;var i=this.batches;0===i.length&&this.pushBatch();var n=i[i.length-1];return e>0?(n.textures[e-1]&&n.textures[e-1]!==t&&this.pushBatch(),i[i.length-1].textures[e-1]=t):(null!==n.texture&&n.texture!==t&&this.pushBatch(),i[i.length-1].texture=t),this},pushBatch:function(){var t={first:this.vertexCount,texture:null,textures:[]};this.batches.push(t)},flush:function(){if(this.flushLocked)return this;this.flushLocked=!0;var t,e,i,n=this.gl,s=this.renderer,r=this.vertexCount,o=this.topology,a=this.vertexSize,h=this.batches,l=h.length,u=0,c=null;if(0===l||0===r)return this.flushLocked=!1,this;n.bufferSubData(n.ARRAY_BUFFER,0,this.bytes.subarray(0,r*a));for(var d=0;d<h.length-1;++d){if(c=h[d],t=h[d+1],c.textures.length>0){for(e=0;e<c.textures.length;++e)(i=c.textures[e])&&s.setTexture2D(i,1+e);n.activeTexture(n.TEXTURE0)}u=t.first-c.first,null===c.texture||u<=0||(s.setTexture2D(c.texture,0),n.drawArrays(o,c.first,u))}if(c=h[h.length-1],c.textures.length>0){for(e=0;e<c.textures.length;++e)(i=c.textures[e])&&s.setTexture2D(i,1+e);n.activeTexture(n.TEXTURE0)}return u=r-c.first,c.texture&&u>0&&(s.setTexture2D(c.texture,0),n.drawArrays(o,c.first,u)),this.vertexCount=0,h.length=0,this.pushBatch(),this.flushLocked=!1,this},onBind:function(){return h.prototype.onBind.call(this),this.mvpUpdate(),0===this.batches.length&&this.pushBatch(),this},resize:function(t,e,i){return h.prototype.resize.call(this,t,e,i),this.projOrtho(0,this.width,this.height,0,-1e3,1e3),this},drawStaticTilemapLayer:function(t){if(t.vertexCount>0){var e=this.vertexBuffer,i=this.gl,n=this.renderer,s=t.tileset.image.get();n.currentPipeline&&n.currentPipeline.vertexCount>0&&n.flush(),this.vertexBuffer=t.vertexBuffer,n.setPipeline(this),n.setTexture2D(s.source.glTexture,0),i.drawArrays(this.topology,0,t.vertexCount),this.vertexBuffer=e}this.viewIdentity(),this.modelIdentity()},drawEmitterManager:function(t,e){this.renderer.setPipeline(this);var i=t.emitters.list,n=i.length,s=this.vertexViewF32,r=this.vertexViewU32,o=this.renderer,a=this.maxQuads,h=e.scrollX,l=e.scrollY,u=e.matrix.matrix,c=u[0],d=u[1],f=u[2],p=u[3],v=u[4],g=u[5],y=Math.sin,m=Math.cos,x=this.vertexComponentCount,b=this.vertexCapacity,w=t.defaultFrame.source.glTexture;this.setTexture2D(w,0);for(var T=0;T<n;++T){var S=i[T],A=S.alive,C=A.length,M=Math.ceil(C/a),_=0,E=h*S.scrollFactorX,P=l*S.scrollFactorY;if(S.visible&&0!==C){o.setBlendMode(S.blendMode),this.vertexCount>=b&&(this.flush(),this.setTexture2D(w,0));for(var L=0;L<M;++L){for(var k=Math.min(C,a),F=0;F<k;++F){var O=A[_+F];if(!(O.alpha<=0)){var R=O.frame,B=R.uvs,D=-R.halfWidth,I=-R.halfHeight,Y=O.color,z=D+R.width,X=I+R.height,N=y(O.rotation),V=m(O.rotation),W=V*O.scaleX,G=-N*O.scaleX,U=N*O.scaleY,j=V*O.scaleY,H=O.x-E*O.scrollFactorX,q=O.y-P*O.scrollFactorY,K=W*c+G*f,J=W*d+G*p,Z=U*c+j*f,Q=U*d+j*p,$=H*c+q*f+v,tt=H*d+q*p+g,et=D*K+I*Z+$,it=D*J+I*Q+tt,nt=D*K+X*Z+$,st=D*J+X*Q+tt,rt=z*K+X*Z+$,ot=z*J+X*Q+tt,at=z*K+I*Z+$,ht=z*J+I*Q+tt,lt=this.vertexCount*x;s[lt+0]=et,s[lt+1]=it,s[lt+2]=B.x0,s[lt+3]=B.y0,r[lt+4]=Y,s[lt+5]=nt,s[lt+6]=st,s[lt+7]=B.x1,s[lt+8]=B.y1,r[lt+9]=Y,s[lt+10]=rt,s[lt+11]=ot,s[lt+12]=B.x2,s[lt+13]=B.y2,r[lt+14]=Y,s[lt+15]=et,s[lt+16]=it,s[lt+17]=B.x0,s[lt+18]=B.y0,r[lt+19]=Y,s[lt+20]=rt,s[lt+21]=ot,s[lt+22]=B.x2,s[lt+23]=B.y2,r[lt+24]=Y,s[lt+25]=at,s[lt+26]=ht,s[lt+27]=B.x3,s[lt+28]=B.y3,r[lt+29]=Y,this.vertexCount+=6}}_+=k,C-=k,this.vertexCount>=b&&(this.flush(),this.setTexture2D(w,0))}}}this.setTexture2D(w,0)},drawBlitter:function(t,e){this.renderer.setPipeline(this);for(var i=a.getTintAppendFloatAlpha,n=this.vertexViewF32,s=this.vertexViewU32,r=(this.renderer,t.getRenderList()),o=r.length,h=e.matrix.matrix,l=h[0],u=h[1],c=h[2],d=h[3],f=h[4],p=h[5],v=e.scrollX*t.scrollFactorX,g=e.scrollY*t.scrollFactorY,y=Math.ceil(o/this.maxQuads),m=0,x=t.x-v,b=t.y-g,w=0;w<y;++w){for(var T=Math.min(o,this.maxQuads),S=0;S<T;++S){var A=r[m+S],C=A.frame,M=A.alpha,_=i(16777215,M),E=C.uvs,P=A.flipX,L=A.flipY,k=C.width*(P?-1:1),F=C.height*(L?-1:1),O=x+A.x+C.x+C.width*(P?1:0),R=b+A.y+C.y+C.height*(L?1:0),B=O+k,D=R+F,I=O*l+R*c+f,Y=O*u+R*d+p,z=B*l+D*c+f,X=B*u+D*d+p;this.setTexture2D(C.texture.source[C.sourceIndex].glTexture,0);var N=this.vertexCount*this.vertexComponentCount;n[N+0]=I,n[N+1]=Y,n[N+2]=E.x0,n[N+3]=E.y0,s[N+4]=_,n[N+5]=I,n[N+6]=X,n[N+7]=E.x1,n[N+8]=E.y1,s[N+9]=_,n[N+10]=z,n[N+11]=X,n[N+12]=E.x2,n[N+13]=E.y2,s[N+14]=_,n[N+15]=I,n[N+16]=Y,n[N+17]=E.x0,n[N+18]=E.y0,s[N+19]=_,n[N+20]=z,n[N+21]=X,n[N+22]=E.x2,n[N+23]=E.y2,s[N+24]=_,n[N+25]=z,n[N+26]=Y,n[N+27]=E.x3,n[N+28]=E.y3,s[N+29]=_,this.vertexCount+=6,this.vertexCount>=this.vertexCapacity&&this.flush()}m+=T,o-=T,this.vertexCount>=this.vertexCapacity&&this.flush()}},batchSprite:function(t,e){this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush();var i=a.getTintAppendFloatAlpha,n=this.vertexViewF32,s=this.vertexViewU32,r=(this.renderer,e.matrix.matrix),o=t.frame,h=o.texture.source[o.sourceIndex].glTexture,l=!!h.isRenderTexture,u=t.flipX,c=t.flipY^l,d=o.uvs,f=o.width*(u?-1:1),p=o.height*(c?-1:1),v=-t.displayOriginX+o.x+o.width*(u?1:0),g=-t.displayOriginY+o.y+o.height*(c?1:0),y=v+f,m=g+p,x=t.x-e.scrollX*t.scrollFactorX,b=t.y-e.scrollY*t.scrollFactorY,w=t.scaleX,T=t.scaleY,S=-t.rotation,A=t._alphaTL,C=t._alphaTR,M=t._alphaBL,_=t._alphaBR,E=t._tintTL,P=t._tintTR,L=t._tintBL,k=t._tintBR,F=Math.sin(S),O=Math.cos(S),R=O*w,B=-F*w,D=F*T,I=O*T,Y=x,z=b,X=r[0],N=r[1],V=r[2],W=r[3],G=r[4],U=r[5],j=R*X+B*V,H=R*N+B*W,q=D*X+I*V,K=D*N+I*W,J=Y*X+z*V+G,Z=Y*N+z*W+U,Q=v*j+g*q+J,$=v*H+g*K+Z,tt=v*j+m*q+J,et=v*H+m*K+Z,it=y*j+m*q+J,nt=y*H+m*K+Z,st=y*j+g*q+J,rt=y*H+g*K+Z,ot=i(E,A),at=i(P,C),ht=i(L,M),lt=i(k,_),ut=0;this.setTexture2D(h,0),ut=this.vertexCount*this.vertexComponentCount,n[ut+0]=Q,n[ut+1]=$,n[ut+2]=d.x0,n[ut+3]=d.y0,s[ut+4]=ot,n[ut+5]=tt,n[ut+6]=et,n[ut+7]=d.x1,n[ut+8]=d.y1,s[ut+9]=ht,n[ut+10]=it,n[ut+11]=nt,n[ut+12]=d.x2,n[ut+13]=d.y2,s[ut+14]=lt,n[ut+15]=Q,n[ut+16]=$,n[ut+17]=d.x0,n[ut+18]=d.y0,s[ut+19]=ot,n[ut+20]=it,n[ut+21]=nt,n[ut+22]=d.x2,n[ut+23]=d.y2,s[ut+24]=lt,n[ut+25]=st,n[ut+26]=rt,n[ut+27]=d.x3,n[ut+28]=d.y3,s[ut+29]=at,this.vertexCount+=6},batchMesh:function(t,e){var i=t.vertices,n=i.length,s=n/2|0;this.renderer.setPipeline(this),this.vertexCount+s>this.vertexCapacity&&this.flush();var r=a.getTintAppendFloatAlpha,o=t.uv,h=t.colors,l=t.alphas,u=this.vertexViewF32,c=this.vertexViewU32,d=(this.renderer,e.matrix.matrix),f=t.frame,p=t.texture.source[f.sourceIndex].glTexture,v=t.x-e.scrollX*t.scrollFactorX,g=t.y-e.scrollY*t.scrollFactorY,y=t.scaleX,m=t.scaleY,x=-t.rotation,b=Math.sin(x),w=Math.cos(x),T=w*y,S=-b*y,A=b*m,C=w*m,M=v,_=g,E=d[0],P=d[1],L=d[2],k=d[3],F=d[4],O=d[5],R=T*E+S*L,B=T*P+S*k,D=A*E+C*L,I=A*P+C*k,Y=M*E+_*L+F,z=M*P+_*k+O,X=0;this.setTexture2D(p,0),X=this.vertexCount*this.vertexComponentCount;for(var N=0,V=0;N<n;N+=2){var W=i[N+0],G=i[N+1],U=W*R+G*D+Y,j=W*B+G*I+z;u[X+0]=U,u[X+1]=j,u[X+2]=o[N+0],u[X+3]=o[N+1],c[X+4]=r(h[V],l[V]),X+=5,V+=1}this.vertexCount+=s},batchBitmapText:function(t,e){this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush();var i,n,s,r,o,h,l,u,c=t.text,d=c.length,f=a.getTintAppendFloatAlpha,p=this.vertexViewF32,v=this.vertexViewU32,g=(this.renderer,e.matrix.matrix),y=e.width+50,m=e.height+50,x=t.frame,b=t.texture.source[x.sourceIndex],w=e.scrollX*t.scrollFactorX,T=e.scrollY*t.scrollFactorY,S=t.fontData,A=S.lineHeight,C=t.fontSize/S.size,M=S.chars,_=t.alpha,E=f(t._tintTL,_),P=f(t._tintTR,_),L=f(t._tintBL,_),k=f(t._tintBR,_),F=t.x,O=t.y,R=x.cutX,B=x.cutY,D=b.width,I=b.height,Y=b.glTexture,z=0,X=0,N=0,V=0,W=null,G=0,U=0,j=0,H=0,q=0,K=0,J=0,Z=0,Q=0,$=0,tt=0,et=0,it=null,nt=0,st=F-w+x.x,rt=O-T+x.y,ot=-t.rotation,at=t.scaleX,ht=t.scaleY,lt=Math.sin(ot),ut=Math.cos(ot),ct=ut*at,dt=-lt*at,ft=lt*ht,pt=ut*ht,vt=st,gt=rt,yt=g[0],mt=g[1],xt=g[2],bt=g[3],wt=g[4],Tt=g[5],St=ct*yt+dt*xt,At=ct*mt+dt*bt,Ct=ft*yt+pt*xt,Mt=ft*mt+pt*bt,_t=vt*yt+gt*xt+wt,Et=vt*mt+gt*bt+Tt,Pt=0;this.setTexture2D(Y,0);for(var Lt=0;Lt<d;++Lt)if(10!==(V=c.charCodeAt(Lt))){if(W=M[V]){if(G=R+W.x,U=B+W.y,j=W.width,H=W.height,q=(N+W.xOffset+z)*C,K=(W.yOffset+X)*C,null!==it){var kt=W.kerning[nt];q+=void 0!==kt?kt:0}z+=W.xAdvance,N+=1,it=W,nt=V,0!==j&&0!==H&&32!==V&&(q-=t.displayOriginX,K-=t.displayOriginY,J=q+j*C,Z=K+H*C,i=q*St+K*Ct+_t,n=q*At+K*Mt+Et,s=q*St+Z*Ct+_t,r=q*At+Z*Mt+Et,o=J*St+Z*Ct+_t,h=J*At+Z*Mt+Et,l=J*St+K*Ct+_t,u=J*At+K*Mt+Et,Q=G/D,$=(G+j)/D,tt=U/I,et=(U+H)/I,(i<-50||i>y||n<-50||n>m)&&(s<-50||s>y||r<-50||r>m)&&(o<-50||o>y||h<-50||h>m)&&(l<-50||l>y||u<-50||u>m)||(this.vertexCount+6>this.vertexCapacity&&this.flush(),Pt=this.vertexCount*this.vertexComponentCount,p[Pt+0]=i,p[Pt+1]=n,p[Pt+2]=Q,p[Pt+3]=tt,v[Pt+4]=E,p[Pt+5]=s,p[Pt+6]=r,p[Pt+7]=Q,p[Pt+8]=et,v[Pt+9]=L,p[Pt+10]=o,p[Pt+11]=h,p[Pt+12]=$,p[Pt+13]=et,v[Pt+14]=k,p[Pt+15]=i,p[Pt+16]=n,p[Pt+17]=Q,p[Pt+18]=tt,v[Pt+19]=E,p[Pt+20]=o,p[Pt+21]=h,p[Pt+22]=$,p[Pt+23]=et,v[Pt+24]=k,p[Pt+25]=l,p[Pt+26]=u,p[Pt+27]=$,p[Pt+28]=tt,v[Pt+29]=P,this.vertexCount+=6))}}else z=0,N=0,X+=A,it=null},batchDynamicBitmapText:function(t,e){this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush();var i,n,s,r,o,h,l,u,c,d,f,p,v,g,y=t.displayCallback,m=t.text,x=m.length,b=a.getTintAppendFloatAlpha,w=this.vertexViewF32,T=this.vertexViewU32,S=this.renderer,A=e.matrix.matrix,C=t.frame,M=t.texture.source[C.sourceIndex],_=e.scrollX*t.scrollFactorX,E=e.scrollY*t.scrollFactorY,P=t.scrollX,L=t.scrollY,k=t.fontData,F=k.lineHeight,O=t.fontSize/k.size,R=k.chars,B=t.alpha,D=b(t._tintTL,B),I=b(t._tintTR,B),Y=b(t._tintBL,B),z=b(t._tintBR,B),X=t.x,N=t.y,V=C.cutX,W=C.cutY,G=M.width,U=M.height,j=M.glTexture,H=0,q=0,K=0,J=0,Z=null,Q=0,$=0,tt=0,et=0,it=0,nt=0,st=0,rt=0,ot=0,at=0,ht=0,lt=0,ut=null,ct=0,dt=X+C.x,ft=N+C.y,pt=-t.rotation,vt=t.scaleX,gt=t.scaleY,yt=Math.sin(pt),mt=Math.cos(pt),xt=mt*vt,bt=-yt*vt,wt=yt*gt,Tt=mt*gt,St=dt,At=ft,Ct=A[0],Mt=A[1],_t=A[2],Et=A[3],Pt=A[4],Lt=A[5],kt=xt*Ct+bt*_t,Ft=xt*Mt+bt*Et,Ot=wt*Ct+Tt*_t,Rt=wt*Mt+Tt*Et,Bt=St*Ct+At*_t+Pt,Dt=St*Mt+At*Et+Lt,It=t.cropWidth>0||t.cropHeight>0,Yt=0;this.setTexture2D(j,0),It&&S.pushScissor(t.x,t.y,t.cropWidth*t.scaleX,t.cropHeight*t.scaleY);for(var zt=0;zt<x;++zt)if(O=t.fontSize/t.fontData.size,pt=0,10!==(J=m.charCodeAt(zt))){if(Z=R[J]){if(Q=V+Z.x,$=W+Z.y,tt=Z.width,et=Z.height,it=K+Z.xOffset+H-P,nt=Z.yOffset+q-L,null!==ut){var Xt=Z.kerning[ct];it+=void 0!==Xt?Xt:0}if(H+=Z.xAdvance,K+=1,ut=Z,ct=J,0!==tt&&0!==et&&32!==J){if(y){var Nt=y({color:0,tint:{topLeft:D,topRight:I,bottomLeft:Y,bottomRight:z},index:zt,charCode:J,x:it,y:nt,scale:O,rotation:0,data:Z.data});it=Nt.x,nt=Nt.y,O=Nt.scale,pt=Nt.rotation,Nt.color?(D=Nt.color,I=Nt.color,Y=Nt.color,z=Nt.color):(D=Nt.tint.topLeft,I=Nt.tint.topRight,Y=Nt.tint.bottomLeft,z=Nt.tint.bottomRight),D=b(D,B),I=b(I,B),Y=b(Y,B),z=b(z,B)}it-=t.displayOriginX,nt-=t.displayOriginY,it*=O,nt*=O,it-=_,nt-=E,yt=Math.sin(-pt),mt=Math.cos(-pt),c=mt*O,d=-yt*O,f=yt*O,p=mt*O,v=it,g=nt,xt=c*kt+d*Ot,bt=c*Ft+d*Rt,wt=f*kt+p*Ot,Tt=f*Ft+p*Rt,St=v*kt+g*Ot+Bt,At=v*Ft+g*Rt+Dt,st=tt,rt=et,i=St,n=At,s=rt*wt+St,r=rt*Tt+At,o=st*xt+rt*wt+St,h=st*bt+rt*Tt+At,l=st*xt+St,u=st*bt+At,ot=Q/G,at=(Q+tt)/G,ht=$/U,lt=($+et)/U,this.vertexCount+6>this.vertexCapacity&&this.flush(),Yt=this.vertexCount*this.vertexComponentCount,w[Yt+0]=i,w[Yt+1]=n,w[Yt+2]=ot,w[Yt+3]=ht,T[Yt+4]=D,w[Yt+5]=s,w[Yt+6]=r,w[Yt+7]=ot,w[Yt+8]=lt,T[Yt+9]=Y,w[Yt+10]=o,w[Yt+11]=h,w[Yt+12]=at,w[Yt+13]=lt,T[Yt+14]=z,w[Yt+15]=i,w[Yt+16]=n,w[Yt+17]=ot,w[Yt+18]=ht,T[Yt+19]=D,w[Yt+20]=o,w[Yt+21]=h,w[Yt+22]=at,w[Yt+23]=lt,T[Yt+24]=z,w[Yt+25]=l,w[Yt+26]=u,w[Yt+27]=at,w[Yt+28]=ht,T[Yt+29]=I,this.vertexCount+=6}}}else H=0,K=0,q+=F,ut=null;It&&S.popScissor()},batchText:function(t,e){var i=a.getTintAppendFloatAlpha;this.batchTexture(t,t.canvasTexture,t.canvasTexture.width,t.canvasTexture.height,t.x,t.y,t.canvasTexture.width,t.canvasTexture.height,t.scaleX,t.scaleY,t.rotation,t.flipX,t.flipY,t.scrollFactorX,t.scrollFactorY,t.displayOriginX,t.displayOriginY,0,0,t.canvasTexture.width,t.canvasTexture.height,i(t._tintTL,t._alphaTL),i(t._tintTR,t._alphaTR),i(t._tintBL,t._alphaBL),i(t._tintBR,t._alphaBR),0,0,e)},batchDynamicTilemapLayer:function(t,e){for(var i=t.culledTiles,n=i.length,s=t.tileset.image.get().source.glTexture,r=t.tileset,o=t.scrollFactorX,h=t.scrollFactorY,l=t.alpha,u=t.x,c=t.y,d=t.scaleX,f=t.scaleY,p=a.getTintAppendFloatAlpha,v=0;v<n;++v){var g=i[v],y=r.getTileTextureCoordinates(g.index);if(null!==y){var m=g.width,x=g.height,b=y.x,w=y.y,T=p(g.tint,l*g.alpha);this.batchTexture(t,s,s.width,s.height,g.width/2+u+g.pixelX*d,g.height/2+c+g.pixelY*f,g.width*d,g.height*f,1,1,g.rotation,g.flipX,g.flipY,o,h,g.width/2,g.height/2,b,w,m,x,T,T,T,T,0,0,e)}}},batchTileSprite:function(t,e){var i=a.getTintAppendFloatAlpha;this.batchTexture(t,t.tileTexture,t.frame.width,t.frame.height,t.x,t.y,t.width,t.height,t.scaleX,t.scaleY,t.rotation,t.flipX,t.flipY,t.scrollFactorX,t.scrollFactorY,t.originX*t.width,t.originY*t.height,0,0,t.width,t.height,i(t._tintTL,t._alphaTL),i(t._tintTR,t._alphaTR),i(t._tintBL,t._alphaBL),i(t._tintBR,t._alphaBR),t.tilePositionX/t.frame.width,t.tilePositionY/t.frame.height,e)},batchTexture:function(t,e,i,n,s,r,o,a,h,l,u,c,d,f,p,v,g,y,m,x,b,w,T,S,A,C,M,_){this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush(),d^=e.isRenderTexture?1:0,u=-u;var E=this.vertexViewF32,P=this.vertexViewU32,L=(this.renderer,_.matrix.matrix),k=o*(c?-1:1),F=a*(d?-1:1),O=o*(c?1:0)-v,R=a*(d?1:0)-g,B=O+k,D=R+F,I=s-_.scrollX*f,Y=r-_.scrollY*p,z=Math.sin(u),X=Math.cos(u),N=X*h,V=-z*h,W=z*l,G=X*l,U=I,j=Y,H=L[0],q=L[1],K=L[2],J=L[3],Z=L[4],Q=L[5],$=N*H+V*K,tt=N*q+V*J,et=W*H+G*K,it=W*q+G*J,nt=U*H+j*K+Z,st=U*q+j*J+Q,rt=O*$+R*et+nt,ot=O*tt+R*it+st,at=O*$+D*et+nt,ht=O*tt+D*it+st,lt=B*$+D*et+nt,ut=B*tt+D*it+st,ct=B*$+R*et+nt,dt=B*tt+R*it+st,ft=0,pt=y/i+C,vt=m/n+M,gt=(y+x)/i+C,yt=(m+b)/n+M;this.setTexture2D(e,0),ft=this.vertexCount*this.vertexComponentCount,E[ft+0]=rt,E[ft+1]=ot,E[ft+2]=pt,E[ft+3]=vt,P[ft+4]=w,E[ft+5]=at,E[ft+6]=ht,E[ft+7]=pt,E[ft+8]=yt,P[ft+9]=T,E[ft+10]=lt,E[ft+11]=ut,E[ft+12]=gt,E[ft+13]=yt,P[ft+14]=S,E[ft+15]=rt,E[ft+16]=ot,E[ft+17]=pt,E[ft+18]=vt,P[ft+19]=w,E[ft+20]=lt,E[ft+21]=ut,E[ft+22]=gt,E[ft+23]=yt,P[ft+24]=S,E[ft+25]=ct,E[ft+26]=dt,E[ft+27]=gt,E[ft+28]=vt,P[ft+29]=A,this.vertexCount+=6},drawTexture:function(t,e,i,n,s,r,o,a){this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush();var h=this.vertexViewF32,l=this.vertexViewU32,u=(this.renderer,r),c=o,d=e,f=i,p=d+u,v=f+c,g=a[0],y=a[1],m=a[2],x=a[3],b=a[4],w=a[5],T=d*g+f*m+b,S=d*y+f*x+w,A=d*g+v*m+b,C=d*y+v*x+w,M=p*g+v*m+b,_=p*y+v*x+w,E=p*g+f*m+b,P=p*y+f*x+w,L=0,k=t.width,F=t.height,O=n/k,R=s/F,B=(n+r)/k,D=(s+o)/F,I=4294967295;this.setTexture2D(t,0),L=this.vertexCount*this.vertexComponentCount,h[L+0]=T,h[L+1]=S,h[L+2]=O,h[L+3]=R,l[L+4]=I,h[L+5]=A,h[L+6]=C,h[L+7]=O,h[L+8]=D,l[L+9]=I,h[L+10]=M,h[L+11]=_,h[L+12]=B,h[L+13]=D,l[L+14]=I,h[L+15]=T,h[L+16]=S,h[L+17]=O,h[L+18]=R,l[L+19]=I,h[L+20]=M,h[L+21]=_,h[L+22]=B,h[L+23]=D,l[L+24]=I,h[L+25]=E,h[L+26]=P,h[L+27]=B,h[L+28]=R,l[L+29]=I,this.vertexCount+=6,this.flush()},batchGraphics:function(){}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(13),r=i(259),o=i(263),a=i(266),h=i(267),l=i(8),u=i(268),c=i(269),d=new n({initialize:function(t,e){this.game=t,this.canvas,this.config=e,this.enabled=!0,this.events=new s,this.queue=[],this.keyboard=new o(this),this.mouse=new a(this),this.touch=new u(this),this.gamepad=new r(this),this.activePointer=new h(this,0),this.scale={x:1,y:1},this.globalTopOnly=!0,this.ignoreEvents=!1,this.bounds=new l,this._tempPoint={x:0,y:0},this._tempHitTest=[],t.events.once("boot",this.boot,this)},boot:function(){this.canvas=this.game.canvas,this.updateBounds(),this.keyboard.boot(),this.mouse.boot(),this.touch.boot(),this.gamepad.boot(),this.game.events.once("destroy",this.destroy,this)},updateBounds:function(){var t=this.canvas.getBoundingClientRect(),e=this.bounds;e.left=t.left+window.pageXOffset,e.top=t.top+window.pageYOffset,e.width=t.width,e.height=t.height},update:function(t){this.keyboard.update(),this.gamepad.update(),this.ignoreEvents=!1;var e=this.queue.length,i=this.activePointer;if(i.reset(),this.enabled&&0!==e){this.updateBounds(),this.scale.x=this.game.config.width/this.bounds.width,this.scale.y=this.game.config.height/this.bounds.height;for(var n=this.queue.splice(0,e),s=0;s<e;s++){var r=n[s];switch(r.type){case"mousemove":i.move(r,t);break;case"mousedown":i.down(r,t);break;case"mouseup":i.up(r,t);break;case"touchmove":i.touchmove(r,t);break;case"touchstart":i.touchstart(r,t);break;case"touchend":i.touchend(r,t);break;case"pointerlockchange":this.events.emit("pointerlockchange",r,this.mouse.locked)}}}},hitTest:function(t,e,i,n,s){void 0===s&&(s=this._tempHitTest);var r=this._tempPoint,o=n.width,a=n.height;if(s.length=0,!(t>=n.x&&e>=n.y&&t<=n.x+o&&e<=n.y+a))return s;n.getWorldPoint(t,e,r);for(var h=n.cull(i),l={x:0,y:0},u=0;u<h.length;u++){var d=h[u];if(d.input&&d.input.enabled&&d.willRender()){var f=r.x+n.scrollX*d.scrollFactorX-n.scrollX,p=r.y+n.scrollY*d.scrollFactorY-n.scrollY;c(f,p,d.x,d.y,d.rotation,d.scaleX,d.scaleY,l),this.pointWithinHitArea(d,l.x,l.y)&&s.push(d)}}return s},pointWithinHitArea:function(t,e,i){var n=t.input;return e+=t.displayOriginX,i+=t.displayOriginY,!!n.hitAreaCallback(n.hitArea,e,i,t)&&(n.localX=e,n.localY=i,!0)},pointWithinInteractiveObject:function(t,e,i){return!!t.hitArea&&(e+=t.gameObject.displayOriginX,i+=t.gameObject.displayOriginY,t.localX=e,t.localY=i,t.hitAreaCallback(t.hitArea,e,i,t))},transformX:function(t){return(t-this.bounds.left)*this.scale.x},transformY:function(t){return(t-this.bounds.top)*this.scale.y},getOffsetX:function(){return this.bounds.left},getOffsetY:function(){return this.bounds.top},getScaleX:function(){return this.game.config.width/this.bounds.width},getScaleY:function(){return this.game.config.height/this.bounds.height},destroy:function(){this.events.removeAllListeners(),this.keyboard.destroy(),this.mouse.destroy(),this.touch.destroy(),this.gamepad.destroy(),this.activePointer.destroy(),this.queue=[],this.game=null}});t.exports=d},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(260),r=new n({initialize:function(t){this.manager=t,this.events=t.events,this.enabled=!1,this.target,this.handler,this.gamepads=[],this.queue=[]},boot:function(){var t=this.manager.config;this.enabled=t.inputGamepad&&this.manager.game.device.input.gamepads,this.target=window,this.enabled&&this.startListeners()},startListeners:function(){var t=this.queue,e=function(e){e.defaultPrevented||t.push(e)};this.handler=e;var i=this.target;i.addEventListener("gamepadconnected",e,!1),i.addEventListener("gamepaddisconnected",e,!1),i.addEventListener("gamepadbuttondown",e,!1),i.addEventListener("gamepadbuttonup",e,!1),i.addEventListener("gamepadaxismove",e,!1)},stopListeners:function(){var t=this.target,e=this.handler;t.removeEventListener("gamepadconnected",e),t.removeEventListener("gamepaddisconnected",e),t.removeEventListener("gamepadbuttondown",e),t.removeEventListener("gamepadbuttonup",e),t.removeEventListener("gamepadaxismove",e)},disconnectAll:function(){for(var t=0;t<this.gamepads.length;t++)this.gamepads.connected=!1},addPad:function(t){var e=new s(this,t.id,t.index);return this.gamepads[t.index]=e,e},removePad:function(){},refreshPads:function(t){if(t)for(var e=0;e<t.length;e++){var i=t[e];i&&(void 0===this.gamepads[i.index]&&this.addPad(i),this.gamepads[i.index].update(i))}else this.disconnectAll()},getAll:function(){for(var t=[],e=0;e<this.gamepads.length;e++)this.gamepads[e]&&t.push(this.gamepads[e]);return t},getPad:function(t){for(var e=0;e<this.gamepads.length;e++)if(this.gamepads[e].index===t)return this.gamepads[e]},update:function(){if(this.enabled){this.refreshPads(navigator.getGamepads());var t=this.queue.length;if(0!==t)for(var e=this.queue.splice(0,t),i=0;i<t;i++){var n,s=e[i];switch(s.type){case"gamepadconnected":n=this.getPad(s.gamepad.index),this.events.emit("connected",n,s);break;case"gamepaddisconnected":n=this.getPad(s.gamepad.index),this.events.emit("disconnected",n,s)}}}},destroy:function(){this.stopListeners(),this.disconnectAll(),this.gamepads=[]},total:{get:function(){return this.gamepads.length}}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(261),s=i(262),r=i(0),o=new r({initialize:function(t,e,i){this.manager=t,this.events=t.events,this.id=e,this.index=i,this.connected=!0,this.timestamp=0,this.buttons=[],this.axes=[]},update:function(t){this.timestamp=t.timestamp,this.connected=t.connected;var e,i=this.axes,r=this.buttons;for(e=0;e<t.buttons.length;e++){var o=t.buttons[e];void 0===r[e]&&(r[e]=new s(this,e)),r[e].update(o)}for(e=0;e<t.axes.length;e++){var a=t.axes[e];void 0===i[e]&&(i[e]=new n(this,e)),i[e].update(a)}}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){this.pad=t,this.events=t.events,this.index=e,this.value=0,this.threshold=.05},update:function(t){this.value=t},getValue:function(){var t=(Math.abs(this.value)-this.threshold)/(1-this.threshold);return t<0&&(t=0),t*(this.value>0?1:-1)}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){this.pad=t,this.events=t.events,this.index=e,this.value=0,this.threshold=0,this.pressed=!1},update:function(t){this.value=t.value,this.value>=this.threshold?this.pressed||(this.pressed=!0,this.events.emit("down",this.pad,this,this.value,t)):this.pressed&&(this.pressed=!1,this.events.emit("up",this.pad,this,this.value,t))}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(13),r=i(264),o=i(140),a=i(265),h=i(566),l=i(567),u=i(568),c=new n({Extends:s,initialize:function(t){s.call(this),this.manager=t,this.enabled=!1,this.target,this.keys=[],this.combos=[],this.captures=[],this.queue=[],this.handler},boot:function(){var t=this.manager.config;this.enabled=t.inputKeyboard,this.target=t.inputKeyboardEventTarget,this.enabled&&this.startListeners()},startListeners:function(){var t=this.queue,e=this.captures,i=function(i){i.defaultPrevented||(t.push(i),e[i.keyCode]&&i.preventDefault())};this.handler=i,this.target.addEventListener("keydown",i,!1),this.target.addEventListener("keyup",i,!1)},stopListeners:function(){this.target.removeEventListener("keydown",this.handler),this.target.removeEventListener("keyup",this.handler)},createCursorKeys:function(){return this.addKeys({up:o.UP,down:o.DOWN,left:o.LEFT,right:o.RIGHT,space:o.SPACE,shift:o.SHIFT})},addKeys:function(t){var e={};for(var i in t)e[i]=this.addKey(t[i]);return e},addKey:function(t){var e=this.keys;return e[t]||(e[t]=new r(t),this.captures[t]=!0),e[t]},removeKey:function(t){this.keys[t]&&(this.keys[t]=void 0,this.captures[t]=!1)},addKeyCapture:function(t){Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++)this.captures[t[e]]=!0},removeKeyCapture:function(t){Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++)this.captures[t[e]]=!1},createCombo:function(t,e){return new a(this,t,e)},update:function(){var t=this.queue.length;if(this.enabled&&0!==t)for(var e=this.queue.splice(0,t),i=this.keys,n=0;n<t;n++){var s=e[n],r=s.keyCode;this.emit(s.type,s),"keydown"===s.type?(h[r]&&this.emit("keydown_"+h[r],s),i[r]&&l(i[r],s)):(this.emit("keyup_"+h[r],s),i[r]&&u(i[r],s))}},shutdown:function(){this.removeAllListeners()},destroy:function(){this.stopListeners(),this.removeAllListeners(),this.keys=[],this.combos=[],this.captures=[],this.queue=[],this.handler=void 0,this.manager=null}});t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.keyCode=t,this.originalEvent=void 0,this.preventDefault=!0,this.enabled=!0,this.isDown=!1,this.isUp=!0,this.altKey=!1,this.ctrlKey=!1,this.shiftKey=!1,this.location=0,this.timeDown=0,this.duration=0,this.timeUp=0,this.repeats=0,this._justDown=!1,this._justUp=!1}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(1),r=i(563),o=i(565),a=new n({initialize:function(t,e,i){if(void 0===i&&(i={}),e.length<2)return!1;this.manager=t,this.enabled=!0,this.keyCodes=[];for(var n=0;n<e.length;n++){var a=e[n];"string"==typeof a?this.keyCodes.push(a.toUpperCase().charCodeAt(0)):"number"==typeof a?this.keyCodes.push(a):a.hasOwnProperty("keyCode")&&this.keyCodes.push(a.keyCode)}this.current=this.keyCodes[0],this.index=0,this.size=this.keyCodes.length,this.timeLastMatched=0,this.matched=!1,this.timeMatched=0,this.resetOnWrongKey=s(i,"resetOnWrongKey",!0),this.maxKeyDelay=s(i,"maxKeyDelay",0),this.resetOnMatch=s(i,"resetOnMatch",!1),this.deleteOnMatch=s(i,"deleteOnMatch",!1);var h=this,l=function(t){if(!h.matched&&h.enabled){r(t,h)&&(h.manager.emit("keycombomatch",h,t),h.resetOnMatch?o(h):h.deleteOnMatch&&h.destroy())}};this.onKeyDown=l,this.manager.on("keydown",l)},progress:{get:function(){return this.index/this.size}},destroy:function(){this.enabled=!1,this.keyCodes=[],this.manager.off("keydown",this.onKeyDown),this.manager=void 0}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(136),r=new n({initialize:function(t){this.manager=t,this.capture=!0,this.enabled=!1,this.target,this.handler,this.locked=!1},boot:function(){var t=this.manager.config;this.enabled=t.inputMouse,this.target=t.inputMouseEventTarget,this.capture=t.inputMouseCapture,this.target||(this.target=this.manager.game.canvas),t.disableContextMenu&&this.disableContextMenu(),this.enabled&&this.startListeners()},disableContextMenu:function(){return document.body.addEventListener("contextmenu",function(t){return t.preventDefault(),!1}),this},requestPointerLock:function(){if(s.pointerLock){var t=this.target;t.requestPointerLock=t.requestPointerLock||t.mozRequestPointerLock||t.webkitRequestPointerLock,t.requestPointerLock()}},pointerLockChange:function(t){var e=this.target;this.locked=document.pointerLockElement===e||document.mozPointerLockElement===e||document.webkitPointerLockElement===e,this.manager.queue.push(t)},releasePointerLock:function(){s.pointerLock&&(document.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock,document.exitPointerLock())},startListeners:function(){var t,e=this.manager.queue,i=this.target,n={passive:!0},r={passive:!1};this.capture?(t=function(t){t.defaultPrevented||(e.push(t),t.preventDefault())},i.addEventListener("mousemove",t,r),i.addEventListener("mousedown",t,r),i.addEventListener("mouseup",t,r)):(t=function(t){t.defaultPrevented||e.push(t)},i.addEventListener("mousemove",t,n),i.addEventListener("mousedown",t,n),i.addEventListener("mouseup",t,n)),this.handler=t,s.pointerLock&&(this.pointerLockChange=this.pointerLockChange.bind(this),document.addEventListener("pointerlockchange",this.pointerLockChange,!0),document.addEventListener("mozpointerlockchange",this.pointerLockChange,!0),document.addEventListener("webkitpointerlockchange",this.pointerLockChange,!0))},stopListeners:function(){var t=this.target;t.removeEventListener("mousemove",this.handler),t.removeEventListener("mousedown",this.handler),t.removeEventListener("mouseup",this.handler),s.pointerLock&&(document.removeEventListener("pointerlockchange",this.pointerLockChange,!0),document.removeEventListener("mozpointerlockchange",this.pointerLockChange,!0),document.removeEventListener("webkitpointerlockchange",this.pointerLockChange,!0))},destroy:function(){this.stopListeners(),this.manager=null}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(6),r=new n({initialize:function(t,e){this.manager=t,this.id=e,this.event,this.camera=null,this.buttons=0,this.position=new s,this.downX=0,this.downY=0,this.downTime=0,this.upX=0,this.upY=0,this.upTime=0,this.primaryDown=!1,this.dragState=0,this.isDown=!1,this.dirty=!1,this.justDown=!1,this.justUp=!1,this.justMoved=!1,this.wasTouch=!1,this.movementX=0,this.movementY=0},positionToCamera:function(t,e){return t.getWorldPoint(this.x,this.y,e)},x:{get:function(){return this.position.x},set:function(t){this.position.x=t}},y:{get:function(){return this.position.y},set:function(t){this.position.y=t}},reset:function(){this.dirty=!1,this.justDown=!1,this.justUp=!1,this.justMoved=!1,this.movementX=0,this.movementY=0},touchmove:function(t){this.event=t,this.x=this.manager.transformX(t.changedTouches[0].pageX),this.y=this.manager.transformY(t.changedTouches[0].pageY),this.justMoved=!0,this.dirty=!0,this.wasTouch=!0},move:function(t){t.buttons&&(this.buttons=t.buttons),this.event=t,this.x=this.manager.transformX(t.pageX),this.y=this.manager.transformY(t.pageY),this.manager.mouse.locked&&(this.movementX+=t.movementX||t.mozMovementX||t.webkitMovementX||0,this.movementY+=t.movementY||t.mozMovementY||t.webkitMovementY||0),this.justMoved=!0,this.dirty=!0,this.wasTouch=!1},down:function(t,e){t.buttons&&(this.buttons=t.buttons),this.event=t,this.x=this.manager.transformX(t.pageX),this.y=this.manager.transformY(t.pageY),0===t.button&&(this.primaryDown=!0,this.downX=this.x,this.downY=this.y,this.downTime=e),this.justDown=!0,this.isDown=!0,this.dirty=!0,this.wasTouch=!1},touchstart:function(t,e){this.buttons=1,this.event=t,this.x=this.manager.transformX(t.changedTouches[0].pageX),this.y=this.manager.transformY(t.changedTouches[0].pageY),this.primaryDown=!0,this.downX=this.x,this.downY=this.y,this.downTime=e,this.justDown=!0,this.isDown=!0,this.dirty=!0,this.wasTouch=!0},up:function(t,e){t.buttons&&(this.buttons=t.buttons),this.event=t,this.x=this.manager.transformX(t.pageX),this.y=this.manager.transformY(t.pageY),0===t.button&&(this.primaryDown=!1,this.upX=this.x,this.upY=this.y,this.upTime=e),this.justUp=!0,this.isDown=!1,this.dirty=!0,this.wasTouch=!1},touchend:function(t,e){this.buttons=0,this.event=t,this.x=this.manager.transformX(t.changedTouches[0].pageX),this.y=this.manager.transformY(t.changedTouches[0].pageY),this.primaryDown=!1,this.upX=this.x,this.upY=this.y,this.upTime=e,this.justUp=!0,this.isDown=!1,this.dirty=!0,this.wasTouch=!0},noButtonDown:function(){return 0===this.buttons},leftButtonDown:function(){return 1&this.buttons},rightButtonDown:function(){return 2&this.buttons},middleButtonDown:function(){return 4&this.buttons},backButtonDown:function(){return 8&this.buttons},forwardButtonDown:function(){return 16&this.buttons},destroy:function(){this.camera=null,this.manager=null,this.position=null}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.manager=t,this.capture=!0,this.enabled=!1,this.target,this.handler},boot:function(){var t=this.manager.config;this.enabled=t.inputTouch,this.target=t.inputTouchEventTarget,this.capture=t.inputTouchCapture,this.target||(this.target=this.manager.game.canvas),this.enabled&&this.startListeners()},startListeners:function(){var t,e=this.manager.queue,i=this.target,n={passive:!0},s={passive:!1};this.capture?(t=function(t){t.defaultPrevented||(e.push(t),t.preventDefault())},i.addEventListener("touchstart",t,s),i.addEventListener("touchmove",t,s),i.addEventListener("touchend",t,s)):(t=function(t){t.defaultPrevented||e.push(t)},i.addEventListener("touchstart",t,n),i.addEventListener("touchmove",t,n),i.addEventListener("touchend",t,n)),this.handler=t},stopListeners:function(){var t=this.target;t.removeEventListener("touchstart",this.handler),t.removeEventListener("touchmove",this.handler),t.removeEventListener("touchend",this.handler)},destroy:function(){this.stopListeners(),this.manager=null}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e,i,s,r,o,a,h){void 0===h&&(h=new n);var l=Math.sin(-r),u=Math.cos(-r),c=u*o,d=-l*o,f=l*a,p=u*a,v=c*p-d*f,g=p/v,y=-d/v,m=-f/v,x=c/v,b=(f*s-p*i)/v,w=-(c*s-d*i)/v;return h.x=t*g+e*m+b,h.y=t*y+e*x+w,h};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(95),r=i(4),o=i(3),a=i(271),h=i(141),l=new n({initialize:function(t,e){if(this.game=t,this.keys={},this.scenes=[],this._pending=[],this._start=[],this._queue=[],this._processing=0,e){Array.isArray(e)||(e=[e]);for(var i=0;i<e.length;i++)this._pending.push({key:"default",scene:e[i],autoStart:0===i,data:{}});t.events.once("ready",this.processQueue,this)}},processQueue:function(){var t=this._pending.length,e=this._queue.length;if(0!==t||0!==e){var i,n;if(t){for(i=0;i<t;i++)n=this._pending[i],this.add(n.key,n.scene,n.autoStart);for(i=0;i<this._start.length;i++)n=this._start[i],this.start(n);return this._start.length=0,void(this._pending.length=0)}for(i=0;i<e;i++)n=this._queue[i],this[n.op](n.keyA,n.keyB);this._queue.length=0}},add:function(t,e,i){if(void 0===i&&(i=!1),1===this._processing||!this.game.isBooted)return this._pending.push({key:t,scene:e,autoStart:i,data:{}}),null;t=this.getKey(t,e);var n;return e instanceof a?n=this.createSceneFromInstance(t,e):"object"==typeof e?(e.key=t,n=this.createSceneFromObject(t,e)):"function"==typeof e&&(n=this.createSceneFromFunction(t,e)),t=n.sys.settings.key,this.keys[t]=n,this.scenes.push(n),(i||n.sys.settings.active)&&(this.game.isBooted?this.start(t):this._start.push(t)),n},bootScene:function(t){t.init&&t.init.call(t,t.sys.settings.data);var e;t.sys.load&&(e=t.sys.load,e.reset()),e&&t.preload?(t.preload.call(t),0===e.list.size?this.create(t):(t.sys.settings.status=s.LOADING,e.once("complete",this.loadComplete,this),e.start())):this.create(t)},loadComplete:function(t){var e=t.scene;this.create(e)},payloadComplete:function(t){this.bootScene(t.scene)},update:function(t,e){this.processQueue(),this._processing=1;for(var i=this.scenes.length-1;i>=0;i--){var n=this.scenes[i].sys;n.settings.status===s.RUNNING&&n.step(t,e)}},render:function(t){for(var e=0;e<this.scenes.length;e++){var i=this.scenes[e].sys;i.settings.visible&&i.render(t)}this._processing=0},create:function(t){t.create&&(t.sys.settings.status=s.CREATING,t.create.call(t,t.sys.settings.data)),t.sys.settings.status=s.RUNNING},createSceneFromFunction:function(t,e){var i=new e;if(i instanceof a){var n=i.sys.settings.key;if(""!==n&&(t=n),this.keys.hasOwnProperty(t))throw new Error("Cannot add a Scene with duplicate key: "+t);return this.createSceneFromInstance(t,i)}return i.sys=new h(i),i.sys.settings.key=t,i.sys.init(this.game),i.update||(i.update=o),i},createSceneFromInstance:function(t,e){var i=e.sys.settings.key;return""!==i?t=i:e.sys.settings.key=t,e.sys.init(this.game),e},createSceneFromObject:function(t,e){var i=new a(e),n=i.sys.settings.key;""!==n?t=n:i.sys.settings.key=t,i.sys.init(this.game);for(var s=["init","preload","create","update","render","shutdown","destroy"],h=0;h<s.length;h++){var l=r(e,s[h],null);"update"!==s[h]||l||(l=o),l&&(i[s[h]]=l)}if(e.hasOwnProperty("extend"))for(var u in e.extend)i[u]=e.extend[u];return i},getKey:function(t,e){if(t||(t="default"),"function"==typeof e)return t;if(e instanceof a?t=e.sys.settings.key:"object"==typeof e&&e.hasOwnProperty("key")&&(t=e.key),this.keys.hasOwnProperty(t))throw new Error("Cannot add a Scene with duplicate key: "+t);return t},getScene:function(t){if("string"==typeof t){if(this.keys[t])return this.keys[t]}else for(var e=0;e<this.scenes.length;e++)if(t===this.scenes[e])return t;return null},isActive:function(t){var e=this.getScene(t);return e?e.sys.isActive():null},isVisible:function(t){var e=this.getScene(t);return e?e.sys.isVisible():null},isSleeping:function(t){var e=this.getScene(t);return e?e.sys.isSleeping():null},pause:function(t){var e=this.getScene(t);return e&&e.sys.pause(),this},resume:function(t){var e=this.getScene(t);return e&&e.sys.resume(),this},sleep:function(t){var e=this.getScene(t);return e&&e.sys.sleep(),this},wake:function(t){var e=this.getScene(t);return e&&e.sys.wake(),this},start:function(t,e){if(void 0===e&&(e={}),!this.game.isBooted){for(var i=0;i<this._pending.length;i++){var n=this._pending[i];n.key===t&&(n.autoStart=!0,n.data=e)}return this}var r=this.getScene(t);if(r){r.sys.start(e);var o;if(r.sys.load&&(o=r.sys.load),o&&Array.isArray(r.sys.settings.files)&&(o.reset(),o.loadArray(r.sys.settings.files)))return r.sys.settings.status=s.LOADING,o.once("complete",this.payloadComplete,this),o.start(),this;this.bootScene(r)}return this},stop:function(t){var e=this.getScene(t);return e&&e.sys.shutdown(),this},switch:function(t,e){var i=this.getScene(t),n=this.getScene(e);return i&&n&&i!==n&&(this.sleep(t),this.isSleeping(e)?this.wake(e):this.start(e)),this},getAt:function(t){return this.scenes[t]},getIndex:function(t){var e=this.getScene(t);return this.scenes.indexOf(e)},bringToTop:function(t){if(this._processing)this._queue.push({op:"bringToTop",keyA:t,keyB:null});else{var e=this.getIndex(t);if(-1!==e&&e<this.scenes.length){var i=this.getScene(t);this.scenes.splice(e,1),this.scenes.push(i)}}return this},sendToBack:function(t){if(this._processing)this._queue.push({op:"sendToBack",keyA:t,keyB:null});else{var e=this.getIndex(t);if(-1!==e&&e>0){var i=this.getScene(t);this.scenes.splice(e,1),this.scenes.unshift(i)}}return this},moveDown:function(t){if(this._processing)this._queue.push({op:"moveDown",keyA:t,keyB:null});else{var e=this.getIndex(t);if(e>0){var i=e-1,n=this.getScene(t),s=this.getAt(i);this.scenes[e]=s,this.scenes[i]=n}}return this},moveUp:function(t){if(this._processing)this._queue.push({op:"moveUp",keyA:t,keyB:null});else{var e=this.getIndex(t);if(e<this.scenes.length-1){var i=e+1,n=this.getScene(t),s=this.getAt(i);this.scenes[e]=s,this.scenes[i]=n}}return this},queueOp:function(t,e,i){return this._queue.push({op:t,keyA:e,keyB:i}),this},swapPosition:function(t,e){if(t===e)return this;if(this._processing)this._queue.push({op:"swapPosition",keyA:t,keyB:e});else{var i=this.getIndex(t),n=this.getIndex(e);if(i!==n&&-1!==i&&-1!==n){var s=this.getAt(i);this.scenes[i]=this.scenes[n],this.scenes[n]=s}}return this},destroy:function(){for(var t=this.scenes.length-1;t>=0;t--){this.scenes[t].sys.destroy()}this.scenes=[],this._pending=[],this._start=[],this._queue=[],this.game=null}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(141),r=new n({initialize:function(t){this.sys=new s(this,t)},update:function(){}});t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t&&t[0].toUpperCase()+t.slice(1)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(95),s=i(4),r=i(571),o={create:function(t){return"string"==typeof t?t={key:t}:void 0===t&&(t={}),{status:n.PENDING,key:s(t,"key",""),active:s(t,"active",!1),visible:s(t,"visible",!0),isBooted:!1,data:{},files:s(t,"files",!1),cameras:s(t,"cameras",null),map:s(t,"map",r),physics:s(t,"physics",{}),loader:s(t,"loader",{}),plugins:s(t,"plugins",!1)}}};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(275),s=i(277),r=i(279),o={create:function(t){var e=t.config.audio,i=t.device.audio;return e&&e.noAudio||!i.webAudio&&!i.audioData?new s(t):!i.webAudio||e&&e.disableWebAudio?new n(t):new r(t)}};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(96),r=i(276),o=new n({Extends:s,initialize:function(t){this.override=!0,this.audioPlayDelay=.1,this.loopEndOffset=.05,this.onBlurPausedSounds=[],this.locked="ontouchstart"in window,this.lockedActionsQueue=this.locked?[]:null,this._mute=!1,this._volume=1,s.call(this,t)},add:function(t,e){var i=new r(this,t,e);return this.sounds.push(i),i},unlock:function(){var t=this,e=!1,i=function(){e=!0},n=function(){if(e)return void(e=!1);document.body.removeEventListener("touchmove",i),document.body.removeEventListener("touchend",n);var s=[];t.game.cache.audio.entries.each(function(t,e){for(var i=0;i<e.length;i++)s.push(e[i]);return!0});var r=s[s.length-1];r.oncanplaythrough=function(){r.oncanplaythrough=null,t.unlocked=!0},s.forEach(function(t){t.load()})};this.once("unlocked",function(){t.forEachActiveSound(function(t){t.duration=t.tags[0].duration,t.totalDuration=t.tags[0].duration}),t.lockedActionsQueue.forEach(function(t){t.sound[t.prop].apply?t.sound[t.prop].apply(t.sound,t.value||[]):t.sound[t.prop]=t.value}),t.lockedActionsQueue.length=0,t.lockedActionsQueue=null}),document.body.addEventListener("touchmove",i,!1),document.body.addEventListener("touchend",n,!1)},onBlur:function(){this.forEachActiveSound(function(t){t.isPlaying&&(this.onBlurPausedSounds.push(t),t.onBlur())})},onFocus:function(){this.onBlurPausedSounds.forEach(function(t){t.onFocus()}),this.onBlurPausedSounds.length=0},destroy:function(){s.prototype.destroy.call(this),this.onBlurPausedSounds.length=0,this.onBlurPausedSounds=null},isLocked:function(t,e,i){return!!this.locked&&(this.lockedActionsQueue.push({sound:t,prop:e,value:i}),!0)}});Object.defineProperty(o.prototype,"mute",{get:function(){return this._mute},set:function(t){this._mute=t,this.forEachActiveSound(function(t){t.setMute()}),this.emit("mute",this,t)}}),Object.defineProperty(o.prototype,"volume",{get:function(){return this._volume},set:function(t){this._volume=t,this.forEachActiveSound(function(t){t.setVolume()}),this.emit("volume",this,t)}}),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(97),r=new n({Extends:s,initialize:function(t,e,i){if(void 0===i&&(i={}),this.tags=t.game.cache.audio.get(e),!this.tags)return void console.error("No audio loaded in cache with key: '"+e+"'!");this.audio=null,this.startTime=0,this.previousTime=0,this.duration=this.tags[0].duration,this.totalDuration=this.tags[0].duration,s.call(this,t,e,i)},play:function(t,e){return!this.manager.isLocked(this,"play",[t,e])&&(!!s.prototype.play.call(this,t,e)&&(!!this.pickAndPlayAudioTag()&&(this.emit("play",this),!0)))},pause:function(){return!this.manager.isLocked(this,"pause")&&(!(this.startTime>0)&&(!!s.prototype.pause.call(this)&&(this.currentConfig.seek=this.audio.currentTime-(this.currentMarker?this.currentMarker.start:0),this.stopAndReleaseAudioTag(),this.emit("pause",this),!0)))},resume:function(){return!this.manager.isLocked(this,"resume")&&(!(this.startTime>0)&&(!!s.prototype.resume.call(this)&&(!!this.pickAndPlayAudioTag()&&(this.emit("resume",this),!0))))},stop:function(){return!this.manager.isLocked(this,"stop")&&(!!s.prototype.stop.call(this)&&(this.stopAndReleaseAudioTag(),this.emit("stop",this),!0))},pickAndPlayAudioTag:function(){if(!this.pickAudioTag())return this.reset(),!1;var t=this.currentConfig.seek,e=this.currentConfig.delay,i=(this.currentMarker?this.currentMarker.start:0)+t;return this.previousTime=i,this.audio.currentTime=i,this.applyConfig(),0===e?(this.startTime=0,this.audio.paused&&this.playCatchPromise()):(this.startTime=window.performance.now()+1e3*e,this.audio.paused||this.audio.pause()),this.resetConfig(),!0},pickAudioTag:function(){if(this.audio)return!0;for(var t=0;t<this.tags.length;t++){var e=this.tags[t];if("false"===e.dataset.used)return e.dataset.used="true",this.audio=e,!0}if(!this.manager.override)return!1;var i=[];this.manager.forEachActiveSound(function(t){t.key===this.key&&t.audio&&i.push(t)},this),i.sort(function(t,e){return t.loop===e.loop?e.seek/e.duration-t.seek/t.duration:t.loop?1:-1});var n=i[0];return this.audio=n.audio,n.reset(),n.audio=null,n.startTime=0,n.previousTime=0,!0},playCatchPromise:function(){var t=this.audio.play();t&&t.catch(function(t){})},stopAndReleaseAudioTag:function(){this.audio.pause(),this.audio.dataset.used="false",this.audio=null,this.startTime=0,this.previousTime=0},reset:function(){s.prototype.stop.call(this)},onBlur:function(){this.isPlaying=!1,this.isPaused=!0,this.currentConfig.seek=this.audio.currentTime-(this.currentMarker?this.currentMarker.start:0),this.currentConfig.delay=Math.max(0,(this.startTime-window.performance.now())/1e3),this.stopAndReleaseAudioTag()},onFocus:function(){this.isPlaying=!0,this.isPaused=!1,this.pickAndPlayAudioTag()},update:function(t,e){if(this.isPlaying){if(this.startTime>0)return void(this.startTime<t-this.manager.audioPlayDelay&&(this.audio.currentTime+=Math.max(0,t-this.startTime)/1e3,this.startTime=0,this.previousTime=this.audio.currentTime,this.playCatchPromise()));var i=this.currentMarker?this.currentMarker.start:0,n=i+this.duration,s=this.audio.currentTime;if(this.currentConfig.loop)s>=n-this.manager.loopEndOffset?(this.audio.currentTime=i+Math.max(0,s-n),s=this.audio.currentTime):s<i&&(this.audio.currentTime+=i,s=this.audio.currentTime),s<this.previousTime&&this.emit("looped",this);else if(s>=n)return this.reset(),this.stopAndReleaseAudioTag(),void this.emit("ended",this);this.previousTime=s}},destroy:function(){s.prototype.destroy.call(this),this.tags=null,this.audio&&this.stopAndReleaseAudioTag()},setMute:function(){this.audio&&(this.audio.muted=this.currentConfig.mute||this.manager.mute)},setVolume:function(){this.audio&&(this.audio.volume=this.currentConfig.volume*this.manager.volume)},setRate:function(){s.prototype.setRate.call(this),this.audio&&(this.audio.playbackRate=this.totalRate)}});Object.defineProperty(r.prototype,"mute",{get:function(){return this.currentConfig.mute},set:function(t){this.currentConfig.mute=t,this.manager.isLocked(this,"mute",t)||(this.setMute(),this.emit("mute",this,t))}}),Object.defineProperty(r.prototype,"volume",{get:function(){return this.currentConfig.volume},set:function(t){this.currentConfig.volume=t,this.manager.isLocked(this,"volume",t)||(this.setVolume(),this.emit("volume",this,t))}}),Object.defineProperty(r.prototype,"rate",{get:function(){return Object.getOwnPropertyDescriptor(s.prototype,"rate").get.call(this)},set:function(t){this.currentConfig.rate=t,this.manager.isLocked(this,"rate",t)||Object.getOwnPropertyDescriptor(s.prototype,"rate").set.call(this,t)}}),Object.defineProperty(r.prototype,"detune",{get:function(){return Object.getOwnPropertyDescriptor(s.prototype,"detune").get.call(this)},set:function(t){this.currentConfig.detune=t,this.manager.isLocked(this,"detune",t)||Object.getOwnPropertyDescriptor(s.prototype,"detune").set.call(this,t)}}),Object.defineProperty(r.prototype,"seek",{get:function(){return this.isPlaying?this.audio.currentTime-(this.currentMarker?this.currentMarker.start:0):this.isPaused?this.currentConfig.seek:0},set:function(t){this.manager.isLocked(this,"seek",t)||this.startTime>0||(this.isPlaying||this.isPaused)&&(t=Math.min(Math.max(0,t),this.duration),this.isPlaying?(this.previousTime=t,this.audio.currentTime=t):this.isPaused&&(this.currentConfig.seek=t),this.emit("seek",this,t))}}),Object.defineProperty(r.prototype,"loop",{get:function(){return this.currentConfig.loop},set:function(t){this.currentConfig.loop=t,this.manager.isLocked(this,"loop",t)||(this.audio&&(this.audio.loop=t),this.emit("loop",this,t))}}),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(96),s=i(0),r=i(13),o=i(278),a=i(3),h=new s({Extends:r,initialize:function(t){r.call(this),this.game=t,this.sounds=[],this.mute=!1,this.volume=1,this.rate=1,this.detune=0,this.pauseOnBlur=!0,this.locked=!1},add:function(t,e){var i=new o(this,t,e);return this.sounds.push(i),i},addAudioSprite:function(t,e){var i=this.add(t,e);return i.spritemap={},i},play:function(t,e){return!1},playAudioSprite:function(t,e,i){return!1},remove:function(t){return n.prototype.remove.call(this,t)},removeByKey:function(t){return n.prototype.removeByKey.call(this,t)},pauseAll:a,resumeAll:a,stopAll:a,update:a,destroy:function(){n.prototype.destroy.call(this)},forEachActiveSound:function(t,e){n.prototype.forEachActiveSound.call(this,t,e)}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(97),s=i(0),r=i(13),o=i(25),a=new s({Extends:r,initialize:function(t,e,i){void 0===i&&(i={}),r.call(this),this.manager=t,this.key=e,this.isPlaying=!1,this.isPaused=!1,this.totalRate=1,this.duration=0,this.totalDuration=0,this.config=o({mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!1,delay:0},i),this.currentConfig=this.config,this.mute=!1,this.volume=1,this.rate=1,this.detune=0,this.seek=0,this.loop=!1,this.markers={},this.currentMarker=null,this.pendingRemove=!1},addMarker:function(t){return!1},updateMarker:function(t){return!1},removeMarker:function(t){return null},play:function(t,e){return!1},pause:function(){return!1},resume:function(){return!1},stop:function(){return!1},destroy:function(){this.manager.remove(this),n.prototype.destroy.call(this)}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(96),r=i(280),o=new n({Extends:s,initialize:function(t){this.context=this.createAudioContext(t),this.masterMuteNode=this.context.createGain(),this.masterVolumeNode=this.context.createGain(),this.masterMuteNode.connect(this.masterVolumeNode),this.masterVolumeNode.connect(this.context.destination),this.destination=this.masterMuteNode,this.locked="suspended"===this.context.state&&"ontouchstart"in window,s.call(this,t)},createAudioContext:function(t){var e=t.config.audio;return e&&e.context?(e.context.resume(),e.context):new AudioContext},add:function(t,e){var i=new r(this,t,e);return this.sounds.push(i),i},unlock:function(){var t=this,e=function(){t.context.resume().then(function(){document.body.removeEventListener("touchstart",e),document.body.removeEventListener("touchend",e),t.unlocked=!0})};document.body.addEventListener("touchstart",e,!1),document.body.addEventListener("touchend",e,!1)},onBlur:function(){this.context.suspend()},onFocus:function(){this.context.resume()},destroy:function(){this.destination=null,this.masterVolumeNode.disconnect(),this.masterVolumeNode=null,this.masterMuteNode.disconnect(),this.masterMuteNode=null,this.game.config.audio&&this.game.config.audio.context?this.context.suspend():this.context.close(),this.context=null,s.prototype.destroy.call(this)}});Object.defineProperty(o.prototype,"mute",{get:function(){return 0===this.masterMuteNode.gain.value},set:function(t){this.masterMuteNode.gain.setValueAtTime(t?0:1,0),this.emit("mute",this,t)}}),Object.defineProperty(o.prototype,"volume",{get:function(){return this.masterVolumeNode.gain.value},set:function(t){this.masterVolumeNode.gain.setValueAtTime(t,0),this.emit("volume",this,t)}}),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(97),r=new n({Extends:s,initialize:function(t,e,i){if(void 0===i&&(i={}),this.audioBuffer=t.game.cache.audio.get(e),!this.audioBuffer)return void console.error("No audio loaded in cache with key: '"+e+"'!");this.source=null,this.loopSource=null,this.muteNode=t.context.createGain(),this.volumeNode=t.context.createGain(),this.playTime=0,this.startTime=0,this.loopTime=0,this.rateUpdates=[],this.hasEnded=!1,this.hasLooped=!1,this.muteNode.connect(this.volumeNode),this.volumeNode.connect(t.destination),this.duration=this.audioBuffer.duration,this.totalDuration=this.audioBuffer.duration,s.call(this,t,e,i)},play:function(t,e){return!!s.prototype.play.call(this,t,e)&&(this.stopAndRemoveBufferSource(),this.createAndStartBufferSource(),this.emit("play",this),!0)},pause:function(){return!(this.manager.context.currentTime<this.startTime)&&(!!s.prototype.pause.call(this)&&(this.currentConfig.seek=this.getCurrentTime(),this.stopAndRemoveBufferSource(),this.emit("pause",this),!0))},resume:function(){return!(this.manager.context.currentTime<this.startTime)&&(!!s.prototype.resume.call(this)&&(this.createAndStartBufferSource(),this.emit("resume",this),!0))},stop:function(){return!!s.prototype.stop.call(this)&&(this.stopAndRemoveBufferSource(),this.emit("stop",this),!0)},createAndStartBufferSource:function(){var t=this.currentConfig.seek,e=this.currentConfig.delay,i=this.manager.context.currentTime+e,n=(this.currentMarker?this.currentMarker.start:0)+t,s=this.duration-t;this.playTime=i-t,this.startTime=i,this.source=this.createBufferSource(),this.applyConfig(),this.source.start(Math.max(0,i),Math.max(0,n),Math.max(0,s)),this.resetConfig()},createAndStartLoopBufferSource:function(){var t=this.getLoopTime(),e=this.currentMarker?this.currentMarker.start:0,i=this.duration;this.loopTime=t,this.loopSource=this.createBufferSource(),this.loopSource.playbackRate.setValueAtTime(this.totalRate,0),this.loopSource.start(Math.max(0,t),Math.max(0,e),Math.max(0,i))},createBufferSource:function(){var t=this,e=this.manager.context.createBufferSource();return e.buffer=this.audioBuffer,e.connect(this.muteNode),e.onended=function(e){e.target===t.source&&(t.currentConfig.loop?t.hasLooped=!0:t.hasEnded=!0)},e},stopAndRemoveBufferSource:function(){this.source&&(this.source.stop(),this.source.disconnect(),this.source=null),this.playTime=0,this.startTime=0,this.stopAndRemoveLoopBufferSource()},stopAndRemoveLoopBufferSource:function(){this.loopSource&&(this.loopSource.stop(),this.loopSource.disconnect(),this.loopSource=null),this.loopTime=0},applyConfig:function(){this.rateUpdates.length=0,this.rateUpdates.push({time:0,rate:1}),s.prototype.applyConfig.call(this)},update:function(t,e){this.hasEnded?(this.hasEnded=!1,s.prototype.stop.call(this),this.stopAndRemoveBufferSource(),this.emit("ended",this)):this.hasLooped&&(this.hasLooped=!1,this.source=this.loopSource,this.loopSource=null,this.playTime=this.startTime=this.loopTime,this.rateUpdates.length=0,this.rateUpdates.push({time:0,rate:this.totalRate}),this.createAndStartLoopBufferSource(),this.emit("looped",this))},destroy:function(){s.prototype.destroy.call(this),this.audioBuffer=null,this.stopAndRemoveBufferSource(),this.muteNode.disconnect(),this.muteNode=null,this.volumeNode.disconnect(),this.volumeNode=null,this.rateUpdates.length=0,this.rateUpdates=null},setRate:function(){s.prototype.setRate.call(this);var t=this.manager.context.currentTime;this.source&&this.source.playbackRate.setValueAtTime(this.totalRate,t),this.isPlaying&&(this.rateUpdates.push({time:Math.max(this.startTime,t)-this.playTime,rate:this.totalRate}),this.loopSource&&(this.stopAndRemoveLoopBufferSource(),this.createAndStartLoopBufferSource()))},getCurrentTime:function(){for(var t=0,e=0;e<this.rateUpdates.length;e++){var i=void 0;i=e<this.rateUpdates.length-1?this.rateUpdates[e+1].time:this.manager.context.currentTime-this.playTime,t+=(i-this.rateUpdates[e].time)*this.rateUpdates[e].rate}return t},getLoopTime:function(){for(var t=0,e=0;e<this.rateUpdates.length-1;e++)t+=(this.rateUpdates[e+1].time-this.rateUpdates[e].time)*this.rateUpdates[e].rate;var i=this.rateUpdates[this.rateUpdates.length-1];return this.playTime+i.time+(this.duration-t)/i.rate}});Object.defineProperty(r.prototype,"mute",{get:function(){return 0===this.muteNode.gain.value},set:function(t){this.currentConfig.mute=t,this.muteNode.gain.setValueAtTime(t?0:1,0),this.emit("mute",this,t)}}),Object.defineProperty(r.prototype,"volume",{get:function(){return this.volumeNode.gain.value},set:function(t){this.currentConfig.volume=t,this.volumeNode.gain.setValueAtTime(t,0),this.emit("volume",this,t)}}),Object.defineProperty(r.prototype,"seek",{get:function(){return this.isPlaying?this.manager.context.currentTime<this.startTime?this.startTime-this.playTime:this.getCurrentTime():this.isPaused?this.currentConfig.seek:0},set:function(t){this.manager.context.currentTime<this.startTime||(this.isPlaying||this.isPaused)&&(t=Math.min(Math.max(0,t),this.duration),this.currentConfig.seek=t,this.isPlaying&&(this.stopAndRemoveBufferSource(),this.createAndStartBufferSource()),this.emit("seek",this,t))}}),Object.defineProperty(r.prototype,"loop",{get:function(){return this.currentConfig.loop},set:function(t){this.currentConfig.loop=t,this.isPlaying&&(this.stopAndRemoveLoopBufferSource(),t&&this.createAndStartLoopBufferSource()),this.emit("loop",this,t)}}),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(23),s=i(0),r=i(42),o=i(13),a=i(239),h=i(4),l=i(282),u=i(283),c=new s({Extends:o,initialize:function(t){o.call(this),this.game=t,this.name="TextureManager",this.list={},this._tempCanvas=n.create2D(this,1,1),this._tempContext=this._tempCanvas.getContext("2d"),this._pending=0,t.events.once("boot",this.boot,this)},boot:function(){this._pending=2,this.on("onload",this.updatePending,this),this.on("onerror",this.updatePending,this),this.addBase64("__DEFAULT",this.game.config.defaultImage),this.addBase64("__MISSING",this.game.config.missingImage),this.game.events.once("destroy",this.destroy,this)},updatePending:function(){0===--this._pending&&(this.off("onload"),this.off("onerror"),this.game.events.emit("ready"))},addBase64:function(t,e){var i=this,n=new Image;n.onerror=function(){i.emit("onerror",t)},n.onload=function(){var e=i.create(t,n);l.Image(e,0),i.emit("onload",t,e)},n.src=e},addImage:function(t,e,i){var n=this.create(t,e);return l.Image(n,0),i&&n.setDataSource(i),n},generate:function(t,e){var i=n.create(this,1,1);return e.canvas=i,a(e),this.addCanvas(t,i)},createCanvas:function(t,e,i){void 0===e&&(e=256),void 0===i&&(i=256);var s=n.create(this,e,i);return this.addCanvas(t,s)},addCanvas:function(t,e){var i=this.create(t,e);return l.Canvas(i,0),i},addAtlas:function(t,e,i){return Array.isArray(i.textures)||Array.isArray(i.frames)?this.addAtlasJSONArray(t,e,i):this.addAtlasJSONHash(t,e,i)},addAtlasJSONArray:function(t,e,i){var n=this.create(t,e);if(Array.isArray(i))for(var s=0;s<i.length;s++)l.JSONArray(n,s,i[s]);else l.JSONArray(n,0,i);return n},addAtlasJSONHash:function(t,e,i){var n=this.create(t,e);if(Array.isArray(i))for(var s=0;s<i.length;s++)l.JSONHash(n,s,i[s]);else l.JSONHash(n,0,i);return n},addUnityAtlas:function(t,e,i){var n=this.create(t,e);return l.UnityYAML(n,0,i),n},addSpriteSheet:function(t,e,i){var n=this.create(t,e),s=n.source[0].width,r=n.source[0].height;return l.SpriteSheet(n,0,0,0,s,r,i),n},addSpriteSheetFromAtlas:function(t,e){var i=h(e,"atlas",null),n=h(e,"frame",null);if(i&&n){var s=this.get(i),r=s.get(n);if(r){var o=this.create(t,r.source.image);return r.trimmed?l.SpriteSheetFromAtlas(o,r,e):l.SpriteSheet(o,0,r.cutX,r.cutY,r.cutWidth,r.cutHeight,e),o}}},addAtlasStarlingXML:function(t,e,i){var n=this.create(t,e);if(Array.isArray(i))for(var s=0;s<i.length;s++)l.StarlingXML(n,s,i[s]);else l.StarlingXML(n,0,i);return n},addAtlasPyxel:function(t,e,i){var n=this.create(t,e);if(Array.isArray(i))for(var s=0;s<i.length;s++)l.Pyxel(n,s,i[s]);else l.Pyxel(n,0,i);return n},create:function(t,e,i,n){var s=new u(this,t,e,i,n);return this.list[t]=s,s},exists:function(t){return this.list.hasOwnProperty(t)},get:function(t){return void 0===t&&(t="__DEFAULT"),this.list[t]?this.list[t]:this.list.__MISSING},cloneFrame:function(t,e){if(this.list[t])return this.list[t].get(e).clone()},getFrame:function(t,e){if(this.list[t])return this.list[t].get(e)},getTextureKeys:function(){var t=[];for(var e in this.list)"__DEFAULT"!==e&&"__MISSING"!==e&&t.push(e);return t},getPixel:function(t,e,i,n){var s=this.getFrame(i,n);if(s){var o=s.source.image;if(t>=0&&t<=o.width&&e>=0&&e<=o.height){t+=s.cutX,e+=s.cutY;var a=this._tempContext;a.clearRect(0,0,1,1),a.drawImage(o,t,e,1,1,0,0,1,1);var h=a.getImageData(0,0,1,1);return new r(h.data[0],h.data[1],h.data[2],h.data[3])}}return null},setTexture:function(t,e,i){return this.list[e]&&(t.texture=this.list[e],t.frame=t.texture.get(i)),t},each:function(t,e){for(var i=[null],n=1;n<arguments.length;n++)i.push(arguments[n]);for(var s in this.list)i[0]=this.list[s],t.apply(e,i)},destroy:function(){for(var t in this.list)this.list[t].destroy();this.list={},this.game=null}});t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Canvas:i(572),Image:i(573),JSONArray:i(574),JSONHash:i(575),Pyxel:i(576),SpriteSheet:i(577),SpriteSheetFromAtlas:i(578),StarlingXML:i(579),UnityYAML:i(580)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(142),r=i(284),o=new n({initialize:function(t,e,i,n,s){Array.isArray(i)||(i=[i]),this.manager=t,this.key=e,this.source=[],this.dataSource=[],this.frames={},this.customData={},this.firstFrame="__BASE",this.frameTotal=0;for(var o=0;o<i.length;o++)this.source.push(new r(this,i[o],n,s))},add:function(t,e,i,n,r,o){var a=new s(this,t,e,i,n,r,o);return this.frames[t]=a,1===this.frameTotal&&(this.firstFrame=t),this.frameTotal++,a},has:function(t){return this.frames[t]},get:function(t){(void 0===t||null===t||"string"!=typeof t&&"number"!=typeof t)&&(t=1===this.frameTotal?"__BASE":this.firstFrame);var e=this.frames[t];return e||(console.warn("No Texture.frame found with name "+t),this.frames.__BASE)},getTextureSourceIndex:function(t){for(var e=0;e<this.source.length;e++)if(this.source[e]===t)return e;return-1},getFramesFromTextureSource:function(t){var e=[];for(var i in this.frames)if("__BASE"!==i){var n=this.frames[i];n.sourceIndex===t&&e.push(n.name)}return e},getFrameNames:function(t){void 0===t&&(t=!1);var e=Object.keys(this.frames);if(!t){var i=e.indexOf("__BASE");-1!==i&&e.splice(i,1)}return e},getSourceImage:function(t){void 0!==t&&null!==t&&1!==this.frameTotal||(t="__BASE");var e=this.frames[t];return e?e.source.image:(console.warn("No Texture.frame found with name "+t),this.frames.__BASE.source.image)},setDataSource:function(t){Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++){var i=this.source[e];this.dataSource.push(new r(this,t[e],i.width,i.height))}},setFilter:function(t){var e;for(e=0;e<this.source.length;e++)this.source[e].setFilter(t);for(e=0;e<this.dataSource.length;e++)this.dataSource[e].setFilter(t)},destroy:function(){var t;for(t=0;t<this.source.length;t++)this.source[t].destroy();for(t=0;t<this.dataSource.length;t++)this.dataSource[t].destroy();for(var e in this.frames){this.frames[e].destroy()}this.source=[],this.dataSource=[],this.frames={}}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(24),r=i(137),o=i(71),a=new n({initialize:function(t,e,i,n){var s=t.manager.game;this.texture=t,this.image=e,this.compressionAlgorithm=null,this.resolution=1,this.width=i||e.naturalWidth||e.width||0,this.height=n||e.naturalHeight||e.height||0,this.scaleMode=o.DEFAULT,this.isCanvas=e instanceof HTMLCanvasElement,this.isPowerOf2=r(this.width,this.height),this.glTexture=null,this.init(s)},init:function(t){t.config.renderType===s.WEBGL&&(this.glTexture=t.renderer.createTextureFromSource(this.image,this.width,this.height,this.scaleMode)),t.config.pixelArt&&this.setFilter(1)},setFilter:function(t){var e=this.texture.manager.game;e.config.renderType===s.WEBGL&&e.renderer.setTextureFilter(this.glTexture,t)},destroy:function(){this.texture=null,this.image=null}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
//! stable.js 0.1.6, https://github.com/Two-Screen/stable
//! © 2017 Angry Bytes and contributors. MIT licensed.
!function(){function e(t,e){"function"!=typeof e&&(e=function(t,e){return String(t).localeCompare(e)});var i=t.length;if(i<=1)return t;for(var s=new Array(i),r=1;r<i;r*=2){n(t,e,r,s);var o=t;t=s,s=o}return t}var i=function(t,i){return e(t.slice(),i)};i.inplace=function(t,i){var s=e(t,i);return s!==t&&n(s,null,t.length,t),t};var n=function(t,e,i,n){var s,r,o,a,h,l=t.length,u=0,c=2*i;for(s=0;s<l;s+=c)for(r=s+i,o=r+i,r>l&&(r=l),o>l&&(o=l),a=s,h=r;;)if(a<r&&h<o)e(t[a],t[h])<=0?n[u++]=t[a++]:n[u++]=t[h++];else if(a<r)n[u++]=t[a++];else{if(!(h<o))break;n[u++]=t[h++]}};t.exports=i}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=t.text,n=i.length,s=Number.MAX_VALUE,r=Number.MAX_VALUE,o=0,a=0,h=t.fontData.chars,l=t.fontData.lineHeight,u=0,c=0,d=0,f=0,p=null,v=0,g=0,y=0,m=0,x=null,b=0,w=0;w<n;++w)if(10!==(f=i.charCodeAt(w))){if(p=h[f]){if(v=p.width,g=p.height,y=d+p.xOffset+u,m=p.yOffset+c,null!==x){var T=p.kerning[b];y+=void 0!==T?T:0}s>y&&(s=y),r>m&&(r=m);var S=y+v-s,A=m+g-r;o<S&&(o=S),a<A&&(a=A),u+=p.xAdvance,d+=1,x=p,b=f}}else u=0,d=0,c+=l,x=null;var C=t.fontSize/t.fontData.size,M=C*t.scaleX,_=C*t.scaleY,E={local:{x:s*C,y:r*C,width:o*C,height:a*C},global:{x:t.x+s*M,y:t.y+r*_,width:o*M,height:a*_}};return e&&(E.local.x=Math.round(E.local.x),E.local.y=Math.round(E.local.y),E.local.width=Math.round(E.local.width),E.local.height=Math.round(E.local.height),E.global.x=Math.round(E.global.x),E.global.y=Math.round(E.global.y),E.global.width=Math.round(E.global.width),E.global.height=Math.round(E.global.height)),E};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
function i(t,e){return parseInt(t.getAttribute(e),10)}var n=function(t,e,n,s){void 0===e&&(e=0),void 0===n&&(n=0);var r={},o=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0];r.font=o.getAttribute("face"),r.size=i(o,"size"),r.lineHeight=i(a,"lineHeight")+n,r.chars={};var h=t.getElementsByTagName("char"),l=void 0!==s&&s.trimmed;if(l)var u=s.height,c=s.width;for(var d=0;d<h.length;d++){var f=h[d],p=i(f,"id"),v=i(f,"x"),g=i(f,"y"),y=i(f,"width"),m=i(f,"height");l&&(v<c&&(c=v),g<u&&(u=g)),r.chars[p]={x:v,y:g,width:y,height:m,centerX:Math.floor(y/2),centerY:Math.floor(m/2),xOffset:i(f,"xoffset"),yOffset:i(f,"yoffset"),xAdvance:i(f,"xadvance")+e,data:{},kerning:{}}}if(l&&0!==u&&0!==c)for(var x in r.chars){var b=r.chars[x];b.x-=s.x,b.y-=s.y}var w=t.getElementsByTagName("kerning");for(d=0;d<w.length;d++){var T=w[d],S=i(T,"first"),A=i(T,"second"),C=i(T,"amount");r.chars[A].kerning[S]=C}return r};t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(147);n.Area=i(598),n.Circumference=i(291),n.CircumferencePoint=i(148),n.Clone=i(599),n.Contains=i(77),n.ContainsPoint=i(600),n.ContainsRect=i(601),n.CopyFrom=i(602),n.Equals=i(603),n.GetBounds=i(604),n.GetPoint=i(289),n.GetPoints=i(290),n.Offset=i(605),n.OffsetPoint=i(606),n.Random=i(123),t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(148),s=i(73),r=i(15),o=i(5),a=function(t,e,i){void 0===i&&(i=new o);var a=s(e,0,r.PI2);return n(t,a,i)};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(291),s=i(148),r=i(73),o=i(15),a=function(t,e,i,a){void 0===a&&(a=[]),e||(e=n(t)/i);for(var h=0;h<e;h++){var l=r(h/e,0,o.PI2);a.push(s(t,l))}return a};t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=t.width/2,i=t.height/2,n=Math.pow(e-i,2)/Math.pow(e+i,2);return Math.PI*(e+i)*(1+3*n/(10+Math.sqrt(4-3*n)))};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(139),s=i(2),r=function(t,e,i,r,o,a){if(!(s.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&r._id)){var h=r.scrollX*e.scrollFactorX,l=r.scrollY*e.scrollFactorY,u=e.x,c=e.y,d=e.scaleX,f=e.scaleY,p=e.rotation,v=e.commandBuffer,g=o||t.currentContext,y=1,m=1,x=0,b=0,w=1,T=0,S=0,A=0;t.currentBlendMode!==e.blendMode&&(t.currentBlendMode=e.blendMode,g.globalCompositeOperation=t.blendModes[e.blendMode]),t.currentAlpha!==e.alpha&&(t.currentAlpha=e.alpha,g.globalAlpha=e.alpha),t.currentScaleMode!==e.scaleMode&&(t.currentScaleMode=e.scaleMode),g.save(),g.translate(u-h,c-l),g.rotate(p),g.scale(d,f),g.fillStyle="#fff",g.globalAlpha=e.alpha;for(var C=0,M=v.length;C<M;++C){switch(v[C]){case n.ARC:g.arc(v[C+1],v[C+2],v[C+3],v[C+4],v[C+5],v[C+6]),C+=6;break;case n.LINE_STYLE:w=v[C+1],x=v[C+2],y=v[C+3],T=(16711680&x)>>>16,S=(65280&x)>>>8,A=255&x,g.strokeStyle="rgba("+T+","+S+","+A+","+y+")",g.lineWidth=w,C+=3;break;case n.FILL_STYLE:b=v[C+1],m=v[C+2],T=(16711680&b)>>>16,S=(65280&b)>>>8,A=255&b,g.fillStyle="rgba("+T+","+S+","+A+","+m+")",C+=2;break;case n.BEGIN_PATH:g.beginPath();break;case n.CLOSE_PATH:g.closePath();break;case n.FILL_PATH:a||g.fill();break;case n.STROKE_PATH:a||g.stroke();break;case n.FILL_RECT:a?g.rect(v[C+1],v[C+2],v[C+3],v[C+4]):g.fillRect(v[C+1],v[C+2],v[C+3],v[C+4]),C+=4;break;case n.FILL_TRIANGLE:g.beginPath(),g.moveTo(v[C+1],v[C+2]),g.lineTo(v[C+3],v[C+4]),g.lineTo(v[C+5],v[C+6]),g.closePath(),a||g.fill(),C+=6;break;case n.STROKE_TRIANGLE:g.beginPath(),g.moveTo(v[C+1],v[C+2]),g.lineTo(v[C+3],v[C+4]),g.lineTo(v[C+5],v[C+6]),g.closePath(),a||g.stroke(),C+=6;break;case n.LINE_TO:g.lineTo(v[C+1],v[C+2]),C+=2;break;case n.MOVE_TO:g.moveTo(v[C+1],v[C+2]),C+=2;break;case n.LINE_FX_TO:g.lineTo(v[C+1],v[C+2]),C+=5;break;case n.MOVE_FX_TO:g.moveTo(v[C+1],v[C+2]),C+=5;break;case n.SAVE:g.save();break;case n.RESTORE:g.restore();break;case n.TRANSLATE:g.translate(v[C+1],v[C+2]),C+=2;break;case n.SCALE:g.scale(v[C+1],v[C+2]),C+=2;break;case n.ROTATE:g.rotate(v[C+1]),C+=1}}g.restore()}};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(4),s=i(92),r=function(t,e,i){for(var n=[],s=0;s<t.length;s++)for(var r=0;r<e.length;r++)for(var o=0;o<i;o++)n.push({a:t[s],b:e[r]});return n},o=function(t,e,i){var o=n(i,"max",0),a=n(i,"qty",1),h=n(i,"random",!1),l=n(i,"randomB",!1),u=n(i,"repeat",0),c=n(i,"yoyo",!1),d=[];if(l&&s(e),-1===u)if(0===o)u=0;else{var f=t.length*e.length*a;c&&(f*=2),u=Math.ceil(o/f)}for(var p=0;p<=u;p++){var v=r(t,e,a);h&&s(v),d=d.concat(v),c&&(v.reverse(),d=d.concat(v))}return o&&d.splice(o),d};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return Math.random()*(e-t)+t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(618),Out:i(619),InOut:i(620)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(621),Out:i(622),InOut:i(623)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(624),Out:i(625),InOut:i(626)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(627),Out:i(628),InOut:i(629)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(630),Out:i(631),InOut:i(632)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(633),Out:i(634),InOut:i(635)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports=i(636)},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(637),Out:i(638),InOut:i(639)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(640),Out:i(641),InOut:i(642)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(643),Out:i(644),InOut:i(645)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(646),Out:i(647),InOut:i(648)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports=i(649)},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=0;i<e.length;i++)if(t.hasOwnProperty(e[i]))return!0;return!1};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(43),r=i(80),o=i(4),a=i(36),h=i(99),l=i(6),u=new n({Extends:a,initialize:function(t,e,i,n,s,r){a.call(this,t,i,n,s,r),this.path=e,this.rotateToPath=!1,this.pathRotationVerticalAdjust=!1,this.pathRotationOffset=0,this.pathOffset=new l(i,n),this.pathVector=new l,this.pathTween,this.pathConfig=null,this._prevDirection=h.PLAYING_FORWARD},setPath:function(t,e){void 0===e&&(e=this.pathConfig);var i=this.pathTween;return i&&i.isPlaying()&&i.stop(),this.path=t,e&&this.start(e),this},setRotateToPath:function(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=!1),this.rotateToPath=t,this.pathRotationOffset=e,this.pathRotationVerticalAdjust=i,this},isFollowing:function(){var t=this.pathTween;return t&&t.isPlaying()},start:function(t,e){void 0===t&&(t={}),void 0===e&&(e=0);var i=this.pathTween;i&&i.isPlaying()&&i.stop(),"number"==typeof t&&(t={duration:t}),t.from=0,t.to=1;var n=r(t,"positionOnPath",!1);if(this.rotateToPath=r(t,"rotateToPath",!1),this.pathRotationOffset=o(t,"rotationOffset",0),this.pathRotationVerticalAdjust=r(t,"verticalAdjust",!1),this.pathTween=this.scene.sys.tweens.addCounter(t),this.path.getStartPoint(this.pathOffset),n&&(this.x=this.pathOffset.x,this.y=this.pathOffset.y),this.pathOffset.x=this.x-this.pathOffset.x,this.pathOffset.y=this.y-this.pathOffset.y,this._prevDirection=h.PLAYING_FORWARD,this.rotateToPath){var a=this.path.getPoint(.1);this.rotation=Math.atan2(a.y-this.y,a.x-this.x)+s(this.pathRotationOffset)}return this.pathConfig=t,this},pause:function(){var t=this.pathTween;return t&&t.isPlaying()&&t.pause(),this},resume:function(){var t=this.pathTween;return t&&t.isPaused()&&t.resume(),this},stop:function(){var t=this.pathTween;return t&&t.isPlaying()&&t.stop(),this},preUpdate:function(t,e){this.anims.update(t,e);var i=this.pathTween;if(i){var n=i.data[0];if(n.state!==h.PLAYING_FORWARD&&n.state!==h.PLAYING_BACKWARD)return;var r=this.pathVector;this.path.getPoint(i.getValue(),r),r.add(this.pathOffset);var o=this.x,a=this.y;this.setPosition(r.x,r.y);var l=this.x-o,u=this.y-a;if(0===l&&0===u)return;if(n.state!==this._prevDirection)return void(this._prevDirection=n.state);this.rotateToPath&&(this.rotation=Math.atan2(u,l)+s(this.pathRotationOffset),this.pathRotationVerticalAdjust&&(this.flipY=0!==this.rotation&&n.state===h.PLAYING_BACKWARD))}}});t.exports=u},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=Math.log(t)/.6931471805599453;return 1<<Math.ceil(e)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(47),r=new n({initialize:function(t,e,i,n,s,r,o){this.x=t,this.y=e,this.radius=i,this.r=n,this.g=s,this.b=r,this.intensity=o,this.scrollFactorX=1,this.scrollFactorY=1},set:function(t,e,i,n,s,r,o){return this.x=t,this.y=e,this.radius=i,this.r=n,this.g=s,this.b=r,this.intensity=o,this.scrollFactorX=1,this.scrollFactorY=1,this},setScrollFactor:function(t,e){return void 0===t&&(t=1),void 0===e&&(e=t),this.scrollFactorX=t,this.scrollFactorY=e,this},setColor:function(t){var e=s.getFloatsFromUintRGB(t);return this.r=e[0],this.g=e[1],this.b=e[2],this},setIntensity:function(t){return this.intensity=t,this},setPosition:function(t,e){return this.x=t,this.y=e,this},setRadius:function(t){return this.radius=t,this}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(310),r=i(256),o=i(47),a=new n({initialize:function(){this.lightPool=[],this.lights=[],this.culledLights=[],this.ambientColor={r:.1,g:.1,b:.1},this.active=!1},enable:function(){return this.active=!0,this},disable:function(){return this.active=!1,this},cull:function(t){var e=this.lights,i=this.culledLights,n=e.length,s=t.x+t.width/2,o=t.y+t.height/2,a=(t.width+t.height)/2,h={x:0,y:0},l=t.matrix,u=this.systems.game.config.height;i.length=0;for(var c=0;c<n&&i.length<r.LIGHT_COUNT;++c){var d=e[c];l.transformPoint(d.x,d.y,h);var f=s-(h.x-t.scrollX*d.scrollFactorX*t.zoom),p=o-(u-(h.y-t.scrollY*d.scrollFactorY*t.zoom));Math.sqrt(f*f+p*p)<d.radius+a&&i.push(e[c])}return i},forEachLight:function(t){if(t){for(var e=this.lights,i=e.length,n=0;n<i;++n)t(e[n]);return this}},setAmbientColor:function(t){var e=o.getFloatsFromUintRGB(t);return this.ambientColor.r=e[0],this.ambientColor.g=e[1],this.ambientColor.b=e[2],this},getMaxVisibleLights:function(){return 10},getLightCount:function(){return this.lights.length},addLight:function(t,e,i,n,r){var a=null,h=null;return t=void 0===t?0:t,e=void 0===e?0:e,n=void 0===n?16777215:n,i=void 0===i?100:i,r=void 0===r?1:r,a=o.getFloatsFromUintRGB(n),h=null,this.lightPool.length>0?(h=this.lightPool.pop(),h.set(t,e,i,a[0],a[1],a[2],r)):h=new s(t,e,i,a[0],a[1],a[2],r),this.lights.push(h),h},removeLight:function(t){var e=this.lights.indexOf(t);return e>=0&&(this.lightPool.push(t),this.lights.splice(e,1)),this},shutdown:function(){for(;this.lights.length>0;)this.lightPool.push(this.lights.pop());this.ambientColor={r:.1,g:.1,b:.1},this.culledLights.length=0,this.lights.length=0},destroy:function(){this.shutdown()}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Circle:i(703),Ellipse:i(288),Intersects:i(313),Line:i(723),Point:i(741),Polygon:i(755),Rectangle:i(325),Triangle:i(784)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={CircleToCircle:i(713),CircleToRectangle:i(714),GetRectangleIntersection:i(715),LineToCircle:i(315),LineToLine:i(101),LineToRectangle:i(716),PointToLine:i(316),PointToLineSegment:i(717),RectangleToRectangle:i(314),RectangleToTriangle:i(718),RectangleToValues:i(719),TriangleToCircle:i(720),TriangleToLine:i(721),TriangleToTriangle:i(722)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return!(t.width<=0||t.height<=0||e.width<=0||e.height<=0)&&!(t.right<e.x||t.bottom<e.y||t.x>e.right||t.y>e.bottom)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(34),s=i(5),r=new s,o=function(t,e,i){if(void 0===i&&(i=r),n(e,t.x1,t.y1))return i.x=t.x1,i.y=t.y1,!0;if(n(e,t.x2,t.y2))return i.x=t.x2,i.y=t.y2,!0;var s=t.x2-t.x1,o=t.y2-t.y1,a=e.x-t.x1,h=e.y-t.y1,l=s*s+o*o,u=s,c=o;if(l>0){var d=(a*s+h*o)/l;u*=d,c*=d}return i.x=t.x1+u,i.y=t.y1+c,u*u+c*c<=l&&u*s+c*o>=0&&n(e,i.x,i.y)};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return(t.x-e.x1)*(e.y2-e.y1)==(e.x2-e.x1)*(t.y-e.y1)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=[]),e.push({x:t.x,y:t.y}),e.push({x:t.right,y:t.y}),e.push({x:t.right,y:t.bottom}),e.push({x:t.x,y:t.bottom}),e};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=[]),e.push({x:t.x1,y:t.y1}),e.push({x:t.x2,y:t.y2}),e.push({x:t.x3,y:t.y3}),e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(320),r=i(122),o=i(124),a=new n({initialize:function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),this.x1=t,this.y1=e,this.x2=i,this.y2=n},getPoint:function(t,e){return s(this,t,e)},getPoints:function(t,e,i){return r(this,t,e,i)},getRandomPoint:function(t){return o(this,t)},setTo:function(t,e,i,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),this.x1=t,this.y1=e,this.x2=i,this.y2=n,this},getPointA:function(){return{x:this.x1,y:this.y1}},getPointB:function(){return{x:this.x2,y:this.y2}},left:{get:function(){return Math.min(this.x1,this.x2)},set:function(t){this.x1<=this.x2?this.x1=t:this.x2=t}},right:{get:function(){return Math.max(this.x1,this.x2)},set:function(t){this.x1>this.x2?this.x1=t:this.x2=t}},top:{get:function(){return Math.min(this.y1,this.y2)},set:function(t){this.y1<=this.y2?this.y1=t:this.y2=t}},bottom:{get:function(){return Math.max(this.y1,this.y2)},set:function(t){this.y1>this.y2?this.y1=t:this.y2=t}}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e,i){return void 0===i&&(i=new n),i.x=t.x1+(t.x2-t.x1)*e,i.y=t.y1+(t.y2-t.y1)*e,i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(15),s=i(57),r=i(64),o=function(t){var e=r(t)-n.TAU;return s(e,-Math.PI,Math.PI)};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x*t.x+t.y*t.y};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(158),r=new n({initialize:function(t){this.area=0,this.points=[],t&&this.setTo(t)},contains:function(t,e){return s(this,t,e)},setTo:function(t){if(this.area=0,this.points=[],!Array.isArray(t))return this;for(var e,i=Number.MAX_VALUE,n=0;n<t.length;n++)e={x:0,y:0},"number"==typeof t[n]?(e.x=t[n],e.y=t[n+1],n++):Array.isArray(void 0)?(e.x=t[n][0],e.y=t[n][1]):(e.x=t[n].x,e.y=t[n].y),this.points.push(e),e.y<i&&(i=e.y);return this.calculateArea(i),this},calculateArea:function(){if(this.points.length<3)return this.area=0,this.area;for(var t,e,i=0,n=0;n<this.points.length-1;n++)t=this.points[n],e=this.points[n+1],i+=(e.x-t.x)*(t.y+e.y);return t=this.points[0],e=this.points[this.points.length-1],i+=(t.x-e.x)*(e.y+t.y),this.area=.5*-i,this.area}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8);n.Area=i(760),n.Ceil=i(761),n.CeilAll=i(762),n.CenterOn=i(326),n.Clone=i(763),n.Contains=i(35),n.ContainsPoint=i(764),n.ContainsRect=i(765),n.CopyFrom=i(766),n.Decompose=i(317),n.Equals=i(767),n.FitInside=i(768),n.FitOutside=i(769),n.Floor=i(770),n.FloorAll=i(771),n.FromPoints=i(133),n.GetAspectRatio=i(159),n.GetCenter=i(772),n.GetPoint=i(117),n.GetPoints=i(217),n.GetSize=i(773),n.Inflate=i(774),n.MarchingAnts=i(220),n.MergePoints=i(775),n.MergeRect=i(776),n.MergeXY=i(777),n.Offset=i(778),n.OffsetPoint=i(779),n.Overlaps=i(780),n.Perimeter=i(90),n.PerimeterPoint=i(781),n.Random=i(118),n.Scale=i(782),n.Union=i(783),t.exports=n},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t.x=e-t.width/2,t.y=i-t.height/2,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=i(74),r=function(t,e,i){void 0===i&&(i=new n);var r=t.getLineA(),o=t.getLineB(),a=t.getLineC();if(e<=0||e>=1)return i.x=r.x1,i.y=r.y1,i;var h=s(r),l=s(o),u=s(a),c=h+l+u,d=c*e,f=0;return d<h?(f=d/h,i.x=r.x1+(r.x2-r.x1)*f,i.y=r.y1+(r.y2-r.y1)*f):d>h+l?(d-=h+l,f=d/u,i.x=a.x1+(a.x2-a.x1)*f,i.y=a.y1+(a.y2-a.y1)*f):(d-=h,f=d/l,i.x=o.x1+(o.x2-o.x1)*f,i.y=o.y1+(o.y2-o.y1)*f),i};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(74),s=i(5),r=function(t,e,i,r){void 0===r&&(r=[]);var o=t.getLineA(),a=t.getLineB(),h=t.getLineC(),l=n(o),u=n(a),c=n(h),d=l+u+c;e||(e=d/i);for(var f=0;f<e;f++){var p=d*(f/e),v=0,g=new s;p<l?(v=p/l,g.x=o.x1+(o.x2-o.x1)*v,g.y=o.y1+(o.y2-o.y1)*v):p>l+u?(p-=l+u,v=p/c,g.x=h.x1+(h.x2-h.x1)*v,g.y=h.y1+(h.y2-h.y1)*v):(p-=l,v=p/u,g.x=a.x1+(a.x2-a.x1)*v,g.y=a.y1+(a.y2-a.y1)*v),r.push(g)}return r};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e){return void 0===e&&(e=new n),e.x=(t.x1+t.x2+t.x3)/3,e.y=(t.y1+t.y2+t.y3)/3,e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t.x1+=e,t.y1+=i,t.x2+=e,t.y2+=i,t.x3+=e,t.y3+=i,t};t.exports=i},function(t,e,i){function n(t,e,i,n){var s=t-i,r=e-n,o=s*s+r*r;return Math.sqrt(o)}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var s=i(5),r=function(t,e){void 0===e&&(e=new s);var i=t.x1,r=t.y1,o=t.x2,a=t.y2,h=t.x3,l=t.y3,u=n(h,l,o,a),c=n(i,r,h,l),d=n(o,a,i,r),f=u+c+d;return e.x=(i*u+o*c+h*d)/f,e.y=(r*u+a*c+l*d)/f,e};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return{gameObject:t,enabled:!0,draggable:!1,dropZone:!1,target:null,camera:null,hitArea:e,hitAreaCallback:i,localX:0,localY:0,dragState:0,dragStartX:0,dragStartY:0,dragX:0,dragY:0}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(162),s=function(t,e){var i=n(e,t.xhrSettings),s=new XMLHttpRequest;return s.open("GET",t.src,i.async,i.user,i.password),s.responseType=t.xhrSettings.responseType,s.timeout=i.timeout,i.header&&i.headerValue&&s.setRequestHeader(i.header,i.headerValue),i.overrideMimeType&&s.overrideMimeType(i.overrideMimeType),s.onload=t.onLoad.bind(t),s.onerror=t.onError.bind(t),s.onprogress=t.onProgress.bind(t),s.send(),s};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(24),r=i(19),o=i(7),a=i(1),h=i(335),l=new n({Extends:r,initialize:function(t,e,i,n,s){this.context=s;var o={type:"audio",extension:a(e,"type",""),responseType:"arraybuffer",key:t,url:a(e,"uri",e),path:i,xhrSettings:n};r.call(this,o)},onProcess:function(t){this.state=s.FILE_PROCESSING;var e=this;this.context.decodeAudioData(this.xhrLoader.response,function(i){e.data=i,e.onComplete(),t(e)},function(i){console.error("Error with decoding audio data for '"+this.key+"':",i.message),e.state=s.FILE_ERRORED,t(e)}),this.context=null}});l.create=function(t,e,i,n,s){var r=t.systems.game,o=r.config.audio,a=r.device.audio;if(o&&o.noAudio||!a.webAudio&&!a.audioData)return null;var u=l.findAudioURL(r,i);return u?!a.webAudio||o&&o.disableWebAudio?new h(e,u,t.path,n,r.sound.locked):new l(e,u,t.path,s,r.sound.context):null},o.register("audio",function(t,e,i,n){var s=l.create(this,t,e,i,n);return s&&this.addFile(s),this}),l.findAudioURL=function(t,e){e.constructor!==Array&&(e=[e]);for(var i=0;i<e.length;i++){var n=a(e[i],"uri",e[i]);if(0===n.indexOf("blob:")||0===n.indexOf("data:"))return n;var s=n.match(/\.([a-zA-Z0-9]+)($|\?)/);if(s=a(e[i],"type",s?s[1]:"").toLowerCase(),t.device.audio[s])return{uri:n,type:s}}return null},t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(19),r=i(1),o=i(161),a=new n({Extends:s,initialize:function(t,e,i,n,o){this.locked=o,this.loaded=!1;var a={type:"audio",extension:r(e,"type",""),key:t,url:r(e,"uri",e),path:i,config:n};s.call(this,a)},onLoad:function(){this.loaded||(this.loaded=!0,this.loader.nextFile(this,!0))},onError:function(){for(var t=0;t<this.data.length;t++){var e=this.data[t];e.oncanplaythrough=null,e.onerror=null}this.loader.nextFile(this,!1)},onProgress:function(t){var e=t.target;e.oncanplaythrough=null,e.onerror=null,this.filesLoaded++,this.percentComplete=Math.min(this.filesLoaded/this.filesTotal,1),this.loader.emit("fileprogress",this,this.percentComplete),this.filesLoaded===this.filesTotal&&this.onLoad()},load:function(t){this.loader=t,this.data=[];var e=this.config&&this.config.instances||1;this.filesTotal=e,this.filesLoaded=0,this.percentComplete=0;for(var i=0;i<e;i++){var n=new Audio;n.dataset.name=this.key+("0"+i).slice(-2),n.dataset.used="false",this.locked||(n.preload="auto",n.oncanplaythrough=this.onProgress.bind(this),n.onerror=this.onError.bind(this)),this.data.push(n)}for(i=0;i<this.data.length;i++)n=this.data[i],n.src=o(this,t.baseURL),this.locked||n.load();this.locked&&setTimeout(this.onLoad.bind(this))}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(19),o=i(7),a=i(1),h=i(249),l=new n({Extends:r,initialize:function(t,e,i,n){var s="string"==typeof t?t:a(t,"key",""),o={type:"xml",extension:a(t,"extension","xml"),responseType:"text",key:s,url:a(t,"file",e),path:i,xhrSettings:a(t,"xhr",n)};r.call(this,o)},onProcess:function(t){if(this.state=s.FILE_PROCESSING,this.data=h(this.xhrLoader.responseText),null===this.data)throw new Error("XMLFile: Invalid XML");this.onComplete(),t(this)}});o.register("xml",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new l(t[n],e,this.path,i));else this.addFile(new l(t,e,this.path,i));return this}),t.exports=l},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){for(var s=[],r=t;r<=e;r++)if(i||n){var o=i?i+r.toString():r.toString();n&&(o=o.concat(n)),s.push(o)}else s.push(r);return s};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(19),o=i(7),a=new n({Extends:r,initialize:function(t,e,i,n){var s={type:"text",extension:"txt",responseType:"text",key:t,url:e,path:i,xhrSettings:n};r.call(this,s)},onProcess:function(t){this.state=s.FILE_PROCESSING,this.data=this.xhrLoader.responseText,this.onComplete(),t(this)}});o.register("text",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new a(t[n],e,this.path,i));else this.addFile(new a(t,e,this.path,i));return this}),t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t%=2*Math.PI,t>=0?t:t+2*Math.PI};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(341),s=function(t,e){return n(t)/n(e)/n(t-e)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){if(0===t)return 1;for(var e=t;--t;)e*=t;return e};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.x,n=t.y;return t.x=i*Math.cos(e)-n*Math.sin(e),t.y=i*Math.sin(e)+n*Math.cos(e),t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t>0?Math.ceil(t):Math.floor(t)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(345),s=i(103),r=i(0),o=i(68),a=i(347),h=i(348),l=new r({initialize:function(t){this.world=t,this.scene=t.scene,this.sys=t.scene.sys},collider:function(t,e,i,n,s){return this.world.addCollider(t,e,i,n,s)},overlap:function(t,e,i,n,s){return this.world.addOverlap(t,e,i,n,s)},existing:function(t,e){var i=e?o.STATIC_BODY:o.DYNAMIC_BODY;return this.world.enableBody(t,i),t},staticImage:function(t,e,i,s){var r=new n(this.scene,t,e,i,s);return this.sys.displayList.add(r),this.world.enableBody(r,o.STATIC_BODY),r},image:function(t,e,i,s){var r=new n(this.scene,t,e,i,s);return this.sys.displayList.add(r),this.world.enableBody(r,o.DYNAMIC_BODY),r},staticSprite:function(t,e,i,n){var r=new s(this.scene,t,e,i,n);return this.sys.displayList.add(r),this.sys.updateList.add(r),this.world.enableBody(r,o.STATIC_BODY),r},sprite:function(t,e,i,n){var r=new s(this.scene,t,e,i,n);return this.sys.displayList.add(r),this.sys.updateList.add(r),this.world.enableBody(r,o.DYNAMIC_BODY),r},staticGroup:function(t,e){return this.sys.updateList.add(new h(this.world,this.world.scene,t,e))},group:function(t,e){return this.sys.updateList.add(new a(this.world,this.world.scene,t,e))}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(346),r=i(61),o=new n({Extends:r,Mixins:[s.Acceleration,s.Angular,s.Bounce,s.Debug,s.Drag,s.Enable,s.Friction,s.Gravity,s.Immovable,s.Mass,s.Size,s.Velocity],initialize:function(t,e,i,n,s){r.call(this,t,e,i,n,s)}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Acceleration:i(876),Angular:i(877),Bounce:i(878),Debug:i(879),Drag:i(880),Enable:i(881),Friction:i(882),Gravity:i(883),Immovable:i(884),Mass:i(885),Size:i(886),Velocity:i(887)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(103),s=i(0),r=i(68),o=i(1),a=i(78),h=new s({Extends:a,initialize:function(t,e,i,s){void 0!==s||Array.isArray(i)||"object"!=typeof i?void 0===s&&(s={}):(s=i,i=null),this.world=t,s.createCallback=this.createCallback,s.removeCallback=this.removeCallback,s.classType=o(s,"classType",n),this.physicsType=r.DYNAMIC_BODY,this.defaults={setCollideWorldBounds:o(s,"collideWorldBounds",!1),setAccelerationX:o(s,"accelerationX",0),setAccelerationY:o(s,"accelerationY",0),setBounceX:o(s,"bounceX",0),setBounceY:o(s,"bounceY",0),setDragX:o(s,"dragX",0),setDragY:o(s,"dragY",0),setGravityX:o(s,"gravityX",0),setGravityY:o(s,"gravityY",0),setFrictionX:o(s,"frictionX",0),setFrictionY:o(s,"frictionY",0),setVelocityX:o(s,"velocityX",0),setVelocityY:o(s,"velocityY",0),setAngularVelocity:o(s,"angularVelocity",0),setAngularAcceleration:o(s,"angularAcceleration",0),setAngularDrag:o(s,"angularDrag",0),setMass:o(s,"mass",1),setImmovable:o(s,"immovable",!1)},a.call(this,e,i,s)},createCallback:function(t){t.body||this.world.enableBody(t,r.DYNAMIC_BODY);var e=t.body;for(var i in this.defaults)e[i](this.defaults[i])},removeCallback:function(t){t.body&&this.world.disableBody(t)},setVelocity:function(t,e,i){void 0===i&&(i=0);for(var n=this.getChildren(),s=0;s<n.length;s++)n[s].body.velocity.set(t+s*i,e+s*i);return this},setVelocityX:function(t,e){void 0===e&&(e=0);for(var i=this.getChildren(),n=0;n<i.length;n++)i[n].body.velocity.x=t+n*e;return this},setVelocityY:function(t,e){void 0===e&&(e=0);for(var i=this.getChildren(),n=0;n<i.length;n++)i[n].body.velocity.y=t+n*e;return this}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(103),s=i(0),r=i(68),o=i(78),a=new s({Extends:o,initialize:function(t,e,i,s){void 0!==s||Array.isArray(i)||"object"!=typeof i?void 0===s&&(s={}):(s=i,i=null),this.world=t,s.createCallback=this.createCallback,s.removeCallback=this.removeCallback,s.createMultipleCallback=this.createMultipleCallback,s.classType=n,this.physicsType=r.STATIC_BODY,o.call(this,e,i,s)},createCallback:function(t){t.body||this.world.enableBody(t,r.STATIC_BODY)},removeCallback:function(t){t.body&&this.world.disableBody(t)},createMultipleCallback:function(){this.refresh()},refresh:function(){for(var t=this.children.entries,e=0;e<t.length;e++)t[e].body.reset();return this}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(350),s=i(56),r=i(0),o=i(351),a=i(68),h=i(46),l=i(13),u=i(352),c=i(353),d=i(4),f=i(354),p=i(888),v=i(8),g=i(355),y=i(889),m=i(894),x=i(895),b=i(59),w=i(358),T=i(357),S=i(6),A=new r({Extends:l,initialize:function(t,e){l.call(this),this.scene=t,this.bodies=new b,this.staticBodies=new b,this.pendingDestroy=new b,this.colliders=new f,this.gravity=new S(d(e,"gravity.x",0),d(e,"gravity.y",0)),this.bounds=new v(d(e,"x",0),d(e,"y",0),d(e,"width",t.sys.game.config.width),d(e,"height",t.sys.game.config.height)),this.checkCollision={up:d(e,"checkCollision.up",!0),down:d(e,"checkCollision.down",!0),left:d(e,"checkCollision.left",!0),right:d(e,"checkCollision.right",!0)},this.OVERLAP_BIAS=d(e,"overlapBias",4),this.TILE_BIAS=d(e,"tileBias",16),this.forceX=d(e,"forceX",!1),this.isPaused=d(e,"isPaused",!1),this._total=0,this.drawDebug=d(e,"debug",!1),this.debugGraphic,this.defaults={debugShowBody:d(e,"debugShowBody",!0),debugShowStaticBody:d(e,"debugShowStaticBody",!0),debugShowVelocity:d(e,"debugShowVelocity",!0),bodyDebugColor:d(e,"debugBodyColor",16711935),staticBodyDebugColor:d(e,"debugBodyColor",255),velocityDebugColor:d(e,"debugVelocityColor",65280)},this.maxEntries=d(e,"maxEntries",16),this.tree=new g(this.maxEntries,[".left",".top",".right",".bottom"]),this.staticTree=new g(this.maxEntries,[".left",".top",".right",".bottom"]),this.treeMinMax={minX:0,minY:0,maxX:0,maxY:0},this.drawDebug&&this.createDebugGraphic()},enable:function(t,e){void 0===e&&(e=a.DYNAMIC_BODY);var i=1;if(Array.isArray(t))for(i=t.length;i--;)t[i].hasOwnProperty("children")?this.enable(t[i].children.entries,e):this.enableBody(t[i],e);else t.hasOwnProperty("children")?this.enable(t.children.entries,e):this.enableBody(t,e)},enableBody:function(t,e){return null===t.body&&(e===a.DYNAMIC_BODY?(t.body=new n(this,t),this.bodies.set(t.body)):e===a.STATIC_BODY&&(t.body=new w(this,t),this.staticBodies.set(t.body),this.staticTree.insert(t.body))),t},remove:function(t){this.disableBody(t)},disable:function(t){var e=1;if(Array.isArray(t))for(e=t.length;e--;)t[e].hasOwnProperty("children")?this.disable(t[e].children.entries):this.disableGameObjectBody(t[e]);else t.hasOwnProperty("children")?this.disable(t.children.entries):this.disableGameObjectBody(t)},disableGameObjectBody:function(t){return t.body&&(t.body.physicsType===a.DYNAMIC_BODY?this.bodies.delete(t.body):t.body.physicsType===a.STATIC_BODY&&(this.staticBodies.delete(t.body),this.staticTree.remove(t.body)),t.body.enable=!1),t},disableBody:function(t){t.physicsType===a.DYNAMIC_BODY?(this.tree.remove(t),this.bodies.delete(t)):t.physicsType===a.STATIC_BODY&&(this.staticBodies.delete(t),this.staticTree.remove(t)),t.enable=!1},createDebugGraphic:function(){var t=this.scene.sys.add.graphics({x:0,y:0});return t.setDepth(Number.MAX_VALUE),this.debugGraphic=t,this.drawDebug=!0,t},setBounds:function(t,e,i,n,s,r,o,a){return this.bounds.setTo(t,e,i,n),void 0!==s&&this.setBoundsCollision(s,r,o,a),this},setBoundsCollision:function(t,e,i,n){return void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===i&&(i=!0),void 0===n&&(n=!0),this.checkCollision.left=t,this.checkCollision.right=e,this.checkCollision.up=i,this.checkCollision.down=n,this},pause:function(){return this.isPaused=!0,this.emit("pause"),this},resume:function(){return this.isPaused=!1,this.emit("resume"),this},addCollider:function(t,e,i,n,s){void 0===i&&(i=null),void 0===n&&(n=null),void 0===s&&(s=i);var r=new o(this,!1,t,e,i,n,s);return this.colliders.add(r),r},addOverlap:function(t,e,i,n,s){void 0===i&&(i=null),void 0===n&&(n=null),void 0===s&&(s=i);var r=new o(this,!0,t,e,i,n,s);return this.colliders.add(r),r},removeCollider:function(t){return this.colliders.remove(t),this},update:function(t,e){if(!this.isPaused&&0!==this.bodies.size){e/=1e3,this.delta=e;var i,n,s=this.bodies.entries,r=s.length;for(i=0;i<r;i++)n=s[i],n.enable&&n.update(e);this.tree.clear(),this.tree.load(s);var o=this.colliders.update();for(i=0;i<o.length;i++){var a=o[i];a.active&&a.update()}}},postUpdate:function(){var t,e,i=this.bodies,n=this.staticBodies,s=this.pendingDestroy,r=i.entries,o=r.length;for(t=0;t<o;t++)e=r[t],e.enable&&e.postUpdate();if(this.drawDebug){var h=this.debugGraphic;for(h.clear(),t=0;t<o;t++)e=r[t],e.willDrawDebug()&&e.drawDebug(h);for(r=n.entries,o=r.length,t=0;t<o;t++)e=r[t],e.willDrawDebug()&&e.drawDebug(h)}if(s.size>0){var l=this.tree,u=this.staticTree;for(r=s.entries,o=r.length,t=0;t<o;t++)e=r[t],e.physicsType===a.DYNAMIC_BODY?(l.remove(e),i.delete(e)):e.physicsType===a.STATIC_BODY&&(u.remove(e),n.delete(e)),e.world=void 0,e.gameObject=void 0;s.clear()}},updateMotion:function(t){if(t.allowRotation){var e=this.computeVelocity(0,t,t.angularVelocity,t.angularAcceleration,t.angularDrag,t.maxAngular)-t.angularVelocity;t.angularVelocity+=e,t.rotation+=t.angularVelocity*this.delta}t.velocity.x=this.computeVelocity(1,t,t.velocity.x,t.acceleration.x,t.drag.x,t.maxVelocity.x),t.velocity.y=this.computeVelocity(2,t,t.velocity.y,t.acceleration.y,t.drag.y,t.maxVelocity.y)},computeVelocity:function(t,e,i,n,s,r){return void 0===r&&(r=1e4),1===t&&e.allowGravity?i+=(this.gravity.x+e.gravity.x)*this.delta:2===t&&e.allowGravity&&(i+=(this.gravity.y+e.gravity.y)*this.delta),n?i+=n*this.delta:s&&e.allowDrag&&(s*=this.delta,i-s>0?i-=s:i+s<0?i+=s:i=0),i>r?i=r:i<-r&&(i=-r),i},separate:function(t,e,i,n,s){if(!t.enable||!e.enable||t.checkCollision.none||e.checkCollision.none||!this.intersects(t,e))return!1;if(i&&!1===i.call(n,t.gameObject,e.gameObject))return!1;if(t.isCircle&&e.isCircle)return this.separateCircle(t,e,s);if(t.isCircle!==e.isCircle){var r=t.isCircle?e:t,o=t.isCircle?t:e,a={x:r.x,y:r.y,right:r.right,bottom:r.bottom},h=o.center;if((h.y<a.y||h.y>a.bottom)&&(h.x<a.x||h.x>a.right))return this.separateCircle(t,e,s)}var l=!1,u=!1;this.forceX||Math.abs(this.gravity.y+t.gravity.y)<Math.abs(this.gravity.x+t.gravity.x)?(l=m(t,e,s,this.OVERLAP_BIAS),this.intersects(t,e)&&(u=x(t,e,s,this.OVERLAP_BIAS))):(u=x(t,e,s,this.OVERLAP_BIAS),this.intersects(t,e)&&(l=m(t,e,s,this.OVERLAP_BIAS)));var c=l||u;return c&&(s&&(t.onOverlap||e.onOverlap)?this.emit("overlap",t.gameObject,e.gameObject,t,e):(t.onCollide||e.onCollide)&&this.emit("collide",t.gameObject,e.gameObject,t,e)),c},separateCircle:function(t,e,i,n){u(t,e,!1,n),c(t,e,!1,n);var s=e.center.x-t.center.x,r=e.center.y-t.center.y,o=Math.atan2(r,s),a=0;if(t.isCircle!==e.isCircle){var l={x:e.isCircle?t.position.x:e.position.x,y:e.isCircle?t.position.y:e.position.y,right:e.isCircle?t.right:e.right,bottom:e.isCircle?t.bottom:e.bottom},d={x:t.isCircle?t.center.x:e.center.x,y:t.isCircle?t.center.y:e.center.y,radius:t.isCircle?t.halfWidth:e.halfWidth};d.y<l.y?d.x<l.x?a=h(d.x,d.y,l.x,l.y)-d.radius:d.x>l.right&&(a=h(d.x,d.y,l.right,l.y)-d.radius):d.y>l.bottom&&(d.x<l.x?a=h(d.x,d.y,l.x,l.bottom)-d.radius:d.x>l.right&&(a=h(d.x,d.y,l.right,l.bottom)-d.radius)),a*=-1}else a=t.halfWidth+e.halfWidth-h(t.center.x,t.center.y,e.center.x,e.center.y);if(i||0===a||t.immovable&&e.immovable||t.customSeparateX||e.customSeparateX)return 0!==a&&(t.onOverlap||e.onOverlap)&&this.emit("overlap",t.gameObject,e.gameObject,t,e),0!==a;var f=t.velocity.x,p=t.velocity.y,v=t.mass,g=e.velocity.x,y=e.velocity.y,m=e.mass,x={x:f*Math.cos(o)+p*Math.sin(o),y:f*Math.sin(o)-p*Math.cos(o)},b={x:g*Math.cos(o)+y*Math.sin(o),y:g*Math.sin(o)-y*Math.cos(o)},w=((v-m)*x.x+2*m*b.x)/(v+m),T=(2*v*x.x+(m-v)*b.x)/(v+m);return t.immovable||(t.velocity.x=(w*Math.cos(o)-x.y*Math.sin(o))*t.bounce.x,t.velocity.y=(x.y*Math.cos(o)+w*Math.sin(o))*t.bounce.y,f=t.velocity.x,p=t.velocity.y),e.immovable||(e.velocity.x=(T*Math.cos(o)-b.y*Math.sin(o))*e.bounce.x,e.velocity.y=(b.y*Math.cos(o)+T*Math.sin(o))*e.bounce.y,g=e.velocity.x,y=e.velocity.y),Math.abs(o)<Math.PI/2?f>0&&!t.immovable&&g>f?t.velocity.x*=-1:g<0&&!e.immovable&&f<g?e.velocity.x*=-1:p>0&&!t.immovable&&y>p?t.velocity.y*=-1:y<0&&!e.immovable&&p<y&&(e.velocity.y*=-1):Math.abs(o)>Math.PI/2&&(f<0&&!t.immovable&&g<f?t.velocity.x*=-1:g>0&&!e.immovable&&f>g?e.velocity.x*=-1:p<0&&!t.immovable&&y<p?t.velocity.y*=-1:y>0&&!e.immovable&&f>y&&(e.velocity.y*=-1)),t.immovable||(t.x+=t.velocity.x*this.delta-a*Math.cos(o),t.y+=t.velocity.y*this.delta-a*Math.sin(o)),e.immovable||(e.x+=e.velocity.x*this.delta+a*Math.cos(o),e.y+=e.velocity.y*this.delta+a*Math.sin(o)),(t.onCollide||e.onCollide)&&this.emit("collide",t.gameObject,e.gameObject,t,e),!0},intersects:function(t,e){return t!==e&&(t.isCircle?e.isCircle?h(t.center.x,t.center.y,e.center.x,e.center.y)<=t.halfWidth+e.halfWidth:this.circleBodyIntersects(t,e):e.isCircle?this.circleBodyIntersects(e,t):!(t.right<=e.position.x)&&(!(t.bottom<=e.position.y)&&(!(t.position.x>=e.right)&&!(t.position.y>=e.bottom))))},circleBodyIntersects:function(t,e){var i=s(t.center.x,e.left,e.right),n=s(t.center.y,e.top,e.bottom);return(t.center.x-i)*(t.center.x-i)+(t.center.y-n)*(t.center.y-n)<=t.halfWidth*t.halfWidth},overlap:function(t,e,i,n,s){return void 0===i&&(i=null),void 0===n&&(n=null),void 0===s&&(s=i),this.collideObjects(t,e,i,n,s,!0)},collide:function(t,e,i,n,s){return void 0===i&&(i=null),void 0===n&&(n=null),void 0===s&&(s=i),this.collideObjects(t,e,i,n,s,!1)},collideObjects:function(t,e,i,n,s,r){var o,a=Array.isArray(t),h=Array.isArray(e);if(this._total=0,a||h)if(!a&&h)for(o=0;o<e.length;o++)this.collideHandler(t,e[o],i,n,s,r);else if(a&&!h)for(o=0;o<t.length;o++)this.collideHandler(t[o],e,i,n,s,r);else for(o=0;o<t.length;o++)for(var l=0;l<e.length;l++)this.collideHandler(t[o],e[l],i,n,s,r);else this.collideHandler(t,e,i,n,s,r);return this._total>0},collideHandler:function(t,e,i,n,s,r){if(void 0===e&&t.isParent)return this.collideGroupVsSelf(t,i,n,s,r);if(!t||!e)return!1;if(t.body){if(e.body)return this.collideSpriteVsSprite(t,e,i,n,s,r);if(e.isParent)return this.collideSpriteVsGroup(t,e,i,n,s,r);if(e.isTilemap)return this.collideSpriteVsTilemapLayer(t,e,i,n,s,r)}else if(t.isParent){if(e.body)return this.collideSpriteVsGroup(e,t,i,n,s,r);if(e.isParent)return this.collideGroupVsGroup(t,e,i,n,s,r);if(e.isTilemap)return this.collideGroupVsTilemapLayer(t,e,i,n,s,r)}else if(t.isTilemap){if(e.body)return this.collideSpriteVsTilemapLayer(e,t,i,n,s,r);if(e.isParent)return this.collideGroupVsTilemapLayer(e,t,i,n,s,r)}},collideSpriteVsSprite:function(t,e,i,n,s,r){return!(!t.body||!e.body)&&(this.separate(t.body,e.body,n,s,r)&&(i&&i.call(s,t,e),this._total++),!0)},collideSpriteVsGroup:function(t,e,i,n,s,r){var o=t.body;if(0!==e.length&&o){var h=this.treeMinMax;h.minX=o.left,h.minY=o.top,h.maxX=o.right,h.maxY=o.bottom;var l=e.physicsType===a.DYNAMIC_BODY?this.tree.search(h):this.staticTree.search(h);if(0!==l.length)for(var u=e.getChildren(),c=0;c<u.length;c++){var d=u[c].body;d&&o!==d&&-1!==l.indexOf(d)&&(this.separate(o,d,n,s,r)&&(i&&i.call(s,o.gameObject,d.gameObject),this._total++))}}},collideGroupVsTilemapLayer:function(t,e,i,n,s,r){var o=t.getChildren();if(0===o.length)return!1;for(var a=!1,h=0;h<o.length;h++)o[h].body&&this.collideSpriteVsTilemapLayer(o[h],e,i,n,s,r)&&(a=!0);return a},collideSpriteVsTilemapLayer:function(t,e,i,n,s,r){var o=t.body;if(!o.enable)return!1;var a=o.position.x,h=o.position.y,l=o.width,u=o.height,c=e.layer;if(c.tileWidth>c.baseTileWidth){var d=(c.tileWidth-c.baseTileWidth)*e.scaleX;a-=d,l+=d}if(c.tileHeight>c.baseTileHeight){u+=(c.tileHeight-c.baseTileHeight)*e.scaleY}var f=e.getTilesWithinWorldXY(a,h,l,u);if(0===f.length)return!1;for(var v,g={left:0,right:0,top:0,bottom:0},m=0;m<f.length;m++)v=f[m],g.left=e.tileToWorldX(v.x),g.top=e.tileToWorldY(v.y),v.baseHeight!==v.height&&(g.top-=(v.height-v.baseHeight)*e.scaleY),g.right=g.left+v.width*e.scaleX,g.bottom=g.top+v.height*e.scaleY,T(g,o)&&(!n||n.call(s,t,v))&&p(v,t)&&(r||y(m,o,v,g,e,this.TILE_BIAS))&&(this._total++,i&&i.call(s,t,v),r&&o.onOverlap?t.emit("overlap",o.gameObject,v,o,null):o.onCollide&&t.emit("collide",o.gameObject,v,o,null))},collideGroupVsGroup:function(t,e,i,n,s,r){if(0!==t.length&&0!==e.length)for(var o=t.getChildren(),a=0;a<o.length;a++)this.collideSpriteVsGroup(o[a],e,i,n,s,r)},shutdown:function(){this.removeAllListeners()},destroy:function(){this.tree.clear(),this.staticTree.clear(),this.bodies.clear(),this.staticBodies.clear(),this.colliders.destroy(),this.removeAllListeners()}});t.exports=A},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(34),s=i(0),r=i(68),o=i(8),a=i(35),h=i(6),l=new s({initialize:function(t,e){this.world=t,this.gameObject=e,this.debugShowBody=t.defaults.debugShowBody,this.debugShowVelocity=t.defaults.debugShowVelocity,this.debugBodyColor=t.defaults.bodyDebugColor,this.enable=!0,this.isCircle=!1,this.radius=0,this.offset=new h,this.position=new h(e.x,e.y),this.prev=new h(this.position.x,this.position.y),this.allowRotation=!0,this.rotation=e.angle,this.preRotation=e.angle,this.width=e.width,this.height=e.height,this.sourceWidth=e.width,this.sourceHeight=e.height,e.frame&&(this.sourceWidth=e.frame.realWidth,this.sourceHeight=e.frame.realHeight),this.halfWidth=Math.abs(e.width/2),this.halfHeight=Math.abs(e.height/2),this.center=new h(e.x+this.halfWidth,e.y+this.halfHeight),this.velocity=new h,this.newVelocity=new h,this.deltaMax=new h,this.acceleration=new h,this.allowDrag=!0,this.drag=new h,this.allowGravity=!0,this.gravity=new h,this.bounce=new h,this.worldBounce=null,this.onWorldBounds=!1,this.onCollide=!1,this.onOverlap=!1,this.maxVelocity=new h(1e4,1e4),this.friction=new h(1,0),this.angularVelocity=0,this.angularAcceleration=0,this.angularDrag=0,this.maxAngular=1e3,this.mass=1,this.angle=0,this.speed=0,this.facing=r.FACING_NONE,this.immovable=!1,this.moves=!0,this.customSeparateX=!1,this.customSeparateY=!1,this.overlapX=0,this.overlapY=0,this.overlapR=0,this.embedded=!1,this.collideWorldBounds=!1,this.checkCollision={none:!1,up:!0,down:!0,left:!0,right:!0},this.touching={none:!0,up:!1,down:!1,left:!1,right:!1},this.wasTouching={none:!0,up:!1,down:!1,left:!1,right:!1},this.blocked={none:!0,up:!1,down:!1,left:!1,right:!1},this.dirty=!1,this.syncBounds=!1,this.isMoving=!1,this.stopVelocityOnCollide=!0,this.physicsType=r.DYNAMIC_BODY,this._reset=!0,this._sx=e.scaleX,this._sy=e.scaleY,this._dx=0,this._dy=0,this._bounds=new o},updateBounds:function(){var t=this.gameObject;if(this.syncBounds){var e=t.getBounds(this._bounds);e.width===this.width&&e.height===this.height||(this.width=e.width,this.height=e.height,this._reset=!0)}else{var i=Math.abs(t.scaleX),n=Math.abs(t.scaleY);i===this._sx&&n===this._sy||(this.width=this.sourceWidth*i,this.height=this.sourceHeight*n,this._sx=i,this._sy=n,this._reset=!0)}this._reset&&(this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.updateCenter())},updateCenter:function(){this.center.set(this.position.x+this.halfWidth,this.position.y+this.halfHeight)},update:function(t){this.dirty=!0,this.wasTouching.none=this.touching.none,this.wasTouching.up=this.touching.up,this.wasTouching.down=this.touching.down,this.wasTouching.left=this.touching.left,this.wasTouching.right=this.touching.right,this.touching.none=!0,this.touching.up=!1,this.touching.down=!1,this.touching.left=!1,this.touching.right=!1,this.blocked.none=!0,this.blocked.up=!1,this.blocked.down=!1,this.blocked.left=!1,this.blocked.right=!1,this.overlapR=0,this.overlapX=0,this.overlapY=0,this.embedded=!1,this.updateBounds();var e=this.gameObject;this.position.x=e.x-e.displayOriginX+e.scaleX*this.offset.x,this.position.y=e.y-e.displayOriginY+e.scaleY*this.offset.y,this.updateCenter(),this.rotation=e.angle,this.preRotation=this.rotation,this._reset&&(this.prev.x=this.position.x,this.prev.y=this.position.y),this.moves&&(this.world.updateMotion(this),this.newVelocity.set(this.velocity.x*t,this.velocity.y*t),this.position.x+=this.newVelocity.x,this.position.y+=this.newVelocity.y,this.updateCenter(),this.position.x===this.prev.x&&this.position.y===this.prev.y||(this.angle=Math.atan2(this.velocity.y,this.velocity.x)),this.speed=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y),this.collideWorldBounds&&this.checkWorldBounds()&&this.onWorldBounds&&this.world.emit("worldbounds",this,this.blocked.up,this.blocked.down,this.blocked.left,this.blocked.right)),this._dx=this.deltaX(),this._dy=this.deltaY(),this._reset=!1},postUpdate:function(){this.enable&&this.dirty&&(this.dirty=!1,this.deltaX()<0?this.facing=r.FACING_LEFT:this.deltaX()>0&&(this.facing=r.FACING_RIGHT),this.deltaY()<0?this.facing=r.FACING_UP:this.deltaY()>0&&(this.facing=r.FACING_DOWN),this.moves&&(this._dx=this.deltaX(),this._dy=this.deltaY(),0!==this.deltaMax.x&&0!==this._dx&&(this._dx<0&&this._dx<-this.deltaMax.x?this._dx=-this.deltaMax.x:this._dx>0&&this._dx>this.deltaMax.x&&(this._dx=this.deltaMax.x)),0!==this.deltaMax.y&&0!==this._dy&&(this._dy<0&&this._dy<-this.deltaMax.y?this._dy=-this.deltaMax.y:this._dy>0&&this._dy>this.deltaMax.y&&(this._dy=this.deltaMax.y)),this.gameObject.x+=this._dx,this.gameObject.y+=this._dy,this._reset=!0),this.updateCenter(),this.allowRotation&&(this.gameObject.angle+=this.deltaZ()),this.prev.x=this.position.x,this.prev.y=this.position.y)},checkWorldBounds:function(){var t=this.position,e=this.world.bounds,i=this.world.checkCollision,n=this.worldBounce?-this.worldBounce.x:-this.bounce.x,s=this.worldBounce?-this.worldBounce.y:-this.bounce.y;return t.x<e.x&&i.left?(t.x=e.x,this.velocity.x*=n,this.blocked.left=!0,this.blocked.none=!1):this.right>e.right&&i.right&&(t.x=e.right-this.width,this.velocity.x*=n,this.blocked.right=!0,this.blocked.none=!1),t.y<e.y&&i.up?(t.y=e.y,this.velocity.y*=s,this.blocked.up=!0,this.blocked.none=!1):this.bottom>e.bottom&&i.down&&(t.y=e.bottom-this.height,this.velocity.y*=s,this.blocked.down=!0,this.blocked.none=!1),!this.blocked.none},setOffset:function(t,e){return void 0===e&&(e=t),this.offset.set(t,e),this},setSize:function(t,e,i){if(void 0===i&&(i=!0),this.sourceWidth=t,this.sourceHeight=e,this.width=this.sourceWidth*this._sx,this.height=this.sourceHeight*this._sy,this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.updateCenter(),i&&this.gameObject.getCenter){var n=this.gameObject,s=n.displayWidth/2,r=n.displayHeight/2;this.offset.set(s-this.halfWidth,r-this.halfHeight)}return this.isCircle=!1,this.radius=0,this},setCircle:function(t,e,i){return void 0===e&&(e=this.offset.x),void 0===i&&(i=this.offset.y),t>0?(this.isCircle=!0,this.radius=t,this.sourceWidth=2*t,this.sourceHeight=2*t,this.width=this.sourceWidth*this._sx,this.height=this.sourceHeight*this._sy,this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.offset.set(e,i),this.updateCenter()):this.isCircle=!1,this},reset:function(t,e){this.stop();var i=this.gameObject;i.setPosition(t,e),i.getTopLeft(this.position),this.prev.copy(this.position),this.rotation=i.angle,this.preRotation=i.angle,this.updateBounds(),this.updateCenter()},stop:function(){return this.velocity.set(0),this.acceleration.set(0),this.speed=0,this.angularVelocity=0,this.angularAcceleration=0,this},getBounds:function(t){return t.x=this.x,t.y=this.y,t.right=this.right,t.bottom=this.bottom,t},hitTest:function(t,e){return this.isCircle?n(this,t,e):a(this,t,e)},onFloor:function(){return this.blocked.down},onCeiling:function(){return this.blocked.up},onWall:function(){return this.blocked.left||this.blocked.right},deltaAbsX:function(){return this.deltaX()>0?this.deltaX():-this.deltaX()},deltaAbsY:function(){return this.deltaY()>0?this.deltaY():-this.deltaY()},deltaX:function(){return this.position.x-this.prev.x},deltaY:function(){return this.position.y-this.prev.y},deltaZ:function(){return this.rotation-this.preRotation},destroy:function(){this.enable=!1,this.world.pendingDestroy.set(this)},drawDebug:function(t){var e=this.position,i=e.x+this.halfWidth,n=e.y+this.halfHeight;this.debugShowBody&&(t.lineStyle(1,this.debugBodyColor),this.isCircle?t.strokeCircle(i,n,this.radius):t.strokeRect(e.x,e.y,this.width,this.height)),this.debugShowVelocity&&(t.lineStyle(1,this.world.defaults.velocityDebugColor,1),t.lineBetween(i,n,i+this.velocity.x/2,n+this.velocity.y/2))},willDrawDebug:function(){return this.debugShowBody||this.debugShowVelocity},setCollideWorldBounds:function(t){return this.collideWorldBounds=t,this},setVelocity:function(t,e){return this.velocity.set(t,e),this},setVelocityX:function(t){return this.velocity.x=t,this},setVelocityY:function(t){return this.velocity.y=t,this},setBounce:function(t,e){return this.bounce.set(t,e),this},setBounceX:function(t){return this.bounce.x=t,this},setBounceY:function(t){return this.bounce.y=t,this},setAcceleration:function(t,e){return this.acceleration.set(t,e),this},setAccelerationX:function(t){return this.acceleration.x=t,this},setAccelerationY:function(t){return this.acceleration.y=t,this},setDrag:function(t,e){return this.drag.set(t,e),this},setDragX:function(t){return this.drag.x=t,this},setDragY:function(t){return this.drag.y=t,this},setGravity:function(t,e){return this.gravity.set(t,e),this},setGravityX:function(t){return this.gravity.x=t,this},setGravityY:function(t){return this.gravity.y=t,this},setFriction:function(t,e){return this.friction.set(t,e),this},setFrictionX:function(t){return this.friction.x=t,this},setFrictionY:function(t){return this.friction.y=t,this},setAngularVelocity:function(t){return this.angularVelocity=t,this},setAngularAcceleration:function(t){return this.angularAcceleration=t,this},setAngularDrag:function(t){return this.angularDrag=t,this},setMass:function(t){return this.mass=t,this},setImmovable:function(t){return this.immovable=t,this},x:{get:function(){return this.position.x},set:function(t){this.position.x=t}},y:{get:function(){return this.position.y},set:function(t){this.position.y=t}},left:{get:function(){return this.position.x}},right:{get:function(){return this.position.x+this.width}},top:{get:function(){return this.position.y}},bottom:{get:function(){return this.position.y+this.height}}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n,s,r,o){this.world=t,this.name="",this.active=!0,this.overlapOnly=e,this.object1=i,this.object2=n,this.collideCallback=s,this.processCallback=r,this.callbackContext=o},setName:function(t){return this.name=t,this},update:function(){this.world.collideObjects(this.object1,this.object2,this.collideCallback,this.processCallback,this.callbackContext,this.overlapOnly)},destroy:function(){this.world.removeCollider(this),this.active=!1,this.world=null,this.object1=null,this.object2=null,this.collideCallback=null,this.processCallback=null,this.callbackContext=null}});t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=0,r=t.deltaAbsX()+e.deltaAbsX()+n;return 0===t.deltaX()&&0===e.deltaX()?(t.embedded=!0,e.embedded=!0):t.deltaX()>e.deltaX()?(s=t.right-e.x,s>r&&!i||!1===t.checkCollision.right||!1===e.checkCollision.left?s=0:(t.touching.none=!1,t.touching.right=!0,e.touching.none=!1,e.touching.left=!0)):t.deltaX()<e.deltaX()&&(s=t.x-e.width-e.x,-s>r&&!i||!1===t.checkCollision.left||!1===e.checkCollision.right?s=0:(t.touching.none=!1,t.touching.left=!0,e.touching.none=!1,e.touching.right=!0)),t.overlapX=s,e.overlapX=s,s};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=0,r=t.deltaAbsY()+e.deltaAbsY()+n;return 0===t.deltaY()&&0===e.deltaY()?(t.embedded=!0,e.embedded=!0):t.deltaY()>e.deltaY()?(s=t.bottom-e.y,s>r&&!i||!1===t.checkCollision.down||!1===e.checkCollision.up?s=0:(t.touching.none=!1,t.touching.down=!0,e.touching.none=!1,e.touching.up=!0)):t.deltaY()<e.deltaY()&&(s=t.y-e.bottom,-s>r&&!i||!1===t.checkCollision.up||!1===e.checkCollision.down?s=0:(t.touching.none=!1,t.touching.up=!0,e.touching.none=!1,e.touching.down=!0)),t.overlapY=s,e.overlapY=s,s};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(){this._pending=[],this._active=[],this._destroy=[],this._toProcess=0},add:function(t){return this._pending.push(t),this._toProcess++,this},remove:function(t){return this._destroy.push(t),this._toProcess++,this},update:function(){if(0===this._toProcess)return this._active;var t,e,i=this._destroy,n=this._active;for(t=0;t<i.length;t++){e=i[t];var s=n.indexOf(e);-1!==s&&n.splice(s,1)}for(i.length=0,i=this._pending,t=0;t<i.length;t++)e=i[t],this._active.push(e);return i.length=0,this._toProcess=0,this._active},getActive:function(){return this._active},destroy:function(){this._pending=[],this._active=[],this._destroy=[]}});t.exports=s},function(t,e,i){function n(t,e){if(!(this instanceof n))return new n(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&this._initFormat(e),this.clear()}function s(t,e,i){if(!i)return e.indexOf(t);for(var n=0;n<e.length;n++)if(i(t,e[n]))return n;return-1}function r(t,e){o(t,0,t.children.length,e,t)}function o(t,e,i,n,s){s||(s=g(null)),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(var r,o=e;o<i;o++)r=t.children[o],a(s,t.leaf?n(r):r);return s}function a(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function h(t,e){return t.minX-e.minX}function l(t,e){return t.minY-e.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function c(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function f(t,e){var i=Math.max(t.minX,e.minX),n=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,s-i)*Math.max(0,r-n)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function v(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function g(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function y(t,e,i,n,s){for(var r,o=[e,i];o.length;)i=o.pop(),e=o.pop(),i-e<=n||(r=e+Math.ceil((i-e)/n/2)*n,m(t,r,e,i,s),o.push(e,r,r,i))}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var m=i(356);n.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,i=[],n=this.toBBox;if(!v(t,e))return i;for(var s,r,o,a,h=[];e;){for(s=0,r=e.children.length;s<r;s++)o=e.children[s],a=e.leaf?n(o):o,v(t,a)&&(e.leaf?i.push(o):p(t,a)?this._all(o,i):h.push(o));e=h.pop()}return i},collides:function(t){var e=this.data,i=this.toBBox;if(!v(t,e))return!1;for(var n,s,r,o,a=[];e;){for(n=0,s=e.children.length;n<s;n++)if(r=e.children[n],o=e.leaf?i(r):r,v(t,o)){if(e.leaf||p(t,o))return!0;a.push(r)}e=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var s=this.data;this.data=n,n=s}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=g([]),this},remove:function(t,e){if(!t)return this;for(var i,n,r,o,a=this.data,h=this.toBBox(t),l=[],u=[];a||l.length;){if(a||(a=l.pop(),n=l[l.length-1],i=u.pop(),o=!0),a.leaf&&-1!==(r=s(t,a.children,e)))return a.children.splice(r,1),l.push(a),this._condense(l),this;o||a.leaf||!p(a,h)?n?(i++,a=n.children[i],o=!1):a=null:(l.push(a),u.push(i),i=0,n=a,a=a.children[0])}return this},toBBox:function(t){return t},compareMinX:h,compareMinY:l,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var i=[];t;)t.leaf?e.push.apply(e,t.children):i.push.apply(i,t.children),t=i.pop();return e},_build:function(t,e,i,n){var s,o=i-e+1,a=this._maxEntries;if(o<=a)return s=g(t.slice(e,i+1)),r(s,this.toBBox),s;n||(n=Math.ceil(Math.log(o)/Math.log(a)),a=Math.ceil(o/Math.pow(a,n-1))),s=g([]),s.leaf=!1,s.height=n;var h,l,u,c,d=Math.ceil(o/a),f=d*Math.ceil(Math.sqrt(a));for(y(t,e,i,f,this.compareMinX),h=e;h<=i;h+=f)for(u=Math.min(h+f-1,i),y(t,h,u,d,this.compareMinY),l=h;l<=u;l+=d)c=Math.min(l+d-1,u),s.children.push(this._build(t,l,c,n-1));return r(s,this.toBBox),s},_chooseSubtree:function(t,e,i,n){for(var s,r,o,a,h,l,c,f;;){if(n.push(e),e.leaf||n.length-1===i)break;for(c=f=1/0,s=0,r=e.children.length;s<r;s++)o=e.children[s],h=u(o),l=d(t,o)-h,l<f?(f=l,c=h<c?h:c,a=o):l===f&&h<c&&(c=h,a=o);e=a||e.children[0]}return e},_insert:function(t,e,i){var n=this.toBBox,s=i?t:n(t),r=[],o=this._chooseSubtree(s,this.data,e,r);for(o.children.push(t),a(o,s);e>=0&&r[e].children.length>this._maxEntries;)this._split(r,e),e--;this._adjustParentBBoxes(s,r,e)},_split:function(t,e){var i=t[e],n=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,n);var o=this._chooseSplitIndex(i,s,n),a=g(i.children.splice(o,i.children.length-o));a.height=i.height,a.leaf=i.leaf,r(i,this.toBBox),r(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(i,a)},_splitRoot:function(t,e){this.data=g([t,e]),this.data.height=t.height+1,this.data.leaf=!1,r(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,i){var n,s,r,a,h,l,c,d;for(l=c=1/0,n=e;n<=i-e;n++)s=o(t,0,n,this.toBBox),r=o(t,n,i,this.toBBox),a=f(s,r),h=u(s)+u(r),a<l?(l=a,d=n,c=h<c?h:c):a===l&&h<c&&(c=h,d=n);return d},_chooseSplitAxis:function(t,e,i){var n=t.leaf?this.compareMinX:h,s=t.leaf?this.compareMinY:l;this._allDistMargin(t,e,i,n)<this._allDistMargin(t,e,i,s)&&t.children.sort(n)},_allDistMargin:function(t,e,i,n){t.children.sort(n);var s,r,h=this.toBBox,l=o(t,0,e,h),u=o(t,i-e,i,h),d=c(l)+c(u);for(s=e;s<i-e;s++)r=t.children[s],a(l,t.leaf?h(r):r),d+=c(l);for(s=i-e-1;s>=e;s--)r=t.children[s],a(u,t.leaf?h(r):r),d+=c(u);return d},_adjustParentBBoxes:function(t,e,i){for(var n=i;n>=0;n--)a(e[n],t)},_condense:function(t){for(var e,i=t.length-1;i>=0;i--)0===t[i].children.length?i>0?(e=t[i-1].children,e.splice(e.indexOf(t[i]),1)):this.clear():r(t[i],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}},t.exports=n},function(t,e){function i(t,e,i){var n=t[e];t[e]=t[i],t[i]=n}function n(t,e){return t<e?-1:t>e?1:0}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var s=function(t,e,r,o,a){for(r=r||0,o=o||t.length-1,a=a||n;o>r;){if(o-r>600){var h=o-r+1,l=e-r+1,u=Math.log(h),c=.5*Math.exp(2*u/3),d=.5*Math.sqrt(u*c*(h-c)/h)*(l-h/2<0?-1:1),f=Math.max(r,Math.floor(e-l*c/h+d)),p=Math.min(o,Math.floor(e+(h-l)*c/h+d));s(t,e,f,p,a)}var v=t[e],g=r,y=o;for(i(t,r,e),a(t[o],v)>0&&i(t,r,o);g<y;){for(i(t,g,y),g++,y--;a(t[g],v)<0;)g++;for(;a(t[y],v)>0;)y--}0===a(t[r],v)?i(t,r,y):(y++,i(t,y,o)),y<=e&&(r=y+1),e<=y&&(o=y-1)}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return!(e.right<=t.left||e.bottom<=t.top||e.position.x>=t.right||e.position.y>=t.bottom)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(34),s=i(0),r=i(68),o=i(35),a=i(6),h=new s({initialize:function(t,e){this.world=t,this.gameObject=e,this.debugShowBody=t.defaults.debugShowStaticBody,this.debugBodyColor=t.defaults.staticBodyDebugColor,this.enable=!0,this.isCircle=!1,this.radius=0,this.offset=new a,this.position=new a(e.x-e.displayOriginX,e.y-e.displayOriginY),this.width=e.displayWidth,this.height=e.displayHeight,this.halfWidth=Math.abs(this.width/2),this.halfHeight=Math.abs(this.height/2),this.center=new a(e.x+this.halfWidth,e.y+this.halfHeight),this.velocity=a.ZERO,this.allowGravity=!1,this.gravity=a.ZERO,this.bounce=a.ZERO,this.onWorldBounds=!1,this.onCollide=!1,this.onOverlap=!1,this.mass=1,this.immovable=!0,this.customSeparateX=!1,this.customSeparateY=!1,this.overlapX=0,this.overlapY=0,this.overlapR=0,this.embedded=!1,this.collideWorldBounds=!1,this.checkCollision={none:!1,up:!0,down:!0,left:!0,right:!0},this.touching={none:!0,up:!1,down:!1,left:!1,right:!1},this.wasTouching={none:!0,up:!1,down:!1,left:!1,right:!1},this.blocked={none:!0,up:!1,down:!1,left:!1,right:!1},this.physicsType=r.STATIC_BODY},setGameObject:function(t,e){return t&&t!==this.gameObject&&(this.gameObject.body=null,t.body=this,this.gameObject=t),e&&this.updateFromGameObject(),this},updateFromGameObject:function(){this.world.staticTree.remove(this);var t=this.gameObject;return t.getTopLeft(this.position),this.width=t.displayWidth,this.height=t.displayHeight,this.halfWidth=Math.abs(this.width/2),this.halfHeight=Math.abs(this.height/2),this.center.set(this.position.x+this.halfWidth,this.position.y+this.halfHeight),this.world.staticTree.insert(this),this},setSize:function(t,e,i,n){return void 0===i&&(i=this.offset.x),void 0===n&&(n=this.offset.y),this.world.staticTree.remove(this),this.width=t,this.height=e,this.halfWidth=Math.floor(t/2),this.halfHeight=Math.floor(e/2),this.offset.set(i,n),this.updateCenter(),this.isCircle=!1,this.radius=0,this.world.staticTree.insert(this),this},setCircle:function(t,e,i){return void 0===e&&(e=this.offset.x),void 0===i&&(i=this.offset.y),t>0?(this.world.staticTree.remove(this),this.isCircle=!0,this.radius=t,this.width=2*t,this.height=2*t,this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.offset.set(e,i),this.updateCenter(),this.world.staticTree.insert(this)):this.isCircle=!1,this},updateCenter:function(){this.center.set(this.position.x+this.halfWidth,this.position.y+this.halfHeight)},reset:function(t,e){var i=this.gameObject;void 0===t&&(t=i.x),void 0===e&&(e=i.y),this.world.staticTree.remove(this),i.getTopLeft(this.position),this.updateCenter(),this.world.staticTree.insert(this)},stop:function(){return this},getBounds:function(t){return t.x=this.x,t.y=this.y,t.right=this.right,t.bottom=this.bottom,t},hitTest:function(t,e){return this.isCircle?n(this,t,e):o(this,t,e)},deltaAbsX:function(){return 0},deltaAbsY:function(){return 0},deltaX:function(){return 0},deltaY:function(){return 0},deltaZ:function(){return 0},destroy:function(){this.enable=!1,this.world.pendingDestroy.set(this)},drawDebug:function(t){var e=this.position;this.debugShowBody&&(t.lineStyle(1,this.debugBodyColor,1),t.strokeRect(e.x,e.y,this.width,this.height))},willDrawDebug:function(){return this.debugShowBody},setMass:function(t){return t<=0&&(t=.1),this.mass=t,this},x:{get:function(){return this.position.x},set:function(t){this.world.staticTree.remove(this),this.position.x=t,this.world.staticTree.insert(this)}},y:{get:function(){return this.position.y},set:function(t){this.world.staticTree.remove(this),this.position.y=t,this.world.staticTree.insert(this)}},left:{get:function(){return this.position.x}},right:{get:function(){return this.position.x+this.width}},top:{get:function(){return this.position.y}},bottom:{get:function(){return this.position.y+this.height}}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(82),r=i(897),o=i(83),a=i(898),h=new n({initialize:function(t,e,i,n,r){void 0===n&&(n=16),void 0===r&&(r=n),this.world=t,this.gameObject=null,this.enabled=!0,this.parent,this.id=t.getNextID(),this.name="",this.size={x:n,y:r},this.offset={x:0,y:0},this.pos={x:e,y:i},this.last={x:e,y:i},this.vel={x:0,y:0},this.accel={x:0,y:0},this.friction={x:0,y:0},this.maxVel={x:t.defaults.maxVelocityX,y:t.defaults.maxVelocityY},this.standing=!1,this.gravityFactor=t.defaults.gravityFactor,this.bounciness=t.defaults.bounciness,this.minBounceVelocity=t.defaults.minBounceVelocity,this.accelGround=0,this.accelAir=0,this.jumpSpeed=0,this.type=o.NONE,this.checkAgainst=o.NONE,this.collides=s.NEVER,this.debugShowBody=t.defaults.debugShowBody,this.debugShowVelocity=t.defaults.debugShowVelocity,this.debugBodyColor=t.defaults.bodyDebugColor,this.updateCallback,this.slopeStanding={min:.767944870877505,max:2.3736477827122884}},reset:function(t,e){this.pos={x:t,y:e},this.last={x:t,y:e},this.vel={x:0,y:0},this.accel={x:0,y:0},this.friction={x:0,y:0},this.maxVel={x:100,y:100},this.standing=!1,this.gravityFactor=1,this.bounciness=0,this.minBounceVelocity=40,this.accelGround=0,this.accelAir=0,this.jumpSpeed=0,this.type=o.NONE,this.checkAgainst=o.NONE,this.collides=s.NEVER},update:function(t){var e=this.pos;this.last.x=e.x,this.last.y=e.y,this.vel.y+=this.world.gravity*t*this.gravityFactor,this.vel.x=r(t,this.vel.x,this.accel.x,this.friction.x,this.maxVel.x),this.vel.y=r(t,this.vel.y,this.accel.y,this.friction.y,this.maxVel.y);var i=this.vel.x*t,n=this.vel.y*t,s=this.world.collisionMap.trace(e.x,e.y,i,n,this.size.x,this.size.y);this.handleMovementTrace(s)&&a(this,s);var o=this.gameObject;o&&(o.x=e.x-this.offset.x+o.displayOriginX*o.scaleX,o.y=e.y-this.offset.y+o.displayOriginY*o.scaleY),this.updateCallback&&this.updateCallback(this)},drawDebug:function(t){var e=this.pos;if(this.debugShowBody&&(t.lineStyle(1,this.debugBodyColor,1),t.strokeRect(e.x,e.y,this.size.x,this.size.y)),this.debugShowVelocity){var i=e.x+this.size.x/2,n=e.y+this.size.y/2;t.lineStyle(1,this.world.defaults.velocityDebugColor,1),t.lineBetween(i,n,i+this.vel.x,n+this.vel.y)}},willDrawDebug:function(){return this.debugShowBody||this.debugShowVelocity},skipHash:function(){return!this.enabled||0===this.type&&0===this.checkAgainst&&0===this.collides},touches:function(t){return!(this.pos.x>=t.pos.x+t.size.x||this.pos.x+this.size.x<=t.pos.x||this.pos.y>=t.pos.y+t.size.y||this.pos.y+this.size.y<=t.pos.y)},resetSize:function(t,e,i,n){return this.pos.x=t,this.pos.y=e,this.size.x=i,this.size.y=n,this},toJSON:function(){return{name:this.name,size:{x:this.size.x,y:this.size.y},pos:{x:this.pos.x,y:this.pos.y},vel:{x:this.vel.x,y:this.vel.y},accel:{x:this.accel.x,y:this.accel.y},friction:{x:this.friction.x,y:this.friction.y},maxVel:{x:this.maxVel.x,y:this.maxVel.y},gravityFactor:this.gravityFactor,bounciness:this.bounciness,minBounceVelocity:this.minBounceVelocity,type:this.type,checkAgainst:this.checkAgainst,collides:this.collides}},fromJSON:function(){},check:function(){},collideWith:function(t,e){this.parent&&this.parent._collideCallback&&this.parent._collideCallback.call(this.parent._callbackScope,this,t,e)},handleMovementTrace:function(){return!0},destroy:function(){this.world.remove(this),this.enabled=!1,this.world=null,this.gameObject=null,this.parent=null}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(899),r=new n({initialize:function(t,e){void 0===t&&(t=32),this.tilesize=t,this.data=Array.isArray(e)?e:[],this.width=Array.isArray(e)?e[0].length:0,this.height=Array.isArray(e)?e.length:0,this.lastSlope=55,this.tiledef=s},trace:function(t,e,i,n,s,r){var o={collision:{x:!1,y:!1,slope:!1},pos:{x:t+i,y:e+n},tile:{x:0,y:0}};if(!this.data)return o;var a=Math.ceil(Math.max(Math.abs(i),Math.abs(n))/this.tilesize);if(a>1)for(var h=i/a,l=n/a,u=0;u<a&&(h||l)&&(this.step(o,t,e,h,l,s,r,i,n,u),t=o.pos.x,e=o.pos.y,o.collision.x&&(h=0,i=0),o.collision.y&&(l=0,n=0),!o.collision.slope);u++);else this.step(o,t,e,i,n,s,r,i,n,0);return o},step:function(t,e,i,n,s,r,o,a,h,l){var u,c,d=0,f=this.tilesize,p=this.width,v=this.height;if(n){var g=n>0?r:0,y=n<0?f:0,m=Math.max(Math.floor(i/f),0),x=Math.min(Math.ceil((i+o)/f),v);u=Math.floor((t.pos.x+g)/f);var b=Math.floor((e+g)/f);if((l>0||u===b||b<0||b>=p)&&(b=-1),u>=0&&u<p)for(c=m;c<x&&!(-1!==b&&(d=this.data[c][b])>1&&d<=this.lastSlope&&this.checkDef(t,d,e,i,a,h,r,o,b,c));c++)if(1===(d=this.data[c][u])||d>this.lastSlope||d>1&&this.checkDef(t,d,e,i,a,h,r,o,u,c)){if(d>1&&d<=this.lastSlope&&t.collision.slope)break;t.collision.x=!0,t.tile.x=d,t.pos.x=u*f-g+y,e=t.pos.x,a=0;break}}if(s){var w=s>0?o:0,T=s<0?f:0,S=Math.max(Math.floor(t.pos.x/f),0),A=Math.min(Math.ceil((t.pos.x+r)/f),p);c=Math.floor((t.pos.y+w)/f);var C=Math.floor((i+w)/f);if((l>0||c===C||C<0||C>=v)&&(C=-1),c>=0&&c<v)for(u=S;u<A&&!(-1!==C&&(d=this.data[C][u])>1&&d<=this.lastSlope&&this.checkDef(t,d,e,i,a,h,r,o,u,C));u++)if(1===(d=this.data[c][u])||d>this.lastSlope||d>1&&this.checkDef(t,d,e,i,a,h,r,o,u,c)){if(d>1&&d<=this.lastSlope&&t.collision.slope)break;t.collision.y=!0,t.tile.y=d,t.pos.y=c*f-w+T;break}}},checkDef:function(t,e,i,n,s,r,o,a,h,l){var u=this.tiledef[e];if(!u)return!1;var c=this.tilesize,d=(h+u[0])*c,f=(l+u[1])*c,p=(u[2]-u[0])*c,v=(u[3]-u[1])*c,g=u[4],y=i+s+(v<0?o:0)-d,m=n+r+(p>0?a:0)-f;if(p*m-v*y>0){if(s*-v+r*p<0)return g;var x=Math.sqrt(p*p+v*v),b=v/x,w=-p/x,T=y*b+m*w,S=b*T,A=w*T;return S*S+A*A>=s*s+r*r?g||p*(m-r)-v*(y-s)<.5:(t.pos.x=i+s-S,t.pos.y=n+r-A,t.collision.slope={x:p,y:v,nx:b,ny:w},!0)}return!1}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(362),r=i(363),o=i(364),a=new n({initialize:function(t){this.world=t,this.sys=t.scene.sys},body:function(t,e,i,n){return new s(this.world,t,e,i,n)},existing:function(t){var e=t.x-t.frame.centerX,i=t.y-t.frame.centerY,n=t.width,s=t.height;return t.body=this.world.create(e,i,n,s),t.body.parent=t,t.body.gameObject=t,t},image:function(t,e,i,n){var s=new r(this.world,t,e,i,n);return this.sys.displayList.add(s),s},sprite:function(t,e,i,n){var s=new o(this.world,t,e,i,n);return this.sys.displayList.add(s),this.sys.updateList.add(s),s}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(163),r=new n({Mixins:[s.Acceleration,s.BodyScale,s.BodyType,s.Bounce,s.CheckAgainst,s.Collides,s.Debug,s.Friction,s.Gravity,s.Offset,s.SetGameObject,s.Velocity],initialize:function(t,e,i,n,s){this.body=t.create(e,i,n,s),this.body.parent=this,this.size=this.body.size,this.offset=this.body.offset,this.vel=this.body.vel,this.accel=this.body.accel,this.friction=this.body.friction,this.maxVel=this.body.maxVel}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(163),r=i(61),o=new n({Extends:r,Mixins:[s.Acceleration,s.BodyScale,s.BodyType,s.Bounce,s.CheckAgainst,s.Collides,s.Debug,s.Friction,s.Gravity,s.Offset,s.SetGameObject,s.Velocity],initialize:function(t,e,i,n,s){r.call(this,t.scene,e,i,n,s),this.body=t.create(e-this.frame.centerX,i-this.frame.centerY,this.width,this.height),this.body.parent=this,this.body.gameObject=this,this.size=this.body.size,this.offset=this.body.offset,this.vel=this.body.vel,this.accel=this.body.accel,this.friction=this.body.friction,this.maxVel=this.body.maxVel}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(163),r=i(36),o=new n({Extends:r,Mixins:[s.Acceleration,s.BodyScale,s.BodyType,s.Bounce,s.CheckAgainst,s.Collides,s.Debug,s.Friction,s.Gravity,s.Offset,s.SetGameObject,s.Velocity],initialize:function(t,e,i,n,s){r.call(this,t.scene,e,i,n,s),this.body=t.create(e-this.frame.centerX,i-this.frame.centerY,this.width,this.height),this.body.parent=this,this.body.gameObject=this,this.size=this.body.size,this.offset=this.body.offset,this.vel=this.body.vel,this.accel=this.body.accel,this.friction=this.body.friction,this.maxVel=this.body.maxVel}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(359),s=i(0),r=i(82),o=i(360),a=i(13),h=i(1),l=i(62),u=i(59),c=i(913),d=i(22),f=i(83),p=new s({Extends:a,initialize:function(t,e){a.call(this),this.scene=t,this.bodies=new u,this.gravity=h(e,"gravity",0),this.cellSize=h(e,"cellSize",64),this.collisionMap=new o,this.timeScale=h(e,"timeScale",1),this.maxStep=h(e,"maxStep",.05),this.enabled=!0,this.drawDebug=h(e,"debug",!1),this.debugGraphic;var i=h(e,"maxVelocity",100);if(this.defaults={debugShowBody:h(e,"debugShowBody",!0),debugShowVelocity:h(e,"debugShowVelocity",!0),bodyDebugColor:h(e,"debugBodyColor",16711935),velocityDebugColor:h(e,"debugVelocityColor",65280),maxVelocityX:h(e,"maxVelocityX",i),maxVelocityY:h(e,"maxVelocityY",i),minBounceVelocity:h(e,"minBounceVelocity",40),gravityFactor:h(e,"gravityFactor",1),bounciness:h(e,"bounciness",0)},this.walls={left:null,right:null,top:null,bottom:null},this.delta=0,this._lastId=0,h(e,"setBounds",!1)){var n=e.setBounds;if("boolean"==typeof n)this.setBounds();else{var s=h(n,"x",0),r=h(n,"y",0),l=h(n,"width",t.sys.game.config.width),c=h(n,"height",t.sys.game.config.height),d=h(n,"thickness",64),f=h(n,"left",!0),p=h(n,"right",!0),v=h(n,"top",!0),g=h(n,"bottom",!0);this.setBounds(s,r,l,c,d,f,p,v,g)}}this.drawDebug&&this.createDebugGraphic()},setCollisionMap:function(t,e){if("string"==typeof t){var i=this.scene.cache.tilemap.get(t);if(!i||i.format!==d.WELTMEISTER)return console.warn("The specified key does not correspond to a Weltmeister tilemap: "+t),null;for(var n,s=i.data.layer,r=0;r<s.length;r++)if("collision"===s[r].name){n=s[r];break}void 0===e&&(e=n.tilesize),this.collisionMap=new o(e,n.data)}else Array.isArray(t)?this.collisionMap=new o(e,t):console.warn("Invalid Weltmeister collision map data: "+t);return this.collisionMap},setCollisionMapFromTilemapLayer:function(t,e){void 0===e&&(e={});for(var i=h(e,"slopeProperty",null),n=h(e,"slopeMap",null),s=h(e,"defaultCollidingSlope",null),r=h(e,"defaultNonCollidingSlope",0),a=t.layer,u=a.baseTileWidth,c=[],d=0;d<a.height;d++){c[d]=[];for(var f=0;f<a.width;f++){var p=a.data[d][f];p&&p.collides?null!==i&&l(p.properties,i)?c[d][f]=parseInt(p.properties[i],10):null!==n&&l(n,p.index)?c[d][f]=n[p.index]:c[d][f]=null!==s?s:p.index:c[d][f]=r}}return this.collisionMap=new o(u,c),this.collisionMap},setBounds:function(t,e,i,n,s,r,o,a,h){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=this.scene.sys.game.config.width),void 0===n&&(n=this.scene.sys.game.config.height),void 0===s&&(s=64),void 0===r&&(r=!0),void 0===o&&(o=!0),void 0===a&&(a=!0),void 0===h&&(h=!0),this.updateWall(r,"left",t-s,e,s,n),this.updateWall(o,"right",t+i,e,s,n),this.updateWall(a,"top",t,e-s,i,s),this.updateWall(h,"bottom",t,e+n,i,s),this},updateWall:function(t,e,i,n,s,o){var a=this.walls[e];t?a?a.resetSize(i,n,s,o):(this.walls[e]=this.create(i,n,s,o),this.walls[e].name=e,this.walls[e].gravityFactor=0,this.walls[e].collides=r.FIXED):(a&&this.bodies.remove(a),this.walls[e]=null)},createDebugGraphic:function(){var t=this.scene.sys.add.graphics({x:0,y:0});return t.setDepth(Number.MAX_VALUE),this.debugGraphic=t,this.drawDebug=!0,t},getNextID:function(){return this._lastId++},create:function(t,e,i,s){var r=new n(this,t,e,i,s);return this.bodies.set(r),r},remove:function(t){this.bodies.delete(t)},pause:function(){return this.enabled=!1,this.emit("pause"),this},resume:function(){return this.enabled=!0,this.emit("resume"),this},update:function(t,e){if(this.enabled&&0!==this.bodies.size){var i=Math.min(e/1e3,this.maxStep)*this.timeScale;this.delta=i;var n,s,r=this.bodies.entries,o=r.length,a={},h=this.cellSize;for(n=0;n<o;n++)s=r[n],s.enabled&&s.update(i);for(n=0;n<o;n++)s=r[n],s.skipHash()||this.checkHash(s,a,h);if(this.drawDebug){var l=this.debugGraphic;for(l.clear(),n=0;n<o;n++)s=r[n],s.willDrawDebug()&&s.drawDebug(l)}}},checkHash:function(t,e,i){for(var n={},s=Math.floor(t.pos.x/i),r=Math.floor(t.pos.y/i),o=Math.floor((t.pos.x+t.size.x)/i)+1,a=Math.floor((t.pos.y+t.size.y)/i)+1,h=s;h<o;h++)for(var l=r;l<a;l++)if(e[h])if(e[h][l]){for(var u=e[h][l],c=0;c<u.length;c++)t.touches(u[c])&&!n[u[c].id]&&(n[u[c].id]=!0,this.checkBodies(t,u[c]));u.push(t)}else e[h][l]=[t];else e[h]={},e[h][l]=[t]},checkBodies:function(t,e){t.collides===r.FIXED&&e.collides===r.FIXED||(t.checkAgainst&e.type&&t.check(e),e.checkAgainst&t.type&&e.check(t),t.collides&&e.collides&&t.collides+e.collides>r.ACTIVE&&c(this,t,e))},setCollidesNever:function(t){for(var e=0;e<t.length;e++)t[e].collides=r.NEVER;return this},setLite:function(t){for(var e=0;e<t.length;e++)t[e].collides=r.LITE;return this},setPassive:function(t){for(var e=0;e<t.length;e++)t[e].collides=r.PASSIVE;return this},setActive:function(t){for(var e=0;e<t.length;e++)t[e].collides=r.ACTIVE;return this},setFixed:function(t){for(var e=0;e<t.length;e++)t[e].collides=r.FIXED;return this},setTypeNone:function(t){for(var e=0;e<t.length;e++)t[e].type=f.NONE;return this},setTypeA:function(t){for(var e=0;e<t.length;e++)t[e].type=f.A;return this},setTypeB:function(t){for(var e=0;e<t.length;e++)t[e].type=f.B;return this},setAvsB:function(t){for(var e=0;e<t.length;e++)t[e].type=f.A,t[e].checkAgainst=f.B;return this},setBvsA:function(t){for(var e=0;e<t.length;e++)t[e].type=f.B,t[e].checkAgainst=f.A;return this},setCheckAgainstNone:function(t){for(var e=0;e<t.length;e++)t[e].checkAgainst=f.NONE;return this},setCheckAgainstA:function(t){for(var e=0;e<t.length;e++)t[e].checkAgainst=f.A;return this},setCheckAgainstB:function(t){for(var e=0;e<t.length;e++)t[e].checkAgainst=f.B;return this},shutdown:function(){this.removeAllListeners()},destroy:function(){this.removeAllListeners(),this.scene=null,this.bodies.clear(),this.bodies=null,this.collisionMap=null}});t.exports=p},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(37),s=i(0),r=i(368),o=i(70),a=i(369),h=i(370),l=i(166),u=i(929),c=new s({initialize:function(t){this.world=t,this.scene=t.scene,this.sys=t.scene.sys},rectangle:function(t,e,i,s,r){var o=n.rectangle(t,e,i,s,r);return this.world.add(o),o},trapezoid:function(t,e,i,s,r,o){var a=n.trapezoid(t,e,i,s,r,o);return this.world.add(a),a},circle:function(t,e,i,s,r){var o=n.circle(t,e,i,s,r);return this.world.add(o),o},polygon:function(t,e,i,s,r){var o=n.polygon(t,e,i,s,r);return this.world.add(o),o},fromVertices:function(t,e,i,s,r,o,a){var h=n.fromVertices(t,e,i,s,r,o,a);return this.world.add(h),h},imageStack:function(t,e,i,n,s,o,h,l,u){void 0===h&&(h=0),void 0===l&&(l=0),void 0===u&&(u={});var c=this.world,d=this.sys.displayList;u.addToWorld=!1;var f=r.stack(i,n,s,o,h,l,function(i,n){var s=new a(c,i,n,t,e,u);return d.add(s),s.body});return c.add(f),f},stack:function(t,e,i,n,s,o,a){var h=r.stack(t,e,i,n,s,o,a);return this.world.add(h),h},pyramid:function(t,e,i,n,s,o,a){var h=r.pyramid(t,e,i,n,s,o,a);return this.world.add(h),h},chain:function(t,e,i,n,s,o){return r.chain(t,e,i,n,s,o)},mesh:function(t,e,i,n,s){return r.mesh(t,e,i,n,s)},newtonsCradle:function(t,e,i,n,s){var o=r.newtonsCradle(t,e,i,n,s);return this.world.add(o),o},car:function(t,e,i,n,s){var o=r.car(t,e,i,n,s);return this.world.add(o),o},softBody:function(t,e,i,n,s,o,a,h,l,u){var c=r.softBody(t,e,i,n,s,o,a,h,l,u);return this.world.add(c),c},joint:function(t,e,i,n,s){return this.constraint(t,e,i,n,s)},spring:function(t,e,i,n,s){return this.constraint(t,e,i,n,s)},constraint:function(t,e,i,n,s){void 0===n&&(n=1),void 0===s&&(s={}),s.bodyA="body"===t.type?t:t.body,s.bodyB="body"===e.type?e:e.body,s.length=i,s.stiffness=n;var r=o.create(s);return this.world.add(r),r},worldConstraint:function(t,e,i,n){void 0===i&&(i=1),void 0===n&&(n={}),n.bodyB="body"===t.type?t:t.body,n.length=e,n.stiffness=i;var s=o.create(n);return this.world.add(s),s},mouseSpring:function(t){return this.pointerConstraint(t)},pointerConstraint:function(t){var e=new u(this.scene,this.world,t);return this.world.add(e.constraint),e},image:function(t,e,i,n,s){var r=new a(this.world,t,e,i,n,s);return this.sys.displayList.add(r),r},tileBody:function(t,e){return new l(this.world,t,e)},sprite:function(t,e,i,n,s){var r=new h(this.world,t,e,i,n,s);return this.sys.displayList.add(r),this.sys.updateList.add(r),r}});t.exports=c},function(t,e){function i(t,e,i){i=i||0;var n,s,r,o,a,h,l,u=[0,0];return n=t[1][1]-t[0][1],s=t[0][0]-t[1][0],r=n*t[0][0]+s*t[0][1],o=e[1][1]-e[0][1],a=e[0][0]-e[1][0],h=o*e[0][0]+a*e[0][1],l=n*a-o*s,M(l,0,i)||(u[0]=(a*r-s*h)/l,u[1]=(n*h-o*r)/l),u}function n(t,e,i,n){var s=e[0]-t[0],r=e[1]-t[1],o=n[0]-i[0],a=n[1]-i[1];if(o*r-a*s==0)return!1;var h=(s*(i[1]-t[1])+r*(t[0]-i[0]))/(o*r-a*s),l=(o*(t[1]-i[1])+a*(i[0]-t[0]))/(a*s-o*r);return h>=0&&h<=1&&l>=0&&l<=1}function s(t,e,i){return(e[0]-t[0])*(i[1]-t[1])-(i[0]-t[0])*(e[1]-t[1])}function r(t,e,i){return s(t,e,i)>0}function o(t,e,i){return s(t,e,i)>=0}function a(t,e,i){return s(t,e,i)<0}function h(t,e,i){return s(t,e,i)<=0}function l(t,e,i,n){if(n){var r=_,o=E;r[0]=e[0]-t[0],r[1]=e[1]-t[1],o[0]=i[0]-e[0],o[1]=i[1]-e[1];var a=r[0]*o[0]+r[1]*o[1],h=Math.sqrt(r[0]*r[0]+r[1]*r[1]),l=Math.sqrt(o[0]*o[0]+o[1]*o[1]);return Math.acos(a/(h*l))<n}return 0===s(t,e,i)}function u(t,e){var i=e[0]-t[0],n=e[1]-t[1];return i*i+n*n}function c(t,e){var i=t.length;return t[e<0?e%i+i:e%i]}function d(t){t.length=0}function f(t,e,i,n){for(var s=i;s<n;s++)t.push(e[s])}function p(t){for(var e=0,i=t,n=1;n<t.length;++n)(i[n][1]<i[e][1]||i[n][1]===i[e][1]&&i[n][0]>i[e][0])&&(e=n);r(c(t,e-1),c(t,e),c(t,e+1))||v(t)}function v(t){for(var e=[],i=t.length,n=0;n!==i;n++)e.push(t.pop());for(var n=0;n!==i;n++)t[n]=e[n]}function g(t,e){return a(c(t,e-1),c(t,e),c(t,e+1))}function y(t,e,n){var s,r,a=P,l=L;if(o(c(t,e+1),c(t,e),c(t,n))&&h(c(t,e-1),c(t,e),c(t,n)))return!1;r=u(c(t,e),c(t,n));for(var d=0;d!==t.length;++d)if((d+1)%t.length!==e&&d!==e&&o(c(t,e),c(t,n),c(t,d+1))&&h(c(t,e),c(t,n),c(t,d))&&(a[0]=c(t,e),a[1]=c(t,n),l[0]=c(t,d),l[1]=c(t,d+1),s=i(a,l),u(c(t,e),s)<r))return!1;return!0}function m(t,e,i,n){var s=n||[];if(d(s),e<i)for(var r=e;r<=i;r++)s.push(t[r]);else{for(var r=0;r<=i;r++)s.push(t[r]);for(var r=e;r<t.length;r++)s.push(t[r])}return s}function x(t){for(var e=[],i=[],n=[],s=[],r=Number.MAX_VALUE,o=0;o<t.length;++o)if(g(t,o))for(var a=0;a<t.length;++a)if(y(t,o,a)){i=x(m(t,o,a,s)),n=x(m(t,a,o,s));for(var h=0;h<n.length;h++)i.push(n[h]);i.length<r&&(e=i,r=i.length,e.push([c(t,o),c(t,a)]))}return e}function b(t){var e=x(t);return e.length>0?w(t,e):[t]}function w(t,e){if(0===e.length)return[t];if(e instanceof Array&&e.length&&e[0]instanceof Array&&2===e[0].length&&e[0][0]instanceof Array){for(var i=[t],n=0;n<e.length;n++)for(var s=e[n],r=0;r<i.length;r++){var o=i[r],a=w(o,s);if(a){i.splice(r,1),i.push(a[0],a[1]);break}}return i}var s=e,n=t.indexOf(s[0]),r=t.indexOf(s[1]);return-1!==n&&-1!==r&&[m(t,n,r),m(t,r,n)]}function T(t){var e,i=t;for(e=0;e<i.length-1;e++)for(var s=0;s<e-1;s++)if(n(i[e],i[e+1],i[s],i[s+1]))return!1;for(e=1;e<i.length-2;e++)if(n(i[0],i[i.length-1],i[e],i[e+1]))return!1;return!0}function S(t,e,i,n,s){s=s||0;var r=e[1]-t[1],o=t[0]-e[0],a=r*t[0]+o*t[1],h=n[1]-i[1],l=i[0]-n[0],u=h*i[0]+l*i[1],c=r*l-h*o;return M(c,0,s)?[0,0]:[(l*a-o*u)/c,(r*u-h*a)/c]}function A(t,e,i,n,s,l,d){l=l||100,d=d||0,s=s||25,e=void 0!==e?e:[],i=i||[],n=n||[];var p=[0,0],v=[0,0],y=[0,0],m=0,x=0,b=0,w=0,T=0,C=0,M=0,_=[],E=[],P=t,L=t;if(L.length<3)return e;if(++d>l)return console.warn("quickDecomp: max level ("+l+") reached."),e;for(var k=0;k<t.length;++k)if(g(P,k)){i.push(P[k]),m=x=Number.MAX_VALUE;for(var F=0;F<t.length;++F)r(c(P,k-1),c(P,k),c(P,F))&&h(c(P,k-1),c(P,k),c(P,F-1))&&(y=S(c(P,k-1),c(P,k),c(P,F),c(P,F-1)),a(c(P,k+1),c(P,k),y)&&(b=u(P[k],y))<x&&(x=b,v=y,C=F)),r(c(P,k+1),c(P,k),c(P,F+1))&&h(c(P,k+1),c(P,k),c(P,F))&&(y=S(c(P,k+1),c(P,k),c(P,F),c(P,F+1)),r(c(P,k-1),c(P,k),y)&&(b=u(P[k],y))<m&&(m=b,p=y,T=F));if(C===(T+1)%t.length)y[0]=(v[0]+p[0])/2,y[1]=(v[1]+p[1])/2,n.push(y),k<T?(f(_,P,k,T+1),_.push(y),E.push(y),0!==C&&f(E,P,C,P.length),f(E,P,0,k+1)):(0!==k&&f(_,P,k,P.length),f(_,P,0,T+1),_.push(y),E.push(y),f(E,P,C,k+1));else{if(C>T&&(T+=t.length),w=Number.MAX_VALUE,T<C)return e;for(var F=C;F<=T;++F)o(c(P,k-1),c(P,k),c(P,F))&&h(c(P,k+1),c(P,k),c(P,F))&&(b=u(c(P,k),c(P,F)))<w&&(w=b,M=F%t.length);k<M?(f(_,P,k,M+1),0!==M&&f(E,P,M,L.length),f(E,P,0,k+1)):(0!==k&&f(_,P,k,L.length),f(_,P,0,M+1),f(E,P,M,k+1))}return _.length<E.length?(A(_,e,i,n,s,l,d),A(E,e,i,n,s,l,d)):(A(E,e,i,n,s,l,d),A(_,e,i,n,s,l,d)),e}return e.push(t),e}function C(t,e){for(var i=0,n=t.length-1;t.length>3&&n>=0;--n)l(c(t,n-1),c(t,n),c(t,n+1),e)&&(t.splice(n%t.length,1),i++);return i}function M(t,e,i){return i=i||0,Math.abs(t-e)<i}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={decomp:b,quickDecomp:A,isSimple:T,removeCollinearPoints:C,makeCCW:p};var _=[],E=[],P=[],L=[]},function(t,e,i){var n={};t.exports=n;var s=i(48),r=i(70),o=i(16),a=i(20),h=i(37);!function(){n.stack=function(t,e,i,n,r,o,h){for(var l,u=s.create({label:"Stack"}),c=t,d=e,f=0,p=0;p<n;p++){for(var v=0,g=0;g<i;g++){var y=h(c,d,g,p,l,f);if(y){var m=y.bounds.max.y-y.bounds.min.y,x=y.bounds.max.x-y.bounds.min.x;m>v&&(v=m),a.translate(y,{x:.5*x,y:.5*m}),c=y.bounds.max.x+r,s.addBody(u,y),l=y,f+=1}else c+=r}d+=v+o,c=t}return u},n.chain=function(t,e,i,n,a,h){for(var l=t.bodies,u=1;u<l.length;u++){var c=l[u-1],d=l[u],f=c.bounds.max.y-c.bounds.min.y,p=c.bounds.max.x-c.bounds.min.x,v=d.bounds.max.y-d.bounds.min.y,g=d.bounds.max.x-d.bounds.min.x,y={bodyA:c,pointA:{x:p*e,y:f*i},bodyB:d,pointB:{x:g*n,y:v*a}},m=o.extend(y,h);s.addConstraint(t,r.create(m))}return t.label+=" Chain",t},n.mesh=function(t,e,i,n,a){var h,l,u,c,d,f=t.bodies;for(h=0;h<i;h++){for(l=1;l<e;l++)u=f[l-1+h*e],c=f[l+h*e],s.addConstraint(t,r.create(o.extend({bodyA:u,bodyB:c},a)));if(h>0)for(l=0;l<e;l++)u=f[l+(h-1)*e],c=f[l+h*e],s.addConstraint(t,r.create(o.extend({bodyA:u,bodyB:c},a))),n&&l>0&&(d=f[l-1+(h-1)*e],s.addConstraint(t,r.create(o.extend({bodyA:d,bodyB:c},a)))),n&&l<e-1&&(d=f[l+1+(h-1)*e],s.addConstraint(t,r.create(o.extend({bodyA:d,bodyB:c},a))))}return t.label+=" Mesh",t},n.pyramid=function(t,e,i,s,r,o,h){return n.stack(t,e,i,s,r,o,function(e,n,o,l,u,c){var d=Math.min(s,Math.ceil(i/2)),f=u?u.bounds.max.x-u.bounds.min.x:0;if(!(l>d)){l=d-l;var p=l,v=i-1-l;if(!(o<p||o>v)){1===c&&a.translate(u,{x:(o+(i%2==1?1:-1))*f,y:0});return h(t+(u?o*f:0)+o*r,n,o,l,u,c)}}})},n.newtonsCradle=function(t,e,i,n,o){for(var a=s.create({label:"Newtons Cradle"}),l=0;l<i;l++){var u=h.circle(t+l*(1.9*n),e+o,n,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),c=r.create({pointA:{x:t+l*(1.9*n),y:e},bodyB:u});s.addBody(a,u),s.addConstraint(a,c)}return a},n.car=function(t,e,i,n,o){var l=a.nextGroup(!0),u=.5*-i+20,c=.5*i-20,d=s.create({label:"Car"}),f=h.rectangle(t,e,i,n,{collisionFilter:{group:l},chamfer:{radius:.5*n},density:2e-4}),p=h.circle(t+u,e+0,o,{collisionFilter:{group:l},friction:.8}),v=h.circle(t+c,e+0,o,{collisionFilter:{group:l},friction:.8}),g=r.create({bodyB:f,pointB:{x:u,y:0},bodyA:p,stiffness:1,length:0}),y=r.create({bodyB:f,pointB:{x:c,y:0},bodyA:v,stiffness:1,length:0});return s.addBody(d,f),s.addBody(d,p),s.addBody(d,v),s.addConstraint(d,g),s.addConstraint(d,y),d},n.softBody=function(t,e,i,s,r,a,l,u,c,d){c=o.extend({inertia:1/0},c),d=o.extend({stiffness:.2,render:{type:"line",anchors:!1}},d);var f=n.stack(t,e,i,s,r,a,function(t,e){return h.circle(t,e,u,c)});return n.mesh(f,i,s,l,d),f.label="Soft Body",f}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(37),s=i(0),r=i(165),o=i(2),a=i(1),h=i(61),l=i(119),u=i(6),c=new s({Extends:h,Mixins:[r.Bounce,r.Collision,r.Force,r.Friction,r.Gravity,r.Mass,r.Sensor,r.SetBody,r.Sleep,r.Static,r.Transform,r.Velocity,l],initialize:function(t,e,i,s,r,h){o.call(this,t.scene,"Image"),this.setTexture(s,r),this.setSizeToFrame(),this.setOrigin(),this.world=t,this._tempVec2=new u(e,i);var l=a(h,"shape",null);l?this.setBody(l,h):(this.body=n.rectangle(e,i,this.width,this.height,h),this.body.gameObject=this,a(h,"addToWorld",!0)&&t.add(this.body)),this.setPosition(e,i),this.initPipeline("TextureTintPipeline")}});t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(216),s=i(37),r=i(0),o=i(165),a=i(2),h=i(1),l=i(119),u=i(36),c=i(6),d=new r({Extends:u,Mixins:[o.Bounce,o.Collision,o.Force,o.Friction,o.Gravity,o.Mass,o.Sensor,o.SetBody,o.Sleep,o.Static,o.Transform,o.Velocity,l],initialize:function(t,e,i,r,o,l){a.call(this,t.scene,"Image"),this.anims=new n(this),this.setTexture(r,o),this.setSizeToFrame(),this.setOrigin(),this.world=t,this._tempVec2=new c(e,i);var u=h(l,"shape",null);u?this.setBody(u,l):(this.body=s.rectangle(e,i,this.width,this.height,l),this.body.gameObject=this,h(l,"addToWorld",!0)&&t.add(this.body)),this.setPosition(e,i),this.initPipeline("TextureTintPipeline")}});t.exports=d},function(t,e,i){var n={};t.exports=n;var s=i(170),r=i(16);!function(){n.name="matter-js",n.version="0.13.1",n.uses=[],n.used=[],n.use=function(){s.use(n,Array.prototype.slice.call(arguments))},n.before=function(t,e){return t=t.replace(/^Matter./,""),r.chainPathBefore(n,t,e)},n.after=function(t,e){return t=t.replace(/^Matter./,""),r.chainPathAfter(n,t,e)}}()},function(t,e,i){var n={};t.exports=n;var s=i(104),r=i(167),o=i(16);!function(){n.create=function(t){var e={controller:n,detector:r.collisions,buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return o.extend(e,t)},n.update=function(i,n,s,r){var o,d,f,p,v,g=s.world,y=i.buckets,m=!1,x=s.metrics;for(x.broadphaseTests=0,o=0;o<n.length;o++){var b=n[o];if((!b.isSleeping||r)&&!(b.bounds.max.x<g.bounds.min.x||b.bounds.min.x>g.bounds.max.x||b.bounds.max.y<g.bounds.min.y||b.bounds.min.y>g.bounds.max.y)){var w=e(i,b);if(!b.region||w.id!==b.region.id||r){x.broadphaseTests+=1,b.region&&!r||(b.region=w);var T=t(w,b.region);for(d=T.startCol;d<=T.endCol;d++)for(f=T.startRow;f<=T.endRow;f++){v=a(d,f),p=y[v];var S=d>=w.startCol&&d<=w.endCol&&f>=w.startRow&&f<=w.endRow,A=d>=b.region.startCol&&d<=b.region.endCol&&f>=b.region.startRow&&f<=b.region.endRow;!S&&A&&A&&p&&u(i,p,b),(b.region===w||S&&!A||r)&&(p||(p=h(y,v)),l(i,p,b))}b.region=w,m=!0}}}m&&(i.pairsList=c(i))},n.clear=function(t){t.buckets={},t.pairs={},t.pairsList=[]};var t=function(t,e){var n=Math.min(t.startCol,e.startCol),s=Math.max(t.endCol,e.endCol),r=Math.min(t.startRow,e.startRow),o=Math.max(t.endRow,e.endRow);return i(n,s,r,o)},e=function(t,e){var n=e.bounds,s=Math.floor(n.min.x/t.bucketWidth),r=Math.floor(n.max.x/t.bucketWidth),o=Math.floor(n.min.y/t.bucketHeight),a=Math.floor(n.max.y/t.bucketHeight);return i(s,r,o,a)},i=function(t,e,i,n){return{id:t+","+e+","+i+","+n,startCol:t,endCol:e,startRow:i,endRow:n}},a=function(t,e){return"C"+t+"R"+e},h=function(t,e){return t[e]=[]},l=function(t,e,i){for(var n=0;n<e.length;n++){var r=e[n];if(!(i.id===r.id||i.isStatic&&r.isStatic)){var o=s.id(i,r),a=t.pairs[o];a?a[2]+=1:t.pairs[o]=[i,r,1]}}e.push(i)},u=function(t,e,i){e.splice(e.indexOf(i),1);for(var n=0;n<e.length;n++){var r=e[n],o=s.id(i,r),a=t.pairs[o];a&&(a[2]-=1)}},c=function(t){var e,i,n=[];e=o.keys(t.pairs);for(var s=0;s<e.length;s++)i=t.pairs[e[s]],i[2]>0?n.push(i):delete t.pairs[e[s]];return n}}()},function(t,e,i){var n={};t.exports=n;var s=i(104),r=i(16);!function(){n.create=function(t){return r.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},t)},n.update=function(t,e,i){var n,r,o,a,h=t.list,l=t.table,u=t.collisionStart,c=t.collisionEnd,d=t.collisionActive;for(u.length=0,c.length=0,d.length=0,a=0;a<h.length;a++)h[a].confirmedActive=!1;for(a=0;a<e.length;a++)n=e[a],n.collided&&(r=s.id(n.bodyA,n.bodyB),o=l[r],o?(o.isActive?d.push(o):u.push(o),s.update(o,n,i),o.confirmedActive=!0):(o=s.create(n,i),l[r]=o,u.push(o),h.push(o)));for(a=0;a<h.length;a++)o=h[a],o.confirmedActive||(s.setActive(o,!1,i),c.push(o))},n.removeOld=function(t,e){var i,n,s,r,o=t.list,a=t.table,h=[];for(r=0;r<o.length;r++)i=o[r],n=i.collision,n.bodyA.isSleeping||n.bodyB.isSleeping?i.timeUpdated=e:e-i.timeUpdated>1e3&&h.push(r);for(r=0;r<h.length;r++)s=h[r]-r,i=o[s],delete a[i.id],o.splice(s,1)},n.clear=function(t){return t.table={},t.list.length=0,t.collisionStart.length=0,t.collisionActive.length=0,t.collisionEnd.length=0,t}}()},function(t,e,i){var n={};t.exports=n;var s=i(38),r=i(39),o=i(16),a=i(40);!function(){n._restingThresh=4,n._restingThreshTangent=6,n._positionDampen=.9,n._positionWarming=.8,n._frictionNormalMultiplier=5,n.preSolvePosition=function(t){var e,i,n;for(e=0;e<t.length;e++)i=t[e],i.isActive&&(n=i.activeContacts.length,i.collision.parentA.totalContacts+=n,i.collision.parentB.totalContacts+=n)},n.solvePosition=function(t,e,i){var s,r,o,a,h,l,u,c,d,f,p,v,g,y,m,x,b=i*n._positionDampen;for(s=0;s<e.length;s++){var w=e[s];w.previousPositionImpulse.x=w.positionImpulse.x,w.previousPositionImpulse.y=w.positionImpulse.y}for(s=0;s<t.length;s++)a=t[s],a.isActive&&!a.isSensor&&(h=a.collision,l=h.parentA,u=h.parentB,c=h.normal,p=l.previousPositionImpulse,v=u.previousPositionImpulse,f=h.penetration,y=v.x-p.x+f.x,m=v.y-p.y+f.y,r=c.x,o=c.y,d=r*y+o*m,a.separation=d,x=(d-a.slop)*b,(l.isStatic||u.isStatic)&&(x*=2),l.isStatic||l.isSleeping||(g=x/l.totalContacts,l.positionImpulse.x+=r*g,l.positionImpulse.y+=o*g),u.isStatic||u.isSleeping||(g=x/u.totalContacts,u.positionImpulse.x-=r*g,u.positionImpulse.y-=o*g))},n.postSolvePosition=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.totalContacts=0,0!==i.positionImpulse.x||0!==i.positionImpulse.y){for(var o=0;o<i.parts.length;o++){var h=i.parts[o];s.translate(h.vertices,i.positionImpulse),a.update(h.bounds,h.vertices,i.velocity),h.position.x+=i.positionImpulse.x,h.position.y+=i.positionImpulse.y}i.positionPrev.x+=i.positionImpulse.x,i.positionPrev.y+=i.positionImpulse.y,r.dot(i.positionImpulse,i.velocity)<0?(i.positionImpulse.x=0,i.positionImpulse.y=0):(i.positionImpulse.x*=n._positionWarming,i.positionImpulse.y*=n._positionWarming)}}},n.preSolveVelocity=function(t){var e,i,n,s,o,a,h,l,u,c,d,f,p,v,g=r._temp[0],y=r._temp[1];for(e=0;e<t.length;e++)if(n=t[e],n.isActive&&!n.isSensor)for(s=n.activeContacts,o=n.collision,a=o.parentA,h=o.parentB,l=o.normal,u=o.tangent,i=0;i<s.length;i++)c=s[i],d=c.vertex,f=c.normalImpulse,p=c.tangentImpulse,0===f&&0===p||(g.x=l.x*f+u.x*p,g.y=l.y*f+u.y*p,a.isStatic||a.isSleeping||(v=r.sub(d,a.position,y),a.positionPrev.x+=g.x*a.inverseMass,a.positionPrev.y+=g.y*a.inverseMass,a.anglePrev+=r.cross(v,g)*a.inverseInertia),h.isStatic||h.isSleeping||(v=r.sub(d,h.position,y),h.positionPrev.x-=g.x*h.inverseMass,h.positionPrev.y-=g.y*h.inverseMass,h.anglePrev-=r.cross(v,g)*h.inverseInertia))},n.solveVelocity=function(t,e){for(var i=e*e,s=r._temp[0],a=r._temp[1],h=r._temp[2],l=r._temp[3],u=r._temp[4],c=r._temp[5],d=0;d<t.length;d++){var f=t[d];if(f.isActive&&!f.isSensor){var p=f.collision,v=p.parentA,g=p.parentB,y=p.normal,m=p.tangent,x=f.activeContacts,b=1/x.length;v.velocity.x=v.position.x-v.positionPrev.x,v.velocity.y=v.position.y-v.positionPrev.y,g.velocity.x=g.position.x-g.positionPrev.x,g.velocity.y=g.position.y-g.positionPrev.y,v.angularVelocity=v.angle-v.anglePrev,g.angularVelocity=g.angle-g.anglePrev;for(var w=0;w<x.length;w++){var T=x[w],S=T.vertex,A=r.sub(S,v.position,a),C=r.sub(S,g.position,h),M=r.add(v.velocity,r.mult(r.perp(A),v.angularVelocity),l),_=r.add(g.velocity,r.mult(r.perp(C),g.angularVelocity),u),E=r.sub(M,_,c),P=r.dot(y,E),L=r.dot(m,E),k=Math.abs(L),F=o.sign(L),O=(1+f.restitution)*P,R=o.clamp(f.separation+P,0,1)*n._frictionNormalMultiplier,B=L,D=1/0;k>f.friction*f.frictionStatic*R*i&&(D=k,B=o.clamp(f.friction*F*i,-D,D));var I=r.cross(A,y),Y=r.cross(C,y),z=b/(v.inverseMass+g.inverseMass+v.inverseInertia*I*I+g.inverseInertia*Y*Y);if(O*=z,B*=z,P<0&&P*P>n._restingThresh*i)T.normalImpulse=0;else{var X=T.normalImpulse;T.normalImpulse=Math.min(T.normalImpulse+O,0),O=T.normalImpulse-X}if(L*L>n._restingThreshTangent*i)T.tangentImpulse=0;else{var N=T.tangentImpulse;T.tangentImpulse=o.clamp(T.tangentImpulse+B,-D,D),B=T.tangentImpulse-N}s.x=y.x*O+m.x*B,s.y=y.y*O+m.y*B,v.isStatic||v.isSleeping||(v.positionPrev.x+=s.x*v.inverseMass,v.positionPrev.y+=s.y*v.inverseMass,v.anglePrev+=r.cross(A,s)*v.inverseInertia),g.isStatic||g.isSleeping||(g.positionPrev.x-=s.x*g.inverseMass,g.positionPrev.y-=s.y*g.inverseMass,g.anglePrev-=r.cross(C,s)*g.inverseInertia)}}}}}()},function(t,e,i){var n={};t.exports=n;var s=i(171),r=i(84),o=i(374),a=i(373),h=i(931),l=i(372),u=i(69),c=i(48),d=i(70),f=i(16),p=i(20);!function(){n.create=function(t,e){e=f.isElement(t)?e:t,t=f.isElement(t)?t:null,e=e||{},(t||e.render)&&f.warn("Engine.create: engine.render is deprecated (see docs)");var i={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},timing:{timestamp:0,timeScale:1},broadphase:{controller:l}},n=f.extend(i,e);return n.world=e.world||s.create(n.world),n.pairs=a.create(),n.broadphase=n.broadphase.controller.create(n.broadphase),n.metrics=n.metrics||{extended:!1},n.metrics=h.create(n.metrics),n},n.update=function(n,s,l){s=s||1e3/60,l=l||1;var f,p=n.world,v=n.timing,g=n.broadphase,y=[];v.timestamp+=s*v.timeScale;var m={timestamp:v.timestamp};u.trigger(n,"beforeUpdate",m);var x=c.allBodies(p),b=c.allConstraints(p);for(h.reset(n.metrics),n.enableSleeping&&r.update(x,v.timeScale),e(x,p.gravity),i(x,s,v.timeScale,l,p.bounds),d.preSolveAll(x),f=0;f<n.constraintIterations;f++)d.solveAll(b,v.timeScale);d.postSolveAll(x),g.controller?(p.isModified&&g.controller.clear(g),g.controller.update(g,x,n,p.isModified),y=g.pairsList):y=x,p.isModified&&c.setModified(p,!1,!1,!0);var w=g.detector(y,n),T=n.pairs,S=v.timestamp;for(a.update(T,w,S),a.removeOld(T,S),n.enableSleeping&&r.afterCollisions(T.list,v.timeScale),T.collisionStart.length>0&&u.trigger(n,"collisionStart",{pairs:T.collisionStart}),o.preSolvePosition(T.list),f=0;f<n.positionIterations;f++)o.solvePosition(T.list,x,v.timeScale);for(o.postSolvePosition(x),d.preSolveAll(x),f=0;f<n.constraintIterations;f++)d.solveAll(b,v.timeScale);for(d.postSolveAll(x),o.preSolveVelocity(T.list),f=0;f<n.velocityIterations;f++)o.solveVelocity(T.list,v.timeScale);return T.collisionActive.length>0&&u.trigger(n,"collisionActive",{pairs:T.collisionActive}),T.collisionEnd.length>0&&u.trigger(n,"collisionEnd",{pairs:T.collisionEnd}),h.update(n.metrics,n),t(x),u.trigger(n,"afterUpdate",m),n},n.merge=function(t,e){if(f.extend(t,e),e.world){t.world=e.world,n.clear(t);for(var i=c.allBodies(t.world),s=0;s<i.length;s++){var o=i[s];r.set(o,!1),o.id=f.nextId()}}},n.clear=function(t){var e=t.world;a.clear(t.pairs);var i=t.broadphase;if(i.controller){var n=c.allBodies(e);i.controller.clear(i),i.controller.update(i,n,t,!0)}};var t=function(t){for(var e=0;e<t.length;e++){var i=t[e];i.force.x=0,i.force.y=0,i.torque=0}},e=function(t,e){var i=void 0!==e.scale?e.scale:.001;if((0!==e.x||0!==e.y)&&0!==i)for(var n=0;n<t.length;n++){var s=t[n];s.ignoreGravity||s.isStatic||s.isSleeping||(s.force.y+=s.mass*e.y*i,s.force.x+=s.mass*e.x*i)}},i=function(t,e,i,n,s){for(var r=0;r<t.length;r++){var o=t[r];o.isStatic||o.isSleeping||p.update(o,e,i,n)}}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(37),s=i(0),r=i(48),o=i(375),a=i(13),h=i(1),l=i(4),u=i(20),c=i(69),d=i(171),f=i(166),p=new s({Extends:a,initialize:function(t,e){a.call(this),this.scene=t,this.engine=o.create(e),this.localWorld=this.engine.world;var i=l(e,"gravity",null);if(i&&this.setGravity(i.x,i.y,i.scale),this.walls={left:null,right:null,top:null,bottom:null},h(e,"setBounds",!1)){var n=e.setBounds;if("boolean"==typeof n)this.setBounds();else{var s=h(n,"x",0),r=h(n,"y",0),u=h(n,"width",t.sys.game.config.width),c=h(n,"height",t.sys.game.config.height),d=h(n,"thickness",64),f=h(n,"left",!0),p=h(n,"right",!0),v=h(n,"top",!0),g=h(n,"bottom",!0);this.setBounds(s,r,u,c,d,f,p,v,g)}}this.enabled=l(e,"enabled",!0),this.drawDebug=l(e,"debug",!1),this.debugGraphic,this.defaults={debugShowBody:l(e,"debugShowBody",!0),debugShowStaticBody:l(e,"debugShowStaticBody",!0),debugShowVelocity:l(e,"debugShowVelocity",!0),bodyDebugColor:l(e,"debugBodyColor",16711935),staticBodyDebugColor:l(e,"debugBodyColor",255),velocityDebugColor:l(e,"debugVelocityColor",65280)},this.drawDebug&&this.createDebugGraphic(),this.setEventsProxy()},setEventsProxy:function(){var t=this,e=this.engine;c.on(e,"beforeUpdate",function(e){t.emit("beforeupdate",e)}),c.on(e,"afterUpdate",function(e){t.emit("afterupdate",e)}),c.on(e,"collisionStart",function(e){var i,n,s=e.pairs;s.length>0&&(i=s[0].bodyA,n=s[0].bodyB),t.emit("collisionstart",e,i,n)}),c.on(e,"collisionActive",function(e){var i,n,s=e.pairs;s.length>0&&(i=s[0].bodyA,n=s[0].bodyB),t.emit("collisionactive",e,i,n)}),c.on(e,"collisionEnd",function(e){var i,n,s=e.pairs;s.length>0&&(i=s[0].bodyA,n=s[0].bodyB),t.emit("collisionend",e,i,n)})},setBounds:function(t,e,i,n,s,r,o,a,h){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=this.scene.sys.game.config.width),void 0===n&&(n=this.scene.sys.game.config.height),void 0===s&&(s=128),void 0===r&&(r=!0),void 0===o&&(o=!0),void 0===a&&(a=!0),void 0===h&&(h=!0),this.updateWall(r,"left",t-s,e,s,n),this.updateWall(o,"right",t+i,e,s,n),this.updateWall(a,"top",t,e-s,i,s),this.updateWall(h,"bottom",t,e+n,i,s),this},updateWall:function(t,e,i,n,s,r){var o=this.walls[e];t?(o&&d.remove(this.localWorld,o),i+=s/2,n+=r/2,this.walls[e]=this.create(i,n,s,r,{isStatic:!0,friction:0,frictionStatic:0})):(o&&d.remove(this.localWorld,o),this.walls[e]=null)},createDebugGraphic:function(){var t=this.scene.sys.add.graphics({x:0,y:0});return t.setZ(Number.MAX_VALUE),this.debugGraphic=t,this.drawDebug=!0,t},disableGravity:function(){return this.localWorld.gravity.x=0,this.localWorld.gravity.y=0,this.localWorld.gravity.scale=0,this},setGravity:function(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=1),this.localWorld.gravity.x=t,this.localWorld.gravity.y=e,void 0!==i&&(this.localWorld.gravity.scale=i),this},create:function(t,e,i,s,r){var o=n.rectangle(t,e,i,s,r);return d.add(this.localWorld,o),o},add:function(t){return d.add(this.localWorld,t),this},remove:function(t,e){var i=t.body?t.body:t;return r.removeBody(this.localWorld,i,e),this},removeConstraint:function(t,e){return r.remove(this.localWorld,t,e),this},convertTilemapLayer:function(t,e){var i=t.layer,n=t.getTilesWithin(0,0,i.width,i.height,{isColliding:!0});return this.convertTiles(n,e),this},convertTiles:function(t,e){if(0===t.length)return this;for(var i=0;i<t.length;i++)new f(this,t[i],e);return this},nextGroup:function(t){return u.nextGroup(t)},nextCategory:function(){return u.nextCategory()},pause:function(){return this.enabled=!1,this.emit("pause"),this},resume:function(){return this.enabled=!0,this.emit("resume"),this},update:function(t,e){if(this.enabled){o.update(this.engine,e,1)}},postUpdate:function(){if(this.drawDebug){var t=this.debugGraphic,e=r.allBodies(this.localWorld);t.clear(),t.lineStyle(1,this.defaults.bodyDebugColor);for(var i=0;i<e.length;i++){if(!e[i].render.visible)return;for(var n=0;n<e[i].parts.length;n++){var s=e[i].parts[n],o=s.vertices;t.moveTo(o[0].x,o[0].y);for(var a=1;a<o.length;a++)t.lineTo(o[a].x,o[a].y);t.lineTo(o[0].x,o[0].y),t.strokePath()}}}},fromPath:function(t,e){void 0===e&&(e=[]);var i=/L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/gi;return t.replace(i,function(t,i,n){e.push({x:parseFloat(i),y:parseFloat(n)})}),e},shutdown:function(){d.clear(this.localWorld,!1),o.clear(this.engine)},destroy:function(){this.shutdown()}});t.exports=p},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=function(t,e,i,s,r,o,a){for(var h=n(i,s,r,o,null,a),l=0;l<h.length;l++)h[l]&&h[l].index===t&&(h[l].index=e)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(85),s=function(t,e,i){if(n(t,e,i)){var s=i.data[e][t];return null!==s&&s.index>-1}return!1};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(50),s=i(85),r=i(172),o=function(t,e,i,o,a){if(void 0===i&&(i=!1),void 0===o&&(o=!0),!s(t,e,a))return null;var h=a.data[e][t];return null===h?null:(a.data[e][t]=i?null:new n(a,-1,t,e,h.width,h.height),o&&h&&h.collides&&r(t,e,a),h)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=i(175),r=i(381),o=i(382),a=i(387),h=function(t,e,i,h,l,u){var c;switch(e){case n.ARRAY_2D:c=s(t,i,h,l,u);break;case n.CSV:c=r(t,i,h,l,u);break;case n.TILED_JSON:c=o(t,i,u);break;case n.WELTMEISTER:c=a(t,i,u);break;default:console.warn("Unrecognized tilemap data format: "+e),c=null}return c};t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=i(175),r=function(t,e,i,r,o){var a=e.trim().split("\n").map(function(t){return t.split(",")}),h=s(t,a,i,r,o);return h.format=n.CSV,h};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=i(87),r=i(973),o=i(975),a=i(976),h=i(978),l=i(979),u=i(980),c=function(t,e,i){if("orthogonal"!==e.orientation)return console.warn("Only orthogonal map types are supported in this version of Phaser"),null;var c=new s({width:e.width,height:e.height,name:t,tileWidth:e.tilewidth,tileHeight:e.tileheight,orientation:e.orientation,format:n.TILED_JSON,version:e.version,properties:e.properties});c.layers=r(e,i),c.images=o(e);var d=a(e);return c.tilesets=d.tilesets,c.imageCollections=d.imageCollections,c.objects=h(e),c.tiles=l(c),u(c),c};t.exports=c},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=Boolean(2147483648&t),i=Boolean(1073741824&t),n=Boolean(536870912&t);t&=536870911;var s=0,r=!1;return e&&i&&n?(s=Math.PI/2,r=!0):e&&i&&!n?(s=Math.PI,r=!1):e&&!i&&n?(s=Math.PI/2,r=!1):!e||i||n?!e&&i&&n?(s=3*Math.PI/2,r=!1):e||!i||n?e||i||!n?e||i||n||(s=0,r=!1):(s=3*Math.PI/2,r=!0):(s=Math.PI,r=!0):(s=0,r=!0),{gid:t,flippedHorizontal:e,flippedVertical:i,flippedAntiDiagonal:n,rotation:s,flipped:r}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n,s,r,o){(void 0===i||i<=0)&&(i=32),(void 0===n||n<=0)&&(n=32),void 0===s&&(s=0),void 0===r&&(r=0),this.name=t,this.firstgid=0|e,this.imageWidth=0|i,this.imageHeight=0|n,this.imageMargin=0|s,this.imageSpacing=0|r,this.properties=o||{},this.images=[],this.total=0},containsImageIndex:function(t){return t>=this.firstgid&&t<this.firstgid+this.total},addImage:function(t,e){return this.images.push({gid:t,image:e}),this.total++,this}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(977),s=i(383),r=function(t){return{x:t.x,y:t.y}},o=["id","name","type","rotation","properties","visible","x","y","width","height"],a=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0);var a=n(t,o);if(a.x+=e,a.y+=i,t.gid){var h=s(t.gid);a.gid=h.gid,a.flippedHorizontal=h.flippedHorizontal,a.flippedVertical=h.flippedVertical,a.flippedAntiDiagonal=h.flippedAntiDiagonal}else t.polyline?a.polyline=t.polyline.map(r):t.polygon?a.polygon=t.polygon.map(r):t.ellipse?(a.ellipse=t.ellipse,a.width=t.width,a.height=t.height):t.text?(a.width=t.width,a.height=t.height,a.text=t.text):(a.rectangle=!0,a.width=t.width,a.height=t.height);return a};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(1),r=new n({initialize:function(t){void 0===t&&(t={}),this.name=s(t,"name","object layer"),this.opacity=s(t,"opacity",1),this.properties=s(t,"properties",{}),this.propertyTypes=s(t,"propertytypes",{}),this.type=s(t,"type","objectgroup"),this.visible=s(t,"visible",!0),this.objects=s(t,"objects",[])}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=i(87),r=i(981),o=i(982),a=function(t,e,i){if(0===e.layer.length)return console.warn("No layers found in the Weltmeister map: "+t),null;for(var a=0,h=0,l=0;l<e.layer.length;l++)e.layer[l].width>a&&(a=e.layer[l].width),e.layer[l].height>h&&(h=e.layer[l].height);var u=new s({width:a,height:h,name:t,tileWidth:e.layer[0].tilesize,tileHeight:e.layer[0].tilesize,format:n.WELTMEISTER});return u.layers=r(e,i),u.tilesets=o(e),u};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(43),r=i(389),o=i(25),a=i(22),h=i(86),l=i(342),u=i(390),c=i(50),d=i(105),f=i(109),p=new n({initialize:function(t,e){this.scene=t,this.tileWidth=e.tileWidth,this.tileHeight=e.tileHeight,this.width=e.width,this.height=e.height,this.orientation=e.orientation,this.format=e.format,this.version=e.version,this.properties=e.properties,this.widthInPixels=e.widthInPixels,this.heightInPixels=e.heightInPixels,this.imageCollections=e.imageCollections,this.images=e.images,this.layers=e.layers,this.tilesets=e.tilesets,this.objects=e.objects,this.currentLayerIndex=0},addTilesetImage:function(t,e,i,n,s,r,o){if(void 0===t)return null;if(void 0!==e&&null!==e||(e=t),!this.scene.sys.textures.exists(e))return console.warn('Invalid image key given for tileset: "'+e+'"'),null;var h=this.scene.sys.textures.get(e),l=this.getTilesetIndex(t);if(null===l&&this.format===a.TILED_JSON)return console.warn('No data found in the JSON tilemap from Tiled matching the tileset name: "'+t+'"'),null;if(this.tilesets[l])return this.tilesets[l].setTileSize(i,n),this.tilesets[l].setSpacing(s,r),this.tilesets[l].setImage(h),this.tilesets[l];void 0===i&&(i=this.tileWidth),void 0===n&&(n=this.tileHeight),void 0===s&&(s=0),void 0===r&&(r=0),void 0===o&&(o=0);var u=new f(t,o,i,n,s,r);return u.setImage(h),this.tilesets.push(u),u},convertLayerToStatic:function(t){if(null===(t=this.getLayer(t)))return null;var e=t.tilemapLayer;if(!(e&&e instanceof r))return null;var i=new u(e.scene,e.tilemap,e.layerIndex,e.tileset,e.x,e.y);return this.scene.sys.displayList.add(i),e.destroy(),i},copy:function(t,e,i,n,s,r,o,a){return a=this.getLayer(a),this._isStaticCall(a,"copy")?this:(null!==a&&d.Copy(t,e,i,n,s,r,o,a),this)},createBlankDynamicLayer:function(t,e,i,n,s,o,a,l){if(void 0===a&&(a=e.tileWidth),void 0===l&&(l=e.tileHeight),void 0===s&&(s=this.width),void 0===o&&(o=this.height),void 0===i&&(i=0),void 0===n&&(n=0),null!==this.getLayerIndex(t))return console.warn("Cannot create blank layer: layer with matching name already exists "+t),null;for(var u,d=new h({name:t,tileWidth:a,tileHeight:l,width:s,height:o}),f=0;f<o;f++){u=[];for(var p=0;p<s;p++)u.push(new c(d,-1,p,f,a,l,this.tileWidth,this.tileHeight));d.data.push(u)}this.layers.push(d),this.currentLayerIndex=this.layers.length-1;var v=new r(this.scene,this,this.currentLayerIndex,e,i,n);return this.scene.sys.displayList.add(v),v},createDynamicLayer:function(t,e,i,n){var s=this.getLayerIndex(t);if(null===s)return console.warn("Cannot create tilemap layer, invalid layer ID given: "+t),null;var o=this.layers[s];if(o.tilemapLayer)return console.warn("Cannot create dynamic tilemap layer since a static or dynamic tilemap layer exists for layer ID:"+t),null;this.currentLayerIndex=s,o.tileWidth===e.tileWidth&&o.tileHeight===e.tileHeight||this.setLayerTileSize(e.tileWidth,e.tileHeight,s),void 0===i&&this.layers[s].x&&(i=this.layers[s].x),void 0===n&&this.layers[s].y&&(n=this.layers[s].y);var a=new r(this.scene,this,s,e,i,n);return this.scene.sys.displayList.add(a),a},createFromObjects:function(t,e,i,n){void 0===i&&(i={}),void 0===n&&(n=this.scene);var r=this.getObjectLayer(t);if(!r)return void console.warn("Cannot create from object. Invalid objectgroup name given: "+t);for(var a=r.objects,h=[],u=0;u<a.length;u++){var c=!1,d=a[u];if((void 0!==d.gid&&"number"==typeof e&&d.gid===e||void 0!==d.id&&"number"==typeof e&&d.id===e||void 0!==d.name&&"string"==typeof e&&d.name===e)&&(c=!0),c){var f=o({},i,d.properties);f.x=d.x,f.y=d.y;var p=this.scene.make.sprite(f);p.name=d.name,d.width&&(p.displayWidth=d.width),d.height&&(p.displayHeight=d.height);var v={x:p.originX*p.displayWidth,y:(p.originY-1)*p.displayHeight};if(d.rotation){var g=s(d.rotation);l(v,g),p.rotation=g}p.x+=v.x,p.y+=v.y,void 0===d.flippedHorizontal&&void 0===d.flippedVertical||p.setFlip(d.flippedHorizontal,d.flippedVertical),d.visible||(p.visible=!1),h.push(p)}}return h},createFromTiles:function(t,e,i,n,s,r){return r=this.getLayer(r),null===r?null:d.CreateFromTiles(t,e,i,n,s,r)},createStaticLayer:function(t,e,i,n){var s=this.getLayerIndex(t);if(null===s)return console.warn("Cannot create tilemap layer, invalid layer ID given: "+t),null;var r=this.layers[s];if(r.tilemapLayer)return console.warn("Cannot create static tilemap layer since a static or dynamic tilemap layer exists for layer ID:"+t),null;this.currentLayerIndex=s,r.tileWidth===e.tileWidth&&r.tileHeight===e.tileHeight||this.setLayerTileSize(e.tileWidth,e.tileHeight,s),void 0===i&&this.layers[s].x&&(i=this.layers[s].x),void 0===n&&this.layers[s].y&&(n=this.layers[s].y);var o=new u(this.scene,this,s,e,i,n);return this.scene.sys.displayList.add(o),o},destroy:function(){this.removeAllLayers(),this.tilesets.length=0,this.objects.length=0,this.scene=void 0},fill:function(t,e,i,n,s,r,o){return o=this.getLayer(o),this._isStaticCall(o,"fill")?this:(null!==o&&d.Fill(t,e,i,n,s,r,o),this)},filterObjects:function(t,e,i){if("string"==typeof t){var n=t;if(!(t=this.getObjectLayer(t)))return console.warn("No object layer found with the name: "+n),null}return t.objects.filter(e,i)},filterTiles:function(t,e,i,n,s,r,o,a){return a=this.getLayer(a),null===a?null:d.FilterTiles(t,e,i,n,s,r,o,a)},findByIndex:function(t,e,i,n){return n=this.getLayer(n),null===n?null:d.FindByIndex(t,e,i,n)},findObject:function(t,e,i){if("string"==typeof t){var n=t;if(!(t=this.getObjectLayer(t)))return console.warn("No object layer found with the name: "+n),null}return t.objects.find(e,i)||null},findTile:function(t,e,i,n,s,r,o,a){return a=this.getLayer(a),null===a?null:d.FindTile(t,e,i,n,s,r,o,a)},forEachTile:function(t,e,i,n,s,r,o,a){return a=this.getLayer(a),null!==a&&d.ForEachTile(t,e,i,n,s,r,o,a),this},getImageIndex:function(t){return this.getIndex(this.images,t)},getIndex:function(t,e){for(var i=0;i<t.length;i++)if(t[i].name===e)return i;return null},getLayer:function(t){var e=this.getLayerIndex(t);return null!==e?this.layers[e]:null},getObjectLayer:function(t){var e=this.getIndex(this.objects,t);return null!==e?this.objects[e]:null},getLayerIndex:function(t){return void 0===t?this.currentLayerIndex:"string"==typeof t?this.getLayerIndexByName(t):"number"==typeof t&&t<this.layers.length?t:t instanceof u||t instanceof r?t.layerIndex:null},getLayerIndexByName:function(t){return this.getIndex(this.layers,t)},getTileAt:function(t,e,i,n){return n=this.getLayer(n),null===n?null:d.GetTileAt(t,e,i,n)},getTileAtWorldXY:function(t,e,i,n,s){return s=this.getLayer(s),null===s?null:d.GetTileAtWorldXY(t,e,i,n,s)},getTilesWithin:function(t,e,i,n,s,r){return r=this.getLayer(r),null===r?null:d.GetTilesWithin(t,e,i,n,s,r)},getTilesWithinShape:function(t,e,i,n){return n=this.getLayer(n),null===n?null:d.GetTilesWithinShape(t,e,i,n)},getTilesWithinWorldXY:function(t,e,i,n,s,r,o){return o=this.getLayer(o),null===o?null:d.GetTilesWithinWorldXY(t,e,i,n,s,r,o)},getTilesetIndex:function(t){return this.getIndex(this.tilesets,t)},hasTileAt:function(t,e,i){return i=this.getLayer(i),null===i?null:d.HasTileAt(t,e,i)},hasTileAtWorldXY:function(t,e,i,n){return n=this.getLayer(n),null===n?null:d.HasTileAtWorldXY(t,e,i,n)},layer:{get:function(){return this.layers[this.currentLayerIndex]},set:function(t){this.setLayer(t)}},putTileAt:function(t,e,i,n,s){return s=this.getLayer(s),this._isStaticCall(s,"putTileAt")?null:null===s?null:d.PutTileAt(t,e,i,n,s)},putTileAtWorldXY:function(t,e,i,n,s,r){return r=this.getLayer(r),this._isStaticCall(r,"putTileAtWorldXY")?null:null===r?null:d.PutTileAtWorldXY(t,e,i,n,s,r)},putTilesAt:function(t,e,i,n,s){return s=this.getLayer(s),this._isStaticCall(s,"putTilesAt")?this:(null!==s&&d.PutTilesAt(t,e,i,n,s),this)},randomize:function(t,e,i,n,s,r){return r=this.getLayer(r),this._isStaticCall(r,"randomize")?this:(null!==r&&d.Randomize(t,e,i,n,s,r),this)},calculateFacesAt:function(t,e,i){return null===(i=this.getLayer(i))?this:(d.CalculateFacesAt(t,e,i),this)},calculateFacesWithin:function(t,e,i,n,s){return null===(s=this.getLayer(s))?this:(d.CalculateFacesWithin(t,e,i,n,s),this)},removeAllLayers:function(){for(var t=0;t<this.layers.length;t++)this.layers[t].tilemapLayer&&this.layers[t].tilemapLayer.destroy();return this.layers.length=0,this.currentLayerIndex=0,this},removeTileAt:function(t,e,i,n,s){return s=this.getLayer(s),this._isStaticCall(s,"removeTileAt")?null:null===s?null:d.RemoveTileAt(t,e,i,n,s)},removeTileAtWorldXY:function(t,e,i,n,s,r){return r=this.getLayer(r),this._isStaticCall(r,"removeTileAtWorldXY")?null:null===r?null:d.RemoveTileAtWorldXY(t,e,i,n,s,r)},renderDebug:function(t,e,i){return null===(i=this.getLayer(i))?this:(d.RenderDebug(t,e,i),this)},replaceByIndex:function(t,e,i,n,s,r,o){return o=this.getLayer(o),this._isStaticCall(o,"replaceByIndex")?this:(null!==o&&d.ReplaceByIndex(t,e,i,n,s,r,o),this)},setCollision:function(t,e,i,n){return null===(n=this.getLayer(n))?this:(d.SetCollision(t,e,i,n),this)},setCollisionBetween:function(t,e,i,n,s){return null===(s=this.getLayer(s))?this:(d.SetCollisionBetween(t,e,i,n,s),this)},setCollisionByProperty:function(t,e,i,n){return null===(n=this.getLayer(n))?this:(d.SetCollisionByProperty(t,e,i,n),this)},setCollisionByExclusion:function(t,e,i,n){return null===(n=this.getLayer(n))?this:(d.SetCollisionByExclusion(t,e,i,n),this)},setCollisionFromCollisionGroup:function(t,e,i){return null===(i=this.getLayer(i))?this:(d.SetCollisionFromCollisionGroup(t,e,i),this)},setTileIndexCallback:function(t,e,i,n){return null===(n=this.getLayer(n))?this:(d.SetTileIndexCallback(t,e,i,n),this)},setTileLocationCallback:function(t,e,i,n,s,r,o){return null===(o=this.getLayer(o))?this:(d.SetTileLocationCallback(t,e,i,n,s,r,o),this)},setLayer:function(t){var e=this.getLayerIndex(t);return null!==e&&(this.currentLayerIndex=e),this},setBaseTileSize:function(t,e){this.tileWidth=t,this.tileHeight=e,this.widthInPixels=this.width*t,this.heightInPixels=this.height*e;for(var i=0;i<this.layers.length;i++){this.layers[i].baseWidth=t,this.layers[i].baseHeight=e;for(var n=this.layers[i].data,s=this.layers[i].width,r=this.layers[i].height,o=0;o<r;++o)for(var a=0;a<s;++a){var h=n[o][a];null!==h&&h.setSize(void 0,void 0,t,e)}}return this},setLayerTileSize:function(t,e,i){if(null===(i=this.getLayer(i)))return this;i.tileWidth=t,i.tileHeight=e;for(var n=i.data,s=i.width,r=i.height,o=0;o<r;++o)for(var a=0;a<s;++a){var h=n[o][a];null!==h&&h.setSize(t,e)}return this},shuffle:function(t,e,i,n,s){return s=this.getLayer(s),this._isStaticCall(s,"shuffle")?this:(null!==s&&d.Shuffle(t,e,i,n,s),this)},swapByIndex:function(t,e,i,n,s,r,o){return o=this.getLayer(o),this._isStaticCall(o,"swapByIndex")?this:(null!==o&&d.SwapByIndex(t,e,i,n,s,r,o),this)},tileToWorldX:function(t,e,i){return i=this.getLayer(i),null===i?null:d.TileToWorldX(t,e,i)},tileToWorldY:function(t,e,i){return i=this.getLayer(i),null===i?null:d.TileToWorldY(t,e,i)},tileToWorldXY:function(t,e,i,n,s){return s=this.getLayer(s),null===s?null:d.TileToWorldXY(t,e,i,n,s)},weightedRandomize:function(t,e,i,n,s,r){return r=this.getLayer(r),this._isStaticCall(r,"weightedRandomize")?this:(null!==r&&d.WeightedRandomize(t,e,i,n,s,r),this)},worldToTileX:function(t,e,i,n){return n=this.getLayer(n),null===n?null:d.WorldToTileX(t,e,i,n)},worldToTileY:function(t,e,i,n){return n=this.getLayer(n),null===n?null:d.WorldToTileY(t,e,i,n)},worldToTileXY:function(t,e,i,n,s,r){return r=this.getLayer(r),null===r?null:d.WorldToTileXY(t,e,i,n,s,r)},_isStaticCall:function(t,e){return t.tilemapLayer instanceof u&&(console.warn(e+": You cannot change the tiles in a static tilemap layer"),!0)}});t.exports=p},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(983),o=i(2),a=i(105),h=new n({Extends:o,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Flip,s.GetBounds,s.Origin,s.Pipeline,s.ScaleMode,s.Size,s.Transform,s.Visible,s.ScrollFactor,r],initialize:function(t,e,i,n,s,r){o.call(this,t,"DynamicTilemapLayer"),this.isTilemap=!0,this.tilemap=e,this.layerIndex=i,this.layer=e.layers[i],this.layer.tilemapLayer=this,this.tileset=n,this.culledTiles=[],this.setAlpha(this.layer.alpha),this.setPosition(s,r),this.setOrigin(),this.setSize(this.layer.tileWidth*this.layer.width,this.layer.tileHeight*this.layer.height),this.initPipeline("TextureTintPipeline")},calculateFacesAt:function(t,e){return a.CalculateFacesAt(t,e,this.layer),this},calculateFacesWithin:function(t,e,i,n){return a.CalculateFacesWithin(t,e,i,n,this.layer),this},createFromTiles:function(t,e,i,n,s){return a.CreateFromTiles(t,e,i,n,s,this.layer)},cull:function(t){return a.CullTiles(this.layer,t,this.culledTiles)},copy:function(t,e,i,n,s,r,o){return a.Copy(t,e,i,n,s,r,o,this.layer),this},destroy:function(){this.layer.tilemapLayer===this&&(this.layer.tilemapLayer=void 0),this.tilemap=void 0,this.layer=void 0,this.tileset=void 0,this.culledTiles.length=0,o.prototype.destroy.call(this)},fill:function(t,e,i,n,s,r){return a.Fill(t,e,i,n,s,r,this.layer),this},filterTiles:function(t,e,i,n,s,r,o){return a.FilterTiles(t,e,i,n,s,r,o,this.layer)},findByIndex:function(t,e,i){return a.FindByIndex(t,e,i,this.layer)},findTile:function(t,e,i,n,s,r,o){return a.FindTile(t,e,i,n,s,r,o,this.layer)},forEachTile:function(t,e,i,n,s,r,o){return a.ForEachTile(t,e,i,n,s,r,o,this.layer),this},getTileAt:function(t,e,i){return a.GetTileAt(t,e,i,this.layer)},getTileAtWorldXY:function(t,e,i,n){return a.GetTileAtWorldXY(t,e,i,n,this.layer)},getTilesWithin:function(t,e,i,n,s){return a.GetTilesWithin(t,e,i,n,s,this.layer)},getTilesWithinShape:function(t,e,i){return a.GetTilesWithinShape(t,e,i,this.layer)},getTilesWithinWorldXY:function(t,e,i,n,s,r){return a.GetTilesWithinWorldXY(t,e,i,n,s,r,this.layer)},hasTileAt:function(t,e){return a.HasTileAt(t,e,this.layer)},hasTileAtWorldXY:function(t,e,i){return a.HasTileAtWorldXY(t,e,i,this.layer)},putTileAt:function(t,e,i,n){return a.PutTileAt(t,e,i,n,this.layer)},putTileAtWorldXY:function(t,e,i,n,s){return a.PutTileAtWorldXY(t,e,i,n,s,this.layer)},putTilesAt:function(t,e,i,n){return a.PutTilesAt(t,e,i,n,this.layer),this},randomize:function(t,e,i,n,s){return a.Randomize(t,e,i,n,s,this.layer),this},removeTileAt:function(t,e,i,n){return a.RemoveTileAt(t,e,i,n,this.layer)},removeTileAtWorldXY:function(t,e,i,n,s){return a.RemoveTileAtWorldXY(t,e,i,n,s,this.layer)},renderDebug:function(t,e){return a.RenderDebug(t,e,this.layer),this},replaceByIndex:function(t,e,i,n,s,r){return a.ReplaceByIndex(t,e,i,n,s,r,this.layer),this},setCollision:function(t,e,i){return a.SetCollision(t,e,i,this.layer),this},setCollisionBetween:function(t,e,i,n){return a.SetCollisionBetween(t,e,i,n,this.layer),this},setCollisionByProperty:function(t,e,i){return a.SetCollisionByProperty(t,e,i,this.layer),this},setCollisionByExclusion:function(t,e,i){return a.SetCollisionByExclusion(t,e,i,this.layer),this},setCollisionFromCollisionGroup:function(t,e){return a.SetCollisionFromCollisionGroup(t,e,this.layer),this},setTileIndexCallback:function(t,e,i){return a.SetTileIndexCallback(t,e,i,this.layer),this},setTileLocationCallback:function(t,e,i,n,s,r){return a.SetTileLocationCallback(t,e,i,n,s,r,this.layer),this},shuffle:function(t,e,i,n){return a.Shuffle(t,e,i,n,this.layer),this},swapByIndex:function(t,e,i,n,s,r){return a.SwapByIndex(t,e,i,n,s,r,this.layer),this},tileToWorldX:function(t,e){return a.TileToWorldX(t,e,this.layer)},tileToWorldY:function(t,e){return a.TileToWorldY(t,e,this.layer)},tileToWorldXY:function(t,e,i,n){return a.TileToWorldXY(t,e,i,n,this.layer)},weightedRandomize:function(t,e,i,n,s){return a.WeightedRandomize(t,e,i,n,s,this.layer),this},worldToTileX:function(t,e,i){return a.WorldToTileX(t,e,i,this.layer)},worldToTileY:function(t,e,i){return a.WorldToTileY(t,e,i,this.layer)},worldToTileXY:function(t,e,i,n,s){return a.WorldToTileXY(t,e,i,n,s,this.layer)}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(2),o=i(986),a=i(105),h=i(47),l=new n({Extends:r,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Flip,s.GetBounds,s.Origin,s.Pipeline,s.ScaleMode,s.Size,s.Transform,s.Visible,s.ScrollFactor,o],initialize:function(t,e,i,n,s,o){r.call(this,t,"StaticTilemapLayer"),this.isTilemap=!0,this.tilemap=e,this.layerIndex=i,this.layer=e.layers[i],this.layer.tilemapLayer=this,this.tileset=n,this.culledTiles=[],this.vertexBuffer=null,this.renderer=t.sys.game.renderer,this.bufferData=null,this.vertexViewF32=null,this.vertexViewU32=null,this.dirty=!0,this.vertexCount=0,this.setAlpha(this.layer.alpha),this.setPosition(s,o),this.setOrigin(),this.setSize(this.layer.tileWidth*this.layer.width,this.layer.tileHeight*this.layer.height),this.initPipeline("TextureTintPipeline"),this.renderer.onContextRestored(this.contextRestore,this)},contextRestore:function(){return this.dirty=!0,this.vertexBuffer=null,this},upload:function(t){var e,i,n,s,r=this.tileset,o=this.layer.width,a=this.layer.height,l=r.image.get().width,u=r.image.get().height,c=this.layer.data,d=this.renderer;if(d.gl){var f=d.pipelines.TextureTintPipeline;if(this.dirty){var p=d.gl,v=this.vertexBuffer,g=this.bufferData,y=0,m=0,x=o*a*f.vertexSize*6;null===g&&(g=new ArrayBuffer(x),this.bufferData=g,this.vertexViewF32=new Float32Array(g),this.vertexViewU32=new Uint32Array(g));var b=this.vertexViewF32,w=this.vertexViewU32;for(i=0;i<a;++i)for(n=0;n<o;++n)if(null!==(e=c[i][n])&&-1!==e.index){var T=e.pixelX,S=e.pixelY,A=T+e.width,C=S+e.height;if(null!==(s=r.getTileTextureCoordinates(e.index))){var M=s.x/l,_=s.y/u,E=(s.x+e.width)/l,P=(s.y+e.height)/u,L=T,k=S,F=T,O=C,R=A,B=C,D=A,I=S,Y=h.getTintAppendFloatAlpha(16777215,this.alpha*e.alpha);b[y+0]=L,b[y+1]=k,b[y+2]=M,b[y+3]=_,w[y+4]=Y,b[y+5]=F,b[y+6]=O,b[y+7]=M,b[y+8]=P,w[y+9]=Y,b[y+10]=R,b[y+11]=B,b[y+12]=E,b[y+13]=P,w[y+14]=Y,b[y+15]=L,b[y+16]=k,b[y+17]=M,b[y+18]=_,w[y+19]=Y,b[y+20]=R,b[y+21]=B,b[y+22]=E,b[y+23]=P,w[y+24]=Y,b[y+25]=D,b[y+26]=I,b[y+27]=E,b[y+28]=_,w[y+29]=Y,y+=30,m+=6}}this.vertexCount=m,this.dirty=!1,null===v?(v=d.createVertexBuffer(g,p.STATIC_DRAW),this.vertexBuffer=v):(d.setVertexBuffer(v),p.bufferSubData(p.ARRAY_BUFFER,0,g))}f.modelIdentity(),f.modelTranslate(this.x-t.scrollX*this.scrollFactorX,this.y-t.scrollY*this.scrollFactorY,0),f.modelScale(this.scaleX,this.scaleY,1),f.viewLoad2D(t.matrix.matrix)}return this},calculateFacesAt:function(t,e){return a.CalculateFacesAt(t,e,this.layer),this},calculateFacesWithin:function(t,e,i,n){return a.CalculateFacesWithin(t,e,i,n,this.layer),this},createFromTiles:function(t,e,i,n,s){return a.CreateFromTiles(t,e,i,n,s,this.layer)},cull:function(t){return a.CullTiles(this.layer,t,this.culledTiles)},destroy:function(){this.layer.tilemapLayer===this&&(this.layer.tilemapLayer=void 0),this.tilemap=void 0,this.layer=void 0,this.tileset=void 0,r.prototype.destroy.call(this)},findByIndex:function(t,e,i){return a.FindByIndex(t,e,i,this.layer)},findTile:function(t,e,i,n,s,r,o){return a.FindTile(t,e,i,n,s,r,o,this.layer)},filterTiles:function(t,e,i,n,s,r,o){return a.FilterTiles(t,e,i,n,s,r,o,this.layer)},forEachTile:function(t,e,i,n,s,r,o){return a.ForEachTile(t,e,i,n,s,r,o,this.layer),this},getTileAt:function(t,e,i){return a.GetTileAt(t,e,i,this.layer)},getTileAtWorldXY:function(t,e,i,n){return a.GetTileAtWorldXY(t,e,i,n,this.layer)},getTilesWithin:function(t,e,i,n,s){return a.GetTilesWithin(t,e,i,n,s,this.layer)},getTilesWithinWorldXY:function(t,e,i,n,s,r){return a.GetTilesWithinWorldXY(t,e,i,n,s,r,this.layer)},getTilesWithinShape:function(t,e,i){return a.GetTilesWithinShape(t,e,i,this.layer)},hasTileAt:function(t,e){return a.HasTileAt(t,e,this.layer)},hasTileAtWorldXY:function(t,e,i){return a.HasTileAtWorldXY(t,e,i,this.layer)},renderDebug:function(t,e){return a.RenderDebug(t,e,this.layer),this},setCollision:function(t,e,i){return a.SetCollision(t,e,i,this.layer),this},setCollisionBetween:function(t,e,i,n){return a.SetCollisionBetween(t,e,i,n,this.layer),this},setCollisionByProperty:function(t,e,i){return a.SetCollisionByProperty(t,e,i,this.layer),this},setCollisionByExclusion:function(t,e,i){return a.SetCollisionByExclusion(t,e,i,this.layer),this},setTileIndexCallback:function(t,e,i){return a.SetTileIndexCallback(t,e,i,this.layer),this},setCollisionFromCollisionGroup:function(t,e){return a.SetCollisionFromCollisionGroup(t,e,this.layer),this},setTileLocationCallback:function(t,e,i,n,s,r){return a.SetTileLocationCallback(t,e,i,n,s,r,this.layer),this},tileToWorldX:function(t,e){return a.TileToWorldX(t,e,this.layer)},tileToWorldY:function(t,e){return a.TileToWorldY(t,e,this.layer)},tileToWorldXY:function(t,e,i,n){return a.TileToWorldXY(t,e,i,n,this.layer)},worldToTileX:function(t,e,i){return a.WorldToTileX(t,e,i,this.layer)},worldToTileY:function(t,e,i){return a.WorldToTileY(t,e,i,this.layer)},worldToTileXY:function(t,e,i,n,s){return a.WorldToTileXY(t,e,i,n,s,this.layer)}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(1),r=new n({initialize:function(t){this.delay=0,this.repeat=0,this.repeatCount=0,this.loop=!1,this.callback,this.callbackScope,this.args,this.timeScale=1,this.startAt=0,this.elapsed=0,this.paused=!1,this.hasDispatched=!1,this.reset(t)},reset:function(t){return this.delay=s(t,"delay",0),this.repeat=s(t,"repeat",0),this.loop=s(t,"loop",!1),this.callback=s(t,"callback",void 0),this.callbackScope=s(t,"callbackScope",this.callback),this.args=s(t,"args",[]),this.timeScale=s(t,"timeScale",1),this.startAt=s(t,"startAt",0),this.paused=s(t,"paused",!1),this.elapsed=this.startAt,this.hasDispatched=!1,this.repeatCount=-1===this.repeat||this.loop?999999999999:this.repeat,this},getProgress:function(){return this.elapsed/this.delay},getOverallProgress:function(){if(this.repeat>0){var t=this.delay+this.delay*this.repeat;return(this.elapsed+this.delay*(this.repeat-this.repeatCount))/t}return this.getProgress()},getRepeatCount:function(){return this.repeatCount},getElapsed:function(){return this.elapsed},getElapsedSeconds:function(){return.001*this.elapsed},remove:function(t){void 0===t&&(t=!1),this.elapsed=this.delay,this.hasDispatched=!!t,this.repeatCount=0},destroy:function(){this.callback=void 0,this.callbackScope=void 0,this.args=[]}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(995),s=function(t){var e,i=[];if(t.hasOwnProperty("props"))for(e in t.props)"_"!==e.substr(0,1)&&i.push({key:e,value:t.props[e]});else for(e in t)-1===n.indexOf(e)&&"_"!==e.substr(0,1)&&i.push({key:e,value:t[e]});return i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(4),s=function(t){var e=n(t,"tweens",null);return null===e?[]:("function"==typeof e&&(e=e.call()),Array.isArray(e)||(e=[e]),e)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(179),s=i(10),r=i(80),o=i(79),a=i(110),h=i(4),l=i(178),u=i(180),c=i(181),d=function(t,e,i){void 0===i&&(i=n);var d=h(e,"from",0),f=h(e,"to",1),p=[{value:d}],v=a(e,"delay",i.delay),g=a(e,"duration",i.duration),y=h(e,"easeParams",i.easeParams),m=o(h(e,"ease",i.ease),y),x=a(e,"hold",i.hold),b=a(e,"repeat",i.repeat),w=a(e,"repeatDelay",i.repeatDelay),T=r(e,"yoyo",i.yoyo),S=[],A=l("value",f),C=c(p[0],"value",A.getEnd,A.getStart,m,v,g,T,x,b,w,!1,!1);C.start=d,C.current=d,C.to=f,S.push(C);var M=new u(t,S,p);M.offset=s(e,"offset",null),M.completeDelay=s(e,"completeDelay",0),M.loop=Math.round(s(e,"loop",0)),M.loopDelay=Math.round(s(e,"loopDelay",0)),M.paused=r(e,"paused",!1),M.useFrames=r(e,"useFrames",!1);for(var _=h(e,"callbackScope",M),E=[M,null],P=u.TYPES,L=0;L<P.length;L++){var k=P[L],F=h(e,k,!1);if(F){var O=h(e,k+"Scope",_),R=h(e,k+"Params",[]);M.setCallback(k,F,E.concat(R),O)}}return M};t.exports=d},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(60),s=i(179),r=i(10),o=i(80),a=i(79),h=i(110),l=i(177),u=i(393),c=i(4),d=i(396),f=i(111),p=function(t,e){var i=new d(t),p=u(e);if(0===p.length)return i.paused=!0,i;var v=n(s);v.targets=l(e);var g=r(e,"totalDuration",0);v.duration=g>0?Math.floor(g/p.length):h(e,"duration",v.duration),v.delay=h(e,"delay",v.delay),v.easeParams=c(e,"easeParams",v.easeParams),v.ease=a(c(e,"ease",v.ease),v.easeParams),v.hold=h(e,"hold",v.hold),v.repeat=h(e,"repeat",v.repeat),v.repeatDelay=h(e,"repeatDelay",v.repeatDelay),v.yoyo=o(e,"yoyo",v.yoyo),v.flipX=o(e,"flipX",v.flipX),v.flipY=o(e,"flipY",v.flipY);for(var y=0;y<p.length;y++)i.queue(f(i,p[y],v));i.completeDelay=r(e,"completeDelay",0),i.loop=Math.round(r(e,"loop",0)),i.loopDelay=Math.round(r(e,"loopDelay",0)),i.paused=o(e,"paused",!1),i.useFrames=o(e,"useFrames",!1);var m=c(e,"callbackScope",i),x=[i],b=c(e,"onStart",!1);if(b){var w=c(e,"onStartScope",m),T=c(e,"onStartParams",[]);i.setCallback("onStart",b,x.concat(T),w)}var S=c(e,"onUpdate",!1);if(S){var A=c(e,"onUpdateScope",m),C=c(e,"onUpdateParams",[]);i.setCallback("onUpdate",S,x.concat(C),A)}var M=c(e,"onLoop",!1);if(M){var _=c(e,"onLoopScope",m),E=c(e,"onLoopParams",[]);i.setCallback("onLoop",M,x.concat(E),_)}var P=c(e,"onYoyo",!1);if(P){var L=c(e,"onYoyoScope",m),k=c(e,"onYoyoParams",[]);i.setCallback("onYoyo",P,x.concat(null,k),L)}var F=c(e,"onComplete",!1);if(F){var O=c(e,"onCompleteScope",m),R=c(e,"onCompleteParams",[]);i.setCallback("onComplete",F,x.concat(R),O)}return i};t.exports=p},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(13),r=i(111),o=i(99),a=new n({Extends:s,initialize:function(t){s.call(this),this.manager=t,this.isTimeline=!0,this.data=[],this.totalData=0,this.useFrames=!1,this.timeScale=1,this.loop=0,this.loopDelay=0,this.loopCounter=0,this.completeDelay=0,this.countdown=0,this.state=o.PENDING_ADD,this._pausedState=o.PENDING_ADD,this.paused=!1,this.elapsed=0,this.totalElapsed=0,this.duration=0,this.progress=0,this.totalDuration=0,this.totalProgress=0,this.callbacks={onComplete:null,onLoop:null,onStart:null,onUpdate:null,onYoyo:null},this.callbackScope},setTimeScale:function(t){return this.timeScale=t,this},getTimeScale:function(){return this.timeScale},isPlaying:function(){return this.state===o.ACTIVE},add:function(t){return this.queue(r(this,t))},queue:function(t){return this.isPlaying()||(t.parent=this,t.parentIsTimeline=!0,this.data.push(t),this.totalData=this.data.length),this},hasOffset:function(t){return null!==t.offset},isOffsetAbsolute:function(t){return"number"==typeof t},isOffsetRelative:function(t){if("string"==typeof t){var e=t[0];if("-"===e||"+"===e)return!0}return!1},getRelativeOffset:function(t,e){var i=t[0],n=parseFloat(t.substr(2)),s=e;switch(i){case"+":s+=n;break;case"-":s-=n}return Math.max(0,s)},calcDuration:function(){for(var t=0,e=0,i=0,n=0;n<this.totalData;n++){var s=this.data[n];s.init(),this.hasOffset(s)?this.isOffsetAbsolute(s.offset)?(s.calculatedOffset=s.offset,0===s.offset&&(i=0)):this.isOffsetRelative(s.offset)&&(s.calculatedOffset=this.getRelativeOffset(s.offset,t)):s.calculatedOffset=i,t=s.totalDuration+s.calculatedOffset,e+=s.totalDuration,i+=s.totalDuration}this.duration=e,this.loopCounter=-1===this.loop?999999999999:this.loop,this.loopCounter>0?this.totalDuration=this.duration+this.completeDelay+(this.duration+this.loopDelay)*this.loopCounter:this.totalDuration=this.duration+this.completeDelay},init:function(){return this.calcDuration(),this.progress=0,this.totalProgress=0,!this.paused||(this.state=o.PAUSED,!1)},resetTweens:function(t){for(var e=0;e<this.totalData;e++){this.data[e].play(t)}},setCallback:function(t,e,i,n){return-1!==a.TYPES.indexOf(t)&&(this.callbacks[t]={func:e,scope:n,params:i}),this},play:function(){if(this.state!==o.ACTIVE){if(this.paused)return this.paused=!1,void this.manager.makeActive(this);this.resetTweens(!1),this.state=o.ACTIVE;var t=this.callbacks.onStart;t&&t.func.apply(t.scope,t.params),this.emit("start",this)}},nextState:function(){if(this.loopCounter>0){this.elapsed=0,this.progress=0,this.loopCounter--;var t=this.callbacks.onLoop;t&&t.func.apply(t.scope,t.params),this.emit("loop",this,this.loopCounter),this.resetTweens(!0),this.loopDelay>0?(this.countdown=this.loopDelay,this.state=o.LOOP_DELAY):this.state=o.ACTIVE}else if(this.completeDelay>0)this.countdown=this.completeDelay,this.state=o.COMPLETE_DELAY;else{var e=this.callbacks.onComplete;e&&e.func.apply(e.scope,e.params),this.emit("complete",this),this.state=o.PENDING_REMOVE}},update:function(t,e){if(this.state!==o.PAUSED){var i=e;switch(this.useFrames&&(e=1*this.manager.timeScale),e*=this.timeScale,this.elapsed+=e,this.progress=Math.min(this.elapsed/this.duration,1),this.totalElapsed+=e,this.totalProgress=Math.min(this.totalElapsed/this.totalDuration,1),this.state){case o.ACTIVE:for(var n=this.totalData,s=0;s<this.totalData;s++){this.data[s].update(t,i)&&n--}var r=this.callbacks.onUpdate;r&&r.func.apply(r.scope,r.params),this.emit("update",this),0===n&&this.nextState();break;case o.LOOP_DELAY:this.countdown-=e,this.countdown<=0&&(this.state=o.ACTIVE);break;case o.COMPLETE_DELAY:if(this.countdown-=e,this.countdown<=0){var a=this.callbacks.onComplete;a&&a.func.apply(a.scope,a.params),this.emit("complete",this),this.state=o.PENDING_REMOVE}}return this.state===o.PENDING_REMOVE}},stop:function(){this.state=o.PENDING_REMOVE},pause:function(){if(this.state!==o.PAUSED)return this.paused=!0,this._pausedState=this.state,this.state=o.PAUSED,this.emit("pause",this),this},resume:function(){return this.state===o.PAUSED&&(this.paused=!1,this.state=this._pausedState),this.emit("resume",this),this},hasTarget:function(t){for(var e=0;e<this.data.length;e++)if(this.data[e].hasTarget(t))return!0;return!1},destroy:function(){for(var t=0;t<this.data.length;t++)this.data[t].destroy()}});a.TYPES=["onStart","onUpdate","onLoop","onComplete","onYoyo"],t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){if(!(e>=t.length)){for(var i=t.length-1,n=t[e],s=e;s<i;s++)t[s]=t[s+1];return t.length=i,n}};t.exports=i},function(t,e,i){"use strict";(0,i(88).start)()},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(t){return t&&t.__esModule?t:{default:t}}(i(400)),s=n.default;e.default=s},function(t,e,i){"use strict";function n(){var t=window.exampleGame.scene.getAt(0),e=t.anims;Object.keys(s).forEach(function(t){s[t].createAnimations&&s[t].createAnimations(e)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]}return e.default=t,e}(i(88)),r=n;e.default=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"loadAssets",{enumerable:!0,get:function(){return n.default}});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(402))},function(t,e,i){"use strict";function n(t){t.bitmapFont("ice","iceicebaby.png","iceicebaby.xml")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n;e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(t){return t&&t.__esModule?t:{default:t}}(i(404)),s=n.default;e.default=s},function(t,e,i){"use strict";(function(t){function n(){var e=window.exampleGame.scene.getAt(0),i=e.load;Object.keys(s).forEach(function(e){if(s[e].loadAssets){console.log("dirname is ".concat(t));var n=t,o=r.default.resolve(n,"src","exampleGame",e,"assets");i.setPath(o),s[e].loadAssets(i),i.path=""}})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]}return e.default=t,e}(i(88)),r=function(t){return t&&t.__esModule?t:{default:t}}(i(405)),o=n;e.default=o}).call(e,"/")},function(t,e,i){(function(t){function i(t,e){for(var i=0,n=t.length-1;n>=0;n--){var s=t[n];"."===s?t.splice(n,1):".."===s?(t.splice(n,1),i++):i&&(t.splice(n,1),i--)}if(e)for(;i--;i)t.unshift("..");return t}function n(t,e){if(t.filter)return t.filter(e);for(var i=[],n=0;n<t.length;n++)e(t[n],n,t)&&i.push(t[n]);return i}var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,r=function(t){return s.exec(t).slice(1)};e.resolve=function(){for(var e="",s=!1,r=arguments.length-1;r>=-1&&!s;r--){var o=r>=0?arguments[r]:t.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,s="/"===o.charAt(0))}return e=i(n(e.split("/"),function(t){return!!t}),!s).join("/"),(s?"/":"")+e||"."},e.normalize=function(t){var s=e.isAbsolute(t),r="/"===o(t,-1);return t=i(n(t.split("/"),function(t){return!!t}),!s).join("/"),t||s||(t="."),t&&r&&(t+="/"),(s?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(n(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,i){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var i=t.length-1;i>=0&&""===t[i];i--);return e>i?[]:t.slice(e,i-e+1)}t=e.resolve(t).substr(1),i=e.resolve(i).substr(1);for(var s=n(t.split("/")),r=n(i.split("/")),o=Math.min(s.length,r.length),a=o,h=0;h<o;h++)if(s[h]!==r[h]){a=h;break}for(var l=[],h=a;h<s.length;h++)l.push("..");return l=l.concat(r.slice(a)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=r(t),i=e[0],n=e[1];return i||n?(n&&(n=n.substr(0,n.length-1)),i+n):"."},e.basename=function(t,e){var i=r(t)[2];return e&&i.substr(-1*e.length)===e&&(i=i.substr(0,i.length-e.length)),i},e.extname=function(t){return r(t)[3]};var o="b"==="ab".substr(-1)?function(t,e,i){return t.substr(e,i)}:function(t,e,i){return e<0&&(e=t.length+e),t.substr(e,i)}}).call(e,i(182))},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(112),a=i(88),h=function(){function t(){var e=this;n(this,t),Object.defineProperty(this,"textCallback",{configurable:!0,enumerable:!0,writable:!0,value:function(t){return t.tint.topLeft=e.hsv[Math.floor(e.i)].color,t.tint.topRight=e.hsv[359-Math.floor(e.i)].color,t.tint.bottomLeft=e.hsv[359-Math.floor(e.i)].color,t.tint.bottomRight=e.hsv[Math.floor(e.i)].color,e.i+=.05,e.i>=e.hsv.length&&(e.i=0),t}}),this.hsv,this.i=0,console.log("PlayScene")}return r(t,[{key:"preload",value:function(){console.log("preload"),(0,a.loadAllAssets)()}},{key:"create",value:function(){console.log("create"),(0,a.createAllAnimations)(),this.hsv=(0,o.HSVColorWheel)(),this.add.dynamicBitmapText(128,128,"ice","I'm an example\nwhoooaaaa",64).setDisplayCallback(this.textCallback)}}]),t}(),l=h;e.default=l},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e={r:t>>16&255,g:t>>8&255,b:255&t,a:255};return t>16777215&&(e.a=t>>>24),e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(42),s=i(187),r=function(t,e,i){var r=i,o=i,a=i;if(0!==e){var h=i<.5?i*(1+e):i+e-i*e,l=2*i-h;r=s(l,h,t+1/3),o=s(l,h,t),a=s(l,h,t-1/3)}return(new n).setGLTo(r,o,a,1)};t.exports=r},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(188),s=function(t,e){void 0===t&&(t=1),void 0===e&&(e=1);for(var i=[],s=0;s<=359;s++)i.push(n(s/359,t,e));return i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(191),s=function(t,e,i,s,r,o,a,h){void 0===a&&(a=100),void 0===h&&(h=0);var l=h/a;return{r:n(t,s,l),g:n(e,r,l),b:n(i,o,l)}},r=function(t,e,i,n){return void 0===i&&(i=100),void 0===n&&(n=0),s(t.r,t.g,t.b,e.r,e.g,e.b,i,n)},o=function(t,e,i,n,r,o){return void 0===r&&(r=100),void 0===o&&(o=0),s(t.r,t.g,t.b,e,i,n,r,o)};t.exports={RGBWithRGB:s,ColorWithRGB:o,ColorWithColor:r}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(194),s=i(42),r=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=255),new s(n(t,e),n(t,e),n(t,e))};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){t/=255,e/=255,i/=255;var n=Math.min(t,e,i),s=Math.max(t,e,i),r=s-n,o=0,a=0===s?0:r/s,h=s;return s!==n&&(s===t?o=(e-i)/r+(e<i?6:0):s===e?o=(i-t)/r+2:s===i&&(o=(t-e)/r+4),o/=6),{h:o,s:a,v:h}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(185),s=function(t,e,i,s,r){return void 0===s&&(s=255),void 0===r&&(r="#"),"#"===r?"#"+((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1):"0x"+n(s)+n(t)+n(e)+n(i)};t.exports=s},function(t,e,i){i(416),i(417),i(418),i(419),i(420),i(421),i(422),i(423),i(424)},function(t,e){Array.prototype.forEach||(Array.prototype.forEach=function(t){"use strict";if(void 0===this||null===this)throw new TypeError;var e=Object(this),i=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var n=arguments.length>=2?arguments[1]:void 0,s=0;s<i;s++)s in e&&t.call(n,e[s],s,e)})},function(t,e){Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)})},function(t,e){!function(t,e,i){"use strict";function n(t){t&&(t.setTargetAtTime||(t.setTargetAtTime=t.setTargetValueAtTime))}window.hasOwnProperty("webkitAudioContext")&&!window.hasOwnProperty("AudioContext")&&(window.AudioContext=webkitAudioContext,AudioContext.prototype.hasOwnProperty("createGain")||(AudioContext.prototype.createGain=AudioContext.prototype.createGainNode),AudioContext.prototype.hasOwnProperty("createDelay")||(AudioContext.prototype.createDelay=AudioContext.prototype.createDelayNode),AudioContext.prototype.hasOwnProperty("createScriptProcessor")||(AudioContext.prototype.createScriptProcessor=AudioContext.prototype.createJavaScriptNode),AudioContext.prototype.hasOwnProperty("createPeriodicWave")||(AudioContext.prototype.createPeriodicWave=AudioContext.prototype.createWaveTable),AudioContext.prototype.internal_createGain=AudioContext.prototype.createGain,AudioContext.prototype.createGain=function(){var t=this.internal_createGain();return n(t.gain),t},AudioContext.prototype.internal_createDelay=AudioContext.prototype.createDelay,AudioContext.prototype.createDelay=function(t){var e=t?this.internal_createDelay(t):this.internal_createDelay();return n(e.delayTime),e},AudioContext.prototype.internal_createBufferSource=AudioContext.prototype.createBufferSource,AudioContext.prototype.createBufferSource=function(){var t=this.internal_createBufferSource();return t.start?(t.internal_start=t.start,t.start=function(e,i,n){void 0!==n?t.internal_start(e||0,i,n):t.internal_start(e||0,i||0)}):t.start=function(t,e,i){e||i?this.noteGrainOn(t||0,e,i):this.noteOn(t||0)},t.stop?(t.internal_stop=t.stop,t.stop=function(e){t.internal_stop(e||0)}):t.stop=function(t){this.noteOff(t||0)},n(t.playbackRate),t},AudioContext.prototype.internal_createDynamicsCompressor=AudioContext.prototype.createDynamicsCompressor,AudioContext.prototype.createDynamicsCompressor=function(){var t=this.internal_createDynamicsCompressor();return n(t.threshold),n(t.knee),n(t.ratio),n(t.reduction),n(t.attack),n(t.release),t},AudioContext.prototype.internal_createBiquadFilter=AudioContext.prototype.createBiquadFilter,AudioContext.prototype.createBiquadFilter=function(){var t=this.internal_createBiquadFilter();return n(t.frequency),n(t.detune),n(t.Q),n(t.gain),t},AudioContext.prototype.hasOwnProperty("createOscillator")&&(AudioContext.prototype.internal_createOscillator=AudioContext.prototype.createOscillator,AudioContext.prototype.createOscillator=function(){var t=this.internal_createOscillator();return t.start?(t.internal_start=t.start,t.start=function(e){t.internal_start(e||0)}):t.start=function(t){this.noteOn(t||0)},t.stop?(t.internal_stop=t.stop,t.stop=function(e){t.internal_stop(e||0)}):t.stop=function(t){this.noteOff(t||0)},t.setPeriodicWave||(t.setPeriodicWave=t.setWaveTable),n(t.frequency),n(t.detune),t})),window.hasOwnProperty("webkitOfflineAudioContext")&&!window.hasOwnProperty("OfflineAudioContext")&&(window.OfflineAudioContext=webkitOfflineAudioContext)}(window)},function(t,e){window.console||(window.console={},window.console.log=window.console.assert=function(){},window.console.warn=window.console.assert=function(){})},function(t,e){Function.prototype.bind||(Function.prototype.bind=function(){var t=Array.prototype.slice;return function(e){function i(){var r=s.concat(t.call(arguments));n.apply(this instanceof i?this:e,r)}var n=this,s=t.call(arguments,1);if("function"!=typeof n)throw new TypeError;return i.prototype=function t(e){if(e&&(t.prototype=e),!(this instanceof t))return new t}(n.prototype),i}}())},function(t,e){Math.trunc||(Math.trunc=function(t){return t<0?Math.ceil(t):Math.floor(t)})},function(t,e){!function(){if("performance"in window==!1&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==!1){var t=Date.now();performance.timing&&performance.timing.navigationStart&&(t=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-t}}}()},function(t,e,i){(function(t){if(Date.now&&Date.prototype.getTime||(Date.now=function(){return(new Date).getTime()}),!t.performance||!t.performance.now){var e=Date.now();t.performance||(t.performance={}),t.performance.now=function(){return Date.now()-e}}for(var i=Date.now(),n=["ms","moz","webkit","o"],s=0;s<n.length&&!t.requestAnimationFrame;++s)t.requestAnimationFrame=t[n[s]+"RequestAnimationFrame"],t.cancelAnimationFrame=t[n[s]+"CancelAnimationFrame"]||t[n[s]+"CancelRequestAnimationFrame"];t.requestAnimationFrame||(t.requestAnimationFrame=function(t){if("function"!=typeof t)throw new TypeError(t+"is not a function");var e=Date.now(),n=16+i-e;return n<0&&(n=0),i=e,setTimeout(function(){i=Date.now(),t(performance.now())},n)}),t.cancelAnimationFrame||(t.cancelAnimationFrame=function(t){clearTimeout(t)})}).call(e,i(198))},function(t,e){if("function"!=typeof window.Uint32Array&&"object"!=typeof window.Uint32Array){var i=function(t){var e=new Array;window[t]=function(t){if("number"==typeof t){Array.call(this,t),this.length=t;for(var e=0;e<this.length;e++)this[e]=0}else{Array.call(this,t.length),this.length=t.length;for(var e=0;e<this.length;e++)this[e]=t[e]}},window[t].prototype=e,window[t].constructor=window[t]};i("Float32Array"),i("Uint32Array"),i("Uint16Array"),i("Int16Array"),i("ArrayBuffer")}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=0;i<t.length;i++)t[i].angle+=e;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n];e.call(i,s)}return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){for(var n=i;n<t.length;n++){var s=t[n],r=!0;for(var o in e)s[o]!==e[o]&&(r=!1);if(r)return s}return null};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(201),s=i(202),r=i(4),o=i(3),a=i(89),h=new a({sys:{queueDepthSort:o}},0,0,1,1),l=function(t,e){var i=r(e,"width",-1),o=r(e,"height",-1),a=r(e,"cellWidth",1),l=r(e,"cellHeight",a),u=r(e,"position",s.TOP_LEFT),c=r(e,"x",0),d=r(e,"y",0),f=0,p=0,v=i*a,g=o*l;h.setPosition(c,d),h.setSize(a,l);for(var y=0;y<t.length;y++)if(n(t[y],h,u),-1===i)p+=l,h.y+=l,p===g&&(p=0,h.x+=a,h.y=d);else if(-1===o)f+=a,h.x+=a,f===v&&(f=0,h.x=c,h.y+=l);else if(f+=a,h.x+=a,f===v&&(f=0,p+=l,h.x=c,h.y+=l,p===g))break;return t};t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.c=1,this.s0=0,this.s1=0,this.s2=0,this.sign=[-1,1],t&&this.init(t)},rnd:function(){var t=2091639*this.s0+2.3283064365386963e-10*this.c;return this.c=0|t,this.s0=this.s1,this.s1=this.s2,this.s2=t-this.c,this.s2},hash:function(t){var e,i=4022871197;t=t.toString();for(var n=0;n<t.length;n++)i+=t.charCodeAt(n),e=.02519603282416938*i,i=e>>>0,e-=i,e*=i,i=e>>>0,e-=i,i+=4294967296*e;return 2.3283064365386963e-10*(i>>>0)},init:function(t){"string"==typeof t?this.state(t):this.sow(t)},sow:function(t){if(this.s0=this.hash(" "),this.s1=this.hash(this.s0),this.s2=this.hash(this.s1),this.c=1,t)for(var e=0;e<t.length&&null!=t[e];e++){var i=t[e];this.s0-=this.hash(i),this.s0+=~~(this.s0<0),this.s1-=this.hash(i),this.s1+=~~(this.s1<0),this.s2-=this.hash(i),this.s2+=~~(this.s2<0)}},integer:function(){return 4294967296*this.rnd()},frac:function(){return this.rnd()+1.1102230246251565e-16*(2097152*this.rnd()|0)},real:function(){return this.integer()+this.frac()},integerInRange:function(t,e){return Math.floor(this.realInRange(0,e-t+1)+t)},between:function(t,e){return Math.floor(this.realInRange(0,e-t+1)+t)},realInRange:function(t,e){return this.frac()*(e-t)+t},normal:function(){return 1-2*this.frac()},uuid:function(){var t="",e="";for(e=t="";t++<36;e+=~t%5|3*t&4?(15^t?8^this.frac()*(20^t?16:4):4).toString(16):"-");return e},pick:function(t){return t[this.integerInRange(0,t.length-1)]},sign:function(){return this.pick(this.sign)},weightedPick:function(t){return t[~~(Math.pow(this.frac(),2)*(t.length-1)+.5)]},timestamp:function(t,e){return this.realInRange(t||9466848e5,e||1577862e6)},angle:function(){return this.integerInRange(-180,180)},rotation:function(){return this.realInRange(-3.1415926,3.1415926)},state:function(t){return"string"==typeof t&&t.match(/^!rnd/)&&(t=t.split(","),this.c=parseFloat(t[1]),this.s0=parseFloat(t[2]),this.s1=parseFloat(t[3]),this.s2=parseFloat(t[4])),["!rnd",this.c,this.s0,this.s1,this.s2].join(",")}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(56),s={_alpha:1,_alphaTL:1,_alphaTR:1,_alphaBL:1,_alphaBR:1,clearAlpha:function(){return this.setAlpha(1)},setAlpha:function(t,e,i,s){return void 0===t&&(t=1),void 0===e?this.alpha=t:(this._alphaTL=n(t,0,1),this._alphaTR=n(e,0,1),this._alphaBL=n(i,0,1),this._alphaBR=n(s,0,1)),this},alpha:{get:function(){return this._alpha},set:function(t){var e=n(t,0,1);this._alpha=e,this._alphaTL=e,this._alphaTR=e,this._alphaBL=e,this._alphaBR=e,0===e?this.renderFlags&=-3:this.renderFlags|=2}},alphaTopLeft:{get:function(){return this._alphaTL},set:function(t){var e=n(t,0,1);this._alphaTL=e,0!==e&&(this.renderFlags|=2)}},alphaTopRight:{get:function(){return this._alphaTR},set:function(t){var e=n(t,0,1);this._alphaTR=e,0!==e&&(this.renderFlags|=2)}},alphaBottomLeft:{get:function(){return this._alphaBL},set:function(t){var e=n(t,0,1);this._alphaBL=e,0!==e&&(this.renderFlags|=2)}},alphaBottomRight:{get:function(){return this._alphaBR},set:function(t){var e=n(t,0,1);this._alphaBR=e,0!==e&&(this.renderFlags|=2)}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(51),s={_blendMode:n.NORMAL,blendMode:{get:function(){return this._blendMode},set:function(t){"string"==typeof t&&(t=n[t]),t>=0&&(this._blendMode=t)}},setBlendMode:function(t){return this.blendMode=t,this}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={width:0,height:0,displayWidth:{get:function(){return this.scaleX*this.width},set:function(t){this.scaleX=t/this.width}},displayHeight:{get:function(){return this.scaleY*this.height},set:function(t){this.scaleY=t/this.height}}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={_depth:0,depth:{get:function(){return this._depth},set:function(t){this.scene.sys.queueDepthSort(),this._depth=t}},setDepth:function(t){return void 0===t&&(t=0),this.depth=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={flipX:!1,flipY:!1,toggleFlipX:function(){return this.flipX=!this.flipX,this},toggleFlipY:function(){return this.flipY=!this.flipY,this},setFlipX:function(t){return this.flipX=t,this},setFlipY:function(t){return this.flipY=t,this},setFlip:function(t,e){return this.flipX=t,this.flipY=e,this},resetFlip:function(){return this.flipX=!1,this.flipY=!1,this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=i(218),r=i(6),o={getCenter:function(t){return void 0===t&&(t=new r),t.x=this.x-this.displayWidth*this.originX+this.displayWidth/2,t.y=this.y-this.displayHeight*this.originY+this.displayHeight/2,t},getTopLeft:function(t){return void 0===t&&(t=new r),t.x=this.x-this.displayWidth*this.originX,t.y=this.y-this.displayHeight*this.originY,0!==this.rotation&&s(t,this.x,this.y,this.rotation),t},getTopRight:function(t){return void 0===t&&(t=new r),t.x=this.x-this.displayWidth*this.originX+this.displayWidth,t.y=this.y-this.displayHeight*this.originY,0!==this.rotation&&s(t,this.x,this.y,this.rotation),t},getBottomLeft:function(t){return void 0===t&&(t=new r),t.x=this.x-this.displayWidth*this.originX,t.y=this.y-this.displayHeight*this.originY+this.displayHeight,0!==this.rotation&&s(t,this.x,this.y,this.rotation),t},getBottomRight:function(t){return void 0===t&&(t=new r),t.x=this.x-this.displayWidth*this.originX+this.displayWidth,t.y=this.y-this.displayHeight*this.originY+this.displayHeight,0!==this.rotation&&s(t,this.x,this.y,this.rotation),t},getBounds:function(t){void 0===t&&(t=new n),this.getTopLeft(t);var e=t.x,i=t.y;this.getTopRight(t);var s=t.x,r=t.y;this.getBottomLeft(t);var o=t.x,a=t.y;this.getBottomRight(t);var h=t.x,l=t.y;return t.x=Math.min(e,s,o,h),t.y=Math.min(i,r,a,l),t.width=Math.max(e,s,o,h)-t.x,t.height=Math.max(i,r,a,l)-t.y,t}};t.exports=o},function(t,e){var i={matrixStack:null,currentMatrix:null,currentMatrixIndex:0,initMatrixStack:function(){return this.matrixStack=new Float32Array(6e3),this.currentMatrix=new Float32Array([1,0,0,1,0,0]),this.currentMatrixIndex=0,this},save:function(){if(this.currentMatrixIndex>=this.matrixStack.length)return this;var t=this.matrixStack,e=this.currentMatrix,i=this.currentMatrixIndex;return this.currentMatrixIndex+=6,t[i+0]=e[0],t[i+1]=e[1],t[i+2]=e[2],t[i+3]=e[3],t[i+4]=e[4],t[i+5]=e[5],this},restore:function(){if(this.currentMatrixIndex<=0)return this;this.currentMatrixIndex-=6;var t=this.matrixStack,e=this.currentMatrix,i=this.currentMatrixIndex;return e[0]=t[i+0],e[1]=t[i+1],e[2]=t[i+2],e[3]=t[i+3],e[4]=t[i+4],e[5]=t[i+5],this},loadIdentity:function(){return this.setTransform(1,0,0,1,0,0),this},transform:function(t,e,i,n,s,r){var o=this.currentMatrix,a=o[0],h=o[1],l=o[2],u=o[3],c=o[4],d=o[5];return o[0]=a*t+l*e,o[1]=h*t+u*e,o[2]=a*i+l*n,o[3]=h*i+u*n,o[4]=a*s+l*r+c,o[5]=h*s+u*r+d,this},setTransform:function(t,e,i,n,s,r){var o=this.currentMatrix;return o[0]=t,o[1]=e,o[2]=i,o[3]=n,o[4]=s,o[5]=r,this},translate:function(t,e){var i=this.currentMatrix,n=i[0],s=i[1],r=i[2],o=i[3],a=i[4],h=i[5];return i[4]=n*t+r*e+a,i[5]=s*t+o*e+h,this},scale:function(t,e){var i=this.currentMatrix,n=i[0],s=i[1],r=i[2],o=i[3];return i[0]=n*t,i[1]=s*t,i[2]=r*e,i[3]=o*e,this},rotate:function(t){var e=this.currentMatrix,i=e[0],n=e[1],s=e[2],r=e[3],o=Math.sin(t),a=Math.cos(t);return e[0]=i*a+s*o,e[1]=n*a+r*o,e[2]=s*-o+s*a,e[3]=r*-o+r*a,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={originX:.5,originY:.5,_displayOriginX:0,_displayOriginY:0,displayOriginX:{get:function(){return this._displayOriginX},set:function(t){this._displayOriginX=t,this.originX=t/this.width}},displayOriginY:{get:function(){return this._displayOriginY},set:function(t){this._displayOriginY=t,this.originY=t/this.height}},setOrigin:function(t,e){return void 0===t&&(t=.5),void 0===e&&(e=t),this.originX=t,this.originY=e,this.updateDisplayOrigin()},setOriginFromFrame:function(){return this.frame&&this.frame.customPivot?(this.originX=this.frame.pivotX,this.originY=this.frame.pivotY,this.updateDisplayOrigin()):this.setOrigin()},setDisplayOrigin:function(t,e){return void 0===t&&(t=0),void 0===e&&(e=t),this.displayOriginX=t,this.displayOriginY=e,this},updateDisplayOrigin:function(){return this._displayOriginX=Math.round(this.originX*this.width),this._displayOriginY=Math.round(this.originY*this.height),this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(71),s={_scaleMode:n.DEFAULT,scaleMode:{get:function(){return this._scaleMode},set:function(t){t!==n.LINEAR&&t!==n.NEAREST||(this._scaleMode=t)}},setScaleMode:function(t){return this.scaleMode=t,this}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={scrollFactorX:1,scrollFactorY:1,setScrollFactor:function(t,e){return void 0===e&&(e=t),this.scrollFactorX=t,this.scrollFactorY=e,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={width:0,height:0,displayWidth:{get:function(){return this.scaleX*this.frame.realWidth},set:function(t){this.scaleX=t/this.frame.realWidth}},displayHeight:{get:function(){return this.scaleY*this.frame.realHeight},set:function(t){this.scaleY=t/this.frame.realHeight}},setSizeToFrame:function(t){return void 0===t&&(t=this.frame),this.width=t.realWidth,this.height=t.realHeight,this},setSize:function(t,e){return this.width=t,this.height=e,this},setDisplaySize:function(t,e){return this.displayWidth=t,this.displayHeight=e,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={texture:null,frame:null,setTexture:function(t,e){return this.texture=this.scene.sys.textures.get(t),this.setFrame(e)},setFrame:function(t){return this.frame=this.texture.get(t),this.frame.cutWidth&&this.frame.cutHeight?this.renderFlags|=8:this.renderFlags&=-9,this.frame.customPivot&&this.setOrigin(this.frame.pivotX,this.frame.pivotY),this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t>>16)+(65280&t)+((255&t)<<16)},n={_tintTL:16777215,_tintTR:16777215,_tintBL:16777215,_tintBR:16777215,clearTint:function(){return this.setTint(16777215),this},setTint:function(t,e,n,s){return void 0===t&&(t=16777215),void 0===e&&(e=t,n=t,s=t),this._tintTL=i(t),this._tintTR=i(e),this._tintBL=i(n),this._tintBR=i(s),this},tintTopLeft:{get:function(){return this._tintTL},set:function(t){this._tintTL=i(t)}},tintTopRight:{get:function(){return this._tintTR},set:function(t){this._tintTR=i(t)}},tintBottomLeft:{get:function(){return this._tintBL},set:function(t){this._tintBL=i(t)}},tintBottomRight:{get:function(){return this._tintBR},set:function(t){this._tintBR=i(t)}},tint:{set:function(t){this.setTint(t,t,t,t)}}};t.exports=n},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e={name:t.name,type:t.type,x:t.x,y:t.y,depth:t.depth,scale:{x:t.scaleX,y:t.scaleY},origin:{x:t.originX,y:t.originY},flipX:t.flipX,flipY:t.flipY,rotation:t.rotation,alpha:t.alpha,visible:t.visible,scaleMode:t.scaleMode,blendMode:t.blendMode,textureKey:"",frameKey:"",data:{}};return t.texture&&(e.textureKey=t.texture.key,e.frameKey=t.frame.name),e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(15),s=i(120),r=i(121),o={_scaleX:1,_scaleY:1,_rotation:0,x:0,y:0,z:0,w:0,scaleX:{get:function(){return this._scaleX},set:function(t){this._scaleX=t,0===this._scaleX?this.renderFlags&=-5:this.renderFlags|=4}},scaleY:{get:function(){return this._scaleY},set:function(t){this._scaleY=t,0===this._scaleY?this.renderFlags&=-5:this.renderFlags|=4}},angle:{get:function(){return r(this._rotation*n.RAD_TO_DEG)},set:function(t){this.rotation=r(t)*n.DEG_TO_RAD}},rotation:{get:function(){return this._rotation},set:function(t){this._rotation=s(t)}},setPosition:function(t,e,i,n){return void 0===t&&(t=0),void 0===e&&(e=t),void 0===i&&(i=0),void 0===n&&(n=0),this.x=t,this.y=e,this.z=i,this.w=n,this},setRotation:function(t){return void 0===t&&(t=0),this.rotation=t,this},setAngle:function(t){return void 0===t&&(t=0),this.angle=t,this},setScale:function(t,e){return void 0===t&&(t=1),void 0===e&&(e=t),this.scaleX=t,this.scaleY=e,this},setX:function(t){return void 0===t&&(t=0),this.x=t,this},setY:function(t){return void 0===t&&(t=0),this.y=t,this},setZ:function(t){return void 0===t&&(t=0),this.z=t,this},setW:function(t){return void 0===t&&(t=0),this.w=t,this}};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={_visible:!0,visible:{get:function(){return this._visible},set:function(t){t?(this._visible=!0,this.renderFlags|=1):(this._visible=!1,this.renderFlags&=-2)}},setVisible:function(t){return this.visible=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=0;i<t.length;i++)t[i].alpha+=e;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=0;i<t.length;i++)t[i].x+=e;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){for(var n=0;n<t.length;n++)t[n].x+=e,t[n].y+=i;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=0;i<t.length;i++)t[i].y+=e;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=6.28);for(var s=i,r=(n-i)/t.length,o=0;o<t.length;o++)t[o].x=e.x+e.radius*Math.cos(s),t[o].y=e.y+e.radius*Math.sin(s),s+=r;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=6.28);for(var s=i,r=(n-i)/t.length,o=e.width/2,a=e.height/2,h=0;h<t.length;h++)t[h].x=e.x+o*Math.cos(s),t[h].y=e.y+a*Math.sin(s),s+=r;return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(122),s=function(t,e){for(var i=n(e,t.length),s=0;s<t.length;s++){var r=t[s],o=i[s];r.x=o.x,r.y=o.y}return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(220),s=i(221),r=i(222),o=function(t,e,i){void 0===i&&(i=0);var o=n(e,!1,t.length);i>0?s(o,i):i<0&&r(o,Math.abs(i));for(var a=0;a<t.length;a++)t[a].x=o[a].x,t[a].y=o[a].y;return t};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(223),s=function(t,e,i){var s=n({x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2},i),r=n({x1:e.x2,y1:e.y2,x2:e.x3,y2:e.y3},i),o=n({x1:e.x3,y1:e.y3,x2:e.x1,y2:e.y1},i);s.pop(),r.pop(),o.pop(),s=s.concat(r,o);for(var a=s.length/t.length,h=0,l=0;l<t.length;l++){var u=t[l],c=s[Math.floor(h)];u.x=c.x,u.y=c.y,h+=a}return t};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){for(var n=0;n<t.length;n++)t[n].anims.play(e,i);return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(116),s=function(t,e){for(var i=0;i<t.length;i++)n(e,t[i]);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(123),s=function(t,e){for(var i=0;i<t.length;i++)n(e,t[i]);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(124),s=function(t,e){for(var i=0;i<t.length;i++)n(e,t[i]);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(118),s=function(t,e){for(var i=0;i<t.length;i++)n(e,t[i]);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(125),s=function(t,e){for(var i=0;i<t.length;i++)n(e,t[i]);return t};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=0);for(var n=0;n<t.length;n++)t[n].rotation+=e+n*i;return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(126),s=i(46),r=function(t,e,i){for(var r=e.x,o=e.y,a=0;a<t.length;a++){var h=t[a];n(h,r,o,i,Math.max(1,s(h.x,h.y,r,o)))}return t};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(126),s=function(t,e,i,s){var r=e.x,o=e.y;if(0===s)return t;for(var a=0;a<t.length;a++)n(t[a],r,o,i,s);return t};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=0;i<t.length;i++)t[i].scaleX+=e;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){for(var n=0;n<t.length;n++)t[n].scaleX+=e,t[n].scaleY+=i;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=0;i<t.length;i++)t[i].scaleY+=e;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=0);for(var n=0;n<t.length;n++)t[n].alpha=e+n*i;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=0;i<t.length;i++)t[i].setBlendMode(e);return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=0);for(var n=0;n<t.length;n++)t[n].depth=e+n*i;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){for(var n=0;n<t.length;n++)t[n].setInteractive(e,i);return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){for(var n=0;n<t.length;n++)t[n].setOrigin(e,i);return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=0);for(var n=0;n<t.length;n++)t[n].rotation=e+n*i;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){void 0===n&&(n=0),void 0===s&&(s=0);for(var r=0;r<t.length;r++)t[r].setScale(e+r*n,i+r*s);return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=0);for(var n=0;n<t.length;n++)t[n].scaleX=e+n*i;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=0);for(var n=0;n<t.length;n++)t[n].scaleY=e+n*i;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){for(var r=0;r<t.length;r++)t[r].setTint(e,i,n,s);return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=0;i<t.length;i++)t[i].visible=e;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=0);for(var n=0;n<t.length;n++)t[n].x=e+n*i;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){void 0===n&&(n=0),void 0===s&&(s=0);for(var r=0;r<t.length;r++)t[r].x=e+r*n,t[r].y=i+r*s;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=0);for(var n=0;n<t.length;n++)t[n].y=e+n*i;return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e,i,s,r){void 0===s&&(s=0),void 0===r&&(r=new n);var o,a;if(t.length>1){var h,l,u,c;if(0===s){var d=t.length-1;for(o=t[d].x,a=t[d].y,h=d-1;h>=0;h--)c=t[h],l=c.x,u=c.y,c.x=o,c.y=a,o=l,a=u;t[d].x=e,t[d].y=i}else{for(o=t[0].x,a=t[0].y,h=1;h<t.length;h++)c=t[h],l=c.x,u=c.y,c.x=o,c.y=a,o=l,a=u;t[0].x=e,t[0].y=i}}else o=t[0].x,a=t[0].y,t[0].x=e,t[0].y=i;return r.x=o,r.y=a,r};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(92),s=function(t){return n(t)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(224),s=function(t,e,i,s,r){void 0===r&&(r=!1);var o,a=Math.abs(s-i)/t.length;if(r)for(o=0;o<t.length;o++)t[o][e]+=n(o*a,i,s);else for(o=0;o<t.length;o++)t[o][e]=n(o*a,i,s);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(225),s=function(t,e,i,s,r){void 0===r&&(r=!1);var o,a=Math.abs(s-i)/t.length;if(r)for(o=0;o<t.length;o++)t[o][e]+=n(o*a,i,s);else for(o=0;o<t.length;o++)t[o][e]=n(o*a,i,s);return t};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){void 0===s&&(s=!1);var r,o=Math.abs(n-i)/t.length;if(s)for(r=0;r<t.length;r++)t[r][e]+=r*o;else for(r=0;r<t.length;r++)t[r][e]=r*o;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){for(var e=0;e<t.length;e++)t[e].visible=!t[e].visible;return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Animation:i(226),AnimationFrame:i(227),AnimationManager:i(228)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={BaseCache:i(230),CacheManager:i(231)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Controls:i(490),Scene2D:i(493),Sprite3D:i(495)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Fixed:i(491),Smoothed:i(492)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(4),r=new n({initialize:function(t){this.camera=s(t,"camera",null),this.left=s(t,"left",null),this.right=s(t,"right",null),this.up=s(t,"up",null),this.down=s(t,"down",null),this.zoomIn=s(t,"zoomIn",null),this.zoomOut=s(t,"zoomOut",null),this.zoomSpeed=s(t,"zoomSpeed",.01);var e=s(t,"speed",null);"number"==typeof e?(this.speedX=e,this.speedY=e):(this.speedX=s(t,"speed.x",0),this.speedY=s(t,"speed.y",0)),this._zoom=0,this.active=null!==this.camera},start:function(){return this.active=null!==this.camera,this},stop:function(){return this.active=!1,this},setCamera:function(t){return this.camera=t,this},update:function(t){if(this.active){void 0===t&&(t=1);var e=this.camera;this.up&&this.up.isDown?e.scrollY-=this.speedY*t|0:this.down&&this.down.isDown&&(e.scrollY+=this.speedY*t|0),this.left&&this.left.isDown?e.scrollX-=this.speedX*t|0:this.right&&this.right.isDown&&(e.scrollX+=this.speedX*t|0),this.zoomIn&&this.zoomIn.isDown?(e.zoom-=this.zoomSpeed,e.zoom<.1&&(e.zoom=.1)):this.zoomOut&&this.zoomOut.isDown&&(e.zoom+=this.zoomSpeed)}},destroy:function(){this.camera=null,this.left=null,this.right=null,this.up=null,this.down=null,this.zoomIn=null,this.zoomOut=null}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(4),r=new n({initialize:function(t){this.camera=s(t,"camera",null),this.left=s(t,"left",null),this.right=s(t,"right",null),this.up=s(t,"up",null),this.down=s(t,"down",null),this.zoomIn=s(t,"zoomIn",null),this.zoomOut=s(t,"zoomOut",null),this.zoomSpeed=s(t,"zoomSpeed",.01);var e=s(t,"acceleration",null);"number"==typeof e?(this.accelX=e,this.accelY=e):(this.accelX=s(t,"acceleration.x",0),this.accelY=s(t,"acceleration.y",0));var i=s(t,"drag",null);"number"==typeof i?(this.dragX=i,this.dragY=i):(this.dragX=s(t,"drag.x",0),this.dragY=s(t,"drag.y",0));var n=s(t,"maxSpeed",null);"number"==typeof n?(this.maxSpeedX=n,this.maxSpeedY=n):(this.maxSpeedX=s(t,"maxSpeed.x",0),this.maxSpeedY=s(t,"maxSpeed.y",0)),this._speedX=0,this._speedY=0,this._zoom=0,this.active=null!==this.camera},start:function(){return this.active=null!==this.camera,this},stop:function(){return this.active=!1,this},setCamera:function(t){return this.camera=t,this},update:function(t){if(this.active){void 0===t&&(t=1);var e=this.camera;this._speedX>0?(this._speedX-=this.dragX*t,this._speedX<0&&(this._speedX=0)):this._speedX<0&&(this._speedX+=this.dragX*t,this._speedX>0&&(this._speedX=0)),this._speedY>0?(this._speedY-=this.dragY*t,this._speedY<0&&(this._speedY=0)):this._speedY<0&&(this._speedY+=this.dragY*t,this._speedY>0&&(this._speedY=0)),this.up&&this.up.isDown?(this._speedY+=this.accelY,this._speedY>this.maxSpeedY&&(this._speedY=this.maxSpeedY)):this.down&&this.down.isDown&&(this._speedY-=this.accelY,this._speedY<-this.maxSpeedY&&(this._speedY=-this.maxSpeedY)),this.left&&this.left.isDown?(this._speedX+=this.accelX,this._speedX>this.maxSpeedX&&(this._speedX=this.maxSpeedX)):this.right&&this.right.isDown&&(this._speedX-=this.accelX,this._speedX<-this.maxSpeedX&&(this._speedX=-this.maxSpeedX)),this.zoomIn&&this.zoomIn.isDown?this._zoom=-this.zoomSpeed:this.zoomOut&&this.zoomOut.isDown?this._zoom=this.zoomSpeed:this._zoom=0,0!==this._speedX&&(e.scrollX-=this._speedX*t|0),0!==this._speedY&&(e.scrollY-=this._speedY*t|0),0!==this._zoom&&(e.zoom+=this._zoom,e.zoom<.1&&(e.zoom=.1))}},destroy:function(){this.camera=null,this.left=null,this.right=null,this.up=null,this.down=null,this.zoomIn=null,this.zoomOut=null}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Camera:i(128),CameraManager:i(494)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(128),s=i(0),r=i(1),o=i(11),a=i(35),h=new s({initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),this.currentCameraId=1,this.cameras=[],this.cameraPool=[],t.sys.settings.cameras?this.fromJSON(t.sys.settings.cameras):this.add(),this.main=this.cameras[0],this.baseScale=1},boot:function(){var t=this.systems.events;t.on("update",this.update,this),t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},add:function(t,e,i,s,r,o){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=this.scene.sys.game.config.width),void 0===s&&(s=this.scene.sys.game.config.height),void 0===r&&(r=!1),void 0===o&&(o="");var a=null;return this.cameraPool.length>0?(a=this.cameraPool.pop(),a.setViewport(t,e,i,s)):a=new n(t,e,i,s),a.setName(o),a.setScene(this.scene),this.cameras.push(a),r&&(this.main=a),a._id=this.currentCameraId,this.currentCameraId=this.currentCameraId<<1,a},addExisting:function(t){var e=this.cameras.indexOf(t),i=this.cameraPool.indexOf(t);return e<0&&i>=0?(this.cameras.push(t),this.cameraPool.slice(i,1),t):null},fromJSON:function(t){Array.isArray(t)||(t=[t]);for(var e=this.scene.sys.game.config.width,i=this.scene.sys.game.config.height,n=0;n<t.length;n++){var s=t[n],o=r(s,"x",0),a=r(s,"y",0),h=r(s,"width",e),l=r(s,"height",i),u=this.add(o,a,h,l);u.name=r(s,"name",""),u.zoom=r(s,"zoom",1),u.rotation=r(s,"rotation",0),u.scrollX=r(s,"scrollX",0),u.scrollY=r(s,"scrollY",0),u.roundPixels=r(s,"roundPixels",!1);var c=r(s,"backgroundColor",!1);c&&u.setBackgroundColor(c);var d=r(s,"bounds",null);if(d){var f=r(d,"x",0),p=r(d,"y",0),v=r(d,"width",e),g=r(d,"height",i);u.setBounds(f,p,v,g)}}return this},getCamera:function(t){return this.cameras.forEach(function(e){if(e.name===t)return e}),null},getCameraBelowPointer:function(t){for(var e=this.cameras,i=e.length-1;i>=0;i--){var n=e[i];if(n.inputEnabled&&a(n,t.x,t.y))return n}},remove:function(t){var e=this.cameras.indexOf(t);e>=0&&this.cameras.length>1&&(this.cameraPool.push(this.cameras[e]),this.cameras.splice(e,1),this.main===t&&(this.main=this.cameras[0]))},render:function(t,e,i){for(var n=this.cameras,s=this.baseScale,r=0,o=n.length;r<o;++r){var a=n[r];a.preRender(s,t.config.resolution),t.render(this.scene,e,i,a)}},resetAll:function(){for(;this.cameras.length>0;)this.cameraPool.push(this.cameras.pop());return this.main=this.add(),this.main},update:function(t,e){for(var i=0,n=this.cameras.length;i<n;++i)this.cameras[i].update(t,e)},shutdown:function(){},destroy:function(){this.main=void 0;for(var t=0;t<this.cameras.length;t++)this.cameras[t].destroy();for(t=0;t<this.cameraPool.length;t++)this.cameraPool[t].destroy();this.cameras=[],this.cameraPool=[],this.scene=void 0}});o.register("CameraManager",h,"cameras"),t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Camera:i(129),CameraManager:i(499),OrthographicCamera:i(237),PerspectiveCamera:i(238)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(497),s=i(498),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchSprite(e,s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||t.drawImage(e,s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(237),r=i(238),o=i(11),a=new n({initialize:function(t){this.scene=t,this.systems=t.sys,this.cameras=[],t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this)},boot:function(){var t=this.systems.events;t.on("update",this.update,this),t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},add:function(t,e,i){return this.addPerspectiveCamera(t,e,i)},addOrthographicCamera:function(t,e){var i=this.scene.sys.game.config;void 0===t&&(t=i.width),void 0===e&&(e=i.height);var n=new s(this.scene,t,e);return this.cameras.push(n),n},addPerspectiveCamera:function(t,e,i){var n=this.scene.sys.game.config;void 0===t&&(t=80),void 0===e&&(e=n.width),void 0===i&&(i=n.height);var s=new r(this.scene,t,e,i);return this.cameras.push(s),s},getCamera:function(t){return this.cameras.forEach(function(e){if(e.name===t)return e}),null},removeCamera:function(t){var e=this.cameras.indexOf(t);-1!==e&&this.cameras.splice(e,1)},removeAll:function(){for(;this.cameras.length>0;){this.cameras.pop().destroy()}return this.main},update:function(t,e){for(var i=0,n=this.cameras.length;i<n;++i)this.cameras[i].update(t,e)},shutdown:function(){},destroy:function(){this.scene=void 0}});o.register("CameraManager3D",a,"cameras3d"),t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={GenerateTexture:i(239),Palettes:i(501)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={ARNE16:i(240),C64:i(502),CGA:i(503),JMP:i(504),MSX:i(505)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={0:"#000",1:"#fff",2:"#8b4131",3:"#7bbdc5",4:"#8b41ac",5:"#6aac41",6:"#3931a4",7:"#d5de73",8:"#945a20",9:"#5a4100",A:"#bd736a",B:"#525252",C:"#838383",D:"#acee8b",E:"#7b73de",F:"#acacac"}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={0:"#000",1:"#2234d1",2:"#0c7e45",3:"#44aacc",4:"#8a3622",5:"#5c2e78",6:"#aa5c3d",7:"#b5b5b5",8:"#5e606e",9:"#4c81fb",A:"#6cd947",B:"#7be2f9",C:"#eb8a60",D:"#e23d69",E:"#ffd93f",F:"#fff"}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={0:"#000",1:"#191028",2:"#46af45",3:"#a1d685",4:"#453e78",5:"#7664fe",6:"#833129",7:"#9ec2e8",8:"#dc534b",9:"#e18d79",A:"#d6b97b",B:"#e9d8a1",C:"#216c4b",D:"#d365c8",E:"#afaab9",F:"#f5f4eb"}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={0:"#000",1:"#191028",2:"#46af45",3:"#a1d685",4:"#453e78",5:"#7664fe",6:"#833129",7:"#9ec2e8",8:"#dc534b",9:"#e18d79",A:"#d6b97b",B:"#e9d8a1",C:"#216c4b",D:"#d365c8",E:"#afaab9",F:"#fff"}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Path:i(507),CubicBezier:i(241),Curve:i(75),Ellipse:i(243),Line:i(245),Spline:i(246)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(241),r=i(243),o=i(9),a=i(245),h=i(508),l=i(8),u=i(246),c=i(6),d=new n({initialize:function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.name="",this.curves=[],this.cacheLengths=[],this.autoClose=!1,this.startPoint=new c,this._tmpVec2A=new c,this._tmpVec2B=new c,"object"==typeof t?this.fromJSON(t):this.startPoint.set(t,e)},add:function(t){return this.curves.push(t),this},circleTo:function(t,e,i){return void 0===e&&(e=!1),this.ellipseTo(t,t,0,360,e,i)},closePath:function(){var t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);return t.equals(e)||this.curves.push(new a(e,t)),this},cubicBezierTo:function(t,e,i,n,r,o){var a,h,l,u=this.getEndPoint();return t instanceof c?(a=t,h=e,l=i):(a=new c(i,n),h=new c(r,o),l=new c(t,e)),this.add(new s(u,a,h,l))},destroy:function(){this.curves.length=0,this.cacheLengths.length=0,this.startPoint=void 0},draw:function(t,e){for(var i=0;i<this.curves.length;i++){var n=this.curves[i];n.active&&n.draw(t,e)}return t},ellipseTo:function(t,e,i,n,s,o){var a=new r(0,0,t,e,i,n,s,o),h=this.getEndPoint(this._tmpVec2A),l=a.getStartPoint(this._tmpVec2B);return h.subtract(l),a.x=h.x,a.y=h.y,this.add(a)},fromJSON:function(t){this.curves=[],this.cacheLengths=[],this.startPoint.set(t.x,t.y),this.autoClose=t.autoClose;for(var e=0;e<t.curves.length;e++){var i=t.curves[e];switch(i.type){case"LineCurve":this.add(a.fromJSON(i));break;case"EllipseCurve":this.add(r.fromJSON(i));break;case"SplineCurve":this.add(u.fromJSON(i));break;case"CubicBezierCurve":this.add(s.fromJSON(i))}}return this},getBounds:function(t,e){void 0===t&&(t=new l),void 0===e&&(e=16),t.x=Number.MAX_VALUE,t.y=Number.MAX_VALUE;for(var i=new l,n=Number.MIN_SAFE_INTEGER,s=Number.MIN_SAFE_INTEGER,r=0;r<this.curves.length;r++){var o=this.curves[r];o.active&&(o.getBounds(i,e),t.x=Math.min(t.x,i.x),t.y=Math.min(t.y,i.y),n=Math.max(n,i.right),s=Math.max(s,i.bottom))}return t.right=n,t.bottom=s,t},getCurveLengths:function(){if(this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var t=[],e=0,i=0;i<this.curves.length;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t},getEndPoint:function(t){return void 0===t&&(t=new c),this.curves.length>0?this.curves[this.curves.length-1].getPoint(1,t):t.copy(this.startPoint),t},getLength:function(){var t=this.getCurveLengths();return t[t.length-1]},getPoint:function(t,e){void 0===e&&(e=new c);for(var i=t*this.getLength(),n=this.getCurveLengths(),s=0;s<n.length;){if(n[s]>=i){var r=n[s]-i,o=this.curves[s],a=o.getLength(),h=0===a?0:1-r/a;return o.getPointAt(h,e)}s++}return null},getPoints:function(t){void 0===t&&(t=12);for(var e,i=[],n=0;n<this.curves.length;n++){var s=this.curves[n];if(s.active)for(var r=s.getResolution(t),o=s.getPoints(r),a=0;a<o.length;a++){var h=o[a];e&&e.equals(h)||(i.push(h),e=h)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i},getRandomPoint:function(t){return void 0===t&&(t=new c),this.getPoint(Math.random(),t)},getSpacedPoints:function(t){void 0===t&&(t=40);for(var e=[],i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e},getStartPoint:function(t){return void 0===t&&(t=new c),t.copy(this.startPoint)},lineTo:function(t,e){t instanceof c?this._tmpVec2B.copy(t):this._tmpVec2B.set(t,e);var i=this.getEndPoint(this._tmpVec2A);return this.add(new a([i.x,i.y,this._tmpVec2B.x,this._tmpVec2B.y]))},splineTo:function(t){return t.unshift(this.getEndPoint()),this.add(new u(t))},moveTo:function(t,e){return this.add(new h(t,e))},toJSON:function(){for(var t=[],e=0;e<this.curves.length;e++)t.push(this.curves[e].toJSON());return{type:"Path",x:this.startPoint.x,y:this.startPoint.y,autoClose:this.autoClose,curves:t}},updateArcLengths:function(){this.cacheLengths=[],this.getCurveLengths()}});o.register("path",function(t,e){return new d(t,e)}),t.exports=d},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(6),r=new n({initialize:function(t,e){this.active=!1,this.p0=new s(t,e)},getPoint:function(t,e){return void 0===e&&(e=new s),e.copy(this.p0)},getPointAt:function(t,e){return this.getPoint(t,e)},getResolution:function(){return 1},getLength:function(){return 0},toJSON:function(){return{type:"MoveTo",points:[this.p0.x,this.p0.y]}}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={DataManager:i(91),DataManagerPlugin:i(510)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(91),r=i(11),o=new n({Extends:s,initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),s.call(this,this.scene,t.sys.events)},boot:function(){var t=this.systems.events;t.on("shutdown",this.shutdownPlugin,this),t.on("destroy",this.destroyPlugin,this)},shutdownPlugin:function(){},destroyPlugin:function(){this.destroy(),this.scene=void 0,this.systems=void 0}});r.register("DataManagerPlugin",o,"data"),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Align:i(512),Bounds:i(527),Canvas:i(530),Color:i(112),Masks:i(533)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(513),To:i(514)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={BottomCenter:i(203),BottomLeft:i(204),BottomRight:i(205),Center:i(206),LeftCenter:i(208),QuickSet:i(201),RightCenter:i(209),TopCenter:i(210),TopLeft:i(211),TopRight:i(212)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={BottomCenter:i(515),BottomLeft:i(516),BottomRight:i(517),LeftBottom:i(518),LeftCenter:i(519),LeftTop:i(520),RightBottom:i(521),RightCenter:i(522),RightTop:i(523),TopCenter:i(524),TopLeft:i(525),TopRight:i(526)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=i(52),r=i(53),o=i(33),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,s(e)+i),o(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=i(28),r=i(29),o=i(33),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,s(e)-i),o(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=i(30),r=i(31),o=i(33),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,s(e)+i),o(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=i(28),r=i(27),o=i(31),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)-i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(55),s=i(28),r=i(54),o=i(31),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)-i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(28),s=i(32),r=i(31),o=i(33),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,n(e)-i),o(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=i(30),r=i(27),o=i(29),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)+i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(55),s=i(30),r=i(54),o=i(29),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)+i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(30),s=i(32),r=i(29),o=i(33),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,n(e)+i),o(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(52),s=i(32),r=i(27),o=i(53),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,n(e)+i),r(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(28),s=i(32),r=i(27),o=i(29),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,n(e)-i),r(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(30),s=i(32),r=i(27),o=i(31),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,n(e)+i),r(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={CenterOn:i(207),GetBottom:i(26),GetCenterX:i(52),GetCenterY:i(55),GetLeft:i(28),GetOffsetX:i(528),GetOffsetY:i(529),GetRight:i(30),GetTop:i(32),SetBottom:i(27),SetCenterX:i(53),SetCenterY:i(54),SetLeft:i(29),SetRight:i(31),SetTop:i(33)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.width*t.originX};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.height*t.originY};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Interpolation:i(247),Pool:i(23),Smoothing:i(132),TouchAction:i(531),UserSelect:i(532)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e="none"),t.style.msTouchAction=e,t.style["ms-touch-action"]=e,t.style["touch-action"]=e,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e="none"),["-webkit-","-khtml-","-moz-","-ms-",""].forEach(function(i){t.style[i+"user-select"]=e}),t.style["-webkit-touch-callout"]=e,t.style["-webkit-tap-highlight-color"]="rgba(0, 0, 0, 0)",t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={BitmapMask:i(534),GeometryMask:i(535)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){var i=t.sys.game.renderer;if(this.bitmapMask=e,this.maskRenderTarget=null,this.mainRenderTarget=null,this.maskTexture=null,this.mainTexture=null,this.dirty=!0,this.mainFramebuffer=null,this.maskFramebuffer=null,i.gl){var n=i.width,s=i.height,r=0==(n&n-1)&&0==(s&s-1),o=i.gl,a=r?o.REPEAT:o.CLAMP_TO_EDGE,h=o.LINEAR;this.mainTexture=i.createTexture2D(0,h,h,a,a,o.RGBA,null,n,s),this.maskTexture=i.createTexture2D(0,h,h,a,a,o.RGBA,null,n,s),this.mainFramebuffer=i.createFramebuffer(n,s,this.mainTexture,!1),this.maskFramebuffer=i.createFramebuffer(n,s,this.maskTexture,!1),i.onContextRestored(function(t){var e=t.width,i=t.height,n=0==(e&e-1)&&0==(i&i-1),s=t.gl,r=n?s.REPEAT:s.CLAMP_TO_EDGE,o=s.LINEAR;this.mainTexture=t.createTexture2D(0,o,o,r,r,s.RGBA,null,e,i),this.maskTexture=t.createTexture2D(0,o,o,r,r,s.RGBA,null,e,i),this.mainFramebuffer=t.createFramebuffer(e,i,this.mainTexture,!1),this.maskFramebuffer=t.createFramebuffer(e,i,this.maskTexture,!1)},this)}},setBitmap:function(t){this.bitmapMask=t},preRenderWebGL:function(t,e,i){t.pipelines.BitmapMaskPipeline.beginMask(this,e,i)},postRenderWebGL:function(t){t.pipelines.BitmapMaskPipeline.endMask(this)},preRenderCanvas:function(){},postRenderCanvas:function(){}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){this.geometryMask=e},setShape:function(t){this.geometryMask=t},preRenderWebGL:function(t,e,i){var n=t.gl,s=this.geometryMask;t.flush(),n.enable(n.STENCIL_TEST),n.clear(n.STENCIL_BUFFER_BIT),n.colorMask(!1,!1,!1,!1),n.stencilFunc(n.NOTEQUAL,1,1),n.stencilOp(n.REPLACE,n.REPLACE,n.REPLACE),s.renderWebGL(t,s,0,i),t.flush(),n.colorMask(!0,!0,!0,!0),n.stencilFunc(n.EQUAL,1,1),n.stencilOp(n.INVERT,n.INVERT,n.INVERT)},postRenderWebGL:function(t){var e=t.gl;t.flush(),e.disable(e.STENCIL_TEST)},preRenderCanvas:function(t,e,i){var n=this.geometryMask;t.currentContext.save(),n.renderCanvas(t,n,0,i,null,!0),t.currentContext.clip()},postRenderCanvas:function(t){t.currentContext.restore()}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={AddToDOM:i(135),DOMContentLoaded:i(248),ParseXML:i(249),RemoveFromDOM:i(250),RequestAnimationFrame:i(251)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(13),r=i(11),o=new n({Extends:s,initialize:function(){s.call(this)},shutdown:function(){this.removeAllListeners()},destroy:function(){this.removeAllListeners()}});r.register("EventEmitter",o,"events"),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(135),s=i(228),r=i(231),o=i(23),a=i(0),h=i(539),l=i(540),u=i(91),c=i(557),d=i(558),f=i(248),p=i(13),v=i(258),g=i(3),y=i(11),m=i(270),x=i(274),b=i(281),w=i(581),T=i(582),S=new a({initialize:function(t){this.config=new h(t),this.renderer=null,this.canvas=null,this.context=null,this.isBooted=!1,this.isRunning=!1,this.events=new p,this.anims=new s(this),this.textures=new b(this),this.cache=new r(this),this.registry=new u(this),this.input=new v(this,this.config),this.scene=new m(this,this.config.sceneConfig),this.device=d,this.sound=x.create(this),this.loop=new w(this,this.config.fps),this.plugins=new y(this,this.config),this.onStepCallback=g,f(this.boot.bind(this))},boot:function(){this.isBooted=!0,this.config.preBoot(),l(this),c(this),n(this.canvas,this.config.parent),this.events.emit("boot"),this.events.once("ready",this.start,this)},start:function(){this.isRunning=!0,this.config.postBoot(),this.loop.start(this.step.bind(this)),T(this.events),this.events.on("hidden",this.onHidden,this),this.events.on("visible",this.onVisible,this),this.events.on("blur",this.onBlur,this),this.events.on("focus",this.onFocus,this)},step:function(t,e){this.input.update(t,e),this.sound.update(t,e),this.onStepCallback(),this.scene.update(t,e);var i=this.renderer;i.preRender(),this.events.emit("prerender",i),this.scene.render(i),i.postRender(),this.events.emit("postrender",i)},onHidden:function(){this.loop.pause(),this.events.emit("pause")},onVisible:function(){this.loop.resume(),this.events.emit("resume")},onBlur:function(){this.loop.blur()},onFocus:function(){this.loop.focus()},destroy:function(t){this.loop.destroy(),this.scene.destroy(),this.renderer.destroy(),this.events.emit("destroy"),this.events.removeAllListeners(),this.onStepCallback=null,t&&o.remove(this.canvas)}});t.exports=S},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(24),r=i(4),o=i(15),a=i(3),h=i(252),l=i(114),u=new n({initialize:function(t){void 0===t&&(t={});var e=["#ff0000","#ffff00","#00ff00","#00ffff","#000000"];this.width=r(t,"width",1024),this.height=r(t,"height",768),this.zoom=r(t,"zoom",1),this.resolution=r(t,"resolution",1),this.renderType=r(t,"type",s.AUTO),this.parent=r(t,"parent",null),this.canvas=r(t,"canvas",null),this.canvasStyle=r(t,"canvasStyle",null),this.sceneConfig=r(t,"scene",null),this.seed=r(t,"seed",[(Date.now()*Math.random()).toString()]),o.RND.init(this.seed),this.gameTitle=r(t,"title",""),this.gameURL=r(t,"url","https://phaser.io"),this.gameVersion=r(t,"version",""),this.inputKeyboard=r(t,"input.keyboard",!0),this.inputKeyboardEventTarget=r(t,"input.keyboard.target",window),this.inputMouse=r(t,"input.mouse",!0),this.inputMouseEventTarget=r(t,"input.mouse.target",null),this.inputMouseCapture=r(t,"input.mouse.capture",!0),this.inputTouch=r(t,"input.touch",!0),this.inputTouchEventTarget=r(t,"input.touch.target",null),this.inputTouchCapture=r(t,"input.touch.capture",!0),this.inputGamepad=r(t,"input.gamepad",!1),this.disableContextMenu=r(t,"disableContextMenu",!1),this.audio=r(t,"audio"),this.hideBanner=!1===r(t,"banner",null),this.hidePhaser=r(t,"banner.hidePhaser",!1),this.bannerTextColor=r(t,"banner.text","#ffffff"),this.bannerBackgroundColor=r(t,"banner.background",e),""===this.gameTitle&&this.hidePhaser&&(this.hideBanner=!0),this.fps=r(t,"fps",null),this.pixelArt=r(t,"pixelArt",!1),this.transparent=r(t,"transparent",!1),this.clearBeforeRender=r(t,"clearBeforeRender",!0),this.backgroundColor=l(r(t,"backgroundColor",0)),this.preBoot=r(t,"callbacks.preBoot",a),this.postBoot=r(t,"callbacks.postBoot",a),this.physics=r(t,"physics",{}),this.defaultPhysicsSystem=r(this.physics,"default",!1),this.loaderBaseURL=r(t,"loader.baseURL",""),this.loaderPath=r(t,"loader.path",""),this.loaderEnableParallel=r(t,"loader.enableParallel",!0),this.loaderMaxParallelDownloads=r(t,"loader.maxParallelDownloads",4),this.loaderCrossOrigin=r(t,"loader.crossOrigin",void 0),this.loaderResponseType=r(t,"loader.responseType",""),this.loaderAsync=r(t,"loader.async",!0),this.loaderUser=r(t,"loader.user",""),this.loaderPassword=r(t,"loader.password",""),this.loaderTimeout=r(t,"loader.timeout",0),this.defaultPlugins=r(t,"plugins",h.DefaultScene);var i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAg";this.defaultImage=r(t,"images.default",i+"AQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg=="),this.missingImage=r(t,"images.missing",i+"CAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg==")}});t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(247),s=i(23),r=i(24),o=i(136),a=function(t){var e=t.config;if(e.renderType===r.CANVAS||e.renderType!==r.CANVAS&&!o.webGL){if(!o.canvas)throw new Error("Cannot create Canvas or WebGL context, aborting.");e.renderType=r.CANVAS}else e.renderType=r.WEBGL;e.pixelArt&&s.disableSmoothing(),e.canvas?t.canvas=e.canvas:t.canvas=s.create(t,e.width,e.height,e.renderType),e.canvasStyle&&(t.canvas.style=e.canvasStyle),e.pixelArt&&n.setCrisp(t.canvas),1!==e.zoom&&(t.canvas.style.width=(e.width*e.zoom).toString()+"px",t.canvas.style.height=(e.height*e.zoom).toString()+"px");var a,h;a=i(541),h=i(546),e.renderType===r.WEBGL?(t.renderer=new h(t),t.context=null):(t.renderer=new a(t),t.context=t.renderer.gameContext)};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(542),s=i(543),r=i(0),o=i(24),a=i(544),h=i(545),l=i(71),u=i(132),c=new r({initialize:function(t){this.game=t,this.type=o.CANVAS,this.drawCount=0,this.width=t.config.width,this.height=t.config.height,this.config={clearBeforeRender:t.config.clearBeforeRender,pixelArt:t.config.pixelArt,backgroundColor:t.config.backgroundColor,resolution:t.config.resolution,autoResize:t.config.autoResize},this.scaleMode=t.config.pixelArt?l.NEAREST:l.LINEAR,this.gameCanvas=t.canvas,this.gameContext=this.gameCanvas.getContext("2d"),this.currentContext=this.gameContext,this.drawImage=a,this.blitImage=n,this.blendModes=h(),this.currentAlpha=1,this.currentBlendMode=0,this.currentScaleMode=0,this.snapshotCallback=null,this.snapshotType=null,this.snapshotEncoder=null,this.init()},init:function(){this.resize(this.width,this.height)},resize:function(t,e){var i=this.config.resolution;this.width=t*i,this.height=e*i,this.gameCanvas.width=this.width,this.gameCanvas.height=this.height,this.config.autoResize&&(this.gameCanvas.style.width=this.width/i+"px",this.gameCanvas.style.height=this.height/i+"px"),this.scaleMode===l.NEAREST&&u.disable(this.gameContext)},onContextLost:function(){},onContextRestored:function(){},resetTransform:function(){this.currentContext.setTransform(1,0,0,1,0,0)},setBlendMode:function(t){return this.currentBlendMode!==t&&(this.currentContext.globalCompositeOperation=t,this.currentBlendMode=t),this.currentBlendMode},setAlpha:function(t){return this.currentAlpha!==t&&(this.currentContext.globalAlpha=t,this.currentAlpha=t),this.currentAlpha},preRender:function(){var t=this.gameContext,e=this.config,i=this.width,n=this.height;e.clearBeforeRender&&t.clearRect(0,0,i,n),e.transparent||(t.fillStyle=e.backgroundColor.rgba,t.fillRect(0,0,i,n)),this.drawCount=0},render:function(t,e,i,n){var s=t.sys.context,r=0!==n.x||0!==n.y||n.width!==s.canvas.width||n.height!==s.canvas.height,o=e.list,a=this.config.resolution;this.currentContext=s,n.transparent||(s.fillStyle=n.backgroundColor.rgba,s.fillRect(n.x,n.y,n.width,n.height)),1!==this.currentAlpha&&(s.globalAlpha=1,this.currentAlpha=1),0!==this.currentBlendMode&&(s.globalCompositeOperation="source-over",this.currentBlendMode=0),this.currentScaleMode=0,this.drawCount+=o.length,r&&(s.save(),s.beginPath(),s.rect(n.x*a,n.y*a,n.width*a,n.height*a),s.clip());var h=n.matrix.matrix;s.setTransform(h[0],h[1],h[2],h[3],h[4],h[5]);for(var l=0;l<o.length;l++){var u=o[l];u.mask&&u.mask.preRenderCanvas(this,u,n),u.renderCanvas(this,u,i,n),u.mask&&u.mask.postRenderCanvas(this,u,n)}s.setTransform(1,0,0,1,0,0),(n._fadeAlpha>0||n._flashAlpha>0)&&(s.globalCompositeOperation="source-over",s.fillStyle="rgb("+255*n._fadeRed+","+255*n._fadeGreen+","+255*n._fadeBlue+")",s.globalAlpha=n._fadeAlpha,s.fillRect(n.x,n.y,n.width,n.height),s.fillStyle="rgb("+255*n._flashRed+","+255*n._flashGreen+","+255*n._flashBlue+")",s.globalAlpha=n._flashAlpha,s.fillRect(n.x,n.y,n.width,n.height),s.globalAlpha=1),r&&s.restore()},postRender:function(){var t=this.gameContext;t.globalAlpha=1,t.globalCompositeOperation="source-over",this.currentAlpha=1,this.currentBlendMode=0,this.snapshotCallback&&(this.snapshotCallback(s(this.gameCanvas,this.snapshotType,this.snapshotEncoder)),this.snapshotCallback=null)},snapshot:function(t,e,i){this.snapshotCallback=t,this.snapshotType=e,this.snapshotEncoder=i},destroy:function(){this.gameCanvas=null,this.gameContext=null,this.game=null}});t.exports=c},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=this.currentContext,s=i.canvasData;n.drawImage(i.source.image,s.sx,s.sy,s.sWidth,s.sHeight,t,e,s.dWidth,s.dHeight)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===e&&(e="image/png"),void 0===i&&(i=.92);var n=t.toDataURL(e,i),s=new Image;return s.src=n,s};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=this.currentContext,n=t.frame,s=n.canvasData;this.currentBlendMode!==t.blendMode&&(this.currentBlendMode=t.blendMode,i.globalCompositeOperation=this.blendModes[t.blendMode]),this.currentAlpha!==t.alpha&&(this.currentAlpha=t.alpha,i.globalAlpha=t.alpha),this.currentScaleMode!==t.scaleMode&&(this.currentScaleMode=t.scaleMode);var r=n.x,o=n.y,a=1,h=1;t.flipX?(a=-1,r-=s.dWidth-t.displayOriginX):r-=t.displayOriginX,t.flipY?(h=-1,o-=s.dHeight-t.displayOriginY):o-=t.displayOriginY,i.save(),i.translate(t.x-e.scrollX*t.scrollFactorX,t.y-e.scrollY*t.scrollFactorY),i.rotate(t.rotation),i.scale(t.scaleX,t.scaleY),i.scale(a,h),i.drawImage(n.source.image,s.sx,s.sy,s.sWidth,s.sHeight,r,o,s.dWidth,s.dHeight),i.restore()};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(51),s=i(253),r=function(){var t=[],e=s.supportNewBlendModes;return t[n.NORMAL]="source-over",t[n.ADD]="lighter",t[n.MULTIPLY]=e?"multiply":"source-over",t[n.SCREEN]=e?"screen":"source-over",t[n.OVERLAY]=e?"overlay":"source-over",t[n.DARKEN]=e?"darken":"source-over",t[n.LIGHTEN]=e?"lighten":"source-over",t[n.COLOR_DODGE]=e?"color-dodge":"source-over",t[n.COLOR_BURN]=e?"color-burn":"source-over",t[n.HARD_LIGHT]=e?"hard-light":"source-over",t[n.SOFT_LIGHT]=e?"soft-light":"source-over",t[n.DIFFERENCE]=e?"difference":"source-over",t[n.EXCLUSION]=e?"exclusion":"source-over",t[n.HUE]=e?"hue":"source-over",t[n.SATURATION]=e?"saturation":"source-over",t[n.COLOR]=e?"color":"source-over",t[n.LUMINOSITY]=e?"luminosity":"source-over",t};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(24),r=i(137),o=i(47),a=i(547),h=i(548),l=i(551),u=i(256),c=i(257),d=new n({initialize:function(t){var e=this,i={alpha:t.config.transparent,depth:!1,antialias:t.config.antialias,premultipliedAlpha:t.config.transparent,stencil:!0,preserveDrawingBuffer:t.config.preserveDrawingBuffer,failIfMajorPerformanceCaveat:!1,powerPreference:t.config.powerPreference};this.config={clearBeforeRender:t.config.clearBeforeRender,pixelArt:t.config.pixelArt,backgroundColor:t.config.backgroundColor,contextCreation:i,resolution:t.config.resolution,autoResize:t.config.autoResize},this.game=t,this.type=s.WEBGL,this.width=t.config.width,this.height=t.config.height,this.canvas=t.canvas,this.lostContextCallbacks=[],this.restoredContextCallbacks=[],this.blendModes=[],this.nativeTextures=[],this.contextLost=!1,this.pipelines=null,this.snapshotState={callback:null,type:null,encoder:null},this.currentActiveTextureUnit=0,this.currentTextures=new Array(16),this.currentFramebuffer=null,this.currentPipeline=null,this.currentProgram=null,this.currentVertexBuffer=null,this.currentIndexBuffer=null,this.currentBlendMode=1/0,this.currentScissorEnabled=!1,this.currentScissor=new Uint32Array([0,0,this.width,this.height]),this.currentScissorIdx=0,this.scissorStack=new Uint32Array(4e3),this.canvas.addEventListener("webglcontextlost",function(t){e.contextLost=!0,t.preventDefault();for(var i=0;i<e.lostContextCallbacks.length;++i){var n=e.lostContextCallbacks[i];n[0].call(n[1],e)}},!1),this.canvas.addEventListener("webglcontextrestored",function(){e.contextLost=!1,e.init(e.config);for(var t=0;t<e.restoredContextCallbacks.length;++t){var i=e.restoredContextCallbacks[t];i[0].call(i[1],e)}},!1),this.gl=null,this.supportedExtensions=null,this.extensions={},this.init(this.config)},init:function(t){var e=this.canvas,i=t.backgroundColor,n=e.getContext("webgl",t.contextCreation)||e.getContext("experimental-webgl",t.contextCreation);if(!n)throw this.contextLost=!0,new Error("This browser does not support WebGL. Try using the Canvas pipeline.");this.gl=n;for(var r=0;r<=16;r++)this.blendModes.push({func:[n.ONE,n.ONE_MINUS_SRC_ALPHA],equation:n.FUNC_ADD});this.blendModes[1].func=[n.ONE,n.DST_ALPHA],this.blendModes[2].func=[n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA],this.blendModes[3].func=[n.ONE,n.ONE_MINUS_SRC_COLOR],this.supportedExtensions=n.getSupportedExtensions(),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.disable(n.SCISSOR_TEST),n.enable(n.BLEND),n.clearColor(i.redGL,i.greenGL,i.blueGL,1);for(var o=0;o<this.currentTextures.length;++o)this.currentTextures[o]=null;return this.pipelines={},this.addPipeline("TextureTintPipeline",new c(this.game,n,this)),this.addPipeline("FlatTintPipeline",new l(this.game,n,this)),this.addPipeline("BitmapMaskPipeline",new h(this.game,n,this)),this.addPipeline("Light2D",new u(this.game,n,this)),this.setBlendMode(s.BlendModes.NORMAL),this.resize(this.width,this.height),this},resize:function(t,e){var i=this.gl,n=this.pipelines,s=this.config.resolution;this.width=t*s,this.height=e*s,this.canvas.width=this.width,this.canvas.height=this.height,this.config.autoResize&&(this.canvas.style.width=this.width/s+"px",this.canvas.style.height=this.height/s+"px"),i.viewport(0,0,this.width,this.height);for(var r in n)n[r].resize(t,e,s);return this},onContextRestored:function(t,e){return this.restoredContextCallbacks.push([t,e]),this},onContextLost:function(t,e){return this.lostContextCallbacks.push([t,e]),this},hasExtension:function(t){return!!this.supportedExtensions&&this.supportedExtensions.indexOf(t)},getExtension:function(t){return this.hasExtension(t)?(t in this.extensions||(this.extensions[t]=this.gl.getExtension(t)),this.extensions[t]):null},flush:function(){this.currentPipeline&&this.currentPipeline.flush()},hasPipeline:function(t){return t in this.pipelines},getPipeline:function(t){return this.hasPipeline(t)?this.pipelines[t]:null},removePipeline:function(t){return delete this.pipelines[t],this},addPipeline:function(t,e){return this.hasPipeline(t)?console.warn("Pipeline",t," already exists."):this.pipelines[t]=e,e.name=t,this.pipelines[t].resize(this.width,this.height,this.config.resolution),this},setScissor:function(t,e,i,n){var s=this.gl,r=this.currentScissor,o=0===t&&0===e&&i===s.canvas.width&&n===s.canvas.height&&i>=0&&n>=0;return r[0]===t&&r[1]===e&&r[2]===i&&r[3]===n||this.flush(),r[0]=t,r[1]=e,r[2]=i,r[3]=n,this.currentScissorEnabled=o,o?void s.disable(s.SCISSOR_TEST):(s.enable(s.SCISSOR_TEST),s.scissor(t,s.drawingBufferHeight-e-n,i,n),this)},pushScissor:function(t,e,i,n){var s=this.scissorStack,r=this.currentScissorIdx,o=this.currentScissor;return s[r+0]=o[0],s[r+1]=o[1],s[r+2]=o[2],s[r+3]=o[3],this.currentScissorIdx+=4,this.setScissor(t,e,i,n),this},popScissor:function(){var t=this.scissorStack,e=this.currentScissorIdx-4,i=t[e+0],n=t[e+1],s=t[e+2],r=t[e+3];return this.currentScissorIdx=e,this.setScissor(i,n,s,r),this},setPipeline:function(t){return this.currentPipeline===t&&this.currentPipeline.vertexBuffer===this.currentVertexBuffer&&this.currentPipeline.program===this.currentProgram||(this.flush(),this.currentPipeline=t,this.currentPipeline.bind()),this.currentPipeline.onBind(),this.currentPipeline},setBlendMode:function(t){var e=this.gl,i=this.blendModes[t];return t!==s.BlendModes.SKIP_CHECK&&this.currentBlendMode!==t&&(this.flush(),e.enable(e.BLEND),e.blendEquation(i.equation),i.func.length>2?e.blendFuncSeparate(i.func[0],i.func[1],i.func[2],i.func[3]):e.blendFunc(i.func[0],i.func[1]),this.currentBlendMode=t),this},addBlendMode:function(t,e){return this.blendModes.push({func:t,equation:e})-1},updateBlendMode:function(t,e,i){return this.blendModes[t]&&(this.blendModes[t].func=e,i&&(this.blendModes[t].equation=i)),this},removeBlendMode:function(t){return t>16&&this.blendModes[t]&&this.blendModes.splice(t,1),this},setTexture2D:function(t,e){var i=this.gl;return t!==this.currentTextures[e]&&(this.flush(),this.currentActiveTextureUnit!==e&&(i.activeTexture(i.TEXTURE0+e),this.currentActiveTextureUnit=e),i.bindTexture(i.TEXTURE_2D,t),this.currentTextures[e]=t),this},setFramebuffer:function(t){var e=this.gl;return t!==this.currentFramebuffer&&(this.flush(),e.bindFramebuffer(e.FRAMEBUFFER,t),this.currentFramebuffer=t),this},setProgram:function(t){var e=this.gl;return t!==this.currentProgram&&(this.flush(),e.useProgram(t),this.currentProgram=t),this},setVertexBuffer:function(t){var e=this.gl;return t!==this.currentVertexBuffer&&(this.flush(),e.bindBuffer(e.ARRAY_BUFFER,t),this.currentVertexBuffer=t),this},setIndexBuffer:function(t){var e=this.gl;return t!==this.currentIndexBuffer&&(this.flush(),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),this.currentIndexBuffer=t),this},createTextureFromSource:function(t,e,i,n){var o=this.gl,a=o.NEAREST,h=o.CLAMP_TO_EDGE;return e=t?t.width:e,i=t?t.height:i,r(e,i)&&(h=o.REPEAT),n===s.ScaleModes.LINEAR?a=o.LINEAR:(n===s.ScaleModes.NEAREST||this.config.pixelArt)&&(a=o.NEAREST),t||"number"!=typeof e||"number"!=typeof i?this.createTexture2D(0,a,a,h,h,o.RGBA,t):this.createTexture2D(0,a,a,h,h,o.RGBA,null,e,i)},createTexture2D:function(t,e,i,n,s,r,o,a,h,l){var u=this.gl,c=u.createTexture();return l=void 0===l||null===l||l,this.setTexture2D(c,0),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,e),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,i),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,s),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,n),u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l),null===o||void 0===o?u.texImage2D(u.TEXTURE_2D,t,r,a,h,0,r,u.UNSIGNED_BYTE,null):(u.texImage2D(u.TEXTURE_2D,t,r,r,u.UNSIGNED_BYTE,o),a=o.width,h=o.height),this.setTexture2D(null,0),c.isAlphaPremultiplied=l,c.isRenderTexture=!1,c.width=a,c.height=h,this.nativeTextures.push(c),c},createFramebuffer:function(t,e,i,n){var s=this.gl,r=s.createFramebuffer(),o=0;if(this.setFramebuffer(r),n){var a=s.createRenderbuffer();s.bindRenderbuffer(s.RENDERBUFFER,a),s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,t,e),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,a)}if(i.isRenderTexture=!0,i.isAlphaPremultiplied=!1,s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,i,0),(o=s.checkFramebufferStatus(s.FRAMEBUFFER))!==s.FRAMEBUFFER_COMPLETE){var h={36054:"Incomplete Attachment",36055:"Missing Attachment",36057:"Incomplete Dimensions",36061:"Framebuffer Unsupported"};throw new Error("Framebuffer incomplete. Framebuffer status: "+h[o])}return r.renderTexture=i,this.setFramebuffer(null),r},createProgram:function(t,e){var i=this.gl,n=i.createProgram(),s=i.createShader(i.VERTEX_SHADER),r=i.createShader(i.FRAGMENT_SHADER);if(i.shaderSource(s,t),i.shaderSource(r,e),i.compileShader(s),i.compileShader(r),!i.getShaderParameter(s,i.COMPILE_STATUS))throw new Error("Failed to compile Vertex Shader:\n"+i.getShaderInfoLog(s));if(!i.getShaderParameter(r,i.COMPILE_STATUS))throw new Error("Failed to compile Fragment Shader:\n"+i.getShaderInfoLog(r));if(i.attachShader(n,s),i.attachShader(n,r),i.linkProgram(n),!i.getProgramParameter(n,i.LINK_STATUS))throw new Error("Failed to link program:\n"+i.getProgramInfoLog(n));return n},createVertexBuffer:function(t,e){var i=this.gl,n=i.createBuffer();return this.setVertexBuffer(n),i.bufferData(i.ARRAY_BUFFER,t,e),this.setVertexBuffer(null),n},createIndexBuffer:function(t,e){var i=this.gl,n=i.createBuffer();return this.setIndexBuffer(n),i.bufferData(i.ELEMENT_ARRAY_BUFFER,t,e),this.setIndexBuffer(null),n},deleteTexture:function(t){return this.gl.deleteTexture(t),this},deleteFramebuffer:function(t){return this.gl.deleteFramebuffer(t),this},deleteProgram:function(t){return this.gl.deleteProgram(t),this},deleteBuffer:function(t){return this.gl.deleteBuffer(t),this},preRenderCamera:function(t){var e=this.config.resolution;if(this.pushScissor(t.x*e,t.y*e,t.width*e,t.height*e),t.backgroundColor.alphaGL>0){var i=t.backgroundColor,n=this.pipelines.FlatTintPipeline;n.batchFillRect(0,0,1,1,0,t.x,t.y,t.width,t.height,o.getTintFromFloats(i.redGL,i.greenGL,i.blueGL,1),i.alphaGL,1,0,0,1,0,0,[1,0,0,1,0,0]),n.flush()}},postRenderCamera:function(t){if(t._fadeAlpha>0||t._flashAlpha>0){var e=this.pipelines.FlatTintPipeline;e.batchFillRect(0,0,1,1,0,t.x,t.y,t.width,t.height,o.getTintFromFloats(t._fadeRed,t._fadeGreen,t._fadeBlue,1),t._fadeAlpha,1,0,0,1,0,0,[1,0,0,1,0,0]),e.batchFillRect(0,0,1,1,0,t.x,t.y,t.width,t.height,o.getTintFromFloats(t._flashRed,t._flashGreen,t._flashBlue,1),t._flashAlpha,1,0,0,1,0,0,[1,0,0,1,0,0]),e.flush()}this.popScissor()},preRender:function(){if(!this.contextLost){var t=this.gl,e=this.config.backgroundColor,i=this.pipelines;t.clearColor(e.redGL,e.greenGL,e.blueGL,e.alphaGL),this.config.clearBeforeRender&&t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);for(var n in i)i[n].onPreRender()}},render:function(t,e,i,n){if(!this.contextLost){var r=e.list,o=r.length,a=this.pipelines;for(var h in a)a[h].onRender(t,n);this.preRenderCamera(n);for(var l=0;l<o;++l){var u=r[l];u.willRender()&&(u.blendMode!==this.currentBlendMode&&this.setBlendMode(u.blendMode),u.mask&&u.mask.preRenderWebGL(this,u,n),u.renderWebGL(this,u,i,n),u.mask&&u.mask.postRenderWebGL(this,u))}this.flush(),this.setBlendMode(s.BlendModes.NORMAL),this.postRenderCamera(n)}},postRender:function(){if(!this.contextLost){this.snapshotState.callback&&(this.snapshotState.callback(a(this.canvas,this.snapshotState.type,this.snapshotState.encoder)),this.snapshotState.callback=null);var t=this.pipelines;for(var e in t)t[e].onPostRender()}},snapshot:function(t,e,i){return this.snapshotState.callback=t,this.snapshotState.type=e,this.snapshotState.encoder=i,this},canvasToTexture:function(t,e,i){var n=this.gl;if(e)this.setTexture2D(e,0),i?(n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.width=t.width,e.height=t.height):n.texSubImage2D(0,0,0,n.RGBA,n.UNSIGNED_BYTE,t),this.setTexture2D(null,0);else{var s=n.CLAMP_TO_EDGE;r(t.width,t.height)&&(s=n.REPEAT),e=this.createTexture2D(0,n.NEAREST,n.NEAREST,s,s,n.RGBA,t,t.width,t.height,!0)}return e},setTextureFilter:function(t,e){var i=this.gl,n=[i.LINEAR,i.NEAREST][e];return this.setTexture2D(t,0),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,n),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,n),this.setTexture2D(null,0),this},setFloat1:function(t,e,i){return this.setProgram(t),this.gl.uniform1f(this.gl.getUniformLocation(t,e),i),this},setFloat2:function(t,e,i,n){return this.setProgram(t),this.gl.uniform2f(this.gl.getUniformLocation(t,e),i,n),this},setFloat3:function(t,e,i,n,s){return this.setProgram(t),this.gl.uniform3f(this.gl.getUniformLocation(t,e),i,n,s),this},setFloat4:function(t,e,i,n,s,r){return this.setProgram(t),this.gl.uniform4f(this.gl.getUniformLocation(t,e),i,n,s,r),this},setInt1:function(t,e,i){return this.setProgram(t),this.gl.uniform1i(this.gl.getUniformLocation(t,e),i),this},setInt2:function(t,e,i,n){return this.setProgram(t),this.gl.uniform2i(this.gl.getUniformLocation(t,e),i,n),this},setInt3:function(t,e,i,n,s){return this.setProgram(t),this.gl.uniform3i(this.gl.getUniformLocation(t,e),i,n,s),this},setInt4:function(t,e,i,n,s,r){return this.setProgram(t),this.gl.uniform4i(this.gl.getUniformLocation(t,e),i,n,s,r),this},setMatrix2:function(t,e,i,n){return this.setProgram(t),this.gl.uniformMatrix2fv(this.gl.getUniformLocation(t,e),i,n),this},setMatrix3:function(t,e,i,n){return this.setProgram(t),this.gl.uniformMatrix3fv(this.gl.getUniformLocation(t,e),i,n),this},setMatrix4:function(t,e,i,n){return this.setProgram(t),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(t,e),i,n),this},destroy:function(){for(var t in this.pipelines)this.pipelines[t].destroy(),delete this.pipelines[t];for(var e=0;e<this.nativeTextures.length;++e)this.deleteTexture(this.nativeTextures[e]),delete this.nativeTextures[e];this.hasExtension("WEBGL_lose_context")&&this.getExtension("WEBGL_lose_context").loseContext(),delete this.gl,delete this.game,this.contextLost=!0,this.extensions={},this.nativeTextures.length=0}});t.exports=d},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){e||(e="image/png"),i||(i=.92);var n=t.getContext("experimental-webgl"),s=new Uint8Array(n.drawingBufferWidth*n.drawingBufferHeight*4);n.readPixels(0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.RGBA,n.UNSIGNED_BYTE,s);var r,o=document.createElement("canvas"),a=o.getContext("2d");o.width=n.drawingBufferWidth,o.height=n.drawingBufferHeight,r=a.getImageData(0,0,o.width,o.height);for(var h=r.data,l=0;l<o.height;l+=1)for(var u=0;u<o.width;u+=1){var c=4*((o.height-l)*o.width+u),d=4*(l*o.width+u);h[d+0]=s[c+0],h[d+1]=s[c+1],h[d+2]=s[c+2],h[d+3]=s[c+3]}a.putImageData(r,0,0);var f=o.toDataURL(e,i),p=new Image;return p.src=f,p};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(549),r=i(550),o=i(138),a=new n({Extends:o,initialize:function(t,e,i){o.call(this,{game:t,gl:e,renderer:i,topology:e.TRIANGLES,vertShader:r,fragShader:s,vertexCapacity:3,vertexSize:2*Float32Array.BYTES_PER_ELEMENT,vertices:new Float32Array([-1,1,-1,-7,7,1]).buffer,attributes:[{name:"inPosition",size:2,type:e.FLOAT,normalized:!1,offset:0}]}),this.vertexViewF32=new Float32Array(this.vertexData),this.maxQuads=1,this.resolutionDirty=!0},onBind:function(){o.prototype.onBind.call(this);var t=this.renderer,e=this.program;return this.resolutionDirty&&(t.setFloat2(e,"uResolution",this.width,this.height),t.setInt1(e,"uMainSampler",0),t.setInt1(e,"uMaskSampler",1),this.resolutionDirty=!1),this},resize:function(t,e,i){return o.prototype.resize.call(this,t,e,i),this.resolutionDirty=!0,this},beginMask:function(t,e,i){var n=t.bitmapMask,s=this.renderer,r=this.gl,o=n.visible;n&&r&&(s.setFramebuffer(t.maskFramebuffer),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),n.visible=!0,n.renderWebGL(s,n,0,i),n.visible=o,s.flush(),s.setFramebuffer(t.mainFramebuffer),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT))},endMask:function(t){var e=t.bitmapMask,i=this.renderer,n=this.gl;e&&(i.setFramebuffer(null),i.setPipeline(this),i.setTexture2D(t.maskTexture,1),i.setTexture2D(t.mainTexture,0),n.drawArrays(this.topology,0,3))}});t.exports=a},function(t,e){t.exports="#define SHADER_NAME PHASER_BITMAP_MASK_FS\r\n\r\nprecision mediump float;\r\n\r\nuniform vec2 uResolution;\r\nuniform sampler2D uMainSampler;\r\nuniform sampler2D uMaskSampler;\r\n\r\nvoid main()\r\n{\r\n    vec2 uv = gl_FragCoord.xy / uResolution;\r\n    vec4 mainColor = texture2D(uMainSampler, uv);\r\n    vec4 maskColor = texture2D(uMaskSampler, uv);\r\n    float alpha = maskColor.a * mainColor.a;\r\n    gl_FragColor = vec4(mainColor.rgb * alpha, alpha);\r\n}\r\n"},function(t,e){t.exports="#define SHADER_NAME PHASER_BITMAP_MASK_VS\r\n\r\nprecision mediump float;\r\n\r\nattribute vec2 inPosition;\r\n\r\nvoid main()\r\n{\r\n    gl_Position = vec4(inPosition, 0.0, 1.0);\r\n}\r\n"},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(139),r=i(254),o=i(255),a=i(552),h=i(553),l=i(47),u=i(138),c=function(t,e,i,n,s){this.x=t,this.y=e,this.width=i,this.rgb=n,this.alpha=s},d=function(t,e,i,n,s){this.points=[],this.pointsLength=1,this.points[0]=new c(t,e,i,n,s)},f=new Float32Array([1,0,0,1,0,0]),p=new Float32Array(6e3),v=0,g=[],y=new n({Extends:u,Mixins:[o],initialize:function(t,e,i){u.call(this,{game:t,gl:e,renderer:i,topology:e.TRIANGLES,vertShader:h,fragShader:a,vertexCapacity:12e3,vertexSize:2*Float32Array.BYTES_PER_ELEMENT+4*Uint8Array.BYTES_PER_ELEMENT,attributes:[{name:"inPosition",size:2,type:e.FLOAT,normalized:!1,offset:0},{name:"inTint",size:4,type:e.UNSIGNED_BYTE,normalized:!0,offset:2*Float32Array.BYTES_PER_ELEMENT}]}),this.vertexViewF32=new Float32Array(this.vertexData),this.vertexViewU32=new Uint32Array(this.vertexData),this.tempTriangle=[{x:0,y:0,width:0,rgb:16777215,alpha:1},{x:0,y:0,width:0,rgb:16777215,alpha:1},{x:0,y:0,width:0,rgb:16777215,alpha:1},{x:0,y:0,width:0,rgb:16777215,alpha:1}],this.polygonCache=[],this.mvpInit()},onBind:function(){return u.prototype.onBind.call(this),this.mvpUpdate(),this},resize:function(t,e,i){return u.prototype.resize.call(this,t,e,i),this.projOrtho(0,this.width,this.height,0,-1e3,1e3),this},batchFillRect:function(t,e,i,n,s,r,o,a,h,u,c,d,f,p,v,g,y,m){this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush();var x=this.renderer,b=(x.config.resolution,this.vertexViewF32),w=this.vertexViewU32,T=this.vertexCount*this.vertexComponentCount,S=r+a,A=o+h,C=m[0],M=m[1],_=m[2],E=m[3],P=m[4],L=m[5],k=d*C+f*_,F=d*M+f*E,O=p*C+v*_,R=p*M+v*E,B=g*C+y*_+P,D=g*M+y*E+L,I=r*k+o*O+B,Y=r*F+o*R+D,z=r*k+A*O+B,X=r*F+A*R+D,N=S*k+A*O+B,V=S*F+A*R+D,W=S*k+o*O+B,G=S*F+o*R+D,U=l.getTintAppendFloatAlphaAndSwap(u,c);b[T+0]=I,b[T+1]=Y,w[T+2]=U,b[T+3]=z,b[T+4]=X,w[T+5]=U,b[T+6]=N,b[T+7]=V,w[T+8]=U,b[T+9]=I,b[T+10]=Y,w[T+11]=U,b[T+12]=N,b[T+13]=V,w[T+14]=U,b[T+15]=W,b[T+16]=G,w[T+17]=U,this.vertexCount+=6},batchFillTriangle:function(t,e,i,n,s,r,o,a,h,u,c,d,f,p,v,g,y,m,x,b){this.renderer.setPipeline(this),this.vertexCount+3>this.vertexCapacity&&this.flush();var w=this.renderer,T=(w.config.resolution,this.vertexViewF32),S=this.vertexViewU32,A=this.vertexCount*this.vertexComponentCount,C=b[0],M=b[1],_=b[2],E=b[3],P=b[4],L=b[5],k=p*C+v*_,F=p*M+v*E,O=g*C+y*_,R=g*M+y*E,B=m*C+x*_+P,D=m*M+x*E+L,I=r*k+o*O+B,Y=r*F+o*R+D,z=a*k+h*O+B,X=a*F+h*R+D,N=u*k+c*O+B,V=u*F+c*R+D,W=l.getTintAppendFloatAlphaAndSwap(d,f);T[A+0]=I,T[A+1]=Y,S[A+2]=W,T[A+3]=z,T[A+4]=X,S[A+5]=W,T[A+6]=N,T[A+7]=V,S[A+8]=W,this.vertexCount+=3},batchStrokeTriangle:function(t,e,i,n,s,r,o,a,h,l,u,c,d,f,p,v,g,y,m,x,b){var w=this.tempTriangle;w[0].x=r,w[0].y=o,w[0].width=c,w[0].rgb=d,w[0].alpha=f,w[1].x=a,w[1].y=h,w[1].width=c,w[1].rgb=d,w[1].alpha=f,w[2].x=l,w[2].y=u,w[2].width=c,w[2].rgb=d,w[2].alpha=f,w[3].x=r,w[3].y=o,w[3].width=c,w[3].rgb=d,w[3].alpha=f,this.batchStrokePath(t,e,i,n,s,w,c,d,f,p,v,g,y,m,x,!1,b)},batchFillPath:function(t,e,i,n,s,o,a,h,u,c,d,f,p,v,g){this.renderer.setPipeline(this);for(var y,m,x,b,w,T,S,A,C,M,_,E,P,L,k,F,O,R=this.renderer,B=(R.config.resolution,o.length),D=this.polygonCache,I=this.vertexViewF32,Y=this.vertexViewU32,z=0,X=g[0],N=g[1],V=g[2],W=g[3],G=g[4],U=g[5],j=u*X+c*V,H=u*N+c*W,q=d*X+f*V,K=d*N+f*W,J=p*X+v*V+G,Z=p*N+v*W+U,Q=l.getTintAppendFloatAlphaAndSwap(a,h),$=0;$<B;++$)m=o[$],D.push(m.x,m.y);y=r(D),B=y.length;for(var tt=0;tt<B;tt+=3)x=2*y[tt+0],b=2*y[tt+1],w=2*y[tt+2],this.vertexCount+3>this.vertexCapacity&&this.flush(),z=this.vertexCount*this.vertexComponentCount,T=D[x+0],S=D[x+1],A=D[b+0],C=D[b+1],M=D[w+0],_=D[w+1],E=T*j+S*q+J,P=T*H+S*K+Z,L=A*j+C*q+J,k=A*H+C*K+Z,F=M*j+_*q+J,O=M*H+_*K+Z,I[z+0]=E,I[z+1]=P,Y[z+2]=Q,I[z+3]=L,I[z+4]=k,Y[z+5]=Q,I[z+6]=F,I[z+7]=O,Y[z+8]=Q,this.vertexCount+=3;D.length=0},batchStrokePath:function(t,e,i,n,s,r,o,a,h,u,c,d,f,p,v,g,y){this.renderer.setPipeline(this);for(var m,x,b,w,T,S,A=r.length,C=this.polygonCache,M=this.vertexViewF32,_=this.vertexViewU32,E=l.getTintAppendFloatAlphaAndSwap,P=0;P+1<A;P+=1)m=r[P],x=r[P+1],S=this.batchLine(t,e,i,n,s,m.x,m.y,x.x,x.y,m.width/2,x.width/2,m.rgb,x.rgb,h,u,c,d,f,p,v,y),C.push(S);for(var L=1,k=C.length;L<k;++L)this.vertexCount+6>this.vertexCapacity&&this.flush(),b=C[L-1]||C[k-1],w=C[L],T=this.vertexCount*this.vertexComponentCount,M[T+0]=b[6],M[T+1]=b[7],_[T+2]=E(b[8],h),M[T+3]=b[0],M[T+4]=b[1],_[T+5]=E(b[2],h),M[T+6]=w[9],M[T+7]=w[10],_[T+8]=E(w[11],h),M[T+9]=b[0],M[T+10]=b[1],_[T+11]=E(b[2],h),M[T+12]=b[6],M[T+13]=b[7],_[T+14]=E(b[8],h),M[T+15]=w[3],M[T+16]=w[4],_[T+17]=E(w[5],h),this.vertexCount+=6;C.length=0},batchLine:function(t,e,i,n,s,r,o,a,h,u,c,d,f,p,v,g,y,m,x,b,w){this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush();var T=this.renderer,S=(T.config.resolution,w[0]),A=w[1],C=w[2],M=w[3],_=w[4],E=w[5],P=v*S+g*C,L=v*A+g*M,k=y*S+m*C,F=y*A+m*M,O=x*S+b*C+_,R=x*A+b*M+E,B=this.vertexViewF32,D=this.vertexViewU32,I=a-r,Y=h-o,z=Math.sqrt(I*I+Y*Y),X=u*(h-o)/z,N=u*(r-a)/z,V=c*(h-o)/z,W=c*(r-a)/z,G=a-V,U=h-W,j=r-X,H=o-N,q=a+V,K=h+W,J=r+X,Z=o+N,Q=G*P+U*k+O,$=G*L+U*F+R,tt=j*P+H*k+O,et=j*L+H*F+R,it=q*P+K*k+O,nt=q*L+K*F+R,st=J*P+Z*k+O,rt=J*L+Z*F+R,ot=l.getTintAppendFloatAlphaAndSwap,at=ot(d,p),ht=ot(f,p),lt=this.vertexCount*this.vertexComponentCount;return B[lt+0]=Q,B[lt+1]=$,D[lt+2]=ht,B[lt+3]=tt,B[lt+4]=et,D[lt+5]=at,B[lt+6]=it,B[lt+7]=nt,D[lt+8]=ht,B[lt+9]=tt,B[lt+10]=et,D[lt+11]=at,B[lt+12]=st,B[lt+13]=rt,D[lt+14]=at,B[lt+15]=it,B[lt+16]=nt,D[lt+17]=ht,this.vertexCount+=6,[Q,$,f,tt,et,d,it,nt,f,st,rt,d]},batchGraphics:function(t,e){if(!(t.commandBuffer.length<=0)){this.renderer.setPipeline(this);var i,n,r=e.scrollX*t.scrollFactorX,o=e.scrollY*t.scrollFactorY,a=t.x-r,h=t.y-o,l=t.scaleX,u=t.scaleY,y=-t.rotation,m=t.commandBuffer,x=1,b=1,w=0,T=0,S=1,A=e.matrix.matrix,C=null,M=0,_=0,E=0,P=0,L=0,k=0,F=0,O=0,R=0,B=0,D=null,I=Math.sin,Y=Math.cos,z=I(y),X=Y(y),N=X*l,V=-z*l,W=z*u,G=X*u,U=a,j=h,H=A[0],q=A[1],K=A[2],J=A[3],Z=A[4],Q=A[5],$=N*H+V*K,tt=N*q+V*J,et=W*H+G*K,it=W*q+G*J,nt=U*H+j*K+Z,st=U*q+j*J+Q;g.length=0;for(var rt=0,ot=m.length;rt<ot;++rt)switch(J=m[rt]){case s.ARC:for(M=0,L=m[rt+1],k=m[rt+2],F=m[rt+3],O=m[rt+4],R=m[rt+5],B=m[rt+6],B&&(P=R,R=O,O=-P);M<1;)P=(R-O)*M+O,_=L+Y(P)*F,E=k+I(P)*F,0===M?(C=new d(_,E,S,w,x),g.push(C)):C.points.push(new c(_,E,S,w,x)),M+=.01;rt+=6;break;case s.LINE_STYLE:S=m[rt+1],w=m[rt+2],x=m[rt+3],rt+=3;break;case s.FILL_STYLE:T=m[rt+1],b=m[rt+2],rt+=2;break;case s.BEGIN_PATH:g.length=0;break;case s.CLOSE_PATH:if(null!==C&&C.points.length>0){var at=C.points[0],ht=C.points[C.points.length-1];C.points.push(at),C=new d(ht.x,ht.y,ht.width,ht.rgb,ht.alpha),g.push(C)}break;case s.FILL_PATH:for(i=0,n=g.length;i<n;++i)this.batchFillPath(a,h,l,u,y,g[i].points,T,b,$,tt,et,it,nt,st,f);break;case s.STROKE_PATH:for(i=0,n=g.length;i<n;++i)D=g[i],this.batchStrokePath(a,h,l,u,y,D.points,S,w,x,$,tt,et,it,nt,st,D===this._lastPath,f);break;case s.FILL_RECT:this.batchFillRect(a,h,l,u,y,m[rt+1],m[rt+2],m[rt+3],m[rt+4],T,b,$,tt,et,it,nt,st,f),rt+=4;break;case s.FILL_TRIANGLE:this.batchFillTriangle(a,h,l,u,y,m[rt+1],m[rt+2],m[rt+3],m[rt+4],m[rt+5],m[rt+6],T,b,$,tt,et,it,nt,st,f),rt+=6;break;case s.STROKE_TRIANGLE:this.batchStrokeTriangle(a,h,l,u,y,m[rt+1],m[rt+2],m[rt+3],m[rt+4],m[rt+5],m[rt+6],S,w,x,$,tt,et,it,nt,st,f),rt+=6;break;case s.LINE_TO:null!==C?C.points.push(new c(m[rt+1],m[rt+2],S,w,x)):(C=new d(m[rt+1],m[rt+2],S,w,x),g.push(C)),rt+=2;break;case s.MOVE_TO:C=new d(m[rt+1],m[rt+2],S,w,x),g.push(C),rt+=2;break;case s.LINE_FX_TO:null!==C?C.points.push(new c(m[rt+1],m[rt+2],m[rt+3],m[rt+4],m[rt+5])):(C=new d(m[rt+1],m[rt+2],m[rt+3],m[rt+4],m[rt+5]),g.push(C)),rt+=5;break;case s.MOVE_FX_TO:C=new d(m[rt+1],m[rt+2],m[rt+3],m[rt+4],m[rt+5]),g.push(C),rt+=5;break;case s.SAVE:p[v+0]=f[0],p[v+1]=f[1],p[v+2]=f[2],p[v+3]=f[3],p[v+4]=f[4],p[v+5]=f[5],v+=6;break;case s.RESTORE:v-=6,f[0]=p[v+0],f[1]=p[v+1],f[2]=p[v+2],f[3]=p[v+3],f[4]=p[v+4],f[5]=p[v+5];break;case s.TRANSLATE:L=m[rt+1],k=m[rt+2],f[4]=f[0]*L+f[2]*k+f[4],f[5]=f[1]*L+f[3]*k+f[5],rt+=2;break;case s.SCALE:L=m[rt+1],k=m[rt+2],f[0]*=L,f[1]*=L,f[2]*=k,f[3]*=k,rt+=2;break;case s.ROTATE:k=m[rt+1],L=I(k),k=Y(k),N=f[0],V=f[1],W=f[2],G=f[3],f[0]=k*N+L*W,f[1]=k*V+L*G,f[2]=-L*N+k*W,f[3]=-L*V+k*G,rt+=1;break;default:console.error("Phaser: Invalid Graphics Command ID "+J)}}},drawStaticTilemapLayer:function(){},drawEmitterManager:function(){},drawBlitter:function(){},batchSprite:function(){},batchMesh:function(){},batchBitmapText:function(){},batchDynamicBitmapText:function(){},batchText:function(){},batchDynamicTilemapLayer:function(){},batchTileSprite:function(){}});t.exports=y},function(t,e){t.exports="#define SHADER_NAME PHASER_FLAT_TINT_FS\r\n\r\nprecision mediump float;\r\n\r\nvarying vec4 outTint;\r\n\r\nvoid main() {\r\n    gl_FragColor = vec4(outTint.rgb * outTint.a, outTint.a);\r\n}\r\n"},function(t,e){t.exports="#define SHADER_NAME PHASER_FLAT_TINT_VS\r\n\r\nprecision mediump float;\r\n\r\nuniform mat4 uProjectionMatrix;\r\nuniform mat4 uViewMatrix;\r\nuniform mat4 uModelMatrix;\r\n\r\nattribute vec2 inPosition;\r\nattribute vec4 inTint;\r\n\r\nvarying vec4 outTint;\r\n\r\nvoid main () {\r\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(inPosition, 1.0, 1.0);\r\n    outTint = inTint;\r\n}\r\n"},function(t,e){t.exports="#define SHADER_NAME PHASER_FORWARD_DIFFUSE_FS\r\n\r\nprecision mediump float;\r\n\r\nstruct Light\r\n{\r\n    vec2 position;\r\n    vec3 color;\r\n    float intensity;\r\n    float radius;\r\n};\r\n\r\nconst int kMaxLights = %LIGHT_COUNT%;\r\n\r\nuniform vec4 uCamera; /* x, y, rotation, zoom */\r\nuniform vec2 uResolution;\r\nuniform sampler2D uMainSampler;\r\nuniform sampler2D uNormSampler;\r\nuniform vec3 uAmbientLightColor;\r\nuniform Light uLights[kMaxLights];\r\n\r\nvarying vec2 outTexCoord;\r\nvarying vec4 outTint;\r\n\r\nvoid main()\r\n{\r\n    vec3 finalColor = vec3(0.0, 0.0, 0.0);\r\n    vec4 color = texture2D(uMainSampler, outTexCoord) * vec4(outTint.rgb * outTint.a, outTint.a);\r\n    vec3 normalMap = texture2D(uNormSampler, outTexCoord).rgb;\r\n    vec3 normal = normalize(vec3(normalMap * 2.0 - 1.0));\r\n    vec2 res = vec2(min(uResolution.x, uResolution.y)) * uCamera.w;\r\n\r\n    for (int index = 0; index < kMaxLights; ++index)\r\n    {\r\n        Light light = uLights[index];\r\n        vec3 lightDir = vec3((light.position.xy / res) - (gl_FragCoord.xy / res), 0.1);\r\n        vec3 lightNormal = normalize(lightDir);\r\n        float distToSurf = length(lightDir) * uCamera.w;\r\n        float diffuseFactor = max(dot(normal, lightNormal), 0.0);\r\n        float radius = (light.radius / res.x * uCamera.w) * uCamera.w;\r\n        float attenuation = clamp(1.0 - distToSurf * distToSurf / (radius * radius), 0.0, 1.0);\r\n        vec3 diffuse = light.color * diffuseFactor;\r\n        finalColor += (attenuation * diffuse) * light.intensity;\r\n    }\r\n\r\n    vec4 colorOutput = vec4(uAmbientLightColor + finalColor, 1.0);\r\n    gl_FragColor = color * vec4(colorOutput.rgb * colorOutput.a, colorOutput.a);\r\n\r\n}\r\n"},function(t,e){t.exports="#define SHADER_NAME PHASER_TEXTURE_TINT_FS\r\n\r\nprecision mediump float;\r\n\r\nuniform sampler2D uMainSampler;\r\n\r\nvarying vec2 outTexCoord;\r\nvarying vec4 outTint;\r\n\r\nvoid main() \r\n{\r\n    vec4 texel = texture2D(uMainSampler, outTexCoord);\r\n    texel *= vec4(outTint.rgb * outTint.a, outTint.a);\r\n    gl_FragColor = texel;\r\n}\r\n"},function(t,e){t.exports="#define SHADER_NAME PHASER_TEXTURE_TINT_VS\r\n\r\nprecision mediump float;\r\n\r\nuniform mat4 uProjectionMatrix;\r\nuniform mat4 uViewMatrix;\r\nuniform mat4 uModelMatrix;\r\n\r\nattribute vec2 inPosition;\r\nattribute vec2 inTexCoord;\r\nattribute vec4 inTint;\r\n\r\nvarying vec2 outTexCoord;\r\nvarying vec4 outTint;\r\n\r\nvoid main () \r\n{\r\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(inPosition, 1.0, 1.0);\r\n    outTexCoord = inTexCoord;\r\n    outTint = inTint;\r\n}\r\n\r\n"},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(24),s=function(t){var e=t.config;if(!e.hideBanner){var i,s=e.renderType===n.CANVAS?"Canvas":"WebGL",r=e.audio,o=t.device.audio;if(i=!o.webAudio||r&&r.disableWebAudio?r&&r.noAudio||!o.webAudio&&!o.audioData?"No Audio":"HTML5 Audio":"Web Audio",t.device.browser.ie)window.console&&console.log("Phaser v"+n.VERSION+" / https://phaser.io");else{var a="",h=[a];if(Array.isArray(e.bannerBackgroundColor)){var l;e.bannerBackgroundColor.forEach(function(t){a=a.concat("%c "),h.push("background: "+t),l=t}),h[h.length-1]="color: "+e.bannerTextColor+"; background: "+l}else a=a.concat("%c "),h.push("color: "+e.bannerTextColor+"; background: "+e.bannerBackgroundColor);h.push("background: #fff"),e.gameTitle&&(a=a.concat(e.gameTitle),e.gameVersion&&(a=a.concat(" v"+e.gameVersion)),e.hidePhaser||(a=a.concat(" / "))),e.hidePhaser||(a=a.concat("Phaser v"+n.VERSION+" ("+s+" | "+i+")")),a=a.concat(" %c "+e.gameURL),h[0]=a,console.log.apply(console,h)}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={os:i(76),browser:i(94),features:i(136),input:i(559),audio:i(560),video:i(561),fullscreen:i(562),canvasFeatures:i(253)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(76),s=i(94),r={gamepads:!1,mspointer:!1,touch:!1,wheelEvent:null};t.exports=function(){return("ontouchstart"in document.documentElement||navigator.maxTouchPoints&&navigator.maxTouchPoints>=1)&&(r.touch=!0),(navigator.msPointerEnabled||navigator.pointerEnabled)&&(r.mspointer=!0),navigator.getGamepads&&(r.gamepads=!0),n.cocoonJS||("onwheel"in window||s.ie&&"WheelEvent"in window?r.wheelEvent="wheel":"onmousewheel"in window?r.wheelEvent="mousewheel":s.firefox&&"MouseScrollEvent"in window&&(r.wheelEvent="DOMMouseScroll")),r}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(94),s={audioData:!1,dolby:!1,m4a:!1,mp3:!1,ogg:!1,opus:!1,wav:!1,webAudio:!1,webm:!1};t.exports=function(){s.audioData=!!window.Audio,s.webAudio=!(!window.AudioContext&&!window.webkitAudioContext);var t=document.createElement("audio"),e=!!t.canPlayType;try{if(e&&(t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")&&(s.ogg=!0),(t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,"")||t.canPlayType("audio/opus;").replace(/^no$/,""))&&(s.opus=!0),t.canPlayType("audio/mpeg;").replace(/^no$/,"")&&(s.mp3=!0),t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"")&&(s.wav=!0),(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;").replace(/^no$/,""))&&(s.m4a=!0),t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")&&(s.webm=!0),""!==t.canPlayType('audio/mp4;codecs="ec-3"')))if(n.edge)s.dolby=!0;else if(n.safari&&n.safariVersion>=9&&/Mac OS X (\d+)_(\d+)/.test(navigator.userAgent)){var i=parseInt(RegExp.$1,10),r=parseInt(RegExp.$2,10);(10===i&&r>=11||i>10)&&(s.dolby=!0)}}catch(t){}return s}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={h264Video:!1,hlsVideo:!1,mp4Video:!1,oggVideo:!1,vp9Video:!1,webmVideo:!1};t.exports=function(){var t=document.createElement("video"),e=!!t.canPlayType;try{e&&(t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"")&&(i.oggVideo=!0),t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"")&&(i.h264Video=!0,i.mp4Video=!0),t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")&&(i.webmVideo=!0),t.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,"")&&(i.vp9Video=!0),t.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,"")&&(i.hlsVideo=!0))}catch(t){}return i}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={available:!1,cancel:"",keyboard:!1,request:""};t.exports=function(){var t,e=["requestFullscreen","requestFullScreen","webkitRequestFullscreen","webkitRequestFullScreen","msRequestFullscreen","msRequestFullScreen","mozRequestFullScreen","mozRequestFullscreen"],n=document.createElement("div");for(t=0;t<e.length;t++)if(n[e[t]]){i.available=!0,i.request=e[t];break}var s=["cancelFullScreen","exitFullscreen","webkitCancelFullScreen","webkitExitFullscreen","msCancelFullScreen","msExitFullscreen","mozCancelFullScreen","mozExitFullscreen"];if(i.available)for(t=0;t<s.length;t++)if(document[s[t]]){i.cancel=s[t];break}return window.Element&&Element.ALLOW_KEYBOARD_INPUT&&(i.keyboard=!0),i}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(564),s=function(t,e){if(e.matched)return!0;var i=!1,s=!1;if(t.keyCode===e.current)if(e.index>0&&e.maxKeyDelay>0){var r=e.timeLastMatched+e.maxKeyDelay;t.timeStamp<=r&&(s=!0,i=n(t,e))}else s=!0,i=n(t,e);return!s&&e.resetOnWrongKey&&(e.index=0,e.current=e.keyCodes[0]),i&&(e.timeLastMatched=t.timeStamp,e.matched=!0,e.timeMatched=t.timeStamp),i};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.timeLastMatched=t.timeStamp,++e.index===e.size||(e.current=e.keyCodes[e.index],!1)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.current=t.keyCodes[0],t.index=0,t.timeLastMatched=0,t.matched=!1,t.timeMatched=0,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(140),s={};for(var r in n)s[n[r]]=r;t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){if(t.originalEvent=e,t.preventDefault&&e.preventDefault(),t.enabled)return t.altKey=e.altKey,t.ctrlKey=e.ctrlKey,t.shiftKey=e.shiftKey,t.location=e.location,t.isDown=!0,t.isUp=!1,t.timeDown=e.timeStamp,t.duration=0,t.repeats++,t._justDown=!0,t._justUp=!1,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){if(t.originalEvent=e,t.preventDefault&&e.preventDefault(),t.enabled)return t.isDown=!1,t.isUp=!0,t.timeUp=e.timeStamp,t.duration=t.timeUp-t.timeDown,t.repeats=0,t._justDown=!1,t._justUp=!0,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=i(272),r=function(t){var e=t.game.config.defaultPhysicsSystem,i=n(t.settings,"physics",!1);if(e||i){var r=[];if(e&&r.push(s(e+"Physics")),i)for(var o in i)o=s(o.concat("Physics")),-1===r.indexOf(o)&&r.push(o);return r}};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=function(t){var e=t.game.config.defaultPlugins,i=n(t.settings,"plugins",!1);return Array.isArray(i)?i:e||[]};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={game:"game",anims:"anims",cache:"cache",registry:"registry",sound:"sound",textures:"textures",events:"events",cameras:"cameras",cameras3d:"cameras3d",add:"add",make:"make",scenePlugin:"scene",displayList:"children",lights:"lights",data:"data",input:"input",load:"load",time:"time",tweens:"tweens",arcadePhysics:"physics",impactPhysics:"impact",matterPhysics:"matter"};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.source[e];return t.add("__BASE",e,0,0,i.width,i.height),t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.source[e];return t.add("__BASE",e,0,0,i.width,i.height),t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(60),s=function(t,e,i){if(!i.frames&&!i.textures)return void console.warn("Invalid Texture Atlas JSON Array given, missing 'frames' and 'textures' array");var s=t.source[e];t.add("__BASE",e,0,0,s.width,s.height);for(var r,o=Array.isArray(i.textures)?i.textures[0].frames:i.frames,a=0;a<o.length;a++){var h=o[a];r=t.add(h.filename,e,h.frame.x,h.frame.y,h.frame.w,h.frame.h),h.trimmed&&r.setTrim(h.sourceSize.w,h.sourceSize.h,h.spriteSourceSize.x,h.spriteSourceSize.y,h.spriteSourceSize.w,h.spriteSourceSize.h),h.rotated&&(r.rotated=!0,r.updateUVsInverted()),h.anchor&&(r.customPivot=!0,r.pivotX=h.anchor.x,r.pivotY=h.anchor.y),r.customData=n(h)}for(var l in i)"frames"!==l&&(Array.isArray(i[l])?t.customData[l]=i[l].slice(0):t.customData[l]=i[l]);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(60),s=function(t,e,i){if(!i.frames)return void console.warn("Invalid Texture Atlas JSON Hash given, missing 'frames' Object");var s=t.source[e];t.add("__BASE",e,0,0,s.width,s.height);var r,o=i.frames;for(var a in o){var h=o[a];r=t.add(a,e,h.frame.x,h.frame.y,h.frame.w,h.frame.h),h.trimmed&&r.setTrim(h.sourceSize.w,h.sourceSize.h,h.spriteSourceSize.x,h.spriteSourceSize.y,h.spriteSourceSize.w,h.spriteSourceSize.h),h.rotated&&(r.rotated=!0,r.updateUVsInverted()),r.customData=n(h)}for(var l in i)"frames"!==l&&(Array.isArray(i[l])?t.customData[l]=i[l].slice(0):t.customData[l]=i[l]);return t};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){if(["layers","tilewidth","tileheight","tileswide","tileshigh"].forEach(function(t){e[t]}),1===e.layers.length){for(var i,n=new Phaser.FrameData,s=e.tileheight,r=e.tilewidth,o=e.layers[0].tiles,a=0;a<o.length;a++)i=n.addFrame(new Phaser.Frame(a,o[a].x,o[a].y,r,s,"frame_"+a)),i.setTrim(!1);return n}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=function(t,e,i,s,r,o,a){var h=n(a,"frameWidth",null),l=n(a,"frameHeight",h);if(null===h)throw new Error("TextureManager.SpriteSheet: Invalid frameWidth given.");var u=t.source[e];t.add("__BASE",e,0,0,u.width,u.height);var c=n(a,"startFrame",0),d=n(a,"endFrame",-1),f=n(a,"margin",0),p=n(a,"spacing",0),v=Math.floor((r-f+p)/(h+p)),g=Math.floor((o-f+p)/(l+p)),y=v*g;(c>y||c<-y)&&(c=0),c<0&&(c=y+c),-1!==d&&(y=c+(d+1));for(var m=f,x=f,b=0,w=0,T=0;T<y;T++){b=0,w=0;var S=m+h,A=x+l;S>r&&(b=S-r),A>o&&(w=A-o),t.add(T,e,i+m,s+x,h-b,l-w),m+=h+p,m+h>r&&(m=f,x+=l+p)}return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=function(t,e,i){var s=n(i,"frameWidth",null),r=n(i,"frameHeight",s);if(!s)throw new Error("TextureManager.SpriteSheetFromAtlas: Invalid frameWidth given.");var o=n(i,"startFrame",0),a=n(i,"endFrame",-1),h=n(i,"margin",0),l=n(i,"spacing",0),u=e.cutX,c=e.cutY,d=e.cutWidth,f=e.cutHeight,p=e.realWidth,v=e.realHeight,g=Math.floor((p-h+l)/(s+l)),y=Math.floor((v-h+l)/(r+l)),m=g*y,x=e.x,b=s-x,w=s-(p-d-x),T=e.y,S=r-T,A=r-(v-f-T);(o>m||o<-m)&&(o=0),o<0&&(o=m+o),-1!==a&&(m=o+(a+1));for(var C,M=h,_=h,E=0,P=e.sourceIndex,L=0;L<y;L++){for(var k=0===L,F=L===y-1,O=0;O<g;O++){var R=0===O,B=O===g-1;if(C=t.add(E,P,u+M,c+_,s,r),R||k||B||F){var D=R?x:0,I=k?T:0,Y=s,z=r;R?Y=b:B&&(Y=w),k?z=S:F&&(z=A),C.cutWidth=Y,C.cutHeight=z,C.setTrim(s,r,D,I,Y,z)}M+=l,M+=R?b:B||s,E++}M=h,_+=l,_+=k?S:F?A:r}return t};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){if(e.getElementsByTagName("TextureAtlas")){for(var i,n,s,r,o,a,h,l,u,c,d,f=new Phaser.FrameData,p=e.getElementsByTagName("SubTexture"),v=0;v<p.length;v++)s=p[v].attributes,n=s.name.value,r=parseInt(s.x.value,10),o=parseInt(s.y.value,10),a=parseInt(s.width.value,10),h=parseInt(s.height.value,10),l=null,u=null,s.frameX&&(l=Math.abs(parseInt(s.frameX.value,10)),u=Math.abs(parseInt(s.frameY.value,10)),c=parseInt(s.frameWidth.value,10),d=parseInt(s.frameHeight.value,10)),i=f.addFrame(new Phaser.Frame(v,r,o,a,h,n)),null===l&&null===u||i.setTrim(!0,a,h,l,u,c,d);return f}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=0,n=function(t,e,n,s){var r=i-s.y-s.height;t.add(n,e,s.x,r,s.width,s.height)},s=function(t,e,s){var r=t.source[e];t.add("__BASE",e,0,0,r.width,r.height),i=r.height;for(var o=s.split("\n"),a=/^[ ]*(- )*(\w+)+[: ]+(.*)/,h="",l="",u={x:0,y:0,width:0,height:0},c=0;c<o.length;c++){var d=o[c].match(a);if(d){var f="- "===d[1],p=d[2],v=d[3];if(f&&(l!==h&&(n(t,e,l,u),h=l),u={x:0,y:0,width:0,height:0}),"name"!==p)switch(p){case"x":case"y":case"width":case"height":u[p]=parseInt(v,10)}else l=v}}return l!==h&&n(t,e,l,u),t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(4),r=i(3),o=i(251),a=new n({initialize:function(t,e){this.game=t,this.raf=new o,this.started=!1,this.running=!1,this.minFps=s(e,"min",5),this.targetFps=s(e,"target",60),this._min=1e3/this.minFps,this._target=1e3/this.targetFps,this.actualFps=this.targetFps,this.nextFpsUpdate=0,this.framesThisSecond=0,this.callback=r,this.forceSetTimeOut=s(e,"forceSetTimeOut",!1),this.time=0,this.startTime=0,this.lastTime=0,this.frame=0,this.inFocus=!0,this._pauseTime=0,this._coolDown=0,this.delta=0,this.deltaIndex=0,this.deltaHistory=[],this.deltaSmoothingMax=s(e,"deltaHistory",10),this.panicMax=s(e,"panicMax",120),this.rawDelta=0},blur:function(){this.inFocus=!1},focus:function(){this.inFocus=!0,this.resetDelta()},pause:function(){this._pauseTime=window.performance.now()},resume:function(){this.resetDelta(),this.startTime+=this.time-this._pauseTime},resetDelta:function(){var t=window.performance.now();this.time=t,this.lastTime=t,this.nextFpsUpdate=t+1e3,this.framesThisSecond=0,this.frame=0;for(var e=0;e<this.deltaSmoothingMax;e++)this.deltaHistory[e]=Math.min(this._target,this.deltaHistory[e]);this.delta=0,this.deltaIndex=0,this._coolDown=this.panicMax},start:function(t){if(this.started)return this;this.started=!0,this.running=!0;for(var e=0;e<this.deltaSmoothingMax;e++)this.deltaHistory[e]=this._target;this.resetDelta(),this.startTime=window.performance.now(),this.callback=t,this.raf.start(this.step.bind(this),this.forceSetTimeOut)},step:function(t){this.frame++,this.rawDelta=t-this.lastTime;var e=this.deltaIndex,i=this.deltaHistory,n=this.deltaSmoothingMax,s=t-this.lastTime;(this._coolDown>0||!this.inFocus)&&(this._coolDown--,s=Math.min(s,this._target)),s>this._min&&(s=i[e],s=Math.min(s,this._min)),i[e]=s,++this.deltaIndex>n&&(this.deltaIndex=0);for(var r=0,o=0;o<n;o++)r+=i[o];r/=n,this.delta=r,this.time+=this.rawDelta,t>this.nextFpsUpdate&&(this.actualFps=.25*this.framesThisSecond+.75*this.actualFps,this.nextFpsUpdate=t+1e3,this.framesThisSecond=0),this.framesThisSecond++;var a=r/this._target;this.callback(t,r,a),this.lastTime=t},tick:function(){this.step(window.performance.now())},sleep:function(){this.running&&(this.raf.stop(),this.running=!1)},wake:function(t){this.running?this.sleep():t&&(this.startTime+=-this.lastTime+(this.lastTime=window.performance.now())),this.raf.start(this.step.bind(this),this.useRAF),this.running=!0,this.step(window.performance.now())},stop:function(){return this.running=!1,this.started=!1,this.raf.stop(),this},destroy:function(){this.stop(),this.callback=r,this.raf=null,this.game=null}});t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e;if(void 0!==document.hidden)e="visibilitychange";else{["webkit","moz","ms"].forEach(function(t){void 0!==document[t+"Hidden"]&&(document.hidden=function(){return document[t+"Hidden"]},e=t+"visibilitychange")})}var i=function(e){document.hidden||"pause"===e.type?t.emit("hidden"):t.emit("visible")};e&&document.addEventListener(e,i,!1),window.onblur=function(){t.emit("blur")},window.onfocus=function(){t.emit("focus")}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n={DisplayList:i(584),GameObjectCreator:i(14),GameObjectFactory:i(9),UpdateList:i(585),Components:i(12),BitmapText:i(143),Blitter:i(144),DynamicBitmapText:i(145),Graphics:i(146),Group:i(78),Image:i(61),Particles:i(149),PathFollower:i(308),RenderTexture:i(151),Sprite3D:i(93),Sprite:i(36),Text:i(152),TileSprite:i(153),Zone:i(89),Factories:{Blitter:i(668),DynamicBitmapText:i(669),Graphics:i(670),Group:i(671),Image:i(672),Particles:i(673),PathFollower:i(674),RenderTexture:i(675),Sprite3D:i(676),Sprite:i(677),StaticBitmapText:i(678),Text:i(679),TileSprite:i(680),Zone:i(681)},Creators:{Blitter:i(682),DynamicBitmapText:i(683),Graphics:i(684),Group:i(685),Image:i(686),Particles:i(687),RenderTexture:i(688),Sprite3D:i(689),Sprite:i(690),StaticBitmapText:i(691),Text:i(692),TileSprite:i(693),Zone:i(694)}};n.Mesh=i(100),n.Quad=i(155),n.Factories.Mesh=i(698),n.Factories.Quad=i(699),n.Creators.Mesh=i(700),n.Creators.Quad=i(701),n.Light=i(310),i(311),i(702),t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(98),r=i(11),o=i(285),a=new n({Extends:s,initialize:function(t){s.call(this,t),this.sortChildrenFlag=!1,this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this)},boot:function(){var t=this.systems.events;t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},queueDepthSort:function(){this.sortChildrenFlag=!0},depthSort:function(){this.sortChildrenFlag&&(o.inplace(this.list,this.sortByDepth),this.sortChildrenFlag=!1)},sortByDepth:function(t,e){return t._depth-e._depth},sortGameObjects:function(t){return void 0===t&&(t=this.list),this.scene.sys.depthSort(),t.sort(this.sortIndexHandler.bind(this))},getTopGameObject:function(t){return this.sortGameObjects(t),t[t.length-1]}});r.register("DisplayList",a,"displayList"),t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(11),r=new n({initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),this._list=[],this._pendingInsertion=[],this._pendingRemoval=[]},boot:function(){var t=this.systems.events;t.on("preupdate",this.preUpdate,this),t.on("update",this.update,this),t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},add:function(t){return-1===this._list.indexOf(t)&&-1===this._pendingInsertion.indexOf(t)&&this._pendingInsertion.push(t),t},preUpdate:function(){var t=this._pendingRemoval.length,e=this._pendingInsertion.length;if(0!==t||0!==e){var i,n;for(i=0;i<t;i++){n=this._pendingRemoval[i];var s=this._list.indexOf(n);s>-1&&this._list.splice(s,1)}this._list=this._list.concat(this._pendingInsertion.splice(0)),this._pendingRemoval.length=0,this._pendingInsertion.length=0}},update:function(t,e){for(var i=0;i<this._list.length;i++){var n=this._list[i];n.active&&n.preUpdate.call(n,t,e)}},remove:function(t){var e=this._list.indexOf(t);return-1!==e&&this._list.splice(e,1),t},removeAll:function(){for(var t=this._list.length;t--;)this.remove(this._list[t]);return this},shutdown:function(){this.removeAll(),this._list.length=0,this._pendingRemoval.length=0,this._pendingInsertion.length=0},destroy:function(){this.shutdown(),this.scene=void 0,this.systems=void 0}});s.register("UpdateList",r,"updateList"),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(287),s=function(t,e,i,s,r,o,a){var h=t.sys.textures.getFrame(i,s),l=t.sys.cache.xml.get(r);if(h&&l){var u=n(l,o,a,h);return t.sys.cache.bitmapFont.add(e,{data:u,texture:i,frame:s}),!0}return!1};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(4),s=function(t,e){var i=e.width,s=e.height,r=Math.floor(i/2),o=Math.floor(s/2),a=e.chars,h=n(e,"image",""),l=n(e,"offset.x",0),u=n(e,"offset.y",0),c=n(e,"spacing.x",0),d=n(e,"spacing.y",0),f=n(e,"charsPerRow",null);null===f&&(f=t.sys.textures.getFrame(h).width/i)>a.length&&(f=a.length);for(var p=l,v=u,g={retroFont:!0,font:h,size:i,lineHeight:s,chars:{}},y=0,m=0;m<a.length;m++){var x=a.charCodeAt(m);g.chars[x]={x:p,y:v,width:i,height:s,centerX:r,centerY:o,xOffset:0,yOffset:0,xAdvance:i,data:{},kerning:{}},y++,y===f?(y=0,p=l,v+=s+d):p+=i+c}return{data:g,frame:null,texture:h}};s.TEXT_SET1=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",s.TEXT_SET2=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ",s.TEXT_SET3="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ",s.TEXT_SET4="ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789",s.TEXT_SET5="ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() '!?-*:0123456789",s.TEXT_SET6="ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789\"(),-.' ",s.TEXT_SET7="AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW\")28FLRX-'39",s.TEXT_SET8="0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ",s.TEXT_SET9="ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,'\"?!",s.TEXT_SET10="ABCDEFGHIJKLMNOPQRSTUVWXYZ",s.TEXT_SET11="ABCDEFGHIJKLMNOPQRSTUVWXYZ.,\"-+!?()':;0123456789",t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(589),s=i(590),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){var r=e.text,o=r.length;n.RENDER_MASK!==e.renderFlags||0===o||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchBitmapText(this,s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){var r=e.text,o=r.length;if(!(n.RENDER_MASK!==e.renderFlags||0===o||e.cameraFilter>0&&e.cameraFilter&s._id)){var a=e.frame,h=s.scrollX*e.scrollFactorX,l=s.scrollY*e.scrollFactorY,u=e.fontData.chars,c=e.fontData.lineHeight,d=0,f=0,p=0,v=0,g=null,y=0,m=0,x=0,b=0,w=0,T=0,S=null,A=0,C=t.currentContext,M=e.frame.source.image,_=a.cutX,E=a.cutY,P=e.fontSize/e.fontData.size;t.currentBlendMode!==e.blendMode&&(t.currentBlendMode=e.blendMode,C.globalCompositeOperation=t.blendModes[e.blendMode]),t.currentAlpha!==e.alpha&&(t.currentAlpha=e.alpha,C.globalAlpha=e.alpha),t.currentScaleMode!==e.scaleMode&&(t.currentScaleMode=e.scaleMode),C.save(),C.translate(e.x-h+e.frame.x,e.y-l+e.frame.y),C.rotate(e.rotation),C.translate(-e.displayOriginX,-e.displayOriginY),C.scale(e.scaleX,e.scaleY);for(var L=0;L<o;++L)if(10!==(v=r.charCodeAt(L))){if(g=u[v]){if(y=_+g.x,m=E+g.y,x=g.width,b=g.height,w=p+g.xOffset+d,T=g.yOffset+f,null!==S){var k=g.kerning[A];w+=void 0!==k?k:0}w*=P,T*=P,d+=g.xAdvance,p+=1,S=g,A=v,0!==x&&0!==b&&32!==v&&(C.save(),C.translate(w,T),C.scale(P,P),C.drawImage(M,y,m,x,b,0,0,x,b),C.restore())}}else d=0,p=0,f+=c,S=null;C.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(592),s=i(593),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.drawBlitter(e,s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id)){var r=e.getRenderList();t.setBlendMode(e.blendMode);for(var o=t.gameContext,a=e.x-s.scrollX*e.scrollFactorX,h=e.y-s.scrollY*e.scrollFactorY,l=0;l<r.length;l++){var u=r[l],c=u.flipX||u.flipY,d=u.frame,f=d.canvasData,p=d.x,v=d.y,g=1,y=1;c?(u.flipX&&(g=-1,p-=f.dWidth),u.flipY&&(y=-1,v-=f.dHeight),o.save(),o.translate(u.x+a,u.y+h),o.scale(g,y),o.drawImage(d.source.image,f.sx,f.sy,f.sWidth,f.sHeight,p,v,f.dWidth,f.dHeight),o.restore()):t.blitImage(p+u.x+a,v+u.y+h,u.frame)}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n,s){this.parent=t,this.x=e,this.y=i,this.frame=n,this.data={},this._visible=s,this._alpha=1,this.flipX=!1,this.flipY=!1},setFrame:function(t){return t=void 0===t?this.parent.frame:this.parent.texture.get(t),this},resetFlip:function(){return this.flipX=!1,this.flipY=!1,this},reset:function(t,e,i){return this.x=t,this.y=e,this.frame=i,this},setFlipX:function(t){return this.flipX=t,this},setFlipY:function(t){return this.flipY=t,this},setFlip:function(t,e){return this.flipX=t,this.flipY=e,this},setVisible:function(t){return this.visible=t,this},setAlpha:function(t){return this.alpha=t,this},destroy:function(){this.parent.dirty=!0,this.parent.children.remove(this),this.parent=void 0,this.frame=void 0,this.data=void 0},visible:{get:function(){return this._visible},set:function(t){this._visible=t,this.parent.dirty=!0}},alpha:{get:function(){return this._alpha},set:function(t){this._alpha=t,this.parent.dirty=!0}}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(596),s=i(597),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){var r=e.text,o=r.length;n.RENDER_MASK!==e.renderFlags||0===o||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchDynamicBitmapText(e,s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){var r=e.text,o=r.length;if(!(n.RENDER_MASK!==e.renderFlags||0===o||e.cameraFilter>0&&e.cameraFilter&s._id)){var a=e.frame,h=e.displayCallback,l=s.scrollX*e.scrollFactorX,u=s.scrollY*e.scrollFactorY,c=e.fontData.chars,d=e.fontData.lineHeight,f=0,p=0,v=0,g=0,y=null,m=0,x=0,b=0,w=0,T=0,S=0,A=null,C=0,M=t.currentContext,_=e.frame.source.image,E=a.cutX,P=a.cutY,L=0,k=e.fontSize/e.fontData.size;t.currentBlendMode!==e.blendMode&&(t.currentBlendMode=e.blendMode,M.globalCompositeOperation=t.blendModes[e.blendMode]),t.currentAlpha!==e.alpha&&(t.currentAlpha=e.alpha,M.globalAlpha=e.alpha),t.currentScaleMode!==e.scaleMode&&(t.currentScaleMode=e.scaleMode),M.save(),M.translate(e.x,e.y),M.rotate(e.rotation),M.translate(-e.displayOriginX,-e.displayOriginY),M.scale(e.scaleX,e.scaleY),e.cropWidth>0&&e.cropHeight>0&&(M.save(),M.beginPath(),M.rect(0,0,e.cropWidth,e.cropHeight),M.clip());for(var F=0;F<o;++F)if(k=e.fontSize/e.fontData.size,L=0,10!==(g=r.charCodeAt(F))){if(y=c[g]){if(m=E+y.x,x=P+y.y,b=y.width,w=y.height,T=v+y.xOffset+f-e.scrollX,S=y.yOffset+p-e.scrollY,null!==A){var O=y.kerning[C];T+=void 0!==O?O:0}if(h){var R=h({tint:{topLeft:0,topRight:0,bottomLeft:0,bottomRight:0},index:F,charCode:g,x:T,y:S,scale:k,rotation:0,data:y.data});T=R.x,S=R.y,k=R.scale,L=R.rotation}T*=k,S*=k,T-=l,S-=u,M.save(),M.translate(T,S),M.rotate(L),M.scale(k,k),M.drawImage(_,m,x,b,w,0,0,b,w),M.restore(),f+=y.xAdvance,v+=1,A=y,C=g}}else f=0,v=0,p+=d,A=null;e.cropWidth>0&&e.cropHeight>0&&M.restore(),M.restore()}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.isEmpty()?0:t.getMajorRadius()*t.getMinorRadius()*Math.PI};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(147),s=function(t){return new n(t.x,t.y,t.width,t.height)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(77),s=function(t,e){return n(t,e.x,e.y)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(77),s=function(t,e){return n(t,e.x,e.y)&&n(t,e.right,e.y)&&n(t,e.x,e.bottom)&&n(t,e.right,e.bottom)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.setTo(t.x,t.y,t.width,t.height)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=function(t,e){return void 0===e&&(e=new n),e.x=t.left,e.y=t.top,e.width=t.width,e.height=t.height,e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t.x+=e,t.y+=i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x+=e.x,t.y+=e.y,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(608),s=i(292),s=i(292),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchGraphics(this,s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(610),s=i(611),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchSprite(e,s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||t.drawImage(e,s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(1),r=new n({initialize:function(t,e,i,n,r){if("object"==typeof t){var o=t;t=s(o,"x",0),e=s(o,"y",0),i=s(o,"power",0),n=s(o,"epsilon",100),r=s(o,"gravity",50)}else void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=100),void 0===r&&(r=50);this.x=t,this.y=e,this.active=!0,this._gravity=r,this._power=0,this._epsilon=0,this.power=i,this.epsilon=n},update:function(t,e){var i=this.x-t.x,n=this.y-t.y,s=i*i+n*n;if(0!==s){var r=Math.sqrt(s);s<this._epsilon&&(s=this._epsilon);var o=this._power*e/(s*r)*100;t.velocityX+=i*o,t.velocityY+=n*o}},epsilon:{get:function(){return Math.sqrt(this._epsilon)},set:function(t){this._epsilon=t*t}},power:{get:function(){return this._power/this._gravity},set:function(t){this._power=t*this._gravity}},gravity:{get:function(){return this._gravity},set:function(t){var e=this.power;this._gravity=t,this.power=e}}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(51),s=i(0),r=i(12),o=i(614),a=i(615),h=i(616),l=i(1),u=i(150),c=i(307),d=i(62),f=i(650),p=i(651),v=i(8),g=i(285),y=i(6),m=i(57),x=new s({Mixins:[r.BlendMode,r.ScrollFactor,r.Visible],initialize:function(t,e){this.manager=t,this.texture=t.texture,this.frames=[t.defaultFrame],this.defaultFrame=t.defaultFrame,this.configFastMap=["active","blendMode","collideBottom","collideLeft","collideRight","collideTop","deathCallback","deathCallbackScope","emitCallback","emitCallbackScope","follow","frequency","gravityX","gravityY","maxParticles","name","on","particleBringToTop","particleClass","radial","timeScale","trackVisible","visible"],this.configOpMap=["accelerationX","accelerationY","alpha","bounce","delay","lifespan","maxVelocityX","maxVelocityY","moveToX","moveToY","quantity","rotate","scaleX","scaleY","speedX","speedY","tint","x","y"],this.name="",this.particleClass=f,this.x=new h(e,"x",0),this.y=new h(e,"y",0),this.radial=!0,this.gravityX=0,this.gravityY=0,this.acceleration=!1,this.accelerationX=new h(e,"accelerationX",0,!0),this.accelerationY=new h(e,"accelerationY",0,!0),this.maxVelocityX=new h(e,"maxVelocityX",1e4,!0),this.maxVelocityY=new h(e,"maxVelocityY",1e4,!0),this.speedX=new h(e,"speedX",0,!0),this.speedY=new h(e,"speedY",0,!0),this.moveTo=!1,this.moveToX=new h(e,"moveToX",0,!0),this.moveToY=new h(e,"moveToY",0,!0),this.bounce=new h(e,"bounce",0,!0),this.scaleX=new h(e,"scaleX",1),this.scaleY=new h(e,"scaleY",1),this.tint=new h(e,"tint",4294967295),this.alpha=new h(e,"alpha",1),this.lifespan=new h(e,"lifespan",1e3),this.angle=new h(e,"angle",{min:0,max:360}),this.rotate=new h(e,"rotate",0),this.emitCallback=null,this.emitCallbackScope=null,this.deathCallback=null,this.deathCallbackScope=null,this.maxParticles=0,this.quantity=new h(e,"quantity",1,!0),this.delay=new h(e,"delay",0,!0),this.frequency=0,this.on=!0,this.particleBringToTop=!0,this.timeScale=1,this.emitZone=null,this.deathZone=null,this.bounds=null,this.collideLeft=!0,this.collideRight=!0,this.collideTop=!0,this.collideBottom=!0,this.active=!0,this.visible=!0,this.blendMode=n.NORMAL,this.follow=null,this.followOffset=new y,this.trackVisible=!1,this.currentFrame=0,this.randomFrame=!0,this.frameQuantity=1,this.dead=[],this.alive=[],this._counter=0,this._frameCounter=0,e&&this.fromJSON(e)},fromJSON:function(t){if(!t)return this;var e=0,i="";for(e=0;e<this.configFastMap.length;e++)i=this.configFastMap[e],d(t,i)&&(this[i]=l(t,i));for(e=0;e<this.configOpMap.length;e++)i=this.configOpMap[e],d(t,i)&&this[i].loadConfig(t);if(this.acceleration=0!==this.accelerationX.propertyValue||0!==this.accelerationY.propertyValue,this.moveTo=0!==this.moveToX.propertyValue||0!==this.moveToY.propertyValue,d(t,"speed")&&(this.speedX.loadConfig(t,"speed"),this.speedY=null),(c(t,["speedX","speedY"])||this.moveTo)&&(this.radial=!1),d(t,"scale")&&(this.scaleX.loadConfig(t,"scale"),this.scaleY=null),d(t,"callbackScope")){var n=l(t,"callbackScope",null);this.emitCallbackScope=n,this.deathCallbackScope=n}return d(t,"emitZone")&&this.setEmitZone(t.emitZone),d(t,"deathZone")&&this.setDeathZone(t.deathZone),d(t,"bounds")&&this.setBounds(t.bounds),d(t,"followOffset")&&this.followOffset.setFromObject(l(t,"followOffset",0)),d(t,"frame")&&this.setFrame(t.frame),this},toJSON:function(t){void 0===t&&(t={});var e=0,i="";for(e=0;e<this.configFastMap.length;e++)i=this.configFastMap[e],t[i]=this[i];for(e=0;e<this.configOpMap.length;e++)i=this.configOpMap[e],this[i]&&(t[i]=this[i].toJSON());return this.speedY||(delete t.speedX,t.speed=this.speedX.toJSON()),this.scaleY||(delete t.scaleX,t.scale=this.scaleX.toJSON()),t},startFollow:function(t,e,i,n){return void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=!1),this.follow=t,this.followOffset.set(e,i),this.trackVisible=n,this},stopFollow:function(){return this.follow=null,this.followOffset.set(0,0),this.trackVisible=!1,this},getFrame:function(){if(1===this.frames.length)return this.defaultFrame;if(this.randomFrame)return u(this.frames);var t=this.frames[this.currentFrame];return this._frameCounter++,this._frameCounter===this.frameQuantity&&(this._frameCounter=0,this.currentFrame=m(this.currentFrame+1,0,this._frameLength)),t},setFrame:function(t,e,i){void 0===e&&(e=!0),void 0===i&&(i=1),this.randomFrame=e,this.frameQuantity=i,this.currentFrame=0,this._frameCounter=0;var n=typeof t;if(Array.isArray(t)||"string"===n||"number"===n)this.manager.setEmitterFrames(t,this);else if("object"===n){var s=t;t=l(s,"frames",null),t&&this.manager.setEmitterFrames(t,this);var r=l(s,"cycle",!1);this.randomFrame=!r,this.frameQuantity=l(s,"quantity",i)}return this._frameLength=this.frames.length,1===this._frameLength&&(this.frameQuantity=1,this.randomFrame=!1),this},setRadial:function(t){return void 0===t&&(t=!0),this.radial=t,this},setPosition:function(t,e){return this.x.onChange(t),this.y.onChange(e),this},setBounds:function(t,e,i,n){if("object"==typeof t){var s=t;t=s.x,e=s.y,i=d(s,"w")?s.w:s.width,n=d(s,"h")?s.h:s.height}return this.bounds?this.bounds.setTo(t,e,i,n):this.bounds=new v(t,e,i,n),this},setSpeedX:function(t){return this.speedX.onChange(t),this.radial=!1,this},setSpeedY:function(t){return this.speedY&&(this.speedY.onChange(t),this.radial=!1),this},setSpeed:function(t){return this.speedX.onChange(t),this.speedY=null,this.radial=!0,this},setScaleX:function(t){return this.scaleX.onChange(t),this},setScaleY:function(t){return this.scaleY.onChange(t),this},setScale:function(t){return this.scaleX.onChange(t),this.scaleY=null,this},setGravityX:function(t){return this.gravityX=t,this},setGravityY:function(t){return this.gravityY=t,this},setGravity:function(t,e){return this.gravityX=t,this.gravityY=e,this},setAlpha:function(t){return this.alpha.onChange(t),this},setEmitterAngle:function(t){return this.angle.onChange(t),this},setAngle:function(t){return this.angle.onChange(t),this},setLifespan:function(t){return this.lifespan.onChange(t),this},setQuantity:function(t){return this.quantity.onChange(t),this},setFrequency:function(t,e){return this.frequency=t,this._counter=0,e&&this.quantity.onChange(e),this},setEmitZone:function(t){if(void 0===t)this.emitZone=null;else{var e=l(t,"type","random"),i=l(t,"source",null);if(i&&"function"==typeof i.getPoint)switch(e){case"random":this.emitZone=new p(i);break;case"edge":var n=l(t,"quantity",1),s=l(t,"stepRate",0),r=l(t,"yoyo",!1),o=l(t,"seamless",!0);this.emitZone=new a(i,n,s,r,o)}}return this},setDeathZone:function(t){if(void 0===t)this.deathZone=null;else{var e=l(t,"type","onEnter"),i=l(t,"source",null);if(i&&"function"==typeof i.contains){var n="onEnter"===e;this.deathZone=new o(i,n)}}return this},reserve:function(t){for(var e=this.dead,i=0;i<t;i++)e.push(new this.particleClass(this));return this},getAliveParticleCount:function(){return this.alive.length},getDeadParticleCount:function(){return this.dead.length},getParticleCount:function(){return this.getAliveParticleCount()+this.getDeadParticleCount()},atLimit:function(){return this.maxParticles>0&&this.getParticleCount()===this.maxParticles},onParticleEmit:function(t,e){return void 0===t?(this.emitCallback=null,this.emitCallbackScope=null):"function"==typeof t&&(this.emitCallback=t,e&&(this.emitCallbackScope=e)),this},onParticleDeath:function(t,e){return void 0===t?(this.deathCallback=null,this.deathCallbackScope=null):"function"==typeof t&&(this.deathCallback=t,e&&(this.deathCallbackScope=e)),this},killAll:function(){for(var t=this.dead,e=this.alive;e.length>0;)t.push(e.pop());return this},forEachAlive:function(t,e){for(var i=this.alive,n=i.length,s=0;s<n;++s)t.call(e,i[s],this);return this},forEachDead:function(t,e){for(var i=this.dead,n=i.length,s=0;s<n;++s)t.call(e,i[s],this);return this},start:function(){return this.on=!0,this._counter=0,this},pause:function(){return this.active=!1,this},resume:function(){return this.active=!0,this},depthSort:function(){return g.inplace(this.alive,this.depthSortCallback),this},flow:function(t,e){return void 0===e&&(e=1),this.frequency=t,this.quantity.onChange(e),this.start()},explode:function(t,e,i){return this.frequency=-1,this.emitParticle(t,e,i)},emitParticleAt:function(t,e,i){return this.emitParticle(i,t,e)},emitParticle:function(t,e,i){if(!this.atLimit()){void 0===t&&(t=this.quantity.onEmit());for(var n=this.dead,s=0;s<t;s++){var r;if(r=n.length>0?n.pop():new this.particleClass(this),r.fire(e,i),this.particleBringToTop?this.alive.push(r):this.alive.unshift(r),this.emitCallback&&this.emitCallback.call(this.emitCallbackScope,r,this),this.atLimit())break}return r}},preUpdate:function(t,e){e*=this.timeScale;var i=e/1e3;this.trackVisible&&(this.visible=this.follow.visible);for(var n=this.manager.getProcessors(),s=this.alive,r=s.length,o=0;o<r;o++){var a=s[o];if(a.update(e,i,n)){var h=s[r-1];s[r-1]=a,s[o]=h,o-=1,r-=1}}var l=s.length-r;if(l>0){var u=s.splice(s.length-l,l),c=this.deathCallback,d=this.deathCallbackScope;if(c)for(var f=0;f<u.length;f++)c.call(d,u[f]);this.dead.concat(u),g.inplace(s,this.indexSortCallback)}this.on&&(0===this.frequency?this.emitParticle():this.frequency>0&&(this._counter-=e,this._counter<=0&&(this.emitParticle(),this._counter=this.frequency-Math.abs(this._counter))))},depthSortCallback:function(t,e){return t.y-e.y},indexSortCallback:function(t,e){return t.index-e.index}});t.exports=x},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){this.source=t,this.killOnEnter=e},willKill:function(t){var e=this.source.contains(t.x,t.y);return e&&this.killOnEnter||!e&&!this.killOnEnter}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n,s){void 0===n&&(n=!1),void 0===s&&(s=!0),this.source=t,this.points=[],this.quantity=e,this.stepRate=i,this.yoyo=n,this.counter=-1,this.seamless=s,this._length=0,this._direction=0,this.updateSource()},updateSource:function(){if(this.points=this.source.getPoints(this.quantity,this.stepRate),this.seamless){var t=this.points[0],e=this.points[this.points.length-1];t.x===e.x&&t.y===e.y&&this.points.pop()}var i=this._length;return this._length=this.points.length,this._length<i&&this.counter>this._length&&(this.counter=this._length-1),this},changeSource:function(t){return this.source=t,this.updateSource()},getPoint:function(t){0===this._direction?++this.counter>=this._length&&(this.yoyo?(this._direction=1,this.counter=this._length-1):this.counter=0):-1===--this.counter&&(this.yoyo?(this._direction=0,this.counter=0):this.counter=this._length-1);var e=this.points[this.counter];e&&(t.x=e.x,t.y=e.y)}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(294),r=i(79),o=i(1),a=i(57),h=new n({initialize:function(t,e,i,n){void 0===n&&(n=!1),this.propertyKey=e,this.propertyValue=i,this.defaultValue=i,this.steps=0,this.counter=0,this.start=0,this.end=0,this.ease,this.emitOnly=n,this.onEmit=this.defaultEmit,this.onUpdate=this.defaultUpdate,this.loadConfig(t)},loadConfig:function(t,e){void 0===t&&(t={}),e&&(this.propertyKey=e),this.propertyValue=o(t,this.propertyKey,this.defaultValue),this.setMethods(),this.emitOnly&&(this.onUpdate=this.defaultUpdate)},toJSON:function(){return JSON.stringify(this.propertyValue)},onChange:function(t){return this.propertyValue=t,this.setMethods()},setMethods:function(){var t=this.propertyValue,e=typeof t;if("number"===e)this.onEmit=this.staticValueEmit,this.onUpdate=this.staticValueUpdate;else if(Array.isArray(t))this.onEmit=this.randomStaticValueEmit;else if("function"===e)this.emitOnly?this.onEmit=t:this.onUpdate=t;else if("object"===e&&(this.has(t,"random")||this.hasBoth(t,"start","end")||this.hasBoth(t,"min","max"))){this.start=this.has(t,"start")?t.start:t.min,this.end=this.has(t,"end")?t.end:t.max;var i=this.hasBoth(t,"min","max")||this.has(t,"random");if(i){var n=t.random;Array.isArray(n)&&(this.start=n[0],this.end=n[1]),this.onEmit=this.randomRangedValueEmit}if(this.has(t,"steps"))this.steps=t.steps,this.counter=this.start,this.onEmit=this.steppedEmit;else{var s=this.has(t,"ease")?t.ease:"Linear";this.ease=r(s),i||(this.onEmit=this.easedValueEmit),this.onUpdate=this.easeValueUpdate}}else"object"===e&&this.hasEither(t,"onEmit","onUpdate")&&(this.has(t,"onEmit")&&(this.onEmit=t.onEmit),this.has(t,"onUpdate")&&(this.onUpdate=t.onUpdate));return this},has:function(t,e){return t.hasOwnProperty(e)},hasBoth:function(t,e,i){return t.hasOwnProperty(e)&&t.hasOwnProperty(i)},hasEither:function(t,e,i){return t.hasOwnProperty(e)||t.hasOwnProperty(i)},defaultEmit:function(t,e,i){return i},defaultUpdate:function(t,e,i,n){return n},staticValueEmit:function(){return this.propertyValue},staticValueUpdate:function(){return this.propertyValue},randomStaticValueEmit:function(){var t=Math.floor(Math.random()*this.propertyValue.length);return this.propertyValue[t]},randomRangedValueEmit:function(t,e){var i=s(this.start,this.end);return t&&t.data[e]&&(t.data[e].min=i),i},steppedEmit:function(){var t=this.counter,e=this.counter+(this.end-this.start)/this.steps;return this.counter=a(e,this.start,this.end),t},easedValueEmit:function(t,e){if(t&&t.data[e]){var i=t.data[e];i.min=this.start,i.max=this.end}return this.start},easeValueUpdate:function(t,e,i){var n=t.data[e];return(n.max-n.min)*this.ease(i)+n.min}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(295),s=i(296),r=i(297),o=i(298),a=i(299),h=i(300),l=i(301),u=i(302),c=i(303),d=i(304),f=i(305),p=i(306);t.exports={Power0:l,Power1:u.Out,Power2:o.Out,Power3:c.Out,Power4:d.Out,Linear:l,Quad:u.Out,Cubic:o.Out,Quart:c.Out,Quint:d.Out,Sine:f.Out,Expo:h.Out,Circ:r.Out,Elastic:a.Out,Back:n.Out,Bounce:s.Out,Stepped:p,"Quad.easeIn":u.In,"Cubic.easeIn":o.In,"Quart.easeIn":c.In,"Quint.easeIn":d.In,"Sine.easeIn":f.In,"Expo.easeIn":h.In,"Circ.easeIn":r.In,"Elastic.easeIn":a.In,"Back.easeIn":n.In,"Bounce.easeIn":s.In,"Quad.easeOut":u.Out,"Cubic.easeOut":o.Out,"Quart.easeOut":c.Out,"Quint.easeOut":d.Out,"Sine.easeOut":f.Out,"Expo.easeOut":h.Out,"Circ.easeOut":r.Out,"Elastic.easeOut":a.Out,"Back.easeOut":n.Out,"Bounce.easeOut":s.Out,"Quad.easeInOut":u.InOut,"Cubic.easeInOut":o.InOut,"Quart.easeInOut":c.InOut,"Quint.easeInOut":d.InOut,"Sine.easeInOut":f.InOut,"Expo.easeInOut":h.InOut,"Circ.easeInOut":r.InOut,"Elastic.easeInOut":a.InOut,"Back.easeInOut":n.InOut,"Bounce.easeInOut":s.InOut}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=1.70158),t*t*((e+1)*t-e)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=1.70158),--t*t*((e+1)*t+e)+1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){void 0===e&&(e=1.70158);var i=1.525*e;return(t*=2)<1?t*t*((i+1)*t-i)*.5:.5*((t-=2)*t*((i+1)*t+i)+2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t=1-t,t<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=!1;return t<.5?(t=1-2*t,e=!0):t=2*t-1,t<1/2.75?t*=7.5625*t:t=t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 1-Math.sqrt(1-t*t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.sqrt(1- --t*t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t*t*t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return--t*t*t+1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(void 0===e&&(e=.1),void 0===i&&(i=.1),0===t)return 0;if(1===t)return 1;var n=i/4;return e<1?e=1:n=i*Math.asin(1/e)/(2*Math.PI),-e*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/i)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(void 0===e&&(e=.1),void 0===i&&(i=.1),0===t)return 0;if(1===t)return 1;var n=i/4;return e<1?e=1:n=i*Math.asin(1/e)/(2*Math.PI),e*Math.pow(2,-10*t)*Math.sin((t-n)*(2*Math.PI)/i)+1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(void 0===e&&(e=.1),void 0===i&&(i=.1),0===t)return 0;if(1===t)return 1;var n=i/4;return e<1?e=1:n=i*Math.asin(1/e)/(2*Math.PI),(t*=2)<1?e*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/i)*-.5:e*Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/i)*.5+1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.pow(2,10*(t-1))-.001};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 1-Math.pow(2,-10*t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t*t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t*(2-t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t*t*t*t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 1- --t*t*t*t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t*t*t*t*t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return--t*t*t*t*t+1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 0===t?0:1===t?1:1-Math.cos(t*Math.PI/2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 0===t?0:1===t?1:Math.sin(t*Math.PI/2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 0===t?0:1===t?1:.5*(1-Math.cos(Math.PI*t))};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=1),t<=0?0:t>=1?1:1/e*(1+(e*t|0))};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(43),r=i(46),o=new n({initialize:function(t){this.emitter=t,this.frame=null,this.index=0,this.x=0,this.y=0,this.velocityX=0,this.velocityY=0,this.accelerationX=0,this.accelerationY=0,this.maxVelocityX=1e4,this.maxVelocityY=1e4,this.bounce=0,this.scaleX=1,this.scaleY=1,this.alpha=1,this.angle=0,this.rotation=0,this.scrollFactorX=1,this.scrollFactorY=1,this.tint=4294967295,this.color=4294967295,this.life=1e3,this.lifeCurrent=1e3,this.delayCurrent=0,this.lifeT=0,this.data={tint:{min:16777215,max:16777215,current:16777215},alpha:{min:1,max:1},rotate:{min:0,max:0},scaleX:{min:1,max:1},scaleY:{min:1,max:1}}},isAlive:function(){return this.lifeCurrent>0},fire:function(t,e){var i=this.emitter;this.frame=i.getFrame(),i.emitZone&&i.emitZone.getPoint(this),void 0===t?(i.follow&&(this.x+=i.follow.x+i.followOffset.x),this.x+=i.x.onEmit(this,"x")):this.x+=t,void 0===e?(i.follow&&(this.y+=i.follow.y+i.followOffset.y),this.y+=i.y.onEmit(this,"y")):this.y+=e,this.life=i.lifespan.onEmit(this,"lifespan"),this.lifeCurrent=this.life,this.lifeT=0;var n=i.speedX.onEmit(this,"speedX"),o=i.speedY?i.speedY.onEmit(this,"speedY"):n;if(i.radial){var a=s(i.angle.onEmit(this,"angle"));this.velocityX=Math.cos(a)*Math.abs(n),this.velocityY=Math.sin(a)*Math.abs(o)}else if(i.moveTo){var h=i.moveToX.onEmit(this,"moveToX"),l=i.moveToY?i.moveToY.onEmit(this,"moveToY"):h,u=Math.atan2(l-this.y,h-this.x),c=r(this.x,this.y,h,l)/(this.life/1e3);this.velocityX=Math.cos(u)*c,this.velocityY=Math.sin(u)*c}else this.velocityX=n,this.velocityY=o;i.acceleration&&(this.accelerationX=i.accelerationX.onEmit(this,"accelerationX"),this.accelerationY=i.accelerationY.onEmit(this,"accelerationY")),this.maxVelocityX=i.maxVelocityX.onEmit(this,"maxVelocityX"),this.maxVelocityY=i.maxVelocityY.onEmit(this,"maxVelocityY"),this.delayCurrent=i.delay.onEmit(this,"delay"),this.scaleX=i.scaleX.onEmit(this,"scaleX"),this.scaleY=i.scaleY?i.scaleY.onEmit(this,"scaleY"):this.scaleX,this.angle=i.rotate.onEmit(this,"rotate"),this.rotation=s(this.angle),this.bounce=i.bounce.onEmit(this,"bounce"),this.alpha=i.alpha.onEmit(this,"alpha"),this.tint=i.tint.onEmit(this,"tint"),this.color=16777215&this.tint|(255*this.alpha|0)<<24,this.index=i.alive.length},computeVelocity:function(t,e,i,n){var s=this.velocityX,r=this.velocityY,o=this.accelerationX,a=this.accelerationY,h=this.maxVelocityX,l=this.maxVelocityY;s+=t.gravityX*i,r+=t.gravityY*i,o&&(s+=o*i),a&&(r+=a*i),s>h?s=h:s<-h&&(s=-h),r>l?r=l:r<-l&&(r=-l),this.velocityX=s,this.velocityY=r;for(var u=0;u<n.length;u++)n[u].update(this,e,i)},checkBounds:function(t){var e=t.bounds,i=-this.bounce;this.x<e.x&&t.collideLeft?(this.x=e.x,this.velocityX*=i):this.x>e.right&&t.collideRight&&(this.x=e.right,this.velocityX*=i),this.y<e.y&&t.collideTop?(this.y=e.y,this.velocityY*=i):this.y>e.bottom&&t.collideBottom&&(this.y=e.bottom,this.velocityY*=i)},update:function(t,e,i){if(this.delayCurrent>0)return this.delayCurrent-=t,!1;var n=this.emitter,r=1-this.lifeCurrent/this.life;return this.lifeT=r,this.computeVelocity(n,t,e,i),this.x+=this.velocityX*e,this.y+=this.velocityY*e,n.bounds&&this.checkBounds(n),n.deathZone&&n.deathZone.willKill(this)?(this.lifeCurrent=0,!0):(this.scaleX=n.scaleX.onUpdate(this,"scaleX",r,this.scaleX),n.scaleY?this.scaleY=n.scaleY.onUpdate(this,"scaleY",r,this.scaleY):this.scaleY=this.scaleX,this.angle=n.rotate.onUpdate(this,"rotate",r,this.angle),this.rotation=s(this.angle),this.alpha=n.alpha.onUpdate(this,"alpha",r,this.alpha),this.tint=n.tint.onUpdate(this,"tint",r,this.tint),this.color=16777215&this.tint|(255*this.alpha|0)<<24,this.lifeCurrent-=t,this.lifeCurrent<=0)}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(6),r=new n({initialize:function(t){this.source=t,this._tempVec=new s},getPoint:function(t){var e=this._tempVec;this.source.getRandomPoint(e),t.x=e.x,t.y=e.y}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(653),s=i(654),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){0===e.emitters.length||n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.drawEmitterManager(e,s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){var r=e.emitters.list;if(!(0===r.length||n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id))for(var o=0;o<r.length;o++){var a=r[o],h=a.alive,l=h.length;if(a.visible&&0!==l){var u=t.currentContext,c=u.globalAlpha,d=s.scrollX*a.scrollFactorX,f=s.scrollY*a.scrollFactorY;t.currentBlendMode!==a.blendMode&&(t.currentBlendMode=a.blendMode,u.globalCompositeOperation=t.blendModes[a.blendMode]);for(var p=0;p<l;++p){var v=h[p],g=(v.color>>24&255)/255;if(!(g<=0)){var y=v.frame,m=y.width,x=y.height,b=.5*m,w=.5*x,T=y.canvasData,S=-b,A=-w;u.globalAlpha=g,u.save(),u.translate(v.x-d*v.scrollFactorX,v.y-f*v.scrollFactorY),u.rotate(v.rotation),u.scale(v.scaleX,v.scaleY),u.drawImage(y.source.image,T.sx,T.sy,T.sWidth,T.sHeight,S,A,T.dWidth,T.dHeight),u.restore()}}u.globalAlpha=c}}};t.exports=s},function(t,e){var i={fill:function(t){return this},clear:function(){this.renderer.setFramebuffer(this.framebuffer);var t=this.gl;return t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.renderer.setFramebuffer(null),this},draw:function(t,e,i){return this.renderer.setFramebuffer(this.framebuffer),this.renderer.pipelines.TextureTintPipeline.drawTexture(t,e,i,0,0,t.width,t.height,this.currentMatrix),this.renderer.setFramebuffer(null),this},drawFrame:function(t,e,i,n){return this.renderer.setFramebuffer(this.framebuffer),this.renderer.pipelines.TextureTintPipeline.drawTexture(t,n.x,n.y,n.width,n.height,t.width,t.height,this.currentMatrix),this.renderer.setFramebuffer(null),this}};t.exports=i},function(t,e,i){var n=i(3),s=i(3);n=i(657),s=i(658),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchTexture(e,e.texture,e.texture.width,e.texture.height,e.x,e.y,e.width,e.height,e.scaleX,e.scaleY,e.rotation,e.flipX,e.flipY,e.scrollFactorX,e.scrollFactorY,e.displayOriginX,e.displayOriginY,0,0,e.texture.width,e.texture.height,4294967295,4294967295,4294967295,4294967295,0,0,s)};t.exports=s},function(t,e,i){var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&(e.cameraFilter,s._id)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=t.canvas,s=t.context,r=t.style,o=[],a=0,h=i.length;r.maxLines>0&&r.maxLines<i.length&&(h=r.maxLines),r.syncFont(n,s);for(var l=0;l<h;l++){var u=r.strokeThickness;u+=s.measureText(i[l]).width,r.wordWrap&&(u-=s.measureText(" ").width),o[l]=Math.ceil(u),a=Math.max(a,o[l])}var c=e.fontSize+r.strokeThickness,d=c*h,f=t._lineSpacing||0;return f<0&&Math.abs(f)>c&&(f=-c),0!==f&&(d+=f>0?f*i.length:f*(i.length-1)),{width:a,height:d,lines:h,lineWidths:o,lineSpacing:f,lineHeight:c}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(661),s=i(662),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||""===e.text||(e.dirty&&(e.canvasTexture=t.canvasToTexture(e.canvas,e.canvasTexture,!0,e.scaleMode),e.dirty=!1),this.pipeline.batchText(this,s))};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||""===e.text)){var r=t.currentContext;t.currentBlendMode!==e.blendMode&&(t.currentBlendMode=e.blendMode,r.globalCompositeOperation=t.blendModes[e.blendMode]),t.currentAlpha!==e.alpha&&(t.currentAlpha=e.alpha,r.globalAlpha=e.alpha),t.currentScaleMode!==e.scaleMode&&(t.currentScaleMode=e.scaleMode);var o=e.canvas;r.save(),r.translate(e.x-s.scrollX*e.scrollFactorX,e.y-s.scrollY*e.scrollFactorY),r.rotate(e.rotation),r.scale(e.scaleX,e.scaleY),r.translate(o.width*(e.flipX?1:0),o.height*(e.flipY?1:0)),r.scale(e.flipX?-1:1,e.flipY?-1:1),r.drawImage(o,0,0,o.width,o.height,-e.displayOriginX,-e.displayOriginY,o.width,o.height),r.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(10),r=i(4),o=i(664),a={fontFamily:["fontFamily","Courier"],fontSize:["fontSize","16px"],fontStyle:["fontStyle",""],backgroundColor:["backgroundColor",null],color:["color","#fff"],stroke:["stroke","#fff"],strokeThickness:["strokeThickness",0],shadowOffsetX:["shadow.offsetX",0],shadowOffsetY:["shadow.offsetY",0],shadowColor:["shadow.color","#000"],shadowBlur:["shadow.blur",0],shadowStroke:["shadow.stroke",!1],shadowFill:["shadow.fill",!1],align:["align","left"],maxLines:["maxLines",0],fixedWidth:["fixedWidth",0],fixedHeight:["fixedHeight",0],rtl:["rtl",!1],testString:["testString","|MÉqgy"],wordWrapWidth:["wordWrap.width",null],wordWrapCallback:["wordWrap.callback",null],wordWrapCallbackScope:["wordWrap.callbackScope",null],wordWrapUseAdvanced:["wordWrap.useAdvancedWrap",!1]},h=new n({initialize:function(t,e){this.parent=t,this.fontFamily,this.fontSize,this.fontStyle,this.backgroundColor,this.color,this.stroke,this.strokeThickness,this.shadowOffsetX,this.shadowOffsetY,this.shadowColor,this.shadowBlur,this.shadowStroke,this.shadowFill,this.align,this.maxLines,this.fixedWidth,this.fixedHeight,this.rtl,this.testString,this._font,this.setStyle(e,!1);var i=r(e,"metrics",!1);this.metrics=i?{ascent:r(i,"ascent",0),descent:r(i,"descent",0),fontSize:r(i,"fontSize",0)}:o(this)},setStyle:function(t,e){void 0===e&&(e=!0),t&&t.hasOwnProperty("fontSize")&&"number"==typeof t.fontSize&&(t.fontSize=t.fontSize.toString()+"px");for(var i in a)this[i]="wordWrapCallback"===i||"wordWrapCallbackScope"===i?r(t,a[i][0],a[i][1]):s(t,a[i][0],a[i][1]);var n=r(t,"font",null);this._font=null===n?[this.fontStyle,this.fontSize,this.fontFamily].join(" "):n;var o=r(t,"fill",null);return null!==o&&(this.color=o),e&&this.update(!0),this},syncFont:function(t,e){e.font=this._font},syncStyle:function(t,e){e.textBaseline="alphabetic",e.fillStyle=this.color,e.strokeStyle=this.stroke,e.lineWidth=this.strokeThickness,e.lineCap="round",e.lineJoin="round"},syncShadow:function(t,e){e?(t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY,t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur):(t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowColor=0,t.shadowBlur=0)},update:function(t){return t&&(this._font=[this.fontStyle,this.fontSize,this.fontFamily].join(" "),this.metrics=o(this)),this.parent.updateText()},setFont:function(t){return"string"==typeof t?(this.fontFamily=t,this.fontSize="",this.fontStyle=""):(this.fontFamily=r(t,"fontFamily","Courier"),this.fontSize=r(t,"fontSize","16px"),this.fontStyle=r(t,"fontStyle","")),this.update(!0)},setFontFamily:function(t){return this.fontFamily=t,this.update(!0)},setFontStyle:function(t){return this.fontStyle=t,this.update(!0)},setFontSize:function(t){return"number"==typeof t&&(t=t.toString()+"px"),this.fontSize=t,this.update(!0)},setTestString:function(t){return this.testString=t,this.update(!0)},setFixedSize:function(t,e){return this.fixedWidth=t,this.fixedHeight=e,t&&(this.text.width=t),e&&(this.text.height=e),this.update(!1)},setBackgroundColor:function(t){return this.backgroundColor=t,this.update(!1)},setFill:function(t){return this.color=t,this.update(!1)},setColor:function(t){return this.color=t,this.update(!1)},setStroke:function(t,e){return void 0===t?this.strokeThickness=0:(void 0===e&&(e=this.strokeThickness),this.stroke=t,this.strokeThickness=e),this.update(!0)},setShadow:function(t,e,i,n,s,r){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i="#000"),void 0===n&&(n=0),void 0===s&&(s=!1),void 0===r&&(r=!0),this.shadowOffsetX=t,this.shadowOffsetY=e,this.shadowColor=i,this.shadowBlur=n,this.shadowStroke=s,this.shadowFill=r,this.update(!1)},setShadowOffset:function(t,e){return void 0===t&&(t=0),void 0===e&&(e=t),this.shadowOffsetX=t,this.shadowOffsetY=e,this.update(!1)},setShadowColor:function(t){return void 0===t&&(t="#000"),this.shadowColor=t,this.update(!1)},setShadowBlur:function(t){return void 0===t&&(t=0),this.shadowBlur=t,this.update(!1)},setShadowStroke:function(t){return this.shadowStroke=t,this.update(!1)},setShadowFill:function(t){return this.shadowFill=t,this.update(!1)},setWordWrapWidth:function(t,e){return void 0===e&&(e=!1),this.wordWrapWidth=t,this.wordWrapUseAdvanced=e,this.update(!1)},setWordWrapCallback:function(t,e){return void 0===e&&(e=null),this.wordWrapCallback=t,this.wordWrapCallbackScope=e,this.update(!1)},setAlign:function(t){return void 0===t&&(t="left"),this.align=t,this.update(!1)},setMaxLines:function(t){return void 0===t&&(t=0),this.maxLines=t,this.update(!1)},getTextMetrics:function(){var t=this.metrics;return{ascent:t.ascent,descent:t.descent,fontSize:t.fontSize}},toJSON:function(){var t={};for(var e in a)t[e]=this[e];return t.metrics=this.getTextMetrics(),t},destroy:function(){this.parent=void 0}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(23),s=function(t){var e=n.create(this),i=e.getContext("2d");t.syncFont(e,i);var s=Math.ceil(1.2*i.measureText(t.testString).width),r=s,o=2*r;r=1.4*r|0,e.width=s,e.height=o,i.fillStyle="#f00",i.fillRect(0,0,s,o),i.font=t._font,i.textBaseline="alphabetic",i.fillStyle="#000",i.fillText(t.testString,0,r);var a={ascent:0,descent:0,fontSize:0};if(!i.getImageData(0,0,s,o))return a.ascent=r,a.descent=r+6,a.fontSize=a.ascent+a.descent,n.remove(e),a;var h,l,u=i.getImageData(0,0,s,o).data,c=u.length,d=4*s,f=0,p=!1;for(h=0;h<r;h++){for(l=0;l<d;l+=4)if(255!==u[f+l]){p=!0;break}if(p)break;f+=d}for(a.ascent=r-h,f=c-d,p=!1,h=o;h>r;h--){for(l=0;l<d;l+=4)if(255!==u[f+l]){p=!0;break}if(p)break;f-=d}return a.descent=h-r,a.fontSize=a.ascent+a.descent,n.remove(e),a};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(666),s=i(667),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||(e.updateTileTexture(),this.pipeline.batchTileSprite(this,s))};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id)){var r=t.currentContext,o=e.frame;t.currentBlendMode!==e.blendMode&&(t.currentBlendMode=e.blendMode,r.globalCompositeOperation=t.blendModes[e.blendMode]),t.currentAlpha!==e.alpha&&(t.currentAlpha=e.alpha,r.globalAlpha=e.alpha),t.currentScaleMode!==e.scaleMode&&(t.currentScaleMode=e.scaleMode);var a=o.x-e.originX*e.width,h=o.y-e.originY*e.height;r.save(),r.translate(a,h),r.translate(e.x-s.scrollX*e.scrollFactorX,e.y-s.scrollY*e.scrollFactorY),r.fillStyle=e.canvasPattern,r.translate(-this.tilePositionX,-this.tilePositionY),r.fillRect(this.tilePositionX,this.tilePositionY,e.width,e.height),r.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(144);i(9).register("blitter",function(t,e,i,s){return this.displayList.add(new n(this.scene,t,e,i,s))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(145);i(9).register("dynamicBitmapText",function(t,e,i,s,r){return this.displayList.add(new n(this.scene,t,e,i,s,r))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(146);i(9).register("graphics",function(t){return this.displayList.add(new n(this.scene,t))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(78);i(9).register("group",function(t,e){return"object"==typeof t&&void 0===e&&(e=t,t=[]),this.updateList.add(new n(this.scene,t,e))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(61);i(9).register("image",function(t,e,i,s){return this.displayList.add(new n(this.scene,t,e,i,s))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=i(149);n.register("particles",function(t,e,i){var n=new s(this.scene,t,e,i);return this.displayList.add(n),this.updateList.add(n),n})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=i(308);n.register("follower",function(t,e,i,n,r){var o=new s(this.scene,t,e,i,n,r);return this.displayList.add(o),this.updateList.add(o),o})},function(t,e,i){var n=i(9),s=i(151);n.register("renderTexture",function(t,e,i,n){return this.displayList.add(new s(this.scene,t,e,i,n))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(93);i(9).register("sprite3D",function(t,e,i,s,r){var o=new n(this.scene,t,e,i,s,r);return this.displayList.add(o.gameObject),this.updateList.add(o.gameObject),o})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=i(36);n.register("sprite",function(t,e,i,n){var r=new s(this.scene,t,e,i,n);return this.displayList.add(r),this.updateList.add(r),r})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(143);i(9).register("bitmapText",function(t,e,i,s,r){return this.displayList.add(new n(this.scene,t,e,i,s,r))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(152);i(9).register("text",function(t,e,i,s){return this.displayList.add(new n(this.scene,t,e,i,s))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(153);i(9).register("tileSprite",function(t,e,i,s,r,o){return this.displayList.add(new n(this.scene,t,e,i,s,r,o))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(89);i(9).register("zone",function(t,e,i,s){return this.displayList.add(new n(this.scene,t,e,i,s))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(144),s=i(21),r=i(14),o=i(10);r.register("blitter",function(t){var e=o(t,"key",null),i=o(t,"frame",null),r=new n(this.scene,0,0,e,i);return s(this.scene,r,t),r})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(145),s=i(21),r=i(14),o=i(10);r.register("dynamicBitmapText",function(t){var e=o(t,"font",""),i=o(t,"text",""),r=o(t,"size",!1),a=o(t,"align","left"),h=new n(this.scene,0,0,e,i,r,a);return s(this.scene,h,t),h})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(14),s=i(146);n.register("graphics",function(t){return new s(this.scene,t)})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(14),s=i(78);n.register("group",function(t){return new s(this.scene,null,t)})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(21),s=i(14),r=i(10),o=i(61);s.register("image",function(t){var e=r(t,"key",null),i=r(t,"frame",null),s=new o(this.scene,0,0,e,i);return n(this.scene,s,t),s})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(14),s=i(10),r=i(1),o=i(149);n.register("particles",function(t){var e=s(t,"key",null),i=s(t,"frame",null),n=r(t,"emitters",null),a=new o(this.scene,e,i,n);return r(t,"add",!1)&&this.displayList.add(a),this.updateList.add(a),a})},function(t,e,i){var n=i(21),s=(i(154),i(14)),r=i(10),o=i(151);s.register("renderTexture",function(t){var e=r(t,"x",0),i=r(t,"y",0),s=r(t,"width",32),a=r(t,"height",32),h=new o(this.scene,e,i,s,a);return n(this.scene,h,t),h})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(21),s=i(154),r=i(14),o=i(10),a=i(93);r.register("sprite3D",function(t){var e=o(t,"key",null),i=o(t,"frame",null),r=new a(this.scene,0,0,e,i);return n(this.scene,r,t),s(r,t),r})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(21),s=i(154),r=i(14),o=i(10),a=i(36);r.register("sprite",function(t){var e=o(t,"key",null),i=o(t,"frame",null),r=new a(this.scene,0,0,e,i);return n(this.scene,r,t),s(r,t),r})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(143),s=i(21),r=i(14),o=i(10),a=i(4);r.register("bitmapText",function(t){var e=a(t,"font",""),i=o(t,"text",""),r=o(t,"size",!1),h=new n(this.scene,0,0,e,i,r);return s(this.scene,h,t),h})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(21),s=i(14),r=i(10),o=i(152);s.register("text",function(t){var e=r(t,"text",""),i=r(t,"style",null),s=r(t,"padding",null);null!==s&&(i.padding=s);var a=new o(this.scene,0,0,e,i);return n(this.scene,a,t),a.autoRound=r(t,"autoRound",!0),a.resolution=r(t,"resolution",1),a})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(21),s=i(14),r=i(10),o=i(153);s.register("tileSprite",function(t){var e=r(t,"x",0),i=r(t,"y",0),s=r(t,"width",512),a=r(t,"height",512),h=r(t,"key",""),l=r(t,"frame",""),u=new o(this.scene,e,i,s,a,h,l);return n(this.scene,u,t),u})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(14),s=i(10),r=i(89);n.register("zone",function(t){var e=s(t,"x",0),i=s(t,"y",0),n=s(t,"width",1),o=s(t,"height",n);return new r(this.scene,e,i,n,o)})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(696),s=i(697),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchMesh(e,s)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(){};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(100);i(9).register("mesh",function(t,e,i,s,r,o,a,h){return this.displayList.add(new n(this.scene,t,e,i,s,r,o,a,h))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(155);i(9).register("quad",function(t,e,i,s){return this.displayList.add(new n(this.scene,t,e,i,s))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(21),s=i(14),r=i(10),o=i(4),a=i(100);s.register("mesh",function(t){var e=r(t,"key",null),i=r(t,"frame",null),s=o(t,"vertices",[]),h=o(t,"colors",[]),l=o(t,"alphas",[]),u=o(t,"uv",[]),c=new a(this.scene,0,0,s,u,h,l,e,i);return n(this.scene,c,t),c})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(21),s=i(14),r=i(10),o=i(155);s.register("quad",function(t){var e=r(t,"x",0),i=r(t,"y",0),s=r(t,"key",null),a=r(t,"frame",null),h=new o(this.scene,e,i,s,a);return n(this.scene,h,t),h})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(311),r=i(11),o=new n({Extends:s,initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),s.call(this)},boot:function(){var t=this.systems.events;t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},destroy:function(){this.shutdown(),this.scene=void 0,this.systems=void 0}});r.register("LightsPlugin",o,"lights"),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(72);n.Area=i(704),n.Circumference=i(215),n.CircumferencePoint=i(115),n.Clone=i(705),n.Contains=i(34),n.ContainsPoint=i(706),n.ContainsRect=i(707),n.CopyFrom=i(708),n.Equals=i(709),n.GetBounds=i(710),n.GetPoint=i(213),n.GetPoints=i(214),n.Offset=i(711),n.OffsetPoint=i(712),n.Random=i(116),t.exports=n},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.radius>0?Math.PI*t.radius*t.radius:0};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(72),s=function(t){return new n(t.x,t.y,t.radius)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(34),s=function(t,e){return n(t,e.x,e.y)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(34),s=function(t,e){return n(t,e.x,e.y)&&n(t,e.right,e.y)&&n(t,e.x,e.bottom)&&n(t,e.right,e.bottom)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.setTo(t.x,t.y,t.radius)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x===e.x&&t.y===e.y&&t.radius===e.radius};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=function(t,e){return void 0===e&&(e=new n),e.x=t.left,e.y=t.top,e.width=t.diameter,e.height=t.diameter,e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t.x+=e,t.y+=i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x+=e.x,t.y+=e.y,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(46),s=function(t,e){return n(t.x,t.y,e.x,e.y)<=t.radius+e.radius};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=e.width/2,n=e.height/2,s=Math.abs(t.x-e.x-i),r=Math.abs(t.y-e.y-n),o=i+t.radius,a=n+t.radius;if(s>o||r>a)return!1;if(s<=i||r<=n)return!0;var h=s-i,l=r-n;return h*h+l*l<=t.radius*t.radius};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=i(314),r=function(t,e,i){return void 0===i&&(i=new n),s(t,e)&&(i.x=Math.max(t.x,e.x),i.y=Math.max(t.y,e.y),i.width=Math.min(t.right,e.right)-i.x,i.height=Math.min(t.bottom,e.bottom)-i.y),i};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.x1,n=t.y1,s=t.x2,r=t.y2,o=e.x,a=e.y,h=e.right,l=e.bottom,u=0;if(i>=o&&i<=h&&n>=a&&n<=l||s>=o&&s<=h&&r>=a&&r<=l)return!0;if(i<o&&s>=o){if((u=n+(r-n)*(o-i)/(s-i))>a&&u<=l)return!0}else if(i>h&&s<=h&&(u=n+(r-n)*(h-i)/(s-i))>=a&&u<=l)return!0;if(n<a&&r>=a){if((u=i+(s-i)*(a-n)/(r-n))>=o&&u<=h)return!0}else if(n>l&&r<=l&&(u=i+(s-i)*(l-n)/(r-n))>=o&&u<=h)return!0;return!1};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(316),s=function(t,e){if(!n(t,e))return!1;var i=Math.min(e.x1,e.x2),s=Math.max(e.x1,e.x2),r=Math.min(e.y1,e.y2),o=Math.max(e.y1,e.y2);return t.x>=i&&t.x<=s&&t.y>=r&&t.y<=o};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(101),s=i(35),r=i(156),o=i(317),a=function(t,e){if(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)return!1;var i=e.getLineA(),a=e.getLineB(),h=e.getLineC();if(s(t,i.x1,i.y1)||s(t,i.x2,i.y2))return!0;if(s(t,a.x1,a.y1)||s(t,a.x2,a.y2))return!0;if(s(t,h.x1,h.y1)||s(t,h.x2,h.y2))return!0;var l=t.getLineA(),u=t.getLineB(),c=t.getLineC(),d=t.getLineD();if(n(i,l)||n(i,u)||n(i,c)||n(i,d))return!0;if(n(a,l)||n(a,u)||n(a,c)||n(a,d))return!0;if(n(h,l)||n(h,u)||n(h,c)||n(h,d))return!0;var f=o(t);return r(e,f,!0).length>0};t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s,r){return void 0===r&&(r=0),!(e>t.right+r||i<t.left-r||n>t.bottom+r||s<t.top-r)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(315),s=i(63),r=function(t,e){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)&&(!!s(t,e.x,e.y)||(!!n(t.getLineA(),e)||(!!n(t.getLineB(),e)||!!n(t.getLineC(),e))))};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(63),s=i(101),r=function(t,e){return!(!n(t,e.getPointA())&&!n(t,e.getPointB()))||(!!s(t.getLineA(),e)||(!!s(t.getLineB(),e)||!!s(t.getLineC(),e)))};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(156),s=i(318),r=i(101),o=function(t,e){if(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)return!1;var i=t.getLineA(),o=t.getLineB(),a=t.getLineC(),h=e.getLineA(),l=e.getLineB(),u=e.getLineC();if(r(i,h)||r(i,l)||r(i,u))return!0;if(r(o,h)||r(o,l)||r(o,u))return!0;if(r(a,h)||r(a,l)||r(a,u))return!0;var c=s(t),d=n(e,c,!0);return d.length>0||(c=s(e),d=n(t,c,!0),d.length>0)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(319);n.Angle=i(64),n.BresenhamPoints=i(223),n.CenterOn=i(724),n.Clone=i(725),n.CopyFrom=i(726),n.Equals=i(727),n.GetMidPoint=i(728),n.GetNormal=i(729),n.GetPoint=i(320),n.GetPoints=i(122),n.Height=i(730),n.Length=i(74),n.NormalAngle=i(321),n.NormalX=i(731),n.NormalY=i(732),n.Offset=i(733),n.PerpSlope=i(734),n.Random=i(124),n.ReflectAngle=i(735),n.Rotate=i(736),n.RotateAroundPoint=i(737),n.RotateAroundXY=i(157),n.SetToAngle=i(738),n.Slope=i(739),n.Width=i(740),t.exports=n},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=e-(t.x1+t.x2)/2,s=i-(t.y1+t.y2)/2;return t.x1+=n,t.y1+=s,t.x2+=n,t.y2+=s,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(319),s=function(t){return new n(t.x1,t.y1,t.x2,t.y2)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.setTo(t.x1,t.y1,t.x2,t.y2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x1===e.x1&&t.y1===e.y1&&t.x2===e.x2&&t.y2===e.y2};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e){return void 0===e&&(e=new n),e.x=(t.x1+t.x2)/2,e.y=(t.y1+t.y2)/2,e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(15),s=i(64),r=i(5),o=function(t,e){void 0===e&&(e=new r);var i=s(t)-n.TAU;return e.x=Math.cos(i),e.y=Math.sin(i),e};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.abs(t.y1-t.y2)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(15),s=i(64),r=function(t){return Math.cos(s(t)-n.TAU)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(15),s=i(64),r=function(t){return Math.sin(s(t)-n.TAU)};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t.x1+=e,t.y1+=i,t.x2+=e,t.y2+=i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return-(t.x2-t.x1)/(t.y2-t.y1)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(64),s=i(321),r=function(t,e){return 2*s(e)-Math.PI-n(t)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(157),s=function(t,e){var i=(t.x1+t.x2)/2,s=(t.y1+t.y2)/2;return n(t,i,s,e)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(157),s=function(t,e,i){return n(t,e.x,e.y,i)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){return t.x1=e,t.y1=i,t.x2=e+Math.cos(n)*s,t.y2=i+Math.sin(n)*s,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t.y2-t.y1)/(t.x2-t.x1)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.abs(t.x1-t.x2)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5);n.Ceil=i(742),n.Clone=i(743),n.CopyFrom=i(744),n.Equals=i(745),n.Floor=i(746),n.GetCentroid=i(747),n.GetMagnitude=i(322),n.GetMagnitudeSq=i(323),n.GetRectangleFromPoints=i(748),n.Interpolate=i(749),n.Invert=i(750),n.Negative=i(751),n.Project=i(752),n.ProjectUnit=i(753),n.SetMagnitude=i(754),t.exports=n},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.setTo(Math.ceil(t.x),Math.ceil(t.y))};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t){return new n(t.x,t.y)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.setTo(t.x,t.y)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x===e.x&&t.y===e.y};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.setTo(Math.floor(t.x),Math.floor(t.y))};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e){if(void 0===e&&(e=new n),!Array.isArray(t))throw new Error("GetCentroid points argument must be an array");var i=t.length;if(i<1)throw new Error("GetCentroid points array must not be empty");if(1===i)e.x=t[0].x,e.y=t[0].y;else{for(var s=0;s<i;s++)e.x+=t[s].x,e.y+=t[s].y;e.x/=i,e.y/=i}return e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=function(t,e){void 0===e&&(e=new n);for(var i=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=0;a<t.length;a++){var h=t[a];h.x>i&&(i=h.x),h.x<s&&(s=h.x),h.y>r&&(r=h.y),h.y<o&&(o=h.y)}return e.x=s,e.y=o,e.width=i-s,e.height=r-o,e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e,i,s){return void 0===i&&(i=0),void 0===s&&(s=new n),s.x=t.x+(e.x-t.x)*i,s.y=t.y+(e.y-t.y)*i,s};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.setTo(t.y,t.x)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e){return void 0===e&&(e=new n),e.setTo(-t.x,-t.y)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=i(323),r=function(t,e,i){void 0===i&&(i=new n);var r=t.x*e.x+t.y*e.y,o=r/s(e);return 0!==o&&(i.x=o*e.x,i.y=o*e.y),i};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e,i){void 0===i&&(i=new n);var s=t.x*e.x+t.y*e.y;return 0!==s&&(i.x=s*e.x,i.y=s*e.y),i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(322),s=function(t,e){if(0!==t.x||0!==t.y){var i=n(t);t.x/=i,t.y/=i}return t.x*=e,t.y*=e,t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(324);n.Clone=i(756),n.Contains=i(158),n.ContainsPoint=i(757),n.GetAABB=i(758),n.GetNumberArray=i(759),t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(324),s=function(t){return new n(t.points)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(158),s=function(t,e){return n(t,e.x,e.y)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=function(t,e){void 0===e&&(e=new n);for(var i,s=1/0,r=1/0,o=-s,a=-r,h=0;h<t.points.length;h++)i=t.points[h],s=Math.min(s,i.x),r=Math.min(r,i.y),o=Math.max(o,i.x),a=Math.max(a,i.y);return e.x=s,e.y=r,e.width=o-s,e.height=a-r,e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){void 0===e&&(e=[]);for(var i=0;i<t.points.length;i++)e.push(t.points[i].x),e.push(t.points[i].y);return e};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.width*t.height};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t.width=Math.ceil(t.width),t.height=Math.ceil(t.height),t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=function(t){return new n(t.x,t.y,t.width,t.height)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(35),s=function(t,e){return n(t,e.x,e.y)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return!(e.width*e.height>t.width*t.height)&&(e.x>t.x&&e.x<t.right&&e.right>t.x&&e.right<t.right&&e.y>t.y&&e.y<t.bottom&&e.bottom>t.y&&e.bottom<t.bottom)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.setTo(t.x,t.y,t.width,t.height)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(159),s=function(t,e){var i=n(t);return i<n(e)?t.setSize(e.height*i,e.height):t.setSize(e.width,e.width/i),t.setPosition(e.centerX-t.width/2,e.centerY-t.height/2)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(159),s=function(t,e){var i=n(t);return i>n(e)?t.setSize(e.height*i,e.height):t.setSize(e.width,e.width/i),t.setPosition(e.centerX-t.width/2,e.centerY-t.height/2)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t.width=Math.floor(t.width),t.height=Math.floor(t.height),t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e){return void 0===e&&(e=new n),e.x=t.centerX,e.y=t.centerY,e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e){return void 0===e&&(e=new n),e.x=t.width,e.y=t.height,e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(326),s=function(t,e,i){var s=t.centerX,r=t.centerY;return t.setSize(t.width+2*e,t.height+2*i),n(t,s,r)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=t.x,n=t.right,s=t.y,r=t.bottom,o=0;o<e.length;o++)i=Math.min(i,e[o].x),n=Math.max(n,e[o].x),s=Math.min(s,e[o].y),r=Math.max(r,e[o].y);return t.x=i,t.y=s,t.width=n-i,t.height=r-s,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=Math.min(t.x,e.x),n=Math.max(t.right,e.right);t.x=i,t.width=n-i;var s=Math.min(t.y,e.y),r=Math.max(t.bottom,e.bottom);return t.y=s,t.height=r-s,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=Math.min(t.x,e),s=Math.max(t.right,e);t.x=n,t.width=s-n;var r=Math.min(t.y,i),o=Math.max(t.bottom,i);return t.y=r,t.height=o-r,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t.x+=e,t.y+=i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x+=e.x,t.y+=e.y,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x<e.right&&t.right>e.x&&t.y<e.bottom&&t.bottom>e.y};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=i(43),r=function(t,e,i){void 0===i&&(i=new n),e=s(e);var r=Math.sin(e),o=Math.cos(e),a=o>0?t.width/2:t.width/-2,h=r>0?t.height/2:t.height/-2;return Math.abs(a*r)<Math.abs(h*o)?h=a*r/o:a=h*o/r,i.x=a+t.centerX,i.y=h+t.centerY,i};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=e),t.width*=e,t.height*=i,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=function(t,e,i){void 0===i&&(i=new n);var s=Math.min(t.x,e.x),r=Math.min(t.y,e.y);return i.setTo(s,r,Math.max(t.right,e.right)-s,Math.max(t.bottom,e.bottom)-r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(65);n.Area=i(785),n.BuildEquilateral=i(786),n.BuildFromPolygon=i(787),n.BuildRight=i(788),n.CenterOn=i(789),n.Centroid=i(329),n.CircumCenter=i(790),n.CircumCircle=i(791),n.Clone=i(792),n.Contains=i(63),n.ContainsArray=i(156),n.ContainsPoint=i(793),n.CopyFrom=i(794),n.Decompose=i(318),n.Equals=i(795),n.GetPoint=i(327),n.GetPoints=i(328),n.InCenter=i(331),n.Perimeter=i(796),n.Offset=i(330),n.Random=i(125),n.Rotate=i(797),n.RotateAroundPoint=i(798),n.RotateAroundXY=i(160),t.exports=n},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=t.x1,i=t.y1,n=t.x2,s=t.y2,r=t.x3,o=t.y3;return Math.abs(((r-e)*(s-i)-(n-e)*(o-i))/2)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(65),s=function(t,e,i){var s=i*(Math.sqrt(3)/2);return new n(t,e,t+i/2,e+s,t-i/2,e+s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(254),s=i(65),r=function(t,e,i,r,o){void 0===e&&(e=null),void 0===i&&(i=1),void 0===r&&(r=1),void 0===o&&(o=[]);for(var a,h,l,u,c,d,f,p,v,g=n(t,e),y=0;y<g.length;y+=3)a=g[y],h=g[y+1],l=g[y+2],u=t[2*a]*i,c=t[2*a+1]*r,d=t[2*h]*i,f=t[2*h+1]*r,p=t[2*l]*i,v=t[2*l+1]*r,o.push(new s(u,c,d,f,p,v));return o};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(65),s=function(t,e,i,s){return void 0===s&&(s=i),new n(t,e,t,e-s,t+i,e)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(329),s=i(330),r=function(t,e,i,r){void 0===r&&(r=n);var o=r(t),a=e-o.x,h=i-o.y;return s(t,a,h)};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
function i(t,e,i,n){return t*n-e*i}var n=function(t,e){void 0===e&&(e={x:0,y:0});var n=t.x3,s=t.y3,r=t.x1-n,o=t.y1-s,a=t.x2-n,h=t.y2-s,l=2*i(r,o,a,h),u=i(o,r*r+o*o,h,a*a+h*h),c=i(r,r*r+o*o,a,a*a+h*h);return e.x=n-u/l,e.y=s+c/l,e};t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(72),s=function(t,e){void 0===e&&(e=new n);var i,s,r=t.x1,o=t.y1,a=t.x2,h=t.y2,l=t.x3,u=t.y3,c=a-r,d=h-o,f=l-r,p=u-o,v=c*(r+a)+d*(o+h),g=f*(r+l)+p*(o+u),y=2*(c*(u-h)-d*(l-a));if(Math.abs(y)<1e-6){var m=Math.min(r,a,l),x=Math.min(o,h,u);i=.5*(Math.max(r,a,l)-m),s=.5*(Math.max(o,h,u)-x),e.x=m+i,e.y=x+s,e.radius=Math.sqrt(i*i+s*s)}else e.x=(p*v-d*g)/y,e.y=(c*g-f*v)/y,i=e.x-r,s=e.y-o,e.radius=Math.sqrt(i*i+s*s);return e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(65),s=function(t){return new n(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(63),s=function(t,e){return n(t,e.x,e.y)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.setTo(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x1===e.x1&&t.y1===e.y1&&t.x2===e.x2&&t.y2===e.y2&&t.x3===e.x3&&t.y3===e.y3};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(74),s=function(t){var e=t.getLineA(),i=t.getLineB(),s=t.getLineC();return n(e)+n(i)+n(s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(160),s=i(331),r=function(t,e){var i=s(t);return n(t,i.x,i.y,e)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(160),s=function(t,e,i){return n(t,e.x,e.y,i)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Gamepad:i(800),InputManager:i(258),InputPlugin:i(805),InteractiveObject:i(332),Keyboard:i(806),Mouse:i(811),Pointer:i(267),Touch:i(812)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Axis:i(261),Button:i(262),Gamepad:i(260),GamepadManager:i(259),Configs:i(801)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={DUALSHOCK_4:i(802),SNES_USB:i(803),XBOX_360:i(804)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={UP:12,DOWN:13,LEFT:14,RIGHT:15,SHARE:8,OPTIONS:9,PS:16,TOUCHBAR:17,X:0,CIRCLE:1,SQUARE:2,TRIANGLE:3,L1:4,R1:5,L2:6,R2:7,L3:10,R3:11,LEFT_STICK_H:0,LEFT_STICK_V:1,RIGHT_STICK_H:2,RIGHT_STICK_V:3}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={UP:12,DOWN:13,LEFT:14,RIGHT:15,SELECT:8,START:9,B:0,A:1,Y:2,X:3,LEFT_SHOULDER:4,RIGHT_SHOULDER:5}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={UP:12,DOWN:13,LEFT:14,RIGHT:15,MENU:16,A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,BACK:8,START:9,LS:10,RS:11,LEFT_STICK_H:0,LEFT_STICK_V:1,RIGHT_STICK_H:2,RIGHT_STICK_V:3}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(72),s=i(34),r=i(0),o=i(46),a=i(147),h=i(77),l=i(13),u=i(332),c=i(11),d=i(8),f=i(35),p=i(65),v=i(63),g=new r({Extends:l,initialize:function(t){l.call(this),this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),this.manager=t.sys.game.input,this.displayList,this.cameras,this.keyboard=this.manager.keyboard,this.mouse=this.manager.mouse,this.gamepad=this.manager.gamepad,this.topOnly=!0,this.pollRate=-1,this._pollTimer=0,this.dragDistanceThreshold=0,this.dragTimeThreshold=0,this._temp=[],this._list=[],this._pendingInsertion=[],this._pendingRemoval=[],this._draggable=[],this._drag={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]},this._over={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]},this._validTypes=["onDown","onUp","onOver","onOut","onMove","onDragStart","onDrag","onDragEnd","onDragEnter","onDragLeave","onDragOver","onDrop"]},boot:function(){var t=this.systems.events;t.on("preupdate",this.preUpdate,this),t.on("update",this.update,this),t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this),this.cameras=this.systems.cameras,this.displayList=this.systems.displayList},preUpdate:function(){var t=this._pendingRemoval,e=this._pendingInsertion,i=t.length,n=e.length;if(0!==i||0!==n){for(var s=this._list,r=0;r<i;r++){var o=t[r],a=s.indexOf(o);a>-1&&(s.splice(a,1),this.clear(o))}t.length=0,this._list=s.concat(e.splice(0))}},clear:function(t){var e=t.input;return e.gameObject=void 0,e.target=void 0,e.hitArea=void 0,e.hitAreaCallback=void 0,e.callbackContext=void 0,t.input=null,t},disable:function(t){t.input.enabled=!1},enable:function(t,e,i){return t.input?t.input.enabled=!0:this.setHitArea(t,e,i),this},hitTestPointer:function(t){var e=this.cameras.getCameraBelowPointer(t);return e?(t.camera=e,this.manager.hitTest(t.x,t.y,this._list,e)):[]},processDownEvents:function(t){var e=this._temp;this.emit("pointerdown",t,e);for(var i=0,n=0;n<e.length;n++){var s=e[n];s.input&&(i++,s.emit("pointerdown",t,s.input.localX,s.input.localY,t.camera),this.emit("gameobjectdown",t,s))}return i},processDragEvents:function(t,e){if(0===this._draggable.length)return 0;var i,n,s,r,a,h=this._temp;if(0===t.dragState&&t.primaryDown&&t.justDown&&h.length>0?t.dragState=1:t.dragState>0&&!t.primaryDown&&t.justUp&&(t.dragState=5),1===t.dragState){var l=[];for(i=0;i<h.length;i++)s=h[i],s.input.draggable&&l.push(s);if(0===l.length)return void(t.dragState=0);l.length>1&&(this.sortGameObjects(l),this.topOnly&&l.splice(1)),this._drag[t.id]=l,0===this.dragDistanceThreshold&&0===this.dragTimeThreshold?t.dragState=3:t.dragState=2}if(2===t.dragState&&(this.dragDistanceThreshold>0&&o(t.x,t.y,t.downX,t.downY)>=this.dragDistanceThreshold&&(t.dragState=3),this.dragTimeThreshold>0&&e>=t.downTime+this.dragTimeThreshold&&(t.dragState=3)),3===t.dragState){for(r=this._drag[t.id],i=0;i<r.length;i++)s=r[i],a=s.input,a.dragState=2,a.dragX=t.x-s.x,a.dragY=t.y-s.y,a.dragStartX=s.x,a.dragStartY=s.y,s.emit("dragstart",t,a.dragX,a.dragY),this.emit("dragstart",t,s);return void(t.dragState=4)}if(4===t.dragState&&t.justMoved){var u=[];for(n=0;n<h.length;n++)h[n].input.dropZone&&u.push(h[n]);for(r=this._drag[t.id],i=0;i<r.length;i++){if(s=r[i],a=s.input,a.target){var c=u.indexOf(a.target);0===c?(s.emit("dragover",t,a.target),this.emit("dragover",t,s,a.target)):c>0?(s.emit("dragleave",t,a.target),this.emit("dragleave",t,s,a.target),a.target=u[0],s.emit("dragenter",t,a.target),this.emit("dragenter",t,s,a.target)):(s.emit("dragleave",t,a.target),this.emit("dragleave",t,s,a.target),u[0]?(a.target=u[0],s.emit("dragenter",t,a.target),this.emit("dragenter",t,s,a.target)):a.target=null)}else!a.target&&u[0]&&(a.target=u[0],s.emit("dragenter",t,a.target),this.emit("dragenter",t,s,a.target));var d=t.x-s.input.dragX,f=t.y-s.input.dragY;s.emit("drag",t,d,f),this.emit("drag",t,s,d,f)}}if(5===t.dragState){for(r=this._drag[t.id],i=0;i<r.length;i++){s=r[i],a=s.input,a.dragState=0,a.dragX=a.localX-s.displayOriginX,a.dragY=a.localY-s.displayOriginY;var p=!1;a.target&&(s.emit("drop",t,a.target),this.emit("drop",t,s,a.target),a.target=null,p=!0),s.emit("dragend",t,a.dragX,a.dragY,p),this.emit("dragend",t,s,p)}t.dragState=0}return t.dragState>0},processMoveEvents:function(t){var e=this._temp;this.emit("pointermove",t,e);for(var i=0,n=0;n<e.length;n++){var s=e[n];if(s.input&&(i++,s.emit("pointermove",t,s.input.localX,s.input.localY),this.emit("gameobjectmove",t,s),this.topOnly))break}return i},processOverOutEvents:function(t){var e,i,n=this._temp,s=[],r=[],o=[],a=this._over[t.id];for(e=0;e<a.length;e++)i=a[e],-1===n.indexOf(i)?s.push(i):o.push(i);for(e=0;e<n.length;e++)i=n[e],-1===a.indexOf(i)&&r.push(i);var h=s.length;if(h>0)for(this.sortGameObjects(s),this.emit("pointerout",t,s),e=0;e<h;e++)i=s[e],i.input&&(this.emit("gameobjectout",t,i),i.emit("pointerout",t));if((h=r.length)>0)for(this.sortGameObjects(r),this.emit("pointerover",t,r),e=0;e<h;e++)i=r[e],i.input&&(this.emit("gameobjectover",t,i),i.emit("pointerover",t,i.input.localX,i.input.localY));return a=o.concat(r),this._over[t.id]=this.sortGameObjects(a),a.length},processUpEvents:function(t){var e=this._temp;this.emit("pointerup",t,e);for(var i=0;i<e.length;i++){var n=e[i];n.input&&(n.emit("pointerup",t,n.input.localX,n.input.localY),this.emit("gameobjectup",t,n))}},queueForInsertion:function(t){return-1===this._pendingInsertion.indexOf(t)&&-1===this._list.indexOf(t)&&this._pendingInsertion.push(t),this},queueForRemoval:function(t){return this._pendingRemoval.push(t),this},setDraggable:function(t,e){void 0===e&&(e=!0),Array.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++){var n=t[i];n.input.draggable=e;var s=this._draggable.indexOf(n);e&&-1===s?this._draggable.push(n):!e&&s>-1&&this._draggable.splice(s,1)}return this},setHitArea:function(t,e,i){if(void 0===e)return this.setHitAreaFromTexture(t);Array.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++){var s=t[n];s.input=u(s,e,i),this.queueForInsertion(s)}return this},setHitAreaCircle:function(t,e,i,r,o){void 0===o&&(o=s);var a=new n(e,i,r);return this.setHitArea(t,a,o)},setHitAreaEllipse:function(t,e,i,n,s,r){void 0===r&&(r=h);var o=new a(e,i,n,s);return this.setHitArea(t,o,r)},setHitAreaFromTexture:function(t,e){void 0===e&&(e=f),Array.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++){var n=t[i],s=n.frame,r=0,o=0;s?(r=s.realWidth,o=s.realHeight):n.width&&(r=n.width,o=n.height),0!==r&&0!==o&&(n.input=u(n,new d(0,0,r,o),e),this.queueForInsertion(n))}return this},setHitAreaRectangle:function(t,e,i,n,s,r){void 0===r&&(r=f);var o=new d(e,i,n,s);return this.setHitArea(t,o,r)},setHitAreaTriangle:function(t,e,i,n,s,r,o,a){void 0===a&&(a=v);var h=new p(e,i,n,s,r,o);return this.setHitArea(t,h,a)},setPollAlways:function(){return this.pollRate=0,this._pollTimer=0,this},setPollOnMove:function(){return this.pollRate=-1,this._pollTimer=0,this},setPollRate:function(t){return this.pollRate=t,this._pollTimer=0,this},setGlobalTopOnly:function(t){return this.manager.globalTopOnly=t,this},setTopOnly:function(t){return this.topOnly=t,this},sortGameObjects:function(t){return t.length<2?t:(this.scene.sys.depthSort(),t.sort(this.sortHandlerGO.bind(this)))},sortHandlerGO:function(t,e){var i=this.displayList.getIndex(t),n=this.displayList.getIndex(e);return i<n?1:i>n?-1:0},sortHandlerIO:function(t,e){var i=this.displayList.getIndex(t.gameObject),n=this.displayList.getIndex(e.gameObject);return i<n?1:i>n?-1:0},sortInteractiveObjects:function(t){return t.length<2?t:(this.scene.sys.depthSort(),t.sort(this.sortHandlerIO.bind(this)))},stopPropagation:function(){return this.manager.globalTopOnly&&(this.manager.ignoreEvents=!0),this},update:function(t,e){var i=this.manager;if(!i.globalTopOnly||!i.ignoreEvents){var n=i.activePointer,s=n.dirty||0===this.pollRate;if(this.pollRate>-1&&(this._pollTimer-=e,this._pollTimer<0&&(s=!0,this._pollTimer=this.pollRate)),s){this._temp=this.hitTestPointer(n),this.sortGameObjects(this._temp),this.topOnly&&this._temp.length&&this._temp.splice(1);var r=this.processDragEvents(n,t);n.wasTouch||(r+=this.processOverOutEvents(n)),n.justDown&&(r+=this.processDownEvents(n)),n.justUp&&this.processUpEvents(n),n.justMoved&&(r+=this.processMoveEvents(n)),r>0&&i.globalTopOnly&&(i.ignoreEvents=!0)}}},shutdown:function(){this._temp.length=0,this._list.length=0,this._draggable.length=0,this._pendingRemoval.length=0,this._pendingInsertion.length=0;for(var t=0;t<10;t++)this._drag[t]=[],this._over[t]=[];this.removeAllListeners()},destroy:function(){this.shutdown(),this.scene=void 0,this.cameras=void 0,this.manager=void 0,this.events=void 0,this.keyboard=void 0,this.mouse=void 0,this.gamepad=void 0},activePointer:{get:function(){return this.manager.activePointer}},x:{get:function(){return this.manager.activePointer.x}},y:{get:function(){return this.manager.activePointer.y}}});c.register("InputPlugin",g,"input"),t.exports=g},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={KeyboardManager:i(263),Key:i(264),KeyCodes:i(140),KeyCombo:i(265),JustDown:i(807),JustUp:i(808),DownDuration:i(809),UpDuration:i(810)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=!1;return t.isDown&&(e=t._justDown,t._justDown=!1),e};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=!1;return t.isDown&&(e=t._justUp,t._justUp=!1),e};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=50),t.isDown&&t.duration<e};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=50),t.isUp&&t.duration<e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={MouseManager:i(266)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={TouchManager:i(268)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={FileTypes:i(814),File:i(19),FileTypesManager:i(7),GetURL:i(161),LoaderPlugin:i(830),MergeXHRSettings:i(162),XHRLoader:i(333),XHRSettings:i(102)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={AnimationJSONFile:i(815),AtlasJSONFile:i(816),AudioFile:i(334),AudioSprite:i(817),BinaryFile:i(818),BitmapFontFile:i(819),GLSLFile:i(820),HTML5AudioFile:i(335),HTMLFile:i(821),ImageFile:i(67),JSONFile:i(66),MultiAtlas:i(822),PluginFile:i(823),ScriptFile:i(824),SpriteSheetFile:i(825),SVGFile:i(826),TextFile:i(338),TilemapCSVFile:i(827),TilemapJSONFile:i(828),UnityAtlasFile:i(829),XMLFile:i(336)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(7),s=i(66),r=function(t,e,i,n){var r=new s(t,e,i,n);return r.type="animationJSON",r};n.register("animation",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new r(t[n],e,this.path,i));else this.addFile(new r(t,e,this.path,i));return this}),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(7),s=i(67),r=i(66),o=function(t,e,i,n,o,a){var h=new s(t,e,n,o),l=new r(t,i,n,a);return h.linkFile=l,l.linkFile=h,h.linkType="atlasjson",l.linkType="atlasjson",{texture:h,data:l}};n.register("atlas",function(t,e,i,n,s){var r=new o(t,e,i,this.path,n,s);return this.addFile(r.texture),this.addFile(r.data),this}),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(334),s=i(18),r=i(7),o=i(66);r.register("audioSprite",function(t,e,i,r,a,h){var l=n.create(this,t,e,r,a);if(l){var u;"string"==typeof i?(u=new o(t,i,this.path,h),this.addFile(u)):u={type:"json",key:t,data:i,state:s.FILE_WAITING_LINKFILE},l.linkFile=u,u.linkFile=l,l.linkType="audioSprite",u.linkType="audioSprite",this.addFile(l)}return this})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(19),o=i(7),a=i(1),h=new n({Extends:r,initialize:function(t,e,i,n){var s="string"==typeof t?t:a(t,"key",""),o={type:"binary",extension:a(t,"extension","bin"),responseType:"arraybuffer",key:s,url:a(t,"file",e),path:i,xhrSettings:a(t,"xhr",n)};r.call(this,o)},onProcess:function(t){this.state=s.FILE_PROCESSING,this.data=this.xhrLoader.response,this.onComplete(),t(this)}});o.register("binary",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new h(t[n],e,this.path,i));else this.addFile(new h(t,e,this.path,i));return this}),t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(7),s=i(67),r=i(336),o=function(t,e,i,n,o,a){var h=new s(t,e,n,o),l=new r(t,i,n,a);return h.linkFile=l,l.linkFile=h,h.linkType="bitmapfont",l.linkType="bitmapfont",{texture:h,data:l}};n.register("bitmapFont",function(t,e,i,n,s){var r=new o(t,e,i,this.path,n,s);return this.addFile(r.texture),this.addFile(r.data),this}),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(19),o=i(7),a=i(1),h=new n({Extends:r,initialize:function(t,e,i,n){var s="string"==typeof t?t:a(t,"key",""),o={type:"glsl",extension:a(t,"extension","glsl"),responseType:"text",key:s,url:a(t,"file",e),path:i,xhrSettings:a(t,"xhr",n)};r.call(this,o)},onProcess:function(t){this.state=s.FILE_PROCESSING,this.data=this.xhrLoader.responseText,this.onComplete(),t(this)}});o.register("glsl",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new h(t[n],e,this.path,i));else this.addFile(new h(t,e,this.path,i));return this}),t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(19),o=i(7),a=i(1),h=new n({Extends:r,initialize:function(t,e,i,n,s,o){void 0===i&&(i=512),void 0===n&&(n=512);var h="string"==typeof t?t:a(t,"key",""),l={type:"html",extension:a(t,"extension","html"),responseType:"text",key:h,url:a(t,"file",e),path:s,xhrSettings:a(t,"xhr",o),config:{width:i,height:n}};r.call(this,l)},onProcess:function(t){this.state=s.FILE_PROCESSING;var e=this.config.width,i=this.config.height,n=[];n.push('<svg width="'+e+'px" height="'+i+'px" viewBox="0 0 '+e+" "+i+'" xmlns="http://www.w3.org/2000/svg">'),n.push('<foreignObject width="100%" height="100%">'),n.push('<body xmlns="http://www.w3.org/1999/xhtml">'),n.push(this.xhrLoader.responseText),n.push("</body>"),n.push("</foreignObject>"),n.push("</svg>");var o=[n.join("\n")],a=this;try{var h=new window.Blob(o,{type:"image/svg+xml;charset=utf-8"})}catch(e){return a.state=s.FILE_ERRORED,void t(a)}this.data=new Image,this.data.crossOrigin=this.crossOrigin,this.data.onload=function(){r.revokeObjectURL(a.data),a.onComplete(),t(a)},this.data.onerror=function(){r.revokeObjectURL(a.data),a.state=s.FILE_ERRORED,t(a)},r.createObjectURL(this.data,h,"image/svg+xml")}});o.register("html",function(t,e,i,n,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)this.addFile(new h(t[r],e,i,n,this.path,s));else this.addFile(new h(t,e,i,n,this.path,s));return this}),t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(7),s=i(67),r=i(66),o=i(337);n.register("multiatlas",function(t,e,i,n,a){if("number"==typeof e){var h=e,l=void 0===i?"":i;e=o(0,h,t+l,".png"),i=o(0,h,t+l,".json")}else Array.isArray(e)||(e=[e]),Array.isArray(i)||(i=[i]);var u,c,d=0;for(this._multilist[t]=[],d=0;d<e.length;d++)c="_MA_IMG_"+t+"_"+d.toString(),u=new s(c,e[d],this.path,n),this.addFile(u),this._multilist[t].push(c);for(d=0;d<i.length;d++)c="_MA_JSON_"+t+"_"+d.toString(),u=new r(c,i[d],this.path,a),this.addFile(u),this._multilist[t].push(c);return this})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(19),o=i(7),a=i(1),h=i(11),l=new n({Extends:r,initialize:function(t,e,i,n){var s="string"==typeof t?t:a(t,"key",""),o={type:"script",extension:a(t,"extension","js"),responseType:"text",key:s,url:a(t,"file",e),path:i,xhrSettings:a(t,"xhr",n)};r.call(this,o)},onProcess:function(t){this.state=s.FILE_PROCESSING,this.data=document.createElement("script"),this.data.language="javascript",this.data.type="text/javascript",this.data.defer=!1,this.data.text=this.xhrLoader.responseText,document.head.appendChild(this.data),window[this.key].register(h),this.onComplete(),t(this)}});o.register("plugin",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new l(t[n],e,this.path,i));else this.addFile(new l(t,e,this.path,i));return this}),t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(19),o=i(7),a=i(1),h=new n({Extends:r,initialize:function(t,e,i,n){var s="string"==typeof t?t:a(t,"key",""),o={type:"script",extension:a(t,"extension","js"),responseType:"text",key:s,url:a(t,"file",e),path:i,xhrSettings:a(t,"xhr",n)};r.call(this,o)},onProcess:function(t){this.state=s.FILE_PROCESSING,this.data=document.createElement("script"),this.data.language="javascript",this.data.type="text/javascript",this.data.defer=!1,this.data.text=this.xhrLoader.responseText,document.head.appendChild(this.data),this.onComplete(),t(this)}});o.register("script",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new h(t[n],e,this.path,i));else this.addFile(new h(t,e,this.path,i));return this}),t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(7),s=i(67),r=function(t,e,i,n,r){var o=new s(t,e,n,r,i);return o.type="spritesheet",o};n.register("spritesheet",function(t,e,i,n){if(Array.isArray(t))for(var s=0;s<t.length;s++)this.addFile(new r(t[s],e,null,this.path,n));else this.addFile(new r(t,e,i,this.path,n));return this}),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(19),o=i(7),a=i(1),h=new n({Extends:r,initialize:function(t,e,i,n){var s="string"==typeof t?t:a(t,"key",""),o={type:"svg",extension:a(t,"extension","svg"),responseType:"text",key:s,url:a(t,"file",e),path:i,xhrSettings:a(t,"xhr",n)};r.call(this,o)},onProcess:function(t){this.state=s.FILE_PROCESSING;var e=[this.xhrLoader.responseText],i=this;try{var n=new window.Blob(e,{type:"image/svg+xml;charset=utf-8"})}catch(e){return i.state=s.FILE_ERRORED,void t(i)}this.data=new Image,this.data.crossOrigin=this.crossOrigin;var o=!1;this.data.onload=function(){o||r.revokeObjectURL(i.data),i.onComplete(),t(i)},this.data.onerror=function(){o?(i.state=s.FILE_ERRORED,t(i)):(o=!0,r.revokeObjectURL(i.data),i.data.src="data:image/svg+xml,"+encodeURIComponent(e.join("")))},r.createObjectURL(this.data,n,"image/svg+xml")}});o.register("svg",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new h(t[n],e,this.path,i));else this.addFile(new h(t,e,this.path,i));return this}),t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(19),o=i(7),a=i(22),h=new n({Extends:r,initialize:function(t,e,i,n,s){var o={type:"tilemapCSV",extension:".csv",responseType:"text",key:t,url:e,path:i,xhrSettings:s};r.call(this,o),this.tilemapFormat=n},onProcess:function(t){this.state=s.FILE_PROCESSING,this.data=this.xhrLoader.responseText,this.onComplete(),t(this)}});o.register("tilemapCSV",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new h(t[n],e,this.path,a.CSV,i));else this.addFile(new h(t,e,this.path,a.CSV,i));return this}),t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(7),s=i(66),r=i(22),o=function(t,e,i,n,r){var o=new s(t,e,i,r);return o.type="tilemapJSON",o.tilemapFormat=n,o};n.register("tilemapTiledJSON",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(o(t[n],e,this.path,r.TILED_JSON,i));else this.addFile(o(t,e,this.path,r.TILED_JSON,i));return this}),n.register("tilemapWeltmeister",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(o(t[n],e,this.path,r.WELTMEISTER,i));else this.addFile(o(t,e,this.path,r.WELTMEISTER,i));return this}),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(7),s=i(67),r=i(338),o=function(t,e,i,n,o,a){var h=new s(t,e,n,o),l=new r(t,i,n,a);return h.linkFile=l,l.linkFile=h,h.linkType="unityatlas",l.linkType="unityatlas",{texture:h,data:l}};n.register("unityAtlas",function(t,e,i,n,s){var r=new o(t,e,i,this.path,n,s);return this.addFile(r.texture),this.addFile(r.data),this}),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(18),r=i(59),o=i(13),a=i(7),h=i(1),l=i(287),u=i(11),c=i(102),d=new n({Extends:o,initialize:function(t){o.call(this),this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),this._multilist={},a.install(this);var e=this.systems.game.config,i=this.systems.settings.loader;this.path="",this.baseURL="",this.setBaseURL(h(i,"baseURL",e.loaderBaseURL)),this.setPath(h(i,"path",e.loaderPath)),this.enableParallel=h(i,"enableParallel",e.loaderEnableParallel),this.maxParallelDownloads=h(i,"maxParallelDownloads",e.loaderMaxParallelDownloads),this.xhr=c(h(i,"responseType",e.loaderResponseType),h(i,"async",e.loaderAsync),h(i,"user",e.loaderUser),h(i,"password",e.loaderPassword),h(i,"timeout",e.loaderTimeout)),this.crossOrigin=h(i,"crossOrigin",e.loaderCrossOrigin),this.totalToLoad=0,this.progress=0,this.list=new r,this.inflight=new r,this.failed=new r,this.queue=new r,this.storage=new r,this.state=s.LOADER_IDLE},boot:function(){var t=this.systems.events;t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},setBaseURL:function(t){return""!==t&&"/"!==t.substr(-1)&&(t=t.concat("/")),this.baseURL=t,this},setPath:function(t){return""!==t&&"/"!==t.substr(-1)&&(t=t.concat("/")),this.path=t,this},setCORS:function(t){return this.crossOrigin=t,this},addFile:function(t){return this.isReady()?(t.path=this.path,this.list.set(t),t):-1},isLoading:function(){return this.state===s.LOADER_LOADING||this.state===s.LOADER_PROCESSING},isReady:function(){return this.state===s.LOADER_IDLE||this.state===s.LOADER_COMPLETE||this.state===s.LOADER_FAILED},start:function(){this.isReady()&&(this.progress=0,this.totalToLoad=this.list.size,this.emit("start",this),0===this.list.size?this.finishedLoading():(this.state=s.LOADER_LOADING,this.failed.clear(),this.inflight.clear(),this.queue.clear(),this.queue.debug=!0,this.updateProgress(),this.processLoadQueue()))},updateProgress:function(){this.progress=1-this.list.size/this.totalToLoad,this.emit("progress",this.progress)},processLoadQueue:function(){this.list.each(function(t){if((t.state===s.FILE_POPULATED||t.state===s.FILE_PENDING&&this.inflight.size<this.maxParallelDownloads)&&(this.inflight.set(t),this.list.delete(t),this.loadFile(t)),this.inflight.size===this.maxParallelDownloads)return!1},this)},loadFile:function(t){t.crossOrigin||(t.crossOrigin=this.crossOrigin),t.load(this)},nextFile:function(t,e){e?(this.emit("load",t),this.queue.set(t)):(this.emit("loaderror",t),this.failed.set(t)),this.inflight.delete(t),this.updateProgress(),this.list.size>0?this.processLoadQueue():0===this.inflight.size&&this.finishedLoading()},finishedLoading:function(){this.state!==s.LOADER_PROCESSING&&(this.progress=1,this.state=s.LOADER_PROCESSING,this.storage.clear(),0===this.queue.size?this.processComplete():this.queue.each(function(t){t.onProcess(this.processUpdate.bind(this))},this))},processUpdate:function(t){if(t.state===s.FILE_ERRORED)return this.failed.set(t),t.linkFile&&this.queue.delete(t.linkFile),this.removeFromQueue(t);t.linkFile?t.state===s.FILE_COMPLETE&&t.linkFile.state===s.FILE_COMPLETE&&(this.storage.set({type:t.linkType,fileA:t,fileB:t.linkFile}),this.queue.delete(t.linkFile),this.removeFromQueue(t)):(this.storage.set(t),this.removeFromQueue(t))},removeFromQueue:function(t){this.queue.delete(t),0===this.queue.size&&this.state===s.LOADER_PROCESSING&&this.processComplete()},processComplete:function(){this.list.clear(),this.inflight.clear(),this.queue.clear(),this.processCallback(),this.state=s.LOADER_COMPLETE,this.emit("complete",this,this.storage.size,this.failed.size)},processCallback:function(){if(0!==this.storage.size){var t,e,i,n=this.scene.sys.cache,s=this.scene.sys.textures,r=this.scene.sys.anims;for(var o in this._multilist){for(var a=[],h=[],u=this._multilist[o],c=0;c<u.length;c++)(t=this.storage.get("key",u[c]))&&("image"===t.type?h.push(t.data):"json"===t.type&&a.push(t.data),this.storage.delete(t));h.length+a.length===u.length&&(Array.isArray(a[0].frames)?s.addAtlasJSONArray(o,h,a):s.addAtlasJSONHash(o,h,a))}var d=[];this.storage.each(function(t){switch(t.type){case"animationJSON":d.push(t);break;case"image":case"svg":case"html":s.addImage(t.key,t.data);break;case"atlasjson":e=t.fileA,i=t.fileB,"image"===e.type?s.addAtlas(e.key,e.data,i.data):s.addAtlas(i.key,i.data,e.data);break;case"dataimage":e=t.fileA,i=t.fileB,e.linkParent?s.addImage(e.key,e.data,i.data):s.addImage(i.key,i.data,e.data);break;case"unityatlas":e=t.fileA,i=t.fileB,"image"===e.type?s.addUnityAtlas(e.key,e.data,i.data):s.addUnityAtlas(i.key,i.data,e.data);break;case"bitmapfont":e=t.fileA,i=t.fileB,"image"===e.type?(n.bitmapFont.add(i.key,{data:l(i.data),texture:e.key,frame:null}),s.addImage(e.key,e.data)):(n.bitmapFont.add(e.key,{data:l(e.data),texture:i.key,frame:null}),s.addImage(i.key,i.data));break;case"spritesheet":s.addSpriteSheet(t.key,t.data,t.config);break;case"json":n.json.add(t.key,t.data);break;case"xml":n.xml.add(t.key,t.data);break;case"text":n.text.add(t.key,t.data);break;case"obj":n.obj.add(t.key,t.data);break;case"binary":n.binary.add(t.key,t.data);break;case"audio":n.audio.add(t.key,t.data);break;case"audioSprite":[t.fileA,t.fileB].forEach(function(t){n[t.type].add(t.key,t.data)});break;case"glsl":n.shader.add(t.key,t.data);break;case"tilemapCSV":case"tilemapJSON":n.tilemap.add(t.key,{format:t.tilemapFormat,data:t.data})}}),d.forEach(function(t){r.fromJSON(t.data)}),this.storage.clear()}},saveJSON:function(t,e){return this.save(JSON.stringify(t),e)},save:function(t,e,i){void 0===e&&(e="file.json"),void 0===i&&(i="application/json");var n=new Blob([t],{type:i}),s=URL.createObjectURL(n),r=document.createElement("a");return r.download=e,r.textContent="Download "+e,r.href=s,r.click(),this},reset:function(){this.list.clear(),this.inflight.clear(),this.failed.clear(),this.queue.clear(),this.storage.clear();var t=this.systems.game.config,e=this.systems.settings.loader;this.setBaseURL(h(e,"baseURL",t.loaderBaseURL)),this.setPath(h(e,"path",t.loaderPath)),this.state=s.LOADER_IDLE},loadArray:function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this.file(t[e]);return this.list.size>0},file:function(t){var e,i=t.key;switch(t.type){case"spritesheet":e=this.spritesheet(i,t.url,t.config,t.xhrSettings);break;case"atlas":e=this.atlas(i,t.textureURL,t.atlasURL,t.textureXhrSettings,t.atlasXhrSettings);break;case"bitmapFont":e=this.bitmapFont(i,t.textureURL,t.xmlURL,t.textureXhrSettings,t.xmlXhrSettings);break;case"multiatlas":e=this.multiatlas(i,t.textureURLs,t.atlasURLs,t.textureXhrSettings,t.atlasXhrSettings);break;case"audioSprite":e=this.audioSprite(i,t.urls,t.json,t.config,t.audioXhrSettings,t.jsonXhrSettings);break;default:e=this[t.type](i,t.url,t.xhrSettings)}return e},shutdown:function(){this.reset(),this.state=s.LOADER_SHUTDOWN},destroy:function(){this.reset(),this.state=s.LOADER_DESTROYED}});u.register("Loader",d,"load"),t.exports=d},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(15),s=i(25),r={Angle:i(832),Distance:i(840),Easing:i(843),Fuzzy:i(844),Interpolation:i(850),Pow2:i(853),Snap:i(855),Average:i(859),Bernstein:i(340),Between:i(194),CatmullRom:i(134),CeilTo:i(860),Clamp:i(56),DegToRad:i(43),Difference:i(861),Factorial:i(341),FloatBetween:i(294),FloorTo:i(862),FromPercent:i(73),GetSpeed:i(863),IsEven:i(864),IsEvenStrict:i(865),Linear:i(192),MaxAdd:i(866),MinSub:i(867),Percent:i(868),RadToDeg:i(244),RandomXY:i(869),RandomXYZ:i(232),RandomXYZW:i(233),Rotate:i(342),RotateAround:i(218),RotateAroundDistance:i(126),RoundAwayFromZero:i(343),RoundTo:i(870),SinCosTableGenerator:i(871),SmootherStep:i(224),SmoothStep:i(225),TransformXY:i(269),Within:i(872),Wrap:i(57),Vector2:i(6),Vector3:i(58),Vector4:i(131),Matrix3:i(236),Matrix4:i(130),Quaternion:i(235),RotateVec3:i(234)};r=s(!1,r,n),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Between:i(833),BetweenY:i(834),BetweenPoints:i(835),BetweenPointsY:i(836),Reverse:i(837),RotateTo:i(838),ShortestBetween:i(839),Normalize:i(339),Wrap:i(120),WrapDegrees:i(121)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){return Math.atan2(n-e,i-t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){return Math.atan2(i-t,n-e)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return Math.atan2(e.x-t.x,e.y-t.y)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(339),s=function(t){return n(t+Math.PI)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(15),s=function(t,e,i){return void 0===i&&(i=.05),t===e?t:(Math.abs(e-t)<=i||Math.abs(e-t)>=n.PI2-i?t=e:(Math.abs(e-t)>Math.PI&&(e<t?e+=n.PI2:e-=n.PI2),e>t?t+=i:e<t&&(t-=i)),t)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=e-t;return 0===i?0:i-360*Math.floor((i- -180)/360)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Between:i(46),Power:i(841),Squared:i(842)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){return void 0===s&&(s=2),Math.sqrt(Math.pow(i-t,s)+Math.pow(n-e,s))};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=t-i,r=e-n;return s*s+r*r};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Back:i(295),Bounce:i(296),Circular:i(297),Cubic:i(298),Elastic:i(299),Expo:i(300),Linear:i(301),Quadratic:i(302),Quartic:i(303),Quintic:i(304),Sine:i(305),Stepped:i(306)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Ceil:i(845),Equal:i(846),Floor:i(847),GreaterThan:i(848),LessThan:i(849)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=1e-4),Math.ceil(t-e)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=1e-4),Math.abs(t-e)<i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=1e-4),Math.floor(t+e)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=1e-4),t>e-i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=1e-4),t<e+i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Bezier:i(851),CatmullRom:i(852),CubicBezier:i(242),Linear:i(191)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(340),s=function(t,e){for(var i=0,s=t.length-1,r=0;r<=s;r++)i+=Math.pow(1-e,s-r)*Math.pow(e,r)*t[r]*n(s,r);return i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(134),s=function(t,e){var i=t.length-1,s=i*e,r=Math.floor(s);return t[0]===t[i]?(e<0&&(r=Math.floor(s=i*(1+e))),n(s-r,t[(r-1+i)%i],t[r],t[(r+1)%i],t[(r+2)%i])):e<0?t[0]-(n(-s,t[0],t[0],t[1],t[1])-t[0]):e>1?t[i]-(n(s-i,t[i],t[i],t[i-1],t[i-1])-t[i]):n(s-r,t[r?r-1:0],t[r],t[i<r+1?i:r+1],t[i<r+2?i:r+2])};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={GetNext:i(309),IsSize:i(137),IsValue:i(854)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t>0&&0==(t&t-1)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Ceil:i(856),Floor:i(857),To:i(858)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=0),0===e?t:(t-=i,t=e*Math.ceil(t/e),i+t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=0),0===e?t:(t-=i,t=e*Math.floor(t/e),i+t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=0),0===e?t:(t-=i,t=e*Math.round(t/e),i+t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){for(var e=0,i=0;i<t.length;i++)e+=+t[i];return e/t.length};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=10);var n=Math.pow(i,-e);return Math.ceil(t*n)/n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return Math.abs(t-e)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=10);var n=Math.pow(i,-e);return Math.floor(t*n)/n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t/e/1e3};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t==parseFloat(t)?!(t%2):void 0};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t===parseFloat(t)?!(t%2):void 0};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return Math.min(t+e,i)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return Math.max(t-e,i)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===i&&(i=e+1);var s=(t-e)/(i-e);return s>1?void 0!==n?(s=(n-t)/(n-i))<0&&(s=0):s=1:s<0&&(s=0),s};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){void 0===e&&(e=1);var i=2*Math.random()*Math.PI;return t.x=Math.cos(i)*e,t.y=Math.sin(i)*e,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=10);var n=Math.pow(i,-e);return Math.round(t*n)/n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===e&&(e=1),void 0===i&&(i=1),void 0===n&&(n=1),n*=Math.PI/t;for(var s=[],r=[],o=0;o<t;o++)i-=e*n,e+=i*n,s[o]=i,r[o]=e;return{sin:r,cos:s,length:t}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return Math.abs(t-e)<=i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Arcade:i(874),Impact:i(896),Matter:i(916)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={ArcadePhysics:i(875),Body:i(350),Collider:i(351),Factory:i(344),Group:i(347),Image:i(345),Sprite:i(103),StaticBody:i(358),StaticGroup:i(348),World:i(349)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(344),r=i(1),o=i(81),a=i(11),h=i(349),l=i(46),u=i(43),c=new n({initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),this.config=this.getConfig(),this.world,this.add},getConfig:function(){var t=this.systems.game.config.physics,e=this.systems.settings.physics;return o(r(e,"arcade",{}),r(t,"arcade",{}))},boot:function(){this.world=new h(this.scene,this.config),this.add=new s(this.world);var t=this.systems.events;t.on("update",this.world.update,this.world),t.on("postupdate",this.world.postUpdate,this.world),t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},overlap:function(t,e,i,n,s){return void 0===i&&(i=null),void 0===n&&(n=null),void 0===s&&(s=i),this.world.collideObjects(t,e,i,n,s,!0)},collide:function(t,e,i,n,s){return void 0===i&&(i=null),void 0===n&&(n=null),void 0===s&&(s=i),this.world.collideObjects(t,e,i,n,s,!1)},pause:function(){return this.world.pause()},resume:function(){return this.world.resume()},accelerateTo:function(t,e,i,n,s,r){void 0===n&&(n=60);var o=Math.atan2(i-t.y,e-t.x);return t.body.acceleration.setToPolar(o,n),void 0!==s&&void 0!==r&&t.body.maxVelocity.set(s,r),o},accelerateToObject:function(t,e,i,n,s){return this.accelerateTo(t,e.x,e.y,i,n,s)},closest:function(t){for(var e=this.tree.all(),i=Number.MAX_VALUE,n=null,s=t.x,r=t.y,o=e.length-1;o>=0;o--){var a=e[o],h=l(s,r,a.x,a.y);h<i&&(n=a,i=h)}return n},furthest:function(t){for(var e=this.tree.all(),i=-1,n=null,s=t.x,r=t.y,o=e.length-1;o>=0;o--){var a=e[o],h=l(s,r,a.x,a.y);h>i&&(n=a,i=h)}return n},moveTo:function(t,e,i,n,s){void 0===n&&(n=60),void 0===s&&(s=0);var r=Math.atan2(i-t.y,e-t.x);return s>0&&(n=l(t.x,t.y,e,i)/(s/1e3)),t.body.velocity.setToPolar(r,n),r},moveToObject:function(t,e,i,n){return this.moveTo(t,e.x,e.y,i,n)},velocityFromAngle:function(t,e,i){return void 0===e&&(e=60),i.setToPolar(u(t),e)},velocityFromRotation:function(t,e,i){return void 0===e&&(e=60),i.setToPolar(t,e)},shutdown:function(){this.world.shutdown()},destroy:function(){this.world.destroy()}});a.register("ArcadePhysics",c,"arcadePhysics"),t.exports=c},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setAcceleration:function(t,e){return this.body.acceleration.set(t,e),this},setAccelerationX:function(t){return this.body.acceleration.x=t,this},setAccelerationY:function(t){return this.body.acceleration.y=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setAngularVelocity:function(t){return this.body.angularVelocity=t,this},setAngularAcceleration:function(t){return this.body.angularAcceleration=t,this},setAngularDrag:function(t){return this.body.angularDrag=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setBounce:function(t,e){return this.body.bounce.set(t,e),this},setBounceX:function(t){return this.body.bounce.x=t,this},setBounceY:function(t){return this.body.bounce.y=t,this},setCollideWorldBounds:function(t){return this.body.collideWorldBounds=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setDebug:function(t,e,i){return this.debugShowBody=t,this.debugShowVelocity=e,this.debugBodyColor=i,this},setDebugBodyColor:function(t){return this.body.debugBodyColor=t,this},debugShowBody:{get:function(){return this.body.debugShowBody},set:function(t){this.body.debugShowBody=t}},debugShowVelocity:{get:function(){return this.body.debugShowVelocity},set:function(t){this.body.debugShowVelocity=t}},debugBodyColor:{get:function(){return this.body.debugBodyColor},set:function(t){this.body.debugBodyColor=t}}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setDrag:function(t,e){return this.body.drag.set(t,e),this},setDragX:function(t){return this.body.drag.x=t,this},setDragY:function(t){return this.body.drag.y=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={enableBody:function(t,e,i,n,s){return t&&this.body.reset(e,i),n&&(this.body.gameObject.active=!0),s&&(this.body.gameObject.visible=!0),this.body.enable=!0,this},disableBody:function(t,e){return void 0===t&&(t=!1),void 0===e&&(e=!1),this.body.stop(),this.body.enable=!1,t&&(this.body.gameObject.active=!1),e&&(this.body.gameObject.visible=!1),this},refreshBody:function(){return this.body.updateFromGameObject(),this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setFriction:function(t,e){return this.body.friction.set(t,e),this},setFrictionX:function(t){return this.body.friction.x=t,this},setFrictionY:function(t){return this.body.friction.y=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setGravity:function(t,e){return this.body.gravity.set(t,e),this},setGravityX:function(t){return this.body.gravity.x=t,this},setGravityY:function(t){return this.body.gravity.y=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setImmovable:function(t){return void 0===t&&(t=!0),this.body.immovable=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setMass:function(t){return this.body.mass=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setOffset:function(t,e){return this.body.setOffset(t,e),this},setSize:function(t,e,i){return this.body.setSize(t,e,i),this},setCircle:function(t,e,i){return this.body.setCircle(t,e,i),this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setVelocity:function(t,e){return this.body.velocity.set(t,e),this},setVelocityX:function(t){return this.body.velocity.x=t,this},setVelocityY:function(t){return this.body.velocity.y=t,this},setMaxVelocity:function(t,e){return void 0===e&&(e=t),this.body.maxVelocity.set(t,e),this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.collisionCallback?!t.collisionCallback.call(t.collisionCallbackContext,e,t):!t.layer.callbacks[t.index]||!t.layer.callbacks[t.index].callback.call(t.layer.callbacks[t.index].callbackContext,e,t)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(890),s=i(892),r=i(357),o=function(t,e,i,o,a,h){var l=o.left,u=o.top,c=o.right,d=o.bottom,f=i.faceLeft||i.faceRight,p=i.faceTop||i.faceBottom;if(!f&&!p)return!1;var v=0,g=0,y=0,m=1;if(e.deltaAbsX()>e.deltaAbsY()?y=-1:e.deltaAbsX()<e.deltaAbsY()&&(m=-1),0!==e.deltaX()&&0!==e.deltaY()&&f&&p&&(y=Math.min(Math.abs(e.position.x-c),Math.abs(e.right-l)),m=Math.min(Math.abs(e.position.y-d),Math.abs(e.bottom-u))),y<m){if(f&&0!==(v=n(e,i,l,c,h))&&!r(o,e))return!0;p&&(g=s(e,i,u,d,h))}else{if(p&&0!==(g=s(e,i,u,d,h))&&!r(o,e))return!0;f&&(v=n(e,i,l,c,h))}return 0!==v||0!==g};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(891),s=function(t,e,i,s,r){var o=0;return t.deltaX()<0&&!t.blocked.left&&e.collideRight&&t.checkCollision.left?e.faceRight&&t.x<s&&(o=t.x-s)<-r&&(o=0):t.deltaX()>0&&!t.blocked.right&&e.collideLeft&&t.checkCollision.right&&e.faceLeft&&t.right>i&&(o=t.right-i)>r&&(o=0),0!==o&&(t.customSeparateX?t.overlapX=o:n(t,o)),o};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){e<0?t.blocked.left=!0:e>0&&(t.blocked.right=!0),t.position.x-=e,0===t.bounce.x?t.velocity.x=0:t.velocity.x=-t.velocity.x*t.bounce.x};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(893),s=function(t,e,i,s,r){var o=0;return t.deltaY()<0&&!t.blocked.up&&e.collideDown&&t.checkCollision.up?e.faceBottom&&t.y<s&&(o=t.y-s)<-r&&(o=0):t.deltaY()>0&&!t.blocked.down&&e.collideUp&&t.checkCollision.down&&e.faceTop&&t.bottom>i&&(o=t.bottom-i)>r&&(o=0),0!==o&&(t.customSeparateY?t.overlapY=o:n(t,o)),o};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){e<0?t.blocked.up=!0:e>0&&(t.blocked.down=!0),t.position.y-=e,0===t.bounce.y?t.velocity.y=0:t.velocity.y=-t.velocity.y*t.bounce.y};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(352),s=function(t,e,i,s){var r=n(t,e,i,s);if(i||0===r||t.immovable&&e.immovable||t.customSeparateX||e.customSeparateX)return 0!==r||t.embedded&&e.embedded;var o=t.velocity.x,a=e.velocity.x;if(t.immovable||e.immovable)t.immovable?(e.x+=r,e.velocity.x=o-a*e.bounce.x,t.moves&&(e.y+=(t.y-t.prev.y)*t.friction.y)):(t.x-=r,t.velocity.x=a-o*t.bounce.x,e.moves&&(t.y+=(e.y-e.prev.y)*e.friction.y));else{r*=.5,t.x-=r,e.x+=r;var h=Math.sqrt(a*a*e.mass/t.mass)*(a>0?1:-1),l=Math.sqrt(o*o*t.mass/e.mass)*(o>0?1:-1),u=.5*(h+l);h-=u,l-=u,t.velocity.x=u+h*t.bounce.x,e.velocity.x=u+l*e.bounce.x}return!0};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(353),s=function(t,e,i,s){var r=n(t,e,i,s);if(i||0===r||t.immovable&&e.immovable||t.customSeparateY||e.customSeparateY)return 0!==r||t.embedded&&e.embedded;var o=t.velocity.y,a=e.velocity.y;if(t.immovable||e.immovable)t.immovable?(e.y+=r,e.velocity.y=o-a*e.bounce.y,t.moves&&(e.x+=(t.x-t.prev.x)*t.friction.x)):(t.y-=r,t.velocity.y=a-o*t.bounce.y,e.moves&&(t.x+=(e.x-e.prev.x)*e.friction.x));else{r*=.5,t.y-=r,e.y+=r;var h=Math.sqrt(a*a*e.mass/t.mass)*(a>0?1:-1),l=Math.sqrt(o*o*t.mass/e.mass)*(o>0?1:-1),u=.5*(h+l);h-=u,l-=u,t.velocity.y=u+h*t.bounce.y,e.velocity.y=u+l*e.bounce.y}return!0};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Body:i(359),COLLIDES:i(82),CollisionMap:i(360),Factory:i(361),Image:i(363),ImpactBody:i(362),ImpactPhysics:i(912),Sprite:i(364),TYPE:i(83),World:i(365)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(56),s=function(t,e,i,s,r){if(i)return n(e+i*t,-r,r);if(s){var o=s*t;return e-o>0?e-o:e+o<0?e+o:0}return n(e,-r,r)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){if(t.standing=!1,e.collision.y&&(t.bounciness>0&&Math.abs(t.vel.y)>t.minBounceVelocity?t.vel.y*=-t.bounciness:(t.vel.y>0&&(t.standing=!0),t.vel.y=0)),e.collision.x&&(t.bounciness>0&&Math.abs(t.vel.x)>t.minBounceVelocity?t.vel.x*=-t.bounciness:t.vel.x=0),e.collision.slope){var i=e.collision.slope;if(t.bounciness>0){var n=t.vel.x*i.nx+t.vel.y*i.ny;t.vel.x=(t.vel.x-i.nx*n*2)*t.bounciness,t.vel.y=(t.vel.y-i.ny*n*2)*t.bounciness}else{var s=i.x*i.x+i.y*i.y,r=(t.vel.x*i.x+t.vel.y*i.y)/s;t.vel.x=i.x*r,t.vel.y=i.y*r;var o=Math.atan2(i.x,i.y);o>t.slopeStanding.min&&o<t.slopeStanding.max&&(t.standing=!0)}}t.pos.x=e.pos.x,t.pos.y=e.pos.y};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=.5,n=1/3,s=2/3;t.exports={2:[0,1,1,0,!0],3:[0,1,1,i,!0],4:[0,i,1,0,!0],5:[0,1,1,s,!0],6:[0,s,1,n,!0],7:[0,n,1,0,!0],8:[i,1,0,0,!0],9:[1,0,i,1,!0],10:[i,1,1,0,!0],11:[0,0,i,1,!0],12:[0,0,1,0,!1],13:[1,1,0,0,!0],14:[1,i,0,0,!0],15:[1,1,0,i,!0],16:[1,n,0,0,!0],17:[1,s,0,n,!0],18:[1,1,0,s,!0],19:[1,1,i,0,!0],20:[i,0,0,1,!0],21:[0,1,i,0,!0],22:[i,0,1,1,!0],23:[1,1,0,1,!1],24:[0,0,1,1,!0],25:[0,0,1,i,!0],26:[0,i,1,1,!0],27:[0,0,1,n,!0],28:[0,n,1,s,!0],29:[0,s,1,1,!0],30:[n,1,0,0,!0],31:[1,0,s,1,!0],32:[s,1,1,0,!0],33:[0,0,n,1,!0],34:[1,0,1,1,!1],35:[1,0,0,1,!0],36:[1,i,0,1,!0],37:[1,0,0,i,!0],38:[1,s,0,1,!0],39:[1,n,0,s,!0],40:[1,0,0,n,!0],41:[s,1,n,0,!0],42:[s,0,n,1,!0],43:[n,1,s,0,!0],44:[n,0,s,1,!0],45:[0,1,0,0,!1],52:[1,1,s,0,!0],53:[n,0,0,1,!0],54:[0,1,n,0,!0],55:[s,0,1,1,!0]}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setAccelerationX:function(t){return this.accel.x=t,this},setAccelerationY:function(t){return this.accel.y=t,this},setAcceleration:function(t,e){return this.accel.x=t,this.accel.y=e,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setBodySize:function(t,e){return void 0===e&&(e=t),this.body.size.x=Math.round(t),this.body.size.y=Math.round(e),this},setBodyScale:function(t,e){void 0===e&&(e=t);var i=this.body.gameObject;return i?(i.setScale(t,e),this.setBodySize(i.width*i.scaleX,i.height*i.scaleY)):this.setBodySize(this.body.size.x*t,this.body.size.y*e)}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(83),s={getBodyType:function(){return this.body.type},setTypeNone:function(){return this.body.type=n.NONE,this},setTypeA:function(){return this.body.type=n.A,this},setTypeB:function(){return this.body.type=n.B,this}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setBounce:function(t){return this.body.bounciness=t,this},setMinBounceVelocity:function(t){return this.body.minBounceVelocity=t,this},bounce:{get:function(){return this.body.bounciness},set:function(t){this.body.bounciness=t}}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(83),s={setAvsB:function(){return this.setTypeA(),this.setCheckAgainstB()},setBvsA:function(){return this.setTypeB(),this.setCheckAgainstA()},setCheckAgainstNone:function(){return this.body.checkAgainst=n.NONE,this},setCheckAgainstA:function(){return this.body.checkAgainst=n.A,this},setCheckAgainstB:function(){return this.body.checkAgainst=n.B,this},checkAgainst:{get:function(){return this.body.checkAgainst},set:function(t){this.body.checkAgainst=t}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(82),s={_collideCallback:null,_callbackScope:null,setCollideCallback:function(t,e){return this._collideCallback=t,e&&(this._callbackScope=e),this},setCollidesNever:function(){return this.body.collides=n.NEVER,this},setLite:function(){return this.body.collides=n.LITE,this},setPassive:function(){return this.body.collides=n.PASSIVE,this},setActive:function(){return this.body.collides=n.ACTIVE,this},setFixed:function(){return this.body.collides=n.FIXED,this},collides:{get:function(){return this.body.collides},set:function(t){this.body.collides=t}}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setDebug:function(t,e,i){return this.debugShowBody=t,this.debugShowVelocity=e,this.debugBodyColor=i,this},setDebugBodyColor:function(t){return this.body.debugBodyColor=t,this},debugShowBody:{get:function(){return this.body.debugShowBody},set:function(t){this.body.debugShowBody=t}},debugShowVelocity:{get:function(){return this.body.debugShowVelocity},set:function(t){this.body.debugShowVelocity=t}},debugBodyColor:{get:function(){return this.body.debugBodyColor},set:function(t){this.body.debugBodyColor=t}}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setFrictionX:function(t){return this.friction.x=t,this},setFrictionY:function(t){return this.friction.y=t,this},setFriction:function(t,e){return this.friction.x=t,this.friction.y=e,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setGravity:function(t){return this.body.gravityFactor=t,this},gravity:{get:function(){return this.body.gravityFactor},set:function(t){this.body.gravityFactor=t}}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setOffset:function(t,e,i,n){return this.body.offset.x=t,this.body.offset.y=e,i&&this.setBodySize(i,n),this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setGameObject:function(t,e){return void 0===e&&(e=!0),t?(this.body.gameObject=t,e&&this.syncGameObject()):this.body.gameObject=null,this},syncGameObject:function(){var t=this.body.gameObject;return t&&this.setBodySize(t.width*t.scaleX,t.height*t.scaleY),this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setVelocityX:function(t){return this.vel.x=t,this},setVelocityY:function(t){return this.vel.y=t,this},setVelocity:function(t,e){return void 0===e&&(e=t),this.vel.x=t,this.vel.y=e,this},setMaxVelocity:function(t,e){return void 0===e&&(e=t),this.maxVel.x=t,this.maxVel.y=e,this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(361),r=i(1),o=i(81),a=i(11),h=i(365),l=new n({initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),this.config=this.getConfig(),this.world,this.add},getConfig:function(){var t=this.systems.game.config.physics,e=this.systems.settings.physics;return o(r(e,"impact",{}),r(t,"impact",{}))},boot:function(){this.world=new h(this.scene,this.config),this.add=new s(this.world);var t=this.systems.events;t.on("update",this.world.update,this.world),t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},pause:function(){return this.world.pause()},resume:function(){return this.world.resume()},shutdown:function(){this.world.shutdown()},destroy:function(){this.world.destroy()}});a.register("ImpactPhysics",l,"impactPhysics"),t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(82),s=i(914),r=i(915),o=function(t,e,i){var o=null;e.collides===n.LITE||i.collides===n.FIXED?o=e:i.collides!==n.LITE&&e.collides!==n.FIXED||(o=i),e.last.x+e.size.x>i.last.x&&e.last.x<i.last.x+i.size.x?(e.last.y<i.last.y?r(t,e,i,o):r(t,i,e,o),e.collideWith(i,"y"),i.collideWith(e,"y"),t.emit("collide",e,i,"y")):e.last.y+e.size.y>i.last.y&&e.last.y<i.last.y+i.size.y&&(e.last.x<i.last.x?s(t,e,i,o):s(t,i,e,o),e.collideWith(i,"x"),i.collideWith(e,"x"),t.emit("collide",e,i,"x"))};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=e.pos.x+e.size.x-i.pos.x;if(n){var r=e===n?i:e;n.vel.x=-n.vel.x*n.bounciness+r.vel.x;var o=t.collisionMap.trace(n.pos.x,n.pos.y,n===e?-s:s,0,n.size.x,n.size.y);n.pos.x=o.pos.x}else{var a=(e.vel.x-i.vel.x)/2;e.vel.x=-a,i.vel.x=a;var h=t.collisionMap.trace(e.pos.x,e.pos.y,-s/2,0,e.size.x,e.size.y);e.pos.x=Math.floor(h.pos.x);var l=t.collisionMap.trace(i.pos.x,i.pos.y,s/2,0,i.size.x,i.size.y);i.pos.x=Math.ceil(l.pos.x)}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s,r,o=e.pos.y+e.size.y-i.pos.y;if(n){var a=e===n?i:e;n.vel.y=-n.vel.y*n.bounciness+a.vel.y,s=0,n===e&&Math.abs(n.vel.y-a.vel.y)<n.minBounceVelocity&&(n.standing=!0,s=a.vel.x*t.delta);var h=t.collisionMap.trace(n.pos.x,n.pos.y,s,n===e?-o:o,n.size.x,n.size.y);n.pos.y=h.pos.y,n.pos.x=h.pos.x}else if(t.gravity&&(i.standing||e.vel.y>0))r=t.collisionMap.trace(e.pos.x,e.pos.y,0,-(e.pos.y+e.size.y-i.pos.y),e.size.x,e.size.y),e.pos.y=r.pos.y,e.bounciness>0&&e.vel.y>e.minBounceVelocity?e.vel.y*=-e.bounciness:(e.standing=!0,e.vel.y=0);else{var l=(e.vel.y-i.vel.y)/2;e.vel.y=-l,i.vel.y=l,s=i.vel.x*t.delta,r=t.collisionMap.trace(e.pos.x,e.pos.y,s,-o/2,e.size.x,e.size.y),e.pos.y=r.pos.y;var u=t.collisionMap.trace(i.pos.x,i.pos.y,0,o/2,i.size.x,i.size.y);i.pos.y=u.pos.y}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Factory:i(366),Image:i(369),Matter:i(169),MatterPhysics:i(933),PolyDecomp:i(367),Sprite:i(370),TileBody:i(166),World:i(376)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setBounce:function(t){return this.body.restitution=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setCollisionCategory:function(t){return this.body.collisionFilter.category=t,this},setCollisionGroup:function(t){return this.body.collisionFilter.group=t,this},setCollidesWith:function(t){var e=0;if(Array.isArray(t))for(var i=0;i<t.length;i++)e|=t[i];else e=t;return this.body.collisionFilter.mask=e,this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(20),s={applyForce:function(t){return this._tempVec2.set(this.body.position.x,this.body.position.y),n.applyForce(this.body,this._tempVec2,t),this},applyForceFrom:function(t,e){return n.applyForce(this.body,t,e),this},thrust:function(t){var e=this.body.angle;return this._tempVec2.set(t*Math.cos(e),t*Math.sin(e)),n.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y},this._tempVec2),this},thrustLeft:function(t){var e=this.body.angle-Math.PI/2;return this._tempVec2.set(t*Math.cos(e),t*Math.sin(e)),n.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y},this._tempVec2),this},thrustRight:function(t){var e=this.body.angle+Math.PI/2;return this._tempVec2.set(t*Math.cos(e),t*Math.sin(e)),n.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y},this._tempVec2),this},thrustBack:function(t){var e=this.body.angle-Math.PI;return this._tempVec2.set(t*Math.cos(e),t*Math.sin(e)),n.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y},this._tempVec2),this}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setFriction:function(t,e,i){return this.body.friction=t,void 0!==e&&(this.body.frictionAir=e),void 0!==i&&(this.body.frictionStatic=i),this},setFrictionAir:function(t){return this.body.frictionAir=t,this},setFrictionStatic:function(t){return this.body.frictionStatic=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setIgnoreGravity:function(t){return this.body.ignoreGravity=t,this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(20),s={setMass:function(t){return n.setMass(this.body,t),this},setDensity:function(t){return n.setDensity(this.body,t),this}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(20),s={setStatic:function(t){return n.setStatic(this.body,t),this},isStatic:function(){return this.body.isStatic}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setSensor:function(t){return this.body.isSensor=t,this},isSensor:function(){return this.body.isSensor}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(37),s=i(20),r=i(1),o={setRectangle:function(t,e,i){return this.setBody({type:"rectangle",width:t,height:e},i)},setCircle:function(t,e){return this.setBody({type:"circle",radius:t},e)},setPolygon:function(t,e,i){return this.setBody({type:"polygon",sides:e,radius:t},i)},setTrapezoid:function(t,e,i,n){return this.setBody({type:"trapezoid",width:t,height:e,slope:i},n)},setExistingBody:function(t,e){void 0===e&&(e=!0),this.body&&this.world.remove(this.body),this.body=t,this.body.gameObject=this;var i=this;return this.body.destroy=function(){i.world.remove(i.body),i.body.gameObject=null},e&&this.world.add(this.body),this},setBody:function(t,e){if(!t)return this;var i;"string"==typeof t&&(t={type:t});var o=r(t,"type","rectangle"),a=r(t,"x",this._tempVec2.x),h=r(t,"y",this._tempVec2.y),l=r(t,"width",this.width),u=r(t,"height",this.height);switch(o){case"rectangle":i=n.rectangle(a,h,l,u,e);break;case"circle":var c=r(t,"radius",Math.max(l,u)/2),d=r(t,"maxSides",25);i=n.circle(a,h,c,e,d);break;case"trapezoid":var f=r(t,"slope",.5);i=n.trapezoid(a,h,l,u,f,e);break;case"polygon":var p=r(t,"sides",5),v=r(t,"radius",Math.max(l,u)/2);i=n.polygon(a,h,p,v,e);break;case"fromVertices":case"fromVerts":var g=r(t,"verts",[]);if(this.body)s.setVertices(this.body,g),i=this.body;else{var y=r(t,"flagInternal",!1),m=r(t,"removeCollinear",.01),x=r(t,"minimumArea",10);i=n.fromVertices(a,h,g,e,y,m,x)}}return this.setExistingBody(i,t.addToWorld),this}};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(69),s={setSleepThreshold:function(t){return void 0===t&&(t=60),this.body.sleepThreshold=t,this},setSleepEvents:function(t,e){return this.setSleepStartEvent(t),this.setSleepEndEvent(e),this},setSleepStartEvent:function(t){if(t){var e=this.world;n.on(this.body,"sleepStart",function(t){e.emit("sleepstart",t,this)})}else n.off(this.body,"sleepStart");return this},setSleepEndEvent:function(t){if(t){var e=this.world;n.on(this.body,"sleepEnd",function(t){e.emit("sleepend",t,this)})}else n.off(this.body,"sleepEnd");return this}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(20),s=i(15),r=i(120),o=i(121),a={x:{get:function(){return this.body.position.x},set:function(t){this._tempVec2.set(t,this.y),n.setPosition(this.body,this._tempVec2)}},y:{get:function(){return this.body.position.y},set:function(t){this._tempVec2.set(this.x,t),n.setPosition(this.body,this._tempVec2)}},scaleX:{get:function(){return this._scaleX},set:function(t){this._scaleX=t,0===this._scaleX?this.renderFlags&=-5:this.renderFlags|=4,n.scale(this.body,t,this._scaleY)}},scaleY:{get:function(){return this._scaleY},set:function(t){this._scaleY=t,0===this._scaleY?this.renderFlags&=-5:this.renderFlags|=4,n.scale(this.body,this._scaleX,t)}},angle:{get:function(){return o(this.body.angle*s.RAD_TO_DEG)},set:function(t){this.rotation=o(t)*s.DEG_TO_RAD}},rotation:{get:function(){return this.body.angle},set:function(t){this._rotation=r(t),n.setAngle(this.body,this._rotation)}},setPosition:function(t,e){return void 0===t&&(t=0),void 0===e&&(e=t),this._tempVec2.set(t,e),n.setPosition(this.body,this._tempVec2),this},setRotation:function(t){return void 0===t&&(t=0),this._rotation=r(t),n.setAngle(this.body,t),this},setFixedRotation:function(){return n.setInertia(this.body,1/0),this},setAngle:function(t){return void 0===t&&(t=0),this.angle=t,n.setAngle(this.body,this.rotation),this},setScale:function(t,e,i){return void 0===t&&(t=1),void 0===e&&(e=t),this._scaleX=t,this._scaleY=e,n.scale(this.body,t,e,i),this}};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(20),s={setAngularVelocity:function(t){return n.setAngularVelocity(this.body,t),this},setVelocityX:function(t){return this._tempVec2.set(t,this.body.velocity.y),n.setVelocity(this.body,this._tempVec2),this},setVelocityY:function(t){return this._tempVec2.set(this.body.velocity.x,t),n.setVelocity(this.body,this._tempVec2),this},setVelocity:function(t,e){return this._tempVec2.set(t,e),n.setVelocity(this.body,this._tempVec2),this}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(40),s=i(0),r=i(48),o=i(70),a=i(167),h=i(1),l=i(81),u=i(84),c=i(6),d=i(38),f=new s({initialize:function(t,e,i){void 0===i&&(i={});var n={label:"Pointer Constraint",pointA:{x:0,y:0},pointB:{x:0,y:0},damping:0,length:.01,stiffness:.1,angularStiffness:1,collisionFilter:{category:1,mask:4294967295,group:0}};this.scene=t,this.world=e;var s=h(i,"camera",null);s?(this.camera=s,delete i.camera):this.camera=t.sys.cameras.main,this.pointer=null,this.active=!0,this.position=new c,this.constraint=o.create(l(i,n)),this.world.on("beforeupdate",this.update,this),t.sys.input.on("pointerdown",this.onDown,this),t.sys.input.on("pointerup",this.onUp,this)},onDown:function(t){this.pointer=t},onUp:function(){this.pointer=null},getBodyPart:function(t,e){for(var i=this.constraint,n=t.parts.length>1?1:0,s=n;s<t.parts.length;s++){var r=t.parts[s];if(d.contains(r.vertices,e))return i.bodyB=t,i.pointA.x=e.x,i.pointA.y=e.y,i.pointB.x=e.x-t.position.x,i.pointB.y=e.y-t.position.y,i.angleB=t.angle,u.set(t,!1),!0}return!1},update:function(){if(this.active){var t=this.pointer,e=this.constraint;if(t){var i=this.position;if(this.camera.getWorldPoint(t.x,t.y,i),e.bodyB)u.set(e.bodyB,!1),e.pointA.x=i.x,e.pointA.y=i.y;else for(var s=r.allBodies(this.world.localWorld),o=0;o<s.length;o++){var h=s[o];if(!h.ignorePointer&&n.contains(h.bounds,i)&&a.canCollide(h.collisionFilter,e.collisionFilter)&&this.getBodyPart(h,i))break}}else e.bodyB&&(e.bodyB=null)}},destroy:function(){this.world.removeConstraint(this.constraint),this.constraint=null,this.world.off("beforeupdate",this.update),this.scene.sys.input.off("pointerdown",this.onDown,this),this.scene.sys.input.off("pointerup",this.onUp,this)}});t.exports=f},function(t,e,i){var n={};t.exports=n;var s=i(39),r=i(168),o=i(40),a=i(37),h=i(38);!function(){n.ray=function(t,e,i,n){n=n||1e-100;for(var h=s.angle(e,i),l=s.magnitude(s.sub(e,i)),u=.5*(i.x+e.x),c=.5*(i.y+e.y),d=a.rectangle(u,c,l,n,{angle:h}),f=[],p=0;p<t.length;p++){var v=t[p];if(o.overlaps(v.bounds,d.bounds))for(var g=1===v.parts.length?0:1;g<v.parts.length;g++){var y=v.parts[g];if(o.overlaps(y.bounds,d.bounds)){var m=r.collides(y,d);if(m.collided){m.body=m.bodyA=m.bodyB=v,f.push(m);break}}}}return f},n.region=function(t,e,i){for(var n=[],s=0;s<t.length;s++){var r=t[s],a=o.overlaps(r.bounds,e);(a&&!i||!a&&i)&&n.push(r)}return n},n.point=function(t,e){for(var i=[],n=0;n<t.length;n++){var s=t[n];if(o.contains(s.bounds,e))for(var r=1===s.parts.length?0:1;r<s.parts.length;r++){var a=s.parts[r];if(o.contains(a.bounds,e)&&h.contains(a.vertices,e)){i.push(s);break}}}return i}}()},function(t,e,i){var n={};t.exports=n;var s=i(48),r=i(16);!function(){n.create=function(t){var e={extended:!1,narrowDetections:0,narrowphaseTests:0,narrowReuse:0,narrowReuseCount:0,midphaseTests:0,broadphaseTests:0,narrowEff:1e-4,midEff:1e-4,broadEff:1e-4,collisions:0,buckets:0,bodies:0,pairs:0};return r.extend(e,!1,t)},n.reset=function(t){t.extended&&(t.narrowDetections=0,t.narrowphaseTests=0,t.narrowReuse=0,t.narrowReuseCount=0,t.midphaseTests=0,t.broadphaseTests=0,t.narrowEff=0,t.midEff=0,t.broadEff=0,t.collisions=0,t.buckets=0,t.pairs=0,t.bodies=0)},n.update=function(t,e){if(t.extended){var i=e.world,n=s.allBodies(i);t.collisions=t.narrowDetections,t.pairs=e.pairs.list.length,t.bodies=n.length,t.midEff=(t.narrowDetections/(t.midphaseTests||1)).toFixed(2),t.narrowEff=(t.narrowDetections/(t.narrowphaseTests||1)).toFixed(2),t.broadEff=(1-t.broadphaseTests/(n.length||1)).toFixed(2),t.narrowReuse=(t.narrowReuseCount/(t.narrowphaseTests||1)).toFixed(2)}}}()},function(t,e,i){var n={};t.exports=n;i(40);!function(){n.pathToVertices=function(e,i){var n,s,r,o,a,h,l,u,c,d,f,p,v=[],g=0,y=0,m=0;i=i||15;var x=function(t,e,i){var n=i%2==1&&i>1;if(!c||t!=c.x||e!=c.y){c&&n?(f=c.x,p=c.y):(f=0,p=0);var s={x:f+t,y:p+e};!n&&c||(c=s),v.push(s),y=f+t,m=p+e}},b=function(t){var e=t.pathSegTypeAsLetter.toUpperCase();if("Z"!==e){switch(e){case"M":case"L":case"T":case"C":case"S":case"Q":y=t.x,m=t.y;break;case"H":y=t.x;break;case"V":m=t.y}x(y,m,t.pathSegType)}};for(t(e),r=e.getTotalLength(),h=[],n=0;n<e.pathSegList.numberOfItems;n+=1)h.push(e.pathSegList.getItem(n));for(l=h.concat();g<r;){if(d=e.getPathSegAtLength(g),(a=h[d])!=u){for(;l.length&&l[0]!=a;)b(l.shift());u=a}switch(a.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":o=e.getPointAtLength(g),x(o.x,o.y,0)}g+=i}for(n=0,s=l.length;n<s;++n)b(l[n]);return v};var t=function(t){for(var e,i,n,s,r,o,a=t.pathSegList,h=0,l=0,u=a.numberOfItems,c=0;c<u;++c){var d=a.getItem(c),f=d.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(f))"x"in d&&(h=d.x),"y"in d&&(l=d.y);else switch("x1"in d&&(n=h+d.x1),"x2"in d&&(r=h+d.x2),"y1"in d&&(s=l+d.y1),"y2"in d&&(o=l+d.y2),"x"in d&&(h+=d.x),"y"in d&&(l+=d.y),f){case"m":a.replaceItem(t.createSVGPathSegMovetoAbs(h,l),c);break;case"l":a.replaceItem(t.createSVGPathSegLinetoAbs(h,l),c);break;case"h":a.replaceItem(t.createSVGPathSegLinetoHorizontalAbs(h),c);break;case"v":a.replaceItem(t.createSVGPathSegLinetoVerticalAbs(l),c);break;case"c":a.replaceItem(t.createSVGPathSegCurvetoCubicAbs(h,l,n,s,r,o),c);break;case"s":a.replaceItem(t.createSVGPathSegCurvetoCubicSmoothAbs(h,l,r,o),c);break;case"q":a.replaceItem(t.createSVGPathSegCurvetoQuadraticAbs(h,l,n,s),c);break;case"t":a.replaceItem(t.createSVGPathSegCurvetoQuadraticSmoothAbs(h,l),c);break;case"a":a.replaceItem(t.createSVGPathSegArcAbs(h,l,d.r1,d.r2,d.angle,d.largeArcFlag,d.sweepFlag),c);break;case"z":case"Z":h=e,l=i}"M"!=f&&"m"!=f||(e=h,i=l)}}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(366),r=i(1),o=i(4),a=i(934),h=i(371),l=i(935),u=i(81),c=i(170),d=i(11),f=i(376),p=new n({initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),this.config=this.getConfig(),this.world,this.add},getConfig:function(){var t=this.systems.game.config.physics,e=this.systems.settings.physics;return u(r(e,"matter",{}),r(t,"matter",{}))},boot:function(){var t=this.config;this.world=new f(this.scene,t),this.add=new s(this.world),o(t,"plugins.attractors",!1)&&(c.register(a),c.use(h,a)),o(t,"plugins.wrap",!1)&&(c.register(l),c.use(h,l));var e=this.systems.events;e.on("update",this.world.update,this.world),e.on("postupdate",this.world.postUpdate,this.world),e.on("shutdown",this.shutdown,this),e.on("destroy",this.destroy,this)},enableAttractorPlugin:function(){return c.register(a),c.use(h,a),this},enableWrapPlugin:function(){return c.register(l),c.use(h,l),this},pause:function(){return this.world.pause()},resume:function(){return this.world.resume()},shutdown:function(){this.world.shutdown()},destroy:function(){this.world.destroy()}});d.register("MatterPhysics",p,"matterPhysics"),t.exports=p},function(t,e,i){var n=i(169),s={name:"matter-attractors",version:"0.1.7",for:"matter-js@^0.13.1",silent:!0,install:function(t){t.after("Body.create",function(){s.Body.init(this)}),t.before("Engine.update",function(t){s.Engine.update(t)})},Body:{init:function(t){t.plugin.attractors=t.plugin.attractors||[]}},Engine:{update:function(t){for(var e=t.world,i=n.Composite.allBodies(e),s=0;s<i.length;s+=1){var r=i[s],o=r.plugin.attractors;if(o&&o.length>0)for(var a=s+1;a<i.length;a+=1)for(var h=i[a],l=0;l<o.length;l+=1){var u=o[l],c=u;n.Common.isFunction(u)&&(c=u(r,h)),c&&n.Body.applyForce(h,h.position,c)}}}},Attractors:{gravityConstant:.001,gravity:function(t,e){var i=n.Vector.sub(e.position,t.position),r=n.Vector.magnitudeSquared(i)||1e-4,o=n.Vector.normalise(i),a=-s.Attractors.gravityConstant*(t.mass*e.mass/r),h=n.Vector.mult(o,a);n.Body.applyForce(t,t.position,n.Vector.neg(h)),n.Body.applyForce(e,e.position,h)}}};t.exports=s},function(t,e,i){var n=i(169),s={name:"matter-wrap",version:"0.1.4",for:"matter-js@^0.13.1",silent:!0,install:function(t){t.after("Engine.update",function(){s.Engine.update(this)})},Engine:{update:function(t){for(var e=t.world,i=n.Composite.allBodies(e),r=n.Composite.allComposites(e),o=0;o<i.length;o+=1){var a=i[o];a.plugin.wrap&&s.Body.wrap(a,a.plugin.wrap)}for(o=0;o<r.length;o+=1){var h=r[o];h.plugin.wrap&&s.Composite.wrap(h,h.plugin.wrap)}}},Bounds:{wrap:function(t,e){var i=null,n=null;if(void 0!==e.min.x&&void 0!==e.max.x&&(t.min.x>e.max.x?i=e.min.x-t.max.x:t.max.x<e.min.x&&(i=e.max.x-t.min.x)),void 0!==e.min.y&&void 0!==e.max.y&&(t.min.y>e.max.y?n=e.min.y-t.max.y:t.max.y<e.min.y&&(n=e.max.y-t.min.y)),null!==i||null!==n)return{x:i||0,y:n||0}}},Body:{wrap:function(t,e){var i=s.Bounds.wrap(t.bounds,e);return i&&n.Body.translate(t,i),i}},Composite:{bounds:function(t){for(var e=n.Composite.allBodies(t),i=[],s=0;s<e.length;s+=1){var r=e[s];i.push(r.bounds.min,r.bounds.max)}return n.Bounds.create(i)},wrap:function(t,e){var i=s.Bounds.wrap(s.Composite.bounds(t),e);return i&&n.Composite.translate(t,i),i}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={SceneManager:i(270),ScenePlugin:i(937),Settings:i(273),Systems:i(141)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(95),r=i(11),o=new n({initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),this.settings=t.sys.settings,this.key=t.sys.settings.key,this.manager=t.sys.game.scene},boot:function(){var t=this.systems.events;t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},start:function(t,e){return void 0===t&&(t=this.key),t!==this.key&&(this.settings.status!==s.RUNNING?(this.manager.queueOp("stop",this.key),this.manager.queueOp("start",t)):(this.manager.stop(this.key),this.manager.start(t,e))),this},add:function(t,e,i){return this.manager.add(t,e,i),this},launch:function(t,e){return t&&t!==this.key&&(this.settings.status!==s.RUNNING?this.manager.queueOp("start",t):this.manager.start(t,e)),this},pause:function(t){return void 0===t&&(t=this.key),this.manager.pause(t),this},resume:function(t){return void 0===t&&(t=this.key),this.manager.resume(t),this},sleep:function(t){return void 0===t&&(t=this.key),this.manager.sleep(t),this},wake:function(t){return void 0===t&&(t=this.key),this.manager.wake(t),this},switch:function(t){return t!==this.key&&(this.settings.status!==s.RUNNING?this.manager.queueOp("switch",this.key,t):this.manager.switch(this.key,t)),this},stop:function(t){return void 0===t&&(t=this.key),this.manager.stop(t),this},setActive:function(t){return this.settings.active=t,this},setVisible:function(t){return this.settings.visible=t,this},isSleeping:function(t){return void 0===t&&(t=this.key),this.manager.isSleeping(t)},isActive:function(t){return void 0===t&&(t=this.key),this.manager.isActive(t)},isVisible:function(t){return void 0===t&&(t=this.key),this.manager.isVisible(t)},swapPosition:function(t){return t&&t!==this.key&&this.manager.swapPosition(this.key,t),this},moveUp:function(t){return void 0===t&&(t=this.key),this.manager.moveUp(t),this},moveDown:function(t){return void 0===t&&(t=this.key),this.manager.moveDown(t),this},bringToTop:function(t){return void 0===t&&(t=this.key),this.manager.bringToTop(t),this},sendToBack:function(t){return void 0===t&&(t=this.key),this.manager.sendToBack(t),this},get:function(t){return this.manager.getScene(t)},shutdown:function(){},destroy:function(){}});r.register("ScenePlugin",o,"scenePlugin"),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={SoundManagerCreator:i(274),BaseSound:i(97),BaseSoundManager:i(96),WebAudioSound:i(280),WebAudioSoundManager:i(279),HTML5AudioSound:i(276),HTML5AudioSoundManager:i(275),NoAudioSound:i(278),NoAudioSoundManager:i(277)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={List:i(98),Map:i(127),ProcessQueue:i(354),RTree:i(355),Set:i(59)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Parsers:i(282),FilterMode:i(941),Frame:i(142),Texture:i(283),TextureManager:i(281),TextureSource:i(284)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={LINEAR:0,NEAREST:1};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Components:i(105),Parsers:i(972),Formats:i(22),ImageCollection:i(384),ParseToTilemap:i(176),Tile:i(50),Tilemap:i(388),TilemapCreator:i(989),TilemapFactory:i(990),Tileset:i(109),LayerData:i(86),MapData:i(87),ObjectLayer:i(386),DynamicTilemapLayer:i(389),StaticTilemapLayer:i(390)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(41),r=function(t,e,i,r,o,a,h,l){t<0&&(t=0),e<0&&(e=0),void 0===h&&(h=!0);for(var u=n(t,e,i,r,null,l),c=o-t,d=a-e,f=0;f<u.length;f++){var p=u[f].x+c,v=u[f].y+d;p>=0&&p<l.width&&v>=0&&v<l.height&&l.data[v][p]&&l.data[v][p].copy(u[f])}h&&s(o-1,a-1,i+2,r+2,l)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(107),s=i(108),r=i(17),o=i(377),a=function(t,e,i,a,h,l){void 0===i&&(i={}),Array.isArray(t)||(t=[t]);var u=l.tilemapLayer;void 0===a&&(a=u.scene),void 0===h&&(h=a.cameras.main);var c,d=r(0,0,l.width,l.height,null,l),f=[];for(c=0;c<d.length;c++){var p=d[c];if(-1!==t.indexOf(p.index)){i.x=n(p.x,h,l),i.y=s(p.y,h,l);var v=a.make.sprite(i);f.push(v)}}if("number"==typeof e)for(c=0;c<t.length;c++)o(t[c],e,0,0,l.width,l.height,l);else if(Array.isArray(e))for(c=0;c<t.length;c++)o(t[c],e[c],0,0,l.width,l.height,l);return f};t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=[]),i.length=0;for(var n=t.tilemapLayer,s=t.data,r=t.width,o=t.height,a=e.scrollX*n.scrollFactorX-n.x,h=e.scrollY*n.scrollFactorY-n.y,l=n.scaleX,u=n.scaleY,c=t.tileWidth*l,d=t.tileHeight*u,f=0;f<o;++f)for(var p=0;p<r;++p){var v=s[f][p];if(null!==v&&-1!==v.index){var g=v.pixelX*l-a,y=v.pixelY*u-h,m=e.width+c,x=e.height+d;v.visible&&g>-c&&y>-d&&g<m&&y<x&&i.push(v)}}return i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(41),r=i(49),o=function(t,e,i,o,a,h,l){void 0===h&&(h=!0);for(var u=-1!==l.collideIndexes.indexOf(t),c=n(e,i,o,a,null,l),d=0;d<c.length;d++)c[d].index=t,r(c[d],u);h&&s(e-1,i-1,o+2,a+2,l)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=function(t,e,i,s,r,o,a,h){return n(i,s,r,o,a,h).filter(t,e)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===e&&(e=0),void 0===i&&(i=!1);var s,r,o,a=0;if(i){for(r=n.height-1;r>=0;r--)for(s=n.width-1;s>=0;s--)if((o=n.data[r][s])&&o.index===t){if(a===e)return o;a+=1}}else for(r=0;r<n.height;r++)for(s=0;s<n.width;s++)if((o=n.data[r][s])&&o.index===t){if(a===e)return o;a+=1}return null};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=function(t,e,i,s,r,o,a,h){return n(i,s,r,o,a,h).find(t,e)||null};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=function(t,e,i,s,r,o,a,h){n(i,s,r,o,a,h).forEach(t,e)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(106),s=i(44),r=i(45),o=function(t,e,i,o,a){var h=s(t,!0,o,a),l=r(e,!0,o,a);return n(h,l,i,a)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(312),s=i(17),r=i(313),o=i(3),a=i(107),h=i(108),l=i(44),u=i(45),c=function(t,e){return r.RectangleToTriangle(e,t)},d=function(t,e,i,d){if(void 0===t)return[];var f=o;t instanceof n.Circle?f=r.CircleToRectangle:t instanceof n.Rectangle?f=r.RectangleToRectangle:t instanceof n.Triangle?f=c:t instanceof n.Line&&(f=r.LineToRectangle);var p=l(t.left,!0,i,d),v=u(t.top,!0,i,d),g=Math.ceil(l(t.right,!1,i,d)),y=Math.ceil(u(t.bottom,!1,i,d)),m=Math.max(g-p,1),x=Math.max(y-v,1),b=s(p,v,m,x,e,d),w=d.tileWidth,T=d.tileHeight;d.tilemapLayer&&(w*=d.tilemapLayer.scaleX,T*=d.tilemapLayer.scaleY);for(var S=[],A=new n.Rectangle(0,0,w,T),C=0;C<b.length;C++){var M=b[C];A.x=a(M.x,i,d),A.y=h(M.y,i,d),f(t,A)&&S.push(M)}return S};t.exports=d},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(44),r=i(45),o=function(t,e,i,o,a,h,l){var u=s(t,!0,h,l),c=r(e,!0,h,l),d=Math.ceil(s(t+i,!1,h,l)),f=Math.ceil(r(e+o,!1,h,l));return n(u,c,d-u,f-c,a,l)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(378),s=i(44),r=i(45),o=function(t,e,i,o){var a=s(t,!0,i,o),h=r(e,!0,i,o);return n(a,h,o)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(173),s=i(44),r=i(45),o=function(t,e,i,o,a,h){var l=s(e,!0,a,h),u=r(i,!0,a,h);return n(t,l,u,o,h)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(41),s=i(173),r=function(t,e,i,r,o){if(!Array.isArray(t))return null;void 0===r&&(r=!0),Array.isArray(t[0])||(t=[t]);for(var a=t.length,h=t[0].length,l=0;l<a;l++)for(var u=0;u<h;u++){var c=t[l][u];s(c,e+u,i+l,!1,o)}r&&n(e-1,i-1,h+2,a+2,o)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(150),r=function(t,e,i,r,o,a){var h,l=n(t,e,i,r,null,a);if(void 0===o)for(o=[],h=0;h<l.length;h++)-1===o.indexOf(l[h].index)&&o.push(l[h].index);for(h=0;h<l.length;h++)l[h].index=s(o)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(379),s=i(44),r=i(45),o=function(t,e,i,o,a,h){var l=s(t,!0,a,h),u=r(e,!0,a,h);return n(l,u,i,o,h)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(112),r=function(t,e,i){void 0===e&&(e={});for(var r=void 0!==e.tileColor?e.tileColor:new s(105,210,231,150),o=void 0!==e.collidingTileColor?e.collidingTileColor:new s(243,134,48,200),a=void 0!==e.faceColor?e.faceColor:new s(40,39,37,150),h=n(0,0,i.width,i.height,null,i),l=0;l<h.length;l++){var u=h[l],c=u.width,d=u.height,f=u.pixelX,p=u.pixelY,v=u.collides?o:r;null!==v&&(t.fillStyle(v.color,v.alpha/255),t.fillRect(f,p,c,d)),f+=1,p+=1,c-=2,d-=2,null!==a&&(t.lineStyle(1,a.color,a.alpha/255),u.faceTop&&t.lineBetween(f,p,f+c,p),u.faceRight&&t.lineBetween(f+c,p,f+c,p+d),u.faceBottom&&t.lineBetween(f,p+d,f+c,p+d),u.faceLeft&&t.lineBetween(f,p,f,p+d))}};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(49),s=i(41),r=i(174),o=function(t,e,i,o){void 0===e&&(e=!0),void 0===i&&(i=!0),Array.isArray(t)||(t=[t]);for(var a=0;a<t.length;a++)r(t[a],e,o);for(var h=0;h<o.height;h++)for(var l=0;l<o.width;l++){var u=o.data[h][l];u&&-1!==t.indexOf(u.index)&&n(u,e)}i&&s(0,0,o.width,o.height,o)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(49),s=i(41),r=i(174),o=function(t,e,i,o,a){if(void 0===i&&(i=!0),void 0===o&&(o=!0),!(t>e)){for(var h=t;h<=e;h++)r(h,i,a);for(var l=0;l<a.height;l++)for(var u=0;u<a.width;u++){var c=a.data[l][u];c&&c.index>=t&&c.index<=e&&n(c,i)}o&&s(0,0,a.width,a.height,a)}};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(49),s=i(41),r=i(174),o=function(t,e,i,o){void 0===e&&(e=!0),void 0===i&&(i=!0),Array.isArray(t)||(t=[t]);for(var a=0;a<o.height;a++)for(var h=0;h<o.width;h++){var l=o.data[a][h];l&&-1===t.indexOf(l.index)&&(n(l,e),r(l.index,e,o))}i&&s(0,0,o.width,o.height,o)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(49),s=i(41),r=i(62),o=function(t,e,i,o){void 0===e&&(e=!0),void 0===i&&(i=!0);for(var a=0;a<o.height;a++)for(var h=0;h<o.width;h++){var l=o.data[a][h];if(l)for(var u in t)if(r(l.properties,u)){var c=t[u];Array.isArray(c)||(c=[c]);for(var d=0;d<c.length;d++)l.properties[u]===c[d]&&n(l,e)}}i&&s(0,0,o.width,o.height,o)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(49),s=i(41),r=function(t,e,i){void 0===t&&(t=!0),void 0===e&&(e=!0);for(var r=0;r<i.height;r++)for(var o=0;o<i.width;o++){var a=i.data[r][o];if(a){var h=a.getCollisionGroup();h&&h.objects&&h.objects.length>0&&n(a,t)}}e&&s(0,0,i.width,i.height,i)};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){if("number"==typeof t)n.callbacks[t]=null!==e?{callback:e,callbackContext:i}:void 0;else for(var s=0,r=t.length;s<r;s++)n.callbacks[t[s]]=null!==e?{callback:e,callbackContext:i}:void 0};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=function(t,e,i,s,r,o,a){for(var h=n(t,e,i,s,null,a),l=0;l<h.length;l++)h[l].setCollisionCallback(r,o)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(92),r=function(t,e,i,r,o){var a=n(t,e,i,r,null,o),h=a.map(function(t){return t.index});s(h);for(var l=0;l<a.length;l++)a[l].index=h[l]};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=function(t,e,i,s,r,o,a){for(var h=n(i,s,r,o,null,a),l=0;l<h.length;l++)h[l]&&(h[l].index===t?h[l].index=e:h[l].index===e&&(h[l].index=t))};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(107),s=i(108),r=i(6),o=function(t,e,i,o,a){return void 0===i&&(i=new r(0,0)),i.x=n(t,o,a),i.y=s(e,o,a),i};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=function(t,e,i,s,r,o){if(void 0!==r){var a,h=n(t,e,i,s,null,o),l=0;for(a=0;a<r.length;a++)l+=r[a].weight;if(!(l<=0))for(a=0;a<h.length;a++){for(var u=Math.random()*l,c=0,d=-1,f=0;f<r.length;f++)if(c+=r[f].weight,u<=c){var p=r[f].index;d=Array.isArray(p)?p[Math.floor(Math.random()*p.length)]:p;break}h[a].index=d}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(44),s=i(45),r=i(6),o=function(t,e,i,o,a,h){return void 0===o&&(o=new r(0,0)),o.x=n(t,i,a,h),o.y=s(e,i,a,h),o};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Parse:i(380),Parse2DArray:i(175),ParseCSV:i(381),Impact:i(387),Tiled:i(382)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(974),s=i(1),r=i(86),o=i(383),a=i(50),h=function(t,e){for(var i=[],h=0;h<t.layers.length;h++)if("tilelayer"===t.layers[h].type){var l=t.layers[h];if(l.compression)console.warn("TilemapParser.parseTiledJSON - Layer compression is unsupported, skipping layer '"+l.name+"'");else{l.encoding&&"base64"===l.encoding&&(l.data=n(l.data),delete l.encoding);for(var u=new r({name:l.name,x:s(l,"offsetx",0)+l.x,y:s(l,"offsety",0)+l.y,width:l.width,height:l.height,tileWidth:t.tilewidth,tileHeight:t.tileheight,alpha:l.opacity,visible:l.visible,properties:s(l,"properties",{})}),c=0,d=[],f=[],p=0,v=l.data.length;p<v;p++){var g=o(l.data[p]);if(g.gid>0){var y=new a(u,g.gid,c,f.length,t.tilewidth,t.tileheight);y.rotation=g.rotation,y.flipX=g.flipped,d.push(y)}else{var m=e?null:new a(u,-1,c,f.length,t.tilewidth,t.tileheight);d.push(m)}c++,c===l.width&&(f.push(d),c=0,d=[])}u.data=f,i.push(u)}}return i};t.exports=h},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){for(var e=window.atob(t),i=e.length,n=new Array(i),s=0;s<i;s+=4)n[s/4]=(e.charCodeAt(s)|e.charCodeAt(s+1)<<8|e.charCodeAt(s+2)<<16|e.charCodeAt(s+3)<<24)>>>0;return n};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=function(t){for(var e=[],i=0;i<t.layers.length;i++)if("imagelayer"===t.layers[i].type){var s=t.layers[i];e.push({name:s.name,image:s.image,x:n(s,"offsetx",0)+s.x,y:n(s,"offsety",0)+s.y,alpha:s.opacity,visible:s.visible,properties:n(s,"properties",{})})}return e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(109),s=i(384),r=i(385),o=function(t){for(var e,i=[],o=[],a=null,h=0;h<t.tilesets.length;h++){var l=t.tilesets[h];if(l.source)console.warn("Phaser can't load external tilesets. Use the Embed Tileset button and then export the map again.");else if(l.image){var u=new n(l.name,l.firstgid,l.tilewidth,l.tileheight,l.margin,l.spacing);if(l.tileproperties&&(u.tileProperties=l.tileproperties),l.tiles){u.tileData=l.tiles;for(e in u.tileData){var c=u.tileData[e].objectgroup;if(c&&c.objects){var d=c.objects.map(function(t){return r(t)});u.tileData[e].objectgroup.objects=d}}}u.updateTileData(l.imagewidth,l.imageheight),i.push(u)}else{var f=new s(l.name,l.firstgid,l.tilewidth,l.tileheight,l.margin,l.spacing,l.properties);for(e in l.tiles){var p=l.tiles[e].image,v=l.firstgid+parseInt(e,10);f.addImage(v,p)}o.push(f)}a&&(a.lastgid=l.firstgid-1),a=l}return{tilesets:i,imageCollections:o}};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(62),s=function(t,e){for(var i={},s=0;s<e.length;s++){var r=e[s];n(t,r)&&(i[r]=t[r])}return i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=i(385),r=i(386),o=function(t){for(var e=[],i=0;i<t.layers.length;i++)if("objectgroup"===t.layers[i].type){for(var o=t.layers[i],a=n(o,"offsetx",0),h=n(o,"offsety",0),l=[],u=0;u<o.objects.length;u++){var c=s(o.objects[u],a,h);l.push(c)}var d=new r(o);d.objects=l,e.push(d)}return e};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){for(var e=[],i=0;i<t.tilesets.length;i++)for(var n=t.tilesets[i],s=n.tileMargin,r=n.tileMargin,o=0,a=0,h=0,l=n.firstgid;l<n.firstgid+n.total&&(e[l]=[s,r,i],s+=n.tileWidth+n.tileSpacing,++o!==n.total)&&(++a!==n.columns||(s=n.tileMargin,r+=n.tileHeight+n.tileSpacing,a=0,++h!==n.rows));l++);return e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(25),s=function(t){for(var e,i,s,r,o,a=0;a<t.layers.length;a++){e=t.layers[a],r=null;for(var h=0;h<e.data.length;h++){o=e.data[h];for(var l=0;l<o.length;l++)null===(i=o[l])||i.index<0||(s=t.tiles[i.index][2],r=t.tilesets[s],i.width=r.tileWidth,i.height=r.tileHeight,r.tileProperties&&r.tileProperties[i.index-r.firstgid]&&(i.properties=n(i.properties,r.tileProperties[i.index-r.firstgid])))}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(86),s=i(50),r=function(t,e){for(var i=[],r=0;r<t.layer.length;r++){for(var o=t.layer[r],a=new n({name:o.name,width:o.width,height:o.height,tileWidth:o.tilesize,tileHeight:o.tilesize,visible:1===o.visible}),h=[],l=[],u=0;u<o.data.length;u++){for(var c=0;c<o.data[u].length;c++){var d,f=o.data[u][c]-1;d=f>-1?new s(a,f,c,u,o.tilesize,o.tilesize):e?null:new s(a,-1,c,u,o.tilesize,o.tilesize),h.push(d)}l.push(h),h=[]}a.data=l,i.push(a)}return i};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(109),s=function(t){for(var e=[],i=[],s=0;s<t.layer.length;s++){var r=t.layer[s],o=r.tilesetName;""!==o&&-1===i.indexOf(o)&&(i.push(o),e.push(new n(o,0,r.tilesize,r.tilesize,0,0)))}return e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(984),s=i(985),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||(e.cull(s),this.pipeline.batchDynamicTilemapLayer(e,s))};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id)){e.cull(s);var r=e.culledTiles,o=r.length,a=e.tileset.image.getSourceImage(),h=this.tileset,l=e.x-s.scrollX*e.scrollFactorX,u=e.y-s.scrollY*e.scrollFactorY,c=t.gameContext;c.save(),c.translate(l,u),c.rotate(e.rotation),c.scale(e.scaleX,e.scaleY),c.scale(e.flipX?-1:1,e.flipY?-1:1);for(var d=0;d<o;++d){var f=r[d],p=h.getTileTextureCoordinates(f.index);if(null!==p){var v=f.width/2,g=f.height/2;c.save(),c.translate(f.pixelX+v,f.pixelY+g),0!==f.rotation&&c.rotate(f.rotation),(f.flipX||f.flipY)&&c.scale(f.flipX?-1:1,f.flipY?-1:1),c.globalAlpha=e.alpha*f.alpha,c.drawImage(a,p.x,p.y,f.width,f.height,-v,-g,f.width,f.height),c.restore()}}c.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(987),s=i(988),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||(e.upload(s),this.pipeline.drawStaticTilemapLayer(e,s))};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id)){e.cull(s);var r=e.culledTiles,o=this.tileset,a=t.gameContext,h=r.length,l=o.image.getSourceImage(),u=e.x-s.scrollX*e.scrollFactorX,c=e.y-s.scrollY*e.scrollFactorY;a.save(),a.translate(u,c),a.rotate(e.rotation),a.scale(e.scaleX,e.scaleY),a.scale(e.flipX?-1:1,e.flipY?-1:1),a.globalAlpha=e.alpha;for(var d=0;d<h;++d){var f=r[d],p=o.getTileTextureCoordinates(f.index);null!==p&&a.drawImage(l,p.x,p.y,f.width,f.height,f.pixelX,f.pixelY,f.width,f.height)}a.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(14),s=i(176);n.register("tilemap",function(t){var e=void 0!==t?t:{};return s(this.scene,e.key,e.tileWidth,e.tileHeight,e.width,e.height,e.data,e.insertNull)})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=i(176);n.register("tilemap",function(t,e,i,n,r,o,a){return null===t&&(t=void 0),null===e&&(e=void 0),null===i&&(i=void 0),null===n&&(n=void 0),null===r&&(r=void 0),s(this.scene,t,e,i,n,r,o,a)})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Clock:i(992),TimerEvent:i(391)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(11),r=i(391),o=new n({initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),this.now=Date.now(),this.timeScale=1,this.paused=!1,this._active=[],this._pendingInsertion=[],this._pendingRemoval=[]},boot:function(){var t=this.systems.events;t.on("preupdate",this.preUpdate,this),t.on("update",this.update,this),t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},addEvent:function(t){var e=new r(t);return this._pendingInsertion.push(e),e},delayedCall:function(t,e,i,n){return this.addEvent({delay:t,callback:e,args:i,callbackScope:n})},clearPendingEvents:function(){return this._pendingInsertion=[],this},removeAllEvents:function(){return this._pendingRemoval=this._pendingRemoval.concat(this._active),this},preUpdate:function(){var t=this._pendingRemoval.length,e=this._pendingInsertion.length;if(0!==t||0!==e){var i,n;for(i=0;i<t;i++){n=this._pendingRemoval[i];var s=this._active.indexOf(n);s>-1&&this._active.splice(s,1),n.destroy()}for(i=0;i<e;i++)n=this._pendingInsertion[i],this._active.push(n);this._pendingRemoval.length=0,this._pendingInsertion.length=0}},update:function(t,e){if(this.now=t,!this.paused){e*=this.timeScale;for(var i=0;i<this._active.length;i++){var n=this._active[i];if(!n.paused&&(n.elapsed+=e*n.timeScale,n.elapsed>=n.delay)){var s=n.elapsed-n.delay;n.elapsed=n.delay,!n.hasDispatched&&n.callback&&(n.hasDispatched=!0,n.callback.apply(n.callbackScope,n.args)),n.repeatCount>0?(n.repeatCount--,n.elapsed=s,n.hasDispatched=!1):this._pendingRemoval.push(n)}}}},shutdown:function(){var t;for(t=0;t<this._pendingInsertion.length;t++)this._pendingInsertion[t].destroy();for(t=0;t<this._active.length;t++)this._active[t].destroy();for(t=0;t<this._pendingRemoval.length;t++)this._pendingRemoval[t].destroy();this._active.length=0,this._pendingRemoval.length=0,this._pendingInsertion.length=0},destroy:function(){this.shutdown(),this.scene=void 0}});s.register("Clock",o,"time"),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Builders:i(994),TweenManager:i(996),Tween:i(180),TweenData:i(181),Timeline:i(396)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={GetBoolean:i(80),GetEaseFunction:i(79),GetNewValue:i(110),GetProps:i(392),GetTargets:i(177),GetTweens:i(393),GetValueOp:i(178),NumberTweenBuilder:i(394),TimelineBuilder:i(395),TweenBuilder:i(111)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports=["callbackScope","completeDelay","delay","duration","ease","easeParams","flipX","flipY","hold","loop","loopDelay","offset","onComplete","onCompleteParams","onCompleteScope","onLoop","onLoopParams","onLoopScope","onRepeat","onRepeatParams","onRepeatScope","onStart","onStartParams","onStartScope","onUpdate","onUpdateParams","onUpdateScope","onYoyo","onYoyoParams","onYoyoScope","paused","props","repeat","repeatDelay","targets","useFrames","yoyo"]},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(394),r=i(11),o=i(395),a=i(99),h=i(111),l=new n({initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),this.timeScale=1,this._add=[],this._pending=[],this._active=[],this._destroy=[],this._toProcess=0},boot:function(){var t=this.systems.events;t.on("preupdate",this.preUpdate,this),t.on("update",this.update,this),t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this),this.timeScale=1},createTimeline:function(t){return o(this,t)},timeline:function(t){var e=o(this,t);return e.paused||(this._add.push(e),this._toProcess++),e},create:function(t){return h(this,t)},add:function(t){var e=h(this,t);return this._add.push(e),this._toProcess++,e},existing:function(t){return this._add.push(t),this._toProcess++,this},addCounter:function(t){var e=s(this,t);return this._add.push(e),this._toProcess++,e},preUpdate:function(){if(0!==this._toProcess){var t,e,i=this._destroy,n=this._active;for(t=0;t<i.length;t++){e=i[t];var s=n.indexOf(e);-1!==s&&(e.state=a.REMOVED,n.splice(s,1))}for(i.length=0,i=this._add,t=0;t<i.length;t++)e=i[t],e.init()?(e.play(),this._active.push(e)):this._pending.push(e);i.length=0,this._toProcess=0}},update:function(t,e){var i,n=this._active;e*=this.timeScale;for(var s=0;s<n.length;s++)i=n[s],i.update(t,e)&&(this._destroy.push(i),this._toProcess++)},makeActive:function(t){if(-1===this._add.indexOf(t)&&-1===this._active.indexOf(t)){var e=this._pending.indexOf(t);return-1!==e&&this._pending.splice(e,1),this._add.push(t),t.state=a.PENDING_ADD,this._toProcess++,this}},each:function(t,e){for(var i=[null],n=1;n<arguments.length;n++)i.push(arguments[n]);for(var s in this.list)i[0]=this.list[s],t.apply(e,i)},getAllTweens:function(){for(var t=this._active,e=[],i=0;i<t.length;i++)e.push(t[i]);return e},getGlobalTimeScale:function(){return this.timeScale},getTweensOf:function(t){var e,i,n=this._active,s=[];if(Array.isArray(t))for(i=0;i<n.length;i++){e=n[i];for(;0<t.length;i++)e.hasTarget(t[0])&&s.push(e)}else for(i=0;i<n.length;i++)e=n[i],e.hasTarget(t)&&s.push(e);return s},isTweening:function(t){for(var e,i=this._active,n=0;n<i.length;n++)if(e=i[n],e.hasTarget(t)&&e.isPlaying())return!0;return!1},killAll:function(){for(var t=this.getAllTweens(),e=0;e<t.length;e++)t[e].stop();return this},killTweensOf:function(t){for(var e=this.getTweensOf(t),i=0;i<e.length;i++)e[i].stop();return this},pauseAll:function(){for(var t=this._active,e=0;e<t.length;e++)t[e].pause();return this},resumeAll:function(){for(var t=this._active,e=0;e<t.length;e++)t[e].resume();return this},setGlobalTimeScale:function(t){return this.timeScale=t,this},shutdown:function(){this.killAll(),this._add=[],this._pending=[],this._active=[],this._destroy=[],this._toProcess=0},destroy:function(){this.shutdown()}});r.register("TweenManager",l,"tweens"),t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Array:i(998),Objects:i(1002),String:i(1006)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={FindClosestInSorted:i(999),GetRandomElement:i(150),NumberArray:i(337),NumberArrayStep:i(1e3),QuickSelect:i(356),Range:i(293),RemoveRandomElement:i(1001),RotateLeft:i(221),RotateRight:i(222),Shuffle:i(92),SpliceOne:i(397)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){if(!e.length)return NaN;if(1===e.length||t<e[0])return e[0];for(var i=1;e[i]<t;)i++;var n=e[i-1],s=i<e.length?e[i]:Number.POSITIVE_INFINITY;return s-t<=t-n?s:n};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(343),s=function(t,e,i){void 0===t&&(t=0),void 0===e&&(e=null),void 0===i&&(i=1),null===e&&(e=t,t=0);for(var s=[],r=Math.max(n((e-t)/(i||1)),0),o=0;o<r;o++)s.push(t),t+=i;return s};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(397),s=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=t.length);var s=e+Math.floor(Math.random()*i);return n(t,s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Clone:i(60),Extend:i(25),GetAdvancedValue:i(10),GetFastValue:i(1),GetMinMaxValue:i(1003),GetValue:i(4),HasAll:i(1004),HasAny:i(307),HasValue:i(62),IsPlainObject:i(199),Merge:i(81),MergeRight:i(1005)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(4),s=i(56),r=function(t,e,i,r,o){void 0===o&&(o=i);var a=n(t,e,o);return s(a,i,r)};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=0;i<e.length;i++)if(!t.hasOwnProperty(e[i]))return!1;return!0};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(60),s=function(t,e){var i=n(t);for(var s in e)i.hasOwnProperty(s)&&(i[s]=e[s]);return i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Format:i(1007),Pad:i(229),Reverse:i(1008),UppercaseFirst:i(272)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.replace(/%([0-9]+)/g,function(t,i){return e[Number(i)-1]}),t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.split("").reverse().join("")};t.exports=i},function(t,e,i){"use strict";function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},n.apply(this,arguments)}function s(){var t=n({},o.default,{scene:a.PlayScene}),e=new r.Game(t);window.exampleGame=e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(197),o=function(t){return t&&t.__esModule?t:{default:t}}(i(196)),a=i(183),h=s;e.default=h}]);